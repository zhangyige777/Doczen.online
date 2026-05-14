import Link from "next/link";
import type { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Financial Document Redaction — Protect Sensitive Financial Data | Redactly",
  description:
    "Learn how financial professionals redact sensitive data from bank statements, financial reports, and Excel spreadsheets. Free online tool.",
};

const documents = [
  {
    title: "Bank Statements",
    description:
      "Bank statements contain account numbers, transaction details, and personally identifiable information. Before sharing with lenders, landlords, or auditors, sensitive fields like account numbers and routing numbers must be permanently redacted.",
  },
  {
    title: "Tax Documents",
    description:
      "Tax returns and related documents include Social Security numbers, income figures, and investment details. Redacting tax documents is essential when sharing them during loan applications, divorce proceedings, or business partnerships.",
  },
  {
    title: "Financial Reports",
    description:
      "Internal financial reports often contain trade secrets, compensation data, and strategic information. When shared with board members, investors, or regulators, non-essential sensitive data must be removed to protect the organization.",
  },
  {
    title: "Invoices",
    description:
      "Invoices contain payment terms, bank account details, and customer information. Redacting invoices before sharing them in disputes, audits, or as part of legal proceedings prevents unnecessary exposure of financial data.",
  },
];

const faqItems = [
  {
    question: "Can I redact bank statements for free?",
    answer:
      "Yes. Redactly is a free online redaction tool that supports PDF, Word, and Excel formats. You can upload a bank statement, use AI to detect account numbers and personal information, and download the redacted version — all without paying or creating an account.",
  },
  {
    question: "Is it safe to upload financial documents to an online tool?",
    answer:
      "Redactly processes all documents entirely in your browser memory. Files are never uploaded to an external server and are automatically deleted after you download the redacted version. This makes it safe for handling sensitive financial documents.",
  },
  {
    question: "Does Redactly support Excel spreadsheets?",
    answer:
      "Yes. Redactly is the only free online redaction tool that supports PDF, Word, and Excel. You can redact specific cells, rows, or columns containing financial data directly within Excel files without converting them to another format.",
  },
  {
    question: "What types of financial data can Redactly detect?",
    answer:
      "Redactly uses AI to detect account numbers, routing numbers, Social Security numbers, tax IDs, credit card numbers, names, addresses, phone numbers, and email addresses. You can also provide custom instructions for specific data types.",
  },
];

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Financial Document Redaction — Protect Sensitive Data
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            How financial professionals redact sensitive information from bank statements, tax documents, and spreadsheets.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 py-16 space-y-10 text-gray-700 leading-relaxed">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Why Financial Documents Need Redaction
          </h2>
          <p className="mb-4">
            Financial documents are among the most sensitive files handled by businesses and individuals. A single bank statement contains account numbers, transaction histories, addresses, and sometimes Social Security numbers or tax identifiers. When these documents are shared — with a landlord, a mortgage broker, an auditor, or opposing counsel — failing to redact sensitive information can lead to identity theft, financial fraud, and regulatory violations.
          </p>
          <p className="mb-4">
            Financial institutions face additional scrutiny under regulations like the Gramm-Leach-Bliley Act (GLBA), which requires financial institutions to protect customer financial information. Similarly, the Sarbanes-Oxley Act (SOX) imposes strict requirements for financial record-keeping and disclosure. Improperly redacted financial documents can expose organizations to compliance violations, lawsuits, and reputational harm.
          </p>
          <p>
            Beyond compliance, there is a practical concern. Financial documents often contain data that is irrelevant to the purpose of sharing. An invoice submitted as evidence in a dispute, for example, may contain account details that the other party has no legitimate need to see. Redaction allows you to share only what is necessary, nothing more.
          </p>
        </section>

        {/* Section 2 - Common Documents */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Common Financial Documents That Require Redaction
          </h2>
          <div className="space-y-6">
            {documents.map((doc) => (
              <div key={doc.title} className="border-l-4 border-amber-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{doc.title}</h3>
                <p className="text-gray-600">{doc.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to Redact Financial Documents with Redactly
          </h2>
          <p className="mb-4">
            Redacting financial documents with <Link href="/tool" className="text-blue-600 hover:underline">Redactly</Link> is straightforward. Upload your document — PDF, Word, or Excel — and let the AI scan for sensitive financial data. Redactly will detect account numbers, routing numbers, tax IDs, names, addresses, and other personally identifiable information.
          </p>
          <ol className="list-decimal pl-6 space-y-3 mb-4">
            <li>
              <strong className="text-gray-900">Upload your document</strong> — Drag and drop a PDF, .docx, or .xlsx file into Redactly. Files up to 50 MB are supported on the free plan.
            </li>
            <li>
              <strong className="text-gray-900">Review AI detections</strong> — Redactly highlights all detected sensitive data. Review each item and decide what to keep or reject before applying redactions.
            </li>
            <li>
              <strong className="text-gray-900">Download the redacted file</strong> — Once you are satisfied, apply the redactions and download your cleaned document. The original file is never stored.
            </li>
          </ol>
          <p>
            For Excel files specifically, Redactly handles cell-level redaction, removing content from selected cells while preserving the structure and formatting of the spreadsheet. This is particularly useful for financial reports that need to retain their layout after redaction.
          </p>
          <p className="mt-4">
            Best of all, Redactly is the only free online redaction tool that supports PDF, Word, and Excel. You can handle all your financial document redaction needs in one place, without installing software or creating an account.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Start redacting financial documents
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
            <Link href="/how-to/redact-excel" className="text-blue-600 hover:underline">How to Redact Excel</Link>
            {" "}·{" "}
            <Link href="/blog/redact-bank-statement-rental" className="text-blue-600 hover:underline">Redacting Bank Statements for Rentals</Link>
          </p>
        </div>
      </article>
    </div>
  );
}
