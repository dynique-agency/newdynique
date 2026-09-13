"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { REVIEWS } from "@/components/SocialProofSection";
import { ProcessStyles } from "@/components/processen/Visuals";
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

// Subtiele magnetische knop — volgt de cursor lichtjes binnen de eigen grenzen.
function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.22}px, ${y * 0.32}px)`;
    };
    const onLeave = () => {
      el.style.transform = "translate(0, 0)";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);
  return ref;
}

// "Pin & scrub": de sticky child blijft vastzitten terwijl je door de hoge
// wrapper scrollt, en --p loopt lineair van 0 naar 1 over de VOLLE scrollafstand.
// Los van useBeforeAfterScrub (die animeert rond het moment dat een element de
// viewport kruist) — hier is elke pixel scroll relevant, geen dode zone aan
// begin of eind, wat bij de vorige versie het probleem was.
function usePinnedScrub(wrapRef: React.RefObject<HTMLDivElement | null>, targetRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const wrap = wrapRef.current;
        const target = targetRef.current;
        if (!wrap || !target) return;
        const rect = wrap.getBoundingClientRect();
        const scrollable = rect.height - window.innerHeight;
        let p = scrollable > 0 ? -rect.top / scrollable : rect.top <= 0 ? 1 : 0;
        p = Math.min(1, Math.max(0, p));
        target.style.setProperty("--p", p.toFixed(4));
        target.dataset.p = p >= 0.99 ? "done" : p <= 0.01 ? "start" : "mid";
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [wrapRef, targetRef]);
}

// Illustratief, geen echte klant — zelfde abstractie-aanpak als BeforeScreen/AfterScreen
// in processen/Visuals.tsx: een gecodeerde schets van "hoe het eruitziet", geen screenshot.
function OldSiteScreen() {
  return (
    <div className="absolute inset-0 bg-[#e4ddc8] overflow-hidden select-none">
      <div className="absolute top-0 left-0 right-0 h-10 bg-[#003366] flex items-center px-3 gap-4">
        <span className="text-white text-[11px] font-bold" style={{ fontFamily: "Georgia, serif" }}>UwBedrijfNaam</span>
        <span className="ml-auto flex gap-3 text-[9px] text-blue-200 underline">
          <span>HOME</span><span>OVER ONS</span><span>CONTACT</span>
        </span>
      </div>
      <div className="absolute top-14 left-3 right-3 flex items-center justify-between">
        <span className="text-[9px] text-red-700 font-bold" style={{ fontFamily: "Georgia, serif" }}>Laatst bijgewerkt: 14-03-2016</span>
        <span className="px-2 py-1 bg-yellow-300 text-red-700 text-[8px] font-bold rotate-[-3deg] border border-red-700">GRATIS OFFERTE!</span>
      </div>
      <div className="absolute top-24 left-3 w-[62%] space-y-1.5">
        <div className="h-2.5 bg-[#003366]/70 rounded-sm w-[85%]" />
        <div className="h-1.5 bg-black/25 rounded-sm w-full" />
        <div className="h-1.5 bg-black/25 rounded-sm w-full" />
        <div className="h-1.5 bg-black/25 rounded-sm w-[70%]" />
        <div className="h-1.5 bg-black/25 rounded-sm w-full mt-3" />
        <div className="h-1.5 bg-black/25 rounded-sm w-[60%]" />
      </div>
      <div className="absolute top-24 right-3 w-[28%] aspect-square bg-black/15 border border-black/20 flex items-center justify-center">
        <span className="text-black/30 text-[7px]">IMG</span>
      </div>
      <div className="absolute bottom-3 left-3 right-3 h-6 border-t border-black/20 flex items-center justify-center">
        <span className="text-[7px] text-black/35 tracking-wide">© 2011-2016 · Beste bekeken met Internet Explorer</span>
      </div>
    </div>
  );
}

function NewSiteScreen() {
  return (
    <div className="absolute inset-0 bg-[#080b0a] overflow-hidden select-none">
      <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 30% 20%, ${ACCENT}1c 0%, transparent 60%)` }} />
      <div className="relative flex items-center justify-between px-5 pt-5">
        <span className="text-white/80 text-[10px] tracking-[0.25em] font-light">UWBEDRIJF</span>
        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[8px]" style={{ borderColor: `${ACCENT}55`, color: ACCENT }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} /> LIVE
        </span>
      </div>
      <div className="relative px-5 pt-8">
        <div className="h-3.5 bg-white/85 rounded-sm w-[70%] mb-2.5" />
        <div className="h-3.5 rounded-sm w-[40%] mb-5" style={{ background: ACCENT }} />
        <div className="flex gap-2 mb-6">
          <div className="px-3 py-1.5 rounded text-[8px] font-light" style={{ background: ACCENT, color: "#06281f" }}>START JE PROJECT</div>
          <div className="px-3 py-1.5 rounded border border-white/20 text-white/50 text-[8px] font-light">BEKIJK WERK</div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[{ v: "98", l: "SNELHEID" }, { v: "100%", l: "MOBIEL" }, { v: "#1-3", l: "GOOGLE" }].map((s) => (
            <div key={s.l} className="bg-white/[0.04] border border-white/[0.08] rounded-md p-2.5">
              <p className="text-white text-[15px] font-light leading-none">{s.v}</p>
              <p className="text-white/35 text-[7px] tracking-wide mt-1.5">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Zelfde niet-responsieve site, nu geplet in een smal telefoonscherm — de klassieke
// "uitgezoomd, moet knijpen om te lezen"-ervaring die iedereen herkent.
function OldPhoneScreen() {
  return (
    <div className="absolute inset-0 bg-[#e4ddc8] overflow-hidden select-none">
      <div className="absolute top-1 right-1.5 text-[6px] text-black/25 tracking-wide z-10">PINCH OM TE LEZEN</div>
      <div style={{ transform: "scale(0.42)", transformOrigin: "top left", width: "238%" }}>
        <div className="h-10 bg-[#003366] flex items-center px-3 gap-4">
          <span className="text-white text-[11px] font-bold" style={{ fontFamily: "Georgia, serif" }}>UwBedrijfNaam</span>
          <span className="ml-auto flex gap-3 text-[9px] text-blue-200 underline">
            <span>HOME</span><span>OVER ONS</span><span>CONTACT</span>
          </span>
        </div>
        <div className="p-3 flex items-center justify-between">
          <span className="text-[9px] text-red-700 font-bold" style={{ fontFamily: "Georgia, serif" }}>Laatst bijgewerkt: 14-03-2016</span>
          <span className="px-2 py-1 bg-yellow-300 text-red-700 text-[8px] font-bold rotate-[-3deg] border border-red-700 whitespace-nowrap">GRATIS OFFERTE!</span>
        </div>
        <div className="px-3 flex gap-3">
          <div className="w-[60%] space-y-1.5">
            <div className="h-2.5 bg-[#003366]/70 rounded-sm w-[85%]" />
            <div className="h-1.5 bg-black/25 rounded-sm w-full" />
            <div className="h-1.5 bg-black/25 rounded-sm w-full" />
            <div className="h-1.5 bg-black/25 rounded-sm w-[70%]" />
          </div>
          <div className="w-[30%] aspect-square bg-black/15 border border-black/20 flex items-center justify-center flex-shrink-0">
            <span className="text-black/30 text-[7px]">IMG</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function NewPhoneScreen() {
  return (
    <div className="absolute inset-0 bg-[#080b0a] overflow-hidden select-none">
      <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 50% 0%, ${ACCENT}1c 0%, transparent 55%)` }} />
      <div className="relative px-4 pt-7 flex items-center justify-between">
        <span className="text-white/80 text-[9px] tracking-[0.2em] font-light">UWBEDRIJF</span>
        <div className="flex flex-col gap-[3px]">
          <span className="block w-4 h-px bg-white/60" />
          <span className="block w-4 h-px bg-white/60" />
        </div>
      </div>
      <div className="relative px-4 pt-6 text-center">
        <div className="h-3 bg-white/85 rounded-sm w-[80%] mx-auto mb-1.5" />
        <div className="h-3 rounded-sm w-[55%] mx-auto mb-4" style={{ background: ACCENT }} />
        <div className="inline-block px-4 py-2 rounded text-[8px] font-light" style={{ background: ACCENT, color: "#06281f" }}>START JE PROJECT</div>
        <div className="grid grid-cols-3 gap-1.5 mt-5">
          {[{ v: "98", l: "SNEL" }, { v: "100%", l: "MOBIEL" }, { v: "#1-3", l: "GOOGLE" }].map((s) => (
            <div key={s.l} className="bg-white/[0.04] border border-white/[0.08] rounded-md p-1.5">
              <p className="text-white text-[12px] font-light leading-none">{s.v}</p>
              <p className="text-white/35 text-[6px] tracking-wide mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Zelf gecodeerd iPhone-frame — geen afbeelding, pure CSS.
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto" style={{ width: "260px" }}>
      <div className="relative rounded-[2.8rem] p-[10px] bg-[#0d0d0d] border border-white/10 shadow-[0_50px_120px_-40px_rgba(0,0,0,0.9)]">
        {/* Zijknoppen */}
        <span className="absolute -left-[2px] top-[86px] w-[3px] h-7 bg-[#0d0d0d] rounded-l-sm" />
        <span className="absolute -left-[2px] top-[122px] w-[3px] h-10 bg-[#0d0d0d] rounded-l-sm" />
        <span className="absolute -right-[2px] top-[104px] w-[3px] h-14 bg-[#0d0d0d] rounded-r-sm" />
        <div className="relative rounded-[2.2rem] overflow-hidden bg-black" style={{ aspectRatio: "9 / 19.5" }}>
          {/* Dynamic island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[84px] h-[22px] bg-black rounded-full z-20" />
          {children}
        </div>
      </div>
    </div>
  );
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

const MARQUEE_WORDS = ["VEROUDERD", "TRAAG", "ONVEILIG", "ONZICHTBAAR IN GOOGLE", "KOST KLANTEN"];

// Echte, geverifieerde reviews — zelfde bron als overal elders op de site.
const SPOTLIGHT_REVIEWS = [REVIEWS.stacyKohnen, REVIEWS.chefsConnect, REVIEWS.ijssalonItalia, REVIEWS.auwtAelse];

function HeroWords({ text, delayStart = 0 }: { text: string; delayStart?: number }) {
  const words = text.split(" ");
  const children: React.ReactNode[] = [];
  words.forEach((w, i) => {
    children.push(
      <span key={`w-${i}`} className="hero-word inline-block" style={{ animationDelay: `${delayStart + i * 0.09}s` }}>
        {w}
      </span>
    );
    if (i < words.length - 1) children.push(" ");
  });
  return <>{children}</>;
}

function BeforeAfterSlider({
  wrapHeight,
  labelBefore,
  labelAfter,
  before,
  after,
  urlLabel,
  frameClassName,
  children,
}: {
  wrapHeight: string;
  labelBefore: string;
  labelAfter: string;
  before: React.ReactNode;
  after: React.ReactNode;
  urlLabel: string;
  frameClassName?: string;
  children?: React.ReactNode;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  usePinnedScrub(wrapRef, targetRef);

  return (
    <div ref={wrapRef} className="relative" style={{ height: wrapHeight }}>
      <div className="sticky top-[14vh] flex flex-col items-center justify-center">
        <div className="flex items-center justify-between w-full max-w-[640px] mb-4 px-1">
          <span className="ba-label-before flex items-center gap-2 text-[10px] tracking-[0.3em] font-light text-red-400">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> {labelBefore}
          </span>
          <span className="ba-label-after flex items-center gap-2 text-[10px] tracking-[0.3em] font-light" style={{ color: ACCENT }}>
            {labelAfter} <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
          </span>
        </div>
        <div ref={targetRef} className={`ba-window ${frameClassName ?? "max-w-[640px] w-full"}`}>
          {children ?? (
            <>
              <div className="flex items-center gap-2 px-4 h-9 border-b border-white/[0.07] bg-white/[0.02]">
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="mx-auto text-[10px] tracking-[0.15em] text-white/35 font-light px-4 py-1 rounded bg-black/30">{urlLabel}</span>
              </div>
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
                {before}
                <div className="ba-after absolute inset-0">{after}</div>
                <div className="ba-divider">
                  <span className="ba-handle">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
                    </svg>
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
        <p className="text-center text-white/30 text-[10px] tracking-[0.25em] font-light mt-5">
          SCROLL OM TE VERGELIJKEN
        </p>
      </div>
    </div>
  );
}

export default function WebsitesShowcase() {
  const magneticPrimary = useMagnetic<HTMLButtonElement>();
  const magneticFinal = useMagnetic<HTMLButtonElement>();

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

      {/* Geen overflow-hidden op <main>: de pin-and-scrub-sliders hieronder gebruiken
          position:sticky, en elke overflow-hidden ancestor breekt dat. Secties die zelf
          decoratieve orbs clippen, doen dat lokaal — zie hero/marquee/portfolio hieronder. */}
      <main className="relative bg-[#070707]">
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

              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extralight text-white tracking-[0.01em] leading-[0.98]">
                <div className="overflow-hidden pb-2"><HeroWords text="Zo bouwen wij" delayStart={0.3} /></div>
                <div className="overflow-hidden italic text-white/50"><HeroWords text="jouw website." delayStart={0.55} /></div>
              </h1>

              <p className="mt-10 max-w-2xl mx-auto text-white/55 text-base lg:text-xl font-light leading-[1.85] tracking-wide anim delay-2">
                Geen sjabloon, geen wachtrij, geen verrassingen achteraf. Hieronder zie je precies wat je krijgt —
                en waarom de bedrijven die al voor ons kozen, dat niet hebben beklaagd.
              </p>

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
                  ref={magneticPrimary}
                  onClick={startChat}
                  className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-black text-xs tracking-[0.3em] font-light hover:tracking-[0.4em]"
                  style={{ transition: "transform 0.2s ease-out, letter-spacing 0.5s" }}
                >
                  STUUR TOM EEN BERICHT
                  <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413" />
                  </svg>
                </button>
                <a href="#vergelijk" className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/15 text-white text-xs tracking-[0.3em] font-light hover:bg-white/5 hover:border-white/30 transition-all duration-500">
                  BEKIJK HET VERSCHIL
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 anim delay-3">
            <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
              <div className="w-1 h-1.5 rounded-full bg-white/40 scroll-dot" />
            </div>
          </div>
        </section>

        {/* ─── MARQUEE — probleemstelling ─────────────────────── */}
        <section className="relative py-6 border-y border-white/[0.06] overflow-hidden bg-[#0a0505]">
          <div className="marquee-track flex items-center gap-10 whitespace-nowrap">
            {[...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS].map((w, i) => (
              <span key={i} className="flex items-center gap-10 text-red-400/60 text-sm tracking-[0.3em] font-light uppercase">
                {w}
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/40" />
              </span>
            ))}
          </div>
        </section>

        {/* ─── VEROUDERD VS VERNIEUWD — desktop + mobiel ────────── */}
        <section id="vergelijk" className="relative py-28 lg:py-20 border-b border-white/[0.06]">
          <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 50% 0%, ${ACCENT}14 0%, transparent 65%)` }} />
          <div className="container mx-auto px-6 lg:px-12 relative">
            <div className="max-w-2xl mx-auto text-center mb-8 anim">
              <p className="text-[10px] tracking-[0.5em] font-light mb-6 uppercase" style={{ color: ACCENT }}>Een eerlijke vraag</p>
              <h2 className="text-4xl lg:text-6xl font-extralight text-white tracking-[0.02em] leading-[1.1] mb-8">
                Verouderd. <br />
                <span className="italic text-white/50">Of gewoon niet online.</span>
              </h2>
              <p className="text-white/50 text-base lg:text-lg font-light leading-[1.85] tracking-wide">
                Een website die er niet meer bij hoort, kost je net zo veel klanten als geen website hebben.
                Bezoekers beslissen binnen seconden of ze je serieus nemen.
              </p>
            </div>

            <BeforeAfterSlider
              wrapHeight="220vh"
              labelBefore="VEROUDERD"
              labelAfter="VERNIEUWD"
              before={<OldSiteScreen />}
              after={<NewSiteScreen />}
              urlLabel="jouwbedrijf.nl"
            />

            <div className="max-w-2xl mx-auto text-center mt-4 mb-4 anim">
              <p className="text-[10px] tracking-[0.5em] font-light mb-5 uppercase" style={{ color: ACCENT }}>En op je telefoon?</p>
              <h3 className="text-2xl lg:text-4xl font-extralight text-white tracking-[0.02em] leading-[1.2]">
                Nog belangrijker — <span className="italic text-white/50">iedereen kijkt op mobiel.</span>
              </h3>
            </div>

            <BeforeAfterSlider
              wrapHeight="200vh"
              labelBefore="NIET RESPONSIEF"
              labelAfter="MOBIEL PERFECT"
              urlLabel="jouwbedrijf.nl"
              before={<OldPhoneScreen />}
              after={<NewPhoneScreen />}
              frameClassName="!bg-transparent !border-none !shadow-none !rounded-none !overflow-visible"
            >
              <PhoneFrame>
                <OldPhoneScreen />
                <div className="ba-after absolute inset-0"><NewPhoneScreen /></div>
                <div className="ba-divider">
                  <span className="ba-handle">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
                    </svg>
                  </span>
                </div>
              </PhoneFrame>
            </BeforeAfterSlider>
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

        {/* ─── REVIEWS — editorial spotlight, geen standaard grid ── */}
        <section className="relative py-28 lg:py-36 border-t border-white/[0.06] overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mb-20 lg:mb-28 anim">
              <p className="text-[10px] tracking-[0.5em] font-light mb-5" style={{ color: ACCENT }}>GEVERIFIEERDE KLANTEN</p>
              <h2 className="text-4xl lg:text-6xl font-extralight text-white tracking-[0.02em] leading-[1.1]">
                Niet onze woorden. <span className="italic text-white/50">De hunne.</span>
              </h2>
            </div>

            <div className="space-y-20 lg:space-y-28">
              {SPOTLIGHT_REVIEWS.map((r, i) => {
                const odd = i % 2 === 1;
                return (
                  <div key={r.name} className={`relative anim ${odd ? "lg:ml-auto lg:text-right" : ""}`} style={{ maxWidth: "820px" }}>
                    <span
                      aria-hidden
                      className={`absolute -top-16 lg:-top-24 select-none pointer-events-none leading-none font-serif ${odd ? "-right-2 lg:right-0" : "-left-2 lg:-left-4"}`}
                      style={{ fontSize: "clamp(120px, 18vw, 260px)", color: ACCENT, opacity: 0.08 }}
                    >
                      &rdquo;
                    </span>
                    <div className="relative">
                      <div className={`flex items-center gap-3 mb-6 ${odd ? "lg:justify-end" : ""}`}>
                        <span className="text-[11px] tracking-[0.4em] font-light" style={{ color: ACCENT }}>0{i + 1}</span>
                        <span className="w-8 h-px bg-white/15" />
                      </div>
                      <p className="text-white/85 text-2xl sm:text-3xl lg:text-[2.6rem] font-extralight leading-[1.35] tracking-wide">
                        &ldquo;{r.quote}&rdquo;
                      </p>
                      <div className={`mt-8 flex items-center gap-3 ${odd ? "lg:justify-end" : ""}`}>
                        <span className="flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0" style={{ background: `${ACCENT}22`, color: ACCENT }}>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M5 13l4 4L19 7" /></svg>
                        </span>
                        <div>
                          <p className="text-white/85 text-sm font-light tracking-wide">{r.name}</p>
                          <p className="text-white/40 text-xs font-light tracking-wide">
                            {r.role} ·{" "}
                            <a href={r.verifyUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-white/20 hover:decoration-white/50 hover:text-white/70 transition-colors">
                              {r.verifyLabel}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
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
            <p className="text-white/50 text-base lg:text-lg font-light tracking-wide mb-4 max-w-xl mx-auto anim delay-1">
              Eén bericht is genoeg. Geen formulier, geen wachtrij — gewoon rechtstreeks bij mij.
            </p>
            <p className="text-white/25 text-[11px] tracking-[0.3em] font-light mb-12 anim delay-1">
              — TOM CREEMERS, HEAD OF DEVELOPMENT
            </p>
            <div className="anim delay-2">
              <button
                ref={magneticFinal}
                onClick={startChat}
                className="group inline-flex items-center justify-center gap-3 px-14 py-5 text-black text-xs tracking-[0.3em] font-medium"
                style={{ background: ACCENT, transition: "transform 0.2s ease-out" }}
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
      <ProcessStyles />

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

        @keyframes heroWordIn {
          from { opacity: 0; transform: translateY(48px) skewY(4deg); }
          to   { opacity: 1; transform: translateY(0) skewY(0deg); }
        }
        .hero-word {
          opacity: 0;
          animation: heroWordIn 0.85s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.3334%); }
        }
        .marquee-track {
          animation: marquee 22s linear infinite;
          width: max-content;
        }

        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(8px); opacity: 1; }
        }
        .scroll-dot { animation: scrollDot 1.8s ease-in-out infinite; }

        /* Sterkere afronding bij begin/eind van de scrub: een gloed die opbouwt naarmate
           je dichter bij "vernieuwd" komt, zodat zelfs de rustpunten aan begin en eind
           iets vertellen i.p.v. statisch aan te voelen. */
        .ba-window { transition: box-shadow 0.15s linear, border-color 0.3s ease; }
        .ba-window[data-p="start"] { border-color: rgba(239, 68, 68, 0.25); }
        .ba-window[data-p="done"] { border-color: rgba(212, 165, 116, 0.45); }

        .delay-1 { transition-delay: 0.12s; }
        .delay-2 { transition-delay: 0.26s; }
        .delay-3 { transition-delay: 0.42s; }

        @media (prefers-reduced-motion: reduce) {
          .orb-breathe-1, .orb-breathe-2, .orb-breathe-3, .marquee-track, .scroll-dot { animation: none; }
          .hero-word { opacity: 1; animation: none; }
        }
      `}</style>
    </>
  );
}
