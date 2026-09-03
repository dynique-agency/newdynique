import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IJssalon Italia Vaals — case study | Dynique",
  description:
    "Een ijssalon sinds 1969, nu ook digitaal. Single-page scroll, allergenen-filtering en topprestaties op mobiel. Bekijk hoe we IJssalon Italia online brachten.",
  alternates: { canonical: "https://dynique.nl/portfolio/ijssalon-italia" },
  openGraph: {
    title: "IJssalon Italia Vaals — case study",
    description:
      "Single-page scroll, allergenen-filtering en topprestaties op mobiel.",
    url: "https://dynique.nl/portfolio/ijssalon-italia",
    type: "article",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique portfolio — IJssalon Italia Vaals website case study",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique portfolio — IJssalon Italia Vaals website case study",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
    { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://dynique.nl/portfolio" },
    { "@type": "ListItem", position: 3, name: "IJssalon Italia", item: "https://dynique.nl/portfolio/ijssalon-italia" },
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
