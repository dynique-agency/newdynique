"use client";

import SectorTemplate, { SectorData } from "@/components/SectorTemplate";

const A = "#d4a574";

const data: SectorData = {
  slug: "horeca",
  sectorPhrase: "de horeca",
  label: "MAATWERK SOFTWARE · HORECA",
  heroTitle: (
    <>
      Maatwerk software
      <br />
      <span className="italic" style={{ color: A }}>voor de horeca.</span>
    </>
  ),
  intro:
    "Van reservering tot rooster tot voorraad in één systeem dat met je meewerkt — op de vloer én achter de schermen. Geen standaardpakket waar je je zaak naar moet vormen, maar software gebouwd rondom hoe jullie draaien.",
  painHeadline: (
    <>
      De zaak draait.
      <br />
      <span className="text-white/45 italic">De planning erachter niet.</span>
    </>
  ),
  painParagraphs: [
    "In de bediening en de keuken loopt het. Maar achter de schermen gaat tijd verloren aan reserveringen die nog telefonisch of in een schriftje worden bijgehouden, roosters die elke week opnieuw gepuzzeld worden, en bestellingen bij leveranciers die los van elkaar worden bijgehouden.",
    "Het kassasysteem praat niet met de boekhouding, de voorraad wordt pas ontdekt als iets op is, en iedereen werkt met zijn eigen lijstje. Je team werkt om de systemen heen in plaats van ermee.",
    "En dat kost niet alleen tijd, maar ook omzet op drukke avonden waar het net iets soepeler had gekund.",
  ],
  pains: [
    { k: "RESERVERINGEN", icon: "OVERZICHT", v: "Reserveringen nog telefonisch of in een schriftje — dubbele boekingen liggen op de loer." },
    { k: "PERSONEEL", icon: "TIJD", v: "Roosters elke week opnieuw puzzelen met wisselende diensten en beschikbaarheid." },
    { k: "VOORRAAD", icon: "EFFICIËNTIE", v: "Bestellingen bij leveranciers los bijgehouden, voorraadtekort pas gemerkt als het te laat is." },
    { k: "KASSA & BOEKHOUDING", icon: "GELD", v: "Geen koppeling tussen kassasysteem en boekhouding — omzet handmatig overtikken." },
  ],
  featuresIntro: "WAT WE BOUWEN VOOR DE HORECA",
  features: [
    { title: "Online reserveringssysteem op maat", desc: "Gasten boeken direct online, jij ziet in één overzicht de bezetting per avond — geen dubbele boekingen meer." },
    { title: "Personeelsplanning die klopt", desc: "Roosters plannen met wisselende diensten en beschikbaarheid, in minuten in plaats van uren." },
    { title: "Voorraad- en besteloverzicht", desc: "Zicht op wat er nog is en wat besteld moet worden bij je leveranciers, voordat het misgaat." },
    { title: "Koppeling kassa en boekhouding", desc: "We koppelen je kassasysteem zodat omzetcijfers automatisch kloppen, zonder handmatig overtikken." },
  ],
  sliderSub: "Scroll en zie losse schriftjes, telefonische reserveringen en handmatige roosters veranderen in één strak overzicht.",
  faq: [
    {
      q: "Wat kost maatwerk software voor een horecazaak?",
      a: "Dat hangt sterk af van de omvang van je zaak, het aantal gebruikers en hoe complex je processen zijn. Een kleine, gerichte tool (bijvoorbeeld alleen een reserveringssysteem) begint rond de €4.000; grotere bedrijfssoftware met personeelsplanning, voorraad en een koppeling met de kassa loopt vaak op tot €15.000–€35.000 of meer. Na de gratis procesanalyse op locatie krijg je een concreet voorstel met een vaste prijs voor jullie situatie.",
    },
    {
      q: "Hebben jullie al eerder voor de horeca gebouwd?",
      a: "Ja — onder meer voor Chefs Connect (een platform dat topchefs en premium keukens verbindt), IJssalon Italia Vaals en bistro Auwt Aelse. Dat zie je terug in hoe we meedenken over reserveringen, drukte-patronen en de sfeer die online moet kloppen.",
    },
    {
      q: "Kunnen jullie koppelen met het kassasysteem dat we al gebruiken?",
      a: "In veel gevallen wel. We kijken tijdens de procesanalyse naar wat je al gebruikt en sluiten daarop aan, zodat omzetcijfers automatisch doorstromen naar de boekhouding — zonder dubbel werk.",
    },
    {
      q: "Wat als na de procesanalyse blijkt dat maatwerk niet de beste oplossing is?",
      a: "Dan zeggen we dat gewoon eerlijk. De procesanalyse is gratis en vrijblijvend — je krijgt sowieso inzicht in waar tijd en omzet weglekt, ook als de conclusie is dat een bestaand pakket voor jullie beter past.",
    },
  ],
  socialProofSelect: ["ijssalonItalia", "auwtAelse"],
};

export default function MaatwerkSoftwareHoreca() {
  return <SectorTemplate data={data} />;
}
