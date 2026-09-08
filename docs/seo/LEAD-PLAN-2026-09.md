# Ons eigen plan — zoveel mogelijk aanvragen, zonder afhankelijk te zijn van linknetwerken

**Aanleiding:** na het afwegen van betaalde backlink-diensten (RankZly, BaakmanMedia, artapartmaastricht.nl — zie sectie 5 hieronder voor de vastgelegde reden om dat niet te doen), koos de eigenaar op 2026-09-08 expliciet voor het eigen, organische plan: *"laten we dan voor nu even ons eigen plan trekken en zorgen dat we daarmee zoveel mogelijk aanvragen krijgen."*

**Het onderscheid dat dit document maakt, en waarom dat ertoe doet:** `STRATEGY.md` optimaliseert voor *rankings*. Dit document optimaliseert expliciet voor **aanvragen** — en dat zijn niet dezelfde knop. Meer bezoekers die niet converteren levert niets op; een pagina die beter converteert kan meer aanvragen opleveren zonder dat de ranking verandert. Concreet betekent dit: dezelfde vijf pagina's die `STRATEGY.md` Fase 1 als SEO-quick-win aanwijst (`diensten/processen` + de 4 `maatwerk-software/*`-sectorpagina's), verdiepen met FAQ + prijsindicatie + social proof, raken **beide knoppen tegelijk** — het sluit zowel de SEO-concurrentiegaten (`STRATEGY.md` §4) als de conversiegaten. Dat is waarom dit de eerste actie is, niet iets nieuws bedenken.

---

## 1. Wat ik nu al kan doen (geen beslissing van jou nodig)

| # | Actie | Status |
|---|---|---|
| 1 | `/investering` toevoegen aan `sitemap.ts` | ✅ gedaan (2026-09-08) |
| 2 | `www→apex` en verweesde-portfolio-URL redirects | ✅ gedaan (2026-09-08, vorige sessie) |
| 3 | FAQ-blok bouwen (herbruikbare sectie, zelfde patroon als `CityPage.tsx` — inclusief `FAQPage` JSON-LD voor AEO/"People Also Ask") en toevoegen aan `diensten/processen` + de 4 `maatwerk-software/*`-pagina's | ✅ gedaan (2026-09-08) — 4 vragen per pagina, incl. prijsindicatie (zie sectie 2) |
| 4 | Ingebedde social proof (2 echte, geverifieerde reviews rechtstreeks op de pagina, i.p.v. alleen een link naar `/portfolio`) op diezelfde 5 pagina's | ✅ gedaan (2026-09-08) — Stacy Kohnen + Chefs Connect, bewust niet als sectorspecifiek gepresenteerd (geen bouw/zorg/installatie/logistiek-cases beschikbaar; zie toelichting in `SectorTemplate.tsx`) |
| 5 | "Maatwerk software limburg" verstevigen — uitzoeken welke pagina hiervoor rankt (positie 12,7, bijna pagina 1) en interne links/diepgang toevoegen | Nog te doen |
| 6 | H1 op alle `/locaties/*`-pagina's zei nog letterlijk "Website laten maken in {stad}" (`CityPage.tsx`), terwijl de `<title>` al "Maatwerk software & webdesign {stad}" zei — verklaarde direct het Eindhoven-patroon uit `GSC-FINDINGS-2026-09.md` §2 (massale vertoningen op brede "webdesign"-termen, 0 kliks) | ✅ gedaan (2026-09-08, tweede sessie) — H1 en eyebrow-label omgezet naar "Maatwerk software (voor) {stad}", geldt automatisch voor alle 9 locatiepagina's via het gedeelde `CityPage.tsx` |
| 7 | 3 nieuwe Belgisch-Limburgse stadspagina's (Tongeren, Maasmechelen, Sint-Truiden) — expliciet op "maatwerk software" i.p.v. "webdesign/website laten maken" als hoofdterm, na terugkoppeling dat die laatste twee al bewezen niet werken (zie `GSC-FINDINGS-2026-09.md` §2) | ✅ gedaan (2026-09-08, tweede sessie) — content per stad geverifieerd via WebSearch, geen fabricage; zie `docs/PROJECT-LOG.md` |

**Volgende stap:** item 5 (maatwerk software limburg verstevigen) — nu het enige nog openstaande item uit dit plan.

## 2. Prijsindicatie — beslissing genomen (2026-09-08)

