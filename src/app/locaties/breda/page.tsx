import type { Metadata } from "next";
import CityPage, { CityData } from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Maatwerk software Breda | Dynique",
  description: "Maatwerk software voor bedrijven in Breda en West-Brabant — logistiek, agrofood, techniek en creatieve sector. Digitale intake, vaste prijs, ook volledig op afstand mogelijk.",
  alternates: { canonical: "https://dynique.nl/locaties/breda" },
  openGraph: {
    title: "Maatwerk software Breda | Dynique",
    description: "Maatwerk software voor bedrijven in Breda en West-Brabant. Digitale intake, vaste prijs, op afstand of persoonlijk.",
    url: "https://dynique.nl/locaties/breda",
    type: "website",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Maatwerk software in Breda" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maatwerk software Breda | Dynique",
    description: "Maatwerk software voor bedrijven in Breda en West-Brabant. Digitale intake, vaste prijs, op afstand of persoonlijk.",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Maatwerk software in Breda" }],
  },
};

const data: CityData = {
  city: "Breda",
  cityShort: "Breda",
  region: "West-Brabant",
  tagline: "Maatwerk software voor bedrijven in Breda en West-Brabant.",
  intro: "West-Brabant draait op logistiek, agrofood en een groeiende technische en creatieve sector — van de robotica-cluster op Slingerweg tot de Creative District op De Strip. Wij bouwen maatwerk software en websites voor Bredase ondernemers die vastlopen in standaardpakketten. De intake doen we digitaal; voor grotere trajecten komen we daarna graag persoonlijk langs.",
  vibe: "Breda combineert grootschalige logistiek en agrofood met een opvallend sterke maakindustrie: op Slingerweg groeit een robotica-cluster van innovatieve makers, en De Strip ontwikkelt zich tot een Creative District voor culturele en creatieve ondernemers. Die combinatie van schaal en ambacht vraagt om software die meegroeit — geen kant-en-klaar pakket, maar een systeem dat past bij hoe een logistiek bedrijf, een technisch makersbedrijf of een creatief bureau in Breda daadwerkelijk werkt.",
  accent: "#6366f1",
  postal: "4811 — 4839",
  travelTime: "Vaals ± 1u55",
  highlights: [
    { n: "01", title: "Logistiek & Agrofood", desc: "Systemen op maat voor logistieke dienstverleners en agrofoodbedrijven in West-Brabant, een van de belangrijkste sectoren van de regio." },
    { n: "02", title: "Techniek & Robotica", desc: "Websites en bedrijfssoftware voor makers en technische bedrijven rond de Slingerweg-cluster." },
    { n: "03", title: "Creatieve Sector", desc: "Portfolio- en platformsites voor creatieve ondernemers en culturele makers rond De Strip." },
    { n: "04", title: "Kennisdiensten & MKB", desc: "Heldere, converterende websites voor kennisintensieve dienstverleners en lokaal MKB in Breda." },
  ],
  industries: ["Logistiek", "Techniek", "Creatieve sector", "Zorg", "Bouw", "Retail", "Dienstverlening"],
  faq: [
    { q: "Werken jullie ook voor bedrijven in Breda, terwijl jullie in Limburg zitten?", a: "Ja. We werken in heel Nederland en België. Voor een website of een gerichte tool doen we het volledige traject op afstand — intake, ontwerp en oplevering via videobellen en online previews. Bij een groter maatwerktraject starten we ook digitaal, en plannen we een bezoek in zodra dat voor het project zinvol is." },
    { q: "Hoe ver reizen jullie voor een fysieke afspraak in Breda?", a: "Vanaf ons kantoor in Vaals is dat ongeveer twee uur rijden. Voor kleinere projecten is dat geen probleem, want dan werken we volledig op afstand. Voor grotere trajecten waar een bezoek echt waarde toevoegt, komen we na de digitale intake graag naar Breda toe." },
    { q: "Kunnen jullie ook software bouwen voor logistieke of agrofoodbedrijven?", a: "Zeker, dat is precies het type maatwerk waar we goed in zijn: planning- en voorraadsystemen, koppelingen tussen bestaande software, en tools die aansluiten op logistieke of agrarische processen in plaats van die processen te forceren in een generiek pakket." },
    { q: "Werken jullie ook samen met technische makers of robotica-bedrijven?", a: "Ja, met plezier. Voor technische en creatieve bedrijven bouwen we vaak zowel de website als de interne tools — bijvoorbeeld een projectplanning, een klantportaal of een systeem dat offertes en facturen aan elkaar koppelt." },
  ],
};

export default function BredaPage() {
  return <CityPage data={data} />;
}
