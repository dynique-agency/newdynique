"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GOLD = "#d4a574";

const DETAILS = [
  { label: "TELEFOON", value: "+31 6 24572572", href: "tel:+31624572572" },
  { label: "E-MAIL", value: "info@dynique.nl", href: "mailto:info@dynique.nl" },
  { label: "REACTIETIJD", value: "Binnen 2 uur (ma–za, 9–20u)", href: null },
  { label: "WERKGEBIED", value: "Limburg · Nederland · Internationaal", href: null },
  { label: "KVK", value: "90531264", href: null },
];

const NEXT_STEPS = [
  { n: "01", t: "Snelle reactie", d: "Je hoort binnen 2 uur van ons (ma–za). Geen wachtrij, geen ruis." },
  { n: "02", t: "Kennismaking", d: "Een kort gesprek over je doel, situatie en wat je écht nodig hebt." },
  { n: "03", t: "Helder voorstel", d: "Een plan op maat met wat we bouwen, wat het oplevert en wat het kost." },
];

const SERVICES = ["Website", "Web Applicatie", "Webshop / E-commerce", "Maatwerk software", "AI Marketing", "Drone & Video", "Combinatie / Weet ik nog niet"];

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      name: "Contact — Dynique",
      url: "https://dynique.nl/contact",
      description: "Neem contact op met Dynique voor een vrijblijvend gesprek over je project.",
    },
    {
      "@type": "LocalBusiness",
      name: "Dynique",
      url: "https://dynique.nl",
      email: "info@dynique.nl",
      telephone: "+31624572572",
      priceRange: "€€",
      taxID: "90531264",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ir. Em. Melottestraat 10",
        postalCode: "6291 HE",
        addressLocality: "Vaals",
        addressRegion: "Limburg",
        addressCountry: "NL",
      },
      areaServed: ["Limburg", "Nederland"],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
        { "@type": "ListItem", position: 2, name: "Contact", item: "https://dynique.nl/contact" },
      ],
    },
  ],
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", projectType: "", description: "" });
  const [wantsCall, setWantsCall] = useState(false);
  const [appt, setAppt] = useState({ date: "", time: "10:00", type: "online" });

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

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    let m = `Hi! Ik wil graag contact opnemen.\n\n`;
    m += `👤 Naam: ${form.name || "(niet ingevuld)"}\n`;
    if (form.company) m += `🏢 Bedrijf: ${form.company}\n`;
    if (form.phone) m += `📞 Telefoon: ${form.phone}\n`;
    if (form.email) m += `✉️ E-mail: ${form.email}\n`;
    if (form.projectType) m += `🎯 Dienst: ${form.projectType}\n`;
    if (form.description) m += `\n📋 Project:\n${form.description}\n`;
    if (wantsCall && appt.date) {
      m += `\n📅 Gewenst gesprek:\nDatum: ${appt.date}\nTijd: ${appt.time}\nType: ${appt.type === "online" ? "Online (Google Meet)" : "Fysiek"}\n`;
    }
    window.open(`https://wa.me/31624572572?text=${encodeURIComponent(m)}`, "_blank");
  };

  const inputCls = "w-full bg-black/40 border border-white/10 text-white/90 text-sm font-light tracking-wide px-4 py-3 rounded outline-none focus:border-white/30 focus:ring-2 focus:ring-[#d4a574]/70 focus:ring-offset-2 focus:ring-offset-[#0c0c0c] transition-colors duration-300 placeholder:text-white/25";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <Header variant="light" />

      <main className="relative bg-[#070707] overflow-hidden">
        <div className="absolute top-[6%] -right-40 w-[620px] h-[620px] rounded-full pointer-events-none z-0"
          style={{ background: `radial-gradient(circle, ${GOLD}1c 0%, transparent 65%)`, filter: "blur(70px)" }} />
        <div className="absolute bottom-[8%] -left-40 w-[540px] h-[540px] rounded-full pointer-events-none z-0"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 65%)", filter: "blur(70px)" }} />

        {/* ── HERO + FORM ─────────────────────────────────── */}
        <section className="relative px-6 lg:px-12 pt-36 pb-20 lg:pt-44 lg:pb-28">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "56px 56px" }} />

          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              {/* left — intro + details */}
              <div className="lg:col-span-5">
                <div className="hv hv-1 flex items-center gap-3 mb-8">
                  <div className="w-12 h-px" style={{ background: GOLD }} />
                  <p className="text-white/45 text-[10px] tracking-[0.5em] font-light">CONTACT</p>
                </div>
                <h1 className="hv hv-2 text-[clamp(40px,6.5vw,80px)] font-extralight text-white tracking-[0.02em] leading-[1.04] mb-7">
                  Laten we
                  <br />
                  <span className="italic" style={{ color: GOLD }}>kennismaken.</span>
                </h1>
                <p className="hv hv-3 text-white/55 text-lg font-extralight tracking-wide leading-relaxed max-w-md mb-10">
                  Vertel ons over je project. We reageren altijd binnen 24 uur — meestal veel eerder.
                </p>

                <div className="hv hv-3 space-y-4 pt-8 border-t border-white/[0.08]">
                  {DETAILS.map((d) => (
                    <div key={d.label} className="flex items-baseline gap-4">
                      <span className="text-white/55 text-[9px] tracking-[0.35em] font-light flex-shrink-0 w-28">{d.label}</span>
                      {d.href ? (
                        <a href={d.href} className="text-white text-sm font-light tracking-wide hover:text-white/60 transition-colors duration-200">{d.value}</a>
                      ) : (
                        <span className="text-white/60 text-sm font-light tracking-wide">{d.value}</span>
                      )}
                    </div>
                  ))}
                </div>

                <a href="https://wa.me/31624572572" target="_blank" rel="noopener noreferrer"
                  className="hv hv-4 mt-8 inline-flex items-center gap-3 text-white/50 text-[10px] tracking-[0.3em] font-light hover:text-white transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Of stuur direct een WhatsApp
                </a>
              </div>

              {/* right — form */}
              <div className="lg:col-span-7 hv hv-4">
                <form onSubmit={submit}
                  className="relative p-8 lg:p-10 rounded-lg border border-white/[0.1] bg-white/[0.015]"
                  style={{ boxShadow: `0 40px 90px -50px ${GOLD}55` }}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-white/55 text-[10px] tracking-[0.3em] font-light mb-2.5">NAAM *</label>
                      <input id="contact-name" type="text" required value={form.name} onChange={set("name")} placeholder="Jouw naam" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="block text-white/55 text-[10px] tracking-[0.3em] font-light mb-2.5">BEDRIJF</label>
                      <input id="contact-company" type="text" value={form.company} onChange={set("company")} placeholder="Optioneel" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-white/55 text-[10px] tracking-[0.3em] font-light mb-2.5">TELEFOON</label>
                      <input id="contact-phone" type="tel" value={form.phone} onChange={set("phone")} placeholder="06 ..." className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-white/55 text-[10px] tracking-[0.3em] font-light mb-2.5">E-MAIL</label>
                      <input id="contact-email" type="email" value={form.email} onChange={set("email")} placeholder="naam@bedrijf.nl" className={inputCls} />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="contact-project-type" className="block text-white/55 text-[10px] tracking-[0.3em] font-light mb-2.5">WAT HEB JE NODIG? *</label>
                    <select id="contact-project-type" required value={form.projectType} onChange={set("projectType")}
                      className={`${inputCls} cursor-pointer appearance-none`}>
                      <option value="" className="bg-[#0c0c0c]">Selecteer een dienst</option>
                      {SERVICES.map((s) => <option key={s} value={s} className="bg-[#0c0c0c]">{s}</option>)}
                    </select>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="contact-description" className="block text-white/55 text-[10px] tracking-[0.3em] font-light mb-2.5">OMSCHRIJF JE PROJECT *</label>
                    <textarea id="contact-description" required rows={4} value={form.description} onChange={set("description")}
                      placeholder="Wat wil je bereiken? Voor wie is het bedoeld? Hoe snel wil je live?"
                      className={`${inputCls} resize-none`} />
                  </div>

                  {/* appointment toggle */}
                  <div className="mt-6 pt-6 border-t border-white/[0.08]">
                    <label htmlFor="contact-wants-call" className="flex items-center gap-3 cursor-pointer group">
                      <input id="contact-wants-call" type="checkbox" checked={wantsCall} onChange={(e) => setWantsCall(e.target.checked)}
                        className="w-4 h-4 cursor-pointer" style={{ accentColor: GOLD }} />
                      <span className="text-white/55 text-sm font-light tracking-wide group-hover:text-white transition-colors duration-300">
                        Ik wil graag een gesprek inplannen
                      </span>
                    </label>

                    {wantsCall && (
                      <div className="grid sm:grid-cols-3 gap-4 mt-5">
                        <div>
                          <label htmlFor="contact-appt-date" className="block text-white/55 text-[10px] tracking-[0.3em] font-light mb-2.5">DATUM</label>
                          <input id="contact-appt-date" type="date" value={appt.date} onChange={(e) => setAppt({ ...appt, date: e.target.value })} className={inputCls} />
                        </div>
                        <div>
                          <label htmlFor="contact-appt-time" className="block text-white/55 text-[10px] tracking-[0.3em] font-light mb-2.5">TIJD</label>
                          <select id="contact-appt-time" value={appt.time} onChange={(e) => setAppt({ ...appt, time: e.target.value })} className={`${inputCls} cursor-pointer appearance-none`}>
                            {["09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"].map((t) => <option key={t} value={t} className="bg-[#0c0c0c]">{t}</option>)}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="contact-appt-type" className="block text-white/55 text-[10px] tracking-[0.3em] font-light mb-2.5">TYPE</label>
                          <select id="contact-appt-type" value={appt.type} onChange={(e) => setAppt({ ...appt, type: e.target.value })} className={`${inputCls} cursor-pointer appearance-none`}>
                            <option value="online" className="bg-[#0c0c0c]">Online (Google Meet)</option>
                            <option value="fysiek" className="bg-[#0c0c0c]">Fysiek</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>

                  <button type="submit"
                    className="group mt-7 w-full inline-flex items-center justify-center gap-3 px-10 py-4 text-black text-[11px] tracking-[0.25em] font-medium transition-all duration-300 rounded"
                    style={{ background: GOLD }}>
                    VERSTUUR VIA WHATSAPP
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </button>
                  <p className="mt-4 text-center text-white/55 text-xs font-light tracking-wide">
                    Je bericht opent voorgevuld in WhatsApp — jij verstuurt zelf.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ── WAT GEBEURT ER HIERNA ───────────────────────── */}
        <section className="relative px-6 lg:px-12 py-20 lg:py-28 border-t border-white/[0.06]">
          <div className="container mx-auto">
            <div className="max-w-3xl anim mb-12">
              <p className="text-[10px] tracking-[0.5em] font-light mb-5" style={{ color: GOLD }}>WAT GEBEURT ER HIERNA</p>
              <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.12]">
                Geen zwart gat.
                <span className="text-white/45 italic"> Gewoon snel duidelijkheid.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]">
              {NEXT_STEPS.map((s, i) => (
                <div key={s.n} className="bg-[#070707] p-8 lg:p-9 anim group/step relative overflow-hidden" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="absolute top-0 left-0 h-px w-0 group-hover/step:w-full transition-all duration-700" style={{ background: GOLD }} />
                  <div className="flex items-baseline gap-3 mb-5">
                    <span className="text-2xl font-extralight" style={{ color: GOLD }}>{s.n}</span>
                    <div className="flex-1 h-px bg-white/[0.08]" />
                  </div>
                  <h3 className="text-white text-[13px] tracking-[0.2em] font-light mb-2.5 uppercase">{s.t}</h3>
                  <p className="text-white/50 text-sm font-light leading-relaxed tracking-wide">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .anim { opacity: 0; transform: translateY(32px); transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1); will-change: opacity, transform; }
        .anim.animate-in { opacity: 1; transform: translateY(0); }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: none; } }
        .hv { opacity: 0; animation: fadeUp 0.95s cubic-bezier(0.16,1,0.3,1) forwards; }
        .hv-1 { animation-delay: 0.05s; } .hv-2 { animation-delay: 0.18s; } .hv-3 { animation-delay: 0.32s; } .hv-4 { animation-delay: 0.46s; }
        @media (prefers-reduced-motion: reduce) {
          .anim { opacity: 1; transform: none; transition: none; }
          .hv { opacity: 1; animation: none; }
        }
      `}</style>
    </>
  );
}
