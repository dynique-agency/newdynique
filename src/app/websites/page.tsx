"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatusIndicator from "@/components/StatusIndicator";
import SocialProofSection from "@/components/SocialProofSection";
import { openWhatsApp } from "@/lib/openWhatsApp";

const ACCENT = "#d4a574";

// Zelfde patroon als de homepage-portfoliosectie: video speelt alleen als de
// kaart in beeld is, zodat we niet onnodig bandbreedte verstoken op mobiel.
function PortfolioVideo({ src, className }: { src: string; className: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: "200px" });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (inView) el.play().catch(() => {});
    else el.pause();
  }, [inView]);

  return <video ref={ref} src={src} className={className} muted loop playsInline preload="metadata" />;
}

// Zelfde 4 echte cases als homepage/portfolio — geen nieuwe content verzonnen.
const projects = [
  { number: "01", title: "CHEFS CONNECT", category: "CULINAIR PLATFORM", summary: "Waar topchefs en premium keukens elkaar vinden.", video: "/rsc/chefsconnect/preview.mp4", url: "chefs-connect.nl", accent: "#ef4444", link: "/portfolio/chefs-connect" },
  { number: "02", title: "AUWT AELSE", category: "BISTRO", summary: "Bourgondisch tafelen, eigentijds geserveerd.", video: "/rsc/auwtaelse/preview.mp4", url: "auwtaelse.nl", accent: "#eab308", link: "/portfolio/auwt-aelse" },
  { number: "03", title: "IJSSALON ITALIA", category: "FAMILIEBEDRIJF", summary: "Ambachtelijk ijs sinds 1969. Nu ook digitaal.", video: "/rsc/ijssalon/preview.mp4", url: "ijssalonitaliavaals.nl", accent: "#fb923c", link: "/portfolio/ijssalon-italia" },
  { number: "04", title: "STACY KOHNEN", category: "ARTIST PORTFOLIO", summary: "Viertalig. Eén stem. Eindeloze podia.", video: "/rsc/stacykohnen/preview.mp4", url: "stacykohnen.de", accent: "#a78bfa", link: "/portfolio/stacy-kohnen" },
];

const STEPS = [
  { n: "01", t: "Kennismaking", d: "Kort gesprek — bellen, WhatsApp of gewoon langs — over wat je nodig hebt en wat het mag kosten. Vrijblijvend." },
  { n: "02", t: "Voorstel op maat", d: "Binnen een paar dagen een concreet voorstel: wat we bouwen, wanneer het klaar is, wat het kost. Vaste prijs, geen verrassingen achteraf." },
  { n: "03", t: "Bouwen & livegang", d: "We bouwen, jij checkt tussentijds mee via een preview-link, en binnen 7 tot 14 dagen staat je site live." },
];

