import Image from "next/image";
import {
  aboutIntro,
  clientLogos,
  education,
  experience,
  expertise,
  projectHighlights,
  site,
  testimonial,
  toolGroups,
} from "@/data/site";

const nav = [
  { href: "#experience", label: "Experience" },
  { href: "#expertise", label: "Expertise" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

const stats = [
  { value: "8+", label: "Years across product, analytics, and transformation" },
  { value: "6", label: "Industries including media, fintech, retail, and banking" },
  { value: "20-30%", label: "Projected ROI uplift across CDAP roadmap work" },
] as const;

function clean(text: string) {
  return text.replaceAll("**", "");
}

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-300/80">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-4 text-base leading-8 text-slate-300">{copy}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#030712] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute right-[-12rem] top-[18rem] h-[34rem] w-[34rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-[-18rem] left-[-10rem] h-[36rem] w-[36rem] rounded-full bg-blue-700/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_top,#000_35%,transparent_75%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <a href="#top" className="min-w-0">
            <span className="block text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
              {site.firstName} Reddy
            </span>
            <span className="block text-xs text-slate-400">{site.title}</span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={`mailto:${site.emails.primary}`}
            className="hidden rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.12)] transition hover:border-cyan-200/60 hover:bg-cyan-300/20 sm:inline-flex"
          >
            Let&apos;s connect
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.82fr] lg:py-24">
          <div>
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200 shadow-2xl shadow-cyan-950/30">
              Product • Analytics • AI innovation
            </div>
            <h1 className="mt-7 max-w-4xl font-serif text-6xl font-medium leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Building smarter digital products with data, AI, and strategy.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              {clean(aboutIntro.body.split("\n\n")[0])}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#experience"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-bold text-slate-950 shadow-[0_0_40px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5 hover:bg-cyan-100"
              >
                Explore experience
              </a>
              <a
                href={`tel:+1${site.phoneRaw}`}
                className="rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-300/10"
              >
                {site.phone}
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[28rem] lg:ml-auto">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-cyan-400/25 via-blue-500/10 to-fuchsia-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/12 bg-white/[0.06] p-5 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-900">
                <Image
                  src={site.headshot}
                  alt={site.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover grayscale contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
              </div>
              <div className="grid grid-cols-3 gap-3 pt-5">
                {stats.map((stat) => (
                  <div
                    key={stat.value}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] p-3"
                  >
                    <p className="font-serif text-2xl text-cyan-100">{stat.value}</p>
                    <p className="mt-1 text-[0.68rem] leading-4 text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.035]">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:px-8 md:grid-cols-3">
            <a href={`tel:+1${site.phoneRaw}`} className="text-sm text-slate-300 hover:text-white">
              Phone: <span className="font-semibold text-cyan-100">{site.phone}</span>
            </a>
            <a
              href={`mailto:${site.emails.primary}`}
              className="text-sm text-slate-300 hover:text-white md:text-center"
            >
              Email: <span className="font-semibold text-cyan-100">{site.emails.primary}</span>
            </a>
            <p className="text-sm text-slate-300 md:text-right">
              Vancouver-area product, analytics, and transformation leader
            </p>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <SectionHeading
            eyebrow="Experience"
            title="Product leadership across media, fintech, advisory, and digital adoption."
          />
          <div className="space-y-5">
            {experience.map((job) => (
              <article
                key={`${job.org}-${job.start}`}
                className="group grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/15 backdrop-blur transition hover:border-cyan-300/30 hover:bg-white/[0.07] md:grid-cols-[0.36fr_1fr] md:p-8"
              >
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">
                    {job.start} — {job.end}
                  </p>
                  <h3 className="mt-4 text-xl font-bold text-white">{job.role}</h3>
                  <p className="mt-2 text-sm text-slate-400">{job.type}</p>
                </div>
                <div>
                  <h4 className="font-serif text-3xl text-white">{job.org}</h4>
                  <ul className="mt-5 space-y-3 text-slate-300">
                    {job.bullets.map((bullet) => (
                      <li key={bullet.slice(0, 45)} className="flex gap-3 leading-7">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.8)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="expertise" className="border-y border-white/10 bg-white/[0.035] px-5 py-24 sm:px-8">
          <SectionHeading
            eyebrow="Expertise"
            title="The proposal-ready capability set."
            copy="The work sits at the intersection of growth, product development, analytics, organizational change, and intelligent automation."
          />
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
            {expertise.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-[#081120]/80 p-6 shadow-xl shadow-black/15 transition hover:-translate-y-1 hover:border-cyan-300/30"
              >
                <div className="mb-5 h-10 w-10 rounded-2xl bg-cyan-300/10 ring-1 ring-cyan-300/30" />
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300">
                  {item.body.split("\n\n").map((paragraph) => (
                    <p key={paragraph.slice(0, 35)}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <SectionHeading
            eyebrow="Selected impact"
            title="Projects that translate strategy into measurable execution."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {projectHighlights.map((project, index) => (
              <a
                key={project.title}
                href={project.href}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025] p-6 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-300/40"
              >
                <span className="text-sm font-bold text-cyan-200">0{index + 1}</span>
                <h3 className="mt-8 font-serif text-3xl text-white">{project.title}</h3>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-400">
                  {project.org}
                </p>
                <span className="mt-8 inline-flex text-sm font-bold text-white">
                  View context <span className="ml-2 transition group-hover:translate-x-1">→</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section id="education" className="border-y border-white/10 bg-white/[0.035] px-5 py-24 sm:px-8">
          <SectionHeading eyebrow="Education" title="Business, finance, analytics, and delivery foundation." />
          <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
            {education.map((item) => (
              <article
                key={item.school}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-7"
              >
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">
                  {item.years}
                </p>
                <h3 className="mt-4 text-2xl font-bold text-white">{item.school}</h3>
                <p className="mt-2 text-slate-300">{item.credential}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="clients" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <SectionHeading eyebrow="Companies & clients" title="Enterprise credibility across global teams." />
          <div className="flex flex-wrap justify-center gap-3">
            {clientLogos.map((client) => (
              <span
                key={client.name}
                className="rounded-full border border-white/10 bg-white/[0.055] px-5 py-3 text-sm font-semibold text-slate-200"
              >
                {client.name}
              </span>
            ))}
          </div>
        </section>

        <section id="tools" className="border-y border-white/10 bg-white/[0.035] px-5 py-24 sm:px-8">
          <SectionHeading eyebrow="Tools" title="Capability areas for implementation and analysis." />
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-5">
            {toolGroups.map((tool) => (
              <div
                key={tool.title}
                className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 text-center text-sm font-semibold text-slate-200"
              >
                {tool.title}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-300/80">
            Testimonial
          </p>
          <blockquote className="mt-6 font-serif text-3xl leading-tight text-white sm:text-5xl">
            “{testimonial.quote}”
          </blockquote>
          <p className="mt-8 font-bold text-cyan-100">{testimonial.name}</p>
          <p className="mt-1 text-sm text-slate-400">{testimonial.org}</p>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-7xl px-5 pb-20 sm:px-8"
        >
          <div className="rounded-[2.5rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/14 via-white/[0.06] to-fuchsia-400/10 p-8 text-center shadow-[0_0_80px_rgba(34,211,238,0.1)] sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200">
              Contact
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-5xl text-white sm:text-6xl">
              Ready to discuss product, analytics, or transformation work?
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${site.emails.primary}`}
                className="rounded-full bg-white px-7 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-100"
              >
                {site.emails.primary}
              </a>
              <a
                href={`tel:+1${site.phoneRaw}`}
                className="rounded-full border border-white/15 px-7 py-3 text-sm font-bold text-white transition hover:border-cyan-200/60"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-slate-500 sm:px-8">
        © {new Date().getFullYear()} {site.name}. Product, analytics, and AI-driven innovation.
      </footer>
    </div>
  );
}
