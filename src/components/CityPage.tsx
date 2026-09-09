"use client";

import Link from "next/link";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatusIndicator from "@/components/StatusIndicator";
import FaqSection, { faqJsonLd } from "@/components/FaqSection";
import SocialProofSection from "@/components/SocialProofSection";
import LeadFormSection from "@/components/LeadFormSection";

// Gedeeld, want de prijsstructuur verschilt niet per stad — dupliceren per
// stadspagina zou precies het naam-swap-patroon zijn dat elders is vermeden.
const PRICE_FAQ = {
  q: "Wat kost een maatwerk software- of websitetraject?",
  a: "Dat hangt sterk af van de omvang van je bedrijf, het aantal gebruikers en hoe complex je processen zijn. Een kleine, gerichte tool begint rond de €4.000; grotere bedrijfssoftware met meerdere gebruikers en koppelingen loopt vaak op tot €15.000–€35.000 of meer. Websites beginnen vanaf €3.500. Na een gratis kennismaking krijg je een concreet voorstel met een vaste prijs voor jullie situatie.",
};

export type CityData = {
  city: string;
  region: string;
  cityShort: string;
  tagline: string;
  intro: string;
  vibe: string;
  accent: string;
  postal: string;
  travelTime: string;
  highlights: { n: string; title: string; desc: string }[];
  industries: string[];
  faq: { q: string; a: string }[];
  slug?: string;
  /** Optioneel: link naar een bredere regiopagina (bijv. /diensten/processen/limburg) — alleen zinvol als die regio echt overlapt. */
  relatedRegionLink?: { label: string; href: string };
};

// Koppelt industry-chips aan hun bestaande sectorpagina, zodat de chip zelf linkwaarde
// doorgeeft aan pagina's die al écht rankende termen dekken (bijv. "maatwerk software
// voor de zorg"). Alleen Nederlandstalige labels — Duitse/Engelse varianten (Aken e.a.)
// blijven bewust ongelinkt, want de sectorpagina's zijn Nederlandstalig.
const SECTOR_LINKS: Record<string, string> = {
  "Bouw": "/maatwerk-software/bouw",
  "Installatie": "/maatwerk-software/installatiebedrijf",
  "Zorg": "/maatwerk-software/zorg",
  "Logistiek": "/maatwerk-software/logistiek",
  "Horeca": "/maatwerk-software/horeca",
  "Retail": "/maatwerk-software/detailhandel",
  "Landbouw": "/maatwerk-software/agrarisch",
  "Landbouw & Fruitteelt": "/maatwerk-software/agrarisch",
};

