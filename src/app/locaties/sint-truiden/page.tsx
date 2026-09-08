import type { Metadata } from "next";
import CityPage, { CityData } from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Maatwerk software & webdesign Sint-Truiden | Dynique",
  description: "Maatwerk software en webdesign voor bedrijven in Sint-Truiden en de Limburgse fruitstreek. Grensoverschrijdend werken vanuit Vaals, heldere btw-afspraken, vaste prijs. Gratis kennismaking.",
  alternates: { canonical: "https://dynique.nl/locaties/sint-truiden" },
  openGraph: {
    title: "Maatwerk software & webdesign Sint-Truiden | Dynique",
    description: "Grensoverschrijdend webdesign en maatwerk software voor Sint-Truiden en de Limburgse fruitstreek. Snel, persoonlijk, vaste prijs.",
    url: "https://dynique.nl/locaties/sint-truiden",
    type: "website",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Maatwerk software & webdesign in Sint-Truiden" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maatwerk software & webdesign Sint-Truiden | Dynique",
    description: "Grensoverschrijdend webdesign en maatwerk software voor Sint-Truiden en de Limburgse fruitstreek. Snel, persoonlijk, vaste prijs.",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Maatwerk software & webdesign in Sint-Truiden" }],
  },
};

const data: CityData = {
  city: "Sint-Truiden",
  cityShort: "Sint-Truiden",
  region: "Limburgse fruitstreek",
  tagline: "Cross-border maatwerk software & webdesign voor de Limburgse fruitstreek.",
  intro: "Sint-Truiden is het hart van Vochtig-Haspengouw, al generaties lang de fruitstreek van Limburg — boomgaarden zo ver het oog reikt, en een economie die daarop leunt: fruitteelt, verwerking en alles daaromheen. Wij bouwen websites en maatwerk software voor Truiense ondernemers die met een Nederlandse partij willen samenwerken, zonder taalbarrière of omweg.",
  vibe: "Waar andere Limburgse steden om mijnbouw of industrie draaien, draait Sint-Truiden om fruit. PCFruit, een internationaal erkend onderzoekscentrum voor fruitteelt met zo'n honderd medewerkers en 58 hectare proefboomgaard, zit middenin de stad — een teken van hoe serieus de sector hier genomen wordt. Van teler tot verwerker tot handel: bedrijven in de fruitstreek hebben vaak te maken met seizoensgebonden processen, voorraad die niet wacht, en logistiek die op het juiste moment moet kloppen. Precies het soort proces waar een standaardpakket vaak tekortschiet.",
  accent: "#84cc16",
  postal: "3800",
  travelTime: "Maastricht 55 min · Vaals 69 min",
  highlights: [
    { n: "01", title: "Fruitteelt & Verwerking", desc: "Software op maat voor telers en verwerkers — van oogstregistratie tot voorraadbeheer, afgestemd op een seizoensgebonden proces." },
    { n: "02", title: "Handel & Logistiek", desc: "Systemen die planning, voorraad en levering samenbrengen voor bedrijven die fruit en agrarische producten verhandelen of vervoeren." },
    { n: "03", title: "Horeca & Streekproducten", desc: "Websites en webshops voor horeca en producenten die de fruitstreek als identiteit gebruiken — van cider tot streekgebonden lekkernijen." },
    { n: "04", title: "Cross-border Business", desc: "Voor telers en handelaren in de fruitstreek die ook over de grens verkopen of inkopen: heldere afspraken over btw-verlegging en facturatie, geen verrassingen achteraf." },
  ],
  industries: ["Landbouw & Fruitteelt", "Voedselverwerking", "Logistiek", "Handel", "Horeca", "Zorg", "Bouw", "Retail", "Dienstverlening", "Onderwijs"],
  faq: [
    { q: "Werken jullie ook voor bedrijven in Sint-Truiden en de fruitstreek?", a: "Zeker. We werken al met bedrijven in heel Nederland en België — Sint-Truiden en de Limburgse fruitstreek horen daar gewoon bij, zowel op afstand als bij je op locatie." },
    { q: "Hoe zit het met facturatie tussen Nederland en België?", a: "Voor Truiense telers en handelaren die ook over de grens verkopen of inkopen, werken we met btw-verlegging (intracommunautaire dienst): standaard binnen de EU, en we regelen dat administratief correct van begin af aan, zodat de administratie nooit de reden is dat een deal niet doorgaat." },
    { q: "Hoe ver reizen jullie voor een fysieke afspraak in Sint-Truiden?", a: "Vanaf ons kantoor in Vaals is Sint-Truiden ongeveer 69 minuten rijden, iets verder dan onze andere Limburgse locaties. Voor een intake of kennismaking komen we graag langs." },
    { q: "Snappen jullie de seizoensgebonden kant van de fruitsector?", a: "We beginnen elk traject met een gratis procesanalyse op locatie, juist omdat een seizoensgebonden proces andere eisen stelt dan een kantoorproces — piekmomenten, oogstplanning, voorraad die niet kan wachten. Daar bouwen we het systeem op." },
  ],
};

export default function SintTruidenPage() {
  return <CityPage data={data} />;
}
