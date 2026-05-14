export const runtime = "edge";

import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Shield, DollarSign, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How to Redact in Adobe Acrobat Pro & DC — Plus a Free Alternative | Redactly",
  description:
    "Step-by-step guide to Adobe's redaction tool. Learn where to find it, how to use it, and a free alternative that also handles Word & Excel.",
  alternates: { canonical: "/how-to/redact-in-adobe" },
  openGraph: {
    title: "How to Redact in Adobe Acrobat Pro & DC — Plus a Free Alternative | Redactly",
    description:
      "Step-by-step guide to Adobe's redaction tool. Learn where to find it, how to use it, and a free alternative that also handles Word & Excel.",
    url: "/how-to/redact-in-adobe",
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Redact in Adobe Acrobat Pro",
  description:
    "Step-by-step guide to using Adobe Acrobat Pro's redaction tool, including where to find it, how to apply redactions, and a free alternative.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Open your PDF in Adobe Acrobat Pro",
      text: "Launch Adobe Acrobat Pro and open the PDF file containing sensitive information.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Navigate to the Redact tool",
      text: "Click Tools in the top menu, then select Redact from the list of tools.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Mark content for redaction",
      text: "Use your cursor to select text, images, or entire pages that contain sensitive information. Adobe will highlight the selected areas.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Choose redaction marks",
      text: "Configure how redacted areas will appear — typically a black box with no overlay text.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Apply redactions",
      text: "Click Apply Redactions. Adobe will prompt you to save a copy. This step permanently removes the selected content from the PDF.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Save the redacted PDF",
      text: "Save the redacted PDF with a new filename to avoid overwriting the original document.",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Adobe Acrobat have a redaction tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but only in Adobe Acrobat Pro (the paid version, $19.99/month). Adobe Acrobat Standard and Adobe Reader do not include the redaction feature.",
      },
    },
    {
      "@type": "Question",
      name: "Where is the redact tool in Adobe Acrobat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Adobe Acrobat Pro, go to Tools > Redact. In Adobe Acrobat DC, use the search bar and search for 'Redact' to find the tool.",
      },
    },
    {
      "@type": "Question",
      name: "Can Adobe Acrobat redact Word or Excel files?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Adobe Acrobat Pro can only redact PDF files. It cannot redact Word (.docx) or Excel (.xlsx) files. You would need to convert those files to PDF first.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free alternative to Adobe Acrobat Pro for redaction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Redactly offers free online redaction for PDF, Word, and Excel files. No subscription needed, and it handles multiple file formats that Adobe does not support.",
      },
    },
  ],
};

const sectionStyles = "max-w-3xl mx-auto px-4 py-16";
const heading2Styles = "text-2xl font-bold text-gray-900 mt-14 mb-4";
const heading3Styles = "text-lg font-semibold text-gray-900 mt-8 mb-3";
const paragraphStyles = "text-gray-700 leading-relaxed mb-4";
const stepBoxStyles = "p-5 rounded-xl bg-gray-50 border border-gray-100";

