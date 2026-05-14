import Link from "next/link";
import type { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "AI Redaction — How Redactly Uses AI to Detect Sensitive Data | Redactly",
  description:
    "Learn how Redactly uses AI to automatically detect and redact sensitive information across PDF, Word, and Excel files. Free AI-powered redaction tool.",
};

const faqItems = [
  {
    question: "How does AI redaction differ from regex redaction?",
    answer:
      "Regex redaction relies on predefined patterns like \d{3}-\d{2}-\d{4} for SSNs or \b[A-Z][a-z]+\s[A-Z][a-z]+\b for names. It only catches what you explicitly tell it to look for and cannot understand context. AI redaction uses natural language understanding to identify sensitive information contextually — it can distinguish between a person's name used in different contexts, detect addresses without a specific pattern, and adapt to new types of sensitive data without manual rule updates.",
  },
  {
    question: "What types of sensitive data can Redactly's AI detect?",
    answer:
      "Redactly's AI detects names, email addresses, phone numbers, physical addresses, Social Security numbers, credit card numbers, bank account numbers, dates of birth, passport numbers, driver's license numbers, tax IDs, medical record numbers, IP addresses, and more. You can also provide custom instructions to detect specific types of information relevant to your use case.",
  },
  {
    question: "Is AI redaction accurate?",
    answer:
      "AI redaction achieves significantly higher recall than regex-based approaches because it understands context. However, no redaction method is 100% accurate. Redactly addresses this by showing all detections for human review before applying permanent redactions, so you can confirm each item before it is removed.",
  },
  {
    question: "Do I need to train the AI before using it?",
    answer:
      "No. Redactly's AI works out of the box with no training or configuration required. Upload a document, and the AI automatically scans for sensitive data. You can optionally provide custom instructions to focus the detection on specific types of information relevant to your document.",
  },
];

export default function AiRedactionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            AI Redaction — Automatically Detect Sensitive Data
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            How Redactly uses artificial intelligence to find and redact sensitive information in seconds.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 py-16 space-y-10 text-gray-700 leading-relaxed">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Is AI Redaction?</h2>
          <p className="mb-4">
            AI redaction is the use of artificial intelligence to automatically identify and remove sensitive information from documents. Unlike traditional redaction methods that rely on manual searching or regex pattern matching, AI-powered redaction understands the context and meaning of text, allowing it to detect sensitive data that pattern-based approaches might miss.
          </p>
          <p className="mb-4">
            Traditional redaction tools require you to know exactly what you are looking for. If you need to redact Social Security numbers, you configure a pattern like <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">\d{3}-\d{2}-\d{4}</code>. But what if the document contains names written in an unfamiliar format, or addresses without consistent structure? Traditional tools will miss them. AI redaction solves this problem by understanding language rather than just matching patterns.
          </p>
          <p>
            Redactly is the only free online redaction tool that supports PDF, Word, and Excel using AI-powered detection. It combines the convenience of a browser-based tool with the intelligence of modern AI to make redaction faster, more thorough, and more accessible.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How Redactly&apos;s AI Detection Works
          </h2>
          <p className="mb-4">
            When you upload a document to <Link href="/tool" className="text-blue-600 hover:underline">Redactly</Link>, the AI detection process follows these steps:
          </p>
          <ol className="list-decimal pl-6 space-y-3 mb-4">
            <li>
              <strong className="text-gray-900">Text extraction:</strong> The document content is extracted from the PDF, Word, or Excel file. Layout, formatting, and structure are preserved for accurate detection.
            </li>
            <li>
              <strong className="text-gray-900">AI analysis:</strong> The extracted text is analyzed by a large language model that understands context, semantics, and entity relationships. The AI recognizes names, addresses, account numbers, and other sensitive data the same way a human reviewer would — by understanding what each piece of information represents.
            </li>
            <li>
              <strong className="text-gray-900">Detection mapping:</strong> Each detection is mapped back to its exact location in the document. You see highlights over every item the AI identified as potentially sensitive.
            </li>
            <li>
              <strong className="text-gray-900">Review and confirm:</strong> Every detection is presented for your review. You can keep or reject each item before redaction is applied.
            </li>
          </ol>
          <p>
            The AI also accepts custom instructions. If you need to redact a specific type of information — such as "all references to Project X" or "employee performance ratings" — simply describe what you are looking for, and the AI will include it in its scan.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">AI vs Regex Redaction</h2>
          <p className="mb-4">
            To understand why AI redaction is superior, it helps to compare it directly with regex-based redaction:
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3 font-semibold text-gray-900">Aspect</th>
                  <th className="text-center px-5 py-3 font-semibold text-gray-900">Regex</th>
                  <th className="text-center px-5 py-3 font-semibold text-amber-600">AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Context understanding", "None", "Full"],
                  ["Catches unstructured data", "Rarely", "Always"],
                  ["Requires manual rules", "Yes", "No"],
                  ["False positives", "High", "Low"],
                  ["Adapts to new formats", "Manual update needed", "Automatic"],
                ].map(([aspect, regex, ai]) => (
                  <tr key={aspect}>
                    <td className="px-5 py-3 font-medium text-gray-900">{aspect}</td>
                    <td className="px-5 py-3 text-center text-gray-600">{regex}</td>
                    <td className="px-5 py-3 text-center text-green-600 font-medium">{ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Regex is effective for structured, predictable data like Social Security numbers (XXX-XX-XXXX) or credit card numbers. But it struggles with unstructured data like names, addresses, and context-dependent sensitive information. AI understands that "John Smith" is a name and "123 Main St" is an address, even if neither follows a rigid pattern. Learn more in our detailed comparison of <Link href="/blog/ai-vs-regex-redaction" className="text-blue-600 hover:underline">AI vs regex redaction</Link>.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What Types of Data Can AI Detect?
          </h2>
          <p className="mb-4">
            Redactly&apos;s AI detection covers a broad range of sensitive data types, including:
          </p>
          <div className="grid sm:grid-cols-2 gap-2 mb-4">
            {[
              "Full names",
              "Email addresses",
              "Phone numbers",
              "Physical addresses",
              "Social Security numbers",
              "Credit card numbers",
              "Bank account numbers",
              "Dates of birth",
              "Passport numbers",
              "Driver's license numbers",
              "Tax ID numbers",
              "Medical record numbers",
              "IP addresses",
              "Custom-specified data",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm">
                <span className="text-green-500 mt-0.5 shrink-0">&#10003;</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p>
            Because the AI understands context, it can also detect sensitive data that does not fit a standard category. For example, if a document contains internal project code names or confidential business terms, you can instruct the AI to find and flag them.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Try Redactly&apos;s AI Redaction Free
          </h2>
          <p className="mb-4">
            You do not need a credit card, an account, or any technical expertise to use Redactly&apos;s AI redaction. Simply go to the <Link href="/tool" className="text-blue-600 hover:underline">tool page</Link>, upload your document, and let the AI do the work.
          </p>
          <p className="mb-4">
            The free plan includes 20 pages per month with AI-powered detection for PDF and Word documents. Upgrade to Pro for $19/month to add Excel support, batch processing, audit logs, and redaction certificates.
          </p>
          <p>
            <Link href="/learn/what-is-redaction" className="text-blue-600 hover:underline">Learn more about document redaction</Link> and how AI is changing the way organizations protect sensitive information.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Try AI redaction for free
          </h3>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            Redactly is the only free online redaction tool that supports PDF, Word, and Excel. Upload a document and see AI detection in action.
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
            <Link href="/blog/ai-vs-regex-redaction" className="text-blue-600 hover:underline">AI vs Regex Redaction</Link>
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
