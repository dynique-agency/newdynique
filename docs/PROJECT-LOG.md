# Project Log — Dynique Website

Doorlopend logboek van alle werk aan de codebase: wat er is veranderd, waarom, en door wie. Nieuwste entry bovenaan. Voor de actuele launch-status zie [`LAUNCH-PLAN.md`](./LAUNCH-PLAN.md).

**Conventie:** elke entry heeft een datum, een korte titel, wat er is gedaan, en — als het relevant is — een expliciete "Nog te doen" of "Beslissing nodig van klant" regel. Geen vage samenvattingen; concrete bestanden en resultaten.

---

## 2026-09-10 (later, tweede deel) — Alle 10 bevindingen uit de kritische scan van de laatste 3 homepage-secties opgelost

**Aanleiding:** na de kritische scan van Statement Strip/Contact/FAQ (zie vorige entry) — "verbeter het volledig."

**1+2. Lead-capture had geen gegarandeerd afleverpad.** `functions/api/lead.ts` kreeg een `landingspagina`-source-label. **`src/components/LeadFormSection.tsx`** — het gedeelde leadformulier op alle 13 stads- en 7 sectorpagina's plus 6 losse pagina's (26 plekken totaal) — had helemaal geen `/api/lead`-aanroep, alleen WhatsApp. Nu toegevoegd (fire-and-forget, blokkeert de WhatsApp-flow niet), en `TELEFOON` is verplicht gemaakt zodat de API's contact-eis (e-mail óf telefoon) altijd gehaald wordt.

**3. Geen zichtbare bevestiging na versturen.** Homepage-contactformulier (`src/app/page.tsx`) redirect nu, net als `/gratis-checklist`, na 600ms naar `/bedankt?name=...` — zelfde patroon, live geverifieerd. `LeadFormSection.tsx` (blijft op dezelfde pagina, WhatsApp opent apart) toont nu een inline bevestigingskaart ("Bericht klaargezet.") in plaats van stilzwijgend niets te doen — live geverifieerd op `/locaties/breda`.

**4. Geen prijsindicatie-FAQ op de homepage.** Toegevoegd aan `faqs` in `page.tsx`, exact dezelfde formulering als de gedeelde `PRICE_FAQ` op alle stads-/sectorpagina's.

**5. FAQ-rich-results bestaan niet meer sinds mei 2026.** Geverifieerd via web search: Google heeft de `FAQPage`-rich-result op 7 mei 2026 volledig uit Search gehaald. `STRATEGY.md` (§4, FAQ-bullet) bijgewerkt met deze correctie — de JSON-LD blijft staan (onschadelijk, mogelijk nog relevant voor AI-antwoorden), maar de "rich snippet in SERP"-aanname is niet meer waar.

