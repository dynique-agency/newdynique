"use client";

import Link from "next/link";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  testimonialCity?: string;
  faq: { q: string; a: string }[];
  slug?: string;
};

export default function CityPage({ data }: { data: CityData }) {
  const slug = data.slug ?? data.city.toLowerCase();
  const url = `https://dynique.nl/locaties/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: `Dynique — Webdesign ${data.city}`,
        description: data.tagline,
        url,
        telephone: "+31624572572",
        email: "info@dynique.nl",
        priceRange: "€€",
        areaServed: { "@type": "City", name: data.city },
        address: { "@type": "PostalAddress", addressRegion: data.region, addressCountry: "NL" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
          { "@type": "ListItem", position: 2, name: "Locaties", item: url },
          { "@type": "ListItem", position: 3, name: data.city, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: data.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  useEffect(() => {
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
                Webdesign · {data.city}
              </p>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-[7rem] font-extralight text-white tracking-[0.02em] leading-[0.95] anim delay-1">
              Website laten maken<br />
              <span className="italic text-white/50">in {data.city}.</span>
            </h1>

            <p className="mt-12 max-w-2xl text-white/55 text-base lg:text-xl font-light leading-[1.85] tracking-wide anim delay-2">
              {data.intro}
            </p>

            <div className="mt-14 flex flex-col sm:flex-row gap-4 anim delay-3">
              <Link href="/#contact" className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-black text-xs tracking-[0.3em] font-light hover:tracking-[0.4em] transition-all duration-500">
                START IN {data.cityShort.toUpperCase()}
                <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
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
                { l: "Levertijd", v: "7–14 dagen" },
              ].map((m) => (
                <div key={m.l} className="bg-[#050505] py-6 px-4">
                  <p className="text-white/35 text-[10px] tracking-[0.3em] font-light uppercase mb-2">{m.l}</p>
                  <p className="text-white text-sm tracking-wide font-light">{m.v}</p>
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
              <p className="text-white/40 text-[10px] tracking-[0.5em] font-light uppercase mb-6">
                Lokaal · Persoonlijk
              </p>
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
                  <div className="text-5xl font-extralight leading-none mb-8"
                       style={{
                         background: `linear-gradient(135deg, ${data.accent} 0%, ${data.accent}60 100%)`,
                         WebkitBackgroundClip: "text",
                         WebkitTextFillColor: "transparent",
                       }}>
                    {h.n}
                  </div>
                  <h3 className="text-white text-sm tracking-[0.2em] font-light uppercase mb-4">{h.title}</h3>
                  <div className="w-8 h-px mb-6" style={{ background: `${data.accent}80` }}></div>
                  <p className="text-white/50 text-base font-light leading-[1.8] tracking-wide">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="relative py-24 lg:py-32 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-white/40 text-[10px] tracking-[0.5em] font-light uppercase mb-6 anim">
              Sectoren waar we voor werken
            </p>
            <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.1] mb-16 anim delay-1">
              Van ZZP tot MKB <span className="italic" style={{ color: data.accent }}>in {data.region}.</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3 anim delay-2">
              {data.industries.map((ind) => (
                <span key={ind} className="inline-block px-5 py-2.5 border border-white/10 text-white/60 text-xs tracking-[0.2em] font-light hover:text-white hover:border-white/30 transition-colors duration-300">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 lg:py-32 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-[10px] tracking-[0.5em] font-light uppercase mb-6 anim" style={{ color: data.accent }}>
              Veelgestelde vragen
            </p>
            <h2 className="text-4xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.1] mb-16 anim delay-1">
              Over werken in <span className="italic text-white/50">{data.city}.</span>
            </h2>
            <div className="space-y-px bg-white/5">
              {data.faq.map((f, i) => (
                <details key={i} className="group bg-[#050505] anim" style={{ transitionDelay: `${i * 0.06}s` }}>
                  <summary className="flex items-center justify-between gap-4 px-8 py-7 cursor-pointer list-none hover:bg-white/[0.02] transition-colors">
                    <span className="text-white text-base lg:text-lg font-light tracking-wide">{f.q}</span>
                    <span className="text-white/40 text-2xl font-extralight transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <div className="px-8 pb-7 text-white/55 text-base font-light leading-[1.85] tracking-wide max-w-3xl">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-8 anim">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#34d399]" style={{ boxShadow: "0 0 10px #34d399" }}></span>
              <p className="text-[#34d399] text-[10px] tracking-[0.4em] font-light uppercase">Beschikbaar in {data.city}</p>
            </div>
            <h2 className="text-4xl lg:text-6xl font-extralight text-white tracking-[0.02em] leading-[1.1] anim delay-1">
              Klaar voor een website<br />
              <span className="italic" style={{ color: data.accent }}>die {data.city} kent?</span>
            </h2>
            <p className="mt-8 text-white/50 text-base lg:text-lg font-light leading-[1.85] tracking-wide max-w-2xl mx-auto anim delay-2">
              Binnen 24 uur reactie. Binnen 7 dagen een concept. Geen verrassingen, vaste prijs.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center anim delay-3">
              <Link href="/#contact" className="group inline-flex items-center justify-center gap-3 px-12 py-5 bg-white text-black text-xs tracking-[0.3em] font-light hover:tracking-[0.4em] transition-all duration-500">
                START JOUW PROJECT
                <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/gratis-checklist" className="inline-flex items-center justify-center gap-3 px-12 py-5 border border-white/15 text-white text-xs tracking-[0.3em] font-light hover:bg-white/5 hover:border-white/30 transition-all duration-500">
                GRATIS CHECKLIST
              </Link>
            </div>
          </div>
        </div>
      </section>

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
