import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jouw eerste website laten maken | Dynique",
  description:
    "Nog geen website voor je bedrijf? We bouwen een online fundament dat past bij hoe je werkt: van gesprek tot livegang, technisch onderbouwd en projectmatig opgeleverd. Vaste prijs, geen verrassingen.",
  alternates: { canonical: "https://dynique.nl/eerste-website" },
  openGraph: {
    title: "Jouw eerste website laten maken",
    description:
      "Een online fundament dat past bij hoe je bedrijf werkt: van gesprek tot livegang, technisch onderbouwd en projectmatig opgeleverd.",
    url: "https://dynique.nl/eerste-website",
    type: "website",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Jouw eerste website laten maken",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jouw eerste website laten maken",
    description:
      "Een online fundament dat past bij hoe je bedrijf werkt: van gesprek tot livegang, technisch onderbouwd en projectmatig opgeleverd.",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Jouw eerste website laten maken",
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
        { "@type": "ListItem", position: 2, name: "Jouw eerste website laten maken", item: "https://dynique.nl/eerste-website" },
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
