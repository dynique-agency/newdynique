# SEO-documentatie — index

Alle SEO-werk (onderzoek, strategie, data-analyse, beslissingen) wordt vanaf 2026-09-08 in deze map gedocumenteerd, in losse, gedateerde md-bestanden — niet verspreid over losse root-bestanden of alleen in chatgeschiedenis. Doel: één plek waar het volledige, actuele beeld van "waar staan we en wat is het plan" terug te vinden is, zodat elke volgende sessie (mens of AI) daarop kan voortbouwen in plaats van opnieuw te beginnen.

## Bestanden

- [`STRATEGY.md`](./STRATEGY.md) — het canonieke strategiedocument: realiteitscheck, marktkansen NL/BE, architectuur voor nieuwe pagina's, geprioriteerde roadmap. Wordt bijgewerkt zodra er nieuwe data is die de prioritering verandert (zie hieronder) — geen los tweede document ernaast.
- [`GSC-FINDINGS-2026-09.md`](./GSC-FINDINGS-2026-09.md) — analyse van elke Search Console-export deze maand, telkens als nieuwe genummerde sectie toegevoegd (§1: eerste echte data 2026-09-08; §11-12: latere heranalyses en een vervolgcheck op 2026-09-10). Dit is de eerste keer dat de strategie tegen echte data getoetst is i.p.v. alleen kwalitatief onderzoek.
- [`LEAD-PLAN-2026-09.md`](./LEAD-PLAN-2026-09.md) — het uitvoeringsplan gericht op aanvragen (niet alleen rankings): wat ik zelf direct kan doen, welke ene beslissing bij de eigenaar ligt, en waarom betaalde backlink-diensten expliciet zijn afgewezen.
- [`GSC-INDEXATIE-WACHTRIJ.md`](./GSC-INDEXATIE-WACHTRIJ.md) — levende checklist van nieuwe/gewijzigde URL's om handmatig te laten indexeren in Search Console. In tegenstelling tot de andere bestanden hierboven wordt dit bestand **bijgewerkt, niet vervangen** — elke nieuwe batch pagina's komt er bovenaan bij.
- [`data/`](./data/) — ruwe brondata (GSC-exports als CSV, per datum), zodat elke conclusie in de md-bestanden herleidbaar blijft naar de originele cijfers.

## Conventie

- **Elk nieuw datapunt (GSC-export, analytics-rapport, rankingcheck) krijgt een eigen, gedateerde `.md`-bestand** (`GSC-FINDINGS-YYYY-MM.md`, `RANKINGS-YYYY-MM.md`, etc.) — niet overschrijven, wel in `STRATEGY.md` verwerken als het de prioritering raakt.
- **Geen cijfers verzinnen.** Elk getal in deze map komt ofwel uit een brondocument in `data/`, ofwel uit direct onderzoek (WebSearch/pagina-inspectie) met bron vermeld. Zie de disclaimer in `STRATEGY.md` §10 voor waarom dit hier hard staat.
- **`STRATEGY.md` is levend, niet een eenmalig rapport.** Zodra nieuwe data (GSC, analytics, een geplaatste pagina die wel/niet werkt) een conclusie in de roadmap bevestigt of tegenspreekt, wordt die sectie bijgewerkt — met een korte vermelding van wat er veranderd is en waarom, niet stilzwijgend.
- Grote, niet-SEO-specifieke projectgeschiedenis blijft in [`../PROJECT-LOG.md`](../PROJECT-LOG.md); deze map is specifiek voor SEO/content-strategie-diepgang.
