export type FaqItem = { q: string; a: string };

export function faqJsonLd(faq: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export default function FaqSection({
  faq,
  accent,
  heading = "Voor je begint.",
  eyebrow = "VEELGESTELDE VRAGEN",
}: {
  faq: FaqItem[];
  accent: string;
  heading?: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative px-6 lg:px-12 py-20 lg:py-28 border-t border-white/[0.06]">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] tracking-[0.5em] font-light mb-5 anim" style={{ color: accent }}>{eyebrow}</p>
          <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.12] mb-14 anim delay-1">
            {heading}
          </h2>
          <div className="space-y-px bg-white/[0.06]">
            {faq.map((f, i) => (
              <details key={i} className="group bg-[#070707] anim" style={{ transitionDelay: `${i * 0.06}s` }}>
                <summary className="flex items-center justify-between gap-4 px-6 lg:px-8 py-6 lg:py-7 cursor-pointer list-none hover:bg-white/[0.02] transition-colors">
                  <span className="text-white text-base lg:text-lg font-light tracking-wide">{f.q}</span>
                  <span className="text-white/40 text-2xl font-extralight transition-transform duration-300 group-open:rotate-45 flex-shrink-0">+</span>
                </summary>
                <div className="px-6 lg:px-8 pb-6 lg:pb-7 text-white/55 text-base font-light leading-[1.85] tracking-wide max-w-3xl">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
