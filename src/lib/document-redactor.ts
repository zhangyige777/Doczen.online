/**
 * Unified redaction for PDF, Word (.docx), and Excel (.xlsx) files.
 */
import { PDFDocument, rgb } from "pdf-lib";
import type { DetectionItem, ViewportBBox } from "./types";
import { viewportToPdfLibBbox } from "./coordinates";

import mammoth from "mammoth";
import * as XLSX from "xlsx";

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

// ─── Word (.docx) ────────────────────────────────────────────────────────────

interface DocxReplacement {
  text: string;
  page: number;
  paragraphIdx: number;
}

async function applyDocxRedactions(buffer: ArrayBuffer, detections: DetectionItem[]): Promise<Uint8Array> {
  // Step 1: Find which paragraphs contain the text to redact
  const result = await mammoth.extractRawText({ arrayBuffer: buffer });
  const fullText = result.value;
  const lines = fullText.split(/\r?\n/);

  const replacements: DocxReplacement[] = [];

  for (const detection of detections.filter((d) => d.kept)) {
    const target = detection.text.toLowerCase();

    lines.forEach((line, paragraphIdx) => {
      if (line.toLowerCase().includes(target)) {
        replacements.push({
          text: detection.text,
          page: 1,
          paragraphIdx,
        });
      }
    });
  }

  // Step 2: Build replacement map (text → redacted version)
  const replacementMap = new Map<string, string>();
  for (const r of replacements) {
    if (!replacementMap.has(r.text)) {
      // Replace with ██████ of similar length
      replacementMap.set(r.text, "█".repeat(Math.max(r.text.length, 6)));
    }
  }

  // Step 3: Load docx as a zip and modify the document XML
  const zip = await import("jszip").then((m) => m.default);
  const jszip = new zip();
  await jszip.loadAsync(buffer);

  const documentXml = await jszip.file("word/document.xml")?.async("string");
  if (!documentXml) throw new Error("Invalid docx: missing document.xml");

  let modifiedXml = documentXml;

  // Replace each target text with ██████
  for (const [original, replacement] of replacementMap) {
    // Escape special regex chars
    const escaped = original.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escaped, "g");
    modifiedXml = modifiedXml.replace(regex, replacement);
  }

  jszip.file("word/document.xml", modifiedXml);

  const outputBuffer = await jszip.generateAsync({ type: "nodebuffer" });
  return new Uint8Array(outputBuffer);
}

// ─── Excel (.xlsx) ───────────────────────────────────────────────────────────

async function applyXlsxRedactions(buffer: ArrayBuffer, detections: DetectionItem[]): Promise<Uint8Array> {
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
            // Replace the cell value with ██████
            sheet[cellAddr] = {
              ...cell,
              v: "█".repeat(Math.max(target.length, 6)),
              t: "s", // string type
            };
          }
        }
      }
    }
  }

  const outputBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  return new Uint8Array(outputBuffer);
}

// ─── PDF-only legacy export (for backwards compatibility) ───────────────────

export async function applyRedactions(
  fileBuffer: ArrayBuffer,
  detections: DetectionItem[],
  scale: number = 1.5
): Promise<Uint8Array> {
  return applyPdfRedactions(fileBuffer, detections);
}