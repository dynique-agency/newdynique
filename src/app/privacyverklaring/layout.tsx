import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacyverklaring | Dynique",
  description:
    "Hoe Dynique persoonsgegevens verwerkt via dynique.nl en via Meta-advertenties (Facebook & Instagram Lead Ads). AVG-conform, transparant, per verwerkingsdoel toegelicht.",
  alternates: { canonical: "https://dynique.nl/privacyverklaring" },
  openGraph: {
    title: "Privacyverklaring | Dynique",
    description: "Hoe wij persoonsgegevens verwerken via de website en via Meta-advertenties.",
    url: "https://dynique.nl/privacyverklaring",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
