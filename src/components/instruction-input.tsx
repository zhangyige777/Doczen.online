"use client";

import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";

const PLACEHOLDERS = [
  "Redact all plaintiff names and addresses",
  "Remove salary figures, keep job titles",
  "Hide all personal contact info",
  "Redact patient names and medical record numbers",
];

interface InstructionInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function InstructionInput({ value, onChange, disabled }: InstructionInputProps) {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPlaceholderIndex((i) => (i + 1) % PLACEHOLDERS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto space-y-2">
      <label className="text-sm font-medium text-gray-700">
        What should be redacted?{" "}
        <span className="text-gray-400 font-normal">(optional)</span>
      </label>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={PLACEHOLDERS[placeholderIndex]}
        disabled={disabled}
        className="min-h-[80px] resize-none transition-all duration-300"
        maxLength={500}
      />
      <p className="text-xs text-gray-400 text-right">
        {value.length}/500 · Leave empty for standard PII detection
      </p>
    </div>
  );
}
