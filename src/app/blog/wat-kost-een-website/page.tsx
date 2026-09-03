import type { Metadata } from "next";
import BlogPost from "@/components/BlogPost";

export const metadata: Metadata = {
  title: "Wat kost een website in 2026? Eerlijke prijsgids | Dynique",
  description: "Wat kost een professionele website in 2026? Eerlijke prijsranges, wat zit erin, waar zitten verborgen kosten en hoe kies je tussen freelance, bureau en DIY.",
  alternates: { canonical: "https://dynique.nl/blog/wat-kost-een-website" },
  openGraph: {
    title: "Wat kost een website in 2026?",
    description: "Eerlijke prijsgids voor ondernemers. Van starter site tot custom platform.",
    url: "https://dynique.nl/blog/wat-kost-een-website",
    type: "article",
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique blog — Wat kost een website in 2026?" }],
  },
  twitter: {
    images: [{ url: "https://dynique.nl/opengraph-image", width: 1200, height: 630, alt: "Dynique blog — Wat kost een website in 2026?" }],
  },
};

const meta = {
  title: "Wat kost een website in 2026?",
  subtitle: "Een eerlijke prijsgids voor ondernemers. Geen vage hints, geen 'vanaf €99' marketing. Wat krijg je werkelijk voor je geld in 2026?",
  category: "Strategie",
  readTime: "8 min lezen",
  date: "Mei 2026",
  accent: "#d4a574",
  slug: "wat-kost-een-website",
};

