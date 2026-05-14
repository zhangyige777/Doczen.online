"use client";

import { useState, useMemo } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, ChevronRight, Search } from "lucide-react";
import { usePipelineStore } from "@/lib/store";
import { PII_TYPE_LABELS, PII_TYPE_COLORS } from "@/lib/types";
import type { PiiType } from "@/lib/types";

const PII_TYPES: PiiType[] = [
  "name", "phone", "email", "ssn", "dob", "address", "financial_account", "custom",
];

export function AnnotationPanel() {
  const detections = usePipelineStore((s) => s.detections);
  const toggleDetection = usePipelineStore((s) => s.toggleDetection);

  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [activeFilters, setActiveFilters] = useState<Set<PiiType>>(
    new Set(PII_TYPES)
  );
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFilter = (type: PiiType) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(type)) next.delete(type);
      else next.add(type);
      return next;
    });
  };

  const filtered = useMemo(() => {
    return detections.filter((d) => {
      if (!activeFilters.has(d.piiType)) return false;
      if (searchQuery && !d.text.toLowerCase().includes(searchQuery.toLowerCase()))
        return false;
      return true;
    });
  }, [detections, activeFilters, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const redactCount = detections.filter((d) => d.kept).length;
  const totalOccurrences = detections.reduce((sum, d) => sum + d.occurrences.length, 0);

  return (
    <div className="flex flex-col h-full border-l bg-white">
      {/* Header */}
      <div className="p-4 border-b">
        <h2 className="font-semibold text-gray-900">Detected Items</h2>
        <p className="text-xs text-gray-500 mt-0.5">
          {detections.length} unique · {totalOccurrences} occurrences · {redactCount} flagged for redaction
        </p>

        {/* Search */}
        <div className="mt-3 relative">
          <Search className="absolute left-2.5 top-2 w-4 h-4 text-gray-400" />
          <input
            className="w-full pl-8 pr-3 py-1.5 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Search text..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filter chips */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {PII_TYPES.map((type) => {
            const active = activeFilters.has(type);
            const count = detections.filter((d) => d.piiType === type).length;
            if (count === 0) return null;
            return (
              <button
                key={type}
                onClick={() => toggleFilter(type)}
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium transition-colors ${
                  active
                    ? "text-white"
                    : "text-gray-500 bg-gray-100 hover:bg-gray-200"
                }`}
                style={active ? { backgroundColor: PII_TYPE_COLORS[type] } : undefined}
              >
                {PII_TYPE_LABELS[type]}
                <span className="opacity-70">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* List */}
      <ScrollArea className="flex-1">
        <div className="divide-y">
          {filtered.length === 0 && (
            <p className="p-8 text-center text-sm text-gray-400">
              {detections.length === 0 ? "Nothing detected yet" : "Nothing matches filters"}
            </p>
          )}
          {filtered.map((det) => {
            const isExpanded = expandedIds.has(det.id);
            const isMulti = det.occurrences.length > 1;
            const color = PII_TYPE_COLORS[det.piiType];

            return (
              <div key={det.id} className="p-3 hover:bg-gray-50">
                <div className="flex items-start gap-3">
                  <Checkbox
                    checked={det.kept}
                    onCheckedChange={() => toggleDetection(det.id)}
                    className="mt-0.5"
                  />
                  <div
                    className="flex-1 min-w-0 cursor-pointer"
                    onClick={() => toggleDetection(det.id)}
                  >
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-sm font-medium truncate ${!det.kept && "line-through text-gray-400"}`}>
                        {det.text}
                      </span>
                      <Badge
                        variant="secondary"
                        className="text-[10px] py-0 px-1.5"
                        style={{
                          backgroundColor: color + "20",
                          color: color,
                          borderColor: color + "40",
                        }}
                      >
                        {PII_TYPE_LABELS[det.piiType]}
                      </Badge>
                      <span className="text-[10px] text-gray-400">
                        {(det.confidence * 100).toFixed(0)}%
                      </span>
                      {isMulti && (
                        <span className="text-[10px] text-gray-500">
                          ({det.occurrences.length} places)
                        </span>
                      )}
                    </div>
                  </div>
                  {isMulti && (
                    <button
                      onClick={() => toggleExpand(det.id)}
                      className="text-gray-400 hover:text-gray-600 mt-0.5"
                    >
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>

                {/* Expanded occurrences */}
                {isMulti && isExpanded && (
                  <div className="mt-2 ml-8 space-y-1">
                    {det.occurrences.map((occ, i) => (
                      <p key={i} className="text-xs text-gray-500">
                        Page {occ.pageNumber}
                        {occ.viewportBbox.y < 300 ? ", top" : occ.viewportBbox.y > 500 ? ", bottom" : ""}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
