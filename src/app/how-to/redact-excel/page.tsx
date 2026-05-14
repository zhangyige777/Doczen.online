export const runtime = "edge";

import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Shield, BarChart3, Building2, Users, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How to Redact an Excel Spreadsheet — Remove Sensitive Data Free | Redactly",
  description:
    "Excel has no native redaction tool. Redactly lets you permanently remove sensitive data from .xlsx files online, free. No software needed.",
  alternates: { canonical: "/how-to/redact-excel" },
  openGraph: {
    title: "How to Redact an Excel Spreadsheet — Remove Sensitive Data Free | Redactly",
    description:
      "Excel has no native redaction tool. Redactly lets you permanently remove sensitive data from .xlsx files online, free. No software needed.",
    url: "/how-to/redact-excel",
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Redact an Excel Spreadsheet",
  description:
    "Step-by-step guide to permanently remove sensitive data from Excel spreadsheets using Redactly, the free online redaction tool.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Go to Redactly",
      text: "Visit redactly.online/tool. No account or software required.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Upload your .xlsx file",
      text: "Drag and drop your Excel spreadsheet onto the upload area.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "AI detects sensitive data",
      text: "Redactly's AI scans the spreadsheet and flags sensitive information such as names, financial data, and personal identifiers.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Review and apply redactions",
      text: "Review each detection and confirm which items to permanently redact.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Download the redacted file",
      text: "Download your cleaned Excel file with permanent redactions applied.",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Excel have a redaction tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Microsoft Excel does not have a built-in redaction feature. Methods like hiding rows, changing font colors, or protecting sheets do not permanently remove underlying data.",
      },
    },
    {
      "@type": "Question",
      name: "Can Redactly redact Excel files?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Redactly supports .xlsx files and can automatically detect and redact sensitive information in Excel spreadsheets.",
      },
    },
    {
      "@type": "Question",
      name: "Is hiding rows in Excel a safe redaction method?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Hidden rows and columns can be easily unhidden by anyone who opens the file. This is not a secure redaction method.",
      },
    },
    {
      "@type": "Question",
      name: "Can I redact Excel for GDPR compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Redactly can help you remove personal data from Excel spreadsheets to meet GDPR data minimization and redaction requirements.",
      },
    },
  ],
};

const sectionStyles = "max-w-3xl mx-auto px-4 py-16";
const heading2Styles = "text-2xl font-bold text-gray-900 mt-14 mb-4";
const heading3Styles = "text-lg font-semibold text-gray-900 mt-8 mb-3";
const paragraphStyles = "text-gray-700 leading-relaxed mb-4";

