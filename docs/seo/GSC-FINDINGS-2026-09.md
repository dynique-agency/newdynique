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
