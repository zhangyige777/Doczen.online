"use client";

import { CheckCircle2, Loader2, Circle, AlertCircle } from "lucide-react";
import type { PipelineStatus } from "@/lib/types";

const STEPS = [
  { key: "extracting" as const, label: "Extracting text", description: "Reading PDF contents" },
  { key: "detecting" as const, label: "AI analyzing", description: "Detecting sensitive information" },
  { key: "ready" as const, label: "Ready to review", description: "Review detected items" },
];

interface StepIndicatorProps {
  status: PipelineStatus;
}

export function StepIndicator({ status }: StepIndicatorProps) {
  const stepStatuses: ("completed" | "active" | "pending" | "error")[] = ["pending", "pending", "pending"];

  if (status === "error") {
    stepStatuses[0] = "completed";
    stepStatuses[1] = "error";
  } else if (status === "ready" || status === "redacting" || status === "done") {
    stepStatuses[0] = "completed";
    stepStatuses[1] = "completed";
    stepStatuses[2] = "completed";
  } else if (status === "detecting") {
    stepStatuses[0] = "completed";
    stepStatuses[1] = "active";
  } else if (status === "extracting") {
    stepStatuses[0] = "active";
  }

  return (
    <div className="flex items-center gap-3">
      {STEPS.map((step, i) => (
        <div key={step.key} className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <StepIcon status={stepStatuses[i]} />
            <div>
              <p
                className={`text-sm font-medium ${
                  stepStatuses[i] === "active"
                    ? "text-blue-600"
                    : stepStatuses[i] === "completed"
                    ? "text-gray-900"
                    : "text-gray-400"
                }`}
              >
                {step.label}
              </p>
              <p className="text-xs text-gray-400">{step.description}</p>
            </div>
          </div>
          {i < STEPS.length - 1 && (
            <div
              className={`w-8 h-0.5 ${
                stepStatuses[i] === "completed" ? "bg-blue-500" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function StepIcon({ status }: { status: "completed" | "active" | "pending" | "error" }) {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="w-5 h-5 text-blue-500" />;
    case "active":
      return <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />;
    case "error":
      return <AlertCircle className="w-5 h-5 text-red-500" />;
    case "pending":
      return <Circle className="w-5 h-5 text-gray-300" />;
  }
}