export default function RedactExcelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6 ring-1 ring-emerald-500/20">
              <BarChart3 className="w-3.5 h-3.5" />
              How-To Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              How to Redact an Excel Spreadsheet &mdash; Step-by-Step Guide
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Excel has no native redaction tool. Learn how to permanently remove sensitive data
              from .xlsx files online, free. No software needed.
            </p>
          </div>
        </section>

        <section className={sectionStyles}>
          {/* H2: Does Excel Have a Redaction Tool? */}
          <h2 className={heading2Styles}>Does Excel Have a Redaction Tool?</h2>
          <p className={paragraphStyles}>
            The short answer is <strong>no</strong>. Microsoft Excel does not include a native
            redaction feature, despite being one of the most widely used applications for managing
            sensitive data.
          </p>
          <p className={paragraphStyles}>
            This is a significant gap. Financial analysts prepare spreadsheets containing account
            numbers and transaction details. HR teams manage payroll spreadsheets with salary
            information and Social Security numbers. Healthcare administrators handle patient data
            in Excel. None of these users have a built-in way to permanently remove sensitive data
            before sharing.
          </p>
          <p className={paragraphStyles}>
            <strong>Redactly is the only free online redaction tool that supports PDF, Word, and Excel.</strong>{" "}
            You can upload an .xlsx file directly, have AI automatically detect personal and
            financial information, and download a permanently redacted spreadsheet &mdash; all in
            your browser, no software installation required.
          </p>

          {/* H2: Why Hiding Rows or Columns Isn't Real Redaction */}
          <h2 className={heading2Styles}>Why Hiding Rows or Columns in Excel Isn&rsquo;t Real Redaction</h2>
          <p className={paragraphStyles}>
            When faced with the need to remove sensitive data from Excel, many users resort to
            methods that Excel provides, none of which are actually secure:
          </p>

          <h3 className={heading3Styles}>Hidden Columns and Rows</h3>
          <p className={paragraphStyles}>
            Right-clicking a column and selecting &ldquo;Hide&rdquo; might seem like a quick fix.
            But any recipient can select the surrounding columns, right-click, and choose
            &ldquo;Unhide.&rdquo; The hidden data reappears instantly. Hiding is a display setting,
            not a security measure.
          </p>

          <h3 className={heading3Styles}>White Font Color</h3>
          <p className={paragraphStyles}>
            Changing the font color to white so text blends into the background is another common but
            dangerous workaround. A recipient needs only to select the cells and change the font color
            back to black to read everything. Some Excel functions also ignore font color entirely and
            still display the value.
          </p>

          <h3 className={heading3Styles}>Protecting the Sheet</h3>
          <p className={paragraphStyles}>
            Excel&rsquo;s sheet protection feature prevents accidental edits, but it does not encrypt
            or remove data. The original values remain in the file and can be read by anyone who
            knows how to unprotect a sheet &mdash; a process that takes seconds with readily available
            tools. The password protection in Excel is notoriously weak.
          </p>

          <div className="p-5 rounded-xl bg-red-50 border border-red-100 mb-8">
            <div className="flex items-start gap-3">
              <Database className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-red-800 mb-1">The Reality</p>
                <p className="text-sm text-red-700">
                  None of these Excel methods permanently remove data. The information remains in the
                  file and can be recovered with minimal effort. True redaction requires a tool
                  designed for the purpose.
                </p>
              </div>
            </div>
          </div>

          {/* H2: How to Redact an Excel File with Redactly */}
          <h2 className={heading2Styles}>How to Redact an Excel File with Redactly (Free)</h2>
          <p className={paragraphStyles}>
            Redactly makes Excel redaction straightforward. The AI understands spreadsheet structure
            and detects sensitive information across cells, rows, and columns.
          </p>

          <div className="space-y-6 mb-8">
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-semibold shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Go to redactly.online/tool</h3>
                  <p className="text-sm text-gray-600">
                    No account needed. The tool runs entirely in your browser.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-semibold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Upload your .xlsx file</h3>
                  <p className="text-sm text-gray-600">
                    Drag and drop your Excel spreadsheet onto the upload area or browse to select
                    your file.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-semibold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    AI scans and detects sensitive data
                  </h3>
                  <p className="text-sm text-gray-600">
                    Redactly&rsquo;s AI identifies personally identifiable information: names, email
                    addresses, phone numbers, financial account numbers, salary figures, and more.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-semibold shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Review and confirm</h3>
                  <p className="text-sm text-gray-600">
                    Review each detection and confirm which items to redact. You have full control
                    over what gets removed.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-semibold shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Download the redacted file</h3>
                  <p className="text-sm text-gray-600">
                    Click apply to permanently redact the selected items, then download your cleaned
                    Excel spreadsheet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <Link href="/tool">
              <Button size="lg" className="gap-2 text-base px-8 h-12 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-200">
                <FileText className="w-5 h-5" />
                Redact an Excel File Now
              </Button>
            </Link>
          </div>

          {/* H2: How to Redact Excel Before Sharing Externally */}
          <h2 className={heading2Styles}>How to Redact Excel Before Sharing Externally</h2>
          <p className={paragraphStyles}>
            Sharing Excel files externally is a common source of data leaks. Here are the scenarios
            where redaction is critical:
          </p>

          <h3 className={heading3Styles}>Financial Statements</h3>
          <p className={paragraphStyles}>
            When sharing financial reports with auditors, investors, or regulators, you may need to
            redact customer account numbers, employee bank details, or proprietary transaction data
            while keeping the aggregate figures visible.
          </p>

          <h3 className={heading3Styles}>Client Data Reports</h3>
          <p className={paragraphStyles}>
            Marketing and analytics teams frequently share Excel reports that contain customer names,
            email addresses, and purchase histories. Before sharing externally, these personal
            identifiers must be redacted to protect customer privacy.
          </p>

          <h3 className={heading3Styles}>Legal Discovery</h3>
          <p className={paragraphStyles}>
            In litigation, Excel spreadsheets are often subject to discovery. Privileged or
            confidential information must be redacted before production. AI-powered detection
            helps ensure nothing is missed across large spreadsheets with thousands of rows.
          </p>

          {/* H2: GDPR Compliance */}
          <h2 className={heading2Styles}>GDPR Compliance: Removing Personal Data from Excel</h2>
          <p className={paragraphStyles}>
            The General Data Protection Regulation (GDPR) requires organizations to protect personal
            data and apply data minimization principles when sharing information. For organizations
            handling EU residents&rsquo; data, this means:
          </p>

          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
              <span>
                <strong>Identify all personal data</strong> in Excel spreadsheets before sharing
                &mdash; names, email addresses, phone numbers, identification numbers, and more
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
              <span>
                <strong>Apply data minimization</strong> &mdash; only share the data that is
                necessary for the specific purpose
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
              <span>
                <strong>Document your redaction process</strong> &mdash; maintain records of what
                was redacted and when for compliance audits
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
              <span>
                <strong>Ensure redaction is irreversible</strong> &mdash; hidden rows and white font
                colors are not sufficient under GDPR
              </span>
            </li>
          </ul>

          <p className={paragraphStyles}>
            Failing to properly redact personal data from Excel spreadsheets can result in GDPR fines
            of up to 4% of annual global revenue or 20 million euros, whichever is higher. Using a
            dedicated redaction tool like Redactly helps mitigate this risk.
          </p>

          {/* H2: Excel Redaction Use Cases */}
          <h2 className={heading2Styles}>Excel Redaction Use Cases</h2>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="p-5 rounded-xl bg-blue-50 border border-blue-100 text-center">
              <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Finance</h3>
              <p className="text-xs text-gray-500">
                Account numbers, transaction data, client financial information
              </p>
            </div>
            <div className="p-5 rounded-xl bg-purple-50 border border-purple-100 text-center">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">HR &amp; Payroll</h3>
              <p className="text-xs text-gray-500">
                Salary data, employee IDs, Social Security numbers, bank details
              </p>
            </div>
            <div className="p-5 rounded-xl bg-teal-50 border border-teal-100 text-center">
              <Database className="w-8 h-8 text-teal-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Customer Data</h3>
              <p className="text-xs text-gray-500">
                Email addresses, phone numbers, purchase history, personal identifiers
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Redact Your Excel Spreadsheet?
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              No software, no account, no false sense of security. Redactly permanently removes
              sensitive data from .xlsx files in seconds.
            </p>
            <Link href="/tool">
              <Button size="lg" className="gap-2 text-base px-8 h-12 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-200">
                <Shield className="w-5 h-5" />
                Redact Your Excel File Free
              </Button>
            </Link>
            <p className="mt-3 text-xs text-gray-400">
              Free for 20 pages per month. No credit card required.
            </p>
          </div>

          {/* FAQ Section */}
          <h2 className={heading2Styles}>Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="p-5 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Does Excel have a redaction tool?
              </h3>
              <p className="text-sm text-gray-600">
                No. Microsoft Excel does not have a built-in redaction feature. Methods like hiding
                rows, changing font colors, or protecting sheets do not permanently remove underlying
                data and are not secure.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can Redactly redact Excel files?
              </h3>
              <p className="text-sm text-gray-600">
                Yes. Redactly supports .xlsx files and can automatically detect and redact sensitive
                information in Excel spreadsheets. It is the only free online tool that handles PDF,
                Word, and Excel.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Is hiding rows in Excel a safe redaction method?
              </h3>
              <p className="text-sm text-gray-600">
                No. Hidden rows and columns can be easily unhidden by anyone who opens the file. This
                is a display setting, not a security measure. The data remains fully present in the
                file.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can I redact Excel for GDPR compliance?
              </h3>
              <p className="text-sm text-gray-600">
                Yes. Redactly can help you remove personal data from Excel spreadsheets to meet GDPR
                data minimization and redaction requirements. Always verify the output and maintain
                audit records for compliance.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                What types of data can Redactly detect in Excel?
              </h3>
              <p className="text-sm text-gray-600">
                Redactly&rsquo;s AI detects names, email addresses, phone numbers, Social Security
                numbers, financial account numbers, salary figures, dates of birth, addresses, and
                other personally identifiable information across all cells in your spreadsheet.
              </p>
            </div>
          </div>

          {/* Additional resources */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-400">
              Learn more:{" "}
              <Link href="/use-cases/finance" className="text-emerald-600 hover:underline">
                Financial Document Redaction
              </Link>{" "}
              &middot;{" "}
              <Link href="/blog/redact-excel-financial-data" className="text-emerald-600 hover:underline">
                Redacting Financial Data in Excel
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