export default function Post() {
  return (
    <BlogPost meta={meta}>
      <p>De vraag die ondernemers het vaakst stellen voordat ze een website laten maken: <strong>wat kost het?</strong> En de antwoorden die ze online vinden zijn meestal onbruikbaar. "Vanaf €99". "Tussen €500 en €50.000". Beide kloppen technisch wel, maar je hebt er niets aan.</p>

      <p>In dit artikel breken we de prijs open. Wat krijg je voor welke investering. Waar zitten de verschillen. En vooral: waar zitten de verborgen kosten waar bureaus niet over praten.</p>

      <h2>De vier prijsklassen in 2026</h2>
      <p>Er zijn grofweg vier categorieën waarin een website in 2026 valt. Elk met zijn eigen logica, eigen leveranciers en eigen valkuilen.</p>

      <h3>1. DIY platforms — €0 tot €500 per jaar</h3>
      <p>Wix, Squarespace, Webflow templates, WordPress.com. Je bouwt zelf, met kant-en-klare templates. Geen developer nodig, geen designer aan boord. Werkt prima voor een hobbyproject of een tijdelijke site.</p>
      <p>De verborgen kosten: <strong>jouw tijd</strong>. Reken op 40 tot 80 uur om iets te bouwen dat er enigszins professioneel uitziet. SEO is meestal beperkt. Maatwerk vrijwel onmogelijk. Je zit vast aan het platform.</p>

      <h3>2. Freelance designer — €1.500 tot €4.000</h3>
      <p>Je werkt met één persoon die alles doet: design, content, ontwikkeling. Persoonlijk, betaalbaar, redelijk snel. Geschikt voor starters en kleine ondernemingen die nog niet groot willen investeren.</p>
      <p>Wat je vaak niet krijgt: strategisch advies, technische SEO op niveau, schaalbaarheid. Als de freelancer ziek wordt of stopt, sta je met lege handen. Backups, beheer en doorontwikkeling zijn vaak niet meegenomen.</p>

      <h3>3. Premium bureau — €4.000 tot €15.000</h3>
      <p>Hier komt strategie, design, ontwikkeling en marketing samen. Een team werkt aan je project. Custom code, op maat gemaakt, schaalbaar gebouwd. SEO, performance en analytics zijn standaard onderdeel.</p>
      <p>Websites die wij bouwen vallen doorgaans in dit segment: Next.js, razendsnel, perfect indexeerbaar door Google, en gemaakt om de komende jaren mee te groeien. Geen WordPress-thema's, geen Wix-export — custom werk, rond hoe je bedrijf werkt.</p>

      <h3>4. Enterprise / Custom platform — €15.000+</h3>
      <p>Webshops met complexe logica, SaaS-producten, marktplaatsen, meertalige internationale sites met honderden pagina's. Hier praat je over teams van 5+ mensen en trajecten van maanden. Niet voor de gemiddelde ondernemer, wel voor scale-ups en grotere bedrijven.</p>
      <p>Dit is ook waar een website ophoudt en <strong>maatwerk software</strong> begint: geen pagina's meer, maar een systeem gebouwd rond een bedrijfsproces — voorraadbeheer, interne workflows, koppelingen tussen bestaande tools. Andere vraag, ander traject.</p>

      <h2>Wat zit er nou écht in die prijs?</h2>
      <p>Een professionele website is geen "design en plaatsen". Het is een combinatie van werkzaamheden:</p>
      <ul>
        <li>Strategisch gesprek en concept-uitwerking</li>
        <li>Visueel ontwerp, vaak met meerdere iteraties</li>
        <li>Content-structuur en (deels) copywriting</li>
        <li>Front-end development</li>
        <li>CMS-integratie of headless setup</li>
        <li>Technische SEO en performance optimalisatie</li>
        <li>Analytics en conversie tracking</li>
        <li>Hosting setup, domein, SSL, security</li>
        <li>Testen op verschillende devices en browsers</li>
        <li>Training of documentatie voor zelf updaten</li>
      </ul>

      <h2>De verborgen kosten waar niemand over praat</h2>
      <p>Bij goedkope offertes zit het venijn meestal in de staart. Let op deze elementen:</p>

      <div className="callout">
        <span className="callout-label" style={{ color: meta.accent }}>Let op</span>
        <p><strong>Hostingkosten.</strong> Sommige bureaus rekenen €30 tot €100 per maand voor 'managed hosting' op een server die zelf €5 per maand kost. Vraag altijd waar je site gehost wordt en wat je elders zou betalen.</p>
      </div>

      <p>Andere kosten die snel onverwacht oplopen: licentie-fees voor templates of plugins, jaarlijkse premium thema-updates, content-migratie als je later wilt overstappen, of een vendor lock-in waarbij je vastzit aan het bureau om zelfs kleine wijzigingen te maken.</p>

      <h2>Hoe weet je of een prijs eerlijk is?</h2>
      <p>Vraag bij elke offerte expliciet door op deze vijf punten:</p>
      <ul>
        <li><strong>Eigenaarschap.</strong> Krijg jij de code en designs, of blijven die bij het bureau?</li>
        <li><strong>Hosting.</strong> Waar wordt de site gehost en wat zijn de daadwerkelijke kosten?</li>
        <li><strong>SEO.</strong> Wat zit er in qua technische SEO en wat moet je extra inkopen?</li>
        <li><strong>Onderhoud.</strong> Hoe gaan we om met updates, beveiliging en kleine wijzigingen?</li>
        <li><strong>Levertijd.</strong> Wanneer is de site live? Vaste einddatum of open einde?</li>
      </ul>

      <h2>Onze aanpak in een notendop</h2>
      <p>Bij Dynique werken we voor websites met een <strong>vaste prijs</strong> die we vooraf bepalen, op basis van scope en een intakegesprek. Geen open einde. Geen "kleine extra's" die optellen. Geen verborgen hostingmarges. We bouwen in Next.js en je krijgt alles in eigendom — inclusief code, designs en hostingsetup.</p>

      <p>Een gemiddelde MKB-website begint bij ons rond <strong>€3.500</strong>, met de uiteindelijke investering afhankelijk van omvang en functionaliteit. Een webshop start hoger. Voor <strong>maatwerk software</strong> — een platform of systeem op maat, voorbij wat een website kan dragen — geldt geen vaste prijstabel: dat bespreken we pas na een intake, waarin we scope, techniek en risico's in kaart brengen. <a href="/diensten/processen">Meer over maatwerk software</a>.</p>

      <h2>Conclusie</h2>
      <p>Een website laten maken in 2026 hoeft geen blackbox te zijn. Vraag door, vergelijk eerlijk, en kijk niet alleen naar de eerste prijs maar naar de <em>totale kosten over vijf jaar</em>. De goedkoopste optie is bijna nooit de voordeligste op lange termijn.</p>

      <p>Twijfel je over jouw specifieke situatie? <a href="/#contact">Bel ons even</a>, dan denken we vrijblijvend mee. Geen sales call, gewoon advies.</p>
    </BlogPost>
  );
}
