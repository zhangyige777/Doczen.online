export type PiiType =
  | "name"
  | "phone"
  | "email"
  | "ssn"
  | "dob"
  | "address"
  | "financial_account"
  | "custom";

export type FileType = "pdf" | "docx" | "xlsx";

export const PII_TYPE_LABELS: Record<PiiType, string> = {
  name: "Name",
  phone: "Phone",
  email: "Email",
  ssn: "SSN / ID",
  dob: "Date of Birth",
  address: "Address",
  financial_account: "Financial",
  custom: "Custom",
};

export const PII_TYPE_COLORS: Record<PiiType, string> = {
  name: "#3B82F6",
  phone: "#EF4444",
  email: "#EF4444",
  ssn: "#A855F7",
  dob: "#A855F7",
  address: "#EF4444",
  financial_account: "#F97316",
  custom: "#EAB308",
};

export interface ViewportBBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface TextItem {
  str: string;
  transform: number[];
  width: number;
  height: number;
  fontName: string;
  pageNumber: number;
  textItemIndex: number;
}

export interface TextItemMatch {
  pageNumber: number;
  viewportBbox: ViewportBBox;
  textItemIndex: number;
}

export interface DetectionItem {
  id: string;
  text: string;
  piiType: PiiType;
  confidence: number;
  occurrences: TextItemMatch[];
  kept: boolean; // true = mark for redaction
}

export type PipelineStatus =
  | "idle"
  | "extracting"
  | "detecting"
  | "ready"
  | "redacting"
  | "done"
  | "error";

export interface BatchFile {
  id: string;
  filename: string;
  fileType: FileType;
  buffer: ArrayBuffer;
  status: PipelineStatus;
  totalPages: number;
  textItems: TextItem[];
  detections: DetectionItem[];
  error: string | null;
  redactedBytes: Uint8Array | null;
}

export interface PipelineState {
  sessionId: string | null;
  filename: string | null;
  fileType: FileType | null;
  instruction: string;
  status: PipelineStatus;
  statusMessage: string;
  fileBuffer: ArrayBuffer | null;
  totalPages: number;
  textItems: TextItem[];
  detections: DetectionItem[];
  error: string | null;
  pipelineStartCount: number;
  files: BatchFile[];
  activeFileIndex: number;
}

export interface PipelineActions {
  setSessionId: (id: string) => void;
  setFile: (buffer: ArrayBuffer, filename: string) => void;
  setFileType: (type: FileType) => void;
  setInstruction: (instruction: string) => void;
  startPipeline: () => void;
  setStatus: (status: PipelineStatus, message?: string) => void;
  setTextItems: (items: TextItem[], totalPages: number) => void;
  setDetections: (detections: DetectionItem[]) => void;
  toggleDetection: (detId: string) => void;
  setError: (error: string) => void;
  reset: () => void;
  addFiles: (files: BatchFile[]) => void;
  removeFile: (id: string) => void;
  setFileStatus: (id: string, status: PipelineStatus, updates?: Partial<BatchFile>) => void;
  setActiveFileIndex: (index: number) => void;
  clearFiles: () => void;
}
