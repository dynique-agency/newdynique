"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────────────────────
   De Adviseur — een editoriale, consultatieve "advies-console".
   Vier korte vragen → een persoonlijk advies-dossier. Geen
   verkoopdruk: het legt uit wáárom, met eerlijke aanpak + tijdlijn.
   ───────────────────────────────────────────────────────────── */

type Option = { id: string; label: string; desc?: string };
type Step = { id: string; tag: string; q: string; hint: string; options: Option[] };

const STEPS: Step[] = [
  {
    id: "start",
    tag: "Situatie",
    q: "Waar sta je nu?",
    hint: "Zo weten we vanuit welk punt we adviseren.",
    options: [
      { id: "niets", label: "Ik heb nog geen website", desc: "We beginnen vanaf nul" },
      { id: "verouderd", label: "Mijn site is verouderd of traag", desc: "Toe aan vervanging" },
      { id: "teweinig", label: "Mijn site levert te weinig op", desc: "Werkt wel, maar te weinig resultaat" },
      { id: "prima", label: "Mijn website is prima", desc: "Ik zoek iets anders" },
    ],
  },
  {
    id: "goal",
    tag: "Doel",
    q: "Wat wil je vooral bereiken?",
    hint: "Kies wat er voor jou het zwaarst weegt.",
    options: [
      { id: "klanten", label: "Meer klanten & aanvragen" },
      { id: "professioneler", label: "Professioneler overkomen" },
      { id: "gevonden", label: "Beter gevonden worden in Google" },
      { id: "tijd", label: "Tijd besparen, minder handwerk" },
      { id: "beeld", label: "Opvallen met beeld & video" },
    ],
  },
  {
    id: "prio",
    tag: "Voorkeur",
    q: "Wat is voor jou het belangrijkst?",
    hint: "Dit bepaalt hoe we het traject inrichten.",
    options: [
      { id: "snel", label: "Snel live of snel resultaat" },
      { id: "prijs", label: "Een vaste, voorspelbare prijs" },
      { id: "premium", label: "Topkwaliteit & premium uitstraling" },
      { id: "lokaal", label: "Persoonlijk, lokaal contact" },
    ],
  },
  {
    id: "speed",
    tag: "Planning",
    q: "Hoe snel wil je aan de slag?",
    hint: "Geheel vrijblijvend — gewoon om de planning te peilen.",
    options: [
      { id: "zsm", label: "Zo snel mogelijk" },
      { id: "maanden", label: "Binnen een paar maanden" },
      { id: "orienteren", label: "Ik oriënteer me nog" },
    ],
  },
];

type Service = {
  title: string;
  accent: string;
  href: string;
  cta: string;
  base: string;
  points: string[];
};

