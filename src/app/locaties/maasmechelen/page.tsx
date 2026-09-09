import type { Metadata } from "next";
import CityPage, { CityData } from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Maatwerk software & webdesign Maasmechelen | Dynique",
  description: "Maatwerk software en webdesign voor bedrijven in Maasmechelen en Belgisch Limburg. Grensoverschrijdend werken vanuit Vaals, heldere btw-afspraken, vaste prijs. Gratis kennismaking.",
  alternates: { canonical: "https://dynique.nl/locaties/maasmechelen", languages: { "nl-BE": "https://dynique.nl/locaties/maasmechelen" } },
  openGraph: {
    title: "Maatwerk software & webdesign Maasmechelen | Dynique",
    description: "Grensoverschrijdend webdesign en maatwerk software voor Maasmechelen en Belgisch Limburg. Snel, persoonlijk, vaste prijs.",
    url: "https://dynique.nl/locaties/maasmechelen",
    type: "website",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Maatwerk software & webdesign in Maasmechelen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maatwerk software & webdesign Maasmechelen | Dynique",
    description: "Grensoverschrijdend webdesign en maatwerk software voor Maasmechelen en Belgisch Limburg. Snel, persoonlijk, vaste prijs.",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Maatwerk software & webdesign in Maasmechelen" }],
  },
};

const data: CityData = {
  city: "Maasmechelen",
  cityShort: "Maasmechelen",
  region: "Belgisch Limburg",
  tagline: "Cross-border maatwerk software & webdesign voor Maasmechelen en Belgisch Limburg.",
  intro: "Maasmechelen ligt letterlijk aan de Maas, op steenworp afstand van de Nederlandse grens — dichterbij Vaals dan de meeste andere Belgische Limburgse steden. De gemeente groeide van mijnbouw (de mijn van Eisden, actief vanaf 1923) naar een economie rond retail en toerisme, met Maasmechelen Village als internationale trekpleister. Wij bouwen websites en maatwerk software voor Maasmechelense ondernemers die met een Nederlandse partij willen samenwerken, zonder taalbarrière of omweg.",
  vibe: "De gemeente Maasmechelen is een samenvoeging van negen voormalige deelgemeenten (waaronder Mechelen-aan-de-Maas en Eisden) langs de Maas. Waar de mijn van Eisden ooit de motor van de lokale economie was, trekt vandaag Maasmechelen Village — een van de bekendste designer-outlets van Europa — bezoekers uit heel Nederland, België en daarbuiten. Die combinatie van retail, toerisme en een sterke grensligging maakt Maasmechelen anders dan een gemiddelde Limburgse gemeente: veel ondernemers hier bedienen bewust een grensoverschrijdend publiek, niet alleen de lokale markt.",
  accent: "#38bdf8",
  postal: "3630",
  travelTime: "Maastricht 20 min · Vaals 31 min",
  highlights: [
    { n: "01", title: "Retail & Outlet", desc: "Sites en webshops voor retailondernemers rond Maasmechelen Village, gebouwd voor een internationaal, grensoverschrijdend publiek." },
    { n: "02", title: "Toerisme & Vrije Tijd", desc: "Boekingssystemen en websites voor de horeca- en toeristische sector die met Maasmechelen Village meegroeit." },
    { n: "03", title: "Logistiek & Industrie", desc: "Systemen op maat voor bedrijven die voortbouwen op het industriële verleden van de regio, langs de Maas en dicht bij de grens." },
    { n: "04", title: "Cross-border Business", desc: "Vanwege de ligging vlak bij de grens werken veel Maasmechelense ondernemers al grensoverschrijdend: heldere afspraken over btw-verlegging en facturatie, geen verrassingen achteraf." },
  ],
  industries: ["Retail", "Toerisme", "Horeca", "Logistiek", "Industrie", "Zorg", "Bouw", "Dienstverlening", "Vastgoed", "Sport & Vrije tijd"],
  faq: [
    { q: "Werken jullie ook voor bedrijven in Maasmechelen en Belgisch Limburg?", a: "Zeker. We werken al met bedrijven in heel Nederland en België — Maasmechelen en Belgisch Limburg horen daar gewoon bij, zowel op afstand als bij je op locatie." },
    { q: "Hoe zit het met facturatie tussen Nederland en België?", a: "Zo dicht bij de grens is grensoverschrijdend zakendoen in Maasmechelen al bijna de normaalste zaak van de wereld. Voor B2B-diensten werken we met btw-verlegging (intracommunautaire dienst): standaard binnen de EU, en we regelen dat administratief correct van begin af aan." },
    { q: "Hoe ver reizen jullie voor een fysieke afspraak in Maasmechelen?", a: "Vanaf ons kantoor in Vaals is Maasmechelen ongeveer 31 minuten rijden — een van de dichtstbijzijnde Belgische gemeenten die we bedienen. Voor een intake of kennismaking komen we graag langs." },
    { q: "Bouwen jullie ook websites voor een internationaal publiek, gezien de ligging bij Maasmechelen Village?", a: "Ja. Voor retail- en toerismebedrijven die een grensoverschrijdend publiek bedienen, bouwen we regelmatig meertalige sites — Nederlands en Engels standaard, Duits waar dat past bij jullie publiek." },
  ],
};

export default function MaasmechelenPage() {
  return <CityPage data={data} />;
}
