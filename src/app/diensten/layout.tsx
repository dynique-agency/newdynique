import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diensten — maatwerk software, web & digitale groei | Dynique",
  description:
    "Maatwerk software voor bedrijven die vastlopen in standaardpakketten — met websites, digitale processen, AI-marketing en drone/video als aanvullende diensten.",
  alternates: { canonical: "https://dynique.nl/diensten" },
  openGraph: {
    title: "Diensten — maatwerk software als fundament",
    description:
      "Maatwerk software voor bedrijven in Nederland en België die vastlopen in standaardpakketten, met websites en digitale processen als basis. Eén partner die meedenkt, niet alleen uitvoert.",
    url: "https://dynique.nl/diensten",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