export default function WebsitesShowcase() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      document.querySelectorAll(".anim").forEach((el) => el.classList.add("animate-in"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-in");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".anim").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const startChat = () =>
    openWhatsApp("Hi Tom! Ik kom net van dynique.nl/websites en wil graag verder praten over een website voor mijn bedrijf.");

  return (
    <>
      <Header variant="light" />

      <main className="relative bg-[#070707] overflow-hidden">
        {/* ─── HERO ─────────────────────────────────────────── */}
        <section className="relative min-h-screen w-full overflow-hidden flex items-center">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute will-change-transform" style={{ top: "-8%", right: "-10%", width: "780px", height: "780px" }}>
              <div className="orb-breathe-1 w-full h-full rounded-full"
                style={{ background: "radial-gradient(circle, rgba(234,190,130,0.9) 0%, rgba(212,165,116,0.4) 40%, transparent 66%)", filter: "blur(50px)" }} />
            </div>
            <div className="absolute will-change-transform" style={{ bottom: "-18%", left: "-12%", width: "640px", height: "640px" }}>
              <div className="orb-breathe-2 w-full h-full rounded-full"
                style={{ background: "radial-gradient(circle, rgba(139,92,246,0.55) 0%, rgba(109,40,217,0.2) 38%, transparent 65%)", filter: "blur(65px)" }} />
            </div>
            <div className="absolute will-change-transform" style={{ top: "42%", left: "42%", width: "340px", height: "340px" }}>
              <div className="orb-breathe-3 w-full h-full rounded-full"
                style={{ background: "radial-gradient(circle, rgba(244,114,182,0.38) 0%, rgba(219,39,119,0.12) 42%, transparent 65%)", filter: "blur(45px)" }} />
            </div>
            <div className="absolute inset-0 opacity-[0.05]"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px" }} />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 45%, transparent 45%, rgba(7,7,7,0.72) 100%)" }} />
          </div>

          <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-32 pb-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-10 anim">
                <span className="inline-block w-8 h-[1px]" style={{ background: ACCENT }} />
                <p className="text-[10px] tracking-[0.55em] font-light uppercase" style={{ color: ACCENT }}>
                  Websites &amp; Web Apps
                </p>
                <span className="inline-block w-8 h-[1px]" style={{ background: ACCENT }} />
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extralight text-white tracking-[0.01em] leading-[0.98] anim delay-1">
                Zo bouwen wij
                <br />
                <span className="italic text-white/50">jouw website.</span>
              </h1>

              <p className="mt-10 max-w-2xl mx-auto text-white/55 text-base lg:text-xl font-light leading-[1.85] tracking-wide anim delay-2">
                Geen sjabloon, geen wachtrij, geen verrassingen achteraf. Hieronder zie je precies wat je krijgt —
                en waarom de bedrijven die al voor ons kozen, dat niet hebben beklaagd.
              </p>

              {/* Trust pills */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3 anim delay-2">
                {["Live binnen 7–14 dagen", "Vaste prijs, vooraf", "Rechtstreeks contact met de developer"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2 px-4 py-2 border border-white/12 text-white/55 text-[11px] tracking-[0.15em] font-light">
                    <span className="w-1 h-1 rounded-full" style={{ background: ACCENT }} />
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center anim delay-3">
                <button
                  onClick={startChat}
                  className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-black text-xs tracking-[0.3em] font-light hover:tracking-[0.4em] transition-all duration-500"
                >
                  STUUR TOM EEN BERICHT
                  <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413" />
                  </svg>
                </button>
                <a href="#werk" className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/15 text-white text-xs tracking-[0.3em] font-light hover:bg-white/5 hover:border-white/30 transition-all duration-500">
                  BEKIJK HET WERK
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PORTFOLIO ────────────────────────────────────── */}
        <section id="werk" className="relative py-28 lg:py-36 border-t border-white/[0.06] overflow-hidden">
          <div aria-hidden className="orb-breathe-1 absolute top-1/4 -right-24 w-[620px] h-[620px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.28) 0%, rgba(99,102,241,0.08) 42%, transparent 70%)", filter: "blur(24px)" }} />
          <div aria-hidden className="orb-breathe-3 absolute -bottom-16 -left-20 w-[620px] h-[620px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(251,191,36,0.24) 0%, rgba(251,191,36,0.07) 42%, transparent 70%)", filter: "blur(24px)" }} />

          <div className="container mx-auto px-6 lg:px-12 relative">
            <div className="max-w-2xl mb-16 anim">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-px bg-white/20" />
                <p className="text-white/30 text-[10px] tracking-[0.5em] font-light">GESELECTEERD WERK</p>
              </div>
              <h2 className="text-4xl lg:text-6xl font-extralight text-white tracking-[0.04em] leading-[1.05] mb-6">
                Dit hebben we <span className="italic text-white/50">gebouwd.</span>
              </h2>
              <p className="text-white/45 text-base lg:text-lg font-light leading-relaxed tracking-wide">
                Zelf gebouwd, van eerste gesprek tot livegang — geen sjabloon, geen shortcuts.
              </p>
            </div>

            {/* Featured — eerste case groot */}
            {projects.slice(0, 1).map((p) => (
              <a key={p.number} href={p.link} className="group relative block mb-10 lg:mb-14 anim delay-1">
                <span className="absolute -top-10 -left-2 lg:-left-4 text-[160px] lg:text-[220px] font-extralight text-white/[0.04] leading-none select-none pointer-events-none z-0 tracking-tighter">{p.number}</span>
                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="absolute -inset-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 40%, ${p.accent}25 0%, transparent 70%)`, filter: "blur(30px)" }} />
                  <div className="relative rounded-lg overflow-hidden bg-zinc-950 border border-white/[0.08] group-hover:border-white/[0.16] transition-colors duration-500 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]">
                    <div className="h-9 bg-zinc-900/80 backdrop-blur border-b border-white/[0.05] flex items-center px-4 relative">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08] group-hover:bg-red-400/50 transition-colors duration-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08] group-hover:bg-amber-400/50 transition-colors duration-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08] group-hover:bg-green-400/50 transition-colors duration-500" />
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 px-3 py-0.5 text-[10px] font-light tracking-[0.2em] text-white/25 bg-zinc-800/60 rounded-sm">{p.url}</div>
                    </div>
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <PortfolioVideo src={p.video} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                      <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: `inset 0 0 80px ${p.accent}12` }} />
                    </div>
                  </div>
                </div>
                <div className="pt-7 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block px-2.5 py-1 text-[9px] tracking-[0.3em] font-light border" style={{ color: p.accent, borderColor: `${p.accent}50` }}>UITGELICHT</span>
                      <span className="text-white/30 text-[9px] tracking-[0.4em] font-light">{p.category}</span>
                    </div>
                    <h3 className="text-white text-2xl lg:text-4xl font-extralight tracking-[0.06em] mb-2 group-hover:text-white/90 transition-colors">{p.title}</h3>
                    <p className="text-white/40 text-sm font-light tracking-wide italic">{p.summary}</p>
                  </div>
                  <div className="flex items-center gap-2 text-white/25 text-[9px] tracking-[0.35em] font-light group-hover:text-white/70 transition-colors duration-400 flex-shrink-0">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full animate-pulse" style={{ background: p.accent }} />
                      LIVE
                    </span>
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}

            {/* Overige cases */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {projects.slice(1).map((p, i) => (
                <a key={p.number} href={p.link} className="group relative block anim" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <span className="absolute -top-8 -left-2 text-[90px] font-extralight text-white/[0.035] leading-none select-none pointer-events-none z-0 tracking-tighter">{p.number}</span>
                  <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1.5">
                    <div className="absolute -inset-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{ background: `radial-gradient(circle at 50% 50%, ${p.accent}22 0%, transparent 70%)`, filter: "blur(20px)" }} />
                    <div className="relative rounded-md overflow-hidden bg-zinc-950 border border-white/[0.06] group-hover:border-white/[0.12] transition-colors duration-500 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.8)]">
                      <div className="h-8 bg-zinc-900/80 backdrop-blur border-b border-white/[0.04] flex items-center px-3 relative">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08] group-hover:bg-red-400/50 transition-colors duration-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08] group-hover:bg-amber-400/50 transition-colors duration-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08] group-hover:bg-green-400/50 transition-colors duration-500" />
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 px-3 py-0.5 text-[10px] font-light tracking-[0.2em] text-white/25 bg-zinc-800/60 rounded-sm">{p.url}</div>
                      </div>
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <PortfolioVideo src={p.video} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                        <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: `inset 0 0 60px ${p.accent}10` }} />
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-white/25 text-[9px] tracking-[0.4em] font-light">{p.number}</span>
                      <span className="w-4 h-px bg-white/15" />
                      <span className="text-white/30 text-[9px] tracking-[0.4em] font-light">{p.category}</span>
                    </div>
                    <h3 className="text-white text-lg lg:text-xl font-extralight tracking-[0.08em] mb-2 group-hover:text-white/90 transition-colors">{p.title}</h3>
                    <p className="text-white/35 text-[12px] font-light tracking-wide italic">{p.summary}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TOM — PERSOONLIJKE HANDTEKENING ─────────────────── */}
        <section className="relative py-24 lg:py-32 border-t border-white/[0.06]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center anim">
              <div className="w-14 h-14 mx-auto mb-8 rounded-full flex items-center justify-center border border-white/15">
                <span className="text-white/70 text-lg font-extralight tracking-wide">TC</span>
              </div>
              <p className="text-white/30 text-[10px] tracking-[0.5em] font-light uppercase mb-6">Even voorstellen</p>
              <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.15] mb-8">
                Hoi, met Tom.
              </h2>
              <p className="text-white/55 text-base lg:text-lg font-light leading-[1.9] tracking-wide max-w-2xl mx-auto">
                Head of Development bij Dynique. Ik bouw zelf mee aan elk project — van het eerste gesprek tot de dag
                dat je site live gaat. Geen accountmanager die je project doorschuift naar een ontwikkelaar die je
                nooit spreekt. Gewoon ik, rechtstreeks, met een vaste prijs en een heldere planning.
              </p>
              <p className="mt-8">
                <StatusIndicator className="text-[#d4a574] text-sm font-light tracking-wide" />
              </p>
            </div>
          </div>
        </section>

        {/* ─── PROCES ───────────────────────────────────────── */}
        <section className="relative py-24 lg:py-32 border-t border-white/[0.06] overflow-hidden">
          <div aria-hidden className="orb-breathe-2 absolute -top-16 right-[-8%] w-[780px] h-[780px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(212,165,116,0.16) 0%, transparent 65%)", filter: "blur(60px)" }} />
          <div className="container mx-auto px-6 lg:px-12 relative">
            <div className="max-w-2xl mb-16 anim">
              <p className="text-[10px] tracking-[0.5em] font-light mb-5" style={{ color: ACCENT }}>HOE HET WERKT</p>
              <h2 className="text-4xl lg:text-6xl font-extralight text-white tracking-[0.02em] leading-[1.1]">
                Drie stappen. <span className="italic text-white/50">Geen omwegen.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]">
              {STEPS.map((s, i) => (
                <div key={s.n} className="bg-[#070707] p-9 lg:p-10 anim" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="text-4xl font-extralight leading-none mb-6" style={{ color: ACCENT }}>{s.n}</div>
                  <h3 className="text-white text-sm tracking-[0.2em] font-light uppercase mb-4">{s.t}</h3>
                  <div className="w-8 h-px mb-6" style={{ background: `${ACCENT}80` }} />
                  <p className="text-white/55 text-sm font-light leading-[1.8] tracking-wide">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SocialProofSection accent={ACCENT} select={["stacyKohnen", "chefsConnect", "ijssalonItalia", "auwtAelse"]} />

        {/* ─── PRIJS ────────────────────────────────────────── */}
        <section className="relative py-24 lg:py-32 border-t border-white/[0.06]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center anim">
              <p className="text-[10px] tracking-[0.5em] font-light mb-6 uppercase" style={{ color: ACCENT }}>Eerlijk vooraf</p>
              <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.15] mb-8">
                Wat kost het?
              </h2>
              <p className="text-white/55 text-base lg:text-lg font-light leading-[1.9] tracking-wide">
                Een gemiddelde website begint rond de <span className="text-white/85">€3.500</span> — een webshop start hoger.
                Een web app (klantportaal, boekingssysteem, dashboard) is meer maatwerk: reken op{" "}
                <span className="text-white/85">€4.000 tot €15.000</span>, soms meer bij complexere koppelingen. Na het
                eerste gesprek weet je exact waar je aan toe bent — vaste prijs, geen verrassingen achteraf.
              </p>
            </div>
          </div>
        </section>

        {/* ─── FINALE CTA ───────────────────────────────────── */}
        <section className="relative py-28 lg:py-36 border-t border-white/[0.06] overflow-hidden">
          <div aria-hidden className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 50% 50%, ${ACCENT}14 0%, transparent 60%)` }} />
          <div className="container mx-auto px-6 lg:px-12 relative text-center">
            <h2 className="text-4xl lg:text-6xl font-extralight text-white tracking-[0.02em] leading-[1.1] mb-8 anim">
              Klaar om verder <span className="italic text-white/50">te praten?</span>
            </h2>
            <p className="text-white/50 text-base lg:text-lg font-light tracking-wide mb-12 max-w-xl mx-auto anim delay-1">
              Eén bericht is genoeg. Geen formulier, geen wachtrij — gewoon rechtstreeks bij mij.
            </p>
            <div className="anim delay-2">
              <button
                onClick={startChat}
                className="group inline-flex items-center justify-center gap-3 px-14 py-5 text-black text-xs tracking-[0.3em] font-medium transition-all duration-300"
                style={{ background: ACCENT }}
              >
                STUUR TOM EEN BERICHT
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            <p className="mt-10 anim delay-2">
              <Link href="/portfolio" className="text-white/35 hover:text-white/70 text-[11px] tracking-[0.3em] font-light transition-colors duration-300">
                OF BEKIJK EERST HET VOLLEDIGE PORTFOLIO →
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        @keyframes breathe1 {
          0%   { transform: scale(0.82) rotate(0deg);   opacity: 0.65; }
          35%  { transform: scale(1.22) rotate(10deg);  opacity: 1; }
          65%  { transform: scale(0.92) rotate(-6deg);  opacity: 0.78; }
          100% { transform: scale(0.82) rotate(0deg);   opacity: 0.65; }
        }
        @keyframes breathe2 {
          0%   { transform: scale(1.1)  rotate(-6deg);  opacity: 0.6; }
          40%  { transform: scale(0.78) rotate(8deg);   opacity: 1; }
          72%  { transform: scale(1.18) rotate(-4deg);  opacity: 0.72; }
          100% { transform: scale(1.1)  rotate(-6deg);  opacity: 0.6; }
        }
        @keyframes breathe3 {
          0%   { transform: scale(0.88) rotate(12deg);  opacity: 0.45; }
          50%  { transform: scale(1.32) rotate(-10deg); opacity: 0.95; }
          100% { transform: scale(0.88) rotate(12deg);  opacity: 0.45; }
        }
        .orb-breathe-1 { animation: breathe1 9s  ease-in-out infinite; }
        .orb-breathe-2 { animation: breathe2 13s ease-in-out infinite; }
        .orb-breathe-3 { animation: breathe3 7s  ease-in-out infinite; }

        .anim {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .anim.animate-in { opacity: 1; transform: translateY(0); }
        .delay-1 { transition-delay: 0.12s; }
        .delay-2 { transition-delay: 0.26s; }
        .delay-3 { transition-delay: 0.42s; }

        @media (max-width: 768px) {
          .anim { transform: translateY(20px); transition-duration: 0.7s; }
        }
        @media (prefers-reduced-motion: reduce) {
          .anim { opacity: 1; transform: none; transition: none; }
          .orb-breathe-1, .orb-breathe-2, .orb-breathe-3 { animation: none; }
        }
      `}</style>
    </>
  );
}
