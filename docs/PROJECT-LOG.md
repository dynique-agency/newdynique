# Project Log — Dynique Website

Doorlopend logboek van alle werk aan de codebase: wat er is veranderd, waarom, en door wie. Nieuwste entry bovenaan. Voor de actuele launch-status zie [`LAUNCH-PLAN.md`](./LAUNCH-PLAN.md).

**Conventie:** elke entry heeft een datum, een korte titel, wat er is gedaan, en — als het relevant is — een expliciete "Nog te doen" of "Beslissing nodig van klant" regel. Geen vage samenvattingen; concrete bestanden en resultaten.

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
