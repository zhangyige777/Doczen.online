export const runtime = "edge";

const API_KEY = process.env.DOCZEN_API_KEY!;
const BASE_URL = process.env.DOCZEN_API_URL || "https://api.apimart.ai/v1";

const SYSTEM_PROMPT = `You are a PII (Personally Identifiable Information) detection engine for document redaction. Your task is to identify sensitive information in legal, medical, HR, and financial documents.

## Detection Categories
- name: Person full names (first, middle, last), aliases
- phone: Phone numbers, fax numbers (any format)
- email: Email addresses
- ssn: US Social Security Numbers (XXX-XX-XXXX)
- dob: Dates of birth (ONLY if explicitly labeled as "date of birth", "DOB", "birth date")
- address: Physical mailing addresses (street + city + state + ZIP pattern)
- financial_account: Bank account numbers, routing numbers, credit card numbers
- custom: Any information matching the user's custom instruction

## Rules
1. ONLY flag true PII. Do NOT flag: company names, court names, case numbers, filing dates, job titles, generic dates.
2. Only flag a date as DOB if explicitly labeled "date of birth" or "DOB".
3. For addresses: flag complete or partial mailing addresses. Do NOT flag single references like "County of Los Angeles".
4. Extract the EXACT text as it appears in the document — do not normalize or reformat.
5. Be conservative: missing a PII item is better than falsely flagging non-sensitive text. False positives frustrate users.

## Output Format
Return a JSON object with a "detections" array. Each detection must have:
{
  "detections": [
    {
      "text": "exact text from document",
      "pii_type": "name|phone|email|ssn|dob|address|financial_account|custom",
      "confidence": 0.95,
      "reasoning": "brief explanation"
    }
  ]
}`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { pages, instruction } = body as {
      pages: { page_number: number; text: string }[];
      instruction?: string;
    };

    const documentText = pages
      .map(
        (p) => `[PAGE ${p.page_number}]\n${p.text}\n[END PAGE ${p.page_number}]`
      )
      .join("\n\n");

    let userMessage = "";
    if (instruction?.trim()) {
      userMessage += `Custom instruction from user: ${instruction.trim()}\n\nIn addition to standard PII categories, also detect any information matching the custom instruction above. Tag these as "custom" type.\n\n`;
    }
    userMessage += `Document text to analyze:\n\n${documentText}\n\nReturn the detections as a JSON object with a "detections" array.`;

    const response = await fetch(`${BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        temperature: 0.1,
        max_tokens: 8192,
        stream: false,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userMessage },
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("API error:", response.status, err);
      return Response.json(
        { error: "AI detection failed", details: err },
        { status: 502 }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      return Response.json({ detections: [] });
    }

    // Parse JSON from the response content
    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch {
      // Try to extract JSON from markdown code block
      const match = content.match(/```(?:json)?\s*([\s\S]*?)```/);
      if (match) {
        parsed = JSON.parse(match[1]);
      } else {
        return Response.json({ detections: [] });
      }
    }

    const detections = parsed?.detections || [];

    return Response.json({
      detections: detections.map(
        (d: { text: string; pii_type: string; confidence: number; reasoning?: string }) => ({
          text: d.text,
          piiType: d.pii_type,
          confidence: d.confidence,
          reasoning: d.reasoning || "",
        })
      ),
    });
  } catch (error) {
    console.error("Detect API error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
