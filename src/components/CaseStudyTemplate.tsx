"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ────────────────────────────────────────────────────────────
   Reusable premium case-study template (dark editorial theme).
   Pass a `data` object; every text field accepts plain strings.
   Leave a field empty ("") or undefined to hide that block.
   ──────────────────────────────────────────────────────────── */

export type CaseStudyData = {
  /* identity */
  title: string;
  category: string;
  accent: string;            // hex, e.g. "#ef4444"
  year: string;
  liveUrl?: string;          // without protocol, e.g. "chefs-connect.nl"

  /* hero */
  intro: string;             // one strong sentence
  subIntro?: string;         // supporting sentence(s)
  client?: string;           // small attribution line

  /* hero media */
  heroImage?: string | null;
  heroVideo?: string;

  /* quick facts (3–4) */
  facts?: { label: string; value: string }[];

  /* narrative */
  challenge?: string[];      // paragraphs
  approach?: string[];       // paragraphs

  /* feature highlights */
  features?: { title: string; description: string }[];

  /* gallery */
  gallery?: { src: string; alt: string; caption?: string }[];

  /* results */
  results?: string[];        // paragraphs
  metrics?: { value: string; label: string; sub?: string }[];

  /* testimonial */
  quote?: string;
  quoteAuthor?: string;

  /* next case */
  next?: { title: string; href: string };
};

function ScrollAwareVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoEl.play().catch(() => {});
          } else {
            videoEl.pause();
          }
        });
      },
      { rootMargin: "200px" }
    );
    observer.observe(videoEl);
    return () => observer.disconnect();
  }, []);

  return (
    <video ref={videoRef} src={src} className="w-full h-full object-cover" muted loop playsInline preload="metadata" />
  );
}

function HeroMedia({ data }: { data: CaseStudyData }) {
  const { heroVideo, heroImage, accent, title } = data;
  return (
    <div className="relative">
      <div className="absolute -inset-10 rounded-3xl pointer-events-none opacity-70"
        style={{ background: `radial-gradient(ellipse at 50% 40%, ${accent}22 0%, transparent 65%)`, filter: "blur(50px)" }} />
      <div className="relative rounded-lg overflow-hidden bg-zinc-950 border border-white/[0.08] shadow-[0_50px_100px_-40px_rgba(0,0,0,0.95)]">
        <div className="relative aspect-[16/10] overflow-hidden">
          {heroVideo ? (
            <ScrollAwareVideo src={heroVideo} />
          ) : heroImage ? (
            <img src={heroImage} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center relative"
              style={{ background: `linear-gradient(135deg, ${accent}22 0%, #0a0a0a 60%)` }}>
              <div className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full border flex items-center justify-center mb-6"
                  style={{ borderColor: `${accent}40` }}>
                  <span className="text-4xl font-extralight" style={{ color: `${accent}cc` }}>{title.charAt(0)}</span>
                </div>
                <p className="text-white/35 text-[10px] tracking-[0.5em] font-light">BEELD VOLGT</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: `inset 0 0 100px ${accent}1f` }} />
        </div>
      </div>
    </div>
  );
}

