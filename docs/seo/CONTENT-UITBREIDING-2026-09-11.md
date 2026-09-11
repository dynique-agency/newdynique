# Contentuitbreiding — strenge analyse en 30 concrete voorstellen (2026-09-11)

**Vraag van de eigenaar:** "laten we verder bouwen aan kwalitatieve landingspagina's en zoekvolume dekken waar het nu nog niet opgevangen wordt door de grote spelers. maak een strenge analyse en kom met 30 concrete kwalitatieve voorstellen."

**Methode:** volledige herscan van `Zoekopdrachten.csv` (257 queries) gesorteerd op positie i.p.v. alleen volume, gecombineerd met concurrentie-onderzoek (WebSearch) voor elke kansrijke cluster, en directe code-inspectie (`grep`) om te checken of een gevonden kans al wél/niet in bestaande content zit. **"Strenge analyse" betekent hier ook: expliciet nee zeggen waar de data of de concurrentie dat afdwingt** — dit document bevat daarom niet alleen kansen, maar ook afgewezen kandidaten met reden (zie §C).

---

## Belangrijkste inzicht: twee clusters zagen er goed uit, één bleek bij concurrentiecheck een valkuil

Het "seo bureau/marketingbureau Heerlen"-cluster (325+186+226+129+128+63+57+29+25+22 ≈ **1.190 vertoningen**) leek eerst de grootste onaangeboorde kans van de hele dataset. **Concurrentiecheck (WebSearch) legt bloot waarom dat niet zo is:** minstens 8 gespecialiseerde SEO-bureaus (ROXTAR, SchoutenSEO, The Marketing Boutique, Triton Marketing, SEO Capital e.a.) vechten hier al om exact deze term, een aantal met "#1 SEO bureau"-claims. Dit is niet Eindhoven 2.0 qua *oorzaak* (geen brede, verzadigde webdesign-markt) maar wél qua *uitkomst*: een niche-markt gedomineerd door specialisten waar Dynique als generalist realistisch niet tegenop concurreert op de hoofdterm. Zelfde patroon, bevestigd, bij Sittard-Geleen SEO (105+101+93+69+7+6 ≈ 381 vertoningen — minstens 7 specialisten gevonden, waaronder bureaus die zich alleen op deze ene stad richten).

**Wat dit betekent voor de voorstellen hieronder:** geen nieuwe "SEO Heerlen"-pagina bouwen (zou hetzelfde lot krijgen als Eindhoven), wel de bestaande, al aanwezige marketing-dienst zichtbaarder maken op de bestaande locatiepagina's — bescheiden, geen kopstuk-ambitie.

**Tegenover die twee afgewezen clusters staat een derde die de concurrentiecheck wél doorstaat:** "werkbon/planning software installatiebedrijf" (zie §2 hieronder) wordt vooral gedomineerd door SaaS-productbedrijven (Gripp, Cobry, Fieldly, Robaws) en maar één maatwerk-concurrent (Appfront) — precies het soort veld waar Dynique's "maatwerk i.p.v. SaaS"-positionering een reëel onderscheid maakt.

---

## A. Nieuwe pagina's/secties — met bewijs (4 voorstellen)

