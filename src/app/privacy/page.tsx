import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-400">Last updated: May 1, 2026</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16 space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
          <p className="mb-3">
            Doczen is designed with privacy as a core principle. We minimize data collection to what is strictly necessary to provide our service.
          </p>
          <p className="mb-3">
            <strong className="text-gray-900">Documents you upload:</strong> PDF files are processed entirely in your browser memory. They are never uploaded to our servers. The text content of each page is sent to our AI provider (apimart.ai) solely for the purpose of detecting personally identifiable information (PII). We do not store, log, or retain your document content.
          </p>
          <p>
            <strong className="text-gray-900">Account information:</strong> If you create an account, we collect your email address and name via Clerk for authentication purposes. We do not sell or share your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
          <p className="mb-3">
            Document text is processed by the AI model solely for PII detection. Each detection request is stateless — no document data is retained by us or by the AI provider after the response is returned.
          </p>
          <p>
            Account information is used only for authentication and to manage your subscription. We may send occasional product updates, with the option to unsubscribe at any time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Data Storage and Retention</h2>
          <p className="mb-3">
            Free users: No document data is stored. Redacted files are generated in your browser and downloaded directly. We do not have access to your original or redacted documents.
          </p>
          <p>
            Pro and Enterprise users: Audit logs and redaction certificates are stored in your browser's localStorage. You control this data and can clear it at any time. We plan to offer optional cloud backup for audit logs in the future.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Third-Party Services</h2>
          <p className="mb-3">
            <strong className="text-gray-900">AI Processing:</strong> Document text is sent to apimart.ai (which proxies Claude by Anthropic) for PII detection. Their privacy policy applies to the processing of text during detection requests. Text is processed in a stateless manner and not used for model training.
          </p>
          <p className="mb-3">
            <strong className="text-gray-900">Authentication:</strong> Account creation and sign-in are handled by Clerk. Their privacy policy applies to authentication data.
          </p>
          <p>
            <strong className="text-gray-900">Payments:</strong> Subscription payments are processed by Creem. We do not store your payment card details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your account information at any time. For document processing, since we do not store your documents, there is no document data to request. If you have questions about this policy, please contact us at privacy@doczen.ai.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify registered users of material changes via email. Continued use of the service after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <div className="pt-8 border-t">
          <p className="text-sm text-gray-400">
            If you have questions, please contact us at{" "}
            <a href="mailto:privacy@doczen.ai" className="text-blue-600 hover:underline">
              privacy@doczen.ai
            </a>
            {" "}or visit our{" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              contact page
            </Link>
            .
          </p>
        </div>
      </article>
    </div>
  );
}
