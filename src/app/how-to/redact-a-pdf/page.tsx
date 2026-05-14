export const runtime = "edge";

import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Shield, Monitor, Globe, Apple, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How to Redact a PDF — Free Online, Adobe & Mac Methods | Redactly",
  description:
    "Step-by-step guide to permanently redacting a PDF online for free or using Adobe Acrobat. Also covers Word and Excel redaction.",
  alternates: { canonical: "/how-to/redact-a-pdf" },
  openGraph: {
    title: "How to Redact a PDF — Free Online, Adobe & Mac Methods | Redactly",
    description:
      "Step-by-step guide to permanently redacting a PDF online for free or using Adobe Acrobat. Also covers Word and Excel redaction.",
    url: "/how-to/redact-a-pdf",
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Redact a PDF",
  description:
    "Step-by-step guide to permanently redacting a PDF using three methods: free online with Redactly, with Adobe Acrobat Pro, or on Mac without Adobe.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Go to Redactly",
      text: "Visit redactly.online/tool. No account or software required.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Upload your PDF",
      text: "Drag and drop your PDF file onto the upload area. Files up to 50MB are supported.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "AI detects sensitive information",
      text: "Redactly's AI automatically scans your document and identifies sensitive data including names, phone numbers, emails, and financial information.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Review and confirm redactions",
      text: "Review each detection and confirm which items to redact before applying permanent changes.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Download the redacted PDF",
      text: "Click apply to permanently redact the selected content and download your clean PDF.",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I permanently redact a PDF for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use Redactly. Upload your PDF to redactly.online/tool, let AI detect sensitive information, review the detections, and download your permanently redacted PDF. No account needed.",
      },
    },
    {
      "@type": "Question",
      name: "Can you unredact a PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If redaction is applied correctly (removing text from the content stream), it cannot be undone. However, many free tools only draw boxes over text, which can be removed. Always verify your redaction tool applies permanent removal.",
      },
    },
    {
      "@type": "Question",
      name: "How do I redact a PDF on a Mac without Adobe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can use Preview's built-in markup tools to draw shapes over text, but this is not secure redaction. For permanent redaction on Mac, use Redactly online or Adobe Acrobat Pro.",
      },
    },
    {
      "@type": "Question",
      name: "Can Redactly redact Word and Excel files too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Redactly is the only free online redaction tool that supports PDF, Word, and Excel files. You can redact all three formats with the same tool.",
      },
    },
  ],
};

const sectionStyles = "max-w-3xl mx-auto px-4 py-16";
const heading2Styles = "text-2xl font-bold text-gray-900 mt-14 mb-4";
const heading3Styles = "text-lg font-semibold text-gray-900 mt-8 mb-3";
const paragraphStyles = "text-gray-700 leading-relaxed mb-4";
const stepBoxStyles = "p-5 rounded-xl bg-gray-50 border border-gray-100";

