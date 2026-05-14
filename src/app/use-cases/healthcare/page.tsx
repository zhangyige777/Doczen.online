import Link from "next/link";
import type { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Healthcare Document Redaction — HIPAA Compliant Redaction | Redactly",
  description:
    "Learn how healthcare organizations redact PHI from medical records and patient documents. Free HIPAA-compliant redaction tool.",
};

const faqItems = [
  {
    question: "Is Redactly HIPAA compliant?",
    answer:
      "Redactly processes documents in your browser memory with no server-side storage, which aligns with HIPAA security requirements. However, we recommend that healthcare organizations consult their compliance officer and review our security documentation before using the tool for PHI. Enterprise customers can request a security assessment and sign a Business Associate Agreement (BAA).",
  },
  {
    question: "What PHI identifiers can Redactly detect?",
    answer:
      "Redactly uses AI to detect all 18 HIPAA identifiers including names, addresses, dates (except year), telephone numbers, fax numbers, email addresses, Social Security numbers, medical record numbers, health plan beneficiary numbers, account numbers, certificate or license numbers, vehicle identifiers, device identifiers, URLs, IP addresses, biometric identifiers, and full-face photographs.",
  },
  {
    question: "Can I redact medical records in Excel format?",
    answer:
      "Yes. Redactly is the only free online redaction tool that supports PDF, Word, and Excel. Healthcare organizations often use Excel for patient lists, billing records, and scheduling data — Redactly can redact specific cells or entire columns of PHI from these spreadsheets.",
  },
  {
    question: "Does Redactly store my patients' medical records?",
    answer:
      "No. Documents are processed entirely in your browser memory. They are never uploaded to any server, and the data is automatically deleted when you close the browser tab or download the redacted file. We do not have access to your original or redacted documents.",
  },
];

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Healthcare Document Redaction — Protect Patient Data
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            How healthcare organizations redact protected health information (PHI) from medical records and patient documents.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 py-16 space-y-10 text-gray-700 leading-relaxed">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Why Healthcare Needs Document Redaction
          </h2>
          <p className="mb-4">
            Healthcare organizations generate and manage vast amounts of sensitive patient data every day. From medical records and lab results to billing statements and insurance claims, these documents contain protected health information (PHI) that must be safeguarded under the Health Insurance Portability and Accountability Act (HIPAA).
          </p>
          <p className="mb-4">
            The need for redaction arises in many common scenarios. When medical records are shared with lawyers for litigation support, with researchers for clinical studies, or with patients themselves, non-essential PHI must be removed. A medical record requested for a workers' compensation case, for instance, may contain information about unrelated conditions that the requesting party has no right to see.
          </p>
          <p>
            Beyond HIPAA, healthcare organizations must also comply with state-specific privacy laws, GDPR for international patients, and the HITECH Act's breach notification requirements. A single improperly redacted document can result in a data breach, triggering notification obligations, regulatory fines, and loss of patient trust.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            HIPAA and PHI Redaction Requirements
          </h2>
          <p className="mb-4">
            HIPAA&apos;s Privacy Rule establishes national standards for protecting individuals&apos; medical records and other personal health information. The rule applies to covered entities (healthcare providers, health plans, and healthcare clearinghouses) and their business associates.
          </p>
          <p className="mb-4">
            For a document to be considered de-identified under HIPAA, it must have all 18 identifiers removed:
          </p>
          <div className="grid sm:grid-cols-2 gap-2 mb-4">
            {[
              "Names",
              "Geographic subdivisions smaller than a state",
              "Dates (except year)",
              "Telephone numbers",
              "Fax numbers",
              "Email addresses",
              "Social Security numbers",
              "Medical record numbers",
              "Health plan beneficiary numbers",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm">
                <span className="text-green-500 mt-0.5 shrink-0">&#10003;</span>
                <span>{item}</span>
              </div>
            ))}
            {[
              "Account numbers",
              "Certificate or license numbers",
              "Vehicle identifiers",
              "Device identifiers",
              "URLs",
              "IP addresses",
              "Biometric identifiers",
              "Full-face photographs",
              "Any other unique identifying characteristic",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm">
                <span className="text-green-500 mt-0.5 shrink-0">&#10003;</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p>
            Safe harbor de-identification under HIPAA requires removal of all 18 identifiers. Redactly&apos;s AI detection engine is designed to identify each of these categories across PDF, Word, and Excel documents.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to Redact Healthcare Documents with Redactly
          </h2>
          <p className="mb-4">
            <Link href="/tool" className="text-blue-600 hover:underline">Redactly</Link> streamlines healthcare document redaction with a simple three-step process:
          </p>
          <ol className="list-decimal pl-6 space-y-3 mb-4">
            <li>
              <strong className="text-gray-900">Upload the document</strong> — Drag and drop a PDF, Word (.docx), or Excel (.xlsx) file. Redactly supports the formats most commonly used in healthcare settings.
            </li>
            <li>
              <strong className="text-gray-900">AI detects PHI automatically</strong> — The AI scans for all 18 HIPAA identifiers and any other sensitive data you specify through custom instructions.
            </li>
            <li>
              <strong className="text-gray-900">Review and download</strong> — Each detection is highlighted for your review. Keep or reject items, then apply permanent redaction. The redacted document is downloaded directly to your device.
            </li>
          </ol>
          <p>
            For more information, see our <Link href="/learn/data-privacy-compliance" className="text-blue-600 hover:underline">comprehensive guide to data privacy compliance</Link> or read about <Link href="/blog/redact-medical-records" className="text-blue-600 hover:underline">best practices for redacting medical records</Link>.
          </p>
          <p className="mt-4">
            Redactly is the only free online redaction tool that supports PDF, Word, and Excel — making it the most practical option for healthcare organizations that handle diverse document types in their daily operations.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Redact healthcare documents for free
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
            <Link href="/learn/data-privacy-compliance" className="text-blue-600 hover:underline">Data Privacy Compliance</Link>
            {" "}·{" "}
            <Link href="/blog/redact-medical-records" className="text-blue-600 hover:underline">Redacting Medical Records</Link>
          </p>
        </div>
      </article>
    </div>
  );
}
