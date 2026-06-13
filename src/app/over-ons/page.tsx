"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GOLD = "#d4a574";

const VALUES = [
  { t: "VAKMANSCHAP", d: "Elk detail telt. We leveren niets de deur uit waar we zelf niet trots op zijn." },
  { t: "DIRECTHEID", d: "Beloofd is beloofd. Eén aanspreekpunt, korte lijnen, geen ruis." },
  { t: "MAATWERK MET CODE", d: "Geen standaardpakketten waar je je naar moet vormen. Software gebouwd rondom hoe jij werkt." },
  { t: "EIGENAARSCHAP", d: "Jouw project, mijn verantwoordelijkheid — van eerste schets tot lang na livegang." },
];

const PROMISE = [
  { t: "Eén aanspreekpunt", d: "Geen accountmanagers of doorverwijzingen. Je praat met degene die het ook bouwt." },
  { t: "Snel live", d: "Strakke planning, korte iteraties. Vaak binnen dagen in plaats van maanden." },
  { t: "Eerlijk advies", d: "We zeggen ook wanneer iets simpeler of goedkoper kan. Dat bouwt vertrouwen." },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      name: "Over Dynique",
      url: "https://dynique.nl/over-ons",
      description:
        "Het verhaal, de werkwijze en de waarden achter Dynique — een full creative development agency uit Limburg.",
    },
    {
      "@type": "Organization",
      name: "Dynique",
      url: "https://dynique.nl",
      email: "info@dynique.nl",
      telephone: "+31624572572",
      foundingLocation: { "@type": "Place", name: "Limburg, Nederland" },
      description:
        "Full creative development agency: websites, maatwerk software, AI-marketing en drone-videografie.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
        { "@type": "ListItem", position: 2, name: "Over ons", item: "https://dynique.nl/over-ons" },
      ],
    },
  ],
};

