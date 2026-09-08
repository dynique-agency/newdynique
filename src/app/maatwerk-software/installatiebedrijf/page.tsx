"use client";

import SectorTemplate, { SectorData } from "@/components/SectorTemplate";

const A = "#d4a574";

const data: SectorData = {
  slug: "installatiebedrijf",
  sectorPhrase: "installatiebedrijven",
  label: "MAATWERK SOFTWARE · INSTALLATIE",
  heroTitle: (
    <>
      Maatwerk software voor
      <br />
      <span className="italic" style={{ color: A }}>installatiebedrijven.</span>
    </>
  ),
  intro:
    "Van planning en werkbon tot onderhoudscontract — één systeem dat meebeweegt met je monteurs in het veld. Geen standaardpakket, maar software gebouwd rondom hoe jullie installeren en onderhouden.",
  painHeadline: (
    <>
      Monteurs in het veld.
      <br />
      <span className="text-white/45 italic">Het overzicht op kantoor zoek.</span>
    </>
  ),
  painParagraphs: [
    "Je monteurs draaien, maar de planning gaat via telefoon en whiteboard, werkbonnen komen op papier of als foto via WhatsApp, en onderhoudscontracten leven in Excel.",
    "Daardoor mis je beurten, raakt informatie kwijt en heb je geen zicht op materiaal in de bus. Je team past zich aan losse tools aan in plaats van andersom.",
    "En dat kost niet alleen tijd, maar ook grip op onderhoud en materiaal.",
  ],
  pains: [
    { k: "PLANNING", icon: "OVERZICHT", v: "Monteurs en ploegen handmatig inplannen, met telefoon en whiteboard." },
    { k: "WERKBONNEN", icon: "EFFICIËNTIE", v: "Bonnen op papier, foto's los via WhatsApp, handtekeningen kwijt." },
    { k: "ONDERHOUD", icon: "TIJD", v: "Onderhoudscontracten en terugkerende beurten bijhouden in Excel." },
    { k: "VOORRAAD", icon: "GELD", v: "Geen zicht op materiaal in de bus of in het magazijn." },
  ],
  featuresIntro: "WAT WE BOUWEN VOOR INSTALLATIEBEDRIJVEN",
  features: [
    { title: "Mobiele werkbonnen", desc: "Monteurs vullen bonnen in het veld in — met foto's en digitale handtekening, direct verwerkt op kantoor." },
    { title: "Planning van monteurs & ploegen", desc: "Plan mensen, ploegen en busjes in één overzicht. Wijzigingen zijn meteen voor iedereen zichtbaar." },
    { title: "Onderhoudscontracten", desc: "Terugkerende beurten en contracten lopen automatisch — geen klant of beurt meer vergeten." },
    { title: "Materiaal & voorraad", desc: "Zicht op wat er in de bus en het magazijn ligt, gekoppeld aan je werkorders." },
  ],
  sliderSub: "Scroll en zie losse bonnen, planning op het whiteboard en zoekwerk veranderen in één overzicht.",
  faq: [
    {
      q: "Wat kost maatwerk software voor een installatiebedrijf?",
      a: "Dat hangt sterk af van de omvang van je bedrijf, het aantal monteurs en hoe complex je processen zijn. Een kleine, gerichte tool (bijvoorbeeld alleen mobiele werkbonnen) begint rond de €4.000; grotere software met planning, onderhoudscontracten en voorraad loopt vaak op tot €15.000–€35.000 of meer. Na de gratis procesanalyse op locatie krijg je een concreet voorstel met een vaste prijs voor jullie situatie.",
    },
    {
      q: "Kunnen jullie dit koppelen aan onze planning of het onderhoudscontract-systeem dat we al gebruiken?",
      a: "In veel gevallen wel. We kijken tijdens de procesanalyse naar wat je al gebruikt en sluiten daarop aan, zodat terugkerende beurten en contracten automatisch lopen zonder dat je alles opnieuw moet opzetten.",
    },
    {
      q: "Wat als na de procesanalyse blijkt dat maatwerk niet de beste oplossing is?",
      a: "Dan zeggen we dat gewoon eerlijk. De procesanalyse is gratis en vrijblijvend — je krijgt sowieso inzicht in waar tijd en overzicht weglekt, ook als de conclusie is dat een bestaand pakket voor jullie beter past.",
    },
    {
      q: "Waarom maatwerk in plaats van een standaard planningspakket?",
      a: "Een standaardpakket vraagt dat jullie je werkwijze aanpassen aan de software. Wij bouwen andersom: rondom hoe jullie al plannen, monteurs aansturen en onderhoud bijhouden, met alleen de functies die je echt gebruikt.",
    },
  ],
};

export default function MaatwerkSoftwareInstallatie() {
  return <SectorTemplate data={data} />;
}
