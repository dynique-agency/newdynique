"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DISCIPLINES = [
  {
    n: "01", title: "MAATWERK SOFTWARE", href: "/diensten/processen",
    tagline: "Slimmer werken. Meer ruimte voor groei.",
    desc: "Wij brengen jouw werkwijze in kaart en bouwen maatwerk software op code die je bedrijf efficiënter, professioneler en schaalbaarder maakt. Geen standaardpakket.",
    keys: ["Procesanalyse", "Maatwerk software", "Koppelingen", "Automatisering"],
    color: "#d4a574",
  },
  {
    n: "02", title: "WEB & DESIGN", href: "/diensten/web",
    tagline: "Jouw merk online, precies zoals het hoort.",
    desc: "Een sterke digitale aanwezigheid die bezoekers overtuigt en resultaat oplevert. Digitale producten die jouw merk vertegenwoordigen en meegroeien met je ambities.",
    keys: ["Website", "Webshop", "Web applicatie", "Branding"],
    color: "#fbbf24",
  },
  {
    n: "03", title: "DIGITALE MARKETING", href: "/diensten/marketing",
    tagline: "Zichtbaar. Relevant. Onvermijdelijk.",
    desc: "Online zichtbaarheid is geen toeval. Een strategie die jouw doelgroep bereikt, jouw merk versterkt en groei stimuleert. Consistent op elk kanaal dat ertoe doet.",
    keys: ["Social media", "Content strategie", "SEO", "Online adverteren"],
    color: "#f43f5e",
  },
  {
    n: "04", title: "VIDEO & AERIAL", href: "/diensten/drone",
    tagline: "Beelden die blijven hangen.",
    desc: "Professionele video en unieke luchtopnames geven jouw merk een visuele identiteit die opvalt. Van bedrijfsfilm tot social content: beeld vertelt wat woorden niet kunnen.",
    keys: ["Bedrijfsfilm", "Aerial footage", "Social content", "Promotievideo"],
    color: "#14b6a6",
  },
];

const SECTOR_LINKS = [
  { label: "Bouw", href: "/maatwerk-software/bouw" },
  { label: "Zorg", href: "/maatwerk-software/zorg" },
  { label: "Logistiek", href: "/maatwerk-software/logistiek" },
  { label: "Installatiebedrijf", href: "/maatwerk-software/installatiebedrijf" },
];

const PROCESS = [
  { n: "01", t: "Kennismaking", d: "We luisteren naar je doel, je situatie en wat je écht nodig hebt." },
  { n: "02", t: "Plan & ontwerp", d: "Een helder voorstel en ontwerp op maat. Geen verrassingen achteraf." },
  { n: "03", t: "Bouwen", d: "We bouwen met code en aandacht voor elk detail, en houden je op de hoogte." },
  { n: "04", t: "Live & door", d: "Snel live, en we blijven doorontwikkelen waar dat groei oplevert." },
];

const SPECTRUM = DISCIPLINES.map((d) => d.color);

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      name: "Diensten van Dynique",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Maatwerk software & digitale processen", url: "https://dynique.nl/diensten/processen" },
        { "@type": "ListItem", position: 2, name: "Websites & Web Apps", url: "https://dynique.nl/diensten/web" },
        { "@type": "ListItem", position: 3, name: "AI Marketing", url: "https://dynique.nl/diensten/marketing" },
        { "@type": "ListItem", position: 4, name: "Drone & Video", url: "https://dynique.nl/diensten/drone" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
        { "@type": "ListItem", position: 2, name: "Diensten", item: "https://dynique.nl/diensten" },
      ],
    },
  ],
};

