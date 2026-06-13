"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EersteWebsite() {
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
    let message = `Hi! Ik wil mijn eerste website laten maken.\n\n`;
    message += `📝 *Naam:* ${formData.name || '(niet ingevuld)'}\n`;
    if (formData.company) message += `🏢 *Bedrijf:* ${formData.company}\n`;
    message += `\n📋 *Wat ik nodig heb:*\n${formData.description || '(niet ingevuld)'}\n`;
    
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
    <main className="relative bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/80">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/20 to-transparent"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full animate-on-scroll">
              <span className="text-emerald-600 text-[10px] tracking-[0.3em] font-light uppercase">Start Vandaag</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-black tracking-[0.15em] leading-tight mb-6 animate-on-scroll delay-100">
              JOUW EERSTE
              <br />
              <span className="font-extralight bg-gradient-to-r from-black to-emerald-600 bg-clip-text text-transparent">WEBSITE?</span>
            </h1>
            <p className="text-black/60 text-sm lg:text-base font-light tracking-wide mb-6 animate-on-scroll delay-200">
              We snappen dat het overweldigend kan zijn.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll delay-300">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm tracking-[0.2em] font-light hover:tracking-[0.25em] hover:px-12 transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10">START VANDAAG</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
              <a
                href="#doubts"
                className="inline-flex items-center gap-3 px-10 py-4 bg-emerald-50/50 backdrop-blur-sm border border-emerald-200/50 text-black text-sm tracking-[0.2em] font-light hover:bg-emerald-100/50 hover:border-emerald-500/50 hover:tracking-[0.25em] transition-all duration-500"
              >
                BEANTWOORD VRAGEN
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Doubts Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/80" id="doubts">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/20 to-transparent"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-light text-black tracking-[0.15em] leading-tight mb-3 animate-on-scroll">
                WE SNAPPEN HET
              </h2>
              <p className="text-black/60 text-sm lg:text-base font-light tracking-wide animate-on-scroll delay-100">
                Deze vragen horen we vaak
              </p>
            </div>

            <div className="space-y-4 mb-10">
              {[
                {
                  question: "Wat moet erop staan?",
                  answer: "We helpen je. Jouw verhaal, wat je doet, hoe klanten je kunnen bereiken. Simpel.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  color: "from-emerald-500 to-teal-500"
                },
                {
                  question: "Moet het meteen perfect zijn?",
                  answer: "Nee. Start met een goede basis. Aanpassen kan altijd. Beter online dan perfect in je hoofd.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  color: "from-teal-500 to-cyan-500"
                },
                {
                  question: "Is het niet te duur?",
                  answer: "Veel betaalbaarder dan je denkt. En het verdient zich direct terug via aanvragen.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  color: "from-emerald-500 to-green-500"
                },
                {
                  question: "Wat als ik geen foto's heb?",
                  answer: "Geen probleem. We maken ze met AI. Ziet er premium uit. Klaar in dagen.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                  color: "from-cyan-500 to-emerald-500"
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative p-5 lg:p-6 bg-white border border-emerald-100/50 hover:border-emerald-500/30 hover:bg-emerald-50/30 transition-all duration-500 overflow-hidden animate-on-scroll"
                  style={{
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                        <div className="text-white">
                          {item.icon}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-black text-sm lg:text-base font-light tracking-wide mb-2">
                        {item.question}
                      </p>
                      <p className="text-black/60 text-xs lg:text-sm font-light tracking-wide leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/80">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/20 to-transparent"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-light text-black tracking-[0.15em] leading-tight mb-8 animate-on-scroll">
              WAAROM NU?
            </h2>
            <p className="text-black/80 text-lg lg:text-xl font-light tracking-wide leading-relaxed mb-16 max-w-3xl mx-auto animate-on-scroll delay-100">
              Elke dag dat je wacht, missen potentiële klanten je online. 
              Ze zoeken wat jij aanbiedt. Maar ze vinden je niet.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  stat: "70%",
                  description: "Van je klanten zoekt online eerst voordat ze contact opnemen"
                },
                {
                  stat: "24/7",
                  description: "Je website werkt. Ook als jij slaapt. Altijd bereikbaar."
                },
                {
                  stat: "10x",
                  description: "Meer vertrouwen. Een professionele website geeft instant geloofwaardigheid."
                },
              ].map((item, index) => (
                <div key={index} className="p-8 bg-white border border-emerald-100/50 hover:border-emerald-500/30 transition-all duration-500 animate-on-scroll" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="text-4xl lg:text-5xl font-extralight mb-4 text-black">{item.stat}</div>
                  <p className="text-black/60 text-sm font-light leading-relaxed tracking-wide">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll delay-200">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm tracking-[0.2em] font-light hover:tracking-[0.25em] hover:px-12 transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10">START JOUW WEBSITE</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-10 py-4 bg-emerald-50/50 backdrop-blur-sm border border-emerald-200/50 text-black text-sm tracking-[0.2em] font-light hover:bg-emerald-100/50 hover:border-emerald-500/50 hover:tracking-[0.25em] transition-all duration-500"
              >
                DIRECT CONTACT
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="relative py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-light text-black tracking-[0.15em] leading-tight mb-4 animate-on-scroll">
                VAN NUL TOT WEBSITE
              </h2>
              <p className="text-black/60 text-base lg:text-lg font-light tracking-wide animate-on-scroll delay-100">
                Anderen startten ook zonder ervaring
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Stacy Kohnen",
                  company: "Zangeres",
                  quote: "Ik had geen idee waar te beginnen. Dynique hielp me met alles: van branding tot booking systeem. Binnen een week stond ik online met een professionele website.",
                  result: "Online binnen 1 week"
                },
                {
                  name: "House of Chocolate",
                  company: "E-commerce",
                  quote: "Van nul tot complete branding en webshop. Geen logo, geen foto's, geen probleem. Dynique regelde alles met AI. Nu verkopen we online.",
                  result: "Complete branding + webshop"
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-8 bg-black/[0.02] border border-black/5 hover:border-black/20 transition-all duration-500 animate-on-scroll"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <p className="text-black/80 text-base font-light leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-black text-sm tracking-[0.15em] font-light">{item.name}</p>
                      <p className="text-black/40 text-xs tracking-wide font-light">{item.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-black/60 text-xs tracking-wide font-light">{item.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/80">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/20 to-transparent"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-light text-black tracking-[0.15em] leading-tight mb-4 animate-on-scroll">
                HET PROCES
              </h2>
              <p className="text-black/60 text-base lg:text-lg font-light tracking-wide animate-on-scroll delay-100">
                7-14 dagen van gesprek tot live website
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "GESPREK",
                  description: "We bespreken wat je doet, wat je nodig hebt, en wat je wilt bereiken. Geen technisch jargon. Gewoon een gesprek.",
                  duration: "30 min"
                },
                {
                  step: "02",
                  title: "BRANDING & DESIGN",
                  description: "Geen logo? Geen foto's? Geen probleem. We maken alles met AI. Logo, visuals, kleuren - alles wordt geregeld.",
                  duration: "2-3 dagen"
                },
                {
                  step: "03",
                  title: "BOUW & ONTWIKKELING",
                  description: "We bouwen je website. Modern, snel, perfect op alle devices. Jij hoeft niks te doen, wij regelen alles.",
                  duration: "5-8 dagen"
                },
                {
                  step: "04",
                  title: "LIVE & TRAINING",
                  description: "Je website gaat online. We geven je een korte training. Je begrijpt hoe alles werkt. Klaar om klanten te krijgen.",
                  duration: "1 dag"
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-8 items-start p-6 bg-white border border-emerald-100/50 hover:border-emerald-500/30 transition-all duration-500 animate-on-scroll"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl font-extralight text-black/10 flex-shrink-0 w-16">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-xl font-light tracking-[0.2em] text-black">{item.title}</h3>
                      <span className="text-black/40 text-xs tracking-wide">{item.duration}</span>
                    </div>
                    <p className="text-black/70 text-sm font-light leading-relaxed tracking-wide">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/80">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/20 to-transparent"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-light text-black tracking-[0.15em] leading-tight mb-4 animate-on-scroll">
                WAT JE KRIJGT
              </h2>
              <p className="text-black/60 text-base lg:text-lg font-light tracking-wide animate-on-scroll delay-100">
                Alles wat je nodig hebt voor je eerste website
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "COMPLETE BRANDING", description: "Logo, kleuren, typografie" },
                { title: "AI VISUALS", description: "Professionele foto's en video's" },
                { title: "RAZENDSNEL", description: "Laadt in <2 seconden" },
                { title: "MOBIEL PERFECT", description: "Werkt perfect op alle devices" },
                { title: "SEO OPTIMAAL", description: "Gevonden worden op Google" },
                { title: "CONTACT FORMULIER", description: "Bezoekers worden klanten" },
                { title: "SOCIAL MEDIA", description: "Koppeling met je accounts" },
                { title: "EENVOUDIG BEHEER", description: "Wij passen alles aan" },
                { title: "TRAINING", description: "Je begrijpt hoe alles werkt" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-white border border-emerald-100/50 hover:border-emerald-500/30 hover:bg-emerald-50/30 transition-all duration-500 animate-on-scroll"
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  <h3 className="text-lg font-light tracking-[0.15em] mb-2 text-black">{item.title}</h3>
                  <p className="text-black/60 text-sm font-light tracking-wide">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 lg:py-32 bg-white" id="contact">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-3xl lg:text-5xl font-light text-black tracking-[0.15em] leading-tight animate-on-scroll">
                START JOUW WEBSITE
              </h2>
              <p className="text-black/60 text-base lg:text-lg font-light tracking-wide animate-on-scroll delay-100">
                Vul het formulier in en stuur direct via WhatsApp
              </p>
            </div>

            <div className="space-y-6 animate-on-scroll delay-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-black/60 text-xs tracking-[0.2em] font-light uppercase">
                    Naam *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b border-black/20 focus:border-black text-black text-sm font-light tracking-wide py-3 outline-none transition-colors duration-300"
                    placeholder="Jouw naam"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-black/60 text-xs tracking-[0.2em] font-light uppercase">
                    Bedrijfsnaam
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full bg-transparent border-b border-black/20 focus:border-black text-black text-sm font-light tracking-wide py-3 outline-none transition-colors duration-300"
                    placeholder="Optioneel"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-black/60 text-xs tracking-[0.2em] font-light uppercase">
                  Wat wil je met je website bereiken? *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={4}
                  className="w-full bg-transparent border-b border-black/20 focus:border-black text-black text-sm font-light tracking-wide py-3 outline-none transition-colors duration-300 resize-none"
                  placeholder="Bijvoorbeeld: klanten werven, producten verkopen, portfolio tonen..."
                />
              </div>

              <div className="flex items-center gap-3 pt-4">
                <input
                  type="checkbox"
                  id="appointment"
                  checked={wantsAppointment}
                  onChange={(e) => setWantsAppointment(e.target.checked)}
                  className="w-4 h-4 bg-transparent border-black/30 text-black focus:ring-black/50"
                />
                <label htmlFor="appointment" className="text-black/70 text-sm font-light tracking-wide cursor-pointer">
                  Ik wil een gesprek inplannen
                </label>
              </div>

              {wantsAppointment && (
                <div className="space-y-6 pt-4 border-t border-black/10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-black/60 text-xs tracking-[0.2em] font-light uppercase">
                        Gewenste datum
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full bg-transparent border-b border-black/20 focus:border-black text-black text-sm font-light tracking-wide py-3 outline-none transition-colors duration-300"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-black/60 text-xs tracking-[0.2em] font-light uppercase">
                        Gewenste tijd
                      </label>
                      <input
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                        className="w-full bg-transparent border-b border-black/20 focus:border-black text-black text-sm font-light tracking-wide py-3 outline-none transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-black/60 text-xs tracking-[0.2em] font-light uppercase">
                      Gesprekstype
                    </label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, meetingType: 'online'})}
                        className={`px-6 py-3 text-sm font-light tracking-wide transition-all duration-300 ${
                          formData.meetingType === 'online'
                            ? 'bg-black text-white'
                            : 'bg-black/5 text-black/70 hover:bg-black/10'
                        }`}
                      >
                        Online (Google Meet)
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, meetingType: 'fysiek'})}
                        className={`px-6 py-3 text-sm font-light tracking-wide transition-all duration-300 ${
                          formData.meetingType === 'fysiek'
                            ? 'bg-black text-white'
                            : 'bg-black/5 text-black/70 hover:bg-black/10'
                        }`}
                      >
                        Fysiek (Amsterdam)
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <button
                onClick={handleWhatsAppSubmit}
                className="w-full mt-8 px-12 py-5 bg-black text-white text-sm tracking-[0.2em] font-light hover:tracking-[0.25em] transition-all duration-500 flex items-center justify-center gap-3"
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

