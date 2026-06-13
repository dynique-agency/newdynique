import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maatwerk software laten maken in Limburg | Dynique",
  description:
    "Maatwerk software voor het MKB in Limburg, volledig op code en gebouwd rondom hoe jullie écht werken. Gratis procesanalyse op locatie in Maastricht, Heerlen, Sittard-Geleen en heel Limburg.",
  keywords: [
    "maatwerk software limburg",
    "software laten maken limburg",
    "bedrijfssoftware op maat limburg",
    "digitale bedrijfsprocessen limburg",
    "software laten maken maastricht",
    "software laten maken heerlen",
    "software laten maken sittard-geleen",
    "maatwerk applicatie mkb limburg",
  ],
  alternates: { canonical: "https://dynique.nl/diensten/processen/limburg" },
  openGraph: {
    title: "Maatwerk software laten maken in Limburg",
    description:
      "Maatwerk software op code voor het MKB in Limburg. Gratis en vrijblijvende procesanalyse op locatie.",
    url: "https://dynique.nl/diensten/processen/limburg",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Maatwerk Software & Digitale Bedrijfsprocessen",
      provider: { "@type": "Organization", name: "Dynique", url: "https://dynique.nl" },
      areaServed: { "@type": "AdministrativeArea", name: "Limburg" },
      description:
        "Maatwerk software op code voor MKB-bedrijven in Limburg, gebouwd rondom de praktijk. Inclusief gratis procesanalyse op locatie.",
      offers: {
        "@type": "Offer",
        name: "Gratis procesanalyse op locatie in Limburg",
        price: "0",
        priceCurrency: "EUR",
      },
    },
    {
      "@type": "LocalBusiness",
      name: "Dynique",
      description:
        "Full creative development agency die maatwerk software bouwt voor het MKB in Limburg.",
      url: "https://dynique.nl/diensten/processen/limburg",
      telephone: "+31624572572",
      email: "info@dynique.nl",
      priceRange: "€€",
      address: { "@type": "PostalAddress", addressRegion: "Limburg", addressCountry: "NL" },
      areaServed: [
        "Maastricht", "Heerlen", "Sittard-Geleen", "Kerkrade", "Landgraaf",
        "Brunssum", "Valkenburg", "Roermond", "Weert", "Limburg",
      ].map((name) => ({ "@type": "City", name })),
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
