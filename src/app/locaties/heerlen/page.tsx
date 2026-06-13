import type { Metadata } from "next";
import CityPage, { CityData } from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Website laten maken Heerlen | Dynique — Webdesign bureau",
  description: "Premium website laten maken in Heerlen. Lokaal webdesign bureau voor ZZP en MKB in Parkstad. Binnen 7–14 dagen live, vaste prijs.",
  alternates: { canonical: "https://dynique.nl/locaties/heerlen" },
  openGraph: {
    title: "Website laten maken Heerlen | Dynique",
    description: "Premium webdesign in Heerlen en Parkstad. Snel, persoonlijk, vaste prijs.",
    url: "https://dynique.nl/locaties/heerlen",
    type: "website",
  },
};

const data: CityData = {
  city: "Heerlen",
  cityShort: "Heerlen",
  region: "Parkstad Limburg",
  tagline: "Webdesign voor het hart van Parkstad.",
  intro: "Heerlen is in beweging: van industriestad naar creatieve hub. Wij bouwen websites die meebewegen met die transformatie — voor zorgaanbieders, retailers in het centrum, technische bedrijven op Avantis en de groeiende creatieve sector.",
  vibe: "Parkstad heeft karakter: nuchter, ondernemend en met een eigen identiteit. Geen poespas, wel kwaliteit. Onze klanten in Heerlen waarderen heldere afspraken, korte lijnen en een website die gewoon werkt. We kennen het verschil tussen het Schinkelkwartier, de Bongerd en Heerlerheide — en zorgen dat jouw website precies de juiste doelgroep aanspreekt.",
  accent: "#a78bfa",
  postal: "6411 — 6446",
  travelTime: "Maastricht 20 min · Aken 25 min",
  highlights: [
    { n: "01", title: "Zorg & Welzijn", desc: "Toegankelijke websites voor zorgaanbieders, praktijken en welzijnsorganisaties in en rond Heerlen." },
    { n: "02", title: "Technologie & Industrie", desc: "Professionele B2B websites voor technische bedrijven, ICT en industrie op bedrijventerreinen rond Heerlen." },
    { n: "03", title: "Retail & Centrum", desc: "Webshops en winkelsites voor ondernemers in het Heerlense centrum en in Parkstad Limburg Stadion-omgeving." },
    { n: "04", title: "Bouw & Vakmanschap", desc: "Conversiegerichte sites voor aannemers, installateurs en specialisten, met portfolio-galerie en offerte-flow." },
  ],
  industries: ["Zorg", "Bouw", "Installatie", "Technologie", "Retail", "Horeca", "Onderwijs", "Sport", "Mobiliteit", "Welzijn", "Vastgoed"],
  faq: [
    { q: "Werken jullie voor bedrijven in heel Parkstad?", a: "Ja. We werken voor klanten in Heerlen, Kerkrade, Landgraaf, Brunssum en de omliggende gemeenten. De korte afstanden in Parkstad maken persoonlijk contact eenvoudig." },
    { q: "Kennen jullie de zorgsector?", a: "Absoluut. We bouwen regelmatig websites voor zorgaanbieders, met aandacht voor toegankelijkheid (WCAG), AVG-compliance en heldere communicatie naar patiënten of cliënten." },
    { q: "Wat is de typische investering in Heerlen?", a: "Een professionele website voor MKB-ondernemers in Heerlen begint vanaf €2.500. Webshops vanaf €4.500. Custom platforms op maat. Altijd transparant, altijd een vaste prijs vooraf." },
    { q: "Kunnen jullie ook ondersteunen bij subsidie-trajecten?", a: "We werken niet zelf in subsidies, maar denken graag mee als je aanspraak maakt op innovatiesubsidies of digitaliseringsregelingen in Limburg." },
  ],
};

export default function HeerlenPage() {
  return <CityPage data={data} />;
}
