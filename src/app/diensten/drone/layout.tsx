import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drone Videografie & Bedrijfsfilm | Dynique",
  description:
    "Cinematische aerial footage, bedrijfsfilms, social reels en dronefotografie. Geschoten met de DJI Mini 5 Pro. Breng je bedrijf letterlijk van een nieuwe hoogte in beeld.",
  alternates: { canonical: "https://dynique.nl/diensten/drone" },
  openGraph: {
    title: "Drone Videografie & Bedrijfsfilm | Dynique",
    description:
      "Cinematische aerial footage, bedrijfsfilms en social reels, geschoten met de DJI Mini 5 Pro.",
    url: "https://dynique.nl/diensten/drone",
    type: "website",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Drone Videografie & Bedrijfsfilm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drone Videografie & Bedrijfsfilm | Dynique",
    description:
      "Cinematische aerial footage, bedrijfsfilms en social reels, geschoten met de DJI Mini 5 Pro.",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Drone Videografie & Bedrijfsfilm",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Drone Videografie & Bedrijfsfilm",
      provider: { "@type": "Organization", name: "Dynique", url: "https://dynique.nl" },
      areaServed: ["Limburg", "Nederland"],
      description:
        "Aerial footage, bedrijfsfilms, social reels en dronefotografie met de DJI Mini 5 Pro.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
        { "@type": "ListItem", position: 2, name: "Diensten", item: "https://dynique.nl/diensten" },
        { "@type": "ListItem", position: 3, name: "Drone Videografie & Bedrijfsfilm", item: "https://dynique.nl/diensten/drone" },
      ],
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
