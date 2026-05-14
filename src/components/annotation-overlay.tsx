"use client";

import { usePipelineStore } from "@/lib/store";
import { PII_TYPE_COLORS } from "@/lib/types";

interface AnnotationOverlayProps {
  pageNumber: number;
}

export function AnnotationOverlay({ pageNumber }: AnnotationOverlayProps) {
  const detections = usePipelineStore((s) => s.detections);
  const toggleDetection = usePipelineStore((s) => s.toggleDetection);

  return (
    <>
      {detections.map((det) =>
        det.occurrences
          .filter((occ) => occ.pageNumber === pageNumber)
          .map((occ, i) => {
            const color = PII_TYPE_COLORS[det.piiType] || "#888";
            const bgAlpha = det.kept ? "33" : "15"; // 20% vs 8% opacity
            const borderAlpha = det.kept ? "99" : "33";

            return (
              <div
                key={`${det.id}-${i}`}
                className="absolute rounded-sm cursor-pointer transition-opacity hover:ring-2 hover:ring-black/30"
                style={{
                  left: occ.viewportBbox.x,
                  top: occ.viewportBbox.y,
                  width: Math.max(occ.viewportBbox.width, 4),
                  height: Math.max(occ.viewportBbox.height, 6),
                  backgroundColor: color + bgAlpha,
                  border: `1px solid ${color}${borderAlpha}`,
                }}
                title={`${det.piiType}: "${det.text}" (${(det.confidence * 100).toFixed(0)}%)`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDetection(det.id);
                }}
              />
            );
          })
      )}
    </>
  );
}
