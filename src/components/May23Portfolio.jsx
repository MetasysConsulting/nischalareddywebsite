"use client";

/* eslint-disable @next/next/no-img-element, react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  FileText,
  Sparkles,
  TrendingUp,
  Database,
  LayoutDashboard,
  Globe2,
  ClipboardList,
  Bot,
  ChevronRight,
} from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import {
  PROFILE,
  METRICS,
  INDUSTRIES,
  SERVICES,
  CASE_STUDIES,
  EXPERIENCE,
  FREELANCE,
  SKILLS,
  CLIENT_LOGOS,
  TESTIMONIALS,
  EDUCATION,
  CERTS,
} from "@/components/portfolio-data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const NAV = [
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay: i * 0.05 },
  }),
};

// ---------- Navbar ----------
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-ink-900/75 border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
      data-testid="site-navbar"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a
          href="#top"
          data-testid="nav-logo"
          className="font-serif-display text-2xl tracking-tight text-bone hover:text-copper transition-colors"
        >
          Nischala Reddy<span className="text-copper">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-9">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              data-testid={`nav-link-${n.id}`}
              className="text-sm text-bone/70 hover:text-bone link-underline transition-colors"
            >
              {n.label}
            </a>
          ))}
          <a
            href={PROFILE.upwork}
            target="_blank"
            rel="noreferrer"
            data-testid="nav-upwork-cta"
            className="ml-2 inline-flex items-center gap-1.5 bg-copper text-ink-900 px-4 py-2 text-sm font-medium hover:bg-copper-light transition-colors"
          >
            Hire on Upwork <ArrowUpRight className="w-4 h-4" />
          </a>
        </nav>
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-bone p-2"
          data-testid="nav-mobile-toggle"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-50 bg-ink-900/95 backdrop-blur-xl"
            data-testid="mobile-nav-overlay"
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
              <span className="font-serif-display text-2xl">Menu</span>
              <button onClick={() => setOpen(false)} data-testid="nav-mobile-close" aria-label="Close menu">
                <X className="w-6 h-6 text-bone" />
              </button>
            </div>
            <div className="px-6 py-10 flex flex-col gap-6">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-link-${n.id}`}
                  className="font-serif-display text-4xl text-bone hover:text-copper"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={PROFILE.upwork}
                target="_blank"
                rel="noreferrer"
                data-testid="mobile-nav-upwork-cta"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-copper text-ink-900 px-5 py-3 font-medium"
              >
                Hire on Upwork <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ---------- Hero ----------
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -60]);
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <motion.div
        style={{ y }}
        className="absolute -right-32 top-20 w-[460px] h-[460px] rounded-full opacity-20 blur-3xl bg-copper pointer-events-none hidden md:block"
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-8 items-center relative">
        <div className="col-span-12 lg:col-span-8">
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
            className="font-mono text-[11px] tracking-overline uppercase text-copper mb-6 flex flex-wrap gap-x-3 gap-y-2 items-center"
            data-testid="hero-overline"
          >
            <span>Senior Product Manager</span>
            <span className="text-bone/30">·</span>
            <span>GenAI Products</span>
            <span className="text-bone/30">·</span>
            <span>Project Management</span>
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={1}
            className="font-serif-display text-4xl sm:text-5xl lg:text-[68px] leading-[1.05] tracking-tight text-bone"
            data-testid="hero-headline"
          >
            I build <em className="text-copper not-italic">SaaS products</em>
            <br />
            powered by <em className="text-copper not-italic">GenAI</em> —
            <br />
            solve business problems
            <br />
            &amp; <em className="text-copper not-italic">drive impact</em>.
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={2}
            className="mt-8 max-w-2xl text-lg text-bone/70 leading-relaxed"
            data-testid="hero-subtext"
          >
            I'm <span className="text-bone">Nischala Reddy</span> — 10+ years building and shipping{" "}
            <span className="text-bone">SaaS platforms, GenAI features, and data products</span> across
            Healthcare, Finance, Retail &amp; E-commerce, Media, HR-Tech, Digital Marketing and Supply Chain.
            End-to-end product development — from discovery to launch — for teams that bet on what we ship.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={2.5}
            className="mt-6 flex flex-wrap gap-2"
            data-testid="hero-industries"
          >
            {INDUSTRIES.map((ind) => (
              <span
                key={ind}
                className="text-[11px] font-mono uppercase tracking-wider text-bone/55 border border-white/15 px-2.5 py-1 hover:border-copper/60 hover:text-copper transition-colors"
              >
                {ind}
              </span>
            ))}
          </motion.div>
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={3}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={PROFILE.upwork}
              target="_blank"
              rel="noreferrer"
              data-testid="hero-upwork-cta"
              className="inline-flex items-center gap-2 bg-copper text-ink-900 px-6 py-3.5 font-medium hover:bg-copper-light transition-colors group"
            >
              Hire Me on Upwork
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="#contact"
              data-testid="hero-contact-cta"
              className="inline-flex items-center gap-2 border border-white/20 text-bone px-6 py-3.5 hover:border-copper hover:text-copper transition-all"
            >
              Book a discovery call
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1], delay: 0.2 }}
          className="col-span-12 lg:col-span-4 relative"
          data-testid="hero-portrait"
        >
          <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:ml-auto">
            <div className="absolute -inset-2 border border-copper/30" />
            <img
              src={PROFILE.photo}
              alt={PROFILE.name}
              className="relative w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------- Metrics Banner ----------
function Metrics() {
  return (
    <section className="border-y border-white/10 bg-ink-800/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
        {METRICS.map((m, i) => (
          <motion.div
            key={m.label}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={i}
            data-testid={`metric-${i}`}
          >
            <p className="font-mono-display text-4xl md:text-5xl text-bone tracking-tight">{m.value}</p>
            <p className="mt-2 text-sm text-bone/60">{m.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ---------- Case Studies (Bento) ----------
const CATEGORY_ICONS = {
  "AI / ML Product Development": Bot,
  "Supply Chain & Shipping Analytics": Globe2,
  "Retail Analytics & Consulting": TrendingUp,
  "Consulting / CDAP": ClipboardList,
  "Data Analytics & Growth": Sparkles,
  "Dashboard Building": LayoutDashboard,
  "Web Scraping & Data Pipelines": Database,
  "Business Analysis": FileText,
};

function CaseStudyCard({ cs, className = "" }) {
  const Icon = CATEGORY_ICONS[cs.category] || Sparkles;
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden bg-ink-800 border border-white/10 hover:border-copper/50 transition-colors ${className}`}
      data-testid={`case-study-${cs.id}`}
    >
      <div className="relative h-44 md:h-56 overflow-hidden">
        <img
          src={cs.image}
          alt={cs.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/40 to-transparent" />
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-ink-900/80 backdrop-blur-sm border border-white/10 px-2.5 py-1 text-[10px] font-mono uppercase tracking-overline text-copper">
          <Icon className="w-3 h-3" />
          {cs.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif-display text-2xl text-bone leading-tight">{cs.title}</h3>
        {cs.problem && (
          <div className="mt-4 pl-3 border-l border-copper/40">
            <p className="font-mono text-[10px] uppercase tracking-overline text-copper mb-1.5">Problem</p>
            <p className="text-sm text-bone/75 leading-relaxed">{cs.problem}</p>
          </div>
        )}
        <div className="mt-4 pl-3 border-l border-bone/15">
          <p className="font-mono text-[10px] uppercase tracking-overline text-bone/50 mb-1.5">Solution</p>
          <p className="text-sm text-bone/65 leading-relaxed">{cs.blurb}</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {cs.impact.map((i) => (
            <span
              key={i}
              className="text-[11px] font-mono uppercase tracking-wider text-copper border border-copper/30 px-2 py-1"
            >
              {i}
            </span>
          ))}
        </div>
        <div className="mt-5 pt-5 border-t border-white/5 flex flex-wrap gap-1.5">
          {cs.stack.map((s) => (
            <span key={s} className="text-[11px] text-bone/50">
              {s}
              <span className="text-bone/20 mx-1.5">·</span>
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function CaseStudies() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="font-mono text-[11px] tracking-overline uppercase text-copper mb-4">Selected Work</p>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-bone leading-[1.05]">
              Case studies, by <em className="text-copper not-italic">discipline</em>.
            </h2>
          </div>
          <p className="text-bone/60 max-w-md text-base">
            Eight categories of work — AI/ML, dashboards, pipelines, retail analytics, consulting, BA, and
            growth — distilled from 8+ years across enterprise clients.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 auto-rows-auto">
          {CASE_STUDIES.map((cs) => {
            const span = cs.size === "lg" ? "col-span-12 lg:col-span-6" : cs.size === "md" ? "col-span-12 md:col-span-6 lg:col-span-4" : "col-span-12 md:col-span-6 lg:col-span-4";
            return <CaseStudyCard key={cs.id} cs={cs} className={span} />;
          })}
        </div>
      </div>
    </section>
  );
}

// ---------- Services ----------
function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-ink-800/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 mb-14">
          <div className="col-span-12 lg:col-span-7">
            <p className="font-mono text-[11px] tracking-overline uppercase text-copper mb-4">Engagements</p>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-bone leading-[1.05]">
              How we can <em className="text-copper not-italic">work together</em>.
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-5 text-bone/60 self-end">
            Fixed-scope sprints, monthly retainers, or full-cycle delivery. Available for project & hourly
            engagements via Upwork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative p-8 border-white/10 [&:not(:last-child)]:lg:border-r [&:not(:last-child)]:border-b lg:[&:not(:last-child)]:border-b-0 hover:bg-ink-700/50 transition-colors"
              data-testid={`service-${s.id}`}
            >
              <p className="font-mono text-[10px] tracking-overline uppercase text-copper">{s.sub}</p>
              <h3 className="font-serif-display text-2xl mt-3 text-bone">{s.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-bone/65">
                    <span className="text-copper mt-1">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-end">
                <a
                  href={PROFILE.upwork}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`service-${s.id}-cta`}
                  className="inline-flex items-center gap-1 text-sm text-bone group-hover:text-copper transition-colors"
                >
                  Engage <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Experience Timeline ----------
function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4">
          <p className="font-mono text-[11px] tracking-overline uppercase text-copper mb-4">Career</p>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-bone leading-[1.05]">
            A decade.
            <br />
            Six full-time flags.
          </h2>
          <p className="mt-6 text-bone/60">
            From workforce analytics at Barclays to GenAI products at Amgen and shipping data products at Arteryx —
            a deliberate path through the highest-stakes data and product organizations.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-8 relative">
          <div className="absolute left-0 md:left-3 top-2 bottom-2 w-px bg-white/10" />
          <div className="space-y-12">
            {EXPERIENCE.map((e, i) => (
              <motion.div
                key={e.company + i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative pl-8 md:pl-12"
                data-testid={`experience-${i}`}
              >
                <span className="absolute left-0 md:left-2 top-2 w-2 h-2 bg-copper rounded-full ring-4 ring-ink-900" />
                <p className="font-mono text-[11px] uppercase tracking-overline text-bone/50">{e.range}</p>
                <h3 className="font-serif-display text-2xl md:text-3xl text-bone mt-2">{e.company}</h3>
                <p className="text-copper text-sm mt-1">{e.role}</p>
                <ul className="mt-4 space-y-2.5 max-w-2xl">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-bone/70 text-[15px] leading-relaxed">
                      <ChevronRight className="w-3.5 h-3.5 text-copper mt-1.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Skills ----------
function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-ink-800/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-14">
          <p className="font-mono text-[11px] tracking-overline uppercase text-copper mb-4">Toolkit</p>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-bone leading-[1.05]">
            The stack I <em className="text-copper not-italic">ship with</em>.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/10">
          {SKILLS.map((g) => (
            <div key={g.group} className="bg-ink-900 p-6" data-testid={`skill-group-${g.group}`}>
              <p className="font-mono text-[10px] tracking-overline uppercase text-copper">{g.group}</p>
              <ul className="mt-4 space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="text-bone/75 text-sm">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Logo Wall ----------
function Logos() {
  const loop = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <section className="py-16 md:py-20 overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <p className="font-mono text-[11px] tracking-overline uppercase text-bone/50">
          Selected clients & employers
        </p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink-900 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink-900 to-transparent z-10" />
        <div className="flex animate-marquee gap-16 w-max">
          {loop.map((l, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center gap-4"
              data-testid={`logo-${i}`}
            >
              <span className="font-serif-display text-3xl md:text-4xl text-bone/45 hover:text-copper transition-colors whitespace-nowrap tracking-tight">
                {l.name}
              </span>
              <span className="text-copper/40 text-2xl">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Testimonials ----------
function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <p className="font-mono text-[11px] tracking-overline uppercase text-copper mb-10">Praise</p>
        <div className="space-y-16">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              data-testid={`testimonial-${i}`}
            >
              <blockquote className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-bone leading-snug">
                <span className="text-copper">"</span>
                {t.quote}
                <span className="text-copper">"</span>
              </blockquote>
              <figcaption className="mt-6 font-mono text-xs uppercase tracking-overline text-bone/60">
                — {t.name}, {t.role}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Education ----------
function Education() {
  return (
    <section className="py-20 md:py-24 border-y border-white/5 bg-ink-800/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <p className="font-mono text-[11px] tracking-overline uppercase text-copper mb-4">Education & Certifications</p>
          <h3 className="font-serif-display text-3xl md:text-4xl text-bone">Credentials</h3>
        </div>
        <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {EDUCATION.map((e) => (
            <div key={e.school} className="border-l border-copper/40 pl-5" data-testid={`edu-${e.school}`}>
              <p className="font-mono text-[11px] uppercase tracking-overline text-bone/50">{e.range}</p>
              <p className="font-serif-display text-2xl text-bone mt-1.5">{e.school}</p>
              <p className="text-bone/65 text-sm mt-1">{e.degree}</p>
            </div>
          ))}
          <div className="border-l border-copper/40 pl-5 sm:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-overline text-bone/50">Certified</p>
            <p className="mt-2 text-bone/80">{CERTS.join(" · ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Contact ----------
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", message: "" });
  const [loading, setLoading] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in name, email, and message.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent. I'll be in touch within 24 hours.");
      setForm({ name: "", email: "", company: "", budget: "", message: "" });
    } catch (err) {
      const detail = err?.response?.data?.detail || "Could not send your message.";
      toast.error(typeof detail === "string" ? detail : "Could not send your message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-10 lg:gap-16">
        <div className="col-span-12 lg:col-span-5">
          <p className="font-mono text-[11px] tracking-overline uppercase text-copper mb-4">Contact</p>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-bone leading-[1.05]">
            Let's build the next one
            <br />
            <em className="text-copper not-italic">together</em>.
          </h2>
          <p className="mt-6 text-bone/65 max-w-md">
            Available for product, analytics, and AI engagements via Upwork or direct. Typical reply window — within
            24 hours.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={`mailto:${PROFILE.email}`}
              data-testid="contact-email"
              className="flex items-center gap-3 text-bone/80 hover:text-copper transition-colors"
            >
              <Mail className="w-4 h-4 text-copper" /> {PROFILE.email}
            </a>
            <p className="flex items-center gap-3 text-bone/60">
              <MapPin className="w-4 h-4 text-copper" /> {PROFILE.location}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={PROFILE.upwork}
              target="_blank"
              rel="noreferrer"
              data-testid="contact-upwork-cta"
              className="inline-flex items-center gap-2 bg-copper text-ink-900 px-5 py-3 font-medium hover:bg-copper-light"
            >
              Hire on Upwork <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              data-testid="contact-linkedin"
              className="inline-flex items-center gap-2 border border-white/20 text-bone px-5 py-3 hover:border-copper hover:text-copper"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>

        <form
          onSubmit={submit}
          className="col-span-12 lg:col-span-7 bg-ink-800/50 border border-white/10 p-8 md:p-10 space-y-6"
          data-testid="contact-form"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label="Name" id="name" required value={form.name} onChange={update("name")} />
            <Field label="Email" id="email" type="email" required value={form.email} onChange={update("email")} />
            <Field label="Company" id="company" value={form.company} onChange={update("company")} />
            <Field label="Budget (optional)" id="budget" placeholder="$5k – $15k" value={form.budget} onChange={update("budget")} />
          </div>
          <div>
            <label htmlFor="message" className="font-mono text-[10px] tracking-overline uppercase text-bone/50">
              Project Brief *
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={update("message")}
              data-testid="contact-input-message"
              className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-copper outline-none py-3 text-bone resize-none transition-colors"
              placeholder="Tell me about the data, the team, and the outcome you want…"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            data-testid="contact-submit"
            className="inline-flex items-center gap-2 bg-copper text-ink-900 px-6 py-3.5 font-medium hover:bg-copper-light transition-colors disabled:opacity-60"
          >
            {loading ? "Sending…" : "Send Message"} <ArrowUpRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, id, type = "text", value, onChange, required, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="font-mono text-[10px] tracking-overline uppercase text-bone/50">
        {label} {required && "*"}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        data-testid={`contact-input-${id}`}
        className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-copper outline-none py-3 text-bone transition-colors"
      />
    </div>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
        <p className="font-serif-display text-xl text-bone">
          Nischala Reddy<span className="text-copper">.</span>
        </p>
        <p className="text-bone/50 text-sm">© {new Date().getFullYear()} Nischala Reddy Bujangari · All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href={PROFILE.upwork} target="_blank" rel="noreferrer" data-testid="footer-upwork" className="text-bone/60 hover:text-copper">
            Upwork
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" data-testid="footer-linkedin" className="text-bone/60 hover:text-copper">
            LinkedIn
          </a>
          <a href={`mailto:${PROFILE.email}`} data-testid="footer-email" className="text-bone/60 hover:text-copper">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

// ---------- Freelance / Project Engagements ----------
function FreelanceClient({ c }) {
  const [logoFailed, setLogoFailed] = useState(false);
  const initials = c.name
    .replace("&", "and")
    .replace("—", "")
    .split(" ")
    .filter((w) => w && w.length > 0 && !["the", "and"].includes(w.toLowerCase()))
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const tileBg = c.logoOnDark ? "bg-ink-900" : "bg-bone";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
      whileHover={{ y: -3 }}
      className="group bg-ink-800 border border-white/10 hover:border-copper/50 transition-colors p-6"
      data-testid={`freelance-${c.domain}`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-14 h-14 shrink-0 border border-white/10 flex items-center justify-center overflow-hidden ${
            logoFailed ? "bg-ink-700" : tileBg
          }`}
        >
          {!logoFailed && c.logoUrl ? (
            <img
              src={c.logoUrl}
              alt={c.name}
              className="w-full h-full object-contain p-1.5"
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <span className="font-serif-display text-xl text-copper">{initials}</span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-serif-display text-xl text-bone leading-tight group-hover:text-copper transition-colors">
            {c.name}
          </h4>
          <p className="font-mono text-[10px] uppercase tracking-overline text-bone/50 mt-1">{c.industry}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-bone/65 leading-relaxed">{c.blurb}</p>
    </motion.div>
  );
}

function Freelance() {
  return (
    <section id="freelance" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="font-mono text-[11px] tracking-overline uppercase text-copper mb-4">
              Freelance & Contract Engagements
            </p>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-bone leading-[1.05]">
              Independent <em className="text-copper not-italic">client work</em>.
            </h2>
          </div>
          <p className="text-bone/60 max-w-md text-base">
            Outside of full-time roles, I work directly with founders, agencies and SMB teams as a freelancer —
            discovery, build, ship.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FREELANCE.map((c) => (
            <FreelanceClient key={c.domain} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Main ----------
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-ink-900 text-bone font-sans">
      <div className="grain" />
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <CaseStudies />
        <Services />
        <Experience />
        <Freelance />
        <Skills />
        <Logos />
        <Testimonials />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
