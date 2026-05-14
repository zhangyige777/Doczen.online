"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth, UserButton } from "@clerk/nextjs";
import { FileText, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSubscription } from "@/lib/subscription";

export function Nav() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { isSignedIn } = useAuth();
  const isPro = getSubscription().plan === "pro";

  return (
    <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-gray-900">
          <div className="w-7 h-7 rounded-lg bg-gray-900 text-white flex items-center justify-center">
            <FileText className="w-4 h-4" />
          </div>
          Doczen
        </Link>

        <div className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <Link href="/#upload-section" className="hover:text-gray-900 transition-colors">Upload</Link>
          <Link href="/pricing" className="hover:text-gray-900 transition-colors">Pricing</Link>
          <Link href="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          {isSignedIn ? (
            <>
              {isPro && (
                <span className="text-xs font-semibold bg-amber-100 text-amber-700 px-2.5 py-0.5 rounded-full">
                  Pro
                </span>
              )}
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">Dashboard</Button>
              </Link>
              <UserButton />
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">Sign in</Button>
              </Link>
              <Link href="/#upload-section">
                <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">Try free</Button>
              </Link>
            </>
          )}
        </div>

        <button className="sm:hidden" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle menu">
          {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenu && (
        <div className="sm:hidden border-t bg-white px-4 py-3 space-y-2">
          <Link href="/#upload-section" className="block py-1 text-sm">Upload</Link>
          <Link href="/pricing" className="block py-1 text-sm">Pricing</Link>
          <Link href="/blog" className="block py-1 text-sm">Blog</Link>
          <div className="pt-2 border-t">
            {isSignedIn ? (
              <>
                <div className="flex items-center gap-2">
                  <Link href="/dashboard" className="block py-1 text-sm">Dashboard</Link>
                  {isPro && (
                    <span className="text-[10px] font-semibold bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full">
                      Pro
                    </span>
                  )}
                </div>
                <div className="py-1">
                  <UserButton />
                </div>
              </>
            ) : (
              <>
                <Link href="/login" className="block py-1 text-sm">Sign in</Link>
                <Link href="/#upload-section">
                  <Button size="sm" className="w-full mt-2 bg-amber-600 hover:bg-amber-700 text-white">Try free</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
