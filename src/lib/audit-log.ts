import type { DetectionItem } from "./types";

export interface AuditEntry {
  id: string;
  timestamp: string;
  filename: string;
  pages: number;
  detectionsTotal: number;
  redactedCount: number;
  piiTypes: Record<string, number>;
}

const STORAGE_KEY = "redactly-audit-log";

export function loadAuditLog(): AuditEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveAuditEntry(
  sessionId: string,
  filename: string,
  totalPages: number,
  detections: DetectionItem[]
): void {
  const piiTypes: Record<string, number> = {};
  for (const d of detections) {
    if (d.kept) {
      piiTypes[d.piiType] = (piiTypes[d.piiType] || 0) + d.occurrences.length;
    }
  }

  const entry: AuditEntry = {
    id: sessionId,
    timestamp: new Date().toISOString(),
    filename,
    pages: totalPages,
    detectionsTotal: detections.reduce((s, d) => s + d.occurrences.length, 0),
    redactedCount: detections.filter((d) => d.kept).reduce((s, d) => s + d.occurrences.length, 0),
    piiTypes,
  };

  const log = loadAuditLog();
  log.unshift(entry);

  // Keep last 50 entries max
  if (log.length > 50) log.length = 50;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(log));
}

export function clearAuditLog(): void {
  localStorage.removeItem(STORAGE_KEY);
}
