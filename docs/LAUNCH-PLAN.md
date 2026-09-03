# Launch Plan — Dynique Website

**Status:** 🟡 Bijna klaar — 1 blocker vereist een keuze van jou (leadcapture), rest is uitgevoerd of klaar om uit te voeren zodra jij akkoord geeft op de risicovolle stappen (commit/push, verwijderen van bestanden, token-rotatie).
**Laatst bijgewerkt:** 2026-07-14
**Doel:** vandaag alles voorbereiden zodat de site morgen (2026-07-15) live kan met de volledige redesign, zonder dat er leads verloren gaan of dingen kapot gaan.

Zie [`PROJECT-LOG.md`](./PROJECT-LOG.md) voor de volledige geschiedenis van alle wijzigingen.

---

## Context — dit is geen nieuwe lancering

`dynique.nl` staat **al live** in productie (Cloudflare, MX-records naar Microsoft 365 — het bedrijfsmailadres draait er al op). De huidige live versie is de **oude** ontwerpversie. Dit plan gaat over het **veilig vervangen** van die live site door de volledige redesign van vandaag/gisteren, niet over een greenfield-launch.

Niets is vandaag gecommit of gepusht — alles staat lokaal klaar. Dat is bewust: commits en pushes raken een gedeeld systeem (de live site, via Cloudflare's auto-deploy op elke push naar `main`), dus dat doe ik niet zonder jouw akkoord.

---

## Volledige pre-launch audit — bevindingen

Zes onafhankelijke onderzoekslijnen: interne links, formulieren/leadcapture, SEO-metadata, asset-gewicht, cross-file consistentie, beveiliging/deploy-config.

### 🔴 Blockers (4 gevonden, 3 opgelost, 1 vereist jouw beslissing)

| # | Bevinding | Status |
|---|---|---|
| 1 | `DEPLOY_INSTRUCTIONS.md` zei "Build output directory: `.next`" — met `output:'export'` is de echte map `out/`. Cloudflare Pages zou hierop stuk lopen. | ✅ **Opgelost** — doc gecorrigeerd. **Let op:** check ook de live Cloudflare Pages dashboard-instelling zelf (zie "Wat jij moet doen" hieronder) — als die ooit op `.next` is gezet, moet dat in het dashboard zelf ook aangepast worden. |
| 2 | 18 van de ~33 pagina's (alle portfolio cases, alle blogposts, alle maatwerk-software-pagina's, alle locatiepagina's) hadden **geen `og:image`** — geverifieerd in de echte gebouwde HTML. Social shares (WhatsApp, LinkedIn, Facebook) toonden geen preview-afbeelding. | ✅ **Opgelost** — alle 18 pagina's tonen nu de merk-consistente dynamische OG-afbeelding, geverifieerd in de build (`0 pagina's zonder og:image`). |
| 3 | Hero-afbeelding IJssalon Italia: 8,3MB PNG met `loading="eager"` — ernstige conversie-killer op mobiel. | ✅ **Opgelost** — gecomprimeerd naar WebP, 104KB (-98,8%), visueel gecontroleerd in browser: geen zichtbaar kwaliteitsverlies. |
| 4 | **Het leadmagnet-formulier (`/gratis-checklist`) verstuurt niets.** Naam + e-mail worden in React-state gezet en daarna weggegooid — nooit verzonden naar een backend, Mailchimp, e-mail, niets. De pagina belooft wel "ontvang de PDF direct per mail" en de bedankpagina zegt "check je spam-folder". **Dit faalt bij elke enkele inzending, niet incidenteel.** | 🔴 **Nog open — vereist jouw keuze**, zie hieronder. |

### 🟠 High-severity (11 gevonden, 6 opgelost, 5 vereisen jouw beslissing/actie)

**Opgelost:**
- GitHub-token in plaintext in de git remote-URL → aanbeveling klaar, actie vereist jouw keuze (zie hieronder — kan ik niet zomaar zelf wijzigen zonder je SSH-setup te kennen).
- JSON-LD structured data miste overal het straatadres (alleen regio/land) terwijl footer/privacyverklaring het volledige adres al tonen → **opgelost** op alle 5 plekken (`layout.tsx`, `contact/page.tsx`, `over-ons/page.tsx`, `CityPage.tsx`, `diensten/processen/limburg/layout.tsx`).
- `metadata-config.ts` had de verkeerde bedrijfsnaam ("Dynique Web Development" i.p.v. "Creemers Inclusives") — bestand bleek nergens gebruikt te worden (dode code), maar wel gecorrigeerd om verwarring te voorkomen. **Opgelost.**
- `og:image` vs `twitter:image` toonden verschillende afbeeldingen op dezelfde pagina (Facebook/LinkedIn zagen iets anders dan Twitter/X) → **opgelost**, nu consistent overal.
- Over-ons OG-afbeelding had verkeerde afmetingen in de metadata (1200×630 landschap opgegeven, bestand is 1573×2157 staand) → **opgelost**, metadata gecorrigeerd.
- Vier grote hero-/gallery-afbeeldingen (Stacy Kohnen 5,4MB, Creemers 5,0MB + 4 gallery-foto's) → **opgelost**, allemaal naar WebP, gemiddeld -97% bestandsgrootte.

**Nog open — vereist jouw beslissing:**
- **6 WhatsApp-only formulieren** (homepage, `/contact`, alle 4 maatwerk-software-sectorpagina's, `/diensten/processen` + Limburg-variant, `/eerste-website`, `/vervanging`) hebben **geen enkele back-up**: als de WhatsApp-tab niet opent (pop-upblokkering), de bezoeker geen WhatsApp Web ingelogd heeft op desktop, of de tab wordt gesloten vóór verzenden, is de lead **spoorloos weg** — geen e-mail, geen database, niets aan jouw kant. Zie "De belangrijkste keuze" hieronder.
- Bedankt-pagina tekst ("Succesvol verzonden", "check je spam-folder") is misleidend voor de kapotte leadmagnet-flow — hangt samen met de leadmagnet-fix.

### 🟡 Medium (9 gevonden, 7 opgelost, 2 optioneel)
- ✅ Geen `_headers`-bestand voor Cloudflare Pages (geen CSP/security headers) → **opgelost**, `public/_headers` toegevoegd met CSP, HSTS, X-Frame-Options, Permissions-Policy.
- ✅ `.gitignore` ving alleen `.env*.local` af, niet een kale `.env` → **opgelost**, verbreed naar `.env*`.
- ✅ Verouderde GSC-verificatie-instructies in `DEPLOY_INSTRUCTIONS.md` (verwezen naar code die niet meer bestaat) → **opgelost**.
- ✅ JSON-LD logo-afmetingen verkeerd (512×512 opgegeven, bestand is 1024×1024) → **opgelost**.
- ✅ Dode `Disallow: /api/`-regel in `robots.txt` (project heeft geen API-routes) → **opgelost**.
- ✅ Onder-de-vouw gallery-afbeeldingen (IJssalon, Creemers) nog te zwaar → **opgelost**, allemaal naar WebP.
- ✅ Preview-video's 9,7–11MB elk (IJssalon, Chefs Connect, Stacy Kohnen) ondanks correcte lazy-play → **opgelost**, herge-encode naar 30fps/CRF 30, gemiddeld -95% (nu 234–504KB).
- 🔵 Optioneel: ~15MB ongebruikte assets (`houseofchocolate/`, `sapersoneel/`, losse `hero.mp4`/`stepproces.mp4`) — nergens meer gerefereerd in de code, vermoedelijk resten van oude/verwijderde klantcases. Nog niet verwijderd — zie hieronder.
- 🔵 Optioneel: `/bedankt` mist in sitemap — bewust, want de pagina heeft al `noindex` (bleek al eerder gefixed te zijn), dus geen actie nodig.

### ⚪ Low / positieve bevindingen
- **Alle interne links kloppen** — 33 routes gecontroleerd tegen elke `href` in de hele codebase, inclusief hash-anchors (`#contact`, `#faq`). Geen dode links.
- **Alle 33 metadata-exports hebben unieke titles/descriptions**, geen duplicaten.
- **Alle 52 JSON-LD blokken zijn geldige JSON** (geverifieerd door de daadwerkelijke build te parsen).
- Telefoonnummer, e-mail, KVK-nummer zijn overal consistent geformatteerd.
- Geen `TODO`/`FIXME`/lorem-ipsum/test-e-mailadressen gevonden in productiecode.
- Twee losse persoonlijke foto's op repo-root (`D70B5FF6-...jpeg`, `foto.jpeg`) — nergens gebruikt, lijken per ongeluk meegekomen. Nog niet verwijderd — zie hieronder.

---

## Wat ik vandaag heb uitgevoerd (zonder jouw akkoord nodig — lokaal, veilig, omkeerbaar)

1. **Volledige redesign** van alle ~26 pagina's (typografie, contrast/WCAG AA, verboden ontwerp-patronen verwijderd, performance-fixes) — zie [`PROJECT-LOG.md`](./PROJECT-LOG.md) voor het volledige overzicht.
2. **Wettelijke informatie in de footer** (handelsnaam, KVK, adres).
3. **Pre-launch audit** (6 onderzoekslijnen, hierboven samengevat).
4. **~25 bestanden gefixt** via 8 parallelle fix-batches: og:image op 18 pagina's, JSON-LD-adres op 5 plekken, JSON-LD logo-afmetingen, verouderde documentatie, dode configuratie.
5. **Afbeeldingen gecomprimeerd**: 10 PNG's (35MB) → WebP (~650KB), alle referenties in de code bijgewerkt, oude bestanden verwijderd. `public/` ging van 92MB → 59MB.
6. **Video's herge-encode**: 3 preview-clips (32MB samen) → 30fps/gecomprimeerd (~1,2MB samen). `public/` uiteindelijk **92MB → 29MB** (-68%).
7. **`public/_headers` toegevoegd** met CSP/HSTS/X-Frame-Options voor Cloudflare Pages.
8. **`npx tsc --noEmit` schoon + volledige `npm run build` succesvol** (alle 38 routes), geverifieerd dat alle fixes daadwerkelijk in de gebouwde HTML terechtkomen (niet alleen in de brontekst).

**Alles staat lokaal klaar in de working tree. Nog niet gecommit, nog niet gepusht, nog niet live.**

---

## De belangrijkste keuze: hoe vangen we leads op?

Dit is het enige echte blocker dat een productbeslissing van jou vraagt, geen technische fix die ik zomaar kan uitvoeren. Momenteel:
- 6 formulieren sturen alleen een vooraf ingevulde WhatsApp-link — niets wordt opgeslagen totdat de bezoeker zelf op "verzenden" drukt in WhatsApp.
- 1 formulier (`/gratis-checklist`) doet **helemaal niets** met de ingevulde gegevens.

Voor een site die je vanaf morgen actief gaat gebruiken om klanten binnen te halen, is dit het verschil tussen "we zien elke aanvraag" en "een deel van de aanvragen verdwijnt geruisloos". Drie opties, van eenvoudig naar volledig:

| Optie | Wat het is | Inspanning | Kosten |
|---|---|---|---|
| **A — Formspree/Basin** | Hosted formulier-endpoint, je krijgt een e-mail per inzending, geen eigen backend nodig | Laag — ik kan dit vandaag nog inbouwen zodra je een account hebt (gratis tier beschikbaar) | Gratis tot ~50 inzendingen/maand, daarna vanaf ~$10/mnd |
| **B — Cloudflare Pages Functions** | Een kleine serverless functie naast de site (past bij dat je toch al op Cloudflare zit), stuurt een e-mail via bv. Resend | Middel — ik kan de functie schrijven, jij hebt een Resend-account (of vergelijkbaar) nodig | Cloudflare Functions gratis, Resend gratis tot 3.000 mails/maand |
| **C — Alleen WhatsApp, bewust geaccepteerd risico** | Niets bouwen, maar wél de tekst overal eerlijk maken zodat niemand een foute belofte krijgt | Laag — alleen de leadmagnet-pagina + bedankpagina tekst aanpassen | Gratis, maar leads blijven kwetsbaar voor tab-sluiten/pop-upblokkering |

**Mijn aanbeveling:** optie A voor vandaag/morgen (snelst te realiseren, geen nieuwe infrastructuur), met optie B als latere upgrade zodra je meer volume hebt. Zeg me welke kant je op wilt en ik bouw het direct.

**Tot die keuze gemaakt is**, kan ik als eerste stap wel de misleidende tekst op `/gratis-checklist` en `/bedankt` corrigeren (weghalen van "ontvang de PDF direct per mail" / "check je spam-folder") zodat er in elk geval niemand een valse belofte krijgt — zeg het en ik doe dat meteen, los van welke backend-optie je uiteindelijk kiest.

---

## Andere openstaande beslissingen (kleiner, maar wel echt)

1. **GitHub-token in de git remote-URL** — staat in platte tekst in je lokale `.git/config`, leesbaar voor iedereen met toegang tot deze machine. Aanbeveling: overschakelen naar SSH of een credential-manager, en het huidige token intrekken/vervangen via GitHub-instellingen. Ik kan de remote-URL omzetten zodra je bevestigt dat er een SSH-sleutel is ingesteld (of we zetten `gh auth login` op) — wil je dat ik dat nu doe, of regel je dat zelf?
2. **~15MB ongebruikte media** (`public/rsc/houseofchocolate/`, `public/rsc/sapersoneel/`, losse `hero.mp4`/`stepproces.mp4`) — nergens in de site gebruikt, lijkt overblijfsel van verwijderde klantcases. Wil je dat ik dit verwijder, of bewaar je het voor later gebruik?
3. **2 losse persoonlijke foto's** op de repo-root (`D70B5FF6-...jpeg`, `foto.jpeg`) — lijken per ongeluk meegekomen (bestandsnaam wijst op een iOS-foto-export), nergens gebruikt. Verwijderen?
4. **Cloudflare Pages dashboard-instelling controleren** — de documentatie zei verkeerd `.next`, maar ik kan niet zien wat er echt in het Cloudflare-dashboard staat. Kun jij dat checken (Workers & Pages → project → Settings → Builds), of geef je me toegang?

---

## Concreet stappenplan voor morgen (2026-07-15)

**Vanavond/vannacht (kan ik nu al doen zodra jij akkoord geeft):**
1. Jij beantwoordt de vragen hierboven (leadcapture-optie, token, dode assets, Cloudflare-dashboard-check).
2. Ik verwerk je keuzes (leadcapture bouwen indien optie A/B, dode bestanden opruimen indien akkoord, token-remote fixen indien akkoord).
3. Ik commit alle wijzigingen met duidelijke, losse commits (niet één megacommit) zodat je de geschiedenis kunt volgen.
4. **Ik push niet automatisch** — dat vraag ik apart, want dat triggert Cloudflare's auto-deploy naar de live site.

**Morgenochtend:**
5. Laatste controle: ik draai de build nog één keer vers, test de belangrijkste flows in de browser (contact, leadmagnet, minstens 1 pagina per sjabloon-type).
6. Jij geeft het definitieve akkoord om te pushen naar `main`.
7. Ik push → Cloudflare Pages start automatisch de deploy (2-5 minuten volgens `DEPLOY_INSTRUCTIONS.md`).
8. Na deploy: ik controleer de live site (dynique.nl) op de belangrijkste pagina's, check dat er geen 404's zijn, en dat de OG-afbeeldingen echt goed tonen (bv. door de homepage-URL te delen in een WhatsApp-chat aan jezelf — Meta/WhatsApp cachen OG-previews, dus dat kan een paar minuten duren of een cache-refresh vereisen via [Facebook's Sharing Debugger](https://developers.facebook.com/tools/debug/)).
9. Google Search Console: als je nog geen verificatie hebt gedaan, claim je domein en zet je token in de `NEXT_PUBLIC_GSC_VERIFICATION` environment variable in Cloudflare Pages (zie bijgewerkte `DEPLOY_INSTRUCTIONS.md`), dan opnieuw deployen.
10. Dien de sitemap in bij Google Search Console (`https://dynique.nl/sitemap.xml`) zodat de nieuwe/gewijzigde pagina's sneller geïndexeerd worden.

**Nazorg (eerste week na launch):**
- Monitor de WhatsApp-formulieren de eerste dagen extra actief (tot de leadcapture-fix live staat) — vraag bekenden om een test-inzending te doen zodat je zelf voelt hoe het traject aanvoelt.
- Check Cloudflare Pages' ingebouwde Web Analytics (gratis, geen cookies, geen consent-banner nodig) om te zien of bezoekers daadwerkelijk aankomen en waar ze afhaken.
- Overweeg op termijn een lichte vorm van analytics/conversietracking — momenteel staat er **geen enkele analytics-tool** op de site (geen GA4, geen Meta Pixel, ondanks dat de privacyverklaring wél over "Meta-advertenties" spreekt). Dat is een bewuste keuze geweest of een gat — zeg het als je hier iets wilt, dan denk ik mee over een privacy-vriendelijke optie.
