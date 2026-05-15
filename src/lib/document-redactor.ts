/**
 * Unified redaction for PDF, Word (.docx), and Excel (.xlsx) files.
 * mammoth, xlsx, jszip use dynamic imports for Edge Runtime compat.
 */
import { PDFDocument, rgb } from "pdf-lib";
import type { DetectionItem } from "./types";
import { viewportToPdfLibBbox } from "./coordinates";

const PAD = 2;
const REDACT_COLOR = rgb(0.08, 0.08, 0.08);

// ─── Main entry point ───────────────────────────────────────────────────────

export async function applyDocumentRedactions(
  buffer: ArrayBuffer,
  filename: string,
  detections: DetectionItem[]
): Promise<Uint8Array> {
  const ext = filename.toLowerCase().split(".").pop();

  if (ext === "pdf") {
    return applyPdfRedactions(buffer, detections);
  } else if (ext === "docx") {
    return applyDocxRedactions(buffer, detections);
  } else if (ext === "xlsx") {
    return applyXlsxRedactions(buffer, detections);
  } else {
    throw new Error(`Unsupported file type: ${ext}`);
  }
}

// ─── PDF ─────────────────────────────────────────────────────────────────────

async function applyPdfRedactions(buffer: ArrayBuffer, detections: DetectionItem[]): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.load(buffer.slice(0));
  const pages = pdfDoc.getPages();

  const toRedact = detections.filter((d) => d.kept);

  for (const detection of toRedact) {
    for (const occ of detection.occurrences) {
      const page = pages[occ.pageNumber - 1];
      if (!page) continue;

      const { height } = page.getSize();
      const rect = viewportToPdfLibBbox(occ.viewportBbox, 1.5, height);

      page.drawRectangle({
        x: rect.x - PAD,
        y: rect.y - PAD,
        width: Math.max(rect.width, 2) + PAD * 2,
        height: Math.max(rect.height, 6) + PAD * 2,
        color: REDACT_COLOR,
      });
    }
  }

  return await pdfDoc.save();
}

// ─── Word (.docx) — dynamic imports for Edge Runtime ────────────────────────

async function applyDocxRedactions(buffer: ArrayBuffer, detections: DetectionItem[]): Promise<Uint8Array> {
  const mammoth = await import("mammoth");

  const result = await mammoth.extractRawText({ arrayBuffer: buffer });
  const fullText = result.value;
  const lines = fullText.split(/\r?\n/);

  const replacementMap = new Map<string, string>();

  for (const detection of detections.filter((d) => d.kept)) {
    const target = detection.text.toLowerCase();
    lines.forEach((line) => {
      if (line.toLowerCase().includes(target) && !replacementMap.has(detection.text)) {
        replacementMap.set(detection.text, "█".repeat(Math.max(detection.text.length, 6)));
      }
    });
  }

  const JSZip = (await import("jszip")).default;
  const zip = new JSZip();
  await zip.loadAsync(buffer);

  const documentXml = await zip.file("word/document.xml")?.async("string");
  if (!documentXml) throw new Error("Invalid docx: missing document.xml");

  let modifiedXml = documentXml;

  for (const [original, replacement] of replacementMap) {
    const escaped = original.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    modifiedXml = modifiedXml.replace(new RegExp(escaped, "g"), replacement);
  }

  zip.file("word/document.xml", modifiedXml);

  // Use "uint8array" instead of "nodebuffer" — Edge Runtime has no Buffer
  const outputBuffer = await zip.generateAsync({ type: "uint8array" });
  return outputBuffer;
}

// ─── Excel (.xlsx) — dynamic import for Edge Runtime ────────────────────────

async function applyXlsxRedactions(buffer: ArrayBuffer, detections: DetectionItem[]): Promise<Uint8Array> {
  const XLSX = await import("xlsx");
  const workbook = XLSX.read(buffer, { type: "array" });

  const toRedactSet = new Set<string>();
  for (const d of detections.filter((d) => d.kept)) {
    toRedactSet.add(d.text);
  }

  for (const sheetName of workbook.SheetNames) {
    const sheet = workbook.Sheets[sheetName];
    const range = XLSX.utils.decode_range(sheet["!ref"] || "A1");

    for (let R = range.s.r; R <= range.e.r; R++) {
      for (let C = range.s.c; C <= range.e.c; C++) {
        const cellAddr = XLSX.utils.encode_cell({ r: R, c: C });
        const cell = sheet[cellAddr];
        if (!cell || cell.v === undefined || cell.v === null) continue;

        const value = String(cell.v);
        for (const target of toRedactSet) {
          if (value.includes(target)) {
            sheet[cellAddr] = {
              ...cell,
              v: "█".repeat(Math.max(target.length, 6)),
              t: "s",
            };
          }
        }
      }
    }
  }

  const outputBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  return new Uint8Array(outputBuffer);
}

// ─── PDF-only legacy export ──────────────────────────────────────────────────

export async function applyRedactions(
  fileBuffer: ArrayBuffer,
  detections: DetectionItem[],
  _scale?: number
): Promise<Uint8Array> {
  return applyPdfRedactions(fileBuffer, detections);
}