1. **Geen nieuwe pagina, wél een nieuwe sectie:** voeg "Venlo, Weert en Roermond" expliciet toe aan `/diensten/drone` (`src/app/diensten/drone/page.tsx`). Bewijs: "drone video venlo" (6), "sfeerimpressie met drone venlo" (4), "dronevideo voor evenementen venlo" (7) = 17 vertoningen, positie 42-78, **en de pagina noemt momenteel geen enkele NL-Limburgse stad bij naam** (geverifieerd: 0 treffers voor Venlo/Weert/Roermond in de huidige tekst). Geen aparte "drone Venlo"-pagina — dat zou de stad×dienst-matrix heropenen voor een dienst die daar te licht voor is; wel de bestaande pagina een stuk specifieker maken.
2. **Nieuwe FAQ + title-aanpassing op `/maatwerk-software/installatiebedrijf`**, gericht op "werkbon"/"planning monteurs"/"montage". Bewijs: gecombineerd cluster van "planning installatiebedrijf" (9), "planning software installatiebedrijf" (21), "werkbon software installatiebedrijf" (11), "software installateur" (22), "planning monteurs installatie" (6), "software montagebedrijven" (9), "installatietechniek app" (8) = **86 vertoningen**, positie 33-68. Concurrentie: vooral SaaS-platforms (Robaws, Fieldly, Gripp), niet maatwerk-bureaus — reëel te winnen veld voor de "maatwerk i.p.v. SaaS-abonnement"-hoek. De pagina bevat deze termen al inhoudelijk (5 vermeldingen), maar **niet in de title/meta** — dat is het concrete gat.
3. **Titel/meta-aanpassing op `/maatwerk-software/logistiek`** om "ritplanning" expliciet op te nemen. Bewijs: "ritplanning software" (11, positie 29.27 — al bijna pagina 2), "ritplanning" (1), "planning software logistiek" (26), "logistieke software op maat" (1) = 39 vertoningen. Content bevat "ritplanning" al 4×, title niet.
4. **"App laten maken" expliciet toevoegen aan `/locaties/maastricht` én `/locaties/heerlen`.** Bewijs: "app laten maken maastricht" (31, positie 76,03), "app ontwikkelen heerlen" (16, positie 62,88) — **beide pagina's noemen "app"/"applicatie" op dit moment nul keer** (geverifieerd via grep). Dit is de makkelijkste, snelste win van dit hele document: geen nieuwe pagina, gewoon een bestaand gat dichten met content die al past bij wat Dynique doet (web + app development is al een kernpijler).

## B. Reinforcement van bestaande pagina's — concreet, per pagina (14 voorstellen)

