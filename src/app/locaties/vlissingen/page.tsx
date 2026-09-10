import type { Metadata } from "next";
import CityPage, { CityData } from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Maatwerk software Vlissingen | Dynique",
  description: "Maatwerk software voor bedrijven in Vlissingen en de Zeeuwse havenregio — maritiem, industrie en logistiek rond North Sea Port. Digitale intake, vaste prijs.",
  alternates: { canonical: "https://dynique.nl/locaties/vlissingen" },
  openGraph: {
    title: "Maatwerk software Vlissingen | Dynique",
    description: "Maatwerk software voor bedrijven in Vlissingen en de Zeeuwse havenregio. Digitale intake, vaste prijs, op afstand of persoonlijk.",
    url: "https://dynique.nl/locaties/vlissingen",
    type: "website",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Maatwerk software in Vlissingen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maatwerk software Vlissingen | Dynique",
    description: "Maatwerk software voor bedrijven in Vlissingen en de Zeeuwse havenregio. Digitale intake, vaste prijs, op afstand of persoonlijk.",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Maatwerk software in Vlissingen" }],
  },
};

const data: CityData = {
  city: "Vlissingen",
  cityShort: "Vlissingen",
  region: "Zeeland",
  tagline: "Maatwerk software voor bedrijven in Vlissingen en de Zeeuwse havenregio.",
  intro: "Vlissingen draait op de haven: scheepsbouw, industrie en logistiek rond North Sea Port, met zo'n tweehonderd bedrijven in het havengebied. Wij bouwen maatwerk software en websites voor Zeeuwse ondernemers die vastlopen in standaardpakketten. De intake doen we digitaal; voor grotere trajecten komen we daarna graag persoonlijk langs.",
  vibe: "Weinig steden zijn zo met hun haven vergroeid als Vlissingen. Scheepsbouw is hier geen historisch decor maar actuele bedrijvigheid, en North Sea Port ontwikkelt zich verder als logistieke en industriële hub — met een groeiende rol in de energietransitie. Voor bedrijven in die wereld — van toeleveranciers tot maritieme dienstverleners — bouwen we systemen die met hun processen meegroeien, en websites die serieus overkomen bij internationale opdrachtgevers.",
  accent: "#22d3ee",
  postal: "4381 — 4389",
  travelTime: "Vaals ± 2u25",
  highlights: [
    { n: "01", title: "Maritiem & Scheepsbouw", desc: "Websites en bedrijfssoftware voor bedrijven in en rond de Vlissingse scheepswerven en maritieme toeleveranciers." },
    { n: "02", title: "Haven, Industrie & Logistiek", desc: "Maatwerk systemen voor bedrijven in het havengebied van North Sea Port — van planning tot koppelingen tussen bestaande software." },
    { n: "03", title: "Energie & Duurzaamheid", desc: "Digitale ondersteuning voor bedrijven die meebewegen met de energietransitie in de havenregio." },
    { n: "04", title: "Internationale Klanten", desc: "Engelstalige of meertalige websites voor bedrijven met internationale opdrachtgevers en toeleveranciers." },
  ],
  industries: ["Logistiek", "Industrie", "Zorg", "Bouw", "Retail", "Toerisme", "Dienstverlening"],
  faq: [
    { q: "Werken jullie ook voor bedrijven in Vlissingen, terwijl jullie in Limburg zitten?", a: "Ja. We werken in heel Nederland en België. Voor een website of een gerichte tool doen we het volledige traject op afstand — intake, ontwerp en oplevering via videobellen en online previews. Bij een groter maatwerktraject starten we ook digitaal, en plannen we een bezoek in zodra dat voor het project zinvol is." },
    { q: "Hoe ver reizen jullie voor een fysieke afspraak in Vlissingen?", a: "Vanaf ons kantoor in Vaals is dat ruim twee uur rijden — de andere kant van het land. Voor kleinere projecten werken we daarom volledig op afstand. Voor grotere trajecten waar een bezoek echt waarde toevoegt, plannen we die na de digitale intake graag in." },
    { q: "Bouwen jullie software voor de maritieme of havensector?", a: "We hebben geen kant-en-klaar maritiem systeem, maar juist dat maakt maatwerk waardevol: we bouwen software rond hoe jouw bedrijf werkt, bijvoorbeeld voor planning, orderopvolging of koppelingen tussen bestaande pakketten — niet andersom." },
    { q: "Kunnen jullie ook Engelstalige websites bouwen voor internationale klanten?", a: "Ja, regelmatig zelfs. Voor bedrijven met internationale toeleveranciers of opdrachtgevers bouwen we volledig Engelstalige of meertalige sites, inclusief projectcommunicatie in het Engels." },
  ],
};

export default function VlissingenPage() {
  return <CityPage data={data} />;
}
