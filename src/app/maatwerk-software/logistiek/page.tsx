"use client";

import SectorTemplate, { SectorData } from "@/components/SectorTemplate";

const A = "#d4a574";

const data: SectorData = {
  slug: "logistiek",
  sectorPhrase: "logistiek en transport",
  label: "MAATWERK SOFTWARE · LOGISTIEK",
  heroTitle: (
    <>
      Maatwerk software voor
      <br />
      <span className="italic" style={{ color: A }}>logistiek &amp; transport.</span>
    </>
  ),
  intro:
    "Van ritplanning tot track & trace in één systeem dat met je meebeweegt. Geen standaardpakket waar je je naar moet vormen, maar software gebouwd rondom hoe jullie plannen, rijden en leveren.",
  painHeadline: (
    <>
      De vracht rijdt.
      <br />
      <span className="text-white/45 italic">De data loopt achter.</span>
    </>
  ),
  painParagraphs: [
    "Ritten en orders plan je handmatig in, telefonisch en in Excel. Gegevens worden overgetikt tussen systemen die niet koppelen, en klanten bellen omdat live status ontbreekt.",
    "Daardoor verlies je tijd aan overtikken en zoekwerk, en mis je het overzicht over voorraad en planning. Je werkt om je tools heen in plaats van ermee.",
    "En dat kost niet alleen tijd, maar ook betrouwbaarheid naar je klanten toe.",
  ],
  pains: [
    { k: "RITPLANNING", icon: "OVERZICHT", v: "Ritten en orders handmatig inplannen, telefonisch en in Excel." },
    { k: "ORDERS", icon: "EFFICIËNTIE", v: "Ordergegevens overtikken tussen systemen die niet koppelen." },
    { k: "TRACK & TRACE", icon: "TIJD", v: "Klanten bellen 'waar is mijn order?' omdat live status ontbreekt." },
    { k: "VOORRAAD", icon: "GELD", v: "Geen realtime zicht op voorraad en magazijn." },
  ],
  featuresIntro: "WAT WE BOUWEN VOOR LOGISTIEK",
  features: [
    { title: "Rit- & orderplanning op maat", desc: "Plan ritten en orders in één systeem dat met jullie manier van werken meebeweegt." },
    { title: "Realtime status & track & trace", desc: "Kantoor en klant zien live waar een order is. Geen 'waar blijft het'-telefoontjes meer." },
    { title: "Voorraad- & magazijnoverzicht", desc: "Altijd actueel zicht op voorraad, gekoppeld aan inkoop en orders." },
    { title: "Koppeling met je TMS & boekhouding", desc: "We verbinden je bestaande systemen zodat data maar één keer wordt ingevoerd." },
  ],
  sliderSub: "Scroll en zie losse ritplanning, overtikken en zoekwerk veranderen in één overzicht.",
  faq: [
    {
      q: "Wat kost maatwerk software voor een logistiek of transportbedrijf?",
      a: "Dat hangt sterk af van de omvang van je bedrijf, het aantal gebruikers en hoe complex je processen zijn. Een kleine, gerichte tool (bijvoorbeeld alleen ritplanning) begint rond de €4.000; grotere software met track & trace, voorraad en koppelingen loopt vaak op tot €15.000–€35.000 of meer. Na de gratis procesanalyse op locatie krijg je een concreet voorstel met een vaste prijs voor jullie situatie.",
    },
    {
      q: "Kunnen jullie koppelen met ons TMS of boekhoudsysteem?",
      a: "In veel gevallen wel. We kijken tijdens de procesanalyse naar wat je al gebruikt en sluiten daarop aan, zodat data maar één keer wordt ingevoerd in plaats van overgetikt tussen systemen die niet koppelen.",
    },
    {
      q: "Wat als na de procesanalyse blijkt dat maatwerk niet de beste oplossing is?",
      a: "Dan zeggen we dat gewoon eerlijk. De procesanalyse is gratis en vrijblijvend — je krijgt sowieso inzicht in waar tijd en betrouwbaarheid weglekt, ook als de conclusie is dat een bestaand pakket voor jullie beter past.",
    },
    {
      q: "Waarom maatwerk in plaats van een standaard TMS-pakket?",
      a: "Een standaardpakket vraagt dat jullie je werkwijze aanpassen aan de software. Wij bouwen andersom: rondom hoe jullie al plannen, rijden en leveren, met alleen de functies die je echt gebruikt.",
    },
  ],
};

export default function MaatwerkSoftwareLogistiek() {
  return <SectorTemplate data={data} />;
}