export default function RedactInAdobePage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6 ring-1 ring-blue-500/20">
              <FileText className="w-3.5 h-3.5" />
              How-To Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              How to Redact in Adobe Acrobat &mdash; Step-by-Step Guide (Pro &amp; DC)
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Adobe Acrobat Pro has a powerful redaction tool &mdash; but only in the paid version.
              Learn exactly how to use it, where to find it, and explore a free alternative that
              also redacts Word and Excel.
            </p>
          </div>
        </section>

        <section className={sectionStyles}>
          {/* H2: Does Adobe Acrobat Have a Redaction Tool? */}
          <h2 className={heading2Styles}>Does Adobe Acrobat Have a Redaction Tool?</h2>
          <p className={paragraphStyles}>
            Yes, but with an important catch: <strong>only Adobe Acrobat Pro</strong> includes the
            redaction feature. Adobe Acrobat Standard ($12.99/month) and the free Adobe Acrobat
            Reader do not have any redaction capabilities.
          </p>
          <p className={paragraphStyles}>
            Adobe Acrobat Pro costs <strong>$19.99 per month</strong> (or $239.88 per year) and is
            available for both Windows and Mac. For organizations that already have Acrobat Pro
            licenses, the built-in redaction tool is a solid option for PDFs. But it has significant
            limitations that many users discover only after subscribing.
          </p>
          <p className={paragraphStyles}>
            <strong>Redactly is the only free online redaction tool that supports PDF, Word, and Excel.</strong>{" "}
            While Adobe Pro handles PDFs well, it cannot redact Word or Excel files at all. If your
            workflow involves multiple document formats, you need a different solution.
          </p>

          {/* H2: Where Is the Redact Tool in Adobe Acrobat? */}
          <h2 className={heading2Styles}>Where Is the Redact Tool in Adobe Acrobat?</h2>
          <p className={paragraphStyles}>
            The location of the Redact tool depends on your version of Acrobat:
          </p>

          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
              <span>
                <strong>Adobe Acrobat Pro (classic interface):</strong> Click <em>Tools</em> in the
                top menu, then scroll to find <em>Redact</em> in the tools list. If it does not
                appear, click <em>Add Tool</em> to add it to your toolbar.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
              <span>
                <strong>Adobe Acrobat DC:</strong> Click the <em>Tools</em> tab in the top-left
                corner, then search for &ldquo;Redact&rdquo; using the search bar. Click the result
                to open the Redact toolset.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
              <span>
                <strong>Keyboard shortcut:</strong> In Acrobat Pro, you can press
                <em> Ctrl+Shift+R</em> (Windows) or <em>Cmd+Shift+R</em> (Mac) to open the Redact
                tool directly.
              </span>
            </li>
          </ul>

          <div className="p-5 rounded-xl bg-amber-50 border border-amber-100 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-amber-800 mb-1">Important</p>
                <p className="text-sm text-amber-700">
                  If you are using Adobe Acrobat Standard or Adobe Reader, you will not see the
                  Redact tool. This feature is exclusive to Acrobat Pro.
                </p>
              </div>
            </div>
          </div>

          {/* H2: How to Redact in Adobe Acrobat Pro */}
          <h2 className={heading2Styles}>How to Redact in Adobe Acrobat Pro (Step-by-Step)</h2>
          <p className={paragraphStyles}>
            Follow these steps to redact a PDF using Adobe Acrobat Pro:
          </p>

          <div className="space-y-6 mb-8">
            <div className={stepBoxStyles}>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Open your PDF</h3>
                  <p className="text-sm text-gray-600">
                    Launch Adobe Acrobat Pro and open the PDF file containing sensitive information
                    that needs to be redacted.
                  </p>
                </div>
              </div>
            </div>

            <div className={stepBoxStyles}>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Navigate to the Redact tool
                  </h3>
                  <p className="text-sm text-gray-600">
                    Go to Tools &gt; Redact. If Redact is not visible, use the search bar to find
                    it, or right-click the toolbar and select Redact.
                  </p>
                </div>
              </div>
            </div>

            <div className={stepBoxStyles}>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Mark content for redaction
                  </h3>
                  <p className="text-sm text-gray-600">
                    Select the &ldquo;Mark for Redaction&rdquo; option, then click and drag over
                    text, images, or areas you want to redact. You can also redact entire pages or
                    use the &ldquo;Search &amp; Redact&rdquo; feature to find and mark all instances
                    of specific text.
                  </p>
                </div>
              </div>
            </div>

            <div className={stepBoxStyles}>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Configure redaction appearance
                  </h3>
                  <p className="text-sm text-gray-600">
                    Click the Redact tool settings (gear icon) to choose how redaction marks appear.
                    The default is a black box. You can also add overlay text like &ldquo;Redacted&rdquo;
                    if needed.
                  </p>
                </div>
              </div>
            </div>

            <div className={stepBoxStyles}>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Apply Redactions</h3>
                  <p className="text-sm text-gray-600">
                    <strong>This is the critical step.</strong> Click the &ldquo;Apply Redactions&rdquo;
                    button. Acrobat will warn you that this action cannot be undone. Confirm to
                    permanently remove the marked content. This step removes the text from the PDF
                    content stream, making it unrecoverable.
                  </p>
                </div>
              </div>
            </div>

            <div className={stepBoxStyles}>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold shrink-0">
                  6
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Save the redacted PDF</h3>
                  <p className="text-sm text-gray-600">
                    Save the redacted document with a new filename. This preserves your original
                    document and ensures the redacted version is clearly identified.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* H2: Adobe Acrobat DC */}
          <h2 className={heading2Styles}>How to Redact in Adobe Acrobat DC</h2>
          <p className={paragraphStyles}>
            Adobe Acrobat DC uses a slightly different interface. The Redact tool is accessed through
            the Tools hub.
          </p>
          <p className={paragraphStyles}>
            Open your PDF in Acrobat DC, click <em>Tools</em> in the top-left corner, and search for
            &ldquo;Redact.&rdquo; Click the Redact result to open the tool panel on the right side
            of the screen. From there, the process is the same: mark content, configure appearance,
            apply redactions, and save.
          </p>
          <p className={paragraphStyles}>
            The main difference in DC is the interface layout. The redaction engine itself works
            identically to the classic Pro version.
          </p>

          {/* H2: Adobe Acrobat Redaction Limitations */}
          <h2 className={heading2Styles}>Adobe Acrobat Redaction Limitations</h2>
          <p className={paragraphStyles}>
            While Adobe Acrobat Pro&rsquo;s redaction tool is competent for PDFs, it has notable
            limitations:
          </p>

          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-start gap-2.5">
              <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
              <span>
                <strong>Paid subscription required:</strong> At $19.99/month, the cost adds up
                quickly, especially if you only need redaction occasionally.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
              <span>
                <strong>No Word or Excel support:</strong> Adobe Acrobat can only redact PDFs. If
                someone sends you a Word document or Excel spreadsheet with sensitive data, you
                cannot redact it directly in Acrobat.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
              <span>
                <strong>Limited batch processing:</strong> While Acrobat Pro offers some batch
                processing capabilities, redacting multiple files simultaneously can be cumbersome
                and slow.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
              <span>
                <strong>No built-in AI detection:</strong> Adobe&rsquo;s redact tool relies on you
                to manually find and mark every piece of sensitive information. The Search &amp;
                Redact feature only helps if you already know exactly what to look for.
              </span>
            </li>
          </ul>

          {/* H2: Free Alternative */}
          <h2 className={heading2Styles}>Free Alternative: Redactly</h2>
          <p className={paragraphStyles}>
            If you need redaction but do not want to pay $19.99/month for Adobe Pro, or if you need
            to redact Word and Excel files in addition to PDFs, Redactly is the ideal alternative.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 font-semibold text-gray-900 border-b border-gray-200">
                    Feature
                  </th>
                  <th className="text-center p-3 font-semibold text-gray-900 border-b border-gray-200 bg-blue-50">
                    Adobe Acrobat Pro
                  </th>
                  <th className="text-center p-3 font-semibold text-gray-900 border-b border-gray-200 bg-emerald-50">
                    Redactly
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-gray-100 text-gray-700">Price</td>
                  <td className="p-3 border-b border-gray-100 text-center">
                    <span className="inline-flex items-center gap-1 text-red-600">
                      <DollarSign className="w-3.5 h-3.5" />
                      $19.99/mo
                    </span>
                  </td>
                  <td className="p-3 border-b border-gray-100 text-center">
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Free
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100 text-gray-700">PDF Redaction</td>
                  <td className="p-3 border-b border-gray-100 text-center">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mx-auto" />
                  </td>
                  <td className="p-3 border-b border-gray-100 text-center">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100 text-gray-700">Word Redaction</td>
                  <td className="p-3 border-b border-gray-100 text-center">
                    <XCircle className="w-4 h-4 text-red-400 mx-auto" />
                  </td>
                  <td className="p-3 border-b border-gray-100 text-center">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100 text-gray-700">Excel Redaction</td>
                  <td className="p-3 border-b border-gray-100 text-center">
                    <XCircle className="w-4 h-4 text-red-400 mx-auto" />
                  </td>
                  <td className="p-3 border-b border-gray-100 text-center">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100 text-gray-700">Online Use</td>
                  <td className="p-3 border-b border-gray-100 text-center">
                    <XCircle className="w-4 h-4 text-red-400 mx-auto" />
                  </td>
                  <td className="p-3 border-b border-gray-100 text-center">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-700">AI-Powered Detection</td>
                  <td className="p-3 text-center">
                    <XCircle className="w-4 h-4 text-red-400 mx-auto" />
                  </td>
                  <td className="p-3 text-center">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mb-12">
            <Link href="/tool">
              <Button size="lg" className="gap-2 text-base px-8 h-12 rounded-xl bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-200">
                <Shield className="w-5 h-5" />
                Try Redactly Free
              </Button>
            </Link>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Need a Free Redaction Alternative to Adobe?
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Redactly handles PDF, Word, and Excel in one tool. AI detects sensitive information
              automatically. No subscription needed.
            </p>
            <Link href="/tool">
              <Button size="lg" className="gap-2 text-base px-8 h-12 rounded-xl bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-200">
                <Shield className="w-5 h-5" />
                Try Redactly Free
              </Button>
            </Link>
            <p className="mt-3 text-xs text-gray-400">
              Free for 20 pages per month. No credit card required.
            </p>
          </div>

          {/* FAQ Section */}
          <h2 className={heading2Styles}>Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="p-5 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Does Adobe Acrobat have a redaction tool?
              </h3>
              <p className="text-sm text-gray-600">
                Yes, but only in Adobe Acrobat Pro (the paid version, $19.99/month). Adobe Acrobat
                Standard and Adobe Reader do not include the redaction feature.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Where is the redact tool in Adobe Acrobat?
              </h3>
              <p className="text-sm text-gray-600">
                In Adobe Acrobat Pro, go to Tools &gt; Redact. In Adobe Acrobat DC, use the search
                bar and search for &ldquo;Redact&rdquo; to find the tool. Alternatively, use the
                keyboard shortcut Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac).
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can Adobe Acrobat redact Word or Excel files?
              </h3>
              <p className="text-sm text-gray-600">
                No. Adobe Acrobat Pro can only redact PDF files. It cannot redact Word (.docx) or
                Excel (.xlsx) files directly. You would need to convert those files to PDF first,
                then redact the PDF.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Is there a free alternative to Adobe Acrobat Pro for redaction?
              </h3>
              <p className="text-sm text-gray-600">
                Yes. Redactly offers free online redaction for PDF, Word, and Excel files. No
                subscription needed, and it handles multiple file formats that Adobe does not
                support.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Do I need to apply redactions in Adobe for them to take effect?
              </h3>
              <p className="text-sm text-gray-600">
                Yes. In Adobe Acrobat Pro, marking text for redaction only highlights it. You must
                click the &ldquo;Apply Redactions&rdquo; button for the removal to become permanent.
                Until you apply, the marked text remains visible in the document.
              </p>
            </div>
          </div>

          {/* Additional resources */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-400">
              Learn more:{" "}
              <Link href="/vs/adobe-acrobat" className="text-blue-600 hover:underline">
                Redactly vs. Adobe Acrobat
              </Link>{" "}
              &middot;{" "}
              <Link href="/how-to/redact-a-pdf" className="text-blue-600 hover:underline">
                How to Redact a PDF
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
