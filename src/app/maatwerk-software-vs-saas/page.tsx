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
    head: "SAAS-ABONNEMENT",
    sub: "Gebouwd voor de gemiddelde gebruiker",
    points: [
      "Snel te starten, maar het proces moet zich naar de software voegen",
      "Licentiekosten die met elke extra gebruiker meestijgen, jaar na jaar",
      "Functies die je niet gebruikt, workarounds voor functies die ontbreken",
      "Je bent afhankelijk van de roadmap en keuzes van een externe leverancier",
    ],
    dim: true,
  },
  {
    head: "MAATWERK VAN DYNIQUE",
    sub: "Software op code, gebouwd rondom jullie proces",
    points: [
      "De software voegt zich naar hoe jullie al werken, niet andersom",
      "Eigen software — geen eindeloze per-gebruiker licentiekosten",
      "Precies de functies die jullie proces nodig heeft, niets meer",
      "Jullie bepalen de richting, geen externe roadmap die verandert zonder jullie",
    ],
    dim: false,
  },
];

const WHEN = [
  {
    t: "Kies eerder SaaS als…",
    d: "je proces vrij standaard is, je snel wilt starten, of het budget voor een maatwerktraject er nu nog niet is. Voor generieke taken (mail, boekhouding, planning zonder bijzonderheden) is een goed SaaS-pakket vaak gewoon de slimste keuze.",
  },
  {
    t: "Kies eerder maatwerk als…",
    d: "je merkt dat je constant om een SaaS-tool heen werkt in plaats van ermee, als losse spreadsheets en work-arounds het gat dichten dat de software laat vallen, of als de licentiekosten bij groei harder stijgen dan de waarde die het nog oplevert.",
  },
];

const FAQ = [
  {
    q: "Is maatwerk software altijd beter dan een SaaS-abonnement?",
    a: "Nee, en dat zeggen we liever eerlijk dan verkopen we het anders. Voor generieke taken is een goed SaaS-pakket vaak sneller en goedkoper. Maatwerk wordt de betere keuze zodra jullie proces specifiek genoeg is dat je merkt dat je om de software heen werkt in plaats van ermee.",
  },
  {
    q: "Wat kost maatwerk software vergeleken met een SaaS-abonnement?",
    a: "SaaS rekent per gebruiker per maand, dus de kosten stijgen mee met je team. Maatwerk is een eenmalige ontwikkelinvestering — een kleine, gerichte tool begint rond de €4.000, grotere bedrijfssoftware loopt vaak op tot €15.000–€35.000 of meer, afhankelijk van omvang en complexiteit. Op langere termijn en bij meer gebruikers kan dat voordeliger uitpakken, maar dat hangt echt van je situatie af — dat rekenen we samen door na de procesanalyse.",
  },
  {
    q: "Kan maatwerk software koppelen met de SaaS-tools die we al gebruiken?",
    a: "In veel gevallen wel. Maatwerk hoeft geen alles-of-niets-keuze te zijn — we bouwen regelmatig software die specifiek de gaten opvult die jullie huidige SaaS-tools laten vallen, met een koppeling naar wat al goed werkt.",
  },
  {
    q: "Wat als na de procesanalyse blijkt dat een SaaS-oplossing beter past?",
    a: "Dan zeggen we dat gewoon. De procesanalyse is gratis en vrijblijvend — ons doel is dat jullie de juiste keuze maken, niet per se dat we iets bouwen.",
  },
];

export default function MaatwerkVsSaasPage() {
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
              <span className="text-white/60">MAATWERK SOFTWARE VS. SAAS</span>
            </nav>

            <div className="max-w-3xl">
              <div className="anim delay-1 flex items-center gap-3 mb-8">
                <div className="w-12 h-px" style={{ background: ACCENT }} />
                <p className="text-white/45 text-[10px] tracking-[0.5em] font-light">VERGELIJKING · MAATWERK VS. SAAS</p>
              </div>
              <h1 className="anim delay-2 text-[clamp(38px,6vw,74px)] font-extralight text-white tracking-[0.02em] leading-[1.06] mb-8">
                SaaS lost het meeste op.
                <br />
                <span className="italic" style={{ color: ACCENT }}>Maatwerk lost het jouwe op.</span>
              </h1>
              <p className="anim delay-3 text-white/55 text-lg lg:text-xl font-extralight tracking-wide leading-relaxed max-w-xl mb-12">
                Geen van beide is per definitie beter. SaaS is gebouwd voor de gemiddelde gebruiker —
                snel te starten, generiek van opzet. Maatwerk is gebouwd voor jullie specifieke proces.
                Hieronder een eerlijke vergelijking, niet een verkooppraatje.
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
                Twee echt verschillende
                <span className="italic" style={{ color: ACCENT }}> manieren van bouwen.</span>
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
          openingLine="Hi! Ik twijfel tussen SaaS en maatwerk software voor mijn bedrijf en wil hier graag over sparren, incl. een gratis procesanalyse op locatie."
          messagePrompt="Welke SaaS-tool(s) gebruiken jullie nu, en waar knelt het?"
        />
      </main>

      <Footer />
      <ProcessStyles />
    </>
  );
}
