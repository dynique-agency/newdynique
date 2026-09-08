import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden (concept) | Dynique",
  description:
    "Algemene voorwaarden van Dynique voor maatwerk software, webontwikkeling en aanverwante diensten. Let op: conceptversie, nog niet juridisch geverifieerd.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://dynique.nl/algemene-voorwaarden" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
