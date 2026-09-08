import type { Metadata } from "next";
import CityPage, { CityData } from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Maatwerk software & webdesign Hasselt | Dynique",
  description: "Maatwerk software en webdesign voor bedrijven in Hasselt en Belgisch Limburg. Grensoverschrijdend werken vanuit Vaals, heldere btw-afspraken, vaste prijs. Gratis kennismaking.",
  alternates: { canonical: "https://dynique.nl/locaties/hasselt" },
  openGraph: {
    title: "Maatwerk software & webdesign Hasselt | Dynique",
    description: "Grensoverschrijdend webdesign en maatwerk software voor Hasselt en Belgisch Limburg. Snel, persoonlijk, vaste prijs.",
    url: "https://dynique.nl/locaties/hasselt",
    type: "website",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Website laten maken in Hasselt" }],
  },
  twitter: {
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Website laten maken in Hasselt" }],
  },
};

const data: CityData = {
  city: "Hasselt",
  cityShort: "Hasselt",
  region: "Belgisch Limburg",
  tagline: "Cross-border webdesign & maatwerk software voor Belgisch Limburg.",
  intro: "Hasselt ligt net over de grens en voelt vertrouwd — zelfde taal, vergelijkbare bedrijfscultuur, net een andere btw-aangifte. Wij bouwen websites en maatwerk software voor Hasseltse ondernemers die met een Nederlandse partij willen samenwerken, en voor Limburgse bedrijven die de Belgische markt op willen. Geen taalbarrière, geen omweg — gewoon rechtstreeks zaken doen.",
  vibe: "Hasselt is de hoofdstad van Belgisch Limburg: bekend als modestad, met Corda Campus als groeiende techhub en UHasselt en PXL die talent aanleveren. Het verschil met Nederlands ondernemen zit 'm niet in taal of mentaliteit — die liggen dicht bij elkaar — maar in praktische zaken: btw-verlegging bij grensoverschrijdende facturen, een KBO-inschrijving in plaats van een KVK-nummer, net iets andere terminologie in contracten. Wij kennen die verschillen en zorgen dat jij daar zelf geen omkijken naar hebt.",
  accent: "#2dd4bf",
  postal: "3500 — 3540",
  travelTime: "Maastricht 40 min · Vaals 55 min",
  highlights: [
    { n: "01", title: "Cross-border Business", desc: "Grensoverschrijdend ondernemen tussen Nederland en België: heldere afspraken over btw-verlegging en facturatie, geen verrassingen achteraf." },
    { n: "02", title: "Mode & Retail", desc: "Sterke webshops en merksites voor de Hasseltse mode- en retailsector — van de Grote Markt tot de Kolonel Dusartplein." },
    { n: "03", title: "Tech & Corda Campus", desc: "Moderne platforms op maat voor scale-ups en techbedrijven rond Corda Campus, UHasselt en PXL." },
    { n: "04", title: "Logistiek & Industrie", desc: "Systemen op maat voor logistieke dienstverleners en industriële bedrijven langs de E313/E314-corridor." },
  ],
  industries: ["Mode & Retail", "Tech", "Logistiek", "Zorg", "Onderwijs", "Bouw", "Horeca", "Industrie", "Vastgoed", "Dienstverlening"],
  faq: [
    { q: "Werken jullie ook voor Belgische bedrijven?", a: "Zeker. We werken al met bedrijven in heel Nederland en België — Hasselt en Belgisch Limburg horen daar gewoon bij, zowel op afstand als bij je op locatie." },
    { q: "Is er een taal- of cultuurbarrière tussen Nederland en België?", a: "Praktisch niet. We spreken dezelfde taal en de zakelijke cultuur ligt dicht bij elkaar — geen vertaalslag, geen aanpassingsperiode nodig." },
    { q: "Hoe zit het met facturatie tussen Nederland en België?", a: "Voor grensoverschrijdende B2B-diensten werken we met btw-verlegging (intracommunautaire dienst) — standaard binnen de EU, en we regelen dat administratief correct van begin af aan." },
    { q: "Hoe ver reizen jullie voor een fysieke afspraak in Hasselt?", a: "Vanaf ons kantoor in Vaals is Hasselt ongeveer 55 minuten rijden. Voor een intake of kennismaking komen we graag langs." },
  ],
};

export default function HasseltPage() {
  return <CityPage data={data} />;
}