export default function CaseStudyTemplate({ data }: { data: CaseStudyData }) {
  const { accent } = data;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("animate-in"); observer.unobserve(e.target); }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".cs-anim").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative bg-[#070707] min-h-screen overflow-hidden">
      <Header variant="light" />

      {/* Ambient accent orbs */}
      <div className="fixed top-[8%] -right-40 w-[640px] h-[640px] rounded-full pointer-events-none -z-0 opacity-70"
        style={{ background: `radial-gradient(circle, ${accent}14 0%, transparent 65%)`, filter: "blur(70px)" }} />
      <div className="fixed bottom-[6%] -left-40 w-[560px] h-[560px] rounded-full pointer-events-none -z-0 opacity-60"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 65%)", filter: "blur(70px)" }} />

      {/* ── Breadcrumb ─────────────────────────────────── */}
      <div className="relative pt-32 lg:pt-40 px-6 lg:px-12">
        <div className="container mx-auto">
          <nav className="cs-anim flex items-center gap-2 text-[10px] tracking-[0.3em] font-light text-white/30">
            <Link href="/" className="hover:text-white/70 transition-colors">HOME</Link>
            <span className="text-white/15">/</span>
            <Link href="/portfolio" className="hover:text-white/70 transition-colors">PORTFOLIO</Link>
            <span className="text-white/15">/</span>
            <span className="text-white/60">{data.title}</span>
          </nav>
        </div>
      </div>

      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative px-6 lg:px-12 pt-12 lg:pt-16 pb-20 lg:pb-28">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 cs-anim">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-px" style={{ background: accent, opacity: 0.8 }} />
                <span className="text-white/40 text-[10px] tracking-[0.5em] font-light">{data.category}</span>
              </div>
              <h1 className="text-[clamp(44px,7vw,84px)] font-extralight text-white tracking-[0.04em] leading-[1.02] mb-8">
                {data.title}
              </h1>
              {data.intro && (
                <p className="text-lg lg:text-xl font-extralight text-white/80 tracking-wide leading-snug italic mb-6 max-w-lg">
                  {data.intro}
                </p>
              )}
              {data.subIntro && (
                <p className="text-white/45 text-sm font-light leading-[1.8] tracking-wide mb-8 max-w-md">
                  {data.subIntro}
                </p>
              )}
              {data.client && (
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-10 h-px bg-white/20" />
                  <p className="text-white/40 text-[10px] tracking-[0.3em] font-light uppercase">{data.client}</p>
                </div>
              )}
              {data.liveUrl && (
                <a href={`https://${data.liveUrl}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-black text-[10px] tracking-[0.3em] font-light hover:bg-white/85 transition-colors duration-300">
                  BEZOEK WEBSITE
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              )}
            </div>

            <div className="lg:col-span-7 cs-anim cs-d1">
              <HeroMedia data={data} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick facts ────────────────────────────────── */}
      {data.facts && data.facts.length > 0 && (
        <section className="relative px-6 lg:px-12 pb-20 lg:pb-28">
          <div className="container mx-auto">
            <div className="cs-anim grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">
              {data.facts.map((f) => (
                <div key={f.label} className="bg-[#070707] px-6 py-8">
                  <p className="text-white/20 text-[9px] tracking-[0.4em] font-light mb-3">{f.label}</p>
                  <p className="text-white/80 text-xl lg:text-2xl font-extralight tracking-wide">{f.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Challenge & Approach ───────────────────────── */}
      {(data.challenge?.length || data.approach?.length) ? (
        <section className="relative px-6 lg:px-12 py-8 lg:py-12">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto">
              {data.challenge?.length ? (
                <div className="cs-anim">
                  <div className="flex items-center gap-3 mb-7">
                    <span className="text-[10px] tracking-[0.4em] font-light" style={{ color: accent }}>01</span>
                    <span className="text-white/40 text-[10px] tracking-[0.5em] font-light">DE UITDAGING</span>
                  </div>
                  <div className="space-y-5">
                    {data.challenge.map((p, idx) => (
                      <p key={idx} className="text-white/55 text-base font-light leading-[1.85] tracking-wide">{p}</p>
                    ))}
                  </div>
                </div>
              ) : <div />}
              {data.approach?.length ? (
                <div className="cs-anim cs-d1">
                  <div className="flex items-center gap-3 mb-7">
                    <span className="text-[10px] tracking-[0.4em] font-light" style={{ color: accent }}>02</span>
                    <span className="text-white/40 text-[10px] tracking-[0.5em] font-light">DE AANPAK</span>
                  </div>
                  <div className="space-y-5">
                    {data.approach.map((p, idx) => (
                      <p key={idx} className="text-white/55 text-base font-light leading-[1.85] tracking-wide">{p}</p>
                    ))}
                  </div>
                </div>
              ) : <div />}
            </div>
          </div>
        </section>
      ) : null}

      {/* ── Features ───────────────────────────────────── */}
      {data.features && data.features.length > 0 && (
        <section className="relative px-6 lg:px-12 py-20 lg:py-28">
          <div className="container mx-auto">
            <div className="cs-anim mb-12">
              <span className="text-[11px] tracking-[0.15em] font-light uppercase" style={{ color: accent }}>Wat we bouwden</span>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]">
              {data.features.map((f, idx) => (
                <div key={idx} className="cs-anim bg-[#070707] p-8 lg:p-10 group/feat">
                  <div className="w-8 h-px mb-6 transition-all duration-500 group-hover/feat:w-14" style={{ background: accent }} />
                  <h3 className="text-white text-sm tracking-[0.25em] font-light mb-4">{f.title}</h3>
                  <p className="text-white/45 text-sm font-light leading-[1.8] tracking-wide">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Gallery ────────────────────────────────────── */}
      {data.gallery && data.gallery.length > 0 && (
        <section className="relative px-6 lg:px-12 py-12 lg:py-20">
          <div className="container mx-auto space-y-12 lg:space-y-16">
            {data.gallery.map((g, idx) => (
              <figure key={idx} className="cs-anim">
                <div className="relative rounded-lg overflow-hidden border border-white/[0.08] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]">
                  <img src={g.src} alt={g.alt} className="w-full h-auto" loading="lazy" />
                </div>
                {g.caption && (
                  <figcaption className="mt-4 text-white/30 text-xs font-light tracking-[0.2em] text-center">{g.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* ── Quote ──────────────────────────────────────── */}
      {data.quote && (
        <section className="relative px-6 lg:px-12 py-20 lg:py-28">
          <div className="container mx-auto">
            <blockquote className="cs-anim max-w-4xl mx-auto text-center">
              <p className="text-2xl lg:text-4xl font-extralight text-white/90 tracking-wide leading-[1.4] italic">
                "{data.quote}"
              </p>
              {data.quoteAuthor && (
                <footer className="mt-8 flex items-center justify-center gap-4">
                  <div className="w-10 h-px" style={{ background: accent, opacity: 0.7 }} />
                  <span className="text-white/45 text-[10px] tracking-[0.35em] font-light uppercase">{data.quoteAuthor}</span>
                </footer>
              )}
            </blockquote>
          </div>
        </section>
      )}

      {/* ── Results ────────────────────────────────────── */}
      {(data.results?.length || data.metrics?.length) ? (
        <section className="relative px-6 lg:px-12 py-12 lg:py-20">
          <div className="container mx-auto max-w-5xl">
            {data.results?.length ? (
              <div className="cs-anim mb-16">
                <div className="flex items-center gap-3 mb-7">
                  <span className="text-[10px] tracking-[0.4em] font-light" style={{ color: accent }}>03</span>
                  <span className="text-white/40 text-[10px] tracking-[0.5em] font-light">HET RESULTAAT</span>
                </div>
                <div className="space-y-5 max-w-3xl">
                  {data.results.map((p, idx) => (
                    <p key={idx} className="text-white/60 text-lg font-light leading-[1.8] tracking-wide">{p}</p>
                  ))}
                </div>
              </div>
            ) : null}

            {data.metrics?.length ? (
              <div className="cs-anim relative overflow-hidden rounded-lg border border-white/[0.08] p-10 lg:p-14"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${accent}12 0%, #0a0a0a 70%)` }}>
                <div className={`grid gap-10 ${data.metrics.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
                  {data.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-5xl lg:text-6xl font-extralight tracking-tight"
                        style={{ color: "#fff" }}>{m.value}</p>
                      <p className="text-white/40 text-[10px] tracking-[0.3em] font-light uppercase mt-4">{m.label}</p>
                      {m.sub && <p className="text-white/30 text-xs font-light tracking-wide mt-1">{m.sub}</p>}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* ── Next case / CTA ────────────────────────────── */}
      <section className="relative border-t border-white/[0.06] py-24 lg:py-32 px-6 lg:px-12 mt-12">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="cs-anim">
              <div className="w-10 h-px bg-white/20 mb-5" />
              <h2 className="text-4xl lg:text-5xl font-extralight text-white tracking-[0.05em] leading-[1.05] mb-6">
                Bouwen we<br />
                <span className="italic text-white/55">de jouwe?</span>
              </h2>
              <p className="text-white/60 text-sm font-light leading-relaxed tracking-wide max-w-md">
                Eén gesprek is genoeg om te weten of het klikt. We denken graag mee, vrijblijvend.
              </p>
            </div>
            <div className="cs-anim cs-d1 flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link href="/#contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-black text-[11px] tracking-[0.25em] font-light hover:bg-white/85 transition-colors duration-300">
                START JE PROJECT
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href={data.next?.href ?? "/portfolio"}
                className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/15 text-white/55 text-[11px] tracking-[0.25em] font-light hover:border-white/35 hover:text-white/90 transition-all duration-300">
                {data.next?.title ? `VOLGENDE: ${data.next.title}` : "ALLE CASES"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .cs-anim {
          opacity: 0;
          transform: translateY(34px);
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 1s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .cs-anim.animate-in { opacity: 1; transform: translateY(0); }
        .cs-d1 { transition-delay: 0.14s; }
        @media (prefers-reduced-motion: reduce) {
          .cs-anim { opacity: 1; transform: none; transition: none; }
        }
      `}</style>
    </main>
  );
}
