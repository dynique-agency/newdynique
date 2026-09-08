import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maatwerk software vs. SaaS — wat past bij jouw bedrijf? | Dynique",
  description:
    "SaaS of maatwerk software: geen van beide is per definitie beter. Een eerlijke vergelijking op kosten, snelheid en pasvorm, zodat je de keuze kunt maken die echt bij jullie proces past.",
  keywords: [
    "maatwerk software vs saas",
    "saas of maatwerk",
    "maatwerk software versus saas",
    "software op maat of abonnement",
    "eigen software bouwen of saas",
  ],
  alternates: { canonical: "https://dynique.nl/maatwerk-software-vs-saas" },
  openGraph: {
    title: "Maatwerk software vs. SaaS — wat past bij jouw bedrijf? | Dynique",
    description: "Een eerlijke vergelijking tussen SaaS-abonnementen en maatwerk software op kosten, snelheid en pasvorm.",
    url: "https://dynique.nl/maatwerk-software-vs-saas",
    type: "website",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Maatwerk software vs. SaaS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maatwerk software vs. SaaS — wat past bij jouw bedrijf? | Dynique",
    description: "Een eerlijke vergelijking tussen SaaS-abonnementen en maatwerk software op kosten, snelheid en pasvorm.",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Maatwerk software vs. SaaS",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Maatwerk software als alternatief voor SaaS",
      provider: { "@type": "Organization", name: "Dynique", url: "https://dynique.nl" },
      areaServed: ["Nederland", "België"],
      description: "Advies en ontwikkeling van maatwerk software op code als alternatief voor generieke SaaS-abonnementen, gebouwd rondom hoe een bedrijf echt werkt.",
      offers: { "@type": "Offer", name: "Gratis procesanalyse op locatie", price: "0", priceCurrency: "EUR" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
        { "@type": "ListItem", position: 2, name: "Maatwerk software vs. SaaS", item: "https://dynique.nl/maatwerk-software-vs-saas" },
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
