"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { usePipelineStore } from "@/lib/store";

interface ApplyBarProps {
  onApply: () => void;
  loading: boolean;
}

export function ApplyBar({ onApply, loading }: ApplyBarProps) {
  const detections = usePipelineStore((s) => s.detections);
  const redactCount = detections.filter((d) => d.kept).length;

  if (detections.length === 0) return null;

  return (
    <div className="border-t bg-white px-6 py-3 flex items-center justify-between">
      <p className="text-sm text-gray-600">
        <span className="font-semibold text-gray-900">{redactCount}</span> items
        flagged for redaction
        {redactCount === 0 && (
          <span className="text-gray-400 ml-2">
            — select items above to redact
          </span>
        )}
      </p>
      <Button onClick={onApply} disabled={redactCount === 0 || loading} className="bg-amber-600 hover:bg-amber-700 text-white disabled:opacity-40">
        {loading ? (
          "Applying..."
        ) : (
          <>
            <Download className="w-4 h-4 mr-2" />
            Apply Redactions
          </>
        )}
      </Button>
    </div>
  );
}
