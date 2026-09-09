import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maatwerk software voor de horeca — Excel voorbij | Dynique",
  description:
    "Maatwerk software voor restaurants, bistro's en horecabedrijven: reserveringen, personeelsplanning, voorraad en een koppeling met de kassa. Gebouwd met code, rondom hoe jullie zaak werkt. Gratis procesanalyse op locatie.",
  keywords: [
    "maatwerk software voor de horeca",
    "software voor restaurants",
    "horeca software op maat",
    "reserveringssysteem op maat horeca",
    "personeelsplanning horeca software",
    "excel vervangen horeca",
  ],
  alternates: { canonical: "https://dynique.nl/maatwerk-software/horeca" },
  openGraph: {
    title: "Maatwerk software voor de horeca",
    description: "Van reservering tot rooster tot voorraad in één systeem. Maatwerk software op code voor de horeca.",
    url: "https://dynique.nl/maatwerk-software/horeca",
    type: "website",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Maatwerk software voor de horeca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maatwerk software voor de horeca",
    description: "Van reservering tot rooster tot voorraad in één systeem. Maatwerk software op code voor de horeca.",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Maatwerk software voor de horeca",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Maatwerk software voor de horeca",
      provider: { "@type": "Organization", name: "Dynique", url: "https://dynique.nl" },
      areaServed: ["Limburg", "Nederland", "België"],
      description: "Maatwerk software op code voor horecabedrijven: reserveringen, personeelsplanning, voorraad en facturatie.",
      offers: { "@type": "Offer", name: "Gratis procesanalyse op locatie", price: "0", priceCurrency: "EUR" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
        { "@type": "ListItem", position: 2, name: "Maatwerk software", item: "https://dynique.nl/diensten/processen" },
        { "@type": "ListItem", position: 3, name: "Horeca", item: "https://dynique.nl/maatwerk-software/horeca" },
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
