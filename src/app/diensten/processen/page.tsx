"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";

const ACCENT = "#34d399";

/* ════════════════════════════════════════════════════════════
   CODED VISUALS — no external images.
   "Voor" = chaos (foutmeldingen, losse systemen).
   "Na"   = duidelijkheid (één strak overzicht).
   Revealed by a scroll-driven before/after slider.
   ════════════════════════════════════════════════════════════ */

function BeforeScreen() {
  return (
    <div className="absolute inset-0 bg-[#0c0b0c] overflow-hidden select-none">
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(239,68,68,0.14) 0%, transparent 60%)" }} />
      <div className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "30px 30px" }} />

      {/* state tag */}
      <div className="absolute top-[7%] left-[7%] flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        <span className="text-red-300/80 text-[9px] tracking-[0.3em] font-light">SYSTEEM · 3 FOUTEN</span>
      </div>

      {/* error stack */}
      <div className="absolute top-[22%] left-[7%] right-[7%] space-y-2.5">
        {[
          { t: "Synchronisatie mislukt", s: "CRM ↔ boekhouding" },
          { t: "Dubbele invoer gevonden", s: "3 records komen niet overeen" },
          { t: "Export verlopen", s: "maandrapportage niet verstuurd" },
        ].map((e, idx) => (
          <div key={idx}
            className="flex items-center gap-3 px-3.5 py-3 rounded-md bg-red-500/[0.08] border border-red-500/25 backdrop-blur-sm toast-pulse"
            style={{ animationDelay: `${idx * 0.45}s` }}>
            <span className="w-5 h-5 rounded-full bg-red-500 text-[#0c0b0c] text-[11px] font-bold flex items-center justify-center flex-shrink-0">✕</span>
            <div className="min-w-0 flex-1">
              <p className="text-red-200 text-[11px] tracking-wide font-medium truncate">{e.t}</p>
              <p className="text-red-300/45 text-[9px] truncate">{e.s}</p>
            </div>
            <span className="text-red-300/40 text-[9px]">nu</span>
          </div>
        ))}
      </div>

      {/* disconnected systems */}
      <div className="absolute bottom-[9%] left-1/2 -translate-x-1/2 flex items-center gap-2">
        {["CRM", "MAIL", "EXCEL"].map((n, i) => (
          <div key={n} className="flex items-center gap-2">
            <div className="px-2.5 py-1.5 rounded border border-white/10 bg-white/[0.03] text-white/35 text-[9px] tracking-wide">{n}</div>
            {i < 2 && <span className="text-red-400/80 text-sm leading-none">⤬</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

function AfterScreen() {
  return (
    <div className="absolute inset-0 bg-[#080b0a] overflow-hidden flex select-none">
      <div className="absolute inset-0"
        style={{ background: `radial-gradient(ellipse at 30% 20%, ${ACCENT}1c 0%, transparent 60%)` }} />

      {/* sidebar */}
      <div className="relative w-[22%] border-r border-white/[0.06] py-4 px-2.5 flex flex-col gap-2.5">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-3.5 h-3.5 rounded" style={{ background: ACCENT }} />
          <span className="text-white/55 text-[8px] tracking-[0.15em]">DYNIQUE</span>
        </div>
        {["Overzicht", "Klanten", "Facturen", "Planning"].map((t, i) => (
          <div key={t} className={`flex items-center gap-2 px-2 py-1.5 rounded ${i === 0 ? "bg-white/[0.06]" : ""}`}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: i === 0 ? ACCENT : "rgba(255,255,255,0.22)" }} />
            <span className={`text-[8.5px] tracking-wide ${i === 0 ? "text-white/80" : "text-white/35"}`}>{t}</span>
          </div>
        ))}
      </div>

      {/* main */}
      <div className="relative flex-1 p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-white/75 text-[11px] tracking-wide font-medium">Dashboard</span>
          <span className="flex items-center gap-1.5 px-2 py-1 rounded-full border text-[8.5px]"
            style={{ borderColor: `${ACCENT}55`, color: ACCENT }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} /> Alles gesynchroniseerd
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2.5 mb-4">
          {[{ v: "0", l: "fouten" }, { v: "100%", l: "automatisch" }, { v: "+11u", l: "p/week" }].map((s) => (
            <div key={s.l} className="bg-white/[0.035] border border-white/[0.07] rounded-md p-2.5">
              <p className="text-white text-[17px] font-extralight leading-none">{s.v}</p>
              <p className="text-white/35 text-[8px] tracking-wide mt-1.5">{s.l}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/[0.035] border border-white/[0.07] rounded-md p-3 mb-4">
          <div className="flex items-end gap-1.5 h-14">
            {[34, 44, 40, 56, 62, 74, 88].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm bar-grow"
                style={{ height: `${h}%`, background: i > 4 ? ACCENT : `${ACCENT}88`, animationDelay: `${i * 0.06}s` }} />
            ))}
          </div>
        </div>

        <div className="space-y-2">
          {["Offerte automatisch verstuurd", "Factuur gekoppeld & betaald", "Klant ingepland"].map((t) => (
            <div key={t} className="flex items-center gap-2.5">
              <span className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] text-[#080b0a]" style={{ background: ACCENT }}>✓</span>
              <span className="text-white/55 text-[9.5px] tracking-wide">{t}</span>
              <span className="flex-1 h-px bg-white/[0.06]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Animated, coded process-flow diagram: losse bronnen → maatwerk-logica → één output */
function FlowDiagram() {
  const sources = [
    { t: "Aanvraag", y: 20 },
    { t: "Klantdata", y: 50 },
    { t: "Planning", y: 80 },
  ];
  return (
    <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-5 lg:p-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(circle at 62% 50%, ${ACCENT}14 0%, transparent 62%)` }} />

      <div className="relative flex items-center justify-between mb-5">
        <span className="flex items-center gap-2 text-white/50 text-[9px] tracking-[0.3em] font-light">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ACCENT }} /> GEBOUWD MET CODE
        </span>
        <span className="text-white/25 text-[9px] tracking-[0.25em] font-light">JOUW PROCES</span>
      </div>

      <div className="relative w-full" style={{ aspectRatio: "5 / 4" }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {sources.map((s, i) => (
            <g key={i}>
              <path d={`M18 ${s.y} C 34 ${s.y}, 36 50, 50 50`} fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <path d={`M18 ${s.y} C 34 ${s.y}, 36 50, 50 50`} fill="none" stroke={ACCENT} strokeWidth="1.4" strokeDasharray="2 8" strokeLinecap="round" vectorEffect="non-scaling-stroke" className="flow-dash" style={{ animationDelay: `${i * 0.4}s` }} />
            </g>
          ))}
          <path d="M50 50 C 68 50, 72 50, 84 50" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <path d="M50 50 C 68 50, 72 50, 84 50" fill="none" stroke={ACCENT} strokeWidth="1.9" strokeDasharray="2 8" strokeLinecap="round" vectorEffect="non-scaling-stroke" className="flow-dash" />
        </svg>

        {sources.map((s, i) => (
          <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: "18%", top: `${s.y}%` }}>
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-white/10 bg-[#0d0d0f] text-white/55 text-[9px] tracking-wide whitespace-nowrap">
              <span className="w-1 h-1 rounded-full bg-white/40" /> {s.t}
            </div>
          </div>
        ))}

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flow-hub flex flex-col items-center justify-center w-[84px] h-[84px] rounded-full border bg-[#0a0d0c]"
            style={{ borderColor: `${ACCENT}66` }}>
            <span className="text-[10px] tracking-[0.18em] font-medium" style={{ color: ACCENT }}>MAATWERK</span>
            <span className="text-white/35 text-[7.5px] tracking-wide mt-0.5">jouw logica</span>
          </div>
        </div>

        <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: "84%", top: "50%" }}>
          <div className="flex flex-col items-center gap-2">
            <div className="w-9 h-9 rounded-full flex items-center justify-center shadow-lg" style={{ background: ACCENT }}>
              <svg className="w-4 h-4 text-[#06281f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-white/50 text-[8px] tracking-wide whitespace-nowrap">Automatisch</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CostIcon({ k }: { k: string }) {
  const cls = "w-6 h-6";
  if (k === "TIJD")
    return (
      <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2" />
      </svg>
    );
  if (k === "OVERZICHT")
    return (
      <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l9 4-9 4-9-4 9-4zM3 12l9 4 9-4M3 17l9 4 9-4" />
      </svg>
    );
  if (k === "EFFICIËNTIE")
    return (
      <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l4 5-4 5M11 7l4 5-4 5M18 9v6" />
      </svg>
    );
  return (
    <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9.5C14.2 8.6 13.1 8 12 8c-2.2 0-3.8 1.8-3.8 4s1.6 4 3.8 4c1.1 0 2.2-.6 3-1.5M8 11.3h5M8 13.3h4" />
    </svg>
  );
}

export default function ProcessenDienst() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", message: "" });
  const scrubRef = useRef<HTMLDivElement>(null);

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

  /* scroll-driven before→after reveal (no sticky; robust inside overflow-hidden) */
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = scrubRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const center = rect.top + rect.height / 2;
        // p=0 when the window enters from the bottom, p=1 just before it reaches center
        let p = (vh * 0.92 - center) / (vh * 0.4);
        p = Math.min(1, Math.max(0, p));
        el.style.setProperty("--p", p.toFixed(4));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    let m = `Hi! Ik wil een gratis procesanalyse op locatie aanvragen.\n\n`;
    m += `👤 Naam: ${form.name || "(niet ingevuld)"}\n`;
    if (form.company) m += `🏢 Bedrijf: ${form.company}\n`;
    if (form.phone) m += `📞 Telefoon: ${form.phone}\n`;
    if (form.email) m += `✉️ E-mail: ${form.email}\n`;
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
    { n: "01", t: "Op locatie", d: "We komen gratis en vrijblijvend langs op de plek waar het werk gebeurt. Daar begrijp je een proces pas echt." },
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
              {/* text */}
              <div className="lg:col-span-7">
                <div className="hv hv-1 flex items-center gap-3 mb-8">
                  <div className="w-12 h-px" style={{ background: ACCENT }} />
                  <p className="text-white/45 text-[10px] tracking-[0.5em] font-light">DIGITALE BEDRIJFSPROCESSEN · MAATWERK</p>
                </div>

                <h1 className="hv hv-2 text-[clamp(38px,6.4vw,82px)] font-extralight text-white tracking-[0.02em] leading-[1.03] mb-8">
                  Software moet vóór
                  <br />
                  <span className="italic" style={{ color: ACCENT }}>jouw bedrijf</span> werken.
                  <br />
                  <span className="text-white/45">Niet andersom.</span>
                </h1>

                <p className="hv hv-3 text-white/55 text-lg lg:text-xl font-extralight tracking-wide leading-relaxed max-w-xl mb-12">
                  Je bedrijf groeit, maar achter de schermen gaat er nog steeds te veel tijd verloren.
                  Wij bouwen maatwerk software voor het MKB, gebouwd rondom hoe jullie écht werken.
                </p>

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
                  Gratis &amp; vrijblijvend · bij jou op locatie · gebouwd met code
                </div>
              </div>

              {/* coded flow diagram */}
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
                  Veel bedrijven denken dat ze goed gedigitaliseerd zijn, maar werken eigenlijk met software,
                  Excel-lijsten of systemen die nét niet passen bij hoe hun bedrijf echt werkt.
                </p>
                <p>
                  Daardoor lijkt alles digitaal geregeld, maar ontstaan er nog steeds omwegen, frustratie en onnodig tijdverlies.
                  Je team past zich aan de software aan, in plaats van dat de software jouw bedrijf makkelijker maakt.
                </p>
              </div>
            </div>

            {/* bridge statement */}
            <div className="mt-20 lg:mt-24 anim flex items-start sm:items-center gap-5">
              <div className="hidden sm:block h-px w-16 shrink-0 mt-3 sm:mt-0" style={{ background: `linear-gradient(90deg, transparent, ${ACCENT})` }} />
              <p className="text-2xl lg:text-[34px] font-extralight text-white/85 tracking-wide leading-snug max-w-3xl">
                En dat kost niet alleen tijd — maar ook{" "}
                <span className="italic" style={{ color: ACCENT }}>efficiëntie, overzicht en geld.</span>
              </p>
            </div>

            {/* the silent costs */}
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

        {/* ── BEFORE → AFTER SLIDER (coded, scroll-driven) ── */}
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

            {/* labels */}
            <div className="ba-meta flex items-center justify-between max-w-[640px] mx-auto mb-4 anim delay-1">
              <span className="ba-label-before flex items-center gap-2 text-[10px] tracking-[0.3em] font-light text-red-400">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> VOOR
              </span>
              <span className="ba-label-after flex items-center gap-2 text-[10px] tracking-[0.3em] font-light" style={{ color: ACCENT }}>
                NA <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              </span>
            </div>

            {/* app window */}
            <div ref={scrubRef} className="ba-window max-w-[640px] mx-auto anim delay-1">
              {/* top bar */}
              <div className="flex items-center gap-2 px-4 h-9 border-b border-white/[0.07] bg-white/[0.02]">
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="ba-url mx-auto text-[10px] tracking-[0.15em] text-white/35 font-light px-4 py-1 rounded bg-black/30">jouwbedrijf.app</span>
              </div>
              {/* screen */}
              <div className="ba-screen relative w-full overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
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
                Maatwerk, volledig op code, gebouwd om jullie werk makkelijker te maken in plaats van andersom.
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

              {/* VS pivot */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full items-center justify-center border border-white/15 bg-[#0a0a0a] text-white/50 text-[10px] tracking-[0.15em] font-light">
                VS
              </div>
            </div>
          </div>
        </section>

        {/* ── ON-LOCATION ANALYSIS ────────────────────────── */}
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

        {/* ── SECTOREN ────────────────────────────────────── */}
        <section className="relative px-6 lg:px-12 py-20 lg:py-28 border-t border-white/[0.06]">
          <div className="container mx-auto">
            <div className="max-w-3xl anim mb-12">
              <p className="text-[10px] tracking-[0.5em] font-light mb-5" style={{ color: ACCENT }}>VOOR WELKE SECTOREN</p>
              <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.12]">
                We kennen de praktijk
                <span className="text-white/45 italic"> in jouw branche.</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">
              {[
                { t: "Bouw", d: "Werkbonnen, uren, planning & facturatie.", href: "/maatwerk-software/bouw" },
                { t: "Installatiebedrijven", d: "Mobiele bonnen, planning & onderhoud.", href: "/maatwerk-software/installatiebedrijf" },
                { t: "Zorg", d: "Roosters, dossiers & rapportage, AVG-proof.", href: "/maatwerk-software/zorg" },
                { t: "Logistiek & transport", d: "Ritplanning, track & trace & voorraad.", href: "/maatwerk-software/logistiek" },
              ].map((s, i) => (
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
            <p className="anim mt-6 text-white/35 text-sm font-light tracking-wide">
              Andere branche? Geen probleem — we bouwen maatwerk voor elk bedrijf dat vastloopt op standaardsoftware.
            </p>
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
                  We nemen contact met je op om een gratis procesanalyse op locatie in te plannen.
                  Geen verplichtingen, geen verkooppraatje, gewoon kijken wat slimmer kan.
                </p>
                <div className="space-y-4">
                  {[
                    "We komen naar jouw locatie toe",
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
                    <Field label="TELEFOON" value={form.phone} onChange={set("phone")} placeholder="06 ..." type="tel" />
                    <Field label="E-MAIL" value={form.email} onChange={set("email")} placeholder="naam@bedrijf.nl" type="email" />
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

      <style jsx global>{`
        .anim {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .anim.animate-in { opacity: 1; transform: translateY(0); }
        .anim.delay-1 { transition-delay: 0.12s; }
        .anim.delay-2 { transition-delay: 0.24s; }

        /* ── hero staggered entrance ── */
        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: none; } }
        .hv { opacity: 0; animation: fadeUp 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .hv-1 { animation-delay: 0.05s; }
        .hv-2 { animation-delay: 0.18s; }
        .hv-3 { animation-delay: 0.32s; }
        .hv-4 { animation-delay: 0.46s; }
        .hv-5 { animation-delay: 0.6s; }

        /* ── coded flow diagram ── */
        @keyframes flowDash { to { stroke-dashoffset: -20; } }
        .flow-dash { animation: flowDash 1.3s linear infinite; }
        @keyframes hubPulse {
          0%, 100% { box-shadow: 0 0 0 0 ${ACCENT}44, inset 0 0 16px ${ACCENT}22; }
          50% { box-shadow: 0 0 26px 3px ${ACCENT}55, inset 0 0 22px ${ACCENT}30; }
        }
        .flow-hub { animation: hubPulse 3s ease-in-out infinite; }

        /* ── cost cards ── */
        .cost-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, ${ACCENT}, transparent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cost-card:hover::before { transform: scaleX(1); }
        .cost-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, ${ACCENT}12, transparent 70%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        .cost-card:hover::after { opacity: 1; }

        /* ── before / after window ── */
        .ba-window {
          --p: 0;
          border-radius: 16px;
          overflow: hidden;
          background: #0c0b0c;
          border: 1px solid rgba(255, 255, 255, 0.09);
          box-shadow:
            0 50px 120px -50px rgba(0, 0, 0, 0.85),
            0 0 calc(var(--p) * 70px) rgba(52, 211, 153, calc(var(--p) * 0.28)),
            inset 0 0 0 1px rgba(255, 255, 255, 0.04);
          transition: box-shadow 0.15s linear;
        }
        .ba-after {
          clip-path: inset(0 0 0 calc((1 - var(--p)) * 100%));
        }
        .ba-divider {
          position: absolute;
          top: 0;
          bottom: 0;
          left: calc((1 - var(--p)) * 100%);
          width: 2px;
          transform: translateX(-1px);
          background: linear-gradient(to bottom, transparent, ${ACCENT}, transparent);
          box-shadow: 0 0 16px ${ACCENT};
          opacity: calc(0.25 + var(--p) * 0.75);
          pointer-events: none;
        }
        .ba-handle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 30px;
          height: 30px;
          border-radius: 9999px;
          background: ${ACCENT};
          color: #06281f;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 22px ${ACCENT}aa, 0 4px 12px rgba(0, 0, 0, 0.5);
        }
        .ba-label-before { opacity: calc(1 - var(--p, 0) * 0.7); }
        .ba-label-after { opacity: calc(0.35 + var(--p, 0) * 0.65); }

        /* chaos motion */
        @keyframes toastPulse { 0%,100% { opacity: 0.9; } 50% { opacity: 1; } }
        .toast-pulse { animation: toastPulse 2.6s ease-in-out infinite; }

        /* clarity chart grow */
        @keyframes barGrow { from { transform: scaleY(0.2); opacity: 0.4; } to { transform: scaleY(1); opacity: 1; } }
        .bar-grow { transform-origin: bottom; animation: barGrow 0.9s cubic-bezier(0.16,1,0.3,1) both; }

        @media (prefers-reduced-motion: reduce) {
          .anim { opacity: 1; transform: none; transition: none; }
          .hv { opacity: 1; animation: none; }
          .toast-pulse, .bar-grow, .flow-dash, .flow-hub { animation: none; }
        }
      `}</style>
    </>
  );
}

function Field({
  label, value, onChange, placeholder, type = "text", required = false,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-white/40 text-[10px] tracking-[0.3em] font-light mb-2.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-black/40 border border-white/10 text-white/90 text-sm font-light tracking-wide px-4 py-3 rounded outline-none focus:border-white/30 transition-colors duration-300 placeholder:text-white/25"
      />
    </div>
  );
}
