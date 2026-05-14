# RedactAI — MVP Product Requirements Document

**Version:** 1.0  
**Market:** US English-speaking professionals  
**Stage:** MVP (target launch in 6 weeks)

---

## 1. Product Overview

RedactAI is a web-based AI document redaction tool that lets users automatically detect and permanently remove sensitive information from PDF files. Unlike existing tools that only find fixed PII types (name, phone, SSN), RedactAI understands natural language instructions — users can say "redact all plaintiff information" and the AI handles it.

**One-line pitch:**  
> "Tell RedactAI what to hide. It reads the document, understands context, and redacts the right things."

---

## 2. Problem Being Solved

### The real pain
Professionals who handle sensitive documents (lawyers, HR, medical admin, accountants) need to share files externally with personal information removed. Current methods are:

- **Wrong:** Changing font color to white, placing a black box on top — data is still in the file, fully recoverable
- **Slow:** Adobe Acrobat's manual redaction requires clicking every single instance, 100-page docs take hours
- **Dumb:** Existing AI tools only find fixed PII categories, can't handle context-specific instructions

### Who feels this most
Primary target: **individual professionals in legal, HR, healthcare, and finance** who process sensitive documents weekly and have no IT support or budget for enterprise tools.

- Paralegal: needs to redact client PII before filing court documents
- HR manager: redacting salary info from job offers before sharing internally
- Medical admin: removing PHI before sending records to third parties
- Accountant: stripping personal info from financial documents for audit sharing

---

## 3. Core Differentiators vs. Competitors

| Feature | ai-redact.com | Redactable | **RedactAI (you)** |
|---|---|---|---|
| Natural language instructions | ❌ | ❌ | ✅ **Key differentiator** |
| Color-coded annotation preview | ❌ | Partial | ✅ |
| Per-item confirm / reject | ❌ | ❌ | ✅ |
| Files deleted immediately | ✅ | ❌ | ✅ + visible countdown |
| Free tier | 4 pages | Trial only | 5 pages/day |
| Pricing model | PAYG | Subscription | Both |
| OCR (scanned docs) | ✅ | ✅ | ✅ |

---

## 4. MVP Feature Scope

### 4.1 Must-Have (Week 1–4)

#### Upload & Processing
- Drag-and-drop or click-to-upload PDF (max 50MB, up to 10 files at once)
- Processing status shown in real time (not a spinner, an actual step indicator: Uploading → Extracting text → AI analyzing → Ready to review)
- OCR for scanned PDFs (non-selectable text)

#### Natural Language Instruction Box
- Text input above the upload area: *"What should be redacted? (optional)"*
- Placeholder examples rotate: "Redact all plaintiff names and addresses" / "Remove salary figures, keep job titles" / "Hide all personal contact info"
- If left empty, AI defaults to standard PII detection (names, phone, email, SSN, DOB, address, financial account numbers)

