"use client";

import { useState } from "react";
import { SendIcon } from "@/components/ui/Icons";

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "mailto" }
  | { kind: "error"; message: string };

const field =
  "w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-white placeholder:text-mist-300/80 transition focus:border-brand-sky focus:bg-white/10 focus:outline-none focus-visible:outline-3 focus-visible:outline-offset-1 focus-visible:outline-brand-sky";

export function ContactForm({ fallbackEmail }: { fallbackEmail: string }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // No form service configured: hand the message to the visitor's email app.
    if (!FORM_ENDPOINT) {
      const subject = `Website message from ${data.get("name")}`;
      const body = `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`;
      window.location.href = `mailto:${fallbackEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus({ kind: "mailto" });
      return;
    }

    setStatus({ kind: "sending" });
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      form.reset();
      setStatus({ kind: "sent" });
    } catch {
      setStatus({
        kind: "error",
        message: `Sorry, your message could not be sent. Please email us at ${fallbackEmail}.`,
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-mist-100">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={field}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-mist-100">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-mist-100">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className={`${field} resize-y`}
          placeholder="Partnerships, collaborations, school visits, media…"
        />
      </div>
      {/* Spam honeypot recognised by Formspree; hidden from people. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status.kind === "sending"}
          className="bg-brand-action hover:bg-brand-action-hover inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(26,134,197,0.8)] transition disabled:opacity-60"
        >
          <SendIcon className="size-4" />
          {status.kind === "sending" ? "Sending…" : "Send message"}
        </button>
        <p role="status" aria-live="polite" className="text-sm text-mist-100">
          {status.kind === "sent" &&
            "Thank you! Your message has been sent. We will get back to you soon."}
          {status.kind === "mailto" && "Your email app should open with the message ready to send."}
          {status.kind === "error" && status.message}
          {status.kind === "idle" && !FORM_ENDPOINT && "Sending opens your email app."}
        </p>
      </div>
    </form>
  );
}
