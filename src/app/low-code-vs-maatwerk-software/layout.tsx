import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Low-code vs. maatwerk software — wat past bij jouw bedrijf? | Dynique",
  description:
    "Low-code of volledig maatwerk op code: een eerlijke vergelijking op snelheid, vrijheid en lange-termijnrisico's, zodat je de keuze kunt maken die echt bij jullie proces past.",
  keywords: [
    "low-code vs maatwerk software",
    "low-code of maatwerk",
    "low-code platform nadelen",
    "maatwerk software versus low-code",
    "software op maat bouwen zonder low-code",
  ],
  alternates: { canonical: "https://dynique.nl/low-code-vs-maatwerk-software" },
  openGraph: {
    title: "Low-code vs. maatwerk software — wat past bij jouw bedrijf? | Dynique",
    description: "Een eerlijke vergelijking tussen low-code platforms en volledig maatwerk op code, op snelheid, vrijheid en lange-termijnrisico's.",
    url: "https://dynique.nl/low-code-vs-maatwerk-software",
    type: "website",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Low-code vs. maatwerk software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Low-code vs. maatwerk software — wat past bij jouw bedrijf? | Dynique",
    description: "Een eerlijke vergelijking tussen low-code platforms en volledig maatwerk op code, op snelheid, vrijheid en lange-termijnrisico's.",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Low-code vs. maatwerk software",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Maatwerk software als alternatief voor low-code platforms",
      provider: { "@type": "Organization", name: "Dynique", url: "https://dynique.nl" },
      areaServed: ["Nederland", "België"],
      description: "Advies en ontwikkeling van volledig maatwerk software op code als alternatief voor low-code platforms, voor bedrijven die tegen de grenzen van low-code aanlopen.",
      offers: { "@type": "Offer", name: "Gratis procesanalyse op locatie", price: "0", priceCurrency: "EUR" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
        { "@type": "ListItem", position: 2, name: "Low-code vs. maatwerk software", item: "https://dynique.nl/low-code-vs-maatwerk-software" },
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
