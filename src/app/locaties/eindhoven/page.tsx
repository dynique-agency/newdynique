import type { Metadata } from "next";
import CityPage, { CityData } from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Website laten maken Eindhoven | Dynique — Webdesign bureau",
  description: "Premium website laten maken in Eindhoven. Webdesign bureau voor de Brainport-regio. Binnen 7–14 dagen live, vaste prijs, persoonlijk contact.",
  alternates: { canonical: "https://dynique.nl/locaties/eindhoven" },
  openGraph: {
    title: "Website laten maken Eindhoven | Dynique",
    description: "Premium webdesign in Eindhoven en Brainport. Snel, persoonlijk, vaste prijs.",
    url: "https://dynique.nl/locaties/eindhoven",
    type: "website",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Website laten maken in Eindhoven" }],
  },
  twitter: {
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Website laten maken in Eindhoven" }],
  },
};

const data: CityData = {
  city: "Eindhoven",
  cityShort: "Eindhoven",
  region: "Brainport",
  tagline: "Webdesign voor Brainport-ondernemers.",
  intro: "Eindhoven is design en techniek in elke vezel. Wij bouwen websites en maatwerk software die passen bij die ambitie — voor startups op Strijp-S, scale-ups in Brainport, design studio's en de creatieve sector. Snel, ambitieus en internationaal van toon.",
  vibe: "Brainport heeft een eigen taal: pragmatisch, design-gedreven en internationaal. Eindhovense ondernemers verwachten geen poespas maar wel kwaliteit en snelheid. Wij snappen die mentaliteit. Of het nu gaat om een tech-startup, een design-studio op Strijp, een scale-up rond Flight Forum of een gevestigde MKB-onderneming: we bouwen sites die passen bij de Brainport-cultuur.",
  accent: "#d4a574",
  postal: "5611 — 5658",
  travelTime: "Sittard 40 min · Maastricht 65 min",
  highlights: [
    { n: "01", title: "Tech & Startups", desc: "Snelle, modern ogende sites voor tech startups, scale-ups en spin-offs in Brainport en op High Tech Campus." },
    { n: "02", title: "Design & Creatief", desc: "Award-winning sites voor design studio's, creatieve bureaus en culturele instellingen op Strijp-S en in het centrum." },
    { n: "03", title: "Industrie & Engineering", desc: "B2B websites voor engineering firms, machinebouwers en hightech maakindustrie in en rond Eindhoven." },
    { n: "04", title: "International Business", desc: "Volledig Engelse websites voor expats, internationale startups en bedrijven met een mondiale klantbase." },
  ],
  industries: ["Tech", "Design", "Engineering", "Software", "Startups", "Manufacturing", "Mobility", "Healthcare", "Cleantech", "Education", "Creative"],
  faq: [
    { q: "Werken jullie ook voor tech-startups?", a: "Ja, regelmatig. We snappen lean product development, MVP-thinking en de behoefte aan snelle iteratie. Vaak werken we met startups in fases: eerst een landing page, dan een product site, dan een volledig platform." },
    { q: "Kunnen jullie volledig in het Engels werken?", a: "Absoluut. Veel van onze Eindhovense klanten communiceren standaard in het Engels. Alle projectcommunicatie, documentatie en oplevering kan in het Engels." },
    { q: "Hoe ver is Eindhoven vanaf jullie standplaats?", a: "Eindhoven ligt op 40–65 minuten rijden vanaf onze Limburgse basis. Voor de intake komen we graag langs op High Tech Campus, Strijp-S of waar je werkt." },
    { q: "Hebben jullie ervaring met internationale klanten?", a: "Ja. We bouwen regelmatig sites voor klanten met klanten in heel Europa of wereldwijd. Engelstalig, soms meertalig (NL/EN/DE), altijd met aandacht voor internationale conventies." },
  ],
};

export default function EindhovenPage() {
  return <CityPage data={data} />;
}
