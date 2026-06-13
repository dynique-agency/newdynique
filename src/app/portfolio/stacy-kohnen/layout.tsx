import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stacy Kohnen — case study | Dynique",
  description:
    "Een meertalige artiestensite met real-time audio, interactieve agenda en AI-gegenereerde branding. Zo bouwden we de complete merkidentiteit voor zangeres Stacy Kohnen.",
  alternates: { canonical: "https://dynique.nl/portfolio/stacy-kohnen" },
  openGraph: {
    title: "Stacy Kohnen — case study",
    description:
      "Meertalige artiestensite met real-time audio, interactieve agenda en AI-branding.",
    url: "https://dynique.nl/portfolio/stacy-kohnen",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
    { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://dynique.nl/portfolio" },
    { "@type": "ListItem", position: 3, name: "Stacy Kohnen", item: "https://dynique.nl/portfolio/stacy-kohnen" },
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
