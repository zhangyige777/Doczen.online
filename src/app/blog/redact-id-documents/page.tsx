export const runtime = "edge";

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Redact Personal Information from ID Documents | Redactly",
  description:
    "Learn how to safely redact passports, driver's licenses, and ID cards before sharing online. Free tool supports PDF, Word, and Excel.",
  openGraph: {
    title: "How to Redact Personal Information from ID Documents | Redactly",
    description:
      "Learn how to safely redact passports, driver's licenses, and ID cards before sharing online. Free tool supports PDF, Word, and Excel.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I redact a scanned passport or ID?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Redactly supports PDF files, including scanned documents. Upload a scanned PDF of your passport or ID, and our AI will detect text regions where sensitive information appears. You can then apply permanent redactions to those areas before sharing.",
      },
    },
    {
      "@type": "Question",
      name: "What information can I safely redact on an ID document?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can safely redact your passport number, driver's license number, date of birth, Social Security number, and any unique identification numbers. Keep your full name and photograph visible, as these are typically needed for identity verification purposes.",
      },
    },
    {
      "@type": "Question",
      name: "Is it legal to redact my passport or ID before sharing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it is generally legal to redact your own identification documents before sharing them with third parties. You have the right to protect your personal information. However, some government agencies or official processes may require unredacted copies, so always check the requirements before submitting.",
      },
    },
    {
      "@type": "Question",
      name: "Can I redact an ID document on my phone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Redactly works entirely in your web browser, including on mobile devices. Take a photo of your ID, convert it to PDF, upload it to Redactly, and redact the sensitive information right from your phone.",
      },
    },
    {
      "@type": "Question",
      name: "How do I redact my driver's license for online sharing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scan or photograph your driver's license and save it as a PDF. Upload the PDF to Redactly, use the AI detection to identify your license number, date of birth, and other sensitive fields, review and apply the redactions, then download the redacted version for safe sharing.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Redact Personal Information from ID Documents Before Sharing",
  description:
    "Learn how to safely redact passports, driver's licenses, and ID cards before sharing online. Free tool supports PDF, Word, and Excel.",
  author: {
    "@type": "Organization",
    name: "Redactly",
  },
};