#### Annotation Preview (the main UI)
- Side-by-side view: PDF on the left, annotation panel on the right
- AI-detected items highlighted in color-coded layers:
  - 🔵 Blue = Names
  - 🔴 Red = Contact info (phone, email, address)
  - 🟠 Orange = Financial info (account numbers, amounts)
  - 🟣 Purple = IDs (SSN, passport, driver's license)
  - 🟡 Yellow = Custom (anything matched by user's instruction)
- Right panel lists every detected item with: the text found, type label, page number, confidence score
- Each item has: ✅ Keep redacted / ❌ Remove annotation (don't redact) / ✏️ Edit label

#### Manual Additions
- Draw-to-select on the PDF preview to add manual redaction zones
- Keyword search: type a word or phrase to highlight all instances → confirm or reject in bulk

#### Export
- "Apply Redactions" button → generates final PDF
- Redaction is permanent and irreversible (PyMuPDF fills rectangles at the content layer, not a visual overlay)
- **MVP 阶段使用 pdf-lib 视觉遮盖**：底层文字仍可通过文本选择提取。下载前显示免责提示。正式版换回 PyMuPDF 实现永久脱敏。
- Metadata stripped from output file
- Download button + deletion countdown timer visible: *"Your file will be deleted in 60 seconds"*
- Confirmation email sent if user is logged in: *"Your file [name] was processed and deleted at [time]"*

#### Privacy Commitment (visible in UI)
- Banner on every page: *"Files are encrypted in transit and permanently deleted after download. We never store your documents."*
- Timer visible during and after processing
- No file is used for model training (stated in terms + privacy policy)

---

### 4.2 Auth & Accounts

- **No account required** for free tier (frictionless entry)
- Sign up with email or Google (via Clerk) to access Pro features and history
- Dashboard shows: recent jobs, pages used this month, plan status

---

### 4.3 Pricing & Plans

```
Free (no signup required)
├── 5 pages/day
├── Standard PII detection only
└── No history saved

Pro — $19/month
├── 300 pages/month
├── Natural language instructions
├── Annotation preview + per-item review
├── Job history saved 30 days
├── Priority processing
└── Email deletion confirmation

Team — $79/month
├── Unlimited pages
├── 3 seats
├── Shared workspace
├── Audit log (who processed what, when — for compliance)
├── Custom redaction templates (save instruction sets for reuse)
└── Priority support

Pay-as-you-go (for overflow)
└── $0.08/page for Pro users who exceed monthly limit
```

**Free tier logic:** Enough to let a new user process a real document and feel the product's value before hitting a paywall. 5 pages covers a short contract or a few-page medical form.

---

## 5. User Flow (Primary)

```
1. Land on homepage
   → See upload box immediately (above the fold, no login required)

2. Upload PDF
   → Optional: type natural language instruction
   → Click "Redact"

3. Processing screen
   → Step-by-step progress (not just a spinner)
   → Estimated time shown

4. Annotation Review screen
   → PDF preview on left, annotation list on right
   → Color-coded highlights visible immediately
   → User reviews, confirms, rejects, adds manual zones

5. Apply Redactions
   → Click "Apply & Download"
   → Final PDF generated
   → Download starts automatically
   → Deletion timer visible (60 seconds)
   → If logged in: confirmation email sent

6. Upsell moment
   → After download: "You used X of 5 free pages today. Upgrade to Pro for 300 pages/month and natural language instructions."
```

---

## 6. Pages & Key Screens

### Homepage / Landing
- Hero: upload box front and center, no distractions
- Below fold: how it works (3 steps), who it's for, security commitments, pricing table
- Social proof section: 3 use case testimonials (legal, HR, medical) — placeholder until real ones exist

### Processing Screen
- Full-screen, step indicator, estimated time
- Cancel button

### Review Screen (core product UI)
- PDF viewer (left, ~65% width) — zoomable, page navigation
- Annotation panel (right, ~35% width) — scrollable list, filter by type
- Toolbar: draw mode, keyword search, zoom, page count
- Bottom bar: "X items flagged for redaction" — Apply button

### Dashboard (logged-in)
- Recent jobs (file name, date, pages, status)
- Pages used this month (progress bar toward limit)
- Upgrade prompt if on free tier

### Pricing Page
- Three column layout (Free / Pro / Team)
- Annual toggle (20% off)
- FAQ: Is my file safe? What counts as a page? Can I cancel?

---

## 7. Tech Stack

```
Frontend       Next.js 14 (App Router) + Tailwind CSS
PDF Preview    PDF.js (in-browser rendering)
Auth           Clerk (email + Google sign-in)
Backend        Next.js API Routes + Python microservice (Railway)
PDF Processing PyMuPDF (text extraction, coordinate mapping, permanent redaction)
OCR            Tesseract.js or AWS Textract (for scanned PDFs)
AI / NLP       Claude API (PII detection + natural language instruction parsing)
Storage        None (files never persisted — processed in memory or temp dir, deleted immediately)
Payments       Stripe (subscription + usage-based billing)
Email          Resend (deletion confirmation, receipts)
Deployment     Vercel (frontend) + Railway (Python service)
Analytics      Plausible (privacy-friendly, good for SaaS)
```

---

## 8. Security & Compliance (MVP commitments)

- TLS 1.3 for all file transfers
- Files processed in isolated temp directories, deleted within 60 seconds of download
- No file content logged or stored in databases
- No training use of uploaded files
- Privacy policy and terms of service on launch
- HIPAA-ready language in marketing (full HIPAA BAA offered at Team tier)
- SOC 2 Type I — begin process at Month 3 (needed to close Team/Enterprise deals)

---

## 9. Launch Sequence

**Week 1–2:** Core pipeline working (upload → AI detect → export redacted PDF)  
**Week 3–4:** Annotation review UI, manual selection, keyword search  
**Week 5:** Auth (Clerk), Stripe payments, dashboard  
**Week 6:** Landing page, privacy policy, soft launch  

**Day 1 after launch:**
- Post on Reddit: r/legaladvice, r/humanresources, r/HIPAA
- Submit to Product Hunt
- Post on X/Twitter and LinkedIn with a demo GIF
- Submit to: There's An AI For That, Futurepedia, AI tools directories

**Month 2:**
- Start SEO content (2 posts/week)
- First competitor comparison post: "RedactAI vs Adobe Acrobat"
- Reach out to 20 solo lawyers on LinkedIn with a 30-day free Pro trial offer

---

## 10. Success Metrics (Month 1–3)

| Metric | Target |
|---|---|
| Signups | 500 by end of Month 1 |
| Free → Pro conversion | 5% |
| Monthly Recurring Revenue | $500 MRR by Month 2, $2,000 by Month 3 |
| Pages processed | 10,000 by Month 2 |
| Churn rate | < 10%/month |

---

## 11. Out of Scope for MVP

The following are intentionally excluded from MVP to keep scope tight:

- Word / Excel / PowerPoint support (Month 2)
- Batch processing of 50+ files (Month 2)
- Team collaboration features beyond shared workspace (Month 3)
- API access for developers (Month 4)
- Private / on-premise deployment (Enterprise, Month 6+)
- Video / image redaction (different product)
- Chrome extension (Month 4)

---

*Document owner: Founder*  
*Last updated: May 2026*
