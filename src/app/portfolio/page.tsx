"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Project = {
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string | null;
  video?: string;
  url: string;
  year: string;
  accent: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "CHEFS CONNECT",
    category: "CULINAIR PLATFORM",
    tagline: "Waar topchefs en premium keukens elkaar vinden.",
    description: "Een digitaal ontmoetingsplatform voor restaurants, events en chefs. Strak ontwerp dat kwaliteit uitademt, met heldere navigatie die zorgt dat de juiste match op het juiste moment gemaakt wordt.",
    image: null,
    video: "/rsc/chefsconnect/preview.mp4",
    url: "chefs-connect.nl",
    year: "2026",
    accent: "#ef4444",
    link: "/portfolio/chefs-connect",
  },
  {
    title: "AUWT AELSE",
    category: "BISTRO",
    tagline: "Bourgondisch tafelen, eigentijds geserveerd.",
    description: "Een sfeervolle digitale kaart voor een eigentijdse bistro. Warme beeldtaal, heldere menustructuur en moeiteloos reserveren: zodat de gastvrijheid al begint voordat de gast binnenstapt.",
    image: null,
    url: "auwtaelse.nl",
    year: "2026",
    accent: "#eab308",
    link: "/portfolio/auwt-aelse",
  },
  {
    title: "IJSSALON ITALIA",
    category: "FAMILIEBEDRIJF",
    tagline: "Ambachtelijk ijs sinds 1969.",
    description: "Een sfeervolle digitale extensie van een Vaalse traditie. Warme beeldtaal, heldere structuur en alle smaken, verhalen en openingstijden op één plek. Zo blijft het ambacht ook online tastbaar.",
    image: "/rsc/ijssalon/hero.webp",
    url: "ijssalonitaliavaals.nl",
    year: "2025",
    accent: "#fb923c",
    link: "/portfolio/ijssalon-italia",
  },
  {
    title: "STACY KOHNEN",
    category: "ARTIST PORTFOLIO",
    tagline: "Viertalig. Eén stem. Eindeloze podia.",
    description: "Een meertalige portfoliosite met live audio, agendabeheer en directe boekingen. Alles wat een internationale zangeres nodig heeft, in een ontwerp dat even warm aanvoelt als haar stem klinkt.",
    image: "/rsc/stacykohnen/hero.webp",
    url: "stacykohnen.de",
    year: "2025",
    accent: "#a78bfa",
    link: "/portfolio/stacy-kohnen",
  },
];

// Lazily plays/pauses a video based on viewport proximity, instead of autoplaying unconditionally
function PortfolioVideo({ src, className }: { src: string; className: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (inView) el.play().catch(() => {});
    else el.pause();
  }, [inView]);

  return <video ref={ref} src={src} className={className} muted loop playsInline preload="metadata" />;
}

