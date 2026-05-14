import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "AI Redaction Tool — Redact PDF, Word & Excel Online Free | Redactly",
  description:
    "Free online AI redaction tool. Upload PDF, Word (.docx), or Excel (.xlsx) files and let AI automatically detect and redact sensitive information. No account required.",
  openGraph: {
    title: "AI Redaction Tool — Redact PDF, Word & Excel Online Free | Redactly",
    description:
      "Free online AI redaction tool. Upload PDF, Word, or Excel files and redact sensitive information automatically.",
  },
};

export default function ToolPage() {
  redirect("/");
}
