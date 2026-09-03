"use client";

import Link from "next/link";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const posts = [
  {
    slug: "wat-kost-een-website",
    title: "Wat kost een website in 2026?",
    excerpt: "Een eerlijke prijsgids voor ondernemers. Van starter site tot custom platform: wat krijg je voor je geld, waar moet je op letten en waar zitten verborgen kosten?",
    category: "Strategie",
    readTime: "8 min lezen",
    date: "Mei 2026",
    accent: "#d4a574",
  },
  {
    slug: "n8n-make-zapier",
    title: "Automatiseren: standaardtool of maatwerk met code?",
    excerpt: "Zapier, Make en n8n beloven snelle automatisering. Maar waar lopen ze vast — en wanneer is maatwerk software op code de slimmere keuze voor je bedrijfsproces?",
    category: "Automatisering",
    readTime: "8 min lezen",
    date: "Apr 2026",
    accent: "#a78bfa",
  },
  {
    slug: "website-laten-maken-limburg",
    title: "Website laten maken in Limburg: wat verwacht je van een lokaal bureau?",
    excerpt: "Lokaal of landelijk, freelance of bureau, goedkoop of premium. We leggen uit wat een Limburgs webdesignbureau echt onderscheidt — en wat je moet vragen.",
    category: "Lokaal",
    readTime: "6 min lezen",
    date: "Mrt 2026",
    accent: "#d4a574",
  },
];

export default function BlogIndex() {
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
      <Header variant="light" />

      <div aria-hidden className="fixed top-0 right-0 w-[800px] h-[800px] pointer-events-none opacity-40"
           style={{ background: "radial-gradient(circle, rgba(212,165,116,0.15) 0%, transparent 60%)" }} />

      {/* Hero */}
      <section className="relative pt-40 lg:pt-52 pb-20 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4 mb-10 anim">
              <span className="inline-block w-8 h-[1px] bg-[#d4a574]/60"></span>
              <p className="text-[#d4a574]/80 text-[10px] tracking-[0.5em] font-light uppercase">
                Insights · Dynique
              </p>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-[7rem] font-extralight text-white tracking-[0.02em] leading-[0.95] anim delay-1">
              Het Journaal.
            </h1>
            <p className="mt-10 max-w-2xl text-white/55 text-base lg:text-xl font-light leading-[1.85] tracking-wide anim delay-2">
              Eerlijke verhalen over maatwerk software en de digitale keuzes die daaraan voorafgaan. Geen SEO-trucjes. Geen filler. Alleen wat we daadwerkelijk geleerd hebben in projecten.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="relative pb-32 lg:pb-44 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            {posts.map((p, i) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block py-12 lg:py-16 border-b border-white/5 hover:border-white/10 transition-colors anim"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  <div className="lg:col-span-3 flex items-center gap-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: p.accent, boxShadow: `0 0 10px ${p.accent}` }}></span>
                    <p className="text-[10px] tracking-[0.4em] font-light uppercase" style={{ color: p.accent }}>
                      {p.category}
                    </p>
                  </div>
                  <div className="lg:col-span-7 space-y-4">
                    <h2 className="text-2xl lg:text-4xl font-extralight text-white tracking-[0.01em] leading-[1.15] group-hover:text-white transition-colors">
                      {p.title}
                    </h2>
                    <p className="text-white/50 text-base lg:text-lg font-light leading-[1.85] tracking-wide">
                      {p.excerpt}
                    </p>
                    <div className="flex items-center gap-4 pt-2">
                      <span className="text-white/30 text-[10px] tracking-[0.3em] font-light uppercase">{p.readTime}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20"></span>
                      <span className="text-white/30 text-[10px] tracking-[0.3em] font-light uppercase">{p.date}</span>
                    </div>
                  </div>
                  <div className="lg:col-span-2 flex lg:justify-end">
                    <span className="inline-flex items-center gap-2 text-white/40 group-hover:text-white text-xs tracking-[0.25em] font-light uppercase transition-all duration-500 group-hover:tracking-[0.3em]">
                      Lezen
                      <svg className="w-3 h-3 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.15] anim">
              Liever direct sparren?<br />
              <span className="italic text-white/50">Wij ook.</span>
            </h2>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center anim delay-1">
              <Link href="/#contact" className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-white text-black text-xs tracking-[0.3em] font-light hover:tracking-[0.4em] transition-all duration-500">
                START GESPREK
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