// Browser-frame mockup component (inline styles for simplicity)
function BrowserMockup({ p, large = false }: { p: Project; large?: boolean }) {
  return (
    <div className="relative group-hover/card:scale-[1.01] transition-transform duration-700">
      {/* Accent glow */}
      <div className="absolute -inset-8 rounded-2xl pointer-events-none opacity-60"
        style={{ background: `radial-gradient(ellipse at 50% 50%, ${p.accent}18 0%, transparent 65%)`, filter: "blur(40px)" }} />

      <div className="relative rounded-lg overflow-hidden bg-zinc-950 border border-white/[0.08] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
        {/* Browser top bar */}
        <div className="h-9 bg-zinc-900/90 backdrop-blur border-b border-white/[0.05] flex items-center px-4 relative">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1 text-[11px] font-light tracking-[0.15em] text-white/35 bg-zinc-800/60 rounded">
            <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            {p.url}
          </div>
        </div>

        {/* Screenshot */}
        <div className={`relative ${large ? "aspect-[16/10]" : "aspect-[16/10]"} overflow-hidden`}>
          {p.video ? (
            <PortfolioVideo src={p.video} className="w-full h-full object-cover" />
          ) : p.image ? (
            <img src={p.image} alt={`Schermopname van de ${p.title.toLowerCase()} website — ${p.tagline}`}
              className="w-full h-full object-cover"
              loading="lazy" />
          ) : (
            <div className="w-full h-full flex items-center justify-center relative"
              style={{ background: `linear-gradient(135deg, ${p.accent}22 0%, #0a0a0a 60%)` }}>
              <div className="absolute inset-0 opacity-40"
                style={{ backgroundImage: `radial-gradient(circle at 30% 40%, ${p.accent}35 0%, transparent 55%)` }} />
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
              <div className="relative z-10 text-center px-10 flex flex-col items-center">
                {/* Monogram */}
                <div className="w-20 h-20 rounded-full border flex items-center justify-center mb-6"
                  style={{ borderColor: `${p.accent}40` }}>
                  <span className="text-3xl font-extralight tracking-wider" style={{ color: `${p.accent}cc` }}>
                    {p.title.charAt(0)}
                  </span>
                </div>
                <p className="text-white/35 text-[10px] tracking-[0.5em] font-light">VOORVERTONING VOLGT</p>
              </div>
            </div>
          )}
          {/* Inner edge glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ boxShadow: `inset 0 0 80px ${p.accent}18` }} />
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("animate-in"); observer.unobserve(e.target); }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".anim").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative bg-[#070707] min-h-screen overflow-hidden">
      <Header variant="light" />

      {/* Ambient orbs */}
      <div className="fixed top-[20%] -right-40 w-[600px] h-[600px] rounded-full pointer-events-none -z-0 opacity-60"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)", filter: "blur(60px)" }} />
      <div className="fixed bottom-[10%] -left-40 w-[600px] h-[600px] rounded-full pointer-events-none -z-0 opacity-60"
        style={{ background: "radial-gradient(circle, rgba(251,191,36,0.05) 0%, transparent 65%)", filter: "blur(60px)" }} />

      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 px-6 lg:px-12">
        <div className="container mx-auto relative">
          <div className="anim max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-white/25" />
              <p className="text-white/35 text-[10px] tracking-[0.55em] font-light">GESELECTEERD WERK · STUDIO ARCHIVE</p>
            </div>
            <h1 className="text-[clamp(60px,12vw,160px)] font-extralight text-white tracking-[0.08em] leading-[0.9]">
              Portfolio<span className="text-white/20">.</span>
            </h1>
            <p className="text-white/60 text-base lg:text-lg font-extralight tracking-wide mt-8 max-w-xl italic leading-relaxed">
              Een selectie uit ons archief. Elk project op maat ontworpen, gebouwd om te presteren.
              Websites die het werk doen, lang nadat ze live zijn gegaan.
            </p>
          </div>

          {/* Stat strip — no counters, just signals of breadth */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] anim delay-1">
            {[
              { k: "FUNDAMENT", v: "Maatwerk software & web" },
              { k: "SECTOREN", v: "Horeca · Cultuur · Bedrijven" },
              { k: "BEREIK", v: "Nederland & België" },
              { k: "STANDAARD", v: "Op maat, altijd" },
            ].map((s) => (
              <div key={s.k} className="bg-[#070707] px-6 py-7">
                <p className="text-white/20 text-[9px] tracking-[0.4em] font-light mb-2.5">{s.k}</p>
                <p className="text-white/70 text-sm font-light tracking-wide">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project sections ───────────────────────────── */}
      {projects.map((p, i) => {
        const reversed = i % 2 === 1;
        return (
          <section key={p.title}
            className="group/card relative px-6 lg:px-12 py-20 lg:py-28 overflow-hidden">
            {/* Ambient accent */}
            <div className="absolute inset-0 pointer-events-none opacity-70"
              style={{ background: `radial-gradient(ellipse at ${reversed ? "20%" : "80%"} 50%, ${p.accent}10 0%, transparent 55%)` }} />

            <div className="container mx-auto relative">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Text column */}
                <div className={`lg:col-span-5 relative anim ${reversed ? "lg:order-2 lg:col-start-8" : "lg:order-1"}`}>
                  {/* Ghost wordmark behind */}
                  <div className="absolute -top-16 -left-4 text-[64px] lg:text-[88px] font-extralight text-white/[0.035] leading-none select-none pointer-events-none tracking-[0.2em] whitespace-nowrap overflow-hidden">
                    {p.category}
                  </div>

                  <div className="relative">
                    {/* Category */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-px" style={{ background: p.accent, opacity: 0.7 }} />
                      <span className="text-white/40 text-[10px] tracking-[0.5em] font-light">{p.category}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-[clamp(38px,6vw,72px)] font-extralight text-white tracking-[0.05em] leading-[1.03] mb-6">
                      {p.title}
                    </h2>

                    {/* Tagline */}
                    <p className="text-lg lg:text-xl font-extralight text-white/75 tracking-wide leading-snug italic mb-7 max-w-md">
                      {p.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-white/60 text-sm font-light leading-[1.8] tracking-wide mb-10 max-w-md">
                      {p.description}
                    </p>

                    {/* Meta grid */}
                    <div className="grid grid-cols-2 gap-6 pb-8 mb-8 border-b border-white/[0.08] max-w-xs">
                      <div>
                        <p className="text-white/20 text-[9px] tracking-[0.35em] font-light mb-1.5">JAAR</p>
                        <p className="text-white/65 text-sm font-light tracking-wide">{p.year}</p>
                      </div>
                      <div>
                        <p className="text-white/20 text-[9px] tracking-[0.35em] font-light mb-1.5">STATUS</p>
                        <p className="text-white/65 text-sm font-light tracking-wide inline-flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: p.accent }} />
                          Live
                        </p>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4">
                      <Link href={p.link}
                        className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-black text-[10px] tracking-[0.3em] font-light hover:bg-white/85 transition-colors duration-300">
                        CASE BEKIJKEN
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                      <a href={`https://${p.url}`} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3.5 text-white/40 text-[10px] tracking-[0.3em] font-light hover:text-white/85 transition-colors duration-300 group/live">
                        {p.url}
                        <svg className="w-3 h-3 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mockup column */}
                <div className={`lg:col-span-7 anim delay-1 ${reversed ? "lg:order-1 lg:col-start-1" : "lg:order-2"}`}>
                  <div className="browser-float">
                    <BrowserMockup p={p} large />
                  </div>
                </div>
              </div>
            </div>

            {/* Section divider */}
            {i < projects.length - 1 && (
              <div className="container mx-auto mt-20 lg:mt-28">
                <div className="h-px bg-white/[0.05]" />
              </div>
            )}
          </section>
        );
      })}

      {/* ── In progress / more coming ─────────────────── */}
      <section className="relative px-6 lg:px-12 py-16 lg:py-20">
        <div className="container mx-auto">
          <div className="anim flex flex-col md:flex-row md:items-center justify-between gap-6 px-8 py-10 border border-dashed border-white/[0.1] rounded-lg">
            <div className="flex items-center gap-5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/30" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white/60" />
              </span>
              <div>
                <p className="text-white/70 text-sm font-light tracking-wide">Meer cases in productie.</p>
                <p className="text-white/55 text-xs font-light tracking-wide mt-1">Nieuw werk verschijnt hier zodra het live gaat.</p>
              </div>
            </div>
            <Link href="/#contact"
              className="inline-flex items-center gap-2 text-white/55 text-[10px] tracking-[0.3em] font-light hover:text-white transition-colors duration-300 shrink-0">
              JOUW PROJECT TOEVOEGEN
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="relative border-t border-white/[0.06] py-28 lg:py-36 px-6 lg:px-12 mt-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="anim">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-px bg-white/20" />
                <p className="text-white/30 text-[10px] tracking-[0.5em] font-light">VOLGENDE CASE</p>
              </div>
              <h2 className="text-4xl lg:text-6xl font-extralight text-white tracking-[0.06em] leading-[1.05] mb-6">
                Kan de volgende<br />
                <span className="italic text-white/55">van jou zijn.</span>
              </h2>
              <p className="text-white/60 text-sm font-light leading-relaxed tracking-wide max-w-md">
                We bouwen enkele projecten per kwartaal. Met persoonlijke aandacht en ongegeneerd hoge standaarden.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 anim delay-1">
              <Link href="/#contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-black text-[11px] tracking-[0.25em] font-light hover:bg-white/85 transition-colors duration-300">
                START JE PROJECT
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/15 text-white/55 text-[11px] tracking-[0.25em] font-light hover:border-white/35 hover:text-white/90 transition-all duration-300">
                TERUG NAAR HOME
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .anim {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 1s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .anim.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .anim.delay-1 { transition-delay: 0.14s; }
        .anim.delay-2 { transition-delay: 0.28s; }

        @keyframes float-mockup {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .browser-float {
          animation: float-mockup 9s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .anim { opacity: 1; transform: none; transition: none; }
          .browser-float { animation: none; }
        }
      `}</style>
    </main>
  );
}