**6. `#contact` en `#faq` hadden geen `scroll-margin`.** Bij een anchor-sprong (`START JE PROJECT` → `#contact`) verdween de sectiekop deels achter de fixed header. `scroll-mt-24` toegevoegd aan beide secties (zelfde waarde als `LeadFormSection.tsx`'s `#analyse` al gebruikte) — live geverifieerd: kop nu volledig vrij van de header.

**7. Geen social proof vlak bij het formulier.** Compacte vertrouwensregel toegevoegd boven "Vertel ons over je project" (5.0 · geverifieerde reviews, 30+ klanten — bestaande, al elders gebruikte cijfers, niets nieuws verzonnen).

**8. "Fysiek" zonder afstandscontext.** Conditionele hint toegevoegd onder de afsprakenkeuze zodra "Fysiek" gekozen wordt, met dezelfde digitale-intake-boodschap als de nieuwe locatiepagina's.

**9. Geen `autoComplete`-attributen.** Toegevoegd aan alle naam/e-mail/bedrijf/telefoon-velden op de homepage én in `LeadFormSection.tsx` (via een nieuwe optionele prop op de gedeelde `Field`-component in `processen/Visuals.tsx`).

**10. Vage WERKGEBIED-regel.** Herschreven naar "Heel Nederland & België — op locatie in Zuid-Limburg, digitale intake voor de rest", consistent met de Breda/Vlissingen/Goes-positionering van gisteren.

**Geverifieerd:** `npx tsc --noEmit` en volledige `npm run build` schoon. Homepage-formulier end-to-end getest in de browser (invullen → versturen → redirect naar `/bedankt?name=...`). `LeadFormSection`-bevestiging getest op `/locaties/breda` (WhatsApp-popup gestubd om de test niet te laten navigeren — in een echte browser met een vertrouwde klik gebeurt dat niet). Scroll-margin op `#contact`/`#faq` bevestigd via `getComputedStyle` (96px, > headerhoogte).

**Nog niet gepusht** — samen met al het overige werk van deze sessie staat dit nog lokaal, geen commits richting `origin/main`.

---

## 2026-09-10 (later) — Tweede GSC-export gecheckt: bevestigt stabiliteit, nog geen meetbaar effect

**Aanleiding:** eigenaar leverde een nieuwe Search Console-export aan (`/Users/john/Downloads/dynique-2/`), gevraagd om de SEO-documentatie bij te werken.

**Uitgevoerd:** export gearchiveerd in `docs/seo/data/gsc-export-2026-09-10/`, volledige regel-voor-regel diff gedraaid tegen de vorige export (2026-09-08) op `Zoekopdrachten.csv`, `Paginas.csv` en `Landen.csv`. Bevindingen vastgelegd in `docs/seo/GSC-FINDINGS-2026-09.md` §12.

**Kern van de bevinding:** dit is in de praktijk hetzelfde rollende 90-dagen-venster als de vorige export, nu 1 dag verder — geen nieuwe zoektermen, geen van de nieuwe locatiepagina's (Breda/Vlissingen/Goes) al zichtbaar in de top-pagina's, Eindhoven's 0-click-patroon ongewijzigd (nu 8.114 vertoningen i.p.v. 7.794, nog steeds 0 clicks). Dat is een verwacht, geen zorgwekkend resultaat: de pagina's/fixes van gisteren (2026-09-09/10) zijn te vers om al in Search Console te zien. Geen wijziging aan `STRATEGY.md` nodig — het bevestigt het al langer openstaande advies om over 2-4 weken pas een echte meting te doen.

---

## 2026-09-10 — Diensten-dropdown in de header klapte in voordat je 'm kon bereiken

**Aanleiding:** gebruiker meldde: "als ik met mijn muis over de header ga op diensten kan ik niks selecteren van die vier in de dropdown want als ik met mijn muis daarnaartoe wil gaan klapt die weer in."

**Root cause:** `src/components/Header.tsx` — de dropdown onder "DIENSTEN" gebruikte `mt-4` (margin) om een zichtbare tussenruimte te maken tussen de trigger en het dropdown-paneel. Omdat het paneel `position: absolute` is (dus buiten de normale flow van de omringende `onMouseEnter`/`onMouseLeave`-wrapper valt), telt die 16px tussenruimte niet mee als onderdeel van een hoverbaar element — zodra de muis daar doorheen beweegt op weg naar de dropdown, vuurt `onMouseLeave` op de wrapper en sluit het menu, vóórdat de cursor een item kan bereiken. Klassieke "dead zone"-bug bij hover-dropdowns.

**Fix:** `mt-4` (margin, buiten het element) vervangen door `pt-4` (padding, binnen het element) op de buitenste positioneringsdiv, met de zichtbare styling (witte achtergrond/rand/schaduw) verplaatst naar een binnenste div. Resultaat: dezelfde visuele 16px-marge, maar nu een onzichtbare "brug" die gewoon tot de hoverbare box van het element behoort — de muis blijft continu binnen een afstammeling van de wrapper, dus `onMouseLeave` vuurt niet meer voortijdig.

**Geverifieerd:** live in de browser op 1440px breedte — hover op DIENSTEN → dropdown opent → muis bewegen naar "Web & Platformen" (een item in het midden, dus de muis moet echt door de tussenruimte) → dropdown blijft open, item highlight't correct → klik navigeert naar `/diensten/web`. `npx tsc --noEmit` schoon.

---

## 2026-09-09 (nog later, achtste deel) — Volledige mobiel+desktop scan met Playwright CLI

**Aanleiding:** "scan en debug de hele website voor mobiel en desktop met playwright cli." `@playwright/test` toegevoegd als devDependency (was nog niet in het project); een script (niet gecommit, leefde in de scratchpad) bezocht alle 46 routes op 390×844 (mobiel) en 1440×900 (desktop) — 104 checks — en verzamelde console-/netwerkfouten, horizontale overflow, `h1`-aantal, ontbrekende `alt`-teksten en te kleine tik-doelen, plus een full-page screenshot per combinatie.

**Automatische resultaten:** nul horizontale overflow op alle 104 combinaties, nul ontbrekende `alt`-teksten. Twee echte bevindingen, allebei gefixt:
- **Footer-links (Diensten/Ontdek/Locaties, op élke pagina) hadden maar ~20px tikhoogte** — ruim onder de WCAG 2.2 AA-minimumnorm (24px). Gefixt in `src/components/Footer.tsx`: elke link kreeg `py-1.5`, nu ~32px.
- **Homepage had 2 `h1`'s** tijdens de eerste 2,2 seconden (de intro-splash bij een nieuw sessiebezoek, `sessionStorage`-gated) — de splash toonde zelf ook een `<h1>DYNIQUE</h1>` naast de bedoelde, sr-only "echte" H1 verderop. Gefixt in `src/app/page.tsx`: splash-tekst is nu een `aria-hidden`-`<div>`, geen `h1`.

**Ontbrekende paginacoverage gevonden en gedicht:** er bleek helemaal **geen custom 404-pagina** te bestaan (`src/app/not-found.tsx` ontbrak) — een kapotte/oude link toonde de kale, ongestylede standaard Next.js-foutpagina zonder header, footer of terugknop. Nieuw `src/app/not-found.tsx` gebouwd, zelfde visuele taal als de rest van de site (Header/Footer, "Deze pagina bestaat niet (meer)."-boodschap, CTA's naar home/portfolio), `robots: noindex`.

**Visuele audit via een 8-agent Workflow** (screenshots van alle 52 routes, mobiel+desktop) meldde 6× "high severity": bijna alle content onder de hero op meerdere locatiepagina's (Goes, Hasselt, Heerlen, Maasmechelen, Maastricht, Sint-Truiden, Sittard) zou onzichtbaar blijven. **Voordat dit als bug werd behandeld: zelf geverifieerd, want alle locatiepagina's draaien op exact dezelfde `CityPage.tsx` — als het een echte bug was zou die overal moeten optreden, niet bij een deel.** Bevestigd via een los diagnostisch Playwright-script met een realistische scroll-door-de-pagina: tegen de **dev-server** (`next dev`) was het resultaat inderdaad instabiel/flaky (soms 0 van de 32 `.anim`-elementen kregen `animate-in`). Tegen een **echte productie-build** (`npm run build` + statisch geserveerd) was het resultaat **9 van de 9 keer perfect stabiel** (37 van de 40 elementen onthuld, geen enkele afwijking). Conclusie: dit is een **React `reactStrictMode: true`-artefact dat alleen in dev optreedt** (dubbele effect-invocatie rond de `IntersectionObserver`-opzet in `CityPage.tsx`) — **geen echte bug, niet aanwezig op de live site.** Geen codewijziging nodig; wel hier vastgelegd zodat een volgende sessie dit niet opnieuw hoeft uit te zoeken als het in `next dev` weer opduikt.

**Bewust niet aangepakt:** de portfolio-video's (`preview.mp4`) lieten in de scan een paar "aborted request"-meldingen zien (met name `/portfolio/auwt-aelse`) — nader onderzocht (`CaseStudyTemplate.tsx`'s `ScrollAwareVideo`) en dit is een verwacht gevolg van Playwright's full-page-screenshot die snel door de pagina scrolt (video komt in/uit beeld, play()/pause() wisselen elkaar af) — geen echte productiebug. Tik-doelen van het DYNIQUE-logo (32px) en de MENU-knop (31px) zitten onder mijn eigen, strengere interne testdrempel (40px) maar ruim boven de daadwerkelijke WCAG AA-norm (24px) — bewust niet verder aangepast.

**Geverifieerd:** `npx tsc --noEmit` schoon, volledige `npm run build` schoon (alle routes, incl. `/locaties/{breda,goes,vlissingen}` en de nieuwe `not-found`-route). Tijdelijke scanscripts en de productie-testserver zijn opgeruimd, niet gecommit.

---

## 2026-09-09 (nog later, zevende deel) — Breda/Vlissingen/Goes op basis van echt signaal, geen blanket Limburg/Brabant/Zeeland

**Aanleiding:** "kan je nog meer kwalitatieve landingspagina's maken voor in heel limburg brabant zeeland etc, allemaal steden, regio's, vang al het zoekvolume op ook waar de concurrentie nog niet zit." Vóór uitvoering eerst gecheckt of dit door de eigen GSC-data wordt onderbouwd (zie `docs/seo/GSC-FINDINGS-2026-09.md` §11) — een blanket-aanpak zou het scaled-content-risico uit `STRATEGY.md` §5 herhalen op een grotere schaal, en de bestaande Eindhoven-pagina (7.794 vertoningen, positie 61,76, **0 clicks**) is al het levende bewijs dat "meer steden, verder weg" zonder onderliggend signaal niet werkt.

**Wat de data wél liet zien:** van alle Brabantse/Zeeuwse steden hebben alleen Breda (35 vertoningen, positie 59,2), Vlissingen (11, positie 39,6) en Goes (8, positie 37,25) een meetbaar signaal — allemaal op de smallere term "maatwerk software [stad]", niet op de brede, verzadigde "webdesign"-termen die Eindhoven laten mislukken. Tilburg, 's-Hertogenbosch, Middelburg, Terneuzen, Roosendaal, Helmond, Oss en de kale provincienamen: nul vertoningen.

**Aan de eigenaar voorgelegd en beantwoord:** gevraagd of er een zakelijke reden was voor Brabant/Zeeland specifiek. Antwoord: bij grotere maatwerktrajecten start altijd een digitale intake, bezoek pas daarna als het project dat rechtvaardigt; kleinere trajecten (website, gerichte tool) kunnen volledig op afstand. Dit loste het geografische bezwaar (reisafstand 188-223km, geverifieerd via afstand.net) op — niet door de afstand te negeren, maar door de pitch eerlijk aan te passen. Tweede vraag beantwoord: losse stadspagina's per stad (i.p.v. één regiopagina), dus toegepast op de 3 steden met signaal.

**Uitgevoerd:**
- **`src/app/locaties/{breda,vlissingen,goes}/page.tsx`** (nieuw, 3 bestanden) — zelfde `CityPage.tsx`-patroon als de bestaande 10, elk met geverifieerde, echte regionale content: Breda (logistiek/agrofood, Slingerweg-robotica-cluster, Creative District De Strip — bron: gemeentelijke economische visie), Vlissingen (Damen-scheepswerven, North Sea Port, ~200 havenbedrijven, energietransitie), Goes (regiofunctie Zuid-Beveland, Landbouwcentrum Zeeland, fruitteelt 15% van het NL-totaal). Nieuwe accentkleuren (#6366f1, #22d3ee, #4ade80) om overlap met bestaande stadspagina's te vermijden. FAQ's verwoorden expliciet het digitale-intake/op-afstand-model in plaats van de fysiek-bezoek-belofte te forceren.
- **`src/app/locaties/eindhoven/page.tsx`** — `travelTime` gecorrigeerd van "Sittard 40 min · Maastricht 65 min" (afstand vanaf Eindhoven tót andere Limburgse steden — misleidend, verhulde de eigen reisafstand) naar `Vaals ± 1u20` (geverifieerd, 104km). FAQ "Hoe ver is Eindhoven..." herschreven met dezelfde eerlijke digitale-intake/op-afstand-boodschap.
- **`src/app/locaties/page.tsx`** — nieuwe sectie "Verder in Nederland" (Breda/Goes/Vlissingen, met eigen intro die het op-afstand-model uitlegt), hero-paragraaf genuanceerd (niet meer "elke locatie is een plek waar we altijd komen"), FAQ uitgebreid met een aparte vraag over verder-weg-gelegen locaties, "10 locaties" → "deze locaties" (klopte niet meer bij 13).
- **`src/components/Footer.tsx`**, **`src/app/sitemap.ts`** — 3 nieuwe locaties toegevoegd aan de respectievelijke lijsten.
- **`docs/seo/GSC-FINDINGS-2026-09.md`** §11, **`docs/seo/STRATEGY.md`** §2b (nieuw) en §5-tabel, **`docs/seo/GSC-INDEXATIE-WACHTRIJ.md`** — volledige onderbouwing en indexatie-batch vastgelegd.

**Bewust niet gedaan:** Kerkrade (16 vertoningen, positie 46 — zwakker signaal dan de 3 gebouwde steden) en elke stad zonder GSC-signaal (Tilburg, 's-Hertogenbosch, Middelburg, Terneuzen, Roosendaal, Helmond, Oss). Geleen kreeg geen eigen pagina — valt al onder de bestaande `/locaties/sittard` (die Geleen al expliciet noemt) en heeft daar al een sterk signaal (positie 15,6-38).

**Geverifieerd:** alle 3 nieuwe pagina's en de gewijzigde Eindhoven/`/locaties`-pagina's lokaal gecontroleerd via `next dev` (content, reistijd-metadata, geen consolefouten). Nog te doen: `npx tsc --noEmit` en volledige `npm run build` vóór deploy.

---

## 2026-09-08 (later) — Eigen lead-plan: FAQ + prijsindicatie + social proof op 5 pagina's

**Aanleiding:** na het afwegen (en afwijzen, zie hieronder) van betaalde backlink-diensten: *"laten we dan voor nu even ons eigen plan trekken en zorgen dat we daarmee zoveel mogelijk aanvragen krijgen."* Nieuw document `docs/seo/LEAD-PLAN-2026-09.md` legt dit vast als expliciet op *aanvragen* geoptimaliseerd (niet alleen rankings) — de eerste actie daarin overlapt bewust met `STRATEGY.md` Fase 1, omdat dezelfde verdieping (FAQ/prijs/social proof) zowel de SEO-concurrentiegaten als de conversiegaten sluit.

**Eén beslissing gevraagd, gekregen:** hoe prijsindicatie te tonen. Antwoord: subtiel, niet als prominent anker — "kleine tools tot grote bedrijfssoftware, begint vanaf 4k, kan ook 15k of 35k zijn afhankelijk van bedrijfsgrootte/processen/gebruikers." Verwerkt in elke FAQ, consistent verwoord.

**Uitgevoerd (`src/components/SectorTemplate.tsx`, 4× `src/app/maatwerk-software/*/page.tsx`, `src/app/diensten/processen/page.tsx`):**
- `SectorData`-type uitgebreid met verplicht `faq`-veld; nieuwe FAQ-sectie (native `<details>/<summary>`, zelfde patroon als `CityPage.tsx`) + `FAQPage` JSON-LD toegevoegd aan het gedeelde `SectorTemplate.tsx` én los aan `diensten/processen/page.tsx` (die geen `SectorTemplate` gebruikt).
- 4 FAQ-items per pagina geschreven, gegrond op wat er al op elke pagina staat (bijv. zorg krijgt een AVG/privacy-vraag, logistiek een TMS-koppelvraag) — geen vraag zonder dekking in bestaande content verzonnen.
- Nieuwe "GEVERIFIEERDE KLANTEN"-sectie met 2 echte, al site-breed gebruikte reviews (Stacy Kohnen, Chefs Connect) rechtstreeks ingebed. **Bewust géén sectorspecifieke social proof gefabriceerd** — er bestaat nog geen bouw/installatie/zorg/logistiek-case, dus de sectie is expliciet niet als sectorbewijs gepresenteerd, alleen als bewijs van de werkrelatie/kwaliteit.
- `/investering` toegevoegd aan `src/app/sitemap.ts` (was gedocumenteerd gat, triviale fix).

**Bewust niet aangepakt:** de H1 op alle `/locaties/*`-pagina's zegt nog "Website laten maken in {stad}" i.p.v. "Maatwerk software" — een nieuwe, tijdens dit werk gevonden verklaring voor het Eindhoven-patroon uit `GSC-FINDINGS-2026-09.md`. Blijft expliciet voor de volgende contentronde staan (zie `LEAD-PLAN-2026-09.md` §1 punt 6), niet losstaand meegenomen om scope beheersbaar te houden.

**Geverifieerd:** `npx tsc --noEmit` en volledige `npm run build` schoon (alle routes). Live gecontroleerd via `next dev` — FAQ-content, `FAQPage`-JSON-LD (3 scripts totaal per pagina, geen conflict met bestaande schema) en de social-proof-sectie kloppen op `/maatwerk-software/bouw`, `/maatwerk-software/zorg` en `/diensten/processen`; `<details>`-toggle werkt.

---

## 2026-09-09 (later, zesde deel) — Google Analytics 4 gebouwd, AVG-conform met cookiebanner

**Aanleiding:** "wat kunnen we nog doen? jij bent specialist" — het grootste, herhaaldelijk genoemde maar nooit opgeloste gat was analytics: geen enkel zicht op gedrag ná een klik, ondanks alle SEO-werk deze sessie. Gevraagd welke variant; gekozen: **GA4**.

**Zelf gevonden vóór de bouw:** de privacyverklaring (`/privacyverklaring`, NL én EN) zei expliciet en met nadruk "Wij gebruiken op dit moment **geen** Google Analytics" en beloofde een cookiebanner zodra dat zou veranderen. GA4 zomaar toevoegen zonder dit aan te passen had de site in directe tegenspraak met haar eigen juridische pagina gezet.

**Uitgevoerd:**
- **`src/components/CookieConsent.tsx`** (nieuw) — banner (Accepteren/Weigeren) die alleen verschijnt als `NEXT_PUBLIC_GA_MEASUREMENT_ID` is ingesteld. GA4 (`gtag.js`) wordt pas dynamisch geladen ná "Accepteren", met `anonymize_ip: true`. Keuze wordt onthouden in `localStorage`, banner verschijnt daarna nooit meer. Zonder env var: volledige no-op, geen banner, geen enkel script — veilig om te shippen vóórdat de eigenaar een GA4-property heeft.
- **`src/app/layout.tsx`** — component ingeplugd in de body.
- **`src/app/privacyverklaring/page.tsx`** (NL + EN) — §3.5 en §6 herschreven om de nieuwe, echte situatie te beschrijven: GA4 wordt gebruikt, uitsluitend na toestemming via de cookiebanner, IP-adressen geanonimiseerd, geen Meta Pixel.
- **`docs/GA4-SETUP.md`** (nieuw) — stappen voor de eigenaar: GA4-property aanmaken (kan ik niet namens hem, accountaanmaak), Measurement ID als `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Cloudflare Pages zetten, met de kanttekening dat dit een build-time variabele is (nieuwe deploy nodig, gebeurt vanzelf bij de eerstvolgende push).

**Geverifieerd, uitgebreid:** lokaal getest met een tijdelijke test-Measurement-ID (`G-TEST12345`, niet gecommit) — banner verschijnt correct, "Accepteren" laadt het GA4-script met het juiste ID en onthoudt de keuze, "Weigeren" laadt nooit iets, herladen na een keuze toont de banner niet opnieuw. `npx tsc --noEmit` en volledige build schoon.

**Nog te doen (eigenaar):** GA4-property aanmaken en het Measurement ID instellen — zie `docs/GA4-SETUP.md`. Tot die tijd verandert er niets op de live site.

---

## 2026-09-09 (later, vijfde deel) — Zelf gevonden fouten uit de strenge analyse gecorrigeerd + systemische JSON-LD-bug ontdekt

**Aanleiding:** expliciet gevraagd om streng te analyseren wat ik nog beter kon doen — geen zelfrelativering, met bewijs. Vier concrete bevindingen, alle vier vandaag zelf geïntroduceerd, alle vier hersteld.

**1. Drone-FAQ sprak de eigen site tegen.** Mijn net toegevoegde antwoord op "hebben jullie een vergunning nodig?" zei "Ja, we vliegen volgens de geldende regelgeving" — terwijl de pagina zelf al langer een technische spec toont: "Gewicht: < 249g (**geen vergunning**)". Herschreven naar een eerlijk antwoord dat uitlegt waarom (EU-dronewetgeving, lichtste categorie), i.p.v. een vergunning te suggereren die niet nodig is. `areaServed` in `diensten/drone/layout.tsx` uitgebreid met België (stond alleen op Limburg/Nederland — hetzelfde gat dat ik bij `diensten/web` al vond, hier zelf opnieuw gemaakt met de nieuwe FAQ die wél NL+BE claimde).

**2. `/diensten/processen/limburg` — de pagina met verreweg het hoogste vertoningsaantal van de site (579, positie 16,4) — kreeg alsnog de volledige behandeling:** FAQ (prijs, welke plaatsen, klein-vs-groot-bedrijf, eerlijk "wat als maatwerk niet past") en ingebedde social proof. Deze pagina was twee sessies lang alleen van interne links voorzien, nooit zelf versterkt.

**3. Industry-chip-links (gisteren toegevoegd) waren visueel niet te onderscheiden van platte tekst** — zelfde CSS-klasse voor link en span. Gefixt: gekoppelde chips krijgen nu de accentkleur (rand + tekst) plus een pijltje, geverifieerd via computed styles in de browser.

**4. Grootste vondst — een systemische bug, niet eerder opgemerkt:** `layout.tsx`-bestanden die een `<script>` (JSON-LD) renderen wrappen in Next.js ook alle **child-routes**, niet alleen hun eigen pagina. Dit gaf op `/diensten/processen/limburg` een dubbele, botsende `BreadcrumbList` (één van de ouder-pagina `/diensten/processen`, één van de pagina zelf) — geïntroduceerd toen ik `diensten/processen/layout.tsx` eerder deze sessie een breadcrumb gaf zonder te beseffen dat die layout een child-route (`/limburg`) heeft. Een systematische scan van alle `layout.tsx`-bestanden met child-`page.tsx`'s vond een **tweede, identieke instantie**: `locaties/layout.tsx` (10 child-locatiepagina's), zelf pas gisteren gebouwd voor de `/locaties`-hub.

**Fix, structureel:** in beide gevallen is de JSON-LD verplaatst van `layout.tsx` (die child-routes wrapt) naar de eigen `page.tsx` van die route (die dat niet doet, want pagina's zijn bladknopen). `layout.tsx` bevat nu alleen nog metadata + een kale `{children}`-wrapper, met een commentaar dat uitlegt waarom. Een scan over de hele `src/app`-boom bevestigt: geen overige instanties.

**Geverifieerd:** `npx tsc --noEmit` en volledige build schoon. Live gecontroleerd op `/diensten/processen/limburg`, `/locaties/genk` en `/locaties` zelf: precies één BreadcrumbList per pagina, geen duplicaten meer. (Zijstap: `npm run build` naast een actieve `next dev`-server corrumpeerde tijdelijk de webpack-chunk-cache — bekend, `.next` verwijderd en dev-server herstart, geen inhoudelijk gevolg.)

---

## 2026-09-09 (later, vierde deel) — `/eerste-website`, `/vervanging` en `/diensten/drone` verstevigd

**Aanleiding:** "zoek nog meer, en verstevig ook de andere zwakke pagina's" — de GSC-data was inmiddels na 3 scans grotendeels uitgeput (zie hieronder), dus de nadruk lag op het tweede deel: overige pagina's zonder FAQ/social-proof controleren.

**Herscan van `Pagina's.csv` (niet eerder zo bekeken):** `/eerste-website` (14 vertoningen, **positie 6**) en `/vervanging` (6 vertoningen, **positie 5,5**) bleken opvallend goed te ranken — beter dan bijna alles anders op de site — met 0 kliks en, zoals de rest van de site tot voor kort, geen FAQ of social proof. Zelfde "goede positie, geen vertrouwenselementen"-patroon als eerder bij `/diensten/web`.

**Uitgevoerd:**
- **`src/app/eerste-website/page.tsx`** — FAQ toegevoegd (prijs, "ik weet nog niet wat ik wil" — expliciet gerustgesteld want dit is een eerste-website-doelgroep, doorlooptijd, groeipad naar meer), plus ingebedde social proof. Bestaand leadformulier (met afspraak-datum/tijd-kiezer) ongemoeid gelaten, alleen toegevoegd vóór de footer.
- **`src/app/vervanging/page.tsx`** — FAQ toegevoegd, met een eerlijk antwoord op de meest voor de hand liggende zorg bij een redesign: "verlies ik mijn Google-rankings?" (nee, mits goed aangepakt — bestaande content/URL's worden bekeken, redirects waar nodig).
- **`src/app/diensten/drone/page.tsx`** — miste nog de hele FAQ/social-proof-behandeling die `web` en `marketing` al hadden. FAQ toegevoegd, **bewust geen prijs verzonnen** (in tegenstelling tot de software-/website-prijzen heeft de eigenaar geen dronetarief gegeven) — het antwoord zegt eerlijk dat de prijs van de opdracht afhangt en na een gesprek volgt, geen "vanaf €X" verzonnen.

**Ook gecheckt, bewust niets aan gedaan:** `/diensten` (index) is al een zuivere doorverwijspagina naar de 4 dienstpagina's, heeft geen eigen FAQ nodig. `/investering` bestaat al specifiek om de prijsvraag te beantwoorden — een aparte FAQ zou zichzelf herhalen. `/gratis-checklist` is een opt-in-pagina (ander doel dan een zoekgerichte landingspagina), lagere prioriteit.

**Geverifieerd:** `npx tsc --noEmit` en volledige build schoon. Live gecontroleerd op alle 3 pagina's: FAQ's tonen correct, geen JSON-LD-conflicten.

---

## 2026-09-09 (later, derde deel) — Industries-chips op locatiepagina's gelinkt naar bestaande sectorpagina's

**Aanleiding:** "zoek nog meer onbenutte zoektermen zoals deze" — volledige herscan van dezelfde GSC-export (`Zoekopdrachten.csv`), nu gesorteerd op positie i.p.v. alleen gefilterd op volume, om niets te missen.

**Belangrijkste vondst:** "maatwerk software voor de zorg" (positie 22,9) en "maatwerk software voor logistiek/transport" (positie 14,6-23,1) zijn **letterlijke frase-matches** met de titels van `/maatwerk-software/zorg` en `/maatwerk-software/logistiek`, die al bestaan. Zelfde patroon als eerder bij de Limburg-pagina: goede, relevante content, maar te weinig interne links om over de streep naar pagina 1 te trekken.

**Concreet gefixt:** de "industries"-chips op alle 10 locatiepagina's (`src/components/CityPage.tsx`) waren platte tekst. 7 van de gebruikte labels (Bouw, Installatie, Zorg, Logistiek, Horeca, Retail, Landbouw) matchen exact een bestaande sectorpagina — nu gekoppeld via een nieuwe `SECTOR_LINKS`-mapping. Resultaat, geteld via grep: 7 nieuwe links naar Bouw, 8 naar Zorg, 7 naar Horeca, 7 naar Retail/Detailhandel, 5 naar Logistiek, 1 naar Installatiebedrijf, 1 naar Agrarisch — in één component-wijziging. Duitse/Engelse industry-labels (Aken-pagina) bewust ongelinkt gelaten, want de sectorpagina's zijn Nederlandstalig.

**Ook:** "web development" en "app development" toegevoegd aan `diensten/web/layout.tsx`'s keywords (bevestigt de eerder gevonden app-kans verder, klein volume maar sterke positie).

**Bewust niet opgepakt:** "start-up branding eindhoven" en "reclamebureau geleen" — te weinig volume, en een aparte pagina zou de stad×dienst-matrix heropenen die steeds bewust vermeden is.

**Geverifieerd:** `npx tsc --noEmit` en volledige build schoon. Live gecontroleerd dat de chips daadwerkelijk als link renderen (bijv. Maastricht → Horeca/Retail/Zorg).

---

## 2026-09-09 (later, tweede deel) — `/diensten/web` verstevigd (herontdekte "app laten maken"-kans) + duidelijke dienst-routing op locatiepagina's

**Aanleiding, twee delen:**
1. Eerst het voorstel om per locatie aparte "webdesign"/"app"/"digitalisering"-pagina's te bouwen — afgewezen met dezelfde onderbouwing als eerder (webdesign+stad al bewezen dood spoor via de Eindhoven-data, digitalisering al afgewezen als niet-commerciële term, meerdere pagina's per locatie is de kruisproductmatrix die het onderzoek expliciet waarschuwt te vermijden).
2. Het echte, onderliggende punt was terecht: onduidelijk wat Dynique wel/niet doet. Opgelost zonder nieuwe locatiepagina's: (a) een expliciet "Wat kunnen we voor je bouwen?"-blok op elke locatiepagina dat doorverwijst naar de juiste, al bestaande dienstpagina, en (b) op verzoek om onderbenutte bestaande zoektermen te vinden, de GSC-data opnieuw doorzocht.

**Herontdekt bij het opnieuw doorzoeken van dezelfde GSC-export:** "mobile app development" (137 vertoningen, **positie 7,86** — beter dan "maatwerk software limburg") en "app laten maken limburg" (184 vertoningen, positie 20,97) — reëel volume, praktisch onbenut. `/diensten/web` is vermoedelijk de dragende pagina, maar had geen FAQ, geen social proof, geen prijsindicatie — het concurrentiegat dat elders al gedicht was, hier gemist.

**Uitgevoerd:**
- **`src/app/diensten/web/page.tsx` + `layout.tsx`** — FAQ toegevoegd (incl. prijs en een eerlijke "bouwen jullie ook apps?"-vraag: Dynique bouwt web apps, geen native iOS/Android-apps, expliciet zo verwoord om niet te overclaimen), ingebedde social proof, "web app laten maken" explicieter in title/intro/keywords, `areaServed` uitgebreid met België (stond alleen op Limburg/Nederland).
- **`src/components/CityPage.tsx`** — nieuw "Wat kunnen we voor je bouwen in {stad}?"-blok (3 kaarten: Website/web app → `/diensten/web`, Bedrijfssoftware op maat → eigen leadformulier, Marketing/SEO/social media → `/diensten/marketing`) — geldt automatisch voor alle 10 locatiepagina's via dit ene component.
- **`src/app/diensten/marketing/page.tsx`** — FAQ toegevoegd die expliciet "social media beheer" en "SEO" losstaand beantwoordt (op verzoek: duidelijk maken dat dit allemaal echt aangeboden wordt), zonder de bestaande VOF-disclosure aan te raken.

**Geverifieerd:** `npx tsc --noEmit` en volledige build schoon. Live gecontroleerd: FAQ's tonen correct, geen JSON-LD-conflicten, VOF-disclosure op de marketingpagina staat nog exact waar die stond.

---

## 2026-09-09 (later) — Hreflang gecorrigeerd na vraag over .nl-domein en Belgische rankings

**Aanleiding:** "maakt het niet uit dat we een .nl domein hebben voor de belgische landingspagina's?" — geverifieerd via WebSearch i.p.v. op geheugen vertrouwd, want Google's geotargeting-mechanismen zijn sinds 2022 veranderd (Search Console's handmatige landinstelling is toen volledig verwijderd, werkte voor ccTLD's als `.nl` sowieso al nooit).

**Antwoord, vastgelegd in `docs/seo/STRATEGY.md` §2a (nieuw):** het `.nl`-domein is wel degelijk een sterk nadeel-signaal voor brede, ongekwalificeerde Belgische zoekopdrachten, maar veel minder relevant voor stad-specifieke termen ("maatwerk software genk") — waar de geo-intentie al in de zoekopdracht zelf zit en Google zwaarder op pagina-relevantie leunt. Dat is precies waarom de gekozen long-tail-aanpak hier al deels tegen bestand is, niet toevallig.

**Concreet gefixt:**
- **`src/app/layout.tsx`** — de hreflang-claim dat de homepage zowel nl-NL als nl-BE was (dezelfde URL voor beide, communiceerde niets) gecorrigeerd naar `nl-NL` + `x-default`.
- **Alle 5 Belgische stadspagina's** (`hasselt`, `genk`, `tongeren`, `maasmechelen`, `sint-truiden`) — eigen, correcte `hreflang="nl-BE"`-zelfverwijzing toegevoegd (was op geen enkele pagina aanwezig).

**Ook vastgelegd, geen actie:** een eigen `.be`-domein zou het ccTLD-nadeel volledig wegnemen, maar dat is een bedrijfsbeslissing (kosten, redirect-strategie, merk over twee domeinen) die niet past bij het huidige stadium — België is nog een bescheiden tweede-orde uitbreiding, geen bewezen genoeg vraag om te investeren. Expliciet als "later, met meetdata" genoteerd i.p.v. te negeren.

**Geverifieerd:** `npx tsc --noEmit` en volledige build schoon. Gecontroleerd in de export-output dat `<link rel="alternate" hreflang="nl-BE" ...>` daadwerkelijk gegenereerd wordt op alle 5 pagina's, en de homepage nu correct `nl-NL` + `x-default` toont.

---

## 2026-09-09 — 3 nieuwe sectorpagina's (horeca, detailhandel, agrarisch) + sector-specifieke social proof

**Aanleiding:** "meer, beter" — na de vorige sessie's eigen aanbeveling om eerst te meten voordat er nieuwe pagina's bijkomen. Transparant hier vastgelegd: die aanbeveling is deze keer niet gevolgd — de eigenaar gaf expliciet opdracht om door te bouwen. Om het risico te beperken is gekozen voor **sectorpagina's, niet nog meer steden** — sectoren zijn de categorie die `STRATEGY.md` zelf altijd als veilig heeft bestempeld (elk een echt ander onderwerp, geen naam-swap-risico), in tegenstelling tot verdere stad-uitbreiding.

**Sectorkeuze, met reden:** Horeca (sterkste keuze — Dynique heeft daadwerkelijk 3 echte horeca-klanten: Chefs Connect, IJssalon Italia, Auwt Aelse), Detailhandel (brede, herkenbare MKB-sector), Agrarisch (sluit thematisch aan bij de net toegevoegde Sint-Truiden-fruitstreek-pagina).

**Uitgevoerd via een Workflow** (3 parallelle agents, ultracode aan): elke agent kreeg de volledige inhoud (pijnpunten, features, FAQ) al kant-en-klaar aangeleverd — geen creatieve vrijheid over feiten, alleen assembleren volgens het bestaande `bouw`-sjabloon. Dit hield het fabricatierisico laag ondanks delegatie.

- **`src/app/maatwerk-software/{horeca,detailhandel,agrarisch}/{page,layout}.tsx`** (nieuw) — zelfde structuur als de bestaande 4 sectoren, elk met een eigen `layout.tsx` (metadata + volledige Twitter Card + Service/BreadcrumbList JSON-LD).
- **`src/components/SocialProofSection.tsx`** — uitgebreid met een `select`-prop en een `REVIEWS`-record van alle 4 echte reviews (was hardcoded op 2). **`src/components/SectorTemplate.tsx`** — nieuw optioneel `socialProofSelect`-veld op `SectorData`, doorgegeven aan `SocialProofSection`. Hierdoor toont `/maatwerk-software/horeca` nu de twee écht relevante reviews (IJssalon Italia + Auwt Aelse) i.p.v. de generieke standaard — lost een beperking op die bij de vorige 4 sectorpagina's nog gold ("geen sectorspecifieke cases beschikbaar", zie eerdere log-entry) voor precies de sector waar dat wél kon.
- **Zelf gevonden, buiten de opdracht:** de bestaande 4 sectorpagina's (`bouw`, `installatiebedrijf`, `zorg`, `logistiek`) bleken een onvolledige Twitter Card te hebben (alleen `images`, geen `card`/`title`/`description`) — een gat dat de eerdere "volledige audit-fixpas" had moeten dekken maar miste (geen van de 6 toen ingezette fix-agents kreeg deze 4 bestanden toegewezen). Nu ook gefixt.
- **Interne links**: nieuwe sectoren toegevoegd aan de "SECTOREN"-grid op `diensten/processen` en de "SECTOREN"-grid op `/excel-vervangen-door-software`.
- **`sitemap.ts`** bijgewerkt met de 3 nieuwe URL's.

**Dedup-check (grep, geen indruk):** alle `pains`/FAQ-teksten zijn uniek over alle 7 sectorpagina's — geen herhaling van de fout die eerder op de locatiepagina's gevonden werd.

**Geverifieerd:** `npx tsc --noEmit` en volledige `npm run build` schoon (53 routes, was 50). Live gecontroleerd: horeca-pagina toont IJssalon Italia + Auwt Aelse als social proof, JSON-LD zonder conflicten.

---

## 2026-09-08 (later, derde sessie) — Kritische zelf-audit van de locatiepagina's + `/locaties`-hub-pagina

**Aanleiding:** expliciet gevraagd om de locatiepagina en de gebruikte tactiek kritisch te analyseren en met concrete verbetervoorstellen te komen. Zelf, met grep, geverifieerd — geen indruk maar bewijs. Bevindingen (zie ook `docs/seo/LEAD-PLAN-2026-09.md` item 8):

1. **Zelf een naam-swap-patroon teruggesmokkeld.** De highlight "Cross-border Business" stond woord-voor-woord identiek op Hasselt/Tongeren/Maasmechelen/Sint-Truiden (4 pagina's); de btw-verlegging-FAQ was op 5 pagina's byte-identiek. Precies het patroon dat de hele sessie bewust vermeden werd, nu binnengeslopen via een herbruikbaar sub-onderdeel.
2. **`LocalBusiness.name` in `CityPage.tsx` zei nog "Webdesign {stad}"** — de H1-fix van de vorige sessie miste dit parallelle structured-data-veld.
3. **CTA's linkten naar `/#contact`** (generiek homepage-formulier) i.p.v. een eigen leadformulier met stadscontext — exact het component (`LeadFormSection`) dat wél op de sector-/pijnpuntpagina's staat, nooit teruggezet op de locatiepagina's.
4. **Geen ingebedde social proof, geen prijsindicatie** — hetzelfde concurrentiegat dat elders wél is opgelost.
5. **Content aan de ondergrens van de eigen norm** (~300-350 woorden echt uniek per stad, tegenover de 500-1.500-richtlijn uit `STRATEGY.md` §6).
6. **Geen `/locaties`-hub-pagina** — met inmiddels 9 stadspagina's bestond er geen centrale overzichtspagina; dit was ook de onderliggende reden dat de breadcrumb eerder was afgezwakt naar 2 niveaus (geen "Locaties" om naar te wijzen).
7. **Eigen roadmap-volgorde genegeerd** — "maatwerk software limburg verstevigen" (positie 12,7) stond al twee sessies als "volgende stap" aangewezen zonder uitgevoerd te zijn.
8. **Geen meetmoment tussen de stedenbatches** — `STRATEGY.md` §5 zegt zelf "meten via Search Console voordat er een volgende batch komt", niet gevolgd tussen de Genk-batch en de Tongeren/Maasmechelen/Sint-Truiden-batch.

**Uitgevoerd (op verzoek: "pak het allemaal op", geïnterpreteerd als: alle bevindingen fixen op alle bestaande locatiepagina's, geen extra nieuwe steden bouwen):**
- **`src/components/CityPage.tsx`** — `LocalBusiness.name` gefixt; `SocialProofSection` en `LeadFormSection` toegevoegd (CTA's linken nu naar `#analyse`, een echt op-pagina formulier met een WhatsApp-openingsregel die de stad noemt); een gedeelde `PRICE_FAQ`-constante toegevoegd aan elke pagina's FAQ (bewust gedeeld, niet per stad gedupliceerd — de prijsstructuur verschilt niet per stad); breadcrumb terug naar 3 niveaus (Home → Locaties → Stad) nu `/locaties` bestaat; FAQ-rendering vervangen door de gedeelde `FaqSection`-component (was zelf ook al een ongemerkte duplicatie van diezelfde markup).
- **5 stadspagina's herschreven** (Hasselt, Genk, Tongeren, Maasmechelen, Sint-Truiden) — de btw-verlegging-FAQ en (waar van toepassing) de "Cross-border Business"-highlight zijn nu per stad uniek, met een echt stadseigen detail verwerkt, i.p.v. een kale naam-swap.
- **`src/app/locaties/page.tsx` + `layout.tsx`** (nieuw) — een echte hub-pagina met een inhoudelijke intro, alle 10 locaties gegroepeerd (Nederland & Duitsland / België) met een eigen hook-zin per stad, plus social proof, FAQ en leadformulier. Losbreekt de breadcrumb-leemte en geeft de site voor het eerst een centrale plek die alle locaties verzamelt.
- **`/diensten/processen/limburg` kreeg voor het eerst interne links** — bleek twee sessies lang zonder één inkomende link te staan (alleen de sitemap wist dat de pagina bestond). Nu gelinkt vanuit Maastricht/Heerlen/Sittard (via een nieuw `relatedRegionLink`-veld op `CityData`, alleen gezet op de 3 steden die de Limburg-pagina zelf noemt) en vanuit `diensten/processen`'s "VERDER LEZEN".
- **`Footer.tsx`** — "Locaties"-kopje is nu zelf een link naar `/locaties`.
- **`sitemap.ts`** bijgewerkt met `/locaties`.

**Bewust niet gedaan:** geen nieuwe steden — de eigen aanbeveling om eerst te meten voordat er weer wordt uitgebreid staat nog. Zie `LEAD-PLAN-2026-09.md`'s bijgewerkte "volgende stap".

**Geverifieerd:** `npx tsc --noEmit` en volledige `npm run build` schoon (50 routes, was 49). Grep bevestigt: geen resterende woord-voor-woord duplicatie tussen de locatiepagina's. Live gecontroleerd via `next dev`: JSON-LD-naam correct, 3-niveau breadcrumb naar `/locaties`, prijs-FAQ aanwezig, interne link naar `/diensten/processen/limburg` werkt, hero-CTA scrollt naar het leadformulier.

---

## 2026-09-08 (later, tweede sessie) — 3 nieuwe Belgisch-Limburgse stadspagina's + H1-bug op alle locatiepagina's gefixt

**Aanleiding:** verzoek om meer landingspagina's voor "website laten maken + Belgische stad", "webdesign + stad" en "digitaliseren + stad", met chefs-connect.nl's regiopagina's (`/personeel-{stad}`, elk écht anders geschreven) als kwaliteitsreferentie, plus expliciet gevraagd wat ik hier zelf van vind. Teruggekoppeld vóór het bouwen: "website laten maken"/"webdesign" + stad is op déze site al bewezen niet te werken (`/locaties/eindhoven` trekt 7.794 vertoningen op precies die termen, positie 61,76, 0 kliks — zie `GSC-FINDINGS-2026-09.md` §2), en "digitaliseren" + stad target een term die `STRATEGY.md` §1 al had afgewezen als niet-commercieel (levert overheidscontent op). Voorstel: dezelfde chefs-connect-kwaliteit, maar op "maatwerk software" als hoofdterm (de term die al traction heeft) i.p.v. de bewezen-falende termen.

**Beslissingen van de eigenaar (via vragen):** steden = "gebieden in Belgisch Limburg die nog niet goed opgevangen worden" (dus geen sprong naar Antwerpen/Brussel/Leuven — die blijven "niet nu" per `STRATEGY.md` §2); H1-bug gelijk meefixen = ja.

**Uitgevoerd:**
- **`src/components/CityPage.tsx`** — de H1 ("Website laten maken in {stad}") en eyebrow-label ("Webdesign · {stad}") zeiden nog letterlijk de bewezen-falende brede term, terwijl de `<title>` al "Maatwerk software & webdesign {stad}" zei. Omgezet naar "Maatwerk software (voor) {stad}" — geldt automatisch voor alle 9 locatiepagina's via dit ene gedeelde component. Dit is precies de vermoedelijke verklaring achter het Eindhoven-patroon in de GSC-data.
- **3 nieuwe stadspagina's**, elk met een eigen, geverifieerd (WebSearch, niet uit het geheugen) economisch profiel — geen van de drie is een naam-swap van hetzelfde sjabloon:
  - `/locaties/tongeren` — oudste stad van België (Romeins bestuurscentrum), erfgoedtoerisme/horeca/retail, sinds 1 januari 2025 gefuseerd met Borgloon tot Tongeren-Borgloon, ~35 min vanaf Vaals.
  - `/locaties/maasmechelen` — Maasmechelen Village (internationaal designer-outlet), voormalige mijnstreek (Eisden, 1923), geografisch de dichtstbijzijnde Belgische gemeente vanuit Vaals (~31 min).
  - `/locaties/sint-truiden` — hart van de Limburgse fruitstreek (Vochtig-Haspengouw), PCFruit-onderzoekscentrum, ~69 min vanaf Vaals (verst van de 3, expliciet zo vermeld i.p.v. verzwegen).
- **`sitemap.ts`** en **`Footer.tsx`** bijgewerkt met alle 3 nieuwe URL's.
- **`docs/seo/GSC-INDEXATIE-WACHTRIJ.md`** — vorige batch (5 pagina's) afgevinkt als geïndexeerd (bevestigd door de eigenaar), nieuwe batch (3 stadspagina's + 7 bestaande locatiepagina's om te herindexeren i.v.m. de H1-fix) toegevoegd.
- **`.claude/launch.json`** — `autoPort: true` toegevoegd aan de dev-server-config; poort 3000 bleek al bezet door een andere sessie (`chefsconnect-dev`) tijdens het verifiëren, dit voorkomt die botsing voortaan.

**Bewust niet gedaan:** geen sector×stad-combinaties, geen Antwerpen/Brussel/Leuven — die stonden niet in de vraag en zouden het al afgewezen scaled-content-risico terug openen.

**Geverifieerd:** `npx tsc --noEmit` en volledige `npm run build` schoon (49 routes, was 46). H1-fix en alle 3 nieuwe pagina's live gecontroleerd via `next dev` (correcte 2-niveau breadcrumb, geen dubbele JSON-LD, content klopt met de brontekst).

**Nog te doen:** enige nog openstaande item uit `LEAD-PLAN-2026-09.md` is nu item 5: "maatwerk software limburg" (positie 12,7) verstevigen.

---

## 2026-09-08 (later) — 5 nieuwe landingspagina's + volledige breadcrumb/metadata-audit en -fixpas

**Aanleiding:** "Ik wil dat je sowieso zo veel mogelijk landingspagina's gaat maken die daadwerkelijk hoog kunnen ranken... maak ook een top sitemap, zorg dat alle metadata perfect is en breadcrumbs perfect zijn." Dit botste direct met `STRATEGY.md` §5 (expliciete waarschuwing tegen een volledige stad×sector-kruismatrix, Google's "Scaled Content Abuse"-risico) — teruggekoppeld naar de eigenaar vóór het bouwen. Antwoord: geen sector×stad-combinaties zonder bewijs, geen nieuwe steden buiten Genk, wel expliciet akkoord op "voor elke pagina unieke informatie" met chefs-connect.nl's regiopagina's (`/personeel-{stad}`, elk met écht andere, stadseigen content) als kwaliteitsreferentie.

**Uitgevoerd — 5 nieuwe pagina's, elk met eigen `layout.tsx` (metadata + `Service`/`BreadcrumbList` JSON-LD) en `FAQPage` JSON-LD:**
- `/excel-vervangen-door-software` — pijnpunt-pillar, hoogste-prioriteit-item uit `STRATEGY.md` §8.
- `/maatwerk-software-vs-saas`, `/low-code-vs-maatwerk-software` — eerlijke vergelijkingen (bewust niet eenzijdig: een "wanneer kies je wat"-sectie erkent expliciet wanneer SaaS/low-code de betere keuze is).
- `/wat-kost-maatwerk-software` — kostenuitleg met 3 illustratieve, expliciet als "geen offerte" gelabelde richtbedragen (€4k / €15k / €35k+, exact de cijfers die de eigenaar eerder gaf voor de FAQ-prijsindicatie).
- `/locaties/genk` — nieuwe, 7e stadspagina (België). Content geverifieerd via WebSearch i.p.v. uit het geheugen geschreven: postcode 3600, 67.500 inwoners/100+ nationaliteiten, Thor Park (93 ha, voormalige mijn Waterschei), C-mine (voormalige mijn Winterslag), Genk-Zuid (1.400 ha, grootste bedrijventerrein van Vlaanderen na de zeehavens), Ford Genk-sluiting 2012, rijafstand Vaals ~40 min. Zelfde kwaliteitslat als de bestaande 6 stadspagina's.

**Nieuwe gedeelde componenten** (om niet 5× dezelfde ~150 regels te dupliceren): `src/components/FaqSection.tsx` (incl. `faqJsonLd()`-helper), `SocialProofSection.tsx`, `CompareTable.tsx`, `LeadFormSection.tsx`. `SectorTemplate.tsx` en `diensten/processen/page.tsx` zijn hierop gerefactored (zelfde gedrag, minder duplicatie). `ProcessStyles()` in `processen/Visuals.tsx` kreeg `.delay-3`/`.delay-4` toegevoegd — **zelf gevonden bug:** de 4 nieuwe pagina's gebruikten de "hv"-heldere-reveal-klassen niet maar renderden aanvankelijk zonder `<ProcessStyles />` te importeren, waardoor `.anim`-elementen geen enkele CSS-regel hadden — gefixt vóór livegang, bevestigd in de browser.

**Zelfgevonden, buiten de directe opdracht, meteen gefixt:** `/investering` beweerde nog "geen vaste prijstabel" voor maatwerk software — een directe tegenspraak met de subtiele prijsindicatie die dezelfde sessie net op 5 andere pagina's is toegevoegd. Bijgewerkt naar dezelfde "vanaf €4.000, oplopend tot €15.000–€35.000+"-formulering.

**Parallelle audit + fixpas (6 achtergrond-agents, na een losstaande audit-agent):** een volledige breadcrumb/metadata-audit over alle 36 routes vond: een echte breadcrumb-bug op alle 6 `/locaties/*`-pagina's (`CityPage.tsx`, "Locaties" en de stad wezen naar dezelfde URL — nu een schoon 2-niveau Home→Stad-pad), een verouderde OG-afbeelding met de tekst "FULL CREATIVE DEVELOPMENT AGENCY" (pre-rebrand-positionering) die nog op 5 pagina's stond, 8 pagina's zonder OG-afbeelding (Next.js' metadata-merge overschrijft `openGraph` per segment in plaats van te mergen), 19 pagina's met een onvolledige Twitter Card, 9 pagina's zonder `BreadcrumbList`, en 4 near-duplicate stadsbeschrijvingen (nu herschreven op basis van elke pagina's eigen, al bestaande unieke content — Aken/Hasselt waren al goed en dienden als lat). Alle 6 fix-agents raakten exclusieve bestandensets aan (geen overlap), elk geverifieerd met `npx tsc --noEmit`.

**`docs/seo/GSC-INDEXATIE-WACHTRIJ.md`** (nieuw) — levende, kopieer-plak-vriendelijke lijst van nieuwe/gewijzigde URL's voor handmatige "Indexering aanvragen" in Search Console (GSC heeft geen bulk-indexeeractie). Wordt bijgewerkt, niet vervangen, bij elke nieuwe batch pagina's.

**`STRATEGY.md`, `LEAD-PLAN-2026-09.md` en `docs/seo/README.md` bijgewerkt** met de nieuwe status (Fase 1 & 2 grotendeels afgerond, sector×stad-combinaties bewust nog open).

**Geverifieerd:** `npx tsc --noEmit` en volledige `npm run build` schoon (46 routes, was 41). Alle 5 nieuwe pagina's + hun JSON-LD live gecontroleerd via `next dev` (geen dubbele/conflicterende schema's, `<details>`-FAQ werkt, sitemap.xml bevat alle 5 URL's).

**Nog te doen:** de "maatwerk software limburg"-quick-win (positie 12,7 verstevigen) is nu het eerstvolgende concrete actiepunt uit de roadmap. Sector×stad-combinaties blijven bewust ongebouwd tot de eigenaar concreet bewijs aanlevert.

---

## 2026-09-08 (later) — Twee redirect-fixes uit de GSC-analyse doorgevoerd

**`public/_redirects`** (nieuw, Cloudflare Pages-formaat) — de twee triviale technische fixes uit `docs/seo/GSC-FINDINGS-2026-09.md` §4 en §5, akkoord gekregen om meteen door te voeren naast het committen van de SEO-documentatie:
- `https://www.dynique.nl/* → https://dynique.nl/:splat` (301) — beide domeinvarianten stonden apart geïndexeerd in Search Console en verdeelden de homepage-kliks/autoriteit.
- `/portfolio/sa-personeel` en `/portfolio/house-of-chocolate` (301, naar `/portfolio`) — twee niet meer bestaande case-study-URL's die nog vertoningen trokken (`sa personeel` zelfs op positie 5).

`docs/seo/STRATEGY.md` §7 en `docs/seo/GSC-FINDINGS-2026-09.md` §4/§5 bijgewerkt om deze als afgerond te markeren. **Geverifieerd:** `npx tsc --noEmit` schoon, volledige `npm run build` schoon, `_redirects` bevestigd aanwezig in `out/`. Effect op indexering pas zichtbaar in een volgende GSC-export.

---

## 2026-09-08 (later) — SEO-documentatie verplaatst naar `docs/seo/`, eerste echte Search Console-data verwerkt

**Aanleiding:** "Ik wil dat je vanaf nu alles over de seo heel erg goed gaat documenteren in deze map in md files zodat we echt een plan kunnen maken" — een staande instructie om alle SEO-werk voortaan gestructureerd te documenteren, niet alleen als eenmalig los rapport. Vrijwel gelijktijdig leverde de eigenaar een Google Search Console-export aan (`/Users/john/Downloads/dynique/`, 6 maanden data t/m 2026-09-06) — de eerste échte meetdata die er ooit is geweest voor deze site.

**Uitgevoerd:**
- **`docs/seo/`** (nieuw) — vaste map voor alle SEO-documentatie, met een [`README.md`](./seo/README.md) die de conventie vastlegt (gedateerde bestanden per databron, geen verzonnen cijfers, `STRATEGY.md` als levend document).
- **`docs/seo/STRATEGY.md`** — het net geschreven strategiedocument verplaatst vanuit de repository-root (was `SEO_STRATEGY.md`).
- **`docs/seo/GSC-FINDINGS-2026-09.md`** (nieuw) — volledige analyse van de GSC-export. Belangrijkste bevindingen: (1) Search Console blijkt al actief en geverifieerd, in tegenspraak met de net geschreven aanname "geen meetbasis"; (2) `/locaties/eindhoven` is verantwoordelijk voor 59% van alle vertoningen (7.794) maar op gemiddelde positie 61,76 en 0 kliks — vrijwel volledig oververzadigde brede "webdesign eindhoven"-achtige termen, precies zoals de strategie voorspelde; (3) "maatwerk software limburg" staat al op positie 12,7 (pagina 2) — het sterkste gemeten bewijs dat de nieuwe positionering werkt; (4) `www.dynique.nl` en `dynique.nl` staan apart geïndexeerd (geen `_redirects`-regel aanwezig) en verdelen homepage-autoriteit; (5) twee niet meer bestaande portfolio-URL's (`sa-personeel`, `house-of-chocolate`) trekken nog vertoningen zonder redirect; (6) klantnaam-zoekopdrachten ("stacy kohnen", "chefs connect") leveren aantoonbaar echt verkeer op via de eigen case-study-pagina's.
- **`docs/seo/data/gsc-export-2026-09-08/`** — de ruwe CSV's uit de export bewaard in de repo (niet alleen in `~/Downloads`), zodat elke conclusie in `GSC-FINDINGS-2026-09.md` herleidbaar blijft.
- **`docs/seo/STRATEGY.md` zelf bijgewerkt** op basis van de nieuwe data: §1 (meetbasis-aanname genuanceerd), §7 (twee nieuwe technische checklist-items: www-redirect, verweesde-URL-redirects), §8 (concrete Fase-1-actie: de al bijna-pagina-1-term "maatwerk software limburg" verstevigen i.p.v. blind nieuwe content bouwen), §10 (disclaimer bijgewerkt — de aangekondigde "zodra GSC-data er is"-stap is nu al gebeurd).

**Nog te doen:** de twee genoemde `_redirects`-fixes (www-canonicalisatie, verweesde portfolio-URL's) zijn gedocumenteerd maar nog niet doorgevoerd — bewust niet unilateraal opgepakt, dit was een documentatie-taak, geen implementatie-taak. Zie `docs/seo/STRATEGY.md` §7 voor de concrete vervolgstappen.

---

## 2026-09-08 (later) — SEO_STRATEGY.md volledig herschreven: onderzoek + geprioriteerd plan voor landingspagina's NL+BE

**Aanleiding:** "Ik wil dat je een taktiek gaat maken om landingspagina's te maken voor maatwerk software... Ik wil echt die seo top gaan aanpakken en in heel belgie en nederland de nummer 1 worden." Eerste bevinding: het bestaande root-`SEO_STRATEGY.md` bleek volledig verouderd (oude "website agency"-positionering, alleen Zuid-Limburg, verzonnen zoekvolumes zonder bron) — expliciet gemeld voordat nieuw werk begon.

**Onderzoek via een 6-agent Workflow** (5 parallelle research-agents — NL-markt, BE-markt, programmatic-SEO-risico's, concurrentie-audit van 5 bureaus, codebase-audit — daarna 1 synthese-agent): elke research-agent kreeg de expliciete instructie géén zoekvolumecijfers te verzinnen, alleen kwalitatief/relatief kansensignaal te rapporteren.

**Resultaat:** `SEO_STRATEGY.md` (204 regels, 10 secties) volledig herschreven. Kernpunten:
- Sectie 1: "#1 in heel NL+BE" is als kortetermijndoel eerlijk afgewezen (geen koopintentie-termen, verzadigd veld van 40-60+ bureaus, nul huidige meetbasis) — vervangen door een haalbaar doel: top-3 op 15-25 long-tail-/sector+stad-combinaties in 6-12 maanden.
- Sectie 2: expliciete prioritering "waar boeken we de meeste progressie" — NL-pijnpunt-long-tail (#1), bestaande sector+stad-verdieping (#2), Genk als enige nu-relevante BE-uitbreiding (#3); Antwerpen/Brussel/Leuven expliciet "niet nu" (te concurrentiedicht, te ver van Vaals).
- Sectie 3: codebase-audit bevestigt de bestaande 10 stad/sector-pagina's zijn géén thin content (echt herschreven proza, niet naam-swap) — wél: nul analytics/GSC-verificatie, `/investering` ontbreekt in de sitemap.
- Sectie 5: expliciete waarschuwing tegen een volledige 6×4-kruisproductmatrix (Google's "Scaled Content Abuse"-beleid, met concrete casuïstiek) — canary-batches van 4-8 pagina's, alleen bouwen met echt lokaal/sectoraal bewijs.
- Sectie 8: gefaseerde roadmap (Fase 0: analytics/GSC/sitemap-fix → Fase 1: bestaande pagina's verdiepen + eerste pijnpunt-pillar → Fase 2: Genk + canary-batch → Fase 3-4: pas bij bewezen resultaat).
- Sectie 9: expliciete "wat moet de eigenaar zelf doen"-lijst (Google Business Profile, GSC/analytics-account, sector×stad-combinaties met echt bewijs aanwijzen, reviews ophalen, Sortlist.be-profiel).

**Nog te doen:** dit document is nog niet aan de eigenaar gepresenteerd, niet gecommit/gepusht. Uitvoering (Fase 0/1) start pas na diens reactie — bewust niet unilateraal begonnen met nieuwe pagina's bouwen.

---

## 2026-09-08 (later) — DIENSTEN-dropdown werkte niet op touch/tablet, plus verborgen focus-lek

**Aanleiding:** "die diensten dropdown in de header werkt niet". Op desktop-breedte met een echte muis-hover werkte hij wel (bevestigd via screenshot) — de dropdown draaide puur op `onMouseEnter`/`onMouseLeave`, wat op touch-apparaten nooit afgaat. Voor die gebruikers navigeerde de link meteen weg zonder het menu ooit te tonen.

**`src/components/Header.tsx`:**
- Tap-to-open toegevoegd: de eerste klik/tik op "DIENSTEN" opent nu het menu (`preventDefault`) i.p.v. meteen te navigeren; een tweede klik (menu al open) navigeert gewoon door. Hover-gedrag voor muis/trackpad blijft ongewijzigd.
- Klik-buiten-sluit het menu (`pointerdown`-listener op `document`, alleen actief zolang het menu open is) — nodig omdat touch geen `mouseleave`-equivalent heeft.
- **Zelf gevonden tijdens het testen, zelfde bugklasse als de accordion-fix van eerder deze sessie:** de 4 dropdown-items waren altijd Tab-baar, ook toen het menu onzichtbaar was. `tabIndex={-1}` + `aria-hidden` toegevoegd op het paneel wanneer dicht, matching het patroon dat al op de diensten-pagina-accordion staat.

**Geverifieerd:** `npx tsc --noEmit` en `npm run build` schoon (41 routes). Live doorgetest: een programmatische `.click()` (geen muis-hover ervoor, dus representatief voor een echte tik) opent het menu zonder te navigeren; tabIndex is `0` open en `-1` dicht; een `pointerdown` buiten het menu sluit het.

---

## 2026-09-08 (later) — Diagonale signatuurlijn + ronde founder-fotocluster

**Aanleiding:** na Awwwards-onderzoek (incl. lusion.co als smaakreferentie — mooi als studio-portfolio, maar 25+ seconden laadtijd door custom shaders/scroll-jacking, dus bewust niet als technische blauwdruk gebruikt) een concrete lijst met award-winning ideeën voorgelegd; akkoord op de diagonale-lijn-uitbreiding van de hoek-bracket-signatuur en een ronde foto-cluster voor de "wie zit erachter"-boodschap op /over-ons.

- **`src/components/DiagonalLine.tsx`** (nieuw) — dunne (1px), goudkleurige diagonale lijn die vanuit een sectiehoek naar binnen "steekt", zelfde `.anim`/IntersectionObserver-reveal en `prefers-reduced-motion`-conventie als `CornerMark.tsx`. Toegevoegd aan 3 van de 4 CornerMark-secties (Waarom Dynique, Het Traject, Portfolio — Manifesto bewust overgeslagen, die heeft al een drukkere orb/foto-compositie). Desktop-only (`lg:` en hoger); geometrie per sectie met de hand getest tegen koppen/orbs op meerdere breedtes om overlap te voorkomen.
- **`src/components/PhotoCluster.tsx`** (nieuw) — twee (niet vier: er bestaan bewust geen extra "team"-foto's, alleen de twee echte founder-foto's die al gebruikt werden) rond uitgesneden, licht overlappende portretten met onafhankelijke, trage ademende beweging. Vervangt/vult de founder-credibility-sectie op `src/app/over-ons/page.tsx` aan — geen enkele nieuwe of verzonnen afbeelding, expliciet gecontroleerd tegen wat er al in `public/rsc/` stond.

**Geverifieerd:** `npx tsc --noEmit` en `npm run build` schoon (41 routes). Live gecontroleerd via DOM-metingen (`getBoundingClientRect`, computed styles) omdat het screenshot-paneel deze sessie herhaaldelijk hing na scroll-acties — geen overlap tussen diagonale lijnen en secties-content op 375–1920px, beide founder-foto's laden echt en correct gepositioneerd.

---

## 2026-09-08 — Twee-KVK-structuur zichtbaar en eerlijk gemaakt (Meta-advertentie-eis)

**Aanleiding:** Dynique opereert feitelijk onder twee juridische entiteiten — Creemers Inclusives (eenmanszaak, KVK 90531264, Vaals) voor software/web, en Dynique Digital (VOF, KVK 42154878, Heerlen) voor AI-marketing/advertising, 50/50 tussen de eigenaar en zijn partner. Meta vereist dat de KVK van de adverterende entiteit op de website staat, maar de eigenaar wilde niet dat organische bezoekers denken met een VOF te maken te hebben en vervolgens door de eenmanszaak gefactureerd worden. Voorstel gedaan (3 lagen: footer, marketingpagina, AV), akkoord gekregen op footer + marketingpagina; de AV-alinea staat nog open tot de eigenaar teruggekomen is op de exacte contractvorm-afspraken met zijn partner.

**Uitgevoerd:**
- **`src/components/Footer.tsx`** — het legal-blok omgezet van één regel naar twee duidelijk gescheiden, gelijkwaardige regels: "Maatwerk software, web & platformen — Creemers Inclusives (eenmanszaak)" met KVK 90531264 + Vaals-adres, en "AI-marketing & advertising — Dynique Digital (VOF)" met KVK 42154878 + het eigen Heerlen-adres (Gouverneurstraat 32 — geverifieerd via KVK.nl, wijkt af van het Vaals-adres, dus expliciet los vermeld i.p.v. aangenomen).
- **`src/app/diensten/marketing/page.tsx`** — nieuw disclosure-blok direct boven de footer: "Deze dienst wordt uitgevoerd door Dynique Digital (VOF), KVK 42154878 — in samenwerking met Creemers Inclusives...". Dit is de pagina waar de Meta-ads op landen, dus hier staat het het prominentst.
- **Zelf gevonden, niet gevraagd:** de bestaande "proof"-tekst op diezelfde pagina beweerde "Eén team, geen overdracht — dezelfde mensen die je website bouwen, schrijven ook je content. Geen los bureau ertussen." — dat spreekt de nieuwe disclosure direct tegen (er ís een apart, juridisch zelfstandig bedrijf voor advertising). Herschreven naar "Eén aanspreekpunt, specialistische uitvoering", eerlijk over de aparte entiteit zonder de samenwerking te ondermijnen.
- Beide KVK-links geverifieerd via een echte KVK.nl-zoekopdracht (niet aangenomen) — voor 42154878: "Dynique Digital", VOF, Hoofdvestiging Gouverneurstraat 32, Heerlen, vestigingsnummer 000066601479.

**Geverifieerd:** `npx tsc --noEmit` schoon, `npm run build` slaagt (41 routes). Footer- en marketingpagina-tekst live gecontroleerd in de browser (`footer.innerText` en pagetext), beide KVK's en adressen kloppen.

**Nog te doen — beslissing nodig van klant:** de algemene-voorwaarden-alinea (welke entiteit contracteert per dienst) wacht op de eigenaar's input over de exacte afspraken met zijn partner over facturatie/contractvorming — pas daarna definitief maken, en sowieso laten checken door een boekhouder/bedrijfsjurist voordat het live gaat.

---

## 2026-09-07 (avond, afronding) — Leadcapture-backend, case-study's en portfolio-blurb geverifieerd compleet

**Aanleiding:** de achtergrondagent die de Auwt Aelse/Chefs Connect-case-study's herschreef werd tussentijds onderbroken (sessielimiet/herstart) en meldde zich als "stopped" i.p.v. "completed". Gecontroleerd of het werk daadwerkelijk af was voordat er iets opnieuw gedaan werd.

**Bevinding: alles bleek al compleet.** Bij controle bleken zowel de twee case-study-pagina's (`src/app/portfolio/auwt-aelse/page.tsx`, `chefs-connect/page.tsx` — beide volledig herschreven met echte, van de live sites onderzochte content: Auwt Aelse's tweetalige NL/EN-kaart en Elsloo-locatie, Chefs Connect's drie trajecten + sub-merk "Connect Events & Dining" + 48 regiopagina's) als de volledige leadcapture-backend (`functions/api/{lead,status,mark-responded}.ts`, `src/components/StatusIndicator.tsx` gewired in homepage/contact/CityPage, `docs/LEADCAPTURE-SETUP.md`) al af en correct — dit was allemaal al gedaan vóór de onderbreking, alleen het eindrapport ontbrak.

**Wel opgepakt: portfolio-listing-kaart voor Chefs Connect.** `src/app/portfolio/page.tsx` — de korte kaart-tekst op de portfolio-overzichtspagina was blijven hangen op de oude, vagere "digitaal ontmoetingsplatform"-framing terwijl de eigen case-study inmiddels de echte, specifiekere business beschrijft (freelance-personeelsbemiddeling + fine-dining-events-submerk). Category "CULINAIR PLATFORM" → "HORECA PLATFORM", description herschreven om de drie trajecten en 48 regiopagina's te noemen — consistent met wat een bezoeker vindt zodra hij doorklikt.

**Geverifieerd:** eigen, gecombineerde `npx tsc --noEmit -p .` (zowel het hoofdproject als `functions/` met zijn eigen `tsconfig.json`) en `npm run build` (41/41 routes) — beide schoon, na alle bovenstaande wijzigingen samengevoegd.

---

## 2026-09-07 (avond, laatste ronde) — Resterende 6 P0-clusters uit de deepscan opgelost

**Aanleiding:** "ga door met de rest" — de overige 6 P0-clusters uit de 300-cases-deepscan, na de eerdere ronde (leadcapture-backend, live-statusindicator, reviewrotatie, case-study's, Adviseur-personalisatie, algemene voorwaarden-concept). Vier achtergrondagents parallel ingezet (elk met exacte bestand/regel-citaten uit de deepscan als opdracht), plus twee stukken zelf gedaan vanwege merk-/juridische gevoeligheid.

**1. Rebrand-gaps (agent).** `/diensten/web`, `/diensten/marketing`, `/diensten/drone` hadden nog het witte-op-zwarte "DIENST 0X"-sjabloon van vóór de rebrand — volledig omgezet naar het donker/goud-systeem van de rest van de site. Marketing-pagina's ongeverifieerde "10× sneller"-cijferblok vervangen door een verwijzing naar de echte Creemers Exclusive-case. Vijf locatiepagina's se metadata/hero-copy (nog "ZZP en MKB", "Webdesign bureau") bijgewerkt naar de huidige positionering. Creemers Exclusive toegevoegd aan `portfolio/page.tsx`'s eigen `projects`-array (ontbrak volledig — een echte renderbug, de case bestond wel als losse pagina).

**2. Robuustheid (agent).** IntersectionObserver-featuredetectie toegevoegd op alle ~23 plekken in 20 bestanden (zonder support: content direct zichtbaar i.p.v. permanent onzichtbaar). `sessionStorage`-calls op de homepage in try/catch (blokkeerde voorheen bij Safari-privébrowsen o.i.d. de hele laadscherm-fallback). Gedeelde `src/lib/openWhatsApp.ts`-utility vervangt 7 losse, onbeveiligde `window.open()`-aanroepen (detecteert popup-blokkade, valt terug op directe navigatie). `Header.tsx`'s scroll-listener nu passive + een boolean `isScrolled` i.p.v. continue state-updates per pixel. Mousemove-parallax-lus start nu alleen nog op hover-capable/fine-pointer devices zonder reduced-motion.

**3. Toegankelijkheid (agent).** Focus-management op de Adviseur-quiz (focus verplaatst naar de nieuwe vraag na elke stap, i.p.v. verloren te gaan). FAQ-accordeon: `aria-expanded`/`aria-controls`/`id`-koppeling. Homepage-contactformulier: alle labels correct gekoppeld via `htmlFor`/`id` (was volledig ongekoppeld — derde, inconsistente implementatie naast /contact en /gratis-checklist die het al goed deden). Contrastfix op de laagst-scorende tekst van de site (1,6:1 → ruim boven WCAG AA). WhatsApp-knop stond boven het mobiele menu (z-index gefixt). Reviewcarrousel en hero-woordrotatie pauzeren nu op hover/focus en stoppen volledig bij `prefers-reduced-motion`; homepage-H1 is nu een stabiele volledige zin (`sr-only`) i.p.v. een wisselend enkel woord.

**4. België-onderbouwing (agent).** JSON-LD `areaServed` sloot België actief uit op de 4 sectorpagina's én (bonus, zelfde bug, zelf gevonden) op /contact — gecorrigeerd. WERKGEBIED-velden noemen België nu expliciet i.p.v. "Internationaal". Adviseur-quiz's "lokaal contact"-antwoord veronderstelde niet langer automatisch Limburg. **Nieuwe locatiepagina `/locaties/hasselt`** (Belgisch Limburg) met een eigen NL-BE grensoverschrijdende invalshoek (btw-verlegging, KBO vs. KVK — geen kopie van de Aken/Duitsland-framing), toegevoegd aan sitemap en footer. Portfolio's onderbouwde "Bereik NL & BE"-claim herschreven naar wat de Stacy Kohnen-case daadwerkelijk bewijst (NL·BE·DE). `hreflang nl-BE` toegevoegd. KVK-nummer in footer en /contact nu een geverifieerde, werkende link naar de KVK-bedrijvenzoeker, met KBO-duiding. **Het foutieve `taxID` (KVK-nummer hergebruikt als btw-ID) is verwijderd, niet vervangen door een verzonnen nummer** — TODO-comment staat klaar voor zodra het echte btw-nummer bekend is.

**5. Eenmanszaak-transparantie (zelf, merkgevoelig).** Vijfde kaart toegevoegd aan de PROMISE-sectie op /over-ons: benoemt expliciet dat Dynique een eenmanszaak is — omgebogen tot bewijs ("precies waarom je geen accountmanager krijgt") met een concrete continuïteitsgarantie (vaste documentatie, overdraagbare code).

**6. Prijstransparantie (zelf).** Nieuwe pagina **`/investering`**: geen prijstabel voor maatwerk software (bewust, consistent met de al gepubliceerde blogpost), wel "vanaf €3.500" voor websites (letterlijk overgenomen uit de bestaande, canonieke blogpost-tekst — geen nieuw getal verzonnen), plus een uitleg van wat de prijs bepaalt en wat er altijd in zit. Nog **niet** gelinkt vanuit de hoofdnavigatie — zie "Nog te doen".

**Zelf gevonden tijdens verificatie, niet in de oorspronkelijke scan:** `src/components/CityPage.tsx` (het gedeelde component achter alle 6 locatiepagina's, inclusief het nieuwe Hasselt) had zijn eigen hardgecodeerde "Binnen 24 uur"-reactietijdclaim, buiten bereik van de eerdere StatusIndicator-fix. Beide plekken (metastrip-tegel + CTA-tekst) nu ook op de live indicator resp. neutrale formulering gezet.

**Geverifieerd:** na alle 4 agents + eigen fixes samengevoegd, een volledige eigen `npx tsc --noEmit -p .` (schoon) en `npm run build` (41/41 routes, statische export) gedraaid tegen de gecombineerde eindstaat — niet alleen op elke agent se eigen deelrapport vertrouwd. Live gecontroleerd in de browser: sr-only H1 aanwezig, FAQ `aria-expanded` werkt, homepage-formulier-velden hebben nu correcte `id`'s, `/diensten/web` toont het herbrande donker/goud-thema, `/locaties/hasselt` rendert de volledige, inhoudelijk kloppende content.

**Nog te doen — beslissing nodig van klant:**
- `/investering` linken vanuit `Header.tsx` (nav) en `Footer.tsx` — bewust nog niet gedaan om editconflicten met de 4 parallelle agents te vermijden; kleine, losse vervolgstap.
- Echte btw-nummer aanleveren voor de TODO in `/contact`'s JSON-LD.
- Posterframe-afbeelding voor `/rsc/auwtaelse/preview.mp4` ontbreekt nog (2,4MB video zonder stilstaand beeld) — de `poster`-prop is al voorbereid in `CaseStudyTemplate.tsx`, alleen het plaatje zelf ontbreekt.
- `/algemene-voorwaarden` (concept) en de eerdere leadcapture-backend-setup (Resend/Cloudflare KV) staan nog open van de vorige ronde.

---

## 2026-09-07 (avond, vervolg) — Adviseur-quiz echt gepersonaliseerd, algemene voorwaarden (concept)

**Aanleiding:** twee resterende P0-clusters uit de deepscan, na overleg kritisch bevestigd door de eigenaar.

**1. Adviseur-quiz (`src/components/Advisor.tsx`) — echte personalisatie i.p.v. 3 vaste bullet-sets.**
Voorheen kwamen de "Waarom dit past"-bullets altijd uit een vaste array per dienst (3 mogelijke diensten × 3 statische bullets) — welke combinatie van antwoorden je ook gaf, alleen de aanpak- en tijdlijn-zin veranderden echt. Nu wordt elke van de 3 bullets samengesteld: bullet 1 komt uit `START_INSIGHT` (situatie-specifiek, 4 varianten), bullet 2 uit `GOAL_INSIGHT` (doel-specifiek, 4 varianten), bullet 3 blijft de vaste dienst-identiteitsbullet. Verandert de kernvraag, dan verandert nu ook het advies zelf — niet alleen de aanpak-zin. Live getest met twee volledig verschillende antwoordcombinaties (losse tools/handwerk/snel vs. onduidelijk/overzicht/kwaliteit): andere dienst, andere bullets, andere aanpak — bevestigd in de browser.

**2. Algemene voorwaarden — conceptversie gepubliceerd, bewust niet gelinkt.**
Nieuwe pagina `src/app/algemene-voorwaarden/page.tsx` (+ `layout.tsx`), zelfde visuele stijl als `/privacyverklaring`. 16 secties: toepasselijkheid, offertes, uitvoering/fasering, wijzigingen/meerwerk, prijzen/betaling, levertijd, IE, onderhoud na oplevering, aansprakelijkheid, overmacht, geheimhouding, duur/beëindiging, herroepingsrecht, toepasselijk recht, wijzigingsclausule, contact — inhoudelijk consistent gehouden met wat al elders op de site staat (vaste prijs per fase, drie revisierondes, het vierfasen-traject). **Dit is een juridisch ongecontroleerde conceptversie**, expliciet als zodanig gemarkeerd met een banner bovenaan de pagina zelf. Bewuste keuzes om misbruik/premature publicatie te voorkomen: `robots: { index: false }` in de layout-metadata, en (nog) geen link vanuit de footer of sitemap.xml — pas toevoegen zodra de eigenaar (of een jurist) de tekst heeft nagekeken.

**Beslissing nodig van klant:** `/algemene-voorwaarden` doorlezen/laten checken; zodra akkoord, `noindex` verwijderen uit `src/app/algemene-voorwaarden/layout.tsx` en de pagina linken vanuit `Footer.tsx` (naast de bestaande privacyverklaring-link) en `sitemap.ts`.

**Geverifieerd:** `npx tsc --noEmit -p .` schoon, volledige `npm run build` slaagt — nu 39 routes (was 38, `/algemene-voorwaarden` toegevoegd). Adviseur-personalisatie live doorgeklikt in de browser met twee verschillende antwoordcombinaties.

---

## 2026-09-07 (avond) — Deepscan-bevindingen verwerkt: leadcapture-backend, live-statusindicator, reviewrotatie, case-study's, 13 code-cruft-fixes

**Aanleiding:** verwerking van de P0-bevindingen uit de 300-cases- en code-cruft-deepscan van eerder vandaag. Per cluster kritisch besproken met de eigenaar (AskUserQuestion) i.p.v. blind uitgevoerd; onderstaand de keuzes en wat daaruit gebouwd is.

**1. Leadcapture-backend (nieuw fundament, eerder bewust uitgesteld — nu opgepakt).**
Nieuwe Cloudflare Pages Functions naast de statische Next.js-export: `functions/api/lead.ts` (ontvangt formulierdata, verstuurt e-mail via Resend naar info@dynique.nl, reply-to op het bezoekersadres), `functions/api/status.ts` + `functions/api/mark-responded.ts` (live "laatst gereageerd"-tracking via een Cloudflare KV-namespace, met een 48-uur-staleness-check zodat er nooit een verouderde claim getoond wordt). `functions/tsconfig.json` toegevoegd + `functions/` uitgesloten van het hoofdproject se `tsconfig.json` (aparte build-pipeline, `@cloudflare/workers-types` als devDependency). Alle drie formulieren (homepage, /contact, /gratis-checklist) posten nu naar `/api/lead` vóór/naast de bestaande WhatsApp-flow — een lead gaat niet meer onzichtbaar verloren als de bezoeker de WhatsApp-stap niet zelf afmaakt. Homepage-formulier kreeg ook een e-mailveld (ontbrak volledig) en is nu een echte `<form>` met `required`-validatie i.p.v. losse divs zonder form-element.
**Beslissing nodig van klant — zie [`docs/LEADCAPTURE-SETUP.md`](./LEADCAPTURE-SETUP.md):** Resend-account aanmaken + dynique.nl verifiëren, Cloudflare KV-namespace `DYNIQUE_KV` binden, env vars `RESEND_API_KEY`/`STATUS_SECRET` zetten. Zonder die setup vallen de formulieren terug op alleen de WhatsApp-flow (geen crash, gewoon nog geen e-mail).

**2. Live reactietijd-indicator (`src/components/StatusIndicator.tsx`).**
Vervangt de drie tegenstrijdige hardgecodeerde claims (24u/2u/"direct") op homepage, /contact en /bedankt. Toont "Reageert doorgaans dezelfde werkdag" totdat de eigenaar een lead heeft beantwoord en de mark-responded-link (zie setup-doc) heeft geopend — daarna "Laatst gereageerd: X geleden", met automatische terugval na 48 uur zodat de indicator nooit een verouderde/misleidende status kan tonen.

**3. Meest prominente review (Creemers Exclusive/Tom Creemers) uit de rotatie gehaald.**
Op eigen verzoek: verwijderd uit de homepage-reviewcarousel (`src/app/page.tsx`), de Organization/LocalBusiness JSON-LD in `src/app/layout.tsx` (reviewCount 5→4 — was ook een reëel risico voor Google's review-richtlijnen, zelfbeoordelingen in structured data), en de testimonialgrid op `/vervanging` (vervangen door Stacy Kohnen, zodat de 2-koloms grid niet scheef oogt met één kaart).

**4. Case-study's Auwt Aelse en Chefs Connect afgemaakt.**
Beide waren zichtbaar lege sjablonen ondanks een "Live"-badge — de eigenaar bevestigde dat de onderliggende klantsites (auwtaelse.nl, chefs-connect.nl) wél echt live zijn, dus het "Live"-label klopt; alleen de eigen case-study-pagina's waren onaf. Een achtergrondagent bezocht beide live sites en herschreef `src/app/portfolio/auwt-aelse/page.tsx` + `chefs-connect/page.tsx` (en hun `layout.tsx`) met echte, geverifieerde inhoud via het bestaande `CaseStudyTemplate.tsx`. Onverifieerbare cijfers (Chefs Connect noemt zelf tegenstrijdige netwerkgroottes — 350+ vs 200+) bewust weggelaten i.p.v. verzonnen. **Zelf gevonden, niet gevraagd:** de homepage/portfolio-kaart-blurb voor Chefs Connect ("digitaal ontmoetingsplatform") beschrijft niet meer precies wat het platform nu is (een freelance-horecastaffing-platform met drie bezoekersflows) — hiervoor is een aparte taak klaargezet (niet zelf doorgevoerd, betreft een quote toegeschreven aan de echte oprichters).

**5. Dertien mechanische code-cruft-fixes** (van de 14 P0's uit de scan, 1 bleek bij nader inzien geen dode code): dode imports (`FlowDiagram`, `Link`, `useEffect/useState`), dode CSS (`.anim-from-left`, `.hero-video-zoom`, `.hero-title-mobile`, overbodige `.text-balance`, ongebruikte `.anim.delay-2` + `ba-url/ba-meta/ba-screen`-classNames), een niet-bestaand content-glob in `tailwind.config.ts`, een inert `large`-prop op `BrowserMockup`, een onbereikbare 5e letter in `Advisor.tsx`, twee kapotte links op de IJssalon-Italia-case (`href="#"` i.p.v. het echte domein, "MEER CASES" naar homepage i.p.v. portfolio), een gedupliceerde animatie-delay op /over-ons, en het laatste restje hardcoded groen (`#34d399`) in `Visuals.tsx` — vervangen door een van `ACCENT` afgeleide `ACCENT_RGB`-constante. Tijdens het handmatige werk nog één extra groen-restant gevonden en gefixt: de ambient-orb op `/bedankt`.

**Geverifieerd:** `npx tsc --noEmit -p .` schoon (hoofdproject én `functions/` los via eigen tsconfig). Volledige `npm run build` slaagt, alle 38 routes (statische export, `homepage` blijft op 140kB First Load JS — de nieuwe formulier-/statuslogica voegt vrijwel niets toe).

**Nog open — vervolgvragen aan eigenaar volgen:** de overige acht P0-clusters uit de use-case-scan (algemene voorwaarden, half doorgevoerde rebrand op /diensten/web·marketing·drone en de locatiepagina's, de Adviseur-quiz die maar 3 vaste diensten + 2 dynamische zinnen oplevert ongeacht de combinatie van antwoorden, prijsinformatie-inconsistentie, eenmanszaak-transparantie, toegankelijkheid, robuustheid, België-onderbouwing).

---

## 2026-09-07 (later) — 3D-vakmanschap-showcase teruggedraaid

**Aanleiding:** de eigenaar zag de opgezette Three.js-scaffold (placeholder-laptop, canvas, fallback-lagen) en gaf direct af: "stop maar met dat three js ding echt lelijk". Volledig teruggedraaid, geen discussie.

**Verwijderd:** `src/components/showcase/` (ShowcaseSection/ShowcaseCanvas/PosterFallback/model), de `<ShowcaseSection />`-plek in `src/app/page.tsx` (sectienummering teruggezet: 7c ADVISEUR i.p.v. 7c SHOWCASE/7d ADVISEUR), `three`/`@types/three` uit `package.json`, de `.img2threejs-work/`-scratchmap + bijbehorende `.gitignore`-regel. De achtergrond-agent die de echte laptop-reconstructie via de `img2threejs`-pipeline aan het bouwen was, is gestopt (`TaskStop`) vóórdat hij verder werk verspilde.

**Bewust behouden:** de `CornerMark`-refactor naar een gedeeld `src/components/CornerMark.tsx` (nog steeds actief gebruikt op 5 plekken als hoek-bracket-signatuur) — dat was een op zichzelf staande, al eerder geaccordeerde verbetering, losstaand van de showcase-poging. De `img2threejs`-skill zelf blijft geïnstalleerd op `~/.claude/skills/` (buiten de site-repo, geen impact) voor eventueel later gebruik.

**Geverifieerd:** `npx tsc --noEmit` schoon na de revert.

**Vervolg:** eigenaar wil eigenlijk iets dat over de site heen beweegt (scroll-/pagina-breed bewegend element, geen 3D-object) — referentiesites worden nu verzameld als inspiratie voor die richting.

---

## 2026-09-07 (later) — 3D-vakmanschap-showcase: technische scaffold gebouwd, echte model-generatie loopt op de achtergrond

**Aanleiding:** verzoek om de nieuwe `img2threejs`-skill in te zetten voor een "next level" 3D-showcase-element — puur additief naast de al afgeronde hero — specifiek om te bewijzen dat Dynique de technische skills zelf in huis heeft. Aanpak vooraf vastgelegd in een plan (`/Users/john/.claude/plans/drifting-skipping-wozniak.md`, via plan-mode + een Plan-agent voor de technische architectuur), met drie keuzes bevestigd door de eigenaar: een precies gemodelleerd laptop-device met eigen portfolio-werk "op het scherm" (concreet bewijs i.p.v. metafoor), een zelf gezochte rechtenvrije referentiefoto, en plaatsing als nieuwe homepage-sectie direct na Portfolio.

**Gebouwd:**
- `img2threejs`-skill geïnstalleerd (`~/.claude/skills/img2threejs`); Python-versieblocker opgelost (systeem-`python3` is 3.9.6, skill vereist 3.10+ — `/Users/john/.local/bin/python3.12` gebruikt).
- Referentiefoto gezocht en gekozen (rechtenvrij, Unsplash, clean driekwart-studio-opname) — staat in `.img2threejs-work/` (gitignored scratch-map, nooit onderdeel van de site-repo).
- **Een echte refactor, niet alleen nieuwe code:** `CornerMark` (het hoek-bracket-signatuurelement van de vorige sessie-ronde) verplaatst van een lokale, alleen-in-`page.tsx`-bruikbare functie naar een gedeelde `src/components/CornerMark.tsx` — met zijn eigen zelfstandige `<style jsx>`/keyframe (styled-jsx scoping betekent dat losse bestanden hun eigen stijlen moeten meenemen), zodat de nieuwe sectie 'm kan hergebruiken zoals het plan vereiste.
- `src/components/showcase/` opgezet volgens het geaccordeerde plan: `ShowcaseSection.tsx` (copy/layout/CornerMark/`.anim`-reveal + IntersectionObserver-gate, hergebruikt de al bestaande globale `.anim`-CSS uit `ProcessStyles` i.p.v. die te dupliceren), `ShowcaseCanvas.tsx` (`next/dynamic(...,{ssr:false})`, eigen rAF-loop met cleanup, `webglcontextlost`/`restored`-handling, volledige dispose-discipline, `document.visibilitychange`-pauze), `PosterFallback.tsx` (CSS/SVG-only placeholder — geen extra netwerkrequest — met een aparte "tik voor 3D"-knopvariant voor mobiel).
- Drievoudige fallback-laag vóór de zware chunk ooit wordt aangevraagd: `prefers-reduced-motion` → permanente statische poster, WebGL2-featuredetectie faalt → permanente statische poster, `pointer:coarse` (mobiel) → tap-to-activate i.p.v. autoplay.
- `three@0.185.1` + `@types/three@0.185.4` toegevoegd, **exact gepind** (geen `^`), geen `@react-three/fiber` (geen bestaand precedent, en de skill's output is een plain imperatieve `THREE.Group`-factory die beter past bij deze codebase's bestaande manual-effect-stijl).
- `src/components/showcase/model/createDeviceModel.ts` — een tijdelijke placeholder-factory (simpele primitives, zelfde exportsignatuur als wat de skill straks oplevert), zodat de hele canvas/lazy-load/fallback-keten nu al gebouwd én geverifieerd kon worden zonder op de modelgeneratie te hoeven wachten.

**Echte modelgeneratie:** loopt op de achtergrond via een losse agent die de volledige `img2threejs`-pipeline doorloopt (intake → spec → gefaseerde codegen → render-vs-referentie-gating) op de gekozen laptop-referentiefoto, met expliciete instructies: generiek/merkloos (geen Apple-logo of macOS-UI overnemen — de foto was toevallig een MacBook Air), scherm als losse, lege textuur-regio (site vult 'm later met eigen portfolio-werk). Resultaat komt in `.img2threejs-work/output/createDeviceModel.ts`; wordt na oplevering 1-op-1 verplaatst naar de definitieve locatie zodra de fidelity beoordeeld is.

**Geverifieerd (van de scaffold, met de placeholder-factory):**
- `npx tsc --noEmit` schoon.
- `npm run build`: homepage's First Load JS nauwelijks veranderd (140→141 kB) — de `three`-afhankelijkheid zit aantoonbaar **niet** in de initiële HTML/pagebundel (0 treffers bij het opzoeken van de lazy-chunk-bestandsnamen in `out/index.html` en de page-bundle), bevestigt dat de dynamic-import-scheiding werkt. De lazy 3D-chunk zelf: ~134 kB gzipped — eigen, apart budget, binnen de in het plan gestelde ~100-150 kB-richtlijn.
- Canvas-rendering geverifieerd via directe pixel-sampling van de `<canvas>` (niet via screenshot — de Browser-pane liet zich deze sessie herhaaldelijk niet fatsoenlijk renderen/screenshotten, een bekend probleem uit eerdere sessie-rondes): 33% van de gesampelde pixels non-transparant/non-zwart, bevestigt dat er daadwerkelijk verlichte 3D-geometrie wordt getekend.
- Tier-detectie geverifieerd via directe `matchMedia`-checks op zowel desktop- als mobiel-emulatie (`pointer:coarse` → correct "tap-to-activate"-pad met correcte knop/label; desktop → "autoplay"-pad).
- De IntersectionObserver-lazy-mount kon in déze sessie niet visueel bevestigd worden op scroll-in-beeld (de testomgeving rapporteerde `document.visibilityState:"hidden"` ondanks een actieve tab, wat `IntersectionObserver`-callbacks onderdrukt — een omgevingsbeperking, niet een codefout: de logica volgt exact het al bewezen `PortfolioVideo`-patroon uit `page.tsx`). Verdient een korte handmatige controle door de eigenaar zodra de definitieve 3D-content erin staat.

**Nog te doen:**
- Wachten op de achtergrond-pipeline; bij oplevering de placeholder-factory vervangen door de echte gegenereerde `createDeviceModel.ts` en het portfolio-screenshot als schermtextuur toevoegen.
- Live browsercontrole van de scroll-in-beeld-trigger door een mens (of in een sessie zonder de hierboven genoemde pane-beperking).

---

## 2026-09-07 — Deepscan: 300 klant-use-cases + volledige code-cruft-scan

**Aanleiding:** verzoek om een kritische deepscan van de site — 300 gedetailleerde use-/edge-cases per klanttype ("klanten die het niet vertrouwen, klanten die een bepaald iets willen"), plus tegelijk een scan van elke pagina op oude/dode code.

**Methode:** één workflow, twee onafhankelijke, parallelle onderdelen (49 agents totaal, in twee runs vanwege een tussentijdse sessielimiet — hervat via `resumeFromRunId`, geverifieerd dat gecachete resultaten intact bleven):
- **Use-cases:** 20 klantarchetypen (wantrouwende eerste-bezoeker, trauma van een mislukt IT-project, technische CTO, prijsvergelijker, Belgische klant, sceptische techneut, enterprise/AVG-klant, oud device/traag netwerk, etc.) × 15 cases per archetype, elke batch daarna kritisch herzien door een aparte reviewer-agent.
- **Code-scan:** 8 parallelle scans, één per paginagroep (homepage/root, diensten, sectorpagina's, locaties, portfolio, blog, standalone-pagina's, interactieve componenten), 54 ruwe bevindingen teruggebracht tot 40 unieke items na dedup.

**Resultaat, vastgelegd in twee nieuwe documenten:**
- [`docs/USE-CASES-DEEPSCAN-2026-09-07.md`](./USE-CASES-DEEPSCAN-2026-09-07.md) — 300 cases (98x P0 / 130x P1 / 72x P2), elk met situatieschets, exacte code-locatie van het probleem, en een concreet verbetervoorstel. Bevat een P0-index bovenaan om snel de 98 meest kritieke te doorlopen.
- [`docs/CODE-CRUFT-SCAN-2026-09-07.md`](./CODE-CRUFT-SCAN-2026-09-07.md) — 40 bevindingen (14x P0 / 20x P1 / 6x P2) over 8 categorieën. Terugkerende patronen: een leftover groen kleurtoken (#34d399) in meerdere bestanden, `diensten/processen/page.tsx` dupliceert het hele gedeelde `Visuals.tsx` i.p.v. het te importeren (de Limburg-variant doet dit al goed), de rebrand ("AI Marketing"→"Digitale Marketing" etc.) is niet overal doorgevoerd, Tailwind's accent/ink-tokens zijn gedefinieerd maar nergens gebruikt, en een aantal content-tegenstrijdigheden los van code (de bekende 24u-vs-2u-reactietijd, een prijscontradictie in een blogpost, twee live-URL's voor Creemers Exclusive).

**Belangrijke opmerking bij de use-cases:** dit is een AI-gegenereerde kritische scan, bedoeld als prioriteitenlijst en gespreksstof — niet als blindelings uit te voeren backlog. Met name de meest opvallende bevinding (de eerste/meest-herhaalde homepage-review is de eigenaar die zijn eigen tweede onderneming beoordeelt, zonder disclosure) verdient een bewuste keuze van de eigenaar, geen automatische fix.

**Nog te doen — beslissing nodig van klant:** welke P0's (van beide documenten) opgepakt worden, en in welke volgorde. Nog niets uit deze scan is doorgevoerd in de code.

---

## 2026-09-03 (later) — Feedback-ronde: stat-tellers weg, portfolio verplaatst, scroll-indicator vervangen, header ontdaan van drukte

Vier directe correcties na de vorige feedback-iteratie, plus een productiebevinding:

- **Geanimeerde stat-tellers verwijderd** (`src/app/page.tsx`) — de net gebouwde `StatCounter` (count-up + bar-animatie) bleek voor de eigenaar op "0u / 0% / 0" te blijven staan. In plaats van te blijven debuggen: teruggedraaid naar de statische weergave van vóór die feature, en de nu ongebruikte `StatCounter`-component + `.stat-bar`-CSS volledig verwijderd (geen dode code).
- **Portfolio-sectie verplaatst** — stond direct na "Waarom Dynique" (positie 5 van 9); staat nu na Reviews én Process, vlak vóór de Adviseur/CTA-blokken (nieuwe positie 7 van 9). Secties "Reviews" en "Process" hernummerd (6→5, 7→6) zodat de code-commentaren kloppen.
- **Hero scroll-indicator vervangen** — de tekst "SCROLL" + verticale lijn (waarvan de centrering deze sessie al eerder gefixt was) vervangen door een klassieke, minimale "muis"-scroll-indicator: een afgeronde pil met een gouden stipje dat naar beneden vervaagt (`.scroll-dot`/`@keyframes scrollDot`, met `prefers-reduced-motion`-override). Bewust ingetogen — geen nieuwe "bridge"-achtige constructie na de eerdere afwijzing daarvan. Horizontaal gecentreerd via `left-1/2 -translate-x-1/2` (geverifieerd, geen randgeval zoals bij de oude letter-spacing-bug).
- **Header geherstructureerd** (`src/components/Header.tsx`) — desktop-nav ging van 7 gelijkwaardige tekstlinks (Diensten, Home, Portfolio, Over ons, Blog, FAQ, Contact) naar 4 links (Diensten, Portfolio, Over ons, Blog) + één losstaande gouden CONTACT-knop. "Home" verwijderd (het logo doet die taak al); "FAQ" verplaatst naar de footer (`Footer.tsx`'s Ontdek-lijst) zodat de homepage-sectie bereikbaar blijft. Onderstreping bij hover en de Diensten-dropdown's hover-accent staan nu consistent op het merk-goud (`#d4a574`) i.p.v. zwart/wit — de header had tot nu toe geen spoor van de rebrand-kleur.
- **Productiebevinding — geen codebug maar een deploy-gat:** de gerapporteerde "oude beelden" op `/portfolio` bleken lokaal niet reproduceerbaar (alle `.webp`-paden geven 200 OK, `tsc`/`build` schoon). Rechtstreeks gecontroleerd op `dynique.nl/portfolio`: `hero.png` → 200, `hero.webp` → 404. **De live site draait nog op de oude, vóór-deze-sessie code/assets** — niets van de rebrand, asset-optimalisatie of deze feedback-ronde is ooit gecommit of gedeployed. Dit is geen bug om te fixen, maar een go-live-beslissing: gebruiker gevraagd of commit + deploy gewenst is.

**Geverifieerd:** `npx tsc --noEmit` en volledige `npm run build` (statische export, 38 routes) beide schoon. Nieuwe sectievolgorde bevestigd via de gerenderde `h2`-koppen in de browser. Desktop-header visueel gecontroleerd op 1440px-breedte (Diensten-dropdown, 4 links, gouden Contact-knop). Scroll-indicator DOM-positie gecontroleerd (`getBoundingClientRect`, gecentreerd).

---

## 2026-09-03 — Hero-overgang herzien: referentiesites gescand, 3 elementen gebouwd

**Aanleiding:** de eerder gebouwde "aurora bridge + scroll badge"-overgang tussen hero en marquee werd afgewezen ("dit is echt superlelijk"). In plaats van zelf te blijven itereren: op verzoek 3 referentiesites gescand op overneembare elementen — [nbnzia.com](https://www.nbnzia.com), [goats.com.pl](https://goats.com.pl), [pleurat.com](https://www.pleurat.com) — en de bevindingen als keuzemenu voorgelegd. Eigenaar koos 3 van de 4 voorstellen.

**1. Hoek-bracket signatuur** (`src/app/page.tsx`) — nieuwe `CornerMark`-component: een klein goud `⌐`-merkteken (twee dunne lijnen, 1px, `#d4a574`/40%), herbruikt op 4 plekken als rustig terugkerend signatuur-device i.p.v. animatie:
- Onderaan de hero (links + rechts), als bewuste "framesluiting" vlak voor de marquee begint — dit was het directe antwoord op de afgewezen overgang, ditmaal bewust statisch/subtiel i.p.v. elaborate.
- Rechtsboven bij de secties "Waarom Dynique", "Portfolio" en "Het Traject".

**2. Accordion diensten-lijst** (`src/app/diensten/page.tsx`) — de DISCIPLINES-sectie (4 kaarten in een grid, met ghost-cijfers en hover-glow) vervangen door een uitklapbare lijst: gestapelde rows met nummer/kleurstip/titel, één open tegelijk (eerste item — Maatwerk Software — standaard open), CSS grid-template-rows-animatie voor de expand/collapse. Lost het "identical card grids"-punt uit `CRITIQUE-SITE-2026-07-14.md` op voor de belangrijkste dienstenpagina. Navigatie (`BEKIJK DIENST`) is nu een aparte link binnen het uitgeklapte paneel i.p.v. de hele kaart als link (toegankelijker: geen geneste interactieve elementen meer).

**3. Geanimeerde stat-tellers** (`src/app/page.tsx`) — nieuwe `StatCounter`-component voor het conversieblok (24u/100%/3 revisierondes): telt op vanaf 0 zodra de sectie in beeld scrollt (IntersectionObserver, ease-out, 1.2s), met een dun goud staafje dat gelijktijdig vult. `prefers-reduced-motion` toont direct de eindwaarde zonder telanimatie.

**Bewust niet gebouwd (op verzoek achtergehouden):** trust-logo-strip (nog geen grote klantnamen om te tonen), ervaring-lijst-sectie, woord-niveau kleuraccent in de hero-headline.

**Geverifieerd:** `npx tsc --noEmit` schoon. Live gecontroleerd op `localhost:3001`: hoek-brackets renderen op alle 5 posities (`getBoundingClientRect` gecontroleerd), stat-tellers starten aantoonbaar op "0u"/"0%"/"0" buiten beeld en tellen op naar eindwaarde bij scroll-in-beeld, accordion wisselt correct tussen items (getest door WEB & DESIGN te openen — MAATWERK SOFTWARE sluit automatisch). Geen console-errors.

**Foutcontrole (workflow, 34 agents: 4 review-dimensies + adversariële verificatie per bevinding):** 10 bevindingen, allemaal bevestigd na tegen-verificatie. Teruggebracht tot 5 unieke, echte issues en direct gefixt:
- **Major:** gesloten accordion-panelen op `/diensten` bleven met Tab bereikbaar (de "BEKIJK DIENST"-link stond nog in de tab-volgorde op 0px hoogte). Fix: `aria-hidden` op het paneel + `tabIndex={-1}` op de link wanneer dicht.
- **`<h3>` genest in `<button>`** — ongeldig content-model, brak heading-navigatie voor screenreaders. Fix: structuur omgedraaid naar `<h3 className="contents"><button>...</button></h3>` (WAI-ARIA APG-patroon), geen visuele/layout-impact (`display:contents` bevestigd in DOM).
- **`StatCounter`'s requestAnimationFrame-lus werd nooit gecanceld** bij unmount (inconsistent met het bestaande parallax-orb-patroon elders in hetzelfde bestand). Fix: rAF-id opgeslagen in een ref en gecanceld in de effect-cleanup.
- **`CornerMark`'s intro-animatie negeerde `prefers-reduced-motion`** (inline `style`, niet gedekt door een CSS-override). Fix: omgezet naar een `.corner-mark`-klasse met CSS-custom-property voor de delay, met reduced-motion-override — zelfde patroon als `.scroll-cue`/`.stat-bar`.
- **Tagline-fade in de accordion animeerde niet** — `transition-[grid-template-rows]` beperkte de transition tot alleen die property, dus de opacity-toggle sprong instant. Fix: naar `transition-all`.

Alle 5 fixes geverifieerd: `tsc --noEmit` schoon, volledige `npm run build` slaagt (38 routes), `.corner-mark`-regel + reduced-motion-override teruggevonden in de gebouwde JS-chunk, en in de live DOM gecontroleerd dat dichte panelen `aria-hidden="true"`/`tabIndex=-1` hebben en het open paneel `aria-hidden="false"`/`tabIndex=0`.

---

## 2026-07-14 — Rebrand afmaken over de hele site (op basis van de kritische scan)

**Status:** kern zelf uitgevoerd (site-brede infrastructuur), overige 7 pagina-groepen lopen via een parallelle workflow.

Naar aanleiding van de kritische scan hierboven, met expliciete keuzes van de eigenaar: (1) rebrand afmaken over de hele site heeft prioriteit, (2) eerste-website/vervanging volledig herschrijven i.p.v. retireren, (3) de 3 bespoke portfolio-cases blijven staan als "webwerk"-bewijs.

**Zelf direct uitgevoerd (bronwaarheid + hoogste zichtbaarheid):**
- `src/app/layout.tsx` — title, description, keywords (herordend, maatwerk software voorop + België toegevoegd), OG/Twitter-velden, JSON-LD Organization/WebSite-beschrijvingen, `areaServed` (NL+BE toegevoegd), `serviceType` (maatwerk software vooraan).
- `src/app/opengraph-image.tsx` — de daadwerkelijke afbeelding die verschijnt bij het delen van de site: goud/violet i.p.v. amber/indigo, "Maatwerk Software & Development" i.p.v. "Full Creative Development Agency".
- `src/components/Footer.tsx` — merk-tagline herschreven, dienstenlijst herordend (Maatwerk Software voorop).
- `src/components/Header.tsx` — dienstenlijst herordend + gouden markering op het primaire item; **2 echte a11y-bugs gefixt**: de mobiele-menu-sluitknop was met het toetsenbord onbereikbaar (nu in de Tab-cyclus opgenomen), en de achtergrond werd niet verborgen voor screenreaders tijdens een open menu (nu `aria-hidden` op `<main>`).
- `src/components/processen/Visuals.tsx` — de gedeelde `ACCENT`-constante van groen (#34d399) naar goud (#d4a574) — dit cascadeert automatisch naar alle 4 sectorpagina's, beide processen-pagina's, en de homepage's before/after-demo.
- Losse hardcoded groen-restanten opgespoord (`grep -rl "34d399" src/`) en gefixt in 14 bestanden: `SectorTemplate.tsx`, 4x `maatwerk-software/*/page.tsx`, `bedankt/page.tsx`, `blog/page.tsx`, `locaties/eindhoven/page.tsx`, `blog/website-laten-maken-limburg/page.tsx`, `diensten/processen/{page,limburg/page}.tsx`, `gratis-checklist/page.tsx`. Twee ervan (`CityPage.tsx`'s "Beschikbaar"-badge, `BlogPost.tsx`'s CTA-label) waren hardcoded ongeacht de eigen paginakleur — nu correct dynamisch (`data.accent`/`meta.accent`). Het WhatsApp-icoon op de homepage bleef bewust groen (WhatsApp's eigen merkkleur).
- `src/app/portfolio/page.tsx` — statistiekenstrip herschreven weg van "Web · App · Brand"/"Horeca · Cultuur · B2B" (generieke bureau-framing) naar taal die aansluit bij maatwerk software.
- `src/app/metadata-config.ts` — **verwijderd**. Bevestigd dode code (0 imports elders), beschreef de oude doelgroep (zzp'ers, startende ondernemers) — een landmine voor wie het per ongeluk weer aankoppelt.

**Via workflow (7 parallelle groepen, elk met PRODUCT.md-citaten en de bovenstaande copy als stem-anker):** diensten-hub, over-ons, de 4 sectorpagina's + SectorTemplate (portfolio-link + founder-stem toevoegen), processen-pagina's (general + Limburg), de 5 locatiepagina's (prijsanker/snelheidsclaims verzachten, geen volledige herschrijving — blijven lokale SEO-pagina's), blog (2 oude-doelgroep-posts + hub-tagline), en een **volledige herschrijving** van eerste-website + vervanging (verkeerde stad Amsterdam→Limburg, verkeerd kleursysteem→goud, verkeerde `Header`-variant, verkeerde doelgroep/toon).

**Workflow-resultaten (7 groepen, allemaal klaar):**
- **Diensten-hub**: eyebrow/H1 herschreven ("Maatwerk software. Eén partner." i.p.v. "Vier disciplines"), Maatwerk Software-kaart van positie 02→01 en van indigo naar goud, hero-copy expliciet "marketing en beeld sluiten daarop aan", sectorlinks (Bouw/Zorg/Logistiek/Installatiebedrijf) toegevoegd onder de diensten-grid, cross-discipline-sectie herkaderd, JSON-LD ItemList heringedeeld.
- **Over-ons**: JSON-LD + meta + hero herschreven weg van "elke ondernemer"/"full creative agency", nieuw concreet procesmatig bewijspunt toegevoegd (functioneel ontwerp → iteraties → test → live) als eerste echte "technisch onderlegd"-bewijs op de site.
- **Sectorpagina's + SectorTemplate**: "Bekijk ons werk"-link + founder-stem-regel toegevoegd (varieert automatisch per sector via bestaande data), 3 identieke slotzinnen ("En dat kost niet alleen tijd...") gevarieerd per sector.
- **Processen-pagina's**: JSON-LD "full creative development agency"-restant in de Limburg-variant gefixt, founder-stem + portfolio-link toegevoegd op beide, MKB-only-framing verzacht naar "van MKB tot grotere bedrijven", België toegevoegd aan areaServed.
- **Locatiepagina's**: het vaste €2.500-prijsanker (Heerlen) verwijderd, "7-14 dagen"-levertijdbelofte verzacht naar "een helder plan, geen verrassingen" (consistent met de homepage's eigen proces-sectie).
- **Blog**: hub-tagline/meta leidt nu met maatwerk software, de twee oude-doelgroep-posts kregen een zachtere prijs-/snelheidsframing plus een nieuwe sectie/paragraaf die doorverwijst naar maatwerk software.
- **Eerste-website + vervanging**: **volledige herschrijving**. Amsterdam→Limburg, kleursysteem volledig naar goud (incl. focus-rings, checkboxes, gradients), `Header variant="light"` gefixt, ongefundeerd statistiekenblok (70%/24-7/10x) verwijderd, "BETAALBAAR — geen maandenlange trajecten" herkaderd naar "ZORGVULDIG — gestructureerde migratie". **Zelf gevonden, niet gevraagd:** twee verzonnen/ongeverifieerde testimonials (House of Chocolate, "SA Personeel") vervangen door de 5 échte geverifieerde reviews die al in de site's JSON-LD staan.

**Eindverificatie:** `npx tsc --noEmit` schoon (project-breed), volledige `npm run build` slaagt (alle 38 routes), en in de gebouwde HTML gecontroleerd: **0** resterende instanties van "full creative development" waar dan ook op de site, en de enige 2 resterende `#34d399`-treffers zijn het WhatsApp-icoon (terecht, dat is WhatsApp's eigen merkkleur). Visueel gecontroleerd in de browser op `/diensten` en `/eerste-website` — beide lezen coherent in de nieuwe stem.

---

## 2026-07-14 — Kritische site-scan: rebrand stopt bij de homepage

**Status:** rapport klaar, zie [`CRITIQUE-SITE-2026-07-14.md`](./CRITIQUE-SITE-2026-07-14.md) voor het volledige rapport (Design Health Score 20/40, 5 prioriteitsissues, persona red flags).

12 parallelle reviewers + deterministische scan over de hele site. Hoofdbevinding, onafhankelijk bevestigd door vrijwel elke reviewer: **de rebrand van vandaag raakte alleen de homepage** — root-metadata, OG-afbeelding, Footer, Diensten-hub, over-ons, alle sectorpagina's, alle locatiepagina's, processen-pagina's, en 2 van 3 blogposts dragen nog het oude groen (#34d399) en/of de "Full creative development agency, vier gelijke diensten"-framing. Daarnaast: de portfolio bevat momenteel geen enkel bewijs van softwarewerk (2 case-templates zijn 80% leeg, de overige 3 zijn pure marketing-onepagers), en `eerste-website`/`vervanging` zijn wees-pagina's (nergens gelinkt, nog wel geïndexeerd) met een verkeerde vestigingslocatie (Amsterdam i.p.v. Limburg).

**Nog niet uitgevoerd — wacht op prioritering van de eigenaar** (zie de vragen aan het eind van het rapport).

---

## 2026-07-14 — Adviseur-quiz herschreven naar apps & maatwerk software

**Status:** klaar, geverifieerd (tsc + build schoon, volledig doorgeklikt in de browser: alle 4 vragen + resultaat + beide CTA-links gecontroleerd).
**Bestand:** [`src/components/Advisor.tsx`](../src/components/Advisor.tsx) — alleen inhoud aangepast, interactie-mechaniek (console-UI, voortgang, animaties, a11y) volledig ongewijzigd gelaten.

De homepage-quiz ("De Adviseur") was nog steeds afgestemd op "eerste website / vervanging / marketing / drone" — een bewust openstaand punt uit de eerdere rebrand-pas. Nu volledig herschreven rond apps en maatwerk software:

- **Vraag 1 (situatie):** "Waar loop je nu tegenaan?" — opties over het actuele probleem (losse tools, systeem dat niet meer past, ontbrekende app/portaal, onduidelijke behoefte) i.p.v. website-status.
- **Vraag 2 (doel):** minder handwerk/automatisch, systemen koppelen, een app/platform, overzicht & controle — i.p.v. meer klanten/SEO/beeld.
- **Vraag 3 (voorkeur):** "premium uitstraling" vervangen door "kwaliteit & veiligheid voorop" (code die jaren meegaat) — past bij software, niet bij visuele uitstraling.
- **Vraag 4 (planning):** ongewijzigd, was al neutraal genoeg.
- **Uitkomsten:** van 6 diensten (eerste website, vervanging, marketing, processen, drone, web) teruggebracht naar 3 die passen bij de nieuwe scope: **Je processen automatiseren**, **Een systeem op maat**, **Een app of platform op maat** — wijzen naar `/diensten/processen` resp. `/diensten/web`.
- **Kleuraccenten** van de 3 uitkomsten en de stap-indicator meegenomen in de nieuwe goud/violet/roze-palet (geen groen/oranje meer).
- Introzin bijgewerkt ("...ook als dat betekent dat je (nog) niets hoeft te laten bouwen" i.p.v. "...geen nieuwe website nodig hebt").

**Geverifieerd end-to-end in de browser:** alle 4 vragen doorlopen, resultaat correct berekend ("Je processen automatiseren" bij lostools/handwerk-antwoorden), beide CTA-knoppen linken naar de juiste pagina's (`/diensten/processen`, `/blog/n8n-make-zapier`).

---

## 2026-07-14 — Tweede feedbackronde: scroll-bug, kleurrichting omgegooid

**Status:** klaar, geverifieerd (tsc + build schoon, visueel gecontroleerd op desktop en mobiel, meerdere punten in de orb-ademhalingsanimatie bekeken).

Directe vervolgfeedback: de scroll-indicator in de hero stond niet gecentreerd, de groene signatuurkleur beviel niet, de technische grid-textuur in de hero ook niet, en er werd gemist "een prachtig element ... zoals die verschillende kleuren op de achtergrond" — een duidelijke verwijzing naar de kleurrijke orb-achtergrond van vóór de rebrand.

- **Scroll-indicator gecentreerd.** Echte bug, geen perceptie: `tracking-[0.4em]` op de laatste letter van "SCROLL" voegt letter-spacing toe ná het laatste teken, wat de optische center van getrackte tekst structureel naar rechts verschuift t.o.v. een niet-getrackt element eronder (bekend CSS-effect bij zware letter-spacing + flex-centering). Fix: `letterSpacing` + compenserende `marginRight: -0.4em` inline, in plaats van de Tailwind-trackingclasse. Geverifieerd met een DOM-meting: tekst- en lijn-middelpunt liggen nu <2px uit elkaar (onwaarneembaar).
- **Groen volledig vervangen.** Op uitdrukkelijk verzoek ("ik vind de groene kleur niet mooi") is de emerald-signatuurkleur (`#34d399`/`emerald-400`) overal op de homepage vervangen door het al bestaande, sitewide "premium" warm-goud (`#d4a574`) — founder-sectie, "Waarom Dynique"-pijlers, process-timeline, conversieblok-statistieken, before/after-labels. Bewust ongemoeid gelaten: het WhatsApp-icoon (blijft WhatsApp's eigen herkenbare groen — merkconventie, geen Dynique-kleur) en `processen/Visuals.tsx` zelf (gedeeld met de 4 sectorpagina's, buiten scope van vandaag; het interne "succes"-groen in de AfterScreen-dashboardmockup is een UI-conventie, geen merkbewering).
- **Technische grid-textuur verwijderd** uit de hero-achtergrond.
- **Hero-achtergrond herontworpen als rijke meerkleurige aurora**: goud (dominant, warm) + violet (rijk, secundair) + roze (klein accent dat de twee verbindt) — bewust géén terugkeer naar de oude amber/indigo/rose-mix, wel dezelfde geest van "meerdere kleuren die ademen en bewegen" die gemist werd. Derde orb + bijbehorende parallax-/ademhalingsanimatie (die eerder verwijderd was) hersteld. Laadscherm-orbs meegenomen in dezelfde kleurwissel voor consistentie bij eerste binnenkomst.

**Bewuste correctie op eigen eerdere aanname:** de shape-brief zei eerder "strakker en technischer, minder decoratieve gloed" — die aanname is nu expliciet door de eigenaar overruled met concrete, directe feedback. Directe feedback in het moment weegt zwaarder dan een eerdere hypothese die niet bleek te kloppen zodra hij het zag.

**Geverifieerd:** `npx tsc --noEmit` schoon, volledige `npm run build` slaagt, visueel gecontroleerd op meerdere momenten in de orb-ademhalingscyclus (kleurbalans verschuift natuurlijk over tijd, geen enkel frame is puur violet of puur goud) en op echt mobiel (375px) — geen overflow, scroll-indicator leesbaar en gecentreerd.

---

## 2026-07-14 — Visuele iteratie na feedback: "lelijk, te weinig showcase"

**Status:** klaar, geverifieerd (tsc + build schoon, visueel gecontroleerd op desktop en mobiel).

Directe feedback van de eigenaar op de eerste homepage-herbouw: "Lelijk, te weinig foto's, te weinig showcase van award winning design skills." Terechte kritiek — de eerdere pas interpreteerde "strakker en technischer" (uit het ontwerp-brief) als "leger", en dat sloeg door naar kaal/saai in plaats van ingetogen-maar-rijk. Drie concrete ingrepen, geen nieuwe kleuren erbij (blijft bij de emerald-signatuurkleur), wel meer visuele diepte en bewijs:

1. **Interactieve before/after-demo toegevoegd aan "Waarom Dynique".** Dit was de leegste sectie — 100% tekst, geen enkel visueel element. Hergebruikt de al bestaande, beproefde `BeforeScreen`/`AfterScreen`/`useBeforeAfterScrub` componenten uit [`processen/Visuals.tsx`](../src/components/processen/Visuals.tsx) (dezelfde die op de 4 sectorpagina's draaien): een browser-mockup die op scroll wipe't van een chaotisch multi-systeem-foutenscherm naar een schoon Dynique-dashboard. Dit is echte, getoonde interface-vakmanschap — geen stockfoto, geen filler — en bewijst de "van chaos naar systeem"-belofte visueel in plaats van er alleen over te schrijven.
2. **Hero-achtergrond verrijkt.** Subtiele technische grid-textuur toegevoegd (masked radial fade, 5% opacity) plus grotere/intensere orb-gloed — meer atmosferische diepte zonder nieuwe kleuren toe te voegen.
3. **Portfolio-sectie herstructureerd rond één groot uitgelicht project.** Chefs Connect krijgt nu een full-width showcase-behandeling (groter, 16:9, "UITGELICHT"-badge) bovenaan de sectie, de overige 3 cases staan eronder in een grid. Nieuwe introzin ("Zelf gebouwd, van concept tot livegang — geen sjabloon, geen shortcuts.") koppelt de sectie expliciet aan design-vakmanschap, aansluitend bij de feedback dat dit hét bewijs moet zijn.

**Geverifieerd:** `npx tsc --noEmit` schoon, volledige build slaagt, visueel gecontroleerd op desktop (800px) én echt mobiel (375px) — before/after-scrubber werkt vloeiend op scroll, featured case-study schaalt netjes mee, geen overflow.

**Bewuste keuze:** geen terugkeer naar de oude amber/indigo/rose-mix. De oplossing voor "lelijk" was meer visuele rijkdom/bewijs toevoegen binnen het bestaande, ingeperkte kleursysteem — niet het kleursysteem loslaten. Ingetogen en rijk sluiten elkaar niet uit; de eerste pas verwarde ingetogen met leeg.

---

## 2026-07-14 — Homepage herbouwd rond de nieuwe positionering

**Status:** klaar, geverifieerd (build + tsc schoon, visueel gecontroleerd op desktop en mobiel).
**Bestand:** [`src/app/page.tsx`](../src/app/page.tsx) — enige bestand aangepast, per het bevestigde ontwerp-brief.

Volledige herbouw van de homepage volgens het ontwerp-brief hierboven vastgelegde merkstrategie. Kernwijzigingen:

- **Hero:** eyebrow/rotatie/CTA's volledig herzien — "WIJ BOUWEN {MAATWERK SOFTWARE / WEB APPLICATIES / DIGITALE SYSTEMEN / PROCESSEN OP MAAT} EN DENKEN MEE OVER WAT BETER KAN." AI marketing/drone volledig uit de rotatie en de marquee-strip. Achtergrond-orbs teruggebracht van 3 kleuren (amber/indigo/rose) naar 2 (emerald signatuurkleur + neutraal grijsblauw) — minder decoratief, past bij "Committed" kleurstrategie.
- **Founder-sectie:** kop is nu letterlijk "Dynamisch in aanpak. Uniek in resultaat." (de bestaande tagline), copy herschreven rond de merkpersoonlijkheid die de eigenaar zelf formuleerde. Waarden-grid vervangen door TECHNISCH ONDERLEGD / DOORDACHT & PRECIES / EIGENZINNIG EERLIJK — direct ontleend aan wat de eigenaar in het interview zei, niet generiek bureau-taal.
- **Diensten-grid → "Waarom Dynique"-sectie:** de oude 4-kaarten-grid (web/digitalisering/AI marketing/drone, elk met eigen kleur) is vervangen door één doorlopend verhaal: probleem (standaardsoftware buigt niet mee) → aanpak (meedenken, niet alleen uitvoeren) → drie pijlers (Maatwerk Software, Web & Platformen, Procesautomatisering) met web-ontwikkeling als fundament, niet als aparte dienst.
- **Process-sectie:** alle snelheidsbeloftes verwijderd op expliciet verzoek van de eigenaar ("levertijd ligt echt per project eraan"). "Gemiddeld zeven dagen" en de dag-per-fase-badges (Dag 1, Dag 2-3, etc.) zijn vervangen door neutrale FASE 1-4 labels. De "7d Gem. oplevering"-stat in het conversieblok is vervangen door "3 Revisierondes". Timeline-kleuren van 4 losse tinten (paars/tan/oranje/groen) naar één consistente emerald-signatuurkleur.
- **FAQ:** volledig nieuwe vragenset gericht op maatwerk-software-beslissers bij grotere bedrijven (beveiliging/dataeigendom, scope-wijzigingen, werken met bestaande systemen, geografisch bereik NL+België) i.p.v. de oude website-bureau-vragen ("Hoe lang duurt het voordat mijn website live staat?", "Doen jullie ook SEO?"). De "98% tevreden"-claim en de tijdgebonden geld-terug-garantie zijn verwijderd (niet geverifieerd voor de nieuwe, grotere doelgroep — eerlijk over schaal). JSON-LD FAQPage-structured-data wordt nu direct afgeleid uit de zichtbare `faqs`-array (`.map()`) in plaats van een losse, hand-gedupliceerde lijst — voorkomt toekomstige drift tussen zichtbare content en structured data.
- **Kleursysteem:** overal op de homepage waar Dynique's eigen merk-chrome zit (hero, founder-sectie, waarom-sectie, process-sectie) is de kleur teruggebracht naar de al bestaande, in de sectorpagina's gevestigde signatuurkleur `#34d399` (emerald). Portfolio- en Reviews-secties behouden bewust hun eigen per-klant-kleuren — die horen bij de klantprojecten, niet bij Dynique's merk.
- **Opgeruimd:** dode CSS (ongebruikte `orb-breathe-3`/`loadOrbBreath3`-keyframes na het verwijderen van de derde hero-orb; nooit-gebruikte `.dienst-row`/`.dienst-expand`-regels die al vóór deze sessie dood waren).
- **Bewust ongewijzigd (per bevestigd brief):** Portfolio-sectie, Reviews-sectie, Contact-sectie (inclusief het "Wat heb je nodig?"-dropdown dat AI Marketing/Drone & Video nog steeds als optie toont — terecht, want die diensten bestaan nog, alleen niet meer als eerste verhaal), Advisor-widget (quiz-logica en -opties niet aangeraakt), Statement-strip.
- **Ook opgezet:** Impeccable live-mode config (`.impeccable/live/config.json`) voor toekomstige in-browser variant-iteratie.

**Niet in scope van deze pas** (expliciet genoemd als vervolgstap, niet als bug): de Advisor-widget's eigen vraag-/optieset is nog steeds afgestemd op "eerste website/vervanging" i.p.v. maatwerk-software-framing — de eigenaar koos er bewust voor dit nu niet mee te nemen om de scope beheersbaar te houden. Site-brede metadata (root `layout.tsx` titel/beschrijving, die nog "Full Creative Development Agency" en alle 4 diensten noemt) is niet aangepast — dat is een bredere merkbeslissing die verder gaat dan de homepage-content, en viel buiten dit ontwerp-brief.

**Nog te ontvangen van de eigenaar (niet blokkerend):** bestaande ad-scripts en 1-3 named referentiesites — zodra binnen, kunnen deze de copy verder aanscherpen.

---

## 2026-07-14 — Merkstrategie: koerswijziging naar maatwerk software

**Status:** strategische basis vastgelegd in [`PRODUCT.md`](../PRODUCT.md) (projectroot — standaardlocatie voor Impeccable en toekomstige sessies). Homepage-herbouw volgt hierna.

**Beslissing:** Dynique beweegt weg van "full creative development agency" (websites + digitalisering + AI marketing + drone/video als gelijkwaardige pijlers) naar **maatwerk software als kern**. AI marketing en drone/video blijven bestaan als diensten (navigatie, footer, eigen dienstenpagina's) maar verdwijnen van de homepage.

**Waarom:** bewuste bedrijfsstrategische keuze (niet omdat de huidige site slecht presteert) — de eigenaar wil over 6-12 maanden vooral development-klanten, niet marketing/video-klanten.

**Doelgroep-verschuiving:** van lokale MKB (Limburg-regio) naar **grotere bedrijven in Nederland én België** met een concrete maatwerk-software-behoefte. De bestaande sector-landingspagina's (bouw/zorg/logistiek/installatiebedrijf) blijven relevant als dieper-in-de-funnel bewijs, geen aparte doelgroep.

**Merkpersoonlijkheid** (met de eigenaar zelf geformuleerd, niet ingevuld door mij): technisch onderlegd (echte opleiding/ervaring, projectmatig/correct/veilig werken), doordacht en precies (komt aan tafel, denkt mee, bedenkt out-of-the-box oplossingen, maakt precies wat gevraagd wordt), eigenzinnig eerlijk (houdt zijn mond niet als hij een betere oplossing ziet, ook ongevraagd). Vooral te vermijden: een koud, onpersoonlijk "grote IT-consultancy"-gevoel.

**Bewijs:** er bestaat al minstens één concrete maatwerk-softwarecase voor een groter bedrijf, maar de eigenaar kiest er bewust voor die nu nog niet toe te voegen (volgt later). Homepage-structuur moet hier ruimte voor laten zonder herontwerp.

**Nog te ontvangen (niet blokkerend, wordt verwerkt zodra binnen):** bestaande ad-scripts (getest bij exact deze doelgroep) en 1-3 met naam genoemde referentiesites voor de gewenste feel — eigenaar zou deze nog delen.

**Ook uitgevoerd:** Impeccable live-mode geconfigureerd (`.impeccable/live/config.json`, target `src/app/layout.tsx`, geen CSP-conflict gevonden in dev).

---

## 2026-07-14 — Pre-launch audit + fixes uitgevoerd

**Status:** audit + mechanische fixes klaar. Eén blocker (leadcapture-backend) staat open, vereist een productbeslissing — zie [`LAUNCH-PLAN.md`](./LAUNCH-PLAN.md) voor de volledige lijst en het stappenplan naar morgen.

**Audit:** 6 parallelle onderzoekslijnen (links, formulieren, SEO-metadata, assets/performance, cross-file consistentie, beveiliging/deploy-config) — 4 blockers, 11 high, 9 medium bevindingen. Volledig overzicht in `LAUNCH-PLAN.md`.

**Uitgevoerd (8 parallelle fix-batches over ~25 bestanden):**
- `og:image` toegevoegd aan 18 pagina's die geen social-share-afbeelding hadden (portfolio cases, blogposts, maatwerk-software, locaties, processen/limburg) — allemaal gecontroleerd tegen de daadwerkelijke build-output, niet alleen brontekst.
- `twitter:image` consistent gemaakt met `og:image` overal (was eerder verschillend per platform).
- JSON-LD straatadres toegevoegd op 5 plekken (`layout.tsx`, `contact/page.tsx`, `over-ons/page.tsx`, `CityPage.tsx`, `diensten/processen/limburg/layout.tsx`) — matcht nu het adres dat al in footer/privacyverklaring stond.
- JSON-LD logo-afmetingen gecorrigeerd (512×512 → 1024×1024, matcht het echte bestand).
- Over-ons OG-afbeelding: verkeerde afmetingen in metadata gecorrigeerd (1200×630 landschap → 1573×2157 staand, matcht het echte bestand).
- `metadata-config.ts`: verkeerde bedrijfsnaam gecorrigeerd ("Dynique Web Development" → "Creemers Inclusives") — bestand bleek dode code (nergens geïmporteerd), maar gecorrigeerd om toekomstige verwarring te voorkomen.
- `DEPLOY_INSTRUCTIONS.md`: build-outputmap gecorrigeerd (`.next` → `out`, matcht `output:'export'` in `next.config.ts` — de oude instructie zou de Cloudflare Pages-deploy hebben gebroken), GSC-verificatie-instructies bijgewerkt naar de huidige env-var-aanpak, stale lokaal pad verwijderd.
- `.gitignore`: env-bestand-patroon verbreed van `.env*.local` naar `.env*`.
- `public/robots.txt`: dode `Disallow: /api/`-regel verwijderd (project heeft geen API-routes, `output:'export'`).

**Performance — asset-compressie (zelf uitgevoerd, niet via agents):**
- 10 PNG's (35MB totaal, waaronder een 8,3MB hero-afbeelding met `loading="eager"` — grootste blocker van de audit) gecomprimeerd naar WebP via het project's eigen `sharp`-dependency. Gemiddeld -97% bestandsgrootte, geen zichtbaar kwaliteitsverlies (visueel gecontroleerd in browser). Alle referenties in de code bijgewerkt van `.png` naar `.webp`. Oude bestanden verwijderd (waren al gecommit, dus terug te halen via git-historie indien nodig). Script bewaard op `scripts/compress-hero-images.mjs` voor hergebruik.
- 3 preview-video's (32MB totaal, 9,7-11MB per stuk) herge-encode met ffmpeg (60fps → 30fps, CRF 30, audio gestript aangezien alle video's toch al muted afspelen) naar gemiddeld 392KB per stuk (-95%), zelfde resolutie/duur behouden.
- `public/` ging van **92MB → 29MB** (-68%) in totaal.
- `public/_headers` toegevoegd (nieuw bestand) met CSP, HSTS, X-Frame-Options, Permissions-Policy, Referrer-Policy voor Cloudflare Pages — was volledig afwezig.

**Geverifieerd:** `npx tsc --noEmit` schoon, volledige `npm run build` succesvol (alle 38 routes), og:image-fix geverifieerd in de daadwerkelijke gebouwde HTML (0 pagina's missen het nu), JSON-LD-adres geverifieerd in build-output, WebP-bestanden aanwezig in `out/` op de verwachte kleine formaten.

**Nog niet gedaan (bewust, vereist jouw input):** leadcapture-backend voor de 6 WhatsApp-only formulieren + het volledig kapotte `/gratis-checklist`-formulier (verstuurt momenteel niets), GitHub-token-rotatie, verwijderen van ~15MB ongebruikte media en 2 losse persoonlijke foto's, en niets is gecommit of gepusht. Zie `LAUNCH-PLAN.md` voor de exacte openstaande vragen.

**Vooraf al vastgesteld (handmatig, buiten de audit om):**
- `dynique.nl` staat **al live** in productie op Cloudflare (HTTP 200, MX-records naar Microsoft 365 — het echte bedrijfsmailadres draait al). De huidige live versie is de **oude** ontwerp­versie (vóór de redesign van vandaag) — geen "Bricolage"-font-marker gevonden in de live HTML.
- Alle wijzigingen van vandaag (27 bestanden, zie entries hieronder) staan **lokaal uncommitted** klaar — nog niets gepusht of gedeployed.
- Git remote `origin` bevat een GitHub Personal Access Token in platte tekst in de remote-URL (credential-hygiëne risico — wordt in het launch-plan als aandachtspunt meegenomen, niet hier herhaald).
- Root-niveau `.mov`-bestanden (`chefsconnect.mov` 68MB, `ijssalon italia.mov` 118MB, `stacykohnen.mov` 105MB, `auwtaelse.mov` 11MB) staan **niet** in git (correct genegeerd via `.gitignore`) — geen repo-bloat probleem daar.
- Root-niveau `rsc/`-map (~30MB) staat wél in git en lijkt een verouderde duplicaat-bron van `public/rsc/` te zijn (bestanden verschillen, Next.js serveert alleen vanuit `public/`) — vermoedelijk dode gewicht, wordt gecheckt in de audit.
- Root-niveau bestanden `D70B5FF6-...jpeg` en `foto.jpeg` staan in git maar lijken niet gebruikt te worden door de site — wordt gecheckt in de audit.

---

## 2026-07-14 — Wettelijke informatie in footer

**Bestand:** [`src/components/Footer.tsx`](../src/components/Footer.tsx)

Wettelijke bedrijfsinformatie toegevoegd aan de footer, consistent met de bestaande privacyverklaring:
- Handelsnaam-vermelding: "Dynique is de handelsnaam van Creemers Inclusives"
- KVK-nummer: 90531264
- Vestigingsadres: Ir. Em. Melottestraat 10, 6291 HE Vaals

Rustige, ingetogen stijl (geen uppercase-tracking, dunne scheidingslijnen) — bewust sober voor een wettelijke disclosure-sectie. Geen BTW-nummer toegevoegd: stond nergens in de codebase, dus niet verzonnen.

**Geverifieerd:** live in browser gecontroleerd, `tsc --noEmit` schoon.

---

## 2026-07-13/14 — Volledige frontend redesign (audit + fix, alle pagina's)

**Aanleiding:** verzoek om de site "award-winning en max-converting" te maken via `/impeccable` audit + fix.

### Fase 1 — Sitebrede fixes + homepage
- **Typografie:** `Bricolage Grotesque` toegevoegd via `next/font/google`, verving de oude system-font stack overal (`layout.tsx`, `tailwind.config.ts`, `globals.css`).
- **Kleurtokens:** `ink-*` / `accent-*` tokens gedefinieerd in `tailwind.config.ts`.
- **Header.tsx:** interne links van `<a>` naar `next/link`; mobiel menu kreeg `role="dialog"`, `aria-modal`, `aria-expanded`, focus-trap, Escape-to-close, focus-restore.
- **Homepage (`src/app/page.tsx`):** gradient-text op processtap-cijfers verwijderd (verboden patroon), `animate-bounce` vervangen door custom ease-out, contrast-fixes op meerdere `white/30-40` teksten, laadscherm van 4s → 2.2s + overgeslagen bij herhaalbezoek (sessionStorage) + bij `prefers-reduced-motion`, eyebrow-labels van 7 → 3 instanties, portfolio-video's lazy-play via IntersectionObserver i.p.v. 4x gelijktijdig autoplay.

### Fase 2 — Alle overige pagina's (12 parallelle achtergrond-agents)
Elke groep hieronder is door een aparte agent onafhankelijk geaudit en gefixt (contrast/WCAG AA, verboden gradient-text, eyebrow-label monocultuur, `next/link`-gebruik, lazy-video waar relevant):

| Bestand(en) | Routes | Belangrijkste vondst |
|---|---|---|
| `SectorTemplate.tsx` + `processen/Visuals.tsx` | 4x `/maatwerk-software/*` | ontbrekende `htmlFor`/`id` op formulierveld hersteld |
| `CityPage.tsx` | 5x `/locaties/*` | gradient-text op highlight-cijfers |
| `CaseStudyTemplate.tsx` | `/portfolio/auwt-aelse`, `/chefs-connect` | video autoplay → lazy-play |
| `BlogPost.tsx` | 3 blogposts | grotendeels al schoon |
| `diensten/*` (hub + web/marketing/drone) | 4 routes | marketing-pagina had 2.85:1 contrastfout (WCAG-fail) |
| `diensten/processen/*` | 2 routes | contrast, formulierlabels |
| `contact/page.tsx` + `over-ons/page.tsx` | 2 routes | **grootste contrastfix**: contactgegevens stonden op `white/25`, nagenoeg onleesbaar |
| `portfolio/page.tsx` + `blog/page.tsx` | 2 routes | lazy-video fix, betere alt-teksten |
| `ijssalon-italia`/`stacy-kohnen`/`creemers-exclusive` | 3 routes | herhaald pill-badge patroon verwijderd (ijssalon) |
| `eerste-website/page.tsx` + `vervanging/page.tsx` | 2 routes | gradient-text verwijderd, `aria-pressed` op toggles |
| `gratis-checklist/page.tsx` + `bedankt/page.tsx` | 2 routes | **bug gevonden en gefixt**: leadformulier had dode `submitted`-state, gaf nooit feedback aan gebruiker bij versturen |
| `Advisor.tsx` | homepage-widget | 2 extra gradient-text overtredingen gevonden (shimmer-titel, ghost-cijfer-achtergrond) |

**Verificatie:** `npx tsc --noEmit` schoon, volledige `npm run build` (static export) slaagt — alle 38 routes gegenereerd. Steekproef in browser op `/contact` en `/maatwerk-software/bouw`.

**Bewust buiten scope gelaten:** `privacyverklaring/page.tsx` (juridische tekst, lage ontwerpprioriteit).

**Bekende valkuil:** `npm run build` niet draaien terwijl een `next dev`-server actief is tegen dezelfde `.next`-map — corrumpeert de dev-server's webpack-cache (`Cannot find module './NNNN.js'`). Eerst dev stoppen, dan builden, dan `.next` verwijderen en dev herstarten indien beide nodig zijn.
