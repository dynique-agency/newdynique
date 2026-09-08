"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ACCENT, useRevealOnScroll, ProcessStyles } from "@/components/processen/Visuals";
import CompareTable from "@/components/CompareTable";
import FaqSection, { faqJsonLd } from "@/components/FaqSection";
import SocialProofSection from "@/components/SocialProofSection";
import LeadFormSection from "@/components/LeadFormSection";

const COMPARE = [
  {
    head: "LOW-CODE PLATFORM",
    sub: "Snel bouwen binnen de grenzen van het platform",
    points: [
      "Snel op te zetten, ideaal voor een eerste prototype of eenvoudige interne tool",
      "Je bouwt binnen de mogelijkheden en grenzen van één platform",
      "Doorlopende platformlicentie die met gebruikers en gebruik meegroeit",
      "Bij vertrek van het platform blijft je software daar meestal achter",
    ],
    dim: true,
  },
  {
    head: "MAATWERK VAN DYNIQUE",
    sub: "Volledig eigen software, geen platformgrenzen",
    points: [
      "Vraagt een groter initieel traject dan een low-code prototype",
      "Geen platformgrenzen — de software kan alles wat jullie proces vraagt",
      "Eigen software, geen doorlopende platformlicentie",
      "Jullie zijn eigenaar van de code, niet afhankelijk van één leverancier",
    ],
    dim: false,
  },
];

const WHEN = [
  {
    t: "Kies eerder low-code als…",
    d: "je snel een eerste versie wilt testen, het om een eenvoudige interne tool gaat, of je proces goed binnen de standaardmogelijkheden van een platform past. Voor een snel prototype is low-code vaak een prima start.",
  },
  {
    t: "Kies eerder maatwerk als…",
    d: "je merkt dat je tegen de grenzen van het platform aanloopt, de licentiekosten flink oplopen naarmate je team of gebruik groeit, of je proces specifiek genoeg is dat het platform je meer in de weg zit dan dat het helpt.",
  },
];

const FAQ = [
  {
    q: "Is low-code goedkoper dan maatwerk software op code?",
    a: "Op korte termijn vaak wel — een low-code prototype staat sneller en met minder initiële investering. Op langere termijn kan dat kantelen: platformlicenties groeien mee met gebruikers en gebruik, terwijl maatwerk een eenmalige ontwikkelinvestering is zonder doorlopende platformkosten.",
  },
  {
    q: "Kan een low-code prototype later overgezet worden naar maatwerk software?",
    a: "Vaak wel als concept — de logica en het proces dat je in low-code hebt uitgedacht, kunnen als uitgangspunt dienen voor een maatwerktraject. De code zelf is meestal niet één-op-één over te zetten, omdat low-code platforms hun eigen onderliggende structuur gebruiken.",
  },
  {
    q: "Wat zijn de risico's van low-code platforms op de lange termijn?",
    a: "Het belangrijkste risico is platformafhankelijkheid: je bouwt binnen de grenzen en het prijsmodel van één externe leverancier. Verandert die het platform, de prijzen, of stopt de leverancier ermee, dan zit jouw software daar middenin.",
  },
  {
    q: "Wat als na de procesanalyse blijkt dat low-code beter bij ons past?",
    a: "Dan zeggen we dat gewoon eerlijk. De procesanalyse is gratis en vrijblijvend — ons doel is dat jullie de juiste keuze maken, niet per se dat we iets bouwen.",
  },
];

export default function LowCodeVsMaatwerkPage() {
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
        <section className="relative min-h-[86vh] flex items-center px-6 lg:px-12">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "56px 56px" }} />

          <div className="container mx-auto relative z-10 pt-36 pb-20 lg:pt-40 lg:pb-24">
            <nav className="anim flex items-center gap-2 text-[10px] tracking-[0.3em] font-light text-white/30 mb-8">
              <Link href="/" className="hover:text-white/70 transition-colors">HOME</Link>
              <span className="text-white/15">/</span>
              <span className="text-white/60">LOW-CODE VS. MAATWERK SOFTWARE</span>
            </nav>

            <div className="max-w-3xl">
              <div className="anim delay-1 flex items-center gap-3 mb-8">
                <div className="w-12 h-px" style={{ background: ACCENT }} />
                <p className="text-white/45 text-[10px] tracking-[0.5em] font-light">VERGELIJKING · LOW-CODE VS. MAATWERK</p>
              </div>
              <h1 className="anim delay-2 text-[clamp(38px,6vw,74px)] font-extralight text-white tracking-[0.02em] leading-[1.06] mb-8">
                Low-code bouwt snel.
                <br />
                <span className="italic" style={{ color: ACCENT }}>Maatwerk bouwt zonder grenzen.</span>
              </h1>
              <p className="anim delay-3 text-white/55 text-lg lg:text-xl font-extralight tracking-wide leading-relaxed max-w-xl mb-12">
                Low-code platforms zijn een prima uitgangspunt voor een snel prototype. Maatwerk software op
                code wordt de betere keuze zodra je proces groter of specifieker wordt dan het platform aankan.
                Hieronder een eerlijke vergelijking.
              </p>
              <div className="anim delay-4 flex flex-col sm:flex-row gap-4">
                <a href="#analyse"
                  className="group inline-flex items-center justify-center gap-3 px-10 py-4 text-black text-[11px] tracking-[0.25em] font-medium transition-all duration-300"
                  style={{ background: ACCENT }}>
                  GRATIS PROCESANALYSE OP LOCATIE
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="https://wa.me/31624572572" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/15 text-white/70 text-[11px] tracking-[0.25em] font-light hover:border-white/40 hover:text-white transition-all duration-300">
                  STEL JE VRAAG
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── VERGELIJKING ─────────────────────────────────── */}
        <section className="relative px-6 lg:px-12 py-20 lg:py-28 border-t border-white/[0.06] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 50% 30%, ${ACCENT}10 0%, transparent 60%)` }} />
          <div className="container mx-auto relative">
            <div className="max-w-3xl mx-auto text-center anim mb-12 lg:mb-14">
              <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.01em] leading-[1.12] mb-5">
                Snelheid nu,
                <span className="italic" style={{ color: ACCENT }}> of vrijheid op lange termijn.</span>
              </h2>
            </div>
            <CompareTable columns={COMPARE} accent={ACCENT} />
          </div>
        </section>

        {/* ── WANNEER KIES JE WAT ──────────────────────────── */}
        <section className="relative px-6 lg:px-12 py-20 lg:py-28 border-t border-white/[0.06]">
          <div className="container mx-auto">
            <div className="max-w-3xl anim mb-12">
              <p className="text-[10px] tracking-[0.5em] font-light mb-5" style={{ color: ACCENT }}>EERLIJK ADVIES</p>
              <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.12]">
                Wanneer kies je wat?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]">
              {WHEN.map((w, i) => (
                <div key={w.t} className="bg-[#070707] p-8 lg:p-10 anim" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <h3 className="text-white text-lg font-light tracking-wide mb-4">{w.t}</h3>
                  <p className="text-white/55 text-sm font-light leading-[1.8] tracking-wide">{w.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SocialProofSection accent={ACCENT} />
        <FaqSection faq={FAQ} accent={ACCENT} />
        <LeadFormSection
          accent={ACCENT}
          openingLine="Hi! Ik twijfel tussen een low-code platform en maatwerk software op code en wil hier graag over sparren, incl. een gratis procesanalyse op locatie."
          messagePrompt="Welk low-code platform overweeg je, of loop je er al tegenaan?"
        />
      </main>

      <Footer />
      <ProcessStyles />
    </>
  );
}
