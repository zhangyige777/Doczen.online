import type { TextItem, TextItemMatch, DetectionItem, ViewportBBox } from "./types";
import { loadPdfDocument } from "./pdfjs";

interface ExtractedData {
  textItems: TextItem[];
  totalPages: number;
  viewportBboxes: Map<string, ViewportBBox>; // key = "pageNum-textItemIndex"
}

export async function extractTextFromPDF(buffer: ArrayBuffer): Promise<ExtractedData> {
  const doc = await loadPdfDocument(buffer);
  const totalPages = doc.numPages;
  const allItems: TextItem[] = [];
  const bboxMap = new Map<string, ViewportBBox>();
  let textItemIndex = 0;

  for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
    const page = await doc.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1.5 }); // default scale for extraction
    const textContent = await page.getTextContent();

    for (const item of textContent.items) {
      if (!("str" in item) || !item.str?.trim()) continue;

      const textItem: TextItem = {
        str: item.str,
        transform: [...(item as { transform: number[] }).transform],
        width: "width" in item ? (item as { width: number }).width : 0,
        height: "height" in item ? (item as { height: number }).height : 10,
        fontName: "fontName" in item ? (item as { fontName: string }).fontName : "",
        pageNumber: pageNum,
        textItemIndex,
      };
      allItems.push(textItem);

      // Pre-compute viewport bbox
      const pdfX = textItem.transform[4];
      const pdfY = textItem.transform[5];
      const [vpX, vpY] = viewport.convertToViewportPoint(pdfX, pdfY);
      const scaledHeight = textItem.height * viewport.scale;
      bboxMap.set(`${pageNum}-${textItemIndex}`, {
        x: vpX,
        y: vpY - scaledHeight, // top = bottom - height
        width: textItem.width * viewport.scale,
        height: scaledHeight,
      });

      textItemIndex++;
    }
  }

  return { textItems: allItems, totalPages, viewportBboxes: bboxMap };
}

const norm = (s: string) =>
  s.toLowerCase().replace(/^[^a-z0-9]+/g, "").replace(/[^a-z0-9]+$/g, "").replace(/\s+/g, " ").trim();

export function matchDetectionsToTextItems(
  claudeDetections: { text: string; piiType: string; confidence: number }[],
  allTextItems: TextItem[],
  bboxMap: Map<string, ViewportBBox>
): DetectionItem[] {
  const detections: DetectionItem[] = [];
  if (allTextItems.length === 0) return detections;

  // Group items by page and build normalized page text with index maps
  const pageItems = new Map<number, TextItem[]>();
  for (const item of allTextItems) {
    const list = pageItems.get(item.pageNumber) || [];
    list.push(item);
    pageItems.set(item.pageNumber, list);
  }

  for (let dIdx = 0; dIdx < claudeDetections.length; dIdx++) {
    const det = claudeDetections[dIdx];
    const target = norm(det.text);
    if (!target) continue;
    const occurrences: TextItemMatch[] = [];

    for (const [pageNum, items] of pageItems) {
      // Build normalized tokens and mapping from token index → text item
      const tokens: string[] = [];
      const idxMap: number[] = []; // token index → textItemIndex
      for (let i = 0; i < items.length; i++) {
        const t = norm(items[i].str);
        if (t) {
          tokens.push(t);
          idxMap.push(i);
        }
      }

      const pageText = tokens.join(" ");
      let searchFrom = 0;

      while (searchFrom < pageText.length) {
        const pos = pageText.indexOf(target, searchFrom);
        if (pos === -1) break;

        // Find which tokens are covered by this match
        // The match starts at character position `pos` and spans `target.length` chars
        const endPos = pos + target.length;

        // Map character position to token index
        let charCursor = 0;
        let firstTok = -1;
        let lastTok = -1;
        for (let t = 0; t < tokens.length; t++) {
          const tokStart = charCursor;
          const tokEnd = charCursor + tokens[t].length;
          if (firstTok === -1 && pos < tokEnd) firstTok = t;
          if (endPos <= tokEnd) { lastTok = t; break; }
          charCursor = tokEnd + 1; // +1 for the space between tokens
        }

        if (firstTok === -1 || lastTok === -1) {
          searchFrom = pos + 1;
          continue;
        }

        const firstItem = items[idxMap[firstTok]];
        const lastItem = items[idxMap[lastTok]];
        const firstBbox = bboxMap.get(`${pageNum}-${firstItem.textItemIndex}`);
        const lastBbox = bboxMap.get(`${pageNum}-${lastItem.textItemIndex}`);

        if (firstBbox && lastBbox) {
          occurrences.push({
            pageNumber: pageNum,
            viewportBbox: {
              x: firstBbox.x,
              y: firstBbox.y,
              width: lastBbox.x + lastBbox.width - firstBbox.x,
              height: firstBbox.height,
            },
            textItemIndex: firstItem.textItemIndex,
          });
        }

        searchFrom = pos + 1;
      }
    }

    if (occurrences.length > 0) {
      detections.push({
        id: `det-${dIdx}`,
        text: det.text,
        piiType: det.piiType as DetectionItem["piiType"],
        confidence: det.confidence,
        occurrences,
        kept: true,
      });
    }
  }

  return detections;
}

export function buildPagesForDetection(
  textItems: TextItem[],
  totalPages: number
): { page_number: number; text: string }[] {
  const pages: { page_number: number; text: string }[] = [];
  for (let p = 1; p <= totalPages; p++) {
    const pageText = textItems
      .filter((item) => item.pageNumber === p)
      .map((item) => item.str)
      .join(" ");
    pages.push({ page_number: p, text: pageText });
  }
  return pages;
}
