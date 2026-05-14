# RedactAI MVP — Today Build Plan

## Context & New Decisions

| Decision | Old | New |
|----------|-----|-----|
| PDF 处理 | PyMuPDF (Python) | **pdf-lib** (纯 JS) |
| 部署 | Vercel + Railway | **Cloudflare Pages** |
| 数据库 | Supabase | **Cloudflare D1** |
| 认证 | Supabase Auth | **Clerk**（回到 PRD） |
| 支付 | Stripe | **Creem** |
| 范围 | 10天 Phase 1 | **今天完成**：上传→检测→审核→下载 |

**重大变化：** 不用 Python 了。文本提取用 pdfjs-dist 在浏览器端做（`getTextContent()` 拿文本+位置），脱敏用 pdf-lib 在浏览器端做。后端只有一个 Cloudflare Edge Function 代理 Claude API 调用。

**pdf-lib 已知限制：** `drawRectangle()` 是视觉遮盖，底层文字仍可提取。真实永久脱敏需要 PyMuPDF。今天 MVP 先接受这个限制，后续替换。

---

## Architecture (All-JS)

```
Browser (Next.js + pdfjs-dist + pdf-lib)
  │
  │  POST /api/detect  {texts_by_page, instruction}
  ▼
Next.js API Route (Cloudflare Pages Edge Function)
  │
  │  fetch Anthropic API (Claude Sonnet 4)
  ▼
{detections: [{text, pii_type, confidence}]}
```

**全流程在浏览器端：**
1. 用户上传 PDF → ArrayBuffer 暂存内存
2. pdfjs-dist 渲染页面 + `getTextContent()` 提取文本和位置
3. 文本发送给 Edge Function → Claude 检测 PII
4. 浏览器端子串匹配 Claude 返回的 text → 拿到 viewport 坐标
5. 标注覆盖层渲染彩色框
6. 用户审核确认
7. pdf-lib 加载 ArrayBuffer → 画黑矩形 → 保存 → 下载

---

## Project Structure

```
redact-ai/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout + privacy banner + Clerk provider
│   │   ├── page.tsx                # Home: dropzone + instruction input
│   │   ├── globals.css             # Tailwind + annotation color vars
│   │   ├── api/
│   │   │   └── detect/
│   │   │       └── route.ts        # Edge: calls Claude Sonnet 4
│   │   └── review/
│   │       └── page.tsx            # PDF viewer + annotation panel + download
│   ├── components/
│   │   ├── ui/                     # shadcn/ui (button, card, input, textarea, progress, badge, tooltip, checkbox, scroll-area)
│   │   ├── dropzone.tsx            # Drag-drop PDF, 50MB limit
│   │   ├── instruction-input.tsx   # NL instruction + rotating placeholders
│   │   ├── step-indicator.tsx      # Extracting → Analyzing → Ready
│   │   ├── pdf-viewer.tsx          # pdfjs-dist canvas + zoom + page nav
│   │   ├── annotation-overlay.tsx  # Color-coded div boxes on canvas
│   │   ├── annotation-panel.tsx    # Right side: list + filter + bulk actions
│   │   ├── apply-bar.tsx           # Bottom: "X items flagged" + Apply button
│   │   ├── download-bar.tsx        # Download button + 60s countdown timer
│   │   └── privacy-banner.tsx      # "Files never stored, deleted after download"
│   ├── lib/
│   │   ├── types.ts                # PII type, DetectionItem, PipelineState
│   │   ├── store.ts                # Zustand + sessionStorage
│   │   ├── coordinates.ts          # pdfjs-viewport ↔ pdf-lib-PDF-points transforms
│   │   ├── text-extractor.ts       # pdfjs getTextContent → TextItem[]
│   │   └── redactor.ts            # pdf-lib: load, draw rects, save
│   └── hooks/
│       ├── use-pipeline.ts         # Orchestrate: extract → detect → ready
│       └── use-pdf-viewer.ts       # pdfjs render lifecycle + zoom + page
├── public/
│   └── pdf.worker.min.mjs         # pdfjs worker (copied from node_modules)
├── tailwind.config.ts
├── next.config.js                 # output: export or edge runtime
├── wrangler.toml                  # Cloudflare Pages config
└── package.json
```

---

## Coordinate Systems