5. `/maatwerk-software/installatiebedrijf` — title wijzigen van "Maatwerk software voor installatiebedrijven" naar iets met "planning & werkbonnen" erin (zie #2).
6. `/maatwerk-software/logistiek` — title wijzigen om "ritplanning" op te nemen (zie #3).
7. `/locaties/heerlen` — een bescheiden zin toevoegen over marketing/SEO-dienstverlening (niet als hoofdpositionering, maar als vermelding — "we bieden ook AI marketing en SEO" — om iets van het 1.190-vertoningen-cluster mee te pakken zonder te concurreren op de hoofdterm). Link naar `/diensten/marketing`.
8. `/locaties/sittard` — zelfde bescheiden SEO/marketing-vermelding + link, om iets van het 381-vertoningen-cluster te pakken.
9. `/diensten/marketing` — FAQ-item toevoegen: "Bieden jullie ook lokale SEO voor Heerlen/Sittard-Geleen?" — eerlijk antwoord, geen overclaim op "#1 worden", wel een geloofwaardig "we doen dit ook, gewoon niet als enige specialisatie."
10. `/locaties/maastricht` — "app"/"webapplicatie" toevoegen aan intro en industries (zie #4).
11. `/locaties/heerlen` — "app"/"webapplicatie" toevoegen aan intro en industries (zie #4).
12. `/diensten/web` — FAQ-item of alinea over app-ontwikkeling per regio, zodat de al sterke "mobile app development" (142 vertoningen, positie 7,72!) en "app development" (14, positie 18,2) posities niet verwateren maar juist een lokale port krijgen.
13. `/maatwerk-software/bouw` — "calculatie software" als term toevoegen (bewijs: "calculatie software laten maken", 5 vertoningen, positie 81,8 — zwak, maar calculatie is een herkenbare bouw-pijnterm die nu nergens op de pagina staat, makkelijk mee te nemen bij de eerstvolgende contentronde, niet als losse actie).
14. `/maatwerk-software/installatiebedrijf` — "montage"/"montagebedrijven" als expliciete term opnemen naast installatiebedrijven (bewijs: "software montagebedrijven", 9 vertoningen) — aanpalende doelgroep, geen aparte pagina waard maar wel het vermelden waard.
15. `/diensten/processen` (de hub) — check of "bedrijfsapplicatie"/"maatwerk applicatie" als synoniemen in de copy staan; zo niet, toevoegen als natuurlijke variatie (bewijs: "maatwerk bedrijfsapplicatie" 10, "bedrijfsapplicatie laten maken" 6, "maatwerksoftware mkb" 14 — laag volume individueel, maar het zijn wel de generieke termen waarmee de hele site al concurreert, dus geen nieuwe actie, wel een controlepunt).
16. `/locaties/sint-truiden` — "webdesign bedrijf maastricht" / "website bedrijf maastricht"-achtige generieke "webdesign bedrijf [stad]"-frasering checken op de bestaande BE-pagina's — niet gevonden als los issue, maar wel de moeite van het meenemen bij een volgende contentronde (geen actie nu, wel een aantekening).
17. `/diensten/processen/limburg` — nu de best presterende pagina van de site (582 vertoningen, positie 16,35) — **geen inhoudelijke wijziging voorstellen, wél expliciet bewaken dat er geen concurrerende nieuwe "Zuid-Limburg"-pagina naast komt** (zie afwijzing #C3) die deze positie zou kunnen kannibaliseren.
18. `/locaties/aken` — Duitstalige variant checken op vergelijkbare "app"/"Webapplikation"-termen — geen data hiervoor beschikbaar (Duitse queries zitten niet apart in deze export), dus **geen actie, wel een aantekening voor als er ooit Duitse GSC-data beschikbaar komt.**

## C. Bewust afgewezen — met reden (dit ís het strenge deel) (5 voorstellen/besluiten)

19. **Geen nieuwe "SEO/marketingbureau Heerlen"-pagina.** Reden: zie het hoofdinzicht bovenaan — 8+ gespecialiseerde concurrenten, Dynique is hier generalist. Bewust een bescheiden vermelding (#7) i.p.v. een kopstuk-pagina.
20. **Geen nieuwe "SEO Sittard-Geleen"-pagina.** Zelfde reden, zie #8.
21. **Geen nieuwe stadspagina voor Venlo.** Bewijs is te dun (17 vertoningen, uitsluitend drone-gerelateerd) en zou de sector×stad-matrix heropenen voor een dienst (drone) die dat niet rechtvaardigt. Wel de bestaande drone-pagina verrijkt (#1).
22. **Geen nieuwe "Zuid-Limburg"-pillarpagina naast `/diensten/processen/limburg`.** Er is precies 1 vertoning voor "website laten maken zuid limburg" — geen bewijs, en het zou de best presterende pagina van de site risico op zelfkannibalisatie geven.
23. **Geen nieuwe pagina voor "technische dienst"-terminologie** ("software technische dienst", "voor technische dienst", "technische dienstverlening" — samen 3 vertoningen, alle op positie 63-74). Te dun om nu op te bouwen; wel het cluster hier vastgelegd zodat een toekomstige export kan laten zien of dit groeit.

## D. Meet- en vervolgacties (7 voorstellen)

24. **Duitstalige GSC-mining inplannen** zodra data beschikbaar is (zie #18) — momenteel een blinde vlek voor Aken.
25. **Belgische zoekopdrachten apart her-minen** — dit document heeft zich vrijwel volledig op de NL-data gericht omdat daar de meeste nieuwe signalen zaten; een aparte BE-gerichte pas (Genk/Tongeren/Maasmechelen/Sint-Truiden-termen) is deze ronde bewust niet herhaald om dubbel werk te voorkomen, maar hoort bij de volgende meetronde.
26. **Na het doorvoeren van #1 t/m #16: 3-4 weken wachten voordat opnieuw gemeten wordt** — zelfde discipline als steeds in dit document: geen conclusies trekken binnen dagen na een wijziging.
27. **"Mobile app development" (142 vertoningen, positie 7,72) en "web development" (19, positie 9) zijn de sterkste Engelstalige signalen van de hele site** — controleren of `/diensten/web` voldoende Engelstalige long-tail-varianten dekt (bijv. "custom web application development") zonder een aparte Engelstalige pagina te bouwen (geen bewijs dat dat nodig is, wél de moeite van het checken).
28. **"Chefs Connect"/"Stacy Kohnen"-brandtermen (38 en 163 vertoningen, positie 7-9) bevestigen dat portfolio-cases zelf al goed vindbaar zijn** — geen actie nodig, wel een signaal dat named case studies een onderbenutte contentvorm kunnen zijn voor toekomstige klanten (zie #29).
29. **Overwegen om 1-2 vergelijkbare cases als "Chefs Connect" een eigen blogpost te geven** (niet alleen een portfolio-pagina) zodra er een nieuw, goed gedocumenteerd project is — geen actie nu, want er is geen nieuw project om over te schrijven; puur een aantekening voor de volgende keer dat die situatie zich voordoet.
30. **Dit document zelf als checklist gebruiken bij de volgende contentronde** — expliciet bijhouden welke van de 30 punten zijn opgepakt, in plaats van opnieuw vanaf nul te beginnen (zie `docs/seo/README.md`-conventie).

---

## Samenvatting voor besluitvorming

- **4 concrete content-toevoegingen** (§A) met het sterkste bewijs — dit zijn de eerste kandidaten om nu te bouwen.
- **14 kleinere reinforcements** (§B) — meeste zijn kleine, lage-risico wijzigingen (title/meta/een alinea), te combineren in één contentronde.
- **5 bewuste afwijzingen** (§C) — het "strenge" deel: waar de data ogenschijnlijk kansrijk leek maar concurrentieonderzoek iets anders liet zien.
- **7 meet-/vervolgacties** (§D) — geen directe bouwacties, wel nodig om dit proces scherp te houden.

**Geen van deze 30 punten vereist een volledig nieuwe stads- of sectorpagina** — dat is een bewuste uitkomst van de analyse, niet een keuze vooraf: de data ondersteunt dit keer vooral verdieping van wat er al staat, niet uitbreiding in aantal pagina's.

---

## Update 2026-09-11 (later) — resterende punten afgerond, 2 extra bevindingen

**Uitgevoerd:**
- **§12/§27 samengevoegd:** `/diensten/web` kreeg de Engelse term "custom web application development" verwerkt in de service-omschrijving + een nieuwe FAQ die expliciet linkt naar het feit dat we door heel Nederland werken (met Maastricht/Heerlen als concrete voorbeelden) — zodat de sterke "mobile app development"/"app development"-posities (142 resp. 14 vertoningen, positie 7,7 en 18,2) een natuurlijke doorverwijzing krijgen i.p.v. op zichzelf te blijven staan.
- **§15:** `/diensten/processen` bevatte "bedrijfsapplicatie"/"maatwerk applicatie" nog nul keer (geverifieerd) — nu natuurlijk verwerkt in de hero-paragraaf.
- **§13 (bouw/calculatie):** bevestigd dat dit al voldoende gedekt is (pains-array bevat al een expliciete "CALCULATIE"-regel) — geen wijziging nodig, punt gesloten.

**§25 (Belgische her-mining) uitgevoerd — onverwachte bevinding:** in de volledige `Zoekopdrachten.csv` (257 rijen) komt **geen enkele** Belgische plaatsnaam voor (Genk, Hasselt, Tongeren, Maasmechelen, Sint-Truiden, Antwerpen, Brussel, Leuven, Luik: 0 treffers) — terwijl `Landen.csv` België op 12 clicks / 278 vertoningen / **positie 8,12** laat zien, verreweg de beste positie van alle landen op de site (NL: positie 52,65). **Conclusie:** het Belgische verkeer komt kennelijk vrijwel volledig via generieke termen binnen (niet via stad-specifieke zoekopdrachten), en converteert per vertoning veel efficiënter dan Nederlands verkeer. Dit is geen actiepunt maar wel een relevant gegeven: de 5 bestaande BE-stadspagina's (Genk/Hasselt/Tongeren/Maasmechelen/Sint-Truiden) laten nog geen stad-specifiek zoeksignaal zien in deze export — te vroeg (recent gebouwd) of Belgisch zoekgedrag is hier eenvoudigweg minder stad-specifiek dan Nederlands zoekgedrag. Bewaren voor de volgende meetronde.

**Nog open, bewust niet opgepakt:** §16, §17, §18, §24, §26, §28, §29, §30 — stuk voor stuk expliciet "geen actie nu" of proces-/bewaakpunten, geen losse bouwacties (zie originele toelichting per punt hierboven).

**Sectorverkenning (apart traject, zelfde dag):** 6 kandidaat-sectoren (schoonmaakbedrijven, hoveniers, autobedrijven, kinderopvang, fysiotherapie, makelaars) onderzocht met dezelfde concurrentietoets als bij installatiebedrijf/Heerlen-SEO — **alle zes AFRADEN.** Vier hebben wettelijk/branchebreed gestandaardiseerde kernprocessen (NEN2075, RDW/APK, GGD/LRK/BKR, VECOZO/GDS) die het maatwerk-argument ondermijnen; in 3 van de 6 bleek concurrent **Appfront** al een vrijwel identieke maatwerk-propositie te voeren (Hovenier, Fysiotherapie, breder vastgoed/PropTech). Geen nieuwe sectorpagina gebouwd. Volledige onderbouwing per sector in de sessie-transcript, niet apart gearchiveerd als los bestand.
