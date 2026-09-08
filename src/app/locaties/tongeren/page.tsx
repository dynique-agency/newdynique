import type { Metadata } from "next";
import CityPage, { CityData } from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Maatwerk software & webdesign Tongeren | Dynique",
  description: "Maatwerk software en webdesign voor bedrijven in Tongeren en Belgisch Limburg. Grensoverschrijdend werken vanuit Vaals, heldere btw-afspraken, vaste prijs. Gratis kennismaking.",
  alternates: { canonical: "https://dynique.nl/locaties/tongeren" },
  openGraph: {
    title: "Maatwerk software & webdesign Tongeren | Dynique",
    description: "Grensoverschrijdend webdesign en maatwerk software voor Tongeren en Belgisch Limburg. Snel, persoonlijk, vaste prijs.",
    url: "https://dynique.nl/locaties/tongeren",
    type: "website",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Maatwerk software & webdesign in Tongeren" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maatwerk software & webdesign Tongeren | Dynique",
    description: "Grensoverschrijdend webdesign en maatwerk software voor Tongeren en Belgisch Limburg. Snel, persoonlijk, vaste prijs.",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Maatwerk software & webdesign in Tongeren" }],
  },
};

const data: CityData = {
  city: "Tongeren",
  cityShort: "Tongeren",
  region: "Belgisch Limburg",
  tagline: "Cross-border maatwerk software & webdesign voor Tongeren en Belgisch Limburg.",
  intro: "Tongeren is de oudste stad van België — Romeins erfgoed dat het straatbeeld nog altijd kleurt, en een economie die daar bewust op voortbouwt: erfgoedtoerisme, horeca en retail in een historische binnenstad die het hele jaar bezoekers trekt. Wij bouwen websites en maatwerk software voor Tongerse ondernemers die met een Nederlandse partij willen samenwerken, zonder taalbarrière of omweg.",
  vibe: "Als oudste Romeinse bestuurscentrum binnen de huidige Belgische grenzen leunt Tongeren zwaar op erfgoed en toerisme — van de Basiliek en het Gallo-Romeins Museum tot de wekelijkse antiekmarkt op de Veemarkt, een van de grootste van de Benelux. Sinds 1 januari 2025 vormt Tongeren samen met Borgloon de fusiegemeente Tongeren-Borgloon, wat de regio nog wat groter en diverser maakt. Voor ondernemers in horeca, retail en toerisme betekent dit een publiek dat het hele jaar door komt, niet alleen in het seizoen — en dat vraagt om een website die dat bezoekersritme aankan.",
  accent: "#c2703d",
  postal: "3700",
  travelTime: "Maastricht 20 min · Vaals 35 min",
  highlights: [
    { n: "01", title: "Erfgoed & Toerisme", desc: "Websites die de sfeer van een historische binnenstad overbrengen — voor musea, gidsen en toeristische ondernemingen rond de Basiliek en het Gallo-Romeins Museum." },
    { n: "02", title: "Horeca & Retail", desc: "Sites en boekingssystemen voor de horeca en winkels in de binnenstad, gebouwd op het jaarrond-bezoekersritme van een erfgoedstad." },
    { n: "03", title: "Markt & Evenementen", desc: "Systemen op maat voor organisatoren rond de wekelijkse antiekmarkt op de Veemarkt en de vele evenementen die Tongeren jaarlijks trekt." },
    { n: "04", title: "Cross-border Business", desc: "Grensoverschrijdend ondernemen tussen Nederland en België: heldere afspraken over btw-verlegging en facturatie, geen verrassingen achteraf." },
  ],
  industries: ["Toerisme", "Horeca", "Retail", "Erfgoed & Cultuur", "Evenementen", "Zorg", "Bouw", "Landbouw", "Dienstverlening", "Onderwijs"],
  faq: [
    { q: "Werken jullie ook voor bedrijven in Tongeren en Belgisch Limburg?", a: "Zeker. We werken al met bedrijven in heel Nederland en België — Tongeren en Belgisch Limburg horen daar gewoon bij, zowel op afstand als bij je op locatie." },
    { q: "Hoe zit het met facturatie tussen Nederland en België?", a: "Voor grensoverschrijdende B2B-diensten werken we met btw-verlegging (intracommunautaire dienst) — standaard binnen de EU, en we regelen dat administratief correct van begin af aan." },
    { q: "Hoe ver reizen jullie voor een fysieke afspraak in Tongeren?", a: "Vanaf ons kantoor in Vaals is Tongeren ongeveer 35 minuten rijden, via Maastricht. Voor een intake of kennismaking komen we graag langs." },
    { q: "Bouwen jullie ook boekingssystemen voor horeca en toerisme?", a: "Ja, regelmatig. Voor een erfgoedstad als Tongeren, waar bezoekers het hele jaar komen, bouwen we boekings- en reserveringssystemen die precies aansluiten op hoe jullie onderneming werkt — geen generiek pakket." },
  ],
};

export default function TongerenPage() {
  return <CityPage data={data} />;
}
