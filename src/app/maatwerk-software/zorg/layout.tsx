import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maatwerk software voor de zorg | Dynique",
  description:
    "Maatwerk software voor de zorg: roosterplanning op maat, veilig en AVG-proof cliëntoverzicht, automatische rapportages en koppelingen. Minder administratie, meer tijd voor de cliënt. Gratis procesanalyse op locatie.",
  keywords: [
    "maatwerk software voor de zorg",
    "software voor zorginstellingen",
    "roosterplanning zorg software",
    "zorgadministratie software op maat",
    "avg proof zorgsoftware",
    "excel vervangen zorg",
  ],
  alternates: { canonical: "https://dynique.nl/maatwerk-software/zorg" },
  openGraph: {
    title: "Maatwerk software voor de zorg",
    description: "Minder administratie, meer tijd voor de cliënt. Maatwerk software op code voor de zorg.",
    url: "https://dynique.nl/maatwerk-software/zorg",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Maatwerk software voor de zorg",
      provider: { "@type": "Organization", name: "Dynique", url: "https://dynique.nl" },
      areaServed: ["Limburg", "Nederland"],
      description: "Maatwerk software op code voor de zorg: roosterplanning, cliëntoverzicht, rapportages en koppelingen, veilig en AVG-proof.",
      offers: { "@type": "Offer", name: "Gratis procesanalyse op locatie", price: "0", priceCurrency: "EUR" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
        { "@type": "ListItem", position: 2, name: "Maatwerk software", item: "https://dynique.nl/diensten/processen" },
        { "@type": "ListItem", position: 3, name: "Zorg", item: "https://dynique.nl/maatwerk-software/zorg" },
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
