"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Vervanging() {
  const [wantsAppointment, setWantsAppointment] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    description: '',
    date: '',
    time: '',
    meetingType: 'online'
  });


  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const textElements = document.querySelectorAll('.animate-on-scroll');
    textElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleWhatsAppSubmit = () => {
    let message = `Hi! Ik wil mijn verouderde website vervangen.\n\n`;
    message += `📝 *Naam:* ${formData.name || '(niet ingevuld)'}\n`;
    if (formData.company) message += `🏢 *Bedrijf:* ${formData.company}\n`;
    message += `\n📋 *Huidige situatie:*\n${formData.description || '(niet ingevuld)'}\n`;

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
    <main className="relative bg-[#050505]">
      {/* Header */}
      <Header variant="light" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#050505] overflow-hidden">
        {/* Gold glow */}
        <div aria-hidden className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none opacity-60"
             style={{ background: "radial-gradient(circle, rgba(212,165,116,0.16) 0%, transparent 65%)" }}></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1.5 bg-[#d4a574]/10 border border-[#d4a574]/25 rounded-full animate-on-scroll">
              <span className="text-[#d4a574] text-[10px] tracking-[0.3em] font-light uppercase">Website-check</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-[0.15em] leading-tight mb-6 animate-on-scroll delay-100">
              IS JOUW WEBSITE
              <br />
              <span className="font-extralight text-[#d4a574]">NOG VAN DEZE TIJD?</span>
            </h1>
            <p className="text-white/60 text-sm lg:text-base font-light tracking-wide mb-6 animate-on-scroll delay-200">
              Drie vragen die het antwoord meestal al geven.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll delay-300">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 px-10 py-4 text-black text-sm tracking-[0.2em] font-light hover:tracking-[0.25em] hover:px-12 transition-all duration-500 overflow-hidden"
                style={{ background: "#d4a574" }}
              >
                <span className="relative z-10">PLAN EEN GESPREK</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#problems"
                className="inline-flex items-center gap-3 px-10 py-4 bg-white/5 backdrop-blur-sm border border-white/15 text-white text-sm tracking-[0.2em] font-light hover:bg-white/10 hover:border-[#d4a574]/40 hover:tracking-[0.25em] transition-all duration-500"
              >
                ZIE HET PROBLEEM
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="relative py-20 lg:py-32 bg-[#0a0a0a]" id="problems">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-light text-white tracking-[0.15em] leading-tight mb-4 animate-on-scroll">
                HET PROBLEEM
              </h2>
              <p className="text-white/60 text-base lg:text-lg font-light tracking-wide animate-on-scroll delay-100">
                Herken je dit?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  question: "Werkt je site nog wel goed op mobiel?",
                  description: "Een groeiend deel van je bezoekers is onderweg. Hapert de site daar, dan ben je ze al kwijt.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  ),
                  color: "from-[#d4a574] to-[#b8894f]"
                },
                {
                  question: "Laadt hij nog snel genoeg?",
                  description: "Traagheid is meetbaar — en bepaalt direct of iemand blijft of wegklikt.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  color: "from-[#e0b989] to-[#d4a574]"
                },
                {
                  question: "Krijg je überhaupt nog serieuze aanvragen?",
                  description: "Een site die niet converteert, is decoratie — geen bedrijfsmiddel.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>
                  ),
                  color: "from-[#c9a06a] to-[#d4a574]"
                },
                {
                  question: "Duurt een aanpassing bij je huidige bureau weken?",
                  description: "Trage doorlooptijden zijn een keuze van je bureau — niet een gegeven.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  ),
                  color: "from-[#d4a574] to-[#a67c4a]"
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative p-5 lg:p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#d4a574]/40 hover:bg-white/10 transition-all duration-500 overflow-hidden animate-on-scroll"
                  style={{
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`}></div>

                  <div className="relative flex items-start gap-3">
                    <div className={`mt-0.5 p-2 rounded-lg bg-gradient-to-br ${item.color} bg-opacity-10`}>
                      <div className="text-[#d4a574] group-hover:text-[#e0b989] transition-colors duration-500">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm lg:text-base font-light tracking-wide mb-1">
                        {item.question}
                      </p>
                      <p className="text-white/50 text-xs font-light tracking-wide">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-20 lg:py-32 bg-[#050505] overflow-hidden">
        <div aria-hidden className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none opacity-40"
             style={{ background: "radial-gradient(circle, rgba(212,165,116,0.12) 0%, transparent 65%)" }}></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-light text-white tracking-[0.15em] leading-tight mb-8 animate-on-scroll">
              DE OPLOSSING
            </h2>
            <p className="text-white/80 text-lg lg:text-xl font-light tracking-wide leading-relaxed mb-12 max-w-3xl mx-auto animate-on-scroll delay-100">
              Een nieuwe website, gebouwd op moderne technologie en een doordachte structuur. Snel, stabiel op elk device, en binnen <span className="text-white">7-14 dagen online</span>.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { title: "SNEL", description: "7-14 dagen van gesprek tot live" },
                { title: "ZORGVULDIG", description: "Gestructureerde migratie die je bestaande content en SEO-waarde beschermt" },
                { title: "MODERN", description: "Actuele technologie, gebouwd om mee te groeien" },
              ].map((item, index) => (
                <div key={index} className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#d4a574]/40 transition-all duration-500 animate-on-scroll" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <h3 className="text-xl font-light tracking-[0.2em] mb-3 text-white">{item.title}</h3>
                  <p className="text-white/60 text-sm font-light tracking-wide">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll delay-200">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 px-10 py-4 text-black text-sm tracking-[0.2em] font-light hover:tracking-[0.25em] hover:px-12 transition-all duration-500 overflow-hidden"
                style={{ background: "#d4a574" }}
              >
                <span className="relative z-10">VERVANG JOUW WEBSITE NU</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-10 py-4 bg-white/5 backdrop-blur-sm border border-white/15 text-white text-sm tracking-[0.2em] font-light hover:bg-white/10 hover:border-[#d4a574]/40 hover:tracking-[0.25em] transition-all duration-500"
              >
                DIRECT CONTACT
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="relative py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-light text-white tracking-[0.15em] leading-tight mb-4 animate-on-scroll">
                ANDEREN GINGEN JE VOOR
              </h2>
              <p className="text-white/60 text-base lg:text-lg font-light tracking-wide animate-on-scroll delay-100">
                Van verouderde site naar moderne website in 7-14 dagen
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Tom Creemers",
                  company: "Creemers Exclusive",
                  quote: "Binnen drie dagen live. Geen enkele professionele foto, wel een strakke deadline. Dynique leverde AI-visuals die ons merk premium maakten en de eerste aanvragen kwamen binnen een week binnen.",
                  result: "Eerste aanvragen binnen een week"
                },
                {
                  name: "Wally & Roger",
                  company: "IJssalon Italia",
                  quote: "Ze begrepen onze familiegeschiedenis direct. Een ijssalon online zetten klinkt eenvoudig, maar het gevoel moest kloppen. Dynique ving precies de juiste sfeer. De salon is drukker dan ooit.",
                  result: "Salon drukker dan ooit"
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-8 bg-white/[0.03] border border-white/10 hover:border-white/25 transition-all duration-500 animate-on-scroll"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <p className="text-white/80 text-base font-light leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white text-sm tracking-[0.15em] font-light">{item.name}</p>
                      <p className="text-white/40 text-xs tracking-wide font-light">{item.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#d4a574] text-xs tracking-wide font-light">{item.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 lg:py-32 bg-[#050505] text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-light tracking-[0.15em] leading-tight mb-4 animate-on-scroll">
                ZO GAAT HET
              </h2>
              <p className="text-white/60 text-base lg:text-lg font-light tracking-wide animate-on-scroll delay-100">
                7-14 dagen van gesprek tot live website
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "GESPREK",
                  description: "We bespreken wat er niet werkt aan je huidige site en wat je nodig hebt. Direct duidelijk, zonder omhaal.",
                  duration: "30 min"
                },
                {
                  step: "02",
                  title: "ONTWERP & BOUW",
                  description: "We bouwen je nieuwe website: modern, snel, correct op elk device. Tussentijds houden we je op de hoogte.",
                  duration: "5-10 dagen"
                },
                {
                  step: "03",
                  title: "FEEDBACK & FINETUNING",
                  description: "Je bekijkt het resultaat. Aanpassingen verwerken we direct, zonder ruis.",
                  duration: "1-2 dagen"
                },
                {
                  step: "04",
                  title: "LIVE",
                  description: "Je nieuwe website gaat online, de oude gaat offline. We controleren dat alles doet wat is afgesproken.",
                  duration: "Direct"
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-8 items-start p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#d4a574]/30 transition-all duration-500 animate-on-scroll"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl font-extralight text-white/15 flex-shrink-0 w-16">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-xl font-light tracking-[0.2em]">{item.title}</h3>
                      <span className="text-white/40 text-xs tracking-wide">{item.duration}</span>
                    </div>
                    <p className="text-white/70 text-sm font-light leading-relaxed tracking-wide">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="relative py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-light text-white tracking-[0.15em] leading-tight mb-4 animate-on-scroll">
                WAT JE KRIJGT
              </h2>
              <p className="text-white/60 text-base lg:text-lg font-light tracking-wide animate-on-scroll delay-100">
                Alles wat je nodig hebt voor een website die werkt
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "RAZENDSNEL", description: "Laadt in <2 seconden" },
                { title: "MOBIEL PERFECT", description: "Werkt perfect op elk device" },
                { title: "SEO BEHOUDEN", description: "Vindbaarheid en content blijven intact tijdens de migratie" },
                { title: "CONVERSIEGERICHT", description: "Bezoekers worden serieuze aanvragen" },
                { title: "EENVOUDIG BEHEER", description: "Wij passen aan wat nodig is" },
                { title: "TECHNISCH ONDERBOUWD", description: "Elke keuze beargumenteerd, niet toevallig" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/[0.03] border border-white/10 hover:border-[#d4a574]/30 transition-all duration-500 animate-on-scroll"
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  <h3 className="text-lg font-light text-white tracking-[0.15em] mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm font-light tracking-wide">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 lg:py-32 bg-[#050505] text-white" id="contact">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-5xl font-light tracking-[0.15em] leading-tight animate-on-scroll">
                VERVANG JOUW WEBSITE
              </h2>
              <p className="text-white/60 text-base lg:text-lg font-light tracking-wide animate-on-scroll delay-100">
                Vul het formulier in en stuur direct via WhatsApp
              </p>
              <p className="text-white/40 text-xs font-light tracking-wide animate-on-scroll delay-100">
                We werken vanuit Limburg, voor opdrachtgevers in heel Nederland en België.
              </p>
            </div>

            <div className="space-y-6 animate-on-scroll delay-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="verv-name" className="text-white/60 text-xs tracking-[0.2em] font-light uppercase">
                    Naam *
                  </label>
                  <input
                    id="verv-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b border-white/20 focus:border-white text-white text-sm font-light tracking-wide py-3 outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[#d4a574]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    placeholder="Jouw naam"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="verv-company" className="text-white/60 text-xs tracking-[0.2em] font-light uppercase">
                    Bedrijfsnaam
                  </label>
                  <input
                    id="verv-company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full bg-transparent border-b border-white/20 focus:border-white text-white text-sm font-light tracking-wide py-3 outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[#d4a574]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    placeholder="Optioneel"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="verv-description" className="text-white/60 text-xs tracking-[0.2em] font-light uppercase">
                  Wat werkt er niet aan je huidige website? *
                </label>
                <textarea
                  id="verv-description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 focus:border-white text-white text-sm font-light tracking-wide py-3 outline-none transition-colors duration-300 resize-none focus-visible:ring-2 focus-visible:ring-[#d4a574]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  placeholder="Bijvoorbeeld: niet mobiel-vriendelijk, laadt te langzaam, geen conversies..."
                />
              </div>

              <div className="flex items-center gap-3 pt-4">
                <input
                  type="checkbox"
                  id="appointment"
                  checked={wantsAppointment}
                  onChange={(e) => setWantsAppointment(e.target.checked)}
                  className="w-4 h-4 bg-transparent border-white/30"
                  style={{ accentColor: "#d4a574" }}
                />
                <label htmlFor="appointment" className="text-white/70 text-sm font-light tracking-wide cursor-pointer">
                  Ik wil een gesprek inplannen
                </label>
              </div>

              {wantsAppointment && (
                <div className="space-y-6 pt-4 border-t border-white/10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label htmlFor="verv-date" className="text-white/60 text-xs tracking-[0.2em] font-light uppercase">
                        Gewenste datum
                      </label>
                      <input
                        id="verv-date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full bg-transparent border-b border-white/20 focus:border-white text-white text-sm font-light tracking-wide py-3 outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[#d4a574]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                      />
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="verv-time" className="text-white/60 text-xs tracking-[0.2em] font-light uppercase">
                        Gewenste tijd
                      </label>
                      <input
                        id="verv-time"
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                        className="w-full bg-transparent border-b border-white/20 focus:border-white text-white text-sm font-light tracking-wide py-3 outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[#d4a574]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-white/60 text-xs tracking-[0.2em] font-light uppercase">
                      Gesprekstype
                    </label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        aria-pressed={formData.meetingType === 'online'}
                        onClick={() => setFormData({...formData, meetingType: 'online'})}
                        className={`px-6 py-3 text-sm font-light tracking-wide transition-all duration-300 ${
                          formData.meetingType === 'online'
                            ? 'bg-[#d4a574] text-black'
                            : 'bg-white/10 text-white/70 hover:bg-white/20'
                        }`}
                      >
                        Online (Google Meet)
                      </button>
                      <button
                        type="button"
                        aria-pressed={formData.meetingType === 'fysiek'}
                        onClick={() => setFormData({...formData, meetingType: 'fysiek'})}
                        className={`px-6 py-3 text-sm font-light tracking-wide transition-all duration-300 ${
                          formData.meetingType === 'fysiek'
                            ? 'bg-[#d4a574] text-black'
                            : 'bg-white/10 text-white/70 hover:bg-white/20'
                        }`}
                      >
                        Fysiek (Limburg)
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <button
                onClick={handleWhatsAppSubmit}
                className="w-full mt-8 px-12 py-5 text-black text-sm tracking-[0.2em] font-light hover:tracking-[0.25em] transition-all duration-500 flex items-center justify-center gap-3"
                style={{ background: "#d4a574" }}
              >
                VERSTUUR VIA WHATSAPP
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

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
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </main>
  );
}
