import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maatwerk software & digitale bedrijfsprocessen | Dynique",
  description:
    "Software moet vóór jouw bedrijf werken, niet andersom. Wij bouwen maatwerk software op code voor het MKB, gebouwd rondom hoe jullie écht werken. Gratis procesanalyse op locatie.",
  alternates: { canonical: "https://dynique.nl/diensten/processen" },
  openGraph: {
    title: "Maatwerk software & digitale bedrijfsprocessen",
    description:
      "Maatwerk software op code voor het MKB. Gratis en vrijblijvende procesanalyse op locatie.",
    url: "https://dynique.nl/diensten/processen",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Maatwerk Software & Digitale Bedrijfsprocessen",
  provider: { "@type": "Organization", name: "Dynique", url: "https://dynique.nl" },
  areaServed: ["Nederland"],
  description:
    "Maatwerk software op code voor MKB-bedrijven, gebouwd rondom de praktijk. Inclusief gratis procesanalyse op locatie.",
  offers: {
    "@type": "Offer",
    name: "Gratis procesanalyse op locatie",
    price: "0",
    priceCurrency: "EUR",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
