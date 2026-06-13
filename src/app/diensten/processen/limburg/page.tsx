"use client";

import { useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ACCENT,
  BeforeScreen,
  AfterScreen,
  FlowDiagram,
  CostIcon,
  Field,
  ProcessStyles,
  useRevealOnScroll,
  useBeforeAfterScrub,
} from "@/components/processen/Visuals";

const CITIES = [
  "Maastricht", "Heerlen", "Sittard-Geleen", "Kerkrade", "Landgraaf",
  "Brunssum", "Valkenburg", "Meerssen", "Beek", "Stein", "Gulpen", "Vaals",
  "Roermond", "Weert",
];

export default function ProcessenLimburg() {
  const [form, setForm] = useState({ name: "", company: "", place: "", phone: "", message: "" });
  const scrubRef = useRef<HTMLDivElement>(null);

  useRevealOnScroll();
  useBeforeAfterScrub(scrubRef);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    let m = `Hi! Ik wil een gratis procesanalyse op locatie in Limburg aanvragen.\n\n`;
    m += `👤 Naam: ${form.name || "(niet ingevuld)"}\n`;
    if (form.company) m += `🏢 Bedrijf: ${form.company}\n`;
    if (form.place) m += `📍 Plaats: ${form.place}\n`;
    if (form.phone) m += `📞 Telefoon: ${form.phone}\n`;
    if (form.message) m += `\n📋 Waar loopt het vast:\n${form.message}\n`;
    window.open(`https://wa.me/31624572572?text=${encodeURIComponent(m)}`, "_blank");
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const costs = [
    { k: "TIJD", v: "Uren per week verdwijnen in handwerk en omwegen." },
    { k: "OVERZICHT", v: "Data staat verspreid over losse lijsten en systemen." },
    { k: "EFFICIËNTIE", v: "Het team werkt rond de software heen in plaats van ermee." },
    { k: "GELD", v: "Wat tijd kost, kost uiteindelijk ook marge." },
  ];

  const compare = [
    {
      head: "STANDAARDPAKKET",
      sub: "Off-the-shelf software",
      points: [
        "Jouw bedrijf vormt zich naar de software",
        "Functies die je niet gebruikt, missende functies die je wél nodig hebt",
        "Maandelijkse licenties die blijven stapelen",
        "Omwegen en losse lijstjes om de gaten te dichten",
      ],
      dim: true,
    },
    {
      head: "MAATWERK VAN DYNIQUE",
      sub: "Software op code, gebouwd rondom jullie",
      points: [
        "De software vormt zich naar hoe jullie écht werken",
        "Precies de functies die jullie proces nodig heeft, niets meer",
        "Eigen software, geen eindeloze licentiekosten",
        "Eén heldere flow, gebouwd op maat met code",
      ],
      dim: false,
    },
  ];

  const steps = [
    { n: "01", t: "Op locatie in Limburg", d: "We komen gratis en vrijblijvend bij je langs in de regio. Op de plek waar het werk gebeurt." },
    { n: "02", t: "Procesanalyse", d: "We kijken mee waar tijd, geld of overzicht verloren gaat, en waar de grootste winst zit." },
    { n: "03", t: "Voorstel op maat", d: "Je krijgt een helder plan: wat we bouwen, wat het oplevert en wat het kost. Geen verplichtingen." },
    { n: "04", t: "Bouwen met code", d: "We bouwen de oplossing op maat, testen grondig en zorgen dat het werkt rondom jullie manier van werken." },
  ];

  return (
    <>
      <Header variant="light" />

      <main className="relative bg-[#070707] overflow-hidden">
        {/* Ambient orbs */}
        <div className="absolute top-[4%] -right-40 w-[640px] h-[640px] rounded-full pointer-events-none z-0"
          style={{ background: `radial-gradient(circle, ${ACCENT}1f 0%, transparent 65%)`, filter: "blur(70px)" }} />
        <div className="absolute bottom-[6%] -left-40 w-[560px] h-[560px] rounded-full pointer-events-none z-0"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 65%)", filter: "blur(70px)" }} />

        {/* ── HERO ───────────────────────────────────────── */}
        <section className="relative min-h-[92vh] flex items-center px-6 lg:px-12">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "56px 56px" }} />

          <div className="container mx-auto relative z-10 pt-36 pb-24 lg:pt-40 lg:pb-28">
            <div className="grid lg:grid-cols-12 gap-14 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="hv hv-1 flex items-center gap-3 mb-8">
                  <div className="w-12 h-px" style={{ background: ACCENT }} />
                  <p className="text-white/45 text-[10px] tracking-[0.5em] font-light">MAATWERK SOFTWARE · ZUID-LIMBURG</p>
                </div>

                <h1 className="hv hv-2 text-[clamp(38px,6.4vw,82px)] font-extralight text-white tracking-[0.02em] leading-[1.03] mb-8">
                  Software moet vóór
                  <br />
                  <span className="italic" style={{ color: ACCENT }}>jouw bedrijf</span> werken.
                  <br />
                  <span className="text-white/45">Niet andersom.</span>
                </h1>

                <p className="hv hv-3 text-white/55 text-lg lg:text-xl font-extralight tracking-wide leading-relaxed max-w-xl mb-9">
                  Je bedrijf groeit, maar achter de schermen gaat er nog steeds te veel tijd verloren.
                  Wij bouwen maatwerk software voor het MKB in Limburg, en komen bij je langs voor een
                  gratis procesanalyse op locatie.
                </p>

                {/* region row */}
                <div className="hv hv-3 flex items-center gap-3 mb-10 text-white/40 text-xs font-light tracking-wide">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke={ACCENT} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 21s-6-5.3-6-10a6 6 0 1112 0c0 4.7-6 10-6 10z" />
                    <circle cx="12" cy="11" r="2" strokeWidth={1.6} />
                  </svg>
                  Maastricht · Heerlen · Sittard-Geleen · en heel Limburg
                </div>

                <div className="hv hv-4 flex flex-col sm:flex-row gap-4">
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

                <div className="hv hv-5 mt-10 flex items-center gap-3 text-white/35 text-xs font-light tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                  Gratis &amp; vrijblijvend · bij jou op locatie in Limburg · gebouwd met code
                </div>
              </div>

              <div className="lg:col-span-5 hv hv-4">
                <FlowDiagram />
              </div>
            </div>
          </div>
        </section>

        {/* ── PROBLEM ─────────────────────────────────────── */}
        <section className="relative px-6 lg:px-12 py-24 lg:py-32 border-t border-white/[0.06]">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5 anim">
                <p className="text-[10px] tracking-[0.5em] font-light mb-6" style={{ color: ACCENT }}>HET ECHTE PROBLEEM</p>
                <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.12]">
                  Digitaal op papier.
                  <br />
                  <span className="text-white/45 italic">Omwegen in de praktijk.</span>
                </h2>
              </div>
              <div className="lg:col-span-7 anim delay-1 space-y-6 text-white/55 text-lg font-light leading-[1.8] tracking-wide max-w-2xl">
                <p>
                  Veel Limburgse bedrijven denken dat ze goed gedigitaliseerd zijn, maar werken eigenlijk met
                  software, Excel-lijsten of systemen die nét niet passen bij hoe hun bedrijf echt werkt.
                </p>
                <p>
                  Daardoor lijkt alles digitaal geregeld, maar ontstaan er nog steeds omwegen, frustratie en onnodig tijdverlies.
                  Je team past zich aan de software aan, in plaats van dat de software jouw bedrijf makkelijker maakt.
                </p>
              </div>
            </div>

            <div className="mt-20 lg:mt-24 anim flex items-start sm:items-center gap-5">
              <div className="hidden sm:block h-px w-16 shrink-0 mt-3 sm:mt-0" style={{ background: `linear-gradient(90deg, transparent, ${ACCENT})` }} />
              <p className="text-2xl lg:text-[34px] font-extralight text-white/85 tracking-wide leading-snug max-w-3xl">
                En dat kost niet alleen tijd — maar ook{" "}
                <span className="italic" style={{ color: ACCENT }}>efficiëntie, overzicht en geld.</span>
              </p>
            </div>

            <div className="mt-14 anim delay-1">
              <p className="text-white/30 text-[10px] tracking-[0.5em] font-light mb-5">DE STILLE KOSTEN</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">
                {costs.map((c) => (
                  <div key={c.k} className="cost-card group bg-[#070707] px-7 py-9 relative overflow-hidden">
                    <div className="relative mb-6 text-white/35 group-hover:text-[#34d399] transition-colors duration-300">
                      <CostIcon k={c.k} />
                    </div>
                    <p className="relative text-[10px] tracking-[0.4em] font-light mb-3" style={{ color: ACCENT }}>{c.k}</p>
                    <p className="relative text-white/55 text-sm font-light leading-relaxed tracking-wide">{c.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── BEFORE → AFTER SLIDER ────────────────────────── */}
        <section className="relative px-6 lg:px-12 py-24 lg:py-36 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 50% 45%, ${ACCENT}0e 0%, transparent 60%)` }} />
          <div className="container mx-auto relative">
            <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16 anim">
              <p className="text-[10px] tracking-[0.5em] font-light mb-5" style={{ color: ACCENT }}>VAN CHAOS NAAR DUIDELIJKHEID</p>
              <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.12] mb-5">
                Hetzelfde werk.{" "}
                <span className="italic" style={{ color: ACCENT }}>Eén heldere flow.</span>
              </h2>
              <p className="text-white/45 text-base font-light leading-relaxed tracking-wide">
                Scroll en zie losse systemen, dubbele invoer en foutmeldingen veranderen in één strak overzicht.
              </p>
            </div>

            <div className="flex items-center justify-between max-w-[640px] mx-auto mb-4 anim delay-1">
              <span className="ba-label-before flex items-center gap-2 text-[10px] tracking-[0.3em] font-light text-red-400">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> VOOR
              </span>
              <span className="ba-label-after flex items-center gap-2 text-[10px] tracking-[0.3em] font-light" style={{ color: ACCENT }}>
                NA <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              </span>
            </div>

            <div ref={scrubRef} className="ba-window max-w-[640px] mx-auto anim delay-1">
              <div className="flex items-center gap-2 px-4 h-9 border-b border-white/[0.07] bg-white/[0.02]">
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="mx-auto text-[10px] tracking-[0.15em] text-white/35 font-light px-4 py-1 rounded bg-black/30">jouwbedrijf.app</span>
              </div>
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
                <BeforeScreen />
                <div className="ba-after absolute inset-0"><AfterScreen /></div>
                <div className="ba-divider">
                  <span className="ba-handle">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DE OPLOSSING + VERGELIJKING ─────────────────── */}
        <section className="relative px-6 lg:px-12 py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 50% 30%, ${ACCENT}10 0%, transparent 60%)` }} />
          <div className="container mx-auto relative">
            <div className="max-w-3xl mx-auto text-center anim mb-12 lg:mb-14">
              <p className="text-[10px] tracking-[0.5em] font-light mb-5" style={{ color: ACCENT }}>DE OPLOSSING</p>
              <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.01em] leading-[1.12] mb-5">
                Geen standaardpakket.{" "}
                <span className="italic" style={{ color: ACCENT }}>Software rondom hoe jullie werken.</span>
              </h2>
              <p className="text-white/50 text-base font-light leading-relaxed tracking-wide max-w-xl mx-auto">
                Maatwerk voor het Limburgse MKB, volledig op code, gebouwd om jullie werk makkelijker te maken in plaats van andersom.
              </p>
            </div>

            <div className="relative grid md:grid-cols-2 gap-5 lg:gap-10 max-w-5xl mx-auto">
              {compare.map((col) => (
                <div key={col.head}
                  className={`anim relative p-7 lg:p-9 border rounded-lg ${col.dim ? "border-white/[0.07] bg-white/[0.01]" : "border-white/[0.12]"}`}
                  style={col.dim ? {} : { background: `linear-gradient(160deg, ${ACCENT}14 0%, transparent 55%)`, boxShadow: `inset 0 0 0 1px ${ACCENT}30` }}>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <p className="text-[10px] tracking-[0.4em] font-light min-w-0 leading-relaxed" style={{ color: col.dim ? "rgba(255,255,255,0.35)" : ACCENT }}>{col.head}</p>
                    {!col.dim && (
                      <span className="shrink-0 px-2.5 py-1 rounded-full text-[8px] tracking-[0.2em] font-light whitespace-nowrap"
                        style={{ background: `${ACCENT}1a`, color: ACCENT, border: `1px solid ${ACCENT}40` }}>AANBEVOLEN</span>
                    )}
                  </div>
                  <p className="text-white/40 text-xs font-light tracking-wide mb-7 italic">{col.sub}</p>
                  <ul className="space-y-3.5">
                    {col.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-3">
                        {col.dim ? (
                          <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke={ACCENT} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                        <span className={`text-sm font-light leading-relaxed tracking-wide ${col.dim ? "text-white/40" : "text-white/80"}`}>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full items-center justify-center border border-white/15 bg-[#0a0a0a] text-white/50 text-[10px] tracking-[0.15em] font-light">
                VS
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW WE BEGIN ────────────────────────────────── */}
        <section className="relative px-6 lg:px-12 py-20 lg:py-28 border-t border-white/[0.06]">
          <div className="container mx-auto">
            <div className="max-w-3xl anim mb-12">
              <p className="text-[10px] tracking-[0.5em] font-light mb-5" style={{ color: ACCENT }}>HOE WE BEGINNEN</p>
              <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.12]">
                Er is geen betere plek om je processen te begrijpen
                <span className="text-white/45 italic"> dan waar het werk gebeurt.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">
              {steps.map((s, i) => (
                <div key={s.n} className="bg-[#070707] p-7 lg:p-8 anim group/step relative overflow-hidden" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="absolute top-0 left-0 h-px w-0 group-hover/step:w-full transition-all duration-700" style={{ background: ACCENT }} />
                  <div className="flex items-baseline gap-3 mb-5">
                    <span className="text-2xl font-extralight" style={{ color: ACCENT }}>{s.n}</span>
                    <div className="flex-1 h-px bg-white/[0.08]" />
                  </div>
                  <h3 className="text-white text-[13px] tracking-[0.2em] font-light mb-2.5 uppercase">{s.t}</h3>
                  <p className="text-white/50 text-sm font-light leading-relaxed tracking-wide">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REGIO ───────────────────────────────────────── */}
        <section className="relative px-6 lg:px-12 py-16 lg:py-20 overflow-hidden">
          <div className="container mx-auto">
            <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.015] p-8 lg:p-12 overflow-hidden anim">
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 15% 0%, ${ACCENT}12 0%, transparent 55%)` }} />
              <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-5">
                  <p className="text-[10px] tracking-[0.5em] font-light mb-4" style={{ color: ACCENT }}>WERKGEBIED</p>
                  <h2 className="text-2xl lg:text-4xl font-extralight text-white tracking-[0.02em] leading-[1.15] mb-4">
                    Wij komen naar
                    <br />
                    <span className="italic" style={{ color: ACCENT }}>jou toe in Limburg.</span>
                  </h2>
                  <p className="text-white/50 text-sm font-light leading-relaxed tracking-wide">
                    Van Zuid-Limburg tot Midden-Limburg: we plannen de procesanalyse gewoon bij jou op locatie in.
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap gap-2.5">
                    {CITIES.map((c) => (
                      <span key={c}
                        className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.02] text-white/55 text-xs font-light tracking-wide hover:border-[#34d399]/50 hover:text-white transition-all duration-300">
                        <span className="w-1 h-1 rounded-full transition-colors duration-300 group-hover:bg-[#34d399]" style={{ background: "rgba(255,255,255,0.3)" }} />
                        {c}
                      </span>
                    ))}
                    <span className="inline-flex items-center px-3.5 py-2 rounded-full text-xs font-light tracking-wide"
                      style={{ background: `${ACCENT}1a`, color: ACCENT, border: `1px solid ${ACCENT}40` }}>
                      + heel Limburg
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── LEAD FORM ───────────────────────────────────── */}
        <section id="analyse" className="relative px-6 lg:px-12 py-20 lg:py-28 scroll-mt-24">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 80% 20%, ${ACCENT}14 0%, transparent 55%)` }} />
          <div className="container mx-auto relative">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-5 anim">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-px" style={{ background: ACCENT }} />
                  <p className="text-white/45 text-[10px] tracking-[0.5em] font-light">GRATIS &amp; VRIJBLIJVEND</p>
                </div>
                <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.1] mb-6">
                  Laat je gegevens achter.
                  <br />
                  <span className="italic" style={{ color: ACCENT }}>Wij komen langs.</span>
                </h2>
                <p className="text-white/55 text-base font-light leading-relaxed tracking-wide mb-10 max-w-md">
                  We nemen contact met je op om een gratis procesanalyse op locatie in Limburg in te plannen.
                  Geen verplichtingen, geen verkooppraatje, gewoon kijken wat slimmer kan.
                </p>
                <div className="space-y-4">
                  {[
                    "We komen naar jouw locatie in Limburg toe",
                    "Concreet inzicht in tijd- en geldverlies",
                    "Een helder voorstel op maat, vrijblijvend",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-3">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke={ACCENT} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/65 text-sm font-light tracking-wide">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 anim delay-1">
                <form onSubmit={submit}
                  className="relative p-8 lg:p-10 rounded-lg border border-white/[0.1] bg-white/[0.015]"
                  style={{ boxShadow: `0 40px 90px -50px ${ACCENT}55` }}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="NAAM *" value={form.name} onChange={set("name")} placeholder="Je naam" required />
                    <Field label="BEDRIJF" value={form.company} onChange={set("company")} placeholder="Bedrijfsnaam" />
                    <Field label="PLAATS" value={form.place} onChange={set("place")} placeholder="bv. Heerlen" />
                    <Field label="TELEFOON" value={form.phone} onChange={set("phone")} placeholder="06 ..." type="tel" />
                  </div>
                  <div className="mt-5">
                    <label className="block text-white/40 text-[10px] tracking-[0.3em] font-light mb-2.5">WAAR LOOPT HET VAST? (OPTIONEEL)</label>
                    <textarea value={form.message} onChange={set("message")} rows={4}
                      placeholder="Beschrijf kort waar je nu tijd, geld of overzicht verliest..."
                      className="w-full bg-black/40 border border-white/10 text-white/90 text-sm font-light tracking-wide px-4 py-3 rounded outline-none focus:border-white/30 transition-colors duration-300 placeholder:text-white/25 resize-none" />
                  </div>

                  <button type="submit"
                    className="group mt-7 w-full inline-flex items-center justify-center gap-3 px-10 py-4 text-black text-[11px] tracking-[0.25em] font-medium transition-all duration-300 rounded"
                    style={{ background: ACCENT }}>
                    PLAN MIJN GRATIS PROCESANALYSE
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>

                  <p className="mt-5 text-center text-white/35 text-xs font-light tracking-wide">
                    Liever direct?{" "}
                    <a href="https://wa.me/31624572572" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white underline underline-offset-4 transition-colors">WhatsApp ons</a>
                    {" "}of mail{" "}
                    <a href="mailto:info@dynique.nl" className="text-white/70 hover:text-white underline underline-offset-4 transition-colors">info@dynique.nl</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ProcessStyles />
    </>
  );
}
