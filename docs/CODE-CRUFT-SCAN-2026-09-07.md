# Code-Deepscan — Dode Code, Duplicatie & Restanten

**Datum:** 2026-09-07 · **Methode:** 8 parallelle scan-agents (één per paginagroep: homepage/root, diensten, sectorpagina's, locaties, portfolio, blog, standalone-pagina's, interactieve componenten) · **Resultaat:** 54 ruwe bevindingen samengevoegd tot 40 unieke items na dedup.

## Samenvatting

47 ruwe bevindingen uit 8 scans zijn teruggebracht tot ~40 unieke items door overlap samen te voegen (met name: het #34d399-groentoken dat in 3 aparte bestanden opdook, de ~800-regels-duplicatie van Visuals.tsx in diensten/processen/page.tsx die 3x apart gerapporteerd was, en de ongebruikte React-imports/scroll-reveal-duplicatie die per bestand los gemeld waren). Zes terugkerende patronen vallen op: (1) een leftover groen kleurtoken (#34d399) uit een vroegere ontwerpvariant duikt op in meerdere amber/gold-getinte componenten — de meest herhaalde bevinding over alle scans heen; (2) forse duplicate-logic: diensten/processen/page.tsx herimplementeert het hele gedeelde Visuals.tsx-bestand i.p.v. het te importeren (zoals de Limburg-variant al goed doet), en ook PortfolioVideo, de WhatsApp-helper, scroll-reveal-observers en case-study-layouts worden per pagina opnieuw gebouwd i.p.v. gedeeld; (3) de rebrand is maar half doorgevoerd: "AI Marketing"→"Digitale Marketing" en "Webdesign"→"Maatwerk Software" ontbreken op subpagina's, layout-metadata, JSON-LD en het contactformulier — consistent met de bekende status dat alleen fase 1 (homepage) is afgerond; (4) Tailwind's accent/ink-kleurtokens zijn gedefinieerd maar nul keer gebruikt, kleuren staan overal als losse hex-strings wat drift zoals het groentoken juist veroorzaakt; (5) veel kleine, triviale restanten (ongebruikte imports, dode CSS-classes/props/velden) uit eerdere iteraties; (6) contentinconsistenties los van code maar wel vertrouwen-rakend (tegenstrijdige reactietijd 24u vs 2u, prijscontradictie in een blogpost, wisselende ik/we-verteller, twee verschillende live-URL's voor Creemers Exclusive) en een paar "vergeten koppelingen" (Creemers Exclusive niet gelinkt vanaf /portfolio, een al geüploade Auwt Aelse-previewvideo die nergens wordt gebruikt, ~27MB ongebruikte asset-mappen).

**Prioriteit:** 🔴 P0: 14  ·  🟡 P1: 20  ·  🟢 P2: 6

## Per categorie

- [Dode code](#dode-code) — 7
- [Gedupliceerde logica](#gedupliceerde-logica) — 6
- [Inconsistente design-tokens](#inconsistente-design-tokens) — 4
- [Debug-restanten](#debug-restanten) — 1
- [Weesbestanden](#weesbestanden) — 3
- [Overig](#overig) — 7
- [Verouderde/inconsistente copy](#verouderdeinconsistente-copy) — 9
- [Ongebruikte imports/variabelen](#ongebruikte-importsvariabelen) — 3

---

## Dode code

### `src/app/page.tsx:1526` — 🔴 P0 — kritiek

**Bevinding.** Onbenutte CSS: .anim.anim-from-left en de media-query variant worden nergens in de JSX toegepast.

**Aanbeveling.** Verwijderen; restant van een eerdere 'slide-in from left' animatie, inmiddels vervangen door .photo-diag-reveal.

*Zekerheid: high*

### `src/app/globals.css:42` — 🔴 P0 — kritiek

**Bevinding.** Drie onbenutte CSS-utilities: .hero-video-zoom (42-50) en .hero-title-mobile (52-63) komen nergens als className voor (restant van een oud video-hero-ontwerp), en .text-balance (28-31) is overbodig naast de al globaal toegepaste 'h1,h2,h3,h4{text-wrap:balance}'-regel erboven.

**Aanbeveling.** Verwijder alle drie ongebruikte blokken uit globals.css.

*Zekerheid: high*

### `src/app/diensten/processen/page.tsx:714` — 🔴 P0 — kritiek

**Bevinding.** Onbenutte CSS-hooks rond de processen-visuals: '.anim.delay-2' is gedefinieerd in zowel diensten/processen/page.tsx (714) als src/components/processen/Visuals.tsx (294, via ProcessStyles) maar wordt door geen enkele consument toegepast; daarnaast hebben de classNames ba-url/ba-meta/ba-screen (regels 458/474/477 in processen/page.tsx) geen bijbehorende CSS-regel meer — in de Limburg-kopie zijn ze al verwijderd.

**Aanbeveling.** Verwijder de ongebruikte delay-2-regel uit beide bestanden (of gebruik hem voor een bedoelde 3-staps stagger), en verwijder de effectloze ba-url/ba-meta/ba-screen classNames.

*Zekerheid: high*

### `src/app/portfolio/page.tsx:120` — 🔴 P0 — kritiek

**Bevinding.** De 'large'-prop op BrowserMockup heeft geen enkel effect: beide takken van de ternary renderen dezelfde class ('aspect-[16/10]'), ondanks expliciete doorgave op regel 293.

**Aanbeveling.** Verwijder de dode prop, of herstel de bedoelde afwijkende aspect ratio voor de large-variant.

*Zekerheid: high*

### `src/components/Advisor.tsx:164` — 🔴 P0 — kritiek

**Bevinding.** LETTERS bevat een 5e waarde ('E') die nooit gerenderd kan worden: elke Step in STEPS heeft maximaal 4 opties.

**Aanbeveling.** Trim LETTERS naar ['A','B','C','D'], of maak de array afhankelijk van de langste options-array.

*Zekerheid: high*

### `src/components/CityPage.tsx:20` — 🔴 P0 — kritiek

**Bevinding.** Twee dode/verweesde velden in CityData: 'testimonialCity' staat in het type maar wordt nergens gerenderd én nooit gezet door de 5 locatiepagina's; 'slug' (regel 22) heeft een fallback (data.city.toLowerCase()) die altijd gebruikt wordt omdat geen enkele pagina het veld expliciet zet.

**Aanbeveling.** Verwijder beide ongebruikte velden uit CityData, of implementeer testimonialCity alsnog en vul slug expliciet in waar nodig.

*Zekerheid: medium*

### `src/components/SectorTemplate.tsx:52` — 🟢 P2 — nice-to-have

**Bevinding.** Dode fallback-branches: 'data.sectorPhrase ?? "mijn bedrijf"' en 'data.sliderSub ?? "..."' zijn onbereikbaar — sectorPhrase is een verplicht string-veld en alle 4 huidige sectordata-objecten zetten altijd sliderSub.

**Aanbeveling.** Verwijder de fallbacks, of maak de velden bewust optioneel als ze bedoeld zijn als vangnet voor toekomstige sectorpagina's.

*Zekerheid: low*

---

## Gedupliceerde logica

### `src/app/diensten/processen/page.tsx:8` — 🟡 P1 — belangrijk

**Bevinding.** ~800 regels gedupliceerde logica: dit bestand herdefinieert lokaal ACCENT, BeforeScreen, AfterScreen, FlowDiagram, CostIcon, Field en het volledige ProcessStyles-stijlblok i.p.v. te importeren uit het gedeelde src/components/processen/Visuals.tsx, dat processen/limburg/page.tsx en SectorTemplate.tsx al wél correct importeren. BeforeScreen is byte-for-byte identiek geverifieerd. (Onafhankelijk 3x gerapporteerd in de ruwe scans.)

**Aanbeveling.** Vervang de lokale definities door 'import { ACCENT, BeforeScreen, AfterScreen, FlowDiagram, CostIcon, Field, ProcessStyles, useRevealOnScroll, useBeforeAfterScrub } from "@/components/processen/Visuals"', zoals limburg/page.tsx al doet. Voorkomt dat fixes (zoals het groentoken hierboven) op twee plekken moeten.

*Zekerheid: high*

### `src/app/page.tsx:17` — 🟡 P1 — belangrijk

**Bevinding.** Het PortfolioVideo-component (IntersectionObserver-gestuurd play/pause) staat woordelijk gedupliceerd in src/app/page.tsx (17-40) en src/app/portfolio/page.tsx (70-93).

**Aanbeveling.** Verplaats naar een gedeeld bestand, bijv. src/components/PortfolioVideo.tsx, en importeer op beide plekken.

*Zekerheid: high*

### `src/app/portfolio/creemers-exclusive/page.tsx:8` — 🟡 P1 — belangrijk

**Bevinding.** Drie case-study pagina's (creemers-exclusive, ijssalon-italia, stacy-kohnen) hand-rollen een oudere bg-white/bg-black layout (eigen hero, stats, features, resultaten, CTA, eigen fadeInUp/animate-on-scroll keyframes) i.p.v. het gedeelde, op het huidige dark-theme gebouwde CaseStudyTemplate te gebruiken zoals chefs-connect en auwt-aelse al doen.

**Aanbeveling.** Migreer deze 3 pagina's naar CaseStudyTemplate (of retire ze bewust) om ~900 regels getriplyceerde markup en de visuele inconsistentie met de rest van de site op te lossen.

*Zekerheid: medium*

### `src/app/contact/page.tsx:87` — 🟡 P1 — belangrijk

**Bevinding.** De WhatsApp message-builder-functie en de 24-regelige icoon-SVG-path zijn woordelijk gedupliceerd over contact/page.tsx (87-100,153,237), eerste-website/page.tsx (41-57,556) en vervanging/page.tsx (41-57,540), zonder gedeelde helper/component.

**Aanbeveling.** Extraheer een gedeelde buildWhatsAppUrl(message)-helper en <WhatsAppIcon />-component en importeer die op alle drie plekken.

*Zekerheid: high*

### `src/app/blog/page.tsx:39` — 🟡 P1 — belangrijk

**Bevinding.** Scroll-reveal (IntersectionObserver) is los geïmplementeerd in minstens 7 bestanden met 3 uiteenlopende class-name-conventies: blog/page.tsx (39-48) dupliceert woordelijk het CSS/observer-blok van src/components/BlogPost.tsx (45-54); bedankt/page.tsx en gratis-checklist/page.tsx gebruiken '.anim'; contact/page.tsx en over-ons/page.tsx gebruiken '.anim'+'.hv'; eerste-website/page.tsx en vervanging/page.tsx gebruiken '.animate-on-scroll'.

**Aanbeveling.** Extraheer één gedeelde useScrollReveal()-hook plus gedeeld CSS-fragment dat alle pagina's importeren i.p.v. de observer-logica en klasseconventie telkens opnieuw te verzinnen.

*Zekerheid: medium*

### `src/app/maatwerk-software/bouw/page.tsx:5` — 🟡 P1 — belangrijk

**Bevinding.** Elk van de 4 sectorpagina's (bouw, installatiebedrijf, logistiek, zorg) definieert lokaal 'const A = "#d4a574"' i.p.v. de al geëxporteerde ACCENT-token uit @/components/processen/Visuals te importeren, die SectorTemplate.tsx (dat deze pagina's zelf renderen) al gebruikt.

**Aanbeveling.** Importeer ACCENT i.p.v. de hex opnieuw te typen in alle 4 bestanden, zodat de kleur gesynchroniseerd blijft met de rest van het gedeelde sjabloon.

*Zekerheid: medium*

---

## Inconsistente design-tokens

### `src/components/processen/Visuals.tsx:342` — 🔴 P0 — kritiek

**Bevinding.** Leftover groene kleur (rgba(52,211,153,…) = #34d399) breekt de amber ACCENT-conventie (#d4a574) op drie plekken: het .ba-window-glow in Visuals.tsx (342) en het byte-for-byte gedupliceerde blok in src/app/diensten/processen/page.tsx (766), plus de ambient glow op src/app/bedankt/page.tsx (29). #34d399 is elders bewust gereserveerd voor het WhatsApp-icoon, dus het gebruik hier is een restant van een eerdere groene ontwerpvariant.

**Aanbeveling.** Vervang in alle drie bestanden door een ACCENT-afgeleide rgba (bijv. de gouden glow-waarde die al gebruikt wordt op src/app/gratis-checklist/page.tsx:57).

*Zekerheid: high*

### `tailwind.config.ts:20` — 🟡 P1 — belangrijk

**Bevinding.** De volledige colors.accent- (amber/indigo/rose/teal/tan/violet/mint/gold) en colors.ink-schaal zijn gedefinieerd maar nergens als Tailwind-klasse gebruikt (0 hits op accent-*/ink-*); overal in de site — met name de blog-bestanden (blog/page.tsx:16,25,34,62-63,90-91; n8n-make-zapier/page.tsx:26; wat-kost-een-website/page.tsx:26; website-laten-maken-limburg/page.tsx:26; BlogPost.tsx:62,75) — staan exact dezelfde waarden (o.a. #d4a574=accent.tan, #a78bfa=accent.violet) als losse arbitrary hex-strings hardcoded.

**Aanbeveling.** Gebruik de bestaande tokens daadwerkelijk (bijv. bg-accent-tan i.p.v. bg-[#d4a574]) zodat kleurwijzigingen centraal blijven, of verwijder het ongebruikte palet uit tailwind.config.ts.

*Zekerheid: high*

### `src/app/diensten/page.tsx:21` — 🟡 P1 — belangrijk

**Bevinding.** De per-discipline merkkleuren die de hub-pagina toekent (DISCIPLINES: geel voor web #fbbf24, roze/rood voor marketing #f43f5e, teal voor drone #14b6a6) komen op geen enkele van de daadwerkelijke subdienst-pagina's (web/marketing/drone) voor — alleen 'processen' is consistent doorgevoerd met zijn hub-kleur #d4a574.

**Aanbeveling.** Voer het beloofde kleursysteem ook door op web/marketing/drone, of verwijder het ongebruikte kleurendiagram als het niet wordt doorgezet.

*Zekerheid: medium*

### `src/components/processen/Visuals.tsx:167` — 🟢 P2 — nice-to-have

**Bevinding.** Inconsistente icoonkleur binnen hetzelfde bestand: FlowDiagram's checkmark (text-[#06281f]) en .ba-handle (color:#06281f) gebruiken donkergroen, terwijl AfterScreen's vergelijkbare checkmarks (text-[#080b0a]) near-black gebruiken voor dezelfde 'donker icoon op ACCENT-achtergrond'-rol.

**Aanbeveling.** Standaardiseer op één kleur (bijv. #080b0a, dat overeenkomt met het near-black achtergrondtoken elders in de app).

*Zekerheid: low*

---

## Debug-restanten

### `src/app/gratis-checklist/page.tsx:39` — 🟡 P1 — belangrijk

**Bevinding.** Leftover implementatie-commentaar '// In productie: stuur naam + e-mail ook naar API/Mailchimp/Resend.' erkent dat het leadformulier naam/e-mail nergens daadwerkelijk naartoe verstuurt — een onopgelost functioneel gat in live code, niet alleen dode code.

**Aanbeveling.** Koppel het formulier daadwerkelijk aan een e-mail/CRM-dienst, of vervang het commentaar door een getrackte TODO/issue-referentie i.p.v. het gat inline te laten staan.

*Zekerheid: medium*

---

## Weesbestanden

### `src/app/portfolio/page.tsx:21` — 🟡 P1 — belangrijk

**Bevinding.** Creemers Exclusive case study (pagina + layout bestaan, staat in sitemap.ts, wordt als testimonial geciteerd op de homepage) ontbreekt in de 'projects'-array van de portfolio-hub, en is dus onbereikbaar vanaf /portfolio behalve via directe URL of zoekmachine.

**Aanbeveling.** Voeg een project-entry toe voor Creemers Exclusive, of verwijder de route/sitemap-vermelding als de case bewust wordt uitgefaseerd.

*Zekerheid: high*

### `public/rsc/houseofchocolate/hero.png` — 🟡 P1 — belangrijk

**Bevinding.** Verweesde asset-mappen public/rsc/houseofchocolate/ en public/rsc/sapersoneel/ (7 bestanden, ~27MB) worden nergens in src/ gerefereerd.

**Aanbeveling.** Bouw de bijbehorende portfolio-entries/case-study pagina's alsnog, of verwijder de mappen om de deploy-grootte te verkleinen.

*Zekerheid: medium*

### `src/app/diensten/processen/limburg/page.tsx:1` — 🟢 P2 — nice-to-have

**Bevinding.** Deze pagina staat wel in sitemap.ts maar wordt nergens intern gelinkt vanuit de diensten-sectie (niet vanuit de hub, niet vanuit processen/page.tsx, niet vanuit navigatie) — mogelijk een bewuste SEO-only landingspagina.

**Aanbeveling.** Als interne vindbaarheid gewenst is, voeg een link toe, bijv. vanuit de 'SECTOREN'/regio-sectie van processen/page.tsx of het hoofdmenu.

*Zekerheid: low*

---

## Overig

### `tailwind.config.ts:5` — 🔴 P0 — kritiek

**Bevinding.** De content-array bevat './src/pages/**/*.{js,ts,jsx,tsx,mdx}', maar dit project heeft geen src/pages-map (App Router-only).

**Aanbeveling.** Verwijder de dode glob uit de content-array.

*Zekerheid: high*

### `src/app/portfolio/ijssalon-italia/page.tsx:79` — 🔴 P0 — kritiek

**Bevinding.** 'BEKIJK LIVE WEBSITE'-knop is een dode link (href='#') i.p.v. de echte domeinnaam, die elders op de site al bekend is.

**Aanbeveling.** Zet href op https://ijssalonitaliavaals.nl (zoals gebruikt in de portfolio-hub, src/app/portfolio/page.tsx:51).

*Zekerheid: high*

### `src/app/portfolio/ijssalon-italia/page.tsx:509` — 🔴 P0 — kritiek

**Bevinding.** 'MEER CASES'-knop linkt naar de homepage (href='/') i.p.v. het portfolio-overzicht.

**Aanbeveling.** Wijzig href naar /portfolio, consistent met de fallback in CaseStudyTemplate.tsx:370.

*Zekerheid: high*

### `src/app/over-ons/page.tsx:257` — 🔴 P0 — kritiek

**Bevinding.** '.hv-4 { animation-delay: 0.32s }' dupliceert de delay van .hv-3, waardoor het founder-photo-blok gelijktijdig i.p.v. ná de paragraaf erboven animeert.

**Aanbeveling.** Wijzig naar 0.46s, zoals de correcte hv-1..4 stagger-sequentie in src/app/contact/page.tsx:283.

*Zekerheid: high*

### `src/app/locaties/eindhoven/page.tsx:27` — 🟡 P1 — belangrijk

**Bevinding.** Eindhoven en Maastricht gebruiken beide exact #d4a574, terwijl elke andere stadspagina (Aken #ef4444, Heerlen #a78bfa, Sittard #fb923c) een unieke accentkleur heeft — vermoedelijk copy-paste restant.

**Aanbeveling.** Geef Eindhoven (of Maastricht) een eigen unieke accentkleur zodat elke stad, zoals bedoeld, een onderscheidende visuele identiteit houdt.

*Zekerheid: high*

### `src/app/portfolio/page.tsx:34` — 🟡 P1 — belangrijk

**Bevinding.** Het bestaande preview-video-asset public/rsc/auwtaelse/preview.mp4 (zelfde naamconventie als het wél gekoppelde Chefs Connect) is nergens gekoppeld: de hub-kaart (portfolio/page.tsx:34, image:null, geen video-key) én de case-study hero (auwt-aelse/page.tsx:22, heroImage:null, geen heroVideo) tonen daardoor de lege-staat placeholder i.p.v. de echte preview.

**Aanbeveling.** Voeg 'video: "/rsc/auwtaelse/preview.mp4"' toe aan de hub-entry en 'heroVideo: "/rsc/auwtaelse/preview.mp4"' aan de case-study data.

*Zekerheid: high*

### `src/app/locaties/aken/page.tsx:37` — 🟡 P1 — belangrijk

**Bevinding.** De Aken-pagina mixt talen inconsistent: meta-title/description en FAQ volledig Duits, industries-lijst Duitse zelfstandige naamwoorden, maar intro/vibe en twee van de vier highlight-omschrijvingen zijn Nederlands, terwijl de CTA-knoppen in CityPage.tsx altijd NL/EN blijven ongeacht de stad.

**Aanbeveling.** Kies één duidelijke taalstrategie voor de Aken-pagina i.p.v. een ongecontroleerde NL/DE-mix.

*Zekerheid: medium*

---

## Verouderde/inconsistente copy

### `src/app/diensten/marketing/page.tsx:60` — 🟡 P1 — belangrijk

**Bevinding.** De 'AI Marketing'-rebrand naar 'Digitale Marketing' is niet volledig doorgevoerd: de subpagina zelf heeft nog H1 'AI / MARKETING' en AI-copy door de hele pagina; layout.tsx heeft nog title 'AI Marketing & SEO | Dynique' en serviceType 'AI Marketing, Content & SEO'; de JSON-LD ItemList op de hub (diensten/page.tsx:64) zegt nog 'AI Marketing' terwijl de zichtbare kaart al 'DIGITALE MARKETING' zegt (diensten/page.tsx:24); en het contactformulier op de homepage (page.tsx:1283) heeft nog de optie value='AI Marketing' terwijl andere opties al de nieuwe naamgeving volgen.

**Aanbeveling.** Update alle genoemde plekken (marketing/page.tsx, marketing/layout.tsx, diensten/page.tsx JSON-LD, homepage contactformulier) consistent naar de nieuwe 'Digitale Marketing'-positionering.

*Zekerheid: high*

### `src/app/locaties/aken/page.tsx:5` — 🟡 P1 — belangrijk

**Bevinding.** Locatiepagina's zijn nog volledig gepositioneerd als 'Webdesign bureau/agentur': titles/descriptions/OpenGraph op alle 5 pagina's (aken, eindhoven, heerlen, maastricht, sittard, elk regels 5,6,9-10,24) en CityPage.tsx (jsonLd name regel 33, badge 'Webdesign · {stad}' regel 97), terwijl layout.tsx al is omgezet naar 'Maatwerk Software & Development'.

**Aanbeveling.** Update alle 5 pagina's plus CityPage.tsx consistent naar de nieuwe 'maatwerk software'-positionering.

*Zekerheid: high*

### `src/app/portfolio/creemers-exclusive/page.tsx:75` — 🟡 P1 — belangrijk

**Bevinding.** CTA-knop 'BEKIJK LIVE WEBSITE' linkt naar de Cloudflare Pages preview (creemers.pages.dev), terwijl de homepage-testimonial voor dezelfde klant creemersexclusive.nl citeert als live site.

**Aanbeveling.** Kies één canonieke URL voor Creemers Exclusive en gebruik die consistent op beide plekken.

*Zekerheid: high*

### `src/app/page.tsx:1235` — 🟡 P1 — belangrijk

**Bevinding.** Tegenstrijdige reactietijd-belofte op dezelfde pagina: CTA-tegel (964,972) en contactintro (1229) beloven 'binnen 24 uur', maar het contactgegevens-blok direct eronder (1235) belooft 'Binnen 2 uur (ma–za, 9–20u)'.

**Aanbeveling.** Kies één reactietijd-belofte en gebruik die consistent op alle vier de plekken.

*Zekerheid: high*

### `src/app/blog/wat-kost-een-website/page.tsx:94` — 🟡 P1 — belangrijk

**Bevinding.** Prijscontradictie: het artikel stelt eerder dat Dynique's websites vallen in het segment €4.000-€15.000 (regel 48-50), maar zegt verderop dat een gemiddelde MKB-website bij Dynique 'begint rond €3.500' — onder de eigen ondergrens.

**Aanbeveling.** Maak de startprijs consistent met het eerder geclaimde segment, of pas de segmentgrens aan.

*Zekerheid: high*

### `src/app/page.tsx:834` — 🟡 P1 — belangrijk

**Bevinding.** De verteller wisselt ongemotiveerd tussen enkelvoud en meervoud: manifesto/FAQ positioneren Dynique als solo-oprichter ('Ik kom aan tafel zitten...', 'OPRICHTER · DYNIQUE'), terwijl 'Het Traject'-stappen (834,843,852,861) en de contactintro (1229) in 'we' spreken.

**Aanbeveling.** Kies consistent 'ik' (solo-founder toon, past bij foto-caption en manifesto) of 'we' door de hele pagina heen.

*Zekerheid: medium*

### `src/app/blog/page.tsx:29` — 🟢 P2 — nice-to-have

**Bevinding.** De posttitel in de blog-index wijkt af van de H1 die de post zelf toont via zijn lokale meta-object — handmatig gedupliceerde metadata (titel/categorie/readTime/date/accent/slug) tussen index en post, al uit sync geraakt.

**Aanbeveling.** Exporteer één meta-object per post en importeer dat in blog/page.tsx voor de indexkaart, i.p.v. de velden opnieuw te typen.

*Zekerheid: medium*

### `src/app/portfolio/ijssalon-italia/page.tsx:160` — 🟢 P2 — nice-to-have

**Bevinding.** Twee kapotte hoofdletter-typo's: 'ONduidelijke OPENINGSTIJDEN' (160) en 'DUidelijke' (343), terwijl elke andere sectiekop op de pagina volledig in hoofdletters staat.

**Aanbeveling.** Corrigeer naar 'ONDUIDELIJKE OPENINGSTIJDEN' en 'DUIDELIJKE'.

*Zekerheid: high*

### `src/app/locaties/sittard/page.tsx:21` — 🟢 P2 — nice-to-have

**Bevinding.** Meta-title/description en Footer.tsx noemen consequent 'Sittard-Geleen', maar data.city:'Sittard' zorgt dat alle on-page koppen (H1 en verder) alleen 'Sittard' tonen — 'Geleen' verschijnt nergens zichtbaar, in tegenstelling tot de SEO-titel.

**Aanbeveling.** Overweeg city/cityShort aan te passen naar 'Sittard-Geleen' voor consistentie met de SEO-titel, of houd de titel bewust kort.

*Zekerheid: low*

---

## Ongebruikte imports/variabelen

### `src/app/page.tsx:10` — 🔴 P0 — kritiek

**Bevinding.** Onbenutte import: FlowDiagram wordt geïmporteerd van @/components/processen/Visuals maar nergens in dit bestand gebruikt.

**Aanbeveling.** Verwijder FlowDiagram uit de import op regel 7-13; het component blijft correct gebruikt in src/app/diensten/processen/page.tsx en src/components/SectorTemplate.tsx.

*Zekerheid: high*

### `src/app/portfolio/creemers-exclusive/page.tsx:3` — 🔴 P0 — kritiek

**Bevinding.** Onbenutte React-imports (useEffect/useState) in drie case-study pagina's: creemers-exclusive en stacy-kohnen/page.tsx gebruiken beide hooks nergens; ijssalon-italia/page.tsx gebruikt useEffect wel (scroll-observer) maar useState niet.

**Aanbeveling.** Verwijder de ongebruikte imports (creemers-exclusive/stacy-kohnen kunnen de hele react-import laten vervallen; bij ijssalon-italia alleen useState verwijderen).

*Zekerheid: high*

### `src/app/contact/page.tsx:4` — 🔴 P0 — kritiek

**Bevinding.** Onbenutte import: 'Link' van next/link wordt nergens gebruikt — de pagina rendert alleen plain <a>-tags (tel:, mailto:, wa.me).

**Aanbeveling.** Verwijder de ongebruikte import.

*Zekerheid: high*

---
