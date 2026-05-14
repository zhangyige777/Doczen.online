import Link from "next/link";
import type { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Legal Document Redaction — Protect Privileged Information | Redactly",
  description:
    "Learn how law firms and legal professionals redact sensitive information from legal documents. Free redaction tool supports PDF, Word, and Excel.",
};

const faqItems = [
  {
    question: "Is Redactly suitable for attorney-client privileged documents?",
    answer:
      "Redactly processes documents entirely in your browser memory with no server uploads or storage. This makes it suitable for handling privileged materials. However, for highly sensitive legal documents, we recommend consulting your firm's IT security policies before using any online tool.",
  },
  {
    question: "Can I redact legal documents without installing software?",
    answer:
      "Yes. Redactly is a fully online tool that runs in your browser. There is nothing to install. Upload a PDF, Word, or Excel document, review the detected sensitive data, and download the redacted version — all from your browser.",
  },
  {
    question: "Does Redactly support batch redaction for multiple legal documents?",
    answer:
      "The free plan supports individual document processing. The Pro plan includes batch processing for up to 10 files at once, which is useful for discovery document production and other bulk redaction workflows common in legal practice.",
  },
  {
    question: "What types of data can Redactly detect in legal documents?",
    answer:
      "Redactly uses AI to detect names, addresses, phone numbers, email addresses, Social Security numbers, financial account numbers, dates of birth, and more. You can also provide custom instructions to detect specific information relevant to your case or practice area.",
  },
];

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Legal Document Redaction for Law Firms
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            How legal professionals protect privileged and confidential information in documents.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 py-16 space-y-10 text-gray-700 leading-relaxed">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Why Legal Document Redaction Matters
          </h2>
          <p className="mb-4">
            Legal professionals handle some of the most sensitive documents in any industry. Discovery documents, contracts, court filings, and internal memoranda regularly contain personally identifiable information (PII), trade secrets, attorney-client privileged communications, and work product. Failing to properly redact these documents before filing or sharing them can have severe consequences.
          </p>
          <p className="mb-4">
                Courts have sanctioned law firms for inadequate redaction, including cases where hidden text was revealed by simply copying and pasting content from a redacted PDF. Traditional redaction methods — such as drawing black boxes over text — are often insufficient because the underlying text remains embedded in the document. Modern redaction requires permanent removal of the underlying data.
          </p>
          <p>
            Beyond the risk of sanctions, law firms must comply with data protection regulations like GDPR and CCPA, which impose specific requirements for handling personal data. A single improperly redacted document can expose a firm to regulatory fines, malpractice claims, and irreparable damage to client trust.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Types of Legal Documents That Need Redaction
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Discovery Documents</h3>
              <p className="text-gray-600">
                Discovery productions often contain vast amounts of personal data — names, addresses, Social Security numbers, medical records, and financial information. Proper redaction is essential before producing documents to opposing counsel or filing them with the court.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Contracts and Agreements</h3>
              <p className="text-gray-600">
                When filing contracts with regulators or using them as exhibits, sensitive commercial terms, bank account details, and personal guarantor information must be redacted. The same applies when redacting versions of contracts for public disclosure.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Court Filings</h3>
              <p className="text-gray-600">
                Many court rules require the redaction of personal identifiers from public filings. Federal Rule of Civil Procedure 5.2, for example, requires redaction of Social Security numbers, financial account numbers, dates of birth, and names of minor children in all federal court filings.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to Redact Legal Documents with Redactly
          </h2>
          <p className="mb-4">
            <Link href="/tool" className="text-blue-600 hover:underline">Redactly</Link> makes legal document redaction fast and reliable. Unlike desktop software that requires installation and licensing, Redactly works entirely in your browser — no setup, no IT approval, no per-seat costs.
          </p>
          <ol className="list-decimal pl-6 space-y-3 mb-4">
            <li>
              <strong className="text-gray-900">Upload your legal document</strong> — Drag and drop a PDF, .docx, or .xlsx file. Redactly accepts all three formats, so you can handle discovery documents, contracts, and spreadsheets in one place.
            </li>
            <li>
              <strong className="text-gray-900">AI scans for sensitive data</strong> — The AI automatically detects names, addresses, account numbers, SSNs, and more. You can also add custom instructions for case-specific redaction requirements.
            </li>
            <li>
              <strong className="text-gray-900">Review, confirm, and download</strong> — Every detection is highlighted for your review. Approve or reject each item, then apply permanent redactions. The redacted document is ready for filing or production.
            </li>
          </ol>
          <p>
            <Link href="/learn/what-is-redaction" className="text-blue-600 hover:underline">Learn more about document redaction best practices</Link> for legal professionals, or read our guide on <Link href="/how-to/redact-a-pdf" className="text-blue-600 hover:underline">how to redact a PDF</Link> for court filings.
          </p>
          <p className="mt-4">
          Redactly is the only free online redaction tool that supports PDF, Word, and Excel — making it the most versatile option for law firms that deal with diverse document formats.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Redact legal documents for free
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
            <Link href="/learn/what-is-redaction" className="text-blue-600 hover:underline">What Is Redaction?</Link>
            {" "}·{" "}
            <Link href="/how-to/redact-a-pdf" className="text-blue-600 hover:underline">How to Redact a PDF</Link>
          </p>
        </div>
      </article>
    </div>
  );
}
