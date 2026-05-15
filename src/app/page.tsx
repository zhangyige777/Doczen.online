"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, FileText, Shield, Zap, Eye, Loader2, Download, X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dropzone } from "@/components/dropzone";
import { InstructionInput } from "@/components/instruction-input";
import { PdfViewer } from "@/components/pdf-viewer";
import { DocumentPreview } from "@/components/document-preview";
import { AnnotationPanel } from "@/components/annotation-panel";
import { ApplyBar } from "@/components/apply-bar";
import { DownloadBar } from "@/components/download-bar";
import { StepIndicator } from "@/components/step-indicator";
import { usePipelineStore } from "@/lib/store";
import { usePipeline } from "@/hooks/use-pipeline";
import { applyDocumentRedactions } from "@/lib/document-redactor";
import { extractPlainText, extractTextFromDocument } from "@/lib/document-extractor";
import { matchDetectionsToTextItems, buildPagesForDetection } from "@/lib/text-extractor";
import { generateReportPdf } from "@/lib/report";
import { saveAuditEntry } from "@/lib/audit-log";
import type { BatchFile, DetectionItem } from "@/lib/types";

const features = [
  {
    icon: Eye,
    title: "AI-Powered Detection",
    description:
      "Claude Sonnet identifies names, phones, SSNs, addresses, financial accounts, and more — with contextual understanding, not just regex.",
  },
  {
    icon: Zap,
    title: "Review Before Redacting",
    description:
      "See every detection highlighted on your document. Keep or reject each item before applying permanent visual redactions.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Files are processed in memory and deleted after download. No storage, no logs, no traces.",
  },
];

const steps = [
  { step: 1, label: "Upload your document", desc: "Drag and drop a PDF, Word (.docx), or Excel (.xlsx) file." },
  { step: 2, label: "AI scans for PII", desc: "Claude detects names, SSNs, addresses, and more in seconds." },
  { step: 3, label: "Review & download", desc: "Confirm what to redact, download the clean document." },
];

