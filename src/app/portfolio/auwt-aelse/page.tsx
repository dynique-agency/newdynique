"use client";

import CaseStudyTemplate, { CaseStudyData } from "@/components/CaseStudyTemplate";

/* ────────────────────────────────────────────────────────────
   AUWT AELSE — case study
   Bistro in Elsloo (Franse keuken & méditerranée), sinds 2023,
   gerund door Ron & Karin. Live op auwtaelse.nl.
   ──────────────────────────────────────────────────────────── */

const data: CaseStudyData = {
  title: "AUWT AELSE",
  category: "BISTRO",
  accent: "#eab308",
  year: "2026",
  liveUrl: "auwtaelse.nl",

  intro: "Bourgondisch tafelen, eigentijds geserveerd.",
  subIntro:
    "Bistro Auwt Aelse in Elsloo stak zichzelf opnieuw in het jasje. Wij bouwden de website die dezelfde sfeer ademt — vanaf de eerste seconde op het scherm.",
  client: "Ron & Karin · Auwt Aelse, Elsloo",

  heroVideo: "/rsc/auwtaelse/preview.mp4",

  facts: [
    { label: "JAAR", value: "2026" },
    { label: "TYPE", value: "Website" },
    { label: "TALEN", value: "NL / EN" },
    { label: "ROL", value: "Design & build" },
  ],

  challenge: [
    "Auwt Aelse had de zaak zelf al opnieuw in het jasje gestoken: een frisse naam, een kaart die moeders keuken combineert met de méditerranée, een sfeer die Bourgondisch en eigentijds tegelijk moest voelen. Die vertaalslag moest ook online kloppen — niet als los onderdeel, maar als verlengstuk van wat er in Elsloo al stond.",
    "De praktijk van een bistro is bovendien specifiek: een kaart die met de seizoenen meebeweegt, groepen tot 60 man voor feesten en koffietafels, cadeaubonnen, en gasten die net zo makkelijk uit Maastricht als uit Luik of Aken komen. Alles moest in één oogopslag te vinden zijn, zonder dat de site aanvoelt als een digitaal formulier.",
  ],
  approach: [
    "We bouwden één rustige pagina met vijf secties — Over ons, Menu, Sfeerimpressie, Reserveren, Algemene informatie — zodat een gast in een paar seconden weet waar hij is, zonder te klikken door een menustructuur. De beeldtaal leunt op de goudkleurige lijsten en sepia-foto's die ook in de bistro zelf hangen: dezelfde warmte, nu op het scherm.",
    "De kaart kreeg een volledige, prijsgetrouwe uitwerking per gangengroep — voorgerechten, hoofdgerechten, het menu de sélection, een kindermenu en desserts — elk met een sfeerfoto van het gerecht zelf in plaats van stockbeeld. Omdat de kaart met de seizoenen verandert, is dat blok makkelijk bij te werken zonder dat de rest van de site opnieuw moet.",
    "Voor reserveren kozen we bewust tegen een onpersoonlijk boekingssysteem: bellen, mailen of gewoon binnenlopen, met die opties direct zichtbaar. Dat past bij een bistro waar de gastvrijheid al begint voordat je hebt zitten typen. Omdat Elsloo vlak bij de Belgische en Duitse grens ligt, is de hele site tweetalig (NL/EN) opgezet.",
  ],

  features: [
    {
      title: "VOLLEDIGE KAART, ECHTE FOTO'S",
      description:
        "Voorgerechten, hoofdgerechten, menu de sélection, kindermenu en desserts — elk met eigen foodfotografie in plaats van generieke sfeerbeelden.",
    },
    {
      title: "TWEETALIG NL / EN",
      description:
        "Elsloo trekt gasten uit de hele Euregio. De volledige site, inclusief de kaart, is naadloos te wisselen tussen Nederlands en Engels.",
    },
    {
      title: "SFEERIMPRESSIE",
      description:
        "Een fotogalerij van interieur en avondsfeer, in dezelfde warme, ingetogen toon als de vintage lijsten aan de muur.",
    },
    {
      title: "DIRECT CONTACT, GEEN DREMPEL",
      description:
        "Bellen, mailen of gewoon binnenlopen: reserveren blijft persoonlijk in plaats van een formulier tussen gast en bistro te zetten.",
    },
  ],

  results: [
    "Het resultaat is een site die, in de woorden van het team zelf, precies voelt zoals gasten de bistro binnenlopen. Geen aparte digitale identiteit naast de rebranding, maar de vertaling ervan.",
    "De praktische kant werkt net zo hard mee: een kaart die zonder gedoe seizoensgebonden bij te werken is, heldere info over feesten en groepen tot 60 personen, en reserveren dat net zo laagdrempelig is als binnenlopen of bellen.",
  ],
  metrics: [
    { value: "60", label: "Gasten", sub: "max. per feest of borrel" },
    { value: "5", label: "Menucategorieën", sub: "van voorgerecht tot dessert" },
    { value: "2", label: "Talen", sub: "NL / EN" },
  ],

  quote:
    "We hadden de zaak opnieuw in het jasje gestoken en wilden dat dezelfde sfeer online terugkwam. Dynique vertaalde onze rebranding naar een site die precies voelt zoals onze gasten de bistro binnenlopen.",
  quoteAuthor: "Team Auwt Aelse · Bistro, Elsloo",

  next: { title: "CHEFS CONNECT", href: "/portfolio/chefs-connect" },
};

export default function AuwtAelse() {
  return <CaseStudyTemplate data={data} />;
}
