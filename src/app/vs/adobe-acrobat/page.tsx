import Link from "next/link";
import type { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Redactly vs Adobe Acrobat Pro — Redaction Tool Comparison | Redactly",
  description:
    "Compare Redactly vs Adobe Acrobat Pro for document redaction. See why Redactly supports Word and Excel while Adobe doesn't — and it's free.",
};

const faqItems = [
  {
    question: "Is Redactly really free?",
    answer:
      "Yes. Redactly offers a free plan that includes 20 pages per month, PDF redaction, Word redaction, and standard PII detection. The Pro plan at $19/month adds Excel redaction, batch processing, audit logs, and redaction certificates. Compare this to Adobe Acrobat Pro at $19.99/month which only supports PDF redaction.",
  },
  {
    question: "Can Adobe Acrobat Pro redact Word documents?",
    answer:
      "No. Adobe Acrobat Pro can only redact PDF files. To redact Word documents, you would need a separate tool or convert the Word file to PDF first, which can introduce formatting issues. Redactly handles PDF, Word, and Excel natively in one tool.",
  },
  {
    question: "Which is better for batch redaction — Redactly or Adobe?",
    answer:
      "Adobe Acrobat Pro includes batch redaction capabilities through its Action Wizard. Redactly's Pro plan supports batch processing of up to 10 files. For occasional batch needs, both work well. For enterprise-scale batch workflows, Adobe has more advanced automation options, but at a significantly higher cost.",
  },
  {
    question: "Does Redactly produce permanent redactions like Adobe?",
    answer:
      "Yes. Like Adobe Acrobat Pro, Redactly performs permanent redaction that removes the underlying text data, not just a visual overlay. When you redact with Redactly, the sensitive information is permanently removed and cannot be recovered.",
  },
];

export default function VsAdobeAcrobatPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Redactly vs Adobe Acrobat Pro — Which Redaction Tool Is Better?
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            An honest comparison of two document redaction tools for professionals.
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
                  <th className="text-center px-5 py-3 font-semibold text-gray-900">Adobe Acrobat Pro</th>
                  <th className="text-center px-5 py-3 font-semibold text-amber-600">Redactly</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Price", "$19.99/mo", "Free"],
                  ["PDF Redaction", "✅", "✅"],
                  ["Word Redaction", "❌", "✅"],
                  ["Excel Redaction", "❌", "✅"],
                  ["Online (no install)", "❌", "✅"],
                ].map(([feature, adobe, redactly]) => (
                  <tr key={feature}>
                    <td className="px-5 py-3 font-medium text-gray-900">{feature}</td>
                    <td className="px-5 py-3 text-center text-gray-600">{adobe}</td>
                    <td className="px-5 py-3 text-center text-green-600 font-medium">{redactly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Adobe Acrobat Pro Overview</h2>
          <p className="mb-4">
            Adobe Acrobat Pro is the industry standard for PDF editing and management. Its redaction tool, introduced in Acrobat 8, allows users to search for and permanently remove text from PDF documents. The tool includes pattern-based search for Social Security numbers, credit card numbers, and other common data types, as well as custom search patterns.
          </p>
          <p className="mb-4">
            Adobe&apos;s redaction workflow is robust for PDFs: you mark text for redaction, apply the redactions, and the underlying content is permanently removed. Adobe also supports redaction of metadata, hidden text, and embedded file information.
          </p>
          <p>
            However, Adobe Acrobat Pro has significant limitations. It only works with PDF files — Word and Excel documents must be converted to PDF first, which can alter formatting and introduce errors. It is also expensive at $19.99 per month, requires installation on Windows or macOS, and has no option for browser-based redaction.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Redactly Overview</h2>
          <p className="mb-4">
            <Link href="/tool" className="text-blue-600 hover:underline">Redactly</Link> is a modern, browser-based redaction tool that uses AI to detect sensitive data across PDF, Word, and Excel files. Unlike Adobe, Redactly is designed for users who need to redact documents in multiple formats without installing software.
          </p>
          <p className="mb-4">
            Redactly&apos;s key advantage is its AI-powered detection engine. Instead of relying solely on regex patterns, Redactly uses contextual understanding to identify sensitive information. This means it can detect names, addresses, and other data that pattern-based tools might miss.
          </p>
          <p>
            Redactly is the only free online redaction tool that supports PDF, Word, and Excel. The free plan includes 20 pages per month with PDF and Word support. The Pro plan at $19/month adds Excel, batch processing, audit logs, and redaction certificates — the same price as Adobe for more features.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Feature Comparison</h2>
          <p className="mb-4">
            When comparing features side by side, the choice between Adobe Acrobat Pro and Redactly depends on your specific needs:
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Format Support</h3>
              <p className="text-gray-600">
                Adobe only supports PDF. If you need to redact Word or Excel files, you must convert them to PDF first or purchase additional tools. Redactly supports all three formats natively, saving time and preserving document integrity.
              </p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Detection Method</h3>
              <p className="text-gray-600">
                Adobe uses regex pattern matching, which works well for structured data like SSNs and credit cards but misses unstructured sensitive data. Redactly uses AI with contextual understanding, detecting a wider range of sensitive information including names, addresses, and custom-specified data.
              </p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Accessibility</h3>
              <p className="text-gray-600">
                Adobe requires installation on a desktop computer. Redactly works entirely in your browser — use it on any device with an internet connection, including Chromebooks and tablets.
              </p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Cost</h3>
              <p className="text-gray-600">
                Adobe Acrobat Pro costs $19.99/month for a single license. Redactly is free for up to 20 pages/month, with a Pro plan at $19/month that includes Excel and batch processing — the same price for substantially more format coverage.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Choose Adobe</h2>
          <p className="mb-4">
            Adobe Acrobat Pro remains the better choice if your redaction needs are exclusively PDF-based and you already have an Adobe Creative Cloud subscription. Adobe offers more advanced PDF-specific features like redacting metadata and hidden layers, and its batch processing capabilities through the Action Wizard are more sophisticated for large-scale workflows.
          </p>
          <p>
            If your organization has standardized on Adobe for all PDF workflows and has the budget for per-seat licensing, Adobe Acrobat Pro is a capable (if expensive) PDF redaction tool.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Choose Redactly</h2>
          <p className="mb-4">
            Choose Redactly if you work with multiple document formats. If you regularly redact Word documents, Excel spreadsheets, and PDFs, Redactly saves you the hassle of converting files or switching between tools. It is also the right choice if you need a no-install, browser-based solution — whether for security compliance (no software to deploy), cross-platform use, or occasional redaction needs.
          </p>
          <p>
            For individuals and small teams on a budget, Redactly&apos;s free plan offers substantial capability at zero cost. And because Redactly processes documents in memory with no server storage, it satisfies privacy requirements that cloud-based competitors cannot match.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Try Redactly free — no credit card required
          </h3>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            Redactly is the only free online redaction tool that supports PDF, Word, and Excel. Redact your first document in seconds.
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
            <Link href="/how-to/redact-in-adobe" className="text-blue-600 hover:underline">How to Redact in Adobe</Link>
            {" "}·{" "}
            <Link href="/blog/best-redaction-software-2025" className="text-blue-600 hover:underline">Best Redaction Software 2025</Link>
          </p>
        </div>
      </article>
    </div>
  );
}
