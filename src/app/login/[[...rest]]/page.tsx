export const runtime = "edge";

"use client";

import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { FileText } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <Link href="/" className="inline-flex items-center gap-2 font-semibold text-gray-900 mb-8">
        <div className="w-7 h-7 rounded-lg bg-gray-900 text-white flex items-center justify-center">
          <FileText className="w-4 h-4" />
        </div>
        Doczen
      </Link>
      <SignIn />
    </div>
  );
}
