import Link from "next/link";
import type { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Redactly vs Smallpdf — Redaction Tool Comparison | Redactly",
  description:
    "Compare Redactly vs Smallpdf for document redaction. Smallpdf offers PDF tools with limited redaction; Redactly adds free Word and Excel support.",
};

const faqItems = [
  {
    question: "Is Smallpdf's redaction tool free?",
    answer:
      "Smallpdf offers a limited free tier with restricted usage, typically 2-3 files per day. Its redaction tool is part of the Pro subscription. Redactly offers a completely free plan with 20 pages per month for PDF and Word redaction, with no daily limits.",
  },
  {
    question: "Does Smallpdf support Word and Excel redaction?",
    answer:
      "No. Smallpdf primarily focuses on PDF tools. While it offers PDF-to-Word and PDF-to-Excel conversion, it does not natively redact Word or Excel files. Redactly is the only free online redaction tool that supports PDF, Word, and Excel natively.",
  },
  {
    question: "Does Smallpdf have AI-powered redaction?",
    answer:
      "Smallpdf's redaction is pattern-based and requires you to manually define search terms or patterns. It does not use AI for contextual detection. Redactly uses AI to automatically detect sensitive data including names, addresses, and account numbers without requiring predefined patterns.",
  },
  {
    question: "Which tool is better for privacy-conscious users?",
    answer:
      "Both tools process files online, but Redactly has a stronger privacy model. Documents are processed entirely in browser memory and never uploaded to external servers. Smallpdf uploads files to its servers for processing, which may be a concern for users handling sensitive documents.",
  },
];

export default function VsSmallpdfPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Redactly vs Smallpdf — Redaction Feature Comparison
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            How two popular online redaction tools compare for format support, AI detection, and pricing.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 py-16 space-y-10 text-gray-700 leading-relaxed">
        {/* Comparison table */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Feature Comparison at a Glance</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3 font-semibold text-gray-900">Feature</th>
                  <th className="text-center px-5 py-3 font-semibold text-gray-900">Smallpdf</th>
                  <th className="text-center px-5 py-3 font-semibold text-amber-600">Redactly</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["PDF Redaction", "✅", "✅"],
                  ["Word Redaction", "❌", "✅"],
                  ["Excel Redaction", "❌", "✅"],
                  ["Free Tier", "Limited", "✅"],
                  ["AI Detection", "❌", "✅"],
                ].map(([feature, smallpdf, redactly]) => (
                  <tr key={feature}>
                    <td className="px-5 py-3 font-medium text-gray-900">{feature}</td>
                    <td className="px-5 py-3 text-center text-gray-600">{smallpdf}</td>
                    <td className="px-5 py-3 text-center text-green-600 font-medium">{redactly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Smallpdf Overview</h2>
          <p className="mb-4">
            Smallpdf is a well-known online PDF platform offering a suite of tools for PDF conversion, compression, editing, and signing. It includes a redaction tool as part of its Pro subscription, allowing users to search for and black out text in PDF documents.
          </p>
          <p className="mb-4">
            Smallpdf&apos;s redaction tool supports search-and-redact patterns, which users can configure to find specific text or patterns like email addresses and phone numbers. The tool is easy to use and works entirely in the browser, with no installation required.
          </p>
          <p>
            However, Smallpdf has notable limitations. The free tier is heavily restricted, allowing only 2-3 file operations per day. The redaction tool itself is limited to simple pattern matching — it lacks AI-powered contextual detection. And critically, Smallpdf only supports PDF files; it cannot redact Word or Excel documents natively.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Redactly Overview</h2>
          <p className="mb-4">
            <Link href="/tool" className="text-blue-600 hover:underline">Redactly</Link> is a purpose-built document redaction tool that goes beyond Smallpdf&apos;s PDF-only approach. While Smallpdf is a general PDF utility suite with redaction as one feature among many, Redactly is focused entirely on doing one thing extremely well: finding and removing sensitive data from documents.
          </p>
          <p className="mb-4">
            Redactly&apos;s AI-powered detection engine understands context, not just patterns. It can identify names, addresses, account numbers, and other sensitive data that a simple regex search might miss. And because Redactly supports PDF, Word, and Excel, you can handle all your redaction needs in one place.
          </p>
          <p>
            Redactly is the only free online redaction tool that supports PDF, Word, and Excel. The free plan includes 20 pages per month with PDF and Word redaction. The Pro plan at $19/month adds Excel, batch processing, audit logs, and redaction certificates. Unlike Smallpdf&apos;s free tier which limits daily usage, Redactly&apos;s free plan lets you use your 20-page monthly allowance however you like.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Feature Comparison</h2>
          <p className="mb-4">
            Here is a deeper look at how the two tools compare across key dimensions:
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Format Support</h3>
              <p className="text-gray-600">
                Smallpdf is PDF-only. If you receive a Word document or Excel spreadsheet that needs redaction, you must first convert it to PDF using another Smallpdf tool (assuming you have conversions remaining in your free tier). Redactly handles all three formats natively.
              </p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">AI Detection</h3>
              <p className="text-gray-600">
                Smallpdf uses regex-based pattern matching. You need to know what you are looking for and configure the patterns yourself. Redactly uses AI to understand document context, automatically detecting a wider range of sensitive data without manual configuration.
              </p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Privacy</h3>
              <p className="text-gray-600">
                Smallpdf uploads files to its servers for processing. Redactly processes everything in your browser memory with no server uploads, providing stronger privacy guarantees for sensitive documents.
              </p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Pricing</h3>
              <p className="text-gray-600">
                Smallpdf Pro costs $9/month (billed annually at $108/year) or $12/month for monthly billing. It includes access to all Smallpdf tools but is still limited to PDF. Redactly is free for 20 pages/month with PDF and Word, and $19/month for everything including Excel.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Try the better redaction tool for free
          </h3>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            Redactly is the only free online redaction tool that supports PDF, Word, and Excel. No account required, no data stored.
          </p>
          <Link
            href="/tool"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-xl transition-colors shadow-md shadow-amber-200"
          >
            Start Redacting Free
          </Link>
        </div>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">FAQ</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details key={index} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-gray-900 font-medium hover:bg-gray-50 transition-colors [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <svg
                    className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related links */}
        <div className="border-t border-gray-100 pt-6 text-sm text-gray-400">
          <p>
            <span className="font-medium text-gray-600">Related:</span>{" "}
            <Link href="/tool" className="text-blue-600 hover:underline">Redaction Tool</Link>
            {" "}·{" "}
            <Link href="/blog/best-redaction-software-2025" className="text-blue-600 hover:underline">Best Redaction Software 2025</Link>
          </p>
        </div>
      </article>
    </div>
  );
}
