import { PDFDocument, rgb } from "pdf-lib";
import type { DetectionItem } from "./types";
import { viewportToPdfLibBbox } from "./coordinates";

const PAD = 2; // horizontal/vertical padding in PDF points
const REDACT_COLOR = rgb(0.08, 0.08, 0.08); // dark charcoal, not pure black

export async function applyRedactions(
  fileBuffer: ArrayBuffer,
  detections: DetectionItem[],
  scale: number = 1.5
): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.load(fileBuffer.slice(0));
  const pages = pdfDoc.getPages();

  const toRedact = detections.filter((d) => d.kept);

  for (const detection of toRedact) {
    for (const occ of detection.occurrences) {
      const page = pages[occ.pageNumber - 1];
      if (!page) continue;

      const { height } = page.getSize();
      const rect = viewportToPdfLibBbox(occ.viewportBbox, scale, height);

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
