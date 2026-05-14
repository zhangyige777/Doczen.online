export const runtime = "edge";

import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Shield, Search, CheckCircle2, XCircle, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How to Redact a PDF for Free — Top Online Tools Compared (2025) | Redactly",
  description:
    "Need to redact a PDF for free? Compare the best free PDF redaction tools including Redactly, which also supports Word and Excel.",
  alternates: { canonical: "/how-to/redact-pdf-free" },
  openGraph: {
    title: "How to Redact a PDF for Free — Top Online Tools Compared (2025) | Redactly",
    description:
      "Need to redact a PDF for free? Compare the best free PDF redaction tools including Redactly, which also supports Word and Excel.",
    url: "/how-to/redact-pdf-free",
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Redact a PDF for Free",
  description:
    "Guide to redacting a PDF for free using online tools, including Redactly which also supports Word and Excel redaction.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Choose a free redaction tool",
      text: "Select a tool that offers permanent redaction (not just drawing boxes). Redactly is recommended as it also handles Word and Excel.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Upload your PDF",
      text: "Drag and drop your PDF onto the upload area or browse to select your file.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "AI detects sensitive information",
      text: "The tool scans your document and identifies sensitive data automatically.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Review and apply redactions",
      text: "Review what was detected, confirm redactions, and apply permanent removal.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Download the redacted PDF",
      text: "Download your permanently redacted PDF file.",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I redact a PDF for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Several free online tools can redact PDFs, including Redactly. Look for tools that perform permanent redaction (removing text from the content stream) rather than just drawing boxes over text.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best free PDF redaction tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Redactly is the best free option because it not only redacts PDFs but also supports Word and Excel files. It uses AI to automatically detect sensitive information and applies permanent redactions.",
      },
    },
    {
      "@type": "Question",
      name: "Do free PDF redaction tools leave watermarks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some do, but Redactly does not. Redacted files downloaded from Redactly are clean with no watermarks or branding added.",
      },
    },
    {
      "@type": "Question",
      name: "Is free PDF redaction safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the tool. Redactly processes files in your browser memory and does not store your documents. Always check the privacy policy of any online tool before uploading sensitive files.",
      },
    },
  ],
};

const sectionStyles = "max-w-3xl mx-auto px-4 py-16";
const heading2Styles = "text-2xl font-bold text-gray-900 mt-14 mb-4";
const heading3Styles = "text-lg font-semibold text-gray-900 mt-8 mb-3";
const paragraphStyles = "text-gray-700 leading-relaxed mb-4";

