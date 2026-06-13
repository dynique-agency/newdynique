import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over Dynique — het bureau achter je project | Dynique",
  description:
    "Het verhaal, de werkwijze en de waarden achter Dynique. Eén aanspreekpunt dat websites, maatwerk software, marketing en beeld combineert — dynamisch in aanpak, uniek in resultaat.",
  alternates: { canonical: "https://dynique.nl/over-ons" },
  openGraph: {
    title: "Over Dynique — de mens achter het werk",
    description:
      "Verhaal, werkwijze en waarden achter Dynique. Eén partner die je verhaal van binnen kent.",
    url: "https://dynique.nl/over-ons",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
