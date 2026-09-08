import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden (concept) | Dynique",
  description:
    "Algemene voorwaarden van Dynique voor maatwerk software, webontwikkeling en aanverwante diensten. Let op: conceptversie, nog niet juridisch geverifieerd.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://dynique.nl/algemene-voorwaarden" },
  openGraph: {
    title: "Algemene Voorwaarden (concept) | Dynique",
    description:
      "Algemene voorwaarden van Dynique voor maatwerk software, webontwikkeling en aanverwante diensten.",
    url: "https://dynique.nl/algemene-voorwaarden",
    type: "website",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Algemene Voorwaarden",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Algemene Voorwaarden (concept) | Dynique",
    description:
      "Algemene voorwaarden van Dynique voor maatwerk software, webontwikkeling en aanverwante diensten.",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Algemene Voorwaarden",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
