import type { Metadata } from "next";
import CityPage, { CityData } from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Maatwerk software & webdesign Heerlen | Dynique",
  description: "Maatwerk software en webdesign voor Heerlen en Parkstad Limburg — van zorgpraktijken tot bedrijven op Avantis, met heldere afspraken en vaste prijs per fase.",
  alternates: { canonical: "https://dynique.nl/locaties/heerlen" },
  openGraph: {
    title: "Maatwerk software & webdesign Heerlen | Dynique",
    description: "Maatwerk software en webdesign in Heerlen en Parkstad Limburg. Nuchter, persoonlijk en gebouwd rond zorg, retail en bedrijven op Avantis.",
    url: "https://dynique.nl/locaties/heerlen",
    type: "website",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Website laten maken in Heerlen" }],
  },
  twitter: {
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Website laten maken in Heerlen" }],
  },
};

const data: CityData = {
  city: "Heerlen",
  cityShort: "Heerlen",
  region: "Parkstad Limburg",
  tagline: "Maatwerk software en webdesign voor het hart van Parkstad.",
  intro: "Heerlen is in beweging: van industriestad naar creatieve hub. Wij bouwen maatwerk software, websites en web apps die meebewegen met die transformatie — voor zorgaanbieders, retailers in het centrum, technische bedrijven op Avantis en de groeiende creatieve sector. Naast bouwen kunnen we ook de zichtbaarheid ervan verzorgen: SEO en online marketing horen net zo goed bij wat we doen.",
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
    { q: "Wat is de typische investering in Heerlen?", a: "Dat hangt af van de scope — een eenvoudige website is iets anders dan een webshop of maatwerk software. Bij het eerste gesprek krijg je een concreet voorstel met een vaste prijs, geen slag in de lucht." },
    { q: "Kunnen jullie ook ondersteunen bij subsidie-trajecten?", a: "We werken niet zelf in subsidies, maar denken graag mee als je aanspraak maakt op innovatiesubsidies of digitaliseringsregelingen in Limburg." },
    { q: "Bouwen jullie ook apps, en doen jullie ook SEO of marketing voor Heerlense bedrijven?", a: "Ja, allebei. Naast websites en maatwerk software bouwen we ook web apps, en via Dynique Digital verzorgen we SEO en online marketing — als losse dienst of als aanvulling op je website." },
  ],
  relatedRegionLink: { label: "bekijk onze pagina over maatwerk software voor heel Limburg", href: "/diensten/processen/limburg" },
};

export default function HeerlenPage() {
  return <CityPage data={data} />;
}
