"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_WEBHOOK_URL } from "../lib/site";

type Status = "idle" | "sending" | "success" | "error";

const INQUIRY_TYPES = [
  "Property Management",
  "Property Assessment",
  "Investment Inquiry",
  "General Question",
];

// Underline-only fields, ported from the legacy site's editorial form styling.
const inputClasses =
  "w-full border-0 border-b border-ink/15 bg-transparent px-0 py-2.5 text-sm text-ink placeholder:text-stone-warm/50 transition-colors focus:border-teal focus:outline-none focus:ring-0";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{ name?: boolean; email?: boolean }>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    // Honeypot: silently succeed for bots.
    if (data.website_url) {
      form.reset();
      setStatus("success");
      return;
    }
    delete data.website_url;

    const nextErrors = {
      name: !data.name || data.name.trim().length < 2,
      email: !data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email),
    };
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.email) return;

    setStatus("sending");
    try {
      const response = await fetch(CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <input
        type="text"
        name="website_url"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] -top-[9999px]"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="form-name" className="mb-1.5 block text-[0.65rem] font-medium tracking-[0.18em] text-stone-warm uppercase">
            Name
          </label>
          <input id="form-name" type="text" name="name" placeholder="Your full name" required className={inputClasses} />
          {errors.name && <p className="mt-1.5 text-xs text-red-700">Please enter your name.</p>}
        </div>
        <div>
          <label htmlFor="form-email" className="mb-1.5 block text-[0.65rem] font-medium tracking-[0.18em] text-stone-warm uppercase">
            Email
          </label>
          <input id="form-email" type="email" name="email" placeholder="your@email.com" required className={inputClasses} />
          {errors.email && <p className="mt-1.5 text-xs text-red-700">Please enter a valid email address.</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="form-phone" className="mb-1.5 block text-[0.65rem] font-medium tracking-[0.18em] text-stone-warm uppercase">
            Phone
          </label>
          <input id="form-phone" type="tel" name="phone" placeholder="Your phone number" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="form-address" className="mb-1.5 block text-[0.65rem] font-medium tracking-[0.18em] text-stone-warm uppercase">
            Property Address
          </label>
          <input id="form-address" type="text" name="property_address" placeholder="123 Main St, Melbourne, FL" className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="form-inquiry" className="mb-1.5 block text-[0.65rem] font-medium tracking-[0.18em] text-stone-warm uppercase">
          Inquiry Type
        </label>
        <select id="form-inquiry" name="inquiry_type" className={inputClasses} defaultValue={INQUIRY_TYPES[0]}>
          {INQUIRY_TYPES.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="form-message" className="mb-1.5 block text-[0.65rem] font-medium tracking-[0.18em] text-stone-warm uppercase">
          Message
        </label>
        <textarea
          id="form-message"
          name="message"
          rows={4}
          placeholder="Tell us about your property and goals..."
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Submit Inquiry"}
      </button>

      {status === "success" && (
        <p className="text-center text-sm font-medium text-teal" role="status">
          Inquiry sent — we&apos;ll be in touch shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-sm font-medium text-red-700" role="status">
          Something went wrong. Please try again or call us directly.
        </p>
      )}
    </form>
  );
}