const SERVICES: Record<string, Service> = {
  eersteWebsite: {
    title: "Een eerste website",
    accent: "#d4a574",
    href: "/eerste-website",
    cta: "Bekijk hoe we starten",
    base: "Je begint vanaf nul — dan telt vooral een heldere basis die meteen vertrouwen wekt.",
    points: [
      "Een strakke, snelle site die je merk direct professioneel neerzet",
      "Mobile-first en SEO-ready opgeleverd, klaar om gevonden te worden",
      "Begeleiding van eerste gesprek tot livegang, met een vaste prijs",
    ],
  },
  vervanging: {
    title: "Je website vervangen",
    accent: "#a78bfa",
    href: "/vervanging",
    cta: "Bekijk de aanpak",
    base: "Je hebt al een site, maar die remt je. Een moderne herbouw haalt die rem eraf.",
    points: [
      "Sneller, moderner en beter converterend dan je huidige site",
      "Je SEO en bestaande content blijven behouden bij de migratie",
      "Een uitstraling die weer past bij waar je nu staat",
    ],
  },
  marketing: {
    title: "Beter gevonden worden & meer uit je site halen",
    accent: "#fb923c",
    href: "/diensten/marketing",
    cta: "Bekijk marketing & SEO",
    base: "Je site staat er — nu draait het om vindbaarheid en conversie, niet om opnieuw bouwen.",
    points: [
      "SEO-fundamenten zodat je structureel hoger in Google komt",
      "Content en campagnes die de juiste bezoekers binnenhalen",
      "Slimme aanpassingen die meer bezoekers omzetten in klanten",
    ],
  },
  processen: {
    title: "Je processen slimmer maken",
    accent: "#34d399",
    href: "/diensten/processen",
    cta: "Bekijk maatwerk software",
    base: "Je grootste winst zit niet in een nieuwe site, maar in minder handwerk.",
    points: [
      "Koppel je website, CRM en facturatie zodat data vanzelf doorstroomt",
      "Maatwerk software op code, gebouwd rondom hoe jullie écht werken",
      "Eenmalige bouw, daarna bespaar je uren — elke week opnieuw",
    ],
  },
  drone: {
    title: "Opvallen met beeld & video",
    accent: "#38bdf8",
    href: "/diensten/drone",
    cta: "Bekijk video & drone",
    base: "Onderscheidend beeld blijft hangen — zeker bewegend beeld vanuit de lucht.",
    points: [
      "Cinematische aerial footage die je bedrijf groots in beeld brengt",
      "Bedrijfsfilms en social reels die scrollers laten stoppen",
      "Beeld dat je website, socials én advertenties direct sterker maakt",
    ],
  },
  web: {
    title: "Een sterke website op maat",
    accent: "#d4a574",
    href: "/diensten/web",
    cta: "Bekijk websites & web apps",
    base: "Een doordachte website blijft je belangrijkste digitale visitekaartje.",
    points: [
      "Maatwerk dat past bij je merk en je doelgroep",
      "Snel, mobile-first en SEO-ready opgeleverd",
      "Gebouwd om te converteren, niet alleen om mooi te zijn",
    ],
  },
};

const APPROACH: Record<string, string> = {
  snel: "We houden het traject strak en kort — vaak ben je binnen 1 tot 2 weken live.",
  prijs: "Je krijgt vooraf een vaste prijs. Geen nacalculatie, geen verrassingen achteraf.",
  premium: "We werken bewust met een klein team, zodat kwaliteit en detail altijd voorop staan.",
  lokaal: "Persoonlijk contact staat centraal — online of gewoon bij jou aan tafel in Limburg.",
};

const TIMELINE: Record<string, string> = {
  zsm: "Je wilt snel schakelen: we plannen meestal binnen een paar dagen een eerste gesprek in.",
  maanden: "Je hebt wat ruimte in de planning — ideaal om het rustig en goed op te zetten.",
  orienteren: "Je oriënteert je nog: een vrijblijvend gesprek of onze checklist is dan een fijn startpunt.",
};

type Answers = { start?: string; goal?: string; prio?: string; speed?: string };

type Advice = {
  service: Service;
  points: string[];
  approach: string;
  timeline: string;
  secondary: { label: string; href: string } | null;
};

function computeAdvice(a: Answers): Advice {
  const { start, goal, prio, speed } = a;

  let key: keyof typeof SERVICES;
  if (goal === "tijd") key = "processen";
  else if (goal === "beeld") key = "drone";
  else if (goal === "gevonden") key = "marketing";
  else if (start === "niets") key = "eersteWebsite";
  else if (start === "verouderd") key = "vervanging";
  else if (start === "teweinig") key = goal === "professioneler" ? "vervanging" : "marketing";
  else key = goal === "professioneler" ? "web" : "marketing";

  const service = SERVICES[key];

  let secondary: Advice["secondary"] = null;
  if (speed === "orienteren" || start === "niets") {
    secondary = { label: "Of download eerst de gratis checklist", href: "/gratis-checklist" };
  } else if (prio === "lokaal") {
    secondary = { label: "Bekijk ons werkgebied in de regio", href: "/locaties/maastricht" };
  } else if (goal === "gevonden") {
    secondary = { label: "Lees: website laten maken in Limburg", href: "/blog/website-laten-maken-limburg" };
  } else if (goal === "tijd") {
    secondary = { label: "Lees: automatiseren — tool of maatwerk?", href: "/blog/n8n-make-zapier" };
  }

  return {
    service,
    points: service.points,
    approach: APPROACH[prio ?? "premium"] ?? APPROACH.premium,
    timeline: TIMELINE[speed ?? "maanden"] ?? TIMELINE.maanden,
    secondary,
  };
}

