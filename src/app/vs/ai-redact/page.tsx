import Link from "next/link";
import type { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Redactly vs ai-redact.com — Redaction Tool Comparison | Redactly",
  description:
    "Compare Redactly vs ai-redact.com for document redaction. See why Redactly supports Word and Excel while ai-redact only handles PDF — with a more generous free tier.",
};

const faqItems = [
  {
    question: "Which is better — Redactly or ai-redact?",
    answer:
      "It depends on your needs. Redactly is better if you need Word (.docx) or Excel (.xlsx) redaction, want a more generous free tier, or prefer AI-powered context-aware detection. Ai-redact is a solid option if you only need PDF redaction and prefer its specific interface. For multi-format support and free usage, Redactly is the stronger choice.",
  },
  {
    question: "Does ai-redact.com support Word or Excel redaction?",
    answer:
      "No. Ai-redact.com only supports PDF files. If you need to redact Word documents or Excel spreadsheets, you need to convert them to PDF first, which can introduce formatting issues. Redactly handles PDF, Word, and Excel natively in one tool with no conversion needed.",
  },
  {
    question: "Is Redactly free compared to ai-redact?",
    answer:
      "Yes. Redactly offers a free tier covering 20 pages per month with no watermark and no account required. Pro plan at $19/month adds 200 pages, batch processing, and audit logs. Both tools have free options, but Redactly's free tier supports more formats and includes AI-powered detection.",
  },
  {
    question: "Do both tools use AI for redaction?",
    answer:
      "Redactly uses Claude AI (Anthropic) for context-aware detection of 25+ PII types. Ai-redact uses its own AI detection. Both are AI-powered, but Redactly's AI understands context — it can distinguish between a name used as a person vs. a product name — reducing false positives.",
  },
  {
    question: "Can I try Redactly without creating an account?",
    answer:
      "Yes. Redactly's free tier requires no account — just upload your document and start redacting. An account is only needed for Pro features. This makes it easier to evaluate the tool before committing.",
  },
];

export default function VsAiRedactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900">vs ai-redact.com</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Redactly vs ai-redact.com — Which Redaction Tool Is Better?
        </h1>

        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Ai-redact.com is a direct competitor in the AI document redaction space. Both tools use AI to detect
          sensitive information, but there are key differences in format support, pricing, and features that
          affect which one is right for you.
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left p-4 font-semibold text-gray-900 border border-gray-200 w-1/3">
                  Feature
                </th>
                <th className="text-left p-4 font-semibold text-gray-900 border border-gray-200 w-1/3">
                  ai-redact.com
                </th>
                <th className="text-left p-4 font-semibold text-amber-700 border border-gray-200 w-1/3 bg-amber-50">
                  Redactly
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "PDF Redaction", ai: "✅", redactly: "✅" },
                { feature: "Word (.docx) Redaction", ai: "❌", redactly: "✅" },
                { feature: "Excel (.xlsx) Redaction", ai: "❌", redactly: "✅" },
                { feature: "AI-Powered Detection", ai: "✅", redactly: "✅" },
                { feature: "Free Tier", ai: "Limited", redactly: "20 pages/month" },
                { feature: "No Account Required", ai: "❌", redactly: "✅" },
                { feature: "Online (No Install)", ai: "✅", redactly: "✅" },
                { feature: "Batch Processing", ai: "—", redactly: "Pro plan" },
                { feature: "Audit Logs", ai: "—", redactly: "Pro plan" },
                { feature: "Watermark-Free", ai: "—", redactly: "✅" },
              ].map((row) => (
                <tr key={row.feature} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900 border border-gray-200">
                    {row.feature}
                  </td>
                  <td className="p-4 text-gray-700 border border-gray-200">
                    {row.ai}
                  </td>
                  <td className="p-4 text-gray-700 border border-gray-200 bg-amber-50/30">
                    {row.redactly}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detailed Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Feature Comparison
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Format Support — The Biggest Difference
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The single biggest advantage Redactly has over ai-redact.com is format support. Ai-redact.com only
                handles PDF files. If you receive a Word document or Excel spreadsheet — common in legal, HR,
                and finance workflows — you must convert it to PDF before redacting. This adds friction and
                risks formatting issues.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Redactly works directly with PDF, Word (.docx), and Excel (.xlsx) files. Upload any format and
                redact it in-place without conversion. For professionals who handle multiple document types,
                this saves significant time.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                AI Detection Quality
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Both tools use AI for PII detection. Redactly is powered by Claude AI (Anthropic), which provides
                context-aware understanding — it knows that &quot;John Smith&quot; is a name even without pattern matching,
                and can distinguish between different contexts where the same text might or might not be sensitive.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Pricing & Free Tier
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ai-redact.com offers a limited free tier. Redactly offers 20 pages per month free with no
                watermark and no account required. For most individual users and light professional use,
                Redactly&apos;s free tier is more generous and more capable.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ease of Use
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Both tools are web-based with no installation required. Redactly requires no account for
                the free tier — just upload and redact. Ai-redact.com requires sign-up, which adds friction
                for users who want to quickly redact a document.
              </p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-slate-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Summary: When to Choose Which
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Choose ai-redact.com if...
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>You only need PDF redaction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>You prefer its specific interface</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Choose Redactly if...
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>You need Word or Excel redaction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>You want a free tier without account sign-up</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>You handle multiple document formats</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>You prefer no watermark on redacted documents</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white rounded-2xl border border-slate-100 overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-sm font-medium text-gray-900 hover:text-amber-700 transition-colors">
                  {faq.question}
                  <span className="ml-2 shrink-0 text-gray-400 group-open:rotate-180 transition-transform">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 text-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-white mb-3">
            Try Redactly Free — No Account Required
          </h2>
          <p className="text-slate-300 mb-6 max-w-lg mx-auto">
            The only free online redaction tool that supports PDF, Word, and Excel.
            Upload a document and see the difference in seconds.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-xl transition-colors"
          >
            Start Redacting Free
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </section>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </div>
  );
}
