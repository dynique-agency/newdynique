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
};

export default function MaatwerkSoftwareBouw() {
  return <SectorTemplate data={data} />;
}
