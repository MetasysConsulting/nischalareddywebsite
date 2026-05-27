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
      <p className="font-mono-display text-[11px] font-semibold uppercase tracking-[0.22em] text-copper">
        {eyebrow}
      </p>
      <h2 className="font-serif-display mt-4 text-4xl font-medium leading-[1.05] text-bone sm:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-4 text-base leading-8 text-bone/60">{copy}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-ink-900 text-bone">
      <div className="grain" />
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute -right-32 top-20 hidden h-[460px] w-[460px] rounded-full bg-copper opacity-20 blur-3xl md:block" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-900/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <a href="#top" className="min-w-0">
            <span className="font-serif-display block text-2xl tracking-tight text-bone">
              {site.firstName} Reddy<span className="text-copper">.</span>
            </span>
            <span className="block text-xs text-bone/50">{site.title}</span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-underline text-sm text-bone/70 transition hover:text-bone"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={`mailto:${site.emails.primary}`}
            className="hidden bg-copper px-4 py-2 text-sm font-medium text-ink-900 transition hover:bg-copper-light sm:inline-flex"
          >
            Let&apos;s connect
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.82fr] lg:py-24">
          <div>
            <div className="font-mono-display inline-flex border border-white/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-copper">
              Product • Analytics • AI innovation
            </div>
            <h1 className="font-serif-display mt-7 max-w-4xl text-5xl font-medium leading-[1.02] text-bone sm:text-6xl lg:text-[68px]">
              Building smarter digital products with data, AI, and strategy.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-bone/70">
              {clean(aboutIntro.body.split("\n\n")[0])}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#experience"
                className="bg-copper px-6 py-3.5 text-center text-sm font-medium text-ink-900 transition hover:bg-copper-light"
              >
                Explore experience
              </a>
              <a
                href={`tel:+1${site.phoneRaw}`}
                className="border border-white/20 px-6 py-3.5 text-center text-sm font-medium text-bone transition hover:border-copper hover:text-copper"
              >
                {site.phone}
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
            <div className="absolute -inset-2 border border-copper/30" />
            <div className="relative border border-white/10 bg-ink-800 p-4 shadow-2xl shadow-black/40">
              <div className="relative aspect-[3/4] overflow-hidden bg-ink-900">
                <Image
                  src={site.headshot}
                  alt={site.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover grayscale transition duration-700 hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />
              </div>
              <div className="grid grid-cols-3 gap-3 pt-5">
                {stats.map((stat) => (
                  <div
                    key={stat.value}
                    className="border border-white/10 bg-ink-900 p-3"
                  >
                    <p className="font-mono-display text-2xl text-bone">{stat.value}</p>
                    <p className="mt-1 text-[0.68rem] leading-4 text-bone/50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-ink-800/40">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:px-8 md:grid-cols-3">
            <a href={`tel:+1${site.phoneRaw}`} className="text-sm text-bone/60 hover:text-bone">
              Phone: <span className="font-semibold text-copper">{site.phone}</span>
            </a>
            <a
              href={`mailto:${site.emails.primary}`}
              className="text-sm text-bone/60 hover:text-bone md:text-center"
            >
              Email: <span className="font-semibold text-copper">{site.emails.primary}</span>
            </a>
            <p className="text-sm text-bone/60 md:text-right">
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
                className="group grid gap-8 border border-white/10 bg-ink-800 p-6 transition hover:border-copper/50 hover:bg-ink-700/70 md:grid-cols-[0.36fr_1fr] md:p-8"
              >
                <div>
                  <p className="font-mono-display text-[11px] font-bold uppercase tracking-[0.22em] text-copper">
                    {job.start} — {job.end}
                  </p>
                  <h3 className="mt-4 text-xl font-bold text-bone">{job.role}</h3>
                  <p className="mt-2 text-sm text-bone/50">{job.type}</p>
                </div>
                <div>
                  <h4 className="font-serif-display text-3xl text-bone">{job.org}</h4>
                  <ul className="mt-5 space-y-3 text-bone/70">
                    {job.bullets.map((bullet) => (
                      <li key={bullet.slice(0, 45)} className="flex gap-3 leading-7">
                        <span className="mt-3 shrink-0 text-copper">—</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="expertise" className="border-y border-white/5 bg-ink-800/30 px-5 py-24 sm:px-8">
          <SectionHeading
            eyebrow="Expertise"
            title="The proposal-ready capability set."
            copy="The work sits at the intersection of growth, product development, analytics, organizational change, and intelligent automation."
          />
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
            {expertise.map((item) => (
              <article
                key={item.title}
                className="border border-white/10 bg-ink-900 p-6 transition hover:border-copper/50 hover:bg-ink-700/50"
              >
                <div className="mb-5 h-10 w-10 border border-copper/40 bg-copper/10" />
                <h3 className="font-serif-display text-2xl text-bone">{item.title}</h3>
                <div className="mt-4 space-y-4 text-sm leading-7 text-bone/65">
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
                className="group relative overflow-hidden border border-white/10 bg-ink-800 p-6 transition hover:border-copper/50 hover:bg-ink-700/50"
              >
                <span className="font-mono-display text-sm font-bold text-copper">0{index + 1}</span>
                <h3 className="font-serif-display mt-8 text-3xl text-bone">{project.title}</h3>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-bone/50">
                  {project.org}
                </p>
                <span className="mt-8 inline-flex text-sm font-bold text-bone group-hover:text-copper">
                  View context <span className="ml-2 transition group-hover:translate-x-1">→</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section id="education" className="border-y border-white/5 bg-ink-800/30 px-5 py-24 sm:px-8">
          <SectionHeading eyebrow="Education" title="Business, finance, analytics, and delivery foundation." />
          <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
            {education.map((item) => (
              <article
                key={item.school}
                className="border-l border-copper/40 bg-ink-900 p-7"
              >
                <p className="font-mono-display text-[11px] font-bold uppercase tracking-[0.22em] text-bone/50">
                  {item.years}
                </p>
                <h3 className="font-serif-display mt-4 text-2xl text-bone">{item.school}</h3>
                <p className="mt-2 text-bone/65">{item.credential}</p>
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
                className="border border-white/10 bg-ink-800 px-5 py-3 text-sm font-semibold text-bone/70 transition hover:border-copper/50 hover:text-copper"
              >
                {client.name}
              </span>
            ))}
          </div>
        </section>

        <section id="tools" className="border-y border-white/5 bg-ink-800/30 px-5 py-24 sm:px-8">
          <SectionHeading eyebrow="Tools" title="Capability areas for implementation and analysis." />
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-5">
            {toolGroups.map((tool) => (
              <div
                key={tool.title}
                className="border border-white/10 bg-ink-900 p-5 text-center text-sm font-semibold text-bone/75"
              >
                {tool.title}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
          <p className="font-mono-display text-[11px] font-semibold uppercase tracking-[0.22em] text-copper">
            Testimonial
          </p>
          <blockquote className="font-serif-display mt-6 text-3xl leading-tight text-bone sm:text-5xl">
            “{testimonial.quote}”
          </blockquote>
          <p className="mt-8 font-bold text-copper">{testimonial.name}</p>
          <p className="mt-1 text-sm text-bone/50">{testimonial.org}</p>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-7xl px-5 pb-20 sm:px-8"
        >
          <div className="border border-copper/30 bg-ink-800 p-8 text-center sm:p-12">
            <p className="font-mono-display text-[11px] font-semibold uppercase tracking-[0.22em] text-copper">
              Contact
            </p>
            <h2 className="font-serif-display mx-auto mt-4 max-w-3xl text-5xl text-bone sm:text-6xl">
              Ready to discuss product, analytics, or transformation work?
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${site.emails.primary}`}
                className="bg-copper px-7 py-3 text-sm font-bold text-ink-900 transition hover:bg-copper-light"
              >
                {site.emails.primary}
              </a>
              <a
                href={`tel:+1${site.phoneRaw}`}
                className="border border-white/20 px-7 py-3 text-sm font-bold text-bone transition hover:border-copper hover:text-copper"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-bone/45 sm:px-8">
        © {new Date().getFullYear()} {site.name}. Product, analytics, and AI-driven innovation.
      </footer>
    </div>
  );
}
