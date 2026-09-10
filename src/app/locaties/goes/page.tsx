import type { Metadata } from "next";
import CityPage, { CityData } from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Maatwerk software Goes | Dynique",
  description: "Maatwerk software voor bedrijven in Goes en Zuid-Beveland — agrifood, retail en lokaal MKB. Digitale intake, vaste prijs, ook volledig op afstand mogelijk.",
  alternates: { canonical: "https://dynique.nl/locaties/goes" },
  openGraph: {
    title: "Maatwerk software Goes | Dynique",
    description: "Maatwerk software voor bedrijven in Goes en Zuid-Beveland. Digitale intake, vaste prijs, op afstand of persoonlijk.",
    url: "https://dynique.nl/locaties/goes",
    type: "website",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Maatwerk software in Goes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maatwerk software Goes | Dynique",
    description: "Maatwerk software voor bedrijven in Goes en Zuid-Beveland. Digitale intake, vaste prijs, op afstand of persoonlijk.",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Maatwerk software in Goes" }],
  },
};

const data: CityData = {
  city: "Goes",
  cityShort: "Goes",
  region: "Zuid-Beveland",
  tagline: "Maatwerk software voor bedrijven in Goes en Zuid-Beveland.",
  intro: "Goes is het regionale hart van Zuid-Beveland: winkelstad voor het hele eiland en thuisbasis van het Landbouwcentrum Zeeland, in een streek die landelijk voorop loopt in fruitteelt. Wij bouwen maatwerk software en websites voor ondernemers in Goes die vastlopen in standaardpakketten. De intake doen we digitaal; voor grotere trajecten komen we daarna graag persoonlijk langs.",
  vibe: "Als enige stad op Zuid- en Noord-Beveland vervult Goes een centrumfunctie voor de hele regio — winkelend publiek, dienstverlening en bedrijvigheid komen hier samen. Tegelijk is de streek eromheen sterk agrarisch: akkerbouw, fruitteelt en agrifood zijn de economische ruggengraat, met het Landbouwcentrum Zeeland in Goes zelf. Die combinatie van regionaal centrum en agrarisch achterland vraagt om praktische, betrouwbare software — voor de winkelier in de binnenstad net zo goed als voor het agrarisch bedrijf net buiten de stad.",
  accent: "#4ade80",
  postal: "4461 — 4469",
  travelTime: "Vaals ± 2u10",
  highlights: [
    { n: "01", title: "Agrifood & Fruitteelt", desc: "Maatwerk software voor agrarische bedrijven en agrifoodondernemingen in een regio die landelijk voorop loopt in fruitteelt." },
    { n: "02", title: "Retail & Binnenstad", desc: "Converterende websites en webshops voor winkeliers en dienstverleners in de Goese binnenstad, het winkelhart van Zuid-Beveland." },
    { n: "03", title: "Regionale Dienstverlening", desc: "Websites en systemen voor bedrijven die vanuit Goes de hele regio Zuid- en Noord-Beveland bedienen." },
    { n: "04", title: "Lokaal MKB", desc: "Heldere, snel gevonden websites voor het brede MKB in en rond Goes." },
  ],
  industries: ["Landbouw", "Retail", "Zorg", "Bouw", "Toerisme", "Dienstverlening"],
  faq: [
    { q: "Werken jullie ook voor bedrijven in Goes, terwijl jullie in Limburg zitten?", a: "Ja. We werken in heel Nederland en België. Voor een website of een gerichte tool doen we het volledige traject op afstand — intake, ontwerp en oplevering via videobellen en online previews. Bij een groter maatwerktraject starten we ook digitaal, en plannen we een bezoek in zodra dat voor het project zinvol is." },
    { q: "Hoe ver reizen jullie voor een fysieke afspraak in Goes?", a: "Vanaf ons kantoor in Vaals is dat ruim twee uur rijden. Voor kleinere projecten werken we daarom volledig op afstand. Voor grotere trajecten waar een bezoek echt waarde toevoegt, plannen we die na de digitale intake graag in." },
    { q: "Bouwen jullie ook software voor agrarische bedrijven?", a: "Ja. Denk aan planning- en voorraadsystemen, koppelingen tussen bestaande software, of een tool die specifiek is toegesneden op een agrarisch of agrifoodbedrijf — maatwerk in plaats van een generiek pakket dat net niet past." },
    { q: "Kunnen jullie ook een webshop bouwen voor een winkel in de Goese binnenstad?", a: "Zeker. Van een bedrijfswebsite tot een volledige webshop met bestel- en betaalproces — we bouwen wat past bij een winkel of dienstverlener die zowel lokaal klanten trekt als online zichtbaar wil zijn." },
  ],
};

export default function GoesPage() {
  return <CityPage data={data} />;
}
