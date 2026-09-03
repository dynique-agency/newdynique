import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Het Journaal — Blog over maatwerk software & digitale processen | Dynique",
  description:
    "Doordachte inzichten over maatwerk software en de digitale keuzes die daaraan voorafgaan: wanneer een standaardpakket vastloopt, wat automatisering met code oplost dat Zapier niet kan, en hoe je de juiste partner kiest voor een website of platform.",
  alternates: { canonical: "https://dynique.nl/blog" },
  openGraph: {
    title: "Het Journaal — Blog van Dynique",
    description:
      "Doordachte inzichten over maatwerk software en de digitale keuzes die daaraan voorafgaan.",
    url: "https://dynique.nl/blog",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
