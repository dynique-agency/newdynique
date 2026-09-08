import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Excel vervangen door software | Dynique",
  description:
    "Excel voelde als grip, nu is het de rem. Maatwerk software die overneemt waar spreadsheets vastlopen — één centrale plek, geen losse tabbladen en gebroken formules meer. Gratis procesanalyse op locatie.",
  keywords: [
    "excel vervangen door software",
    "excel vervangen",
    "van excel naar software",
    "spreadsheet vervangen door systeem",
    "maatwerk software excel",
    "excel loslaten bedrijfsprocessen",
  ],
  alternates: { canonical: "https://dynique.nl/excel-vervangen-door-software" },
  openGraph: {
    title: "Excel vervangen door software | Dynique",
    description: "Van losse tabbladen en gebroken formules naar één systeem dat met je meewerkt. Maatwerk software op code.",
    url: "https://dynique.nl/excel-vervangen-door-software",
    type: "website",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Excel vervangen door maatwerk software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Excel vervangen door software | Dynique",
    description: "Van losse tabbladen en gebroken formules naar één systeem dat met je meewerkt. Maatwerk software op code.",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Excel vervangen door maatwerk software",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Excel vervangen door maatwerk software",
      provider: { "@type": "Organization", name: "Dynique", url: "https://dynique.nl" },
      areaServed: ["Nederland", "België"],
      description: "Maatwerk software op code die Excel-spreadsheets vervangt door één centraal, betrouwbaar systeem, gebouwd rondom hoe een bedrijf echt werkt.",
      offers: { "@type": "Offer", name: "Gratis procesanalyse op locatie", price: "0", priceCurrency: "EUR" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
        { "@type": "ListItem", position: 2, name: "Excel vervangen door software", item: "https://dynique.nl/excel-vervangen-door-software" },
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