export default function DienstenHub() {
  const [openDisc, setOpenDisc] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-in");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".anim").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <Header variant="light" />

      <main className="relative bg-[#070707] overflow-hidden">
        {/* Ambient orbs */}
        <div className="absolute top-[4%] -right-40 w-[640px] h-[640px] rounded-full pointer-events-none z-0"
          style={{ background: "radial-gradient(circle, rgba(212,165,116,0.12) 0%, transparent 65%)", filter: "blur(70px)" }} />
        <div className="absolute bottom-[8%] -left-40 w-[560px] h-[560px] rounded-full pointer-events-none z-0"
          style={{ background: "radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 65%)", filter: "blur(70px)" }} />

        {/* ── HERO ───────────────────────────────────────── */}
        <section className="relative min-h-[88vh] flex items-center px-6 lg:px-12">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "56px 56px" }} />

          <div className="container mx-auto relative z-10 pt-36 pb-24 lg:pt-40 lg:pb-28">
            <div className="grid lg:grid-cols-12 gap-14 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="hv hv-1 flex items-center gap-3 mb-8">
                  <div className="w-12 h-px bg-white/40" />
                  <p className="text-white/45 text-[10px] tracking-[0.5em] font-light">MAATWERK SOFTWARE &amp; DIGITALE DIENSTEN</p>
                </div>
                <h1 className="hv hv-2 text-[clamp(40px,7vw,88px)] font-extralight text-white tracking-[0.02em] leading-[1.02] mb-8">
                  Maatwerk software.
                  <br />
                  <span className="italic text-white/45">Eén partner.</span>
                </h1>
                <p className="hv hv-3 text-white/55 text-lg lg:text-xl font-extralight tracking-wide leading-relaxed max-w-xl mb-12">
                  Systemen op maat voor bedrijven die vastlopen in standaardpakketten, met websites en
                  digitale processen als fundament. Marketing en beeld sluiten daarop aan — via één
                  aanspreekpunt dat jouw verhaal van binnen kent.
                </p>
                <div className="hv hv-4 flex flex-col sm:flex-row gap-4">
                  <Link href="/contact"
                    className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-black text-[11px] tracking-[0.25em] font-medium hover:bg-white/85 transition-all duration-300">
                    START EEN PROJECT
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/portfolio"
                    className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/15 text-white/70 text-[11px] tracking-[0.25em] font-light hover:border-white/40 hover:text-white transition-all duration-300">
                    BEKIJK ONS WERK
                  </Link>
                </div>
              </div>

              {/* coded spectrum: onze diensten → 1 partner */}
              <div className="lg:col-span-5 hv hv-4">
                <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-5 lg:p-6 overflow-hidden">
                  <div className="relative flex items-center justify-between mb-5">
                    <span className="text-white/45 text-[9px] tracking-[0.3em] font-light">ONZE DIENSTEN</span>
                    <span className="text-white/25 text-[9px] tracking-[0.25em] font-light">ÉÉN PARTNER</span>
                  </div>
                  <div className="relative w-full" style={{ aspectRatio: "5 / 4" }}>
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      {SPECTRUM.map((c, i) => {
                        const y = [16, 38, 62, 84][i];
                        return (
                          <g key={i}>
                            <path d={`M14 ${y} C 38 ${y}, 44 50, 72 50`} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                            <path d={`M14 ${y} C 38 ${y}, 44 50, 72 50`} fill="none" stroke={c} strokeWidth="1.5" strokeDasharray="2 9" strokeLinecap="round" vectorEffect="non-scaling-stroke" className="spec-dash" style={{ animationDelay: `${i * 0.35}s` }} />
                          </g>
                        );
                      })}
                    </svg>

                    {DISCIPLINES.map((d, i) => (
                      <div key={i} className="absolute -translate-y-1/2 flex items-center gap-1.5" style={{ left: "4%", top: `${[16, 38, 62, 84][i]}%` }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: d.color }} />
                        <span className="text-white/50 text-[8px] tracking-wide whitespace-nowrap">{d.title}</span>
                      </div>
                    ))}

                    <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: "72%", top: "50%" }}>
                      <div className="spec-hub flex flex-col items-center justify-center w-[92px] h-[92px] rounded-full border border-white/20 bg-[#0a0a0a]">
                        <span className="text-white text-[11px] tracking-[0.15em] font-light">DYNIQUE</span>
                        <span className="text-white/35 text-[7.5px] tracking-wide mt-0.5">één partner</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DISCIPLINES ─────────────────────────────────── */}
        <section className="relative px-6 lg:px-12 py-20 lg:py-28 border-t border-white/[0.06]">
          <div className="container mx-auto">
            <div className="max-w-3xl anim mb-12 lg:mb-16">
              <p className="text-white/30 text-[10px] tracking-[0.5em] font-light mb-5">WAT WE DOEN</p>
              <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.12]">
                Maatwerk software als fundament,
                <span className="text-white/45 italic"> de rest sluit erop aan.</span>
              </h2>
            </div>

            <div className="anim border-t border-white/[0.08]">
              {DISCIPLINES.map((d, i) => {
                const isOpen = openDisc === i;
                return (
                  <div key={d.n} className="border-b border-white/[0.08]">
                    <h3 className="contents">
                      <button
                        type="button"
                        onClick={() => setOpenDisc(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                        aria-controls={`disc-panel-${d.n}`}
                        className="group w-full flex items-center gap-5 lg:gap-9 py-7 lg:py-9 text-left"
                      >
                        <span className="text-white/25 text-xs lg:text-sm font-light tracking-[0.2em] w-6 lg:w-8 flex-shrink-0">{d.n}</span>
                        <span
                          aria-hidden
                          className="w-2 h-2 rounded-full flex-shrink-0 transition-transform duration-300"
                          style={{ background: d.color, transform: isOpen ? "scale(1.35)" : "scale(1)" }}
                        />
                        <span className="flex-1 min-w-0">
                          <span className="block text-white text-xl lg:text-3xl font-extralight tracking-[0.05em] group-hover:text-white/85 transition-colors duration-300">
                            {d.title}
                          </span>
                          <span className={`block text-white/45 text-sm lg:text-base font-extralight italic tracking-wide mt-1.5 grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"}`}>
                            <span className="overflow-hidden">{d.tagline}</span>
                          </span>
                        </span>
                        <svg
                          className={`w-4 h-4 text-white/35 flex-shrink-0 transition-transform duration-400 ${isOpen ? "rotate-45" : ""}`}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </h3>

                    <div
                      id={`disc-panel-${d.n}`}
                      className="disc-panel grid"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                      aria-hidden={!isOpen}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-8 lg:pb-10 pl-11 lg:pl-[4.75rem] pr-4 lg:pr-16 max-w-2xl">
                          <p className="text-white/60 text-sm lg:text-base font-light leading-[1.8] tracking-wide mb-6">{d.desc}</p>
                          <div className="flex flex-wrap items-center gap-y-2 mb-7 text-white/40 text-[11px] tracking-wide font-light">
                            {d.keys.map((k, ki) => (
                              <span key={k}>{k}{ki < d.keys.length - 1 && <span className="mx-2 opacity-40">·</span>}</span>
                            ))}
                          </div>
                          <Link href={d.href}
                            tabIndex={isOpen ? undefined : -1}
                            className="group/link inline-flex items-center gap-2 text-[10px] tracking-[0.3em] font-light transition-colors duration-300"
                            style={{ color: d.color }}>
                            BEKIJK DIENST
                            <svg className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="anim mt-10 lg:mt-12 pt-8 border-t border-white/[0.06] flex flex-wrap items-center gap-x-3 gap-y-3">
              <span className="text-white/35 text-[10px] tracking-[0.3em] font-light">MAATWERK SOFTWARE PER SECTOR</span>
              <div className="flex flex-wrap items-center text-[12px] font-light tracking-wide">
                {SECTOR_LINKS.map((s, i) => (
                  <span key={s.href} className="flex items-center">
                    <Link href={s.href}
                      className="text-white/55 hover:text-[#d4a574] underline decoration-white/20 hover:decoration-[#d4a574]/60 underline-offset-4 transition-colors duration-300">
                      {s.label}
                    </Link>
                    {i < SECTOR_LINKS.length - 1 && <span className="mx-2 text-white/20">·</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SOFTWARE ALS FUNDAMENT ──────────────────────── */}
        <section className="relative px-6 lg:px-12 py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(212,165,116,0.08) 0%, transparent 60%)" }} />
          <div className="container mx-auto relative">
            <div className="max-w-4xl mx-auto text-center anim">
              <div className="w-10 h-px bg-[#d4a574]/60 mx-auto mb-8" />
              <h2 className="text-3xl lg:text-[52px] font-extralight text-white tracking-[0.01em] leading-[1.15] mb-7">
                Eén team, dezelfde aanpak,
                <br />
                <span className="italic text-[#d4a574]/90">over alle diensten heen.</span>
              </h2>
              <p className="text-white/55 text-lg font-light leading-relaxed tracking-wide max-w-2xl mx-auto">
                Maatwerk software is het startpunt: een systeem gebouwd rondom hoe jouw bedrijf al werkt.
                Waar het slim is, sluiten website, marketing en beeld erop aan — vanuit hetzelfde team en
                dezelfde technische aanpak, zonder dat je met losse partijen hoeft te schakelen.
              </p>
            </div>
          </div>
        </section>

        {/* ── PROCESS ─────────────────────────────────────── */}
        <section className="relative px-6 lg:px-12 py-20 lg:py-28 border-t border-white/[0.06]">
          <div className="container mx-auto">
            <div className="max-w-3xl anim mb-12">
              <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.12]">
                Van eerste gesprek
                <span className="text-white/45 italic"> tot live en door.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">
              {PROCESS.map((s, i) => (
                <div key={s.n} className="bg-[#070707] p-7 lg:p-8 anim group/step relative overflow-hidden" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="absolute top-0 left-0 h-px w-0 group-hover/step:w-full transition-all duration-700 bg-white/30" />
                  <div className="flex items-baseline gap-3 mb-5">
                    <span className="text-2xl font-extralight text-white/80">{s.n}</span>
                    <div className="flex-1 h-px bg-white/[0.08]" />
                  </div>
                  <h3 className="text-white text-[13px] tracking-[0.2em] font-light mb-2.5 uppercase">{s.t}</h3>
                  <p className="text-white/50 text-sm font-light leading-relaxed tracking-wide">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────── */}
        <section className="relative px-6 lg:px-12 py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 80% 30%, rgba(251,191,36,0.08) 0%, transparent 55%)" }} />
          <div className="container mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="anim">
                <h2 className="text-4xl lg:text-6xl font-extralight text-white tracking-[0.04em] leading-[1.05] mb-6">
                  Eén idee.
                  <br />
                  <span className="italic text-white/55">Eén partner.</span>
                </h2>
                <p className="text-white/50 text-base font-light leading-relaxed tracking-wide max-w-md">
                  Vertel ons wat je voor ogen hebt. We denken vrijblijvend mee en zeggen eerlijk wat het beste past.
                </p>
              </div>
              <div className="anim delay-1 flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-black text-[11px] tracking-[0.25em] font-medium hover:bg-white/85 transition-all duration-300">
                  PLAN EEN GESPREK
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/over-ons"
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/15 text-white/60 text-[11px] tracking-[0.25em] font-light hover:border-white/40 hover:text-white transition-all duration-300">
                  OVER ONS
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .anim { opacity: 0; transform: translateY(32px); transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1); will-change: opacity, transform; }
        .anim.animate-in { opacity: 1; transform: translateY(0); }
        .anim.delay-1 { transition-delay: 0.12s; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: none; } }
        .hv { opacity: 0; animation: fadeUp 0.95s cubic-bezier(0.16,1,0.3,1) forwards; }
        .hv-1 { animation-delay: 0.05s; } .hv-2 { animation-delay: 0.18s; } .hv-3 { animation-delay: 0.32s; } .hv-4 { animation-delay: 0.46s; }
        @keyframes specDash { to { stroke-dashoffset: -22; } }
        .spec-dash { animation: specDash 1.4s linear infinite; }
        @keyframes specPulse { 0%,100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.18), inset 0 0 16px rgba(255,255,255,0.05); } 50% { box-shadow: 0 0 26px 2px rgba(255,255,255,0.12), inset 0 0 20px rgba(255,255,255,0.08); } }
        .spec-hub { animation: specPulse 3.4s ease-in-out infinite; }
        .disc-panel { transition: grid-template-rows 0.5s cubic-bezier(0.16,1,0.3,1); }
        @media (prefers-reduced-motion: reduce) {
          .anim { opacity: 1; transform: none; transition: none; }
          .hv { opacity: 1; animation: none; }
          .spec-dash, .spec-hub { animation: none; }
          .disc-panel { transition: none; }
        }
      `}</style>
    </>
  );
}
