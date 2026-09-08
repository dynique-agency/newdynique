import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locaties — Maatwerk software & webdesign in Zuid-Limburg en België | Dynique",
  description: "Dynique bouwt maatwerk software en websites voor bedrijven in Zuid-Limburg, Aken en Belgisch Limburg. Bekijk alle regio's die we vanuit Vaals bedienen.",
  alternates: { canonical: "https://dynique.nl/locaties" },
  openGraph: {
    title: "Locaties — Maatwerk software & webdesign in Zuid-Limburg en België | Dynique",
    description: "Alle regio's die Dynique vanuit Vaals bedient: Zuid-Limburg, Aken en Belgisch Limburg.",
    url: "https://dynique.nl/locaties",
    type: "website",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Locaties" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Locaties — Maatwerk software & webdesign in Zuid-Limburg en België | Dynique",
    description: "Alle regio's die Dynique vanuit Vaals bedient: Zuid-Limburg, Aken en Belgisch Limburg.",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique — Locaties" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
    { "@type": "ListItem", position: 2, name: "Locaties", item: "https://dynique.nl/locaties" },
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
