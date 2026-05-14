import Link from "next/link";
import type { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Batch Redaction — Redact Multiple Documents at Once | Redactly",
  description:
    "Learn how to redact multiple PDF, Word, or Excel files at once with Redactly's batch redaction feature. Free and no account required.",
};

const faqItems = [
  {
    question: "How many files can I redact in a batch?",
    answer:
      "The Pro plan supports batch processing of up to 10 files at once. The Enterprise plan offers unlimited batch processing for high-volume workflows. The free plan processes files individually.",
  },
  {
    question: "Does batch redaction work with different file types in one batch?",
    answer:
      "Yes. You can mix PDF, Word (.docx), and Excel (.xlsx) files in a single batch. Redactly handles each file according to its format, applying the same AI detection settings across all files.",
  },
  {
    question: "Can I review detections before applying batch redactions?",
    answer:
      "Batch redaction uses an automated workflow where detections are applied automatically. Each file is processed with the same instruction settings. For individual review of each detection, use the single-file mode which provides a detailed review panel before redaction.",
  },
  {
    question: "Is batch redaction available for free?",
    answer:
      "Batch redaction is available on the Pro plan ($19/month) and Enterprise plan (custom pricing). The free plan supports individual file processing with 20 pages per month.",
  },
];

export default function BatchRedactionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Batch Redaction — Redact Multiple Files at Once
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            How to save time by redacting multiple PDF, Word, or Excel documents in a single operation.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 py-16 space-y-10 text-gray-700 leading-relaxed">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Is Batch Redaction?</h2>
          <p className="mb-4">
            Batch redaction is the process of redacting sensitive information from multiple documents simultaneously. Instead of opening, reviewing, and redacting each file one at a time, batch redaction applies the same redaction rules across an entire set of files and produces redacted versions of all of them in a single workflow.
          </p>
          <p className="mb-4">
            For organizations that handle large volumes of sensitive documents, batch redaction is not just a convenience — it is a necessity. Processing documents individually is time-consuming, error-prone, and creates bottlenecks in workflows that involve dozens or hundreds of files. With batch redaction, you can process an entire document set with consistent redaction rules, ensuring that nothing is missed.
          </p>
          <p>
            Redactly is the only free online redaction tool that supports PDF, Word, and Excel, and its Pro plan extends this multi-format support to batch processing. You can mix file types in a single batch — redact PDF contracts, Word agreements, and Excel spreadsheets all at once.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who Needs Batch Redaction?</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Law Firms</h3>
              <p className="text-gray-600">
                Discovery productions often involve hundreds or thousands of documents that need consistent redaction before being produced to opposing counsel. Batch redaction ensures that all documents in a production set are redacted with the same rules, reducing the risk of inadvertently producing unredacted sensitive data.
              </p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">HR Departments</h3>
              <p className="text-gray-600">
                When responding to employment verification requests, audit inquiries, or internal investigations, HR teams often need to redact multiple employee records at once. Batch redaction allows them to process all relevant files with consistent privacy protections.
              </p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Finance Teams</h3>
              <p className="text-gray-600">
                Monthly reporting cycles often require redacting multiple financial statements, invoices, and reports before distribution. Batch redaction lets finance teams process all documents in one go, applying the same redaction rules across the entire report set.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to Batch Redact Documents with Redactly
          </h2>
          <p className="mb-4">
            Batch redacting documents with <Link href="/tool" className="text-blue-600 hover:underline">Redactly</Link> is simple. Here is how the workflow works on the Pro plan:
          </p>
          <ol className="list-decimal pl-6 space-y-3 mb-4">
            <li>
              <strong className="text-gray-900">Upload multiple files</strong> — Drag and drop up to 10 PDF, Word (.docx), or Excel (.xlsx) files. You can mix formats in a single batch.
            </li>
            <li>
              <strong className="text-gray-900">Set your instructions</strong> — Provide optional instructions for the AI to follow. For example: "Redact all names, account numbers, and email addresses." The same instructions apply to all files in the batch.
            </li>
            <li>
              <strong className="text-gray-900">Process the batch</strong> — Click start, and Redactly processes each file automatically. You will see real-time progress for each file as it is extracted, analyzed, and redacted.
            </li>
            <li>
              <strong className="text-gray-900">Download redacted files</strong> — Once processing is complete, download each redacted file individually or as a group. Each file keeps its original format and filename with a "redacted-" prefix.
            </li>
          </ol>
          <p>
            Each file in the batch is processed with the same AI detection settings, ensuring consistent redaction across your entire document set. Because Redactly processes everything in your browser memory, even batch operations maintain privacy — no files are uploaded to external servers.
          </p>
          <p className="mt-4">
            For high-volume workflows, consider the Enterprise plan which offers unlimited batch processing, dedicated support, and optional on-premise deployment. <Link href="/features/ai-redaction" className="text-blue-600 hover:underline">Learn about AI redaction</Link> or explore <Link href="/use-cases/finance" className="text-blue-600 hover:underline">batch redaction for finance teams</Link>.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Try Redactly for batch redaction
          </h3>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            Redactly is the only free online redaction tool that supports PDF, Word, and Excel. Upgrade to Pro for batch processing.
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
            <Link href="/features/ai-redaction" className="text-blue-600 hover:underline">AI Redaction</Link>
            {" "}·{" "}
            <Link href="/use-cases/finance" className="text-blue-600 hover:underline">Finance Use Cases</Link>
          </p>
        </div>
      </article>
    </div>
  );
}
