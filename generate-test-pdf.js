const { PDFDocument, rgb, StandardFonts } = require("pdf-lib");
const fs = require("fs");

async function main() {
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.TimesRoman);
  const bold = await doc.embedFont(StandardFonts.TimesRomanBold);
  let page = doc.addPage([612, 792]);
  let y = 740;

  function line(text, opts = {}) {
    const f = opts.bold ? bold : font;
    const size = opts.size || 12;
    const color = opts.color || rgb(0, 0, 0);
    page.drawText(text, { x: 72, y, size, font: f, color });
    y -= size + 6;
    if (y < 80) {
      page = doc.addPage([612, 792]);
      y = 740;
    }
  }

  function gap(n = 1) { y -= n * 18; }

  // ---- Page 1: Legal Document ----
  line("IN THE CIRCUIT COURT OF THE EIGHTEENTH JUDICIAL CIRCUIT", { bold: true, size: 13 });
  line("STATE OF ILLINOIS, COUNTY OF DU PAGE", { bold: true, size: 13 });
  gap();
  line("John Smith, Plaintiff", { bold: true });
  line("v.", { bold: true });
  line("ABC Manufacturing Corp., Defendant", { bold: true });
  line("Case No. 2024-CV-008912", { bold: true });
  gap();
  line("COMPLAINT FOR DAMAGES", { bold: true, size: 14 });
  gap();
  line("Plaintiff John Smith, residing at 742 Elm Street, Springfield, IL 62701,");
  line("brings this action against Defendant and alleges as follows:");
  gap();
  line("1. Plaintiff's date of birth is May 15, 1980. His Social Security Number");
  line("   is 432-98-1765.");
  gap();
  line("2. Plaintiff may be contacted at (217) 555-0147 or via email at");
  line("   john.smith@email.com.");
  gap();
  line("3. Defendant's registered agent is Jane Doe, located at 1500 Corporate");
  line("   Drive, Suite 300, Chicago, IL 60601. Tel: (312) 555-0199.");
  gap();
  line("4. Plaintiff's bank records are held at First National Bank, Account");
  line("   Number 4837-2917-450, Routing Number 071000013.");
  gap();
  line("5. The incident occurred on March 12, 2024, at approximately 2:30 PM.");
  line("   Witness: Robert Williams, phone (217) 555-0234.");
  gap();
  line("Respectfully submitted,");
  gap();
  line("_________________________");
  line("Michael Chen, Attorney at Law");
  line("Chen & Associates, 200 W Madison St, Suite 1500, Chicago, IL 60606");
  line("Tel: (312) 555-0300 | mchen@chenlaw.com");

  // ---- Page 2: HR Document ----
  line("EMPLOYMENT OFFER LETTER", { bold: true, size: 14 });
  gap();
  line("Date: April 3, 2024");
  gap();
  line("Dear Maria Garcia,");
  gap();
  line("We are pleased to offer you the position of Senior Product Manager");
  line("at an annual salary of $145,000, payable bi-weekly.");
  gap();
  line("Your health insurance will be under policy #BCBS-98765-IL, and your");
  line("401(k) will be administered through Fidelity, account #FID-88342.");
  gap();
  line("Please sign and return this letter along with your completed I-9 form.");
  gap();
  line("Your employee ID will be EMP-2024-0472. Benefits enrollment must be");
  line("completed by April 15, 2024.");
  gap();
  line("Sincerely,");
  gap();
  line("Sarah Thompson, HR Director");
  line("sarah.thompson@company.com | Direct: (312) 555-0410");

  // ---- Page 3: Medical Record ----
  line("PATIENT ENCOUNTER SUMMARY", { bold: true, size: 14 });
  line("Springfield General Hospital — CONFIDENTIAL", { bold: true, size: 11 });
  gap();
  line("Patient: Maria Garcia");
  line("DOB: November 3, 1975");
  line("MRN: MRN-2024-58391");
  line("Insurance: Blue Cross Blue Shield — Policy #BCBS-98765-IL");
  gap();
  line("Date of Visit: April 22, 2024");
  line("Provider: Dr. James Wilson, MD");
  gap();
  line("Chief Complaint: Persistent headaches and fatigue.");
  gap();
  line("Vital Signs: BP 128/82, HR 72, Temp 98.6F");
  line("Current Medications: Lisinopril 10mg daily, Atorvastatin 20mg daily.");
  gap();
  line("Patient contact: (217) 555-8923 | maria.garcia@email.com");
  line("Emergency Contact: Carlos Garcia (husband) — (217) 555-8924");
  gap();
  line("_________________________");
  line("Dr. James Wilson, MD");
  line("Board Certified, Internal Medicine");

  const pdfBytes = await doc.save();
  fs.writeFileSync("test-document.pdf", pdfBytes);
  console.log("Created test-document.pdf (3 pages)");
}

main().catch(console.error);
