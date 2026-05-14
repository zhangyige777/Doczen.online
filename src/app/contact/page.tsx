"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Contact us</h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Have questions about Redactly? Need a custom plan? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-2xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          <div className="p-6 rounded-xl border border-gray-100 text-center">
            <Mail className="w-6 h-6 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
            <p className="text-sm text-gray-500">hello@doczen.ai</p>
          </div>
          <div className="p-6 rounded-xl border border-gray-100 text-center">
            <MessageSquare className="w-6 h-6 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Response time</h3>
            <p className="text-sm text-gray-500">Within 24 hours</p>
          </div>
        </div>

        {sent ? (
          <div className="text-center p-12 rounded-xl bg-green-50 border border-green-100">
            <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Message sent!</h3>
            <p className="text-sm text-gray-500">We&apos;ll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
              <textarea
                rows={5}
                required
                className="w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                placeholder="Tell us about your redaction needs..."
              />
            </div>
            <Button type="submit" className="w-full">Send message</Button>
          </form>
        )}
      </section>
    </div>
  );
}