export default function RedactIdDocumentsPage() {
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
            <span className="text-gray-900">Redact ID Documents</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            How to Redact Personal Information from ID Documents Before Sharing
          </h1>

          <div className="flex items-center gap-3 text-sm text-gray-400 mb-10">
            <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-medium">
              Guide
            </span>
            <span>May 12, 2026</span>
            <span>Redactly Team</span>
          </div>

          <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg text-gray-600 leading-relaxed">
              In an increasingly digital world, you are often asked to share copies of your government-issued identification documents online. Rental applications, employment verification, financial services, and online authentication processes all require ID verification. But sharing unredacted copies of your passport, driver's license, or national ID card exposes sensitive information that can be used for identity theft.
            </p>

            <p>
              This guide explains when you need to redact ID documents, what information to remove, and how to do it safely using a free online tool.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              When Do You Need to Redact an ID Document?
            </h2>

            <p>
              There are several common scenarios where you may need to share a redacted copy of your ID:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Rental Applications
            </h3>
            <p>
              Landlords and property managers often request a copy of your driver's license or passport as part of the application process. While they need to verify your identity, they do not need your full document number or date of birth to do so. Redacting these details protects you if the property management company suffers a data breach.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Online Passport Submissions
            </h3>
            <p>
              Some travel booking sites, visa processing services, and international background check companies require a scanned copy of your passport. These documents are often stored for extended periods. Redacting unnecessary details limits your exposure without affecting the verification process.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Employment Paperwork
            </h3>
            <p>
              Employers may request ID documents for I-9 verification or background checks. While some of this information is legally required, you should only share what is mandated. Redact any fields that are not strictly necessary for compliance.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              What Information Can You Safely Redact?
            </h2>

            <p>
              Understanding what to redact versus what to keep visible depends on the purpose of the request. Here is a general guide:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">
                      Information
                    </th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">
                      Redact?
                    </th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">
                      Reason
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-gray-200">Full name</td>
                    <td className="p-3 border border-gray-200">No</td>
                    <td className="p-3 border border-gray-200">Required for identity verification</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">Photograph</td>
                    <td className="p-3 border border-gray-200">No</td>
                    <td className="p-3 border border-gray-200">Required for visual verification</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">Date of birth</td>
                    <td className="p-3 border border-gray-200">Yes</td>
                    <td className="p-3 border border-gray-200">High identity theft risk</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">ID number</td>
                    <td className="p-3 border border-gray-200">Yes</td>
                    <td className="p-3 border border-gray-200">Can be used for fraud</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">Social Security number</td>
                    <td className="p-3 border border-gray-200">Yes</td>
                    <td className="p-3 border border-gray-200">Critical to protect</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">Expiration date</td>
                    <td className="p-3 border border-gray-200">Consider</td>
                    <td className="p-3 border border-gray-200">Depends on verification requirements</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">Address</td>
                    <td className="p-3 border border-gray-200">Consider</td>
                    <td className="p-3 border border-gray-200">Redact if not needed for verification</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              The general rule is: only share what is absolutely necessary for the specific purpose. Everything else should be redacted.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              How to Redact a Passport or ID Card (Step-by-Step)
            </h2>

            <p>
              Redacting a passport or ID card with Redactly is straightforward. Even if your document is a scanned image saved as a PDF, the process works seamlessly:
            </p>

            <ol className="list-decimal list-inside space-y-4 mt-4 mb-6">
              <li>
                <strong>Scan your ID as a PDF.</strong> Use a scanner or even your phone camera to capture both sides of your ID. Save or convert the image to PDF format.
              </li>
              <li>
                <strong>Upload to Redactly.</strong> Go to{" "}
                <Link href="/tool" className="text-blue-600 hover:text-blue-800 underline">
                  Redactly's free redaction tool
                </Link>{" "}
                and upload your PDF. No account is required.
              </li>
              <li>
                <strong>AI detects sensitive information.</strong> Redactly's AI scans the document and identifies text regions containing sensitive data -- ID numbers, dates of birth, and other personal identifiers.
              </li>
              <li>
                <strong>Review and confirm.</strong> Review each detection on your document. The AI highlights potential PII, and you can keep or reject each suggestion before applying redactions.
              </li>
              <li>
                <strong>Apply permanent redactions.</strong> Redactly permanently removes the underlying text data, not just drawing boxes on top. The redacted areas cannot be recovered.
              </li>
              <li>
                <strong>Download the redacted PDF.</strong> Your redacted document is ready to share. Redactly does not store your file -- it is deleted from memory after download.
              </li>
            </ol>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-amber-900 mb-1">
                    Protect your identity today
                  </p>
                  <p className="text-amber-800 text-sm mb-3">
                    Redactly is the only free online redaction tool that supports PDF, Word, and Excel. Redact your ID documents in seconds -- no account needed.
                  </p>
                  <Link
                    href="/tool"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors"
                  >
                    Redact Your ID Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              How to Redact a Social Security Number
            </h2>

            <p>
              Your Social Security number (SSN) is one of the most sensitive pieces of personal information you possess. If an SSN falls into the wrong hands, it can be used to open credit accounts, file fraudulent tax returns, and commit various forms of identity theft.
            </p>

            <p>
              When sharing ID documents that contain your SSN -- such as a Social Security card scan, tax forms, or employment paperwork -- you must ensure the number is completely and permanently redacted. A simple black box drawn in a PDF editor is not sufficient, as the underlying text often remains selectable and extractable.
            </p>

            <p>
              Using Redactly's AI-powered detection, SSNs are automatically identified even when formatted in different ways (with dashes, spaces, or partial masking). The redaction is applied at the text level, ensuring the number cannot be recovered by anyone who receives the document.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              How to Redact a Driver's License
            </h2>

            <p>
              Driver's licenses contain multiple fields of sensitive information beyond just your name and photo. When sharing a copy of your driver's license, consider redacting the following:
            </p>

            <ul className="list-disc list-inside space-y-2 mt-4 mb-6">
              <li>
                <strong>Driver's license number:</strong> This is the most critical field to redact. It can be used for identity verification fraud and is not needed for most identity checks.
              </li>
              <li>
                <strong>Date of birth:</strong> While often visible, your date of birth is a key piece of information for identity theft and should be redacted when possible.
              </li>
              <li>
                <strong>Address:</strong> Your home address may or may not need to be visible depending on the purpose. If only identity verification is needed, consider redacting it.
              </li>
              <li>
                <strong>Height, weight, and organ donor status:</strong> These details are almost never needed and should be redacted by default.
              </li>
            </ul>

            <p>
              The process for redacting a driver's license is the same as for a passport or ID card -- scan it as a PDF, upload to Redactly, let AI detect the sensitive fields, review, apply, and download.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Can I redact a scanned passport or ID?
                </h3>
                <p className="text-gray-600">
                  Yes. Redactly supports PDF files, including scanned documents. Upload a scanned PDF of your passport or ID, and our AI will detect text regions where sensitive information appears. You can then apply permanent redactions to those areas before sharing.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  What information can I safely redact on an ID document?
                </h3>
                <p className="text-gray-600">
                  You can safely redact your passport number, driver's license number, date of birth, Social Security number, and any unique identification numbers. Keep your full name and photograph visible, as these are typically needed for identity verification purposes.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Is it legal to redact my passport or ID before sharing?
                </h3>
                <p className="text-gray-600">
                  Yes, it is generally legal to redact your own identification documents before sharing them with third parties. You have the right to protect your personal information. However, some government agencies or official processes may require unredacted copies, so always check the requirements before submitting.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Can I redact an ID document on my phone?
                </h3>
                <p className="text-gray-600">
                  Yes, Redactly works entirely in your web browser, including on mobile devices. Take a photo of your ID, convert it to PDF, upload it to Redactly, and redact the sensitive information right from your phone.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  How do I redact my driver's license for online sharing?
                </h3>
                <p className="text-gray-600">
                  Scan or photograph your driver's license and save it as a PDF. Upload the PDF to Redactly, use the AI detection to identify your license number, date of birth, and other sensitive fields, review and apply the redactions, then download the redacted version for safe sharing.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Redact Your ID Documents Free
            </h2>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Redactly is the only free online redaction tool that supports PDF, Word, and Excel. No account needed, no data stored.
            </p>
            <Link
              href="/tool"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-xl text-base font-medium hover:bg-amber-700 transition-colors shadow-md shadow-amber-200"
            >
              Redact Your Document Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="mt-3 text-xs text-gray-400">
              Free for 20 pages per month. Supports PDF, Word, and Excel.
            </p>
          </div>

          {/* Internal links */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="/how-to/redact-a-pdf"
              className="text-sm text-blue-600 hover:text-blue-800 underline"
            >
              How to Redact a PDF
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
