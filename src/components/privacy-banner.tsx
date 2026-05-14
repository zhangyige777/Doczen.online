import { Shield } from "lucide-react";

export function PrivacyBanner() {
  return (
    <div className="w-full bg-gray-900 text-gray-300 text-xs py-2 px-4 flex items-center justify-center gap-2">
      <Shield className="w-3.5 h-3.5 text-green-400" />
      Files are encrypted in transit and permanently deleted after download.
      We never store your documents.
    </div>
  );
}
