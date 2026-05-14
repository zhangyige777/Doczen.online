import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://redactly.online";

  const staticPages = [
    "",
    "/pricing",
    "/contact",
    "/privacy",
    "/terms",
    "/tool",
    "/security",
    "/learn/what-is-redaction",
    "/learn/data-privacy-compliance",
    "/how-to/redact-a-word-document",
    "/how-to/redact-excel",
    "/how-to/redact-in-adobe",
    "/how-to/redact-a-pdf",
    "/how-to/redact-pdf-free",
    "/use-cases/finance",
    "/use-cases/legal",
    "/use-cases/healthcare",
    "/vs/adobe-acrobat",
    "/vs/smallpdf",
    "/features/ai-redaction",
    "/features/batch-redaction",
  ];

  const blogPages = [
    "/blog/what-is-document-redaction",
    "/blog/pii-compliance-checklist",
    "/blog/ai-vs-regex-redaction",
    "/blog/redaction-mistakes-to-avoid",
    "/blog/financial-document-redaction",
    "/blog/redact-bank-statement-rental",
    "/blog/redact-id-documents",
    "/blog/redact-excel-financial-data",
    "/blog/best-redaction-software-2025",
    "/blog/redact-medical-records",
    "/blog/automated-redaction-guide",
  ];

  const allPages = [...staticPages, ...blogPages];

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : "monthly" as const,
    priority: page === "" ? 1.0 : page.startsWith("/learn") || page.startsWith("/how-to") ? 0.8 : 0.6,
  }));
}
