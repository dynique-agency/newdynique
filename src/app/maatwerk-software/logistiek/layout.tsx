import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maatwerk software voor logistiek & transport | Dynique",
  description:
    "Maatwerk software voor logistiek en transport: rit- en orderplanning op maat, realtime track & trace, voorraadoverzicht en koppelingen met je TMS. Gebouwd met code. Gratis procesanalyse op locatie.",
  keywords: [
    "maatwerk software voor logistiek",
    "software voor transportbedrijf",
    "ritplanning software op maat",
    "track and trace software",
    "magazijn voorraad software maatwerk",
    "excel vervangen logistiek",
  ],
  alternates: { canonical: "https://dynique.nl/maatwerk-software/logistiek" },
  openGraph: {
    title: "Maatwerk software voor logistiek & transport",
    description: "Ritplanning, track & trace en voorraad in één systeem. Maatwerk software op code voor logistiek.",
    url: "https://dynique.nl/maatwerk-software/logistiek",
    type: "website",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Maatwerk software voor logistiek & transport",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Maatwerk software voor logistiek & transport",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Maatwerk software voor logistiek en transport",
      provider: { "@type": "Organization", name: "Dynique", url: "https://dynique.nl" },
      areaServed: ["Limburg", "Nederland"],
      description: "Maatwerk software op code voor logistiek en transport: ritplanning, track & trace, voorraad en koppelingen.",
      offers: { "@type": "Offer", name: "Gratis procesanalyse op locatie", price: "0", priceCurrency: "EUR" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
        { "@type": "ListItem", position: 2, name: "Maatwerk software", item: "https://dynique.nl/diensten/processen" },
        { "@type": "ListItem", position: 3, name: "Logistiek & transport", item: "https://dynique.nl/maatwerk-software/logistiek" },
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
