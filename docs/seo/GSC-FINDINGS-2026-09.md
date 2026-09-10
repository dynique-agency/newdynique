# Search Console-bevindingen — eerste echte data (periode 2026-06-17 t/m 2026-09-06)

**Bron:** export door de eigenaar aangeleverd op 2026-09-08 vanuit Google Search Console voor `dynique.nl`, zoektype "Web", periode "afgelopen 6 maanden". Ruwe bestanden staan in [`data/gsc-export-2026-09-08/`](./data/gsc-export-2026-09-08/) — elk cijfer hieronder is direct uit die bestanden te herleiden.

**Waarom dit belangrijk is:** `STRATEGY.md` (geschreven vlak vóór deze export) ging uit van "geen meetbasis" als het grootste losstaande gat. Dat gold voor analytics (GA4/GTM ontbreekt nog steeds — zie hieronder), maar **Search Console blijkt al actief te zijn en verzamelt al 3 maanden echte data.** Dat verandert een aantal conclusies van kwalitatief-geschat naar direct-gemeten. Deze bevindingen worden verwerkt in `STRATEGY.md`; dit document is de onderbouwing.

---

## 1. Het grote patroon: veel vertoningen, bijna geen kliks — en dat is niet overal hetzelfde probleem

Totaal over de periode: **43 kliks op 13.128 vertoningen** (device-tabel), gemiddelde positie rond de 50. Dat topline-cijfer verhult twee heel verschillende situaties die uit elkaar getrokken moeten worden:

- **Nederland: 12.034 vertoningen, gemiddelde positie 52,6.** Dit is bijna volledig te herleiden tot de stadspagina's die meedingen naar brede, oude-positionering-achtige zoektermen ("website laten maken eindhoven", "webdesign eindhoven", "seo bureau heerlen" — zie sectie 2). Positie 50+ betekent praktisch onzichtbaar (pagina 5+); vandaar 0% CTR op nagenoeg alle niet-merktermen.
- **België: 275 vertoningen, gemiddelde positie 8,17** — met 11 kliks en een CTR van 4%. Klein volume, maar wél zichtbaar. De queries-tabel bevat geen expliciete België-only rijen (Search Console splitst dit niet per land uit in deze export), dus de exacte zoektermen achter dit Belgische succes zijn niet met zekerheid te herleiden — vermoedelijk grotendeels merknaam- en klantnaam-zoekopdrachten (zie sectie 6), maar dat is een aanname, geen vastgestelde conclusie.

**Conclusie:** de site "doet het slecht" volgens de topline-cijfers, maar dat wordt bijna volledig veroorzaakt door één specifiek, al-verwacht probleem (brede webdesign-termen in oververzadigde NL-steden), niet door een breed, onverklaarbaar probleem. Dit bevestigt direct de kern van `STRATEGY.md` §1 en §2: brede termen zijn niet haalbaar, specifieke long-tail wél.

---

## 2. De grootste boosdoener, met naam: `/locaties/eindhoven`

Deze ene pagina is verantwoordelijk voor **7.794 van de 13.128 totale vertoningen (59%)** — bij een gemiddelde positie van **61,76** en **0 kliks**. De zoektermen die deze vertoningen genereren, zijn stuk voor stuk brede, generieke webdesign-termen, niet de "maatwerk software"-termen waar de huidige positionering op inzet:

| Zoekterm | Vertoningen | Positie |
|---|---|---|
| website laten maken eindhoven | 1.496 | 64,7 |
| webdesign eindhoven | 961 | 57,5 |
| website laten maken geldrop | 607 | 59,3 |
| webdesign bureau eindhoven | 301 | 31,5 |
| webbureau eindhoven | 268 | 48,4 |
| website bouwer eindhoven | 251 | 65,1 |
| *(en tientallen vergelijkbare varianten, allemaal positie 40-90)* | | |

De pagina zelf heeft al de nieuwe titel ("Maatwerk software & webdesign Eindhoven | Dynique" — [`src/app/locaties/eindhoven/page.tsx:5`](../../src/app/locaties/eindhoven/page.tsx)) en canonical staat correct. Het probleem is dus niet dat de pagina de oude positionering uitstraalt — het is dat Google de pagina matcht tegen een enorme hoeveelheid brede "webdesign [stad]"-zoekopdrachten (vermoedelijk mede doordat "webdesign" nog letterlijk in de title staat) in een markt die `STRATEGY.md` §2 en §4 al als "hoog verzadigd" bestempelde. Het resultaat: veel vertoningen, positie 50-90, dus feitelijk onzichtbaar — precies het patroon dat de strategie voorspelde, nu met harde cijfers bevestigd.

