// Twee echte, geverifieerde reviews (zelfde bron als de homepage-carousel in src/app/page.tsx).
// Bewust generiek gepresenteerd ("zo werkt samenwerken met Dynique"), niet als sector- of
// onderwerpspecifiek bewijs — er bestaan nog geen cases in elke sector/pijnpunt die deze
// component gebruikt.
const REVIEWS = [
  {
    quote: "Andere bureaus zeiden weken. Dynique leverde een meertalige website met booking-systeem binnen zeven dagen. De site voelt professioneler dan ik had durven hopen en het aantal aanvragen is verdubbeld.",
    name: "Stacy Kohnen",
    role: "Zangeres · Stacy Kohnen Music",
    verifyUrl: "https://stacykohnen.de",
    verifyLabel: "stacykohnen.de",
  },
  {
    quote: "Een platform waar topchefs en premium keukens elkaar vinden: klinkt complex, werd elegant. Dynique dacht mee, bouwde snel en leverde een product dat direct serieus genomen wordt.",
    name: "Mitchell & Gert-Jan",
    role: "Oprichters · Chefs Connect",
    verifyUrl: "https://chefs-connect.nl",
    verifyLabel: "chefs-connect.nl",
  },
];

export default function SocialProofSection({ accent }: { accent: string }) {
  return (
    <section className="relative px-6 lg:px-12 py-20 lg:py-28 border-t border-white/[0.06]">
      <div className="container mx-auto">
        <div className="max-w-3xl anim mb-12">
          <p className="text-[10px] tracking-[0.5em] font-light mb-5" style={{ color: accent }}>GEVERIFIEERDE KLANTEN</p>
          <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.12]">
            Zo werkt samenwerken
            <span className="text-white/45 italic"> met Dynique.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]">
          {REVIEWS.map((r) => (
            <div key={r.name} className="bg-[#070707] p-8 lg:p-10 anim">
              <p className="text-white/70 text-base lg:text-lg font-light leading-[1.8] tracking-wide italic mb-6">
                &ldquo;{r.quote}&rdquo;
              </p>
              <p className="text-white/85 text-sm font-light tracking-wide">{r.name}</p>
              <p className="text-white/40 text-xs font-light tracking-wide mt-1">
                {r.role} ·{" "}
                <a href={r.verifyUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-white/20 hover:decoration-white/50 hover:text-white/70 transition-colors">
                  {r.verifyLabel}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
