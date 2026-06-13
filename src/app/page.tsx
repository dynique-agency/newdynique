"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Advisor from "@/components/Advisor";

const heroServices = ["WEBSITES", "WEB APPS", "AI MARKETING", "DRONE & VIDEO"];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [wantsAppointment, setWantsAppointment] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [svcIdx, setSvcIdx] = useState(0);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    projectType: "",
    description: "",
    date: "",
    time: "",
    meetingType: "online",
  });

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 3000);
    const loadingTimer = setTimeout(() => setLoading(false), 4000);
    return () => { clearTimeout(fadeTimer); clearTimeout(loadingTimer); };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("animate-in"); observer.unobserve(e.target); }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".anim").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loading]);

  useEffect(() => {
    const id = setInterval(() => setSvcIdx((i) => (i + 1) % heroServices.length), 2600);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setReviewIdx((i) => i + 1), 14000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const w1 = document.getElementById('orb-wrap-1') as HTMLElement;
    const w2 = document.getElementById('orb-wrap-2') as HTMLElement;
    const w3 = document.getElementById('orb-wrap-3') as HTMLElement;
    if (!w1 || !w2 || !w3) return;
    let raf: number;
    let cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    let x1 = 0, y1 = 0, x2 = 0, y2 = 0, x3 = 0, y3 = 0;
    const onMove = (e: MouseEvent) => { cx = e.clientX; cy = e.clientY; };
    window.addEventListener('mousemove', onMove);
    const tick = () => {
      const dx = (cx / window.innerWidth - 0.5);
      const dy = (cy / window.innerHeight - 0.5);
      x1 += (dx * -80 - x1) * 0.035;
      y1 += (dy * -60 - y1) * 0.035;
      x2 += (dx * 70 - x2) * 0.028;
      y2 += (dy * 55 - y2) * 0.028;
      x3 += (dx * -45 - x3) * 0.05;
      y3 += (dy * 70 - y3) * 0.05;
      w1.style.transform = `translate(${x1}px,${y1}px)`;
      w2.style.transform = `translate(${x2}px,${y2}px)`;
      w3.style.transform = `translate(${x3}px,${y3}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);

  const handleWhatsAppSubmit = () => {
    let message = `Hi! Ik wil graag contact opnemen.\n\n`;
    message += `📝 *Naam:* ${formData.name || "(niet ingevuld)"}\n`;
    if (formData.company) message += `🏢 *Bedrijf:* ${formData.company}\n`;
    message += `🎯 *Project:* ${formData.projectType || "(niet ingevuld)"}\n\n`;
    message += `📋 *Omschrijving:*\n${formData.description || "(niet ingevuld)"}\n`;
    if (wantsAppointment && formData.date) {
      message += `\n📅 *Gewenst gesprek:*\nDatum: ${formData.date}\n`;
      if (formData.time) message += `Tijd: ${formData.time}\n`;
      message += `Type: ${formData.meetingType === "online" ? "Online (Google Meet)" : "Fysiek"}\n`;
    }
    window.open(`https://wa.me/31624572572?text=${encodeURIComponent(message)}`, "_blank");
  };

  const diensten = [
    {
      n: "01", title: "WEB & DESIGN", href: "/diensten/web",
      tagline: "Jouw merk online, precies zoals het hoort.",
      desc: "Een sterke digitale aanwezigheid die bezoekers overtuigt en resultaat oplevert. Wij ontwerpen en bouwen digitale producten die jouw merk vertegenwoordigen en groeien met jouw ambities.",
      keys: ["Website", "Webshop", "Web applicatie", "Branding"],
      color: "rgba(251,191,36,1)", glow: "rgba(251,191,36,0.09)",
    },
    {
      n: "02", title: "DIGITALISERING", href: "/diensten/processen",
      tagline: "Slimmer werken. Meer ruimte voor groei.",
      desc: "Tijd is je meest waardevolle bezit. Wij brengen jouw werkwijze in kaart en introduceren digitale oplossingen die je bedrijf efficiënter, professioneler en schaalbaarder maken.",
      keys: ["Procesanalyse", "Workflow optimalisatie", "Digitale tools", "Koppelingen"],
      color: "rgba(99,102,241,1)", glow: "rgba(99,102,241,0.09)",
    },
    {
      n: "03", title: "DIGITALE MARKETING", href: "/diensten/marketing",
      tagline: "Zichtbaar. Relevant. Onvermijdelijk.",
      desc: "Online zichtbaarheid is geen toeval. Wij bouwen een strategie die jouw doelgroep bereikt, jouw merk versterkt en groei stimuleert. Consistent op elk kanaal dat ertoe doet.",
      keys: ["Social media", "Content strategie", "SEO", "Online adverteren"],
      color: "rgba(244,63,94,1)", glow: "rgba(244,63,94,0.09)",
    },
    {
      n: "04", title: "VIDEO & AERIAL", href: "/diensten/drone",
      tagline: "Beelden die blijven hangen.",
      desc: "Professionele video en unieke luchtopnames geven jouw merk een visuele identiteit die opvalt. Van bedrijfspresentatie tot social content: beeld communiceert wat woorden niet kunnen.",
      keys: ["Bedrijfsfilm", "Aerial footage", "Social content", "Promotievideo"],
      color: "rgba(20,184,166,1)", glow: "rgba(20,184,166,0.09)",
    },
  ];

  const marqueeItems = [
    "WEBSITES", "WEB APPS", "AI MARKETING", "DRONE & VIDEO",
    "BEDRIJFSPROCESSEN", "LIMBURG", "NEDERLAND", "INTERNATIONAAL",
    "WEBSITES", "WEB APPS", "AI MARKETING", "DRONE & VIDEO",
    "BEDRIJFSPROCESSEN", "LIMBURG", "NEDERLAND", "INTERNATIONAAL",
  ];

  const projects = [
    {
      number: "01",
      title: "CHEFS CONNECT",
      category: "CULINAIR PLATFORM",
      summary: "Waar topchefs en premium keukens elkaar vinden.",
      image: null,
      video: "/rsc/chefsconnect/preview.mp4",
      url: "chefs-connect.nl",
      accent: "#ef4444",
      link: "/portfolio/chefs-connect",
    },
    {
      number: "02",
      title: "AUWT AELSE",
      category: "BISTRO",
      summary: "Bourgondisch tafelen, eigentijds geserveerd.",
      image: null,
      video: "/rsc/auwtaelse/preview.mp4",
      url: "auwtaelse.nl",
      accent: "#eab308",
      link: "/portfolio/auwt-aelse",
    },
    {
      number: "03",
      title: "IJSSALON ITALIA",
      category: "FAMILIEBEDRIJF",
      summary: "Ambachtelijk ijs sinds 1969. Nu ook digitaal.",
      image: "/rsc/ijssalon/hero.png",
      video: "/rsc/ijssalon/preview.mp4",
      url: "ijssalonitaliavaals.nl",
      accent: "#fb923c",
      link: "/portfolio/ijssalon-italia",
    },
    {
      number: "04",
      title: "STACY KOHNEN",
      category: "ARTIST PORTFOLIO",
      summary: "Viertalig. Eén stem. Eindeloze podia.",
      image: "/rsc/stacykohnen/hero.png",
      video: "/rsc/stacykohnen/preview.mp4",
      url: "stacykohnen.de",
      accent: "#a78bfa",
      link: "/portfolio/stacy-kohnen",
    },
  ];

  const faqs = [
    { q: "Hoe lang duurt het voordat mijn project live staat?", a: "Gemiddeld 7–14 dagen van eerste gesprek tot live. Simpele sites eerder, complexe web apps iets langer. We werken razendsnel zonder in te boeten op kwaliteit." },
    { q: "Krijg ik ook branding en design?", a: "Ja. We verzorgen het volledige pakket: logo, kleurenpalet, typografie en AI-visuals. Van nul tot complete merkidentiteit." },
    { q: "Wat als ik aanpassingen wil na oplevering?", a: "Stuur een berichtje via WhatsApp: we passen het direct aan. Onderhoud, updates en uitbreidingen zijn altijd beschikbaar." },
    { q: "Zijn de websites geschikt voor mobiel?", a: "100%. Mobile-first is onze standaard. We testen op alle devices en browsers voor oplevering." },
    { q: "Doen jullie ook SEO?", a: "Ja. Elk project wordt SEO-ready opgeleverd: snelle laadtijd, schema markup, sitemap en correcte structuur. Actieve SEO-campagnes zijn ook beschikbaar." },
    { q: "Hoe zit het met hosting en onderhoud?", a: "Wij regelen alles: hosting, updates, security en back-ups. Jij hoeft er niet aan te denken." },
    { q: "Wat kunnen jullie automatiseren in mijn bedrijf?", a: "Offertes, facturen, e-mail flows, CRM-koppelingen, rapportages: alles wat je nu handmatig doet. We analyseren gratis welke processen tijd kosten." },
    { q: "Wat als ik niet tevreden ben?", a: "We werken met 3 revisierondes. 98% van onze klanten is na de eerste al tevreden. Mocht het niet klikken: geld-terug-garantie binnen de eerste week." },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "Hoe lang duurt het voordat mijn website live staat?", acceptedAnswer: { "@type": "Answer", text: "Gemiddeld 7-14 dagen van eerste gesprek tot live website. Simpele portfolio sites kunnen binnen 3-5 dagen, complexere projecten met webshops of custom functionaliteiten nemen 10-14 dagen. We werken razendsnel zonder in te boeten op kwaliteit." } },
              { "@type": "Question", name: "Krijg ik ook branding en design?", acceptedAnswer: { "@type": "Answer", text: "Ja, absoluut. We verzorgen het volledige pakket: logo design, kleurenschema, typography, AI-gegenereerde visuals en video's. Zoals bij House of Chocolate en Stacy Kohnen - van nul tot complete merkidentiteit." } },
              { "@type": "Question", name: "Wat als ik aanpassingen wil na oplevering?", acceptedAnswer: { "@type": "Answer", text: "Wij passen alles razendsnel voor jou aan. Dit valt binnen onze onderhoudsservice. Stuur gewoon een berichtje via WhatsApp en we regelen het direct. Van teksten tot foto's, nieuwe features tot updates - wij doen het voor je." } },
              { "@type": "Question", name: "Zijn de websites geschikt voor mobiel?", acceptedAnswer: { "@type": "Answer", text: "100%. Alle websites zijn volledig responsive en geoptimaliseerd voor mobiel, tablet en desktop. We testen op alle devices en browsers. Mobile-first design is onze standaard - de meeste bezoekers komen immers vanaf hun telefoon." } },
              { "@type": "Question", name: "Doen jullie ook SEO en Google ranking?", acceptedAnswer: { "@type": "Answer", text: "Ja, alle websites worden SEO-ready opgeleverd: snelle laadtijd, schema markup, sitemap, goede structuur. Voor actieve SEO-campagnes (linkbuilding, content marketing, local SEO) bieden we losse pakketten aan." } },
              { "@type": "Question", name: "Hoe zit het met hosting en onderhoud?", acceptedAnswer: { "@type": "Answer", text: "Wij regelen alles voor je. Hosting, updates, security patches en dagelijkse back-ups zitten allemaal binnen de maandelijkse onderhoudsservice. Jij hoeft nergens aan te denken - wij houden alles draaiend." } },
              { "@type": "Question", name: "Werken jullie ook met bestaande websites?", acceptedAnswer: { "@type": "Answer", text: "Ja, we doen ook redesigns en migraties. We kunnen je bestaande site moderniseren, sneller maken, of volledig opnieuw bouwen. SEO en content blijven behouden tijdens de migratie." } },
              { "@type": "Question", name: "Wat gebeurt er als ik niet tevreden ben?", acceptedAnswer: { "@type": "Answer", text: "We werken met maximaal 3 revisierondes om je website perfect te krijgen. Tijdens het proces stemmen we regelmatig af. 98% van onze klanten is na de eerste revisie al tevreden. Mocht het echt niet klikken: geld terug garantie binnen de eerste week." } },
            ],
          }),
        }}
      />
      {/* Loading Screen */}
      {loading && (
        <div className={`fixed inset-0 z-[9999] bg-[#070707] flex items-center justify-center transition-all duration-1000 ${fadeOut ? "opacity-0 scale-[1.04]" : "opacity-100 scale-100"}`}>

          {/* Orbs — same vibe as hero */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="load-orb-1 absolute rounded-full"
              style={{ background: "radial-gradient(circle, rgba(251,191,36,0.75) 0%, rgba(245,158,11,0.3) 40%, transparent 65%)", filter: "blur(60px)", width: "500px", height: "500px", top: "-10%", right: "0%" }} />
            <div className="load-orb-2 absolute rounded-full"
              style={{ background: "radial-gradient(circle, rgba(99,102,241,0.7) 0%, rgba(79,70,229,0.28) 40%, transparent 65%)", filter: "blur(70px)", width: "550px", height: "550px", bottom: "-15%", left: "-5%" }} />
            <div className="load-orb-3 absolute rounded-full"
              style={{ background: "radial-gradient(circle, rgba(244,63,94,0.4) 0%, rgba(236,72,153,0.12) 45%, transparent 65%)", filter: "blur(45px)", width: "300px", height: "300px", top: "35%", left: "32%" }} />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(7,7,7,0.75) 100%)" }} />
          </div>

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Label */}
            <p className="load-label text-white/30 text-[8px] tracking-[0.6em] font-light mb-8">
              FULL CREATIVE DEVELOPMENT AGENCY
            </p>

            {/* Title with clip-path reveal */}
            <div className="overflow-hidden">
              <h1 className="load-title text-6xl sm:text-7xl md:text-9xl font-extralight text-white tracking-[0.35em]">
                DYNIQUE
              </h1>
            </div>

            {/* Thin line extending under title */}
            <div className="load-line mt-6 h-px bg-white/20" style={{ width: "100%" }} />

            {/* Tagline */}
            <p className="load-tagline text-white/20 text-[9px] tracking-[0.4em] font-light mt-5">
              DYNAMISCH IN AANPAK. UNIEK IN RESULTAAT.
            </p>
          </div>

          {/* Bottom progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5">
            <div className="load-progress h-full bg-white/25" />
          </div>
        </div>
      )}

      <main className="relative">
        {/* Sticky WhatsApp */}
        <a
          href="https://wa.me/31624572572?text=Hi!%20Ik%20heb%20interesse%20in%20een%20samenwerking."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Chat via WhatsApp"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
            <div className="relative w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300">
              <div className="bg-black text-white text-xs font-light tracking-wide px-4 py-2 shadow-xl">Chat met ons</div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[5px] border-l-black"></div>
            </div>
          </div>
        </a>

        <Header variant="light" />

        {/* ─── 1. HERO ─────────────────────────────────────────── */}
        <section className="relative h-screen w-full overflow-hidden bg-[#070707]">
          {/* Gradient orb background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Amber — top right */}
            <div id="orb-wrap-1" className="absolute will-change-transform" style={{ top: "0%", right: "0%", width: "650px", height: "650px" }}>
              <div className="orb-breathe-1 w-full h-full rounded-full"
                style={{ background: "radial-gradient(circle, rgba(251,191,36,0.9) 0%, rgba(245,158,11,0.4) 38%, transparent 62%)", filter: "blur(50px)" }} />
            </div>
            {/* Indigo — bottom left */}
            <div id="orb-wrap-2" className="absolute will-change-transform" style={{ bottom: "-5%", left: "-5%", width: "700px", height: "700px" }}>
              <div className="orb-breathe-2 w-full h-full rounded-full"
                style={{ background: "radial-gradient(circle, rgba(99,102,241,0.85) 0%, rgba(79,70,229,0.35) 38%, transparent 62%)", filter: "blur(60px)" }} />
            </div>
            {/* Rose — center */}
            <div id="orb-wrap-3" className="absolute will-change-transform" style={{ top: "25%", left: "28%", width: "400px", height: "400px" }}>
              <div className="orb-breathe-3 w-full h-full rounded-full"
                style={{ background: "radial-gradient(circle, rgba(244,63,94,0.55) 0%, rgba(236,72,153,0.2) 42%, transparent 62%)", filter: "blur(40px)" }} />
            </div>
            {/* Grain */}
            <div className="absolute inset-0 opacity-[0.05]"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px" }} />
            {/* Vignette */}
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 45%, transparent 45%, rgba(7,7,7,0.7) 100%)" }} />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <p className="text-white/35 text-[9px] tracking-[0.55em] font-light mb-12 uppercase" style={{ animation: "fadeInUp 1s ease-out 0.3s both" }}>
              Full Creative Development Agency · Limburg & Internationaal
            </p>

            <div style={{ animation: "fadeInUp 1s ease-out 0.6s both" }}>
              <p className="text-white/25 text-xl sm:text-2xl md:text-3xl font-extralight tracking-[0.22em] mb-3">WIJ CREËREN</p>
              <div className="overflow-hidden mb-3">
                <h1 key={svcIdx} className="hero-slot-word text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-light text-white tracking-[0.06em] leading-none">
                  {heroServices[svcIdx]}
                </h1>
              </div>
              <p className="text-white/25 text-xl sm:text-2xl md:text-3xl font-extralight tracking-[0.22em]">DIE INDRUK MAKEN.</p>
            </div>

            {/* Service pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-10 mb-12" style={{ animation: "fadeInUp 1s ease-out 0.9s both" }}>
              {heroServices.map((s, i) => (
                <button
                  key={s}
                  onClick={() => setSvcIdx(i)}
                  className={`text-[8px] tracking-[0.35em] font-light px-4 py-2 border transition-all duration-400 ${i === svcIdx ? 'border-white/50 text-white bg-white/8' : 'border-white/12 text-white/30 hover:border-white/30 hover:text-white/60'}`}
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4" style={{ animation: "fadeInUp 1s ease-out 1.1s both" }}>
              <a href="#contact" className="px-10 py-4 bg-white text-black text-xs tracking-[0.25em] font-light hover:bg-white/90 transition-all duration-300">
                START JE PROJECT
              </a>
              <a href="#werk" className="px-10 py-4 border border-white/20 text-white text-xs tracking-[0.25em] font-light hover:border-white/50 hover:bg-white/5 transition-all duration-300">
                BEKIJK WERK
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" style={{ animation: "fadeInUp 1s ease-out 1.4s both" }}>
            <span className="text-white/25 text-[9px] tracking-[0.4em] font-light">SCROLL</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent animate-bounce"></div>
          </div>
        </section>

        {/* ─── 2. MARQUEE ──────────────────────────────────────── */}
        <div className="bg-black border-y border-white/5 py-5 overflow-hidden">
          <div className="marquee-track flex gap-12 whitespace-nowrap">
            {marqueeItems.map((item, i) => (
              <span key={i} className="text-white/30 text-xs tracking-[0.4em] font-light flex-shrink-0 flex items-center gap-12">
                {item}
                <span className="text-white/10">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* ─── 3. MANIFESTO ────────────────────────────────────── */}
        <section className="relative bg-[#080808] overflow-hidden py-24 lg:py-28">

          {/* Ghost "DYNIQUE" — full width, bottom anchored, clearly visible */}
          <div aria-hidden className="absolute bottom-0 left-0 right-0 pointer-events-none select-none leading-[0.82] overflow-hidden">
            <span className="text-white font-extralight tracking-[0.08em] whitespace-nowrap"
              style={{ fontSize: "clamp(100px, 19vw, 240px)", opacity: 0.055 }}>DYNIQUE</span>
          </div>

          {/* Amber glow behind right/photo side */}
          <div className="absolute right-0 top-0 bottom-0 w-[50%] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 75% 35%, rgba(251,191,36,0.13) 0%, transparent 60%)" }} />
          <div className="absolute right-0 bottom-0 w-[30%] h-[40%] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 90% 90%, rgba(99,102,241,0.1) 0%, transparent 60%)" }} />

          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-14 lg:gap-20 items-center">

              {/* LEFT — Editorial text */}
              <div className="relative z-10 order-2 lg:order-1">
                <p className="text-white/30 text-[8px] tracking-[0.6em] font-light mb-10 anim">DE MENS ACHTER DYNIQUE</p>

                <h2 className="text-3xl lg:text-4xl xl:text-[2.8rem] font-extralight text-white tracking-[0.02em] leading-[1.2] mb-8 anim delay-1">
                  Ik bouw wat anderen<br />alleen <span className="text-white/30 italic">beschrijven.</span>
                </h2>

                <div className="w-8 h-px bg-amber-400/70 mb-8 anim delay-2" />

                <p className="text-white/55 text-sm font-light leading-[1.9] tracking-wide mb-5 anim delay-2">
                  Dynique begon vanuit één overtuiging: de kloof tussen een goed idee en een world-class uitvoering moet kleiner. Voor elke ondernemer die ergens voor staat.
                </p>
                <p className="text-white/30 text-sm font-light leading-[1.9] tracking-wide mb-12 anim delay-2">
                  Websites, automatisering, AI-marketing en dronebeelden. Onder één dak, met één aanspreekpunt dat jouw verhaal van binnen kent.
                </p>

                <div className="grid grid-cols-3 gap-5 pt-7 border-t border-white/10 anim delay-3">
                  {[
                    { v: "VAKMANSCHAP", d: "Elk detail telt." },
                    { v: "DIRECTHEID", d: "Beloofd is beloofd." },
                    { v: "EIGENAARSCHAP", d: "Jouw project. Mijn verantwoordelijkheid." },
                  ].map(({ v, d }) => (
                    <div key={v}>
                      <div className="w-4 h-px bg-amber-400/60 mb-3" />
                      <p className="text-white/60 text-[8px] tracking-[0.28em] font-light mb-1.5">{v}</p>
                      <p className="text-white/30 text-[11px] font-light leading-relaxed">{d}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — Photo */}
              <div className="relative order-1 lg:order-2">

                {/* Ghost "01" index — visible behind photo */}
                <div aria-hidden className="absolute -top-6 -right-2 font-extralight text-white leading-none select-none pointer-events-none"
                  style={{ fontSize: "clamp(90px, 13vw, 150px)", opacity: 0.07 }}>01</div>

                {/* Photo with diagonal clip + reveal animation */}
                <div className="photo-diag-reveal relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/rsc/founder2.jpeg"
                    alt="Oprichter Dynique"
                    className="w-full block"
                    style={{ aspectRatio: "3/4", objectFit: "cover", objectPosition: "center 15%", filter: "grayscale(1) contrast(1.15) brightness(0.85)" }}
                  />
                  {/* Bottom fade into page bg */}
                  <div className="absolute inset-x-0 bottom-0 h-28"
                    style={{ background: "linear-gradient(to top, #080808 10%, transparent 100%)" }} />
                  {/* Grain overlay */}
                  <div className="absolute inset-0 opacity-[0.08]"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "128px" }} />
                </div>

                {/* Amber accent line — aligns with diagonal edge */}
                <div className="absolute top-6 bottom-14 w-[2px] bg-gradient-to-b from-transparent via-amber-400/80 to-transparent"
                  style={{ left: "calc(16% - 2px)" }} />

                {/* Caption */}
                <div className="mt-5 flex items-center gap-3" style={{ paddingLeft: "18%" }}>
                  <div className="w-5 h-px bg-amber-400/50" />
                  <p className="text-white/35 text-[8px] tracking-[0.45em] font-light">OPRICHTER · DYNIQUE</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── 4. DIENSTEN ─────────────────────────────────────── */}
        <section className="bg-[#0a0a0a]" id="diensten">

          {/* Header */}
          <div className="container mx-auto px-6 lg:px-12 pt-20 pb-12 border-b border-white/[0.06] anim">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <p className="text-white/22 text-[8px] tracking-[0.6em] font-light mb-5">EXPERTISE</p>
                <h2 className="text-4xl lg:text-5xl font-extralight text-white tracking-[0.03em] leading-[1.1]">
                  Vier dingen.<br /><span className="text-white/28 italic">Exceptioneel goed.</span>
                </h2>
              </div>
              <a href="#contact" className="group flex items-center gap-3 text-white/30 text-[9px] tracking-[0.4em] font-light hover:text-white transition-colors duration-300 pb-1 self-start sm:self-end">
                KENNISMAKING PLANNEN
                <span className="w-5 h-px bg-white/25 group-hover:w-9 group-hover:bg-white transition-all duration-400" />
              </a>
            </div>
          </div>

          {/* 4-column grid — desktop horizontal, mobile stacked */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
            {diensten.map((d, i) => (
              <a
                key={d.n}
                href={d.href}
                className="group relative flex flex-col px-7 py-10 lg:px-8 lg:py-12 overflow-hidden transition-colors duration-500 hover:bg-white/[0.03] anim"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Top accent line — animates in on scroll, brightens on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to right, ${d.color}, transparent)` }} />

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 30% 0%, ${d.glow} 0%, transparent 65%)` }} />

                {/* Number */}
                <span className="text-white/18 text-[8px] tracking-[0.5em] font-light mb-8 block">{d.n}</span>

                {/* Title */}
                <h3 className="relative text-white text-lg lg:text-xl font-extralight tracking-[0.1em] leading-snug mb-3 transition-all duration-500 group-hover:tracking-[0.14em]">
                  {d.title}
                </h3>

                {/* Tagline */}
                <p className="relative text-white/40 text-[11px] font-light leading-relaxed tracking-wide mb-6 italic">
                  {d.tagline}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-white/[0.06] mb-6" />

                {/* Description */}
                <p className="relative text-white/35 text-[12px] font-light leading-[1.85] tracking-wide flex-1 mb-7">
                  {d.desc}
                </p>

                {/* Keywords — minimal dots */}
                <div className="relative mb-8">
                  {d.keys.map((k, ki) => (
                    <span key={k} className="text-white/22 text-[9px] tracking-[0.18em] font-light">
                      {k}{ki < d.keys.length - 1 && <span className="mx-2 opacity-40">·</span>}
                    </span>
                  ))}
                </div>

                {/* CTA arrow */}
                <div className="relative flex items-center gap-3 text-white/25 text-[8px] tracking-[0.35em] font-light group-hover:text-white/55 transition-colors duration-300 mt-auto">
                  ONTDEKKEN
                  <svg className="w-3 h-3 transition-transform duration-400 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ─── 5. PORTFOLIO ────────────────────────────────────── */}
        <section className="relative bg-[#070707] py-28 lg:py-36 border-t border-white/[0.04] overflow-hidden" id="werk">
          {/* Ambient orb */}
          <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)", filter: "blur(40px)" }} />
          <div className="absolute -bottom-20 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(251,191,36,0.05) 0%, transparent 70%)", filter: "blur(40px)" }} />

          <div className="container mx-auto px-6 lg:px-12 relative">
            {/* Header */}
            <div className="flex items-end justify-between mb-14 anim">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-px bg-white/20" />
                  <p className="text-white/30 text-[10px] tracking-[0.5em] font-light">GESELECTEERD WERK</p>
                </div>
                <h2 className="text-4xl lg:text-6xl font-extralight text-white tracking-[0.1em]">PORTFOLIO<span className="text-white/20">.</span></h2>
              </div>
              <a href="/portfolio" className="hidden md:inline-flex items-center gap-2 text-white/30 text-[10px] tracking-[0.35em] font-light hover:text-white/70 transition-colors duration-300 group">
                ALLE CASES
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* 2×2 Browser-frame grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {projects.map((p, i) => (
                <a key={p.number} href={p.link}
                  className="group relative block anim"
                  style={{ transitionDelay: `${i * 0.1}s` }}>
                  {/* Ghost number */}
                  <span className="absolute -top-8 -left-2 text-[110px] font-extralight text-white/[0.035] leading-none select-none pointer-events-none z-0 tracking-tighter">{p.number}</span>

                  {/* Browser frame */}
                  <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1.5">
                    {/* Accent glow */}
                    <div className="absolute -inset-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{ background: `radial-gradient(circle at 50% 50%, ${p.accent}22 0%, transparent 70%)`, filter: "blur(20px)" }} />

                    <div className="relative rounded-md overflow-hidden bg-zinc-950 border border-white/[0.06] group-hover:border-white/[0.12] transition-colors duration-500 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.8)]">
                      {/* Browser top bar */}
                      <div className="h-8 bg-zinc-900/80 backdrop-blur border-b border-white/[0.04] flex items-center px-3 relative">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08] group-hover:bg-red-400/50 transition-colors duration-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08] group-hover:bg-amber-400/50 transition-colors duration-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08] group-hover:bg-green-400/50 transition-colors duration-500" />
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 px-3 py-0.5 text-[10px] font-light tracking-[0.2em] text-white/25 bg-zinc-800/60 rounded-sm">
                          {p.url}
                        </div>
                      </div>

                      {/* Screenshot area */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        {p.video ? (
                          <video src={p.video}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                            autoPlay muted loop playsInline preload="metadata" />
                        ) : p.image ? (
                          <img src={p.image} alt={p.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                            loading="lazy" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center relative"
                            style={{ background: `linear-gradient(135deg, ${p.accent}18 0%, #0a0a0a 60%)` }}>
                            <div className="absolute inset-0 opacity-30"
                              style={{ backgroundImage: `radial-gradient(circle at 30% 40%, ${p.accent}30 0%, transparent 50%)` }} />
                            <div className="relative z-10 text-center px-8">
                              <p className="text-white/15 text-[9px] tracking-[0.5em] font-light mb-4">VOORVERTONING VOLGT</p>
                              <p className="text-white/50 text-2xl lg:text-3xl font-extralight tracking-[0.1em]">{p.title}</p>
                            </div>
                          </div>
                        )}
                        {/* Inner glow */}
                        <div className="absolute inset-0 pointer-events-none"
                          style={{ boxShadow: `inset 0 0 60px ${p.accent}10` }} />
                      </div>
                    </div>
                  </div>

                  {/* Info below */}
                  <div className="pt-6 flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-white/25 text-[9px] tracking-[0.4em] font-light">{p.number}</span>
                        <span className="w-4 h-px bg-white/15" />
                        <span className="text-white/30 text-[9px] tracking-[0.4em] font-light">{p.category}</span>
                      </div>
                      <h3 className="text-white text-xl lg:text-2xl font-extralight tracking-[0.1em] mb-2 group-hover:text-white/90 transition-colors">{p.title}</h3>
                      <p className="text-white/35 text-[12px] font-light tracking-wide italic">{p.summary}</p>
                    </div>
                    <div className="flex items-center gap-2 text-white/25 text-[9px] tracking-[0.35em] font-light group-hover:text-white/70 transition-colors duration-400 pt-1 flex-shrink-0">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full animate-pulse" style={{ background: p.accent }} />
                        LIVE
                      </span>
                      <svg className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="flex justify-center mt-12 md:hidden">
              <a href="/portfolio" className="inline-flex items-center gap-2 text-white/35 text-[10px] tracking-[0.35em] font-light">
                ALLE CASES
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ─── 6. REVIEWS ──────────────────────────────────────── */}
        <section className="relative bg-[#070707] py-32 lg:py-44 overflow-hidden" id="reviews">
          {/* Ambient accent glow — shifts with active review */}
          {(() => {
            const reviews = [
              {
                quote: "Binnen drie dagen live. Geen enkele professionele foto, wel een strakke deadline. Dynique leverde AI-visuals die ons merk premium maakten en de eerste aanvragen kwamen binnen een week binnen.",
                name: "Tom Creemers",
                role: "Founder · Creemers Exclusive",
                project: "CREEMERS EXCLUSIVE",
                verifyUrl: "https://creemersexclusive.nl",
                verifyLabel: "creemersexclusive.nl",
                accent: "#d4a574",
                initials: "TC",
                date: "Mrt 2025",
              },
              {
                quote: "Andere bureaus zeiden weken. Dynique leverde een meertalige website met booking-systeem binnen zeven dagen. De site voelt professioneler dan ik had durven hopen en het aantal aanvragen is verdubbeld.",
                name: "Stacy Kohnen",
                role: "Zangeres · Stacy Kohnen Music",
                project: "STACY KOHNEN",
                verifyUrl: "https://stacykohnen.de",
                verifyLabel: "stacykohnen.de",
                accent: "#a78bfa",
                initials: "SK",
                date: "Feb 2026",
              },
              {
                quote: "Ze begrepen onze familiegeschiedenis direct. Een ijssalon online zetten klinkt eenvoudig maar het gevoel moest kloppen. Dynique ving precies de juiste sfeer. De salon is drukker dan ooit.",
                name: "Wally & Roger",
                role: "Eigenaren · IJssalon Italia Vaals",
                project: "IJSSALON ITALIA",
                verifyUrl: "https://ijssalonitaliavaals.nl",
                verifyLabel: "ijssalonitaliavaals.nl",
                accent: "#fb923c",
                initials: "WR",
                date: "Apr 2025",
              },
              {
                quote: "Een platform waar topchefs en premium keukens elkaar vinden: klinkt complex, werd elegant. Dynique dacht mee, bouwde snel en leverde een product dat direct serieus genomen wordt.",
                name: "Mitchell & Gert-Jan",
                role: "Oprichters · Chefs Connect",
                project: "CHEFS CONNECT",
                verifyUrl: "https://chefs-connect.nl",
                verifyLabel: "chefs-connect.nl",
                accent: "#ef4444",
                initials: "MG",
                date: "Jan 2026",
              },
              {
                quote: "We hadden de zaak opnieuw in het jasje gestoken en wilden dat dezelfde sfeer online terugkwam. Dynique vertaalde onze rebranding naar een site die precies voelt zoals onze gasten de bistro binnenlopen.",
                name: "Team Auwt Aelse",
                role: "Bistro · Auwt Aelse",
                project: "AUWT AELSE",
                verifyUrl: "https://auwtaelse.nl",
                verifyLabel: "auwtaelse.nl",
                accent: "#eab308",
                initials: "AA",
                date: "Mrt 2026",
              },
            ];
            const r = reviews[reviewIdx % reviews.length];
            return (
              <>
                {/* Single soft accent glow */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none transition-all duration-[2000ms] ease-out"
                  style={{
                    background: `radial-gradient(55% 50% at 50% 30%, ${r.accent}14 0%, transparent 70%)`,
                  }}
                />

                <div className="relative container mx-auto px-6 lg:px-12">
                  {/* Header — minimal, centered */}
                  <div className="max-w-2xl mx-auto text-center mb-24 lg:mb-32">
                    <div className="flex items-center justify-center gap-4 mb-8 anim">
                      <span className="inline-block w-8 h-[1px] bg-white/20"></span>
                      <p className="text-white/40 text-[10px] tracking-[0.5em] font-light uppercase">
                        Verified · 5.0
                      </p>
                      <span className="inline-block w-8 h-[1px] bg-white/20"></span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-extralight text-white tracking-[0.04em] leading-[1.1] anim delay-1">
                      Gezegd. <span className="italic text-white/40">Geleverd.</span>
                    </h2>
                  </div>

                  {/* Main review — centered, quiet */}
                  <div className="max-w-3xl mx-auto anim delay-2">
                    <div
                      key={reviewIdx}
                      className="relative"
                      style={{ animation: "reviewFade 1.4s ease-out both" }}
                    >
                      {/* Project tag */}
                      <div className="flex items-center justify-center gap-3 mb-10">
                        <span
                          className="inline-block w-1.5 h-1.5 rounded-full transition-colors duration-[2000ms]"
                          style={{ background: r.accent, boxShadow: `0 0 10px ${r.accent}` }}
                        />
                        <p
                          className="text-[11px] tracking-[0.35em] font-light transition-colors duration-[2000ms]"
                          style={{ color: r.accent }}
                        >
                          {r.project}
                        </p>
                      </div>

                      {/* Quote */}
                      <blockquote className="text-center text-xl sm:text-2xl lg:text-[1.75rem] font-extralight text-white/90 tracking-[0.01em] leading-[1.6] mb-14">
                        {r.quote}
                      </blockquote>

                      {/* Author */}
                      <div className="flex flex-col items-center gap-5">
                        <span className="inline-block w-8 h-[1px] bg-white/15" />
                        <div className="text-center">
                          <p className="text-white text-sm tracking-[0.15em] font-light">{r.name}</p>
                          <p className="text-white/40 text-[10px] tracking-[0.25em] font-light uppercase mt-2">
                            {r.role}
                          </p>
                        </div>

                        {/* Verify */}
                        <a
                          href={r.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group mt-2 inline-flex items-center gap-2.5 text-white/50 hover:text-white transition-colors duration-300"
                        >
                          <svg
                            className="w-3.5 h-3.5 transition-colors duration-[2000ms]"
                            style={{ color: r.accent }}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-[10px] tracking-[0.3em] font-light uppercase">
                            {r.verifyLabel}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Pagination — minimal dots */}
                  <div className="mt-24 lg:mt-32 flex items-center justify-center gap-4 anim delay-3">
                    {reviews.map((rv, i) => {
                      const active = i === reviewIdx % reviews.length;
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setReviewIdx(i)}
                          aria-label={`Review ${i + 1}: ${rv.project}`}
                          className="group p-2"
                        >
                          <span
                            className="block transition-all duration-700 rounded-full"
                            style={{
                              width: active ? "32px" : "6px",
                              height: "6px",
                              background: active ? rv.accent : "rgba(255,255,255,0.15)",
                              boxShadow: active ? `0 0 14px ${rv.accent}80` : "none",
                            }}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

              </>
            );
          })()}
        </section>

        {/* ─── 7. PROCESS — "HET TRAJECT" ─────────────────────── */}
        <section className="relative bg-[#050505] py-32 lg:py-44 overflow-hidden">
          {/* Ambient accent orbs */}
          <div aria-hidden className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none opacity-60"
               style={{ background: "radial-gradient(circle, rgba(212,165,116,0.10) 0%, transparent 60%)" }} />
          <div aria-hidden className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none opacity-50"
               style={{ background: "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 60%)" }} />
          {/* Ultra-subtle grid */}
          <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.025]"
               style={{
                 backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                 backgroundSize: "120px 120px",
               }} />

          <div className="relative container mx-auto px-6 lg:px-12">
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-24 lg:mb-32">
              <div className="flex items-center gap-4 mb-10 anim">
                <span className="inline-block w-8 h-[1px] bg-[#d4a574]/60"></span>
                <p className="text-[#d4a574]/80 text-[10px] tracking-[0.5em] font-light uppercase">
                  Het Traject
                </p>
              </div>
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-end">
                <h2 className="lg:col-span-7 text-5xl lg:text-7xl xl:text-[5.5rem] font-extralight text-white tracking-[0.02em] leading-[1.02] anim delay-1">
                  Van eerste gesprek<br />
                  <span className="italic text-white/50">tot live website.</span>
                </h2>
                <p className="lg:col-span-5 text-white/50 text-base lg:text-lg font-light leading-[1.9] tracking-wide anim delay-2">
                  Geen dikke offertes. Geen vage tijdlijnen. Vier heldere fases,
                  transparante communicatie en een vaste prijs. Van kennismaking
                  tot live: gemiddeld <span className="text-white">zeven dagen</span>.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="max-w-6xl mx-auto relative">
              {/* Vertical progress line (desktop) */}
              <div aria-hidden className="hidden lg:block absolute left-[calc(8rem+1px)] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

              {[
                {
                  n: "01",
                  title: "INTAKE",
                  duration: "Dag 1",
                  tagline: "We leren je merk kennen.",
                  desc: "Een gesprek van een uur waarin we je doel, doelgroep en ambities scherp krijgen. Online, op locatie of bij ons aan tafel. Na afloop weet je precies wat je kunt verwachten, inclusief prijs en planning.",
                  deliverables: ["Strategisch gesprek", "Heldere offerte", "Vaste einddatum"],
                  accent: "#a78bfa",
                },
                {
                  n: "02",
                  title: "CONCEPT",
                  duration: "Dag 2–3",
                  tagline: "We vertalen je merk naar design.",
                  desc: "Binnen drie werkdagen zie je de eerste visuele richting. Geen Figma-files die je zelf moet interpreteren: een klikbaar prototype van je eigen website. Jij geeft feedback, wij verfijnen.",
                  deliverables: ["Klikbaar prototype", "Merkhuisstijl", "Content-structuur"],
                  accent: "#d4a574",
                },
                {
                  n: "03",
                  title: "BOUWEN",
                  duration: "Dag 4–7",
                  tagline: "We bouwen je merk online.",
                  desc: "We bouwen in Next.js: razendsnel, toekomstbestendig en perfect vindbaar in Google. Je ziet elke dag de voortgang live op een staging-link. Geen black box: volledige transparantie.",
                  deliverables: ["Next.js development", "Staging preview", "Live feedback loop"],
                  accent: "#fb923c",
                },
                {
                  n: "04",
                  title: "LIVE",
                  duration: "Dag 7+",
                  tagline: "We zetten je merk aan.",
                  desc: "Launch, SEO-setup, analytics, security: alles wordt voor je ingeregeld. Daarna blijven we bereikbaar voor updates, uitbreidingen en beheer. Je staat er nooit alleen voor.",
                  deliverables: ["Launch & SEO", "Analytics setup", "Doorlopend beheer"],
                  accent: "#34d399",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="relative grid lg:grid-cols-12 gap-8 lg:gap-16 py-14 lg:py-20 border-t border-white/5 last:border-b anim"
                  style={{ transitionDelay: `${i * 0.12}s` }}
                >
                  {/* Left — step number */}
                  <div className="lg:col-span-3 relative flex lg:flex-col items-start gap-6 lg:gap-0">
                    {/* Timeline dot */}
                    <span
                      aria-hidden
                      className="hidden lg:block absolute left-32 top-3 w-2 h-2 rounded-full"
                      style={{
                        background: step.accent,
                        boxShadow: `0 0 20px ${step.accent}, 0 0 0 4px ${step.accent}20`,
                      }}
                    />
                    <div
                      className="text-6xl lg:text-8xl font-extralight leading-none tracking-wider transition-colors"
                      style={{
                        background: `linear-gradient(135deg, ${step.accent} 0%, ${step.accent}60 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {step.n}
                    </div>
                    <div className="lg:mt-6">
                      <span
                        className="inline-block px-3 py-1 text-[10px] tracking-[0.25em] font-light uppercase border rounded-sm"
                        style={{
                          color: step.accent,
                          borderColor: `${step.accent}40`,
                          background: `${step.accent}10`,
                        }}
                      >
                        {step.duration}
                      </span>
                    </div>
                  </div>

                  {/* Right — content */}
                  <div className="lg:col-span-9 space-y-8">
                    <div>
                      <p
                        className="text-[10px] tracking-[0.4em] font-light uppercase mb-3"
                        style={{ color: `${step.accent}99` }}
                      >
                        {step.title}
                      </p>
                      <h3 className="text-3xl lg:text-4xl xl:text-5xl font-extralight text-white tracking-[0.01em] leading-[1.15]">
                        {step.tagline}
                      </h3>
                    </div>
                    <p className="text-white/50 text-base lg:text-lg font-light leading-[1.85] tracking-wide max-w-3xl">
                      {step.desc}
                    </p>
                    {/* Deliverables */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {step.deliverables.map((d) => (
                        <span
                          key={d}
                          className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-[0.15em] font-light border border-white/10 text-white/60 hover:text-white hover:border-white/25 transition-colors duration-300"
                        >
                          <svg className="w-3 h-3" style={{ color: step.accent }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Conversion block */}
            <div className="max-w-5xl mx-auto mt-24 lg:mt-32 anim">
              <div className="relative overflow-hidden border border-white/10">
                {/* Gradient backdrop */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(80% 100% at 50% 0%, rgba(212,165,116,0.14) 0%, transparent 70%), linear-gradient(180deg, #0a0a0a 0%, #050505 100%)",
                  }}
                />
                <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#d4a574]/60 to-transparent" />

                <div className="relative px-8 py-14 lg:px-20 lg:py-20 text-center space-y-10">
                  <div>
                    <div className="flex items-center justify-center gap-3 mb-8">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#34d399]" style={{ boxShadow: "0 0 10px #34d399" }} />
                      <p className="text-[#34d399] text-[10px] tracking-[0.4em] font-light uppercase">
                        Beschikbaar voor nieuwe projecten
                      </p>
                    </div>
                    <h3 className="text-4xl lg:text-6xl font-extralight text-white tracking-[0.02em] leading-[1.1]">
                      Klaar om <span className="italic text-white/50">te starten?</span>
                    </h3>
                    <p className="mt-6 text-white/50 text-base lg:text-lg font-light leading-[1.8] tracking-wide max-w-2xl mx-auto">
                      Binnen 24 uur een reactie. Binnen een week een concept.
                      Binnen twee weken live. Zonder verrassingen, met vaste prijs.
                    </p>
                  </div>

                  {/* Value props */}
                  <div className="grid sm:grid-cols-3 gap-px bg-white/5 max-w-3xl mx-auto">
                    {[
                      { n: "24u", label: "Reactietijd" },
                      { n: "7d", label: "Gem. oplevering" },
                      { n: "100%", label: "Vaste prijs" },
                    ].map((v) => (
                      <div key={v.label} className="bg-[#050505] py-6 px-4">
                        <p className="text-2xl lg:text-3xl font-extralight text-white tracking-wider">{v.n}</p>
                        <p className="text-white/40 text-[10px] tracking-[0.3em] font-light uppercase mt-2">
                          {v.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Dual CTA */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                    <a
                      href="#contact"
                      className="group relative inline-flex items-center justify-center gap-4 px-12 py-5 bg-white text-black text-xs tracking-[0.3em] font-light overflow-hidden transition-all duration-500 hover:tracking-[0.4em]"
                    >
                      <span className="relative z-10">START JOUW TRAJECT</span>
                      <svg className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    <a
                      href="https://wa.me/31624572572"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-3 px-12 py-5 border border-white/15 text-white text-xs tracking-[0.3em] font-light hover:bg-white/5 hover:border-white/30 transition-all duration-500"
                    >
                      <svg className="w-4 h-4 text-[#34d399]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.5 3.4A11.9 11.9 0 0012 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8 1 3.8 1.5 5.8 1.5 6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.5zM12 21.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.8 1 1-3.7-.2-.4A9.9 9.9 0 012.2 12C2.2 6.6 6.6 2.2 12 2.2c2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 012.9 6.9c0 5.4-4.4 9.8-9.8 9.8z"/>
                      </svg>
                      DIRECT WHATSAPP
                    </a>
                  </div>

                  {/* Micro trust line */}
                  <div className="flex flex-wrap items-center justify-center gap-6 text-white/35 text-[10px] tracking-[0.3em] font-light uppercase pt-4 border-t border-white/5">
                    <span className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-[#d4a574]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 1l2.39 6.96h7.32l-5.93 4.3 2.26 6.96L10 14.92l-6.04 4.3 2.26-6.96L.29 7.96h7.32L10 1z" clipRule="evenodd" />
                      </svg>
                      5.0 · Verified
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>Gratis kennismaking</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>Vaste contactpersoon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 7b. ADVISEUR — consultatieve multiple-choice ────── */}
        <Advisor />

        {/* ─── 8. STATEMENT STRIP ──────────────────────────────── */}
        <section className="bg-black py-24 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-extralight text-white tracking-[0.08em] leading-[1.1] anim">
              Klaar om te groeien?<br />
              <span className="text-white/20">Wij ook.</span>
            </h2>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 anim delay-1">
              <a href="#contact" className="inline-block px-12 py-4 bg-white text-black text-xs tracking-[0.25em] font-light hover:bg-white/90 transition-all duration-300 hover:tracking-[0.3em]">
                START JE PROJECT
              </a>
              <a href="/portfolio" className="inline-block px-12 py-4 border border-white/15 text-white text-xs tracking-[0.25em] font-light hover:border-white/40 hover:bg-white/5 transition-all duration-300">
                BEKIJK PORTFOLIO
              </a>
            </div>
          </div>
        </section>

        {/* ─── 9. CONTACT ──────────────────────────────────────── */}
        <section className="bg-white py-32 lg:py-40" id="contact">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
              {/* Left */}
              <div className="space-y-12">
                <div>
                  <p className="text-black/30 text-xs tracking-[0.4em] font-light mb-4 anim">CONTACT</p>
                  <h2 className="text-4xl lg:text-6xl font-extralight text-black tracking-[0.08em] leading-tight anim delay-1">
                    Laten we<br />
                    <span className="font-light italic">kennismaken.</span>
                  </h2>
                </div>
                <div className="space-y-6 anim delay-2">
                  <p className="text-black/50 text-base font-light leading-[1.8] tracking-wide">
                    Vertel ons over je project. We reageren altijd binnen 24 uur, meestal veel eerder.
                  </p>
                  <div className="space-y-4 pt-4 border-t border-black/5">
                    {[
                      { label: "TELEFOON", value: "+31 6 24572572", href: "tel:+31624572572" },
                      { label: "E-MAIL", value: "info@dynique.nl", href: "mailto:info@dynique.nl" },
                      { label: "REACTIETIJD", value: "Binnen 2 uur (ma–za, 9–20u)", href: null },
                      { label: "WERKGEBIED", value: "Limburg · Nederland · Internationaal", href: null },
                    ].map((item) => (
                      <div key={item.label} className="flex items-baseline gap-4">
                        <span className="text-black/20 text-[9px] tracking-[0.35em] font-light flex-shrink-0 w-24">{item.label}</span>
                        {item.href ? (
                          <a href={item.href} className="text-black text-sm font-light tracking-wide hover:text-black/60 transition-colors duration-200">{item.value}</a>
                        ) : (
                          <span className="text-black/60 text-sm font-light tracking-wide">{item.value}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — Form */}
              <div className="space-y-8 anim delay-2">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { label: "Naam *", key: "name", placeholder: "Jouw naam", type: "text" },
                    { label: "Bedrijf", key: "company", placeholder: "Optioneel", type: "text" },
                  ].map((f) => (
                    <div key={f.key} className="space-y-2">
                      <label className="text-black/40 text-[10px] tracking-[0.3em] font-light uppercase">{f.label}</label>
                      <input
                        type={f.type}
                        value={formData[f.key as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                        placeholder={f.placeholder}
                        className="w-full bg-transparent border-b border-black/15 focus:border-black text-black text-sm font-light tracking-wide py-3 outline-none transition-colors duration-300 placeholder:text-black/20"
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="text-black/40 text-[10px] tracking-[0.3em] font-light uppercase">Wat heb je nodig? *</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-white border-b border-black/15 focus:border-black text-black text-sm font-light tracking-wide py-3 outline-none transition-colors duration-300 cursor-pointer"
                  >
                    <option value="">Selecteer een dienst</option>
                    <option value="Website">Website</option>
                    <option value="Web Applicatie">Web Applicatie</option>
                    <option value="Webshop">Webshop / E-commerce</option>
                    <option value="Bedrijfsprocessen">Digitale Bedrijfsprocessen</option>
                    <option value="AI Marketing">AI Marketing</option>
                    <option value="Drone & Video">Drone & Video</option>
                    <option value="Combinatie">Combinatie / Weet ik nog niet</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-black/40 text-[10px] tracking-[0.3em] font-light uppercase">Omschrijf je project *</label>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Wat wil je bereiken? Voor wie is het bedoeld? Hoe snel wil je live?"
                    className="w-full bg-transparent border-b border-black/15 focus:border-black text-black text-sm font-light tracking-wide py-3 outline-none transition-colors duration-300 resize-none placeholder:text-black/20"
                  ></textarea>
                </div>

                <div className="border-t border-black/5 pt-6">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={wantsAppointment}
                      onChange={(e) => setWantsAppointment(e.target.checked)}
                      className="w-4 h-4 border border-black/30 cursor-pointer accent-black"
                    />
                    <span className="text-black/50 text-sm font-light tracking-wide group-hover:text-black transition-colors duration-300">
                      Ik wil graag een gesprek inplannen
                    </span>
                  </label>
                </div>

                {wantsAppointment && (
                  <div className="grid md:grid-cols-3 gap-6 pt-2">
                    {[
                      { label: "Datum", key: "date", type: "date" },
                      { label: "Tijd", key: "time", type: "select", options: ["09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"] },
                      { label: "Type", key: "meetingType", type: "select", options: ["online", "fysiek"] },
                    ].map((f) => (
                      <div key={f.key} className="space-y-2">
                        <label className="text-black/40 text-[10px] tracking-[0.3em] font-light uppercase">{f.label}</label>
                        {f.type === "date" ? (
                          <input
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full bg-transparent border-b border-black/15 focus:border-black text-black text-sm font-light py-3 outline-none transition-colors duration-300"
                          />
                        ) : (
                          <select
                            value={formData[f.key as keyof typeof formData]}
                            onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                            className="w-full bg-white border-b border-black/15 focus:border-black text-black text-sm font-light py-3 outline-none transition-colors duration-300 cursor-pointer"
                          >
                            {f.options?.map((o) => <option key={o} value={o}>{f.key === "meetingType" ? (o === "online" ? "Online (Google Meet)" : "Fysiek") : o}</option>)}
                          </select>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <button
                  onClick={handleWhatsAppSubmit}
                  className="group w-full mt-4 px-12 py-4 bg-black text-white text-xs tracking-[0.25em] font-light hover:bg-[#25D366] transition-all duration-500 flex items-center justify-center gap-3"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  VERSTUUR VIA WHATSAPP
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10. FAQ ──────────────────────────────────────────── */}
        <section className="bg-zinc-950 py-32 lg:py-40" id="faq">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-3 gap-16 lg:gap-32">
              <div>
                <p className="text-white/20 text-xs tracking-[0.4em] font-light mb-4 anim">FAQ</p>
                <h2 className="text-4xl lg:text-5xl font-extralight text-white tracking-[0.08em] leading-tight anim delay-1">
                  Directe<br />antwoorden.
                </h2>
                <p className="text-white/30 text-sm font-light tracking-wide mt-6 leading-relaxed anim delay-2">
                  Staat je vraag er niet bij?{" "}
                  <a href="https://wa.me/31624572572" className="text-white/60 hover:text-white transition-colors duration-200 underline underline-offset-4">
                    Chat direct met ons.
                  </a>
                </p>
              </div>
              <div className="lg:col-span-2 divide-y divide-white/5 anim delay-1">
                {faqs.map((faq, i) => (
                  <div key={i} className="py-6">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                      className="w-full flex items-start justify-between gap-6 text-left group"
                    >
                      <h3 className="text-white/80 group-hover:text-white text-sm lg:text-base font-light tracking-wide leading-relaxed transition-colors duration-300">
                        {faq.q}
                      </h3>
                      <div className="flex-shrink-0 mt-1 w-5 h-5 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full h-px bg-white/30 group-hover:bg-white/60 transition-colors duration-300"></div>
                        </div>
                        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${openFAQ === i ? "rotate-90 opacity-0" : ""}`}>
                          <div className="w-px h-full bg-white/30 group-hover:bg-white/60 transition-colors duration-300"></div>
                        </div>
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ${openFAQ === i ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                      <p className="text-white/40 text-sm font-light leading-[1.8] tracking-wide pr-10">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <style jsx>{`
        /* ── Loading screen ───────────────────────── */
        @keyframes loadOrbBreath1 {
          0%,100% { transform: scale(0.8) rotate(0deg);  opacity: 0.6; }
          45%     { transform: scale(1.25) rotate(12deg); opacity: 1; }
        }
        @keyframes loadOrbBreath2 {
          0%,100% { transform: scale(1.1) rotate(-8deg); opacity: 0.55; }
          50%     { transform: scale(0.78) rotate(6deg);  opacity: 1; }
        }
        @keyframes loadOrbBreath3 {
          0%,100% { transform: scale(0.85) rotate(10deg); opacity: 0.4; }
          50%     { transform: scale(1.3) rotate(-8deg);  opacity: 0.9; }
        }
        .load-orb-1 { animation: loadOrbBreath1 8s ease-in-out infinite; }
        .load-orb-2 { animation: loadOrbBreath2 11s ease-in-out infinite; }
        .load-orb-3 { animation: loadOrbBreath3 6s ease-in-out infinite; }

        @keyframes loadLabelIn {
          from { opacity: 0; letter-spacing: 0.8em; }
          to   { opacity: 1; letter-spacing: 0.6em; }
        }
        @keyframes loadTitleReveal {
          from { clip-path: inset(0 100% 0 0); opacity: 0.5; }
          to   { clip-path: inset(0 0% 0 0);   opacity: 1; }
        }
        @keyframes loadLineGrow {
          from { width: 0%; opacity: 0; }
          to   { width: 100%; opacity: 1; }
        }
        @keyframes loadTaglineIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes loadProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .load-label    { animation: loadLabelIn     0.7s ease-out 0.2s both; }
        .load-title    { animation: loadTitleReveal  0.9s cubic-bezier(0.16,1,0.3,1) 0.6s both; }
        .load-line     { animation: loadLineGrow     0.8s cubic-bezier(0.16,1,0.3,1) 1.2s both; width: 0; }
        .load-tagline  { animation: loadTaglineIn    0.7s ease-out 1.6s both; }
        .load-progress { animation: loadProgress     3s cubic-bezier(0.4,0,0.2,1) 0.3s both; }

        /* ── Hero / global ────────────────────────── */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes reviewFade {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
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
        @keyframes slotWordIn {
          from { opacity: 0; transform: translateY(36px) skewY(3deg); }
          to   { opacity: 1; transform: translateY(0) skewY(0deg); }
        }
        .orb-breathe-1 { animation: breathe1 9s  ease-in-out infinite; }
        .orb-breathe-2 { animation: breathe2 13s ease-in-out infinite; }
        .orb-breathe-3 { animation: breathe3 7s  ease-in-out infinite; }
        .hero-slot-word {
          display: block;
          animation: slotWordIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .marquee-track {
          animation: marquee 30s linear infinite;
          display: inline-flex;
          width: max-content;
        }
        .anim {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .anim.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 { transition-delay: 0.12s; }
        .delay-2 { transition-delay: 0.26s; }
        .delay-3 { transition-delay: 0.42s; }

        /* Diensten row hover-expand */
        .dienst-expand {
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.55s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dienst-row:hover .dienst-expand {
          grid-template-rows: 1fr;
        }

        /* Diensten row slide-up entry */
        .dienst-row.anim {
          transform: translateY(28px);
        }
        .dienst-row.anim.animate-in {
          transform: translateY(0);
        }

        /* Slide-in from left (manifesto photo) */
        .anim.anim-from-left {
          transform: translateX(-40px) translateY(0px);
          opacity: 0;
        }
        .anim.anim-from-left.animate-in {
          transform: translateX(0) translateY(0);
          opacity: 1;
        }

        /* Photo diagonal reveal — polygon animates so diagonal shape is preserved */
        @keyframes photoDiagReveal {
          from { clip-path: polygon(16% 100%, 100% 100%, 100% 100%, 0% 100%); opacity: 0; }
          to   { clip-path: polygon(16% 0%,   100% 0%,   100% 100%, 0% 100%); opacity: 1; }
        }
        .photo-diag-reveal {
          animation: photoDiagReveal 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
        }

        @media (max-width: 768px) {
          .anim { transform: translateY(20px); transition-duration: 0.7s; }
          .anim.anim-from-left { transform: translateY(20px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .anim { opacity: 1; transform: none; transition: none; }
          .marquee-track { animation: none; }
          .orb-breathe-1, .orb-breathe-2, .orb-breathe-3 { animation: none; }
          .hero-slot-word { animation: none; }
        }
      `}</style>
    </>
  );
}
