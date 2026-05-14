"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePipelineStore } from "@/lib/store";
import {
  extractTextFromPDF,
  matchDetectionsToTextItems,
  buildPagesForDetection,
} from "@/lib/text-extractor";

export function usePipeline() {
  const {
    fileBuffer,
    instruction,
    status,
    pipelineStartCount,
    setStatus,
    setTextItems,
    setDetections,
    setError,
  } = usePipelineStore();

  const startedRef = useRef(0);

  const run = useCallback(async () => {
    if (!fileBuffer) return;
    if (pipelineStartCount === 0) return;
    if (startedRef.current === pipelineStartCount) return;
    startedRef.current = pipelineStartCount;

    try {
      setStatus("extracting", "Reading PDF contents...");

      // Step 1: Extract text with positions
      const { textItems, totalPages, viewportBboxes } =
        await extractTextFromPDF(fileBuffer);
      setTextItems(textItems, totalPages);

      setStatus("detecting", "AI analyzing sensitive information...");

      // Step 2: Build pages and call Claude
      const pages = buildPagesForDetection(textItems, totalPages);
      const response = await fetch("/api/detect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pages, instruction: instruction || undefined }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Detection failed");
      }

      const { detections: rawDetections } = await response.json();

      // Step 3: Map Claude detections back to text item positions
      const matched = matchDetectionsToTextItems(
        rawDetections || [],
        textItems,
        viewportBboxes
      );

      setDetections(matched);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Pipeline failed");
    }
  }, [fileBuffer, instruction, pipelineStartCount, setStatus, setTextItems, setDetections, setError]);

  useEffect(() => {
    run();
  }, [run]);

  return { status };
}