Gekozen voor een subtiele prijsband, met de eigen woorden van de eigenaar als basis: *"kleine tools tot grote bedrijfssoftware... begint vanaf 4k... kan ook 15k of 35k zijn, hoe groot het bedrijf en de processen en de gebruikers zijn."* Dit is verwerkt als FAQ-antwoord op alle 5 pagina's (niet als prominent prijsanker) — bijv.: *"Een kleine, gerichte tool begint rond de €4.000; grotere bedrijfssoftware met meerdere gebruikers en koppelingen loopt vaak op tot €15.000–€35.000 of meer."* Consistent verwoord op elke pagina, geen vast bedrag beloofd.

## 3. Wat jij zelf moet doen — ongewijzigd t.o.v. `STRATEGY.md` §9, maar hier de kern

Dit blijft het echte plafond op "zoveel mogelijk aanvragen": geen enkele contentverdieping vervangt onderstaande.

1. **Google Business Profile** aanmaken/optimaliseren + actief reviews verzamelen (10-20) — voor lokaal zoekverkeer net zo zwaar als de site zelf.
2. **Sortlist.be-profiel** volledig invullen — reële SERP-ruimte in België, puur accountbeheer.
3. **Sector×stad-combinaties aanwijzen** waar je echt bewijs hebt (klant/project) — bepaalt letterlijk wat er in Fase 2 gebouwd mag worden.
4. **Testimonials met naam ophalen** bij bestaande klanten — sluit het social-proof-gat definitief, sterker dan wat ik zelf kan inbedden.

## 4. Wat er NIET in dit plan zit, met opzet

Geen kruisproductmatrix van steden×sectoren, geen "#1 in heel NL+BE" als kortetermijndoel, geen betaalde linknetwerken. Redenen: zie `STRATEGY.md` §1/§5 en sectie 5 hieronder. Dit plan wint door de bestaande, al deels rankende pagina's harder te laten werken — niet door breder uit te breien.

## 5. Backlinks — de beslissing die aan dit plan voorafging

Op 2026-09-08 zijn drie betaalde-link-aanbieders overwogen en afgewezen:
- **RankZly.com / SEOExpress.org / "High SEO" e.a.** — herkend aan identieke, kopieer-geplakte neptestimonials op wegwerpdomeinen (`apex-outrank-hq-organic-platform.store`, `highseo.shop`), allemaal linkend naar hetzelfde doel. Klassiek PBN-patroon.
- **`baakmanmedia.nl`** — verkoopt zelf expliciet toe een "eigen netwerk van 2000+ domeinen", links vanaf €1. Zelf-erkend linkschema, geen grijs gebied.
- **`artapartmaastricht.nl`** — verkapte linkfarm: honderden thematisch willekeurige links (taxidiensten, hondenvoer, casino's) zonder eigen content.

**Waarom afgewezen, ook al "gebruiken SEO-specialisten dit ook voor €1000/maand en het werkt":** het is geen "werkt niet"-verhaal maar een asymmetrische weddenschap. DR (Ahrefs-metric) is triviaal te manipuleren met dit soort netwerken; echte Google-rankings zijn een ander verhaal — Google's spamdetectie (Penguin/SpamBrain-lijn) is specifiek gebouwd om precies dit patroon (plotselinge, thematisch irrelevante linkbursts) te herkennen, met als mogelijke uitkomst een manual action. Voor een jonge, kleine site als `dynique.nl` — met een nog nauwelijks bestaand linkprofiel en net de eerste echte traction ("maatwerk software limburg" op positie 12,7) — is een gedetecteerde onnatuurlijke linkburst een véél groter aandeel van het totale profiel dan bij een gevestigd bureau, en dus makkelijker te detecteren én kostbaarder om te verliezen. Veel "€1000/maand SEO-specialisten" in deze markt zijn bovendien wederverkopers van precies dit soort netwerken met een marge erbovenop — duur en professioneel ogend is geen garantie voor wit-hat.

**Het alternatief staat al in dit document (sectie 3) en in `STRATEGY.md` §9** — echte, relevante, niet-koopbare links via Sortlist.be, Google Business Profile, en klant-geïnitieerde links vanuit hun eigen sites naar hun case study (bewezen waardevol: "stacy kohnen" en "chefs connect" leveren al écht zoekverkeer op, zie `GSC-FINDINGS-2026-09.md` §6).
