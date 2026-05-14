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
    default: "Doczen — AI-Powered Document Redaction",
    template: "%s | Doczen",
  },
  description:
    "Redact sensitive data from PDFs, Word, and Excel files using AI. Upload your document, describe what to hide, and download a clean, redacted version in seconds. No watermark, no account required.",
  keywords: [
    "document redaction",
    "AI redaction",
    "PDF redaction",
    "PII removal",
    "redact PDF",
    "sensitive data removal",
    "GDPR compliance",
    "HIPAA redaction",
  ],
  authors: [{ name: "Doczen" }],
  creator: "Doczen",
  publisher: "Doczen",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://doczen.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Doczen",
    title: "Doczen — AI-Powered Document Redaction",
    description:
      "Redact sensitive data from PDFs, Word, and Excel files using AI. No watermark, no account required.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Doczen — AI Document Redaction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doczen — AI-Powered Document Redaction",
    description:
      "Redact sensitive data from PDFs, Word, and Excel files using AI. No watermark, no account required.",
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
    <ClerkProvider>
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