export default function HomePage() {
  const {
    setFile, setInstruction, setSessionId, startPipeline, addFiles, removeFile,
    clearFiles, setFileStatus, setDetections, setTextItems, setError,
    filename, fileType, status, detections, fileBuffer, files, reset,
  } = usePipelineStore();

  const [instruction, setLocalInstruction] = useState("");
  const [redacting, setRedacting] = useState(false);
  const [pdfBytes, setPdfBytes] = useState<Uint8Array | null>(null);
  const [reportBytes, setReportBytes] = useState<Uint8Array | null>(null);

  // Batch state
  const [batchRunning, setBatchRunning] = useState(false);
  const [batchDone, setBatchDone] = useState(false);
  const [batchProgress, setBatchProgress] = useState({ current: 0, total: 0 });

  // Run pipeline when file is set (single file mode)
  usePipeline();

  const isSingleFile = files.length === 1;
  const isBatch = files.length > 1;
  const hasFiles = files.length > 0;

  // If no fileBuffer (e.g. page reload), always show landing page
  const isIdle = !fileBuffer || (status === "idle" && !pdfBytes && !batchDone);
  const isProcessing = !!fileBuffer && (status === "extracting" || status === "detecting");
  const isReady = !!fileBuffer && status === "ready" && !pdfBytes && !batchDone;
  const isDone = pdfBytes !== null;
  const isError = !!fileBuffer && status === "error";
  const errorMsg = usePipelineStore((s) => s.error);

  // --- Handlers ---

  const handleFilesAccepted = useCallback(
    (newFiles: { id: string; filename: string; buffer: ArrayBuffer }[]) => {
      const batchFiles: BatchFile[] = newFiles.map((f) => ({
        id: f.id,
        filename: f.filename,
        fileType: "pdf" as const, // will be overwritten by store
        buffer: f.buffer,
        status: "idle" as const,
        totalPages: 0,
        textItems: [],
        detections: [],
        error: null,
        redactedBytes: null,
      }));
      addFiles(batchFiles);
      // Set the first file as active for single-file pipeline
      if (batchFiles.length === 1) {
        setSessionId(batchFiles[0].id);
        setFile(batchFiles[0].buffer, batchFiles[0].filename);
      }
    },
    [addFiles, setSessionId, setFile]
  );

  const handleRemoveFileFromStore = useCallback(
    (id: string) => {
      removeFile(id);
      if (files.length <= 2) {
        // Going from batch to single or zero
        setPdfBytes(null);
        setReportBytes(null);
        setBatchDone(false);
      }
    },
    [removeFile, files.length]
  );

  const handleStart = () => {
    setInstruction(instruction);
    window.scrollTo(0, 0);
    if (isBatch || (files.length === 1 && !fileBuffer)) {
      runBatchPipeline();
    } else {
      startPipeline();
    }
  };

  const handleApply = async () => {
    if (!fileBuffer || !filename) return;
    setRedacting(true);
    try {
      const result = await applyDocumentRedactions(fileBuffer, filename, detections);
      setPdfBytes(result);

      const storeState = usePipelineStore.getState();
      // saveAuditEntry(
      //   storeState.sessionId || crypto.randomUUID(),
      //   filename,
      //   storeState.totalPages,
      //   detections
      // );

      try {
        const report = await generateReportPdf(
          filename,
          storeState.totalPages,
          detections,
          result
        );
        setReportBytes(report);
      } catch {}
    } catch (err) {
      console.error("Redaction failed:", err);
    } finally {
      setRedacting(false);
    }
  };

  const handleReset = () => {
    reset();
    clearFiles();
    setLocalInstruction("");
    setPdfBytes(null);
    setReportBytes(null);
    setRedacting(false);
    setBatchDone(false);
    setBatchRunning(false);
    setBatchProgress({ current: 0, total: 0 });
  };

  // --- Batch pipeline ---
  const runBatchPipeline = async () => {
    if (batchRunning) return;
    setBatchRunning(true);
    setBatchProgress({ current: 0, total: files.length });

    const storeState = usePipelineStore.getState();
    const instruction = storeState.instruction;

    for (let i = 0; i < files.length; i++) {
      const f = files[i];
      setBatchProgress({ current: i + 1, total: files.length });

      try {
        // Step 1: Extract text
        setFileStatus(f.id, "extracting");
        const { textItems, totalPages, viewportBboxes } = await extractTextFromDocument(f.buffer, f.filename);

        // Step 2: Detect via AI
        setFileStatus(f.id, "detecting", { textItems, totalPages });
        const pages = buildPagesForDetection(textItems, totalPages);
        const textForApi = await extractPlainText(f.buffer, f.filename);

        // Build pages payload from plain text instead of textItems
        const pageLines = textForApi.split("\n\n").filter(Boolean);
        const apiPages = pageLines.map((block, idx) => {
          const match = block.match(/\[PAGE (\d+)\]|\[SHEET: ([^\]]+)\]/);
          return {
            page_number: match ? parseInt(match[1] || String(idx + 1)) : idx + 1,
            text: block.replace(/\[PAGE \d+\]|\[SHEET: [^\]]+\]/g, "").trim(),
          };
        });

        const response = await fetch("/api/detect", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pages: apiPages, instruction: instruction || undefined }),
        });

        if (!response.ok) {
          const err = await response.json();
          throw new Error(err.error || "Detection failed");
        }

        const { detections: rawDetections } = await response.json();
        const matched = matchDetectionsToTextItems(
          rawDetections || [],
          textItems,
          viewportBboxes
        );

        // Step 3: Auto-redact
        setFileStatus(f.id, "redacting", { detections: matched, totalPages, textItems });
        const result = await applyDocumentRedactions(f.buffer, f.filename, matched);

        setFileStatus(f.id, "done", { redactedBytes: result, detections: matched });

        saveAuditEntry(f.id, f.filename, totalPages, matched);
      } catch (err) {
        setFileStatus(f.id, "error", {
          error: err instanceof Error ? err.message : "Processing failed",
        });
      }
    }

    setBatchRunning(false);
    setBatchDone(true);
  };

  const MIME_TYPES = {
    pdf: "application/pdf",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  };

  const doBatchDownload = (f: BatchFile) => {
    if (!f.redactedBytes) return;
    const mime = MIME_TYPES[f.fileType] || "application/octet-stream";
    const blob = new Blob([f.redactedBytes as BlobPart], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `redacted-${f.filename}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const scrollToUpload = () => {
    document.getElementById("upload-section")?.scrollIntoView({ behavior: "smooth" });
  };

  // --- Pipeline active: show processing / review / download UI ---
  if (!isIdle) {
    return (
      <div className="h-[calc(100vh-57px)] flex flex-col">
        {/* Top bar */}
        <div className="border-b bg-white px-3 sm:px-4 py-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <Button variant="ghost" size="sm" onClick={handleReset} className="shrink-0">
              Back
            </Button>
            <span className="text-sm text-slate-500 truncate max-w-[120px] sm:max-w-[300px]">
              {filename || files[0]?.filename}
            </span>
            <button
              onClick={handleReset}
              className="shrink-0 text-gray-400 hover:text-red-500 transition-colors p-1"
              aria-label="Remove file"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <StepIndicator status={status} />
        </div>

        {/* Error state */}
        {isError && (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-3">
              <p className="text-red-600 font-medium">Something went wrong</p>
              <p className="text-sm text-slate-500">{errorMsg}</p>
              <Button variant="outline" onClick={handleReset}>Try Again</Button>
            </div>
          </div>
        )}

        {/* Processing state */}
        {isProcessing && (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-4">
              <Loader2 className="w-8 h-8 animate-spin text-amber-600 mx-auto" />
              <StepIndicator status={status} />
            </div>
          </div>
        )}

        {/* Download state (single file) */}
        {isDone && (
          <div className="flex-1 flex flex-col">
            <div className="flex-1 flex items-center justify-center bg-slate-100">
              <div className="text-center space-y-4 p-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-xl font-semibold text-slate-900">Redactions applied</h2>
                <p className="text-sm text-slate-500">
                  {pdfBytes && pdfBytes.length.toLocaleString()} bytes · {detections.filter((d) => d.kept).length} items redacted
                </p>
              </div>
            </div>
            <DownloadBar
              redactedBytes={pdfBytes}
              fileType={fileType || undefined}
              reportBytes={reportBytes}
              filename={filename || "document.pdf"}
              onReset={handleReset}
            />
          </div>
        )}

        {/* Review state: preview + annotation panel */}
        {isReady && !isDone && (
          <>
            <div className="flex-1 flex overflow-hidden">
              <div className="flex-[65%] overflow-hidden">
                {fileType === "pdf" ? (
                  <PdfViewer enabled={status === "ready"} />
                ) : (
                  <DocumentPreview fileType={fileType!} />
                )}
              </div>
              <div className="flex-[35%] overflow-hidden">
                <AnnotationPanel />
              </div>
            </div>
            <ApplyBar onApply={handleApply} loading={redacting} />
          </>
        )}
      </div>
    );
  }

  // --- Batch progress (shown during batch processing) ---
  if (batchRunning) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-8 max-w-lg mx-auto px-4">
          <Loader2 className="w-10 h-10 animate-spin text-amber-600 mx-auto" />
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              Processing files
            </h2>
            <p className="text-sm text-slate-500">
              {batchProgress.current} of {batchProgress.total} files
            </p>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-amber-600 rounded-full transition-all duration-500"
              style={{ width: `${(batchProgress.current / batchProgress.total) * 100}%` }}
            />
          </div>
          <div className="space-y-2">
            {files.map((f) => (
              <div key={f.id} className="flex items-center gap-3 text-sm">
                {f.status === "done" ? (
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                ) : f.status === "error" ? (
                  <X className="w-4 h-4 text-red-500 shrink-0" />
                ) : (
                  <Loader2 className="w-4 h-4 animate-spin text-amber-500 shrink-0" />
                )}
                <span className="text-slate-700 truncate">{f.filename}</span>
                <span className="text-xs text-slate-400 ml-auto">
                  {f.status === "done" ? "Done" : f.status === "error" ? "Failed" : "Processing..."}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // --- Batch done: download list ---
  if (batchDone) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Batch redaction complete</h2>
          <p className="text-slate-500 mb-8">
            {files.filter((f) => f.status === "done").length} of {files.length} files processed
          </p>

          <div className="space-y-3 mb-8">
            {files.map((f) => (
              <div
                key={f.id}
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100"
              >
                <FileText className="w-5 h-5 text-slate-400 shrink-0" />
                <span className="text-sm text-slate-700 truncate flex-1 text-left">{f.filename}</span>
                {f.status === "done" && f.redactedBytes ? (
                  <Button
                    size="sm"
                    className="bg-amber-600 hover:bg-amber-700 text-white"
                    onClick={() => doBatchDownload(f)}
                  >
                    <Download className="w-4 h-4 mr-1.5" />
                    Download
                  </Button>
                ) : f.status === "error" ? (
                  <span className="text-xs text-red-500">Failed</span>
                ) : (
                  <span className="text-xs text-slate-400">Pending</span>
                )}
              </div>
            ))}
          </div>

          <Button variant="outline" onClick={handleReset} className="gap-2">
            Start new redaction
          </Button>
        </div>
      </div>
    );
  }

  // --- Landing page UI (idle state) ---
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(217,119,6,0.04),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 pt-20 pb-16 text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6 ring-1 ring-slate-500/20">
            AI-Powered Document Redaction
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            AI Redaction Tool —
            <br />
            <span className="text-amber-600">Redact PDF, Word & Excel Online, Free</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Automatically redact sensitive data from any document. Supports PDF · Word (.docx) · Excel (.xlsx).
            No software needed, no account required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button size="lg" className="gap-2 text-base px-6 sm:px-8 h-12 w-full sm:w-auto rounded-xl bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-200" onClick={scrollToUpload}>
              <FileText className="w-5 h-5" />
              Start Redacting
            </Button>
            <Link href="/pricing" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="text-base px-6 sm:px-8 h-12 w-full rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50">
                View Pricing
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-400">No account required. Free for 20 pages/month.</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Redactly</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Built for legal, medical, HR, and financial professionals who handle sensitive documents every day.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="group p-8 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all cursor-pointer">
                <div className="w-11 h-11 rounded-xl bg-slate-800 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Can You Redact */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Can You Redact?</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Redactly detects 25+ types of sensitive information with AI-powered precision.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Full Name", "Email Address", "Phone Number", "Social Security Number (SSN)",
              "Bank Account Number", "Credit Card Number", "Driver&apos;s License", "Passport Number",
              "Home Address", "Date of Birth", "Medical Record Number", "Tax ID (EIN/ITIN)",
              "IP Address", "Employee ID", "Salary Information", "Customer ID",
              "Vehicle Plate Number", "Insurance ID", "Digital Signature", "Login Credentials",
              "Biometric Data", "Stock Trade Details", "Court Case Number", "Government Benefits Info",
              "Visa/Immigration Details",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-slate-100 text-sm text-slate-700"
              >
                <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How it works</h2>
            <p className="text-slate-500">Three steps to a clean document.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            {steps.map((s) => (
              <div key={s.step} className="flex-1 flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center text-sm font-semibold shrink-0">
                  {s.step}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{s.label}</h4>
                  <p className="text-sm text-slate-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Uses Redactly */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Who Uses Redactly?</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              From law firms to healthcare providers — professionals trust Redactly for secure document redaction.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { role: "Legal Teams", desc: "Redact privileged information from discovery documents and court filings before sharing." },
              { role: "Finance Teams", desc: "Remove account numbers and personal data from financial reports and bank statements." },
              { role: "HR Professionals", desc: "Protect employee PII in payroll sheets, contracts, and onboarding documents." },
              { role: "Healthcare", desc: "Ensure HIPAA compliance by redacting PHI from medical records and patient forms." },
              { role: "Individuals", desc: "Safely share bank statements, ID documents, and personal files without exposing sensitive data." },
            ].map((u) => (
              <div key={u.role} className="p-6 rounded-2xl bg-white border border-slate-100 text-left">
                <h3 className="font-semibold text-slate-900 mb-2">{u.role}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload */}
      <section id="upload-section" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Try Redactly Free</h2>
          <p className="text-slate-500 mb-8">Upload your document — PDF, Word (.docx), or Excel (.xlsx) — and let AI detect sensitive information automatically.</p>
          <Dropzone
            onFilesAccepted={handleFilesAccepted}
            existingFiles={files.map((f) => ({ id: f.id, filename: f.filename }))}
            onRemoveFile={handleRemoveFileFromStore}
          />
          <div className="mt-6 w-full">
            <InstructionInput value={instruction} onChange={setLocalInstruction} />
          </div>
          <Button
            size="lg"
            className="mt-8 gap-2 text-base px-10 h-12 rounded-xl bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-200 disabled:opacity-40"
            disabled={!hasFiles}
            onClick={handleStart}
          >
            {isBatch ? `Start Redacting ${files.length} files` : "Start Redacting"}
            <ArrowRight className="w-5 h-5" />
          </Button>
          {!hasFiles && (
            <p className="mt-3 text-xs text-slate-400">Upload a document to get started</p>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What is document redaction?", a: 'Document redaction is the process of permanently removing or obscuring sensitive information from a document before sharing it. Unlike simply hiding text, proper redaction ensures the underlying data cannot be recovered. Redactly uses AI to detect and permanently redact sensitive information across PDF, Word, and Excel files.' },
              { q: "Is Redactly really free?", a: 'Yes. Redactly offers a free tier that covers up to 20 pages per month with no watermark and no account required. For higher volume needs, our Pro plan offers 200 pages per month with audit logs and batch processing.' },
              { q: "Does Redactly support Word and Excel files?", a: 'Yes! Redactly is the only free online redaction tool that supports PDF, Word (.docx), and Excel (.xlsx) files. Other redaction tools only work with PDFs, requiring you to convert documents first. Redactly works directly with all three formats.' },
              { q: "How does the AI redaction work?", a: 'Redactly uses Claude AI by Anthropic to analyze your document with contextual understanding. Unlike simple regex pattern matching, AI understands context — it knows \"John Smith\" is a name, \"555 Main Street\" is an address, and \"123-45-6789\" is a Social Security number.' },
              { q: "Is my data secure?", a: 'Absolutely. Files are processed entirely in memory and permanently deleted immediately after you download the redacted version. We do not store, cache, or log your documents. No traces remain on our servers.' },
              { q: "Can I review redactions before applying?", a: 'Yes. Redactly shows you every detected item highlighted on your document. You can keep or reject each detection before applying permanent redactions. This gives you full control over the final result.' },
              { q: "What types of sensitive data can Redactly detect?", a: 'Redactly detects 25+ types of PII including names, email addresses, phone numbers, SSNs, bank account numbers, credit card numbers, passport details, medical record numbers, addresses, dates of birth, tax IDs, and more.' },
              { q: "Do I need to create an account?", a: 'No account is needed to use Redactly\'s free tier. Simply upload your document and start redacting. An account is only required for Pro features like dashboard, audit logs, and higher page limits.' },
            ].map((faq) => (
              <details key={faq.q} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-sm font-medium text-slate-900 hover:text-amber-700 transition-colors">
                  {faq.q}
                  <span className="ml-2 shrink-0 text-slate-400 group-open:rotate-180 transition-transform">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <div className="px-6 pb-4 text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
