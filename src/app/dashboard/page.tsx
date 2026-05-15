"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { FileText, BarChart3, Clock, Shield, Trash2, Loader2, Crown, Zap } from "lucide-react";
import { getSubscription, getPagesUsed } from "@/lib/subscription";

interface AuditEntry {
  id: string;
  timestamp: string;
  filename: string;
  pages: number;
  detectionsTotal: number;
  redactedCount: number;
  piiTypes: Record<string, number>;
}

export default function DashboardPage() {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const [auditLog, setAuditLog] = useState<AuditEntry[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem("redactly-audit-log");
        return raw ? JSON.parse(raw) : [];
      } catch {
        return [];
      }
    }
    return [];
  });
  const [subscription] = useState(getSubscription());
  const [pagesUsed] = useState(getPagesUsed());

  const totalDocs = auditLog.length;
  const totalPages = auditLog.reduce((s, e) => s + e.pages, 0);
  const totalRedacted = auditLog.reduce((s, e) => s + e.redactedCount, 0);
  const totalDetections = auditLog.reduce((s, e) => s + e.detectionsTotal, 0);

  const clearLog = () => {
    localStorage.removeItem("redactly-audit-log");
    setAuditLog([]);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <Shield className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h1 className="text-xl font-bold text-gray-900 mb-2">Access Restricted</h1>
          <p className="text-gray-500 mb-6">Sign in to view your dashboard and audit logs.</p>
          <Link href="/login">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">Sign In</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">
              Welcome back, {user?.firstName || user?.emailAddresses?.[0]?.emailAddress || "User"}.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/#upload-section">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">New Redaction</Button>
            </Link>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid sm:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Documents", value: totalDocs, icon: FileText },
            { label: "Pages Processed", value: totalPages, icon: BarChart3 },
            { label: "Items Redacted", value: totalRedacted, icon: Shield },
            { label: "Total Detections", value: totalDetections, icon: Clock },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-5">
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <s.icon className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-wide">{s.label}</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Subscription & Usage */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <div className="flex items-center gap-2 mb-3">
              {subscription.plan === "pro" ? (
                <>
                  <Crown className="w-5 h-5 text-amber-500" />
                  <span className="font-semibold text-gray-900">Pro Plan</span>
                  <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">Active</span>
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5 text-gray-400" />
                  <span className="font-semibold text-gray-900">Free Plan</span>
                </>
              )}
            </div>
            <p className="text-sm text-gray-500 mb-3">
              {subscription.plan === "pro"
                ? `Subscribed since ${subscription.subscribedAt ? new Date(subscription.subscribedAt).toLocaleDateString() : "—"}`
                : "20 pages/month — upgrade for 200"}
            </p>
            {subscription.plan === "free" && (
              <Link href="/pricing">
                <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Crown className="w-4 h-4 mr-1.5" />
                  Upgrade to Pro
                </Button>
              </Link>
            )}
            {subscription.plan === "pro" && (
              <div className="flex items-center gap-2">
                <Link href="/pricing">
                  <Button variant="outline" size="sm">Manage Plan</Button>
                </Link>
                <a
                  href="mailto:support@redactly.online?subject=Cancel%20Subscription"
                  className="text-xs text-gray-400 hover:text-red-500 transition-colors"
                >
                  Cancel subscription
                </a>
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-2">Pages Used This Month</p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold text-gray-900">{pagesUsed}</span>
              <span className="text-gray-400 text-sm">/ {subscription.pagesLimit}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="h-2 rounded-full bg-amber-500 transition-all"
                style={{ width: `${Math.min((pagesUsed / subscription.pagesLimit) * 100, 100)}%` }}
              />
            </div>
            {pagesUsed >= subscription.pagesLimit && (
              <p className="text-xs text-red-500 mt-2">
                {subscription.plan === "free"
                  ? "Monthly limit reached. Upgrade to Pro for 200 pages."
                  : "Monthly limit reached. Contact sales for Enterprise."}
              </p>
            )}
          </div>
        </div>

        {/* Audit log */}
        <div className="bg-white rounded-xl border border-gray-100">
          <div className="px-5 py-4 border-b flex items-center justify-between">
            <h2 className="font-semibold text-gray-900">Audit Log</h2>
            {auditLog.length > 0 && (
              <button onClick={clearLog} className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1">
                <Trash2 className="w-3 h-3" />
                Clear
              </button>
            )}
          </div>

          {auditLog.length === 0 ? (
            <div className="p-12 text-center">
              <FileText className="w-8 h-8 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 text-sm">No documents processed yet.</p>
              <Link href="/#upload-section">
                <Button variant="outline" size="sm" className="mt-4">
                  Redact your first document
                </Button>
              </Link>
            </div>
          ) : (
            <div className="divide-y">
              {auditLog.map((entry) => (
                <div key={entry.id} className="px-5 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{entry.filename}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {new Date(entry.timestamp).toLocaleString()} &middot; {entry.pages} pages &middot; {entry.redactedCount}/{entry.detectionsTotal} items redacted
                    </p>
                    <div className="flex gap-1.5 mt-1.5">
                      {Object.entries(entry.piiTypes).map(([type, count]) => (
                        <span key={type} className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-600">
                          {type}: {count}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">
                    {entry.redactedCount} redacted
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
