"use client";

import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePdfViewer } from "@/hooks/use-pdf-viewer";
import { AnnotationOverlay } from "./annotation-overlay";

interface PdfViewerProps {
  enabled: boolean;
}

export function PdfViewer({ enabled }: PdfViewerProps) {
  const {
    canvasRef,
    currentPage,
    totalPages,
    scale,
    rendering,
    overlayStyle,
    goToPage,
    zoomIn,
    zoomOut,
  } = usePdfViewer(enabled);

  return (
    <div className="flex flex-col h-full">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 border-b bg-white">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage <= 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="text-sm tabular-nums min-w-[60px] text-center">
            {currentPage} / {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage >= totalPages}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" onClick={zoomOut}>
            <ZoomOut className="w-4 h-4" />
          </Button>
          <span className="text-xs text-gray-500 w-12 text-center tabular-nums">
            {Math.round(scale * 100)}%
          </span>
          <Button variant="ghost" size="sm" onClick={zoomIn}>
            <ZoomIn className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* PDF canvas + overlay */}
      <div className="flex-1 overflow-auto bg-gray-200 flex justify-center p-4">
        {rendering && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 z-10 bg-white/80 px-3 py-1 rounded-full text-xs text-gray-500">
            Rendering...
          </div>
        )}
        <div className="relative inline-block shadow-lg">
          <canvas ref={canvasRef} className="block" />
          {overlayStyle.width > 0 && (
            <div
              className="annotation-layer absolute top-0 left-0"
              style={{
                width: overlayStyle.width,
                height: overlayStyle.height,
              }}
            >
              <AnnotationOverlay pageNumber={currentPage} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
