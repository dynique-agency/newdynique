# GSC-indexatie-wachtrij

Doorlopende lijst van nieuwe/gewijzigde pagina's om handmatig te laten indexeren via Search Console (**URL-inspectie → "Indexering aanvragen"** — GSC ondersteunt geen bulk-actie, dus dit blijft één-voor-één). Elke URL staat in een eigen blokje, zodat je 'm apart kunt kopiëren zonder de rest mee te selecteren. Vink af zodra je een URL hebt aangevraagd. Nieuwe pagina's worden hieronder toegevoegd zodra ze live staan, niet in een apart bestand.

## Batch 2026-09-11 — reinforcement van 7 bestaande pagina's (geen nieuwe URL's)

Uitvoering van de eerste 4 (§A) plus direct samenhangende (§B) voorstellen uit `CONTENT-UITBREIDING-2026-09-11.md` — allemaal wijzigingen aan bestaande, al geïndexeerde pagina's (title/FAQ/intro), geen nieuwe URL's. Wel de moeite van herindexatie, met name de 2 pagina's met een gewijzigde `<title>`:

- [ ] `/maatwerk-software/installatiebedrijf` (title gewijzigd + montage-terminologie)
  ```
  https://dynique.nl/maatwerk-software/installatiebedrijf
  ```
- [ ] `/maatwerk-software/logistiek` (title gewijzigd naar "Ritplanning software...")
  ```
  https://dynique.nl/maatwerk-software/logistiek
  ```
- [ ] `/diensten/drone` (FAQ uitgebreid met Venlo/Weert/Roermond)
  ```
  https://dynique.nl/diensten/drone
  ```
- [ ] `/locaties/maastricht` (intro + nieuwe FAQ over apps/webapplicaties)
  ```
  https://dynique.nl/locaties/maastricht
  ```
- [ ] `/locaties/heerlen` (intro + nieuwe FAQ over apps/SEO/marketing)
  ```
  https://dynique.nl/locaties/heerlen
  ```
- [ ] `/locaties/sittard` (nieuwe FAQ over SEO/marketing)
  ```
  https://dynique.nl/locaties/sittard
  ```
- [ ] `/diensten/marketing` (nieuwe FAQ over lokale SEO Heerlen/Sittard-Geleen)
  ```
  https://dynique.nl/diensten/marketing
  ```

## Batch 2026-09-09 (nog later, tweede deel) — 3 nieuwe stadspagina's (Breda/Vlissingen/Goes) + Eindhoven-herpositionering

Evidence-based selectie (zie `docs/seo/GSC-FINDINGS-2026-09.md` §11 en `STRATEGY.md` §2b) — geen blanket-dekking van Limburg/Brabant/Zeeland, alleen de 3 steden met een meetbaar GSC-signaal:

- [ ] `/locaties/breda`
  ```
  https://dynique.nl/locaties/breda
  ```
- [ ] `/locaties/vlissingen`
  ```
  https://dynique.nl/locaties/vlissingen
  ```
- [ ] `/locaties/goes`
  ```
  https://dynique.nl/locaties/goes
  ```

Inhoudelijk gewijzigd (reistijd-metadata en FAQ herschreven naar het digitale-intake/op-afstand-model — geen nieuwe URL, wel de moeite van herindexatie):

- [ ] `/locaties/eindhoven`
  ```
  https://dynique.nl/locaties/eindhoven
  ```
- [ ] `/locaties` (nieuwe "Verder in Nederland"-sectie + herziene FAQ)
  ```
  https://dynique.nl/locaties
  ```

## Batch 2026-09-09 (nog later) — belangrijkste: dubbele BreadcrumbList gefixt

`/diensten/processen/limburg` had tot nu toe een dubbele, botsende BreadcrumbList (structurele bug, zie `docs/PROJECT-LOG.md`) — dit is de pagina met het hoogste vertoningsaantal van de site (579), dus deze herindexatie is de belangrijkste van deze hele lijst:

- [ ] `/diensten/processen/limburg`
  ```
  https://dynique.nl/diensten/processen/limburg
  ```
