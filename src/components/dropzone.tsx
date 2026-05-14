"use client";

import { useCallback, useState, useRef } from "react";
import { useDropzone, type FileRejection } from "react-dropzone";
import { Upload, FileText, AlertCircle, Loader2, X, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";

interface QueuedFile {
  id: string;
  file: File;
  buffer: ArrayBuffer;
}

interface DropzoneProps {
  onFilesAccepted: (files: { id: string; filename: string; buffer: ArrayBuffer }[]) => void;
  disabled?: boolean;
  existingFiles?: { id: string; filename: string }[];
  onRemoveFile?: (id: string) => void;
}

export function Dropzone({ onFilesAccepted, disabled, existingFiles = [], onRemoveFile }: DropzoneProps) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const hasExisting = existingFiles.length > 0;

  const onDrop = useCallback(
    async (accepted: File[], rejected: FileRejection[]) => {
      setError(null);

      if (rejected.length > 0) {
        const msg = rejected[0].errors[0]?.message || "Invalid file";
        setError(msg);
        return;
      }

      if (accepted.length === 0) return;

      // Validate all files first
      for (const file of accepted) {
        const ext = file.name.toLowerCase().split(".").pop();
        if (!["pdf", "docx", "xlsx"].includes(ext || "")) {
          setError("Only PDF, Word (.docx), and Excel (.xlsx) files are supported");
          return;
        }
        if (file.size > 50 * 1024 * 1024) {
          setError("Each file must be under 50MB");
          return;
        }
      }

      setLoading(true);
      try {
        const results = await Promise.all(
          accepted.map(async (file) => ({
            id: crypto.randomUUID(),
            filename: file.name,
            buffer: await file.arrayBuffer(),
          }))
        );
        onFilesAccepted(results);
      } catch {
        setError("Failed to read files");
      } finally {
        setLoading(false);
      }
    },
    [onFilesAccepted]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
    },
    maxFiles: 10,
    maxSize: 50 * 1024 * 1024,
    disabled: disabled || loading,
    noClick: hasExisting && existingFiles.length >= 10,
  });

  return (
    <div className="w-full max-w-xl mx-auto">
      <Card
        {...getRootProps()}
        className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200 ${
          isDragActive
            ? "border-blue-500 bg-blue-50/50 scale-[1.02]"
            : hasExisting
            ? "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
            : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <input {...getInputProps()} />

        {loading ? (
          <div className="space-y-3">
            <Loader2 className="w-7 h-7 animate-spin text-blue-500 mx-auto" />
            <p className="text-sm text-gray-500">Reading files...</p>
          </div>
        ) : hasExisting ? (
          <div className="space-y-4">
            <div className="grid gap-2">
              {existingFiles.map((f) => (
                <div
                  key={f.id}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white border rounded-lg text-left min-w-0"
                >
                  <FileText className="w-4 h-4 text-blue-500 shrink-0" />
                  <span className="text-sm text-gray-900 truncate flex-1 min-w-0">{f.filename}</span>
                  {onRemoveFile && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveFile(f.id);
                      }}
                      className="shrink-0 text-gray-400 hover:text-red-500 transition-colors p-2 -mr-1"
                      aria-label={`Remove ${f.filename}`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-1.5 text-sm text-blue-600 font-medium">
              <Plus className="w-4 h-4" />
              Add more files
            </div>
            <p className="text-xs text-gray-400">
              {existingFiles.length} file{existingFiles.length > 1 ? "s" : ""} · PDF · Word · Excel
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="mx-auto w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
              {isDragActive ? (
                <Upload className="w-7 h-7 text-blue-600" />
              ) : (
                <FileText className="w-7 h-7 text-blue-600" />
              )}
            </div>
            <div>
              <p className="text-lg font-medium text-gray-900">
                {isDragActive
                  ? "Drop your PDFs here"
                  : "Drop your PDFs here or click to upload"}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                PDF · Word (.docx) · Excel (.xlsx) · Max 50MB each · Up to 10 files
              </p>
            </div>
          </div>
        )}
      </Card>

      {error && (
        <div className="mt-3 flex items-center gap-2 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4" />
          {error}
        </div>
      )}
    </div>
  );
}
