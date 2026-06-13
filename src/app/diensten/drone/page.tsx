"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function DroneDienst() {
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

  return (
    <>
      <Header variant="light" />

      <main>
        {/* Hero */}
        <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
          <div
            className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "48px 48px" }}
          ></div>

          <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center py-32">
            <p
              className="text-white/40 text-xs tracking-[0.4em] font-light mb-8"
              style={{ animation: "fadeInUp 0.8s ease-out 0.2s both" }}
            >
              DYNIQUE · DIENST 04
            </p>
            <h1
              className="text-5xl sm:text-6xl md:text-8xl font-extralight text-white tracking-[0.15em] leading-tight mb-8"
              style={{ animation: "fadeInUp 0.8s ease-out 0.4s both" }}
            >
              DRONE &<br />
              <span className="font-light">VIDEO</span>
            </h1>
            <p
              className="text-white/60 text-base lg:text-xl font-extralight tracking-wide max-w-2xl mx-auto mb-4 leading-relaxed"
              style={{ animation: "fadeInUp 0.8s ease-out 0.6s both" }}
            >
              Jouw merk vanuit een nieuw perspectief. Spectaculaire aerial footage en bedrijfsfilms met de DJI Mini 5 Pro.
            </p>
            <p
              className="text-white/30 text-xs tracking-[0.25em] font-light mb-12"
              style={{ animation: "fadeInUp 0.8s ease-out 0.7s both" }}
            >
              4K · 60FPS · DJI MINI 5 PRO · LIMBURG & OMGEVING
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              style={{ animation: "fadeInUp 0.8s ease-out 0.9s both" }}
            >
              <a
                href="/#contact"
                className="px-10 py-4 bg-white text-black text-xs tracking-[0.2em] font-light hover:bg-white/90 transition-all duration-300"
              >
                OPNAME AANVRAGEN
              </a>
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

        {/* Equipment specs */}
        <section className="bg-zinc-950 py-16 lg:py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <p className="text-white/30 text-xs tracking-[0.4em] text-center mb-10 font-light">DJI MINI 5 PRO · SPECIFICATIES</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 max-w-4xl mx-auto">
              {specs.map((spec, i) => (
                <div key={i} className="bg-zinc-950 p-6 text-center">
                  <div className="text-white/80 text-sm font-light tracking-wide mb-2">{spec.value}</div>
                  <div className="text-white/30 text-xs tracking-[0.2em] font-light">{spec.label.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-white py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-light text-black tracking-[0.15em] animate-on-scroll">
                WAT WE VASTLEGGEN
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5">
              {services.map((s, i) => (
                <div key={i} className="bg-white p-10 lg:p-12 animate-on-scroll" style={{ transitionDelay: `${i * 0.07}s` }}>
                  <span className="text-black/15 text-xs tracking-[0.3em] font-light">0{i + 1}</span>
                  <h3 className="text-black text-sm tracking-[0.2em] font-light mt-4 mb-3">{s.title.toUpperCase()}</h3>
                  <div className="w-8 h-px bg-black/20 mb-4"></div>
                  <p className="text-black/50 text-sm font-light leading-relaxed tracking-wide">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Combinatie voordeel */}
        <section className="bg-black py-20 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-extralight text-white tracking-[0.15em] mb-8 animate-on-scroll">
                DRONE + WEBSITE = MAXIMALE IMPACT
              </h2>
              <p className="text-white/50 font-light tracking-wide leading-relaxed mb-10 animate-on-scroll delay-100">
                Uniek aan Dynique: we combineren drone footage direct met je website of marketingcampagne.
                De video gaat live op je site, in je social media en in je ads. Alles in één traject,
                één aanspreekpunt, één factuur.
              </p>
              <a
                href="/#contact"
                className="inline-block px-12 py-4 bg-white text-black text-xs tracking-[0.2em] font-light hover:bg-white/90 transition-all duration-300 animate-on-scroll delay-200"
              >
                COMBIPAKKET AANVRAGEN
              </a>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-white py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-light text-black tracking-[0.15em] mb-16 animate-on-scroll">
                VAN BRIEF TOT BEELDEN
              </h2>
              {[
                { step: "01", title: "Briefing & locatie verkenning", desc: "We bespreken wat je wilt bereiken, de locatie en de beste vliegtijden voor optimale lichtval." },
                { step: "02", title: "Opnamedag", desc: "De drone gaat de lucht in. Wij verzorgen alle vluchten, shots en registraties ter plekke." },
                { step: "03", title: "Montage & nabewerking", desc: "Kleurgrading, muziek, tekst en logo's worden verwerkt in een professioneel eindproduct." },
                { step: "04", title: "Oplevering", desc: "Je ontvangt de video's in alle benodigde formaten: website, social, 4K master." },
              ].map((p, i) => (
                <div key={i} className="flex gap-10 mb-12 animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="text-black/10 text-4xl font-extralight tracking-wider flex-shrink-0 w-16">{p.step}</div>
                  <div>
                    <h3 className="text-black text-sm tracking-[0.2em] font-light mb-3">{p.title.toUpperCase()}</h3>
                    <div className="w-8 h-px bg-black/20 mb-4"></div>
                    <p className="text-black/50 text-sm font-light leading-relaxed tracking-wide">{p.desc}</p>
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
              KLAAR VOOR EEN NIEUW PERSPECTIEF?
            </h2>
            <p className="text-white/50 font-light tracking-wide mb-10 max-w-xl mx-auto animate-on-scroll delay-100">
              Vertel ons over je project. We sturen snel een voorstel met beschikbaarheid en prijsindicatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll delay-200">
              <a
                href="/#contact"
                className="px-12 py-4 bg-white text-black text-xs tracking-[0.2em] font-light hover:bg-white/90 transition-all duration-300"
              >
                OPNAME AANVRAGEN
              </a>
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
