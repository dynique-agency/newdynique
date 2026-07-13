"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GOLD = "#d4a574";
const LAST_UPDATED_NL = "13 juli 2026";
const LAST_UPDATED_EN = "13 July 2026";

type Lang = "nl" | "en";

const TOC_NL = [
  { id: "wie-zijn-we", label: "1. Wie is verantwoordelijk" },
  { id: "toepassingsgebied", label: "2. Toepassingsgebied" },
  { id: "welke-gegevens", label: "3. Welke gegevens verzamelen we" },
  { id: "rechtsgrondslag", label: "4. Rechtsgrondslag" },
  { id: "meta-advertenties", label: "5. Meta / Facebook & Instagram Lead Ads" },
  { id: "cookies", label: "6. Cookies" },
  { id: "bewaartermijnen", label: "7. Bewaartermijnen" },
  { id: "derden", label: "8. Delen met derden" },
  { id: "doorgifte", label: "9. Doorgifte buiten de EER" },
  { id: "beveiliging", label: "10. Beveiliging" },
  { id: "rechten", label: "11. Jouw rechten" },
  { id: "minderjarigen", label: "12. Minderjarigen" },
  { id: "wijzigingen", label: "13. Wijzigingen" },
  { id: "contact", label: "14. Contact" },
];

const TOC_EN = [
  { id: "who-we-are", label: "1. Who is responsible" },
  { id: "scope", label: "2. Scope" },
  { id: "what-data", label: "3. What data we collect" },
  { id: "legal-basis", label: "4. Legal basis" },
  { id: "meta-ads", label: "5. Meta / Facebook & Instagram Lead Ads" },
  { id: "cookies-en", label: "6. Cookies" },
  { id: "retention", label: "7. Retention periods" },
  { id: "third-parties", label: "8. Sharing with third parties" },
  { id: "transfers", label: "9. Transfers outside the EEA" },
  { id: "security", label: "10. Security" },
  { id: "your-rights", label: "11. Your rights" },
  { id: "minors", label: "12. Minors" },
  { id: "changes", label: "13. Changes" },
  { id: "contact-en", label: "14. Contact" },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Privacyverklaring",
      url: "https://dynique.nl/privacyverklaring",
      description: "Hoe Dynique persoonsgegevens verwerkt via de website en via Meta-advertenties.",
      inLanguage: "nl-NL",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
        { "@type": "ListItem", position: 2, name: "Privacyverklaring", item: "https://dynique.nl/privacyverklaring" },
      ],
    },
  ],
};

