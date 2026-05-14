import type { ViewportBBox, TextItem } from "./types";
import type { PageViewport } from "pdfjs-dist";

/** Convert a pdfjs text item's PDF-space coordinates to viewport (CSS pixel) coordinates */
export function getTextItemBounds(
  item: TextItem,
  viewport: PageViewport
): ViewportBBox {
  // item.transform[4] = x, item.transform[5] = y in PDF user space (bottom-left of text)
  const pdfX = item.transform[4];
  const pdfY = item.transform[5];
  const itemHeight = item.height || 10;

  // Convert PDF user space -> viewport (CSS pixels), origin top-left
  const [vpX, vpY] = viewport.convertToViewportPoint(pdfX, pdfY);
  // vpY is the BOTTOM of the text box; subtract height to get TOP
  const scaledHeight = itemHeight * viewport.scale;
  const top = vpY - scaledHeight;

  return {
    x: vpX,
    y: top,
    width: (item.width || 0) * viewport.scale,
    height: scaledHeight,
  };
}

/**
 * Convert viewport (CSS pixel) bbox to pdf-lib PDF points (origin bottom-left).
 * Used when applying redactions with pdf-lib.
 */
export function viewportToPdfLibBbox(
  bbox: ViewportBBox,
  scale: number,
  pageHeight: number
): { x: number; y: number; width: number; height: number } {
  return {
    x: bbox.x / scale,
    y: pageHeight - (bbox.y + bbox.height) / scale,
    width: bbox.width / scale,
    height: bbox.height / scale,
  };
}
