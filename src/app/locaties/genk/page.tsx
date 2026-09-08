import type { Metadata } from "next";
import CityPage, { CityData } from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Maatwerk software & webdesign Genk | Dynique",
  description: "Maatwerk software en webdesign voor bedrijven in Genk en Belgisch Limburg. Grensoverschrijdend werken vanuit Vaals, heldere btw-afspraken, vaste prijs. Gratis kennismaking.",
  alternates: { canonical: "https://dynique.nl/locaties/genk" },
  openGraph: {
    title: "Maatwerk software & webdesign Genk | Dynique",
    description: "Grensoverschrijdend webdesign en maatwerk software voor Genk en Belgisch Limburg. Snel, persoonlijk, vaste prijs.",
    url: "https://dynique.nl/locaties/genk",
    type: "website",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Maatwerk software & webdesign in Genk" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maatwerk software & webdesign Genk | Dynique",
    description: "Grensoverschrijdend webdesign en maatwerk software voor Genk en Belgisch Limburg. Snel, persoonlijk, vaste prijs.",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Maatwerk software & webdesign in Genk" }],
  },
};

const data: CityData = {
  city: "Genk",
  cityShort: "Genk",
  region: "Belgisch Limburg",
  tagline: "Cross-border maatwerk software & webdesign voor Genk en Belgisch Limburg.",
  intro: "Genk herbouwde zichzelf vanuit de as van de mijnbouw en de auto-industrie tot een stad van energie-innovatie, creatieve bedrijvigheid en een van de meest diverse gemeenschappen van Vlaanderen. Wij bouwen websites en maatwerk software voor Genkse ondernemers die met een Nederlandse partij willen samenwerken — van Thor Park tot Genk-Zuid, zonder taalbarrière of omweg.",
  vibe: "Waar de koolmijnen van Winterslag en Waterschei ooit het hart van de stad vormden, zit nu C-mine vol creatieve bedrijven en events, en groeit Thor Park (93 hectare, op de voormalige mijnsite Waterschei) uit tot een kenniscentrum voor energietransitie en smart manufacturing. Genk-Zuid is met 1.400 hectare het grootste bedrijventerrein van Vlaanderen na de zeehavens — logistiek en industrie op grote schaal. Met meer dan honderd nationaliteiten en meer dan de helft van de inwoners met een andere herkomst is Genk bovendien een van de meest diverse steden van België — een internationale mentaliteit die goed past bij ondernemers die verder kijken dan de eigen grens.",
  accent: "#f59e0b",
  postal: "3600",
  travelTime: "Hasselt 20 min · Vaals 40 min",
  highlights: [
    { n: "01", title: "Energie & Smart Industry", desc: "Systemen op maat voor bedrijven rond Thor Park, actief in energietransitie, smart manufacturing en smart city-toepassingen." },
    { n: "02", title: "Creatieve Sector", desc: "Moderne sites en platforms voor de creatieve bedrijven en organisaties rond C-mine, de voormalige mijn van Winterslag." },
    { n: "03", title: "Logistiek & Industrie", desc: "Maatwerk software voor logistieke en industriële bedrijven op Genk-Zuid, het grootste bedrijventerrein van Vlaanderen na de zeehavens." },
    { n: "04", title: "Internationaal Ondernemerschap", desc: "Websites en systemen die meertalig en internationaal denken, passend bij een van de meest diverse steden van België." },
  ],
  industries: ["Energie", "Smart Manufacturing", "Logistiek", "Industrie", "Creatieve sector", "Techniek", "Zorg", "Bouw", "Retail", "Dienstverlening"],
  faq: [
    { q: "Werken jullie ook voor bedrijven in Genk en Belgisch Limburg?", a: "Zeker. We werken al met bedrijven in heel Nederland en België — Genk en Belgisch Limburg horen daar gewoon bij, zowel op afstand als bij je op locatie." },
    { q: "Hoe zit het met facturatie tussen Nederland en België?", a: "Voor grensoverschrijdende B2B-diensten werken we met btw-verlegging (intracommunautaire dienst) — standaard binnen de EU, en we regelen dat administratief correct van begin af aan." },
    { q: "Hoe ver reizen jullie voor een fysieke afspraak in Genk?", a: "Vanaf ons kantoor in Vaals is Genk ongeveer 40 minuten rijden. Voor een intake of kennismaking komen we graag langs, of dat nu op Thor Park, bij C-mine of op Genk-Zuid is." },
    { q: "Werken jullie ook in het Engels, gezien de internationale gemeenschap in Genk?", a: "Absoluut. We werken regelmatig volledig in het Engels — projectcommunicatie, documentatie en oplevering kunnen allemaal in het Engels, iets wat goed past bij Genk's internationale karakter." },
  ],
};

export default function GenkPage() {
  return <CityPage data={data} />;
}
