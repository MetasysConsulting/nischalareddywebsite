import { site } from "@/data/site";

const quick = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#expertise", label: "Expertise" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-serif text-lg font-medium text-white">{site.name}</p>
            <p className="mt-1 text-sm text-slate-400">{site.title}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Quick links">
            {quick.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-10 border-t border-white/10 pt-8 text-center text-xs text-slate-500 sm:text-left">
          © {new Date().getFullYear()} {site.name}. Crafted for clarity, impact, and results.
        </p>
      </div>
    </footer>
  );
}
