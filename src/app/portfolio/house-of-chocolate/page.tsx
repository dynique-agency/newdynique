"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HouseOfChocolate() {
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
                  CASE STUDY — E-COMMERCE
                </span>
              </div>

              {/* Title */}
              <h1
                className="text-4xl lg:text-6xl font-light text-black tracking-[0.1em] leading-tight mb-8"
                style={{
                  animation: "fadeInUp 0.8s ease-out 0.2s both",
                }}
              >
                VAN PRODUCT
                <br />
                <span className="font-extralight">NAAR BESTELLING</span>
              </h1>

              {/* Opening Story */}
              <div
                className="space-y-6 mb-12"
                style={{
                  animation: "fadeInUp 0.8s ease-out 0.4s both",
                }}
              >
                <p className="text-lg lg:text-xl font-light text-black tracking-wide leading-relaxed">
                  Een getalenteerde delicatessen maker met een uniek product: luxe 
                  oreo truffels. Een evenement op de planning. Maar geen website, 
                  geen branding, geen beeldmateriaal.
                </p>
                <p className="text-base lg:text-lg font-light text-black/70 tracking-wide leading-relaxed">
                  Wat als je product zo goed is dat het zichzelf verkoopt? Dan heb 
                  je alleen een simpele, perfecte website nodig die bestellen zo 
                  makkelijk mogelijk maakt.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="w-12 h-[1px] bg-black/20"></div>
                  <p className="text-sm text-black/40 tracking-[0.2em] font-light uppercase">
                    House of Chocolate
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
                  href="https://houseofchocolate.pages.dev"
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
                  src="/rsc/houseofchocolate/hero.png"
                  alt="House of Chocolate Website"
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
                  Focus
                </p>
                <p className="text-3xl lg:text-4xl font-extralight text-black tracking-wide">
                  1 PRODUCT
                </p>
              </div>
              <div>
                <p className="text-black/40 text-xs tracking-[0.2em] font-light uppercase mb-3">
                  Platform
                </p>
                <p className="text-3xl lg:text-4xl font-extralight text-black tracking-wide">
                  WHATSAPP
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
                  Een getalenteerde maker wilde haar luxe oreo truffels via een 
                  evenement op de markt brengen. Ze had een geweldig product, maar 
                  geen enkele online aanwezigheid.
                </p>
                <p>
                  Geen beeldmateriaal. Geen logo. Geen branding. Geen website. 
                  En het evenement kwam eraan.
                </p>
                <p>
                  Ze had iets simpels nodig. Geen complexe webshop met betaalsysteem. 
                  Gewoon een manier waarop mensen haar product konden zien en direct 
                  via WhatsApp konden bestellen.
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="mb-20 pb-20 border-b border-black/10">
              <h2 className="text-3xl lg:text-4xl font-light text-black tracking-[0.1em] mb-8">
                DE OPLOSSING
              </h2>
              
              {/* Content with Logo */}
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
                {/* Text Content - 2 columns */}
                <div className="lg:col-span-2 space-y-6 text-black/70 text-base lg:text-lg font-light leading-relaxed tracking-wide">
                  <p>
                    We hebben een complete branding gecreëerd. Van logo tot kleurenpalet, 
                    alles afgestemd op het premium karakter van de truffels. Met AI hebben 
                    we foto's én video's van de truffels gemaakt die er precies zo uitzien 
                    als in het echt.
                  </p>
                  <p>
                    De website werd extreem simpel: één product, één prijs, één knop. 
                    WhatsApp als conversie-engine. Geen gedoe met betaalsystemen of 
                    ingewikkelde checkouts. Gewoon klikken en bestellen.
                  </p>
                </div>

                {/* Logo Showcase - 1 column */}
                <div className="flex flex-col items-center justify-start space-y-4">
                  <div className="flex items-center justify-center p-8 bg-black/5 border border-black/10 w-full aspect-square">
                    <img
                      src="/rsc/houseofchocolate/house.png"
                      alt="House of Chocolate Logo"
                      className="w-32 h-auto"
                    />
                  </div>
                  <p className="text-center text-black/60 text-xs font-light tracking-wide italic">
                    Het door ons ontworpen logo
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                {[
                  {
                    title: "COMPLETE BRANDING",
                    description:
                      "Logo, kleuren, typografie. Hele visuele identiteit van scratch opgebouwd.",
                  },
                  {
                    title: "AI-GEGENEREERDE CONTENT",
                    description:
                      "Foto's én video van de truffels, gegenereerd om precies te matchen met het product.",
                  },
                  {
                    title: "WHATSAPP COMMERCE",
                    description:
                      "Direct bestellen via WhatsApp. Geen complexe systemen, gewoon converseren en afrekenen.",
                  },
                  {
                    title: "SINGLE-PRODUCT FOCUS",
                    description:
                      "Één product, optimaal gepresenteerd. Geen afleidingen, pure focus op conversie.",
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

            {/* AI Generated Video */}
            <div className="mb-20 pb-20 border-b border-black/10">
              <h2 className="text-3xl lg:text-4xl font-light text-black tracking-[0.1em] mb-8">
                AI-GEGENEREERDE VIDEO
              </h2>
              <div className="space-y-6 text-black/70 text-base lg:text-lg font-light leading-relaxed tracking-wide mb-12">
                <p>
                  Zonder fotoshoot, zonder videograaf. Alles AI-gegenereerd. De video 
                  toont de truffels precies zoals ze in werkelijkheid zijn: premium, 
                  luxe en onweerstaanbaar.
                </p>
              </div>
              <div className="relative w-full overflow-hidden border border-black/10 bg-black">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                >
                  <source src="/rsc/houseofchocolate/truffels.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Results */}
            <div className="mb-20">
              <h2 className="text-3xl lg:text-4xl font-light text-black tracking-[0.1em] mb-8">
                HET RESULTAAT
              </h2>
              <div className="space-y-6 text-black/70 text-base lg:text-lg font-light leading-relaxed tracking-wide">
                <p>
                  Na het evenement stroomden de aanvragen binnen. Tientallen bestellingen 
                  via de website, allemaal direct via WhatsApp afgehandeld. Het systeem 
                  werkte perfect: simpel, snel en effectief.
                </p>
                <p>
                  De eigenaar was zo blij met de simpele maar perfecte website dat ze 
                  ons bedankte met een heerlijke lading oreo truffels. Het mooiste 
                  compliment dat je kunt krijgen.
                </p>
                <p>
                  Een razendsnelle, mobile-first one-page die een premium product 
                  efficiënt verkoopt via een frictieloos WhatsApp-bestelproces. Geen 
                  complexe systemen, gewoon resultaat.
                </p>
              </div>

              {/* Key Results */}
              <div className="grid md:grid-cols-3 gap-8 mt-12 p-8 lg:p-12 bg-black">
                <div className="text-center">
                  <p className="text-white/40 text-xs tracking-[0.2em] font-light uppercase mb-4">
                    Product Focus
                  </p>
                  <p className="text-5xl lg:text-6xl font-extralight text-white tracking-wider">
                    1
                  </p>
                  <p className="text-white/60 text-sm tracking-[0.15em] font-light mt-2">
                    PRODUCT
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-white/40 text-xs tracking-[0.2em] font-light uppercase mb-4">
                    Conversie Via
                  </p>
                  <p className="text-5xl lg:text-6xl font-extralight text-white tracking-wider">
                    100%
                  </p>
                  <p className="text-white/60 text-sm tracking-[0.15em] font-light mt-2">
                    WHATSAPP
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-white/40 text-xs tracking-[0.2em] font-light uppercase mb-4">
                    Content
                  </p>
                  <p className="text-5xl lg:text-6xl font-extralight text-white tracking-wider">
                    100%
                  </p>
                  <p className="text-white/60 text-sm tracking-[0.15em] font-light mt-2">
                    AI-GEMAAKT
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
              PRODUCT TE VERKOPEN?
              <br />
              <span className="font-extralight">WIJ MAKEN HET SIMPEL</span>
            </h2>
            <p className="text-white/70 text-lg font-light tracking-wide">
              Van branding tot beeldmateriaal tot website. Alles geregeld.
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

