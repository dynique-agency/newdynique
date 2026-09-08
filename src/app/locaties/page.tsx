"use client";

import Link from "next/link";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqSection, { faqJsonLd } from "@/components/FaqSection";
import SocialProofSection from "@/components/SocialProofSection";
import LeadFormSection from "@/components/LeadFormSection";

const ACCENT = "#d4a574";

const NL_DE = [
  { city: "Maastricht", href: "/locaties/maastricht", region: "Zuid-Limburg", hook: "Horeca, retail en juridische dienstverlening rond Vrijthof en Wyck." },
  { city: "Heerlen", href: "/locaties/heerlen", region: "Parkstad Limburg", hook: "Zorgpraktijken en bedrijven op bedrijventerrein Avantis." },
  { city: "Sittard", href: "/locaties/sittard", region: "Westelijke Mijnstreek", hook: "Toeleveranciers rond Chemelot en retail in de binnenstad." },
  { city: "Eindhoven", href: "/locaties/eindhoven", region: "Brainport", hook: "Tech-startups en design-studio's rond Strijp-S en High Tech Campus." },
  { city: "Aken", href: "/locaties/aken", region: "Duitsland — Euregio", hook: "Meertalig (DE/NL/EN) voor bedrijven die de grens over werken." },
];

const BE = [
  { city: "Hasselt", href: "/locaties/hasselt", region: "Belgisch Limburg", hook: "Mode, retail en tech rond Corda Campus." },
  { city: "Genk", href: "/locaties/genk", region: "Belgisch Limburg", hook: "Energie-innovatie, creatieve sector en een van de meest diverse steden van België." },
  { city: "Tongeren", href: "/locaties/tongeren", region: "Belgisch Limburg", hook: "De oudste stad van België — erfgoedtoerisme, horeca en retail." },
  { city: "Maasmechelen", href: "/locaties/maasmechelen", region: "Belgisch Limburg", hook: "Retail en toerisme rond Maasmechelen Village, vlak bij de grens." },
  { city: "Sint-Truiden", href: "/locaties/sint-truiden", region: "Limburgse fruitstreek", hook: "Fruitteelt, verwerking en handel in het hart van Haspengouw." },
];

const FAQ = [
  {
    q: "Werken jullie ook buiten deze 10 locaties?",
    a: "Deze pagina's zijn plekken waar we al aantoonbaar actief zijn of een concreet, onderbouwd verhaal hebben — geen volledige dekkingskaart. Buiten deze lijst werken we net zo goed, in heel Nederland en België; overleg gewoon even wat voor jouw locatie mogelijk is.",
  },
  {
    q: "Waarom staat niet elke stad in Limburg op deze lijst?",
    a: "Bewust — we bouwen alleen een pagina voor een stad als er een echt, specifiek verhaal is te vertellen (een sector, een landmark, een reden), niet als vinkje voor zoveel mogelijk dekking. Liever 10 pagina's die kloppen dan 30 die allemaal hetzelfde zeggen.",
  },
  {
    q: "Komen jullie ook op locatie langs?",
    a: "Ja, altijd — de gratis procesanalyse gebeurt het liefst op de plek waar het werk gebeurt, of dat nu in Maastricht, Aken of Genk is. Vanuit Vaals is dat voor al deze locaties goed te doen.",
  },
];

