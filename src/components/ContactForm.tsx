"use client";

import { useState } from "react";

type EnquiryType = "general" | "custom" | "wholesale";

export default function ContactForm() {
  const [enquiryType, setEnquiryType] = useState<EnquiryType>("general");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/REPLACE_WITH_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      alert("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <p className="text-3xl mb-4">✅</p>
        <h2 className="text-xl font-semibold text-stone-900 mb-2">Message sent!</h2>
        <p className="text-stone-500">We&apos;ll get back to you within 1–2 business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Hidden field for Formspree */}
      <input type="hidden" name="enquiry_type" value={enquiryType} />

      {/* Enquiry type */}
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-2">
          What&apos;s this about?
        </label>
        <select
          value={enquiryType}
          onChange={(e) => setEnquiryType(e.target.value as EnquiryType)}
          className="w-full border border-stone-300 rounded-lg px-3 py-2.5 text-stone-900 bg-white focus:outline-none focus:ring-2 focus:ring-stone-900"
        >
          <option value="general">General Enquiry</option>
          <option value="custom">Custom Print Request</option>
          <option value="wholesale">Wholesale / Batch Order</option>
        </select>
      </div>

      {/* Standard fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-stone-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-stone-900"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-stone-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-stone-900"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full border border-stone-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-stone-900 resize-none"
        />
      </div>

      {/* Custom print fields */}
      {enquiryType === "custom" && (
        <div className="space-y-4 p-5 bg-stone-50 rounded-xl border border-stone-200">
          <p className="text-sm font-semibold text-stone-700">Custom Print Details</p>

          <div>
            <label htmlFor="custom_description" className="block text-sm font-medium text-stone-700 mb-1">
              Describe what you want printed *
            </label>
            <textarea
              id="custom_description"
              name="custom_description"
              rows={3}
              required
              placeholder="Describe the object, size, use case, any specific requirements..."
              className="w-full border border-stone-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-stone-900 resize-none"
            />
          </div>

          <div>
            <label htmlFor="reference_image" className="block text-sm font-medium text-stone-700 mb-1">
              Reference image (optional)
            </label>
            <input
              id="reference_image"
              name="reference_image"
              type="file"
              accept="image/*"
              className="w-full text-sm text-stone-600 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-stone-200 file:text-stone-700 hover:file:bg-stone-300"
            />
          </div>

          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-stone-700 mb-1">
              Quantity
            </label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              min="1"
              defaultValue={1}
              className="w-32 border border-stone-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-stone-900"
            />
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#06A0B4] hover:bg-[#0589A0] text-white font-medium py-3.5 rounded-full uppercase tracking-wide text-sm transition-colors disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
