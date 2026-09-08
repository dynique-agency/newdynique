"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ACCENT, useRevealOnScroll, ProcessStyles } from "@/components/processen/Visuals";
import FaqSection, { faqJsonLd } from "@/components/FaqSection";
import SocialProofSection from "@/components/SocialProofSection";
import LeadFormSection from "@/components/LeadFormSection";

const SCENARIOS = [
  {
    n: "01",
    t: "Een kleine, gerichte tool",
    price: "vanaf €4.000",
    d: "Eén specifiek proces vervangen — bijvoorbeeld een digitaal formulier of een enkele werkstroom — met een klein team en meestal geen of één koppeling.",
  },
  {
    n: "02",
    t: "Bedrijfssoftware voor een team",
    price: "circa €15.000",
    d: "Meerdere processen samengebracht in één systeem, meerdere gebruikers met eigen rollen, en een koppeling met bijvoorbeeld je boekhouding.",
  },
  {
    n: "03",
    t: "Grotere bedrijfssoftware",
    price: "vanaf €35.000",
    d: "Meerdere afdelingen of rollen, meerdere koppelingen met bestaande systemen, en complexere logica — vaak inclusief migratie van bestaande data.",
  },
];

const FAQ = [
  {
    q: "Wat kost maatwerk software gemiddeld?",
    a: "Dat hangt sterk af van de omvang van je bedrijf, het aantal gebruikers en hoe complex je processen zijn. Een kleine, gerichte tool begint rond de €4.000; grotere bedrijfssoftware met meerdere gebruikers en koppelingen loopt vaak op tot €15.000–€35.000 of meer. De drie voorbeelden hierboven zijn illustratief, geen prijslijst — na de gratis procesanalyse op locatie krijg je een concreet voorstel met een vaste prijs voor jullie situatie.",
  },
  {
    q: "Waarom bestaat er geen vaste prijslijst voor maatwerk software?",
    a: "Omdat maatwerk per definitie gebouwd wordt rondom hoe jullie specifiek werken, niet rondom een standaard pakket. Het aantal gebruikers, koppelingen en de complexiteit van je processen bepalen samen de prijs — een tabel die voor elk bedrijf zou kloppen, zou eigenlijk geen maatwerk meer zijn.",
  },
  {
    q: "Zijn er ook lopende kosten na oplevering?",
    a: "Dat hangt af van wat je nodig hebt — denk aan hosting of eventuele doorontwikkeling. Dat bespreken we concreet in het voorstel na de procesanalyse, zodat je vooraf precies weet waar je aan toe bent, zonder verrassingen achteraf.",
  },
  {
    q: "Ik zoek eigenlijk een website, geen bedrijfssoftware — waar vind ik die prijzen?",
    a: "Websites en platformen hebben een andere prijsopbouw dan maatwerk bedrijfssoftware. Bekijk de eerlijke prijsgids op onze blog, of de investeringspagina voor een direct overzicht van beide.",
  },
];

