import Link from "next/link";
import type { Metadata } from "next";
import {
  Shield,
  FileText,
  Scale,
  Eye,
  Search,
  Lock,
  AlertTriangle,
  FileDown,
  ArrowRight,
  HelpCircle,
  BookOpen,
  FileX,
  FileSearch,
  ClipboardCheck,
} from "lucide-react";

export const runtime = "edge";

export const metadata: Metadata = {
  title:
    'What Does "Redacted" Mean? Definition, Examples & How It Works | Redactly',
  description:
    "Learn what redacted means in legal, medical, and financial documents. See real examples, understand the difference from deletion, and try Redactly's free PDF, Word & Excel redaction tool.",
  alternates: {
    canonical: "/learn/what-is-redaction",
  },
  openGraph: {
    title:
      'What Does "Redacted" Mean? Definition, Examples & How It Works | Redactly',
    description:
      "Learn what redacted means in legal, medical, and financial documents. See real examples, understand the difference from deletion, and try Redactly's free PDF, Word & Excel redaction tool.",
    url: "/learn/what-is-redaction",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does redacted mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Redacted means sensitive information has been intentionally obscured or removed from a document before publication or distribution. Commonly rendered as black bars or '[REDACTED]' brackets, redaction prevents confidential data from being seen by unauthorized readers while preserving the rest of the document's content.",
      },
    },
    {
      "@type": "Question",
      name: "What does [REDACTED] mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: '[REDACTED] is a typographic placeholder — usually shown in square brackets with all-caps text — that marks where sensitive information has been removed from a document or transcript. It signals to the reader that content was present in the original but has been withheld for legal, privacy, or security reasons. The bracket format is common in court transcripts, government FOIA releases, and corporate disclosures.',
      },
    },
    {
      "@type": "Question",
      name: "Is redacted information recoverable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the method used. Proper digital redaction permanently removes the underlying data from the file, making it unrecoverable. However, careless redaction — such as layering a black box over text in a PDF without removing the hidden text layer, or using a permanent marker on paper — can leave the original information recoverable. Professional redaction tools like Redactly permanently remove the underlying data to ensure complete irreversibility.",
      },
    },
    {
      "@type": "Question",
      name: "What does redacted mean in law?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In law, redacted refers to the removal or obscuring of information from legal documents to protect privileged, confidential, or personally identifiable information. Courts require redaction of social security numbers, financial account details, minors' names, and other sensitive data from publicly filed documents. Improper redaction can lead to court sanctions, privacy breaches, and professional liability.",
      },
    },
    {
      "@type": "Question",
      name: "Does redact mean the information is removed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In a proper redaction, yes — the information is permanently removed from the document, not merely hidden. True redaction goes beyond covering text with a black box or highlighting. It strips the underlying data from the file so that no one can recover it by removing the overlay, copying the text, or inspecting the file's raw content. This is the critical difference between redaction and simple visual obscuring.",
      },
    },
    {
      "@type": "Question",
      name: "What does it mean to redact something?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To redact something means to prepare a document for publication or sharing by selectively removing sensitive, confidential, or privileged information while keeping the rest of the content intact. Redaction is commonly applied to legal filings, medical records, government documents, financial statements, and internal corporate communications before they are shared with parties who should not see certain details.",
      },
    },
    {
      "@type": "Question",
      name: "Can you spell it as 'redeacted' or 'redected'?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. 'Redeacted' and 'redected' are common misspellings. The correct spelling is 'redacted' (r-e-d-a-c-t-e-d). The root word is 'redact,' from the Latin 'redactus,' meaning 'to bring back' or 'to reduce to a certain state.' The past tense is 'redacted,' and the noun form is 'redaction.'",
      },
    },
    {
      "@type": "Question",
      name: "What does redact vs retract mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Redact and retract have entirely different meanings. To redact is to obscure or remove sensitive information from a document before sharing it. To retract is to formally withdraw a statement, claim, or publication — essentially taking it back. For example, a law firm redacts client names from a filing, while a journal retracts a published study that contains errors. The two terms are sometimes confused because they sound similar, but they describe opposite actions: redaction conceals, retraction withdraws.",
      },
    },
  ],
};

const definedTermSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  name: "Redacted",
  description:
    "The process of obscuring or removing sensitive information from a document before publication or disclosure, commonly rendered as black bars or [REDACTED] brackets.",
  inDefinedTermSet: "Legal Terminology",
  termCode: "redacted",
  url: "https://redactly.online/learn/what-is-redaction",
};

export default function WhatIsRedactionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(definedTermSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(217,119,6,0.04),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 pt-20 pb-16 text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-sm font-medium mb-6 ring-1 ring-amber-200">
            <BookOpen className="w-4 h-4" />
            Reference Guide
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.15]">
            What Does &ldquo;Redacted&rdquo; Mean?{" "}
            <span className="text-amber-600">
              Definition, Examples &amp; How It Works
            </span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            If you have ever seen a courtroom document with blocks of black ink
            or a government report with the word <strong>[REDACTED]</strong> in
            place of names and numbers, you have encountered redaction. Here is
            what it really means, how it works, and why it matters.
          </p>
        </div>
      </section>

      {/* Content Article */}
      <article className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
        {/* Quick Answer — Featured Snippet target */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-amber-50 border border-amber-100">
          <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Search className="w-5 h-5 text-amber-600" />
            Quick Answer: What Does Redacted Mean?
          </h2>
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            <strong>Redacted</strong> means sensitive information has been
            intentionally obscured or removed from a document before publication
            or distribution. Commonly rendered as black bars or
            &ldquo;[REDACTED]&rdquo; brackets, redaction prevents confidential
            data from being seen by unauthorized readers while preserving the
            rest of the document&apos;s content. It is a standard practice in
            legal filings, government records, medical documents, and corporate
            disclosures.
          </p>
        </section>

        {/* Redacted vs Redaction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-600 shrink-0" />
            Redacted vs. Redaction &mdash; What&rsquo;s the Difference?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The difference between <strong>redacted</strong> and{" "}
            <strong>redaction</strong> is one of grammar, not meaning.
            <em>Redacted</em> is the past-tense adjective or verb form. You say
            &ldquo;the document was <em>redacted</em>&rdquo; or &ldquo;the
            lawyer <em>redacted</em> the client&rsquo;s name.&rdquo;
            <em>Redaction</em> is the noun that names the process itself: &ldquo;the
            redaction of personal data is required by law.&rdquo;
          </p>
          <p className="text-slate-700 leading-relaxed">
            In professional settings you will hear both forms constantly. A
            law firm might have a &ldquo;redaction policy,&rdquo; a government
            agency may issue &ldquo;redaction guidelines,&rdquo; and a document
            that has been through the process is described as &ldquo;redacted.&rdquo;
            Knowing the distinction helps when searching for information about
            the topic&mdash;both terms will return relevant results, but the
            noun form tends to appear in formal rules and procedures while the
            verb form appears in descriptions of specific documents.
          </p>
        </section>

        {/* What Does [REDACTED] Mean */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5 text-amber-600 shrink-0" />
            What Does [REDACTED] Mean? (The Bracket Format)
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            When you see <strong>[REDACTED]</strong> in all-caps inside square
            brackets, it means a specific piece of information was present in
            the original document but has been removed before publication. This
            format is most commonly seen in:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
            <li>
              <strong>Court transcripts</strong> &mdash; where witness names,
              addresses, or other identifying details are withheld.
            </li>
            <li>
              <strong>FOIA releases</strong> &mdash; where government agencies
              release documents with national security or personal privacy
              information removed.
            </li>
            <li>
              <strong>Corporate filings</strong> &mdash; where trade secrets or
              contract terms are kept confidential while the rest of the filing
              is made public.
            </li>
            <li>
              <strong>News reports</strong> &mdash; where journalists publish
              leaked or obtained documents but obscure identities to protect
              sources or comply with legal restrictions.
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            The bracket format serves an important transparency function: it
            tells the reader that something <em>was</em> there. Unlike a blank
            space that could be mistaken for a formatting artifact,
            <strong>[REDACTED]</strong> explicitly signals intentional removal.
            This is particularly important in legal and government contexts
            where the public has a right to know that information exists, even
            if they cannot see its content.
          </p>
        </section>

        {/* What Does a Redacted Document Look Like */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Eye className="w-5 h-5 text-amber-600 shrink-0" />
            What Does a Redacted Document Look Like?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            A redacted document is visually unmistakable. The most common
            redaction format is a solid <strong>black rectangle</strong> or
            &ldquo;black bar&rdquo; placed directly over the sensitive text. On
            a typical page, you might see paragraphs of normal text interrupted
            by a black box that might be a single word long or stretch across
            several lines:
          </p>
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 font-mono text-sm text-slate-700 mb-4 space-y-2">
            <p>
              The defendant, <span className="bg-black text-black mx-1">John Doe</span>,
              was sentenced on <span className="bg-black text-black mx-1">March 15, 2024</span>.
            </p>
            <p>
              His Social Security number is{" "}
              <span className="bg-black text-black mx-1">XXX-XX-XXXX</span>.
            </p>
            <p>
              The financial account held at{" "}
              <span className="bg-black text-black mx-1">[REDACTED]</span>{" "}
              contained approximately{" "}
              <span className="bg-black text-black mx-1">$XX,XXX</span>.
            </p>
            <p>
              Pursuant to{" "}
              <span className="bg-black text-black mx-1">[REDACTED]</span>, the
              motion is hereby granted.
            </p>
          </div>
          <p className="text-slate-700 leading-relaxed">
            In digital documents, redaction takes one of two forms. The
            simplest and most dangerous is a visual overlay&mdash;a shape drawn
            on top of the text that can often be removed, revealing the content
            beneath. The safer form is <strong>permanent redaction</strong>,
            where the underlying text is deleted from the file entirely and
            replaced with a redaction mark. This is the standard required by
            courts, government agencies, and regulatory bodies.
          </p>
        </section>

        {/* Common Types of Information That Get Redacted */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-5 flex items-center gap-2">
            <Shield className="w-5 h-5 text-amber-600 shrink-0" />
            Common Types of Information That Get Redacted
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Redaction is applied to any information that could cause harm if
            disclosed. While the specific rules vary by jurisdiction and
            industry, the following categories are almost always redacted:
          </p>

          <div className="grid gap-5">
            <div className="p-5 rounded-xl border border-slate-100 bg-white hover:shadow-sm transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-800 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <FileSearch className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Personal Identifiable Information (PII)
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Names, Social Security numbers, driver&rsquo;s license
                    numbers, passport numbers, dates of birth, home addresses,
                    phone numbers, and email addresses. PII redaction is the
                    most common form and is required under privacy regulations
                    including GDPR, CCPA, and HIPAA.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-slate-100 bg-white hover:shadow-sm transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-800 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Financial Accounts
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Bank account numbers, credit card numbers, wire transfer
                    details, tax returns, payroll records, and investment
                    account information. Financial redaction is routine in
                    divorce proceedings, bankruptcy filings, corporate
                    audits, and SEC disclosures.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-slate-100 bg-white hover:shadow-sm transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-800 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Legal Privileges
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Attorney-client privileged communications, work product
                    doctrine materials, trade secrets protected by protective
                    orders, and confidential settlement terms. Courts require
                    parties to redact privileged information before filing
                    documents in the public record.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-slate-100 bg-white hover:shadow-sm transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-800 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <FileX className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Government Documents (FOIA)
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    National security information, law enforcement
                    investigative records, confidential informant identities,
                    internal agency deliberations, and personal privacy
                    information contained in government files. FOIA
                    redactions are governed by nine specific statutory
                    exemptions.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-slate-100 bg-white hover:shadow-sm transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-800 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <ClipboardCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Medical Records
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Protected health information (PHI) under HIPAA, including
                    patient names, medical record numbers, treatment details,
                    diagnoses, test results, insurance information, and any
                    data that could identify a patient. Medical redaction is
                    required when records are used for research, litigation,
                    or sharing with third parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Redacted vs Deleted */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            Redacted vs. Deleted &mdash; Is the Information Gone Forever?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            This is the most important distinction to understand about
            redaction: a proper redaction is <strong>not the same</strong> as
            hitting the delete key on your keyboard.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            When you delete text in a word processor, that text often remains
            in the document&rsquo;s underlying file structure. It can be
            recovered by anyone who knows how to inspect the raw file data,
            undo the deletion, or open the document in a different application.
            This is why &ldquo;delete&rdquo; is not redaction.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            True redaction <strong>permanently removes</strong> the underlying
            data from the file. The original text is stripped out, not merely
            hidden behind a shape or a highlight. A properly redacted PDF has
            no hidden text layer, no embedded fonts containing the original
            characters, and no metadata that preserves the deleted content.
          </p>
          <p className="text-slate-700 leading-relaxed">
            The practical consequence is serious. In 2019, a major corporation
            was forced to pay millions in a settlement after improperly
            redacted PDFs were released in litigation&mdash;the black bars
            could simply be removed, revealing the confidential information
            underneath. Professional redaction tools like
            <strong> Redactly</strong> permanently remove the underlying data
            to ensure complete irreversibility, which is the standard required
            by courts, regulators, and privacy laws.
          </p>
        </section>

        {/* What Does Redacted Mean in Legal Terms */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-amber-600 shrink-0" />
            What Does Redacted Mean in Legal Terms?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            In legal terminology, <strong>redacted</strong> refers to the
            excision of information from a document that is subject to a
            privilege, confidentiality obligation, or statutory protection.
            The concept is deeply embedded in procedural law.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Under the <strong>Federal Rules of Civil Procedure</strong> and
            equivalent state rules, parties must redact the following from all
            publicly filed documents: Social Security numbers, taxpayer
            identification numbers, financial account numbers, names of minor
            children, dates of birth, and home addresses. Failure to comply
            can result in the filing being stricken from the record or the
            imposition of sanctions by the court.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            The legal definition of redaction also encompasses
            <strong>attorney-client privilege</strong> and
            <strong>work product doctrine</strong> protections. When a
            document contains both privileged and non-privileged information,
            the privileged portions must be redacted before the document is
            produced in discovery or filed with the court. This is known as
            a &ldquo;privilege log&rdquo; redaction and is governed by
            specific procedural rules.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Case law has established that inadequate redaction can constitute
            a waiver of privilege. If a privileged communication is
            improperly redacted and the other party sees it, the court may
            find that the privilege has been waived for that document and
            potentially for related communications. This makes the quality
            of redaction tools a matter of legal risk management, not just
            convenience.
          </p>
        </section>

        {/* Redaction vs Sanitization */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <FileSearch className="w-5 h-5 text-amber-600 shrink-0" />
            Redaction vs. Sanitization &mdash; What&rsquo;s the Difference?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Redaction and sanitization are related but distinct concepts.
            <strong>Redaction</strong> selectively removes specific pieces of
            sensitive information while leaving the rest of the document
            intact. <strong>Sanitization</strong> is a more thorough process
            that strips an entire document of any data that could identify
            individuals, reveal classified information, or expose
            organizational operations.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Think of it this way: redaction is like using a scalpel to remove
            specific words or numbers, while sanitization is a broader
            decontamination process. A redacted document might show a black
            bar over a single bank account number, but the rest of the
            financial statement remains visible. A sanitized document might
            remove all financial information entirely, along with names,
            dates, locations, and any metadata that could tie the document
            back to a specific person or event.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Sanitization is more commonly required in:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
            <li>
              <strong>Intelligence and national security</strong> &mdash;
              where classified documents are sanitized before release to the
              public or to foreign partners.
            </li>
            <li>
              <strong>Medical research</strong> &mdash; where data sets are
              de-identified (a form of sanitization) to protect patient
              privacy while enabling statistical analysis.
            </li>
            <li>
              <strong>Data breach response</strong> &mdash; where affected
              organizations sanitize internal documents before sharing them
              with regulators or law enforcement.
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            For most day-to-day use cases, redaction is sufficient. Lawyers
            need to redact a few specific data points from a filing, not
            sanitize the entire document. But understanding the difference
            helps you choose the right approach for your situation.
            <strong> Redactly</strong> specializes in precisely targeted
            redaction, making it ideal for legal, financial, and HR
            professionals who need to remove specific sensitive information
            while preserving document context.
          </p>
        </section>

        {/* Redact vs Retract */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 shrink-0" />
            Redact vs. Retract &mdash; Common Confusion
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <em>Redact</em> and <em>retract</em> sound similar but have
            completely different meanings. The confusion is understandable
            because both involve removing something from a document or record,
            but the method and purpose are distinct.
          </p>
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-4">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong className="text-slate-900">To redact:</strong> To
              obscure or remove specific sensitive information from a document
              while keeping the rest visible. The document itself still exists
              and is shared&mdash;only certain details are hidden.
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong className="text-slate-900">To retract:</strong> To take
              back or withdraw an entire statement, claim, or publication. A
              retracted article is removed from circulation. A retracted
              statement is formally disavowed.
            </p>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            A simple example illustrates the difference: a newspaper that
            <em>redacts</em> a source&rsquo;s name from a published document
            keeps the story alive but protects the source. A newspaper that
            <em>retracts</em> an article removes the entire story because it
            contained errors. One conceals specific detail; the other
            withdraws the whole.
          </p>
          <p className="text-slate-700 leading-relaxed">
            This distinction matters in professional writing and legal
            contexts. If you tell a client you will &ldquo;retract&rdquo;
            a name from a contract, they will understand something very
            different from what you likely intend. Using the correct term
            &mdash; redact &mdash; ensures clarity and professionalism.
          </p>
        </section>

        {/* How to Redact a Document */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <FileDown className="w-5 h-5 text-amber-600 shrink-0" />
            How to Redact a Document
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Redacting a document used to require expensive desktop software
            and technical expertise. Today, you can redact PDFs, Word
            documents, and Excel files online in minutes with Redactly. The
            process is straightforward: upload your file, let AI detect
            sensitive information automatically, review the findings, and
            download your redacted document. Every redaction is permanent
            and irreversible.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Redactly is the only free online redaction tool that
            supports PDF, Word, and Excel</strong>. Most redaction tools only
            handle PDFs, leaving Word and Excel users to manually find and
            obscure sensitive data. Redactly&rsquo;s AI detects names, phone
            numbers, email addresses, Social Security numbers, financial
            account details, and more across all three document types. You
            review every detection and decide what to keep or remove before
            the redaction is applied.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Unlike desktop software that requires installation and licensing,
            Redactly works entirely in your browser. Files are processed in
            memory and never stored on our servers. No account is required
            to get started, and the tool is free for up to 20 pages per month.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              href="/tool"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-medium text-sm shadow-md shadow-amber-200 transition-colors"
            >
              Redact a Document Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/how-to/redact-a-pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium text-sm transition-colors"
            >
              How to Redact a PDF
            </Link>
            <Link
              href="/how-to/redact-a-word-document"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium text-sm transition-colors"
            >
              How to Redact Word
            </Link>
            <Link
              href="/how-to/redact-excel"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium text-sm transition-colors"
            >
              How to Redact Excel
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 shrink-0" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="group rounded-xl border border-slate-200 overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer bg-white hover:bg-slate-50 transition-colors list-none">
                <span className="font-medium text-slate-900 pr-4">
                  What does redacted mean?
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-5 pb-5 text-slate-700 leading-relaxed text-sm border-t border-slate-100 pt-4">
                Redacted means sensitive information has been intentionally
                obscured or removed from a document before publication or
                distribution. Commonly rendered as black bars or
                &ldquo;[REDACTED]&rdquo; brackets, redaction prevents
                confidential data from being seen by unauthorized readers
                while preserving the rest of the document&rsquo;s content.
              </div>
            </details>

            <details className="group rounded-xl border border-slate-200 overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer bg-white hover:bg-slate-50 transition-colors list-none">
                <span className="font-medium text-slate-900 pr-4">
                  What does [REDACTED] mean?
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-5 pb-5 text-slate-700 leading-relaxed text-sm border-t border-slate-100 pt-4">
                [REDACTED] is a typographic placeholder&mdash;usually shown in
                square brackets with all-caps text&mdash;that marks where
                sensitive information has been removed from a document or
                transcript. It signals to the reader that content was present
                in the original but has been withheld for legal, privacy, or
                security reasons. The bracket format is common in court
                transcripts, government FOIA releases, and corporate
                disclosures.
              </div>
            </details>

            <details className="group rounded-xl border border-slate-200 overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer bg-white hover:bg-slate-50 transition-colors list-none">
                <span className="font-medium text-slate-900 pr-4">
                  Is redacted information recoverable?
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-5 pb-5 text-slate-700 leading-relaxed text-sm border-t border-slate-100 pt-4">
                It depends on the method used. Proper digital redaction
                permanently removes the underlying data from the file, making
                it unrecoverable. However, careless redaction&mdash;such as
                layering a black box over text in a PDF without removing the
                hidden text layer, or using a permanent marker on paper&mdash;can
                leave the original information recoverable. Professional
                redaction tools like Redactly permanently remove the underlying
                data to ensure complete irreversibility.
              </div>
            </details>

            <details className="group rounded-xl border border-slate-200 overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer bg-white hover:bg-slate-50 transition-colors list-none">
                <span className="font-medium text-slate-900 pr-4">
                  What does redacted mean in law?
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-5 pb-5 text-slate-700 leading-relaxed text-sm border-t border-slate-100 pt-4">
                In law, redacted refers to the removal or obscuring of
                information from legal documents to protect privileged,
                confidential, or personally identifiable information. Courts
                require redaction of social security numbers, financial
                account details, minors&rsquo; names, and other sensitive data
                from publicly filed documents. Improper redaction can lead to
                court sanctions, privacy breaches, and professional liability.
              </div>
            </details>

            <details className="group rounded-xl border border-slate-200 overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer bg-white hover:bg-slate-50 transition-colors list-none">
                <span className="font-medium text-slate-900 pr-4">
                  Does redact mean the information is removed?
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-5 pb-5 text-slate-700 leading-relaxed text-sm border-t border-slate-100 pt-4">
                In a proper redaction, yes&mdash;the information is permanently
                removed from the document, not merely hidden. True redaction
                goes beyond covering text with a black box or highlighting.
                It strips the underlying data from the file so that no one can
                recover it by removing the overlay, copying the text, or
                inspecting the file&rsquo;s raw content. This is the critical
                difference between redaction and simple visual obscuring.
              </div>
            </details>

            <details className="group rounded-xl border border-slate-200 overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer bg-white hover:bg-slate-50 transition-colors list-none">
                <span className="font-medium text-slate-900 pr-4">
                  What does it mean to redact something?
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-5 pb-5 text-slate-700 leading-relaxed text-sm border-t border-slate-100 pt-4">
                To redact something means to prepare a document for
                publication or sharing by selectively removing sensitive,
                confidential, or privileged information while keeping the rest
                of the content intact. Redaction is commonly applied to legal
                filings, medical records, government documents, financial
                statements, and internal corporate communications before they
                are shared with parties who should not see certain details.
              </div>
            </details>

            <details className="group rounded-xl border border-slate-200 overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer bg-white hover:bg-slate-50 transition-colors list-none">
                <span className="font-medium text-slate-900 pr-4">
                  Can you spell it as &ldquo;redeacted&rdquo; or
                  &ldquo;redected&rdquo;?
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-5 pb-5 text-slate-700 leading-relaxed text-sm border-t border-slate-100 pt-4">
                No. &ldquo;Redeacted&rdquo; and &ldquo;redected&rdquo; are
                common misspellings. The correct spelling is
                &ldquo;redacted&rdquo; (r-e-d-a-c-t-e-d). The root word is
                &ldquo;redact,&rdquo; from the Latin &ldquo;redactus,&rdquo;
                meaning &ldquo;to bring back&rdquo; or &ldquo;to reduce to a
                certain state.&rdquo; The past tense is &ldquo;redacted,&rdquo;
                and the noun form is &ldquo;redaction.&rdquo;
              </div>
            </details>

            <details className="group rounded-xl border border-slate-200 overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer bg-white hover:bg-slate-50 transition-colors list-none">
                <span className="font-medium text-slate-900 pr-4">
                  What does redact vs retract mean?
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-5 pb-5 text-slate-700 leading-relaxed text-sm border-t border-slate-100 pt-4">
                Redact and retract have entirely different meanings. To redact
                is to obscure or remove sensitive information from a document
                before sharing it. To retract is to formally withdraw a
                statement, claim, or publication&mdash;essentially taking it
                back. For example, a law firm redacts client names from a
                filing, while a journal retracts a published study that
                contains errors. The two terms are sometimes confused because
                they sound similar, but they describe opposite actions:
                redaction conceals, retraction withdraws.
              </div>
            </details>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Need to Redact a Document?
          </h2>
          <p className="text-slate-300 max-w-lg mx-auto mb-6 leading-relaxed">
            Redactly supports PDF, Word &amp; Excel &mdash; the only free
            online redaction tool that handles all three. No software to
            install, no account required.
          </p>
          <Link
            href="/tool"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-base shadow-lg shadow-amber-900/20 transition-colors"
          >
            Try Redactly Free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </article>
    </div>
  );
}