export default function LocatiesPage() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      document.querySelectorAll(".anim").forEach((el) => el.classList.add("animate-in"));
      return;
    }
    const o = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("animate-in"); o.unobserve(e.target); }
      }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".anim").forEach((el) => o.observe(el));
    return () => o.disconnect();
  }, []);

  const jsonLd = faqJsonLd(FAQ);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header variant="light" />

      <main className="relative bg-[#050505] min-h-screen overflow-hidden">
        <div aria-hidden className="fixed top-0 right-0 w-[800px] h-[800px] pointer-events-none opacity-40"
          style={{ background: `radial-gradient(circle, ${ACCENT}25 0%, transparent 60%)` }} />
        <div aria-hidden className="fixed bottom-0 left-0 w-[600px] h-[600px] pointer-events-none opacity-30"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%)" }} />

        {/* HERO */}
        <section className="relative pt-40 lg:pt-52 pb-20 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-10 anim">
                <span className="inline-block w-8 h-[1px]" style={{ background: ACCENT }}></span>
                <p className="text-[10px] tracking-[0.5em] font-light uppercase" style={{ color: ACCENT }}>Locaties</p>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-white tracking-[0.02em] leading-[1.02] anim delay-1">
                Vanuit Vaals, actief<br />
                <span className="italic text-white/50">in Zuid-Limburg en België.</span>
              </h1>
              <p className="mt-10 max-w-2xl text-white/55 text-base lg:text-xl font-light leading-[1.85] tracking-wide anim delay-2">
                Dynique is gevestigd in Vaals, op het drielandenpunt van Nederland, België en Duitsland — en dat merk je
                aan waar we werken. Geen callcenter-vestigingen of nepadressen: elke locatie hieronder is een plek waar
                we daadwerkelijk komen, met een eigen verhaal over de sector, de mensen en de manier van zakendoen die
                er hoort.
              </p>
            </div>
          </div>
        </section>

        {/* NL + DE */}
        <section className="relative py-20 lg:py-28 border-t border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <p className="text-[10px] tracking-[0.5em] font-light uppercase mb-10 anim" style={{ color: ACCENT }}>
              Nederland &amp; Duitsland
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
              {NL_DE.map((c, i) => (
                <Link key={c.href} href={c.href}
                  className="group bg-[#050505] p-8 lg:p-10 anim relative overflow-hidden" style={{ transitionDelay: `${i * 0.06}s` }}>
                  <div className="absolute top-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700" style={{ background: ACCENT }} />
                  <p className="text-white/35 text-[10px] tracking-[0.3em] font-light uppercase mb-3">{c.region}</p>
                  <h2 className="text-white text-2xl font-extralight tracking-wide mb-4">{c.city}</h2>
                  <p className="text-white/50 text-sm font-light leading-relaxed tracking-wide mb-6">{c.hook}</p>
                  <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] font-light" style={{ color: ACCENT }}>
                    BEKIJK
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* BE */}
        <section className="relative py-20 lg:py-28 border-t border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <p className="text-[10px] tracking-[0.5em] font-light uppercase mb-6 anim" style={{ color: ACCENT }}>
              België
            </p>
            <p className="max-w-2xl text-white/50 text-sm font-light leading-relaxed tracking-wide mb-10 anim delay-1">
              Grensoverschrijdend werken tussen Nederland en België is bij ons geen uitzondering — btw-verlegging en
              correcte facturatie regelen we standaard, zonder gedoe.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
              {BE.map((c, i) => (
                <Link key={c.href} href={c.href}
                  className="group bg-[#050505] p-8 lg:p-10 anim relative overflow-hidden" style={{ transitionDelay: `${i * 0.06}s` }}>
                  <div className="absolute top-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700" style={{ background: ACCENT }} />
                  <p className="text-white/35 text-[10px] tracking-[0.3em] font-light uppercase mb-3">{c.region}</p>
                  <h2 className="text-white text-2xl font-extralight tracking-wide mb-4">{c.city}</h2>
                  <p className="text-white/50 text-sm font-light leading-relaxed tracking-wide mb-6">{c.hook}</p>
                  <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] font-light" style={{ color: ACCENT }}>
                    BEKIJK
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <SocialProofSection accent={ACCENT} />
        <FaqSection faq={FAQ} accent={ACCENT} heading="Over onze locaties." />
        <LeadFormSection
          accent={ACCENT}
          openingLine="Hi! Ik wil weten of Dynique ook in mijn regio langskomt voor een gratis procesanalyse."
          messagePrompt="In welke stad of regio zit je?"
        />
      </main>

      <Footer />

      <style jsx global>{`
        .anim { opacity: 0; transform: translateY(20px); transition: opacity 1s ease-out, transform 1s ease-out; }
        .anim.animate-in { opacity: 1; transform: translateY(0); }
        .anim.delay-1 { transition-delay: 0.15s; }
        .anim.delay-2 { transition-delay: 0.3s; }
      `}</style>
    </>
  );
}
