export const runtime = "edge";

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Redact Medical Records — HIPAA Compliant Redaction Guide | Redactly",
  description:
    "Learn how to properly redact medical records in compliance with HIPAA. Free online tool supports PDF, Word, and Excel for healthcare document redaction.",
  openGraph: {
    title: "How to Redact Medical Records — HIPAA Compliant Redaction Guide | Redactly",
    description:
      "Learn how to properly redact medical records in compliance with HIPAA. Free online tool supports PDF, Word, and Excel for healthcare document redaction.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is HIPAA compliant redaction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HIPAA compliant redaction is the process of permanently removing all 18 PHI (Protected Health Information) identifiers from medical records before sharing them with third parties. This includes names, dates, phone numbers, Social Security numbers, medical record numbers, and more. Proper redaction must be permanent and irreversibly remove the underlying data.",
      },
    },
    {
      "@type": "Question",
      name: "Can I redact medical records for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Redactly offers a free tier that allows you to redact medical records. The free plan includes 20 pages per month and supports PDF, Word, and Excel files. Upload your medical records, let AI detect PHI, review the detections, and download the redacted version.",
      },
    },
    {
      "@type": "Question",
      name: "What are the 18 PHI identifiers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 18 PHI identifiers under HIPAA are: names, geographical subdivisions smaller than a state, dates (except year), phone numbers, fax numbers, email addresses, Social Security numbers, medical record numbers, health plan beneficiary numbers, account numbers, certificate/license numbers, vehicle identifiers, device identifiers, URLs, IP addresses, biometric identifiers, full-face photographs, and any other unique identifying characteristic or code.",
      },
    },
    {
      "@type": "Question",
      name: "Does Redactly provide a redaction audit trail?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Redactly can generate redaction reports that document what was redacted, how many items were detected, and the processing details. This audit trail is important for HIPAA compliance and can be presented during regulatory audits.",
      },
    },
    {
      "@type": "Question",
      name: "Is Redactly HIPAA compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Redactly processes files entirely in memory and does not store documents on its servers. Files are automatically deleted after download. While Redactly provides the technical tools for HIPAA compliant redaction, organizations should ensure their overall workflow, including secure file transmission and access controls, meets HIPAA requirements.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Redact Medical Records — HIPAA Compliant Guide",
  description:
    "Learn how to properly redact medical records in compliance with HIPAA. Free online tool supports PDF, Word, and Excel for healthcare document redaction.",
  author: {
    "@type": "Organization",
    name: "Redactly",
  },
};

