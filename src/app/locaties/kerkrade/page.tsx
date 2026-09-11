import type { Metadata } from "next";
import CityPage, { CityData } from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Maatwerk software & webdesign Kerkrade | Dynique",
  description: "Maatwerk software en webdesign voor Kerkrade en de Eurode-regio — van de oudste mijnstad van Nederland tot grensoverschrijdend ondernemen met Herzogenrath. Gratis procesanalyse op locatie.",
  alternates: { canonical: "https://dynique.nl/locaties/kerkrade" },
  openGraph: {
    title: "Maatwerk software & webdesign Kerkrade | Dynique",
    description: "Maatwerk software en webdesign voor Kerkrade en de Eurode-regio. Persoonlijk, vakkundig, vaste prijs.",
    url: "https://dynique.nl/locaties/kerkrade",
    type: "website",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Maatwerk software in Kerkrade" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maatwerk software & webdesign Kerkrade | Dynique",
    description: "Maatwerk software en webdesign voor Kerkrade en de Eurode-regio. Persoonlijk, vakkundig, vaste prijs.",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Maatwerk software in Kerkrade" }],
  },
};

const data: CityData = {
  city: "Kerkrade",
  cityShort: "Kerkrade",
  region: "Parkstad Limburg",
  tagline: "Maatwerk software en webdesign voor Kerkrade en de Eurode-regio.",
  intro: "Kerkrade was ooit de oudste mijnstad van Nederland en is nu een gemeente die grenzen letterlijk laat vervagen: samen met het Duitse Herzogenrath vormt het sinds 1998 Eurode, een unieke grensoverschrijdende samenwerking. Wij bouwen maatwerk software en websites voor ondernemers in Kerkrade — met oog voor die grensoverschrijdende realiteit.",
  vibe: "Waar tot in de jaren '60 meer dan de helft van de Kerkradenaren in de mijnen werkte, staat nu de eeuwenoude abdij Rolduc — het grootste en oudste abdijcomplex van de Benelux, ruim 900 jaar oud. Die combinatie van industrieel verleden en monumentale geschiedenis geeft Kerkrade een eigen karakter. Eurode, de formele samenwerking met buurstad Herzogenrath, maakt grensoverschrijdend zakendoen hier geen uitzondering maar de normaalste zaak van de wereld — iets wat we goed kennen vanuit ons eigen kantoor op het drielandenpunt.",
  accent: "#ec4899",
  postal: "6460 — 6471",
  travelTime: "Vaals 15 min",
  highlights: [
    { n: "01", title: "Grensoverschrijdend Ondernemen", desc: "Websites en systemen voor bedrijven die met Duitse partners of klanten in Herzogenrath en de Eurode-regio werken." },
    { n: "02", title: "Erfgoed & Cultuur", desc: "Representatieve sites voor organisaties rond Rolduc en de rijke geschiedenis van Kerkrade." },
    { n: "03", title: "Zorg & Welzijn", desc: "Toegankelijke websites voor zorgaanbieders en welzijnsorganisaties in Kerkrade en Parkstad." },
    { n: "04", title: "Bouw & Vakmanschap", desc: "Conversiegerichte sites voor aannemers en installateurs, met portfolio-galerie en offerte-flow." },
  ],
  industries: ["Zorg", "Bouw", "Installatie", "Retail", "Horeca", "Onderwijs", "Dienstverlening"],
  faq: [
    { q: "Werken jullie ook voor bedrijven die met Duitsland samenwerken?", a: "Regelmatig zelfs. Kerkrade en Herzogenrath vormen samen Eurode, en we snappen wat grensoverschrijdend ondernemen praktisch betekent — van btw-verlegging tot tweetalige content, indien gewenst." },
    { q: "Hoe ver reizen jullie voor een fysieke afspraak in Kerkrade?", a: "Vanaf ons kantoor in Vaals is dat maar 15 minuten rijden. Voor een intake of kennismaking komen we graag langs." },
    { q: "Werken jullie ook voor zorg- of welzijnsorganisaties in Kerkrade?", a: "Ja. We bouwen regelmatig websites voor zorgaanbieders en welzijnsorganisaties, met aandacht voor toegankelijkheid en heldere communicatie." },
    { q: "Wat als ik al een website heb die aan vervanging toe is?", a: "We doen ook redesigns. We kijken wat al werkt, wat niet, en bouwen vanaf daar verder — zonder verlies van bestaande SEO-waarde." },
  ],
  relatedRegionLink: { label: "bekijk onze pagina over maatwerk software voor heel Limburg", href: "/diensten/processen/limburg" },
};

export default function KerkradePage() {
  return <CityPage data={data} />;
}
