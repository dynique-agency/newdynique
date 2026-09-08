# Leadcapture-backend instellen (Resend + Cloudflare Pages Functions)

De formulieren op de site (homepage, /contact, /gratis-checklist) sturen nu écht een e-mail via een lichte backend die met de site wordt meegedeployed op Cloudflare Pages. Voordat dit werkt op de live site moeten drie dingen eenmalig ingesteld worden — dit kan alleen door de accounteigenaar (Resend-account, Cloudflare-dashboard), niet door mij.

## 1. Resend-account + domeinverificatie

1. Maak een account op [resend.com](https://resend.com) (gratis tier: 3.000 e-mails/maand, ruim voldoende).
2. Voeg het domein `dynique.nl` toe onder **Domains** en volg de DNS-instructies (voeg de gevraagde SPF/DKIM-records toe bij je domeinregistrar). Dit kan tot 24-48 uur duren voor het "Verified" staat, maar is meestal binnen een uur klaar.
3. Maak een **API key** aan (Settings → API Keys) met "Sending access" — bewaar deze, hij is maar één keer zichtbaar.

Zonder geverifieerd domein weigert Resend e-mails te versturen vanaf `formulier@dynique.nl` — wacht dus met testen tot dit op "Verified" staat.

## 2. Cloudflare KV-namespace (voor de live-reactietijd-indicator)

1. Ga in het Cloudflare-dashboard naar het Pages-project → **Settings → Functions → KV namespace bindings**.
2. Maak (indien nog niet aanwezig) een nieuwe KV-namespace aan, bijvoorbeeld genaamd `dynique-status`.
3. Bind deze namespace aan de variabelenaam **`DYNIQUE_KV`** (moet exact zo heten, zo heet de binding in de code).

## 3. Environment variables (Pages project → Settings → Environment variables)

Zet deze twee **secrets** (niet als gewone variabele, maar als "Encrypt"):

| Naam | Waarde | Waarvoor |
|---|---|---|
| `RESEND_API_KEY` | de API-key uit stap 1 | verzenden van formulier-mails |
| `STATUS_SECRET` | een zelfgekozen lange willekeurige string (bv. via `openssl rand -hex 24`) | beveiligt de "mark-responded"-link hieronder |

Optioneel:

| Naam | Waarde | Waarvoor |
|---|---|---|
| `LEAD_TO_EMAIL` | een ander adres dan `info@dynique.nl` | als leads ergens anders naartoe moeten |

Zet deze variabelen zowel voor **Production** als **Preview** environment als je ook op preview-deploys wil testen.

## 4. De live "laatst gereageerd"-indicator gebruiken

Op de site staat nu, waar eerst een hardgecodeerde reactietijd stond ("binnen 2 uur", "binnen 24 uur" — die tegenstrijdige claims zijn weg), een eerlijke indicator: zolang er geen recente meting is, staat er "Reageert doorgaans dezelfde werkdag". Zodra jij een lead persoonlijk hebt beantwoord (via WhatsApp, telefoon, mail — maakt niet uit), open je op je telefoon deze link (eenmalig bookmarken):

```
https://dynique.nl/api/mark-responded?key=<jouw STATUS_SECRET>
```

Dat zet de indicator op "Laatst gereageerd: X geleden" op de hele site. Na 48 uur zonder nieuwe update valt de indicator automatisch terug op de algemene tekst — er verschijnt dus nooit een verouderde/misleidende claim.

## Testen na setup

1. Vul een van de drie formulieren in op de live site (of een preview-deploy).
2. Check of de e-mail aankomt op `info@dynique.nl` (of het ingestelde `LEAD_TO_EMAIL`).
3. Open de mark-responded-link met je eigen `STATUS_SECRET` en ververs de contact- of homepagina — de indicator moet nu "Laatst gereageerd: zojuist" tonen.

## Technische locatie

- `functions/api/lead.ts` — ontvangt formulier-data, stuurt de e-mail via Resend.
- `functions/api/status.ts` — geeft de actuele "laatst gereageerd"-status terug.
- `functions/api/mark-responded.ts` — het endpoint achter de bookmarklink hierboven.
- `src/components/StatusIndicator.tsx` — het stukje UI dat de status ophaalt en toont.

Deze `functions/`-map is een aparte Cloudflare Pages Functions-build naast de statische Next.js-export — staat los van `npm run build`/`next build` en heeft een eigen `functions/tsconfig.json`.
