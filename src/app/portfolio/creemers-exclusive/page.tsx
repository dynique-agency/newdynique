"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CreemersExclusive() {
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
                  CASE STUDY — HOSPITALITY
                </span>
              </div>

              {/* Title */}
              <h1
                className="text-4xl lg:text-6xl font-light text-black tracking-[0.1em] leading-tight mb-8"
                style={{
                  animation: "fadeInUp 0.8s ease-out 0.2s both",
                }}
              >
                GEEN FOTO'S.
                <br />
                <span className="font-extralight">WEL LIVE.</span>
              </h1>

              {/* Opening Story */}
              <div
                className="space-y-6 mb-12"
                style={{
                  animation: "fadeInUp 0.8s ease-out 0.4s both",
                }}
              >
                <p className="text-lg lg:text-xl font-light text-black tracking-wide leading-relaxed">
                  Een premium hospitality bureau belt. "We willen binnen 3 dagen live. 
                  Maar we hebben geen enkele professionele foto."
                </p>
                <p className="text-base lg:text-lg font-light text-black/70 tracking-wide leading-relaxed">
                  De meeste agencies zouden 'nee' zeggen. Of een fotoshoot inplannen. 
                  Of goedkope stockfoto's voorstellen. Wij deden iets anders.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="w-12 h-[1px] bg-black/20"></div>
                  <p className="text-sm text-black/40 tracking-[0.2em] font-light uppercase">
                    Creemers Exclusive
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
                  href="https://creemers.pages.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-4 px-12 py-4 bg-black text-white text-sm tracking-[0.2em] font-light hover:tracking-[0.3em] transition-all duration-300"
                >
                  <span>BEKIJK LIVE WEBSITE</span>
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
                  src="/rsc/creemers/hero.png"
                  alt="Creemers Exclusive Website"
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
                  Type
                </p>
                <p className="text-3xl lg:text-4xl font-extralight text-black tracking-wide">
                  HOSPITALITY
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
                  Een premium hospitality bureau zonder professionele
                  bedrijfsfoto's. Geen tijd voor fotoshoots. Geen budget voor
                  dure stockfoto's. Maar wel de ambitie om direct online te
                  gaan met een website die premium uitstraalt.
                </p>
                <p>
                  De deadline was krap: binnen 3 dagen moest alles live staan.
                  Van ontwerp tot content, van visuals tot deployment.
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
                  Wij hebben alle visuals volledig AI-gegenereerd. Van
                  professionele mensen in premium settings tot sfeerbeelden die
                  perfect aansluiten bij de luxe uitstraling van Creemers
                  Exclusive.
                </p>
                <p>
                  Het resultaat? Foto's die eruitzien alsof ze door een
                  topfotograaf zijn gemaakt, maar dan in een fractie van de tijd
                  en tegen een fractie van de kosten.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                {[
                  {
                    title: "AI-GEGENEREERDE VISUALS",
                    description:
                      "Alle foto's op de website zijn volledig AI-gegenereerd, inclusief realistische mensen in premium settings.",
                  },
                  {
                    title: "SINGLE-PAGE ARCHITECTUUR",
                    description:
                      "Naadloze gebruikerservaring zonder laadtijden. Alle content op één razendsnelle pagina.",
                  },
                  {
                    title: "INTERACTIEVE BOEKINGSTOOL",
                    description:
                      "Custom kalender-integratie voor directe planning en gekwalificeerde leads.",
                  },
                  {
                    title: "MOBILE-FIRST DESIGN",
                    description:
                      "Perfect responsive op elk apparaat, essentieel voor de on-the-go doelgroep.",
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
                CONVERSIE TOOL
              </h2>
              <div className="space-y-6 text-black/70 text-base lg:text-lg font-light leading-relaxed tracking-wide mb-12">
                <p>
                  De interactieve kalender is het hart van de conversie-strategie. 
                  Bezoekers kunnen direct hun beschikbaarheid aangeven zonder 
                  drempels of gedoe. Elk klikmoment is geoptimaliseerd voor actie.
                </p>
              </div>
              <div className="relative w-full overflow-hidden border border-black/10">
                <img
                  src="/rsc/creemers/calendertool.png"
                  alt="Interactive Calendar Booking Tool"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* AI-Generated Visuals Gallery */}
            <div className="mb-20 pb-20 border-b border-black/10">
              <h2 className="text-3xl lg:text-4xl font-light text-black tracking-[0.1em] mb-8">
                AI-GEGENEREERDE VISUALS
              </h2>
              <div className="space-y-6 text-black/70 text-base lg:text-lg font-light leading-relaxed tracking-wide mb-12">
                <p>
                  Elke foto op de website is volledig AI-gegenereerd. Van mensen 
                  in premium settings tot sfeervolle detail shots. Het resultaat? 
                  Professionele fotografie zonder fotoshoot, zonder budget, zonder 
                  compromissen.
                </p>
              </div>
              
              {/* Horizontal Scrollable Gallery */}
              <div className="relative">
                <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
                  {[
                    { src: "/rsc/creemers/galery1.jpg", alt: "AI Generated Hospitality Professional" },
                    { src: "/rsc/creemers/galery2.png", alt: "AI Generated Premium Dining" },
                    { src: "/rsc/creemers/galery3.png", alt: "AI Generated Wine Service" },
                    { src: "/rsc/creemers/galery4.png", alt: "AI Generated Elegant Service" },
                  ].map((image, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-[240px] md:w-[280px] lg:w-[320px] snap-center"
                    >
                      <div className="relative aspect-[3/4] overflow-hidden border border-black/10 group cursor-pointer">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <p className="text-white text-xs tracking-[0.2em] font-light">
                            100% AI
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Scroll Indicator */}
                <div className="flex justify-center mt-6 space-x-2">
                  <div className="text-black/30 text-xs tracking-[0.25em] font-light">
                    SCROLL
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-6 h-[1px] bg-black/20"></div>
                    <div className="w-2 h-2 border border-black/20 rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-20">
              <h2 className="text-3xl lg:text-4xl font-light text-black tracking-[0.1em] mb-8">
                HET RESULTAAT
              </h2>
              <div className="space-y-6 text-black/70 text-base lg:text-lg font-light leading-relaxed tracking-wide">
                <p>
                  Een razendsnelle, minimalistische one-page die premium service
                  efficiënt omzet in direct gekwalificeerde leads. De website
                  stond binnen 3 dagen live en genereerde binnen 1 week al de 
                  eerste aanvraag.
                </p>
                <p>
                  Het ultra-minimalistische zwart-wit design legt alle focus op
                  de service en de call-to-actions. De complimenten blijven 
                  binnenstromen over hoe mooi en professioneel de website eruitziet. 
                  Niemand vermoedt dat alle foto's AI-gegenereerd zijn.
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
                    Eerste Aanvraag
                  </p>
                  <p className="text-5xl lg:text-6xl font-extralight text-white tracking-wider">
                    1
                  </p>
                  <p className="text-white/60 text-sm tracking-[0.15em] font-light mt-2">
                    WEEK
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-white/40 text-xs tracking-[0.2em] font-light uppercase mb-4">
                    Visuals
                  </p>
                  <p className="text-5xl lg:text-6xl font-extralight text-white tracking-wider">
                    100%
                  </p>
                  <p className="text-white/60 text-sm tracking-[0.15em] font-light mt-2">
                    AI-GEGENEREERD
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
              Wij leveren razendsnel, betaalbaar en zonder gedoe
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

