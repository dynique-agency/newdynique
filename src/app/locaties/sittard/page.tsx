import type { Metadata } from "next";
import CityPage, { CityData } from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Website laten maken Sittard-Geleen | Dynique — Webdesign bureau",
  description: "Premium website laten maken in Sittard, Geleen of Born. Lokaal webdesign bureau voor ZZP en MKB. Binnen 7–14 dagen live, vaste prijs.",
  alternates: { canonical: "https://dynique.nl/locaties/sittard" },
  openGraph: {
    title: "Website laten maken Sittard-Geleen | Dynique",
    description: "Premium webdesign in Sittard, Geleen en Born. Snel, persoonlijk, vaste prijs.",
    url: "https://dynique.nl/locaties/sittard",
    type: "website",
  },
};

const data: CityData = {
  city: "Sittard",
  cityShort: "Sittard",
  region: "Westelijke Mijnstreek",
  tagline: "Webdesign voor Sittard, Geleen en Born.",
  intro: "Een regio die wereldspelers herbergt: Chemelot, VDL Nedcar en de hele toeleveringsketen daarom heen. Wij bouwen websites die kwaliteit uitstralen — voor toeleveranciers, lokaal MKB, retail in de Sittardse binnenstad en ondernemers in Geleen en Born.",
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
  ],
};

export default function SittardPage() {
  return <CityPage data={data} />;
}
