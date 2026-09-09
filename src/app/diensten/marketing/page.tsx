"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect } from "react";
import FaqSection, { faqJsonLd } from "@/components/FaqSection";
import { ProcessStyles } from "@/components/processen/Visuals";

const ACCENT = "#d4a574";

const FAQ = [
  {
    q: "Doen jullie ook social media beheer, of alleen advertenties?",
    a: "Beide. We plaatsen en beheren social media-content (Instagram, LinkedIn, Facebook) én draaien betaalde campagnes. Jij levert de input en het verhaal, wij zorgen dat het consistent en op de juiste momenten online komt.",
  },
  {
    q: "Wat kost marketing- of SEO-begeleiding?",
    a: "Dat hangt af van de omvang: alleen SEO-optimalisatie van je bestaande site is anders dan doorlopend social media-beheer plus advertentiecampagnes. In het gratis strategiegesprek brengen we in kaart wat past bij jouw doelen en budget, en krijg je een concreet voorstel.",
  },
  {
    q: "Is SEO iets aparts, of zit dat bij de website inbegrepen?",
    a: "Een nieuwe website die we bouwen is technisch al SEO-ready (snelheid, structuur, metadata). Doorlopende SEO — contentstrategie, linkbuilding, blijven ranken op de juiste zoektermen — is een aparte, doorlopende dienst, omdat dat nu eenmaal doorlopende aandacht vraagt in plaats van een eenmalige bouwklus.",
  },
  {
    q: "Kunnen jullie ook alleen social media doen, zonder advertentiebudget?",
    a: "Ja. Social media-beheer en betaalde advertenties zijn twee losse knoppen — je kunt met alleen consistent, goed beheerd social media beginnen en later pas advertentiebudget toevoegen als dat past.",
  },
];

