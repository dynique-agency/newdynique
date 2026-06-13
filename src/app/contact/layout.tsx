import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — plan een vrijblijvend gesprek | Dynique",
  description:
    "Neem contact op met Dynique. Vertel ons over je project — websites, maatwerk software, marketing of beeld. Reactie binnen 2 uur (ma–za). Limburg & nationaal.",
  alternates: { canonical: "https://dynique.nl/contact" },
  openGraph: {
    title: "Contact — laten we kennismaken",
    description:
      "Vertel ons over je project. Reactie binnen 2 uur (ma–za). Limburg, Nederland & internationaal.",
    url: "https://dynique.nl/contact",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
