import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-sm text-gray-400">Last updated: May 1, 2026</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16 space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing or using Doczen ("the Service"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service. We reserve the right to update these terms at any time, with notice provided to registered users for material changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Description of Service</h2>
          <p>
            Doczen provides an AI-powered document redaction tool that identifies and redacts personally identifiable information (PII) from PDF documents. The Service processes documents in your browser and via API calls to third-party AI providers for PII detection.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">3. User Responsibilities</h2>
          <p className="mb-3">
            You are responsible for the documents you upload and process through the Service. You represent that you have the right to process and redact those documents. You agree not to use the Service for any unlawful purpose or in violation of any applicable laws or regulations.
          </p>
          <p>
            You are responsible for reviewing AI-suggested redactions before downloading. Doczen provides detection suggestions; final redaction decisions and their legal adequacy remain your responsibility.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Service Limitations</h2>
          <p className="mb-3">
            Doczen is provided "as is" without warranties of any kind, either express or implied. While we strive for accuracy, AI-based PII detection may produce false positives (flagging non-sensitive text) or false negatives (missing actual PII).
          </p>
          <p>
            The current MVP version applies visual redactions using pdf-lib. These are permanent visual overlays but do not remove text from the PDF content stream. We are working on PyMuPDF integration for content-stream redaction in a future version.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Subscription and Payment</h2>
          <p className="mb-3">
            Free tier: 20 pages per month at no cost. No credit card required. Pro tier: $19/month for 200 pages, advanced features, and priority support. Enterprise: custom pricing.
          </p>
          <p>
            Subscription fees are non-refundable except as required by applicable law. You may cancel your subscription at any time; access continues through the end of the current billing period.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Doczen and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service, including but not limited to damages resulting from incomplete redaction, data leaks, or compliance failures.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Termination</h2>
          <p>
            We reserve the right to suspend or terminate access to the Service for violations of these terms. Upon termination, your right to use the Service ceases immediately. Account data will be retained for 30 days before deletion, unless otherwise required by law.
          </p>
        </section>

        <div className="pt-8 border-t">
          <p className="text-sm text-gray-400">
            Questions about these terms?{" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contact us
            </Link>
            .
          </p>
        </div>
      </article>
    </div>
  );
}
