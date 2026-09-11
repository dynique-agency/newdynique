# Eigenaar-taken — wat alleen jij kan doen

Verzameld op 2026-09-11 uit `docs/seo/STRATEGY.md` §9, `docs/GA4-SETUP.md` en `docs/LEADCAPTURE-SETUP.md`, op één plek gezet zodat het niet wegzakt tussen de SEO-docs. Alles hieronder vereist accountbeheer, persoonlijk contact of een bedrijfsbeslissing — geen van deze punten kan ik namens Dynique regelen. Vink af of streep weg zodra iets gedaan is; zeg het gewoon en ik werk dit bestand bij.

**Twee punten uit de oorspronkelijke lijst zijn hier bewust weggelaten, met reden:** prijsbeleid is al vastgesteld (de "vanaf €4k, kan ook €15-35k zijn"-formulering staat al overal) en de vraag "welke sector×stad-combinaties hebben bewijs" is inmiddels achterhaald — recent onderzoek naar zowel nieuwe sectoren als nieuwe beroepsniches (zie `docs/PROJECT-LOG.md`, 2026-09-11) wees consequent af, dus dat spoor ligt voorlopig stil.

---

## 🔴 Hoogste prioriteit — functioneel, niet alleen groei

- [ ] **Leadcapture-backend afronden.** De code staat al live: elk formulier op de site probeert een e-mail te sturen via Resend, maar zonder onderstaande setup **faalt dat nu bij elke aanvraag, stil, zonder dat iemand het merkt.** Het enige vangnet is dat de bezoeker zelf het WhatsApp-bericht verstuurt. Zie de volledige stappen in [`docs/LEADCAPTURE-SETUP.md`](./LEADCAPTURE-SETUP.md):
  - [ ] Resend-account aanmaken + `dynique.nl` verifiëren (SPF/DKIM bij je domeinregistrar)
  - [ ] Cloudflare KV-namespace `DYNIQUE_KV` aanmaken en binden
  - [ ] Env vars `RESEND_API_KEY` en `STATUS_SECRET` zetten in Cloudflare Pages (Production + Preview)
  - [ ] Testen: een formulier invullen, checken of de mail aankomt

## 🟠 Hoog — ontbrekende meetbasis

- [ ] **GA4 afronden.** Code + AVG-conforme cookiebanner staan al klaar. Alleen nog: property aanmaken op analytics.google.com, Measurement ID als `NEXT_PUBLIC_GA_MEASUREMENT_ID` zetten in Cloudflare Pages. Zie [`docs/GA4-SETUP.md`](./GA4-SETUP.md).

## 🟡 Middel — lokale zichtbaarheid en vertrouwen

- [ ] **Google Business Profile** aanmaken/optimaliseren — servicegebied NL+BE, projectfoto's, en actief **reviews verzamelen** (streef naar 10-20). Net zo belangrijk voor lokale/kaart-zichtbaarheid als de website zelf.
- [ ] **Echte foto's** (geen stock) van locaties/team/projecten voor de stadspagina's — aantoonbaar een van de sterkste ranking-signalen voor lokale pagina's.
- [ ] **Sortlist.be-profiel** volledig en actueel invullen — in België nemen directories een reëel deel van de zoekresultaten in.

## 🟢 Doorlopend — kost tijd, geen deadline

- [ ] **Testimonials/reviews ophalen bij bestaande klanten** (met naam + bedrijf) — vult de social-proof-secties op de site met meer dan de huidige 4 vaste reviews.
- [ ] **Backlink-/partnerschap-outreach:** samenwerkingen met fotografen, boekhouders, regionale marketingbureaus; gratis vermeldingen bij Goudengids.be en het KBO/VLAIO-ecosysteem; lokale sponsoring/evenementen.

---

*Bijgewerkt door Claude op basis van de stand van zaken in deze sessie. Zeg het als iets hierboven al gedaan is (ook als het niet via mij liep) — dan haal ik het eraf.*
