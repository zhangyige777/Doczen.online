"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import type { PDFDocumentProxy, RenderTask } from "pdfjs-dist";
import { getPdfjs, getCachedDocument } from "@/lib/pdfjs";

export function usePdfViewer(enabled: boolean) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const renderTaskRef = useRef<RenderTask | null>(null);
  const [pdfDoc, setPdfDoc] = useState<PDFDocumentProxy | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(1.5);
  const [rendering, setRendering] = useState(false);
  const [overlayStyle, setOverlayStyle] = useState({ width: 0, height: 0 });
  const totalPages = pdfDoc?.numPages || 0;

  // Use cached document from text extraction
  useEffect(() => {
    if (!enabled) return;
    void getPdfjs().then(() => {
      const doc = getCachedDocument();
      if (doc) setPdfDoc(doc);
    });
  }, [enabled]);

  // Render current page
  useEffect(() => {
    if (!pdfDoc || !canvasRef.current) return;

    let cancelled = false;
    const canvas = canvasRef.current;

    renderTaskRef.current?.cancel();
    setRendering(true);

    pdfDoc.getPage(currentPage).then((page) => {
      if (cancelled) return;
      const viewport = page.getViewport({ scale });
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      setOverlayStyle({ width: viewport.width, height: viewport.height });

      renderTaskRef.current = page.render({ canvas, viewport });
      renderTaskRef.current.promise.then(() => {
        if (!cancelled) setRendering(false);
      });
    });

    return () => {
      cancelled = true;
      renderTaskRef.current?.cancel();
    };
  }, [pdfDoc, currentPage, scale]);

  const goToPage = useCallback(
    (page: number) => setCurrentPage(Math.max(1, Math.min(page, totalPages))),
    [totalPages]
  );
  const zoomIn = useCallback(() => setScale((s) => Math.min(s + 0.25, 3.0)), []);
  const zoomOut = useCallback(() => setScale((s) => Math.max(s - 0.25, 0.5)), []);

  return {
    canvasRef,
    currentPage,
    totalPages,
    scale,
    rendering,
    overlayStyle,
    goToPage,
    zoomIn,
    zoomOut,
  };
}
