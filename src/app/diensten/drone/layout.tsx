import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drone Videografie & Bedrijfsfilm | Dynique",
  description:
    "Cinematische aerial footage, bedrijfsfilms, social reels en dronefotografie. Geschoten met de DJI Mini 5 Pro. Breng je bedrijf letterlijk van een nieuwe hoogte in beeld.",
  alternates: { canonical: "https://dynique.nl/diensten/drone" },
  openGraph: {
    title: "Drone Videografie & Bedrijfsfilm",
    description:
      "Cinematische aerial footage, bedrijfsfilms en social reels, geschoten met de DJI Mini 5 Pro.",
    url: "https://dynique.nl/diensten/drone",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Drone Videografie & Bedrijfsfilm",
  provider: { "@type": "Organization", name: "Dynique", url: "https://dynique.nl" },
  areaServed: ["Limburg", "Nederland"],
  description:
    "Aerial footage, bedrijfsfilms, social reels en dronefotografie met de DJI Mini 5 Pro.",
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
