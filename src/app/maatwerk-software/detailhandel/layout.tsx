import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maatwerk software voor de detailhandel — Excel voorbij | Dynique",
  description:
    "Maatwerk software voor winkels en retailondernemers: voorraad tussen winkel en webshop, klantenbeheer en verkoopinzicht in één systeem. Gebouwd met code, rondom hoe jullie winkel werkt. Gratis procesanalyse op locatie.",
  keywords: [
    "maatwerk software voor de detailhandel",
    "software voor winkels",
    "retail software op maat",
    "voorraadbeheer winkel en webshop",
    "klantenbeheer software retail",
    "excel vervangen winkel",
  ],
  alternates: { canonical: "https://dynique.nl/maatwerk-software/detailhandel" },
  openGraph: {
    title: "Maatwerk software voor winkeliers",
    description: "Voorraad, klantgegevens en verkoopinzicht in één systeem. Maatwerk software op code voor winkeliers.",
    url: "https://dynique.nl/maatwerk-software/detailhandel",
    type: "website",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Maatwerk software voor winkeliers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maatwerk software voor winkeliers",
    description: "Voorraad, klantgegevens en verkoopinzicht in één systeem. Maatwerk software op code voor winkeliers.",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Maatwerk software voor winkeliers",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Maatwerk software voor de detailhandel",
      provider: { "@type": "Organization", name: "Dynique", url: "https://dynique.nl" },
      areaServed: ["Limburg", "Nederland", "België"],
      description: "Maatwerk software op code voor winkels en retailondernemers: voorraadsynchronisatie tussen winkel en webshop, klantenbeheer en verkoopinzicht.",
      offers: { "@type": "Offer", name: "Gratis procesanalyse op locatie", price: "0", priceCurrency: "EUR" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
        { "@type": "ListItem", position: 2, name: "Maatwerk software", item: "https://dynique.nl/diensten/processen" },
        { "@type": "ListItem", position: 3, name: "Detailhandel", item: "https://dynique.nl/maatwerk-software/detailhandel" },
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
