"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function StacyKohnen() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/5">
        <nav className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-black text-2xl lg:text-3xl font-light tracking-[0.3em] hover:tracking-[0.4em] transition-all duration-300"
            >
              DYNIQUE
            </Link>
            <Link
              href="/#portfolio"
              className="text-black/60 hover:text-black text-sm tracking-[0.15em] font-light transition-colors duration-300"
            >
              ← TERUG
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section with Image */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div>
              {/* Category */}
              <div
                className="mb-8"
                style={{
                  animation: "fadeInUp 0.8s ease-out 0s both",
                }}
              >
                <span className="text-black/40 text-xs tracking-[0.3em] font-light uppercase">
                  CASE STUDY — LIVE MUZIEK
                </span>
              </div>

              {/* Title */}
              <h1
                className="text-4xl lg:text-6xl font-light text-black tracking-[0.1em] leading-tight mb-8"
                style={{
                  animation: "fadeInUp 0.8s ease-out 0.2s both",
                }}
              >
                4 TALEN.
                <br />
                <span className="font-extralight">1 STEM.</span>
              </h1>

              {/* Opening Story */}
              <div
                className="space-y-6 mb-12"
                style={{
                  animation: "fadeInUp 0.8s ease-out 0.4s both",
                }}
              >
                <p className="text-lg lg:text-xl font-light text-black tracking-wide leading-relaxed">
                  Een zangeres die zingt op evenementen in Duitsland, Nederland en België. 
                  Drie landen. Vier talen. Geen online aanwezigheid.
                </p>
                <p className="text-base lg:text-lg font-light text-black/70 tracking-wide leading-relaxed">
                  Hoe vertel je één verhaal in vier talen? Hoe laat je bezoekers direct 
                  je stem horen? En hoe maak je boeken zo makkelijk dat mensen het meteen doen?
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="w-12 h-[1px] bg-black/20"></div>
                  <p className="text-sm text-black/40 tracking-[0.2em] font-light uppercase">
                    Stacy Kohnen — Sängerin
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div
                style={{
                  animation: "fadeInUp 0.8s ease-out 0.6s both",
                }}
              >
                <a
                  href="https://stacykohnen.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-4 px-12 py-4 bg-black text-white text-sm tracking-[0.2em] font-light hover:tracking-[0.3em] transition-all duration-300"
                >
                  <span>BEZOEK WEBSITE</span>
                  <span className="w-8 h-[1px] bg-white"></span>
                </a>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div
              style={{
                animation: "fadeInUp 0.8s ease-out 0.4s both",
              }}
            >
              <div className="relative w-full overflow-hidden border border-black/10">
                <img
                  src="/rsc/stacykohnen/hero.png"
                  alt="Stacy Kohnen Website"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-12 mb-20 pb-20 border-b border-black/10">
              <div>
                <p className="text-black/40 text-xs tracking-[0.2em] font-light uppercase mb-3">
                  Levertijd
                </p>
                <p className="text-3xl lg:text-4xl font-extralight text-black tracking-wide">
                  3 DAGEN
                </p>
              </div>
              <div>
                <p className="text-black/40 text-xs tracking-[0.2em] font-light uppercase mb-3">
                  Talen
                </p>
                <p className="text-3xl lg:text-4xl font-extralight text-black tracking-wide">
                  4 TALEN
                </p>
              </div>
              <div>
                <p className="text-black/40 text-xs tracking-[0.2em] font-light uppercase mb-3">
                  Jaar
                </p>
                <p className="text-3xl lg:text-4xl font-extralight text-black tracking-wide">
                  2025
                </p>
              </div>
            </div>

            {/* Challenge */}
            <div className="mb-20 pb-20 border-b border-black/10">
              <h2 className="text-3xl lg:text-4xl font-light text-black tracking-[0.1em] mb-8">
                DE UITDAGING
              </h2>
              <div className="space-y-6 text-black/70 text-base lg:text-lg font-light leading-relaxed tracking-wide">
                <p>
                  Stacy wilde een complete branding en website voor haar 
                  live-muziek bedrijf. Ze zingt op bruiloften en evenementen 
                  in de drielandenregio: Duitsland, Nederland en België.
                </p>
                <p>
                  De uitdaging? De website moest werken in 4 verschillende talen 
                  (Duits, Nederlands, Frans en Engels). Bezoekers moesten direct 
                  haar stem kunnen horen. En boeken moest zo makkelijk mogelijk zijn 
                  met een kalender-integratie.
                </p>
                <p>
                  En natuurlijk: binnen 3 dagen live.
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="mb-20 pb-20 border-b border-black/10">
              <h2 className="text-3xl lg:text-4xl font-light text-black tracking-[0.1em] mb-8">
                DE OPLOSSING
              </h2>
              <div className="space-y-6 text-black/70 text-base lg:text-lg font-light leading-relaxed tracking-wide">
                <p>
                  We hebben een volledige branding gecreëerd met een premium, 
                  zachte esthetiek die perfect past bij de trouw- en evenementenmarkt. 
                  Alle visuele content is AI-gegenereerd om het premium gevoel te 
                  behouden.
                </p>
                <p>
                  De website ondersteunt 4 talen met een naadloze taalswitch. 
                  Bezoekers kunnen direct audio samples beluisteren terwijl ze 
                  door de site navigeren. En met de geïntegreerde kalender-tool 
                  kunnen ze meteen hun beschikbaarheid checken.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                {[
                  {
                    title: "4 TALEN ONDERSTEUNING",
                    description:
                      "Volledige content in Duits, Nederlands, Frans en Engels. Perfect voor de drielandenregio.",
                  },
                  {
                    title: "REAL-TIME AUDIO",
                    description:
                      "Geïntegreerde audio player waarmee bezoekers direct kunnen luisteren tijdens het browsen.",
                  },
                  {
                    title: "INTERACTIEVE KALENDER",
                    description:
                      "Beschikbaarheids-check tool die leads direct kwalificeert met datum-selectie.",
                  },
                  {
                    title: "AI-GEGENEREERDE BRANDING",
                    description:
                      "Complete visuele identiteit en content, allemaal AI-gegenereerd voor een premium look.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="space-y-3">
                    <div className="w-12 h-[1px] bg-black"></div>
                    <h3 className="text-black text-sm tracking-[0.2em] font-light">
                      {feature.title}
                    </h3>
                    <p className="text-black/60 text-sm font-light leading-relaxed tracking-wide">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar Tool Showcase */}
            <div className="mb-20 pb-20 border-b border-black/10">
              <h2 className="text-3xl lg:text-4xl font-light text-black tracking-[0.1em] mb-8">
                BOEKINGSTOOL
              </h2>
              <div className="space-y-6 text-black/70 text-base lg:text-lg font-light leading-relaxed tracking-wide mb-12">
                <p>
                  De "Verfügbarkeit prüfen" kalender is de primaire call-to-action. 
                  Direct zichtbaar, geen drempels. Bezoekers selecteren hun datum 
                  en vullen meteen hun gegevens in. Van interesse naar gekwalificeerde 
                  lead in één flow.
                </p>
              </div>
              <div className="relative w-full overflow-hidden border border-black/10">
                <img
                  src="/rsc/stacykohnen/calender.png"
                  alt="Interactive Calendar Booking Tool"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Results */}
            <div className="mb-20">
              <h2 className="text-3xl lg:text-4xl font-light text-black tracking-[0.1em] mb-8">
                HET RESULTAAT
              </h2>
              <div className="space-y-6 text-black/70 text-base lg:text-lg font-light leading-relaxed tracking-wide">
                <p>
                  Een elegante, meertalige one-page die vertrouwen en transparante 
                  prijzen omzet in direct gekwalificeerde boekingen. Bezoekers kunnen 
                  Stacy's stem direct horen, pakketten vergelijken, en meteen hun 
                  beschikbaarheid checken.
                </p>
                <p>
                  De zachte, premium esthetiek spreekt perfect de trouwmarkt aan. 
                  Social proof (4.9/5 uit 120+ beoordelingen) staat direct zichtbaar. 
                  Multi-channel CTA's zorgen dat bezoekers kunnen kiezen: kalender, 
                  WhatsApp of contactformulier.
                </p>
                <p>
                  Complete branding, 4 talen, audio-integratie en een interactieve 
                  kalender. Alles binnen 3 dagen live.
                </p>
              </div>

              {/* Key Results */}
              <div className="grid md:grid-cols-3 gap-8 mt-12 p-8 lg:p-12 bg-black">
                <div className="text-center">
                  <p className="text-white/40 text-xs tracking-[0.2em] font-light uppercase mb-4">
                    Levertijd
                  </p>
                  <p className="text-5xl lg:text-6xl font-extralight text-white tracking-wider">
                    3
                  </p>
                  <p className="text-white/60 text-sm tracking-[0.15em] font-light mt-2">
                    DAGEN
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-white/40 text-xs tracking-[0.2em] font-light uppercase mb-4">
                    Taalversies
                  </p>
                  <p className="text-5xl lg:text-6xl font-extralight text-white tracking-wider">
                    4
                  </p>
                  <p className="text-white/60 text-sm tracking-[0.15em] font-light mt-2">
                    DE / NL / FR / EN
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-white/40 text-xs tracking-[0.2em] font-light uppercase mb-4">
                    Branding
                  </p>
                  <p className="text-5xl lg:text-6xl font-extralight text-white tracking-wider">
                    100%
                  </p>
                  <p className="text-white/60 text-sm tracking-[0.15em] font-light mt-2">
                    COMPLEET
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32 bg-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-light text-white tracking-[0.15em] leading-tight">
              KLAAR VOOR JOUW
              <br />
              <span className="font-extralight">PROJECT?</span>
            </h2>
            <p className="text-white/70 text-lg font-light tracking-wide">
              Meertalig, audio, video, kalenders. Wij regelen het.
            </p>
            <div className="pt-8">
              <Link
                href="/#contact"
                className="inline-flex items-center space-x-4 px-12 py-4 bg-white text-black text-sm tracking-[0.2em] font-light hover:tracking-[0.3em] transition-all duration-300"
              >
                <span>START JOUW PROJECT</span>
                <span className="w-8 h-[1px] bg-black"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}

