"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GOLD = "#d4a574";
const LAST_UPDATED = "7 september 2026";

const TOC = [
  { id: "toepasselijkheid", label: "1. Toepasselijkheid en definities" },
  { id: "offertes", label: "2. Offertes en totstandkoming" },
  { id: "uitvoering", label: "3. Uitvoering en fasering" },
  { id: "wijzigingen", label: "4. Wijzigingen en meerwerk" },
  { id: "prijzen", label: "5. Prijzen en betaling" },
  { id: "levertijd", label: "6. Levertijd" },
  { id: "ie", label: "7. Intellectueel eigendom" },
  { id: "onderhoud", label: "8. Na oplevering: onderhoud en garantie" },
  { id: "aansprakelijkheid", label: "9. Aansprakelijkheid" },
  { id: "overmacht", label: "10. Overmacht" },
  { id: "geheimhouding", label: "11. Geheimhouding" },
  { id: "duur", label: "12. Duur en beëindiging" },
  { id: "herroeping", label: "13. Herroepingsrecht" },
  { id: "recht", label: "14. Toepasselijk recht en geschillen" },
  { id: "wijziging-voorwaarden", label: "15. Wijziging van deze voorwaarden" },
  { id: "contact", label: "16. Contact" },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Algemene Voorwaarden",
      url: "https://dynique.nl/algemene-voorwaarden",
      description: "Algemene voorwaarden van Dynique voor maatwerk software, webontwikkeling en aanverwante diensten.",
      inLanguage: "nl-NL",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
        { "@type": "ListItem", position: 2, name: "Algemene Voorwaarden", item: "https://dynique.nl/algemene-voorwaarden" },
      ],
    },
  ],
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <main className="relative bg-[#050505] min-h-screen">
        <Header variant="light" />

        <div aria-hidden className="fixed top-0 right-0 w-[700px] h-[700px] pointer-events-none opacity-30"
          style={{ background: `radial-gradient(circle, ${GOLD}20 0%, transparent 60%)` }} />

        <article className="relative">
          {/* Concept-banner — expliciet, niet weg te klikken, blijft staan tot bewust vervangen */}
          <div className="pt-28 lg:pt-32">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto rounded-lg border border-[#d4a574]/30 bg-[#d4a574]/[0.06] px-6 py-5">
                <p className="text-[#d4a574] text-[10px] tracking-[0.3em] font-light uppercase mb-2">Conceptversie — nog niet actief</p>
                <p className="text-white/70 text-sm font-light leading-relaxed">
                  Dit is een eerste opzet, geschreven op basis van wat al elders op de site staat (vaste prijs per fase,
                  het traject in vier fases, drie revisierondes). Het is <strong className="text-white">geen</strong>{" "}
                  juridisch geverifieerde tekst — laat een jurist of jezelf dit doorlezen en aanpassen voordat je je hier
                  daadwerkelijk op beroept richting klanten. Deze pagina staat bewust op <code className="text-white/50">noindex</code>{" "}
                  totdat die controle heeft plaatsgevonden.
                </p>
              </div>
            </div>
          </div>

          {/* Hero */}
          <section className="pt-12 lg:pt-16 pb-16 lg:pb-20">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: GOLD, boxShadow: `0 0 10px ${GOLD}` }} />
                  <p className="text-[10px] tracking-[0.4em] font-light uppercase" style={{ color: GOLD }}>Juridisch</p>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-white tracking-[0.01em] leading-[1.05]">
                  Algemene Voorwaarden
                </h1>
                <p className="mt-8 text-white/55 text-base lg:text-lg font-light leading-[1.8] tracking-wide">
                  Deze voorwaarden zijn van toepassing op alle offertes, opdrachten en overeenkomsten tussen Dynique en
                  opdrachtgevers, voor zover hiervan niet schriftelijk is afgeweken. Laatst bijgewerkt: {LAST_UPDATED}.
                </p>
              </div>
            </div>
          </section>

          {/* TOC */}
          <section className="pb-16 lg:pb-20">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto p-6 lg:p-8 rounded-lg border border-white/[0.08] bg-white/[0.015]">
                <p className="text-white/40 text-[10px] tracking-[0.3em] font-light uppercase mb-5">Inhoudsopgave</p>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                  {TOC.map((t) => (
                    <a key={t.id} href={`#${t.id}`}
                      className="text-white/60 hover:text-white text-sm font-light tracking-wide transition-colors duration-200">
                      {t.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Body */}
          <section className="pb-24 lg:pb-32">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto prose-legal">
                <Content />
              </div>
            </div>
          </section>
        </article>

        <Footer />

        <style jsx global>{`
          .prose-legal h2 { font-size: 1.75rem; font-weight: 200; color: #fff; letter-spacing: 0.01em; line-height: 1.25; margin-top: 3.5rem; margin-bottom: 1.25rem; scroll-margin-top: 100px; }
          .prose-legal h2:first-child { margin-top: 0; }
          .prose-legal h3 { font-size: 1.15rem; font-weight: 400; color: #fff; letter-spacing: 0.01em; line-height: 1.3; margin-top: 2.25rem; margin-bottom: 0.9rem; }
          .prose-legal p { font-size: 1rem; font-weight: 300; color: rgba(255,255,255,0.68); line-height: 1.8; letter-spacing: 0.01em; margin-bottom: 1.25rem; }
          .prose-legal a { color: #fff; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.3); transition: border-color 0.3s; }
          .prose-legal a:hover { border-color: rgba(255,255,255,0.8); }
          .prose-legal ul { margin: 1.25rem 0; padding-left: 0; list-style: none; }
          .prose-legal li { font-size: 1rem; font-weight: 300; color: rgba(255,255,255,0.68); line-height: 1.75; padding-left: 1.5rem; position: relative; margin-bottom: 0.6rem; }
          .prose-legal li::before { content: "—"; position: absolute; left: 0; color: rgba(255,255,255,0.3); }
          .prose-legal strong { color: #fff; font-weight: 500; }
        `}</style>
      </main>
    </>
  );
}

function Content() {
  return (
    <>
      <h2 id="toepasselijkheid">1. Toepasselijkheid en definities</h2>
      <p>
        <strong>Dynique</strong> is de handelsnaam van de eenmanszaak <strong>Creemers Inclusives</strong>, ingeschreven
        bij de Kamer van Koophandel onder nummer <strong>90531264</strong>, gevestigd aan de Ir. Em. Melottestraat 10,
        6291 HE Vaals (hierna: &quot;Dynique&quot;, &quot;wij&quot; of &quot;ons&quot;).
      </p>
      <p>Deze algemene voorwaarden zijn van toepassing op iedere offerte, opdracht en overeenkomst tussen Dynique en een
        opdrachtgever (hierna: &quot;opdrachtgever&quot; of &quot;je&quot;), voor zover partijen hier niet uitdrukkelijk en
        schriftelijk van afwijken. Eventuele inkoop- of andere voorwaarden van de opdrachtgever worden uitdrukkelijk van
        de hand gewezen, tenzij schriftelijk anders overeengekomen.</p>
      <p>Onder &quot;diensten&quot; wordt in deze voorwaarden verstaan: maatwerk software, webontwikkeling, procesautomatisering,
        AI-marketing, drone- en videoproducties, en aanverwante werkzaamheden zoals aangeboden op dynique.nl.</p>

      <h2 id="offertes">2. Offertes en totstandkoming van de overeenkomst</h2>
      <p>Alle offertes van Dynique zijn vrijblijvend en 30 dagen geldig, tenzij anders vermeld. Een overeenkomst komt tot
        stand op het moment dat de opdrachtgever een offerte schriftelijk (waaronder per e-mail) accepteert, of zodra
        Dynique op verzoek van de opdrachtgever met de uitvoering start.</p>
      <p>Een offerte is gebaseerd op de informatie die de opdrachtgever bij de aanvraag heeft verstrekt. Blijkt tijdens
        het traject dat de daadwerkelijke scope afwijkt van wat bij de intake is besproken, dan bespreken we dat samen
        voordat we doorgaan — zie artikel 4 (wijzigingen en meerwerk).</p>

      <h2 id="uitvoering">3. Uitvoering en fasering</h2>
      <p>Dynique voert de overeenkomst uit volgens het traject zoals dat ook op de website is beschreven: kennismaking en
        intake, plan &amp; ontwerp, bouwen, en livegang met vervolgondersteuning. Aan het begin van elke fase wordt
        helder wat er wordt opgeleverd en wat dat kost, voordat die fase start.</p>
      <p>De opdrachtgever verstrekt tijdig alle informatie, materialen en toegangen (zoals teksten, beeldmateriaal,
        inloggegevens of API-toegang) die redelijkerwijs nodig zijn om het werk uit te voeren. Vertraging die ontstaat
        doordat de opdrachtgever dit niet tijdig doet, komt niet voor rekening van Dynique.</p>
      <p>Tenzij schriftelijk anders overeengekomen, omvat een opleveringsfase maximaal <strong>drie revisierondes</strong>.
        Aanvullende revisierondes worden als meerwerk behandeld (zie artikel 4).</p>

      <h2 id="wijzigingen">4. Wijzigingen en meerwerk</h2>
      <p>Wijzigingen in de opdracht, of werkzaamheden die buiten de oorspronkelijk overeengekomen scope vallen, worden
        vooraf besproken en pas uitgevoerd na akkoord van de opdrachtgever over de gevolgen voor prijs en planning.
        Dynique voert nooit stilzwijgend betaald meerwerk uit.</p>

      <h2 id="prijzen">5. Prijzen en betaling</h2>
      <p>Waar Dynique een vaste prijs per fase afspreekt, geldt die prijs voor de overeengekomen scope van die fase. Alle
        genoemde prijzen zijn exclusief btw, tenzij anders vermeld.</p>
      <p>Facturen dienen te worden voldaan binnen <strong>14 dagen</strong> na factuurdatum, tenzij schriftelijk een andere
        termijn is overeengekomen. Bij grotere trajecten kan in fases of via een aanbetaling worden gefactureerd; dit
        wordt vooraf helder afgesproken.</p>
      <p>Bij het niet tijdig betalen is de opdrachtgever van rechtswege in verzuim en is Dynique gerechtigd wettelijke
        (handels)rente en redelijke incassokosten in rekening te brengen, en de werkzaamheden op te schorten totdat
        openstaande facturen zijn voldaan.</p>

      <h2 id="levertijd">6. Levertijd</h2>
      <p>Genoemde levertijden zijn indicaties, gebaseerd op de scope zoals die bij aanvang bekend is en op tijdige
        medewerking van de opdrachtgever (zie artikel 3). Het is een inspanningsverplichting, geen fatale termijn:
        overschrijding geeft de opdrachtgever niet automatisch recht op schadevergoeding of ontbinding, tenzij uitdrukkelijk
        een harde deadline schriftelijk is overeengekomen.</p>

      <h2 id="ie">7. Intellectueel eigendom</h2>
      <p>Alle intellectuele eigendomsrechten op de door Dynique in het kader van de opdracht ontwikkelde broncode, systemen
        en werken gaan over op de opdrachtgever op het moment dat alle daarmee samenhangende facturen volledig zijn
        voldaan, tenzij schriftelijk anders is overeengekomen.</p>
      <p>Dynique behoudt het recht om generieke kennis, technieken en herbruikbare (niet-klantspecifieke) componenten die
        tijdens de opdracht zijn ontwikkeld, ook voor andere opdrachten te gebruiken. Aan de opdrachtgever wordt nooit
        exclusiviteit op onderliggende, niet-klantspecifieke bouwstenen verleend, tenzij dat uitdrukkelijk is afgesproken.</p>
      <p>Dynique mag het opgeleverde werk, na livegang, gebruiken in haar eigen portfolio ter promotie van haar diensten
        (zoals ook nu al gebeurt op dynique.nl/portfolio), tenzij de opdrachtgever schriftelijk aangeeft dit niet te
        willen.</p>

      <h2 id="onderhoud">8. Na oplevering: onderhoud en garantie</h2>
      <p>Na livegang blijft Dynique aanspreekbaar voor updates, uitbreidingen en beheer, zoals ook op de website
        toegelicht. Structureel onderhoud (bijvoorbeeld beveiligingsupdates, monitoring, of een vast aantal
        supporturen per maand) valt buiten een eenmalige projectprijs, tenzij hiervoor een aparte
        onderhoudsovereenkomst is afgesloten.</p>
      <p>Dynique spant zich in om na oplevering geconstateerde gebreken die aantoonbaar het gevolg zijn van een fout in
        het opgeleverde werk, binnen redelijke termijn kosteloos te herstellen, mits deze binnen <strong>30 dagen</strong> na
        oplevering worden gemeld. Gebreken die ontstaan door wijzigingen van de opdrachtgever of derden na oplevering,
        vallen hier niet onder.</p>

      <h2 id="aansprakelijkheid">9. Aansprakelijkheid</h2>
      <p>Dynique is uitsluitend aansprakelijk voor directe schade die het rechtstreekse gevolg is van een toerekenbare
        tekortkoming in de uitvoering van de overeenkomst. Aansprakelijkheid voor indirecte schade — waaronder gevolgschade,
        gederfde winst, gemiste besparingen en schade door bedrijfsstagnatie — is uitgesloten.</p>
      <p>De totale aansprakelijkheid van Dynique per gebeurtenis (waarbij een reeks samenhangende gebeurtenissen als één
        gebeurtenis geldt) is beperkt tot het bedrag dat voor de betreffende opdracht in de twaalf maanden daaraan
        voorafgaand daadwerkelijk is gefactureerd, met een maximum dat in redelijkheid aansluit bij de omvang van de
        opdracht.</p>
      <p>Deze beperking geldt niet in geval van opzet of bewuste roekeloosheid van Dynique.</p>

      <h2 id="overmacht">10. Overmacht</h2>
      <p>Geen van beide partijen is gehouden tot nakoming van enige verplichting indien dit wordt verhinderd door
        overmacht. Onder overmacht wordt mede verstaan: storingen bij hostingpartners of andere derde partijen waar
        Dynique redelijkerwijs van afhankelijk is, internetstoringen, en andere omstandigheden buiten de redelijke
        controle van Dynique.</p>

      <h2 id="geheimhouding">11. Geheimhouding</h2>
      <p>Beide partijen verplichten zich tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van de
        overeenkomst van elkaar ontvangen, tenzij een wettelijke plicht tot bekendmaking geldt.</p>

      <h2 id="duur">12. Duur en beëindiging</h2>
      <p>Een overeenkomst voor een eenmalig project eindigt van rechtswege bij oplevering en volledige betaling, tenzij
        er sprake is van een doorlopende onderhouds- of beheerovereenkomst. Een doorlopende overeenkomst kan door
        beide partijen schriftelijk worden opgezegd met inachtneming van een redelijke opzegtermijn, tenzij anders
        overeengekomen.</p>

      <h2 id="herroeping">13. Herroepingsrecht</h2>
      <p>Deze voorwaarden gaan primair uit van overeenkomsten met opdrachtgevers die handelen in de uitoefening van een
        beroep of bedrijf (business-to-business). Is de opdrachtgever een consument in de zin van de wet, dan gelden de
        wettelijke regels omtrent het herroepingsrecht, met dien verstande dat dit recht vervalt zodra Dynique, met
        uitdrukkelijke voorafgaande instemming van de consument, is gestart met de uitvoering vóórdat de
        herroepingstermijn is verstreken en de consument heeft erkend dat hij daarmee zijn herroepingsrecht verliest.</p>

      <h2 id="recht">14. Toepasselijk recht en geschillen</h2>
      <p>Op alle overeenkomsten tussen Dynique en de opdrachtgever is Nederlands recht van toepassing. Geschillen worden
        bij voorkeur in onderling overleg opgelost. Komen partijen er niet uit, dan is de bevoegde rechter in het
        arrondissement waar Dynique is gevestigd bevoegd, tenzij dwingend recht anders voorschrijft.</p>

      <h2 id="wijziging-voorwaarden">15. Wijziging van deze voorwaarden</h2>
      <p>Dynique kan deze algemene voorwaarden van tijd tot tijd wijzigen. De meest actuele versie staat altijd op deze
        pagina. Voor lopende overeenkomsten blijft de versie gelden die van toepassing was op het moment van totstandkoming,
        tenzij een wijziging in het voordeel van de opdrachtgever is of partijen anders overeenkomen.</p>

      <h2 id="contact">16. Contact</h2>
      <p>Vragen over deze voorwaarden? Neem contact op via{" "}
        <a href="mailto:info@dynique.nl">info@dynique.nl</a> of{" "}
        <a href="tel:+31624572572">+31 6 24572572</a>.</p>
    </>
  );
}
