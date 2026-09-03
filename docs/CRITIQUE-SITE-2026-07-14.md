# Kritische site-scan — Dynique — 2026-07-14

**Methode:** aangepaste critique-flow (Impeccable's `critique`-framework), geschaald naar de hele site i.p.v. één pagina. 12 parallelle reviewers (elk gericht op een sjabloon of paginagroep) + 1 deterministische scan (`detect.mjs`), gesynthetiseerd tot één rapport. Dit is een aanpassing van het standaard single-target-protocol (dat normaal 2 geïsoleerde assessments + browser-overlay-injectie per pagina vereist) omdat de vraag over de hele site ging, niet één pagina — dat wordt hier expliciet vermeld zodat de aanpassing niet stilzwijgend gebeurt.

**Deterministische scan:** `node detect.mjs --json src/app src/components` → 0 bevindingen (schoon). Dit dekt alleen de mechanische patronen (gradient-text, bounce-easing, etc.) die al eerder deze sessie zijn opgeruimd — het pakt de contextuele patronen hieronder (herhaalde eyebrow-labels, hero-metric-blokken, merk-inconsistentie) niet op, wat precies is waarom de kwalitatieve reviewers waardevol zijn.

---

## Design Health Score

| # | Heuristiek | Score | Belangrijkste bevinding |
|---|---|---|---|
| 1 | Visibility of System Status | 2 | Elk WhatsApp-formulier (homepage, contact, alle sectorpagina's, processen) geeft nul feedback bij versturen — `window.open()` zonder succes/fout-status. |
| 2 | Match Between System and Real World | 2 | Het overgrote deel van de site (locatiepagina's, blog, eerste-website/vervanging, bespoke cases) spreekt nog de oude doelgroep aan (ZZP/MKB, €2.500-website, 7-14 dagen) i.p.v. PRODUCT.md's "grotere bedrijven NL+BE". |
| 3 | User Control and Freedom | 2 | Mobiel menu: de sluitknop is met het toetsenbord onbereikbaar (Tab-cyclus mist hem volledig) — geverifieerd live. |
| 4 | Consistency and Standards | **1** | Het zwakste punt van de hele site: de homepage is herbrand naar goud (#d4a574), maar Footer, Header, en vrijwel elke andere pagina/sjabloon gebruiken nog het oude groen (#34d399) en de oude "Full Creative Development Agency"-framing. |
| 5 | Error Prevention | 2 | Verplichte velden (rode `*`) zijn nergens echt `required` — een volledig leeg formulier verstuurt probleemloos met "(niet ingevuld)"-placeholders. |
| 6 | Recognition Rather Than Recall | 2 | De 4 sector-bewijspagina's (bouw/zorg/logistiek/installatiebedrijf) — expliciet genoemd in PRODUCT.md als "dieper-in-de-funnel bewijs" — zijn nergens gelinkt vanuit nav, footer of homepage. |
| 7 | Flexibility and Efficiency of Use | 3 | Sticky WhatsApp, formulier, en de Adviseur-quiz geven drie echte ingangen voor drie soorten bezoekers — een reële sterkte. |
| 8 | Aesthetic and Minimalist Design | 2 | Herhaalde eyebrow-labels, identieke kaart-grids en decoratieve 01/02/03-nummering op vrijwel elke pagina lezen als template, niet als vakmanschap. |
| 9 | Help Users Recognize/Diagnose/Recover from Errors | **1** | Er bestaat vrijwel nergens een foutstatus — niet omdat alles goed gaat, maar omdat niets ooit als ongeldig wordt gemarkeerd. |
| 10 | Help and Documentation | 3 | FAQ-secties (homepage, locatiepagina's) zijn oprecht nuttig en beantwoorden echte bezwaren. |
| **Totaal** | | **20/40** | **Acceptable — significante verbetering nodig** |

---

## Anti-Patterns Verdict

**Zou iemand denken "dit is met AI gemaakt"?** Voor losse pagina's individueel: niet meteen — de typografie en het motion-systeem zijn oprecht verzorgd. Maar zodra je meerdere pagina's na elkaar bekijkt: ja, duidelijk. Het patroon is niet "elke pagina is slecht", het is "dezelfde scaffolding wordt overal herhaald zonder onderscheid":

- **Herhaalde eyebrow-labels** — kleine uppercase-tracked labels boven vrijwel elke sectie — gevonden op **elke enkele pagina** die is gescand, vaak 5+ keer per pagina.
- **Hero-metric-blokken** — ongeverifieerde cijferclaims verpakt als statistiek ("10×" op de marketingpagina, "100%" in het homepage-conversieblok, dubbele statistiekenrijen op de bespoke case-studies).
- **Identieke kaart-grids** — dezelfde `gap-px bg-white/[0.06] border`-formule 3-4 keer herhaald op één pagina (processen, sectorpagina's, locatiepagina's, diensten-subpagina's).
- **Decoratieve nummering** — 01/02/03-markers die geen echte volgorde vertegenwoordigen (ghost-cijfer achter de founder-foto, VALUES-kaarten op over-ons, highlight-nummers op locatiepagina's).
- **Glassmorphism zonder functie** — `backdrop-blur-sm` op platte kaarten die direct op een effen achtergrond staan (ijssalon-italia).

**Deterministische scan:** schoon (0 bevindingen) — dit bevestigt dat de *mechanische* verboden patronen (letterlijke gradient-text, bounce-easing) al zijn opgeruimd; de patronen hierboven zijn contextueel/frequentie-gebaseerd en vallen buiten wat de detector kan zien.

---

## Overall Impression

De homepage-rebrand van vandaag is op zichzelf goed uitgevoerd. Het probleem is dat het **op zichzelf staat**. Van de ~30 routes op de site is er precies één (`src/app/page.tsx`) die de nieuwe positionering, het nieuwe goud, en de nieuwe doelgroep draagt. Alle 11 andere reviewers — onafhankelijk van elkaar, zonder dat ik dit vooraf had gesuggereerd — kwamen terug met vrijwel hetzelfde bericht: *de rest van de site is nog het oude bedrijf*. Dat is geen incidentele inconsistentie, dat is een site die letterlijk twee verschillende bedrijven claimt te zijn, afhankelijk van welke pagina je bezoekt. De grootste kans hier is niet nieuwe features bouwen — het is de rebrand die vandaag is gestart, daadwerkelijk afmaken.

---

## What's Working

1. **De Adviseur-quiz (Advisor.tsx)** — het "beantwoorde-vragen"-paneel dat eerdere antwoorden zichtbaar houdt met hun eigen kleurcodering terwijl je verdergaat, is oprecht goed uitgevoerde recognition-over-recall-interactie, geen decoratie.
2. **De sectorpagina's en processen-pagina's bewijzen vakmanschap door precisie** — elke visual is handgecodeerd (geen stockfoto's), inclusief een geanimeerd flow-diagram en een scroll-gestuurde before/after-vergelijking. Dit is precies wat PRODUCT.md's Design Principle 1 vraagt, alleen nog in de verkeerde kleur.
3. **De n8n/Zapier-blogpost** is de enige contentpagina die de "eigenzinnig eerlijk"-stem al goed te pakken heeft: neemt een standpunt in, vertelt de lezer eerlijk wanneer een goedkope tool volstaat, en verwijst door naar maatwerk software.

---

## Priority Issues

### [P0] De rebrand is gestopt bij de homepage — de rest van de site spreekt zichzelf tegen
**Locatie:** `src/app/layout.tsx:18-19,74-88,131,229` (title/description/JSON-LD), `src/app/opengraph-image.tsx` (de social-share-afbeelding zelf), `src/components/Footer.tsx:40,43` (op elke pagina), `src/app/diensten/page.tsx:110-116`, `src/app/over-ons/page.tsx:109-115`, `src/components/processen/Visuals.tsx:5` + alle 4 sectorpagina's + `src/app/diensten/processen/*` + alle 5 locatiepagina's — allemaal nog met het oude groen (#34d399) en/of "Full creative development agency"-framing.

**Waarom dit ertoe doet:** een bezoeker die de nieuwe homepage ziet en op *Diensten*, *Over ons*, of een gedeelde social-link klikt, krijgt binnen één klik een tegenstrijdig verhaal. Erger: de browsertab-titel, Google-snippet, en de afbeelding die verschijnt als iemand de link deelt in WhatsApp/LinkedIn zijn **allemaal nog de oude tekst** — mensen wordt letterlijk een ander bedrijf beloofd vóórdat ze klikken dan wat ze daarna zien.

**Fix:** Dit is geen losse bug maar het echte vervolgwerk van vandaag. Concreet, in volgorde van zichtbaarheid:
1. `src/app/layout.tsx` — title, description, OG/Twitter-velden, JSON-LD Organization/WebSite description herschrijven; `opengraph-image.tsx` visueel + tekstueel meenemen naar goud.
2. `Footer.tsx` — de merk-tagline herschrijven (dit staat op élke pagina).
3. `Visuals.tsx`'s `ACCENT`-constante van groen naar goud — dit fixt in één keer alle 4 sectorpagina's + beide processen-pagina's + de before/after-demo overal waar hij wordt hergebruikt.
4. Diensten-hub en over-ons: "Full creative development agency" / "Vier disciplines" taal vervangen.

### [P0] Er staat nergens écht bewijs van softwarewerk — het fundament onder de nieuwe belofte ontbreekt
**Locatie:** `src/app/portfolio/auwt-aelse/page.tsx:31-53`, `src/app/portfolio/chefs-connect/page.tsx:31-52` (beide voor 80% lege scaffolding — de code bevat letterlijk de comment "Design is af. Vul onderstaande velden in met de echte content"), plus `ijssalon-italia`/`stacy-kohnen`/`creemers-exclusive` (alle drie expliciet "one-page" marketingsites voor solo-ondernemers, nul software-taal).

**Waarom dit ertoe doet:** PRODUCT.md's geloofsladder rust op stap 3: "het bestaande portfolio bewijst dat dit vakmanschap al wordt geleverd." Op dit moment is er letterlijk nergens op de site een case study die laat zien dat Dynique maatwerk software heeft gebouwd — de twee cases die het juiste sjabloon gebruiken zijn leeg, en de drie die wel content hebben, zijn allemaal visuele eenmanszaak-websites.

**Fix:** Vul minstens de twee bestaande `CaseStudyTemplate`-cases (Auwt Aelse, Chefs Connect) met echte inhoud — ook 2-3 zinnen per blok (challenge/approach/features) is al genoeg om de lege-pagina-indruk weg te nemen. Herschrijf de portfolio-introtekst weg van "Web · App · Brand" / "Horeca · Cultuur · B2B" naar taal die aansluit bij maatwerk software. Zodra de eerder genoemde grotere-bedrijf-case beschikbaar is (jij noemde deze al, bewust nog niet toegevoegd), wordt dit meteen minder urgent.

### [P1] Twee complete funnel-pagina's zijn wees-content die het verkeerde verhaal vertellen
**Locatie:** `src/app/eerste-website/page.tsx`, `src/app/vervanging/page.tsx`

**Waarom dit ertoe doet:** nergens gelinkt vanuit Header, Footer, homepage of de Adviseur-quiz (alleen `sitemap.ts` verwijst er nog naar) — maar nog wel indexeerbaar en vindbaar via oude backlinks/zoekverkeer. Wie hier binnenkomt ziet emerald-groen of rood/zwart (geen van beide het nieuwe goud), leest "Geen maandenlange trajecten" (precies tegenovergesteld aan wat de nieuwe, grotere doelgroep verwacht), en ziet "Fysiek (Amsterdam)" als vestigingslocatie — terwijl de rest van de site consequent Limburg aanhoudt.

**Fix:** Kies bewust: óf volledig herschrijven naar de nieuwe positionering, óf retireren (redirect naar `/diensten/web` of `/contact`, verwijderen uit `sitemap.ts`). Op dit moment bestaan ze in een niemandsland — niet gelinkt, niet bijgewerkt, nog wel live.

### [P1] Formulieren beloven validatie die niet bestaat, en de leadmagneet verstuurt niets
**Locatie:** `src/app/page.tsx:126-138` (homepage), `src/app/contact/page.tsx` (ook: tegenstrijdige reactietijd — "2 uur" én "24 uur" op dezelfde pagina), alle `SectorTemplate`- en `processen`-formulieren, en `src/app/gratis-checklist/page.tsx:35-51` (belooft "direct per mail", de code geeft zelf toe dat dit niet gebeurt: `// In productie: stuur naam + e-mail ook naar API/Mailchimp/Resend.`).

**Waarom dit ertoe doet:** dit was al bekend uit de eerdere launch-plan-audit (zie `LAUNCH-PLAN.md`) en staat nog open. Een rode `*` naast een veld dat niet echt verplicht is, is een gebroken belofte op het moment van hoogste koopintentie. De leadmagneet-pagina is actief gelinkt (footer, blog, locatiepagina's) en verliest op dit moment elke aanmelding.

**Fix:** ongewijzigd advies uit het launch-plan — kies een leadcapture-backend (Formspree/Cloudflare Functions/anders), voeg echte `required`-validatie toe aan alle WhatsApp-formulieren, en maak de reactietijd-claim op de contactpagina consistent (kies één getal).

### [P2] Herhaalde eyebrow-labels en identieke kaart-grids op vrijwel elke pagina
**Locatie:** letterlijk elke gescande pagina — zie Anti-Patterns Verdict hierboven voor specifieke regel­nummers per bestand.

**Waarom dit ertoe doet:** individueel onschuldig, maar bij elkaar opgeteld is dit het meest zichtbare "met een sjabloon gemaakt"-signaal op de site — precies het tegenovergestelde van de "doordacht en precies"-persoonlijkheid die de rebrand nastreeft.

**Fix:** geen big-bang herontwerp nodig — per pagina 1-2 van de herhaalde eyebrow-instanties laten vervallen (de kop zelf is vaak al duidelijk genoeg), en minstens één van de drie identieke kaart-grids per pagina een ander visueel format geven (bijv. een tijdlijn i.p.v. weer een hairline-grid).

---

## Persona Red Flags

**Jordan (nieuwe bezoeker, oriënterend):** komt via een gedeelde WhatsApp-link op de homepage terecht — de social-preview-afbeelding toont nog "Full Creative Development Agency" met 4 gelijke diensten. Al vóór het klikken is de eerste indruk verkeerd. Eenmaal op de site, klikt Jordan door naar Portfolio op zoek naar bewijs en vindt twee lege case-pagina's en drie website-projecten voor eenmanszaken — niets dat aansluit bij "ik overweeg een softwarepartner voor mijn bedrijf."

**Alex (besluitvormer bij een groter bedrijf, PRODUCT.md's eigenlijke doelgroep):** leest de homepage, is overtuigd door de before/after-demo, klikt door naar Diensten voor meer detail — en leest daar "Vier disciplines. Eén partner." met AI-marketing en drone gelijk gewaardeerd naast maatwerk software. Het vertrouwen dat de homepage net opbouwde ("dit is een gefocuste technische partner") wordt binnen één klik ondermijnd.

**Sam (toetsenbord/screenreader-gebruiker):** opent het mobiele menu, wil het sluiten met Tab + Enter op de zichtbare sluitknop — die knop krijgt nooit focus (geverifieerd live). Escape werkt nog wel, maar wie dat niet weet, zit vast in een menu met een zichtbare maar onbruikbare uitgang.

---

## Minor Observations

- Contactpagina: "2 uur" en "24 uur" reactietijd staan beide op dezelfde pagina.
- `src/app/metadata-config.ts` is 115 regels dode code die de oude doelgroep (zzp'ers, startende ondernemers) beschrijft — geen actief risico, wel een landmine voor wie het per ongeluk weer aankoppelt.
- Locatiepagina's gebruiken 5 verschillende, ongerelateerde accentkleuren (goud/violet/oranje/rood/groen) — geen enkele reden waarom Aken rood is en Maastricht goud.
- `CaseStudyTemplate` (Auwt Aelse, Chefs Connect) en de drie bespoke case-pagina's (IJssalon, Stacy Kohnen, Creemers) zijn twee volledig verschillende ontwerpsystemen — een bezoeker die van de portfolio-index doorklikt, ervaart een visuele reset.
- `diensten/web/marketing/drone`-subpagina's missen de `prefers-reduced-motion`-fallback die de rest van de site wel heeft.

---

## Questions to Consider

- Is de bewuste keuze om vandaag alleen de homepage te herbranden een tussenstap naar een volledige site-rebrand, of was het bedoeld als eindpunt? De bevindingen hierboven wijzen sterk op "tussenstap die nu afgemaakt moet worden."
- Zijn `eerste-website` en `vervanging` nog een product dat je wilt aanbieden aan kleinere klanten naast de nieuwe grotere-bedrijven-focus, of zijn dit puur restanten die weg mogen?
- Hoeveel van de vijf portfolio-cases wil je actief tonen zodra de eerste echte maatwerk-software-case beschikbaar is — blijven IJssalon/Stacy Kohnen/Creemers als "webwerk"-bewijs staan, of verschuiven ze naar een aparte, lager gewogen sectie?

---

*Vastgelegd via 12 parallelle reviewers + 1 deterministische scan, 2026-07-14. Zie [`PROJECT-LOG.md`](./PROJECT-LOG.md) voor de volledige sessie-geschiedenis en [`../PRODUCT.md`](../PRODUCT.md) voor de positionering waartegen is getoetst.*
