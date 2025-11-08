"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [wantsAppointment, setWantsAppointment] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    projectType: '',
    description: '',
    date: '',
    time: '',
    meetingType: 'online'
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppSubmit = () => {
    let message = `Hi! Ik wil graag contact opnemen.\n\n`;
    message += `📝 *Naam:* ${formData.name || '(niet ingevuld)'}\n`;
    if (formData.company) message += `🏢 *Bedrijf:* ${formData.company}\n`;
    message += `🎯 *Project:* ${formData.projectType || '(niet ingevuld)'}\n\n`;
    message += `📋 *Omschrijving:*\n${formData.description || '(niet ingevuld)'}\n`;
    
    if (wantsAppointment && formData.date) {
      message += `\n📅 *Gewenst gesprek:*\n`;
      message += `Datum: ${formData.date}\n`;
      if (formData.time) message += `Tijd: ${formData.time}\n`;
      message += `Type: ${formData.meetingType === 'online' ? 'Online (Google Meet)' : 'Fysiek'}\n`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/31624572572?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="relative">
      {/* Sticky WhatsApp Button */}
      <a
        href="https://wa.me/31624572572?text=Hi!%20Ik%20heb%20interesse%20in%20een%20website."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group"
        aria-label="Chat via WhatsApp"
      >
        {/* Button Container */}
        <div className="relative">
          {/* Pulse Animation Ring */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
          
          {/* Main Button */}
          <div className="relative w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
            {/* WhatsApp Icon */}
            <svg 
              className="w-9 h-9 text-white" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>

          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300">
            <div className="bg-black text-white text-sm font-light tracking-wide px-4 py-2 rounded shadow-xl">
              Chat met ons
            </div>
            {/* Arrow */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-black"></div>
            </div>
          </div>
        </div>
      </a>

      {/* Header with Video Background */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 50 ? "bg-black/95 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="relative z-10">
              <h1 className="text-white text-2xl lg:text-3xl font-light tracking-[0.3em] cursor-pointer hover:tracking-[0.4em] transition-all duration-300">
                DYNIQUE
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              {[
                { label: "PORTFOLIO", href: "#portfolio" },
                { label: "REVIEWS", href: "#reviews" },
                { label: "AANPAK", href: "#aanpak" },
                { label: "FAQ", href: "#faq" },
                { label: "CONTACT", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white text-sm font-light tracking-[0.15em] hover:tracking-[0.25em] transition-all duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center space-y-1.5"
              aria-label="Menu"
            >
              <span
                className={`w-6 h-[1px] bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-[1px] bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-[1px] bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden fixed inset-0 bg-black/98 backdrop-blur-lg transition-all duration-500 ${
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {[
                { label: "PORTFOLIO", href: "#portfolio" },
                { label: "REVIEWS", href: "#reviews" },
                { label: "AANPAK", href: "#aanpak" },
                { label: "FAQ", href: "#faq" },
                { label: "CONTACT", href: "#contact" },
              ].map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-2xl font-light tracking-[0.2em] hover:tracking-[0.3em] transition-all duration-300"
                  style={{
                    animation: isMenuOpen
                      ? `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                      : "none",
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section with Video Background */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/rsc/hero.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <div
              className="space-y-8"
              style={{
                animation: "fadeInUp 1s ease-out 0.5s both",
              }}
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white tracking-[0.2em] leading-tight">
                WAAROM ZO LANG
                <br />
                <span className="font-light">WACHTEN?</span>
              </h2>
              <p className="text-white text-lg md:text-xl lg:text-2xl font-extralight tracking-[0.15em] max-w-3xl mx-auto">
                Betaalbaar. Razendsnel geregeld. Jouw perfecte website online in no-time
              </p>
              <div className="pt-8">
                <button className="group relative px-12 py-4 bg-white text-black text-sm tracking-[0.2em] font-light overflow-hidden transition-all duration-500 hover:tracking-[0.3em]">
                  <span className="relative z-10">START JOUW PROJECT</span>
                  <span className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                  <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-[0.3em]">
                    START JOUW PROJECT
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-white text-xs tracking-[0.2em] font-light">
              SCROLL
            </span>
            <div className="w-[1px] h-12 bg-white/50"></div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative bg-white py-20 lg:py-24" id="portfolio">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center space-y-3 mb-12">
            <h3 className="text-3xl lg:text-5xl font-light text-black tracking-[0.15em] leading-tight">
              SNEL GELEVERD
            </h3>
            <p className="text-black/60 text-sm lg:text-base font-light tracking-wide">
              Bekijk wat we al hebben gemaakt
            </p>
          </div>

          {/* Ultra Premium Horizontal Line */}
          <div className="relative w-full h-px mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-black/10 rotate-45"></div>
          </div>
        </div>

        {/* Horizontal Scrollable Portfolio */}
        <div className="relative overflow-hidden">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide px-6 lg:px-12 pb-2 snap-x snap-mandatory">
            {[
              {
                number: "01",
                title: "CREEMERS EXCLUSIVE",
                category: "CONVERSIE WEBSITE",
                summary: "Premium freelance bureau met AI-visuals en 24/7 aanvraagformulier",
                image: "/rsc/creemers/hero.png",
                link: "/portfolio/creemers-exclusive",
              },
              {
                number: "02",
                title: "STACY KOHNEN",
                category: "PORTFOLIO & BRANDING",
                summary: "Viertaligie zangeres portfolio met real-time audio en boekingstool",
                image: "/rsc/stacykohnen/hero.png",
                link: "/portfolio/stacy-kohnen",
              },
              {
                number: "03",
                title: "HOUSE OF CHOCOLATE",
                category: "E-COMMERCE & BRANDING",
                summary: "Van nul tot complete branding met AI-video's en WhatsApp conversie",
                image: "/rsc/houseofchocolate/hero.png",
                link: "/portfolio/house-of-chocolate",
              },
            ].map((project, index) => (
              <a
                key={index}
                href={project.link || "#"}
                className="group relative flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] xl:w-[35vw] border border-black/5 hover:border-black/20 transition-all duration-500 cursor-pointer snap-center"
                style={{
                  animation:
                    scrollY > 400
                      ? `fadeInUp 0.8s ease-out ${index * 0.1}s both`
                      : "none",
                }}
              >
                {/* Minimalist Card */}
                <div className="relative bg-white overflow-hidden flex flex-col">
                  {/* Image Container */}
                  <div className="relative">
                    {project.image ? (
                      <>
                        {/* Image */}
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-700"></div>
                      </>
                    ) : (
                      <div className="aspect-[16/10] flex flex-col items-center justify-center p-12">
                        <span className="text-black/10 group-hover:text-black/20 text-8xl lg:text-9xl font-extralight tracking-wider transition-all duration-500">
                          {project.number}
                        </span>
                      </div>
                    )}

                    {/* Hover Indicator */}
                    <div className="absolute top-8 right-8 lg:top-10 lg:right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-8 h-8 border border-black/20 rotate-45"></div>
                    </div>
                  </div>
                  
                  {/* Info Below Image */}
                  <div className="p-8 lg:p-10 bg-white">
                    <div className="space-y-4">
                      <span className="text-black/40 text-xs tracking-[0.25em] font-light uppercase">
                        {project.category}
                      </span>
                      <div className="w-12 h-[1px] bg-black/20 group-hover:bg-black group-hover:w-20 transition-all duration-500"></div>
                      <h4 className="text-black text-lg lg:text-xl font-light tracking-[0.15em] group-hover:tracking-[0.2em] transition-all duration-500">
                        {project.title}
                      </h4>
                      <p className="text-black/60 text-xs lg:text-sm font-light leading-relaxed tracking-wide">
                        {project.summary}
                      </p>
                      <div className="pt-2">
                        <span className="inline-block px-6 py-2 border border-black/20 group-hover:border-black group-hover:bg-black text-black group-hover:text-white text-xs tracking-[0.2em] font-light transition-all duration-500">
                          BEKIJK CASE
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-12 space-x-2">
            <div className="text-black/30 text-xs tracking-[0.25em] font-light">
              SCROLL
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-6 h-[1px] bg-black/20"></div>
              <div className="w-2 h-2 border border-black/20 rotate-45"></div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-12">
          {/* Bottom Line */}
          <div className="relative w-full h-px mt-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section
        className="relative py-20 lg:py-24 bg-black bg-center bg-cover"
        id="reviews"
        style={{ backgroundImage: "url('/rsc/reviewbg.png')" }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-3xl lg:text-5xl font-light text-white tracking-[0.15em] leading-tight">
              ZE KOZEN VOOR
              <br />
              <span className="font-extralight">SNELHEID</span>
            </h3>
          </div>

          {/* Horizontal Scrollable Reviews */}
          <div className="relative -mx-6 lg:-mx-12 px-6 lg:px-12 z-10">
            <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
              {[
                {
                  quote: "Binnen een week live. Geen eindeloze meetings. Gewoon resultaat.",
                  author: "Thomas Vermeer",
                  role: "Vermeer & Partners",
                },
                {
                  quote: "We hadden geen foto's, alleen een deadline. Ze losten alles op met AI.",
                  author: "Lisa Creemers",
                  role: "Creemers Exclusive",
                },
                {
                  quote: "Eindelijk een bureau dat tijd geld is begrijpt. Snel én betaalbaar.",
                  author: "Mark de Jong",
                  role: "De Jong Advies",
                },
                {
                  quote: "Vier talen, audio-integratie, booking tool. Alles in drie dagen klaar.",
                  author: "Stacy Kohnen",
                  role: "Sängerin",
                },
                {
                  quote: "Geen gezeur over 'brand strategy' en dure workshops. Gewoon doen.",
                  author: "Sophie Jansen",
                  role: "Jansen Marketing",
                },
                {
                  quote: "Andere bureaus vroegen €8K en 3 maanden. Hier: €2.5K en 1 week.",
                  author: "Rick van Dijk",
                  role: "VanDijk Consulting",
                },
              ].map((review, index) => (
                <div
                  key={index}
                  className="group flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[380px] p-6 lg:p-8 border border-white/10 hover:border-white/30 transition-all duration-500 snap-center bg-black/40 hover:bg-black/30 backdrop-blur-sm"
                  style={{
                    animation:
                      scrollY > 1400
                        ? `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                        : "none",
                  }}
                >
                  <div className="space-y-4">
                    <p className="text-white/90 text-sm lg:text-base font-light leading-relaxed tracking-wide">
                      "{review.quote}"
                    </p>
                    <div className="flex items-center space-x-3 pt-2">
                      <div className="w-8 h-[1px] bg-white/20 group-hover:bg-white/40 group-hover:w-12 transition-all duration-500"></div>
                      <div>
                        <p className="text-white text-xs tracking-[0.15em] font-light">
                          {review.author}
                        </p>
                        <p className="text-white/40 text-xs tracking-wide font-light">
                          {review.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              <div className="text-white/30 text-xs tracking-[0.25em] font-light">
                SCROLL
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-6 h-[1px] bg-white/20"></div>
                <div className="w-2 h-2 border border-white/20 rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10">
              <div className="text-center text-white">
                <p className="text-3xl lg:text-4xl font-extralight tracking-wider mb-2">
                  50+
                </p>
                <p className="text-white/70 text-xs tracking-[0.2em] font-light uppercase">
                  Projecten
                </p>
              </div>
              <div className="text-center text-white">
                <p className="text-3xl lg:text-4xl font-extralight tracking-wider mb-2">
                  4.9
                </p>
                <p className="text-white/70 text-xs tracking-[0.2em] font-light uppercase">
                  Gemiddeld
                </p>
              </div>
              <div className="text-center text-white">
                <p className="text-3xl lg:text-4xl font-extralight tracking-wider mb-2">
                  7-14
                </p>
                <p className="text-white/70 text-xs tracking-[0.2em] font-light uppercase">
                  Dagen Gem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aanpak Timeline Section */}
      <section className="relative py-20 lg:py-24 overflow-hidden" id="aanpak">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm"
        >
          <source src="/rsc/stepproces.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-3xl lg:text-5xl font-light text-black tracking-[0.15em] leading-tight">
              VAN IDEE
              <br />
              <span className="font-extralight">NAAR LIVE</span>
            </h3>
          </div>

          {/* Horizontal Process */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 relative">
              {/* Connection Line - Desktop Only */}
              <div className="hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-black/10"></div>
              
              {[
                {
                  phase: "01",
                  title: "INTAKE",
                  description: "Kort gesprek. Wat, wanneer, budget. Klaar.",
                  duration: "1 DAG",
                },
                {
                  phase: "02",
                  title: "CREATIE",
                  description: "Design, content, AI-visuals. Alles compleet.",
                  duration: "2-5 DAGEN",
                },
                {
                  phase: "03",
                  title: "BUILD",
                  description: "Code, integraties, testen. Razendsnelle sites.",
                  duration: "3-7 DAGEN",
                },
                {
                  phase: "04",
                  title: "LIVE",
                  description: "Deploy, check, online. Direct resultaat.",
                  duration: "1 DAG",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="relative group text-center"
                  style={{
                    animation:
                      scrollY > 2200
                        ? `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                        : "none",
                  }}
                >
                  {/* Phase Number with Circle */}
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 rounded-full border-2 border-black/10 group-hover:border-black flex items-center justify-center transition-colors duration-500 bg-white relative z-10">
                      <span className="text-3xl font-extralight text-black tracking-wider">
                        {step.phase}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h4 className="text-lg lg:text-xl font-light text-black tracking-[0.2em]">
                      {step.title}
                    </h4>
                    <div className="w-12 h-[1px] bg-black/20 group-hover:bg-black mx-auto transition-colors duration-500"></div>
                    <p className="text-black/70 text-sm font-light leading-relaxed tracking-wide">
                      {step.description}
                    </p>
                    <p className="text-black/40 text-xs tracking-[0.2em] font-light uppercase pt-2">
                      {step.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Summary */}
            <div className="mt-16 pt-12 border-t border-black/10 text-center">
              <p className="text-black/60 text-base lg:text-lg font-light tracking-wide max-w-2xl mx-auto">
                Van eerste gesprek tot live website. <span className="text-black">Gemiddeld 7-14 dagen.</span> Geen maandenlange trajecten. Geen gedoe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Calendar Section */}
      <section className="relative bg-black py-32 lg:py-40" id="contact">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center space-y-6 mb-20">
            <span className="text-white text-xs tracking-[0.3em] font-light uppercase">
              Klaar om te beginnen?
            </span>
            <h3 className="text-4xl lg:text-6xl font-light text-white tracking-[0.1em] leading-tight">
              JOUW WEBSITE
              <br />
              <span className="font-extralight">VOLGENDE WEEK LIVE</span>
            </h3>
            <p className="text-white/60 text-base lg:text-lg font-light tracking-wide max-w-2xl mx-auto pt-4">
              Vul onderstaand formulier in en stuur direct via WhatsApp.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Form */}
            <div
              className="space-y-8"
              style={{
                animation:
                  scrollY > 3200 ? `fadeInUp 0.8s ease-out 0.2s both` : "none",
              }}
            >
              <div className="space-y-6">
                {/* Name / Company */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-white/60 text-xs tracking-[0.2em] font-light uppercase">
                      Naam *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-transparent border-b border-white/20 focus:border-white text-white text-sm font-light tracking-wide py-3 outline-none transition-colors duration-300"
                      placeholder="Jouw naam"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-white/60 text-xs tracking-[0.2em] font-light uppercase">
                      Bedrijfsnaam
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-transparent border-b border-white/20 focus:border-white text-white text-sm font-light tracking-wide py-3 outline-none transition-colors duration-300"
                      placeholder="Optioneel"
                    />
                  </div>
                </div>

                {/* What they want */}
                <div className="space-y-3">
                  <label className="text-white/60 text-xs tracking-[0.2em] font-light uppercase">
                    Wat heb je nodig? *
                  </label>
                  <select 
                    value={formData.projectType}
                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                    className="w-full bg-transparent border-b border-white/20 focus:border-white text-white text-sm font-light tracking-wide py-3 outline-none transition-colors duration-300 cursor-pointer"
                  >
                    <option value="" className="bg-black">
                      Selecteer type project
                    </option>
                    <option value="Website Development" className="bg-black">
                      Website Development
                    </option>
                    <option value="Webshop / E-commerce" className="bg-black">
                      Webshop / E-commerce
                    </option>
                    <option value="Portfolio Site" className="bg-black">
                      Portfolio Site
                    </option>
                    <option value="Web Applicatie" className="bg-black">
                      Web Applicatie
                    </option>
                    <option value="Branding & Design" className="bg-black">
                      Branding & Design
                    </option>
                    <option value="Redesign Bestaande Site" className="bg-black">
                      Redesign Bestaande Site
                    </option>
                    <option value="Anders / Weet ik nog niet" className="bg-black">
                      Anders / Weet ik nog niet
                    </option>
                  </select>
                </div>

                {/* Project Description */}
                <div className="space-y-3">
                  <label className="text-white/60 text-xs tracking-[0.2em] font-light uppercase">
                    Omschrijf je project *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full bg-transparent border-b border-white/20 focus:border-white text-white text-sm font-light tracking-wide py-3 outline-none transition-colors duration-300 resize-none"
                    placeholder="Vertel kort wat je voor ogen hebt. Wat moet de site kunnen? Voor wie is het bedoeld?"
                  ></textarea>
                </div>

                {/* Optional: Want Appointment */}
                <div className="pt-6 border-t border-white/10">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={wantsAppointment}
                      onChange={(e) => setWantsAppointment(e.target.checked)}
                      className="w-5 h-5 bg-transparent border-2 border-white/40 checked:bg-white checked:border-white cursor-pointer"
                    />
                    <span className="text-white/70 text-sm tracking-wide font-light group-hover:text-white transition-colors duration-300">
                      Ik wil graag een gesprek inplannen
                    </span>
                  </label>
                </div>

                {/* Conditional: Meeting Date/Time */}
                {wantsAppointment && (
                  <div className="pt-4">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-3">
                        <label className="text-white/60 text-xs tracking-[0.2em] font-light uppercase">
                          Datum
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                          className="w-full bg-transparent border border-white/20 focus:border-white text-white text-sm font-light tracking-wide p-3 outline-none transition-colors duration-300"
                        />
                      </div>

                      <div className="space-y-3">
                        <label className="text-white/60 text-xs tracking-[0.2em] font-light uppercase">
                          Tijd
                        </label>
                        <select 
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                          className="w-full bg-transparent border border-white/20 focus:border-white text-white text-sm font-light tracking-wide p-3 outline-none transition-colors duration-300 cursor-pointer"
                        >
                          <option value="" className="bg-black">
                            Selecteer
                          </option>
                          <option value="09:00" className="bg-black">09:00</option>
                          <option value="10:00" className="bg-black">10:00</option>
                          <option value="11:00" className="bg-black">11:00</option>
                          <option value="13:00" className="bg-black">13:00</option>
                          <option value="14:00" className="bg-black">14:00</option>
                          <option value="15:00" className="bg-black">15:00</option>
                          <option value="16:00" className="bg-black">16:00</option>
                          <option value="17:00" className="bg-black">17:00</option>
                        </select>
                      </div>

                      <div className="space-y-3">
                        <label className="text-white/60 text-xs tracking-[0.2em] font-light uppercase">
                          Type
                        </label>
                        <select 
                          value={formData.meetingType}
                          onChange={(e) => setFormData({...formData, meetingType: e.target.value})}
                          className="w-full bg-transparent border border-white/20 focus:border-white text-white text-sm font-light tracking-wide p-3 outline-none transition-colors duration-300 cursor-pointer"
                        >
                          <option value="online" className="bg-black">Online (Google Meet)</option>
                          <option value="fysiek" className="bg-black">Fysiek</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* WhatsApp Button */}
                <button 
                  onClick={handleWhatsAppSubmit}
                  className="group relative w-full mt-8 px-12 py-5 bg-white text-black text-sm tracking-[0.2em] font-light overflow-hidden transition-all duration-500 hover:tracking-[0.3em] hover:bg-[#25D366] hover:text-white"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    VERSTUUR VIA WHATSAPP
                  </span>
                  <span className="absolute inset-0 bg-black/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </button>
              </div>
            </div>

            {/* Info Cards */}
            <div 
              className="grid md:grid-cols-2 gap-8 mt-20 pt-16 border-t border-white/10 max-w-2xl mx-auto"
              style={{
                animation:
                  scrollY > 3400 ? `fadeInUp 0.8s ease-out 0.4s both` : "none",
              }}
            >
              <div className="space-y-3 text-center">
                <div className="text-white/40 text-xs tracking-[0.2em] font-light">
                  01
                </div>
                <p className="text-white text-sm tracking-[0.15em] font-light">
                  RESPONSTIJD
                </p>
                <div className="w-12 h-[1px] bg-white/20 mx-auto"></div>
                <p className="text-white/60 text-sm font-light leading-relaxed tracking-wide">
                  Binnen 2 uur reactie
                  <br />
                  <span className="text-white/40 text-xs">Ma-Za, 9:00-20:00</span>
                </p>
              </div>

              <div className="space-y-3 text-center">
                <div className="text-white/40 text-xs tracking-[0.2em] font-light">
                  02
                </div>
                <p className="text-white text-sm tracking-[0.15em] font-light">
                  DIRECT CONTACT
                </p>
                <div className="w-12 h-[1px] bg-white/20 mx-auto"></div>
                <p className="text-white/60 text-sm font-light leading-relaxed tracking-wide">
                  +31 6 24572572
                  <br />
                  <span className="text-white/40 text-xs">info@dynique.nl</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative bg-black py-32 lg:py-40 overflow-hidden" id="faq">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 -left-32 w-96 h-96 border border-white rounded-full"></div>
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 border border-white rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Header */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">
              <div className="space-y-6">
                <span className="text-white/40 text-xs tracking-[0.3em] font-light uppercase">
                  Veelgestelde vragen
                </span>
                <h3 className="text-4xl lg:text-6xl font-light text-white tracking-[0.1em] leading-tight">
                  DIRECT
                  <br />
                  <span className="font-extralight">ANTWOORD</span>
                </h3>
              </div>
              <div>
                <p className="text-white/60 text-base lg:text-lg font-light leading-relaxed tracking-wide">
                  Geen vraag is te gek. Staat je vraag er niet tussen? 
                  <a href="https://wa.me/31624572572" className="text-white hover:tracking-wider transition-all duration-300"> Chat direct met ons</a>.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  number: "01",
                  question: "Hoe lang duurt het voordat mijn website live staat?",
                  answer: "Gemiddeld 7-14 dagen van eerste gesprek tot live website. Simpele portfolio sites kunnen binnen enkele dagen, complexere projecten met webshops of custom functionaliteiten nemen iets langer. We werken razendsnel zonder in te boeten op kwaliteit."
                },
                {
                  number: "02",
                  question: "Krijg ik ook branding en design?",
                  answer: "Ja, absoluut. We verzorgen het volledige pakket: logo design, kleurenschema, typography, AI-gegenereerde visuals en video's. Zoals bij House of Chocolate en Stacy Kohnen - van nul tot complete merkidentiteit."
                },
                {
                  number: "03",
                  question: "Wat als ik aanpassingen wil na oplevering?",
                  answer: "Wij passen alles razendsnel voor jou aan. Dit valt binnen onze onderhoudsservice. Stuur gewoon een berichtje via WhatsApp en we regelen het direct. Van teksten tot foto's, nieuwe features tot updates - wij doen het voor je."
                },
                {
                  number: "04",
                  question: "Zijn de websites geschikt voor mobiel?",
                  answer: "100%. Alle websites zijn volledig responsive en geoptimaliseerd voor mobiel, tablet en desktop. We testen op alle devices en browsers. Mobile-first design is onze standaard - de meeste bezoekers komen immers vanaf hun telefoon."
                },
                {
                  number: "05",
                  question: "Doen jullie ook SEO en Google ranking?",
                  answer: "Ja, alle websites worden SEO-ready opgeleverd: snelle laadtijd, schema markup, sitemap, goede structuur. Voor actieve SEO-campagnes (linkbuilding, content marketing, local SEO) bieden we losse pakketten aan."
                },
                {
                  number: "06",
                  question: "Hoe zit het met hosting en onderhoud?",
                  answer: "Wij regelen alles voor je. Hosting, updates, security patches en dagelijkse back-ups zitten allemaal binnen de maandelijkse onderhoudsservice. Jij hoeft nergens aan te denken - wij houden alles draaiend."
                },
                {
                  number: "07",
                  question: "Werken jullie ook met bestaande websites?",
                  answer: "Ja, we doen ook redesigns en migraties. We kunnen je bestaande site moderniseren, sneller maken, of volledig opnieuw bouwen. SEO en content blijven behouden tijdens de migratie."
                },
                {
                  number: "08",
                  question: "Wat gebeurt er als ik niet tevreden ben?",
                  answer: "We werken met maximaal 3 revisierondes om je website perfect te krijgen. Tijdens het proces stemmen we regelmatig af. 98% van onze klanten is na de eerste revisie al tevreden. Mocht het echt niet klikken: geld terug garantie binnen de eerste week."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="group relative"
                  style={{
                    animation:
                      scrollY > 4200
                        ? `fadeInUp 0.6s ease-out ${index * 0.08}s both`
                        : "none",
                  }}
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full text-left border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 backdrop-blur-sm p-8 lg:p-10 transition-all duration-500"
                  >
                    {/* Number Badge */}
                    <div className="flex items-start gap-6 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 border border-white/20 flex items-center justify-center">
                        <span className="text-white/40 text-xs tracking-[0.2em] font-light">
                          {faq.number}
                        </span>
                      </div>
                      <div className="flex-1 pt-2">
                        <h4 className="text-lg lg:text-xl font-light text-white tracking-wide group-hover:tracking-wider transition-all duration-300">
                          {faq.question}
                        </h4>
                      </div>
                      {/* Icon */}
                      <div className="relative w-6 h-6 flex-shrink-0 mt-3">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full h-[1px] bg-white"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`w-[1px] h-full bg-white transition-all duration-300 ${openFAQ === index ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}></div>
                        </div>
                      </div>
                    </div>

                    {/* Answer */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        openFAQ === index ? 'max-h-[400px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pl-[72px] pr-10">
                        <div className="w-12 h-[1px] bg-white/20 mb-6"></div>
                        <p className="text-white/70 text-sm lg:text-base font-light leading-relaxed tracking-wide">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-20 pt-16 border-t border-white/10">
              <p className="text-white/60 text-base lg:text-lg font-light tracking-wide mb-8 max-w-2xl mx-auto">
                Nog vragen? Geen probleem. We zijn er om je te helpen.
              </p>
              <a
                href="https://wa.me/31624572572?text=Hi!%20Ik%20heb%20een%20vraag%20over..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-4 bg-white text-black hover:bg-white/90 text-sm tracking-[0.2em] font-light transition-all duration-500 hover:tracking-[0.25em]"
              >
                CHAT MET ONS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-white border-t border-black/10 py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Brand Section */}
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-3xl lg:text-4xl font-light tracking-[0.3em] text-black">
                DYNIQUE
              </h2>
              <p className="text-black/60 text-sm lg:text-base font-light leading-relaxed tracking-wide max-w-2xl mx-auto">
                Websites die werken. Razendsnel geleverd. Betaalbaar. Geen gedoe, 
                geen eindeloze trajecten. Gewoon een perfecte site die jouw 
                bezoekers overtuigt.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 pb-12 mb-12 border-b border-black/10">
              <a 
                href="tel:+31624572572"
                className="text-black/70 hover:text-black text-sm font-light tracking-wide transition-colors duration-300"
              >
                +31 6 24572572
              </a>
              <div className="hidden md:block w-[1px] h-4 bg-black/20"></div>
              <a 
                href="mailto:info@dynique.nl"
                className="text-black/70 hover:text-black text-sm font-light tracking-wide transition-colors duration-300"
              >
                info@dynique.nl
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-black/40 text-xs tracking-[0.15em] font-light">
                © 2025 DYNIQUE. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Inline Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}

