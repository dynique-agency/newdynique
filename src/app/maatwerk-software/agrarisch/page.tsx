"use client";

import SectorTemplate, { SectorData } from "@/components/SectorTemplate";

const A = "#d4a574";

const data: SectorData = {
  slug: "agrarisch",
  sectorPhrase: "de agrarische sector",
  label: "MAATWERK SOFTWARE · AGRARISCH",
  heroTitle: (
    <>
      Maatwerk software
      <br />
      <span className="italic" style={{ color: A }}>voor agrarische bedrijven.</span>
    </>
  ),
  intro:
    "Van teeltregistratie tot oogstplanning tot documentatie voor keuringen in één systeem dat met je meewerkt — op het land én op kantoor. Geen standaardpakket waar je je bedrijf naar moet vormen, maar software gebouwd rondom een seizoensgebonden proces.",
  painHeadline: (
    <>
      Het seizoen wacht niet.
      <br />
      <span className="text-white/45 italic">De administratie wel.</span>
    </>
  ),
  painParagraphs: [
    "Op het land gebeurt het werk. Maar teeltregistratie en oogstgegevens staan vaak nog op papier of in losse Excel-bestanden, en planning die rekening moet houden met het weer is lastig te delen met het hele team.",
    "Voorraad en opslag van de oogst zijn niet gekoppeld aan wat er verkocht wordt, en documentatie voor keuringen of subsidieaanvragen kost elk seizoen weer uren om samen te stellen uit losse bronnen.",
    "En dat kost niet alleen tijd, maar ook grip op een proces waar het seizoen sowieso al weinig ruimte voor vertraging geeft.",
  ],
  pains: [
    { k: "TEELTREGISTRATIE", icon: "OVERZICHT", v: "Teelt- en oogstgegevens nog op papier of in losse Excel-bestanden bijgehouden." },
    { k: "PLANNING", icon: "TIJD", v: "Weersafhankelijke planning lastig te delen en bij te werken met het hele team." },
    { k: "VOORRAAD", icon: "EFFICIËNTIE", v: "Opslag van de oogst niet gekoppeld aan verkoop — onduidelijk wat waar staat." },
    { k: "DOCUMENTATIE", icon: "GELD", v: "Documentatie voor keuringen en subsidieaanvragen kost elk seizoen weer uren." },
  ],
  featuresIntro: "WAT WE BOUWEN VOOR AGRARISCHE BEDRIJVEN",
  features: [
    { title: "Digitale teelt- en oogstregistratie", desc: "Vastleggen op het land via de telefoon, direct verwerkt en overal inzichtelijk — geen losse papieren meer." },
    { title: "Planning die met het seizoen meebeweegt", desc: "Een planning die rekening houdt met weer en seizoen, en die het hele team altijd actueel ziet." },
    { title: "Voorraad gekoppeld aan verkoop", desc: "Zicht op wat er in opslag ligt en wat daarvan al verkocht of toegezegd is, op één plek." },
    { title: "Documentatie voor keuringen en subsidies", desc: "De gegevens die je toch al vastlegt, herbruikt voor rapportages richting keuringsinstanties of subsidieaanvragen." },
  ],
  sliderSub: "Scroll en zie losse papieren, verspreide Excel-bestanden en handmatige rapportages veranderen in één strak overzicht.",
  faq: [
    {
      q: "Wat kost maatwerk software voor een agrarisch bedrijf?",
      a: "Dat hangt sterk af van de omvang van je bedrijf, het aantal gebruikers en hoe complex je processen zijn. Een kleine, gerichte tool (bijvoorbeeld alleen digitale teeltregistratie) begint rond de €4.000; grotere bedrijfssoftware met planning, voorraad en rapportages loopt vaak op tot €15.000–€35.000 of meer. Na de gratis procesanalyse op locatie krijg je een concreet voorstel met een vaste prijs voor jullie situatie.",
    },
    {
      q: "Werkt dit ook voor een klein familiebedrijf, niet alleen grote kwekerijen?",
      a: "Zeker. We bouwen net zo goed een kleine, gerichte tool voor een klein team als een uitgebreider systeem voor een groter bedrijf — de procesanalyse bepaalt wat past, niet andersom.",
    },
    {
      q: "Kunnen jullie rekening houden met seizoenspieken in de planning?",
      a: "Ja, dat nemen we juist mee als uitgangspunt. We bouwen niet een generieke planningstool, maar een systeem dat past bij hoe jullie seizoen daadwerkelijk verloopt.",
    },
    {
      q: "Wat als na de procesanalyse blijkt dat maatwerk niet de beste oplossing is?",
      a: "Dan zeggen we dat gewoon eerlijk. De procesanalyse is gratis en vrijblijvend — je krijgt sowieso inzicht in waar tijd weglekt, ook als de conclusie is dat een bestaand pakket voor jullie beter past.",
    },
  ],
};

export default function MaatwerkSoftwareAgrarisch() {
  return <SectorTemplate data={data} />;
}