Dezelfde dynamiek, kleinschaliger, op de andere stadspagina's: `/locaties/heerlen` (1.923 vertoningen, positie 46,5, 0 kliks), `/locaties/sittard` (1.215 vertoningen, positie 36,9, 0 kliks), `/locaties/maastricht` (327 vertoningen, positie 47,1, 0 kliks).

**Wat dit concreet betekent voor de roadmap:** dit is geen argument om deze pagina's weg te halen (ze bestaan terecht, zie `STRATEGY.md` §3) — maar wél een concreet, gemeten signaal dat het meeslepen van brede "webdesign [stad]"-taal in de title/meta van deze pagina's de site in een oververzadigde markt duwt zonder kans op kliks, terwijl de eigen positionering (maatwerk software) elders wél een haalbare positie laat zien (zie sectie 3). Overweeg bij de eerstvolgende titel-iteratie van de stadspagina's het gewicht te verschuiven van "webdesign [stad]" naar "maatwerk software [stad]" — niet als losse actie nu, maar als datapunt voor wanneer deze pagina's herzien worden (`STRATEGY.md` §6, contentdiepte-eisen).

---

## 3. De belangrijkste positieve vondst: één term staat al bijna op pagina 1

**"maatwerk software limburg" — 288 vertoningen, positie 12,72, 0 kliks.**

Positie 12-13 is de grens van pagina 2 — praktisch de dichtstbijzijnde "bijna daar"-term in de hele dataset. Dit is precies de kernterm van de nieuwe positionering (niet "webdesign", niet een stadsnaam, maar "maatwerk software" + regio), en hij presteert een orde van grootte beter dan alle brede stad-termen hierboven. Dit is het sterkste directe bewijs dat de rebrand-positionering zelf traction heeft — het ontbreekt nu aan net dat laatste zetje (backlinks, contentdiepte, interne links) om van positie 12-13 naar de top 10 te komen.

**Aanbeveling:** dit is een concrete kandidaat om als eerste "quick win" te behandelen binnen Fase 1 van `STRATEGY.md` §8 — identificeer welke pagina momenteel voor deze term rankt (vermoedelijk de homepage of `/diensten/processen/limburg`, beide met reële klikken/vertoningen elders in de dataset) en verstevig die specifieke pagina (interne links, iets meer diepgang, evt. de term letterlijker terug laten komen), in plaats van energie te steken in een geheel nieuwe pagina voor een term die al bijna scoort.

---

## 4. Technisch: dubbele indexering van www en non-www

| Pagina | Kliks | Vertoningen | Positie |
|---|---|---|---|
| `https://dynique.nl/` | 27 | 172 | 3,48 |
| `https://www.dynique.nl/` | 6 | 252 | 9,29 |

Beide varianten van de homepage staan apart geïndexeerd en verdelen zichtbaarheid en autoriteit. De code zelf is hier niet de oorzaak — `metadataBase`, canonical en alle OG-tags in [`src/app/layout.tsx`](../../src/app/layout.tsx) wijzen consistent naar het kale `https://dynique.nl` — maar er is geen daadwerkelijke 301-redirect van `www.dynique.nl` naar `dynique.nl` gevonden (geen `_redirects`-bestand, geen `wrangler.toml` met redirect-regel). Een canonical-tag is een signaal, geen garantie; Google indexeert hier zichtbaar toch beide.

**Concrete, kleine technische fix — ✅ doorgevoerd op 2026-09-08:** `public/_redirects` toegevoegd met een 301 van `www.dynique.nl/*` naar `dynique.nl/:splat` (Cloudflare Pages ondersteunt dit Netlify-achtige formaat direct). Effect pas zichtbaar in een volgende Search Console-export, ná herindexering.

---

## 5. Verweesde portfolio-URL's die nog vertoningen trekken

Twee URL's in de "Toppagina's"-lijst bestaan niet meer in de huidige codebase (geen match in `src/app/portfolio/` of elders):

- `/portfolio/sa-personeel` — 18 vertoningen, 0 kliks (en de exacte query "sa personeel" staat apart in de queries-lijst: 9 vertoningen, **positie 5** — een goede positie voor een dode pagina)
- `/portfolio/house-of-chocolate` — 3 vertoningen, 0 kliks

