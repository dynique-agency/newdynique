import type { Metadata } from "next";
import CityPage, { CityData } from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Website laten maken Maastricht | Dynique — Webdesign bureau",
  description: "Premium website laten maken in Maastricht. Lokaal webdesign bureau voor ZZP en MKB. Binnen 7–14 dagen live, vaste prijs, persoonlijk contact.",
  alternates: { canonical: "https://dynique.nl/locaties/maastricht" },
  openGraph: {
    title: "Website laten maken Maastricht | Dynique",
    description: "Premium webdesign in Maastricht. Snel, persoonlijk en met een vaste prijs.",
    url: "https://dynique.nl/locaties/maastricht",
    type: "website",
  },
};

const data: CityData = {
  city: "Maastricht",
  cityShort: "Maastricht",
  region: "Zuid-Limburg",
  tagline: "Premium webdesign in de hoofdstad van Limburg.",
  intro: "Een stad waar erfgoed, gastronomie en internationale ondernemers samenkomen. Wij bouwen websites die die elegantie vertalen naar het digitale. Van Wyck tot Sint Pieter, van Vrijthof tot Sphinxkwartier.",
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
    { q: "Hoe snel kan mijn website in Maastricht live?", a: "Voor een standaard website rekenen we 7–14 dagen. Voor complexere projecten (e-commerce, meertalig, koppelingen) plannen we 3–6 weken. Altijd met een vaste einddatum." },
  ],
};

export default function MaastrichtPage() {
  return <CityPage data={data} />;
}
