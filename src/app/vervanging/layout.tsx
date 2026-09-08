import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website laten vervangen of redesignen | Dynique",
  description:
    "Verouderde of trage website? Wij bouwen hem volledig opnieuw: sneller, moderner en beter converterend. SEO en content blijven behouden tijdens de migratie.",
  alternates: { canonical: "https://dynique.nl/vervanging" },
  openGraph: {
    title: "Website laten vervangen of redesignen",
    description:
      "Verouderde site? Sneller, moderner en beter converterend opnieuw gebouwd, met behoud van SEO.",
    url: "https://dynique.nl/vervanging",
    type: "website",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Website laten vervangen of redesignen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website laten vervangen of redesignen",
    description:
      "Verouderde site? Sneller, moderner en beter converterend opnieuw gebouwd, met behoud van SEO.",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Website laten vervangen of redesignen",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
        { "@type": "ListItem", position: 2, name: "Website laten vervangen of redesignen", item: "https://dynique.nl/vervanging" },
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
