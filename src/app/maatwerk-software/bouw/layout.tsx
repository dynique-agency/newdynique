import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maatwerk software voor de bouw — Excel voorbij | Dynique",
  description:
    "Maatwerk software voor bouwbedrijven: digitale werkbonnen, urenregistratie die doorloopt naar facturatie, project- en materiaalplanning. Gebouwd met code, rondom hoe jullie bouwen. Gratis procesanalyse op locatie.",
  keywords: [
    "maatwerk software voor de bouw",
    "software voor bouwbedrijven",
    "bouwsoftware op maat",
    "werkbon software bouw",
    "urenregistratie bouw software",
    "excel vervangen bouw",
  ],
  alternates: { canonical: "https://dynique.nl/maatwerk-software/bouw" },
  openGraph: {
    title: "Maatwerk software voor de bouw",
    description: "Van werkbon tot factuur in één systeem. Maatwerk software op code voor bouwbedrijven.",
    url: "https://dynique.nl/maatwerk-software/bouw",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Maatwerk software voor de bouw",
      provider: { "@type": "Organization", name: "Dynique", url: "https://dynique.nl" },
      areaServed: ["Limburg", "Nederland"],
      description: "Maatwerk software op code voor bouwbedrijven: werkbonnen, urenregistratie, planning en facturatie.",
      offers: { "@type": "Offer", name: "Gratis procesanalyse op locatie", price: "0", priceCurrency: "EUR" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
        { "@type": "ListItem", position: 2, name: "Maatwerk software", item: "https://dynique.nl/diensten/processen" },
        { "@type": "ListItem", position: 3, name: "Bouw", item: "https://dynique.nl/maatwerk-software/bouw" },
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
