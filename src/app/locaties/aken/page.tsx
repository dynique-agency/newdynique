import type { Metadata } from "next";
import CityPage, { CityData } from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Maßgeschneiderte Software & Webdesign Aachen | Dynique",
  description: "Maßgeschneiderte Software und Premium-Webdesign für Unternehmen in Aachen und der Euregio. Persönlicher Kontakt und ein klarer Plan pro Phase — von der Website bis zum digitalen System nach Maß.",
  alternates: { canonical: "https://dynique.nl/locaties/aken" },
  openGraph: {
    title: "Maßgeschneiderte Software & Webdesign Aachen | Dynique",
    description: "Maßgeschneiderte Software und Webdesign in Aachen und der Euregio. Persönlich, durchdacht, gebaut rund um Ihr Unternehmen.",
    url: "https://dynique.nl/locaties/aken",
    type: "website",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Website laten maken in Aken" }],
  },
  twitter: {
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Website laten maken in Aken" }],
  },
};

const data: CityData = {
  city: "Aken",
  cityShort: "Aken",
  region: "Euregio Maas-Rijn",
  tagline: "Maatwerk software en webdesign, grensoverschrijdend in de Euregio.",
  intro: "Aken ligt op steenworp afstand en voelt voor ons als thuis. Wij bouwen maatwerk software en websites voor Duitse ondernemers die de Nederlandse markt willen bereiken — en voor Limburgse bedrijven die uitbreiden over de grens. Meertalig, cultureel passend, conversie-gericht.",
  vibe: "Aken is academisch, internationaal en historisch in één. De stad herbergt een van Duitslands grootste technische universiteiten, een levendige zorgsector en een hechte ondernemersgemeenschap. Wij begrijpen het verschil in zakelijke cultuur tussen Nederland en Duitsland: directe communicatie versus formaliteit, en bouwen websites die beide werelden respecteren — vaak in twee of meer talen.",
  accent: "#ef4444",
  postal: "52062 — 52080",
  travelTime: "Maastricht 30 min · Heerlen 25 min",
  highlights: [
    { n: "01", title: "Cross-border Business", desc: "Meertalige websites (DE/NL/EN) voor bedrijven die over de grens werken in de Euregio Maas-Rijn." },
    { n: "02", title: "Gesundheit & Praxis", desc: "Patiëntgerichte websites voor artsen, tandartsen, fysiopraktijken en specialisten in en rond Aken." },
    { n: "03", title: "Tech & RWTH", desc: "Strakke sites voor startups, spin-offs en techbedrijven rond de RWTH en het Aachener TechnologieZentrum." },
    { n: "04", title: "Gastronomie & Tourismus", desc: "Sfeervolle websites voor restaurants, hotels en toeristische diensten in de Aachener Altstadt en Burtscheid." },
  ],
  industries: ["Tech", "Gesundheit", "Gastronomie", "Tourismus", "Einzelhandel", "Beratung", "Bildung", "Handwerk", "Immobilien", "Logistik"],
  faq: [
    { q: "Sprechen Sie Deutsch?", a: "Ja, vollständig. Wir kommunizieren auf Deutsch, Niederländisch und Englisch. Verträge, Angebote und Projektkommunikation in der Sprache Ihrer Wahl." },
    { q: "Können Sie Rechnungen mit deutscher USt. stellen?", a: "Wir sind ein niederländisches Unternehmen, arbeiten aber regelmäßig mit deutschen Kunden. Innergemeinschaftliche Leistung mit Reverse-Charge-Verfahren ist Standard." },
    { q: "Verstehen Sie den deutschen Markt?", a: "Wir kennen die Unterschiede in Tonalität, rechtlichen Anforderungen (Impressum, DSGVO) und Erwartungen deutscher Kunden. Diese fließen direkt in Design und Texte ein." },
    { q: "Wie weit reisen Sie für ein Treffen?", a: "Aachen liegt 25–30 Minuten von unserem Standort. Persönliche Treffen vor Ort sind kein Problem — Kaffee in der Altstadt eingeschlossen." },
  ],
};

export default function AkenPage() {
  return <CityPage data={data} />;
}