export default function MarketingDienst() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => el.classList.add("animate-in"));
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const services = [
    { title: "AI Content creatie", desc: "Blogs, social posts, landingpages en productbeschrijvingen gegenereerd én gecureerd met AI. Sneller, consistenter, altijd on-brand." },
    { title: "Social media automatie", desc: "Automatisch posten op Instagram, LinkedIn en Facebook op de beste momenten. Jij levert de input, wij regelen de rest." },
    { title: "SEO & zoekmachine optimalisatie", desc: "Hogere Google-ranking door slimme keyword-strategie, technische SEO en AI-gegenereerde content die rankt." },
    { title: "E-mail marketing", desc: "Geautomatiseerde e-mail flows voor leads, bestaande klanten en verlaten winkelwagens. Elke mail op het juiste moment." },
    { title: "Google & Meta Ads", desc: "Betaalde campagnes op Google en Meta die wél werken. AI-geoptimaliseerde copy, doelgroepen en budgetallocatie." },
    { title: "Merk & visuele identiteit", desc: "Logo, kleurpalet, typografie en stijlgids: een consistente uitstraling die je merk onderscheidt." },
  ];

  const proof = [
    {
      title: "Mens controleert AI",
      desc: "AI versnelt het schrijfwerk, maar niets gaat live zonder menselijke check op toon, feiten en merkstem.",
    },
    {
      title: "Bewezen in de praktijk",
      desc: "Voor Creemers Exclusive genereerden we alle visuals volledig met AI — geen fotoshoot, wel een premium site die binnen 3 dagen live stond.",
      href: "/portfolio/creemers-exclusive",
      linkLabel: "BEKIJK DE CASE",
    },
    {
      title: "Eén aanspreekpunt, specialistische uitvoering",
      desc: "Je schakelt met hetzelfde aanspreekpunt als voor je website. De advertising zelf wordt uitgevoerd door Dynique Digital, onze gespecialiseerde marketingtak.",
    },
  ];

  const tools = ["Claude API", "GPT-4o", "Midjourney", "Meta Ads", "Google Ads", "Google Search Console", "Mailchimp", "Maatwerk integraties"];

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

        {/* Hero */}
        <section className="relative min-h-[88vh] flex items-center px-6 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "56px 56px" }} />

          <div className="relative z-10 container mx-auto px-0 py-32 lg:py-36">
            <div className="max-w-3xl">
              <div
                className="flex items-center gap-3 mb-8"
                style={{ animation: "fadeInUp 0.8s ease-out 0.1s both" }}
              >
                <div className="w-12 h-px" style={{ background: ACCENT }} />
                <p className="text-white/45 text-[10px] tracking-[0.5em] font-light">DIGITALE MARKETING · MAATWERK</p>
              </div>
              <h1
                className="text-[clamp(40px,7vw,84px)] font-extralight text-white tracking-[0.02em] leading-[1.03] mb-8"
                style={{ animation: "fadeInUp 0.8s ease-out 0.25s both" }}
              >
                AI
                <br />
                <span className="italic" style={{ color: ACCENT }}>marketing.</span>
              </h1>
              <p
                className="text-white/55 text-lg lg:text-xl font-extralight tracking-wide max-w-2xl mb-12 leading-relaxed"
                style={{ animation: "fadeInUp 0.8s ease-out 0.4s both" }}
              >
                Marketing die voor je blijft werken. AI-ondersteunde content, social media, SEO en campagnes —
                altijd met een mens die meekijkt.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4"
                style={{ animation: "fadeInUp 0.8s ease-out 0.55s both" }}
              >
                <Link
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-3 px-10 py-4 text-black text-[11px] tracking-[0.25em] font-medium transition-all duration-300"
                  style={{ background: ACCENT }}
                >
                  START CAMPAGNE
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="https://wa.me/31624572572"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/15 text-white/70 text-[11px] tracking-[0.25em] font-light hover:border-white/40 hover:text-white transition-all duration-300"
                >
                  WHATSAPP
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Proof — grounded in precisie, geen ongefundeerde cijferclaims */}
        <section className="relative px-6 lg:px-12 py-20 lg:py-24 border-t border-white/[0.06]">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] animate-on-scroll">
              {proof.map((item, i) => (
                <div key={i} className="bg-[#070707] p-9 lg:p-10">
                  <span className="w-1.5 h-1.5 rounded-full inline-block mb-5" style={{ background: ACCENT }} />
                  <h3 className="text-white text-sm tracking-[0.15em] font-light uppercase mb-3">{item.title}</h3>
                  <p className="text-white/55 text-sm font-light leading-relaxed tracking-wide">{item.desc}</p>
                  {item.href && (
                    <Link
                      href={item.href}
                      className="group/link inline-flex items-center gap-2 mt-5 text-[10px] tracking-[0.3em] font-light transition-colors duration-300"
                      style={{ color: ACCENT }}
                    >
                      {item.linkLabel}
                      <svg className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="relative px-6 lg:px-12 py-20 lg:py-28 border-t border-white/[0.06]">
          <div className="container mx-auto">
            <div className="max-w-3xl mb-14 lg:mb-16 animate-on-scroll">
              <p className="text-[10px] tracking-[0.5em] font-light mb-5" style={{ color: ACCENT }}>WAT WE DOEN</p>
              <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.12]">
                Zichtbaar. Relevant.
                <span className="text-white/45 italic"> Onvermijdelijk.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]">
              {services.map((s, i) => (
                <div key={i} className="mkt-card group bg-[#070707] p-8 lg:p-10 animate-on-scroll relative overflow-hidden" style={{ transitionDelay: `${i * 0.07}s` }}>
                  <div className="absolute top-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700" style={{ background: ACCENT }} />
                  <span className="text-[11px] tracking-[0.3em] font-light" style={{ color: ACCENT }}>0{i + 1}</span>
                  <h3 className="text-white text-sm tracking-[0.2em] font-light mt-4 mb-3 uppercase">{s.title}</h3>
                  <div className="w-8 h-px bg-white/15 mb-4" />
                  <p className="text-white/55 text-sm font-light leading-relaxed tracking-wide">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="relative px-6 lg:px-12 py-16 lg:py-20 border-t border-white/[0.06]">
          <div className="container mx-auto">
            <p className="text-white/30 text-xs tracking-[0.4em] text-center mb-10 font-light">AI TOOLS &amp; PLATFORMS</p>
            <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
              {tools.map((tool) => (
                <span key={tool} className="text-white/50 text-xs tracking-[0.25em] font-light border border-white/10 px-5 py-2.5 hover:border-white/30 hover:text-white/80 transition-all duration-300">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Aanpak */}
        <section className="relative px-6 lg:px-12 py-20 lg:py-28 border-t border-white/[0.06]">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <p className="text-[10px] tracking-[0.5em] font-light mb-5" style={{ color: ACCENT }}>ONZE AANPAK</p>
              <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.12] mb-16 animate-on-scroll">
                Van merk-analyse
                <span className="text-white/45 italic"> tot resultaat.</span>
              </h2>
              {[
                { step: "01", title: "Merk analyse", desc: "We leren je merk, doelgroep en concurrenten kennen. Dit wordt de basis voor alle content en campagnes." },
                { step: "02", title: "Strategie & kalender", desc: "Een content- en campagnestrategie op maat. Welk kanaal, welke boodschap, welk budget." },
                { step: "03", title: "AI content productie", desc: "We trainen AI-modellen op jouw merk en produceren content op schaal, altijd met een mens die de output controleert." },
                { step: "04", title: "Analyseren & optimaliseren", desc: "Maandelijkse rapportage met wat werkt en wat beter kan. Data stuurt de volgende maand." },
              ].map((p, i) => (
                <div key={i} className="flex gap-10 mb-12 animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="text-2xl font-extralight tracking-wider flex-shrink-0 w-16" style={{ color: ACCENT }}>{p.step}</div>
                  <div>
                    <h3 className="text-white text-sm tracking-[0.2em] font-light mb-3 uppercase">{p.title}</h3>
                    <div className="w-8 h-px bg-white/15 mb-4" />
                    <p className="text-white/55 text-sm font-light leading-relaxed tracking-wide">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection faq={FAQ} accent={ACCENT} heading="Voor je begint." />

        {/* CTA */}
        <section className="relative px-6 lg:px-12 py-24 lg:py-32 border-t border-white/[0.06] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 80% 30%, ${ACCENT}14 0%, transparent 55%)` }} />
          <div className="container mx-auto relative text-center">
            <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] mb-6 animate-on-scroll">
              Laat marketing voor je werken.
            </h2>
            <p className="text-white/50 font-light tracking-wide mb-10 max-w-xl mx-auto animate-on-scroll delay-100">
              Geen tijd voor marketing? Wij regelen het. Consistent, eerlijk over wat werkt, met een mens die meekijkt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll delay-200">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-3 px-12 py-4 text-black text-[11px] tracking-[0.25em] font-medium transition-all duration-300"
                style={{ background: ACCENT }}
              >
                GRATIS STRATEGIEGESPREK
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="https://wa.me/31624572572"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-12 py-4 border border-white/15 text-white/70 text-[11px] tracking-[0.25em] font-light hover:border-white/40 hover:text-white transition-all duration-300"
              >
                WHATSAPP
              </a>
            </div>
          </div>
        </section>

        {/* Uitvoerende partij — vereist voor Meta-advertentietransparantie, en gewoon eerlijk */}
        <div className="relative px-6 lg:px-12 py-8 border-t border-white/[0.06] text-center">
          <p className="text-white/35 text-xs font-light tracking-wide max-w-2xl mx-auto">
            Deze dienst wordt uitgevoerd door <span className="text-white/55">Dynique Digital (VOF)</span>, KVK 42154878 — in samenwerking met Creemers Inclusives (KVK 90531264) voor de technische kant van je website of platform.
          </p>
        </div>
      </main>

      <Footer />
      <ProcessStyles />

      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-100 { transition-delay: 0.1s; }
        .delay-200 { transition-delay: 0.2s; }

        @media (prefers-reduced-motion: reduce) {
          .animate-on-scroll { opacity: 1; transform: none; transition: none; }
        }
      `}</style>
    </>
  );
}
