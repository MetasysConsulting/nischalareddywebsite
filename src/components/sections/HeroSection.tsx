"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { ProfileImage } from "@/components/ProfileImage";
import { RichAbout } from "@/components/RichAbout";
import { aboutIntro, site } from "@/data/site";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";

const up = (delay: number) => ({
  initial: { opacity: 0, y: 18 } as const,
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.55, ease: EASE } },
});

export function HeroSection() {
  const reduce = useReducedMotion();
  const a = (d: number) => (reduce ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } } : up(d));

  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden border-b border-slate-200/80 bg-white"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-1/4 top-0 h-[420px] w-[70%] rounded-full bg-[radial-gradient(closest-side,rgba(26,35,126,0.14),transparent)] blur-2xl" />
        <div className="absolute -right-1/4 top-1/3 h-[380px] w-[60%] rounded-full bg-[radial-gradient(closest-side,rgba(15,23,42,0.08),transparent)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center md:max-w-none md:flex-row md:items-center md:gap-14 md:text-left">
          {reduce ? (
            <div className="shrink-0">
              <div className="relative">
                <div
                  className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-navy-900/20 via-slate-200/50 to-navy-800/20 blur-sm"
                  aria-hidden
                />
                <ProfileImage src={site.headshot} alt={site.name} size={264} className="relative" />
              </div>
            </div>
          ) : (
            <motion.div
              className="shrink-0"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.65, ease: EASE } }}
            >
              <div className="relative">
                <div
                  className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-navy-900/20 via-slate-200/50 to-navy-800/20 blur-sm"
                  aria-hidden
                />
                <ProfileImage src={site.headshot} alt={site.name} size={264} className="relative" />
              </div>
            </motion.div>
          )}

          <div className="mt-10 min-w-0 flex-1 md:mt-0">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/80 px-3 py-1 text-xs font-medium text-navy-900 shadow-sm backdrop-blur"
              {...a(0.05)}
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-500" aria-hidden />
              {site.title}
            </motion.div>

            <motion.h1
              className="font-serif text-4xl font-medium tracking-tight text-navy-950 sm:text-5xl md:text-[3.1rem] md:leading-[1.05]"
              {...a(0.12)}
            >
              Hello!
            </motion.h1>

            <motion.p className="mt-2 text-lg text-slate-800 sm:text-xl" {...a(0.2)}>
              {aboutIntro.kicker}
            </motion.p>

            <motion.h2
              className="mt-5 text-base font-semibold text-slate-900 sm:text-lg"
              {...a(0.28)}
            >
              {aboutIntro.subtitle}
            </motion.h2>

            <motion.div className="prose-body mt-5 text-left text-slate-800" {...a(0.34)}>
              <RichAbout text={aboutIntro.body} />
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center md:justify-start"
              {...a(0.42)}
            >
              <a
                href="#experience"
                className={cn(
                  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-navy-900 px-5 text-sm font-semibold text-white",
                  "shadow-md shadow-navy-900/15 transition hover:bg-navy-950 hover:shadow-lg"
                )}
              >
                View experience
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-300/90 bg-white/80 px-5 text-sm font-semibold text-slate-800 transition hover:border-slate-400"
              >
                Get in touch
                <ArrowRight className="h-4 w-4 opacity-60" aria-hidden />
              </a>
            </motion.div>

            {!reduce ? (
              <motion.a
                href="#experience"
                className="mt-8 hidden text-xs font-medium uppercase tracking-[0.2em] text-slate-500 transition hover:text-navy-900 md:inline-flex md:items-center md:gap-1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.55, duration: 0.5 } }}
              >
                <span>Scroll</span>
                <ChevronDown className="h-3.5 w-3.5" aria-hidden />
              </motion.a>
            ) : (
              <a
                href="#experience"
                className="mt-8 hidden text-xs font-medium uppercase tracking-[0.2em] text-slate-500 md:inline-flex"
              >
                <span>Scroll</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
