"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Download, Clock, AlertTriangle, FileBadge } from "lucide-react";

interface DownloadBarProps {
  pdfBytes: Uint8Array | null;
  reportBytes?: Uint8Array | null;
  filename: string;
  onReset: () => void;
}

export function DownloadBar({ pdfBytes, reportBytes, filename, onReset }: DownloadBarProps) {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [downloaded, setDownloaded] = useState(false);
  const [reportDownloaded, setReportDownloaded] = useState(false);

  const doDownload = useCallback(() => {
    if (!pdfBytes) return;
    const blob = new Blob([pdfBytes as BlobPart], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `redacted-${filename}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setShowDisclaimer(false);
  }, [pdfBytes, filename]);

  const doDownloadReport = useCallback(() => {
    if (!reportBytes) return;
    const blob = new Blob([reportBytes as BlobPart], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `report-${filename}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setReportDownloaded(true);
  }, [reportBytes, filename]);

  // Countdown timer
  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  if (!pdfBytes) return null;

  const outFilename = `redacted-${filename}`;

  return (
    <>
      <div className="border-t bg-white px-6 py-4">
        <div className="max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">{outFilename}</p>
              <p className="text-sm text-gray-500">Redacted PDF ready</p>
            </div>
            <div className="flex items-center gap-3">
              {downloaded ? (
                <span className="text-xs text-green-600">Downloaded</span>
              ) : seconds > 0 ? (
                <div className="flex items-center gap-1.5 text-amber-600 text-sm">
                  <Clock className="w-4 h-4" />
                  <span className="tabular-nums font-mono">{seconds}s</span>
                </div>
              ) : (
                <span className="text-xs text-gray-400">File deleted</span>
              )}
              {reportBytes && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={doDownloadReport}
                  disabled={seconds <= 0 || reportDownloaded}
                >
                  <FileBadge className="w-4 h-4 mr-2" />
                  {reportDownloaded ? "Downloaded" : "Report"}
                </Button>
              )}
              <Button onClick={() => setShowDisclaimer(true)} disabled={seconds <= 0 || downloaded}>
                <Download className="w-4 h-4 mr-2" />
                {downloaded ? "Downloaded" : "Download"}
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">
              Your file will be deleted in {seconds > 0 ? `${seconds} seconds` : "0 seconds"}.
            </p>
            <button onClick={onReset} className="text-xs text-blue-600 hover:underline">
              Start new redaction
            </button>
          </div>
        </div>
      </div>

      {/* Disclaimer dialog */}
      <Dialog open={showDisclaimer} onOpenChange={setShowDisclaimer}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              MVP Limitation
            </DialogTitle>
            <DialogDescription className="space-y-3 pt-2">
              Redactions are visual overlays. Text may still be
              extractable in this MVP version.
              <br />
              <span className="text-xs text-gray-400">
                For permanent redaction that removes data from the content
                stream, we are working on PyMuPDF integration in the next
                version.
              </span>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDisclaimer(false)}>
              Cancel
            </Button>
            <Button onClick={doDownload}>I understand, download anyway</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
