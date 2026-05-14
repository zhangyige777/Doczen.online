# Doczen — 每日工作记录

---

## 2026-05-12

### 完成事项
- [x] 阅读并理解 PRD 全文，明确产品定位
- [x] 技术选型确定：Next.js 15 + pdfjs-dist + pdf-lib + Cloudflare Pages + D1 + Clerk + Creem
- [x] 放弃 Python/PyMuPDF，全 JS 方案
- [x] 坐标系方案：`viewport.convertToViewportPoint()` + Y 减 itemHeight
- [x] 多处命中：全部标注 + 面板分组 "Text (N处)"，批量确认/拒绝
- [x] ArrayBuffer：仅内存，partialize 排除 persist
- [x] Edge Function：原生 fetch 调 Anthropic API（不用 SDK）
- [x] pdfjs worker 显式路径初始化
- [x] 下载前视觉遮盖免责弹窗
- [x] pdfjs-dist 动态 import 解决 DOMMatrix SSR 报错
- [x] 完整 MVP 代码产出（32 个源文件）
- [x] TypeScript 零错误，Next.js build 通过
- [x] 产品名：Doczen

### 文件清单
- `src/app/api/detect/route.ts` — Edge Function，Claude API 代理
- `src/app/page.tsx` — 首页上传
- `src/app/review/page.tsx` — 审核 + 导出
- `src/lib/types.ts` — 类型定义
- `src/lib/store.ts` — Zustand + sessionStorage
- `src/lib/text-extractor.ts` — pdfjs 文本提取 + 子串匹配
- `src/lib/coordinates.ts` — 坐标转换
- `src/lib/redactor.ts` — pdf-lib 脱敏
- `src/hooks/use-pipeline.ts` — 提取→检测→结果编排
- `src/hooks/use-pdf-viewer.ts` — PDF.js 渲染生命周期
- `src/components/*` — 8 个 UI 组件 + 9 个 shadcn/ui 组件
- `wrangler.toml` — Cloudflare 配置

### 待办
- [ ] 部署到 Cloudflare Pages
- [ ] 测试端到端流程（需要真实 PDF + Claude API Key）
