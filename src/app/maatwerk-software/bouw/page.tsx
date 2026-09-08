"use client";

import SectorTemplate, { SectorData } from "@/components/SectorTemplate";

const A = "#d4a574";

const data: SectorData = {
  slug: "bouw",
  sectorPhrase: "de bouw",
  label: "MAATWERK SOFTWARE · BOUW",
  heroTitle: (
    <>
      Maatwerk software
      <br />
      <span className="italic" style={{ color: A }}>voor de bouw.</span>
    </>
  ),
  intro:
    "Van werkbon tot factuur in één systeem dat met je meewerkt — op kantoor én op de bouwplaats. Geen standaardpakket waar je je naar moet vormen, maar software gebouwd rondom hoe jullie bouwen.",
  painHeadline: (
    <>
      Het werk staat.
      <br />
      <span className="text-white/45 italic">De administratie hapert.</span>
    </>
  ),
  painParagraphs: [
    "Op de bouwplaats loopt het. Maar achter de schermen verdwijnt er tijd in werkbonnen op papier, uren in Excel en calculaties in losse sheets die nergens op aansluiten.",
    "Gegevens worden meerdere keren ingevoerd, bonnen raken kwijt en van gewerkte uren naar een factuur duurt veel te lang. Je team werkt om de software heen in plaats van ermee.",
    "En dat kost niet alleen tijd, maar uiteindelijk ook marge op elk project.",
  ],
  pains: [
    { k: "WERKBONNEN", icon: "OVERZICHT", v: "Bonnen op papier of via WhatsApp raken kwijt of komen te laat binnen." },
    { k: "UREN", icon: "TIJD", v: "Uren handmatig overtikken uit Excel — tijdrovend en foutgevoelig." },
    { k: "CALCULATIE", icon: "EFFICIËNTIE", v: "Calculaties in losse sheets, zonder koppeling met de uitvoering." },
    { k: "FACTURATIE", icon: "GELD", v: "Van gewerkte uren naar factuur kost dagen in plaats van minuten." },
  ],
  featuresIntro: "WAT WE BOUWEN VOOR DE BOUW",
  features: [
    { title: "Digitale werkbonnen", desc: "Vul bonnen direct op de bouwplaats in op je telefoon — met foto's en handtekening, meteen verwerkt op kantoor." },
    { title: "Urenregistratie die doorloopt", desc: "Geregistreerde uren stromen automatisch door naar planning en facturatie. Geen overtikken meer." },
    { title: "Project- & materiaalplanning", desc: "Eén overzicht van projecten, mensen en materiaal. Iedereen weet wat waar en wanneer moet." },
    { title: "Koppeling met je boekhouding", desc: "We koppelen je administratie zodat facturen en cijfers automatisch kloppen." },
  ],
  sliderSub: "Scroll en zie losse werkbonnen, Excel-uren en zoekwerk veranderen in één strak overzicht.",
  faq: [
    {
      q: "Wat kost maatwerk software voor een bouwbedrijf?",
      a: "Dat hangt sterk af van de omvang van je bedrijf, het aantal gebruikers en hoe complex je processen zijn. Een kleine, gerichte tool (bijvoorbeeld alleen digitale werkbonnen) begint rond de €4.000; grotere bedrijfssoftware met meerdere gebruikers, planning en een koppeling met je boekhouding loopt vaak op tot €15.000–€35.000 of meer. Na de gratis procesanalyse op locatie krijg je een concreet voorstel met een vaste prijs voor jullie situatie.",
    },
    {
      q: "Kunnen jullie koppelen met de boekhouding die we al gebruiken?",
      a: "In veel gevallen wel. We kijken tijdens de procesanalyse naar wat je al gebruikt en sluiten daarop aan, zodat werkbonnen en uren automatisch doorstromen naar facturatie en cijfers automatisch kloppen — zonder dubbel werk.",
    },
    {
      q: "Wat als na de procesanalyse blijkt dat maatwerk niet de beste oplossing is?",
      a: "Dan zeggen we dat gewoon eerlijk. De procesanalyse is gratis en vrijblijvend — je krijgt sowieso inzicht in waar tijd en geld weglekt, ook als de conclusie is dat een bestaand pakket voor jullie beter past.",
    },
    {
      q: "Waarom maatwerk in plaats van een standaard bouwapp of -pakket?",
      a: "Een standaardpakket vraagt dat jullie je werkwijze aanpassen aan de software. Wij bouwen andersom: rondom hoe jullie al werken op de bouwplaats en op kantoor, met alleen de functies die je echt gebruikt.",
    },
  ],
};

export default function MaatwerkSoftwareBouw() {
  return <SectorTemplate data={data} />;
}