export default function RedactPdfFreePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-6 ring-1 ring-green-500/20">
              <FileText className="w-3.5 h-3.5" />
              How-To Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              How to Redact a PDF for Free &mdash; Best Online Tools
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Need to redact a PDF without spending money? Compare the best free PDF redaction tools
              and learn what to look for to ensure your redactions are actually permanent.
            </p>
          </div>
        </section>

        <section className={sectionStyles}>
          <p className={paragraphStyles}>
            Paying $19.99/month for Adobe Acrobat Pro just to redact a few PDFs does not make sense
            for most people. Fortunately, there are several free options that can do the job
            &mdash; provided you choose the right one.
          </p>
          <p className={paragraphStyles}>
            The challenge is that not all free PDF redaction tools are created equal. Many only draw
            black boxes over text without actually removing the underlying data. Others add
            watermarks, limit file sizes, or compromise your privacy.
          </p>
          <p className={paragraphStyles}>
            <strong>Redactly is the only free online redaction tool that supports PDF, Word, and Excel.</strong>{" "}
            It applies permanent redactions, adds no watermarks, and processes files securely in your
            browser. Here is what to look for and how the free options compare.
          </p>

          {/* H2: What to Look For */}
          <h2 className={heading2Styles}>What to Look for in a Free PDF Redaction Tool</h2>
          <p className={paragraphStyles}>
            Before choosing a free tool, evaluate it against these criteria:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="p-5 rounded-xl bg-green-50 border border-green-100">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    Permanent Redaction
                  </h3>
                  <p className="text-xs text-gray-600">
                    The tool must remove text from the PDF content stream, not just draw boxes on
                    top of it.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-green-50 border border-green-100">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">No Watermarks</h3>
                  <p className="text-xs text-gray-600">
                    The tool should not add watermarks or branding to your redacted document.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-green-50 border border-green-100">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Privacy &amp; Security</h3>
                  <p className="text-xs text-gray-600">
                    Your document should be processed securely and not stored on the tool&rsquo;s
                    servers after processing.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-green-50 border border-green-100">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Format Support</h3>
                  <p className="text-xs text-gray-600">
                    Ideally, the tool should support not just PDF but also Word and Excel files.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* H2: Redactly */}
          <h2 className={heading2Styles}>
            Redactly &mdash; Free PDF Redaction (Also Supports Word &amp; Excel)
          </h2>
          <p className={paragraphStyles}>
            Redactly is a free online redaction tool that handles PDF, Word, and Excel files. It
            uses AI to automatically detect sensitive information and applies permanent redactions
            that cannot be undone.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold text-gray-900">Permanent redaction</span>
                <span className="text-gray-600">
                  {" "}&mdash; removes text from the PDF content stream, not just visual overlay
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold text-gray-900">No watermarks</span>
                <span className="text-gray-600">
                  {" "}&mdash; your redacted PDF is clean with no branding added
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold text-gray-900">AI-powered detection</span>
                <span className="text-gray-600">
                  {" "}&mdash; automatically finds names, SSNs, emails, phone numbers, and more
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold text-gray-900">Multi-format support</span>
                <span className="text-gray-600">
                  {" "}&mdash; works with PDF, Word (.docx), and Excel (.xlsx)
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold text-gray-900">Privacy-first</span>
                <span className="text-gray-600">
                  {" "}&mdash; files stay in your browser memory and are never stored on our servers
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold text-gray-900">No account required</span>
                <span className="text-gray-600">
                  {" "}&mdash; use the tool immediately, no sign-up needed
                </span>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <Link href="/tool">
              <Button size="lg" className="gap-2 text-base px-8 h-12 rounded-xl bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-200">
                <Shield className="w-5 h-5" />
                Redact a PDF Free with Redactly
              </Button>
            </Link>
          </div>

          {/* H2: Other Free Options */}
          <h2 className={heading2Styles}>Other Free PDF Redaction Options</h2>
          <p className={paragraphStyles}>
            While Redactly is our recommended free option, here are other approaches you may
            encounter:
          </p>

          <h3 className={heading3Styles}>PDF24 Tools</h3>
          <p className={paragraphStyles}>
            PDF24 offers a free online PDF redaction tool. It allows you to draw black boxes over
            text and can flatten the PDF. However, it does not offer AI-powered detection and does
            not support Word or Excel files. You must manually find and mark every piece of sensitive
            information yourself.
          </p>

          <h3 className={heading3Styles}>Smallpdf</h3>
          <p className={paragraphStyles}>
            Smallpdf has a PDF redaction feature, but it is limited in the free version. You can only
            redact a few pages per day before hitting a paywall. It also does not support Word or
            Excel redaction and does not offer AI-based detection.
          </p>

          <h3 className={heading3Styles}>iLovePDF</h3>
          <p className={paragraphStyles}>
            iLovePDF offers basic redaction by drawing rectangles over text. Like other free tools,
            it lacks AI detection, has daily usage limits, and only supports PDF files.
          </p>

          <h3 className={heading3Styles}>Mac Preview (Not Recommended)</h3>
          <p className={paragraphStyles}>
            Mac&rsquo;s built-in Preview app lets you draw shapes over text, but this is visual only
            &mdash; the text remains selectable and copyable underneath. This is not real redaction.
          </p>

          <div className="p-5 rounded-xl bg-amber-50 border border-amber-100 mb-8">
            <div className="flex items-start gap-3">
              <Search className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-amber-800 mb-1">Heads Up</p>
                <p className="text-sm text-amber-700">
                  Most free PDF tools only draw black boxes over text without removing the
                  underlying data. Always verify by selecting text in redacted areas or searching
                  for the original text in your output PDF.
                </p>
              </div>
            </div>
          </div>

          {/* H2: Free vs Paid */}
          <h2 className={heading2Styles}>Free vs. Paid &mdash; What Do You Actually Get?</h2>
          <p className={paragraphStyles}>
            To help you decide whether a free tool is sufficient or you need a paid solution, here
            is what each tier typically offers:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 font-semibold text-gray-900 border-b border-gray-200">
                    Feature
                  </th>
                  <th className="text-center p-3 font-semibold text-gray-900 border-b border-gray-200 bg-green-50">
                    Free Tools
                  </th>
                  <th className="text-center p-3 font-semibold text-gray-900 border-b border-gray-200 bg-blue-50">
                    Paid Tools (e.g., Adobe Pro)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-gray-100 text-gray-700">Cost</td>
                  <td className="p-3 border-b border-gray-100 text-center text-green-600 font-medium">
                    Free
                  </td>
                  <td className="p-3 border-b border-gray-100 text-center text-red-600">
                    $19.99+/mo
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100 text-gray-700">
                    Permanent Redaction
                  </td>
                  <td className="p-3 border-b border-gray-100 text-center">
                    Some (check carefully)
                  </td>
                  <td className="p-3 border-b border-gray-100 text-center">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100 text-gray-700">
                    AI-Powered Detection
                  </td>
                  <td className="p-3 border-b border-gray-100 text-center text-gray-400">
                    Rare
                  </td>
                  <td className="p-3 border-b border-gray-100 text-center">
                    <XCircle className="w-4 h-4 text-red-400 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100 text-gray-700">
                    Word &amp; Excel Support
                  </td>
                  <td className="p-3 border-b border-gray-100 text-center text-green-600">
                    Redactly only
                  </td>
                  <td className="p-3 border-b border-gray-100 text-center">
                    <XCircle className="w-4 h-4 text-red-400 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-700">Usage Limits</td>
                  <td className="p-3 text-center text-gray-500">
                    20 pages/mo (Redactly)
                  </td>
                  <td className="p-3 text-center text-gray-500">
                    Unlimited
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={paragraphStyles}>
            For most users who redact documents occasionally, free tools like Redactly are more than
            sufficient. You get permanent redaction, AI-powered detection, and multi-format support
            without paying anything. If you need to redact hundreds of pages per month, a paid plan
            may be worth considering.
          </p>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Redact Your PDF Free &mdash; No Strings Attached
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Redactly is free, secure, and supports PDF, Word, and Excel. AI detects sensitive
              information automatically. No account or credit card needed.
            </p>
            <Link href="/tool">
              <Button size="lg" className="gap-2 text-base px-8 h-12 rounded-xl bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-200">
                <Shield className="w-5 h-5" />
                Redact a PDF Free
              </Button>
            </Link>
            <p className="mt-3 text-xs text-gray-400">
              Free for 20 pages per month. No credit card required.
            </p>
          </div>

          {/* FAQ */}
          <h2 className={heading2Styles}>Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="p-5 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can I redact a PDF for free?
              </h3>
              <p className="text-sm text-gray-600">
                Yes. Several free online tools can redact PDFs, including Redactly. Look for tools
                that perform permanent redaction (removing text from the content stream) rather than
                just drawing boxes over text.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                What is the best free PDF redaction tool?
              </h3>
              <p className="text-sm text-gray-600">
                Redactly is the best free option because it not only redacts PDFs but also supports
                Word and Excel files. It uses AI to automatically detect sensitive information and
                applies permanent redactions with no watermarks.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Do free PDF redaction tools leave watermarks?
              </h3>
              <p className="text-sm text-gray-600">
                Some do, but Redactly does not. Redacted files downloaded from Redactly are clean
                with no watermarks or branding added.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Is free PDF redaction safe?
              </h3>
              <p className="text-sm text-gray-600">
                It depends on the tool. Redactly processes files in your browser memory and does not
                store your documents. Always check the privacy policy of any online tool before
                uploading sensitive files.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                What is the page limit for Redactly free?
              </h3>
              <p className="text-sm text-gray-600">
                Redactly&rsquo;s free tier includes 20 pages per month. This is sufficient for
                occasional redaction needs. For higher volumes, paid plans are available.
              </p>
            </div>
          </div>

          {/* Additional resources */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-400">
              More guides:{" "}
              <Link href="/how-to/redact-a-pdf" className="text-amber-600 hover:underline">
                Complete PDF Redaction Guide
              </Link>{" "}
              &middot;{" "}
              <Link href="/how-to/redact-in-adobe" className="text-amber-600 hover:underline">
                Redact in Adobe Acrobat
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
