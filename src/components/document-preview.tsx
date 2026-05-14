"use client";

import { useMemo } from "react";
import { FileText, FileSpreadsheet } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { usePipelineStore } from "@/lib/store";
import { PII_TYPE_LABELS, PII_TYPE_COLORS } from "@/lib/types";

interface DocumentPreviewProps {
  fileType: "docx" | "xlsx";
}

export function DocumentPreview({ fileType }: DocumentPreviewProps) {
  const textItems = usePipelineStore((s) => s.textItems);
  const detections = usePipelineStore((s) => s.detections);

  const markedItems = useMemo(() => {
    return textItems.map((item) => {
      const matched = detections.find(
        (d) => d.kept && d.text.toLowerCase() === item.str.toLowerCase()
      );
      return { ...item, detection: matched };
    });
  }, [textItems, detections]);

  if (fileType === "xlsx") {
    return <ExcelPreview markedItems={markedItems} />;
  }

  return <WordPreview markedItems={markedItems} />;
}

interface MarkedItem {
  str: string;
  textItemIndex: number;
  pageNumber: number;
  transform: number[];
  detection?: {
    piiType: string;
  };
}

function WordPreview({ markedItems }: { markedItems: MarkedItem[] }) {
  return (
    <div className="flex flex-col h-full bg-slate-50">
      <div className="px-4 py-3 border-b bg-white flex items-center gap-2">
        <FileText className="w-4 h-4 text-blue-600" />
        <span className="text-sm font-medium">Word Document</span>
        <Badge variant="secondary" className="ml-auto">
          {markedItems.length} paragraphs
        </Badge>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-1">
          {markedItems.map((item) => {
            const isRedacted = !!item.detection;
            return (
              <div
                key={item.textItemIndex}
                className={`px-3 py-2 rounded-md text-sm ${
                  isRedacted
                    ? "bg-red-50 border border-red-200"
                    : "bg-white border border-transparent hover:border-slate-200"
                }`}
              >
                <div className="flex items-start gap-2 flex-wrap">
                  <span className="text-slate-700 flex-1">{item.str}</span>
                  {isRedacted && (
                    <Badge
                      variant="secondary"
                      className="shrink-0 text-[10px]"
                      style={{
                        backgroundColor: PII_TYPE_COLORS[item.detection!.piiType as keyof typeof PII_TYPE_COLORS] + "20",
                        color: PII_TYPE_COLORS[item.detection!.piiType as keyof typeof PII_TYPE_COLORS],
                      }}
                    >
                      {PII_TYPE_LABELS[item.detection!.piiType as keyof typeof PII_TYPE_LABELS]}
                    </Badge>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}

function ExcelPreview({ markedItems }: { markedItems: MarkedItem[] }) {
  return (
    <div className="flex flex-col h-full bg-slate-50">
      <div className="px-4 py-3 border-b bg-white flex items-center gap-2">
        <FileSpreadsheet className="w-4 h-4 text-green-600" />
        <span className="text-sm font-medium">Excel Spreadsheet</span>
        <Badge variant="secondary" className="ml-auto">
          {markedItems.length} cells
        </Badge>
      </div>
      <ScrollArea className="flex-1">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 sticky top-0">
            <tr>
              <th className="px-3 py-2 text-left text-xs font-medium text-slate-500 w-12">#</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-slate-500">Value</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-slate-500 w-24">Type</th>
            </tr>
          </thead>
          <tbody>
            {markedItems.map((item, idx) => {
              const isRedacted = !!item.detection;
              return (
                <tr
                  key={item.textItemIndex}
                  className={isRedacted ? "bg-red-50" : "border-b border-slate-100 hover:bg-slate-50"}
                >
                  <td className="px-3 py-2 text-slate-400 font-mono text-xs">{idx + 1}</td>
                  <td className="px-3 py-2">
                    {isRedacted ? (
                      <span className="bg-slate-800 text-slate-300 px-1 rounded font-mono text-xs">
                        {item.str}
                      </span>
                    ) : (
                      <span className="text-slate-700 font-mono text-xs">{item.str}</span>
                    )}
                  </td>
                  <td className="px-3 py-2">
                    {isRedacted && (
                      <Badge
                        variant="secondary"
                        className="text-[10px]"
                        style={{
                          backgroundColor: PII_TYPE_COLORS[item.detection!.piiType as keyof typeof PII_TYPE_COLORS] + "20",
                          color: PII_TYPE_COLORS[item.detection!.piiType as keyof typeof PII_TYPE_COLORS],
                        }}
                      >
                        {PII_TYPE_LABELS[item.detection!.piiType as keyof typeof PII_TYPE_LABELS]}
                      </Badge>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </ScrollArea>
    </div>
  );
}