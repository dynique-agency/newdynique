import type { Metadata } from "next";
import CityPage, { CityData } from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Maatwerk software & webdesign Sittard-Geleen | Dynique",
  description: "Maatwerk software en webdesign voor Sittard, Geleen en Born — van toeleveranciers rond Chemelot tot retail in de Sittardse binnenstad. Vakmanschap staat voorop.",
  alternates: { canonical: "https://dynique.nl/locaties/sittard" },
  openGraph: {
    title: "Maatwerk software & webdesign Sittard-Geleen | Dynique",
    description: "Maatwerk software en webdesign voor Sittard, Geleen en Born. Vakkundig gebouwd rond Chemelot, VDL Nedcar en de Sittardse binnenstad.",
    url: "https://dynique.nl/locaties/sittard",
    type: "website",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Website laten maken in Sittard-Geleen" }],
  },
  twitter: {
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Website laten maken in Sittard-Geleen" }],
  },
};

const data: CityData = {
  city: "Sittard",
  cityShort: "Sittard",
  region: "Westelijke Mijnstreek",
  tagline: "Maatwerk software en webdesign voor Sittard, Geleen en Born.",
  intro: "Een regio die wereldspelers herbergt: Chemelot, VDL Nedcar en de hele toeleveringsketen daarom heen. Wij bouwen maatwerk software en websites die kwaliteit uitstralen — voor toeleveranciers, lokaal MKB, retail in de Sittardse binnenstad en ondernemers in Geleen en Born.",
  vibe: "De Westelijke Mijnstreek combineert grote industrie met sterke lokale ondernemers. Vakmanschap zit in het DNA, en dat verdient een digitale presentatie die past. We kennen de verschillen tussen het oude centrum van Sittard, Geleen-Zuid en Born — en bouwen sites die zowel B2B als B2C-doelgroepen aanspreken in deze veelzijdige regio.",
  accent: "#fb923c",
  postal: "6131 — 6166",
  travelTime: "Maastricht 25 min · Eindhoven 40 min",
  highlights: [
    { n: "01", title: "Industrie & Chemelot", desc: "Strakke B2B websites voor toeleveranciers, technische specialisten en industriële dienstverleners rond Chemelot." },
    { n: "02", title: "Logistiek & Mobiliteit", desc: "Conversie-gerichte sites voor logistieke bedrijven en mobiliteitsdienstverleners in Born en Geleen." },
    { n: "03", title: "Retail & Centrum Sittard", desc: "Webshops en winkelsites voor de Sittardse Markt, Limbrichterstraat en omliggende winkelstraten." },
    { n: "04", title: "Sport & Lifestyle", desc: "Krachtige sites voor sportclubs, fitnessstudio's, fysio's en lifestyle-ondernemers in de regio." },
  ],
  industries: ["Industrie", "Logistiek", "Retail", "Horeca", "Bouw", "Mobiliteit", "Sport", "Zorg", "Onderwijs", "Vastgoed", "Techniek"],
  faq: [
    { q: "Werken jullie voor heel Sittard-Geleen?", a: "Ja, inclusief Born, Limbricht, Munstergeleen en omliggende dorpen. We komen graag bij je langs voor de intake — overal binnen 30 minuten." },
    { q: "Hebben jullie ervaring met B2B-industrie?", a: "Zeker. We bouwen technische B2B sites voor toeleveranciers en industriële dienstverleners. Helder, vakkundig en gericht op kwalitatieve leads." },
    { q: "Kunnen jullie ook meertalig bouwen voor Duitse klanten?", a: "Ja. Met VDL Nedcar en grensbedrijven is Duitse content vaak gewenst. We bouwen meertalig (NL/DE) of volledig Duits indien nodig." },
    { q: "Wat als ik al een website heb?", a: "We doen ook redesigns en migraties. We analyseren wat werkt, wat niet, en bouwen vanaf daar verder — zonder verlies van SEO-waarde." },
    { q: "Doen jullie ook SEO of online marketing voor bedrijven in Sittard-Geleen?", a: "Ja. Via Dynique Digital verzorgen we ook SEO en online marketing — als losse dienst of als aanvulling op je website. Neem gerust contact op om te kijken wat past." },
  ],
  relatedRegionLink: { label: "bekijk onze pagina over maatwerk software voor heel Limburg", href: "/diensten/processen/limburg" },
};

export default function SittardPage() {
  return <CityPage data={data} />;
}
