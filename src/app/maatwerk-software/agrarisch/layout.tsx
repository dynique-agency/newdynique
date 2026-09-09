import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maatwerk software voor de agrarische sector — Excel voorbij | Dynique",
  description:
    "Maatwerk software voor telers, kwekers en agrarische bedrijven: teeltregistratie, oogstplanning en documentatie voor keuringen in één systeem. Gebouwd met code, rondom hoe jullie bedrijf werkt. Gratis procesanalyse op locatie.",
  keywords: [
    "maatwerk software voor agrarische bedrijven",
    "software voor telers",
    "agrarische software op maat",
    "teeltregistratie software",
    "oogstplanning software",
    "excel vervangen agrarisch",
  ],
  alternates: { canonical: "https://dynique.nl/maatwerk-software/agrarisch" },
  openGraph: {
    title: "Maatwerk software voor agrarische bedrijven",
    description: "Van teeltregistratie tot oogstplanning in één systeem. Maatwerk software op code voor agrarische bedrijven.",
    url: "https://dynique.nl/maatwerk-software/agrarisch",
    type: "website",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Maatwerk software voor agrarische bedrijven",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maatwerk software voor agrarische bedrijven",
    description: "Van teeltregistratie tot oogstplanning in één systeem. Maatwerk software op code voor agrarische bedrijven.",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Maatwerk software voor agrarische bedrijven",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Maatwerk software voor agrarische bedrijven",
      provider: { "@type": "Organization", name: "Dynique", url: "https://dynique.nl" },
      areaServed: ["Limburg", "Nederland", "België"],
      description: "Maatwerk software op code voor telers, kwekers en agrarische bedrijven: teeltregistratie, oogstplanning, voorraad en documentatie voor keuringen.",
      offers: { "@type": "Offer", name: "Gratis procesanalyse op locatie", price: "0", priceCurrency: "EUR" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
        { "@type": "ListItem", position: 2, name: "Maatwerk software", item: "https://dynique.nl/diensten/processen" },
        { "@type": "ListItem", position: 3, name: "Agrarisch", item: "https://dynique.nl/maatwerk-software/agrarisch" },
      ],
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
