import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PipelineState, PipelineActions, BatchFile } from "./types";

const initialState: PipelineState = {
  sessionId: null,
  filename: null,
  instruction: "",
  status: "idle",
  statusMessage: "",
  fileBuffer: null,
  totalPages: 0,
  textItems: [],
  detections: [],
  error: null,
  pipelineStartCount: 0,
  files: [],
  activeFileIndex: 0,
};

export const usePipelineStore = create<PipelineState & PipelineActions>()(
  persist(
    (set) => ({
      ...initialState,

      setSessionId: (id) => set({ sessionId: id }),

      setFile: (buffer, filename) =>
        set({ fileBuffer: buffer, filename, status: "idle", error: null }),

      setInstruction: (instruction) => set({ instruction }),

      startPipeline: () =>
        set((s) => ({ pipelineStartCount: s.pipelineStartCount + 1, status: "extracting" as const })),

      setStatus: (status, message = "") =>
        set({ status, statusMessage: message }),

      setTextItems: (items, totalPages) =>
        set({ textItems: items, totalPages }),

      setDetections: (detections) =>
        set({
          detections,
          status: "ready",
          statusMessage: "Ready to review",
        }),

      toggleDetection: (detId) =>
        set((state) => ({
          detections: state.detections.map((d) =>
            d.id === detId ? { ...d, kept: !d.kept } : d
          ),
        })),

      setError: (error) =>
        set({ status: "error", error, statusMessage: "Error" }),

      addFiles: (newFiles) =>
        set((s) => ({
          files: [...s.files, ...newFiles],
          filename: s.files.length === 0 ? newFiles[0]?.filename : s.filename,
          fileBuffer: s.files.length === 0 ? newFiles[0]?.buffer : s.fileBuffer,
          status: "idle",
        })),

      removeFile: (id) =>
        set((s) => {
          const remaining = s.files.filter((f) => f.id !== id);
          return {
            files: remaining,
            filename: remaining[0]?.filename ?? null,
            fileBuffer: remaining[0]?.buffer ?? null,
            activeFileIndex: Math.min(s.activeFileIndex, Math.max(0, remaining.length - 1)),
          };
        }),

      setFileStatus: (id, status, updates) =>
        set((s) => ({
          files: s.files.map((f) =>
            f.id === id ? { ...f, status, ...updates } : f
          ),
        })),

      setActiveFileIndex: (index) => set({ activeFileIndex: index }),

      clearFiles: () =>
        set({ files: [], activeFileIndex: 0, filename: null, fileBuffer: null }),

      reset: () => {
        import("./pdfjs").then((m) => m.clearCachedDocument());
        set({ ...initialState });
      },
    }),
    {
      name: "doczen-pipeline",
      partialize: (state) => {
        const persisted = { ...state as unknown as Record<string, unknown> };
        delete persisted.fileBuffer;
        delete persisted.textItems;
        // Don't persist file buffers or text items from batch files either
        if (persisted.files && Array.isArray(persisted.files)) {
          persisted.files = (persisted.files as Array<Record<string, unknown>>).map(
            (f) => {
              const { buffer, textItems, pdfBytes, ...rest } = f;
              return rest;
            }
          );
        }
        return persisted as Partial<PipelineState & PipelineActions>;
      },
    }
  )
);
