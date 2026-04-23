"use client";

import { useState } from "react";
import { site } from "@/data/site";

const initial = { firstName: "", lastName: "", email: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const to = site.emails.primary;
    const subject = encodeURIComponent(
      `Portfolio contact from ${form.firstName} ${form.lastName}`.trim() || "Portfolio"
    );
    const body = encodeURIComponent(
      [form.message, "", `From: ${form.firstName} ${form.lastName}`, `Email: ${form.email}`]
        .filter(Boolean)
        .join("\n")
    );
    setSubmitted(true);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 space-y-4 border border-slate-200 bg-slate-50/30 p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-semibold text-slate-800">
          First name
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
            autoComplete="given-name"
            className="rounded border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:border-navy-900/40 focus:ring-1 focus:ring-navy-900/15"
            placeholder="First name"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-semibold text-slate-800">
          Last name
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
            autoComplete="family-name"
            className="rounded border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none focus:border-navy-900/40 focus:ring-1 focus:ring-navy-900/15"
            placeholder="Last name"
          />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-semibold text-slate-800">
        Email
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          autoComplete="email"
          className="rounded border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none focus:border-navy-900/40 focus:ring-1 focus:ring-navy-900/15"
          placeholder="Your email"
        />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold text-slate-800">
        Your message
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="resize-y rounded border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none focus:border-navy-900/40 focus:ring-1 focus:ring-navy-900/15"
          placeholder="Type your message here..."
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex min-h-11 min-w-28 items-center justify-center bg-navy-900 px-6 text-sm font-semibold text-white transition hover:bg-navy-950"
        >
          Submit
        </button>
        {submitted ? (
          <p className="text-sm text-slate-600" role="status">
            Opening your email app. If nothing opens, use the address below.
          </p>
        ) : null}
      </div>
    </form>
  );
}