export default function RedactMedicalRecordsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <div className="min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-4 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-900 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-900">Redact Medical Records</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            How to Redact Medical Records — HIPAA Compliant Guide
          </h1>

          <div className="flex items-center gap-3 text-sm text-gray-400 mb-10">
            <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-medium">
              Healthcare
            </span>
            <span>May 14, 2026</span>
            <span>Redactly Team</span>
          </div>

          <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg text-gray-600 leading-relaxed">
              Medical records contain some of the most sensitive personal information an individual possesses. Under the Health Insurance Portability and Accountability Act (HIPAA), healthcare providers, health plans, and their business associates are legally required to protect this information. When medical records need to be shared -- for research, insurance claims, legal proceedings, or patient requests -- proper redaction of Protected Health Information (PHI) is not optional. It is the law.
            </p>

            <p>
              This guide explains why medical records need redaction, the 18 PHI identifiers you must remove, and how to redact medical records using a free AI-powered tool.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              Why Medical Records Need Redaction
            </h2>

            <p>
              Medical records are shared for many legitimate purposes: referrals between specialists, insurance claims processing, medical research, legal discovery, and patient requests to access their own records. In each of these scenarios, only the minimum necessary information should be disclosed.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              HIPAA Requirements
            </h3>
            <p>
              HIPAA's Privacy Rule establishes national standards for the protection of individually identifiable health information. Covered entities -- healthcare providers, health plans, and healthcare clearinghouses -- must implement safeguards to protect PHI and limit uses and disclosures to the minimum necessary. Failing to properly redact PHI before sharing medical records can result in significant civil and criminal penalties, ranging from $100 to $50,000 per violation, with annual maximums reaching $1.5 million.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Beyond Legal Compliance
            </h3>
            <p>
              Beyond regulatory requirements, proper redaction of medical records is a matter of patient trust and professional ethics. Patients share their most private health information with the expectation that it will be protected. A data breach caused by improper redaction can damage a healthcare organization's reputation and erode patient confidence for years.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              What Are the 18 PHI Identifiers Under HIPAA?
            </h2>

            <p>
              HIPAA defines 18 specific identifiers that constitute Protected Health Information. All of these must be removed (redacted) for a medical record to be considered de-identified:
            </p>

            <ol className="list-decimal list-inside space-y-2 mt-4 mb-6">
              <li><strong>Names</strong> -- full name, maiden name, or initials</li>
              <li><strong>Geographic subdivisions</strong> -- street address, city, county, zip code (smaller than a state)</li>
              <li><strong>Dates</strong> -- birth date, admission date, discharge date, death date (except year)</li>
              <li><strong>Phone numbers</strong> -- all telephone numbers</li>
              <li><strong>Fax numbers</strong> -- all fax numbers</li>
              <li><strong>Email addresses</strong> -- any email address</li>
              <li><strong>Social Security numbers</strong> -- full or partial SSN</li>
              <li><strong>Medical record numbers</strong> -- internal hospital or clinic record numbers</li>
              <li><strong>Health plan beneficiary numbers</strong> -- insurance ID numbers</li>
              <li><strong>Account numbers</strong> -- billing or financial account numbers</li>
              <li><strong>Certificate/license numbers</strong> -- professional or facility license numbers</li>
              <li><strong>Vehicle identifiers</strong> -- license plates, VINs</li>
              <li><strong>Device identifiers</strong> -- medical device serial numbers</li>
              <li><strong>URLs</strong> -- web addresses</li>
              <li><strong>IP addresses</strong> -- internet protocol addresses</li>
              <li><strong>Biometric identifiers</strong> -- fingerprints, retinal scans, voice prints</li>
              <li><strong>Full-face photographs</strong> -- identifiable images</li>
              <li><strong>Any other unique identifying characteristic</strong> -- any code or characteristic that could identify an individual</li>
            </ol>

            <p>
              Manually identifying and redacting all 18 identifiers across multi-page medical records is extremely time-consuming and error prone. This is why AI-powered redaction tools have become essential for healthcare compliance.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              How to Redact Medical Records with Redactly
            </h2>

            <p>
              Redacting medical records with Redactly is fast, thorough, and requires no specialized training. Here is the step-by-step process:
            </p>

            <ol className="list-decimal list-inside space-y-4 mt-4 mb-6">
              <li>
                <strong>Prepare your medical records.</strong> Ensure your records are in a supported format: PDF (including scanned documents), Word (.docx), or Excel (.xlsx). Most electronic health record systems can export records in PDF format.
              </li>
              <li>
                <strong>Upload to Redactly.</strong> Go to{" "}
                <Link href="/tool" className="text-blue-600 hover:text-blue-800 underline">
                  Redactly's free redaction tool
                </Link>{" "}
                and upload your file. No account or sign-up is required.
              </li>
              <li>
                <strong>AI scans for PHI.</strong> Redactly's AI engine scans every page of the document, detecting all 18 PHI identifiers with contextual understanding. It recognizes names, dates, medical record numbers, and other identifiers even when they appear in varying formats.
              </li>
              <li>
                <strong>Review detections.</strong> Each detected PHI item is highlighted for your review. You can confirm which items to redact and reject any false positives. This human-in-the-loop step ensures accuracy while saving hours of manual review time.
              </li>
              <li>
                <strong>Apply permanent redactions.</strong> Redactly permanently removes the underlying text data from the document. The redactions cannot be reversed or recovered.
              </li>
              <li>
                <strong>Download the redacted record.</strong> Download your redacted medical record. Files are processed in memory and automatically deleted from our servers after download.
              </li>
            </ol>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-amber-900 mb-1">
                    Redact medical records for free
                  </p>
                  <p className="text-amber-800 text-sm mb-3">
                    Redactly is the only free online redaction tool that supports PDF, Word, and Excel. Perfect for HIPAA compliant redaction of medical records.
                  </p>
                  <Link
                    href="/tool"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors"
                  >
                    Start Redacting Medical Records
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              Maintaining a Redaction Audit Trail
            </h2>

            <p>
              HIPAA compliance is not just about removing PHI -- it is also about documenting that the redaction was performed properly. A redaction audit trail provides evidence that due diligence was exercised in protecting patient information.
            </p>

            <p>
              Redactly can generate redaction reports that document key information about the redaction process, including the number of items detected and redacted, the document name and processing date, and a record of the review. These reports serve as valuable documentation for HIPAA compliance audits and demonstrate that your organization takes PHI protection seriously.
            </p>

            <p>
              Best practices for maintaining a redaction audit trail in healthcare settings include:
            </p>

            <ul className="list-disc list-inside space-y-2 mt-4 mb-6">
              <li>Keep a log of all documents that were redacted, including dates and the purpose of disclosure</li>
              <li>Document the redaction tool and settings used</li>
              <li>Record who performed the redaction review</li>
              <li>Store redaction certificates or reports alongside the original documents</li>
              <li>Periodically audit redacted documents to verify thoroughness</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  What is HIPAA compliant redaction?
                </h3>
                <p className="text-gray-600">
                  HIPAA compliant redaction is the process of permanently removing all 18 PHI (Protected Health Information) identifiers from medical records before sharing them with third parties. This includes names, dates, phone numbers, Social Security numbers, medical record numbers, and more. Proper redaction must be permanent and irreversibly remove the underlying data.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Can I redact medical records for free?
                </h3>
                <p className="text-gray-600">
                  Yes, Redactly offers a free tier that allows you to redact medical records. The free plan includes 20 pages per month and supports PDF, Word, and Excel files. Upload your medical records, let AI detect PHI, review the detections, and download the redacted version.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  What are the 18 PHI identifiers?
                </h3>
                <p className="text-gray-600">
                  The 18 PHI identifiers under HIPAA are: names, geographical subdivisions smaller than a state, dates (except year), phone numbers, fax numbers, email addresses, Social Security numbers, medical record numbers, health plan beneficiary numbers, account numbers, certificate/license numbers, vehicle identifiers, device identifiers, URLs, IP addresses, biometric identifiers, full-face photographs, and any other unique identifying characteristic or code.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Does Redactly provide a redaction audit trail?
                </h3>
                <p className="text-gray-600">
                  Yes, Redactly can generate redaction reports that document what was redacted, how many items were detected, and the processing details. This audit trail is important for HIPAA compliance and can be presented during regulatory audits.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Is Redactly HIPAA compliant?
                </h3>
                <p className="text-gray-600">
                  Redactly processes files entirely in memory and does not store documents on its servers. Files are automatically deleted after download. While Redactly provides the technical tools for HIPAA compliant redaction, organizations should ensure their overall workflow, including secure file transmission and access controls, meets HIPAA requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Redact Medical Records Free
            </h2>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Redactly is the only free online redaction tool that supports PDF, Word, and Excel. No account needed, no data stored.
            </p>
            <Link
              href="/tool"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-xl text-base font-medium hover:bg-amber-700 transition-colors shadow-md shadow-amber-200"
            >
              Redact Your Documents Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="mt-3 text-xs text-gray-400">
              Free for 20 pages per month. Supports PDF, Word, and Excel.
            </p>
          </div>

          {/* Internal links */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="/learn/what-is-redaction"
              className="text-sm text-blue-600 hover:text-blue-800 underline"
            >
              What Is Redaction
            </Link>
            <Link
              href="/use-cases/healthcare"
              className="text-sm text-blue-600 hover:text-blue-800 underline"
            >
              Healthcare Redaction
            </Link>
            <Link href="/tool" className="text-sm text-blue-600 hover:text-blue-800 underline">
              Redaction Tool
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
