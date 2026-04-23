"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

const nav = [
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#clients", label: "Clients" },
  { href: "#expertise", label: "Expertise" },
  { href: "#tools", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

function NavLinks({
  onNavigate,
  className,
  linkClassName,
}: {
  onNavigate?: () => void;
  className?: string;
  linkClassName?: string;
}) {
  return (
    <ul className={className} role="list">
      {nav.map((item) => (
        <li key={`${item.href}-${item.label}`}>
          <a
            href={item.href}
            onClick={onNavigate}
            className={linkClassName}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent transition-colors duration-200",
        scrolled
          ? "border-slate-200/80 bg-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md"
          : "bg-white/90 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6 sm:py-4">
        <a
          href="#about"
          className="min-w-0 text-sm font-bold tracking-tight text-navy-900 sm:text-base"
        >
          {site.name}
        </a>

        <nav className="hidden lg:block" aria-label="Page sections">
          <NavLinks
            className="flex items-center justify-end gap-5"
            linkClassName="whitespace-nowrap text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-navy-800 transition hover:text-navy-950"
          />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-slate-200/90 bg-white text-navy-900 transition hover:border-slate-300"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-40 flex flex-col justify-end bg-navy-950/45 backdrop-blur-sm lg:hidden">
          <button
            type="button"
            className="min-h-0 flex-1"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />
          <div
            className="mobile-panel-enter rounded-t-2xl border border-slate-200/80 bg-white p-2 pb-8 shadow-2xl"
            role="dialog"
            aria-modal="true"
          >
            <NavLinks
              className="space-y-0.5 p-1"
              onNavigate={() => setOpen(false)}
              linkClassName="block rounded-lg px-4 py-3 text-sm font-semibold text-navy-900 transition hover:bg-slate-100"
            />
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block w-full rounded-xl bg-navy-900 py-3 text-center text-sm font-semibold text-white"
            >
              Contact
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
