"use client";

import SectorTemplate, { SectorData } from "@/components/SectorTemplate";

const A = "#d4a574";

const data: SectorData = {
  slug: "zorg",
  sectorPhrase: "de zorg",
  label: "MAATWERK SOFTWARE · ZORG",
  heroTitle: (
    <>
      Maatwerk software
      <br />
      <span className="italic" style={{ color: A }}>voor de zorg.</span>
    </>
  ),
  intro:
    "Minder administratie, meer tijd voor de cliënt. Maatwerk software op code die roosters, dossiers en rapportages samenbrengt — veilig en AVG-proof, gebouwd rondom hoe jullie zorg verlenen.",
  painHeadline: (
    <>
      Meer regeldruk.
      <br />
      <span className="text-white/45 italic">Minder tijd voor zorg.</span>
    </>
  ),
  painParagraphs: [
    "Roosters puzzel je elke week in Excel, cliëntgegevens staan verspreid over losse systemen en mappen, en rapportages stel je handmatig samen.",
    "Daardoor gaat kostbare tijd op aan administratie in plaats van aan zorg, en sluipen er fouten in. Het systeem werkt tegen je in plaats van met je mee.",
    "En dat kost niet alleen tijd, maar ook overzicht en rust.",
  ],
  pains: [
    { k: "ROOSTERS", icon: "TIJD", v: "Roosters puzzelen in Excel kost elke week uren — en blijft schuiven." },
    { k: "CLIËNTGEGEVENS", icon: "OVERZICHT", v: "Gegevens verspreid over losse systemen, mappen en lijsten." },
    { k: "RAPPORTAGE", icon: "EFFICIËNTIE", v: "Rapportages handmatig samenstellen, foutgevoelig en tijdrovend." },
    { k: "ADMINISTRATIE", icon: "GELD", v: "Administratie en declaraties die ten koste gaan van zorgtijd." },
  ],
  featuresIntro: "WAT WE BOUWEN VOOR DE ZORG",
  features: [
    { title: "Rooster- & planningssoftware op maat", desc: "Roosters die rekening houden met jullie regels en wensen. Minder puzzelen, meer rust in de planning." },
    { title: "Veilig cliënt- & dossieroverzicht", desc: "Alle gegevens op één veilige, AVG-proof plek in plaats van verspreid over systemen." },
    { title: "Automatische rapportages", desc: "Rapportages die zichzelf samenstellen uit de gegevens die er al zijn. Minder handwerk, minder fouten." },
    { title: "Koppelingen met bestaande systemen", desc: "We sluiten aan op wat je al gebruikt, zodat niets dubbel hoeft te worden ingevoerd." },
  ],
  sliderSub: "Scroll en zie losse roosters, verspreide gegevens en handwerk veranderen in één overzicht.",
};

export default function MaatwerkSoftwareZorg() {
  return <SectorTemplate data={data} />;
}
