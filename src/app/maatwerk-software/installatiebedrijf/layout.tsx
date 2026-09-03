import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maatwerk software voor installatiebedrijven | Dynique",
  description:
    "Maatwerk software voor installatiebedrijven: mobiele werkbonnen, planning van monteurs en ploegen, onderhoudscontracten en voorraad. Gebouwd met code, rondom jullie werkwijze. Gratis procesanalyse op locatie.",
  keywords: [
    "maatwerk software voor installatiebedrijven",
    "software voor installatiebedrijf",
    "werkbon app monteurs",
    "planning software installatiebedrijf",
    "onderhoudscontract software",
    "excel vervangen installatie",
  ],
  alternates: { canonical: "https://dynique.nl/maatwerk-software/installatiebedrijf" },
  openGraph: {
    title: "Maatwerk software voor installatiebedrijven",
    description: "Planning, werkbonnen en onderhoud in één systeem. Maatwerk software op code voor installatiebedrijven.",
    url: "https://dynique.nl/maatwerk-software/installatiebedrijf",
    type: "website",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Maatwerk software voor installatiebedrijven",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Maatwerk software voor installatiebedrijven",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Maatwerk software voor installatiebedrijven",
      provider: { "@type": "Organization", name: "Dynique", url: "https://dynique.nl" },
      areaServed: ["Limburg", "Nederland"],
      description: "Maatwerk software op code voor installatiebedrijven: werkbonnen, planning, onderhoud en voorraad.",
      offers: { "@type": "Offer", name: "Gratis procesanalyse op locatie", price: "0", priceCurrency: "EUR" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
        { "@type": "ListItem", position: 2, name: "Maatwerk software", item: "https://dynique.nl/diensten/processen" },
        { "@type": "ListItem", position: 3, name: "Installatiebedrijven", item: "https://dynique.nl/maatwerk-software/installatiebedrijf" },
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
