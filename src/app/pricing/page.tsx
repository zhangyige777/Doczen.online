"use client";

import { useState } from "react";
import { Check, HelpCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProCTA } from "@/components/pricing-cta";

const monthlyTiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For individuals who occasionally need to redact a document.",
    features: [
      "20 pages per month",
      "PDF format",
      "Word (.docx) format",
      "Standard PII detection",
      "Custom redaction instructions",
      "Visual redactions",
      "No watermark",
    ],
    missing: [
      "Excel (.xlsx) format",
      "Audit log",
      "Redaction certificate",
      "Batch processing",
    ],
    cta: "Start for free",
    href: "/#upload-section",
    featured: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For professionals who regularly handle sensitive documents.",
    features: [
      "200 pages per month",
      "PDF format",
      "Word (.docx) format",
      "Excel (.xlsx) format",
      "Advanced PII detection",
      "Custom redaction instructions",
      "Visual redactions",
      "Audit log",
      "Redaction certificate",
      "Batch processing (up to 10 files)",
      "No watermark",
      "Priority support",
    ],
    missing: [],
    cta: "Start free trial",
    href: "",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with high-volume redaction needs.",
    features: [
      "Unlimited pages",
      "All formats (PDF, Word, Excel)",
      "Image / scanned OCR (coming soon)",
      "Advanced PII detection",
      "Custom detection rules",
      "Audit log & certificate",
      "Unlimited batch processing",
      "SSO / SAML",
      "Priority support & SLA",
      "On-premise deployment option",
    ],
    missing: [],
    cta: "Contact sales",
    href: "/contact",
    featured: false,
  },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  const tiers = yearly
    ? monthlyTiers.map((tier) => {
        if (tier.name === "Pro") {
          return {
            ...tier,
            price: "$15",
            period: "/month, billed annually",
            description: "$180/year. Save 21% compared to monthly billing.",
            cta: "Start free trial",
          };
        }
        return tier;
      })
    : monthlyTiers;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto mb-8">
            Start for free. Upgrade when you need more pages, more formats, or audit trails.
          </p>

          {/* Monthly / Yearly toggle */}
          <div className="inline-flex items-center gap-3 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                !yearly
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                yearly
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Yearly
              <span className="text-[11px] text-green-600 font-semibold">Save 21%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                tier.featured
                  ? "border-amber-500 ring-2 ring-amber-500/20 shadow-lg"
                  : "border-slate-200"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-600 text-white text-xs font-semibold">
                  Recommended
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  {tier.period && (
                    <span className="text-gray-500 text-sm">{tier.period}</span>
                  )}
                </div>
                <p className="mt-2 text-sm text-gray-500">{tier.description}</p>
              </div>

              <ul className="space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
                {tier.missing.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-400">
                    <HelpCircle className="w-4 h-4 text-gray-300 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                {tier.featured ? (
                  <ProCTA label={tier.cta} yearly={yearly} />
                ) : (
                  <Link href={tier.href}>
                    <Button variant="outline" className="w-full" size="lg">
                      {tier.cta}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Compare plans
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 font-medium text-gray-900">Feature</th>
                  <th className="text-center py-3 font-medium text-gray-900">Free</th>
                  <th className="text-center py-3 font-medium text-amber-600">Pro</th>
                  <th className="text-center py-3 font-medium text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Pages / month", "20", "200", "Unlimited"],
                  ["PDF", "Yes", "Yes", "Yes"],
                  ["Word (.docx)", "Yes", "Yes", "Yes"],
                  ["Excel (.xlsx)", "No", "Yes", "Yes"],
                  ["Images / OCR", "No", "No", "Coming soon"],
                  ["Batch processing", "No", "Up to 10 files", "Unlimited"],
                  ["Audit log", "No", "Yes", "Yes"],
                  ["Redaction certificate", "No", "Yes", "Yes"],
                  ["Watermark", "No", "No", "No"],
                  ["Support", "Email", "Priority", "Dedicated"],
                ].map(([feature, free, pro, enterprise]) => (
                  <tr key={feature}>
                    <td className="py-3 text-gray-700">{feature}</td>
                    <td className="py-3 text-center text-gray-600">{free}</td>
                    <td className="py-3 text-center text-amber-600 font-medium">{pro}</td>
                    <td className="py-3 text-center text-gray-600">{enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
          <p className="text-gray-500 mb-6">
            Try Redactly for free. No credit card required. Upgrade anytime.
          </p>
          <Link href="/#upload-section">
            <Button size="lg" className="gap-2 text-base px-8 h-12 rounded-xl bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-200">
              Start Redacting Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
