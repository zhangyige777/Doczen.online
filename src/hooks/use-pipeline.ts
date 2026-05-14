"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePipelineStore } from "@/lib/store";
import { extractTextFromDocument } from "@/lib/document-extractor";
import {
  matchDetectionsToTextItems,
  buildPagesForDetection,
} from "@/lib/text-extractor";

export function usePipeline() {
  const {
    fileBuffer,
    filename,
    instruction,
    status,
    pipelineStartCount,
    setStatus,
    setTextItems,
    setFileType,
    setDetections,
    setError,
  } = usePipelineStore();

  const startedRef = useRef(0);

  const run = useCallback(async () => {
    if (!fileBuffer || !filename) return;
    if (pipelineStartCount === 0) return;
    if (startedRef.current === pipelineStartCount) return;
    startedRef.current = pipelineStartCount;

    try {
      setStatus("extracting", "Reading document contents...");

      // Step 1: Extract text with positions (supports PDF/Word/Excel)
      const { textItems, totalPages, viewportBboxes, fileType } =
        await extractTextFromDocument(fileBuffer, filename);
      setTextItems(textItems, totalPages);
      setFileType(fileType);

      setStatus("detecting", "AI analyzing sensitive information...");

      // Step 2: Build pages and call AI detection
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

      // Step 3: Map detections back to text item positions
      const matched = matchDetectionsToTextItems(
        rawDetections || [],
        textItems,
        viewportBboxes
      );

      setDetections(matched);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Pipeline failed");
    }
  }, [fileBuffer, filename, instruction, pipelineStartCount, setStatus, setTextItems, setFileType, setDetections, setError]);

  useEffect(() => {
    run();
  }, [run]);

  return { status };
}