export default function CityPage({ data }: { data: CityData }) {
  const slug = data.slug ?? data.city.toLowerCase();
  const url = `https://dynique.nl/locaties/${slug}`;
  const fullFaq = [...data.faq, PRICE_FAQ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: `Dynique — Maatwerk software ${data.city}`,
        description: data.tagline,
        url,
        telephone: "+31624572572",
        email: "info@dynique.nl",
        priceRange: "€€",
        areaServed: { "@type": "City", name: data.city },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ir. Em. Melottestraat 10",
          postalCode: "6291 HE",
          addressLocality: "Vaals",
          addressRegion: "Limburg",
          addressCountry: "NL",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
          { "@type": "ListItem", position: 2, name: "Locaties", item: "https://dynique.nl/locaties" },
          { "@type": "ListItem", position: 3, name: data.city, item: url },
        ],
      },
      faqJsonLd(fullFaq),
    ],
  };

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

  return (
    <main className="relative bg-[#050505] min-h-screen overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header variant="light" />

      {/* Ambient accent glows */}
      <div aria-hidden className="fixed top-0 right-0 w-[800px] h-[800px] pointer-events-none opacity-40"
           style={{ background: `radial-gradient(circle, ${data.accent}25 0%, transparent 60%)` }} />
      <div aria-hidden className="fixed bottom-0 left-0 w-[600px] h-[600px] pointer-events-none opacity-30"
           style={{ background: `radial-gradient(circle, ${data.accent}15 0%, transparent 60%)` }} />

      {/* HERO */}
      <section className="relative pt-40 lg:pt-52 pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4 mb-10 anim">
              <span className="inline-block w-8 h-[1px]" style={{ background: data.accent }}></span>
              <p className="text-[10px] tracking-[0.5em] font-light uppercase" style={{ color: data.accent }}>
                Maatwerk software · {data.city}
              </p>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-[7rem] font-extralight text-white tracking-[0.02em] leading-[0.95] anim delay-1">
              Maatwerk software<br />
              <span className="italic text-white/50">voor {data.city}.</span>
            </h1>

            <p className="mt-12 max-w-2xl text-white/55 text-base lg:text-xl font-light leading-[1.85] tracking-wide anim delay-2">
              {data.intro}
            </p>

            <div className="mt-14 flex flex-col sm:flex-row gap-4 anim delay-3">
              <a href="#analyse" className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-black text-xs tracking-[0.3em] font-light hover:tracking-[0.4em] transition-all duration-500">
                START IN {data.cityShort.toUpperCase()}
                <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <Link href="/portfolio" className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/15 text-white text-xs tracking-[0.3em] font-light hover:bg-white/5 hover:border-white/30 transition-all duration-500">
                BEKIJK PORTFOLIO
              </Link>
            </div>

            {/* Meta strip */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 anim delay-3">
              {[
                { l: "Regio", v: data.region },
                { l: "Reistijd", v: data.travelTime },
                { l: "Postcode", v: data.postal },
                { l: "Reactietijd", v: null },
              ].map((m) => (
                <div key={m.l} className="bg-[#050505] py-6 px-4">
                  <p className="text-white/35 text-[10px] tracking-[0.3em] font-light uppercase mb-2">{m.l}</p>
                  {m.v ? (
                    <p className="text-white text-sm tracking-wide font-light">{m.v}</p>
                  ) : (
                    <StatusIndicator className="text-white text-sm tracking-wide font-light" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VIBE / WAAROM HIER */}
      <section className="relative py-24 lg:py-32 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-20">
            <div className="lg:col-span-5 anim">
              <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.1]">
                Een bureau dat <span className="italic" style={{ color: data.accent }}>{data.city}</span> kent.
              </h2>
            </div>
            <div className="lg:col-span-7 anim delay-1">
              <p className="text-white/55 text-base lg:text-lg font-light leading-[1.9] tracking-wide">
                {data.vibe}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WAT KUNNEN WE VOOR JE BOUWEN — duidelijke routing naar de juiste dienst */}
      <section className="relative py-16 lg:py-20 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] tracking-[0.5em] font-light uppercase mb-8 anim" style={{ color: data.accent }}>
              Wat kunnen we voor je bouwen in {data.city}?
            </p>
            <div className="grid sm:grid-cols-3 gap-px bg-white/5">
              {[
                { t: "Website of web app", d: "Bedrijfswebsite, webshop of maatwerk web app.", href: "/diensten/web" },
                { t: "Bedrijfssoftware op maat", d: "Systemen die met jouw processen meewerken.", href: "#analyse" },
                { t: "Marketing, SEO & social media", d: "Zichtbaarheid en beheer, uitbesteed of samen.", href: "/diensten/marketing" },
              ].map((s, i) => (
                <Link key={s.href} href={s.href}
                  className="group bg-[#050505] p-6 lg:p-7 anim relative overflow-hidden" style={{ transitionDelay: `${i * 0.06}s` }}>
                  <div className="absolute top-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700" style={{ background: data.accent }} />
                  <h3 className="text-white text-sm font-light tracking-wide mb-2">{s.t}</h3>
                  <p className="text-white/45 text-xs font-light leading-relaxed tracking-wide">{s.d}</p>
                </Link>
              ))}
            </div>
            <p className="mt-5 anim delay-1 text-white/35 text-xs font-light tracking-wide">
              Niet zeker wat je nodig hebt? Dat bepalen we samen tijdens een gratis, vrijblijvend gesprek.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS — wat we voor je doen in deze stad */}
      <section className="relative py-24 lg:py-32 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <p className="text-[10px] tracking-[0.5em] font-light uppercase mb-6 anim" style={{ color: data.accent }}>
              Wat we doen
            </p>
            <h2 className="text-4xl lg:text-6xl font-extralight text-white tracking-[0.02em] leading-[1.05] mb-20 anim delay-1">
              Voor ondernemers<br />
              <span className="italic text-white/50">in {data.city}.</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-px bg-white/5">
              {data.highlights.map((h, i) => (
                <div key={i} className="bg-[#050505] p-10 lg:p-14 anim" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="text-5xl font-extralight leading-none mb-8" style={{ color: data.accent }}>
                    {h.n}
                  </div>
                  <h3 className="text-white text-sm tracking-[0.2em] font-light uppercase mb-4">{h.title}</h3>
                  <div className="w-8 h-px mb-6" style={{ background: `${data.accent}80` }}></div>
                  <p className="text-white/50 text-base font-light leading-[1.8] tracking-wide">{h.desc}</p>
                </div>
              ))}
            </div>

            {data.relatedRegionLink && (
              <p className="mt-8 anim text-white/40 text-sm font-light tracking-wide">
                Actief in de hele regio —{" "}
                <Link href={data.relatedRegionLink.href} className="underline underline-offset-4 decoration-white/20 hover:decoration-white/50 hover:text-white/70 transition-colors">
                  {data.relatedRegionLink.label}
                </Link>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="relative py-24 lg:py-32 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.1] mb-16 anim">
              Voor elke sector <span className="italic" style={{ color: data.accent }}>in {data.region}.</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3 anim delay-1">
              {data.industries.map((ind) => {
                const href = SECTOR_LINKS[ind];
                if (!href) {
                  return (
                    <span key={ind} className="inline-block px-5 py-2.5 border border-white/10 text-white/60 text-xs tracking-[0.2em] font-light hover:text-white hover:border-white/30 transition-colors duration-300">
                      {ind}
                    </span>
                  );
                }
                return (
                  <Link key={ind} href={href}
                    className="group inline-flex items-center gap-1.5 px-5 py-2.5 border text-xs tracking-[0.2em] font-light transition-colors duration-300"
                    style={{ borderColor: `${data.accent}50`, color: data.accent }}>
                    {ind}
                    <svg className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 group-hover:opacity-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <SocialProofSection accent={data.accent} />

      <FaqSection
        faq={fullFaq}
        accent={data.accent}
        heading={<>Over werken in <span className="italic text-white/50">{data.city}.</span></>}
      />

      <LeadFormSection
        accent={data.accent}
        openingLine={`Hi! Ik wil meer weten over maatwerk software of een website voor mijn bedrijf in ${data.city}.`}
        messagePrompt="Waar loopt het vast, of wat wil je laten bouwen?"
      />

      <Footer />

      <style jsx global>{`
        .anim { opacity: 0; transform: translateY(20px); transition: opacity 1s ease-out, transform 1s ease-out; }
        .anim.animate-in { opacity: 1; transform: translateY(0); }
        .anim.delay-1 { transition-delay: 0.15s; }
        .anim.delay-2 { transition-delay: 0.3s; }
        .anim.delay-3 { transition-delay: 0.45s; }
      `}</style>
    </main>
  );
}
