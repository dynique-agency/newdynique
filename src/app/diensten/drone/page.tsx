"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect } from "react";
import { ProcessStyles } from "@/components/processen/Visuals";
import FaqSection, { faqJsonLd } from "@/components/FaqSection";
import SocialProofSection from "@/components/SocialProofSection";

const ACCENT = "#d4a574";

const FAQ = [
  {
    q: "Wat kost een dronevideo of -shoot?",
    a: "Dat hangt af van de opdracht: duur, locatie, aantal shots en de bewerking achteraf. We geven na een kort gesprek een concreet voorstel met prijsindicatie, zodat je vooraf weet waar je aan toe bent.",
  },
  {
    q: "Hebben jullie een vergunning nodig om met een drone te vliegen?",
    a: "Onze drone weegt minder dan 249 gram, wat volgens de Europese dronewetgeving in de lichtste categorie valt — daarvoor is geen aparte vergunning vereist. We houden ons wel altijd aan de geldende regels rond vluchtzones (bijvoorbeeld rond vliegvelden) en vragen waar dat nodig is toestemming ter plekke.",
  },
  {
    q: "Kan de video ook direct verwerkt worden in mijn website of marketing?",
    a: "Dat is precies waar we sterk in zijn: de footage combineren met je website of marketingcampagne, zodat de video niet los blijft staan maar ook echt bezoekers en aanvragen oplevert.",
  },
  {
    q: "Werken jullie ook buiten Limburg?",
    a: "Ja, we vliegen door heel Nederland en België — overleg gewoon even wat mogelijk is voor jouw locatie.",
  },
];