Dit zijn vermoedelijk oudere case studies die bij een eerdere portfolio-herstructurering zijn verwijderd zonder redirect. Vooral `sa-personeel` is het vermelden waard: positie 5 betekent dat er reële naam-zoekopdrachten zijn (waarschijnlijk vanuit het netwerk van die klant) die nu op een 404 uitkomen.

**✅ Doorgevoerd op 2026-09-08:** beide slugs redirecten nu (301, via hetzelfde `public/_redirects`) naar `/portfolio`. Nog altijd een open, inhoudelijke vraag voor de eigenaar: als deze klantrelaties nog bestaan, is de case study zelf terugzetten met een eigen URL (i.p.v. alleen doorverwijzen) mogelijk waardevoller, gezien de aangetoonde traction van klantnaam-zoekopdrachten (zie sectie 6) — dat is een klantcontact-beslissing, geen technische.

---

## 6. Eigen merknaam en klantnamen — wat al écht werkt

- **"dynique" — 29 kliks, 132 vertoningen, positie 7,09.** Een positie van 7 voor de eigen merknaam is opvallend laag (normaal staat een bedrijf op #1 voor de eigen naam) — mogelijk concurreren hier andere vermeldingen (LinkedIn, KVK, review-sites, of een gelijknamige entiteit) om de eerste plekken. Dit is een constatering, geen verklaring — vastgesteld vanuit deze data alleen niet te herleiden welke resultaten er wél boven staan. De moeite waard om een keer handmatig te googlen op "dynique" en te zien wat er precies boven de eigen site staat.
- **Klantnaam-zoekopdrachten leveren echte, werkende bezoeken op:** "stacy kohnen" (3 kliks, 163 vertoningen, positie 9,13), "chefs connect" (1 klik, 37 vertoningen, positie 7,24), en de bijbehorende pagina's `/portfolio/stacy-kohnen` en `/portfolio/chefs-connect` staan zelf ook in de kliks-lijst. Dit bevestigt een niet vanzelfsprekende aanname uit `STRATEGY.md` §6: geïndividualiseerde case-study-pagina's trekken zelfstandig zoekverkeer via de naamsbekendheid van de klant zelf, los van "maatwerk software"-zoekverkeer. Een reëel, nu bewezen argument om **bij nieuwe projecten altijd een eigen case-study-URL te maken** (met klantnaam erin) in plaats van alleen een portfolio-tegel.

---

## 7. Wat dit niet oplost: het analytics-gat blijft staan

Deze export bevestigt dat **Search Console** werkt (hoe de verificatie precies is gedaan — DNS, HTML-bestand, GA-koppeling — is niet uit deze export af te leiden; de env-var-stub in `layout.tsx:98-102` blijft hoe dan ook inert en kan zonder risico blijven staan of alsnog ingevuld worden zodra bekend). Wat nog steeds volledig ontbreekt: **gedragsdata na de klik** — geen GA4, geen doelen/conversies, geen zicht op wat bezoekers doen die wél op de site komen (bijv. via de 27+6 homepage-kliks of de klantnaam-zoekopdrachten). GSC vertelt alleen wat er in de zoekresultaten gebeurt, niet wat er ná een bezoek gebeurt. Fase 0 van `STRATEGY.md` §8 (analytics installeren) blijft dus onveranderd relevant.

---

## 8. Samenvatting — wat verandert er in `STRATEGY.md`

1. **§1 "geen meetbasis"** moet genuanceerd worden: Search Console-data bestaat al en is nu de basis van dit document; het analytics-gat (gedrag ná de klik) blijft wel volledig openstaan.
2. **§2 marktkansen-tabel:** "maatwerk software limburg" (positie 12,7) is nu een concreet bewijsstuk vóór prioriteit 1/2 (NL-kernterm en regio), niet langer alleen een kwalitatieve aanname.
3. **§7 technische checklist:** twee nieuwe, kleine, concrete items — www→non-www 301-redirect, en 301's voor de twee verweesde portfolio-URL's.
4. **§8 roadmap Fase 1:** "maatwerk software limburg" verstevigen is een concrete, meetbare eerste actie naast de al genoemde FAQ/prijs/social-proof-verdieping.
5. **Nieuw datapunt voor toekomstige titel-iteraties van stadspagina's:** overweeg het gewicht van "webdesign [stad]" naar "maatwerk software [stad]" te verschuiven, op basis van het Eindhoven-patroon in sectie 2 — niet nu doorvoeren, wel meenemen bij de volgende contentronde.

Deze wijzigingen worden doorgevoerd in `STRATEGY.md`; dit bestand blijft staan als de onderbouwing met de ruwe cijfers erachter.

---

## 9. Update 2026-09-09 — herontdekt bij het opnieuw doorzoeken van dezelfde export: "app laten maken" staat al bijna op pagina 1

Op verzoek om bestaande, niet-gecoverde zoektermen te vinden is dezelfde `Zoekopdrachten.csv` opnieuw doorzocht (niet-merkgebonden termen, ≥20 vertoningen, positie <30) — met een concreet, eerder gemist resultaat:

| Zoekterm | Vertoningen | Positie |
|---|---|---|
| **mobile app development** | 137 | **7,86** — praktisch pagina 1 |
| **app laten maken limburg** | 184 | 20,97 — pagina 2 |
| maatwerk software limburg | 288 | 12,72 *(al bekend, sectie 3)* |
| webdesign bureau heerlen | 119 | 21,16 |
| seo bureau sittard-geleen | 101 | 25,59 |
| seo sittard-geleen | 89 | 25,76 |

**Waarom dit de moeite waard is:** "mobile app development" staat op positie 7,86 — beter dan "maatwerk software limburg", en met een substantieel volume (137 vertoningen) — terwijl er nergens op de site een pagina specifiek over app-ontwikkeling bestaat. De vermoedelijke bron is `/diensten/web` (enige pagina die "web app" noemt, `title: "Website & Web App laten maken"`), maar die pagina had tot nu toe geen FAQ, geen ingebedde social proof en geen prijsindicatie — exact het concurrentiegat dat elders al is gedicht, hier nog niet.

**Belangrijke eerlijkheidskanttekening:** Dynique bouwt **web apps** (browser-based, Next.js/React — zie de techstack op `/diensten/web`), geen native iOS/Android-apps. De Engelse term "mobile app development" matcht hier vermoedelijk semantisch/los, niet omdat de pagina native app-ontwikkeling claimt. Bij het verstevigen van deze pagina is dit expliciet zo gehouden: geen native-app-claim toegevoegd, wel eerlijk uitgelegd waarom een web app voor de meeste gevallen (klantportalen, boekingssystemen, interne tools) een goed alternatief is — zie de nieuwe FAQ op die pagina.

**Uitgevoerd (2026-09-09):** `/diensten/web` kreeg dezelfde behandeling als eerder `diensten/processen` en de sectorpagina's — FAQ (incl. prijs en de "bouwen jullie ook apps"-vraag), ingebedde social proof, en "app laten maken"/"web app laten maken" explicieter in title/intro/keywords. `areaServed` uitgebreid met België (stond alleen op Limburg/Nederland, inconsistent met de rest van de site).

**Nog niet gedaan, mogelijke vervolgstap:** een aparte, diepere pijnpunt-pillar specifiek over app-ontwikkeling (zelfde categorie als `/excel-vervangen-door-software`) zou hier gerechtvaardigd kunnen zijn gezien het volume — maar per de "verstevig eerst wat al werkt"-discipline (zie `STRATEGY.md` §8, de les over de Limburg-pagina) is nu bewust eerst de bestaande, al goed rankende pagina versterkt in plaats van meteen een nieuwe te bouwen. Pas heroverwegen ná een nieuwe GSC-meting.

---

## 10. Update 2026-09-09 (later) — nog een volledige herscan, op verzoek "zoek meer zoals deze"

Dezelfde `Zoekopdrachten.csv`, nu volledig doorgesorteerd op positie (niet alleen gefilterd op ≥20 vertoningen) om niets te missen. Resultaat, met wat al bekend was eruit gefilterd:

| Zoekterm | Vertoningen | Positie | Duiding |
|---|---|---|---|
| web development | 19 | **9** | Engelse variant, klein volume maar sterke positie — zelfde pagina (`/diensten/web`) als "mobile app development" |
| software agency limburg | 16 | 13,1 | Rijdt vermoedelijk mee op dezelfde pagina als "maatwerk software limburg" (`/diensten/processen/limburg`) — geen aparte actie nodig |
| transport maatwerk software | 13 | 14,6 | Exacte-frase-match met de titel van `/maatwerk-software/logistiek` ("Maatwerk software voor logistiek & transport") |
| app development | 14 | 18,2 | Bevestigt de app-kans uit sectie 9 verder |
| maatwerk software voor logistiek | 23 | 23,1 | Zelfde pagina als hierboven |
| maatwerk software voor zorg | 22 | 22,9 | Exacte-frase-match met de titel van `/maatwerk-software/zorg` |
| software bedrijven limburg | 13 | 26,3 | Zelfde cluster als "software agency limburg" |
| start-up branding eindhoven | 24 | 20,5 | Matcht de bestaande "Tech & Startups"-highlight op de Eindhoven-pagina, maar te weinig volume voor een aparte actie |
| reclamebureau geleen | 23 | 22,3 | Marketing-gerelateerd (Dynique Digital), Geleen-specifiek — geen aparte pagina waard, zou de stad×dienst-matrix heropenen |

**De belangrijkste, direct bruikbare vondst:** "maatwerk software voor de zorg" en "maatwerk software voor logistiek/transport" zijn **letterlijke frase-matches met titels die al bestaan** (`/maatwerk-software/zorg`, `/maatwerk-software/logistiek`) — de content is er, de relevantie klopt, maar de pagina's stonden op positie 15-23 in plaats van pagina 1. Zelfde patroon als de Limburg-pagina eerder: goede content, te weinig interne links.

**Concreet gefixt:** de "industries"-chips op alle 10 locatiepagina's (`CityPage.tsx`) waren platte tekst, terwijl 7 van de gebruikte labels (Bouw, Installatie, Zorg, Logistiek, Horeca, Retail, Landbouw) exact overeenkomen met een bestaande sectorpagina. Die chips zijn nu links geworden — een `SECTOR_LINKS`-mapping in `CityPage.tsx` koppelt elk label aan zijn sectorpagina waar dat bestaat. Resultaat: **7 nieuwe interne links naar Bouw, 8 naar Zorg, 7 naar Horeca, 7 naar Retail/Detailhandel, 5 naar Logistiek, 1 naar Installatiebedrijf, 1 naar Agrarisch** — in één keer, via het gedeelde component. Duitse/Engelse labels (op de Aken-pagina) zijn bewust niet gelinkt, want de sectorpagina's zijn Nederlandstalig.

**Ook gefixt:** "web development" en "app development" toegevoegd aan de `keywords` van `/diensten/web/layout.tsx`.

---

## 11. Update 2026-09-09 (nog later) — evidence-check op "bouw landingspagina's voor heel Limburg, Brabant, Zeeland"

**Aanleiding:** verzoek van de eigenaar om kwalitatieve landingspagina's te bouwen "voor in heel Limburg, Brabant, Zeeland etc., allemaal steden, regio's, vang al het zoekvolume op ook waar de concurrentie nog niet zit." Voordat dit werd uitgevoerd, eerst gecheckt of `Zoekopdrachten.csv` en `Paginas.csv` dit daadwerkelijk onderbouwen — een blanket-aanpak zonder die check zou precies het scaled-content-risico uit `STRATEGY.md` §5 herhalen, nu op grotere schaal.

**Wat de data laat zien:**

| Stad/regio | Vertoningen | Positie | Duiding |
|---|---|---|---|
| Eindhoven (bestaande pagina) | 6.555 (som van ~40 queries) | 40–90 | Vrijwel uitsluitend brede "webdesign/website laten maken eindhoven"-termen — een oververzadigde markt met gevestigde lokale bureaus. **0 clicks** op de hele pagina (7.794 vertoningen, positie 61,76) — dit is het patroon dat een blanket-aanpak zou herhalen, niet oplossen. |
| Breda | 35 | 59,2 | Alleen op de nauwere term "maatwerk software breda" — geen enkele brede "webdesign/website"-query, in tegenstelling tot Eindhoven |
| Vlissingen | 11 | 39,6 | "maatwerk software vlissingen" — kleine, maar reële en relatief goed geplaatste vraag |
| Goes | 8 | 37,25 | "maatwerk software goes" — zelfde patroon |
| Tilburg, 's-Hertogenbosch, Middelburg, Terneuzen, Roosendaal, Helmond, Oss | 0 | — | Geen enkele query in de export, voor geen enkele variant. "Brabant" en "Zeeland" als kale provincienaam: ook 0. |
| Kerkrade | 16 | 46,3 | Enige NL-Limburgse stad buiten de bestaande 10 met een meetbaar signaal, maar zwakker dan Breda/Vlissingen/Goes |
| Geleen | ~10 queries, 90–100 vertoningen elk | **15,6–37,98** | Sterk signaal, maar valt al onder de bestaande `/locaties/sittard`-pagina (title/intro noemen Geleen al expliciet) — geen nieuwe pagina nodig, al gedekt |

**Conclusie, en wat dat betekent voor de scope:** een blanket "alle steden in Limburg/Brabant/Zeeland" is met deze data niet te onderbouwen — voor het overgrote deel van de mogelijke steden bestaat schlicht geen zoekvraag om op te bouwen, en het enige bestaande precedent op die afstand (Eindhoven) laat 0 clicks zien ondanks 7.794 vertoningen. **Wel gebouwd, op basis van echt signaal:** `/locaties/breda`, `/locaties/vlissingen`, `/locaties/goes` — de enige drie steden buiten de bestaande 10 met een meetbare, reële zoekvraag. Zie `STRATEGY.md` §2b voor de volledige afweging en de repositionering (digitale intake / op-afstand-model) die deze steden en Eindhoven meekregen.

**Bewust niet opgepakt:** "start-up branding eindhoven" en "reclamebureau geleen" — te weinig volume, en een aparte pagina zou opnieuw de stad×dienst-matrix openen die steeds is vermeden.

---

## 12. Update 2026-09-10 — nieuwe export gecheckt: te vroeg voor een echte meting, en dat klopt ook

**Bron:** tweede export door de eigenaar aangeleverd op 2026-09-10, ruwe bestanden in [`data/gsc-export-2026-09-10/`](./data/gsc-export-2026-09-10/). Filter dit keer "Afgelopen 3 maanden" i.p.v. "Afgelopen 6 maanden" bij de eerste export — dat klinkt als een groter verschil dan het is: `Diagram.csv` start in **beide** exports op exact dezelfde datum (2026-06-17), dus het werkelijke databereik wordt niet door die instelling bepaald maar door wanneer Search Console voor `dynique.nl` is gaan meten. Met andere woorden: dit is in de praktijk hetzelfde rollende venster, nu simpelweg 1 dag verder (laatste datapunt 2026-09-06 → 2026-09-07).

**Volledige regel-voor-regel diff tussen beide exports gedraaid** (`Zoekopdrachten.csv`, `Paginas.csv`, `Landen.csv`) — bevindingen:

- **Geen enkele nieuwe zoekterm.** Elke rij in de diff is een term die al in de vorige export stond, nu met een paar vertoningen meer of minder (ruis van één extra/verschoven dag in een 90-dagen-venster). Geen "Breda"/"Vlissingen"/"Goes"/"Genk"/"Tongeren"/"Maasmechelen"-term komt nieuw voor.
- **Geen van de nieuwe locatiepagina's staat in `Paginas.csv`** (Top-pagina's, ~29 rijen) — logisch: die pagina's zijn <24 uur voor deze export live gegaan. Zoekmachine-effecten van nieuwe/gewijzigde pagina's zijn typisch pas na dagen tot weken zichtbaar in Search Console, nooit binnen uren.
- **Eindhoven blijft het bekende patroon volgen, nu met meer volume:** 7.794 → 8.114 vertoningen, positie nagenoeg gelijk (61,76 → 61,71), **nog steeds 0 clicks.** Bevestigt sectie 11 eerder dan dat het iets nieuws zegt.
- **"maatwerk software limburg" stabiel:** 288 → 291 vertoningen, positie 12,72 → 12,71 — binnen ruis, geen trend zichtbaar op 1 dag.
- **Homepage licht positief, binnen ruis:** CTR 15,7% → 16,38%, positie 3,48 → 3,45. Te klein en te vroeg om als signaal te lezen.
- **Nederland/België-totalen nagenoeg ongewijzigd:** NL 29→30 clicks / 12.034→12.483 vertoningen / positie 52,6→52,65; België 11→12 clicks / 275→278 vertoningen / positie 8,17→8,12.

**Conclusie: dit bevestigt vooral dat er niets kapot is gegaan, niet dat er al iets gewerkt heeft.** Dat is een goed, geen slecht resultaat — precies zoals verwacht bij een venster van 1 dag na livegang. Geen wijziging aan `STRATEGY.md`'s inhoudelijke conclusies nodig; wél het al langer openstaande advies bevestigd: **een echte meting (heeft Breda/Vlissingen/Goes vertoningen? is Eindhovens 0-click-patroon doorbroken door de eerlijkere op-afstand-boodschaging?) is pas zinvol over 2-4 weken**, niet nu. Deze export is als provenance gearchiveerd, geen actie ondernomen op basis van "nieuwe" bevindingen — er zijn er geen.