### pdfjs `getTextContent()` → Viewport coords (for rendering overlay)
- pdfjs text items have `transform: [a, b, c, d, e, f]` where (e, f) = bottom-left corner of text in PDF user space
- **Do NOT use `e` and `f` directly as CSS positions** — they are in PDF internal coordinate space, not viewport pixels
- Use `viewport.convertToViewportPoint(x, y)` to get CSS pixel coordinates
- The item's `height` is provided by the text item's computed height
- For the overlay box top position: `top = viewportY - itemHeight` (since convertToViewportPoint returns bottom-left)

```ts
// Correct approach: use viewport.convertToViewportPoint()
function getTextItemBounds(
  item: TextItem,
  viewport: PageViewport
): ViewportBBox {
  // item.transform[4] = x, item.transform[5] = y in PDF user space (bottom-left of text)
  const pdfX = item.transform[4];
  const pdfY = item.transform[5];
  // item.height comes from getTextContent() output
  const itemHeight = item.height || 12;

  // Convert to viewport (CSS pixel) coordinates
  const [vpX, vpY] = viewport.convertToViewportPoint(pdfX, pdfY);
  // vpY is the BOTTOM of the text box; subtract height to get TOP
  const top = vpY - (itemHeight * viewport.scale);

  return {
    x: vpX,
    y: top,
    width: item.width * viewport.scale,
    height: itemHeight * viewport.scale,
  };
}
```

### Viewport coords → pdf-lib PDF points (for redaction)
- pdf-lib: origin bottom-left, unit = PDF points (1/72 inch)
- Inverse of the above: divide by scale, flip Y
- `pdf_point_x = viewport_x / scale`
- `pdf_point_y = page_height - (viewport_y / scale)`
- page_height comes from `page.getSize().height` in pdf-lib

```ts
// viewport → pdf-lib PDF points (for applying redactions)
function viewportToPdfLib(bbox: ViewportBBox, scale: number, pageHeight: number) {
  return {
    x: bbox.x / scale,
    y: pageHeight - ((bbox.y + bbox.height) / scale),
    width: bbox.width / scale,
    height: bbox.height / scale,
  };
}
```

---

## Text Extraction (Browser, pdfjs-dist)

pdfjs.getTextContent() returns items like:
```ts
{
  str: "John Smith",
  transform: [10, 0, 0, 10, 72, 680],  // [a,b,c,d,e,f], e=x, f=y in viewport px
  width: 85,
  height: 12,
  fontName: "TimesNewRoman"
}
```

We collect these per page, send text strings to Claude, then match detected PII strings back to the items to get coordinates.

### Substring Matching with Multiple Occurrences

A PII string like "John Smith" may appear multiple times in the document — on different pages, or multiple times on the same page. **Behavior: annotate ALL occurrences.** The detection result contains multiple TextItem matches under one detection group.

```ts
interface DetectionItem {
  id: string;
  text: string;           // "John Smith"
  piiType: PiiType;
  confidence: number;
  occurrences: TextItemMatch[];  // ALL places where this text appears
}

interface TextItemMatch {
  pageNumber: number;
  viewportBbox: ViewportBBox;  // computed via convertToViewportPoint
  textItemIndex: number;
}
```

### Annotation Panel Grouping

In the right-side panel, multi-occurrence detections are grouped:
- Single occurrence: displays normally — "John Smith"
- Multiple occurrences: displays with count — **"John Smith (3处)"**
- Expanding the group shows each occurrence: "Page 1", "Page 3, bottom", "Page 5, top"
- Checkbox toggle applies to ALL occurrences of that text at once (batch confirm/reject)
- Clicking an individual occurrence in the expanded view scrolls to that annotation on the PDF

---

## Claude API Prompt (via Next.js Edge Route)

### System Prompt
```
You are a PII detection engine for document redaction.
Detect these categories: name, phone, email, ssn, dob, address, financial_account, custom.
Rules:
- Only flag true PII. Do NOT flag: company names, court names, case numbers, filing dates, job titles.
- Only flag a date as DOB if explicitly labeled "date of birth" or "DOB".
- Be conservative: missing a PII item is better than false-flagging non-sensitive text.
- Return exact text as it appears — do not normalize.
```

### User Message
Document text is sent structured by page with page markers. If user provided an NL instruction, it's prepended.

### Response Format
Tool use (`output_pii_detections`):
```json
{
  "detections": [
    {"text": "John Smith", "pii_type": "name", "confidence": 0.96},
    {"text": "123 Main St, Springfield, IL 62701", "pii_type": "address", "confidence": 0.92}
  ]
}
```

---

## Build Steps (Today, ~8 hours)

