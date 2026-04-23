import { site } from "@/data/site";

function PhoneIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 opacity-95" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 opacity-95" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

export function ContactBar() {
  return (
    <div className="w-full border-y border-navy-950/20 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-stretch justify-center gap-2 px-4 py-3.5 sm:flex-row sm:items-center sm:gap-10 sm:px-6 sm:py-4">
        <a
          href={`tel:+1${site.phoneRaw}`}
          className="group inline-flex items-center justify-center gap-2.5 text-sm font-semibold tabular-nums transition hover:opacity-90 sm:justify-start"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white">
            <PhoneIcon />
          </span>
          {site.phone}
        </a>
        <div className="hidden h-6 w-px bg-white/20 sm:block" aria-hidden />
        <a
          href={`mailto:${site.emails.primary}`}
          className="group inline-flex min-w-0 items-center justify-center gap-2.5 break-all text-sm font-medium transition hover:opacity-90 sm:justify-start"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white">
            <MailIcon />
          </span>
          <span className="min-w-0 break-all sm:break-normal">{site.emails.primary}</span>
        </a>
      </div>
    </div>
  );
}
