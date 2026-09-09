# Google Analytics 4 instellen

De site heeft nu een volledig werkende, AVG-conforme GA4-integratie: een cookiebanner (`src/components/CookieConsent.tsx`) die GA4 pas laadt na expliciete toestemming, met IP-anonimisering. Zonder de instelling hieronder gebeurt er niets — geen banner, geen tracking, veilige uitgangssituatie. Dit laatste zetje kan alleen door de accounteigenaar (Google-account), niet door mij — het aanmaken van accounts doe ik nooit namens jou.

## 1. GA4-property aanmaken

1. Ga naar [analytics.google.com](https://analytics.google.com) en log in met het Google-account dat je voor Dynique wil gebruiken.
2. Maak een nieuwe **property** aan voor `dynique.nl` (Admin → Property aanmaken). Vul de standaardgegevens in (branche, tijdzone Europe/Amsterdam, valuta EUR).
3. Kies bij het aanmaken van een **datastream** voor "Web", vul `https://dynique.nl` in als website-URL.
4. Je krijgt een **Measurement ID** te zien in de vorm `G-XXXXXXXXXX` — dat heb je nodig in stap 2.

## 2. Environment variable instellen (Cloudflare Pages)

1. Ga naar het Cloudflare Pages-project → **Settings → Environment variables**.
2. Voeg een gewone (niet-secret) variabele toe:

| Naam | Waarde |
|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | je Measurement ID, bv. `G-XXXXXXXXXX` |

3. Zet 'm voor **Production** (en optioneel Preview als je daar ook wil testen).

**Belangrijk:** dit is een `NEXT_PUBLIC_`-variabele, die wordt bij het *bouwen* van de site in de JavaScript-bundel gebakken, niet pas bij het bezoeken. Na het instellen moet er dus een nieuwe build/deploy gebeuren voordat het effect heeft — dat gebeurt vanzelf bij de eerstvolgende push naar `main`, of je triggert handmatig een redeploy in het Cloudflare-dashboard (Deployments → "Retry deployment" op de laatste deploy).

## 3. Wat er dan gebeurt

- Een bezoeker ziet bij het eerste bezoek een banner onderin: "Accepteren" / "Weigeren".
- **Accepteren:** GA4 laadt, met IP-anonimisering aan. De keuze wordt lokaal onthouden (localStorage), banner verschijnt niet opnieuw.
- **Weigeren:** GA4 laadt nooit. Ook onthouden, banner verschijnt niet opnieuw.
- De privacyverklaring (`/privacyverklaring`, NL én EN) is al bijgewerkt om dit correct te beschrijven — die sprak eerst expliciet van "geen Google Analytics", dat klopte niet meer zodra dit live gaat en is meteen mee aangepast.

## 4. Getest, nog niet live

Dit hele systeem (banner tonen, accepteren → GA4 laadt echt met het juiste Measurement ID, weigeren → laadt nooit, keuze blijft na herladen) is lokaal getest en werkt. Zonder een echt Measurement ID in Cloudflare Pages gebeurt er op de live site nog niets — dat is de enige nog ontbrekende stap.