### Step 1: Project scaffold (30 min)
- `npx create-next-app@latest . --typescript --tailwind --app --src-dir`
- `npx shadcn-ui@latest init`, add components
- `npm install pdfjs-dist pdf-lib zustand react-dropzone`
- Copy `pdf.worker.min.mjs` to public/
- `npm install -D @cloudflare/next-on-pages`
- Create `wrangler.toml`

### Step 2: Types + Store (20 min)
- `src/lib/types.ts`: PiiType, TextItem, TextItemMatch, DetectionItem, PipelineState
- `src/lib/store.ts`: Zustand store
  - `fileBuffer: ArrayBuffer | null` — **只存内存 state**，不 persist（sessionStorage 有 5MB 限制）
  - `persist` middleware 只作用于 `detections`、`pipelineState`、`instruction` 等元数据字段
  - `partialize` 配置显式排除 `fileBuffer`

### Step 3: Edge Function /api/detect (30 min)
- `src/app/api/detect/route.ts`
- **用原生 `fetch` 调 Anthropic API，不用 `@anthropic-ai/sdk`** — SDK 依赖 Node.js 原生模块，Cloudflare Edge runtime 会直接报错
- `export const runtime = 'edge';`
- `fetch('https://api.anthropic.com/v1/messages', { headers: { 'x-api-key': ..., 'anthropic-version': '2023-06-01' }, body: JSON.stringify({ model: 'claude-sonnet-4-20250514', ... }) })`

### Step 4: Home page — Upload (45 min)
- `src/components/dropzone.tsx`
- `src/components/instruction-input.tsx`
- `src/app/page.tsx` — landing layout with upload + instruction

### Step 5: Text extraction (1 hr)
- `src/lib/text-extractor.ts` — pdfjs.getTextContent() per page
  - **必须在文件顶部初始化：** `pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'`（pdfjs 不会自动找 worker 路径，否则运行时 throw error）
  - `getTextContent()` + `viewport.convertToViewportPoint()` 获取文本和正确 viewport 坐标
  - 全量子串匹配：同一文本出现多处 → 全部标注（"John Smith (3处)"）
- `src/hooks/use-pipeline.ts` — orchestrates: load PDF → extract → call detect → store results
- `src/components/step-indicator.tsx`

### Step 6: PDF viewer + annotation overlay (2 hrs) ⚠️ hardest part
- `src/hooks/use-pdf-viewer.ts`
- `src/components/pdf-viewer.tsx`
- `src/components/annotation-overlay.tsx`
- `src/lib/coordinates.ts`
- Substring matching: Claude text → TextItem positions
- Verify boxes align with text

### Step 7: Annotation panel (1 hr)
- `src/components/annotation-panel.tsx` — right-side list
- Filter by type, toggle keep/reject per item
- Sync with overlay (click box ↔ toggle item)

### Step 8: Apply redaction + download (1 hr)
- `src/lib/redactor.ts` — pdf-lib load, draw rects, save
- `src/components/apply-bar.tsx` — "X items flagged" + Apply button
- `src/components/download-bar.tsx` — download + 60s timer
- **下载前免责提示：** 点击下载按钮时先弹确认框：`"⚠️ Redactions are visual overlays. Text may still be extractable in this MVP version."` 用户确认后才触发下载

### Step 9: Review page assembly + end-to-end (1 hr)
- `src/app/review/page.tsx` — 65/35 layout
- Wire full flow: upload → process → review → download
- Test with real PDFs containing PII

### Step 10: Deploy to Cloudflare Pages (30 min)
- Configure `wrangler.toml`
- Set `ANTHROPIC_API_KEY` as secret
- `npx @cloudflare/next-on-pages` build + deploy

---

## What We Skip Today (out of scope)

- OCR (scanned PDFs)
- Auth (Clerk) — only free tier public flow
- Database (D1)
- Payments (Creem)
- Manual draw-to-select redaction zones
- Keyword search
- Email notifications (Resend)
- Dashboard, pricing page, landing page polish
- Multi-file upload (single PDF only)
- Metadata stripping (pdf-lib can do this, low priority)

---

## Verification

1. Upload a PDF with known PII (name, phone, address)
2. Verify step indicator shows extracting → analyzing → ready
3. Verify annotation boxes overlay correctly on text
4. Confirm/reject items in the panel
5. Apply redactions, download the PDF
6. Open downloaded PDF: verify black rectangles cover redacted items
7. Verify 60s countdown appears after download

Known limitation to verify: text under black rectangles in output PDF can still be selected/copied (pdf-lib limitation).
