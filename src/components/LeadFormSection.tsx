"use client";

import { useState } from "react";
import { Field } from "@/components/processen/Visuals";
import { openWhatsApp } from "@/lib/openWhatsApp";

// Herbruikbare "GRATIS & VRIJBLIJVEND" leadformulier-sectie, zelfde visuele patroon en
// WhatsApp-flow als SectorTemplate.tsx en diensten/processen/page.tsx. `openingLine` wordt
// de eerste regel van het WhatsApp-bericht, zodat elke pagina zijn eigen context meegeeft.
export default function LeadFormSection({
  accent,
  openingLine,
  messagePrompt = "Waar loopt het vast? (optioneel)",
}: {
  accent: string;
  openingLine: string;
  messagePrompt?: string;
}) {
  const [form, setForm] = useState({ name: "", company: "", phone: "", message: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    let m = `${openingLine}\n\n`;
    m += `👤 Naam: ${form.name || "(niet ingevuld)"}\n`;
    if (form.company) m += `🏢 Bedrijf: ${form.company}\n`;
    if (form.phone) m += `📞 Telefoon: ${form.phone}\n`;
    if (form.message) m += `\n📋 ${messagePrompt}\n${form.message}\n`;
    openWhatsApp(m);
  };

  return (
    <section id="analyse" className="relative px-6 lg:px-12 py-20 lg:py-28 border-t border-white/[0.06] scroll-mt-24">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 80% 20%, ${accent}14 0%, transparent 55%)` }} />
      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 anim">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px" style={{ background: accent }} />
              <p className="text-white/45 text-[10px] tracking-[0.5em] font-light">GRATIS &amp; VRIJBLIJVEND</p>
            </div>
            <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.1] mb-6">
              Laat je gegevens achter.
              <br />
              <span className="italic" style={{ color: accent }}>Wij komen langs.</span>
            </h2>
            <p className="text-white/55 text-base font-light leading-relaxed tracking-wide mb-10 max-w-md">
              We nemen contact met je op om een gratis procesanalyse op locatie in te plannen.
              Geen verplichtingen, geen verkooppraatje, gewoon kijken wat slimmer kan.
            </p>
            <div className="space-y-4">
              {["We komen naar jouw locatie toe", "Concreet inzicht in tijd- en geldverlies", "Een helder voorstel op maat, vrijblijvend"].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke={accent} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/65 text-sm font-light tracking-wide">{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 anim delay-1">
            <form onSubmit={submit}
              className="relative p-8 lg:p-10 rounded-lg border border-white/[0.1] bg-white/[0.015]"
              style={{ boxShadow: `0 40px 90px -50px ${accent}55` }}>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="NAAM *" value={form.name} onChange={set("name")} placeholder="Je naam" required />
                <Field label="BEDRIJF" value={form.company} onChange={set("company")} placeholder="Bedrijfsnaam" />
                <Field label="TELEFOON" value={form.phone} onChange={set("phone")} placeholder="06 ..." type="tel" />
                <div className="hidden sm:block" />
              </div>
              <div className="mt-5">
                <label className="block text-white/40 text-[10px] tracking-[0.3em] font-light mb-2.5">{messagePrompt.toUpperCase()}</label>
                <textarea value={form.message} onChange={set("message")} rows={4}
                  placeholder="Beschrijf kort waar je nu tijd, geld of overzicht verliest..."
                  className="w-full bg-black/40 border border-white/10 text-white/90 text-sm font-light tracking-wide px-4 py-3 rounded outline-none focus:border-white/30 transition-colors duration-300 placeholder:text-white/25 resize-none" />
              </div>
              <button type="submit"
                className="group mt-7 w-full inline-flex items-center justify-center gap-3 px-10 py-4 text-black text-[11px] tracking-[0.25em] font-medium transition-all duration-300 rounded"
                style={{ background: accent }}>
                PLAN MIJN GRATIS PROCESANALYSE
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <p className="mt-5 text-center text-white/60 text-xs font-light tracking-wide">
                Liever direct?{" "}
                <a href="https://wa.me/31624572572" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white underline underline-offset-4 transition-colors">WhatsApp ons</a>
                {" "}of mail{" "}
                <a href="mailto:info@dynique.nl" className="text-white/70 hover:text-white underline underline-offset-4 transition-colors">info@dynique.nl</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
