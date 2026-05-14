import Link from "next/link";
import { FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 font-semibold text-gray-900 mb-3">
              <div className="w-6 h-6 rounded bg-gray-900 text-white flex items-center justify-center">
                <FileText className="w-3.5 h-3.5" />
              </div>
              Redactly
            </div>
            <p className="text-sm text-gray-500">
              AI-powered document redaction for legal, medical, HR, and financial professionals.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3 text-sm">Product</h4>
            <div className="space-y-2">
              <Link href="/#upload-section" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Upload</Link>
              <Link href="/pricing" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Pricing</Link>
              <Link href="/dashboard" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Dashboard</Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3 text-sm">Resources</h4>
            <div className="space-y-2">
              <Link href="/blog" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Blog</Link>
              <Link href="/contact" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3 text-sm">Legal</h4>
            <div className="space-y-2">
              <Link href="/privacy" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Redactly. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Privacy-first. Files are processed in memory and deleted after download.
          </p>
        </div>
      </div>
    </footer>
  );
}
