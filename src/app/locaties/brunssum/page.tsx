import type { Metadata } from "next";
import CityPage, { CityData } from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Maatwerk software & webdesign Brunssum | Dynique",
  description: "Maatwerk software en webdesign voor Brunssum — thuisbasis van het NAVO-hoofdkwartier JFC Brunssum en een internationale gemeenschap. Gratis procesanalyse op locatie.",
  alternates: { canonical: "https://dynique.nl/locaties/brunssum" },
  openGraph: {
    title: "Maatwerk software & webdesign Brunssum | Dynique",
    description: "Maatwerk software en webdesign voor Brunssum. Persoonlijk, vakkundig, vaste prijs.",
    url: "https://dynique.nl/locaties/brunssum",
    type: "website",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Maatwerk software in Brunssum" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maatwerk software & webdesign Brunssum | Dynique",
    description: "Maatwerk software en webdesign voor Brunssum. Persoonlijk, vakkundig, vaste prijs.",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Maatwerk software in Brunssum" }],
  },
};

const data: CityData = {
  city: "Brunssum",
  cityShort: "Brunssum",
  region: "Parkstad Limburg",
  tagline: "Maatwerk software en webdesign voor Brunssum.",
  intro: "Brunssum is de thuisbasis van JFC Brunssum, een van de drie operationele NAVO-hoofdkwartieren — met internationaal militair en burgerpersoneel dat jaarlijks zo'n 21 miljoen euro aan lokale goederen en diensten besteedt. Wij bouwen maatwerk software en websites voor ondernemers in Brunssum, met oog voor die internationale, meertalige realiteit.",
  vibe: "Weinig gemeenten van deze omvang hebben een internationale gemeenschap zoals Brunssum: JFC Brunssum brengt militair en civiel NAVO-personeel en hun gezinnen naar de regio, wat retail, horeca en dienstverlening een merkbaar internationaal karakter geeft. Voor ondernemers die deze doelgroep bedienen — of die simpelweg willen meeprofiteren van de bredere Parkstad-economie — bouwen we websites en systemen die zowel lokaal als internationaal overtuigen.",
  accent: "#3b82f6",
  postal: "6440 — 6446",
  travelTime: "Vaals ± 27 min",
  highlights: [
    { n: "01", title: "Internationale Gemeenschap", desc: "Meertalige (NL/EN) websites voor ondernemers die de internationale NAVO-gemeenschap in en rond Brunssum bedienen." },
    { n: "02", title: "Retail & Horeca", desc: "Aantrekkelijke sites en webshops voor lokale retailers en horecaondernemers in Brunssum." },
    { n: "03", title: "Zorg & Welzijn", desc: "Toegankelijke websites voor zorgaanbieders en welzijnsorganisaties in Brunssum en Parkstad." },
    { n: "04", title: "Bouw & Installatie", desc: "Conversiegerichte sites voor aannemers en installateurs, met portfolio-galerie en offerte-flow." },
  ],
  industries: ["Retail", "Horeca", "Zorg", "Bouw", "Installatie", "Dienstverlening"],
  faq: [
    { q: "Kunnen jullie ook een Engelstalige website bouwen voor internationale klanten in Brunssum?", a: "Ja, regelmatig zelfs. Met de internationale NAVO-gemeenschap in Brunssum bouwen we vaak tweetalige (NL/EN) websites, met projectcommunicatie desgewenst volledig in het Engels." },
    { q: "Hoe ver reizen jullie voor een fysieke afspraak in Brunssum?", a: "Vanaf ons kantoor in Vaals is dat ongeveer een half uur rijden. Voor een intake of kennismaking komen we graag langs." },
    { q: "Werken jullie ook voor zorg- of welzijnsorganisaties in Brunssum?", a: "Ja. We bouwen regelmatig websites voor zorgaanbieders en welzijnsorganisaties, met aandacht voor toegankelijkheid en heldere communicatie." },
    { q: "Wat als ik al een website heb die aan vervanging toe is?", a: "We doen ook redesigns. We kijken wat al werkt, wat niet, en bouwen vanaf daar verder — zonder verlies van bestaande SEO-waarde." },
  ],
  relatedRegionLink: { label: "bekijk onze pagina over maatwerk software voor heel Limburg", href: "/diensten/processen/limburg" },
};

export default function BrunssumPage() {
  return <CityPage data={data} />;
}
