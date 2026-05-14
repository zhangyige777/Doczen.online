import type { PDFDocumentProxy } from "pdfjs-dist";

let pdfjsModule: typeof import("pdfjs-dist") | null = null;
let cachedDoc: PDFDocumentProxy | null = null;

export async function getPdfjs() {
  if (!pdfjsModule) {
    pdfjsModule = await import("pdfjs-dist");
    pdfjsModule.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
  }
  return pdfjsModule;
}

export async function loadPdfDocument(data: ArrayBuffer): Promise<PDFDocumentProxy> {
  const pdfjs = await getPdfjs();
  if (cachedDoc) {
    cachedDoc.destroy();
  }
  cachedDoc = await pdfjs.getDocument({
    data: data.slice(0),
    disableAutoFetch: true,
    disableStream: true,
  }).promise;
  return cachedDoc;
}

export function getCachedDocument(): PDFDocumentProxy | null {
  return cachedDoc;
}

export function clearCachedDocument() {
  if (cachedDoc) {
    cachedDoc.destroy();
    cachedDoc = null;
  }
}
