"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ACCENT, useRevealOnScroll, ProcessStyles } from "@/components/processen/Visuals";
import CompareTable from "@/components/CompareTable";
import FaqSection, { faqJsonLd } from "@/components/FaqSection";
import SocialProofSection from "@/components/SocialProofSection";
import LeadFormSection from "@/components/LeadFormSection";

const SIGNS = [
  { k: "MEERDERE VERSIES", v: "Verschillende collega's werken in hun eigen kopie — niemand weet zeker welke de actuele is." },
  { k: "FORMULES DIE BREKEN", v: "Eén verplaatste cel of verwijderde rij en een formule ergens anders klopt ineens niet meer." },
  { k: "GEEN TOEGANG ONDERWEG", v: "Het bestand staat op één laptop of gedeelde schijf — niet mobiel, niet beschikbaar in het veld." },
  { k: "HANDMATIG OVERTIKKEN", v: "Gegevens die al ergens anders staan, worden opnieuw ingevoerd — foutgevoelig en tijdrovend." },
];

const COMPARE = [
  {
    head: "EXCEL",
    sub: "Een spreadsheet, geen systeem",
    points: [
      "Werkt met losse bestanden, niet met één centrale bron van waarheid",
      "Elke uitzondering in het proces vraagt weer een nieuwe formule of tabblad",
      "Geen automatische koppeling met de systemen die je al gebruikt",
      "Kwetsbaar voor menselijke fouten die niemand tijdig opmerkt",
    ],
    dim: true,
  },
  {
    head: "MAATWERK VAN DYNIQUE",
    sub: "Software op code, gebouwd rondom jullie proces",
    points: [
      "Eén centrale plek waar iedereen met dezelfde, actuele data werkt",
      "Gebouwd om de uitzonderingen in jullie proces aan te kunnen, niet om erop stuk te lopen",
      "Koppelt waar nodig met je boekhouding of andere bestaande systemen",
      "Minder ruimte voor fouten, meer tijd voor het werk zelf",
    ],
    dim: false,
  },
];

const SECTORS = [
  { t: "Bouw", d: "Werkbonnen, uren, planning & facturatie.", href: "/maatwerk-software/bouw" },
  { t: "Installatiebedrijven", d: "Mobiele bonnen, planning & onderhoud.", href: "/maatwerk-software/installatiebedrijf" },
  { t: "Zorg", d: "Roosters, dossiers & rapportage, AVG-proof.", href: "/maatwerk-software/zorg" },
  { t: "Logistiek & transport", d: "Ritplanning, track & trace & voorraad.", href: "/maatwerk-software/logistiek" },
  { t: "Horeca", d: "Reserveringen, personeelsplanning & voorraad.", href: "/maatwerk-software/horeca" },
  { t: "Detailhandel", d: "Voorraad, klantenbeheer & verkoopinzicht.", href: "/maatwerk-software/detailhandel" },
  { t: "Agrarisch", d: "Teeltregistratie, planning & documentatie.", href: "/maatwerk-software/agrarisch" },
];

const FAQ = [
  {
    q: "Wat kost het om Excel te vervangen door maatwerk software?",
    a: "Dat hangt sterk af van de omvang van je bedrijf, het aantal gebruikers en hoe complex je processen zijn. Een kleine, gerichte tool begint rond de €4.000; grotere bedrijfssoftware met meerdere gebruikers en koppelingen loopt vaak op tot €15.000–€35.000 of meer. Na de gratis procesanalyse op locatie krijg je een concreet voorstel met een vaste prijs voor jullie situatie.",
  },
  {
    q: "Moet alles in één keer overgezet worden, of kan een deel van onze Excel-sheets blijven bestaan?",
    a: "Dat hoeft niet in één keer. Tijdens de procesanalyse kijken we samen welke sheets écht knellen en waar de grootste winst zit — dat hoeft niet meteen alles te zijn. Soms is het slimmer om te beginnen bij het proces dat de meeste tijd of fouten kost, en van daaruit verder te bouwen.",
  },
  {
    q: "Voor welke bedrijven of sectoren geldt dit het meest?",
    a: "Eigenlijk voor elk bedrijf dat is uitgegroeid uit een spreadsheet die ooit klein begon. We zien het patroon het vaakst terug bij bouw, installatiebedrijven, zorg en logistiek — sectoren waar werkbonnen, planning of rapportages nog vaak in Excel leven — maar het geldt net zo goed daarbuiten.",
  },
  {
    q: "Wat als na de procesanalyse blijkt dat maatwerk niet de beste oplossing is?",
    a: "Dan zeggen we dat gewoon eerlijk. De procesanalyse is gratis en vrijblijvend — je krijgt sowieso inzicht in waar tijd en betrouwbaarheid weglekt, ook als de conclusie is dat een bestaand pakket of een eenvoudigere aanpassing voor jullie beter past.",
  },
];

