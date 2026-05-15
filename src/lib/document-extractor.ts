/**
 * Unified text extraction for PDF, Word (.docx), and Excel (.xlsx) files.
 * mammoth and xlsx use dynamic imports to avoid Edge Runtime crashes (require("fs")).
 */
import { loadPdfDocument } from "./pdfjs";
import type { TextItem, ViewportBBox } from "./types";

interface ExtractedData {
  textItems: TextItem[];
  totalPages: number;
  viewportBboxes: Map<string, ViewportBBox>;
  fileType: "pdf" | "docx" | "xlsx";
}

export async function extractTextFromDocument(buffer: ArrayBuffer, filename: string): Promise<ExtractedData> {
  const ext = filename.toLowerCase().split(".").pop();

  if (ext === "pdf") {
    return extractTextFromPDF(buffer);
  } else if (ext === "docx") {
    return extractTextFromDocx(buffer);
  } else if (ext === "xlsx") {
    return extractTextFromXlsx(buffer);
  } else {
    throw new Error(`Unsupported file type: ${ext}`);
  }
}

// ─── PDF ─────────────────────────────────────────────────────────────────────

async function extractTextFromPDF(buffer: ArrayBuffer): Promise<ExtractedData> {
  const doc = await loadPdfDocument(buffer);
  const totalPages = doc.numPages;
  const allItems: TextItem[] = [];
  const bboxMap = new Map<string, ViewportBBox>();
  let textItemIndex = 0;

  for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
    const page = await doc.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1.5 });
    const textContent = await page.getTextContent();

    for (const item of textContent.items) {
      if (!("str" in item) || !item.str?.trim()) continue;

      const transform = (item as { transform: number[] }).transform;
      const pdfX = transform[4];
      const pdfY = transform[5];

      const [vpX, vpY] = viewport.convertToViewportPoint(pdfX, pdfY);
      const itemWidth = "width" in item ? (item as { width: number }).width : 0;
      const itemHeight = "height" in item ? (item as { height: number }).height : 10;
      const scaledHeight = itemHeight * viewport.scale;

      const textItem: TextItem = {
        str: item.str,
        transform: [...transform],
        width: itemWidth,
        height: itemHeight,
        fontName: "fontName" in item ? (item as { fontName: string }).fontName : "",
        pageNumber: pageNum,
        textItemIndex,
      };
      allItems.push(textItem);

      bboxMap.set(`${pageNum}-${textItemIndex}`, {
        x: vpX,
        y: vpY - scaledHeight,
        width: itemWidth * viewport.scale,
        height: scaledHeight,
      });

      textItemIndex++;
    }
  }

  return { textItems: allItems, totalPages, viewportBboxes: bboxMap, fileType: "pdf" };
}

// ─── Word (.docx) — dynamic import for Edge Runtime compat ───────────────────

async function extractTextFromDocx(buffer: ArrayBuffer): Promise<ExtractedData> {
  const mammoth = await import("mammoth");
  const result = await mammoth.extractRawText({ arrayBuffer: buffer });
  const fullText = result.value;

  const allItems: TextItem[] = [];
  const bboxMap = new Map<string, ViewportBBox>();
  const lines = fullText.split(/\r?\n/).filter((l) => l.trim().length > 0);
  let textItemIndex = 0;

  lines.forEach((line, paragraphIndex) => {
    const textItem: TextItem = {
      str: line,
      transform: [0, 0, 0, 0, 0, paragraphIndex * 20],
      width: 0,
      height: 14,
      fontName: "",
      pageNumber: 1,
      textItemIndex,
    };
    allItems.push(textItem);

    bboxMap.set(`1-${textItemIndex}`, {
      x: 0,
      y: paragraphIndex * 20,
      width: line.length * 6,
      height: 14,
    });

    textItemIndex++;
  });

  return { textItems: allItems, totalPages: 1, viewportBboxes: bboxMap, fileType: "docx" };
}

// ─── Excel (.xlsx) — dynamic import for Edge Runtime compat ──────────────────

async function extractTextFromXlsx(buffer: ArrayBuffer): Promise<ExtractedData> {
  const XLSX = await import("xlsx");
  const workbook = XLSX.read(buffer, { type: "array" });
  const allItems: TextItem[] = [];
  const bboxMap = new Map<string, ViewportBBox>();
  let textItemIndex = 0;

  for (const sheetName of workbook.SheetNames) {
    const sheet = workbook.Sheets[sheetName];
    const range = XLSX.utils.decode_range(sheet["!ref"] || "A1");

    for (let R = range.s.r; R <= range.e.r; R++) {
      for (let C = range.s.c; C <= range.e.c; C++) {
        const cell = sheet[XLSX.utils.encode_cell({ r: R, c: C })];
        if (!cell || cell.v === undefined || cell.v === null) continue;

        const value = String(cell.v).trim();
        if (!value) continue;

        const textItem: TextItem = {
          str: value,
          transform: [0, 0, 0, 0, C * 80, R * 18],
          width: value.length * 7,
          height: 14,
          fontName: "",
          pageNumber: 1,
          textItemIndex,
        };
        allItems.push(textItem);

        bboxMap.set(`1-${textItemIndex}`, {
          x: C * 80,
          y: R * 18,
          width: value.length * 7,
          height: 14,
        });

        textItemIndex++;
      }
    }
  }

  return { textItems: allItems, totalPages: 1, viewportBboxes: bboxMap, fileType: "xlsx" };
}

// ─── Plain text for AI detection ─────────────────────────────────────────────

export async function extractPlainText(buffer: ArrayBuffer, filename: string): Promise<string> {
  const ext = filename.toLowerCase().split(".").pop();

  if (ext === "pdf") {
    const doc = await loadPdfDocument(buffer);
    const lines: string[] = [];
    for (let p = 1; p <= doc.numPages; p++) {
      const page = await doc.getPage(p);
      const textContent = await page.getTextContent();
      const pageText = textContent.items
        .filter((i) => "str" in i && i.str?.trim())
        .map((i) => (i as { str: string }).str)
        .join(" ");
      lines.push(`[PAGE ${p}]\n${pageText}`);
    }
    return lines.join("\n\n");
  } else if (ext === "docx") {
    const mammoth = await import("mammoth");
    const result = await mammoth.extractRawText({ arrayBuffer: buffer });
    return result.value;
  } else if (ext === "xlsx") {
    const XLSX = await import("xlsx");
    const workbook = XLSX.read(buffer, { type: "array" });
    const parts: string[] = [];
    for (const name of workbook.SheetNames) {
      const sheet = workbook.Sheets[name];
      const csv = XLSX.utils.sheet_to_csv(sheet);
      parts.push(`[SHEET: ${name}]\n${csv}`);
    }
    return parts.join("\n\n");
  } else {
    throw new Error(`Unsupported: ${ext}`);
  }
}