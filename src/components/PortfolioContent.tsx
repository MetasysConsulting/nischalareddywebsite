import { BarChart3, Landmark, Layers, RefreshCcw, TrendingUp, Users } from "lucide-react";
import { ClientLogo } from "@/components/ClientLogo";
import { Reveal } from "@/components/motion/Reveal";
import { ToolScreenshot } from "@/components/ToolScreenshot";
import {
  clientLogos,
  education,
  experience,
  expertise,
  moreToolScreens,
  projectHighlights,
  toolGroups,
} from "@/data/site";
import { cn } from "@/lib/cn";

const EXPERTISE_ICONS = [TrendingUp, BarChart3, RefreshCcw, Layers, Landmark, Users] as const;

function SectionLabel({ id, title, kicker }: { id: string; title: string; kicker?: string }) {
  return (
    <div id={id} className="mb-10 scroll-mt-24 text-center sm:mb-14">
      {kicker ? (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{kicker}</p>
      ) : null}
      <h2 className="font-serif mt-2 text-2xl font-medium text-navy-950 sm:text-3xl md:text-[2rem]">{title}</h2>
      <div
        className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-transparent via-navy-900/40 to-transparent"
        aria-hidden
      />
    </div>
  );
}

export function ExperienceList() {
  return (
    <div className="bg-slate-50/50 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionLabel id="experience" title="Experience" />
        <div className="space-y-8">
          {experience.map((job, i) => (
            <Reveal key={`${job.org}-${job.start}`} index={i} className="group">
              <div
                className={cn(
                  "relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm",
                  "transition duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-slate-200/80 sm:p-8"
                )}
              >
                <div
                  className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-navy-900/80 to-navy-800/20 opacity-0 transition group-hover:opacity-100"
                  aria-hidden
                />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-4">
                    <p className="text-sm font-semibold text-slate-800">
                      {job.start} <span className="text-slate-300">–</span> {job.end}
                    </p>
                    <p className="mt-3 text-sm font-bold text-navy-900">{job.role}</p>
                    <p className="mt-1 text-sm text-slate-600">{job.type}</p>
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="text-base font-bold text-slate-900 sm:text-lg">{job.org}</h3>
                    <ul className="prose-body mt-4 list-outside list-disc space-y-2.5 pl-4 text-slate-700 marker:text-navy-900/40 sm:pl-5">
                      {job.bullets.map((b) => (
                        <li key={b.slice(0, 40)} className="pl-1.5 text-sm sm:text-base">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export function EducationBlock() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionLabel id="education" title="Education" />
        <div className="mx-auto max-w-2xl space-y-4">
          {education.map((e, i) => (
            <Reveal key={e.school} index={i}>
              <div className="flex flex-col gap-1 rounded-2xl border border-slate-200/80 bg-slate-50/40 p-6 text-center sm:text-left">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{e.years}</p>
                <h3 className="text-lg font-bold text-navy-900 sm:text-xl">{e.school}</h3>
                <p className="prose-body text-slate-700">{e.credential}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ClientsBlock() {
  return (
    <div className="bg-slate-50/50 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionLabel id="clients" title="Clients" kicker="Trusted by teams at" />
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-12">
            {clientLogos.map((c) => (
              <ClientLogo key={c.name} name={c.name} file={c.file} />
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export function ExpertiseGrid() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionLabel id="expertise" title="Expertise" />
        <div className="grid gap-5 sm:grid-cols-2">
          {expertise.map((e, i) => {
            const Icon = EXPERTISE_ICONS[i] ?? Layers;
            return (
              <Reveal key={e.title} index={i} className="h-full">
                <div
                  className={cn(
                    "group flex h-full flex-col rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/60 p-6",
                    "shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  )}
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-navy-900 shadow-sm">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="text-base font-bold text-navy-900 sm:text-lg">{e.title}</h3>
                  <div className="prose-body mt-2 space-y-3 text-slate-700">
                    {e.body
                      .trim()
                      .split("\n\n")
                      .map((p) => (
                        <p key={p.slice(0, 32)} className="text-sm leading-relaxed sm:text-base">
                          {p}
                        </p>
                      ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function ToolsBlock() {
  return (
    <div className="bg-slate-50/50 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionLabel id="tools" title="Skills" kicker="Tools & platforms" />
        <div className="grid gap-6 sm:grid-cols-2">
          {toolGroups.map((t, i) => (
            <Reveal key={t.title} index={i} className="min-w-0">
              <div>
                <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{t.title}</h3>
                <ToolScreenshot title={t.title} file={t.image} />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {moreToolScreens.map((file, i) => (
            <Reveal key={file} index={i + toolGroups.length} className="min-w-0">
              <ToolScreenshot title="Tools" file={file} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectsBlock() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionLabel id="projects" title="Projects" kicker="Selected impact" />
        <div className="grid gap-4 sm:grid-cols-3">
          {projectHighlights.map((p, i) => (
            <Reveal key={p.title} index={i}>
              <a
                href={p.href}
                className={cn(
                  "group flex h-full flex-col rounded-2xl border border-slate-200/90 bg-slate-50/30 p-5 text-left",
                  "transition duration-300 hover:-translate-y-0.5 hover:border-navy-900/15 hover:bg-white hover:shadow-lg"
                )}
              >
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-slate-500 group-hover:text-navy-800">
                  {p.org}
                </p>
                <p className="mt-2 text-sm font-bold leading-snug text-navy-900 sm:text-base">{p.title}</p>
                <span className="mt-3 inline-flex text-xs font-semibold text-navy-900/60 transition group-hover:text-navy-900">
                  Read more
                  <span className="ml-1 inline-block transition group-hover:translate-x-0.5">→</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
