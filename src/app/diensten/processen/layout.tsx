import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maatwerk software & digitale bedrijfsprocessen | Dynique",
  description:
    "Software moet vóór jouw bedrijf werken, niet andersom. Wij bouwen maatwerk software op code voor bedrijven die vastlopen in standaardpakketten, gebouwd rondom hoe jullie écht werken. Gratis procesanalyse op locatie.",
  alternates: { canonical: "https://dynique.nl/diensten/processen" },
  openGraph: {
    title: "Maatwerk software & digitale bedrijfsprocessen | Dynique",
    description:
      "Maatwerk software op code voor bedrijven die vastlopen in standaardpakketten. Gratis en vrijblijvende procesanalyse op locatie.",
    url: "https://dynique.nl/diensten/processen",
    type: "website",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Maatwerk Software & Digitale Bedrijfsprocessen",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Maatwerk Software & Digitale Bedrijfsprocessen",
      provider: { "@type": "Organization", name: "Dynique", url: "https://dynique.nl" },
      areaServed: ["Nederland", "België"],
      description:
        "Maatwerk software op code voor bedrijven die vastlopen in standaardpakketten, gebouwd rondom de praktijk. Inclusief gratis procesanalyse op locatie.",
      offers: {
        "@type": "Offer",
        name: "Gratis procesanalyse op locatie",
        price: "0",
        priceCurrency: "EUR",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
        { "@type": "ListItem", position: 2, name: "Diensten", item: "https://dynique.nl/diensten" },
        { "@type": "ListItem", position: 3, name: "Maatwerk software", item: "https://dynique.nl/diensten/processen" },
      ],
    },
  ],
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
