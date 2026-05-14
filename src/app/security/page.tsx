import Link from "next/link";
import type { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Security & Privacy — How Redactly Protects Your Documents | Redactly",
  description:
    "Learn how Redactly keeps your documents secure. In-memory processing, no storage, automatic deletion after download.",
};

const faqItems = [
  {
    question: "Are my documents stored on Redactly's servers?",
    answer:
      "No. Redactly processes all documents entirely in your browser memory using WebAssembly and client-side JavaScript. Documents are never uploaded to any server. Once you close the browser tab or download the redacted file, all data is automatically cleared from memory.",
  },
  {
    question: "Is Redactly compliant with GDPR and HIPAA?",
    answer:
      "Redactly's in-memory processing model aligns with GDPR data minimization principles and HIPAA security requirements. Because documents never leave your device, there is no data transfer, storage, or third-party processing of your document content. For enterprise customers, we offer a Business Associate Agreement (BAA) for HIPAA compliance.",
  },
  {
    question: "What happens to my files after I download them?",
    answer:
      "Redacted files are generated in your browser memory and offered for download. After you download or close the tab, the data is automatically cleared. We do not retain copies of original or redacted documents. Audit logs (for Pro users) are stored in your browser's localStorage, which you can clear at any time.",
  },
  {
    question: "Is my data encrypted during processing?",
    answer:
      "All data transmitted between your browser and our servers (for the initial page load) is encrypted using TLS 1.3. The AI detection API calls are also encrypted. Document content processed in your browser memory is not persisted anywhere, so encryption at rest is not applicable — there is nothing stored to encrypt.",
  },
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Security & Privacy — How Redactly Protects Your Data
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Redactly was built from the ground up with privacy as the foundation, not an afterthought.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 py-16 space-y-10 text-gray-700 leading-relaxed">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">In-Memory Processing</h2>
          <p className="mb-4">
            Unlike most online document processing tools, Redactly does NOT upload your documents to a server. Every step of the redaction workflow — file reading, text extraction, AI detection, and redaction rendering — happens in your browser&apos;s memory using client-side technologies.
          </p>
          <p className="mb-4">
            When you upload a PDF, Word, or Excel file to Redactly, the file remains on your device. The AI detection process sends only the extracted text content (not the full document) to our secure API endpoint for analysis. This text is processed in a stateless manner — no logs are kept, and no data is retained after the response is returned.
          </p>
          <p>
            This architecture means that even if Redactly&apos;s infrastructure were compromised, your documents would be safe because they never left your computer. This is a fundamentally different approach from cloud-based redaction tools that require uploading files to remote servers for processing.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Automatic File Deletion</h2>
          <p className="mb-4">
            Once you have reviewed the detections and applied redactions, the redacted file is generated in your browser memory and offered for download. At this point, you have two options: download the redacted file or close the browser tab.
          </p>
          <p>
            In either case, the data is automatically cleared from memory. There is no "delete" button to click — the data simply ceases to exist when the browser tab is closed or the page is refreshed. For users who want to be extra cautious, closing the browser entirely ensures that all cached data is purged from system memory.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Storage, No Logs</h2>
          <p className="mb-4">
            Redactly does not store your documents, your redacted files, or your usage history on any server. We do not maintain logs of document content, filenames, or processing results. The only data we store is basic analytics (page views, feature usage) that contains no document content or personally identifiable information.
          </p>
          <p className="mb-4">
            For Pro and Enterprise users, audit logs and redaction certificates are stored locally in your browser&apos;s localStorage. You have full control over this data and can clear it at any time through your browser settings. We are exploring optional encrypted cloud storage for audit logs in the future, but it will always be opt-in.
          </p>
          <p>
            The AI text detection requests are processed by our provider in a stateless manner with no data retention. We have verified that no document text is used for model training or any purpose beyond fulfilling your specific detection request.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Encryption</h2>
          <p className="mb-4">
            All communications between your browser and Redactly&apos;s infrastructure are encrypted using TLS 1.3, ensuring that data in transit cannot be intercepted or modified. The AI detection API uses industry-standard HTTPS with certificate validation.
          </p>
          <p>
            Because documents are not stored on any server, encryption at rest is not applicable to document content. For the minimal data we do store (analytics, user preferences), we follow industry best practices for database encryption and access control.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Experience privacy-first redaction
          </h3>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            Redactly is the only free online redaction tool that supports PDF, Word, and Excel. Your data never leaves your device.
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
            <Link href="/learn/data-privacy-compliance" className="text-blue-600 hover:underline">Data Privacy Compliance Guide</Link>
          </p>
        </div>
      </article>
    </div>
  );
}
