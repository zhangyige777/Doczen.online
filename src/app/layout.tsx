import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Free AI Redaction Tool — Redact PDF, Word & Excel Online | Redactly",
    template: "%s | Redactly",
  },
  description:
    "Redactly redacts sensitive information from PDF, Word, and Excel files using AI. Free online tool, no software needed. Supports .pdf .docx .xlsx.",
  keywords: [
    "document redaction",
    "AI redaction",
    "PDF redaction",
    "PII removal",
    "redact PDF",
    "redact Word document",
    "redact Excel",
    "sensitive data removal",
    "free redaction tool",
    "online redaction tool",
    "GDPR compliance",
    "HIPAA redaction",
  ],
  authors: [{ name: "Redactly" }],
  creator: "Redactly",
  publisher: "Redactly",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://redactly.online"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Redactly",
    title: "Free AI Redaction Tool — Redact PDF, Word & Excel Online | Redactly",
    description:
      "Redactly redacts sensitive information from PDF, Word, and Excel files using AI. Free online tool, no software needed.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Redactly — Free AI Document Redaction Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Redaction Tool — Redact PDF, Word & Excel Online | Redactly",
    description:
      "Redactly redacts sensitive information from PDF, Word, and Excel files using AI. Free online tool, no software needed.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      afterSignOutUrl="/"
      domain={process.env.NEXT_PUBLIC_CLERK_DOMAIN || "clerk.redactly.online"}
    >
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">
          <TooltipProvider>
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
          </TooltipProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
