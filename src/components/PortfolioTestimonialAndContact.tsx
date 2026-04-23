import { Quote } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { site, testimonial } from "@/data/site";

export function TestimonialBlock() {
  return (
    <div className="relative border-y border-slate-200/80 bg-slate-50/90 py-16 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(26,35,126,0.06),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-navy-900 shadow-sm">
            <Quote className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </div>
        </Reveal>
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Testimonial</p>
        <blockquote className="prose-body mt-5 text-pretty text-lg font-medium leading-relaxed text-slate-800 sm:text-xl">
          <span className="text-4xl font-serif leading-none text-navy-900/15" aria-hidden>
            “
          </span>
          {testimonial.quote}
          <span className="text-4xl font-serif leading-none text-navy-900/15" aria-hidden>
            ”
          </span>
        </blockquote>
        <footer className="mt-8 text-sm text-slate-600">
          <p className="text-base font-bold text-navy-950">{testimonial.name}</p>
          <p className="mt-0.5 text-slate-500">{testimonial.org}</p>
        </footer>
      </div>
    </div>
  );
}

export function ContactBlock() {
  return (
    <div
      id="contact"
      className="scroll-mt-24 border-t border-slate-200/80 bg-gradient-to-b from-white to-slate-50/50 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <h2 className="text-center font-serif text-2xl text-navy-950 sm:text-3xl">Contact</h2>
        <p className="prose-body mt-2 text-center text-slate-600">I’d love to connect about product, data, and transformation work.</p>
        <ContactForm />
        <ul className="mt-8 space-y-2.5 text-center text-sm text-slate-600">
          <li>
            <span className="font-semibold text-slate-800">Phone: </span>
            <a href={`tel:+1${site.phoneRaw}`} className="tabular-nums text-navy-900 underline-offset-2 hover:underline">
              {site.phone}
            </a>
          </li>
          <li>
            <span className="font-semibold text-slate-800">Email: </span>
            <a
              href={`mailto:${site.emails.secondary}`}
              className="break-all text-navy-900 underline-offset-2 hover:underline"
            >
              {site.emails.secondary}
            </a>
          </li>
          <li>
            <a
              href={`mailto:${site.emails.primary}`}
              className="break-all text-navy-900 underline-offset-2 hover:underline"
            >
              {site.emails.primary}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