const LETTERS = ["A", "B", "C", "D", "E"];
const STEP_ACCENTS = ["#d4a574", "#a78bfa", "#fb923c", "#34d399"];

function labelFor(stepId: string, optId?: string) {
  if (!optId) return "";
  const step = STEPS.find((s) => s.id === stepId);
  return step?.options.find((o) => o.id === optId)?.label ?? "";
}

export default function Advisor() {
  const [step, setStep] = useState(0); // 0..STEPS.length-1, dan === length → resultaat
  const [answers, setAnswers] = useState<Answers>({});
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const o = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("adv-in");
            o.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".adv-reveal").forEach((el) => o.observe(el));
    return () => o.disconnect();
  }, []);

  const isResult = step >= STEPS.length;
  const current = STEPS[step];

  const select = (optId: string) => {
    setAnswers((prev) => ({ ...prev, [current.id]: optId }));
    setLeaving(true);
    window.setTimeout(() => {
      setStep((s) => s + 1);
      setLeaving(false);
    }, 240);
  };

  const back = () => {
    if (step === 0) return;
    setLeaving(true);
    window.setTimeout(() => {
      setStep((s) => s - 1);
      setLeaving(false);
    }, 200);
  };

  const restart = () => {
    setLeaving(true);
    window.setTimeout(() => {
      setAnswers({});
      setStep(0);
      setLeaving(false);
    }, 200);
  };

  const advice = isResult ? computeAdvice(answers) : null;
  const accent = advice ? advice.service.accent : STEP_ACCENTS[step] ?? "#d4a574";
  const progress = Math.min(step, STEPS.length) / STEPS.length;
  const pct = Math.round((isResult ? 1 : progress) * 100);

  const answeredTrail = STEPS.slice(0, step).map((s) => ({
    tag: s.tag,
    value: labelFor(s.id, answers[s.id as keyof Answers]),
  }));

  return (
    <section
      id="advies"
      className="adv-root relative bg-[#050505] py-32 lg:py-44 overflow-hidden border-t border-white/[0.04]"
      style={{ ["--acc" as string]: accent }}
    >
      {/* Ambient glows that morphen mee met het accent */}
      <div
        aria-hidden
        className="absolute -top-32 right-[8%] w-[760px] h-[760px] pointer-events-none transition-colors duration-1000"
        style={{ background: `radial-gradient(circle, ${accent}26 0%, transparent 60%)` }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-[4%] w-[620px] h-[620px] pointer-events-none transition-colors duration-1000"
        style={{ background: `radial-gradient(circle, ${accent}14 0%, transparent 62%)` }}
      />
      {/* Grain */}
      <div aria-hidden className="adv-grain absolute inset-0 pointer-events-none" />

      <div className="container relative mx-auto px-6 lg:px-12">
        {/* ── Header ── */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-4 mb-9 adv-reveal">
            <span className="inline-block w-10 h-px" style={{ background: `${accent}` }} />
            <p className="text-[10px] tracking-[0.55em] font-light uppercase" style={{ color: accent }}>
              De Adviseur · 60 seconden
            </p>
            <span className="inline-block w-10 h-px" style={{ background: `${accent}` }} />
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-white tracking-[0.005em] leading-[1.02] adv-reveal adv-d1">
            Niet verkopen.<br />
            <span className="adv-shimmer italic">Adviseren.</span>
          </h2>
          <p className="mt-9 text-white/55 text-base lg:text-lg font-light leading-[1.9] tracking-wide adv-reveal adv-d2">
            Vier korte vragen. Daarna krijg je een eerlijk advies dat past bij jóuw situatie —
            ook als dat betekent dat je (nog) geen nieuwe website nodig hebt.
          </p>
        </div>

        {/* ── Console ── */}
        <div className="max-w-6xl mx-auto adv-reveal adv-d2">
          <div
            className="adv-console relative bg-[#080808]/80 backdrop-blur-sm"
            style={{ boxShadow: `0 40px 120px -40px ${accent}30` }}
          >
            {/* Animated gradient edge */}
            <div aria-hidden className="adv-edge" style={{ ["--acc" as string]: accent }} />

            {/* Hoek-brackets */}
            <span aria-hidden className="adv-bracket adv-tl" style={{ borderColor: accent }} />
            <span aria-hidden className="adv-bracket adv-tr" style={{ borderColor: accent }} />
            <span aria-hidden className="adv-bracket adv-bl" style={{ borderColor: accent }} />
            <span aria-hidden className="adv-bracket adv-br" style={{ borderColor: accent }} />

            {/* Top progress line */}
            <div
              aria-hidden
              className="absolute top-0 left-0 h-px transition-all duration-700 ease-out z-10"
              style={{ width: `${pct}%`, background: accent, boxShadow: `0 0 14px ${accent}` }}
            />

            <div className="relative grid lg:grid-cols-12">
              {/* ════ LINKER RAIL ════ */}
              <div className="lg:col-span-5 relative p-8 sm:p-10 lg:p-14 lg:border-r border-white/[0.06] flex flex-col">
                {!isResult && (
                  <div key={`rail-${step}`} className="adv-fade flex flex-col h-full">
                    {/* Giant numeral */}
                    <div className="relative mb-8">
                      <span
                        className="adv-num block leading-none font-extralight select-none"
                        style={{ ["--acc" as string]: accent }}
                      >
                        {String(step + 1).padStart(2, "0")}
                      </span>
                      <span className="absolute top-2 left-0 text-white/30 text-[10px] tracking-[0.4em] font-light uppercase">
                        {current.tag}
                      </span>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-extralight text-white tracking-[0.005em] leading-[1.12]">
                      {current.q}
                    </h3>
                    <p className="mt-4 text-white/40 text-sm font-light leading-relaxed tracking-wide max-w-xs">
                      {current.hint}
                    </p>

                    {/* Antwoord-spoor */}
                    {answeredTrail.length > 0 && (
                      <div className="mt-auto pt-10">
                        <p className="text-white/25 text-[9px] tracking-[0.4em] font-light uppercase mb-5">
                          Jouw antwoorden
                        </p>
                        <div className="space-y-4">
                          {answeredTrail.map((t, i) => (
                            <div key={i} className="adv-trail flex items-start gap-4" style={{ animationDelay: `${i * 0.07}s` }}>
                              <span
                                className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: STEP_ACCENTS[i], boxShadow: `0 0 8px ${STEP_ACCENTS[i]}` }}
                              />
                              <div>
                                <p className="text-white/30 text-[9px] tracking-[0.3em] font-light uppercase">{t.tag}</p>
                                <p className="text-white/65 text-sm font-light tracking-wide leading-snug">{t.value}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {isResult && advice && (
                  <div key="rail-result" className="adv-fade flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-8">
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full"
                        style={{ background: accent, boxShadow: `0 0 12px ${accent}` }}
                      />
                      <p className="text-[10px] tracking-[0.45em] font-light uppercase" style={{ color: accent }}>
                        Jouw advies · op maat
                      </p>
                    </div>

                    <p className="text-white/35 text-sm font-light tracking-[0.25em] uppercase mb-4">Ons advies</p>
                    <h3 className="text-3xl lg:text-[2.7rem] font-extralight text-white tracking-[0.005em] leading-[1.08]">
                      <span className="italic" style={{ color: accent }}>{advice.service.title}.</span>
                    </h3>

                    <p className="mt-7 text-white/55 text-base font-light leading-[1.9] tracking-wide">
                      {advice.service.base}
                    </p>

                    <div className="mt-auto pt-10 flex items-center gap-3 text-white/30">
                      <span className="inline-block w-8 h-px" style={{ background: accent }} />
                      <span className="text-[9px] tracking-[0.35em] font-light uppercase">
                        Samengesteld op basis van je 4 antwoorden
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* ════ RECHTER CONTENT ════ */}
              <div className="lg:col-span-7 relative p-8 sm:p-10 lg:p-14 flex flex-col min-h-[460px]">
                {/* meta top */}
                <div className="flex items-center justify-between mb-9">
                  <span className="text-white/30 text-[10px] tracking-[0.4em] font-light uppercase">
                    {isResult ? "Resultaat" : `Vraag ${step + 1} — ${STEPS.length}`}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      {STEPS.map((_, i) => (
                        <span
                          key={i}
                          className="h-1 rounded-full transition-all duration-500"
                          style={{
                            width: !isResult && i === step ? 24 : 7,
                            background: i < step || isResult ? accent : i === step ? "#ffffff" : "rgba(255,255,255,0.16)",
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-white/30 text-[10px] tracking-[0.2em] font-light tabular-nums">{pct}%</span>
                  </div>
                </div>

                {/* Questions */}
                {!isResult && (
                  <div key={`opts-${step}`} className={leaving ? "adv-fade adv-leave flex-1" : "adv-fade flex-1"}>
                    <div className="space-y-3">
                      {current.options.map((opt, i) => {
                        const selected = answers[current.id as keyof Answers] === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => select(opt.id)}
                            className={`adv-opt group relative w-full flex items-center gap-5 text-left overflow-hidden border px-5 py-4 lg:px-6 lg:py-[1.15rem] transition-all duration-300 ${
                              selected ? "border-transparent" : "border-white/10 hover:border-white/25"
                            }`}
                            style={{ animationDelay: `${0.05 + i * 0.06}s`, ...(selected ? { borderColor: accent } : {}) }}
                          >
                            {/* sweep fill */}
                            <span
                              aria-hidden
                              className="adv-sweep absolute inset-y-0 left-0 w-full origin-left transition-transform duration-500 ease-out"
                              style={{ background: `linear-gradient(90deg, ${accent}1f, transparent)`, transform: selected ? "scaleX(1)" : "scaleX(0)" }}
                            />
                            <span
                              className="relative flex-shrink-0 w-9 h-9 flex items-center justify-center text-xs font-light tracking-widest transition-all duration-300"
                              style={
                                selected
                                  ? { background: accent, color: "#050505" }
                                  : { border: "1px solid rgba(255,255,255,0.16)", color: "rgba(255,255,255,0.5)" }
                              }
                            >
                              {LETTERS[i]}
                            </span>
                            <span className="relative flex-1">
                              <span className="block text-white text-[15px] lg:text-base font-light tracking-wide">
                                {opt.label}
                              </span>
                              {opt.desc && (
                                <span className="block text-white/35 text-xs font-light tracking-wide mt-0.5">
                                  {opt.desc}
                                </span>
                              )}
                            </span>
                            <svg
                              className="relative w-4 h-4 text-white/20 group-hover:text-white/70 group-hover:translate-x-1.5 transition-all duration-300 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Result */}
                {isResult && advice && (
                  <div key="result" className={leaving ? "adv-fade adv-leave flex-1" : "adv-fade flex-1"}>
                    <p className="text-white/30 text-[9px] tracking-[0.4em] font-light uppercase mb-5">Waarom dit past</p>
                    <div className="space-y-px bg-white/[0.04] border border-white/[0.05]">
                      {advice.points.map((p, i) => (
                        <div key={i} className="bg-[#080808] flex items-start gap-4 px-5 py-4">
                          <span className="text-xs font-light tabular-nums pt-0.5" style={{ color: accent }}>
                            0{i + 1}
                          </span>
                          <p className="text-white/60 text-sm font-light leading-[1.65] tracking-wide">{p}</p>
                        </div>
                      ))}
                    </div>

                    {/* Spec sheet */}
                    <div className="mt-7 border-t border-white/[0.06]">
                      {[
                        { l: "Aanpak", v: advice.approach },
                        { l: "Tijdlijn", v: advice.timeline },
                      ].map((row) => (
                        <div key={row.l} className="flex flex-col sm:flex-row gap-2 sm:gap-6 py-4 border-b border-white/[0.06]">
                          <p className="sm:w-28 flex-shrink-0 text-white/30 text-[10px] tracking-[0.3em] font-light uppercase pt-0.5">
                            {row.l}
                          </p>
                          <p className="text-white/60 text-sm font-light leading-[1.65] tracking-wide">{row.v}</p>
                        </div>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="mt-9 flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/#contact"
                        className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-white text-black text-[11px] tracking-[0.3em] font-light hover:tracking-[0.4em] transition-all duration-500"
                      >
                        PLAN EEN GESPREK
                        <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                      <Link
                        href={advice.service.href}
                        className="inline-flex items-center justify-center gap-3 px-7 py-4 border text-white text-[11px] tracking-[0.3em] font-light transition-all duration-500 hover:bg-white/5"
                        style={{ borderColor: `${accent}66` }}
                      >
                        {advice.service.cta.toUpperCase()}
                      </Link>
                    </div>

                    {advice.secondary && (
                      <Link
                        href={advice.secondary.href}
                        className="mt-5 inline-flex items-center gap-2 text-white/40 hover:text-white text-xs tracking-[0.15em] font-light transition-colors duration-300"
                      >
                        {advice.secondary.label}
                        <span aria-hidden>↗</span>
                      </Link>
                    )}
                  </div>
                )}

                {/* ── Console footer ── */}
                <div className="mt-auto pt-9 flex items-center justify-between gap-4">
                  {!isResult ? (
                    <>
                      <button
                        type="button"
                        onClick={back}
                        disabled={step === 0}
                        className={`text-[10px] tracking-[0.3em] font-light uppercase transition-colors duration-300 ${
                          step === 0 ? "text-white/15 cursor-default" : "text-white/40 hover:text-white"
                        }`}
                      >
                        ← Terug
                      </button>
                      <span className="text-white/20 text-[10px] tracking-[0.3em] font-light uppercase">
                        Geen verplichtingen
                      </span>
                    </>
                  ) : (
                    <>
                      <p className="text-white/30 text-xs font-light leading-relaxed tracking-wide max-w-sm">
                        Geen verkooppraatje. We zeggen het eerlijk als we niet de beste match zijn —
                        dan denken we toch graag even met je mee.
                      </p>
                      <button
                        type="button"
                        onClick={restart}
                        className="flex-shrink-0 text-white/40 hover:text-white text-[10px] tracking-[0.3em] font-light uppercase transition-colors duration-300"
                      >
                        ↺ Opnieuw
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .adv-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1), transform 1.1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .adv-reveal.adv-in {
          opacity: 1;
          transform: translateY(0);
        }
        .adv-reveal.adv-d1 {
          transition-delay: 0.12s;
        }
        .adv-reveal.adv-d2 {
          transition-delay: 0.26s;
        }

        /* Shimmer op 'Adviseren.' */
        .adv-shimmer {
          background: linear-gradient(100deg, rgba(255, 255, 255, 0.4) 30%, #ffffff 50%, rgba(255, 255, 255, 0.4) 70%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: advShimmer 6s linear infinite;
        }
        @keyframes advShimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* Console + animated edge */
        .adv-console {
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .adv-edge {
          position: absolute;
          inset: -1px;
          padding: 1px;
          background: linear-gradient(130deg, transparent 30%, var(--acc) 50%, transparent 70%);
          background-size: 300% 300%;
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.55;
          animation: advEdge 8s ease infinite;
          pointer-events: none;
        }
        @keyframes advEdge {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Hoek-brackets */
        .adv-bracket {
          position: absolute;
          width: 20px;
          height: 20px;
          z-index: 10;
          opacity: 0.7;
        }
        .adv-tl { top: -1px; left: -1px; border-top: 1px solid; border-left: 1px solid; }
        .adv-tr { top: -1px; right: -1px; border-top: 1px solid; border-right: 1px solid; }
        .adv-bl { bottom: -1px; left: -1px; border-bottom: 1px solid; border-left: 1px solid; }
        .adv-br { bottom: -1px; right: -1px; border-bottom: 1px solid; border-right: 1px solid; }

        /* Giant ghost numeral */
        .adv-num {
          font-size: clamp(96px, 13vw, 168px);
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.14);
          background: linear-gradient(180deg, var(--acc) 0%, transparent 85%);
          -webkit-background-clip: text;
          background-clip: text;
          opacity: 0.9;
        }

        /* Grain */
        .adv-grain {
          opacity: 0.5;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E");
        }

        /* Step / option entry */
        .adv-fade {
          animation: advFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .adv-fade.adv-leave {
          animation: advFadeOut 0.22s ease-in both;
        }
        @keyframes advFadeIn {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes advFadeOut {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-12px); }
        }
        .adv-opt {
          animation: advOptIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes advOptIn {
          0% { opacity: 0; transform: translateX(18px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .adv-opt:hover .adv-sweep {
          transform: scaleX(1);
        }
        .adv-trail {
          animation: advFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .adv-shimmer, .adv-edge { animation: none; }
        }
      `}</style>
    </section>
  );
}