- [ ] `/diensten/drone`
  ```
  https://dynique.nl/diensten/drone
  ```
- [ ] `/locaties` (dubbele breadcrumb ook hier gefixt)
  ```
  https://dynique.nl/locaties
  ```

## Batch 2026-09-09 (later) — inhoudelijk gewijzigde pagina's, geen nieuwe URL's

Geen nieuwe pagina's, maar deze kregen substantieel nieuwe content (FAQ, social proof, interne links) — de moeite waard om opnieuw te laten crawlen:

- [ ] `/diensten/web`
  ```
  https://dynique.nl/diensten/web
  ```
- [ ] `/diensten/marketing`
  ```
  https://dynique.nl/diensten/marketing
  ```
- [ ] `/diensten/drone`
  ```
  https://dynique.nl/diensten/drone
  ```
- [ ] `/eerste-website`
  ```
  https://dynique.nl/eerste-website
  ```
- [ ] `/vervanging`
  ```
  https://dynique.nl/vervanging
  ```
- [ ] Alle 10 locatiepagina's (nieuwe "wat kunnen we bouwen"-blok + gelinkte sector-chips) — zie de batch hieronder voor de losse URL's.

## Batch 2026-09-09 — 3 nieuwe sectorpagina's

- [ ] `/maatwerk-software/horeca`
  ```
  https://dynique.nl/maatwerk-software/horeca
  ```
- [ ] `/maatwerk-software/detailhandel`
  ```
  https://dynique.nl/maatwerk-software/detailhandel
  ```
- [ ] `/maatwerk-software/agrarisch`
  ```
  https://dynique.nl/maatwerk-software/agrarisch
  ```

Ook de moeite waard (kregen een nieuwe interne link vanuit `diensten/processen` en `/excel-vervangen-door-software`, en de bestaande 4 kregen een Twitter Card-fix):

- [ ] `/maatwerk-software/bouw`
  ```
  https://dynique.nl/maatwerk-software/bouw
  ```
- [ ] `/maatwerk-software/installatiebedrijf`
  ```
  https://dynique.nl/maatwerk-software/installatiebedrijf
  ```
- [ ] `/maatwerk-software/zorg`
  ```
  https://dynique.nl/maatwerk-software/zorg
  ```
- [ ] `/maatwerk-software/logistiek`
  ```
  https://dynique.nl/maatwerk-software/logistiek
  ```

## Batch 2026-09-08 (derde sessie) — /locaties hub-pagina + herindexatie na kritische fixpas

Nieuwe pagina:

- [ ] `/locaties` — nieuwe hub-pagina die alle 10 locaties verzamelt
  ```
  https://dynique.nl/locaties
  ```

**Alle 10 bestaande locatiepagina's zijn inhoudelijk gewijzigd** (LocalBusiness-naam gefixt, gedupliceerde highlight/FAQ-tekst herschreven, leadformulier + social proof toegevoegd, prijs-FAQ toegevoegd, breadcrumb naar 3 niveaus) — de moeite waard om opnieuw te laten crawlen:

- [ ] `/locaties/maastricht`
  ```
  https://dynique.nl/locaties/maastricht
  ```
- [ ] `/locaties/heerlen`
  ```
  https://dynique.nl/locaties/heerlen
  ```
- [ ] `/locaties/sittard`
  ```
  https://dynique.nl/locaties/sittard
  ```
- [ ] `/locaties/aken`
  ```
  https://dynique.nl/locaties/aken
  ```
- [ ] `/locaties/eindhoven`
  ```
  https://dynique.nl/locaties/eindhoven
  ```
- [ ] `/locaties/hasselt`
  ```
  https://dynique.nl/locaties/hasselt
  ```
- [ ] `/locaties/genk`
  ```
  https://dynique.nl/locaties/genk
  ```
- [ ] `/locaties/tongeren`
  ```
  https://dynique.nl/locaties/tongeren
  ```
- [ ] `/locaties/maasmechelen`
  ```
  https://dynique.nl/locaties/maasmechelen
  ```
- [ ] `/locaties/sint-truiden`
  ```
  https://dynique.nl/locaties/sint-truiden
  ```

