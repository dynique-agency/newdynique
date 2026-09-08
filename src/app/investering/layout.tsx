import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investering — wat kost maatwerk software? | Dynique",
  description:
    "Een eerlijke uitleg over wat een website of maatwerk softwaretraject bij Dynique kost: geen 'vanaf €99'-marketing, geen verborgen prijstabel — wel een helder proces.",
  alternates: { canonical: "https://dynique.nl/investering" },
  openGraph: {
    title: "Investering — wat kost maatwerk software? | Dynique",
    description: "Geen vage hints, geen verborgen prijstabel — wel een helder proces en een eerlijke inschatting.",
    url: "https://dynique.nl/investering",
    type: "website",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Investering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Investering — wat kost maatwerk software? | Dynique",
    description: "Geen vage hints, geen verborgen prijstabel — wel een helder proces en een eerlijke inschatting.",
    images: [
      {
        url: "https://dynique.nl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dynique — Investering",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
