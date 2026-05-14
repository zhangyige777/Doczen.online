import Link from "next/link";
import type { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Data Privacy Compliance — GDPR, HIPAA & CCPA Redaction Guide | Redactly",
  description:
    "Ensure your document redaction process meets GDPR, HIPAA, and CCPA compliance requirements. Learn best practices for data privacy in 2025.",
};

const faqItems = [
  {
    question: "What is the difference between GDPR, HIPAA, and CCPA?",
    answer:
      "GDPR (General Data Protection Regulation) governs data privacy for EU citizens. HIPAA (Health Insurance Portability and Accountability Act) protects medical information in the US. CCPA (California Consumer Privacy Act) gives California residents rights over their personal data. Each regulation has specific requirements for how sensitive data must be handled, stored, and redacted.",
  },
  {
    question: "Does redacting a PDF make it GDPR compliant?",
    answer:
      "Redaction is one component of GDPR compliance, not the whole picture. Permanently removing personal data from documents before sharing them helps satisfy the GDPR principle of data minimization. However, compliance also requires proper access controls, data processing records, and breach notification procedures. Redactly helps with the redaction aspect by permanently removing sensitive information from PDF, Word, and Excel files.",
  },
  {
    question: "Can Redactly handle HIPAA compliant redaction?",
    answer:
      "Yes. Redactly can detect and redact 18 HIPAA identifiers including names, dates, contact information, Social Security numbers, medical record numbers, and health plan beneficiary numbers. Documents are processed in memory and never stored, which aligns with HIPAA security standards.",
  },
  {
    question: "What types of data does CCPA require me to redact?",
    answer:
      "CCPA defines personal information broadly to include identifiers (names, addresses, SSNs), commercial information (purchase history), biometric data, internet activity, geolocation data, and inferences drawn from any of the above. Redacting this data before sharing documents helps comply with consumer requests to delete or opt out of data sales.",
  },
  {
    question: "Is free redaction software compliant with privacy regulations?",
    answer:
      "It depends on how the software handles your data. Many free tools upload documents to third-party servers, which can violate compliance requirements. Redactly is the only free online redaction tool that supports PDF, Word, and Excel while processing everything in memory with no file storage, making it suitable for compliance-conscious workflows.",
  },
];

