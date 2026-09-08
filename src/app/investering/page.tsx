"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GOLD = "#d4a574";

const FACTORS = [
  { t: "Aantal koppelingen", d: "Praat je systeem met 1 ander systeem, of met 5? Elke koppeling is eigen werk." },
  { t: "Gebruikers & rollen", d: "Eén simpele workflow is iets anders dan meerdere rollen met eigen rechten en schermen." },
  { t: "Bestaande data", d: "Beginnen we blanco, of migreren we jaren aan data uit een oud systeem?" },
  { t: "Onderhoud na livegang", d: "Eenmalig opgeleverd, of een vast aantal supporturen per maand?" },
];

const INCLUDED = [
  { t: "Gratis intake", d: "Een kennismakingsgesprek waarin we je situatie in kaart brengen — zonder verplichtingen." },
  { t: "Vaste prijs per fase", d: "Zodra de scope van een fase helder is, krijg je daar een vast bedrag voor. Geen nacalculatie." },
  { t: "Drie revisierondes", d: "Standaard onderdeel van elke opleverfase, geen los te betalen extra's." },
  { t: "Eén aanspreekpunt", d: "Je regelt alles met degene die het ook bouwt — geen accountmanager die moet doorschakelen." },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Investering",
      url: "https://dynique.nl/investering",
      description: "Wat een website of maatwerk softwaretraject bij Dynique kost — eerlijk en zonder verborgen prijstabel.",
      inLanguage: "nl-NL",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
        { "@type": "ListItem", position: 2, name: "Investering", item: "https://dynique.nl/investering" },
      ],
    },
  ],
};

