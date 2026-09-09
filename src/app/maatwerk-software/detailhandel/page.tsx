"use client";

import SectorTemplate, { SectorData } from "@/components/SectorTemplate";

const A = "#d4a574";

const data: SectorData = {
  slug: "detailhandel",
  sectorPhrase: "de detailhandel",
  label: "MAATWERK SOFTWARE · DETAILHANDEL",
  heroTitle: (
    <>
      Maatwerk software
      <br />
      <span className="italic" style={{ color: A }}>voor winkeliers.</span>
    </>
  ),
  intro:
    "Van voorraad tot klantgegevens tot verkoopinzicht in één systeem dat met je meewerkt — in de winkel én online. Geen standaardpakket waar je je bedrijfsvoering naar moet vormen, maar software gebouwd rondom hoe jullie verkopen.",
  painHeadline: (
    <>
      De winkel loopt.
      <br />
      <span className="text-white/45 italic">De voorraad klopt niet meer.</span>
    </>
  ),
  painParagraphs: [
    "In de winkel en op de webshop wordt er verkocht. Maar achter de schermen lopen de voorraden uit elkaar: wat in de winkel ligt, klopt niet met wat de webshop laat zien, en prijswijzigingen worden op meerdere plekken los doorgevoerd.",
    "Klantgegevens staan verspreid over het kassasysteem, mailtjes en losse spreadsheets, en niemand heeft goed zicht op wat nou echt de bestsellers zijn. Je team werkt om de systemen heen in plaats van ermee.",
    "En dat kost niet alleen tijd, maar ook omzet — een webshop die 'op voorraad' toont terwijl het schap leeg is, verliest vertrouwen.",
  ],
  pains: [
    { k: "VOORRAAD", icon: "OVERZICHT", v: "Voorraad in de winkel en op de webshop niet gesynchroniseerd — verkeerde beschikbaarheid getoond." },
    { k: "PRIJZEN", icon: "TIJD", v: "Prijswijzigingen handmatig op meerdere plekken doorvoeren, foutgevoelig en tijdrovend." },
    { k: "KLANTGEGEVENS", icon: "EFFICIËNTIE", v: "Klantgegevens verspreid over kassasysteem, mail en losse spreadsheets." },
    { k: "INZICHT", icon: "GELD", v: "Geen goed zicht op best verkopende producten of waar marge weglekt." },
  ],
  featuresIntro: "WAT WE BOUWEN VOOR WINKELIERS",
  features: [
    { title: "Voorraad gekoppeld aan winkel én webshop", desc: "Eén centrale voorraad die overal klopt — geen 'op voorraad' meer tonen terwijl het schap leeg is." },
    { title: "Centraal prijsbeheer", desc: "Prijswijzigingen één keer doorvoeren, overal automatisch bijgewerkt." },
    { title: "Klantenbeheer op één plek", desc: "Klantgegevens en aankoopgeschiedenis centraal, in plaats van verspreid over kassasysteem en mail." },
    { title: "Verkoopinzicht op maat", desc: "Zicht op wat echt verkoopt en waar marge weglekt, met rapportages die aansluiten op hoe jullie sturen." },
  ],
  sliderSub: "Scroll en zie losse voorraadlijsten, prijswijzigingen en verspreide klantgegevens veranderen in één strak overzicht.",
  faq: [
    {
      q: "Wat kost maatwerk software voor een winkel of retailbedrijf?",
      a: "Dat hangt sterk af van de omvang van je bedrijf, het aantal gebruikers en hoe complex je processen zijn. Een kleine, gerichte tool (bijvoorbeeld alleen voorraadsynchronisatie) begint rond de €4.000; grotere bedrijfssoftware met klantenbeheer, meerdere kanalen en rapportages loopt vaak op tot €15.000–€35.000 of meer. Na de gratis procesanalyse op locatie krijg je een concreet voorstel met een vaste prijs voor jullie situatie.",
    },
    {
      q: "Kunnen jullie koppelen met de webshop en het kassasysteem die we al gebruiken?",
      a: "In veel gevallen wel. We kijken tijdens de procesanalyse naar wat je al gebruikt en sluiten daarop aan, zodat voorraad en verkoopcijfers overal automatisch kloppen — zonder dubbel werk.",
    },
    {
      q: "Werkt dit ook als we alleen fysiek verkopen, zonder webshop?",
      a: "Zeker. Ook zonder webshop lossen we graag de gaten op tussen kassasysteem, voorraadbeheer en klantgegevens — de winst zit dan vooral in tijd en overzicht, niet in kanaalsynchronisatie.",
    },
    {
      q: "Wat als na de procesanalyse blijkt dat maatwerk niet de beste oplossing is?",
      a: "Dan zeggen we dat gewoon eerlijk. De procesanalyse is gratis en vrijblijvend — je krijgt sowieso inzicht in waar tijd en marge weglekt, ook als de conclusie is dat een bestaand pakket voor jullie beter past.",
    },
  ],
};

export default function MaatwerkSoftwareDetailhandel() {
  return <SectorTemplate data={data} />;
}