export default function DataPrivacyCompliancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Data Privacy Compliance — GDPR, HIPAA & CCPA Redaction Guide
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            How to ensure your document redaction workflow meets the world&apos;s most important data privacy regulations.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 py-16 space-y-10 text-gray-700 leading-relaxed">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Why Redaction Is Critical for Data Privacy Compliance
          </h2>
          <p className="mb-4">
            Data privacy regulations around the world are becoming stricter. GDPR in Europe, HIPAA in the United States healthcare sector, and CCPA in California each impose legal obligations on how organizations handle personal data. One of the most common — and most overlooked — compliance gaps is document redaction.
          </p>
          <p className="mb-4">
            When organizations share documents internally or with third parties, they often inadvertently expose personally identifiable information (PII), protected health information (PHI), or other regulated data. A simple black box drawn over text in a PDF editor is not sufficient — modern redaction must be permanent, verifiable, and auditable.
          </p>
          <p>
            Failure to properly redact documents can lead to regulatory fines, lawsuits, and reputational damage. GDPR fines can reach 4% of global annual revenue, HIPAA penalties can reach $1.5 million per violation, and CCPA private rights of action can result in statutory damages of up to $750 per incident. Proper redaction is not just a best practice — it is a legal requirement.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            GDPR Requirements for Document Redaction
          </h2>
          <p className="mb-4">
            The General Data Protection Regulation (GDPR) applies to any organization that processes the personal data of EU citizens, regardless of where the organization is based. Several GDPR principles directly impact document redaction practices:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong className="text-gray-900">Data minimization (Article 5):</strong> Organizations should only process and share the minimum personal data necessary for a given purpose. Redacting unnecessary personal data from documents before sharing them aligns directly with this principle.
            </li>
            <li>
              <strong className="text-gray-900">Right to erasure (Article 17):</strong> When an individual requests deletion of their data, organizations must ensure that personal data is removed from all systems, including shared documents. Proper redaction fulfills this requirement without destroying entire documents.
            </li>
            <li>
              <strong className="text-gray-900">Data portability (Article 20):</strong> When transferring personal data between systems or organizations, redaction ensures that only the relevant data is shared while protecting unrelated personal information.
            </li>
            <li>
              <strong className="text-gray-900">Security of processing (Article 32):</strong> Organizations must implement appropriate technical measures to protect personal data. Using a reliable redaction tool is considered a technical safeguard.
            </li>
          </ul>
          <p>
            Under GDPR, simply applying black rectangles over text in a PDF is not sufficient. The underlying text must be permanently removed from the document. Redactly ensures permanent redaction by modifying the underlying document content, not just the visual layer.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            HIPAA Requirements for Medical Record Redaction
          </h2>
          <p className="mb-4">
            The Health Insurance Portability and Accountability Act (HIPAA) sets the standard for protecting sensitive patient data in the United States. The HIPAA Privacy Rule requires covered entities and business associates to protect individually identifiable health information, known as protected health information (PHI).
          </p>
          <p className="mb-4">
            HIPAA identifies 18 specific identifiers that must be removed for a document to be considered de-identified. These include names, geographic subdivisions smaller than a state, dates (except year), telephone numbers, fax numbers, email addresses, Social Security numbers, medical record numbers, health plan beneficiary numbers, account numbers, certificate or license numbers, vehicle identifiers, device identifiers, URLs, IP addresses, biometric identifiers, full-face photographs, and any other unique identifying characteristic.
          </p>
          <p className="mb-4">
            The HIPAA Minimum Necessary Standard requires that only the minimum necessary PHI be disclosed for any given purpose. This means that when sharing medical records for research, billing, or legal purposes, any PHI not directly needed must be redacted. Failing to do so can result in HIPAA violation penalties ranging from $100 to $50,000 per violation, with a maximum annual penalty of $1.5 million.
          </p>
          <p>
            Redactly supports the detection and redaction of all 18 HIPAA identifiers across PDF, Word, and Excel documents. Since files are processed in memory and never stored, Redactly helps healthcare organizations maintain the confidentiality required by HIPAA.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            CCPA Requirements for Consumer Data
          </h2>
          <p className="mb-4">
            The California Consumer Privacy Act (CCPA) grants California residents specific rights over their personal information, including the right to know what data is collected, the right to delete personal information, and the right to opt out of the sale of personal information. While CCPA does not explicitly mandate redaction, it creates scenarios where redaction is the most practical compliance tool.
          </p>
          <p className="mb-4">
            When a consumer submits a verifiable request to delete their personal information under CCPA, businesses must delete that data from their records. However, businesses may retain data that is necessary for internal purposes if the personal information is de-identified or aggregated. Redaction allows businesses to remove personal identifiers from documents while retaining the non-personal content for legitimate business purposes.
          </p>
          <p>
            CCPA defines personal information broadly — far beyond obvious identifiers like names and SSNs. It includes purchase history, browsing behavior, geolocation data, and inferences drawn from any of the above. Redacting all categories of CCPA-protected data from shared documents requires a comprehensive approach that goes beyond simple keyword searches. Redactly&apos;s AI-powered detection identifies a wide range of personal data types, making it easier to comply with CCPA deletion requests.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How Redactly Helps You Stay Compliant
          </h2>
          <p className="mb-4">
            <Link href="/tool" className="text-blue-600 hover:underline">Redactly</Link> is designed from the ground up with privacy and compliance in mind. Unlike traditional redaction tools that only cover PDFs, Redactly is the only free online redaction tool that supports PDF, Word, and Excel — three of the most common document formats used in regulated industries.
          </p>
          <p className="mb-4">
            Here is how Redactly supports your compliance workflow:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong className="text-gray-900">AI-powered detection:</strong> Automatically identifies PII, PHI, financial data, and other regulated information across all supported formats.
            </li>
            <li>
              <strong className="text-gray-900">Permanent redaction:</strong> Unlike simple text overlay, Redactly permanently removes the underlying data so it cannot be recovered.
            </li>
            <li>
              <strong className="text-gray-900">In-memory processing:</strong> Documents are never uploaded to a server. Processing happens in your browser, and files are deleted immediately after download.
            </li>
            <li>
              <strong className="text-gray-900">Multi-format support:</strong> Redact PDF, Word (.docx), and Excel (.xlsx) files — all from a single tool, no software installation required.
            </li>
          </ul>
          <p>
            For organizations that need audit trails, the Pro plan adds audit logging and redaction certificates. <Link href="/tool" className="text-blue-600 hover:underline">Try Redactly free</Link> — no account required.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Ready to redact your documents?
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

        {/* Section 6 - FAQ */}
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
            <Link href="/blog/pii-compliance-checklist" className="text-blue-600 hover:underline">PII Compliance Checklist</Link>
          </p>
        </div>
      </article>

      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
