"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const checklistItems = [
  { n: "01", t: "Doel & doelgroep", d: "De drie strategische vragen die je beantwoord moet hebben voor je begint." },
  { n: "02", t: "Content-audit", d: "Welke content je écht nodig hebt en waar je af kunt blijven van filler." },
  { n: "03", t: "Tech-stack keuze", d: "WordPress, Webflow, Next.js of Shopify — welke past bij jouw situatie?" },
  { n: "04", t: "SEO-fundamenten", d: "De zes technische SEO-punten die altijd kloppen moeten bij oplevering." },
  { n: "05", t: "Performance budget", d: "Concrete Core Web Vitals scores die je moet eisen van je bureau." },
  { n: "06", t: "Conversie-elementen", d: "De vijf elementen die je altijd op een homepage hoort te hebben." },
  { n: "07", t: "Bureau-vragen", d: "Tien vragen die elke serieuze offerte beantwoord moet hebben." },
  { n: "08", t: "Launch-checklist", d: "Alle 23 punten die geregeld moeten zijn voordat je live gaat." },
];

export default function LeadMagnetPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    // In productie: stuur naam + e-mail ook naar API/Mailchimp/Resend.
    // Start de PDF-download direct in de browser.
    const a = document.createElement("a");
    a.href = "/dynique-website-checklist-2026.pdf";
    a.download = "Dynique-Website-Checklist-2026.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    // Daarna door naar de bedankpagina.
    setTimeout(() => {
      window.location.href = `/bedankt?name=${encodeURIComponent(name)}`;
    }, 600);
  };

  return (
    <main className="relative bg-[#050505] min-h-screen overflow-hidden">
      <Header variant="light" />

      <div aria-hidden className="fixed top-0 right-0 w-[800px] h-[800px] pointer-events-none opacity-50"
           style={{ background: "radial-gradient(circle, rgba(212,165,116,0.18) 0%, transparent 60%)" }} />
      <div aria-hidden className="fixed bottom-0 left-0 w-[600px] h-[600px] pointer-events-none opacity-30"
           style={{ background: "radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 60%)" }} />

      {/* Hero */}
      <section className="relative pt-40 lg:pt-52 pb-16 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left: copy */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-10 anim">
                <span className="inline-block w-8 h-[1px] bg-[#d4a574]/60"></span>
                <p className="text-[#d4a574]/80 text-[10px] tracking-[0.5em] font-light uppercase">
                  Gratis Download · PDF
                </p>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-extralight text-white tracking-[0.01em] leading-[1.02] anim delay-1">
                De Website<br />
                <span className="italic text-white/50">Checklist 2026.</span>
              </h1>
              <p className="mt-10 max-w-xl text-white/55 text-base lg:text-xl font-light leading-[1.85] tracking-wide anim delay-2">
                Een 23-punt checklist die je voorbereidt op het laten maken van een website. Wat moet je vragen aan je bureau? Wat krijg je voor je geld? Waar zitten de verborgen kosten?
              </p>

              {/* Mini-list preview */}
              <div className="mt-12 space-y-px bg-white/5 anim delay-3">
                {checklistItems.slice(0, 4).map((c, i) => (
                  <div key={i} className="bg-[#050505] flex items-start gap-5 px-6 py-5">
                    <span className="text-[#d4a574] text-xs tracking-[0.25em] font-light pt-1">{c.n}</span>
                    <div>
                      <p className="text-white text-sm tracking-[0.1em] font-light mb-1">{c.t}</p>
                      <p className="text-white/40 text-xs font-light leading-relaxed tracking-wide">{c.d}</p>
                    </div>
                  </div>
                ))}
                <div className="bg-[#050505] flex items-center justify-center px-6 py-4 text-white/30 text-[10px] tracking-[0.3em] font-light uppercase">
                  + 4 hoofdstukken in de volledige PDF
                </div>
              </div>
            </div>

            {/* Right: form card */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 anim delay-2">
              <div className="relative border border-white/10 p-8 lg:p-10 bg-[#0a0a0a]">
                <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#d4a574]/60 to-transparent" />

                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#34d399]" style={{ boxShadow: "0 0 10px #34d399" }}></span>
                  <p className="text-[#34d399] text-[10px] tracking-[0.4em] font-light uppercase">Direct in je inbox</p>
                </div>

                <h2 className="text-2xl lg:text-3xl font-extralight text-white tracking-[0.02em] leading-[1.2] mb-3">
                  Download de checklist.
                </h2>
                <p className="text-white/45 text-sm font-light leading-[1.8] tracking-wide mb-8">
                  Vul je gegevens in, ontvang de PDF direct per mail. Geen spam, geen reseller-bedankjes. Je e-mail wordt alleen voor deze download gebruikt.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-white/40 text-[10px] tracking-[0.3em] font-light uppercase">Naam *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jouw naam"
                      className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-white text-white text-sm font-light tracking-wide py-3 outline-none transition-colors duration-300 placeholder:text-white/20"
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-[10px] tracking-[0.3em] font-light uppercase">E-mail *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jij@bedrijf.nl"
                      className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-white text-white text-sm font-light tracking-wide py-3 outline-none transition-colors duration-300 placeholder:text-white/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black text-xs tracking-[0.3em] font-light hover:tracking-[0.4em] transition-all duration-500"
                  >
                    DOWNLOAD PDF
                    <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                    </svg>
                  </button>

                  <p className="text-white/30 text-[10px] tracking-[0.2em] font-light text-center leading-relaxed">
                    Door te downloaden ga je akkoord met onze{" "}
                    <Link href="/privacyverklaring" className="underline hover:text-white/50 transition-colors">privacyverklaring</Link>. Je e-mail wordt nooit verkocht.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why download */}
      <section className="relative py-24 lg:py-32 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] tracking-[0.5em] font-light uppercase text-[#d4a574] mb-6 anim">
              Waarom deze checklist
            </p>
            <h2 className="text-4xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.1] mb-16 anim delay-1">
              Voor wie geen tijd heeft <span className="italic text-white/50">om in de val te trappen.</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-px bg-white/5">
              {[
                { n: "23", l: "Checkpoints", d: "Concrete punten die je voor, tijdens en na het webdesign-traject afvinkt." },
                { n: "10", l: "Vragen", d: "De tien vragen waar elke serieuze bureau-offerte antwoord op moet geven." },
                { n: "100%", l: "Gratis", d: "Geen e-mail spam, geen funnel. Eenmalige download, jij beslist wat je ermee doet." },
              ].map((v) => (
                <div key={v.l} className="bg-[#050505] p-10 lg:p-12 anim">
                  <p className="text-5xl lg:text-6xl font-extralight text-white tracking-wider mb-4">{v.n}</p>
                  <p className="text-[#d4a574] text-[10px] tracking-[0.3em] font-light uppercase mb-4">{v.l}</p>
                  <p className="text-white/50 text-sm font-light leading-[1.8] tracking-wide">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.15] anim">
              Liever direct sparren?<br />
              <span className="italic text-white/50">Plan een gesprek.</span>
            </h2>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center anim delay-1">
              <Link href="/#contact" className="inline-flex items-center justify-center gap-3 px-12 py-5 border border-white/15 text-white text-xs tracking-[0.3em] font-light hover:bg-white/5 hover:border-white/30 transition-all duration-500">
                NEEM CONTACT OP
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
