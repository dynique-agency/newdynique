import type { Metadata } from "next";
import CityPage, { CityData } from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Maatwerk software & webdesign Maastricht | Dynique",
  description: "Maatwerk software en premium webdesign voor Maastricht en Zuid-Limburg — van horeca aan het Vrijthof tot boutiques in Wyck en advocatenkantoren in Randwyck.",
  alternates: { canonical: "https://dynique.nl/locaties/maastricht" },
  openGraph: {
    title: "Maatwerk software & webdesign Maastricht | Dynique",
    description: "Premium webdesign en maatwerk software in Maastricht. Elegant, meertalig en gebouwd rond horeca, boutiques en kantoren in Wyck en Randwyck.",
    url: "https://dynique.nl/locaties/maastricht",
    type: "website",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Website laten maken in Maastricht" }],
  },
  twitter: {
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Website laten maken in Maastricht" }],
  },
};

const data: CityData = {
  city: "Maastricht",
  cityShort: "Maastricht",
  region: "Zuid-Limburg",
  tagline: "Maatwerk software en webdesign in de hoofdstad van Limburg.",
  intro: "Een stad waar erfgoed, gastronomie en internationale ondernemers samenkomen. Wij bouwen maatwerk software, websites en web apps die die elegantie vertalen naar het digitale — van een boekingssysteem voor een restaurant tot een klantportaal voor een kantoor. Van Wyck tot Sint Pieter, van Vrijthof tot Sphinxkwartier.",
  vibe: "Maastricht heeft een internationale uitstraling die je website verdient. We snappen de Bourgondische cultuur, de drukke toeristische seizoenen, en de subtiele balans tussen traditie en vernieuwing. Of je nu een restaurant runt aan de Maas, een boutique in Wyck, een advocatenkantoor aan de Maaskade of een internationaal bedrijf in Randwyck: wij vertalen jouw merk naar een website die past bij de stad én converteert.",
  accent: "#d4a574",
  postal: "6211 — 6229",
  travelTime: "Heerlen 20 min · Aken 30 min",
  highlights: [
    { n: "01", title: "Horeca & Restaurants", desc: "Reserveringssystemen, meertalige menu's en seizoensgebonden content voor de gastronomische sector in Maastricht." },
    { n: "02", title: "Retail & Boutique", desc: "E-commerce die past bij premium boutiques in Wyck, Stokstraat en het centrum." },
    { n: "03", title: "Zakelijk & Juridisch", desc: "Strakke corporate websites voor advocatenkantoren, accountants en consultants in en rond Randwyck." },
    { n: "04", title: "Cultuur & Toerisme", desc: "Meertalige sites (NL/EN/DE/FR) die internationale bezoekers en lokale liefhebbers aanspreken." },
  ],
  industries: ["Horeca", "Retail", "Hotels", "Advocatuur", "Accountancy", "Cultuur", "Toerisme", "Vastgoed", "Architectuur", "Zorg", "Beauty", "Wellness"],
  faq: [
    { q: "Werken jullie ook fysiek vanuit Maastricht?", a: "We komen graag bij jou langs voor de intake. Maastricht is op slechts 20 minuten rijden vanuit onze basis in Zuid-Limburg. Of we ontmoeten elkaar op een terras aan het Vrijthof — wat jij prettig vindt." },
    { q: "Spreken jullie ook Engels, Duits of Frans?", a: "Ja. Maastricht is een internationale stad en wij bouwen regelmatig meertalige websites. We werken samen met native vertalers voor professioneel resultaat in elke taal." },
    { q: "Kennen jullie de Maastrichtse markt?", a: "We werken al jaren voor ondernemers in Zuid-Limburg en kennen de bezoekersstromen, het seizoenseffect en de internationale doelgroep. Dat zie je terug in keuzes voor structuur, content en functionaliteit." },
    { q: "Hoe snel kan mijn website in Maastricht live?", a: "Dat hangt af van de scope — een eenvoudige website vraagt minder tijd dan een meertalig platform met koppelingen. Bij de intake krijg je een realistische planning met een vaste einddatum, geen slag in de lucht." },
    { q: "Bouwen jullie ook apps of web-applicaties voor bedrijven in Maastricht?", a: "Ja. Naast websites bouwen we ook web apps — klantportalen, boekingssystemen, dashboards — voor bedrijven in en rond Maastricht. Vaak begint dat als uitbreiding op een bestaande website, soms als los traject." },
  ],
  relatedRegionLink: { label: "bekijk onze pagina over maatwerk software voor heel Limburg", href: "/diensten/processen/limburg" },
};

export default function MaastrichtPage() {
  return <CityPage data={data} />;
}
