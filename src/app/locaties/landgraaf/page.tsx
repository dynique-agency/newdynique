import type { Metadata } from "next";
import CityPage, { CityData } from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Maatwerk software & webdesign Landgraaf | Dynique",
  description: "Maatwerk software en webdesign voor Landgraaf — van de 200+ bedrijven op de lokale bedrijventerreinen tot de toeristische trekpleisters rond Pinkpop en SnowWorld. Gratis procesanalyse op locatie.",
  alternates: { canonical: "https://dynique.nl/locaties/landgraaf" },
  openGraph: {
    title: "Maatwerk software & webdesign Landgraaf | Dynique",
    description: "Maatwerk software en webdesign voor Landgraaf. Persoonlijk, vakkundig, vaste prijs.",
    url: "https://dynique.nl/locaties/landgraaf",
    type: "website",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Maatwerk software in Landgraaf" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maatwerk software & webdesign Landgraaf | Dynique",
    description: "Maatwerk software en webdesign voor Landgraaf. Persoonlijk, vakkundig, vaste prijs.",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Maatwerk software in Landgraaf" }],
  },
};

const data: CityData = {
  city: "Landgraaf",
  cityShort: "Landgraaf",
  region: "Parkstad Limburg",
  tagline: "Maatwerk software en webdesign voor Landgraaf.",
  intro: "Landgraaf is meer dan Pinkpop en SnowWorld alleen: de gemeente telt drie bedrijventerreinen met ruim 200 gevestigde bedrijven en bijna 5.000 banen. Wij bouwen maatwerk software en websites voor ondernemers in Landgraaf — van het lokale MKB op de bedrijventerreinen tot de toeristische en vrijetijdssector die de gemeente op de kaart zet.",
  vibe: "Landgraaf combineert een stevige MKB-basis met een paar landelijk bekende publiekstrekkers: het jaarlijkse Pinkpop-festival op Megaland (goed voor zo'n 12 miljoen euro economische spin-off), de grootste indoor-skibaan van de wereld bij SnowWorld, en attractiepark Mondo Verde. Die combinatie van lokale bedrijvigheid en publiekstrekkende vrijetijdssector vraagt om websites en systemen die allebei aanspreken — praktisch voor de ondernemer, aantrekkelijk voor de bezoeker.",
  accent: "#10b981",
  postal: "6370 — 6374",
  travelTime: "Vaals 24 min",
  highlights: [
    { n: "01", title: "MKB & Bedrijventerreinen", desc: "Websites en bedrijfssoftware voor ondernemers op de drie bedrijventerreinen van Landgraaf." },
    { n: "02", title: "Toerisme & Vrije Tijd", desc: "Aantrekkelijke, conversiegerichte sites voor de horeca- en vrijetijdssector rond Landgraafs publiekstrekkers." },
    { n: "03", title: "Retail & Horeca", desc: "Webshops en winkelsites voor lokale retailers en horecaondernemers in Landgraaf." },
    { n: "04", title: "Bouw & Installatie", desc: "Conversiegerichte sites voor aannemers en installateurs, met portfolio-galerie en offerte-flow." },
  ],
  industries: ["Bouw", "Installatie", "Retail", "Horeca", "Zorg", "Toerisme", "Dienstverlening"],
  faq: [
    { q: "Werken jullie voor het lokale MKB in Landgraaf?", a: "Ja, dat is een groot deel van waar we voor werken — van kleine eenmanszaken tot bedrijven op de lokale bedrijventerreinen." },
    { q: "Hoe ver reizen jullie voor een fysieke afspraak in Landgraaf?", a: "Vanaf ons kantoor in Vaals is dat ongeveer 24 minuten rijden. Voor een intake of kennismaking komen we graag langs." },
    { q: "Bouwen jullie ook websites voor horeca of vrijetijdsbedrijven?", a: "Zeker. Reserveringssystemen, aantrekkelijke fotografie/video-integratie en heldere informatie voor bezoekers — dat is precies waar we sterk in zijn." },
    { q: "Wat als ik al een website heb die aan vervanging toe is?", a: "We doen ook redesigns. We kijken wat al werkt, wat niet, en bouwen vanaf daar verder — zonder verlies van bestaande SEO-waarde." },
  ],
  relatedRegionLink: { label: "bekijk onze pagina over maatwerk software voor heel Limburg", href: "/diensten/processen/limburg" },
};

export default function LandgraafPage() {
  return <CityPage data={data} />;
}
