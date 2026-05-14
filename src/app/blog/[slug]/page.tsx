import Link from "next/link";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts: Record<string, {
  title: string;
  author: string;
  date: string;
  category: string;
  body: string;
}> = {
  "what-is-document-redaction": {
    title: "What Is Document Redaction and Why Does It Matter?",
    author: "Doczen Team",
    date: "2026-05-01",
    category: "Guide",
    body: `Document redaction is the process of permanently removing or obscuring sensitive information from documents before they are shared with others. It's a critical practice across legal, medical, financial, and government sectors — anywhere confidential data must be protected.

## Why Redaction Matters

When you share a PDF or document, you may inadvertently expose personally identifiable information (PII) such as names, addresses, Social Security numbers, phone numbers, email addresses, financial account numbers, and dates of birth.

The consequences of failing to redact this information can be severe:

- Legal liability: Courts have imposed sanctions on law firms that failed to properly redact filings
- Regulatory fines: GDPR violations can cost up to 4% of annual global revenue
- Reputational damage: Data breaches from improper redaction make headlines and erode trust
- Identity theft exposure: Leaked PII puts individuals at risk

## The Old Way: Manual Redaction

Traditionally, redaction meant printing documents, using a black marker, and scanning them back. Or using a PDF editor to draw black boxes over text. These approaches are time-consuming, error-prone, and often incomplete — black boxes drawn over text don't always remove the underlying data, meaning the text can often still be selected and copied.

## The New Way: AI-Powered Redaction

Modern tools like Doczen use AI to automatically detect PII with contextual understanding. Instead of just matching patterns (regex), AI understands that "John Smith" is a name, "555 Main Street" is an address, and "123-45-6789" is a Social Security number — even when they appear in different formats or contexts.

The process takes seconds instead of hours, catches more PII, and applies permanent visual redactions that cannot be undone.`,
  },
  "pii-compliance-checklist": {
    title: "PII Compliance Checklist: GDPR, HIPAA, and CCPA in 2026",
    author: "Doczen Team",
    date: "2026-04-20",
    category: "Compliance",
    body: `Navigating privacy regulations is complex, but protecting PII in your documents is a critical part of compliance. Here's a practical checklist organized by regulation.

## GDPR (General Data Protection Regulation)

The EU regulation applies to any organization handling EU residents' data. Key requirements include identifying all personal data in documents before sharing, applying data minimization (only share what's necessary), documenting your redaction process, and ensuring redaction is irreversible — drawn boxes aren't enough.

## HIPAA (Health Insurance Portability and Accountability Act)

For US healthcare organizations and their business associates, all 18 PHI identifiers must be redacted before sharing medical records. This includes names, dates (except year), phone numbers, email addresses, SSNs, medical record numbers, and more. Maintain an audit trail of what was redacted and when, and use tools that provide redaction certificates for compliance audits.

## CCPA (California Consumer Privacy Act)

For businesses handling California residents' data, you must honor consumer requests to delete personal information, redact PII before responding to data access requests from third parties, and maintain reasonable security procedures to protect personal information.

## Practical Tips

Automate detection with AI-powered tools that catch more PII than manual review. Always have a human review AI suggestions before finalizing. Keep audit logs recording what was redacted, when, and by whom. Use permanent redaction to ensure underlying text cannot be recovered. Finally, always open the redacted document and try to select or copy the redacted areas to verify.`,
  },
  "ai-vs-regex-redaction": {
    title: "AI vs. Regex: Why Smart Redaction Beats Pattern Matching",
    author: "Doczen Team",
    date: "2026-04-10",
    category: "Technology",
    body: `For years, document redaction tools relied on regular expressions (regex) to find sensitive information. While regex is fast, it has fundamental limitations that AI-powered detection overcomes.

## How Regex-Based Redaction Works

Regex uses pattern matching to find things that look like specific formats: SSNs matching \\d{3}-\\d{2}-\\d{4}, emails matching standard patterns, and phone numbers matching ###-###-####.

## The Problems with Regex

First, regex has no context. "123-45-6789" could be an SSN, a product SKU, or a part number — regex can't tell the difference. Second, patterns are brittle. "John Smith" matches a name pattern but so does "Board Meeting," producing false positives that waste time. Third, regex is format-dependent: a date like "January 5th, 1990" won't match a pattern looking for "01/05/1990." Fourth, missed variations: names with unusual characters, international phone numbers, and addresses in non-standard formats slip through.

## How AI Detection Works

AI models like Claude analyze text the way a human would, understanding context and semantics. They identify that "John" is a person's name when it appears near a last name or address. They understand that "555-0147" in the context of "Customer Support: 555-0147" is a phone number, not a part number. They recognize address formats across countries and catch partial matches that regex would miss.

## The Bottom Line

Regex is useful for simple pattern matching but insufficient for professional document redaction. AI-powered detection provides higher accuracy, fewer false positives, and better coverage — saving time and reducing compliance risk.`,
  },
  "redaction-mistakes-to-avoid": {
    title: "5 Common Redaction Mistakes (and How to Avoid Them)",
    author: "Doczen Team",
    date: "2026-03-25",
    category: "Guide",
    body: `Redaction seems simple — draw black boxes over sensitive text, right? Unfortunately, this approach has led to some of the most embarrassing data leaks in history. Here are five common mistakes and how to avoid them.

## 1. Drawing Boxes Without Removing Underlying Text

The most famous mistake: placing black rectangles over text in a PDF without actually removing the text from the document's content stream. Anyone can select, copy, and paste the "hidden" text into another document. Use tools that apply permanent redactions by removing or overwriting the actual text data.

## 2. Forgetting About Metadata

Documents contain hidden metadata: author names, revision history, comments, tracked changes, and even GPS coordinates in photos. Redacting visible text while leaving metadata intact defeats the purpose. Strip metadata from documents before sharing.

## 3. Incomplete Redaction

Missing an occurrence of a name or number is surprisingly easy. A document might mention "John Smith" on page 1 and "Mr. Smith" on page 6 — a human reviewer might catch the first but miss the second. Use automated detection to find all occurrences, then review systematically.

## 4. Redacting the Wrong Thing

Over-redaction can be as problematic as under-redaction. In legal discovery, redacting privileged information is required, but over-redacting relevant facts can lead to sanctions. Always review AI suggestions before applying.

## 5. Not Verifying the Output

After redacting, always open the final document and verify: try to select text in redacted areas, search for the original text, and check every page. Make verification a mandatory final step in your workflow.`,
  },
  "financial-document-redaction": {
    title: "Redacting Financial Documents: A Step-by-Step Guide",
    author: "Doczen Team",
    date: "2026-03-12",
    category: "Guide",
    body: `Financial documents contain some of the most sensitive information an organization handles. Whether you're preparing documents for litigation, responding to an audit, or sharing reports with external stakeholders, proper redaction is essential.

## What to Redact in Financial Documents

Key categories include account numbers (bank accounts, credit cards, investments), tax identification numbers (SSNs, EINs, ITINs), income and compensation figures, transaction details (amounts, counterparties, dates), and personal identifiers (names, addresses, phone numbers).

## Step-by-Step Process

First, identify all PII categories that appear in your documents before you start. Then use AI detection to scan every page and flag potential PII — account numbers, tax IDs, names, and more — in seconds rather than hours.

Third, review each detection: confirm it's actually PII, check that all occurrences across all pages are found, and decide whether each item should be redacted or kept. Fourth, apply permanent redactions that overwrite the underlying text, not just draw boxes on top.

Finally, verify the output by opening the redacted document and confirming all intended PII is fully covered and the document is still readable. Generate a redaction certificate for your records — this documents what was redacted, when, and by whom, which is invaluable for compliance audits.`,
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-gray-500">Article not found.</p>
          <Link href="/blog">
            <Button variant="outline">Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 py-16">
        <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 mb-8">
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Blog
        </Link>

        <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
          <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-medium">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <User className="w-3 h-3" />
            {post.author}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 leading-tight">
          {post.title}
        </h1>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          {post.body.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2 key={i} className="text-xl font-semibold text-gray-900 mt-10 mb-4">
                  {block.slice(3)}
                </h2>
              );
            }
            return (
              <p key={i} className="mb-4">
                {block.split("\n").map((line, j) => (
                  <span key={j}>
                    {j > 0 && <br />}
                    {line}
                  </span>
                ))}
              </p>
            );
          })}
        </div>
      </article>
    </div>
  );
}