export default function WatKostMaatwerkSoftwarePage() {
  useRevealOnScroll();
  const jsonLd = faqJsonLd(FAQ);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header variant="light" />

      <main className="relative bg-[#070707] overflow-hidden">
        <div className="absolute top-[4%] -right-40 w-[640px] h-[640px] rounded-full pointer-events-none z-0"
          style={{ background: `radial-gradient(circle, ${ACCENT}1f 0%, transparent 65%)`, filter: "blur(70px)" }} />
        <div className="absolute bottom-[6%] -left-40 w-[560px] h-[560px] rounded-full pointer-events-none z-0"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 65%)", filter: "blur(70px)" }} />

        {/* ── HERO ───────────────────────────────────────── */}
        <section className="relative min-h-[80vh] flex items-center px-6 lg:px-12">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "56px 56px" }} />

          <div className="container mx-auto relative z-10 pt-36 pb-20 lg:pt-40 lg:pb-24">
            <nav className="anim flex items-center gap-2 text-[10px] tracking-[0.3em] font-light text-white/30 mb-8">
              <Link href="/" className="hover:text-white/70 transition-colors">HOME</Link>
              <span className="text-white/15">/</span>
              <span className="text-white/60">WAT KOST MAATWERK SOFTWARE?</span>
            </nav>

            <div className="max-w-3xl">
              <div className="anim delay-1 flex items-center gap-3 mb-8">
                <div className="w-12 h-px" style={{ background: ACCENT }} />
                <p className="text-white/45 text-[10px] tracking-[0.5em] font-light">KOSTEN · MAATWERK SOFTWARE</p>
              </div>
              <h1 className="anim delay-2 text-[clamp(38px,6vw,74px)] font-extralight text-white tracking-[0.02em] leading-[1.06] mb-8">
                Wat kost maatwerk software?
                <br />
                <span className="italic" style={{ color: ACCENT }}>Een eerlijk antwoord, geen slogan.</span>
              </h1>
              <p className="anim delay-3 text-white/55 text-lg lg:text-xl font-extralight tracking-wide leading-relaxed max-w-xl mb-4">
                Geen &quot;vanaf €99&quot;-marketing en geen verborgen prijstabel. Maatwerk wordt gebouwd rondom
                hoe jullie specifiek werken, dus de prijs hangt af van omvang, gebruikers en complexiteit —
                hieronder leggen we precies uit hoe dat werkt.
              </p>
            </div>
          </div>
        </section>

        {/* ── DRIE VOORBEELDEN ─────────────────────────────── */}
        <section className="relative px-6 lg:px-12 py-20 lg:py-28 border-t border-white/[0.06]">
          <div className="container mx-auto">
            <div className="max-w-3xl anim mb-12">
              <p className="text-[10px] tracking-[0.5em] font-light mb-5" style={{ color: ACCENT }}>TER ILLUSTRATIE, GEEN PRIJSLIJST</p>
              <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.12]">
                Drie voorbeelden om
                <span className="text-white/45 italic"> een gevoel te geven.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]">
              {SCENARIOS.map((s) => (
                <div key={s.n} className="bg-[#070707] p-7 lg:p-9 anim">
                  <span className="text-2xl font-extralight" style={{ color: ACCENT }}>{s.n}</span>
                  <h3 className="text-white text-lg font-light tracking-wide mt-4 mb-2">{s.t}</h3>
                  <p className="text-white/80 text-xl font-extralight tracking-wide mb-4">{s.price}</p>
                  <p className="text-white/50 text-sm font-light leading-[1.8] tracking-wide">{s.d}</p>
                </div>
              ))}
            </div>
            <p className="anim mt-6 text-white/40 text-sm font-light tracking-wide italic">
              Illustratieve richtbedragen op basis van eerdere trajecten — geen offerte. De echte prijs volgt uit de gratis procesanalyse op locatie.
            </p>
          </div>
        </section>

        {/* ── WAAROM GEEN VASTE PRIJSLIJST ─────────────────── */}
        <section className="relative px-6 lg:px-12 py-20 lg:py-28 border-t border-white/[0.06]">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5 anim">
                <p className="text-[10px] tracking-[0.5em] font-light mb-6" style={{ color: ACCENT }}>EERLIJK VERHAAL</p>
                <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.12]">
                  Waarom er geen
                  <span className="text-white/45 italic"> vaste prijslijst is.</span>
                </h2>
              </div>
              <div className="lg:col-span-7 anim delay-1 space-y-6 text-white/55 text-lg font-light leading-[1.8] tracking-wide max-w-2xl">
                <p>
                  Een SaaS-abonnement heeft een prijslijst omdat iedereen dezelfde software krijgt. Maatwerk werkt
                  andersom: de software wordt gebouwd rondom hoe jullie specifiek werken, dus de prijs verschilt
                  per bedrijf — net als de prijs van een verbouwing verschilt per huis.
                </p>
                <p>
                  Wat de prijs concreet bepaalt: het aantal gebruikers en rollen, het aantal koppelingen met
                  systemen die je al gebruikt, of er bestaande data gemigreerd moet worden, en hoe complex de
                  onderliggende processen zijn.
                </p>
                <p className="text-white/80">
                  Daarom beginnen we altijd met een gratis, vrijblijvende procesanalyse op locatie — pas daarna
                  krijg je een concreet voorstel met een vaste prijs per fase, geen nacalculatie achteraf.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SocialProofSection accent={ACCENT} />
        <FaqSection faq={FAQ} accent={ACCENT} />
        <LeadFormSection
          accent={ACCENT}
          openingLine="Hi! Ik wil graag weten wat maatwerk software voor mijn bedrijf zou kosten, incl. een gratis procesanalyse op locatie."
          messagePrompt="Wat voor proces of systeem heb je in gedachten?"
        />
      </main>

      <Footer />
      <ProcessStyles />
    </>
  );
}
