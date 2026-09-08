"use client";

import CaseStudyTemplate, { CaseStudyData } from "@/components/CaseStudyTemplate";

/* ────────────────────────────────────────────────────────────
   CHEFS CONNECT — case study
   Platform dat horecazaken, freelance chefs/bediening en
   evenementenorganisatoren met elkaar verbindt.
   Live op chefs-connect.nl.
   ──────────────────────────────────────────────────────────── */

const data: CaseStudyData = {
  title: "CHEFS CONNECT",
  category: "CULINAIR PLATFORM",
  accent: "#ef4444",
  year: "2026",
  liveUrl: "chefs-connect.nl",

  intro: "Waar horecazaken, freelance chefs en evenementen elkaar razendsnel vinden.",
  subIntro:
    "Mitchell en Gert-Jan kennen de horeca van binnenuit — jarenlang zelf in de keuken gestaan. Chefs Connect vertaalt die kennis naar een platform met drie ingangen: personeel zoeken, als freelancer aan de slag, of een evenement laten cateren.",
  client: "Mitchell & Gert-Jan · Chefs Connect",

  heroVideo: "/rsc/chefsconnect/preview.mp4",

  facts: [
    { label: "JAAR", value: "2026" },
    { label: "TYPE", value: "Platform" },
    { label: "TRAJECTEN", value: "3" },
    { label: "ROL", value: "Design & build" },
  ],

  challenge: [
    "Horecaondernemers met een personeelstekort, freelance chefs en bedieningsmedewerkers die opdrachten zoeken, en organisatoren die fine dining catering willen boeken voor een evenement: drie totaal verschillende bezoekers, met drie totaal verschillende vragen. De meeste platforms in deze markt proppen dat in één generiek formulier — precies het gevoel dat Mitchell en Gert-Jan niet wilden overbrengen.",
    "Daar kwam bij dat de mensen achter Chefs Connect zelf decennia in de keuken hebben gestaan. Dat vakmanschap moest zichtbaar zijn, niet alleen beweerd — het platform moest overkomen als horecamerk, niet als anoniem uitzendbureau met een website erbij.",
  ],
  approach: [
    "De homepage splitst meteen in drie paden — 'ik zoek een horeca professional', 'ik ben een horeca professional', 'ik organiseer een evenement' — en elk pad leidt naar een eigen pagina met eigen copy, eigen formulier en eigen FAQ. Een horecaondernemer met een acute personeelsvraag ziet iets anders dan een chef die zijn cv uploadt.",
    "Voor het evenemententraject bouwden we een apart sub-merk, Connect Events & Dining, rond chef-kok Reda Hamite en zijn bekroning: een eigen offerteformulier met datum, aantal gasten en type evenement, in plaats van hetzelfde personeelsformulier hergebruikt.",
    "Omdat horecazaken en freelancers regionaal zoeken — een kok in Maastricht zoekt geen bureau in Amsterdam — kreeg het platform tientallen regionale landingspagina's door Nederland en België, elk toegespitst op die stad, zodat de juiste bezoeker altijd een pagina vindt die voor hem geschreven lijkt.",
  ],

  features: [
    {
      title: "DRIE TRAJECTEN, ÉÉN MERK",
      description:
        "Aparte flows voor opdrachtgevers, freelance professionals (met cv-upload) en evenementenorganisatoren — elk met eigen copy, formulier en FAQ.",
    },
    {
      title: "CONNECT EVENTS & DINING",
      description:
        "Een eigen sub-merk voor fine dining catering, gebouwd rond chef-kok Reda Hamite en zijn bekroning, met offerteformulier op maat.",
    },
    {
      title: "REGIONALE VINDBAARHEID",
      description:
        "48 regiopagina's door Nederland en België, van Maastricht tot Brussel, zodat lokaal zoeken altijd een relevante pagina oplevert.",
    },
    {
      title: "SNEL SCHAKELEN",
      description:
        "WhatsApp direct naast elk formulier, met een consistente belofte van reactie binnen 24 uur op beide trajecten.",
    },
  ],

  results: [
    "Het resultaat is een platform dat zich niet gedraagt als een uitzendbureau met een website erbij, maar als een horecamerk met een duidelijke stem — opgebouwd door mensen die zelf jarenlang in de keuken stonden. Een bezoeker weet binnen een paar klikken of hij bij het personeels-, freelance- of evenemententraject zit.",
    "Mitchell en Gert-Jan vatten het zelf samen: een concept dat op papier complex klinkt — drie doelgroepen, twee landen, een aparte cateringtak — maar in de uitvoering elegant aanvoelt en direct serieus wordt genomen.",
  ],
  metrics: [
    { value: "3", label: "Trajecten", sub: "opdrachtgevers · professionals · events" },
    { value: "48", label: "Regio's", sub: "door Nederland en België" },
    { value: "24u", label: "Reactietijd", sub: "belofte op beide trajecten" },
  ],

  quote:
    "Een platform waar topchefs en premium keukens elkaar vinden: klinkt complex, werd elegant. Dynique dacht mee, bouwde snel en leverde een product dat direct serieus genomen wordt.",
  quoteAuthor: "Mitchell & Gert-Jan · Oprichters, Chefs Connect",

  next: { title: "AUWT AELSE", href: "/portfolio/auwt-aelse" },
};

export default function ChefsConnect() {
  return <CaseStudyTemplate data={data} />;
}
