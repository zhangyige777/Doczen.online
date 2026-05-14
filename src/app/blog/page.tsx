"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Check } from "lucide-react";

const posts = [
  {
    slug: "what-is-document-redaction",
    title: "What Is Document Redaction and Why Does It Matter?",
    excerpt: "A comprehensive guide to document redaction — what it is, when you need it, and how AI is changing the game for legal, medical, and financial professionals.",
    author: "Redactly Team",
    date: "2026-05-01",
    category: "Guide",
  },
  {
    slug: "pii-compliance-checklist",
    title: "PII Compliance Checklist: GDPR, HIPAA, and CCPA in 2026",
    excerpt: "Stay compliant with evolving privacy regulations. A practical checklist for handling personally identifiable information across jurisdictions.",
    author: "Redactly Team",
    date: "2026-04-20",
    category: "Compliance",
  },
  {
    slug: "ai-vs-regex-redaction",
    title: "AI vs. Regex: Why Smart Redaction Beats Pattern Matching",
    excerpt: "Traditional regex-based redaction misses context. Learn how AI-powered detection understands names, addresses, and sensitive data the way humans do.",
    author: "Redactly Team",
    date: "2026-04-10",
    category: "Technology",
  },
  {
    slug: "redaction-mistakes-to-avoid",
    title: "5 Common Redaction Mistakes (and How to Avoid Them)",
    excerpt: "From incomplete blackouts to metadata leaks — the most frequent redaction failures and how modern tools prevent them.",
    author: "Redactly Team",
    date: "2026-03-25",
    category: "Guide",
  },
  {
    slug: "financial-document-redaction",
    title: "Redacting Financial Documents: A Step-by-Step Guide",
    excerpt: "How to safely redact account numbers, tax IDs, income figures, and other sensitive data from financial statements and reports.",
    author: "Redactly Team",
    date: "2026-03-12",
    category: "Guide",
  },
];

export default function BlogPage() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Guides, compliance tips, and product updates from the Redactly team.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
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
              <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
              <span className="text-sm text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gray-50 border border-gray-100 text-center">
          {subscribed ? (
            <div>
              <Check className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Subscribed!</h3>
              <p className="text-sm text-gray-500">You&apos;ll receive new articles in your inbox.</p>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get new articles in your inbox</h3>
              <p className="text-sm text-gray-500 mb-4">No spam. Unsubscribe anytime.</p>
              <form className="flex gap-3 max-w-md mx-auto" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="flex-1 px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <Button type="submit" size="sm">Subscribe</Button>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
