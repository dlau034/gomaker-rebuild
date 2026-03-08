import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Gomaker. Send a general enquiry, request a custom 3D print, or ask about wholesale orders.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-stone-900 mb-2">Get in touch</h1>
      <p className="text-stone-500 mb-10 leading-relaxed">
        Whether you have a question about an order, want a custom print, or just want to say hello — we&apos;d love to hear from you. We aim to reply within 1–2 business days.
      </p>

      <ContactForm />
    </div>
  );
}