export default function RedactAPdfPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-6 ring-1 ring-red-500/20">
              <FileText className="w-3.5 h-3.5" />
              How-To Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              How to Redact a PDF &mdash; 3 Methods (Free, Adobe &amp; Mac)
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              The complete guide to permanently redacting a PDF. Redact online for free, use Adobe
              Acrobat Pro, or do it on a Mac. Plus, learn how to redact Word and Excel files too.
            </p>
          </div>
        </section>

        <section className={sectionStyles}>
          <p className={paragraphStyles}>
            PDF is the most common format for sharing documents, which also makes it the most common
            format for accidental data leaks. Whether you are a lawyer sharing discovery documents, a
            doctor sharing patient records, or an HR manager sharing employee files, you need to
            permanently remove sensitive information before sending a PDF to anyone.
          </p>
          <p className={paragraphStyles}>
            This guide covers three methods for redacting a PDF, from the easiest free option to
            professional desktop software. Along the way, we will explain what makes redaction
            permanent, what common mistakes to avoid, and how to handle situations where you also
            need to redact Word or Excel files.
          </p>
          <p className={paragraphStyles}>
            <strong>Redactly is the only free online redaction tool that supports PDF, Word, and Excel.</strong>{" "}
            Whether you need to redact a single PDF or process multiple file formats, Redactly has
            you covered without any subscription fees.
          </p>

          {/* Method 1: Redact Online */}
          <h2 className={heading2Styles}>
            Method 1: Redact a PDF Online for Free with Redactly
          </h2>
          <p className={paragraphStyles}>
            The fastest way to redact a PDF is online with Redactly. There is nothing to download or
            install, and the AI detects sensitive information automatically.
          </p>

          <div className="space-y-6 mb-8">
            <div className={stepBoxStyles}>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-semibold shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Go to redactly.online/tool
                  </h3>
                  <p className="text-sm text-gray-600">
                    Open your browser and navigate to the Redactly tool page. No account
                    registration, no credit card, no software download required.
                  </p>
                </div>
              </div>
            </div>

            <div className={stepBoxStyles}>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-semibold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Upload your PDF</h3>
                  <p className="text-sm text-gray-600">
                    Drag and drop your PDF onto the upload area, or click to browse and select your
                    file. Files up to 50MB are supported. Your file stays in your browser&rsquo;s
                    memory and is never stored on our servers.
                  </p>
                </div>
              </div>
            </div>

            <div className={stepBoxStyles}>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-semibold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    AI detects sensitive information
                  </h3>
                  <p className="text-sm text-gray-600">
                    Redactly&rsquo;s AI scans every page of your PDF and identifies sensitive
                    information: names, phone numbers, email addresses, Social Security numbers,
                    financial accounts, and more. The AI understands context, so it catches
                    variations that simple pattern matching would miss.
                  </p>
                </div>
              </div>
            </div>

            <div className={stepBoxStyles}>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-semibold shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Review and confirm redactions
                  </h3>
                  <p className="text-sm text-gray-600">
                    Every detection is presented for your review. You can keep or reject individual
                    items before applying. This gives you full control over the final output.
                  </p>
                </div>
              </div>
            </div>

            <div className={stepBoxStyles}>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-semibold shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Download the redacted PDF</h3>
                  <p className="text-sm text-gray-600">
                    Click apply to permanently redact the selected content, then download your clean
                    PDF. The redactions are irreversible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <Link href="/tool">
              <Button size="lg" className="gap-2 text-base px-8 h-12 rounded-xl bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-200">
                <Globe className="w-5 h-5" />
                Redact a PDF Online Free
              </Button>
            </Link>
          </div>

          {/* Method 2: Adobe Acrobat Pro */}
          <h2 className={heading2Styles}>
            Method 2: Redact a PDF in Adobe Acrobat Pro
          </h2>
          <p className={paragraphStyles}>
            If you already have an Adobe Acrobat Pro subscription ($19.99/month), you can use its
            built-in redaction tool. Note that Adobe Acrobat Standard and the free Adobe Reader do
            not include this feature.
          </p>
          <p className={paragraphStyles}>
            To redact in Adobe Acrobat Pro: open your PDF, go to Tools &gt; Redact, mark the text
            or images you want to remove, then click Apply Redactions. Adobe removes the marked
            content permanently from the PDF content stream.
          </p>
          <p className={paragraphStyles}>
            For a full step-by-step guide with screenshots, see{" "}
            <Link href="/how-to/redact-in-adobe" className="text-amber-600 hover:underline font-medium">
              how to redact in Adobe Acrobat
            </Link>
            .
          </p>

          {/* Method 3: Mac */}
          <h2 className={heading2Styles}>
            Method 3: Redact a PDF on Mac (Without Adobe)
          </h2>
          <p className={paragraphStyles}>
            Mac users often wonder if Preview can redact PDFs. The short answer is: <strong>not securely</strong>.
          </p>
          <p className={paragraphStyles}>
            Apple&rsquo;s Preview app has markup tools that let you draw rectangles over text. But
            this is visual-only &mdash; the underlying text remains in the PDF and can be selected,
            copied, and pasted. This is the same problem as drawing black boxes in Word.
          </p>
          <p className={paragraphStyles}>
            For secure redaction on a Mac, your options are:
          </p>

          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0" />
              <span>
                <strong>Use Redactly online</strong> &mdash; works in Safari, Chrome, or any
                browser on your Mac. No software installation needed.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0" />
              <span>
                <strong>Use Adobe Acrobat Pro for Mac</strong> &mdash; the full redaction tool is
                available in the Mac version of Acrobat Pro.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0" />
              <span>
                <strong>Python libraries (advanced)</strong> &mdash; tools like PyMuPDF can
                programmatically redact PDFs, but this requires technical expertise.
              </span>
            </li>
          </ul>

          {/* Permanent Redaction */}
          <h2 className={heading2Styles}>
            How to Permanently Redact a PDF (Unrecoverable)
          </h2>
          <p className={paragraphStyles}>
            Permanent redaction means the underlying text is completely removed from the PDF file.
            This is different from simply drawing a black shape on top of text, which is sometimes
            called &ldquo;visual redaction.&rdquo;
          </p>
          <p className={paragraphStyles}>
            For true permanent redaction, the tool must:
          </p>

          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-start gap-2.5">
              <CheckIcon />
              <span>
                <strong>Remove text from the content stream</strong> &mdash; the actual text data
                is deleted from the PDF structure
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckIcon />
              <span>
                <strong>Flatten annotations</strong> &mdash; any markup or annotation layers are
                merged into the page
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckIcon />
              <span>
                <strong>Remove metadata</strong> &mdash; hidden information like author names and
                revision history
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckIcon />
              <span>
                <strong>Overwrite with a black mark</strong> &mdash; a visual indicator that text
                has been removed (optional but recommended)
              </span>
            </li>
          </ul>

          <p className={paragraphStyles}>
            To verify your redaction is permanent, open the redacted PDF and try to select the
            text where redactions were applied. If you can select or copy anything from those areas,
            the redaction is not complete. Also try searching for the original sensitive text using
            Ctrl+F or Cmd+F &mdash; if any results appear, the redaction failed.
          </p>

          {/* Can you unredact? */}
          <h2 className={heading2Styles}>Can You Unredact a PDF?</h2>
          <p className={paragraphStyles}>
            This is one of the most common questions about PDF redaction, and the answer depends
            entirely on <strong>how</strong> the redaction was applied.
          </p>
          <p className={paragraphStyles}>
            If the redaction tool <strong>properly removed the text from the PDF content stream</strong>, then no,
            the redaction cannot be undone. The original text is gone. This is what happens with
            Adobe Acrobat Pro&rsquo;s Apply Redactions feature and with Redactly&rsquo;s redaction
            engine.
          </p>
          <p className={paragraphStyles}>
            However, if someone simply drew black boxes over text using Preview, Google Docs, or a
            basic PDF editor, then <strong>yes, it can be unredacted</strong>. The boxes can be
            removed or the underlying text can be extracted. This is why using a proper redaction
            tool matters.
          </p>
          <p className={paragraphStyles}>
            When choosing a redaction tool, always verify that it performs permanent removal, not
            just visual obfuscation. Read reviews, check the documentation, and test the output by
            attempting to extract text from redacted areas.
          </p>

          {/* Word and Excel */}
          <h2 className={heading2Styles}>
            Also Need to Redact Word or Excel Files?
          </h2>
          <p className={paragraphStyles}>
            One of the biggest limitations of most PDF redaction tools is that they only work with
            PDFs. If someone sends you a Word document or Excel spreadsheet containing sensitive
            data, you cannot redact it with Adobe Acrobat or most other PDF redaction tools.
          </p>
          <p className={paragraphStyles}>
            <strong>Redactly is different.</strong> In addition to PDF redaction, Redactly supports:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="p-5 rounded-xl bg-blue-50 border border-blue-100">
              <FileText className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Word Documents</h3>
              <p className="text-sm text-gray-600">
                Redact .docx files directly &mdash; no PDF conversion needed.{" "}
                <Link href="/how-to/redact-a-word-document" className="text-blue-600 hover:underline">
                  Learn more
                </Link>
              </p>
            </div>
            <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-100">
              <FileText className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Excel Spreadsheets</h3>
              <p className="text-sm text-gray-600">
                Permanently remove sensitive data from .xlsx files.{" "}
                <Link href="/how-to/redact-excel" className="text-emerald-600 hover:underline">
                  Learn more
                </Link>
              </p>
            </div>
          </div>

          <p className={paragraphStyles}>
            This multi-format support makes Redactly uniquely valuable for organizations that handle
            documents in various formats &mdash; which is virtually every organization.
          </p>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Redact Your PDF?
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Redact PDFs online for free with AI-powered detection. No account, no software, no
              risk. Also handles Word and Excel.
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
                How do I permanently redact a PDF for free?
              </h3>
              <p className="text-sm text-gray-600">
                Use Redactly. Upload your PDF to redactly.online/tool, let AI detect sensitive
                information, review the detections, and download your permanently redacted PDF.
                No account needed, no software to install.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can you unredact a PDF?
              </h3>
              <p className="text-sm text-gray-600">
                If redaction is applied correctly (removing text from the content stream), it cannot
                be undone. However, many free tools only draw boxes over text, which can be removed.
                Always verify your redaction tool applies permanent removal.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                How do I redact a PDF on a Mac without Adobe?
              </h3>
              <p className="text-sm text-gray-600">
                You can use Preview&rsquo;s markup tools to draw shapes over text, but this is not
                secure redaction. For permanent redaction on Mac, use Redactly online (works in any
                browser) or Adobe Acrobat Pro for Mac.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can Redactly redact Word and Excel files too?
              </h3>
              <p className="text-sm text-gray-600">
                Yes. Redactly is the only free online redaction tool that supports PDF, Word, and
                Excel files. You can redact all three formats with the same tool, making it ideal
                for organizations that work with multiple document types.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                What is the difference between Adobe Acrobat Standard and Pro for redaction?
              </h3>
              <p className="text-sm text-gray-600">
                Adobe Acrobat Standard does not include the Redact tool. Only Adobe Acrobat Pro
                ($19.99/month) has redaction capabilities. If you need free redaction, use Redactly.
              </p>
            </div>
          </div>

          {/* Additional resources */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-400">
              More guides:{" "}
              <Link href="/how-to/redact-in-adobe" className="text-amber-600 hover:underline">
                Redact in Adobe Acrobat
              </Link>{" "}
              &middot;{" "}
              <Link href="/how-to/redact-a-word-document" className="text-amber-600 hover:underline">
                Redact a Word Document
              </Link>{" "}
              &middot;{" "}
              <Link href="/how-to/redact-excel" className="text-amber-600 hover:underline">
                Redact Excel
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}
