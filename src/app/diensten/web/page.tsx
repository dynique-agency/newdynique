"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect } from "react";
import { ProcessStyles } from "@/components/processen/Visuals";
import FaqSection, { faqJsonLd } from "@/components/FaqSection";
import SocialProofSection from "@/components/SocialProofSection";
import LeadFormSection from "@/components/LeadFormSection";

const ACCENT = "#d4a574";

const FAQ = [
  {
    q: "Wat kost een website of web app?",
    a: "Een gemiddelde website begint rond de €3.500 — afhankelijk van omvang en functionaliteit; een webshop start hoger. Een web app (klantportaal, boekingssysteem, dashboard) is meer maatwerk en varieert sterker: reken op €4.000 voor een kleine, gerichte tool tot €15.000–€35.000 of meer voor een uitgebreider systeem. Na de intake krijg je een concreet voorstel met een vaste prijs.",
  },
  {
    q: "Bouwen jullie ook apps, of alleen websites?",
    a: "We bouwen voornamelijk web apps: software die in de browser draait en op elk device — ook mobiel — perfect werkt, zonder dat iemand iets hoeft te installeren via een app store. Voor de meeste klantportalen, boekingssystemen en interne tools is dat sneller te bouwen, makkelijker te onderhouden en net zo prettig in gebruik als een native app. Twijfel je of dat bij jouw idee past? Dat bespreken we gewoon eerlijk in het intakegesprek.",
  },
  {
    q: "Hoe snel staat mijn website of web app live?",
    a: "Een website staat meestal binnen 7 tot 14 dagen live. Een web app met meer functionaliteit — koppelingen, gebruikersrollen, een klantportaal — vraagt meer tijd; na de intake krijg je een realistisch tijdspad, geen slag in de lucht.",
  },
  {
    q: "Kunnen jullie koppelen met systemen die we al gebruiken?",
    a: "In veel gevallen wel. We kijken tijdens de intake naar wat je al gebruikt (boekhouding, CRM, betaalproviders) en bouwen de koppeling mee, zodat je niet met twee systemen naast elkaar werkt.",
  },
];

export default function WebDienst() {
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
    { title: "Bedrijfswebsite", desc: "Professionele website die bezoekers overtuigt en converteert. Mobile-first, razendsnel, SEO-ready." },
    { title: "Portfolio website", desc: "Laat je werk spreken. Strak ontwerp, perfecte presentatie, gebouwd om indruk te maken." },
    { title: "Webshop / E-commerce", desc: "Verkoop online met een webshop die soepel werkt op elk device. Betaalkoppelingen inbegrepen." },
    { title: "Web applicatie", desc: "Custom software in de browser. Klantportalen, boekingssystemen, interactieve dashboards." },
    { title: "Landingpages", desc: "Gerichte pagina's voor campagnes, ads of specifieke doelgroepen. Maximale conversie." },
    { title: "Redesign & migratie", desc: "Verouderde site? Wij bouwen hem volledig opnieuw: sneller, mooier, beter convertend." },
  ];

  const process = [
    { step: "01", title: "Intake gesprek", desc: "We bespreken je doel, doelgroep en wensen. Online of op locatie, overal in Nederland of internationaal." },
    { step: "02", title: "Design & concept", desc: "Binnen 3 dagen een eerste ontwerp. Jij geeft feedback, wij verfijnen." },
    { step: "03", title: "Bouwen", desc: "We bouwen in Next.js: snel, veilig en toekomstbestendig. Jij ziet de voortgang live." },
    { step: "04", title: "Live & doorontwikkeling", desc: "Online binnen 7–14 dagen. Daarna blijven we beschikbaar voor updates en uitbreiding." },
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
                <p className="text-white/45 text-[10px] tracking-[0.5em] font-light">WEB &amp; DESIGN · MAATWERK</p>
              </div>
              <h1
                className="text-[clamp(40px,7vw,84px)] font-extralight text-white tracking-[0.02em] leading-[1.03] mb-8"
                style={{ animation: "fadeInUp 0.8s ease-out 0.25s both" }}
              >
                Websites &amp;
                <br />
                <span className="italic" style={{ color: ACCENT }}>web apps.</span>
              </h1>
              <p
                className="text-white/55 text-lg lg:text-xl font-extralight tracking-wide max-w-2xl mb-12 leading-relaxed"
                style={{ animation: "fadeInUp 0.8s ease-out 0.4s both" }}
              >
                Van visitekaartje tot een web app laten maken op maat — klantportalen, boekingssystemen, dashboards — gebouwd in Next.js, live binnen 7 tot 14 dagen.
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
                  START JE PROJECT
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/15 text-white/70 text-[11px] tracking-[0.25em] font-light hover:border-white/40 hover:text-white transition-all duration-300"
                >
                  BEKIJK PORTFOLIO
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="relative px-6 lg:px-12 py-20 lg:py-28 border-t border-white/[0.06]">
          <div className="container mx-auto">
            <div className="max-w-3xl mb-14 lg:mb-16 animate-on-scroll">
              <p className="text-[10px] tracking-[0.5em] font-light mb-5" style={{ color: ACCENT }}>WAT WE BOUWEN</p>
              <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.12]">
                Digitale producten
                <span className="text-white/45 italic"> die jouw merk vertegenwoordigen.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]">
              {services.map((s, i) => (
                <div key={i} className="web-card group bg-[#070707] p-8 lg:p-10 animate-on-scroll relative overflow-hidden" style={{ transitionDelay: `${i * 0.07}s` }}>
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

        {/* Tech stack */}
        <section className="relative px-6 lg:px-12 py-16 lg:py-20 border-t border-white/[0.06]">
          <div className="container mx-auto">
            <p className="text-white/30 text-xs tracking-[0.4em] text-center mb-10 font-light">TECHNOLOGIE</p>
            <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
              {["Next.js 15", "React 18", "TypeScript", "Tailwind CSS", "Cloudflare Pages", "Vercel"].map((tech) => (
                <span key={tech} className="text-white/50 text-xs tracking-[0.25em] font-light border border-white/10 px-5 py-2.5 hover:border-white/30 hover:text-white/80 transition-all duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="relative px-6 lg:px-12 py-20 lg:py-28 border-t border-white/[0.06]">
          <div className="container mx-auto">
            <div className="max-w-3xl mb-14 animate-on-scroll">
              <p className="text-[10px] tracking-[0.5em] font-light mb-5" style={{ color: ACCENT }}>HOE WE WERKEN</p>
              <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.12]">
                Van eerste gesprek
                <span className="text-white/45 italic"> tot live website.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">
              {process.map((p, i) => (
                <div key={i} className="web-card group bg-[#070707] p-7 lg:p-8 animate-on-scroll relative overflow-hidden" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="absolute top-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700" style={{ background: ACCENT }} />
                  <div className="flex items-baseline gap-3 mb-5">
                    <span className="text-2xl font-extralight" style={{ color: ACCENT }}>{p.step}</span>
                    <div className="flex-1 h-px bg-white/[0.08]" />
                  </div>
                  <h3 className="text-white text-[13px] tracking-[0.2em] font-light mb-2.5 uppercase">{p.title}</h3>
                  <p className="text-white/50 text-sm font-light leading-relaxed tracking-wide">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SocialProofSection accent={ACCENT} />
        <FaqSection faq={FAQ} accent={ACCENT} heading="Voor je begint." />
        <LeadFormSection
          accent={ACCENT}
          openingLine="Hi! Ik wil graag een website of web app laten maken en hoor graag wat de mogelijkheden zijn."
          messagePrompt="Wat voor website of web app heb je in gedachten?"
        />
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