export default function ExcelVervangenPage() {
  useRevealOnScroll();
  const jsonLd = faqJsonLd(FAQ);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header variant="light" />

      <main className="relative bg-[#070707] overflow-hidden">
        {/* Ambient orbs */}
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
              <span className="text-white/60">EXCEL VERVANGEN DOOR SOFTWARE</span>
            </nav>

            <div className="max-w-3xl">
              <div className="anim delay-1 flex items-center gap-3 mb-8">
                <div className="w-12 h-px" style={{ background: ACCENT }} />
                <p className="text-white/45 text-[10px] tracking-[0.5em] font-light">PIJNPUNT · EXCEL VOORBIJ</p>
              </div>
              <h1 className="anim delay-2 text-[clamp(38px,6.2vw,78px)] font-extralight text-white tracking-[0.02em] leading-[1.05] mb-8">
                Excel voelde als grip.
                <br />
                <span className="italic" style={{ color: ACCENT }}>Nu is het de rem.</span>
              </h1>
              <p className="anim delay-3 text-white/55 text-lg lg:text-xl font-extralight tracking-wide leading-relaxed max-w-xl mb-12">
                Op een gegeven moment past je bedrijf niet meer in cellen en formules. Wij bouwen maatwerk
                software die overneemt waar Excel achterblijft — gebouwd rondom hoe jullie werken, niet
                rondom een spreadsheet.
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

        {/* ── HERKENBAAR? ──────────────────────────────────── */}
        <section className="relative px-6 lg:px-12 py-20 lg:py-28 border-t border-white/[0.06]">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5 anim">
                <p className="text-[10px] tracking-[0.5em] font-light mb-6" style={{ color: ACCENT }}>HERKENBAAR?</p>
                <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.12]">
                  Van handig hulpmiddel
                  <span className="text-white/45 italic"> tot dagelijkse rem.</span>
                </h2>
              </div>
              <div className="lg:col-span-7 anim delay-1 space-y-6 text-white/55 text-lg font-light leading-[1.8] tracking-wide max-w-2xl">
                <p>
                  Het begon als iets handigs: één simpel bestand om overzicht te houden. Inmiddels zijn het
                  tientallen tabbladen, formules die niemand meer durft aan te passen, en een bestand dat
                  eigenlijk alleen jij — of één collega — nog echt begrijpt.
                </p>
                <p>
                  Iedereen werkt in zijn eigen kopie. Versies raken uit sync, cijfers kloppen niet meer met
                  elkaar, en een simpele wijziging in het ene tabblad breekt een formule drie tabbladen verderop.
                </p>
                <p className="text-white/80">
                  Excel is niet het probleem — het is een prima hulpmiddel voor waar het voor bedoeld is. Het
                  probleem is dat een groeiend bedrijf er processen in probeert te proppen die het nooit heeft
                  moeten dragen.
                </p>
              </div>
            </div>

            <div className="mt-14 anim delay-1">
              <p className="text-white/30 text-[10px] tracking-[0.5em] font-light mb-5">DE SIGNALEN</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">
                {SIGNS.map((c) => (
                  <div key={c.k} className="bg-[#070707] px-7 py-9 relative overflow-hidden">
                    <p className="relative text-[10px] tracking-[0.4em] font-light mb-3" style={{ color: ACCENT }}>{c.k}</p>
                    <p className="relative text-white/55 text-sm font-light leading-relaxed tracking-wide">{c.v}</p>
                  </div>
                ))}
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
                Geen spreadsheet.{" "}
                <span className="italic" style={{ color: ACCENT }}>Eén systeem dat meewerkt.</span>
              </h2>
              <p className="text-white/50 text-base font-light leading-relaxed tracking-wide max-w-xl mx-auto">
                Maatwerk, volledig op code, gebouwd om jullie werk makkelijker te maken — niet om nog een tabblad toe te voegen.
              </p>
            </div>
            <CompareTable columns={COMPARE} accent={ACCENT} />
          </div>
        </section>

        {/* ── SECTOREN ─────────────────────────────────────── */}
        <section className="relative px-6 lg:px-12 py-20 lg:py-28 border-t border-white/[0.06]">
          <div className="container mx-auto">
            <div className="max-w-3xl anim mb-12">
              <p className="text-white/30 text-[10px] tracking-[0.5em] font-light mb-5">WAAR WE DIT HET VAAKST ZIEN</p>
              <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.12]">
                Herkenbaar in
                <span className="text-white/45 italic"> deze sectoren.</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">
              {SECTORS.map((s, i) => (
                <Link key={s.href} href={s.href}
                  className="group bg-[#070707] p-7 lg:p-8 anim relative overflow-hidden" style={{ transitionDelay: `${i * 0.07}s` }}>
                  <div className="absolute top-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700" style={{ background: ACCENT }} />
                  <h3 className="text-white text-base font-light tracking-wide mb-2.5">{s.t}</h3>
                  <p className="text-white/45 text-sm font-light leading-relaxed tracking-wide mb-6">{s.d}</p>
                  <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] font-light" style={{ color: ACCENT }}>
                    BEKIJK
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
            <p className="anim mt-6 text-white/55 text-sm font-light tracking-wide">
              Andere sector? Geen probleem — het patroon "uitgegroeid uit Excel" zien we in vrijwel elke branche.
            </p>
          </div>
        </section>

        <SocialProofSection accent={ACCENT} />
        <FaqSection faq={FAQ} accent={ACCENT} />
        <LeadFormSection
          accent={ACCENT}
          openingLine="Hi! Wij willen onze Excel-sheets vervangen door maatwerk software en een gratis procesanalyse op locatie aanvragen."
          messagePrompt="Welke Excel-sheets of processen lopen bij jullie vast?"
        />
      </main>

      <Footer />
      <ProcessStyles />
    </>
  );
}