export default function OverOns() {
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
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".anim").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <Header variant="light" />

      <main className="relative bg-[#080808] overflow-hidden">
        {/* Ambient orbs */}
        <div className="absolute top-[6%] -right-40 w-[620px] h-[620px] rounded-full pointer-events-none z-0"
          style={{ background: `radial-gradient(circle, ${GOLD}1c 0%, transparent 65%)`, filter: "blur(70px)" }} />
        <div className="absolute bottom-[8%] -left-40 w-[540px] h-[540px] rounded-full pointer-events-none z-0"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 65%)", filter: "blur(70px)" }} />

        {/* ── HERO ───────────────────────────────────────── */}
        <section className="relative px-6 lg:px-12 pt-36 pb-20 lg:pt-44 lg:pb-28">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "56px 56px" }} />

          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">
              {/* text */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="hv hv-1 flex items-center gap-3 mb-8">
                  <div className="w-12 h-px" style={{ background: GOLD }} />
                  <p className="text-white/45 text-[10px] tracking-[0.5em] font-light">DE MENS ACHTER DYNIQUE</p>
                </div>
                <h1 className="hv hv-2 text-[clamp(38px,6.4vw,82px)] font-extralight text-white tracking-[0.02em] leading-[1.04] mb-8">
                  Ik bouw wat anderen
                  <br />
                  <span className="italic text-white/45">alleen beschrijven.</span>
                </h1>
                <p className="hv hv-3 text-white/55 text-lg lg:text-xl font-extralight tracking-wide leading-relaxed max-w-xl mb-6">
                  Dynique begon vanuit één overtuiging: de kloof tussen een goed idee en een
                  world-class uitvoering moet kleiner. Voor elke ondernemer die ergens voor staat.
                </p>
                <p className="hv hv-3 text-white/35 text-base font-light leading-relaxed tracking-wide max-w-xl">
                  Websites, maatwerk software, AI-marketing en dronebeelden — onder één dak,
                  met één aanspreekpunt dat jouw verhaal van binnen kent.
                </p>
              </div>

              {/* photo */}
              <div className="lg:col-span-5 order-1 lg:order-2 relative hv hv-4">
                <div aria-hidden className="absolute -top-8 -right-2 font-extralight text-white leading-none select-none pointer-events-none"
                  style={{ fontSize: "clamp(80px,11vw,140px)", opacity: 0.06 }}>01</div>

                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/rsc/founder2.jpeg" alt="Oprichter van Dynique"
                    className="w-full block rounded-sm"
                    style={{ aspectRatio: "3/4", objectFit: "cover", objectPosition: "center 15%", filter: "grayscale(1) contrast(1.15) brightness(0.85)" }} />
                  <div className="absolute inset-x-0 bottom-0 h-28" style={{ background: "linear-gradient(to top, #080808 10%, transparent 100%)" }} />
                  <div className="absolute inset-0 opacity-[0.08] rounded-sm"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "128px" }} />
                </div>
                <div className="absolute top-6 bottom-14 w-[2px]"
                  style={{ left: "calc(14% - 2px)", background: `linear-gradient(to bottom, transparent, ${GOLD}cc, transparent)` }} />
                <div className="mt-5 flex items-center gap-3" style={{ paddingLeft: "16%" }}>
                  <div className="w-5 h-px" style={{ background: `${GOLD}88` }} />
                  <p className="text-white/35 text-[8px] tracking-[0.45em] font-light">OPRICHTER · DYNIQUE</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PULL QUOTE ──────────────────────────────────── */}
        <section className="relative px-6 lg:px-12 py-20 lg:py-28 border-t border-white/[0.06] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 50% 50%, ${GOLD}0e 0%, transparent 60%)` }} />
          <div className="container mx-auto relative">
            <blockquote className="max-w-4xl mx-auto text-center anim">
              <p className="text-2xl lg:text-4xl font-extralight text-white/90 tracking-wide leading-[1.4] italic">
                "Dynamisch in aanpak, uniek in resultaat. Geen bureau dat je een pakket verkoopt —
                een partner die meedenkt tot het écht klopt."
              </p>
              <footer className="mt-8 flex items-center justify-center gap-4">
                <div className="w-10 h-px" style={{ background: `${GOLD}aa` }} />
                <span className="text-white/45 text-[10px] tracking-[0.35em] font-light uppercase">De Dynique-belofte</span>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* ── WAARDEN ─────────────────────────────────────── */}
        <section className="relative px-6 lg:px-12 py-20 lg:py-28">
          <div className="container mx-auto">
            <div className="max-w-3xl anim mb-12 lg:mb-16">
              <p className="text-[10px] tracking-[0.5em] font-light mb-5" style={{ color: GOLD }}>WAAR WE IN GELOVEN</p>
              <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.12]">
                Vier principes.
                <span className="text-white/45 italic"> Geen compromis.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">
              {VALUES.map((v, i) => (
                <div key={v.t} className="bg-[#080808] p-8 lg:p-9 anim group/v relative overflow-hidden" style={{ transitionDelay: `${i * 0.07}s` }}>
                  <div className="absolute top-0 left-0 h-px w-0 group-hover/v:w-full transition-all duration-700" style={{ background: GOLD }} />
                  <span className="text-2xl font-extralight" style={{ color: GOLD }}>0{i + 1}</span>
                  <div className="w-8 h-px my-5" style={{ background: `${GOLD}66` }} />
                  <h3 className="text-white text-[13px] tracking-[0.2em] font-light mb-3 uppercase">{v.t}</h3>
                  <p className="text-white/50 text-sm font-light leading-relaxed tracking-wide">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BELOFTE ─────────────────────────────────────── */}
        <section className="relative px-6 lg:px-12 py-20 lg:py-28 border-t border-white/[0.06]">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5 anim">
                <p className="text-[10px] tracking-[0.5em] font-light mb-5" style={{ color: GOLD }}>WAT JE MAG VERWACHTEN</p>
                <h2 className="text-3xl lg:text-4xl font-extralight text-white tracking-[0.02em] leading-[1.15]">
                  Werken met Dynique
                  <span className="text-white/45 italic"> voelt anders.</span>
                </h2>
              </div>
              <div className="lg:col-span-7 anim delay-1 space-y-px bg-white/[0.06] border border-white/[0.06]">
                {PROMISE.map((p) => (
                  <div key={p.t} className="bg-[#080808] flex items-start gap-5 p-7">
                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke={GOLD} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="text-white text-base font-light tracking-wide mb-1.5">{p.t}</h3>
                      <p className="text-white/45 text-sm font-light leading-relaxed tracking-wide">{p.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────── */}
        <section className="relative px-6 lg:px-12 py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 50% 40%, ${GOLD}10 0%, transparent 55%)` }} />
          <div className="container mx-auto relative text-center anim">
            <h2 className="text-4xl lg:text-6xl font-extralight text-white tracking-[0.04em] leading-[1.05] mb-7">
              Benieuwd wat we
              <br />
              <span className="italic" style={{ color: GOLD }}>voor jou kunnen bouwen?</span>
            </h2>
            <p className="text-white/50 text-base font-light leading-relaxed tracking-wide max-w-xl mx-auto mb-10">
              Eén gesprek is genoeg om te voelen of het klikt. Vrijblijvend, en altijd eerlijk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-black text-[11px] tracking-[0.25em] font-medium hover:bg-white/85 transition-all duration-300">
                PLAN EEN GESPREK
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/diensten"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/15 text-white/60 text-[11px] tracking-[0.25em] font-light hover:border-white/40 hover:text-white transition-all duration-300">
                BEKIJK ONZE DIENSTEN
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .anim { opacity: 0; transform: translateY(32px); transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1); will-change: opacity, transform; }
        .anim.animate-in { opacity: 1; transform: translateY(0); }
        .anim.delay-1 { transition-delay: 0.12s; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: none; } }
        .hv { opacity: 0; animation: fadeUp 0.95s cubic-bezier(0.16,1,0.3,1) forwards; }
        .hv-1 { animation-delay: 0.05s; } .hv-2 { animation-delay: 0.18s; } .hv-3 { animation-delay: 0.32s; } .hv-4 { animation-delay: 0.32s; }
        @media (prefers-reduced-motion: reduce) {
          .anim { opacity: 1; transform: none; transition: none; }
          .hv { opacity: 1; animation: none; }
        }
      `}</style>
    </>
  );
}
