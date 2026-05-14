"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { setSubscription } from "@/lib/subscription";

export default function ThankYouPage() {
  useEffect(() => {
    setSubscription({
      plan: "pro",
      subscribedAt: new Date().toISOString(),
      pagesLimit: 200,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center p-8 max-w-md">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Thank you for subscribing!</h1>
        <p className="text-gray-500 mb-8">
          Your payment was successful. You now have access to all Pro features including 200 pages/month,
          Excel support, audit logs, redaction certificates, and batch processing.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/#upload-section">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full">Start Redacting</Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline" className="w-full">Go to Dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
