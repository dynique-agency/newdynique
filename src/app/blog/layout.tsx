import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Het Journaal — Blog over web, AI & ondernemen | Dynique",
  description:
    "Eerlijke gidsen over websites laten maken, maatwerk software en online ondernemen. Wat kost een website, automatiseren met code of standaardtools, en kiezen voor een lokaal bureau in Limburg.",
  alternates: { canonical: "https://dynique.nl/blog" },
  openGraph: {
    title: "Het Journaal — Blog van Dynique",
    description:
      "Eerlijke gidsen over websites, automatisering en online ondernemen.",
    url: "https://dynique.nl/blog",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
