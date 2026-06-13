import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onze diensten — websites, software, marketing & drone | Dynique",
  description:
    "Full creative development agency uit Limburg: websites & web apps, maatwerk software, AI-marketing en drone-videografie. Vier disciplines, één partner die het geheel overziet.",
  alternates: { canonical: "https://dynique.nl/diensten" },
  openGraph: {
    title: "Onze diensten — vier disciplines, één partner",
    description:
      "Websites, maatwerk software, marketing en beeld onder één dak. Full creative development agency uit Limburg.",
    url: "https://dynique.nl/diensten",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
