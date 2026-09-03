"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect } from "react";

export default function MarketingDienst() {
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

  const tools = ["Claude API", "GPT-4o", "Midjourney", "Meta Ads", "Google Ads", "Google Search Console", "Mailchimp", "Maatwerk integraties"];

  return (
    <>
      <Header variant="light" />

      <main>
        {/* Hero */}
        <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black"></div>
          <div
            className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "48px 48px" }}
          ></div>

          <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center py-32">
            <p
              className="text-white/40 text-xs tracking-[0.4em] font-light mb-8"
              style={{ animation: "fadeInUp 0.8s ease-out 0.2s both" }}
            >
              DYNIQUE · DIENST 03
            </p>
            <h1
              className="text-5xl sm:text-6xl md:text-8xl font-extralight text-white tracking-[0.15em] leading-tight mb-8"
              style={{ animation: "fadeInUp 0.8s ease-out 0.4s both" }}
            >
              AI<br />
              <span className="font-light">MARKETING</span>
            </h1>
            <p
              className="text-white/60 text-base lg:text-xl font-extralight tracking-wide max-w-2xl mx-auto mb-12 leading-relaxed"
              style={{ animation: "fadeInUp 0.8s ease-out 0.6s both" }}
            >
              Marketing die 24/7 voor je werkt. AI-gedreven content, social media, SEO en campagnes die converteren.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              style={{ animation: "fadeInUp 0.8s ease-out 0.8s both" }}
            >
              <Link
                href="/#contact"
                className="px-10 py-4 bg-white text-black text-xs tracking-[0.2em] font-medium hover:bg-white/90 transition-all duration-300"
              >
                START CAMPAGNE
              </Link>
              <a
                href="https://wa.me/31624572572"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border border-white/20 text-white text-xs tracking-[0.2em] font-light hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              >
                WHATSAPP
              </a>
            </div>
          </div>
        </section>

        {/* Why AI */}
        <section className="bg-white py-20 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5 animate-on-scroll">
              {[
                { label: "10×", desc: "sneller content produceren dan traditioneel" },
                { label: "Altijd", desc: "consistent met je merk en tone of voice" },
                { label: "Schaalbaar", desc: "van 1 post naar 30 posts per maand zonder extra kosten" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 text-center">
                  <div className="text-4xl font-extralight text-black tracking-wider mb-3">{item.label}</div>
                  <p className="text-black/60 text-xs font-light leading-relaxed tracking-wide">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-white py-16 lg:py-24 border-t border-black/5">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-light text-black tracking-[0.15em] animate-on-scroll">
                WAT WE DOEN
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5">
              {services.map((s, i) => (
                <div key={i} className="bg-white p-10 lg:p-12 animate-on-scroll" style={{ transitionDelay: `${i * 0.07}s` }}>
                  <span className="text-black/15 text-xs tracking-[0.3em] font-light">0{i + 1}</span>
                  <h3 className="text-black text-sm tracking-[0.2em] font-light mt-4 mb-3">{s.title.toUpperCase()}</h3>
                  <div className="w-8 h-px bg-black/20 mb-4"></div>
                  <p className="text-black/60 text-sm font-light leading-relaxed tracking-wide">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="bg-zinc-950 py-16 lg:py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <p className="text-white/30 text-xs tracking-[0.4em] text-center mb-10 font-light">AI TOOLS & PLATFORMS</p>
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
        <section className="bg-white py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-light text-black tracking-[0.15em] mb-16 animate-on-scroll">
                ONZE AANPAK
              </h2>
              {[
                { step: "01", title: "Merk analyse", desc: "We leren je merk, doelgroep en concurrenten kennen. Dit wordt de basis voor alle content en campagnes." },
                { step: "02", title: "Strategie & kalender", desc: "Een content- en campagnestrategie op maat. Welk kanaal, welke boodschap, welk budget." },
                { step: "03", title: "AI content productie", desc: "We trainen AI-modellen op jouw merk en produceren content op schaal, altijd jouw stem." },
                { step: "04", title: "Analyseren & optimaliseren", desc: "Maandelijkse rapportage met wat werkt en wat beter kan. Data stuurt de volgende maand." },
              ].map((p, i) => (
                <div key={i} className="flex gap-10 mb-12 animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="text-black/10 text-4xl font-extralight tracking-wider flex-shrink-0 w-16">{p.step}</div>
                  <div>
                    <h3 className="text-black text-sm tracking-[0.2em] font-light mb-3">{p.title.toUpperCase()}</h3>
                    <div className="w-8 h-px bg-black/20 mb-4"></div>
                    <p className="text-black/60 text-sm font-light leading-relaxed tracking-wide">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.15em] mb-6 animate-on-scroll">
              LAAT MARKETING VOOR JOU WERKEN.
            </h2>
            <p className="text-white/50 font-light tracking-wide mb-10 max-w-xl mx-auto animate-on-scroll delay-100">
              Geen tijd voor marketing? Wij regelen het. Consistent, professioneel, resultaatgericht.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll delay-200">
              <Link
                href="/#contact"
                className="px-12 py-4 bg-white text-black text-xs tracking-[0.2em] font-medium hover:bg-white/90 transition-all duration-300"
              >
                GRATIS STRATEGIE GESPREK
              </Link>
              <a
                href="https://wa.me/31624572572"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-4 border border-white/20 text-white text-xs tracking-[0.2em] font-light hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              >
                WHATSAPP
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

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
      `}</style>
    </>
  );
}
