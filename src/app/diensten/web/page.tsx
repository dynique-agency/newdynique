"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect } from "react";

export default function WebDienst() {
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const services = [
    { title: "Bedrijfswebsite", desc: "Professionele website die bezoekers overtuigt en converteert. Mobile-first, razendsnel, SEO-ready." },
    { title: "Portfolio website", desc: "Laat je werk spreken. Strak ontwerp, perfecte presentatie, gebouwd om indruk te maken." },
    { title: "Webshop / E-commerce", desc: "Verkoop online met een webshop die soepel werkt op elk device. Betaalkoppelingen inbegrepen." },
    { title: "Web applicatie", desc: "Custom software in de browser. Klantportalen, boekingssystemen, interactieve dashboards." },
    { title: "Landingpages", desc: "Gerichte pagina's voor campagnes, ads of specifieke doelgroepen. Maximale conversie." },
    { title: "Redesign & migratie", desc: "Verouderde site? Wij bouwen hem volledig opnieuw: sneller, mooier, beter convertend." },
  ];

  const process = [
    { step: "01", title: "Intake gesprek", desc: "We bespreken je doel, doelgroep en wensen. Online of op locatie, overal in Nederland of internationaal." },
    { step: "02", title: "Design & concept", desc: "Binnen 3 dagen een eerste ontwerp. Jij geeft feedback, wij verfijnen." },
    { step: "03", title: "Bouwen", desc: "We bouwen in Next.js: snel, veilig en toekomstbestendig. Jij ziet de voortgang live." },
    { step: "04", title: "Live & doorontwikkeling", desc: "Online binnen 7–14 dagen. Daarna blijven we beschikbaar voor updates en uitbreiding." },
  ];

  return (
    <>
      <Header variant="light" />

      <main>
        {/* Hero */}
        <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-zinc-900"></div>
          <div
            className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "48px 48px" }}
          ></div>

          <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center py-32">
            <p
              className="text-white/40 text-xs tracking-[0.4em] font-light mb-8"
              style={{ animation: "fadeInUp 0.8s ease-out 0.2s both" }}
            >
              DYNIQUE · DIENST 01
            </p>
            <h1
              className="text-5xl sm:text-6xl md:text-8xl font-extralight text-white tracking-[0.15em] leading-tight mb-8"
              style={{ animation: "fadeInUp 0.8s ease-out 0.4s both" }}
            >
              WEBSITES &<br />
              <span className="font-light">WEB APPS</span>
            </h1>
            <p
              className="text-white/60 text-base lg:text-xl font-extralight tracking-wide max-w-2xl mx-auto mb-12 leading-relaxed"
              style={{ animation: "fadeInUp 0.8s ease-out 0.6s both" }}
            >
              Van visitekaartje tot volwaardige webapplicatie, gebouwd in Next.js, live binnen 7 tot 14 dagen.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              style={{ animation: "fadeInUp 0.8s ease-out 0.8s both" }}
            >
              <Link
                href="/#contact"
                className="px-10 py-4 bg-white text-black text-xs tracking-[0.2em] font-medium hover:bg-white/90 transition-all duration-300"
              >
                START JE PROJECT
              </Link>
              <Link
                href="/portfolio"
                className="px-10 py-4 border border-white/20 text-white text-xs tracking-[0.2em] font-light hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              >
                BEKIJK PORTFOLIO
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-white py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-light text-black tracking-[0.15em] animate-on-scroll">
                WAT WE BOUWEN
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5">
              {services.map((s, i) => (
                <div key={i} className="bg-white p-10 lg:p-12 animate-on-scroll" style={{ transitionDelay: `${i * 0.07}s` }}>
                  <span className="text-black/15 text-xs tracking-[0.3em] font-light">0{i + 1}</span>
                  <h3 className="text-black text-sm tracking-[0.2em] font-light mt-4 mb-3">{s.title.toUpperCase()}</h3>
                  <div className="w-8 h-px bg-black/20 mb-4"></div>
                  <p className="text-black/60 text-sm font-light leading-relaxed tracking-wide">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="bg-zinc-950 py-16 lg:py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <p className="text-white/30 text-xs tracking-[0.4em] text-center mb-10 font-light">TECHNOLOGIE</p>
            <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
              {["Next.js 15", "React 18", "TypeScript", "Tailwind CSS", "Cloudflare Pages", "Vercel"].map((tech) => (
                <span key={tech} className="text-white/50 text-xs tracking-[0.25em] font-light border border-white/10 px-5 py-2.5 hover:border-white/30 hover:text-white/80 transition-all duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-white py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-light text-black tracking-[0.15em] animate-on-scroll">
                HOE WE WERKEN
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {process.map((p, i) => (
                <div key={i} className="animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="text-black/10 text-6xl font-extralight tracking-wider mb-6">{p.step}</div>
                  <h3 className="text-black text-sm tracking-[0.2em] font-light mb-3">{p.title.toUpperCase()}</h3>
                  <div className="w-8 h-px bg-black/20 mb-4"></div>
                  <p className="text-black/60 text-sm font-light leading-relaxed tracking-wide">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.15em] mb-6 animate-on-scroll">
              KLAAR OM TE STARTEN?
            </h2>
            <p className="text-white/50 font-light tracking-wide mb-10 max-w-xl mx-auto animate-on-scroll delay-100">
              Vertel ons over je project en we reageren binnen 24 uur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll delay-200">
              <Link
                href="/#contact"
                className="px-12 py-4 bg-white text-black text-xs tracking-[0.2em] font-medium hover:bg-white/90 transition-all duration-300"
              >
                GRATIS OFFERTE
              </Link>
              <a
                href="https://wa.me/31624572572"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-4 border border-white/20 text-white text-xs tracking-[0.2em] font-light hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              >
                WHATSAPP
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-100 { transition-delay: 0.1s; }
        .delay-200 { transition-delay: 0.2s; }
      `}</style>
    </>
  );
}
