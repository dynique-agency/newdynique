import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dynique.nl"),
  title: "Dynique — Maatwerk Software & Development",
  description: "Maatwerk software voor bedrijven in Nederland en België die vastlopen in standaardpakketten. Technisch onderbouwd, projectmatig en veilig — met websites en digitale processen als fundament.",
  keywords: [
    "maatwerk software laten maken",
    "bedrijfssoftware op maat",
    "maatwerk software nederland",
    "maatwerk software belgië",
    "software op maat voor bedrijven",
    "digitale bedrijfsprocessen automatiseren",
    "workflow automatisering",
    "web applicatie laten bouwen",
    "app laten ontwikkelen op maat",
    "systemen koppelen bedrijf",
    "web app laten maken",
    "website laten maken limburg",
    "website laten maken maastricht",
    "website laten maken heerlen",
    "webdesign bureau limburg",
    "webshop laten maken",
    "website laten bouwen",
    "professionele website laten maken",
    "responsive website laten maken",
    "bedrijfswebsite laten maken",
    "e-commerce website limburg",
    "ai marketing bureau",
    "ai content marketing",
    "drone videografie limburg",
    "drone video bedrijf",
    "dji mini 5 pro bedrijfsfilm",
    "aerial footage nederland",
    "ai website design",
    "seo bureau limburg"
  ],
  authors: [{ name: "Dynique" }],
  creator: "Dynique",
  publisher: "Dynique",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://dynique.nl',
    siteName: 'Dynique',
    title: 'Dynique — Maatwerk Software & Development',
    description: 'Maatwerk software voor bedrijven in Nederland en België — technisch onderbouwd, projectmatig en veilig, met websites en digitale processen als fundament.',
    images: [
      {
        url: 'https://dynique.nl/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Dynique — Maatwerk Software & Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dynique — Maatwerk Software & Development',
    description: 'Maatwerk software voor bedrijven in Nederland en België — technisch onderbouwd, projectmatig en veilig, met websites en digitale processen als fundament.',
    creator: '@dynique',
    images: ['https://dynique.nl/opengraph-image'],
  },
  alternates: {
    canonical: 'https://dynique.nl',
  },
  // Zet je Search Console-token in .env.local als NEXT_PUBLIC_GSC_VERIFICATION
  // (of gebruik de DNS-/HTML-bestandsmethode). Zonder token wordt er niets toegevoegd.
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={bricolage.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["LocalBusiness", "WebDesignAgency"],
                  "@id": "https://dynique.nl/#organization",
                  "name": "Dynique",
                  "url": "https://dynique.nl",
                  "logo": {
                    "@type": "ImageObject",
                    "@id": "https://dynique.nl/#logo",
                    "url": "https://dynique.nl/favicon.png",
                    "contentUrl": "https://dynique.nl/favicon.png",
                    "width": 1024,
                    "height": 1024,
                    "caption": "Dynique"
                  },
                  "image": { "@id": "https://dynique.nl/#logo" },
                  "description": "Dynique bouwt maatwerk software voor bedrijven in Nederland en België die vastlopen in standaardpakketten — technisch onderbouwd, projectmatig en veilig, met websites en digitale processen als fundament.",
                  "telephone": "+31624572572",
                  "email": "info@dynique.nl",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Ir. Em. Melottestraat 10",
                    "postalCode": "6291 HE",
                    "addressLocality": "Vaals",
                    "addressRegion": "Limburg",
                    "addressCountry": "NL"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+31624572572",
                    "email": "info@dynique.nl",
                    "contactType": "customer service",
                    "availableLanguage": ["Dutch", "English"],
                    "areaServed": ["NL", "BE"]
                  },
                  "foundingDate": "2024",
                  "sameAs": [],
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "reviewCount": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "review": [
                    {
                      "@type": "Review",
                      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                      "author": { "@type": "Person", "name": "Tom Creemers" },
                      "reviewBody": "Binnen drie dagen live. Geen enkele professionele foto, wel een strakke deadline. Dynique leverde AI-visuals die ons merk premium maakten en de eerste aanvragen kwamen binnen een week binnen."
                    },
                    {
                      "@type": "Review",
                      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                      "author": { "@type": "Person", "name": "Stacy Kohnen" },
                      "reviewBody": "Andere bureaus zeiden weken. Dynique leverde een meertalige website met booking-systeem binnen zeven dagen. De site voelt professioneler dan ik had durven hopen en het aantal aanvragen is verdubbeld."
                    },
                    {
                      "@type": "Review",
                      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                      "author": { "@type": "Person", "name": "Wally & Roger" },
                      "reviewBody": "Ze begrepen onze familiegeschiedenis direct. Een ijssalon online zetten klinkt eenvoudig maar het gevoel moest kloppen. Dynique ving precies de juiste sfeer. De salon is drukker dan ooit."
                    },
                    {
                      "@type": "Review",
                      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                      "author": { "@type": "Person", "name": "Mitchell & Gert-Jan" },
                      "reviewBody": "Een platform waar topchefs en premium keukens elkaar vinden: klinkt complex, werd elegant. Dynique dacht mee, bouwde snel en leverde een product dat direct serieus genomen wordt."
                    },
                    {
                      "@type": "Review",
                      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                      "author": { "@type": "Organization", "name": "Auwt Aelse" },
                      "reviewBody": "We hadden de zaak opnieuw in het jasje gestoken en wilden dat dezelfde sfeer online terugkwam. Dynique vertaalde onze rebranding naar een site die precies voelt zoals onze gasten de bistro binnenlopen."
                    }
                  ],
                  "priceRange": "€€",
                  "areaServed": [
                    { "@type": "Country", "name": "Nederland" },
                    { "@type": "Country", "name": "België" },
                    { "@type": "State", "name": "Limburg" }
                  ],
                  "serviceType": [
                    "Maatwerk Software",
                    "Digitale Bedrijfsprocessen",
                    "Web Application Development",
                    "Website Development",
                    "E-commerce Development",
                    "AI Marketing",
                    "Content Marketing",
                    "Drone Videografie",
                    "Bedrijfsfilm",
                    "Branding & Design"
                  ],
                  "knowsAbout": [
                    "Web Development",
                    "Next.js",
                    "React",
                    "Tailwind CSS",
                    "E-commerce",
                    "Maatwerk Softwareontwikkeling",
                    "AI Integratie",
                    "OpenAI API",
                    "Drone Videografie",
                    "DJI Mini 5 Pro",
                    "Social Media Marketing",
                    "SEO"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://dynique.nl/#website",
                  "url": "https://dynique.nl",
                  "name": "Dynique",
                  "description": "Maatwerk software en webontwikkeling voor bedrijven in Nederland en België.",
                  "publisher": { "@id": "https://dynique.nl/#organization" },
                  "inLanguage": "nl-NL"
                }
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}




