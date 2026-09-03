"use client";

import Link from "next/link";
import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function BedanktContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";

  useEffect(() => {
    const o = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("animate-in"); o.unobserve(e.target); }
      }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".anim").forEach((el) => o.observe(el));
    return () => o.disconnect();
  }, []);

  return (
    <main className="relative bg-[#050505] min-h-screen overflow-hidden">
      <Header variant="light" />

      <div aria-hidden className="fixed top-0 right-0 w-[800px] h-[800px] pointer-events-none opacity-50"
           style={{ background: "radial-gradient(circle, rgba(52,211,153,0.18) 0%, transparent 60%)" }} />
      <div aria-hidden className="fixed bottom-0 left-0 w-[600px] h-[600px] pointer-events-none opacity-30"
           style={{ background: "radial-gradient(circle, rgba(212,165,116,0.10) 0%, transparent 60%)" }} />

      <section className="relative pt-40 lg:pt-52 pb-32 lg:pb-44">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            {/* Success indicator */}
            <div className="flex items-center justify-center gap-3 mb-12 anim">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#d4a574]" style={{ boxShadow: "0 0 14px #d4a574" }}></span>
              <p className="text-[#d4a574] text-[10px] tracking-[0.5em] font-light uppercase">
                Succesvol verzonden
              </p>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#d4a574]" style={{ boxShadow: "0 0 14px #d4a574" }}></span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white tracking-[0.01em] leading-[1.02] anim delay-1">
              Bedankt{name ? `,` : "."}<br />
              {name && <span className="italic text-white/50">{name}.</span>}
              {!name && <span className="italic text-white/50">Tot snel.</span>}
            </h1>

            <p className="mt-12 text-white/55 text-base lg:text-xl font-light leading-[1.85] tracking-wide max-w-2xl mx-auto anim delay-2">
              Je bericht is binnen. We reageren binnen 24 uur — meestal binnen 2 uur op werkdagen. Check ook even je spam-folder voor de zekerheid.
            </p>

            {/* What's next */}
            <div className="mt-20 grid sm:grid-cols-3 gap-px bg-white/5 anim delay-3">
              {[
                { n: "01", t: "Reactie", d: "Binnen 24 uur reageren we persoonlijk." },
                { n: "02", t: "Intake", d: "We plannen een vrijblijvend kennismakingsgesprek." },
                { n: "03", t: "Concept", d: "Binnen 3 dagen na intake een eerste richting." },
              ].map((s) => (
                <div key={s.n} className="bg-[#050505] p-8 lg:p-10 text-left">
                  <p className="text-[#d4a574] text-xs tracking-[0.25em] font-light mb-4">{s.n}</p>
                  <p className="text-white text-sm tracking-[0.15em] font-light uppercase mb-3">{s.t}</p>
                  <p className="text-white/60 text-sm font-light leading-[1.7] tracking-wide">{s.d}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center anim delay-3">
              <Link href="/portfolio" className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-black text-xs tracking-[0.3em] font-light hover:tracking-[0.4em] transition-all duration-500">
                BEKIJK PORTFOLIO
              </Link>
              <Link href="/blog" className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/15 text-white text-xs tracking-[0.3em] font-light hover:bg-white/5 hover:border-white/30 transition-all duration-500">
                LEES HET JOURNAAL
              </Link>
            </div>

            {/* Trust line */}
            <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 text-white/30 text-[10px] tracking-[0.3em] font-light uppercase anim">
              <span>5.0 · Verified</span>
              <span className="w-1 h-1 rounded-full bg-white/15"></span>
              <span>30+ klanten</span>
              <span className="w-1 h-1 rounded-full bg-white/15"></span>
              <span>Limburg · Nederland · Internationaal</span>
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

export default function BedanktPage() {
  return (
    <Suspense fallback={<div className="bg-[#050505] min-h-screen" />}>
      <BedanktContent />
    </Suspense>
  );
}