Ook de moeite waard (kreeg voor het eerst interne links naar binnen toe):

- [ ] `/diensten/processen/limburg`
  ```
  https://dynique.nl/diensten/processen/limburg
  ```

## Batch 2026-09-08 (later) — 3 nieuwe Belgisch-Limburgse stadspagina's

- [ ] `/locaties/tongeren` — oudste stad van België, erfgoed/toerisme/horeca
  ```
  https://dynique.nl/locaties/tongeren
  ```
- [ ] `/locaties/maasmechelen` — Maasmechelen Village, dichtstbijzijnde BE-gemeente vanuit Vaals
  ```
  https://dynique.nl/locaties/maasmechelen
  ```
- [ ] `/locaties/sint-truiden` — Limburgse fruitstreek
  ```
  https://dynique.nl/locaties/sint-truiden
  ```

**Ook de moeite waard om opnieuw te laten crawlen** (H1 op alle bestaande locatiepagina's gewijzigd van "Website laten maken in {stad}" naar "Maatwerk software voor {stad}" — zie `docs/seo/STRATEGY.md` §7 checklist-item 6):

- [ ] `/locaties/maastricht`
  ```
  https://dynique.nl/locaties/maastricht
  ```
- [ ] `/locaties/heerlen`
  ```
  https://dynique.nl/locaties/heerlen
  ```
- [ ] `/locaties/sittard`
  ```
  https://dynique.nl/locaties/sittard
  ```
- [ ] `/locaties/aken`
  ```
  https://dynique.nl/locaties/aken
  ```
- [ ] `/locaties/eindhoven`
  ```
  https://dynique.nl/locaties/eindhoven
  ```
- [ ] `/locaties/hasselt`
  ```
  https://dynique.nl/locaties/hasselt
  ```
- [ ] `/locaties/genk`
  ```
  https://dynique.nl/locaties/genk
  ```

## Batch 2026-09-08 — pijnpuntpagina's, vergelijkingspagina's, Genk

- [x] `/excel-vervangen-door-software` — pijnpunt-pillar, hoogste prioriteit uit `STRATEGY.md` §8 Fase 1 — geïndexeerd (bevestigd door eigenaar, 2026-09-08)
  ```
  https://dynique.nl/excel-vervangen-door-software
  ```
- [x] `/maatwerk-software-vs-saas` — vergelijkingspagina — geïndexeerd (bevestigd door eigenaar, 2026-09-08)
  ```
  https://dynique.nl/maatwerk-software-vs-saas
  ```
- [x] `/wat-kost-maatwerk-software` — kostenuitleg, vult `/investering` aan — geïndexeerd (bevestigd door eigenaar, 2026-09-08)
  ```
  https://dynique.nl/wat-kost-maatwerk-software
  ```
- [x] `/low-code-vs-maatwerk-software` — vergelijkingspagina — geïndexeerd (bevestigd door eigenaar, 2026-09-08)
  ```
  https://dynique.nl/low-code-vs-maatwerk-software
  ```
- [x] `/locaties/genk` — nieuwe locatiepagina, België — geïndexeerd (bevestigd door eigenaar, 2026-09-08)
  ```
  https://dynique.nl/locaties/genk
  ```

**Ook de moeite waard om opnieuw te laten crawlen** (bestaande pagina's met gewijzigde metadata/content deze sessie — geen nieuwe URL, maar Google mag de nieuwe versie eerder zien):

- [ ] `/investering`
  ```
  https://dynique.nl/investering
  ```
- [x] `/diensten/processen`
  ```
  https://dynique.nl/diensten/processen
  ```
- [ ] `/locaties/heerlen`
  ```
  https://dynique.nl/locaties/heerlen
  ```
- [ ] `/locaties/sittard`
  ```
  https://dynique.nl/locaties/sittard
  ```
- [ ] `/locaties/eindhoven`
  ```
  https://dynique.nl/locaties/eindhoven
  ```
- [ ] `/locaties/maastricht`
  ```
  https://dynique.nl/locaties/maastricht
  ```

---

*Volgende batch wordt hierboven toegevoegd zodra er nieuwe pagina's bijkomen.*