export default function DroneDienst() {
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
    { title: "Aerial footage", desc: "Spectaculaire luchtopnames van je locatie, evenement of gebouw. 4K videokwaliteit met de DJI Mini 5 Pro." },
    { title: "Bedrijfsfilm", desc: "Professionele bedrijfsvideo die je verhaal vertelt. Van interview tot drone shot, volledig verzorgd." },
    { title: "Social media reels", desc: "Korte, impactvolle video's voor Instagram, TikTok en LinkedIn. Vertical én horizontal formaat." },
    { title: "Drone fotografie", desc: "Haarscherpe luchtfoto's voor je website, brochure of vastgoedpresentatie." },
    { title: "Evenement opnames", desc: "Live registratie van events, openingen of producties vanuit unieke invalshoeken." },
    { title: "Vastgoed video's", desc: "Maak elke woning of locatie onweerstaanbaar met professionele drone tours." },
  ];

  const specs = [
    { label: "Camera", value: "4K / 60fps" },
    { label: "Sensor", value: "1/1.3 inch CMOS" },
    { label: "Vluchttijd", value: "45 min. per accu" },
    { label: "Bereik", value: "20 km transmissie" },
    { label: "Windbestendig", value: "tot 12 m/s" },
    { label: "Gewicht", value: "< 249g (geen vergunning)" },
  ];

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
                <p className="text-white/45 text-[10px] tracking-[0.5em] font-light">VIDEO &amp; AERIAL · MAATWERK</p>
              </div>
              <h1
                className="text-[clamp(40px,7vw,84px)] font-extralight text-white tracking-[0.02em] leading-[1.03] mb-8"
                style={{ animation: "fadeInUp 0.8s ease-out 0.25s both" }}
              >
                Drone &amp;
                <br />
                <span className="italic" style={{ color: ACCENT }}>video.</span>
              </h1>
              <p
                className="text-white/55 text-lg lg:text-xl font-extralight tracking-wide max-w-2xl mb-4 leading-relaxed"
                style={{ animation: "fadeInUp 0.8s ease-out 0.4s both" }}
              >
                Jouw merk vanuit een nieuw perspectief. Spectaculaire aerial footage en bedrijfsfilms met de DJI Mini 5 Pro.
              </p>
              <p
                className="text-white/35 text-xs tracking-[0.25em] font-light mb-12"
                style={{ animation: "fadeInUp 0.8s ease-out 0.5s both" }}
              >
                4K · 60FPS · DJI MINI 5 PRO · LIMBURG &amp; OMGEVING
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4"
                style={{ animation: "fadeInUp 0.8s ease-out 0.6s both" }}
              >
                <Link
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-3 px-10 py-4 text-black text-[11px] tracking-[0.25em] font-medium transition-all duration-300"
                  style={{ background: ACCENT }}
                >
                  OPNAME AANVRAGEN
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

        {/* Equipment specs */}
        <section className="relative px-6 lg:px-12 py-16 lg:py-20 border-t border-white/[0.06]">
          <div className="container mx-auto">
            <p className="text-white/30 text-xs tracking-[0.4em] text-center mb-10 font-light">DJI MINI 5 PRO · SPECIFICATIES</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/[0.06] border border-white/[0.06] max-w-4xl mx-auto">
              {specs.map((spec, i) => (
                <div key={i} className="bg-[#070707] p-6 text-center">
                  <div className="text-white/80 text-sm font-light tracking-wide mb-2">{spec.value}</div>
                  <div className="text-[10px] tracking-[0.2em] font-light" style={{ color: ACCENT }}>{spec.label.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="relative px-6 lg:px-12 py-20 lg:py-28 border-t border-white/[0.06]">
          <div className="container mx-auto">
            <div className="max-w-3xl mb-14 lg:mb-16 animate-on-scroll">
              <p className="text-[10px] tracking-[0.5em] font-light mb-5" style={{ color: ACCENT }}>WAT WE VASTLEGGEN</p>
              <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.12]">
                Beelden die
                <span className="text-white/45 italic"> blijven hangen.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]">
              {services.map((s, i) => (
                <div key={i} className="drone-card group bg-[#070707] p-8 lg:p-10 animate-on-scroll relative overflow-hidden" style={{ transitionDelay: `${i * 0.07}s` }}>
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

        {/* Combinatie voordeel */}
        <section className="relative px-6 lg:px-12 py-20 lg:py-24 border-t border-white/[0.06] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 50% 50%, ${ACCENT}10 0%, transparent 60%)` }} />
          <div className="container mx-auto relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-extralight text-white tracking-[0.02em] mb-8 animate-on-scroll">
                Drone + website
                <span className="italic" style={{ color: ACCENT }}> = maximale impact.</span>
              </h2>
              <p className="text-white/55 font-light tracking-wide leading-relaxed mb-10 animate-on-scroll delay-100">
                Uniek aan Dynique: we combineren drone footage direct met je website of marketingcampagne.
                De video gaat live op je site, in je social media en in je ads. Alles in één traject,
                één aanspreekpunt, één factuur.
              </p>
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-3 px-12 py-4 text-black text-[11px] tracking-[0.25em] font-medium transition-all duration-300 animate-on-scroll delay-200"
                style={{ background: ACCENT }}
              >
                COMBIPAKKET AANVRAGEN
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="relative px-6 lg:px-12 py-20 lg:py-28 border-t border-white/[0.06]">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <p className="text-[10px] tracking-[0.5em] font-light mb-5" style={{ color: ACCENT }}>HOE WE WERKEN</p>
              <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.12] mb-16 animate-on-scroll">
                Van brief
                <span className="text-white/45 italic"> tot beelden.</span>
              </h2>
              {[
                { step: "01", title: "Briefing & locatie verkenning", desc: "We bespreken wat je wilt bereiken, de locatie en de beste vliegtijden voor optimale lichtval." },
                { step: "02", title: "Opnamedag", desc: "De drone gaat de lucht in. Wij verzorgen alle vluchten, shots en registraties ter plekke." },
                { step: "03", title: "Montage & nabewerking", desc: "Kleurgrading, muziek, tekst en logo's worden verwerkt in een professioneel eindproduct." },
                { step: "04", title: "Oplevering", desc: "Je ontvangt de video's in alle benodigde formaten: website, social, 4K master." },
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

        {/* CTA */}
        <section className="relative px-6 lg:px-12 py-24 lg:py-32 border-t border-white/[0.06] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 80% 30%, ${ACCENT}14 0%, transparent 55%)` }} />
          <div className="container mx-auto relative text-center">
            <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] mb-6 animate-on-scroll">
              Klaar voor een nieuw perspectief?
            </h2>
            <p className="text-white/50 font-light tracking-wide mb-10 max-w-xl mx-auto animate-on-scroll delay-100">
              Vertel ons over je project. We sturen snel een voorstel met beschikbaarheid en prijsindicatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll delay-200">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-3 px-12 py-4 text-black text-[11px] tracking-[0.25em] font-medium transition-all duration-300"
                style={{ background: ACCENT }}
              >
                OPNAME AANVRAGEN
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

        <SocialProofSection accent={ACCENT} />
        <FaqSection faq={FAQ} accent={ACCENT} heading="Voor je begint." />
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