export default function PrivacyverklaringPage() {
  const [lang, setLang] = useState<Lang>("nl");
  const isNl = lang === "nl";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <main className="relative bg-[#050505] min-h-screen">
        <Header variant="light" />

        <div aria-hidden className="fixed top-0 right-0 w-[700px] h-[700px] pointer-events-none opacity-30"
          style={{ background: `radial-gradient(circle, ${GOLD}20 0%, transparent 60%)` }} />

        <article className="relative">
          {/* Hero */}
          <section className="pt-40 lg:pt-52 pb-16 lg:pb-20">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
                  <div className="flex items-center gap-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: GOLD, boxShadow: `0 0 10px ${GOLD}` }} />
                    <p className="text-[10px] tracking-[0.4em] font-light uppercase" style={{ color: GOLD }}>
                      {isNl ? "Juridisch" : "Legal"}
                    </p>
                    <span className="text-white/20">·</span>
                    <p className="text-white/40 text-[10px] tracking-[0.3em] font-light uppercase">
                      {isNl ? `Laatst bijgewerkt: ${LAST_UPDATED_NL}` : `Last updated: ${LAST_UPDATED_EN}`}
                    </p>
                  </div>

                  {/* Language toggle */}
                  <div className="flex items-center gap-1 rounded-full border border-white/[0.12] p-1">
                    <button
                      onClick={() => setLang("nl")}
                      className="px-3.5 py-1.5 text-[10px] tracking-[0.2em] font-light rounded-full transition-all duration-300"
                      style={isNl ? { background: GOLD, color: "#0a0a0a" } : { color: "rgba(255,255,255,0.45)" }}
                    >
                      NL
                    </button>
                    <button
                      onClick={() => setLang("en")}
                      className="px-3.5 py-1.5 text-[10px] tracking-[0.2em] font-light rounded-full transition-all duration-300"
                      style={!isNl ? { background: GOLD, color: "#0a0a0a" } : { color: "rgba(255,255,255,0.45)" }}
                    >
                      EN
                    </button>
                  </div>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-white tracking-[0.01em] leading-[1.05]">
                  {isNl ? "Privacyverklaring" : "Privacy Policy"}
                </h1>
                <p className="mt-8 text-white/55 text-base lg:text-lg font-light leading-[1.8] tracking-wide">
                  {isNl
                    ? "Deze verklaring legt uit welke persoonsgegevens Dynique verwerkt, waarom, hoe lang, en welke rechten je hebt. Dit geldt zowel voor bezoekers van dynique.nl als voor mensen die via een Meta-advertentie (Facebook of Instagram) met ons in contact komen."
                    : "This policy explains what personal data Dynique processes, why, for how long, and what rights you have. It applies both to visitors of dynique.nl and to people who get in touch with us via a Meta advertisement (Facebook or Instagram)."}
                </p>
              </div>
            </div>
          </section>

          {/* TOC */}
          <section className="pb-16 lg:pb-20">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto p-6 lg:p-8 rounded-lg border border-white/[0.08] bg-white/[0.015]">
                <p className="text-white/40 text-[10px] tracking-[0.3em] font-light uppercase mb-5">
                  {isNl ? "Inhoudsopgave" : "Table of contents"}
                </p>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                  {(isNl ? TOC_NL : TOC_EN).map((t) => (
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
                {isNl ? <ContentNL /> : <ContentEN />}
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
          .prose-legal .legal-table { width: 100%; border-collapse: collapse; margin: 1.5rem 0 2rem; font-size: 0.9rem; }
          .prose-legal .legal-table th { text-align: left; font-weight: 500; color: #fff; padding: 0.75rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.15); font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; }
          .prose-legal .legal-table td { padding: 0.9rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.06); color: rgba(255,255,255,0.65); font-weight: 300; line-height: 1.6; vertical-align: top; }
          .prose-legal .legal-table tr:last-child td { border-bottom: none; }
        `}</style>
      </main>
    </>
  );
}

function ContentNL() {
  return (
    <>
      <h2 id="wie-zijn-we">1. Wie is verantwoordelijk voor je gegevens</h2>
      <p>
        <strong>Dynique</strong> is de handelsnaam van de eenmanszaak <strong>Creemers Inclusives</strong>,
        ingeschreven bij de Kamer van Koophandel onder nummer <strong>90531264</strong>, gevestigd aan de
        Ir. Em. Melottestraat 10, 6291 HE Vaals. Wij zijn de verwerkingsverantwoordelijke in de zin van de
        Algemene Verordening Gegevensbescherming (AVG) voor alle gegevens die hieronder worden beschreven,
        behalve waar expliciet anders vermeld (zie hoofdstuk 5, Meta-advertenties).
      </p>
      <p>
        Je kunt ons bereiken via <a href="mailto:info@dynique.nl">info@dynique.nl</a> of{" "}
        <a href="tel:+31624572572">+31 6 24572572</a>.
      </p>

      <h2 id="toepassingsgebied">2. Toepassingsgebied</h2>
      <p>Deze verklaring is van toepassing op:</p>
      <ul>
        <li>De website dynique.nl en alle onderliggende pagina&apos;s;</li>
        <li>Contact- en aanvraagformulieren op de website;</li>
        <li>Gesprekken die je met ons voert via WhatsApp, telefoon of e-mail;</li>
        <li>Advertenties die wij plaatsen op Facebook en Instagram (Meta), inclusief native Lead Ads
          (&quot;Instant Forms&quot;) waarmee je rechtstreeks binnen Facebook of Instagram je gegevens kunt
          achterlaten.</li>
      </ul>

      <h2 id="welke-gegevens">3. Welke gegevens verzamelen we, en waarom</h2>

      <h3>3.1 Contactformulier (dynique.nl/contact en vergelijkbare formulieren)</h3>
      <p>
        Op meerdere pagina&apos;s (contact, diensten, sectorpagina&apos;s) kun je een formulier invullen met
        je naam, bedrijfsnaam, telefoonnummer, e-mailadres, gewenste dienst en een projectomschrijving.
        Belangrijk om te weten: <strong>dit formulier verstuurt niets automatisch naar onze servers.</strong>
        {" "}Het stelt in je browser een kant-en-klaar WhatsApp-bericht samen, dat je vervolgens zelf, via je
        eigen WhatsApp, naar ons verstuurt. Wij ontvangen je gegevens dus alleen op het moment dat jij dat
        bericht daadwerkelijk verzendt.
      </p>

      <h3>3.2 WhatsApp</h3>
      <p>
        Zodra je ons een WhatsApp-bericht stuurt, verwerken wij je telefoonnummer, je naam (voor zover
        zichtbaar in je WhatsApp-profiel) en de inhoud van het gesprek, om te reageren en je vraag of
        aanvraag te behandelen. WhatsApp is een dienst van Meta Platforms Ireland Limited en de berichten
        zijn end-to-end versleuteld.
      </p>

      <h3>3.3 Gratis checklist (dynique.nl/gratis-checklist)</h3>
      <p>
        Om de PDF-checklist te downloaden vul je je naam en e-mailadres in. Deze gegevens worden gebruikt
        om de download te starten; op dit moment worden ze niet automatisch naar een e-maildienst of
        mailinglijst verzonden en slaan wij ze niet apart op. Je naam kan kort zichtbaar zijn in de URL van
        de bedankpagina en kan daardoor voorkomen in de standaard technische toegangslogs van onze
        hostingpartner (zie 3.5). Mochten we deze download in de toekomst uitbreiden met automatische
        e-mailverzending of een mailinglijst, dan werken we deze verklaring bij en vragen we vooraf om je
        toestemming voor eventuele vervolgcommunicatie.
      </p>

      <h3>3.4 Meta Lead Ads (Facebook & Instagram)</h3>
      <p>
        Wanneer je reageert op een advertentie van Dynique op Facebook of Instagram via een{" "}
        <strong>native leadformulier (&quot;Instant Form&quot;)</strong>, vul je je gegevens in binnen het
        platform van Meta zelf — je verlaat Facebook of Instagram daarvoor niet. Meta kan het formulier
        automatisch (deels) invullen met gegevens uit je Facebook- of Instagram-profiel, zoals je naam,
        e-mailadres en telefoonnummer. Welke velden dit precies zijn, hangt af van hoe wij het formulier
        hebben ingericht en is voor jou zichtbaar vóórdat je verzendt. Zie hoofdstuk 5 voor de specifieke
        afspraken rond deze verwerking.
      </p>

      <h3>3.5 Technische en hostinggegevens</h3>
      <p>
        Onze website wordt gehost via Cloudflare Pages. Zoals bij vrijwel elke website worden bij een
        paginabezoek technische gegevens verwerkt (zoals IP-adres, apparaat- en browsertype en tijdstip
        van bezoek), uitsluitend voor beveiliging, misbruikpreventie en het goed laten functioneren van de
        website. Wij gebruiken op dit moment <strong>geen</strong> Google Analytics, Meta Pixel of
        vergelijkbare trackingtools op dynique.nl.
      </p>

      <h2 id="rechtsgrondslag">4. Rechtsgrondslag</h2>
      <p>Wij verwerken persoonsgegevens op basis van een van de volgende grondslagen uit artikel 6 AVG:</p>
      <ul>
        <li><strong>Uitvoering van (pre-contractuele) overeenkomst</strong> — als je een offerte of
          projectgesprek aanvraagt;</li>
        <li><strong>Toestemming</strong> — als je via een Meta-advertentie of leadformulier akkoord gaat met
          het achterlaten van je gegevens voor contact of marketingdoeleinden;</li>
        <li><strong>Gerechtvaardigd belang</strong> — voor beveiliging van onze website en het voorkomen van
          misbruik;</li>
        <li><strong>Wettelijke verplichting</strong> — voor het bewaren van financiële administratie
          (facturen) conform de fiscale bewaarplicht.</li>
      </ul>

      <h2 id="meta-advertenties">5. Meta / Facebook &amp; Instagram Lead Ads</h2>
      <p>
        Omdat wij adverteren op Facebook en Instagram met native Lead Ads, gelden hier specifieke
        aanvullende afspraken bovenop de rest van deze verklaring.
      </p>

      <h3>5.1 Gedeelde verantwoordelijkheid met Meta</h3>
      <p>
        Voor het verzamelen van gegevens via het Instant Form zijn Meta Platforms Ireland Limited en
        Dynique <strong>gezamenlijk verwerkingsverantwoordelijke</strong> (&quot;joint controllers&quot;),
        zoals vastgelegd in Meta&apos;s voorwaarden voor Lead Ads (de &quot;Controller Data Processing
        Terms&quot;) die wij als adverteerder hebben geaccepteerd in Meta Business Manager. In de praktijk
        betekent dit:
      </p>
      <ul>
        <li>Meta is verantwoordelijk voor het platform, het formulier zelf en de eerste verzameling van je
          gegevens binnen Facebook/Instagram;</li>
        <li>Dynique is verantwoordelijk zodra wij de leadgegevens ontvangen (via Meta&apos;s Leads Center) en
          ze gebruiken om contact met je op te nemen.</li>
      </ul>
      <p>
        Meta heeft een eigen privacybeleid dat beschrijft hoe zij gegevens op hun platform verwerken; je
        vindt dit op{" "}
        <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">
          facebook.com/privacy/policy
        </a>.
      </p>

      <h3>5.2 Wat we ermee doen</h3>
      <p>
        Leads die via Meta binnenkomen, gebruiken wij uitsluitend om contact met je op te nemen over de
        dienst waarop je hebt gereageerd — telefonisch, per e-mail of via WhatsApp. Wij verkopen jouw
        gegevens nooit door aan derden en gebruiken ze niet voor andere doeleinden dan waarvoor je ze hebt
        achtergelaten.
      </p>

      <h3>5.3 Je rechten en afmelden</h3>
      <p>
        Je kunt bezwaar maken tegen het gebruik van je gegevens voor marketingdoeleinden door ons een
        bericht te sturen naar <a href="mailto:info@dynique.nl">info@dynique.nl</a>. Wil je weten waarom je
        een specifieke advertentie van ons te zien kreeg, of je advertentievoorkeuren aanpassen? Dat regel
        je rechtstreeks in je eigen Facebook- of Instagram-instellingen onder &quot;Waarom zie ik deze
        advertentie&quot; / advertentie-instellingen.
      </p>

      <h2 id="cookies">6. Cookies</h2>
      <p>
        Dynique.nl gebruikt op dit moment <strong>geen</strong> tracking-, marketing- of
        analytics-cookies. Er worden alleen technische gegevens verwerkt die strikt noodzakelijk zijn om de
        website te laten functioneren; hiervoor is op grond van de Telecommunicatiewet geen
        toestemmingsbanner vereist. Mocht dit in de toekomst wijzigen — bijvoorbeeld door het plaatsen van
        een Meta Pixel voor het meten van advertentieresultaten — dan passen wij deze verklaring aan en
        vragen we je vooraf via een cookiebanner om toestemming, zoals de wet vereist.
      </p>

      <h2 id="bewaartermijnen">7. Bewaartermijnen</h2>
      <p>Wij bewaren gegevens niet langer dan noodzakelijk. Onze richtlijnen:</p>
      <table className="legal-table">
        <thead>
          <tr><th>Type gegevens</th><th>Bewaartermijn</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Contact-/offerteaanvraag die niet tot opdracht leidt</td>
            <td>Maximaal 24 maanden na laatste contact</td>
          </tr>
          <tr>
            <td>Leads via Meta Lead Ads</td>
            <td>Maximaal 24 maanden na laatste contact. Let op: Meta verwijdert leads in het
              Leads Center standaard automatisch na 90 dagen als wij ze niet zelf downloaden</td>
          </tr>
          <tr>
            <td>Klant- en projectgegevens (na opdracht)</td>
            <td>Zolang nodig voor de dienstverlening, plus de wettelijke fiscale bewaarplicht van 7
              jaar voor facturen en financiële administratie</td>
          </tr>
          <tr>
            <td>WhatsApp-gesprekken zonder vervolgopdracht</td>
            <td>Maximaal 24 maanden na laatste bericht</td>
          </tr>
          <tr>
            <td>Technische hosting-/logdata</td>
            <td>Conform het retentiebeleid van onze hostingpartner Cloudflare</td>
          </tr>
        </tbody>
      </table>

      <h2 id="derden">8. Delen met derden</h2>
      <p>Wij delen gegevens alleen met partijen die noodzakelijk zijn voor onze dienstverlening:</p>
      <ul>
        <li><strong>Meta Platforms Ireland Limited</strong> — voor advertenties, Lead Ads en WhatsApp
          (zie hoofdstuk 5);</li>
        <li><strong>Cloudflare, Inc.</strong> — voor hosting en beveiliging van de website;</li>
        <li>Eventuele toekomstige tools voor e-mail of klantbeheer worden hier toegevoegd zodra we ze
          daadwerkelijk in gebruik nemen.</li>
      </ul>
      <p>Wij verkopen jouw gegevens nooit aan derden.</p>

      <h2 id="doorgifte">9. Doorgifte buiten de EER</h2>
      <p>
        Meta Platforms Ireland Limited kan gegevens (mede) verwerken via Meta Platforms, Inc. in de
        Verenigde Staten. Deze doorgifte vindt plaats op basis van de Standard Contractual Clauses van de
        Europese Commissie en/of het EU-U.S. Data Privacy Framework, voor zover van toepassing.
      </p>

      <h2 id="beveiliging">10. Beveiliging</h2>
      <p>
        Onze website is uitsluitend bereikbaar via een versleutelde HTTPS-verbinding. Toegang tot
        leadgegevens is beperkt tot Dynique zelf. WhatsApp-berichten zijn end-to-end versleuteld. Wij nemen
        passende technische en organisatorische maatregelen om je gegevens te beschermen tegen verlies of
        onbevoegde toegang.
      </p>

      <h2 id="rechten">11. Jouw rechten</h2>
      <p>Onder de AVG heb je het recht op:</p>
      <ul>
        <li><strong>Inzage</strong> — opvragen welke gegevens we van je hebben;</li>
        <li><strong>Rectificatie</strong> — onjuiste gegevens laten corrigeren;</li>
        <li><strong>Verwijdering</strong> — je gegevens laten wissen (&quot;recht op vergetelheid&quot;);</li>
        <li><strong>Beperking</strong> — de verwerking van je gegevens laten beperken;</li>
        <li><strong>Bezwaar</strong> — bezwaar maken tegen verwerking, met name voor marketingdoeleinden;</li>
        <li><strong>Dataportabiliteit</strong> — je gegevens in een overdraagbaar formaat ontvangen;</li>
        <li><strong>Intrekking van toestemming</strong> — op elk moment, zonder gevolgen voor eerdere
          verwerking.</li>
      </ul>
      <p>
        Wil je een van deze rechten uitoefenen? Stuur een e-mail naar{" "}
        <a href="mailto:info@dynique.nl">info@dynique.nl</a>. Wij reageren binnen vier weken. Ben je niet
        tevreden over hoe wij met je gegevens omgaan, dan kun je een klacht indienen bij de{" "}
        <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer">
          Autoriteit Persoonsgegevens
        </a>.
      </p>

      <h2 id="minderjarigen">12. Minderjarigen</h2>
      <p>
        Onze dienstverlening en advertenties zijn gericht op ondernemers en zakelijke besluitvormers, niet
        op minderjarigen. Wij verzamelen niet bewust gegevens van personen jonger dan 16 jaar.
      </p>

      <h2 id="wijzigingen">13. Wijzigingen in deze verklaring</h2>
      <p>
        Wij kunnen deze verklaring van tijd tot tijd aanpassen, bijvoorbeeld als we nieuwe tools of
        advertentiekanalen in gebruik nemen. De datum bovenaan deze pagina geeft aan wanneer de verklaring
        voor het laatst is bijgewerkt.
      </p>

      <h2 id="contact">14. Contact</h2>
      <p>
        Dynique (Creemers Inclusives) — Ir. Em. Melottestraat 10, 6291 HE Vaals — KVK 90531264
        <br />
        E-mail: <a href="mailto:info@dynique.nl">info@dynique.nl</a>
        <br />
        Telefoon: <a href="tel:+31624572572">+31 6 24572572</a>
      </p>

      <p>
        Terug naar <Link href="/">de homepage</Link> of bekijk onze <Link href="/contact">contactpagina</Link>.
      </p>
    </>
  );
}

function ContentEN() {
  return (
    <>
      <h2 id="who-we-are">1. Who is responsible for your data</h2>
      <p>
        <strong>Dynique</strong> is the trade name of the sole proprietorship (&quot;eenmanszaak&quot;){" "}
        <strong>Creemers Inclusives</strong>, registered with the Dutch Chamber of Commerce (KVK) under
        number <strong>90531264</strong>, based at Ir. Em. Melottestraat 10, 6291 HE Vaals, the Netherlands.
        We are the data controller under the General Data Protection Regulation (GDPR) for all data
        described below, except where explicitly stated otherwise (see chapter 5, Meta advertising).
      </p>
      <p>
        You can reach us at <a href="mailto:info@dynique.nl">info@dynique.nl</a> or{" "}
        <a href="tel:+31624572572">+31 6 24572572</a>.
      </p>

      <h2 id="scope">2. Scope</h2>
      <p>This policy applies to:</p>
      <ul>
        <li>The website dynique.nl and all of its pages;</li>
        <li>Contact and inquiry forms on the website;</li>
        <li>Conversations you have with us via WhatsApp, phone, or email;</li>
        <li>Advertisements we place on Facebook and Instagram (Meta), including native Lead Ads
          (&quot;Instant Forms&quot;) that let you leave your details directly within Facebook or
          Instagram.</li>
      </ul>

      <h2 id="what-data">3. What data we collect, and why</h2>

      <h3>3.1 Contact form (dynique.nl/contact and similar forms)</h3>
      <p>
        On several pages (contact, services, sector pages) you can fill in a form with your name, company
        name, phone number, email address, requested service, and a project description. Important to
        know: <strong>this form does not automatically send anything to our servers.</strong> It assembles
        a ready-made WhatsApp message in your browser, which you then send yourself, via your own WhatsApp,
        to us. We therefore only receive your data the moment you actually send that message.
      </p>

      <h3>3.2 WhatsApp</h3>
      <p>
        Once you send us a WhatsApp message, we process your phone number, your name (as far as visible in
        your WhatsApp profile), and the content of the conversation, in order to respond and handle your
        question or request. WhatsApp is a service of Meta Platforms Ireland Limited, and messages are
        end-to-end encrypted.
      </p>

      <h3>3.3 Free checklist (dynique.nl/gratis-checklist)</h3>
      <p>
        To download the PDF checklist, you enter your name and email address. This data is used to start
        the download; at this time it is not automatically sent to an email service or mailing list, and we
        do not store it separately. Your name may briefly appear in the URL of the thank-you page, and may
        therefore appear in the standard technical access logs of our hosting provider (see 3.5). Should we
        expand this download in the future with automatic email delivery or a mailing list, we will update
        this policy and ask for your consent for any follow-up communication beforehand.
      </p>

      <h3>3.4 Meta Lead Ads (Facebook &amp; Instagram)</h3>
      <p>
        When you respond to a Dynique advertisement on Facebook or Instagram via a{" "}
        <strong>native lead form (&quot;Instant Form&quot;)</strong>, you fill in your details within
        Meta&apos;s own platform — you do not leave Facebook or Instagram to do so. Meta may automatically
        (partially) pre-fill the form with information from your Facebook or Instagram profile, such as
        your name, email address, and phone number. Which fields exactly depends on how we set up the form,
        and is visible to you before you submit. See chapter 5 for the specific arrangements around this
        processing.
      </p>

      <h3>3.5 Technical and hosting data</h3>
      <p>
        Our website is hosted via Cloudflare Pages. As with virtually any website, technical data is
        processed when you visit a page (such as IP address, device and browser type, and time of visit),
        solely for security, abuse prevention, and to keep the website functioning properly. We currently
        do <strong>not</strong> use Google Analytics, Meta Pixel, or similar tracking tools on dynique.nl.
      </p>

      <h2 id="legal-basis">4. Legal basis</h2>
      <p>We process personal data based on one of the following grounds under Article 6 GDPR:</p>
      <ul>
        <li><strong>Performance of a (pre-)contractual agreement</strong> — when you request a quote or
          project discussion;</li>
        <li><strong>Consent</strong> — when you agree, via a Meta advertisement or lead form, to leave your
          details for contact or marketing purposes;</li>
        <li><strong>Legitimate interest</strong> — for the security of our website and preventing misuse;</li>
        <li><strong>Legal obligation</strong> — for retaining financial records (invoices) in accordance
          with tax retention requirements.</li>
      </ul>

      <h2 id="meta-ads">5. Meta / Facebook &amp; Instagram Lead Ads</h2>
      <p>
        Because we advertise on Facebook and Instagram with native Lead Ads, specific additional
        arrangements apply here, on top of the rest of this policy.
      </p>

      <h3>5.1 Shared responsibility with Meta</h3>
      <p>
        For the collection of data via the Instant Form, Meta Platforms Ireland Limited and Dynique are{" "}
        <strong>joint controllers</strong>, as set out in Meta&apos;s terms for Lead Ads (the &quot;Controller
        Data Processing Terms&quot;), which we as an advertiser have accepted in Meta Business Manager. In
        practice, this means:
      </p>
      <ul>
        <li>Meta is responsible for the platform, the form itself, and the initial collection of your data
          within Facebook/Instagram;</li>
        <li>Dynique is responsible once we receive the lead data (via Meta&apos;s Leads Center) and use it to
          contact you.</li>
      </ul>
      <p>
        Meta has its own privacy policy describing how it processes data on its platform; you can find it
        at{" "}
        <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">
          facebook.com/privacy/policy
        </a>.
      </p>

      <h3>5.2 What we do with it</h3>
      <p>
        Leads that come in via Meta are used solely to contact you about the service you responded to — by
        phone, email, or WhatsApp. We never sell your data to third parties and do not use it for purposes
        other than those for which you left it.
      </p>

      <h3>5.3 Your rights and opting out</h3>
      <p>
        You can object to the use of your data for marketing purposes by sending us a message at{" "}
        <a href="mailto:info@dynique.nl">info@dynique.nl</a>. Want to know why you saw a specific ad from
        us, or want to adjust your ad preferences? You can do that directly in your own Facebook or
        Instagram settings, under &quot;Why am I seeing this ad&quot; / ad preferences.
      </p>

      <h2 id="cookies-en">6. Cookies</h2>
      <p>
        Dynique.nl currently does <strong>not</strong> use tracking, marketing, or analytics cookies. Only
        technical data that is strictly necessary to make the website function is processed; under Dutch
        telecommunications law, no consent banner is required for this. Should this change in the future —
        for example by placing a Meta Pixel to measure advertising results — we will update this policy and
        ask for your consent beforehand via a cookie banner, as required by law.
      </p>

      <h2 id="retention">7. Retention periods</h2>
      <p>We do not keep data longer than necessary. Our guidelines:</p>
      <table className="legal-table">
        <thead>
          <tr><th>Type of data</th><th>Retention period</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Contact/quote request that does not lead to an assignment</td>
            <td>Maximum 24 months after last contact</td>
          </tr>
          <tr>
            <td>Leads via Meta Lead Ads</td>
            <td>Maximum 24 months after last contact. Note: Meta automatically deletes leads from the
              Leads Center by default after 90 days if we do not download them ourselves</td>
          </tr>
          <tr>
            <td>Customer and project data (after assignment)</td>
            <td>As long as necessary for service delivery, plus the statutory tax retention period of 7
              years for invoices and financial records</td>
          </tr>
          <tr>
            <td>WhatsApp conversations without a follow-up assignment</td>
            <td>Maximum 24 months after last message</td>
          </tr>
          <tr>
            <td>Technical hosting/log data</td>
            <td>In accordance with the retention policy of our hosting provider, Cloudflare</td>
          </tr>
        </tbody>
      </table>

      <h2 id="third-parties">8. Sharing with third parties</h2>
      <p>We only share data with parties necessary for our services:</p>
      <ul>
        <li><strong>Meta Platforms Ireland Limited</strong> — for advertising, Lead Ads, and WhatsApp (see
          chapter 5);</li>
        <li><strong>Cloudflare, Inc.</strong> — for hosting and securing the website;</li>
        <li>Any future tools for email or customer management will be added here once we actually start
          using them.</li>
      </ul>
      <p>We never sell your data to third parties.</p>

      <h2 id="transfers">9. Transfers outside the EEA</h2>
      <p>
        Meta Platforms Ireland Limited may (also) process data via Meta Platforms, Inc. in the United
        States. This transfer takes place on the basis of the European Commission&apos;s Standard
        Contractual Clauses and/or the EU-U.S. Data Privacy Framework, where applicable.
      </p>

      <h2 id="security">10. Security</h2>
      <p>
        Our website is only accessible via an encrypted HTTPS connection. Access to lead data is limited to
        Dynique itself. WhatsApp messages are end-to-end encrypted. We take appropriate technical and
        organizational measures to protect your data against loss or unauthorized access.
      </p>

      <h2 id="your-rights">11. Your rights</h2>
      <p>Under the GDPR you have the right to:</p>
      <ul>
        <li><strong>Access</strong> — request which data we hold about you;</li>
        <li><strong>Rectification</strong> — have incorrect data corrected;</li>
        <li><strong>Erasure</strong> — have your data deleted (&quot;right to be forgotten&quot;);</li>
        <li><strong>Restriction</strong> — have the processing of your data restricted;</li>
        <li><strong>Objection</strong> — object to processing, in particular for marketing purposes;</li>
        <li><strong>Data portability</strong> — receive your data in a portable format;</li>
        <li><strong>Withdrawal of consent</strong> — at any time, without affecting prior processing.</li>
      </ul>
      <p>
        Want to exercise one of these rights? Send an email to{" "}
        <a href="mailto:info@dynique.nl">info@dynique.nl</a>. We will respond within four weeks. Not
        satisfied with how we handle your data? You can file a complaint with the Dutch Data Protection
        Authority (
        <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer">
          Autoriteit Persoonsgegevens
        </a>
        ).
      </p>

      <h2 id="minors">12. Minors</h2>
      <p>
        Our services and advertisements are aimed at business owners and business decision-makers, not at
        minors. We do not knowingly collect data from individuals under the age of 16.
      </p>

      <h2 id="changes">13. Changes to this policy</h2>
      <p>
        We may update this policy from time to time, for example when we adopt new tools or advertising
        channels. The date at the top of this page indicates when the policy was last updated.
      </p>

      <h2 id="contact-en">14. Contact</h2>
      <p>
        Dynique (Creemers Inclusives) — Ir. Em. Melottestraat 10, 6291 HE Vaals, the Netherlands — KVK
        90531264
        <br />
        Email: <a href="mailto:info@dynique.nl">info@dynique.nl</a>
        <br />
        Phone: <a href="tel:+31624572572">+31 6 24572572</a>
      </p>

      <p>
        Back to <Link href="/">the homepage</Link> or view our <Link href="/contact">contact page</Link>.
      </p>
    </>
  );
}