export default function InvesteringPage() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      document.querySelectorAll(".anim").forEach((el) => el.classList.add("animate-in"));
      return;
    }
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
        <div className="absolute top-[6%] -right-40 w-[620px] h-[620px] rounded-full pointer-events-none z-0"
          style={{ background: `radial-gradient(circle, ${GOLD}1c 0%, transparent 65%)`, filter: "blur(70px)" }} />
        <div className="absolute bottom-[8%] -left-40 w-[540px] h-[540px] rounded-full pointer-events-none z-0"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 65%)", filter: "blur(70px)" }} />

        {/* ── HERO ───────────────────────────────────────── */}
        <section className="relative px-6 lg:px-12 pt-36 pb-16 lg:pt-44 lg:pb-20">
          <div className="container mx-auto relative z-10 max-w-3xl">
            <div className="anim flex items-center gap-3 mb-8">
              <div className="w-12 h-px" style={{ background: GOLD }} />
              <p className="text-white/45 text-[10px] tracking-[0.5em] font-light">INVESTERING</p>
            </div>
            <h1 className="anim delay-1 text-[clamp(36px,6vw,72px)] font-extralight text-white tracking-[0.02em] leading-[1.08] mb-8">
              Wat kost maatwerk software?
            </h1>
            <p className="anim delay-2 text-white/55 text-lg font-extralight tracking-wide leading-relaxed">
              Geen &quot;vanaf €99&quot;-marketing, geen verborgen prijstabel. Twee eerlijke antwoorden, afhankelijk
              van wat je nodig hebt.
            </p>
          </div>
        </section>

        {/* ── TWEE TRAJECTEN ────────────────────────────────── */}
        <section className="relative px-6 lg:px-12 py-16 lg:py-20 border-t border-white/[0.06]">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] max-w-5xl mx-auto">
              <div className="anim bg-[#0a0a0a] p-8 lg:p-10">
                <p className="text-white/40 text-[10px] tracking-[0.4em] font-light uppercase mb-4">Website &amp; platformen</p>
                <p className="text-3xl lg:text-4xl font-extralight text-white tracking-[0.01em] mb-4">vanaf €3.500</p>
                <p className="text-white/55 text-sm font-light leading-relaxed tracking-wide">
                  Een gemiddelde website begint bij ons rond dit bedrag. De uiteindelijke investering hangt af van
                  omvang en functionaliteit — een webshop start hoger. Je weet dit na de intake, niet pas bij de
                  factuur.
                </p>
              </div>
              <div className="anim delay-1 bg-[#0a0a0a] p-8 lg:p-10">
                <p className="text-white/40 text-[10px] tracking-[0.4em] font-light uppercase mb-4">Maatwerk software</p>
                <p className="text-3xl lg:text-4xl font-extralight tracking-[0.01em] mb-4" style={{ color: GOLD }}>
                  vanaf €4.000
                </p>
                <p className="text-white/55 text-sm font-light leading-relaxed tracking-wide">
                  Een kleine, gerichte tool begint hier. Grotere bedrijfssoftware met meerdere gebruikers en
                  koppelingen loopt vaak op tot €15.000–€35.000 of meer — dat hangt echt af van omvang,
                  gebruikers en complexiteit. Na een gratis intake, waarin we scope, techniek en risico&apos;s in
                  kaart brengen, krijg je een vaste prijs per fase.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WAT BEPAALT DE PRIJS ──────────────────────────── */}
        <section className="relative px-6 lg:px-12 py-16 lg:py-20 border-t border-white/[0.06]">
          <div className="container mx-auto max-w-5xl">
            <h2 className="anim text-2xl lg:text-3xl font-extralight text-white tracking-[0.02em] leading-[1.2] mb-10">
              Wat bepaalt de prijs<span className="text-white/45 italic"> van een maatwerktraject.</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
              {FACTORS.map((f, i) => (
                <div key={f.t} className="anim flex items-start gap-4" style={{ transitionDelay: `${i * 0.06}s` }}>
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: GOLD }} />
                  <div>
                    <h3 className="text-white text-sm font-light tracking-wide mb-1.5">{f.t}</h3>
                    <p className="text-white/50 text-sm font-light leading-relaxed tracking-wide">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WAT ZIT ER ALTIJD IN ──────────────────────────── */}
        <section className="relative px-6 lg:px-12 py-16 lg:py-20 border-t border-white/[0.06]">
          <div className="container mx-auto max-w-5xl">
            <h2 className="anim text-2xl lg:text-3xl font-extralight text-white tracking-[0.02em] leading-[1.2] mb-10">
              Wat zit er<span className="text-white/45 italic"> altijd in de prijs.</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]">
              {INCLUDED.map((item, i) => (
                <div key={item.t} className="anim bg-[#0a0a0a] flex items-start gap-4 p-7" style={{ transitionDelay: `${i * 0.06}s` }}>
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke={GOLD} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="text-white text-sm font-light tracking-wide mb-1.5">{item.t}</h3>
                    <p className="text-white/50 text-sm font-light leading-relaxed tracking-wide">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────── */}
        <section className="relative px-6 lg:px-12 py-20 lg:py-28 border-t border-white/[0.06] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 50% 50%, ${GOLD}10 0%, transparent 60%)` }} />
          <div className="container mx-auto relative max-w-3xl text-center anim">
            <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.15] mb-6">
              Benieuwd wat jouw project
              <br />
              <span className="italic" style={{ color: GOLD }}>ongeveer zou kosten?</span>
            </h2>
            <p className="text-white/55 text-base lg:text-lg font-light leading-relaxed tracking-wide max-w-xl mx-auto mb-10">
              De gratis intake is vrijblijvend. Je krijgt een eerlijke inschatting, ook als het antwoord is dat je
              (nog) niets hoeft te laten bouwen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-black text-xs tracking-[0.25em] font-light hover:bg-white/90 transition-all duration-300">
                PLAN EEN GESPREK
              </Link>
              <Link href="/blog/wat-kost-een-website"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/20 text-white text-xs tracking-[0.25em] font-light hover:border-white/50 hover:bg-white/5 transition-all duration-300">
                LEES DE VOLLEDIGE PRIJSGIDS
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .anim { opacity: 0; transform: translateY(28px); transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1); }
        .anim.animate-in { opacity: 1; transform: translateY(0); }
        .anim.delay-1 { transition-delay: 0.12s; }
        .anim.delay-2 { transition-delay: 0.24s; }
        @media (prefers-reduced-motion: reduce) {
          .anim { opacity: 1; transform: none; transition: none; }
        }
      `}</style>
    </>
  );
}
