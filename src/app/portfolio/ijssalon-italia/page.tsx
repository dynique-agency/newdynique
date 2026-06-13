"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function IJssalonItalia() {

  // Intersection Observer for premium text animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const textElements = document.querySelectorAll('.animate-on-scroll');
    textElements.forEach((el) => observer.observe(el));

    return () => {
      textElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="relative bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section - White */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div>
              {/* Category */}
              <div className="mb-8">
                <div className="inline-block px-4 py-1.5 bg-black/5 border border-black/10 rounded-full mb-4">
                  <span className="text-black/60 text-[10px] tracking-[0.3em] font-light uppercase">Case Study</span>
                </div>
                <span className="block text-black/40 text-xs tracking-[0.3em] font-light uppercase">
                  FAMILIEBEDRIJF
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl lg:text-6xl font-light text-black tracking-[0.1em] leading-tight mb-8 animate-on-scroll">
                SINDS 1969
                <br />
                <span className="font-extralight">NU OOK DIGITAAL</span>
              </h1>

              {/* Opening Story */}
              <div className="space-y-6 mb-12 animate-on-scroll delay-100">
                <p className="text-lg lg:text-xl font-light text-black tracking-wide leading-relaxed">
                  IJssalon Italia had een website. Maar die werkte niet op mobiel. 
                  Knoppen reageerden niet. Openingstijden waren onduidelijk. En het 
                  belangrijkste: het liet niet uit wat hun prachtige familiezaak was.
                </p>
                <p className="text-base lg:text-lg font-light text-black/70 tracking-wide leading-relaxed">
                  Een ambachtelijk ijssalon met 50+ smaken, een rijke geschiedenis sinds 1969, 
                  en een warme sfeer die je moet voelen. Dat verhaal moest verteld worden. 
                  Binnen 14 dagen volledig live.
                </p>
              </div>

              {/* CTA */}
              <div className="animate-on-scroll delay-200">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-12 py-4 bg-black text-white text-sm tracking-[0.2em] font-light hover:bg-black/90 transition-all duration-300"
                >
                  BEKIJK LIVE WEBSITE
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="animate-on-scroll delay-100">
              <div className="relative w-full overflow-hidden border border-black/10">
                <img
                  src="/rsc/ijssalon/hero.png"
                  alt="IJssalon Italia"
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section - Black */}
      <section className="relative py-12 lg:py-16 bg-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-2xl lg:text-4xl font-light text-white tracking-[0.15em] leading-tight mb-4">
                DE UITDAGING
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 animate-on-scroll">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-light text-white tracking-[0.15em]">
                    NIET MOBIEL
                  </h3>
                </div>
                <p className="text-white/70 text-sm lg:text-base font-light leading-relaxed tracking-wide">
                  De oude website werkte niet op mobiel. 60% van de bezoekers kon 
                  de site niet goed gebruiken. Gemiste kansen bij mensen onderweg.
                </p>
              </div>

              <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 animate-on-scroll delay-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-light text-white tracking-[0.15em]">
                    KNOPPEN WERKTEN NIET
                  </h3>
                </div>
                <p className="text-white/70 text-sm lg:text-base font-light leading-relaxed tracking-wide">
                  "Bel Ons" en "Reserveer Nu" knoppen reageerden niet. Bezoekers 
                  konden niet contact opnemen. Directe conversie verloren.
                </p>
              </div>

              <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 animate-on-scroll delay-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-light text-white tracking-[0.15em]">
                    ONduidelijke OPENINGSTIJDEN
                  </h3>
                </div>
                <p className="text-white/70 text-sm lg:text-base font-light leading-relaxed tracking-wide">
                  Zomer- en wintertijden waren onduidelijk. Bezoekers kwamen aan 
                  terwijl de zaak dicht was. Teleurstelling en gemiste omzet.
                </p>
              </div>

              <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 animate-on-scroll delay-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-light text-white tracking-[0.15em]">
                    GEEN VERHAAL
                  </h3>
                </div>
                <p className="text-white/70 text-sm lg:text-base font-light leading-relaxed tracking-wide">
                  Het belangrijkste ontbrak: het verhaal. 50+ jaar traditie, 
                  het familieverhaal, de ambacht. Niets daarvan kwam naar voren.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - White */}
      <section className="relative py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              <div className="text-center animate-on-scroll">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-black/5 border border-black/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-2xl lg:text-3xl font-extralight text-black tracking-wide mb-1">14</p>
                <p className="text-black/50 text-[10px] tracking-[0.2em] font-light uppercase">Dagen</p>
              </div>
              <div className="text-center animate-on-scroll delay-100">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-black/5 border border-black/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-2xl lg:text-3xl font-extralight text-black tracking-wide mb-1">50+</p>
                <p className="text-black/50 text-[10px] tracking-[0.2em] font-light uppercase">Smaken</p>
              </div>
              <div className="text-center animate-on-scroll delay-200">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-black/5 border border-black/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <p className="text-2xl lg:text-3xl font-extralight text-black tracking-wide mb-1">1969</p>
                <p className="text-black/50 text-[10px] tracking-[0.2em] font-light uppercase">Sinds</p>
              </div>
              <div className="text-center animate-on-scroll delay-300">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-black/5 border border-black/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-2xl lg:text-3xl font-extralight text-black tracking-wide mb-1">100%</p>
                <p className="text-black/50 text-[10px] tracking-[0.2em] font-light uppercase">Mobiel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution - Heritage Storytelling - White with Image */}
      <section className="relative py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 animate-on-scroll">
                <img
                  src="/rsc/ijssalon/geschiedenis.png"
                  alt="Geschiedenis IJssalon Italia"
                  className="w-full h-auto border border-black/10"
                  loading="lazy"
                />
              </div>
              <div className="order-1 lg:order-2 animate-on-scroll delay-100">
                <div className="inline-block px-4 py-1.5 bg-black/5 border border-black/10 rounded-full mb-6">
                  <span className="text-black/60 text-[10px] tracking-[0.3em] font-light uppercase">Heritage</span>
                </div>
                <h2 className="text-2xl lg:text-4xl font-light text-black tracking-[0.15em] leading-tight mb-4">
                  HET VERHAAL
                  <br />
                  <span className="font-extralight">SINDS 1969</span>
                </h2>
                <p className="text-black/70 text-sm lg:text-base font-light leading-relaxed tracking-wide mb-6">
                  We hebben het familieverhaal prominent gemaakt. "Sinds 1969" staat 
                  centraal. De geschiedenis, de traditie, de ambacht. Alles wat deze 
                  zaak bijzonder maakt, komt nu naar voren.
                </p>
                <div className="space-y-3">
                  {[
                    "Prominente focus op 50+ jaar traditie",
                    "Familieverhaal versterkt merkidentiteit",
                    "Authenticiteit en ambacht centraal",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-black/5 border border-black/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-black/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-black/70 text-sm font-light tracking-wide">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IJssmaken Showcase - Black with Image */}
      <section className="relative py-12 lg:py-16 bg-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="animate-on-scroll">
                <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-6">
                  <span className="text-white/60 text-[10px] tracking-[0.3em] font-light uppercase">Assortiment</span>
                </div>
                <h2 className="text-2xl lg:text-4xl font-light text-white tracking-[0.15em] leading-tight mb-4">
                  50+ IJSSMAKEN
                  <br />
                  <span className="font-extralight">OVERZICHTELIJK</span>
                </h2>
                <p className="text-white/70 text-sm lg:text-base font-light leading-relaxed tracking-wide mb-6">
                  We hebben een gedetailleerd overzicht gebouwd van alle 50+ ijssmaken. 
                  Met een duidelijk allergenen-systeem met iconen voor gluten, noten, 
                  en andere allergenen. Snelle scanbaarheid voor iedere bezoeker.
                </p>
                <div className="space-y-3">
                  {[
                    "Visueel iconen-systeem voor allergenen",
                    "Duidelijke categorisering van smaken",
                    "Perfect scanbaar op alle devices",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-white/70 text-sm font-light tracking-wide">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="animate-on-scroll delay-100">
                <img
                  src="/rsc/ijssalon/ijssmaken.png"
                  alt="IJssmaken Overzicht"
                  className="w-full h-auto border border-white/10"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Openingstijden - White with Image */}
      <section className="relative py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 animate-on-scroll">
                <img
                  src="/rsc/ijssalon/infotossfeerenimpressie.png"
                  alt="Informatie en Sfeer Impressie"
                  className="w-full h-auto border border-black/10"
                  loading="lazy"
                />
              </div>
              <div className="order-1 lg:order-2 animate-on-scroll delay-100">
                <div className="inline-block px-4 py-1.5 bg-black/5 border border-black/10 rounded-full mb-6">
                  <span className="text-black/60 text-[10px] tracking-[0.3em] font-light uppercase">Functionaliteit</span>
                </div>
                <h2 className="text-2xl lg:text-4xl font-light text-black tracking-[0.15em] leading-tight mb-4">
                  DUidelijke
                  <br />
                  <span className="font-extralight">OPENINGSTIJDEN</span>
                </h2>
                <p className="text-black/70 text-sm lg:text-base font-light leading-relaxed tracking-wide mb-6">
                  We hebben een slim systeem gebouwd dat automatisch zomer- en 
                  winteropeningstijden toont. Bezoekers zien altijd de juiste tijden. 
                  Geen teleurstelling meer bij aankomst.
                </p>
                <div className="space-y-3">
                  {[
                    "Automatische seizoenswisseling",
                    "Duidelijke weergave zomer/winter",
                    "Klikbare contactgegevens",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-black/5 border border-black/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-black/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-black/70 text-sm font-light tracking-wide">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack - Black */}
      <section className="relative py-12 lg:py-16 bg-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 animate-on-scroll">
              <h2 className="text-2xl lg:text-4xl font-light text-white tracking-[0.15em] leading-tight mb-2">
                HOE WE HET HEBBEN GEBOUWD
              </h2>
              <p className="text-white/60 text-sm lg:text-base font-light tracking-wide">
                De technologie en technieken die we hebben gebruikt.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Single-Page Scroll",
                  description: "Alle essentiële informatie op één pagina voor maximale gebruiksvriendelijkheid",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  ),
                },
                {
                  title: "Allergenen Filtering",
                  description: "Visueel iconen-systeem voor snelle scanbaarheid van allergenen",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
                {
                  title: "Performance",
                  description: "Statische opbouw voor directe laadtijden, zelfs bij galerij-afbeeldingen",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 animate-on-scroll"
                  style={{
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="w-12 h-12 mb-4 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                    {tech.icon}
                  </div>
                  <h3 className="text-base font-light text-white tracking-wide mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-white/60 text-xs font-light leading-relaxed tracking-wide">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section - White */}
      <section className="relative py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 animate-on-scroll">
              <div className="inline-block px-4 py-1.5 bg-black/5 border border-black/10 rounded-full mb-4">
                <span className="text-black/60 text-[10px] tracking-[0.3em] font-light uppercase">Het Resultaat</span>
              </div>
              <h2 className="text-2xl lg:text-4xl font-light text-black tracking-[0.15em] leading-tight mb-4">
                WAT HET HEEFT OPGELEVERD
              </h2>
            </div>

            {/* Big Quote */}
            <div className="p-8 lg:p-10 bg-black/5 border border-black/10 mb-8 animate-on-scroll delay-100">
              <p className="text-lg lg:text-xl font-light text-black tracking-wide leading-relaxed italic text-center">
                "Een smaakvolle, mobiel-vriendelijke one-page die ambachtelijke traditie 
                vertaalt naar moderne, digitale toegankelijkheid. Binnen 14 dagen live."
              </p>
            </div>

            {/* Features List */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Heritage storytelling: Sinds 1969 prominent",
                "50+ ijssmaken met allergenen-systeem",
                "Dynamische seizoensopeningstijden",
                "100% mobiel-vriendelijk",
                "Sticky CTA knoppen voor directe interactie",
                "Klikbare contactgegevens",
                "Single-page scroll voor gebruiksvriendelijkheid",
                "Nostalgisch modern design",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3 text-black/80 animate-on-scroll" style={{ transitionDelay: `${index * 0.05}s` }}>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black/5 border border-black/10 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-black/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm font-light tracking-wide leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Black */}
      <section className="relative py-12 lg:py-16 bg-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-4xl font-light text-white tracking-[0.15em] leading-tight mb-4 animate-on-scroll">
              KLAAR VOOR EEN
              <br />
              <span className="font-extralight">WERKENDE WEBSITE?</span>
            </h2>
            <p className="text-white/60 text-sm lg:text-base font-light tracking-wide leading-relaxed mb-8 animate-on-scroll delay-100">
              Van idee tot live website in 7-14 dagen. Zonder gedoe. Gewoon perfect.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll delay-200">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 px-12 py-4 bg-white text-black text-sm tracking-[0.2em] font-light hover:bg-white/90 transition-all duration-300"
              >
                PLAN EEN GESPREK
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="/"
                className="inline-flex items-center gap-3 px-12 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-sm tracking-[0.2em] font-light hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                MEER CASES
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Inline Keyframes */}
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

        /* Premium Text Animations */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 1s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-on-scroll.delay-100 {
          transition-delay: 0.1s;
        }

        .animate-on-scroll.delay-200 {
          transition-delay: 0.2s;
        }

        .animate-on-scroll.delay-300 {
          transition-delay: 0.3s;
        }

        @media (max-width: 768px) {
          .animate-on-scroll {
            transform: translateY(30px);
            transition-duration: 0.7s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-on-scroll {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}

