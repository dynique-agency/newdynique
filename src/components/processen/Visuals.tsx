"use client";

import { useEffect, type RefObject } from "react";

export const ACCENT = "#34d399";

/* ════════════════════════════════════════════════════════════
   Shared coded visuals + styles + hooks for the
   "digitale bedrijfsprocessen" pages (general + Limburg landing).
   No external images.
   ════════════════════════════════════════════════════════════ */

export function BeforeScreen() {
  return (
    <div className="absolute inset-0 bg-[#0c0b0c] overflow-hidden select-none">
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(239,68,68,0.14) 0%, transparent 60%)" }} />
      <div className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="absolute top-[7%] left-[7%] flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        <span className="text-red-300/80 text-[9px] tracking-[0.3em] font-light">SYSTEEM · 3 FOUTEN</span>
      </div>

      <div className="absolute top-[22%] left-[7%] right-[7%] space-y-2.5">
        {[
          { t: "Synchronisatie mislukt", s: "CRM ↔ boekhouding" },
          { t: "Dubbele invoer gevonden", s: "3 records komen niet overeen" },
          { t: "Export verlopen", s: "maandrapportage niet verstuurd" },
        ].map((e, idx) => (
          <div key={idx}
            className="flex items-center gap-3 px-3.5 py-3 rounded-md bg-red-500/[0.08] border border-red-500/25 backdrop-blur-sm toast-pulse"
            style={{ animationDelay: `${idx * 0.45}s` }}>
            <span className="w-5 h-5 rounded-full bg-red-500 text-[#0c0b0c] text-[11px] font-bold flex items-center justify-center flex-shrink-0">✕</span>
            <div className="min-w-0 flex-1">
              <p className="text-red-200 text-[11px] tracking-wide font-medium truncate">{e.t}</p>
              <p className="text-red-300/45 text-[9px] truncate">{e.s}</p>
            </div>
            <span className="text-red-300/40 text-[9px]">nu</span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-[9%] left-1/2 -translate-x-1/2 flex items-center gap-2">
        {["CRM", "MAIL", "EXCEL"].map((n, i) => (
          <div key={n} className="flex items-center gap-2">
            <div className="px-2.5 py-1.5 rounded border border-white/10 bg-white/[0.03] text-white/35 text-[9px] tracking-wide">{n}</div>
            {i < 2 && <span className="text-red-400/80 text-sm leading-none">⤬</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export function AfterScreen() {
  return (
    <div className="absolute inset-0 bg-[#080b0a] overflow-hidden flex select-none">
      <div className="absolute inset-0"
        style={{ background: `radial-gradient(ellipse at 30% 20%, ${ACCENT}1c 0%, transparent 60%)` }} />

      <div className="relative w-[22%] border-r border-white/[0.06] py-4 px-2.5 flex flex-col gap-2.5">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-3.5 h-3.5 rounded" style={{ background: ACCENT }} />
          <span className="text-white/55 text-[8px] tracking-[0.15em]">DYNIQUE</span>
        </div>
        {["Overzicht", "Klanten", "Facturen", "Planning"].map((t, i) => (
          <div key={t} className={`flex items-center gap-2 px-2 py-1.5 rounded ${i === 0 ? "bg-white/[0.06]" : ""}`}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: i === 0 ? ACCENT : "rgba(255,255,255,0.22)" }} />
            <span className={`text-[8.5px] tracking-wide ${i === 0 ? "text-white/80" : "text-white/35"}`}>{t}</span>
          </div>
        ))}
      </div>

      <div className="relative flex-1 p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-white/75 text-[11px] tracking-wide font-medium">Dashboard</span>
          <span className="flex items-center gap-1.5 px-2 py-1 rounded-full border text-[8.5px]"
            style={{ borderColor: `${ACCENT}55`, color: ACCENT }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} /> Alles gesynchroniseerd
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2.5 mb-4">
          {[{ v: "0", l: "fouten" }, { v: "100%", l: "automatisch" }, { v: "+11u", l: "p/week" }].map((s) => (
            <div key={s.l} className="bg-white/[0.035] border border-white/[0.07] rounded-md p-2.5">
              <p className="text-white text-[17px] font-extralight leading-none">{s.v}</p>
              <p className="text-white/35 text-[8px] tracking-wide mt-1.5">{s.l}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/[0.035] border border-white/[0.07] rounded-md p-3 mb-4">
          <div className="flex items-end gap-1.5 h-14">
            {[34, 44, 40, 56, 62, 74, 88].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm bar-grow"
                style={{ height: `${h}%`, background: i > 4 ? ACCENT : `${ACCENT}88`, animationDelay: `${i * 0.06}s` }} />
            ))}
          </div>
        </div>

        <div className="space-y-2">
          {["Offerte automatisch verstuurd", "Factuur gekoppeld & betaald", "Klant ingepland"].map((t) => (
            <div key={t} className="flex items-center gap-2.5">
              <span className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] text-[#080b0a]" style={{ background: ACCENT }}>✓</span>
              <span className="text-white/55 text-[9.5px] tracking-wide">{t}</span>
              <span className="flex-1 h-px bg-white/[0.06]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Animated, coded process-flow diagram: losse bronnen → maatwerk-logica → één output */
export function FlowDiagram() {
  const sources = [
    { t: "Aanvraag", y: 20 },
    { t: "Klantdata", y: 50 },
    { t: "Planning", y: 80 },
  ];
  return (
    <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-5 lg:p-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(circle at 62% 50%, ${ACCENT}14 0%, transparent 62%)` }} />

      <div className="relative flex items-center justify-between mb-5">
        <span className="flex items-center gap-2 text-white/50 text-[9px] tracking-[0.3em] font-light">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ACCENT }} /> GEBOUWD MET CODE
        </span>
        <span className="text-white/25 text-[9px] tracking-[0.25em] font-light">JOUW PROCES</span>
      </div>

      <div className="relative w-full" style={{ aspectRatio: "5 / 4" }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {sources.map((s, i) => (
            <g key={i}>
              <path d={`M18 ${s.y} C 34 ${s.y}, 36 50, 50 50`} fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <path d={`M18 ${s.y} C 34 ${s.y}, 36 50, 50 50`} fill="none" stroke={ACCENT} strokeWidth="1.4" strokeDasharray="2 8" strokeLinecap="round" vectorEffect="non-scaling-stroke" className="flow-dash" style={{ animationDelay: `${i * 0.4}s` }} />
            </g>
          ))}
          <path d="M50 50 C 68 50, 72 50, 84 50" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <path d="M50 50 C 68 50, 72 50, 84 50" fill="none" stroke={ACCENT} strokeWidth="1.9" strokeDasharray="2 8" strokeLinecap="round" vectorEffect="non-scaling-stroke" className="flow-dash" />
        </svg>

        {sources.map((s, i) => (
          <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: "18%", top: `${s.y}%` }}>
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-white/10 bg-[#0d0d0f] text-white/55 text-[9px] tracking-wide whitespace-nowrap">
              <span className="w-1 h-1 rounded-full bg-white/40" /> {s.t}
            </div>
          </div>
        ))}

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flow-hub flex flex-col items-center justify-center w-[84px] h-[84px] rounded-full border bg-[#0a0d0c]"
            style={{ borderColor: `${ACCENT}66` }}>
            <span className="text-[10px] tracking-[0.18em] font-medium" style={{ color: ACCENT }}>MAATWERK</span>
            <span className="text-white/35 text-[7.5px] tracking-wide mt-0.5">jouw logica</span>
          </div>
        </div>

        <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: "84%", top: "50%" }}>
          <div className="flex flex-col items-center gap-2">
            <div className="w-9 h-9 rounded-full flex items-center justify-center shadow-lg" style={{ background: ACCENT }}>
              <svg className="w-4 h-4 text-[#06281f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-white/50 text-[8px] tracking-wide whitespace-nowrap">Automatisch</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CostIcon({ k }: { k: string }) {
  const cls = "w-6 h-6";
  if (k === "TIJD")
    return (
      <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2" />
      </svg>
    );
  if (k === "OVERZICHT")
    return (
      <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l9 4-9 4-9-4 9-4zM3 12l9 4 9-4M3 17l9 4 9-4" />
      </svg>
    );
  if (k === "EFFICIËNTIE")
    return (
      <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l4 5-4 5M11 7l4 5-4 5M18 9v6" />
      </svg>
    );
  return (
    <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9.5C14.2 8.6 13.1 8 12 8c-2.2 0-3.8 1.8-3.8 4s1.6 4 3.8 4c1.1 0 2.2-.6 3-1.5M8 11.3h5M8 13.3h4" />
    </svg>
  );
}

export function Field({
  label, value, onChange, placeholder, type = "text", required = false,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-white/40 text-[10px] tracking-[0.3em] font-light mb-2.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-black/40 border border-white/10 text-white/90 text-sm font-light tracking-wide px-4 py-3 rounded outline-none focus:border-white/30 transition-colors duration-300 placeholder:text-white/25"
      />
    </div>
  );
}

/* Reveal-on-scroll for .anim elements */
export function useRevealOnScroll() {
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
}

/* Scroll-driven before→after reveal (writes --p on the ref element) */
export function useBeforeAfterScrub(ref: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const center = rect.top + rect.height / 2;
        let p = (vh * 0.92 - center) / (vh * 0.4);
        p = Math.min(1, Math.max(0, p));
        el.style.setProperty("--p", p.toFixed(4));
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
  }, [ref]);
}

/* All shared animation / interaction CSS */
export function ProcessStyles() {
  return (
    <style jsx global>{`
      .anim {
        opacity: 0;
        transform: translateY(32px);
        transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        will-change: opacity, transform;
      }
      .anim.animate-in { opacity: 1; transform: translateY(0); }
      .anim.delay-1 { transition-delay: 0.12s; }
      .anim.delay-2 { transition-delay: 0.24s; }

      @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: none; } }
      .hv { opacity: 0; animation: fadeUp 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      .hv-1 { animation-delay: 0.05s; }
      .hv-2 { animation-delay: 0.18s; }
      .hv-3 { animation-delay: 0.32s; }
      .hv-4 { animation-delay: 0.46s; }
      .hv-5 { animation-delay: 0.6s; }

      @keyframes flowDash { to { stroke-dashoffset: -20; } }
      .flow-dash { animation: flowDash 1.3s linear infinite; }
      @keyframes hubPulse {
        0%, 100% { box-shadow: 0 0 0 0 ${ACCENT}44, inset 0 0 16px ${ACCENT}22; }
        50% { box-shadow: 0 0 26px 3px ${ACCENT}55, inset 0 0 22px ${ACCENT}30; }
      }
      .flow-hub { animation: hubPulse 3s ease-in-out infinite; }

      .cost-card::before {
        content: "";
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 2px;
        background: linear-gradient(90deg, ${ACCENT}, transparent);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .cost-card:hover::before { transform: scaleX(1); }
      .cost-card::after {
        content: "";
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 50% 0%, ${ACCENT}12, transparent 70%);
        opacity: 0;
        transition: opacity 0.5s ease;
        pointer-events: none;
      }
      .cost-card:hover::after { opacity: 1; }

      .ba-window {
        --p: 0;
        border-radius: 16px;
        overflow: hidden;
        background: #0c0b0c;
        border: 1px solid rgba(255, 255, 255, 0.09);
        box-shadow:
          0 50px 120px -50px rgba(0, 0, 0, 0.85),
          0 0 calc(var(--p) * 70px) rgba(52, 211, 153, calc(var(--p) * 0.28)),
          inset 0 0 0 1px rgba(255, 255, 255, 0.04);
        transition: box-shadow 0.15s linear;
      }
      .ba-after { clip-path: inset(0 0 0 calc((1 - var(--p)) * 100%)); }
      .ba-divider {
        position: absolute;
        top: 0;
        bottom: 0;
        left: calc((1 - var(--p)) * 100%);
        width: 2px;
        transform: translateX(-1px);
        background: linear-gradient(to bottom, transparent, ${ACCENT}, transparent);
        box-shadow: 0 0 16px ${ACCENT};
        opacity: calc(0.25 + var(--p) * 0.75);
        pointer-events: none;
      }
      .ba-handle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 30px;
        height: 30px;
        border-radius: 9999px;
        background: ${ACCENT};
        color: #06281f;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 22px ${ACCENT}aa, 0 4px 12px rgba(0, 0, 0, 0.5);
      }
      .ba-label-before { opacity: calc(1 - var(--p, 0) * 0.7); }
      .ba-label-after { opacity: calc(0.35 + var(--p, 0) * 0.65); }

      @keyframes toastPulse { 0%,100% { opacity: 0.9; } 50% { opacity: 1; } }
      .toast-pulse { animation: toastPulse 2.6s ease-in-out infinite; }

      @keyframes barGrow { from { transform: scaleY(0.2); opacity: 0.4; } to { transform: scaleY(1); opacity: 1; } }
      .bar-grow { transform-origin: bottom; animation: barGrow 0.9s cubic-bezier(0.16,1,0.3,1) both; }

      @media (prefers-reduced-motion: reduce) {
        .anim { opacity: 1; transform: none; transition: none; }
        .hv { opacity: 1; animation: none; }
        .toast-pulse, .bar-grow, .flow-dash, .flow-hub { animation: none; }
      }
    `}</style>
  );
}
