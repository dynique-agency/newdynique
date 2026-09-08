# 300 Klant-Use-Cases & Edge Cases — Deepscan Dynique.nl

**Datum:** 2026-09-07 · **Methode:** 49-agent workflow (20 klantarchetypen x 15 cases, elke batch daarna kritisch herzien door een aparte reviewer-agent) · **Bron:** live site + volledige codebase op het moment van de scan.

Elke case beschrijft één concreet moment waarop een specifiek type klant twijfelt, afhaakt of juist overtuigd raakt — met een citaat/situatieschets, de exacte plek in de code waar het probleem zit, en een concreet, uitvoerbaar verbetervoorstel. Dit is een AI-gegenereerde kritische scan: gebruik het als prioriteitenlijst en gespreksstof, niet als blindelings uit te voeren backlog — met name de meer speculatieve psychologische aannames (per persona) verdienen een menselijke toets voordat je bouwt.

## Samenvatting

- **Totaal:** 300 cases over 20 klantarchetypen (15 per archetype)
- **P0 (kritiek):** 98  ·  **P1 (belangrijk):** 130  ·  **P2 (nice-to-have):** 72

## Klantarchetypen

- [De wantrouwende eerste-bezoeker](#de-wantrouwende-eerste-bezoeker) — 15 cases (5x P0)
- [Klant met trauma van een mislukt software-/IT-project](#klant-met-trauma-van-een-mislukt-software-it-project) — 15 cases (5x P0)
- [Technische beslisser / CTO / senior developer](#technische-beslisser-cto-senior-developer) — 15 cases (6x P0)
- [Niet-technische eigenaar/directeur](#niet-technische-eigenaardirecteur) — 15 cases (5x P0)
- [De prijsvergelijker](#de-prijsvergelijker) — 15 cases (5x P0)
- [Urgente klant met een harde deadline](#urgente-klant-met-een-harde-deadline) — 15 cases (5x P0)
- [Trage, grondige B2B-inkoper / procurement-afdeling](#trage-grondige-b2b-inkoper-procurement-afdeling) — 15 cases (4x P0)
- [De Belgische klant](#de-belgische-klant) — 15 cases (5x P0)
- [De mobiele gebruiker die snel oriënteert](#de-mobiele-gebruiker-die-snel-orinteert) — 15 cases (2x P0)
- [De sceptische techneut die het "zelf zou kunnen bouwen"](#de-sceptische-techneut-die-het-zelf-zou-kunnen-bouwen) — 15 cases (7x P0)
- [Klant die eigenlijk een standaardpakket nodig heeft](#klant-die-eigenlijk-een-standaardpakket-nodig-heeft) — 15 cases (6x P0)
- [Sectorspecifieke klant (bouw/zorg/logistiek/installatie) die zich niet herkent](#sectorspecifieke-klant-bouwzorglogistiekinstallatie-die-zich-niet-herkent) — 15 cases (4x P0)
- [Klant op zoek naar een langdurige partner](#klant-op-zoek-naar-een-langdurige-partner) — 15 cases (8x P0)
- [Bezoeker die op een verouderde/irrelevante pagina landt](#bezoeker-die-op-een-verouderdeirrelevante-pagina-landt) — 15 cases (4x P0)
- [Gebruiker met toegankelijkheidsbehoeften](#gebruiker-met-toegankelijkheidsbehoeften) — 15 cases (4x P0)
- [Concurrent of recruiter die de site bekijkt](#concurrent-of-recruiter-die-de-site-bekijkt) — 15 cases (2x P0)
- [Referral-klant met voorvertrouwen](#referral-klant-met-voorvertrouwen) — 15 cases (5x P0)
- [Klant eerder opgelicht door een goedkoop bureau/freelancer](#klant-eerder-opgelicht-door-een-goedkoop-bureaufreelancer) — 15 cases (5x P0)
- [Enterprise-klant met security/compliance/AVG-eisen](#enterprise-klant-met-securitycomplianceavg-eisen) — 15 cases (6x P0)
- [Bezoeker op oud device / traag netwerk / verouderde browser](#bezoeker-op-oud-device-traag-netwerk-verouderde-browser) — 15 cases (5x P0)

## P0-index — begin hier

De 98 meest kritieke bevindingen, gesorteerd per archetype. Elke titel linkt door naar de volledige case verderop in dit document.

**De wantrouwende eerste-bezoeker**
- [Review #1 van 5 — die letterlijk als eerste in beeld komt en om de 70 seconden terugkeert — is de oprichter die zijn eigen andere zaak beoordeelt](#de-wantrouwende-eerste-bezoeker-review-1-van-5-die-letterlijk-als-eerste-in-beeld-komt-en-om-de-70-seconden-terugkeert-is-de-oprichter-die-zijn-eigen-andere-zaak-beoordeelt)
- ['Verified · 5.0' is drie keer op de homepage te zien en verwijst nul keer naar een onafhankelijke bron](#de-wantrouwende-eerste-bezoeker-verified-50-is-drie-keer-op-de-homepage-te-zien-en-verwijst-nul-keer-naar-een-onafhankelijke-bron)
- [Twee tegenstrijdige reactietijden op precies de pagina waar de bezoeker het langst stilstaat vóór hij persoonsgegevens invoert](#de-wantrouwende-eerste-bezoeker-twee-tegenstrijdige-reactietijden-op-precies-de-pagina-waar-de-bezoeker-het-langst-stilstaat-vr-hij-persoonsgegevens-invoert)
- ['Direct in je inbox' levert een browserdownload op, en de bedankpagina zegt daarna om te wachten op een e-mail die nooit is verstuurd](#de-wantrouwende-eerste-bezoeker-direct-in-je-inbox-levert-een-browserdownload-op-en-de-bedankpagina-zegt-daarna-om-te-wachten-op-een-e-mail-die-nooit-is-verstuurd)
- [Twee cases dragen een pulserend 'Live'-label terwijl de pagina's daarachter volledig leeg zijn](#de-wantrouwende-eerste-bezoeker-twee-cases-dragen-een-pulserend-live-label-terwijl-de-paginas-daarachter-volledig-leeg-zijn)

**Klant met trauma van een mislukt software-/IT-project**
- [Vier tegenstrijdige reactietijd-claims op de twee pagina's waar de deal wordt gesloten](#klant-met-trauma-van-een-mislukt-software-it-project-vier-tegenstrijdige-reactietijd-claims-op-de-twee-paginas-waar-de-deal-wordt-gesloten)
- [De twee grootste portfolio-cases zijn zichtbaar onaf — precies het patroon dat hem hierheen dreef](#klant-met-trauma-van-een-mislukt-software-it-project-de-twee-grootste-portfolio-cases-zijn-zichtbaar-onaf-precies-het-patroon-dat-hem-hierheen-dreef)
- ['100% Vaste prijs' wordt beweerd, niet mechanisch geborgd — en de offerte komt vóór het prototype dat de echte scope blootlegt](#klant-met-trauma-van-een-mislukt-software-it-project-100-vaste-prijs-wordt-beweerd-niet-mechanisch-geborgd-en-de-offerte-komt-vr-het-prototype-dat-de-echte-scope-blootlegt)
- [Geen enkele pagina, FAQ of Advisor-optie herkent 'een gestopt project overnemen' als vraag](#klant-met-trauma-van-een-mislukt-software-it-project-geen-enkele-pagina-faq-of-advisor-optie-herkent-een-gestopt-project-overnemen-als-vraag)
- [Het contactformulier verstuurt niets zelf — de bezoeker moet in WhatsApp handmatig op verzenden drukken, zonder enige bevestiging dat het is aangekomen](#klant-met-trauma-van-een-mislukt-software-it-project-het-contactformulier-verstuurt-niets-zelf-de-bezoeker-moet-in-whatsapp-handmatig-op-verzenden-drukken-zonder-enige-bevestiging-dat-het-is-aangekomen)

**Technische beslisser / CTO / senior developer**
- [De Adviseur-quiz belooft advies 'dat past bij jóuw situatie' — verander de kernvraag en er verandert precies één zin](#technische-beslisser-cto-senior-developer-de-adviseur-quiz-belooft-advies-dat-past-bij-juw-situatie-verander-de-kernvraag-en-er-verandert-precies-n-zin)
- [De sectie met de kop 'Hoe we het hebben gebouwd' noemt geen enkele technologie](#technische-beslisser-cto-senior-developer-de-sectie-met-de-kop-hoe-we-het-hebben-gebouwd-noemt-geen-enkele-technologie)
- [24 uur reactietijd versus 2 uur — niet één slordigheid, maar dezelfde tegenstrijdigheid op twee losse pagina's](#technische-beslisser-cto-senior-developer-24-uur-reactietijd-versus-2-uur-niet-n-slordigheid-maar-dezelfde-tegenstrijdigheid-op-twee-losse-paginas)
- [Het gratis-checklist-formulier verstuurt het e-mailadres nergens naartoe — en de 'gegate' PDF staat gewoon publiek op een vaste URL](#technische-beslisser-cto-senior-developer-het-gratis-checklist-formulier-verstuurt-het-e-mailadres-nergens-naartoe-en-de-gegate-pdf-staat-gewoon-publiek-op-een-vaste-url)
- [De hoofddienst 'Procesautomatisering' noemt geen enkele technologie — de bijzaak 'AI Marketing' wel, met naam en toenaam](#technische-beslisser-cto-senior-developer-de-hoofddienst-procesautomatisering-noemt-geen-enkele-technologie-de-bijzaak-ai-marketing-wel-met-naam-en-toenaam)
- [Op de homepage is het contactformulier geen <form>: geen 'required', geen validatie — terwijl de losse /contact-pagina het wél goed doet](#technische-beslisser-cto-senior-developer-op-de-homepage-is-het-contactformulier-geen-form-geen-required-geen-validatie-terwijl-de-losse-contact-pagina-het-wl-goed-doet)

**Niet-technische eigenaar/directeur**
- [Een eerlijke prijsgids bestaat — en verdwijnt spoorloos in de blogindex](#niet-technische-eigenaardirecteur-een-eerlijke-prijsgids-bestaat-en-verdwijnt-spoorloos-in-de-blogindex)
- ['2 uur' versus '24 uur': drie beweringen, twee getallen, één pagina](#niet-technische-eigenaardirecteur-2-uur-versus-24-uur-drie-beweringen-twee-getallen-n-pagina)
- [Rode sterretjes op het homepage-formulier zijn een lege belofte](#niet-technische-eigenaardirecteur-rode-sterretjes-op-het-homepage-formulier-zijn-een-lege-belofte)
- [De Adviseur vraagt naar je prijsvoorkeur — en negeert het antwoord volledig](#niet-technische-eigenaardirecteur-de-adviseur-vraagt-naar-je-prijsvoorkeur-en-negeert-het-antwoord-volledig)
- [De datum/tijd-kiezer voelt als Calendly aan — en is puur cosmetisch](#niet-technische-eigenaardirecteur-de-datumtijd-kiezer-voelt-als-calendly-aan-en-is-puur-cosmetisch)

**De prijsvergelijker**
- [Drie kerncijfers, één zwart gat: '100%' zonder enig bedrag erachter](#de-prijsvergelijker-drie-kerncijfers-n-zwart-gat-100-zonder-enig-bedrag-erachter)
- [Homepage belooft 'vaste prijs', eigen blog ontkent dat voor exact dezelfde dienst](#de-prijsvergelijker-homepage-belooft-vaste-prijs-eigen-blog-ontkent-dat-voor-exact-dezelfde-dienst)
- [De Adviseur vraagt naar prijsvoorkeur, en negeert vervolgens welke dienst erbij hoort](#de-prijsvergelijker-de-adviseur-vraagt-naar-prijsvoorkeur-en-negeert-vervolgens-welke-dienst-erbij-hoort)
- [Geen 'Investering' in het menu — de enige prijsgids op de site is per ongeluk vindbaar](#de-prijsvergelijker-geen-investering-in-het-menu-de-enige-prijsgids-op-de-site-is-per-ongeluk-vindbaar)
- [Acht FAQ's, geen enkele over geld — de meest voor de hand liggende vraag ontbreekt](#de-prijsvergelijker-acht-faqs-geen-enkele-over-geld-de-meest-voor-de-hand-liggende-vraag-ontbreekt)

**Urgente klant met een harde deadline**
- [Drie reactietijd-beloftes, drie verschillende getallen — op één pagina](#urgente-klant-met-een-harde-deadline-drie-reactietijd-beloftes-drie-verschillende-getallen-op-n-pagina)
- [De FAQ die zijn exacte vraag stelt, weigert hem te beantwoorden](#urgente-klant-met-een-harde-deadline-de-faq-die-zijn-exacte-vraag-stelt-weigert-hem-te-beantwoorden)
- [Vier fase-badges die 'FASE 1' tot 'FASE 4' zeggen — en verder niets](#urgente-klant-met-een-harde-deadline-vier-fase-badges-die-fase-1-tot-fase-4-zeggen-en-verder-niets)
- ['Succesvol verzonden' wordt getoond ook als er niets is verzonden](#urgente-klant-met-een-harde-deadline-succesvol-verzonden-wordt-getoond-ook-als-er-niets-is-verzonden)
- [De enige case die 'snel én professioneel' claimt, is de leegste pagina van de hele site](#urgente-klant-met-een-harde-deadline-de-enige-case-die-snel-n-professioneel-claimt-is-de-leegste-pagina-van-de-hele-site)

**Trage, grondige B2B-inkoper / procurement-afdeling**
- [Nul algemene voorwaarden op de hele site — het traject stokt vóór er ook maar gebeld is](#trage-grondige-b2b-inkoper-procurement-afdeling-nul-algemene-voorwaarden-op-de-hele-site-het-traject-stokt-vr-er-ook-maar-gebeld-is)
- [Eenmanszaak-status ondermijnt vertrouwen in de continuïteit van een systeem waar het bedrijf jaren op gaat draaien](#trage-grondige-b2b-inkoper-procurement-afdeling-eenmanszaak-status-ondermijnt-vertrouwen-in-de-continuteit-van-een-systeem-waar-het-bedrijf-jaren-op-gaat-draaien)
- ["AVG-proof" op de zorgpagina is een blote marketingzin — geen NEN 7510, geen technische onderbouwing](#trage-grondige-b2b-inkoper-procurement-afdeling-avg-proof-op-de-zorgpagina-is-een-blote-marketingzin-geen-nen-7510-geen-technische-onderbouwing)
- [Alle vijf klantreviews komen van micro-ondernemingen — geen enkele referentie is natrekbaar voor deze doelgroep](#trage-grondige-b2b-inkoper-procurement-afdeling-alle-vijf-klantreviews-komen-van-micro-ondernemingen-geen-enkele-referentie-is-natrekbaar-voor-deze-doelgroep)

**De Belgische klant**
- [De Adviseur beloont 'lokaal contact' met een tekst én een vervolglink die alleen over Limburg gaan](#de-belgische-klant-de-adviseur-beloont-lokaal-contact-met-een-tekst-n-een-vervolglink-die-alleen-over-limburg-gaan)
- [Het antwoord op de btw-vraag bestaat al op de site — alleen in het Duits, voor Aken, niet in het Nederlands voor België](#de-belgische-klant-het-antwoord-op-de-btw-vraag-bestaat-al-op-de-site-alleen-in-het-duits-voor-aken-niet-in-het-nederlands-voor-belgi)
- [Er bestaat op de hele site geen enkele pagina met algemene voorwaarden — sitemap.ts bevestigt het: alleen /privacyverklaring staat onder 'Juridisch'](#de-belgische-klant-er-bestaat-op-de-hele-site-geen-enkele-pagina-met-algemene-voorwaarden-sitemapts-bevestigt-het-alleen-privacyverklaring-staat-onder-juridisch)
- [De vier sector-bewijspagina's noemen België nergens — en de JSON-LD sluit het zelfs actief uit, terwijl er niet eens een FAQ-mechanisme bestaat om het te herstellen](#de-belgische-klant-de-vier-sector-bewijspaginas-noemen-belgi-nergens-en-de-json-ld-sluit-het-zelfs-actief-uit-terwijl-er-niet-eens-een-faq-mechanisme-bestaat-om-het-te-herstellen)
- ['Bereik: Nederland & België' op /portfolio wordt door geen van de vijf cases onderbouwd — terwijl het bewijs er wél al is, alleen niet zichtbaar](#de-belgische-klant-bereik-nederland-belgi-op-portfolio-wordt-door-geen-van-de-vijf-cases-onderbouwd-terwijl-het-bewijs-er-wl-al-is-alleen-niet-zichtbaar)

**De mobiele gebruiker die snel oriënteert**
- [Hamburgermenu en hero-pills zijn te klein om betrouwbaar te raken](#de-mobiele-gebruiker-die-snel-orinteert-hamburgermenu-en-hero-pills-zijn-te-klein-om-betrouwbaar-te-raken)
- [Niet-overslaanbare intro-animatie verbruikt een groot deel van het beschikbare tijdsbudget — ook voor wie de link al kreeg doorgestuurd](#de-mobiele-gebruiker-die-snel-orinteert-niet-overslaanbare-intro-animatie-verbruikt-een-groot-deel-van-het-beschikbare-tijdsbudget-ook-voor-wie-de-link-al-kreeg-doorgestuurd)

**De sceptische techneut die het "zelf zou kunnen bouwen"**
- [Geen enkel verifieerbaar feit over wie er achter Dynique zit](#de-sceptische-techneut-die-het-zelf-zou-kunnen-bouwen-geen-enkel-verifieerbaar-feit-over-wie-er-achter-dynique-zit)
- [Geen vergelijking met het alternatief dat deze bezoeker daadwerkelijk overweegt](#de-sceptische-techneut-die-het-zelf-zou-kunnen-bouwen-geen-vergelijking-met-het-alternatief-dat-deze-bezoeker-daadwerkelijk-overweegt)
- [Het portfolio bewijst website-vakmanschap, niet software-vakmanschap — en de eigen 'meer volgt'-teaser mist precies dát verhaal](#de-sceptische-techneut-die-het-zelf-zou-kunnen-bouwen-het-portfolio-bewijst-website-vakmanschap-niet-software-vakmanschap-en-de-eigen-meer-volgt-teaser-mist-precies-dt-verhaal)
- [De twee 'juiste' case-study-sjablonen ogen zelf als een half afgemaakt project](#de-sceptische-techneut-die-het-zelf-zou-kunnen-bouwen-de-twee-juiste-case-study-sjablonen-ogen-zelf-als-een-half-afgemaakt-project)
- [Onbeantwoord bus-factor-risico: wat als de enige developer uitvalt of stopt?](#de-sceptische-techneut-die-het-zelf-zou-kunnen-bouwen-onbeantwoord-bus-factor-risico-wat-als-de-enige-developer-uitvalt-of-stopt)
- [Elk formulier faalt de eigen belofte: nep-verplichte velden en een reactietijd die zichzelf op twéé pagina's tegenspreekt](#de-sceptische-techneut-die-het-zelf-zou-kunnen-bouwen-elk-formulier-faalt-de-eigen-belofte-nep-verplichte-velden-en-een-reactietijd-die-zichzelf-op-tw-paginas-tegenspreekt)
- [De leadmagneet belooft 'direct per mail' maar verstuurt nooit een e-mail](#de-sceptische-techneut-die-het-zelf-zou-kunnen-bouwen-de-leadmagneet-belooft-direct-per-mail-maar-verstuurt-nooit-een-e-mail)

**Klant die eigenlijk een standaardpakket nodig heeft**
- [De Adviseur kan alleen 'bouw dit' zeggen — de belofte 'ook als dat niets is' bestaat nergens in de code](#klant-die-eigenlijk-een-standaardpakket-nodig-heeft-de-adviseur-kan-alleen-bouw-dit-zeggen-de-belofte-ook-als-dat-niets-is-bestaat-nergens-in-de-code)
- [/diensten/web is een tijdcapsule van het oude bureau — geen goud, geen prijs, geen signaal dat dit niet het hoofdverhaal is](#klant-die-eigenlijk-een-standaardpakket-nodig-heeft-dienstenweb-is-een-tijdcapsule-van-het-oude-bureau-geen-goud-geen-prijs-geen-signaal-dat-dit-niet-het-hoofdverhaal-is)
- [De vijf locatiepagina's beloven Google letterlijk het oude bedrijf — 'ZZP en MKB', 'vaste prijs', geen woord over maatwerk](#klant-die-eigenlijk-een-standaardpakket-nodig-heeft-de-vijf-locatiepaginas-beloven-google-letterlijk-het-oude-bedrijf-zzp-en-mkb-vaste-prijs-geen-woord-over-maatwerk)
- [Portfolio bewijst met vier cases dat eenmanszaken de norm zijn — het tegenovergestelde van de nieuwe belofte](#klant-die-eigenlijk-een-standaardpakket-nodig-heeft-portfolio-bewijst-met-vier-cases-dat-eenmanszaken-de-norm-zijn-het-tegenovergestelde-van-de-nieuwe-belofte)
- [Gratis-checklist is qua onderwerp exact voor deze persona geschreven — maar de e-mail komt nooit aan én de funnel erna negeert het volledig](#klant-die-eigenlijk-een-standaardpakket-nodig-heeft-gratis-checklist-is-qua-onderwerp-exact-voor-deze-persona-geschreven-maar-de-e-mail-komt-nooit-aan-n-de-funnel-erna-negeert-het-volledig)
- [De contactpagina belooft in dezelfde adem '2 uur' en '24 uur' reactietijd — en de bedankpagina voegt een derde variant toe](#klant-die-eigenlijk-een-standaardpakket-nodig-heeft-de-contactpagina-belooft-in-dezelfde-adem-2-uur-en-24-uur-reactietijd-en-de-bedankpagina-voegt-een-derde-variant-toe)

**Sectorspecifieke klant (bouw/zorg/logistiek/installatie) die zich niet herkent**
- [De 'chaos naar duidelijkheid'-demo op de bouwpagina toont een boekhoudscherm met CRM-jargon, geen bouwplaats](#sectorspecifieke-klant-bouwzorglogistiekinstallatie-die-zich-niet-herkent-de-chaos-naar-duidelijkheid-demo-op-de-bouwpagina-toont-een-boekhoudscherm-met-crm-jargon-geen-bouwplaats)
- [Zorgpagina noemt geen enkel ECD/EPD en maakt geen onderscheid tussen zorgtypen — 'we sluiten aan op wat je al gebruikt' is een onbewezen belofte](#sectorspecifieke-klant-bouwzorglogistiekinstallatie-die-zich-niet-herkent-zorgpagina-noemt-geen-enkel-ecdepd-en-maakt-geen-onderscheid-tussen-zorgtypen-we-sluiten-aan-op-wat-je-al-gebruikt-is-een-onbewezen-belofte)
- ['Bekijk ons werk' stuurt elke sectorlead naar een portfolio van vier horeca/muziek-websites — en een van de vijf bestaande cases staat daar zelfs niet eens in](#sectorspecifieke-klant-bouwzorglogistiekinstallatie-die-zich-niet-herkent-bekijk-ons-werk-stuurt-elke-sectorlead-naar-een-portfolio-van-vier-horecamuziek-websites-en-een-van-de-vijf-bestaande-cases-staat-daar-zelfs-niet-eens-in)
- [Sectorpagina's staan in geen enkele hoofdnavigatie of footer — bereikbaar via precies twee klikken diep vanaf elke andere pagina](#sectorspecifieke-klant-bouwzorglogistiekinstallatie-die-zich-niet-herkent-sectorpaginas-staan-in-geen-enkele-hoofdnavigatie-of-footer-bereikbaar-via-precies-twee-klikken-diep-vanaf-elke-andere-pagina)

**Klant op zoek naar een langdurige partner**
- [EIGENAARSCHAP belooft "lang na livegang" — de sectie die dat moet bewijzen, bewijst het niet](#klant-op-zoek-naar-een-langdurige-partner-eigenaarschap-belooft-lang-na-livegang-de-sectie-die-dat-moet-bewijzen-bewijst-het-niet)
- [De eigen prijsgids leert bezoekers naar onderhoud te vragen — en beantwoordt die vraag dan niet voor zichzelf](#klant-op-zoek-naar-een-langdurige-partner-de-eigen-prijsgids-leert-bezoekers-naar-onderhoud-te-vragen-en-beantwoordt-die-vraag-dan-niet-voor-zichzelf)
- ["Wat gebeurt er hierna" op de contactpagina stopt bij de offerte, niet bij het onderhoud](#klant-op-zoek-naar-een-langdurige-partner-wat-gebeurt-er-hierna-op-de-contactpagina-stopt-bij-de-offerte-niet-bij-het-onderhoud)
- [Reactietijd vóór de deal is een hard getal; reactietijd ná de deal is een vaag gebaar](#klant-op-zoek-naar-een-langdurige-partner-reactietijd-vr-de-deal-is-een-hard-getal-reactietijd-n-de-deal-is-een-vaag-gebaar)
- [De pagina voor precies deze klant bestaat — maar spreekt over een verouderde website, niet over een verouderd systeem, en is nergens te vinden](#klant-op-zoek-naar-een-langdurige-partner-de-pagina-voor-precies-deze-klant-bestaat-maar-spreekt-over-een-verouderde-website-niet-over-een-verouderd-systeem-en-is-nergens-te-vinden)
- ["Eén aanspreekpunt" wordt overal als voordeel verkocht, maar het bus-factor-risico wordt nergens geadresseerd](#klant-op-zoek-naar-een-langdurige-partner-en-aanspreekpunt-wordt-overal-als-voordeel-verkocht-maar-het-bus-factor-risico-wordt-nergens-geadresseerd)
- [De enige support-ingang is WhatsApp binnen kantooruren — geen enkele pagina benoemt wat er gebeurt bij een storing daarbuiten](#klant-op-zoek-naar-een-langdurige-partner-de-enige-support-ingang-is-whatsapp-binnen-kantooruren-geen-enkele-pagina-benoemt-wat-er-gebeurt-bij-een-storing-daarbuiten)
- [Er bestaat geen enkele voorwaarden-, SLA- of verwerkersovereenkomst-pagina op de hele site](#klant-op-zoek-naar-een-langdurige-partner-er-bestaat-geen-enkele-voorwaarden--sla--of-verwerkersovereenkomst-pagina-op-de-hele-site)

**Bezoeker die op een verouderde/irrelevante pagina landt**
- [Vijf locatiepagina's — zelfs de Duitse Aken-variant — verkopen in het Google-snippet nog het zzp-bureau van vóór de rebrand](#bezoeker-die-op-een-verouderdeirrelevante-pagina-landt-vijf-locatiepaginas-zelfs-de-duitse-aken-variant-verkopen-in-het-google-snippet-nog-het-zzp-bureau-van-vr-de-rebrand)
- [/diensten/web, /marketing en /drone dragen alle drie nog het 'DIENST 0X'-witte-op-zwart-sjabloon van vóór de rebrand — precies op het moment dat een terugkerende klant het merk opnieuw test](#bezoeker-die-op-een-verouderdeirrelevante-pagina-landt-dienstenweb-marketing-en-drone-dragen-alle-drie-nog-het-dienst-0x-witte-op-zwart-sjabloon-van-vr-de-rebrand-precies-op-het-moment-dat-een-terugkerende-klant-het-merk-opnieuw-test)
- [De leadmagneet die voor sommige bezoekers de allereerste indruk van Dynique ís, registreert de lead nergens](#bezoeker-die-op-een-verouderdeirrelevante-pagina-landt-de-leadmagneet-die-voor-sommige-bezoekers-de-allereerste-indruk-van-dynique-s-registreert-de-lead-nergens)
- [De twee portfolio-cases die specifiek naar 'bewijs' zoekende bezoekers trekken, zijn lege scaffolding met dezelfde sitemap-prioriteit als de wél volledig ingevulde cases](#bezoeker-die-op-een-verouderdeirrelevante-pagina-landt-de-twee-portfolio-cases-die-specifiek-naar-bewijs-zoekende-bezoekers-trekken-zijn-lege-scaffolding-met-dezelfde-sitemap-prioriteit-als-de-wl-volledig-ingevulde-cases)

**Gebruiker met toegankelijkheidsbehoeften**
- [De Adviseur breekt haar eigen belofte van 'geen verplichtingen' met tientallen onnodige Tab-drukken](#gebruiker-met-toegankelijkheidsbehoeften-de-adviseur-breekt-haar-eigen-belofte-van-geen-verplichtingen-met-tientallen-onnodige-tab-drukken)
- [Het bewijsstuk van 'Bewijs door precisie' is voor NVDA onverstaanbare ruis van twee overlappende schermen](#gebruiker-met-toegankelijkheidsbehoeften-het-bewijsstuk-van-bewijs-door-precisie-is-voor-nvda-onverstaanbare-ruis-van-twee-overlappende-schermen)
- [FAQ-accordeon meldt open/dicht-status nooit — juist bij de twee vragen die haar besluit bepalen](#gebruiker-met-toegankelijkheidsbehoeften-faq-accordeon-meldt-opendicht-status-nooit-juist-bij-de-twee-vragen-die-haar-besluit-bepalen)
- [Het formulier waar élke CTA op de site naartoe linkt, is voor VoiceOver een naamloze reeks velden](#gebruiker-met-toegankelijkheidsbehoeften-het-formulier-waar-lke-cta-op-de-site-naartoe-linkt-is-voor-voiceover-een-naamloze-reeks-velden)

**Concurrent of recruiter die de site bekijkt**
- [Creemers Inclusives bouwt de site van 'Creemers Exclusive' — en verstopt die case buiten het portfolio-overzicht](#concurrent-of-recruiter-die-de-site-bekijkt-creemers-inclusives-bouwt-de-site-van-creemers-exclusive-en-verstopt-die-case-buiten-het-portfolio-overzicht)
- [Chefs Connect en Auwt Aelse zijn letterlijk nog het lege sjabloon — 62 regels tegenover 583](#concurrent-of-recruiter-die-de-site-bekijkt-chefs-connect-en-auwt-aelse-zijn-letterlijk-nog-het-lege-sjabloon-62-regels-tegenover-583)

**Referral-klant met voorvertrouwen**
- [Het zoekresultaat belooft het bedrijf dat de rebrand net heeft afgeschud](#referral-klant-met-voorvertrouwen-het-zoekresultaat-belooft-het-bedrijf-dat-de-rebrand-net-heeft-afgeschud)
- [De contactpagina breekt exact de belofte waarmee de referral haar overtuigde](#referral-klant-met-voorvertrouwen-de-contactpagina-breekt-exact-de-belofte-waarmee-de-referral-haar-overtuigde)
- [Eén klik voorbij het bewijs dat wél werkt, stort het bewijs in tot een lege sjabloon](#referral-klant-met-voorvertrouwen-en-klik-voorbij-het-bewijs-dat-wl-werkt-stort-het-bewijs-in-tot-een-lege-sjabloon)
- [5.0 sterren in Google, nul manier om ze te checken zodra je doorklikt](#referral-klant-met-voorvertrouwen-50-sterren-in-google-nul-manier-om-ze-te-checken-zodra-je-doorklikt)
- [De aanbevolen gratis checklist verdwijnt spoorloos in de browser](#referral-klant-met-voorvertrouwen-de-aanbevolen-gratis-checklist-verdwijnt-spoorloos-in-de-browser)

**Klant eerder opgelicht door een goedkoop bureau/freelancer**
- [De enige juridische waarheid over Dynique staat op regel 186 van een pagina niemand vrijwillig leest](#klant-eerder-opgelicht-door-een-goedkoop-bureaufreelancer-de-enige-juridische-waarheid-over-dynique-staat-op-regel-186-van-een-pagina-niemand-vrijwillig-leest)
- ['OPRICHTER · DYNIQUE' is het enige dat je over de mens achter Dynique te weten komt](#klant-eerder-opgelicht-door-een-goedkoop-bureaufreelancer-oprichter-dynique-is-het-enige-dat-je-over-de-mens-achter-dynique-te-weten-komt)
- [Auwt Aelse's case study toont 'BEELD VOLGT' onder exact dezelfde video die al op de homepage draait](#klant-eerder-opgelicht-door-een-goedkoop-bureaufreelancer-auwt-aelses-case-study-toont-beeld-volgt-onder-exact-dezelfde-video-die-al-op-de-homepage-draait)
- [De meest prominente review draagt dezelfde achternaam als de juridische eigenaar van het bedrijf](#klant-eerder-opgelicht-door-een-goedkoop-bureaufreelancer-de-meest-prominente-review-draagt-dezelfde-achternaam-als-de-juridische-eigenaar-van-het-bedrijf)
- [Nergens op de site staat hoeveel je vooraf betaalt — de zoekterm 'aanbetaling' levert nul resultaten op](#klant-eerder-opgelicht-door-een-goedkoop-bureaufreelancer-nergens-op-de-site-staat-hoeveel-je-vooraf-betaalt-de-zoekterm-aanbetaling-levert-nul-resultaten-op)

**Enterprise-klant met security/compliance/AVG-eisen**
- [De FAQ stelt haar exacte vraag en beantwoordt die met een belofte om het later uit te leggen](#enterprise-klant-met-securitycomplianceavg-eisen-de-faq-stelt-haar-exacte-vraag-en-beantwoordt-die-met-een-belofte-om-het-later-uit-te-leggen)
- [Er is geen enkel juridisch document op de site behalve de privacyverklaring — 'algemene voorwaarden' bestaat nergens](#enterprise-klant-met-securitycomplianceavg-eisen-er-is-geen-enkel-juridisch-document-op-de-site-behalve-de-privacyverklaring-algemene-voorwaarden-bestaat-nergens)
- [De privacyverklaring beschrijft Dynique uitsluitend als verantwoordelijke voor de eigen marketingsite — nergens staat dat Dynique bij klantprojecten als verwerker optreedt](#enterprise-klant-met-securitycomplianceavg-eisen-de-privacyverklaring-beschrijft-dynique-uitsluitend-als-verantwoordelijke-voor-de-eigen-marketingsite-nergens-staat-dat-dynique-bij-klantprojecten-als-verwerker-optreedt)
- ['AVG-proof' staat twee keer op de zorgpagina zonder enige onderbouwing — en juist in de zorgsector leest kaal jargon als compliance-washing](#enterprise-klant-met-securitycomplianceavg-eisen-avg-proof-staat-twee-keer-op-de-zorgpagina-zonder-enige-onderbouwing-en-juist-in-de-zorgsector-leest-kaal-jargon-als-compliance-washing)
- [De privacyverklaring beschrijft in 679 regels uitsluitend de marketingsite zelf — geen woord over hosting, architectuur of beveiliging van het daadwerkelijke product dat wordt verkocht](#enterprise-klant-met-securitycomplianceavg-eisen-de-privacyverklaring-beschrijft-in-679-regels-uitsluitend-de-marketingsite-zelf-geen-woord-over-hosting-architectuur-of-beveiliging-van-het-daadwerkelijke-product-dat-wordt-verkocht)
- [Geen enkele 'Vertrouwen', 'Zekerheid' of 'Security'-ingang bestaat in navigatie of footer — alle trust-content op de hele site past in drie losse zinnen](#enterprise-klant-met-securitycomplianceavg-eisen-geen-enkele-vertrouwen-zekerheid-of-security-ingang-bestaat-in-navigatie-of-footer-alle-trust-content-op-de-hele-site-past-in-drie-losse-zinnen)

**Bezoeker op oud device / traag netwerk / verouderde browser**
- [Eén ontbrekende feature-check maakt 20+ IntersectionObserver-instanties sitewide onzichtbaar](#bezoeker-op-oud-device-traag-netwerk-verouderde-browser-en-ontbrekende-feature-check-maakt-20-intersectionobserver-instanties-sitewide-onzichtbaar)
- [Eén onbeveiligde sessionStorage-call houdt de hele homepage permanent achter een laadscherm](#bezoeker-op-oud-device-traag-netwerk-verouderde-browser-en-onbeveiligde-sessionstorage-call-houdt-de-hele-homepage-permanent-achter-een-laadscherm)
- [De echte klikbare knop op het conversiemoment hangt af van dezelfde bundel als de Adviseur-quiz](#bezoeker-op-oud-device-traag-netwerk-verouderde-browser-de-echte-klikbare-knop-op-het-conversiemoment-hangt-af-van-dezelfde-bundel-als-de-adviseur-quiz)
- [Het zwaarste videobestand van de hele portfolio (2,4MB) is precies degene zonder posterframe](#bezoeker-op-oud-device-traag-netwerk-verouderde-browser-het-zwaarste-videobestand-van-de-hele-portfolio-24mb-is-precies-degene-zonder-posterframe)
- [Dezelfde onbeschermde `window.open()`-aanroep zit gekopieerd in minstens acht bestanden](#bezoeker-op-oud-device-traag-netwerk-verouderde-browser-dezelfde-onbeschermde-windowopen-aanroep-zit-gekopieerd-in-minstens-acht-bestanden)

---

## De wantrouwende eerste-bezoeker

### 1. Review #1 van 5 — die letterlijk als eerste in beeld komt en om de 70 seconden terugkeert — is de oprichter die zijn eigen andere zaak beoordeelt {#de-wantrouwende-eerste-bezoeker-review-1-van-5-die-letterlijk-als-eerste-in-beeld-komt-en-om-de-70-seconden-terugkeert-is-de-oprichter-die-zijn-eigen-andere-zaak-beoordeelt}

**Persona:** De wantrouwende eerste-bezoeker — leest reviews kritisch en trekt de lijn door naar het bedrijfsregister  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Een inkoper bij een groter bedrijf opent de homepage. De reviewsectie (id="reviews") start met reviewIdx op 0 (useState(0), src/app/page.tsx:72) — dus het allereerste wat hij ziet, zonder te hoeven klikken, is: 'Binnen drie dagen live... Dynique leverde AI-visuals die ons merk premium maakten' van 'Tom Creemers, Founder · Creemers Exclusive'. De rotatie-timer (setInterval elke 14000ms, regel 118) brengt deze exacte review elke 70 seconden terug in beeld — het is dus niet één review tussen vijf, het is de review die de meeste schermtijd krijgt. Hij scrollt door naar de footer voor het KVK-nummer bij due diligence en leest: 'Dynique is de handelsnaam van Creemers Inclusives'. Hij herkent de achternaam onmiddellijk en scrollt terug omhoog om te checken of hij het goed zag.

**Trust/behoefte-trigger.** Het moment waarop de meest prominente, eerst-getoonde 'onafhankelijke klantreview' van de hele site en de eigenaar van het bureau zelf dezelfde persoon blijken — zonder enige disclosure, op precies het bewijsstuk dat een sceptische bezoeker het eerst controleert.

**Wat er nu misgaat.** src/app/page.tsx:611-621 (reviews-array, item 0, getoond als eerste omdat reviewIdx=0 op regel 72) + src/components/Footer.tsx:125 ('Dynique is de handelsnaam van Creemers Inclusives') + src/app/privacyverklaring/page.tsx:186 ('de eenmanszaak Creemers Inclusives') + src/app/layout.tsx:158-164 (JSON-LD review-array, óók Tom Creemers als eerste entry) bevestigen samen wat nergens wordt toegegeven: de zwaarst-gewogen, meest herhaalde testimonial op de site is de oprichter die zijn eigen tweede onderneming beoordeelt. Dit besmet niet één review maar het hele bewijssysteem — als review 1 een verkapte self-case is, waarom zou een sceptische lezer review 2 t/m 5 nog vertrouwen? Voor een persona die specifiek reviews tegen het KVK-register houdt, is dit geen slordigheid, het is de makkelijkste 'gotcha' op de hele site.

**Award-winning oplossing.** Verplaats Creemers Exclusive volledig uit de reviewrotatie en herpositioneer het als wat het werkelijk is: 'Case 0 — ons eigen laboratorium'. Geef het een compleet andere visuele taal dan de vier échte klantreviews (geen quote-bubbel, geen sterrenrating, geen 'Verified'-label) — bijvoorbeeld een technisch build-log-kaartje: 'INTERN PROJECT · 3 dagen, 0 foto's, 100% AI-visuals — de proeftuin waar we onze eigen methode eerst op durven loslaten.' Dat is sterker dan verbergen: het toont zelfvertrouwen ('we testen het eerst op onszelf') in plaats van schaamte, en is precies de 'eigenzinnig eerlijk'-waarde uit PRODUCT.md in actie. Laat de reviewrotatie starten bij een écht onafhankelijke klant (Wally & Roger / IJssalon Italia) zodat reviewIdx=0 nooit meer toevallig de oprichter zelf is — noch op de homepage, noch in de JSON-LD-volgorde.

### 2. 'Verified · 5.0' is drie keer op de homepage te zien en verwijst nul keer naar een onafhankelijke bron {#de-wantrouwende-eerste-bezoeker-verified-50-is-drie-keer-op-de-homepage-te-zien-en-verwijst-nul-keer-naar-een-onafhankelijke-bron}

**Persona:** De wantrouwende eerste-bezoeker — klikt bewust op 'Verified · 5.0' om te zien welk onafhankelijk platform dat bevestigt  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** De bezoeker ziet 'Verified · 5.0' boven de reviewsectie, nogmaals in de micro-trustlijn van het conversieblok ('5.0 · Verified', regel 1015) en in de JSON-LD (aggregateRating, ratingValue 5.0, reviewCount 5). Hij verwacht — zoals dat label impliceert — een link naar Google Reviews, Trustpilot of Klantenvertellen. Hij klikt op het schildicoon naast een review, in de verwachting een externe reviewpagina te openen.

**Trust/behoefte-trigger.** Het woord 'Verified' triggert de verwachting van een klikbare, door een derde partij gecontroleerde bron — niet een intern label naast een link naar de eigen website van de klant.

**Wat er nu misgaat.** src/app/page.tsx:731-752: elke 'verifyUrl' wijst simpelweg naar de website van de beoordeelde klant zelf (creemersexclusive.nl, stacykohnen.de, chefs-connect.nl, ...) — sites die Dynique zelf gebouwd heeft. Dat bewijst dat het bedrijf van de klant bestaat, niet dat de quote echt is of dat er ergens een extern geverifieerd 5.0-gemiddelde staat. Op de hele site — geen enkele pagina uitgezonderd — staat geen link naar een Google Business Profile, Trustpilot-profiel of ander platform (bevestigd: 0 treffers voor 'google.com/maps', 'trustpilot' of 'linkedin.com' in de hele codebase). 'Verified' is dus verificatie-theater: het schildicoon en het woord suggereren controle, de klik levert alleen een portfolio-link op die exact hetzelfde bewijst als de 'Bekijk case'-knop verderop al doet.

**Award-winning oplossing.** Bouw een aparte, klein-maar-krachtig "/bewijs"-brug: koppel een echt Google Business Profile (30 minuten werk) en toon een live, embed-bare reviewwidget direct in de reviewsectie — niet als losse link maar als zichtbaar, door Google zelf gehost mini-widget met tijdstempel, zodat de 5.0 score zichtbaar door een derde partij wordt bevestigd op het moment zelf, niet via een omweg. Splits daarnaast de huidige 'Verify'-link in twee aparte, eerlijk gelabelde micro-links per review: 'Bekijk [projectnaam] ↗' (bestaat al, bewijst dat het bedrijf bestaat) én 'Bekijk op Google ↗' (nieuw, bewijst dat de review onafhankelijk geplaatst is). Gebruik het woord 'Verified' pas weer zodra het naar de tweede link verwijst — tot die tijd is 'Klantcase' een eerlijker label dan een schildicoon dat niets verifieert.

### 3. Twee tegenstrijdige reactietijden op precies de pagina waar de bezoeker het langst stilstaat vóór hij persoonsgegevens invoert {#de-wantrouwende-eerste-bezoeker-twee-tegenstrijdige-reactietijden-op-precies-de-pagina-waar-de-bezoeker-het-langst-stilstaat-vr-hij-persoonsgegevens-invoert}

**Persona:** De wantrouwende eerste-bezoeker — leest de contactpagina woord voor woord vlak voordat hij zijn gegevens invult  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Op /contact leest de bezoeker eerst de hero-paragraaf: 'Vertel ons over je project. We reageren altijd binnen 24 uur — meestal veel eerder' (regel 134). Zijn oog valt twee alinea's lager op het DETAILS-blok naast dezelfde tekst, waar 'REACTIETIJD: Binnen 2 uur (ma–za, 9–20u)' staat (regel 13) — en het blok NEXT_STEPS eronder herhaalt dit nog een derde keer als 'Snelle reactie — Je hoort binnen 2 uur van ons' (regel 19). Drie claims, twee verschillende getallen, allemaal binnen één scroll, vlak vóór het formulier.

**Trust/behoefte-trigger.** Een concrete, verifieerbare belofte (reactietijd) die zichzelf drie keer op dezelfde pagina tegenspreekt, exact op het punt waar de bezoeker overweegt zijn contactgegevens prijs te geven.

**Wat er nu misgaat.** src/app/contact/page.tsx:13 (DETAILS-array: 'Binnen 2 uur'), regel 19 (NEXT_STEPS: 'binnen 2 uur') versus regel 134 (hero-paragraaf: 'binnen 24 uur'). Dit exacte probleem staat al sinds 14 juli in docs/CRITIQUE-SITE-2026-07-14.md onder 'Minor Observations' en is na de rebrand-commit van 3 september nog steeds niet opgelost — het is inmiddels een bekend, genegeerd issue, niet een incidentele tikfout. Voor een bezoeker die actief op zoek is naar redenen om niet te vertrouwen, is dit letterlijk de makkelijkste vondst op de site: geen page-source nodig, geen KVK-check, gewoon lezen.

**Award-winning oplossing.** Verwijder het losse getal volledig uit DETAILS en NEXT_STEPS en vervang de belofte door een claim die zichzelf continu bewijst in plaats van erom vraagt: een klein, status-page-achtig widgetje naast de H1 — in de visuele taal van een technisch statusdashboard (stipje + monospace tijdsindicatie), passend bij 'technisch onderlegd' — dat toont 'Laatste reactie: 47 min geleden'. Bouw dit als een écht werkend, minimaal stukje procesautomatisering (een Cloudflare Worker die een KV-waarde bijwerkt zodra er een WhatsApp-bericht beantwoord is, of desnoods wekelijks handmatig bijgewerkt totdat de koppeling er is): dat is nul euro aan tooling, en het demonstreert bovendien live de exacte dienst — procesautomatisering — die deze bezoeker misschien zelf komt inkopen. Eén claim, één waarheid, overal op de site.

### 4. 'Direct in je inbox' levert een browserdownload op, en de bedankpagina zegt daarna om te wachten op een e-mail die nooit is verstuurd {#de-wantrouwende-eerste-bezoeker-direct-in-je-inbox-levert-een-browserdownload-op-en-de-bedankpagina-zegt-daarna-om-te-wachten-op-een-e-mail-die-nooit-is-verstuurd}

**Persona:** De wantrouwende eerste-bezoeker — test de 'gratis checklist' als laagdrempelige manier om te zien of het bedrijf doet wat het zegt  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Op /gratis-checklist ziet de bezoeker het label 'DIRECT IN JE INBOX' (regel 106) en de tekst 'Vul je gegevens in, ontvang de PDF direct per mail' (regel 113). Hij test dit bewust als laagdrempelige vertrouwenscheck vóórdat hij een heel softwaretraject overweegt: als een simpele PDF-belofte al niet klopt, waarom zou een maandenlang bouwtraject dat wel doen? Hij vult naam en e-mail in, de knop toont 'EVEN GEDULD…' (regel 147), er verschijnt een browser-download-prompt, en hij landt op /bedankt?name=... waar staat: 'Je bericht is binnen. We reageren binnen 24 uur... Check ook even je spam-folder voor de zekerheid' (regel 52). Hij checkt zijn spam. Er staat niets.

**Trust/behoefte-trigger.** De expliciet geteste, actief geverifieerde belofte ('direct per mail') die blijkt te zijn ingelost door een lokale bestandsdownload — gevolgd door een instructie om te wachten op een e-mail die het systeem zelf nooit heeft verstuurd.

**Wat er nu misgaat.** src/app/gratis-checklist/page.tsx:39 bevat de eigen ontwikkelaarscomment '// In productie: stuur naam + e-mail ook naar API/Mailchimp/Resend' — er gebeurt dus letterlijk niets met het ingevulde e-mailadres, alleen een client-side download (regels 41-46). De gedeelde /bedankt-pagina (src/app/bedankt/page.tsx:52) is geschreven voor het contactformulier maar wordt hergebruikt voor deze flow, en herhaalt daar de 'check je spam'-instructie — volstrekt zinloos voor een download waar nooit een e-mail bij hoorde. Dezelfde pagina claimt in de trust-line onderaan bovendien '30+ klanten' (regel 84), een getal dat nergens anders op de site wordt onderbouwd en niet te rijmen valt met de vijf zichtbare portfolio-cases (zie ook de portfolio-statistiekenbevinding) — een derde, kleinere leugentje op exact dezelfde pagina. Dit is precies het lage-risico-testmoment dat vertrouwen zou moeten opbouwen vóór het echte gesprek, en het faalt op alle drie de claims tegelijk.

**Award-winning oplossing.** Directe eerlijkheidsfix: verwijder 'direct in je inbox' en 'check je spam', vervang door 'Vul je gegevens in en download de PDF direct' met een expliciete downloadknop. De echte, wereldklasse-fix: bouw de leadflow als een zichtbare demonstratie van precies de proces-automatisering die Dynique verkoopt. Koppel het formulier aan een Cloudflare Pages Function + Resend (een paar regels code, geen dure tool) die (a) een gepersonaliseerde PDF genereert met de naam van de bezoeker op de omslag en die per mail verstuurt zoals beloofd, en (b) een eigen, contextbewuste bedankpagina toont los van het contactformulier: 'De PDF met jouw naam erop staat in je inbox. Dit is trouwens exact het soort geautomatiseerde flow dat we ook voor klanten bouwen — nieuwsgierig? WhatsApp ons.' Dat verandert een gebroken belofte in een levend portfolio-item.

### 5. Twee cases dragen een pulserend 'Live'-label terwijl de pagina's daarachter volledig leeg zijn {#de-wantrouwende-eerste-bezoeker-twee-cases-dragen-een-pulserend-live-label-terwijl-de-paginas-daarachter-volledig-leeg-zijn}

**Persona:** De wantrouwende eerste-bezoeker — klikt door naar portfolio op zoek naar tastbaar bewijs van softwarewerk  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Vanaf /portfolio klikt de bezoeker op 'CASE BEKIJKEN' bij Chefs Connect — de kaart toonde net nog een pulserend groen bolletje bij 'STATUS: Live' (portfolio/page.tsx:264) en op de indexkaart een placeholder met 'VOORVERTONING VOLGT'. Op de case-pagina zelf (die wél een volwaardig CaseStudyTemplate-sjabloon laadt) ziet hij: geen uitdaging, geen aanpak, geen features, geen galerij, geen quote — alleen de titel, hero-video en een lege witruimte waar acht content-blokken hadden moeten staan.

**Trust/behoefte-trigger.** Een expliciete, geanimeerde 'Live'-statusclaim staat lijnrecht tegenover een pagina die aantoonbaar geen enkel inhoudelijk bewijs bevat — het tegenovergestelde van wat 'Live' belooft.

**Wat er nu misgaat.** src/app/portfolio/chefs-connect/page.tsx:5-58 bevat letterlijk de ontwikkelaarscomment 'Design is af. Vul onderstaande velden in met de echte content' met lege arrays voor challenge, approach, features, gallery, results, metrics en quote (identiek voor auwt-aelse/page.tsx). Toch toont zowel src/app/page.tsx:1101 (homepage-featured-case) als src/app/portfolio/page.tsx:262-266 voor exact deze twee projecten een animerend 'Live'-statusbolletje naast de tekst 'Live'. Dit is precies de P0-bevinding uit docs/CRITIQUE-SITE-2026-07-14.md ('nergens écht bewijs van softwarewerk'), en voor de persona die hier specifiek komt om bewijs te zoeken, voelt 'nog geen tijd gehad' hier aan als 'hier wordt iets verborgen'.

**Award-winning oplossing.** Tot de echte content klaar is: vervang de pulserende 'Live'-badge door een eerlijke, niet-geanimeerde 'IN OPBOUW'-status — en maak daar een sterk punt van in plaats van een zwakte, in dezelfde visuele taal als het bestaande 'Het Traject'-tijdlijnblok op de homepage. Toon op de case-pagina zelf een mini-build-log: 'CONCEPT — afgerond · DEVELOPMENT — live op staging · CONTENT — in verwerking', met een echte datumstempel. Dat is exact de transparantie ('geen black box') die Fase 3 van het traject al belooft aan klanten — pas het toe op je eigen portfolio en de lege pagina wordt een bewijs van werkwijze in plaats van een gat in het bewijs. Vul ondertussen minimaal het challenge/approach-blok met 2-3 zinnen per case zodat er sowieso geen volledig lege pagina meer bestaat vóór de volgende externe share van deze case.

### 6. De oprichter is op de hele site zichtbaar, maar naamloos {#de-wantrouwende-eerste-bezoeker-de-oprichter-is-op-de-hele-site-zichtbaar-maar-naamloos}

**Persona:** De wantrouwende eerste-bezoeker — wil weten wie er precies aan de andere kant van de lijn zit voordat hij zijn telefoonnummer via WhatsApp deelt  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Op zowel /over-ons als de 'Waarom Dynique'-sectie van de homepage staat een zwart-wit, hoog-contrast gefilterde portretfoto (grayscale, contrast 1.15) met als enig bijschrift 'OPRICHTER · DYNIQUE' (page.tsx:495, over-ons/page.tsx:139). De bezoeker wil, voordat hij een privékanaal als WhatsApp opent met zijn telefoonnummer, weten met wie hij spreekt — hij zoekt een naam om te Googelen of op LinkedIn te checken. Die naam staat nergens in zichtbare tekst op /over-ons, ook niet in de 'pull quote'-sectie er direct onder.

**Trust/behoefte-trigger.** De behoefte om te weten 'met wie ga ik in zee' vóórdat persoonlijke contactgegevens worden uitgewisseld via een privékanaal in plaats van een geanonimiseerd bedrijfsformulier.

**Wat er nu misgaat.** src/app/over-ons/page.tsx:139 en src/app/page.tsx:495 tonen beide uitsluitend 'OPRICHTER · DYNIQUE' — geen voor- of achternaam, geen LinkedIn-link, geen bio met opleiding of werkervaring (bevestigd: geen enkel treffer voor 'opleiding', 'linkedin' of 'diploma' in over-ons/page.tsx). De naam 'Tom Creemers' staat wél in de broncode, maar uitsluitend verstopt in JSON-LD (src/app/layout.tsx:162, als auteur van de reviews) — onzichtbaar voor elke bezoeker die niet 'view source' doet. Voor een persona die expliciet 'over ons' checkt vóórdat hij de rest serieus neemt, is een naamloze, sterk gefilterde stockfoto-achtige presentatie het tegenovergestelde van wat hij zoekt — en staat in schril contrast met de wél zeer specifieke, verifieerbare bedrijfsgegevens (KVK-nummer, exact adres) elders op dezelfde footer.

**Award-winning oplossing.** Zet de naam er gewoon bij: 'TOM CREEMERS · OPRICHTER' op beide plekken, met op /over-ons direct een klikbare LinkedIn-link. Til dit naar een echt onderscheidend niveau met een 'credibility hover card' — een micro-interactie (bekend van GitHub/X-geverifieerde profielen, hier vertaald naar een klein, technisch bureau) die bij hover/tap over de foto een compact kaartje toont: naam, sinds-wanneer-actief, KVK-koppeling, LinkedIn-icoon, aantal opgeleverde cases — allemaal linkend naar verifieerbare bronnen. Dat is twee tekstregels en één interactiepatroon, en verandert een anonieme stockfoto in een persoon die een sceptische bezoeker binnen tien seconden kan verifiëren zonder de pagina te verlaten.

### 7. Organization-schema declareert nul externe profielen — sameAs: [] {#de-wantrouwende-eerste-bezoeker-organization-schema-declareert-nul-externe-profielen-sameas}

**Persona:** De wantrouwende eerste-bezoeker — inspecteert de structured data zoals een inkoopafdeling dat zou laten doen  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een technisch onderlegde inkoper of diens IT-afdeling inspecteert bij het vooronderzoek voor een leverancierscontract de JSON-LD van de site (view-source of een SEO-tool). Het Organization-object bevat het 'sameAs'-veld — het schema.org-mechanisme dat normaal linkt naar LinkedIn, KVK-uittreksel, Trustpilot of andere onafhankelijke profielen die machinaal bevestigen dat een bedrijf ook buiten zijn eigen website bestaat.

**Trust/behoefte-trigger.** Een technische due-diligence-check die zou moeten bevestigen dat het bedrijf vindbaar en verifieerbaar is buiten de eigen, zelf-gecontroleerde website om.

**Wat er nu misgaat.** src/app/layout.tsx:150 bevat letterlijk "sameAs": [] — een lege array, in het enige Organization-schema dat de hele site heeft. Dit is consistent met de rest van de bevindingen: nergens op de site staat een link naar een LinkedIn-bedrijfspagina, een KVK-handelsregisterpagina of enig ander extern profiel (0 treffers voor 'linkedin.com', 'google.com/maps' of 'trustpilot' in de volledige codebase). Voor de doelgroep uit PRODUCT.md ('grotere bedrijven ... die eerst willen weten met wie ze in zee gaan') is dit precies het technische spoor dat ontbreekt op het moment dat een procurement-checklist wordt afgevinkt — en het is ook het spoor dat AI-samenvattingen en zoekmachines gebruiken om een bedrijf te cross-referencen.

**Award-winning oplossing.** Vul sameAs met minimaal: de KVK-handelsregisterpagina (kvk.nl met nummer 90531264), een LinkedIn-bedrijfspagina (ook als eenmanszaak in 10 minuten aan te maken) en, zodra beschikbaar, het Google Business Profile uit bevinding #2. Maak deze koppeling zichtbaar, niet alleen machinaal: voeg een compacte 'Geverifieerd via'-rij toe aan de footer, direct naast het KVK-nummer, met drie kleine, herkenbare platformiconen die linken naar exact dezelfde drie bronnen als sameAs. Zo vinden zowel mensen als machines (en AI-zoekmachines, relevant voor de vindbaarheids-kant van de positionering) dezelfde onafhankelijke bevestiging op precies de plek waar een sceptische bezoeker al aan het zoeken is: de footer, naast de bedrijfsgegevens.

### 8. 'Technische opleiding en jarenlange praktijkervaring' zonder één enkel controleerbaar detail {#de-wantrouwende-eerste-bezoeker-technische-opleiding-en-jarenlange-praktijkervaring-zonder-n-enkel-controleerbaar-detail}

**Persona:** De wantrouwende eerste-bezoeker — wantrouwt gladde marketingtaal en test elke expertise-claim op specificiteit  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** In de 'Waarom Dynique'-sectie op de homepage leest de bezoeker: 'Uniek in resultaat omdat er een technische opleiding en jarenlange praktijkervaring achter elk project zit — projectmatig, correct en veilig' (page.tsx:446). Hij zoekt actief naar wélke opleiding, hoeveel jaar, en bij welke eerdere werkgevers of projecten die ervaring is opgebouwd — precies het soort claim dat hij als 'gladde marketingtaal' bestempelt tenzij het wordt onderbouwd.

**Trust/behoefte-trigger.** Een generieke autoriteitsclaim ('opleiding', 'jarenlange ervaring') zonder één enkel controleerbaar detail, terwijl deze ene zin de kern-geloofwaardigheid van de hele 'technisch onderlegd'-merkwaarde uit PRODUCT.md moet dragen.

**Wat er nu misgaat.** src/app/page.tsx:446 bevat de zin ongewijzigd; nergens op /over-ons, in een cv-sectie, of via een externe link (die sowieso ontbreekt, zie de sameAs-bevinding) wordt dit geconcretiseerd. Geen naam van een opleiding, geen jaartal, geen eerdere werkgever, geen certificaat-badge, geen GitHub-profiel. Vergelijk dit met de wél zeer specifieke, verifieerbare claims elders op dezelfde site (KVK-nummer 90531264, exact adres in Vaals, 24u-reactietijd) — die zijn controleerbaar; deze ene zin, die de technische geloofwaardigheid van de hele onderneming moet dragen, is dat als enige niet.

**Award-winning oplossing.** Vervang de vage zin door één concrete, verifieerbare regel op /over-ons: naam van de opleiding of richting, jaar van afstuderen of aantal jaar praktijkervaring als hard getal (bijvoorbeeld '8+ jaar software- en webontwikkeling, sinds [jaar] zelfstandig'). Til dit naar Design Principle 1 ('bewijs door precisie, niet door beloftes') door er een klein, tastbaar 'bewijs, geen beweringen'-blok van te maken: drie compacte, klikbare credential-badges naast elkaar — opleiding/diploma, een publiek GitHub-profiel met eigen commits, en een cloud- of framework-certificering indien aanwezig — in dezelfde nuchtere, hairline-stijl als de rest van de site. Eén getal, één naam en drie klikbare bewijsstukken veranderen een marketingzin in een controleerbaar feit.

### 9. Verweesde pagina's /eerste-website en /vervanging vertellen nog het oude, tegenstrijdige bedrijfsverhaal — en staan relatief hoog gewaardeerd in de sitemap {#de-wantrouwende-eerste-bezoeker-verweesde-paginas-eerste-website-en-vervanging-vertellen-nog-het-oude-tegenstrijdige-bedrijfsverhaal-en-staan-relatief-hoog-gewaardeerd-in-de-sitemap}

**Persona:** De wantrouwende eerste-bezoeker — komt niet via de homepage binnen maar via een oude zoekresultaat- of gedeelde link  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een bezoeker googelt 'website laten maken Limburg' of klikt op een oude gedeelde link en komt op /vervanging terecht — een pagina die in geen enkel menu, footer-link of de Adviseur-quiz voorkomt, maar wel actief in sitemap.ts staat met een relatief hoge prioriteit (0.75, hoger dan bijvoorbeeld de blog-artikelen op 0.70-0.75). Hij leest de subkop 'Van verouderde site naar moderne website in 7-14 dagen' (regel 251) en dezelfde Tom Creemers-quote als op de homepage, zonder enig signaal dat hij op een andere, oudere versie van het bedrijf is beland.

**Trust/behoefte-trigger.** Twee volledig verschillende posities van hetzelfde bedrijf, afhankelijk van welke URL toevallig eerst wordt bezocht — zonder dat de bezoeker weet dat hij een 'oude laag' van de site heeft geraakt.

**Wat er nu misgaat.** src/app/sitemap.ts:51-52 houdt /eerste-website (priority 0.78) en /vervanging (priority 0.75) indexeerbaar en relatief hoog gewaardeerd voor Google, terwijl geen enkele navigatie-ingang (Header, Footer, homepage, Adviseur-quiz) ernaar linkt — exact zoals docs/CRITIQUE-SITE-2026-07-14.md al op 14 juli signaleerde, nog steeds ongewijzigd na de rebrand-commit van 3 september. Beide pagina's spreken consequent over '7-14 dagen' trajecten (vervanging/page.tsx:204,209,251,303 en eerste-website/page.tsx:316) — het tegenovergestelde tempo-verhaal van de huidige 'maatwerk software voor grotere bedrijven'-positionering, die juist fasegewijze, doordachte trajecten belooft. Voor deze persona, die per definitie meerdere paden naar de site test, voelt dit als een tweede bedrijf onder dezelfde naam.

**Award-winning oplossing.** Maak een bewuste keuze in plaats van een niemandsland: als deze pagina's geen actieve funnel meer zijn, redirect ze (301) naar /diensten/web of /contact en verwijder ze uit sitemap.ts — tien minuten werk dat voorkomt dat Google en oude backlinks bezoekers naar een tegenstrijdig verhaal blijven sturen. Als ze wél bewaard moeten blijven voor een kleinere doelgroep náást de nieuwe focus, herschrijf dan de hero-belofte en statistieken naar de huidige tone-of-voice en het huidige goud, en geef ze een bewuste, herkenbare plek: een klein, eerlijk gelabeld 'Kleiner project?'-linkje onderaan de footer, zodat een bezoeker weet dat hij bewust naar een ander traject doorklikt in plaats van per ongeluk een oudere laag van de site te ontdekken.

### 10. '100% Vaste prijs' wordt in de FAQ van dezelfde pagina alweer genuanceerd {#de-wantrouwende-eerste-bezoeker-100-vaste-prijs-wordt-in-de-faq-van-dezelfde-pagina-alweer-genuanceerd}

**Persona:** De wantrouwende eerste-bezoeker — leest de 'kleine lettertjes' van elke stellige claim  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** In het conversieblok van de homepage ziet de bezoeker drie grote statistieken naast elkaar: '24u Reactietijd', '100% Vaste prijs', '3 Revisierondes' (page.tsx:971-982). Hij scrollt door naar de FAQ, eveneens op de homepage, en leest bij 'Wat als de scope tijdens het project verandert?': 'Dat gebeurt vaker dan je denkt... We bespreken de impact op planning en prijs zodra het zich voordoet' (regel 238).

**Trust/behoefte-trigger.** Een absolute, als hard feit gepresenteerde garantie ('100%') die in de kleine lettertjes van dezelfde pagina blijkt te kunnen wijzigen zodra de scope verandert.

**Wat er nu misgaat.** src/app/page.tsx:973 toont '100%' / 'Vaste prijs' als onvoorwaardelijke statistiek in een prominente, groot-getypte tegel, terwijl de FAQ-entry op regel 238 expliciet toegeeft dat scopewijzigingen de prijs beïnvloeden. Beide teksten staan op dezelfde pagina, geschreven door hetzelfde team, en spreken elkaar tegen zodra een lezer verder scrolt dan het eerste conversieblok — precies het gedrag dat deze persona structureel vertoont.

**Award-winning oplossing.** Vervang de misleidende '100%' door een formulering die exact overeenkomt met de FAQ: 'Vaste prijs per fase' in plaats van '100% Vaste prijs' in de statistiektegel, met een kleine voetnoot-asterisk die direct naar de betreffende FAQ-entry scrollt/linkt ('Wat als de scope verandert? →'). Een concrete, iets bescheidener claim die overal op de site consistent klopt, bouwt meer vertrouwen op dan een rond getal dat één scroll later wordt tegengesproken — en is precies de 'eigenzinnig eerlijk'-merkwaarde die PRODUCT.md als kernonderscheid noemt, hier letterlijk toegepast op de eigen prijsclaim.

### 11. Portfolio-statistieken beloven 'Bedrijven' en 'Nederland & België', maar alle vijf cases zijn Nederlandse horeca- en artiesten-eenmanszaken {#de-wantrouwende-eerste-bezoeker-portfolio-statistieken-beloven-bedrijven-en-nederland-belgi-maar-alle-vijf-cases-zijn-nederlandse-horeca--en-artiesten-eenmanszaken}

**Persona:** De wantrouwende eerste-bezoeker — telt hoeveel van de getoonde cases eigenlijk aansluiten bij zijn eigen situatie  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een besluitvormer bij een in België gevestigd, groter bedrijf bekijkt /portfolio en leest de statistiekenstrip bovenaan: 'SECTOREN: Horeca · Cultuur · Bedrijven' en 'BEREIK: Nederland & België' (portfolio/page.tsx:198-210). Hij scrollt door de vijf getoonde cases: een culinair platform, een bistro, een ijssalon, een zangeres en een freelance bureau — stuk voor stuk kleine, Nederlandse, horeca- of creatieve eenmanszaken. Hij checkt daarna de bedankpagina die na het contactformulier verschijnt en ziet daar óók nog een losstaande claim: '30+ klanten' (bedankt/page.tsx:84), een getal dat nergens anders op de site terugkomt.

**Trust/behoefte-trigger.** Meerdere brede, geruststellende cijferclaims over bereik, sectorspreiding en klantenaantal die door geen van de daadwerkelijk zichtbare bewijsstukken worden gestaafd voor precies zijn eigen situatie (groter bedrijf, België, 'bedrijven'-sector, maatwerk software).

**Wat er nu misgaat.** src/app/portfolio/page.tsx:198-210 toont de stat-strip met 'BEREIK: Nederland & België' en 'SECTOREN: ... Bedrijven', maar de projects-array (regels 21-67) bevat uitsluitend Nederlandse horeca-/artiest-/freelance-projecten — geen Belgische klant, geen 'bedrijven'-project in de zin van interne systemen of procesautomatisering. src/app/bedankt/page.tsx:84 voegt daar een derde, ongefundeerde cijferclaim aan toe ('30+ klanten') die met vijf zichtbare cases niet te rijmen valt. PRODUCT.md bevestigt zelf dat er 'al minstens één concrete maatwerk-softwarecase voor een groter bedrijf' bestaat maar bewust nog niet is toegevoegd — precies het bewijs dat deze persona nodig heeft, ontbreekt zichtbaar terwijl de statistiekenstrip en de bedankpagina wél alvast het bredere verhaal claimen.

**Award-winning oplossing.** Verklein elke claim tot wat vandaag aantoonbaar waar is: 'SECTOREN: Horeca · Cultuur · Freelance' in plaats van 'Bedrijven', 'BEREIK: Limburg & omstreken' in plaats van 'Nederland & België', en verwijder '30+ klanten' van de bedankpagina totdat er een onderbouwd getal is. Voeg direct onder de stat-strip één zin toe die de kloof eerlijk overbrugt in plaats van verbergt: 'Onze eerste maatwerk-softwarecase voor een groter bedrijf verschijnt hier binnenkort — neem contact op als je nu al referenties wilt.' Zodra de eerste grotere-bedrijf-case live gaat, plaats die dan prominent bovenaan (vóór de horeca-cases) en werk de statistiekenstrip in dezelfde commit bij — zo wordt de huidige beperking een eerlijk, transparant signaal in plaats van een stille overclaim op drie plekken tegelijk.

### 12. 'Veel van onze Eindhovense klanten' zonder één zichtbare Eindhovense klant in het hele portfolio {#de-wantrouwende-eerste-bezoeker-veel-van-onze-eindhovense-klanten-zonder-n-zichtbare-eindhovense-klant-in-het-hele-portfolio}

**Persona:** De wantrouwende eerste-bezoeker uit Eindhoven — checkt of het bureau ook echt in zijn eigen regio heeft gewerkt  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een ondernemer in de Brainport-regio vindt /locaties/eindhoven via Google en leest de FAQ 'Kunnen jullie volledig in het Engels werken?' met als antwoord: 'Absoluut. Veel van onze Eindhovense klanten communiceren standaard in het Engels' (regel 39). Hij klikt door naar /portfolio om die Eindhovense klanten te zien en vindt ze niet — alle vijf cases zijn in of rond Vaals gevestigd, ruim 100 km verderop.

**Trust/behoefte-trigger.** Een feitelijk geformuleerde, plurale claim over een bestaand klantenbestand in zijn eigen stad, die hij vervolgens niet kan terugvinden in het enige bewijsmateriaal dat de site aanbiedt.

**Wat er nu misgaat.** src/app/locaties/eindhoven/page.tsx:39 stelt de Engelstalige-Eindhovense-klanten-claim als vaststaand feit, terwijl geen van de vijf portfolio-cases (chefs-connect, auwt-aelse, ijssalon-italia, stacy-kohnen, creemers-exclusive) een Eindhovense klant is. Dezelfde discrepantie geldt in lichtere mate voor de andere locatiepagina's, maar is bij Eindhoven het scherpst omdat de claim zo specifiek is ('veel', 'standaard Engels') terwijl er letterlijk nul zichtbare bewijsstukken tegenover staan.

**Award-winning oplossing.** Verwijder de ongefundeerde pluralis-claim of vervang hem door een eerlijke, toekomstgerichte formulering: 'We werken projectmatig en volledig in het Engels waar dat nodig is — ook als je onze eerste Eindhovense klant wordt.' Nog sterker: zodra de eerste Brainport-klant binnen is, voeg dan een klein, herkenbaar 'IN EINDHOVEN'-badge toe aan die case in de portfolio-grid én aan de locatiepagina zelf, zodat toekomstige Eindhovense bezoekers direct herkenbaar, lokaal bewijs vinden in plaats van een claim die ze op hun woord moeten geloven.

### 13. Alle vijf locatiepagina's beloven nog het oude '7-14 dagen'-tempo, al in het Google-zoekresultaat zelf {#de-wantrouwende-eerste-bezoeker-alle-vijf-locatiepaginas-beloven-nog-het-oude-7-14-dagen-tempo-al-in-het-google-zoekresultaat-zelf}

**Persona:** De wantrouwende eerste-bezoeker — vergelijkt meerdere locatiepagina's om te zien of het bureau lokaal maatwerk levert of gewoon een sjabloon dupliceert  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** De bezoeker opent na Eindhoven ook /locaties/maastricht, /locaties/heerlen, /locaties/sittard en /locaties/aken om te vergelijken. In de meta-description van alle vijf pagina's — zichtbaar in het Google-zoekresultaat en het browsertabblad, dus vóór hij ooit echt op de site klikt — staat nog steeds een variant van 'Binnen 7–14 dagen live, vaste prijs, persoonlijk contact.'

**Trust/behoefte-trigger.** Een snelheidsbelofte die hoort bij een goedkope, eenvoudige website voor een kleine ondernemer — niet bij het 'maatwerk software voor grotere bedrijven'-verhaal dat de homepage vertelt — en die de bezoeker al ziet vóórdat hij ooit klikt.

**Wat er nu misgaat.** Geverifieerd in alle vijf bestanden: src/app/locaties/maastricht/page.tsx:6 ('Binnen 7–14 dagen live'), heerlen/page.tsx:6, sittard/page.tsx:6, eindhoven/page.tsx:6, én aken/page.tsx:6 (Duitstalig: 'In 7–14 Tagen online') bevatten stuk voor stuk nog dezelfde oude, kleinschalige tempo-belofte in hun meta-description — dit is dus niet vier van de vijf pagina's zoals eerder werd aangenomen, het is letterlijk alle vijf. Omdat dit in de meta-description staat, ziet de bezoeker het al in het Google-zoekresultaat, vóór hij ooit op de site zelf komt — het allereerste contactmoment spreekt de homepage-positionering al tegen.

**Award-winning oplossing.** Herschrijf alle vijf meta-descriptions naar een claim die past bij maatwerk software, bijvoorbeeld: 'Maatwerk software en digitale platformen voor bedrijven in en rond [stad]. Vast aanspreekpunt, heldere planning per fase.' Dit is een tekstuele wijziging van één regel in vijf bestanden — geen herontwerp — met direct effect op wat elke sceptische bezoeker al ziet vóórdat hij ooit klikt, en het sluit tegelijk de discrepantie met de homepage-positionering die op elke andere pagina inmiddels wél is doorgevoerd.

### 14. Vijf locatiepagina's, vijf willekeurige, onverklaarde accentkleuren {#de-wantrouwende-eerste-bezoeker-vijf-locatiepaginas-vijf-willekeurige-onverklaarde-accentkleuren}

**Persona:** De wantrouwende eerste-bezoeker — merkt patronen op die op sjabloon-/AI-generatie wijzen in plaats van doordacht maatwerk  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Bij het doorklikken van /locaties/maastricht (goud #d4a574) naar /locaties/heerlen (violet #a78bfa) naar /locaties/sittard (oranje #fb923c) naar /locaties/aken (rood #ef4444) valt de bezoeker op dat elke stad een andere, niet-gebrandeerde kleur krijgt (allemaal expliciet gedefinieerd op regel 27 van elk bestand), zonder enige zichtbare logica — geen kleurcode per provincie, geen legenda, geen verklaring.

**Trust/behoefte-trigger.** Een terugkerend, contextloos patroon dat de indruk wekt van automatisch gegenereerde paginavarianten in plaats van doordacht, één-op-één maatwerk — precies de 'AI-gemaakt'-associatie die deze persona actief zoekt en die het merk juist wil vermijden.

**Wat er nu misgaat.** Geverifieerd: maastricht/page.tsx:27 en eindhoven/page.tsx:27 gebruiken het merkgoud #d4a574, maar heerlen/page.tsx:27 (#a78bfa, violet), sittard/page.tsx:27 (#fb923c, oranje) en aken/page.tsx:27 (#ef4444, rood) wijken zonder aanwijsbare reden af van het merk-accent dat de rest van de site (homepage, over-ons, contact, diensten) consistent gebruikt. Dit is exact het patroon dat docs/CRITIQUE-SITE-2026-07-14.md als 'Minor Observation' noteerde en dat na de September-rebrand nog steeds niet is rechtgetrokken — vijf pagina's met identieke structuur en willekeurig verschillende kleuren is precies het 'template, geen vakmanschap'-signaal dat het rapport benoemt.

**Award-winning oplossing.** Breng alle vijf locatiepagina's terug naar het merkgoud #d4a574 als primair accent — consistentie is hier sterker dan variatie voor een merk dat 'doordacht & precies' als kernwaarde claimt. Als visuele differentiatie tussen steden gewenst blijft, koppel de kleur dan aan iets betekenisvols en uitlegbaars — bijvoorbeeld een klein, consistent gestileerd stadsicoon of -silhouet naast de titel in plaats van een paginabrede accentkleur — zodat elke ontwerpkeuze een reden heeft die een oplettende bezoeker kan navertellen, in plaats van vijf willekeurige hex-codes die toevallig bij vijf steden horen.

### 15. Twee verschillende 'live'-URL's voor hetzelfde Creemers Exclusive-project, waarvan één een onbewerkte preview-subdomein {#de-wantrouwende-eerste-bezoeker-twee-verschillende-live-urls-voor-hetzelfde-creemers-exclusive-project-waarvan-n-een-onbewerkte-preview-subdomein}

**Persona:** De wantrouwende eerste-bezoeker — controleert kruislings of 'bewijs'-links naar dezelfde plek verwijzen  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** De bezoeker klikt in de homepage-review op de 'Verify'-link bij Creemers Exclusive (verifyUrl: 'https://creemersexclusive.nl', page.tsx:616) en later, vanaf de case-study-pagina zelf, op de knop 'BEKIJK LIVE WEBSITE' (creemers-exclusive/page.tsx:75) — en komt uit op 'https://creemers.pages.dev', een generiek, onbewerkt Cloudflare Pages-preview-subdomein.

**Trust/behoefte-trigger.** Twee 'bewijs'-links voor exact hetzelfde project die niet naar dezelfde plek leiden, ontdekt door iemand die actief op zoek is naar inconsistenties om zijn wantrouwen te bevestigen.

**Wat er nu misgaat.** src/app/page.tsx:616 gebruikt verifyUrl 'https://creemersexclusive.nl' voor de reviewsectie, terwijl src/app/portfolio/creemers-exclusive/page.tsx:75 als live-link 'https://creemers.pages.dev' gebruikt — een preview-subdomein in plaats van het eigen, net elders genoemde domein. Voor een klant-case die als bewijs van geleverd, afgerond werk moet dienen, is een generieke .pages.dev-URL naast een net getoonde eigen-domeinnaam een tweede, onbedoelde knipoog naar 'nog niet helemaal afgerond' — precies op de pagina die het tegendeel moet bewijzen.

**Award-winning oplossing.** Zorg dat beide plekken naar hetzelfde, definitieve domein linken (creemersexclusive.nl, het live, aangekochte domein) en verwijder elke verwijzing naar de .pages.dev-preview-URL uit klantgerichte content — dit is een eenregelige aanpassing in creemers-exclusive/page.tsx:75. Voeg als structurele borging een korte checklist toe aan het eigen opleverproces ('vóór livegang: alle live-links naar het eigen domein, niet naar het build-platform') zodat deze specifieke inconsistentie — die een persona die kruislings controleert per definitie gaat opzoeken — niet bij een volgende case terugkeert.

---

## Klant met trauma van een mislukt software-/IT-project

### 1. Vier tegenstrijdige reactietijd-claims op de twee pagina's waar de deal wordt gesloten {#klant-met-trauma-van-een-mislukt-software-it-project-vier-tegenstrijdige-reactietijd-claims-op-de-twee-paginas-waar-de-deal-wordt-gesloten}

**Persona:** Operationeel directeur bij een groothandel in bouwmaterialen (Zuid-Limburg, ~40 medewerkers) — de vorige IT-leverancier had een SLA van '1 werkdag' op papier staan, maar liet supporttickets na oplevering structureel 4 tot 9 dagen liggen zodra de eindfactuur betaald was  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Hij heeft leren wantrouwen wat leveranciers over reactietijd beweren, dus is 'de tijdsbelofte checken' een vaste stap in zijn shortlist-ritueel geworden: hij opent de homepage en de contactpagina in twee tabbladen naast elkaar en zoekt letterlijk naar een getal-mismatch, wetende dat wie zichzelf al tegenspreekt vóór het eerste gesprek, dat later bij de uitvoering zeker ook doet.

**Trust/behoefte-trigger.** Binnen twee scrollacties op de homepage staat '24u / Reactietijd' in het conversieblok-statistiekenrijtje; een paar honderd pixels lager, in het contactblok van diezelfde pagina, staat 'REACTIETIJD: Binnen 2 uur (ma–za, 9–20u)'. Hij vindt de tegenspraak dus niet eens over twee pagina's — hij vindt hem in één scroll-sessie.

**Wat er nu misgaat.** src/app/page.tsx bevat het cijfer '24u' drie keer (regel 964, 972 als stat-object { n: "24u", label: "Reactietijd" }, en 1229) en '2 uur' twee keer (regel 1235: { label: "REACTIETIJD", value: "Binnen 2 uur (ma–za, 9–20u)" }, herhaald op /contact regel 13). Op /contact staat de hero-tekst 'We reageren altijd binnen 24 uur — meestal veel eerder' (regel 134) letterlijk boven diezelfde '2 uur'-claim uit de DETAILS-array. Vijf voorkomens, twee onverenigbare getallen, op exact de twee plekken waar iemand met dit wantrouwen het langst stilstaat voordat hij een formulier invult.

**Award-winning oplossing.** Vervang alle vijf voorkomens door één belofte: 'Binnen 2 werkuren, ma–za 9–20u, altijd door dezelfde persoon.' Ga daarna verder dan tekst en maak de belofte zelf controleerbaar — precies het principe dat PRODUCT.md als merkstandaard noemt ('bewijs door precisie, niet door beloftes'). Vervang het statische '24u'-blok in het conversieblok door een klein, eerlijk paneel dat uit echte data leeft: 'Laatste 10 aanvragen — gemiddeld beantwoord in 41 minuten', gevoed door een tijdstempel-logje rond het bestaande WhatsApp-/formulierkanaal. Een IT-consultancy durft dit niet — te riskant voor een marketingclaim. Een oprichter die zijn eigen snelheid laat meekijken, wél. Dat verschil ís de positionering.

### 2. De twee grootste portfolio-cases zijn zichtbaar onaf — precies het patroon dat hem hierheen dreef {#klant-met-trauma-van-een-mislukt-software-it-project-de-twee-grootste-portfolio-cases-zijn-zichtbaar-onaf-precies-het-patroon-dat-hem-hierheen-dreef}

**Persona:** Eigenaar van een installatiebedrijf (elektra & domotica, Parkstad) — de vorige partij leverde een half werkend planningssysteem op, verdween daarna van de radar en liet hem met €22.000 aan onbruikbare code achter  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Hij klikt bewust niet op de kleinste cases eerst. Vanaf de homepage-portfoliosectie of /portfolio gaat hij rechtstreeks naar Chefs Connect en Auwt Aelse — de twee projecten die het meest op 'een systeem', niet 'een website', lijken — omdat hij niet meer afgaat op wat een leverancier beweert te kunnen, alleen nog op wat hij kan zien dat al is opgeleverd.

**Trust/behoefte-trigger.** Het moment waarop een pagina die bewijs zou moeten leveren, zelf het bewijs is dat een traject halverwege is blijven steken — nu op de site van de partij die claimt dat hem dat hier niet zal overkomen.

**Wat er nu misgaat.** src/app/portfolio/auwt-aelse/page.tsx bevat letterlijk de ontwikkelaarscommentaar 'Design is af. Vul onderstaande velden in met de echte content.' (regel 5-9); challenge, approach, features, gallery, results, metrics, quote en quoteAuthor zijn allemaal lege arrays of lege strings (regel 31-54). src/app/portfolio/chefs-connect/page.tsx heeft exact dezelfde scaffolding, exact dezelfde comment. Beide staan zonder enige waarschuwing tussen de wél volledig uitgewerkte cases (IJssalon Italia, Stacy Kohnen) in dezelfde grid op /portfolio — een bezoeker met dit trauma klikt van een sterke case rechtstreeks een lege door, zonder overgang.

**Award-winning oplossing.** Vul challenge/approach/features met minimaal 2-3 zinnen per blok — genoeg om de lege-pagina-indruk weg te nemen. Ga daarna verder dan tekst invullen: bouw een 'Bouwlog'-tijdlijn in de CaseStudyTemplate — een verticale, scroll-gestuurde reeks gedateerde mijlpalen (intake, prototype-akkoord, fase-opleveringen, livegang) met een geanonimiseerde screenshot van het echte planbord per stap. De site heeft al een scroll-scrubbed voor/na-demo op de homepage; dit hergebruikt datzelfde interactiepatroon om proces zichtbaar te maken in plaats van alleen resultaat — precies het bewijs dat iemand met een halfafgemaakt project van €22.000 zoekt. Tot die content klaar is: filter beide lege cases tijdelijk uit de /portfolio-grid — drie complete cases overtuigen meer dan vijf waarvan twee zichtbaar half af zijn.

### 3. Geen vindbare Algemene Voorwaarden — eigendom, opzegging en aansprakelijkheid blijven ongedefinieerd tot het te laat is {#klant-met-trauma-van-een-mislukt-software-it-project-geen-vindbare-algemene-voorwaarden-eigendom-opzegging-en-aansprakelijkheid-blijven-ongedefinieerd-tot-het-te-laat-is}

**Persona:** Financieel directeur bij een logistiek bedrijf (Venlo-regio) — voerde vorig jaar een juridisch geschil over broncode-eigendom met een voormalige softwareleverancier, omdat er bij de start nooit iets schriftelijk over eigendom was vastgelegd  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Hij heeft na dat geschil een vaste routine: voordat hij ook maar een adviesgesprek aanvraagt, scrollt hij naar de footer van elke kandidaat-leverancier op zoek naar een 'Algemene Voorwaarden'- of 'Terms'-link. Geen advocaat inschakelen voor een eerste gesprek — hij wil alleen weten of er iets bestaat om later naar terug te wijzen.

**Trust/behoefte-trigger.** Het zoeken naar, en niet vinden van, een schriftelijk kader voor broncode-eigendom, opzegtermijnen en aansprakelijkheid — vóórdat er ook maar een gesprek plaatsvindt, laat staan een aanbetaling.

**Wat er nu misgaat.** Een zoekactie door de volledige src/-boom op 'voorwaarden', 'broncode-eigendom' en 'geschil' levert nul actieve treffers op buiten blogtekst en de privacyverklaring. Footer.tsx (regel 143-145) linkt uitsluitend naar /privacyverklaring, die zich beperkt tot AVG en gegevensverwerking en met geen woord rept over code-eigendom, opzegging of geschillen. Er bestaat op dit moment geen /voorwaarden-route in src/app/ — de enige plek waar 'eigendom' als thema al wordt aangeraakt is een blogparagraaf (zie casus 6), niet een juridisch kader.

**Award-winning oplossing.** Publiceer een korte, leesbare voorwaardenpagina met een expliciete sectie 'Eigenaarschap' die letterlijk antwoord geeft op de vraag die Dynique's eigen blogpost (/blog/wat-kost-een-website) aan lezers stelt. Maak het geen platte juridische tekst maar een bewijsstuk: toon één geanonimiseerd, echt schermbeeld van een GitHub-repository-overdracht naar het account van een klant, met bijschrift 'Bij elke opgeleverde fase gaat de broncode zo naar jouw eigen account.' Een tekstuele belofte is één ding — een zichtbaar, technisch artefact dat precies laat zien hoe overdracht eruitziet, is het soort 'bewijs door precisie' dat een jury zou onthouden. Link de pagina naast Privacyverklaring in de Footer en noem hem expliciet bij Fase 1/INTAKE in de Traject-sectie.

### 4. '100% Vaste prijs' wordt beweerd, niet mechanisch geborgd — en de offerte komt vóór het prototype dat de echte scope blootlegt {#klant-met-trauma-van-een-mislukt-software-it-project-100-vaste-prijs-wordt-beweerd-niet-mechanisch-geborgd-en-de-offerte-komt-vr-het-prototype-dat-de-echte-scope-blootlegt}

**Persona:** Manager bedrijfsvoering bij een zorginstelling (Heerlen) — vorig project liep van een begrote €15.000 naar een uiteindelijke €41.000 door meerwerk-facturen die pas achteraf, zonder vooraf schriftelijk akkoord, op zijn bureau belandden  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Voor hem is 'vaste prijs' een woord dat zijn vorige leverancier ook gebruikte tot de meerwerk-facturen begonnen. Hij scrolt niet op zoek naar een belofte, maar naar een mechanisme: een moment waarop hij, schriftelijk, akkoord moet geven vóórdat er extra wordt gefactureerd. Ontbreekt dat moment, dan is de tekst voor hem ruis.

**Trust/behoefte-trigger.** Leest de '100% Vaste prijs'-stat in het conversieblok op de homepage (regel 973) en zoekt direct naar de onderbouwing ernaast — een blote claim zonder mechanisme is exact het patroon dat hem €26.000 heeft gekost.

**Wat er nu misgaat.** De enige onderbouwing is FAQ-item 'Wat als de scope tijdens het project verandert?' (src/app/page.tsx regel 238): 'Dat gebeurt vaker dan je denkt, en is geen probleem. We bespreken de impact op planning en prijs zodra het zich voordoet — geen verrassingen achteraf.' Dit erkent zelf al dat de prijs kan wijzigen, zonder enig afdwingbaar mechanisme. Bovendien levert Fase 1/INTAKE al een 'Heldere offerte' op (regel 836), vóórdat Fase 2/CONCEPT het klikbare prototype oplevert dat de werkelijke scope pas blootlegt (regel 844) — de prijs wordt dus vastgezet vóórdat de scope-verrassingen normaal aan het licht komen.

**Award-winning oplossing.** Herschrijf de FAQ naar een concreet, schriftelijk mechanisme: 'Wijzigt de scope na de intake? Dan krijg je altijd eerst een schriftelijk wijzigingsvoorstel met het exacte prijsverschil, dat je expliciet goedkeurt vóórdat er wordt doorgewerkt.' Toon vervolgens hoe zo'n wijzigingsvoorstel er daadwerkelijk uitziet: een klein, geanonimiseerd voorbeeld-document (één scherm, ingeklapt te openen) rechtstreeks in de FAQ, zodat een bezoeker het akkoordmoment kan zíen in plaats van moeten geloven. Verander ook de procesvolgorde zelf zichtbaar: presenteer Fase 1's output niet als 'Heldere offerte' maar als 'Voorlopige bandbreedte', en verplaats de definitieve vaste prijs naar ná het klikbare prototype in Fase 2 met de tekst 'Je krijgt pas een vaste prijs zodra we het prototype hebben gezien — niet ervoor, want dan gokken we allebei.' Dat is 'eigenzinnig eerlijk' zichtbaar in het proces zelf, niet alleen beweerd in copy.

### 5. Geen enkele pagina, FAQ of Advisor-optie herkent 'een gestopt project overnemen' als vraag {#klant-met-trauma-van-een-mislukt-software-it-project-geen-enkele-pagina-faq-of-advisor-optie-herkent-een-gestopt-project-overnemen-als-vraag}

**Persona:** IT-verantwoordelijke bij een bouwbedrijf (Sittard-Geleen) — een freelancer stopte halverwege een intern urenregistratiesysteem, werd na een laatste factuur onbereikbaar, en liet hem achter met deels werkende, ongedocumenteerde code  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Hij staat niet aan het begin van een traject maar bij het puinruimen van een vorig traject: er ligt al halfafgemaakte, mogelijk slecht geschreven code van een andere partij, en er is geen documentatie om op terug te vallen. Hij zoekt specifiek een partij die durft te zeggen 'stuur maar door, dan kijken we ernaar' — niet alleen een partij die vanaf een leeg canvas begint.

**Trust/behoefte-trigger.** Zoekt naar bewoordingen als 'project overnemen', 'tweede opinie software' of 'ander bureau gestopt' — de zoektaal van iemand die al een mislukking achter de rug heeft, niet van iemand die nog moet kiezen tussen leveranciers.

**Wat er nu misgaat.** Een zoekactie op 'overnemen', 'tweede opinie' en 'vastgelopen project van een andere partij' levert nul treffers op. De vier startopties van de Advisor-quiz (src/components/Advisor.tsx, STEPS[0], regel 15-27: 'We werken nog met losse tools' / 'Ons systeem past niet meer' / 'We missen een eigen app of portaal' / 'We voelen het probleem, niet de oplossing') gaan er stilzwijgend van uit dat er nog geen bestaand, mislukt softwareproject is. Er is geen vijfde optie voor 'we hebben al iets laten bouwen dat niet afkwam' — een compleet ontbrekend segment, terwijl dit precies de zoekintentie van deze doelgroep is.

**Award-winning oplossing.** Voeg een vijfde Advisor-startoptie toe: { id: "overname", label: "We hebben al een systeem laten bouwen dat niet afkwam", desc: "Een vorig traject liep vast of werd nooit afgerond" }, met een eigen adviespad naar een concreet, benoemd protocol: een 'Code- & Scope-audit' — eerst een technische intake van de bestaande code (leesbaarheid, testdekking, risico's), vastgelegd in een kort, gedeeld auditrapport, vóórdat er over nieuwbouw wordt gepraat. Geef dit protocol een eigen naam en een eigen /diensten/project-redding-pagina met FAQ 'Kunnen jullie een gestopt project van een andere partij overnemen?' — een benoemde, herkenbare dienst in plaats van een generieke uitzondering, precies het soort onderscheidende naamgeving dat een jury opvalt tussen tien inwisselbare 'wij bouwen ook maatwerk'-bureaus. Pas Fase 1 van het Traject voor dit pad aan naar 'Technische intake van bestaande code'.

### 6. De eigen blogpost stelt vijf controlevragen, beantwoordt er slechts één gedeeltelijk — en juist niet voor het segment waar hij zelf in valt {#klant-met-trauma-van-een-mislukt-software-it-project-de-eigen-blogpost-stelt-vijf-controlevragen-beantwoordt-er-slechts-n-gedeeltelijk-en-juist-niet-voor-het-segment-waar-hij-zelf-in-valt}

**Persona:** Financieel-strategisch beslisser die stelselmatig eerst educatieve content leest vóór hij contact opneemt — bij zijn vorige traject vroeg hij tijdens de intake nooit door op eigendom en hosting, en betaalde daar achteraf voor  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Hij onthoudt concrete controlevragen uit content van kandidaat-leveranciers om die later tegen diezelfde leverancier te gebruiken — een gewoonte overgehouden aan een intake waarin hij precies dit soort vragen had moeten stellen en niet stelde.

**Trust/behoefte-trigger.** Leest /blog/wat-kost-een-website, komt bij 'Hoe weet je of een prijs eerlijk is?' met vijf expliciete controlevragen — Eigenaarschap, Hosting, SEO, Onderhoud, Levertijd (regel 84-88) — en gaat de rest van dynique.nl af om te checken of Dynique zelf op deze vijf punten scoort.

**Wat er nu misgaat.** Het artikel beantwoordt Eigenaarschap en Hosting deels wél, maar pas in de paragraaf 'Onze aanpak in een notendop' (regel 92): 'je krijgt alles in eigendom — inclusief code, designs en hostingsetup. Geen verborgen hostingmarges.' Het probleem: die belofte geldt expliciet alleen voor de website-prijsklasse. Twee zinnen verder (regel 94) staat letterlijk: 'Voor maatwerk software... geldt geen vaste prijstabel: dat bespreken we pas na een intake.' Precies het segment waar hij in valt, wordt dus stilzwijgend uitgezonderd van de enige eigendomsgarantie die de site geeft. En op geen enkele andere pagina — niet /diensten/processen, niet /contact, niet /over-ons — wordt deze belofte herhaald voor wie hier niet via dit ene blogartikel binnenkomt.

**Award-winning oplossing.** Voeg onderaan het blogartikel een ingesloten 'Dynique langs de meetlat'-tabel toe: vijf rijen die de vijf vragen herhalen, elk met een concreet antwoord en een link naar bewijs (Eigenaarschap → de nieuwe voorwaardenpagina met het GitHub-overdracht-schermbeeld uit casus 3). Cruciaal: laat deze tabel expliciet ook voor maatwerk software gelden — sluit het gat dat de huidige tekst zelf openlaat. Bouw de tabel als herbruikbaar component en plaats hem ook op /diensten/processen en onderaan het contactformulier, zodat iemand die niet via dit ene artikel binnenkomt dezelfde geruststelling krijgt. De content bestaat al voor 90% — het kost weinig om zichzelf er consequent aan te houden, en dat is precies het ongevraagd-meedenken dat PRODUCT.md als merkbelofte noemt.

### 7. Het contactformulier verstuurt niets zelf — de bezoeker moet in WhatsApp handmatig op verzenden drukken, zonder enige bevestiging dat het is aangekomen {#klant-met-trauma-van-een-mislukt-software-it-project-het-contactformulier-verstuurt-niets-zelf-de-bezoeker-moet-in-whatsapp-handmatig-op-verzenden-drukken-zonder-enige-bevestiging-dat-het-is-aangekomen}

**Persona:** Manager inkoop bij een groothandel — stuurde eerder een offerte-aanvraag naar een freelancer die nooit reageerde, en heeft sindsdien een hardnekkig wantrouwen tegen elk formulier dat geen bevestiging geeft  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Hij vult het volledige formulier op /contact in — bedrijfsnaam, projectomschrijving, budget-indicatie — en verwacht na het klikken een ontvangstbevestiging met referentie. In plaats daarvan opent er een nieuw tabblad met WhatsApp Web waarin hij zelf nog op verzenden moet drukken. Sluit hij dat tabblad per ongeluk, of heeft hij geen WhatsApp Web gekoppeld op zijn werklaptop, dan is zijn ingevulde formulier volledig verdwenen.

**Trust/behoefte-trigger.** Het ontbreken van enig bewijs dat de aanvraag daadwerkelijk is aangekomen — voor iemand die eerder een aanvraag in een zwart gat zag verdwijnen, is dit exact het risicomoment dat hij probeert te vermijden.

**Wat er nu misgaat.** src/app/contact/page.tsx doet in de submit-functie (regel 99) uitsluitend window.open() naar een wa.me-link: er wordt niets serverside opgeslagen, geen bevestigingsmail verstuurd, geen enkel record bewaard buiten wat de bezoeker zelf handmatig verstuurt. De tekst onder de knop erkent dit letterlijk: 'Je bericht opent voorgevuld in WhatsApp — jij verstuurt zelf.' (regel 241). Dat staat lijnrecht tegenover de sectie eronder, 'WAT GEBEURT ER HIERNA... Geen zwart gat' (regel 249-255) — de pagina belooft het tegenovergestelde van wat het formulier feitelijk doet.

**Award-winning oplossing.** Koppel het formulier aan een lichte backend (Resend/Cloudflare Function — dezelfde infrastructuur die toch al nodig is voor de gratis-checklist-flow uit casus 15) die bij versturen direct (a) een bevestigingsmail met kopie van de aanvraag en referentienummer naar de bezoeker stuurt, en (b) pas daarna de WhatsApp-deeplink opent als aanvullend snelkanaal. Toon direct na verzending een on-page bevestigingsstate met een eigen, opvraagbare status-URL: 'Aanvraag #DQ-2409 ontvangen om 14:12 — bewaar deze link, je kunt de status hier altijd terugvinden.' Zo'n persoonlijk, controleerbaar 'bonnetje' is precies het tegenovergestelde van het zwarte gat dat hij eerder meemaakte, en sterker dan een simpele bedanktekst.

### 8. Eén-persoonsbedrijf zonder enig zichtbaar antwoord op 'wat als jij uitvalt' {#klant-met-trauma-van-een-mislukt-software-it-project-en-persoonsbedrijf-zonder-enig-zichtbaar-antwoord-op-wat-als-jij-uitvalt}

**Persona:** Eigenaar van een installatiebedrijf — zijn vorige freelancer stopte plotseling met werken en werd onbereikbaar, exact het risico dat Dynique's eigen blog met naam en toenaam benoemt  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Hij wil nooit meer met een eenmansbedrijf werken zonder een concreet antwoord op continuïteit — zijn vorige project strandde toen zijn freelancer letterlijk stopte met reageren, midden in een fase waarvoor al was betaald.

**Trust/behoefte-trigger.** Leest op /over-ons de belofte 'Eén aanspreekpunt — Geen accountmanagers of doorverwijzingen. Je praat met degene die het ook bouwt.' (PROMISE-array, regel 18) en herkent hierin exact het risicoprofiel dat hem eerder is opgebroken: één persoon, geen back-up, geen vangnet.

**Wat er nu misgaat.** Nergens op de site — niet in de FAQ, niet op /over-ons, niet in de Traject-sectie — staat wat er gebeurt bij ziekte, uitval of stoppen van de oprichter. Opvallend genoeg benoemt Dynique's eigen blogpost dit exact als hét risico van een freelancer: 'Als de freelancer ziek wordt of stopt, sta je met lege handen.' (/blog/wat-kost-een-website, regel 46) — zonder ooit terug te verwijzen naar hoe Dynique zelf dit risico voor zijn eigen klanten anders aanpakt. De site benoemt het probleem bij een ander, en verzwijgt het bij zichzelf.

**Award-winning oplossing.** Voeg direct na de PROMISE-sectie op /over-ons een blok 'Wat als ik uitval?' toe met een concreet, geverifieerd antwoord — bijvoorbeeld een vaste samenwerkingsafspraak met een tweede, met naam en foto genoemde developer die toegang heeft tot lopende projecten en broncode-escrow bij oplevering per fase (zie casus 3). Maak dit geen abstracte beleidszin maar een tweede echt gezicht op de pagina — iemand die de bezoeker letterlijk kan zien bestaan naast de oprichter. Dat weerlegt het enige overgebleven grote bezwaar tegen een oprichter-geleide partij zonder de 'persoonlijk, niet anoniem'-belofte van PRODUCT.md te verliezen — het maakt hem juist sterker: twee echte mensen in plaats van één met een risico-disclaimer.

### 9. Blog belooft 'een team', /over-ons levert zichtbaar één persoon — een tegenstrijdigheid die precies haar trauma raakt {#klant-met-trauma-van-een-mislukt-software-it-project-blog-belooft-een-team-over-ons-levert-zichtbaar-n-persoon-een-tegenstrijdigheid-die-precies-haar-trauma-raakt}

**Persona:** Inkoopmanager die bewust een team zoekt voor een groter traject — haar vorige mislukte project draaide om één freelancer die alles alleen deed, het niet aankon, en onder de druk fouten begon te maken  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Ze leest eerst /blog/wat-kost-een-website en trekt daaruit de conclusie dat Dynique met een team werkt voor het prijssegment waarin het bedrijf zichzelf plaatst. Met die verwachting klikt ze door naar /over-ons om te zien wie er aan haar project zou werken.

**Trust/behoefte-trigger.** Het moment waarop twee pagina's van dezelfde site elkaar tegenspreken over iets fundamenteels: wie er daadwerkelijk aan haar project gaat werken.

**Wat er nu misgaat.** /blog/wat-kost-een-website zegt over het segment 'Premium bureau — €4.000 tot €15.000': 'Een team werkt aan je project... Websites die wij bouwen vallen doorgaans in dit segment' (regel 49-50). Op /over-ons staat het tegenovergestelde: 'Eén aanspreekpunt — Geen accountmanagers of doorverwijzingen. Je praat met degene die het ook bouwt.' (regel 18), met de hele pagina gebouwd rond één opgerichte persoon (founder-foto, bijschrift 'OPRICHTER · DYNIQUE' regel 139, H1 'Ik bouw wat anderen alleen beschrijven' regel 105). Voor iemand die eerst het blogartikel las, is dit een direct opgemerkte tegenstrijdigheid — precies het 'verkocht kreeg ik iets anders dan wat er geleverd werd'-patroon dat ze al heeft meegemaakt.

**Award-winning oplossing.** Herschrijf de blogzin naar taal die overeenkomt met de daadwerkelijke opzet: 'Bij een eenmans-studio zoals Dynique betaal je niet voor teamoverhead — je krijgt hetzelfde niveau, rechtstreeks van de persoon die ook bouwt, en met de continuïteitsafspraak uit casus 8 als vangnet.' Zo wordt de solo-opzet een expliciet, zelfverzekerd verkoopargument in plaats van een verzwegen tegenstrijdigheid — consistent met zowel de 'Eén aanspreekpunt'-belofte op /over-ons als PRODUCT.md's principe 'Eerlijk over schaal'.

### 10. Alle vijf reviews zijn resultaat-citaten — geen enkele gaat over proces, een gemiste deadline of communicatie onder druk {#klant-met-trauma-van-een-mislukt-software-it-project-alle-vijf-reviews-zijn-resultaat-citaten-geen-enkele-gaat-over-proces-een-gemiste-deadline-of-communicatie-onder-druk}

**Persona:** Operationeel manager wiens grootste zorg niet het eindresultaat is — dat leverde zijn vorige partij uiteindelijk ook — maar of er goed werd gecommuniceerd op het moment dat het traject onder druk kwam te staan  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Hij leest reviews niet om te zien of het eindproduct mooi werd, maar om te ontdekken hoe een leverancier zich gedraagt zodra er iets misgaat: een tegenvallende eerste versie, een deadline die schuift, een lastig gesprek over scope. Zijn vorige partij leverde uiteindelijk een prima product op, maar liet hem drie weken in stilte zitten toen de planning uitliep.

**Trust/behoefte-trigger.** Zoekt in de REVIEWS-sectie op de homepage (regel 610-666) naar een zin als 'ze hielden ons op de hoogte toen er een probleem was' — bewijs van proces, niet van resultaat.

**Wat er nu misgaat.** Alle vijf reviews zijn uitsluitend resultaat-gericht: 'de eerste aanvragen kwamen binnen een week binnen' (Creemers), 'het aantal aanvragen is verdubbeld' (Kohnen), 'de salon is drukker dan ooit' (IJssalon), 'een product dat direct serieus genomen wordt' (Chefs Connect), 'precies zoals onze gasten de bistro binnenlopen' (Auwt Aelse). Geen enkele review noemt communicatie, tussentijdse updates, een tegenvaller of hoe een hobbel werd opgevangen — precies het bewijs dat deze persoon zoekt en dat nergens anders op de site wordt geleverd.

**Award-winning oplossing.** Bouw, in plaats van een generieke zesde videotestimonial, één 'Achter de schermen'-moment rechtstreeks in een bestaande case study (bijvoorbeeld Auwt Aelse): hergebruik het scroll-scrubbed voor/na-interactiepatroon dat de homepage al gebruikt, maar dan voor communicatie — een korte, geanonimiseerde reeks echte WhatsApp-berichten met tijdstempels rond het moment dat de planning onder druk stond, gevolgd door hoe dat werd opgelost. Authentieker dan een geregisseerde videotestimonial, en het enige format op de site dat 'proces onder druk' tastbaar toont in plaats van beweert — en het maakt meteen ook casus 2's lege case-pagina's sterker.

### 11. De Adviseur-quiz kan 'zekerheid dat het dit keer wél wordt afgemaakt' nooit als prioriteit registreren {#klant-met-trauma-van-een-mislukt-software-it-project-de-adviseur-quiz-kan-zekerheid-dat-het-dit-keer-wl-wordt-afgemaakt-nooit-als-prioriteit-registreren}

**Persona:** Facilitair manager bij een zorginstelling die de Adviseur-quiz invult in de hoop dat die zijn situatie herkent — een eerder 'vrijblijvend adviesgesprek' bij een andere partij bleek achteraf gewoon een verkooppraatje  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Voor hem is de belangrijkste vraag bij elk nieuw traject niet snelheid, prijs, codekwaliteit of lokale nabijheid, maar risicobeheersing: bewijs dat het dit keer wél goed afloopt. Hij vult de Adviseur-quiz in, in de veronderstelling dat een 'consultatieve' tool dit als vraag zou herkennen.

**Trust/behoefte-trigger.** Komt bij de derde vraag ('Wat is voor jou het belangrijkst?') en moet kiezen tussen opties die stuk voor stuk over iets anders gaan dan zijn eigenlijke zorg.

**Wat er nu misgaat.** src/components/Advisor.tsx, STEPS[2] ('prio', regel 40-51) biedt exact vier opties: 'Snel starten of snel resultaat', 'Een vaste, voorspelbare prijs', 'Kwaliteit & veiligheid voorop', 'Persoonlijk, lokaal contact'. Geen enkele optie heet 'Zekerheid dat het dit keer wél wordt afgemaakt' of iets vergelijkbaars. Kiest hij noodgedwongen 'robuust', dan krijgt hij in APPROACH (regel 116) alleen een technisch antwoord terug: 'We bouwen met code die jaren meegaat — getest en onderhoudbaar, geen quick fix' — nooit een procesgeruststelling. De tool die het meest consultatief oogt op de hele site, mist hierdoor precies het signaal van deze doelgroep.

**Award-winning oplossing.** Voeg een vijfde prio-optie toe: { id: "zekerheid", label: "Zekerheid dat het dit keer wél wordt afgemaakt", desc: "Eerder een project meegemaakt dat vastliep of nooit klaar kwam" }, met een eigen APPROACH-tekst die concreet ingaat op faseringen, schriftelijke akkoorden per fase en het escalatiepad (met link naar de nieuwe voorwaardenpagina uit casus 3) — geen generieke kwaliteitsbelofte, maar hetzelfde soort tastbaar bewijs als de andere casussen voorstellen. Dit maakt de Adviseur het eerste onderdeel van de site dat trauma expliciet als herkend startpunt behandelt, in plaats van als randgeval te negeren.

### 12. Geen enkele garantie dat domein en hosting op naam van de klant komen te staan {#klant-met-trauma-van-een-mislukt-software-it-project-geen-enkele-garantie-dat-domein-en-hosting-op-naam-van-de-klant-komen-te-staan}

**Persona:** IT-manager bij een zorginstelling wiens vorige webapplicatie werd 'gegijzeld' toen bleek dat de developer domein en hosting op zijn eigen naam had staan, en de toegang na een geschil blokkeerde  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Hij heeft digitale gijzeling meegemaakt: een developer met eigenaarschap over domein en hosting-account gebruikte dat als drukmiddel tijdens een geschil, en de instelling stond weken zonder eigen website. Hij zoekt nu actief naar een garantie dat dit hem niet nogmaals overkomt, vóórdat hij een intake overweegt.

**Trust/behoefte-trigger.** Zoekt op de site naar een zin als 'domein en hosting komen op jouw naam te staan' en vindt die nergens — niet in Fase 4 van het Traject, niet in de FAQ, niet op /diensten/web.

**Wat er nu misgaat.** Fase 4 ('LIVE') van het Traject op de homepage noemt alleen 'Livegang & beveiliging, Monitoring, Doorlopend beheer' (regel 862-863) zonder enig eigendomsdetail. /diensten/web bevat geen enkel woord over hosting of domein. De privacyverklaring bespreekt hosting uitsluitend in de context van dynique.nl's eigen website (Cloudflare Pages, regel 250-364), niet in de context van waar en op wiens naam een opgeleverd klantproject wordt gehost. Er bestaat op dit moment nergens een expliciete garantie over domeineigendom voor klantprojecten.

**Award-winning oplossing.** Voeg aan Fase 4 een vierde, expliciete deliverable toe: 'Domein & hosting op jouw naam', met microcopy 'Altijd in jouw eigen account — nooit bij Dynique. Zo zit je nooit vast aan mij.' Herhaal dezelfde garantie letterlijk in de nieuwe voorwaardenpagina (casus 3), en maak hem net zo tastbaar: een geanonimiseerd schermbeeld van een DNS/registrar-paneel met de klant als eigenaar, naast het GitHub-overdracht-bewijs. Twee losstaande beweringen worden zo één samenhangend, nagetrokken eigendomsverhaal in plaats van twee losse marketingzinnen.

### 13. 'Mocht het niet klikken' krijgt een relationeel antwoord, geen financieel antwoord {#klant-met-trauma-van-een-mislukt-software-it-project-mocht-het-niet-klikken-krijgt-een-relationeel-antwoord-geen-financieel-antwoord}

**Persona:** Financieel controller wiens vorige leverancier na een aanbetaling van 50% halverwege het project stopte en weigerde iets terug te betalen voor het niet-opgeleverde deel  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Hij werd eerder financieel gedupeerd toen een project halverwege strandde zonder terugbetaling van het vooruitbetaalde bedrag. Hij leest FAQ-antwoorden nu specifiek op wat er met zijn geld gebeurt als iets misgaat, niet op hoe de relatie wordt beëindigd.

**Trust/behoefte-trigger.** Leest FAQ 'Wat als ik niet tevreden ben?' (src/app/page.tsx regel 241): 'We werken met meerdere revisierondes en stemmen continu af tijdens het traject. Mocht het echt niet klikken: dat bespreken we eerlijk, in plaats van een project door te duwen.' — waardeert de toon, maar mist het financiële antwoord.

**Wat er nu misgaat.** Het antwoord blijft volledig relationeel ('dat bespreken we eerlijk') en bevat geen enkele concrete financiële garantie: geen woord over gedeeltelijke terugbetaling, betaling pas ná oplevering per fase, of wat er gebeurt met een reeds betaald voorschot als een fase niet wordt afgerond. Dezelfde onduidelijkheid speelt bij Fase 1/INTAKE (regel 836) waar de betaalstructuur nergens wordt genoemd.

**Award-winning oplossing.** Maak het betaalmodel expliciet en zichtbaar in de Traject-sectie zelf, niet alleen in de FAQ: voeg onder elke Fase-kaart een klein visueel betaalmoment toe (bijvoorbeeld een dunne voortgangsbalk met '25% bij start Fase 2') zodat de betaalstructuur letterlijk meebeweegt met het proces dat de bezoeker al bekijkt. Vervang de vage FAQ-zin door: 'Je betaalt per afgeronde fase, nooit vooraf voor werk dat nog moet gebeuren — stopt een fase halverwege, dan betaal je ook alleen voor wat daadwerkelijk is opgeleverd.' en herhaal die regel op de voorwaardenpagina, zodat 'eerlijk bespreken' een afdwingbare afspraak wordt in plaats van een goede intentie.

### 14. KVK-nummer staat overal als platte tekst, nergens als verifieerbare link {#klant-met-trauma-van-een-mislukt-software-it-project-kvk-nummer-staat-overal-als-platte-tekst-nergens-als-verifieerbare-link}

**Persona:** Compliance-medewerker bij een groter bedrijf die standaard elk nieuw leveranciers-KVK-nummer natrekt — een gewoonte ontstaan nadat een eerdere leverancier bleek een doorstart te zijn van een failliet bedrijf onder dezelfde eigenaar  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Hij controleert standaard elk KVK-nummer in het openbare handelsregister vóórdat een contract intern wordt goedgekeurd, sinds hij ontdekte dat een eerdere leverancier eigenlijk een doorstart was van een failliet bedrijf onder dezelfde eigenaar — een feit dat pas achteraf aan het licht kwam.

**Trust/behoefte-trigger.** Wil het KVK-nummer met één klik kunnen verifiëren zonder zelf een aparte zoekactie te hoeven starten — elke extra stap is voor hem een reden om verificatie uit te stellen of, erger, over te slaan.

**Wat er nu misgaat.** Het KVK-nummer '90531264' staat als platte tekst op drie plekken: Footer.tsx (regel 129: 'KVK 90531264'), /contact (DETAILS-array regel 15) en in dezelfde contact/page.tsx als JSON-LD taxID (regel 42) — nergens als hyperlink naar de publieke KVK-zoekpagina voor dat nummer.

**Award-winning oplossing.** Maak het KVK-nummer op alle drie plekken een klikbare link naar de publieke KVK-zoekresultaatpagina voor dat nummer, met een klein verificatie-icoontje in dezelfde visuele stijl als het bestaande 'Verified · 5.0'-badge-patroon uit de reviews-sectie (regel 685) — zodat verifiëren letterlijk één klik is en visueel aansluit bij een patroon dat de site al gebruikt om vertrouwen te tonen. Een kleine toevoeging die precies het 'bewijs door precisie'-principe uit PRODUCT.md volgt, zonder een nieuw ontwerp-element te hoeven verzinnen.

### 15. De enige belofte die de site meteen zelf kan testen — 'ontvang de PDF direct per mail' — wordt niet nagekomen {#klant-met-trauma-van-een-mislukt-software-it-project-de-enige-belofte-die-de-site-meteen-zelf-kan-testen-ontvang-de-pdf-direct-per-mail-wordt-niet-nagekomen}

**Persona:** Risicomijdende beslisser die bewust géén contact opneemt voor het grote traject, maar eerst de gratis checklist downloadt als laagdrempelige betrouwbaarheidstest — een gewoonte overgehouden aan zijn vorige mislukte project waarin kleine beloftes ook al niet werden nagekomen  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** In plaats van meteen een groot, kostbaar traject te starten, gebruikt hij bewust de laagste-risico-actie op de site — de gratis checklist — als test: houdt Dynique zich aan een kleine, makkelijk te controleren belofte? Zo niet, dan neemt hij voor het grote traject geen contact meer op, ongeacht hoe goed de rest van de site oogt.

**Trust/behoefte-trigger.** Vult naam en e-mail in op /gratis-checklist, leest de belofte 'Vul je gegevens in, ontvang de PDF direct per mail.' (regel 113) en wacht op de e-mail als lakmoesproef.

**Wat er nu misgaat.** src/app/gratis-checklist/page.tsx regel 39 bevat de ontwikkelaarscommentaar '// In productie: stuur naam + e-mail ook naar API/Mailchimp/Resend.' — de e-mail wordt op dit moment dus daadwerkelijk niet verstuurd. Voor de meeste bezoekers een onschuldig geval van 'de PDF kwam niet aan'; voor hem, die de belofte bewust als test gebruikte, is het een directe, keiharde bevestiging van zijn ergste vermoeden — en hij zal het nooit navragen, hij haakt gewoon stilzwijgend af.

**Award-winning oplossing.** Koppel dit lead-magnet-formulier — de kleinste, laagste-risico actie op de hele site — als eerste prioriteit aan een werkende e-mailflow (Resend, met delivery-webhook). Toon na verzending een concrete, live statusbevestiging die verdergaat dan een statische bedanktekst: 'Verzonden naar [e-mail] om 14:32 · Afgeleverd om 14:32:04' zodra Resend's eigen delivery-webhook terugkomt — een zichtbaar bewijs van aflevering, niet alleen een belofte dat er iets onderweg is. De goedkoopste, snelst te herstellen vertrouwensbreuk op de site — en juist omdat de inzet zo klein is, het meest veelzeggende signaal voor deze persona.

---

## Technische beslisser / CTO / senior developer

### 1. De Adviseur-quiz belooft advies 'dat past bij jóuw situatie' — verander de kernvraag en er verandert precies één zin {#technische-beslisser-cto-senior-developer-de-adviseur-quiz-belooft-advies-dat-past-bij-juw-situatie-verander-de-kernvraag-en-er-verandert-precies-n-zin}

**Persona:** Senior developer/tech lead, gemandateerd om drie kandidaat-softwarepartners te screenen vóór een adviesgesprek  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Een tech lead bij een logistiek bedrijf (60+ medewerkers) moet van de operationeel directeur drie potentiële softwarepartners vergelijken vóór er gesprekken worden gepland. Hij behandelt elke interactieve tool op een leverancierssite zoals hij een API zou testen: één variabele wijzigen, de output diffen. Op de homepage doorloopt hij de Adviseur-quiz twee keer met identieke antwoorden op vraag 1, 2 en 4, maar verandert bij vraag 3 ('Wat is voor jou het belangrijkst?') van 'Snel starten of snel resultaat' naar 'Kwaliteit & veiligheid voorop — code die jaren meegaat'. Hij zet beide resultaatschermen naast elkaar in twee tabbladen en scant ze op verschillen, zoals hij een pull request zou reviewen.

**Trust/behoefte-trigger.** Hij verwacht dat de expliciete belofte op het resultaatscherm zelf — 'Vier korte vragen over jouw app of maatwerk-softwarebehoefte. Daarna krijg je een eerlijk advies dat past bij jóuw situatie — ook als dat betekent dat je (nog) niets hoeft te laten bouwen' (src/components/Advisor.tsx, regel 267-271) — zich vertaalt in een merkbaar ander advies zodra hij bewust 'kwaliteit & veiligheid' aanvinkt, want dat is voor hem dé kernvraag bij een partnerkeuze.

**Wat er nu misgaat.** In src/components/Advisor.tsx bepaalt computeAdvice() (regel 136-162) de aanbevolen dienst — en dus de service-titel plus de drie 'Waarom dit past'-bullets — uitsluitend op basis van de antwoorden op vraag 1 en 2 (start/goal, regel 140-142). Het antwoord op vraag 3 (prio) verandert op regel 158 alleen welke van vier losse zinnen uit het APPROACH-object (regel 113-118) achteraan in de 'Aanpak'-rij van de spec sheet wordt geplakt. De drie bullets, de service-titel, de service-beschrijving (base) en zelfs de secundaire link blijven bij een gewijzigd prio-antwoord letterlijk identiek. Wie 'snel starten' kiest krijgt exact hetzelfde kernadvies als wie 'kwaliteit & veiligheid voorop' kiest — op één ingevulde slotzin in de 'Aanpak'-rij na. Voor een technische beoordelaar die de tool doelbewust test door één variabele te wijzigen, is dit binnen twee minuten aantoonbaar: de 'personalisatie op maat' is decoratieve string-interpolatie op één regel, geen beslislogica die de kern van het advies raakt.

**Award-winning oplossing.** Herbouw computeAdvice() zodat prio het advies structureel meebepaalt in plaats van decoratief. Voeg voor prio === 'robuust' een eigen bullet toe die één van de drie generieke automatisering/systeem/app-punten vervangt door een kwaliteitsgericht punt — bijvoorbeeld 'Code-review op elk opgeleverd onderdeel vóór livegang' — en herweeg de resterende twee. Ga daarna een stap verder dan een correcte bugfix: voeg onder elke bullet een klein, uitklapbaar spoor toe — '— want je koos: Kwaliteit & veiligheid voorop' — zodat de bezoeker letterlijk kan zien welk van zijn vier antwoorden welk stuk advies heeft opgeleverd. Dat maakt de 'meedenken is zichtbaar'-belofte uit Design Principle 2 (PRODUCT.md) niet alleen wáár, maar controleerbaar: de quiz wordt zelf het bewijsstuk voor 'wij denken echt mee, we plakken geen sjabloon', getoetst op precies de plek waar een technisch publiek als eerste gaat testen.

### 2. De sectie met de kop 'Hoe we het hebben gebouwd' noemt geen enkele technologie {#technische-beslisser-cto-senior-developer-de-sectie-met-de-kop-hoe-we-het-hebben-gebouwd-noemt-geen-enkele-technologie}

**Persona:** IT-manager die referentiewerk beoordeelt vóór een adviesgesprek  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Een IT-manager scrolt, ter voorbereiding op een adviesgesprek, eerst zelfstandig door de portfolio-cases om te zien hoe Dynique over eigen technische keuzes communiceert — een gangbare, snelle manier om een leverancier te schiften vóórdat er tijd in een gesprek wordt geïnvesteerd. Hij klikt door naar de enige case met een expliciet 'technologie'-blok: IJssalon Italia, en scrolt direct naar die sectie, op zoek naar een framework- of hostingnaam om te herkennen.

**Trust/behoefte-trigger.** Hij verwacht dat een sectie met de kop 'HOE WE HET HEBBEN GEBOUWD' en het onderschrift 'De technologie en technieken die we hebben gebruikt' (src/app/portfolio/ijssalon-italia/page.tsx, regel 380-384) minstens één framework, CMS, hostingpartij of taal noemt — het enige concrete technische ankerpunt dat op de hele portfolio te vinden zou moeten zijn.

**Wat er nu misgaat.** De sectie draagt in de code zelfs de comment {/* Technology Stack - Black */} (regel 374). De drie kaarten eronder (regel 388-435) zijn 'Single-Page Scroll' ('Alle essentiële informatie op één pagina'), 'Allergenen Filtering' ('Visueel iconen-systeem') en 'Performance' ('Statische opbouw voor directe laadtijden') — een navigatiepatroon, een UI-feature en een prestatiedoel, geen van drieën een technologie. Nergens in de case wordt genoemd in welk framework, CMS of hostingomgeving de site draait — terwijl next.config.ts elders in dezelfde repository bevestigt dat de hele site in Next.js 15 met output: 'export' draait. Die informatie bestaat dus wél, alleen niet op de ene plek die er expliciet naar vraagt. Voor exact de persona die 'technisch onderlegd' (PRODUCT.md) wil toetsen, is dit de plek waar de belofte het hardst getest wordt en leeg blijkt onder een technisch klinkende kop.

**Award-winning oplossing.** Vervang de drie kaarten door daadwerkelijke techniek: 'Next.js 15 (static export)', 'Cloudflare Pages + edge-caching', 'WCAG AA-geteste allergenen-iconen met aria-labels', elk met één zin die de keuze koppelt aan een tastbaar resultaat. Voeg een vierde kaart toe met een gedateerd, doorklikbaar Lighthouse-cijfer naar een publiek PageSpeed Insights-rapport — een verifieerbare claim in plaats van een stijlkeuze. Ga voor het onderscheidende, wereldklasse-detail nog een stap verder: voeg op elke case-pagina een klein '</>'-icoontje toe dat, specifiek voor een technisch publiek, een minimalistisch 'onder de motorkap'-paneel opent met echte build-metadata (framework, deploy-platform, laatste wijzigingsdatum) — een subtiele, speelse manier om 'technisch onderlegd' te bewijzen door iets te laten zien in plaats van te beweren, precies het soort signatuur-detail dat een Awwwards-jury zich herinnert.

### 3. 24 uur reactietijd versus 2 uur — niet één slordigheid, maar dezelfde tegenstrijdigheid op twee losse pagina's {#technische-beslisser-cto-senior-developer-24-uur-reactietijd-versus-2-uur-niet-n-slordigheid-maar-dezelfde-tegenstrijdigheid-op-twee-losse-paginas}

**Persona:** CTO en CFO die samen de homepage en de contactpagina doorlezen vóór een intakegesprek  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Een CTO en CFO lezen samen de homepage door ter voorbereiding op een intakegesprek — de CFO let specifiek op harde toezeggingen (reactietijd, prijsmodel) omdat die later in de offerte moeten terugkomen. Ze scrollen van het conversieblok met statistieken naar het contactformulier verderop op dezelfde pagina, en klikken daarna, zoals gebruikelijk bij due diligence, ook nog de losse /contact-pagina open om te checken of de belofte daar consistent is.

**Trust/behoefte-trigger.** Ze verwachten dat een getal dat als statistiek wordt gepresenteerd ('24u — Reactietijd') een harde, controleerbare toezegging is — en dat een tweede, losse pagina die belofte bevestigt in plaats van tegenspreekt.

**Wat er nu misgaat.** In src/app/page.tsx staat op regel 964 'Binnen 24 uur een reactie', herhaald op regel 972 als '24u — Reactietijd'. Verderop op exact dezelfde pagina, in het contactblok, staat op regel 1229 'We reageren altijd binnen 24 uur, meestal veel eerder' — direct gevolgd door regel 1235: 'REACTIETIJD — Binnen 2 uur (ma–za, 9–20u)'. Wie vervolgens naar de losse /contact-pagina navigeert, treft daar precies dezelfde twee tegenstrijdige cijfers opnieuw aan: src/app/contact/page.tsx regel 134 ('We reageren altijd binnen 24 uur — meestal veel eerder') tegenover regel 13 ('Binnen 2 uur (ma–za, 9–20u)'). Dit is dus geen eenmalige tikfout maar dezelfde inconsistentie, letterlijk gekopieerd, op twee onafhankelijke pagina's/componenten — het bewijs dat de copy als losse, ongekoppelde strings leeft in plaats van vanuit één bron, en dat niemand beide teksten ooit naast elkaar heeft gelegd vóór livegang. Voor een technisch publiek dat spec-consistentie gewend is, is dit direct zichtbaar bewijs tegen precies het 'doordacht en precies'-merkkenmerk dat deze pagina's moeten bewijzen.

**Award-winning oplossing.** Kies één getal — het strengere en dus geloofwaardigere '2 uur binnen kantoortijden, ma–za 9–20u' — en gebruik overal exact dezelfde formulering. Los dit structureel op met een RESPONSE_TIME-constante die op alle vier plekken (twee op de homepage, twee op /contact) wordt geïmporteerd in plaats van vier keer los getypt. Til dit naar een wereldklasse-praktijk door er een klein, eerlijk build-time contract van te maken: een content-lint-script (npm run check:copy) dat de gebuilde /out-HTML doorzoekt op afwijkende tijdsclaims en de build laat falen bij een mismatch. Dat is precies het soort concrete, technische QA-discipline dat de site elders wél claimt ('getest en onderhoudbaar', Advisor.tsx regel 116) maar nog niet aantoonbaar in praktijk brengt — hier zou het dat voor het eerst wél doen.

### 4. Het gratis-checklist-formulier verstuurt het e-mailadres nergens naartoe — en de 'gegate' PDF staat gewoon publiek op een vaste URL {#technische-beslisser-cto-senior-developer-het-gratis-checklist-formulier-verstuurt-het-e-mailadres-nergens-naartoe-en-de-gegate-pdf-staat-gewoon-publiek-op-een-vaste-url}

**Persona:** CTO die het leadformulier test met de Network-tab open  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Een CTO test, voordat hij een gesprek plant, altijd zelf een paar formulieren op de site van een potentiële partner — een kosteloze, snelle manier om te zien hoe een leverancier met data omgaat. Hij opent devtools, tabblad Network, vult naam en e-mailadres in op /gratis-checklist en klikt op 'Download PDF'. Uit nieuwsgierigheid probeert hij daarna ook de PDF-URL direct te raden op basis van de bestandsnaam die hij in de pagina-titel ziet staan.

**Trust/behoefte-trigger.** Hij verwacht minstens één uitgaand verzoek te zien op het moment dat de site expliciet claimt 'Direct in je inbox' (src/app/gratis-checklist/page.tsx, regel 106) en 'ontvang de PDF direct per mail' (regel 112-113) — de bekendste, meest basale manier om te checken of een datatoezegging ook klopt.

**Wat er nu misgaat.** In handleSubmit (regel 35-51) gebeurt uitsluitend een client-side download via een tijdelijk <a download>-element en een window.location.href-redirect naar /bedankt met alleen de naam als querystring-parameter (regel 49). Het ingevulde e-mailadres wordt nergens naartoe verstuurd; de code bevat zelf de comment '// In productie: stuur naam + e-mail ook naar API/Mailchimp/Resend' (regel 39). De Network-tab toont dus letterlijk nul requests. Erger voor een technisch geteste site: het bestand staat gewoon statisch en publiek op /dynique-website-checklist-2026.pdf (public/dynique-website-checklist-2026.pdf) — een voorspelbare, ongeauthenticeerde URL die iedereen zonder ooit het formulier in te vullen kan opvragen. Het 'leadmagneet'-formulier is dus geen poort, maar decor vóór een deur die al openstaat: een technische bezoeker die dit test, ontdekt binnen twee minuten zowel dat de databelofte niet klopt als dat de gate zelf niet bestaat.

**Award-winning oplossing.** Voeg een Cloudflare Pages Function toe (past naadloos bij de bestaande output:'export'-architectuur op Cloudflare Pages) op /functions/lead.ts die naam en e-mail valideert en doorstuurt naar Resend of de eigen mailbox, en laat handleSubmit een fetch-POST daarnaartoe doen vóórdat de download start, met een zichtbare foutstatus bij falen. Los ook de open-URL op door de PDF niet langer statisch te serveren: genereer 'm on-demand in diezelfde Function met de bestaande generate-checklist-pdf.mjs-logica, gepersonaliseerd met de naam van de aanvrager in de voettekst ('Voor [Naam] — dynique.nl'). Dat maakt het gratis document tegelijk écht gegated én tastbaar bewijs van 'meedenken': elke ontvanger krijgt zichtbaar zíjn eigen exemplaar, niet een anoniem bestand dat toevallig ook op de site staat.

### 5. De hoofddienst 'Procesautomatisering' noemt geen enkele technologie — de bijzaak 'AI Marketing' wel, met naam en toenaam {#technische-beslisser-cto-senior-developer-de-hoofddienst-procesautomatisering-noemt-geen-enkele-technologie-de-bijzaak-ai-marketing-wel-met-naam-en-toenaam}

**Persona:** Solution architect bij een installatiebedrijf, verantwoordelijk voor systeemkeuzes  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Een solution architect leest de vier dienstenpagina's na elkaar door om te bepalen of Dynique de technische diepgang heeft voor een koppeling tussen CRM, facturatie en planning. Hij vergelijkt de pagina's bewust op detailniveau — hij scant specifiek op merknamen van tools en talen, zoals hij bij elke shortlist-kandidaat zou doen.

**Trust/behoefte-trigger.** Hij verwacht dat de dienst die nu als kernaanbod wordt gepositioneerd ('Maatwerk Software' / 'Procesautomatisering', zie PRODUCT.md) minstens zo technisch specifiek is als de dienst die volgens diezelfde PRODUCT.md is teruggezet naar bijzaak.

**Wat er nu misgaat.** src/app/diensten/marketing/page.tsx (regel 34) noemt expliciet acht concrete tools: 'Claude API', 'GPT-4o', 'Midjourney', 'Meta Ads', 'Google Ads', 'Google Search Console', 'Mailchimp', 'Maatwerk integraties'. src/app/diensten/processen/page.tsx — de pagina voor de nu belangrijkste dienst — noemt over de volledige pagina geen enkel databaseplatform, integratieplatform of programmeertaal. Sterker: de blogpost src/app/blog/n8n-make-zapier/page.tsx claimt op regel 66 zelfverzekerd 'Wij automatiseren niet met n8n, Make of Zapier. We bouwen echte maatwerkoplossingen met code', zonder ergens te specificeren welke taal, welk hostingplatform of welke database die 'code' dan draait — terwijl next.config.ts (output:'export') bevestigt dat de front-end van de eigen site een volledig statische export zonder eigen backend is. Voor exact de persona die deze dienst zou afnemen is dit de belangrijkste onbeantwoorde technische vraag op de hele site.

**Award-winning oplossing.** Voeg aan diensten/processen/page.tsx een sectie 'Onder de motorkap' toe, naast de bestaande handgecodeerde FlowDiagram-visual (src/components/processen/Visuals.tsx), met concrete architectuurkeuzes: 'Serverless functions (Cloudflare Workers) voor koppelingen, TypeScript end-to-end, Postgres/Supabase waar een systeem staat heeft, webhooks in plaats van polling waar het kan.' Bouw daaronder één technisch request-diagram (request → validatie → verwerking → opslag → notificatie) met de daadwerkelijk gebruikte technologie per stap, in dezelfde handgecodeerde, geen-stockfoto's-visuele taal als de bestaande before/after-scrubdemo op de homepage — zodat 'wij schrijven echte code' verschuift van blote bewering naar iets dat een technische lezer letterlijk kan volgen, stap voor stap.

### 6. 'Getest en onderhoudbaar' is het enige woord over kwaliteitsborging op de site — en package.json bevat geen enkele testing-dependency {#technische-beslisser-cto-senior-developer-getest-en-onderhoudbaar-is-het-enige-woord-over-kwaliteitsborging-op-de-site-en-packagejson-bevat-geen-enkele-testing-dependency}

**Persona:** Engineering lead die de veiligheidsclaims van de site test  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een engineering lead doorloopt de Adviseur-quiz en kiest bewust 'Kwaliteit & veiligheid voorop' als prioriteit, specifiek om te zien hoe de site een technisch publiek geruststelt. Daarna doorzoekt hij, zoals hij bij elke potentiële leverancier zou doen als de repository ooit gedeeld wordt, de rest van de site naar meer onderbouwing van het woord 'getest'.

**Trust/behoefte-trigger.** Hij verwacht dat een claim als 'getest' leidt naar een testmethodiek, staging-proces of QA-stap — de standaard eerste vraag bij technische due diligence, en precies het soort vraag dat iemand stelt die zelf code schrijft.

**Wat er nu misgaat.** src/components/Advisor.tsx (regel 116) toont, exact wanneer een bezoeker 'robuust' kiest, de tekst 'We bouwen met code die jaren meegaat — getest en onderhoudbaar, geen quick fix.' Dit is het enige moment op de hele site waar het woord 'getest' valt; geen pagina of FAQ werkt dit verder uit. package.json bevestigt het vermoeden: er staat geen test-script tussen de scripts (alleen dev/build/start/lint/gen:pdf) en er is geen enkele testing-dependency geïnstalleerd (geen Jest, Vitest, Playwright). Wat de site wél al claimt en wél terug te vinden is, is een staging-stap: Fase 3 op de homepage zegt expliciet 'Je ziet de voortgang live op een staging-omgeving. Geen black box: volledige transparantie' (src/app/page.tsx, regel 853). Dat is een reëel, klein maar concreet proces — het probleem is dat 'getest' een ander, groter woord gebruikt dan wat de repository laat zien, terwijl het bestaande staging-proces zelf nooit als bewijs wordt ingezet.

**Award-winning oplossing.** Vervang het zwevende woord 'getest' niet door een grotere claim, maar door precies te benoemen wat er al gebeurt: koppel de Advisor-tekst en een sectie op /over-ons expliciet aan de bestaande staging-stap uit Fase 3 — 'Elke oplevering gaat eerst langs een aparte staging-omgeving, met een vaste doorloopcheck voordat het live gaat' — aangevuld met 'TypeScript strict mode overal' en 'Peer-review op elk stuk code vóór livegang' als die kloppen. Voeg daarna, als eerste concrete stap richting een écht testregime, minstens een lint/build-consistency-check toe zoals voorgesteld in case 3 (de reactietijd-lint) — en noem die expliciet op de site als eerste automatische kwaliteitscontrole. Dat is precies het soort eerlijk-over-schaal taal dat Design Principle 4 vraagt: geen QA-afdeling claimen die er niet is, wél laten zien wat er al écht staat.

### 7. De eigen structured data noemt Dynique een 'WebDesignAgency' — een niet-bestaand schema.org-type en het tegenovergestelde van de nieuwe positionering {#technische-beslisser-cto-senior-developer-de-eigen-structured-data-noemt-dynique-een-webdesignagency-een-niet-bestaand-schemaorg-type-en-het-tegenovergestelde-van-de-nieuwe-positionering}

**Persona:** Technisch SEO-onderlegde CTO die structured data controleert  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een CTO met SEO-achtergrond plakt, zoals bij elke shortlist-kandidaat, de homepage-URL in Google's Rich Results Test — structured data is voor hem een snelle proxy voor technische zorgvuldigheid van een leverancier, en iets wat hij bij zijn eigen producten wekelijks zelf controleert.

**Trust/behoefte-trigger.** Hij verwacht dat een bedrijf dat zich presenteert als 'maatwerk software'-partner, ook in zijn eigen machine-leesbare metadata consistent is met die claim.

**Wat er nu misgaat.** src/app/layout.tsx (regel 116) declareert "@type": ["LocalBusiness", "WebDesignAgency"]. 'WebDesignAgency' bestaat niet in de officiële schema.org-vocabulaire; Google's Rich Results Test en schema-validators zullen dit type negeren of als fout markeren. Los van de validatiefout is het inhoudelijk tegenstrijdig: de site herpositioneert zich expliciet weg van 'webdesignbureau' naar 'maatwerk software'-partner (PRODUCT.md, Positioning; ook zichtbaar in de metadata.title op regel 18: 'Dynique — Maatwerk Software & Development'), maar de structured data — de meest onderliggende, machine-leesbare laag van de site — vertelt zoekmachines nog het oude verhaal, letterlijk naast de nieuwe titel die het al wél goed doet.

**Award-winning oplossing.** Vervang "@type": ["LocalBusiness", "WebDesignAgency"] door een combinatie die wél valideert én de nieuwe positionering weerspiegelt, bijvoorbeeld ["LocalBusiness", "ProfessionalService"], en breid het bestaande "knowsAbout"-veld (regel 208-221, dat nu nog vooral webdesign-termen bevat) uit met 'Maatwerk software', 'Procesautomatisering' en 'Webapplicaties' vooraan de lijst. Valideer direct met de Rich Results Test en neem het geslaagde validatiebewijs op als klein, eerlijk vertrouwenselement onderaan de Diensten-pagina, naast een toekomstige 'Technologie'-sectie — precisie die zichtbaar is, niet alleen beweerd.

### 8. De 'Technologie'-sectie noemt zowel Cloudflare Pages als Vercel — de eigen configuratie ondersteunt maar één van de twee {#technische-beslisser-cto-senior-developer-de-technologie-sectie-noemt-zowel-cloudflare-pages-als-vercel-de-eigen-configuratie-ondersteunt-maar-n-van-de-twee}

**Persona:** Platform engineer die de infrastructuurkeuzes beoordeelt  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een platform engineer scrolt op /diensten/web naar de sectie 'TECHNOLOGIE' om in te schatten hoe de infrastructuur eruitziet vóórdat hij een technisch intakegesprek plant — hij wil weten of hij met Cloudflare Workers of Vercel Edge Functions te maken krijgt, want dat bepaalt welke architectuurpatronen mogelijk zijn.

**Trust/behoefte-trigger.** Hij verwacht dat een lijst met 'gebruikte technologie' een samenhangende, daadwerkelijk gebruikte combinatie beschrijft, geen verzameling losse merknamen naast elkaar.

**Wat er nu misgaat.** src/app/diensten/web/page.tsx (regel 120) toont de badges 'Next.js 15', 'React 18', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages', 'Vercel' als los rijtje. next.config.ts bevat echter output: 'export' met images: { unoptimized: true } (regel 8-13) — een configuratie specifiek gekozen vóór statische hosting op Cloudflare Pages, die de kernvoordelen van Vercel (image-optimalisatie, ISR, edge-functions) juist uitschakelt. Beide platforms tegelijk als 'de tech stack' noemen terwijl de configuratie er maar één daadwerkelijk gebruikt, leest voor een technisch publiek als een gekopieerd badge-rijtje in plaats van een eerlijke beschrijving van de eigen architectuur — precies het type slordigheid dat deze persona als een rode vlag onthoudt.

**Award-winning oplossing.** Verwijder het platform dat niet wordt gebruikt, of specificeer expliciet wanneer welk platform wordt ingezet als dat per klant verschilt. Vervang de losse badges door een compact, klikbaar architectuurdiagram (aansluitend bij de FlowDiagram-visuele taal uit case 5) dat het echte request-pad toont: bezoeker → Cloudflare edge → statische bundle → WhatsApp-deeplink (geen eigen backend) — met per node een korte reden waarom die keuze is gemaakt, bijvoorbeeld 'Cloudflare Pages — statische hosting, wereldwijd edge-netwerk, past bij content die niet per gebruiker verandert.' Dat maakt de 'Technologie'-sectie voor het eerst een eerlijk, samenhangend technisch verhaal in plaats van een badge-collage.

### 9. Een sterke CSP-header wordt in de praktijk uitgehold door 'unsafe-inline' op elke pagina {#technische-beslisser-cto-senior-developer-een-sterke-csp-header-wordt-in-de-praktijk-uitgehold-door-unsafe-inline-op-elke-pagina}

**Persona:** Security-bewuste CTO die de site scant met securityheaders.com  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een security-bewuste CTO scant, zoals bij elke leverancier die met klantdata gaat werken, eerst de eigen site van de leverancier via securityheaders.com en de Network-tab — een gratis, tien-seconden manier om een indruk te krijgen van de daadwerkelijke security-discipline, vóórdat hij ooit een gesprek voert.

**Trust/behoefte-trigger.** Hij ziet dat Dynique wél HSTS, X-Frame-Options en een Content-Security-Policy heeft ingesteld (public/_headers) — een positieve, zeldzame indicator bij een klein bureau — en verwacht dat die policy dan ook daadwerkelijk beschermt tegen script-injectie.

**Wat er nu misgaat.** public/_headers (regel 7) bevat een Content-Security-Policy met script-src 'self' 'unsafe-inline' én style-src 'self' 'unsafe-inline'. 'unsafe-inline' schakelt precies de bescherming uit die een CSP tegen XSS zou moeten bieden, en is nodig geworden doordat vrijwel elke pagina — layout.tsx, page.tsx, contact/page.tsx en anderen — JSON-LD via dangerouslySetInnerHTML en talloze inline style={{...}}-objecten gebruikt (zichtbaar in bijvoorbeeld elke gradient-achtergrond op de homepage en contactpagina). Het resultaat: een CSP die op het eerste gezicht solide oogt, maar bij een scan die verder kijkt dan de header-namen duidelijk lager scoort zodra iemand de daadwerkelijke policy-inhoud leest.

**Award-winning oplossing.** Verplaats de JSON-LD-blokken naar losse, statische /schema/[pagina].json-bestanden die met een nonce of hash worden ingeladen in plaats van inline strings, en vervang de meest gebruikte inline styles door Tailwind-utility-classes waar mogelijk, zodat 'unsafe-inline' op script-src kan verdwijnen. Documenteer de resulterende, strengere CSP expliciet in de privacyverklaring onder sectie 10 (Beveiliging, regel 377) als concreet, verifieerbaar bewijspunt in plaats van de huidige algemene formulering over zorgvuldigheid — een kleine tekstuele toevoeging die een technische lezer daadwerkelijk kan natrekken.

### 10. Geen verwerkersovereenkomst, subverwerkerslijst of meldtermijn — terwijl de sectorpagina zelf 'AVG-proof' claimt {#technische-beslisser-cto-senior-developer-geen-verwerkersovereenkomst-subverwerkerslijst-of-meldtermijn-terwijl-de-sectorpagina-zelf-avg-proof-claimt}

**Persona:** Compliance-verantwoordelijke IT-manager bij een zorginstelling  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een IT-manager bij een grotere zorginstelling overweegt Dynique voor het roosters/dossiersysteem dat op /maatwerk-software/zorg wordt aangeprezen. Vóór een gesprek zelfs wordt gepland, checkt de interne compliance-afdeling standaard of een leverancier een verwerkersovereenkomst (DPA), een subverwerkerslijst en een datalekmeldingsprocedure kan aanleveren — vaste onderdelen van elk inkooptraject in deze sector.

**Trust/behoefte-trigger.** /maatwerk-software/zorg claimt expliciet 'veilig en AVG-proof' in de intro (regel 19) en herhaalt dat bij de tweede feature ('Veilig cliënt- & dossieroverzicht ... AVG-proof plek', regel 41) — precies het claim dat compliance gaat toetsen op documentatie, niet op marketingtekst.

**Wat er nu misgaat.** src/app/privacyverklaring/page.tsx is volledig geschreven vanuit het perspectief van Dynique als verwerkingsverantwoordelijke voor de eigen websitebezoekers (o.a. sectie 10 'Beveiliging', regel 377) — er is geen aparte, downloadbare verwerkersovereenkomst voor klanten die Dynique als verwerker inschakelen voor hún systeem, geen subverwerkerslijst buiten Cloudflare, Inc. (regel 364, de enige genoemde derde partij), en het woord 'meldplicht' of een concrete meldtermijn bij een datalek komt in het hele document (679 regels) geen enkele keer voor — de wettelijke 72-uurstermijn wordt nergens vermeld. Voor een zzp'er is dit prima; voor een zorginstelling die AVG-verplicht due diligence moet documenteren, ontbreekt precies het document waarmee de sectorpagina zijn eigen 'AVG-proof'-claim moet onderbouwen.

**Award-winning oplossing.** Voeg op /maatwerk-software/zorg (en de andere sectorpagina's) een downloadbare, generieke modelverwerkersovereenkomst toe als PDF, plus een kort 'Compliance'-blok met subverwerkerslijst, meldtermijn bij incidenten (bijvoorbeeld 'binnen 24 uur na ontdekking, ruim binnen de wettelijke 72-uurstermijn') en een contactpunt voor security-vragen. Eén verwijzende zin in de privacyverklaring sluit de cirkel: 'Werk je met ons aan een eigen systeem? Vraag naar onze modelverwerkersovereenkomst.'

### 11. Geen /.well-known/security.txt — geen kanaal om een kwetsbaarheid verantwoord te melden {#technische-beslisser-cto-senior-developer-geen-well-knownsecuritytxt-geen-kanaal-om-een-kwetsbaarheid-verantwoord-te-melden}

**Persona:** Senior developer die standaard checkt op verantwoorde-openbaarmakingskanalen  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een senior developer die overweegt Dynique in te schakelen voor een klantportaal, controleert bij elke leverancier reflexmatig of /.well-known/security.txt bestaat (RFC 9116) — een klein, gratis signaal dat een partij nadenkt over responsible disclosure vóórdat er ooit een incident is.

**Trust/behoefte-trigger.** Hij verwacht dit bestand aan te treffen bij een partij die zichzelf op meerdere plekken 'veilig' noemt — onder meer in de FAQ-vraag 'Hoe zit het met beveiliging en dataeigendom?' op de homepage ('Ik werk projectmatig en veilig volgens vaste standaarden', src/app/page.tsx regel 237) en op /maatwerk-software/zorg (regel 19, 41) — het is een gratis, vijf-minuten-implementatie die precies dat soort claim onderbouwt.

**Wat er nu misgaat.** In de repository bestaat geen public/.well-known/-map en geen security.txt-bestand. Er is nergens op de site een expliciet contactpunt of proces voor het melden van een kwetsbaarheid — de enige contactroute is de algemene info@dynique.nl uit de privacyverklaring, niet gelabeld voor security-meldingen. Voor een technische bezoeker die dit specifiek checkt, is de afwezigheid een klein maar veelzeggend signaal dat 'veilig' meer wordt beweerd dan operationeel ingericht.

**Award-winning oplossing.** Voeg public/.well-known/security.txt toe volgens RFC 9116 met Contact: mailto:security@dynique.nl (of info@dynique.nl met een duidelijke onderwerpregel-instructie), een Expires-datum, en Preferred-Languages: nl, en. Vermeld het bestaan van dit kanaal in één zin in de privacyverklaring onder sectie 10 (Beveiliging): 'Vermoed je een kwetsbaarheid? Zie /.well-known/security.txt voor een verantwoord meldproces.' Klein, goedkoop, en precies het soort signaal dat een technisch publiek waardeert boven een grote claim.

### 12. Een zelf-geschreven AggregateRating van exact 5,0 uit exact 5 reviews — precies het patroon dat Google's richtlijnen afkeuren {#technische-beslisser-cto-senior-developer-een-zelf-geschreven-aggregaterating-van-exact-50-uit-exact-5-reviews-precies-het-patroon-dat-googles-richtlijnen-afkeuren}

**Persona:** Technische SEO-specialist die de eigen JSON-LD van de leverancier controleert  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een technisch onderlegde CTO die twijfelt tussen drie bureaus, opent de broncode (view-source) van de homepage om te zien hoe de reviews en beoordelingen zijn opgebouwd — een gewoonte uit zijn eigen werk waar hij regelmatig structured data van eigen producten controleert.

**Trust/behoefte-trigger.** Hij verwacht dat een AggregateRating in JSON-LD is gebaseerd op een onafhankelijk, extern verifieerbaar reviewplatform (Google Business Profile, Trustpilot) — niet volledig handmatig samengesteld binnen de eigen codebase van de organisatie die zichzelf beoordeelt.

**Wat er nu misgaat.** src/app/layout.tsx (regel 151-157) bevat een aggregateRating-blok met ratingValue '5.0' en reviewCount '5', direct gevolgd door vijf review-objecten (regel 158-189) die allemaal ratingValue '5' hebben — stuk voor stuk hardcoded in de eigen Organization-schema van de site, niet gesynchroniseerd vanuit een extern platform. Een perfecte 5,0 uit precies vijf zelf-geschreven reviews is exact het patroon dat Google's richtlijnen voor Review-snippets afraden (self-serving, niet-verifieerbare beoordelingen), en dat een technische lezer met SEO-kennis onmiddellijk herkent als een risico op het uitblijven of verdwijnen van de rich snippet — of erger, een handmatige actie.

**Award-winning oplossing.** Koppel de AggregateRating aan een daadwerkelijk extern platform (Google Business Profile-reviews via de Places API, of een ingesloten Trustpilot-widget) zodat het cijfer verifieerbaar buiten de eigen codebase bestaat. Blijft het bij eigen klantcitaten, verwijder dan het aggregateRating-blok uit de Organization-schema en toon de vijf testimonials in plaats daarvan als reguliere Review-objecten zonder AggregateRating-aggregatie — conform Google's eigen richtlijn dat AggregateRating alleen bij een daadwerkelijk, doorlopend verzamelmechanisme hoort.

### 13. Op de homepage is het contactformulier geen <form>: geen 'required', geen validatie — terwijl de losse /contact-pagina het wél goed doet {#technische-beslisser-cto-senior-developer-op-de-homepage-is-het-contactformulier-geen-form-geen-required-geen-validatie-terwijl-de-losse-contact-pagina-het-wl-goed-doet}

**Persona:** CTO die een smoke-test uitvoert op elk contactformulier vóór een gesprek  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Een CTO voert, als eerste smoke-test bij elke leverancier, altijd hetzelfde testje uit: het contactformulier leeg versturen om te zien hoe robuust de invoervalidatie is. Hij doet dit eerst op de homepage-contactsectie, daarna nog eens op de losse /contact-pagina — uit gewoonte controleert hij altijd beide plekken als een site er twee heeft, want inconsistentie tussen ogenschijnlijk identieke formulieren is precies het soort signaal waar hij op let.

**Trust/behoefte-trigger.** Hij verwacht dat een veld met een rode asterisk (*) — 'Naam *', 'Wat heb je nodig? *', 'Omschrijf je project *' — een formulier daadwerkelijk blokkeert bij versturen zonder invoer, op beide plekken even consistent.

**Wat er nu misgaat.** Op de homepage (src/app/page.tsx, regel 1252-1347) is het 'formulier' helemaal geen <form>-element: het zijn losse <input>/<select>/<textarea>-velden zonder één enkel required-attribuut, afgesloten met een <button onClick={handleWhatsAppSubmit}> (regel 1344-1347) — geen submit-event, dus geen HTML5-validatie die ooit kan triggeren. handleWhatsAppSubmit (regel 150-162) plakt bij lege velden simpelweg '(niet ingevuld)' in het WhatsApp-bericht (regel 152, 154, 155): de rode asterisken zijn daar 100% cosmetisch. Op de losse /contact-pagina (src/app/contact/page.tsx) is het beter geregeld: daar staat wél een echte <form onSubmit={submit}> (regel 161) met required op naam (regel 167), dienst-select (regel 185) en projectomschrijving (regel 194) — die pagina blokkeert een leeg verplicht veld dus daadwerkelijk. Het resultaat is een site die zichzelf tegenspreekt op precies het smoke-test-niveau van deze persona: dezelfde asterisken, twee compleet verschillende disciplineniveaus, op twee plekken die een bezoeker als 'hetzelfde formulier' zou lezen.

**Award-winning oplossing.** Til de homepage-contactsectie naar het niveau van /contact: wrap de velden in een echte <form onSubmit>, voeg required en pattern-validatie toe aan naam, dienst en omschrijving, en toon een zichtbare foutstatus per veld in plaats van een stille '(niet ingevuld)'-fallback. Doe hetzelfde voor alle SectorTemplate- en processen-varianten, zodat er nog maar één, consistent validatiepatroon site-breed bestaat. Combineer dit met de Cloudflare Pages Function uit case 4: dezelfde functie kan naast de checklist ook de contactformulieren structureel opslaan (met de WhatsApp-deeplink als aanvullende, niet enige, afhandeling), zodat een leeg of ongeldig formulier nooit meer als geldig bericht de wereld in gaat — op geen van beide plekken.

### 14. sitemap.ts geeft alle ~30 URL's dezelfde 'laatst gewijzigd'-datum — bij elke deploy opnieuw, ongeacht wat er echt veranderde {#technische-beslisser-cto-senior-developer-sitemapts-geeft-alle-30-urls-dezelfde-laatst-gewijzigd-datum-bij-elke-deploy-opnieuw-ongeacht-wat-er-echt-veranderde}

**Persona:** Technisch SEO-auditor die /sitemap.xml controleert  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een technisch onderlegde marketeer/developer bekijkt /sitemap.xml van dynique.nl zoals hij dat bij elke potentiële partner doet — een snelle blik op de sitemap zegt volgens hem meer over technische zorgvuldigheid dan een verkooppitch.

**Trust/behoefte-trigger.** Hij verwacht dat lastmod-datums per pagina daadwerkelijk het moment weergeven waarop die specifieke pagina voor het laatst inhoudelijk is gewijzigd — de hele reden dat zoekmachines dit veld gebruiken om herindexering te prioriteren.

**Wat er nu misgaat.** src/app/sitemap.ts declareert bovenaan één const now = new Date() (regel 7) en gebruikt die exacte variabele als lastModified voor letterlijk elke van de ~30 vermelde URL's — van de homepage tot de juridisch laagste-prioriteit /privacyverklaring. Het gevolg: alle URL's krijgen bij elke build/export dezelfde datum, die bij elke deploy verschuift naar 'vandaag', ook voor pagina's die niet zijn aangeraakt (zoals /privacyverklaring, changeFrequency: 'yearly', regel 56, die toch elke deploy een nieuwe lastModified krijgt). Dit is inhoudelijk onjuiste metadata op een site die zichzelf via de blog (o.a. 'de zes technische SEO-punten die altijd kloppen moeten', gratis-checklist regel 12) als technisch SEO-onderlegd presenteert.

**Award-winning oplossing.** Geef elke sitemap-entry een eigen, betekenisvolle lastModified op basis van de daadwerkelijke laatste git-commit-datum van dat routebestand (uit te lezen via een klein build-script dat git log -1 --format=%aI per pagina-bestand aanroept en als JSON meegeeft aan sitemap.ts), in plaats van één gedeelde now voor de hele site. Dat maakt de sitemap voor het eerst een accuraat signaal in plaats van decoratieve metadata.

### 15. De FAQ beantwoordt 'wiens data en code is het' — maar niet de vervolgvraag die een CTO daadwerkelijk stelt: wiens hostingaccount en domein? {#technische-beslisser-cto-senior-developer-de-faq-beantwoordt-wiens-data-en-code-is-het-maar-niet-de-vervolgvraag-die-een-cto-daadwerkelijk-stelt-wiens-hostingaccount-en-domein}

**Persona:** CTO die vendor lock-in en exit-risico beoordeelt vóór een meerjarig systeemcontract  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een CTO overweegt een meerjarig maatwerksysteem te laten bouwen en beoordeelt, zoals bij elk vendorcontract, expliciet het exit-scenario: wat gebeurt er als de samenwerking om welke reden dan ook stopt? Wie heeft dan toegang tot hosting, domein en broncode? Hij zoekt gericht in de FAQ naar het antwoord, want de site heeft er zichtbaar één staan die dicht in de buurt komt.

**Trust/behoefte-trigger.** De FAQ op de homepage bevat de vraag 'Hoe zit het met beveiliging en dataeigendom?' met als antwoord: 'Je data en code blijven van jou. Ik werk projectmatig en veilig volgens vaste standaarden, en leg vooraf uit hoe gegevens worden opgeslagen en verwerkt' (src/app/page.tsx, regel 237). Dat triggert bij een technische beslisser direct de logische vervolgvraag die de blogpost over kosten ook oproept: 'je krijgt alles in eigendom — inclusief code, designs en hostingsetup' (src/app/blog/wat-kost-een-website/page.tsx, regel 92) — onder wiens Cloudflare-account, DNS-registrar en met welke credentials draait die 'hostingsetup' dan, en per wanneer wordt dat overgedragen?

**Wat er nu misgaat.** Nergens op de site — niet in diezelfde FAQ-regel 237, niet in het Fase 4 'LIVE'-blok op de homepage ('Livegang, beveiliging, monitoring: alles wordt voor je ingeregeld... doorlopend beheer', regel 858-864), niet in de privacyverklaring — wordt uitgelegd of de klant vanaf dag één eigen toegang krijgt tot hostingaccount en DNS, of dat dit bij Dynique blijft zolang het 'doorlopend beheer' loopt. De FAQ komt letterlijk tot op één zin van het juiste antwoord ('code blijven van jou') en stopt daar precies vóór de vraag die een technische beslisser bij een meerjarig contract het scherpst stelt: niet 'is de code van mij', maar 'kan ik, zonder Dynique, morgen zelf bij de knoppen'.

**Award-winning oplossing.** Breid de bestaande FAQ-vraag 'Hoe zit het met beveiliging en dataeigendom?' expliciet uit met het ontbrekende antwoord: 'Het hostingaccount en domein staan op jouw naam vanaf livegang; wij beheren het namens jou zolang je dat wilt, met volledige adminrechten voor jou als backup. Stap je ooit over, dan lever je een werkende site op eigen infrastructuur, geen half product.' Dat zet de bestaande 'geen black box'-belofte uit Fase 3, BOUWEN (regel 853) door tot ná livegang, precies waar een technische beslisser hem toetst — en maakt van één zin in een bestaande FAQ het verschil tussen een vage geruststelling en een concreet, geloofwaardig exit-antwoord.

---

## Niet-technische eigenaar/directeur

### 1. Een eerlijke prijsgids bestaat — en verdwijnt spoorloos in de blogindex {#niet-technische-eigenaardirecteur-een-eerlijke-prijsgids-bestaat-en-verdwijnt-spoorloos-in-de-blogindex}

**Persona:** Niet-technische eigenaar/directeur (installatiebedrijf, ~35 medewerkers, overweegt een groter maatwerkbudget dan ooit)  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Dinsdagavond, half tien. De eigenaar heeft de Adviseur-quiz op de homepage al ingevuld — advies: 'Een systeem op maat'. Hij is overtuigd van de aanpak, maar voordat hij zijn compagnon en boekhouder erbij haalt voor een serieus gesprek, wil hij één ruw cijfer kunnen noemen: valt dit binnen de tienduizend, of binnen de honderdduizend? Hij scrollt terug naar boven op zoek naar 'Prijzen' in de navigatie, vindt niets, en overweegt het tabblad te sluiten in plaats van meteen op WhatsApp te moeten uitleggen wat hij zoekt.

**Trust/behoefte-trigger.** Voor deze persona is een prijsindicatie geen onderhandelingszet maar een filter: hij wil zichzelf behoeden voor een gesprek dat hij niet kan afronden. Blijft dat cijfer onzichtbaar, dan vult hij de leegte zelf in — met het slechtst denkbare scenario (onbeperkt adviesuurtje, verrassingsfactuur) — precies het territorium van de anti-referentie 'grote, logge IT-consultancy' uit PRODUCT.md.

**Wat er nu misgaat.** Dynique heeft de prijstransparantie allang geschreven: /blog/wat-kost-een-website noemt expliciet DIY €0-500/jaar, freelance €1.500-4.000, premium bureau €4.000-15.000 ('Websites die wij bouwen vallen doorgaans in dit segment'), enterprise €15.000+, en de zin 'Een gemiddelde MKB-website begint bij ons rond €3.500' (regel 94). Maar dit artikel is een eiland: geen link vanuit Header.tsx's dienstenItems (regels 10-15), geen link vanuit Footer.tsx's 'Ontdek'-kolom (regels 12-19, wijst alleen naar de blogindex), geen link vanuit het homepage-conversieblok (page.tsx regels 970-983, waar '24u / 100% / 3' wél als statistiek staat maar prijs niet), en geen link vanuit Advisor.tsx's resultaatscherm — terwijl die Adviseur op regel 47 zelfs een keuzeoptie 'Een vaste, voorspelbare prijs' aanbiedt zonder er ooit naar te verwijzen.

**Award-winning oplossing.** Bouw geen statische link, maar een op-maat-gemaakte investeringsindicatie die de antwoorden van de Adviseur hergebruikt — exact het 'meedenken is zichtbaar'-principe uit PRODUCT.md. Voeg in het resultaatscherm (Advisor.tsx, spec-sheet regels 475-487) een derde rij 'Investering' toe die per servicetype (automatisering / maatwerkSysteem / appPortaal) een bandbreedte toont, afgeleid van de bestaande prijsgids-cijfers, met een uitklapbare 'Hoe komen we hierbij?'-microtoelichting die doorverwijst naar /blog/wat-kost-een-website. Voeg daarnaast een subtiele tekstlink 'Wat betekent dit ongeveer voor je budget?' toe direct onder de '24u / 100% / 3'-rij op de homepage (page.tsx regel 983), zodat ook bezoekers die de Adviseur overslaan het cijfer vinden op het exacte scrollmoment vlak vóór de CTA's 'START JOUW TRAJECT' en 'DIRECT WHATSAPP'.

### 2. '2 uur' versus '24 uur': drie beweringen, twee getallen, één pagina {#niet-technische-eigenaardirecteur-2-uur-versus-24-uur-drie-beweringen-twee-getallen-n-pagina}

**Persona:** Niet-technische eigenaar/directeur (logistiek bedrijf, vult 's avonds het formulier in)  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Een directeur vult om 21.40 uur, na het avondeten, het contactformulier op /contact in — het enige rustige moment in zijn dag. Voor hij op 'VERSTUUR VIA WHATSAPP' klikt, leest hij nog snel de tekst ernaast om te weten of hij morgenvroeg al een reactie kan verwachten vóór zijn planningsoverleg om 8 uur.

**Trust/behoefte-trigger.** Reactietijd is voor deze persona het enige harde, verifieerbare getal tussen alle abstracte beloften ('eerlijk', 'precies', 'meedenkend') door. Als zelfs dít getal binnen één scherm zichzelf tegenspreekt, trekt hij de conclusie dat de rest van de 'eigenzinnig eerlijk'-belofte uit PRODUCT.md ook los zand is.

**Wat er nu misgaat.** Op /contact staat de hero-tekst 'We reageren altijd binnen 24 uur — meestal veel eerder' (contact/page.tsx regel 134), direct gevolgd door de DETAILS-lijst 'REACTIETIJD: Binnen 2 uur (ma–za, 9–20u)' (regel 13) en de sectie 'WAT GEBEURT ER HIERNA' met 'Je hoort binnen 2 uur van ons (ma–za)' (regel 19) — drie beweringen, twee cijfers, op dezelfde pagina, binnen één scroll. Dezelfde tegenspraak herhaalt zich op de homepage: het conversieblok claimt '24u' als kernstatistiek (page.tsx regel 972), terwijl de contactsectie eronder 'Binnen 2 uur (ma–za, 9–20u)' zegt (regel 1235). Vier plekken, twee getallen, geen enkele die naar de andere verwijst.

**Award-winning oplossing.** Kies één waarheid — '2 uur binnen kantooruren (ma–za 9–20u), anders de volgende ochtend' dekt beide claims eerlijk — en bouw die niet als los te herhalen tekst, maar als één herbruikbare `<ResponseTimeBadge/>`-component die zowel de DETAILS-array en NEXT_STEPS op /contact als het statistiekblok en de contactsectie op page.tsx voedt. Maak die badge functioneel in plaats van decoratief: laat hij live het dagdeel aflezen (`new Date()`) en tonen 'Nu bereikbaar — reactie binnen 2 uur' met een zachte accentstip tijdens kantooruren, en 'Buiten kantooruren — je hoort morgenvroeg voor 10:00 van ons' erbuiten. Dat is geen cosmetische badge maar een klein bewijsstuk van precisie: het systeem weet zelf hoe laat het is, in plaats van een statische belofte te herhalen die het nooit kan waarmaken.

### 3. Rode sterretjes op het homepage-formulier zijn een lege belofte {#niet-technische-eigenaardirecteur-rode-sterretjes-op-het-homepage-formulier-zijn-een-lege-belofte}

**Persona:** Niet-technische eigenaar/directeur (zorginstelling, vult gehaast het formulier in)  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Een directeur zit tussen twee vergaderingen in, heeft vijf minuten, en tikt op de homepage snel zijn naam en 'Digitale Bedrijfsprocessen' in. Bij 'Omschrijf je project' denkt hij: 'dat leg ik zo dadelijk mondeling uit in WhatsApp', laat het veld leeg en klikt op VERSTUUR VIA WHATSAPP.

**Trust/behoefte-trigger.** Een rood sterretje naast een label is voor een niet-technische gebruiker een universeel contract: het systeem behoedt hem voor een half ingevulde aanvraag. Wanneer dat contract niet wordt nagekomen, ontdekt hij pas via het geopende WhatsApp-bericht — gevuld met drie keer '(niet ingevuld)' — dat de site hem niet heeft tegengehouden, en voelt hij zich onnodig slordig overgekomen bij zijn eerste indruk.

**Wat er nu misgaat.** In page.tsx (regels 1254-1298) hebben de velden name, projectType (select) en description (textarea) een '*' in het label, maar géén `required`-attribuut. `handleWhatsAppSubmit` (regels 150-162) vult ontbrekende velden gewoon met '(niet ingevuld)' en verstuurt alsnog. Op /contact/page.tsx zijn dezelfde drie velden inmiddels wél `required` (regels 167, 185, 194) — de twee functioneel identieke formulieren op de site gedragen zich dus tegenstrijdig, en juist de homepage-versie, die de meeste bezoekers als eerste zien, is de kapotte.

**Award-winning oplossing.** Voeg `required` toe aan dezelfde drie velden in page.tsx. Maar los tegelijk de onderliggende oorzaak op: er bestaan nu twee losstaande implementaties van vrijwel hetzelfde formulier die al eerder uit de pas liepen (zie ook de dienst-labels in de 'twee namen, drie formulieren'-case) — trek beide naar één gedeeld `<ProjectIntakeForm/>`-component met een variant-prop ('dark' op de homepage, 'card' op /contact), zodat een validatiefix nooit meer op één plek kan blijven hangen. Toon bij een mislukte poging een niet-technische, merkeigen foutmelding onder het veld zelf ('Vul je naam in, dan weten we aan wie we schrijven') met `aria-invalid` en een subtiele gouden rand-highlight (#d4a574) in plaats van de generieke grijze browsertooltip — zodat zelfs een foutmelding nog het gevoel van 'doordacht en precies' ademt.

### 4. De Adviseur vraagt naar je prijsvoorkeur — en negeert het antwoord volledig {#niet-technische-eigenaardirecteur-de-adviseur-vraagt-naar-je-prijsvoorkeur-en-negeert-het-antwoord-volledig}

**Persona:** Niet-technische eigenaar/directeur (bouwbedrijf, doorloopt de Adviseur-quiz)  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Een eigenaar doorloopt de Adviseur-quiz op de homepage tijdens de lunch. Bij stap 3, 'Wat is voor jou het belangrijkst?', klikt hij bewust op 'Een vaste, voorspelbare prijs' — na een vorig traject bij een ander bureau dat qua meerwerk uit de hand liep. Hij verwacht dat het resultaatscherm daar direct op ingaat.

**Trust/behoefte-trigger.** Hij heeft, letterlijk klikkend, zijn grootste angst benoemd. Het resultaatscherm is het exacte moment waarop hij een concreet antwoord verwacht — niet nog een geruststellende volzin zonder cijfer, die voelt als het generieke corporate-antwoord dat hij net probeerde te vermijden.

**Wat er nu misgaat.** In Advisor.tsx bevat `APPROACH.prijs` (regel 115) uitsluitend: 'Je krijgt vooraf een vaste prijs. Geen nacalculatie, geen verrassingen achteraf.' — geen bedrag, ondanks dat de bezoeker net expliciet voor prijs koos (optie op regel 47: 'Een vaste, voorspelbare prijs'). De spec-sheet in het resultaatscherm (regels 475-487) toont alleen 'Aanpak' en 'Tijdlijn' als rijen — nooit 'Investering' — terwijl die cijfers elders op de site (zie de prijsgids-case) al bestaan maar hier niet worden hergebruikt.

**Award-winning oplossing.** Voeg conditionele logica toe: wanneer `answers.prio === 'prijs'`, voeg in de spec-sheet vóór 'Aanpak' een extra rij 'Indicatie' toe met een korte, merkeigen tekst als 'Vanaf €3.500 voor een webfundament; complexere systemen krijgen een vaste prijs na een gratis intake — precies daarom noemen we nooit een los bedrag voordat we je situatie kennen', gelinkt aan de prijsgids. Laat deze rij, uniek voor dit pad, verschijnen met dezelfde `advFadeIn`-animatie die de rest van het resultaatscherm al gebruikt (regel 634), zodat de interface zichtbaar 'reageert' op wat de bezoeker net over zichzelf vertelde — een klein, voelbaar bewijs van het 'meedenken is zichtbaar'-principe (PRODUCT.md, Design Principle 2), in plaats van een generiek antwoord dat evengoed op elk ander bureau had kunnen staan.

### 5. VERSTUUR VIA WHATSAPP geeft geen enkel signaal van leven of dood {#niet-technische-eigenaardirecteur-verstuur-via-whatsapp-geeft-geen-enkel-signaal-van-leven-of-dood}

**Persona:** Niet-technische eigenaar/directeur (58 jaar, niet dagelijks op WhatsApp Web, werkt vanaf kantoor-desktop)  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een 58-jarige eigenaar werkt op een kantoor-desktop waar hij zelden zijn telefoon aan koppelt. Hij vult het formulier op /contact zorgvuldig in en klikt op VERSTUUR VIA WHATSAPP. Zijn browser blokkeert de pop-up stilletjes; er is geen WhatsApp Web-sessie gekoppeld aan deze computer. Het scherm verandert niet. Hij leunt achterover, denkt 'dat is geregeld', en sluit de laptop.

**Trust/behoefte-trigger.** Zonder zichtbare reactie neemt hij aan dat zijn aanvraag onderweg is. Er komt nooit een WhatsApp-bericht bij Dynique aan, en hij onderneemt geen vervolgactie — een verloren lead die zichzelf niet als verloren herkent, en dus ook nooit terugkomt om het opnieuw te proberen.

**Wat er nu misgaat.** `handleWhatsAppSubmit` (page.tsx regels 150-162) en `submit` (/contact/page.tsx regels 87-100) doen uitsluitend `window.open(...)` — geen statuscontrole, geen toast, geen fallback bij een geblokkeerde pop-up of ontbrekende WhatsApp-koppeling. Op /contact staat zelfs de geruststellende regel 'Je bericht opent voorgevuld in WhatsApp — jij verstuurt zelf' (regel 241) — een belofte die stilzwijgend faalt zodra `window.open()` `null` teruggeeft.

**Award-winning oplossing.** Controleer de return-waarde van `window.open()`. Is die `null`, toon dan direct een banner: 'Je pop-up-blokkering hield dit tegen.' Bouw daarbij een echt vangnet, niet alleen een herhaalde knop: geef de bezoeker in diezelfde banner twee alternatieve routes die zijn voorgevulde bericht nooit laten verdwijnen — een 'Kopieer bericht'-knop (clipboard API) plus een `mailto:info@dynique.nl`-link met exact dezelfde inhoud als subject/body, zodat iemand zonder gekoppelde WhatsApp alsnog in twee klikken bij Dynique aankomt. Bij een succesvolle `window.open()` wisselt de knoptekst 4 seconden naar 'WhatsApp geopend — stuur het bericht daar af ✓' met een klein vinkje, zodat er voor het eerst een zichtbaar verschil bestaat tussen 'gelukt' en 'mislukt' — op zowel de homepage als /contact.

### 6. Twee cases zijn lege scaffolding — en de enige zichtbare 'VOORVERTONING VOLGT' zit precies waar hij het hardst pijn doet {#niet-technische-eigenaardirecteur-twee-cases-zijn-lege-scaffolding-en-de-enige-zichtbare-voorvertoning-volgt-zit-precies-waar-hij-het-hardst-pijn-doet}

**Persona:** Niet-technische eigenaar/directeur (zorginstelling, zoekt tastbaar bewijs vóór een gesprek)  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een directeur klikt vanaf de portfolio-index (/portfolio) door op de kaart 'AUWT AELSE' — de enige kaart op die pagina zonder videopreview, met alleen een monogram 'A' en de tekst 'VOORVERTONING VOLGT' in het browsermockup. Hij klikt toch door, op zoek naar tastbaar bewijs van 'wat krijg ik nu concreet', en komt op een paginasjabloon terecht dat na de hero direct naar de 'volgende case'-footer springt.

**Trust/behoefte-trigger.** Precies geloofsladder-stap 3 uit PRODUCT.md: 'het bestaande portfolio bewijst dat dit vakmanschap al wordt geleverd.' Een niet-technisch persoon kan de techniek zelf niet beoordelen en leunt zwaar op zichtbaar bewijs — een pagina die na twee scrolls al stopt, voelt niet als 'nog niet ingevuld' maar als 'blijkbaar weinig te laten zien'.

**Wat er nu misgaat.** src/app/portfolio/auwt-aelse/page.tsx en chefs-connect/page.tsx bevatten letterlijk lege arrays voor challenge, approach, features, gallery, results en metrics (regels 31-53 resp. 31-52), met de ontwikkelaarscomment 'Design is af. Vul onderstaande velden in met de echte content.' nog in de code (regel 7 in beide bestanden). Dit is geen decoratieve leegte: in CaseStudyTemplate.tsx worden deze secties conditioneel volledig weggelaten zodra de array leeg is (`{(data.challenge?.length || data.approach?.length) ? (...) : null}` op regel 219, hetzelfde patroon voor features op regel 255, gallery op regel 275, results/metrics op regel 312) — de pagina springt dus letterlijk van de hero naar de 'volgende case'-CTA. Bovendien lopen de drie plekken waar dit project beschreven staat uiteen: op de homepage (page.tsx, `projects`-array) heeft Auwt Aelse wél een videopad (`/rsc/auwtaelse/preview.mp4`, regel 204) en toont dus een normale preview; maar op de daadwerkelijke portfolio-index (src/app/portfolio/page.tsx, regels 34-44) ontbreekt datzelfde videopad in de `projects`-array, waardoor precies dáár — op de pagina die specifiek bedoeld is om bewijs te tonen — het 'VOORVERTONING VOLGT'-monogram verschijnt (BrowserMockup, regel 143). Drie datasets, drie verschillende waarheden over hetzelfde project.

**Award-winning oplossing.** Vul minimaal 2-3 zinnen per blok in voor beide cases (challenge/approach/minstens 2 features), zodat CaseStudyTemplate's condities weer content tonen in plaats van niets. Los tegelijk de structurele oorzaak op: centraliseer projectdata (titel, videopad, afbeelding, accentkleur, tagline) in één gedeeld bestand `src/lib/portfolio.ts` dat homepage, portfolio-index én elke losse case-study-pagina importeren, zodat een videopad dat op de ene plek is toegevoegd nooit meer op een andere ontbreekt. Voor de periode tot de content af is: vervang de stille leegte door een eerlijk, on-brand statement — voeg in CaseStudyTemplate een `inProgress`-variant toe die, in dezelfde dashed-border-stijl als het bestaande 'Meer cases in productie'-blok op de portfolio-index (regels 310-332), toont: 'Onze eerste grote maatwerk-softwarecase komt binnenkort — vraag ernaar in een gesprek.' Dat maakt de leegte een bewuste, transparante keuze in plaats van een onopgemerkte tekortkoming — exact het verschil tussen 'nog niet af' en 'slordig'.

### 7. Een hele pagina getiteld 'DE MENS ACHTER DYNIQUE' noemt die mens nooit bij naam {#niet-technische-eigenaardirecteur-een-hele-pagina-getiteld-de-mens-achter-dynique-noemt-die-mens-nooit-bij-naam}

**Persona:** Niet-technische eigenaar/directeur (groter familiebedrijf in België, wil de tegenpartij googelen)  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een directeur heeft net gelezen dat hij te maken krijgt met iemand 'technisch onderlegd' en wil, voordat hij een serieus budget vrijmaakt, die persoon kunnen opzoeken — LinkedIn, KVK, misschien een gedeelde connectie. Hij klikt door naar /over-ons, leest de hero-tekst, en zoekt naar een naam om te googelen. Die vindt hij niet.

**Trust/behoefte-trigger.** PRODUCT.md is expliciet: bij een groter, weloverwogen besluit ('hoger budget, meer behoefte aan bewijs van betrouwbaarheid') is een naam en verifieerbare achtergrond een minimale vertrouwensdrempel. Een anonieme 'oprichter' werkt recht tegen de merkwaarde 'persoonlijk, niet anoniem' in — het voelt plots als het geval waar de site zelf voor waarschuwt: een anoniem-corporate bureau.

**Wat er nu misgaat.** /over-ons (src/app/over-ons/page.tsx) is getiteld 'DE MENS ACHTER DYNIQUE' (regel 102), maar noemt de oprichter nergens bij naam — alleen het bijschrift 'OPRICHTER · DYNIQUE' (regel 139, herhaald op de homepage in page.tsx regel 495) en de foto-alt-tekst 'Zwart-wit portret van de oprichter van Dynique' (regel 128). Er staat geen enkel concreet feit over opleiding, jaren ervaring, of een link naar LinkedIn — precies wat PRODUCT.md eist: 'Technisch onderlegd... geloofwaardigheid door feiten, niet door het woord expert te gebruiken' (PRODUCT.md regel 41). Het KVK-nummer (90531264) staat wél elders (contact/page.tsx regel 15, Footer.tsx regel 129) maar wordt nooit gekoppeld aan een naam op de pagina die daar specifiek voor bedoeld is.

**Award-winning oplossing.** Voeg naast de foto in de hero (over-ons/page.tsx regels 122-141) een naamplaatje toe: voor- en achternaam, functietitel, en één checkbare credential-regel (bijv. 'HBO-ICT, 8 jaar ervaring in maatwerksoftware · KVK 90531264') plus een link naar een LinkedIn-profiel. Ga verder dan een statisch blok: vervang de generieke 'Chat met ons'-tooltip op de sticky WhatsApp-knop (page.tsx regel 322) en de knoptekst 'Of stuur direct een WhatsApp' (contact/page.tsx regel 155) sitewide door een persoonlijke variant met de voornaam — 'Chat met [Voornaam]' — zodat de belofte 'één vast aanspreekpunt, geen accountmanagers' (over-ons/page.tsx regel 18) niet alleen op één pagina staat beweerd, maar op elk contactmoment van de site voelbaar is. Dat is het verschil tussen een geloofwaardigheidsblok toevoegen en een persoonlijkheid die door de hele site loopt.

### 8. Eén dienst, drie net-niet-identieke namen in drie formulieren {#niet-technische-eigenaardirecteur-en-dienst-drie-net-niet-identieke-namen-in-drie-formulieren}

**Persona:** Niet-technische eigenaar/directeur (bekijkt homepage en /contact op verschillende momenten)  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een eigenaar bekijkt op maandag het homepage-contactformulier en ziet de optie 'Digitale Bedrijfsprocessen'. Hij sluit de tab zonder te versturen, denkt er een paar dagen over na, googelt op woensdag 'Dynique maatwerk software', komt via een zoekresultaat uit op /contact, en ziet daar in de dropdown 'Maatwerk software' — een andere term voor, vermoedt hij, hetzelfde aanbod.

**Trust/behoefte-trigger.** Hij twijfelt of dit twee verschillende diensten zijn of dat de site slordig is bijgehouden. Voor iemand die toch al onzeker is over vaktaal, is inconsistente terminologie een extra obstakel in plaats van de verduidelijking die de site juist belooft te bieden.

**Wat er nu misgaat.** src/app/page.tsx regel 1282 gebruikt de select-optie `<option value="Bedrijfsprocessen">Digitale Bedrijfsprocessen</option>`, terwijl src/app/contact/page.tsx's SERVICES-array (regel 24) 'Maatwerk software' gebruikt voor inhoudelijk dezelfde kerndienst, en Header.tsx's dienstenItems (regel 11) het weer 'Maatwerk Software' noemt als primaire, uitgelichte nav-item. Drie plekken, drie net iets andere labels voor exact hetzelfde aanbod — en geen van de drie linkt naar de andere twee ter bevestiging.

**Award-winning oplossing.** Centraliseer de dienstenlijst in één gedeeld bestand (bijv. src/lib/services.ts) met exact dezelfde labels en waarden voor elk kanaal, en laat het homepage-formulier, het /contact-formulier, Header.tsx's dienstenItems én Advisor.tsx's SERVICES-record daaruit importeren — zodat 'Maatwerk Software' overal letterlijk hetzelfde woord is. Dit is geen visuele wijziging maar een eenmalige consistentie-fix die precies de verwarring wegneemt waar deze persona het gevoeligst voor is, en die tegelijk voorkomt dat toekomstige tekstwijzigingen opnieuw uit de pas gaan lopen — het soort onzichtbare degelijkheid die bij deze doelgroep net zo zwaar telt als een mooi ontwerp.

### 9. De checklist belooft 'direct per mail' — de code geeft zelf toe dat dit niet gebeurt {#niet-technische-eigenaardirecteur-de-checklist-belooft-direct-per-mail-de-code-geeft-zelf-toe-dat-dit-niet-gebeurt}

**Persona:** Niet-technische eigenaar/directeur (vult zijn eerste, laagdrempelige contactmoment in)  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een eigenaar vult zijn naam en werkmail in op /gratis-checklist, in de veronderstelling dat hij daarmee voor het eerst 'in het systeem' van Dynique komt en later persoonlijk opgevolgd kan worden — zijn laagdrempelige eerste stap richting een mogelijk veel groter traject.

**Trust/behoefte-trigger.** Dit is zijn eerste, laagdrempelige contactmoment met het bedrijf. Als die eerste belofte al niet werkt zoals aangekondigd, zet dat een wantrouwige toon voor een besluit dat later een veel groter budget vraagt.

**Wat er nu misgaat.** gratis-checklist/page.tsx's handleSubmit (regels 35-51) toont de tekst 'Vul je gegevens in, ontvang de PDF direct per mail' (regel 113), maar de code bevat letterlijk de comment '// In productie: stuur naam + e-mail ook naar API/Mailchimp/Resend.' (regel 39) — er wordt geen e-mail verstuurd en de ingevulde gegevens worden nergens opgeslagen; alleen een client-side download via een tijdelijk `<a download>`-element (regels 41-46) vindt plaats. Elke aanmelding via dit — actief vanuit Footer.tsx (regel 16) en de blogindex gelinkte — formulier gaat dus verloren.

**Award-winning oplossing.** De site draait al op Cloudflare Pages met static export (out/, bevestigd in DEPLOY_INSTRUCTIONS.md) — de natuurlijke, kosteloze oplossing is één Cloudflare Pages Function (`functions/api/checklist.ts`) die naam + e-mail doorstuurt naar Resend (transactionele mail) en tegelijk wegschrijft naar een simpele KV- of D1-opslag voor opvolging, zonder een aparte backend-provider nodig te hebben. Tot die functie live is: verwijder de belofte 'ontvang de PDF direct per mail' en vervang die door wat het systeem al wél waarmaakt — 'Download direct hieronder, geen inbox nodig' — zodat de UI-copy nooit groter is dan de werkelijkheid. Voeg zodra de functie er is een klein, geloofwaardig bewijs toe: na verzending toont de bestaande bedankpagina (/bedankt) een regel 'We hebben 'm ook naar [e-mailadres] gestuurd, check ook je spamfolder' — een klein detail dat het verschil maakt tussen een leadmagneet die beweert te werken en een die zichtbaar werkt.

### 10. De checklist die jargon belooft te vertalen, gebruikt zelf onvertaald jargon {#niet-technische-eigenaardirecteur-de-checklist-die-jargon-belooft-te-vertalen-gebruikt-zelf-onvertaald-jargon}

**Persona:** Niet-technische eigenaar/directeur (downloadt de checklist en leest de pagina zelf)  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een eigenaar downloadt de checklist en scant, voordat hij de PDF opent, eerst de vier preview-items op de pagina zelf om te bepalen of dit de moeite waard is.

**Trust/behoefte-trigger.** Hij verwacht dat een gratis checklist 'voor wie geen tijd heeft om in de val te trappen' (gratis-checklist/page.tsx regel 172) in zíjn taal geschreven is — niet in de vaktaal van de partij die hem het aanbod doet. Vaktaal op dit punt ondermijnt precies de belofte die het item claimt te leveren.

**Wat er nu misgaat.** Item 3 in checklistItems (regel 11): 'Tech-stack keuze — WordPress, Webflow, Next.js of Shopify — welke past bij jouw situatie?' noemt vier merknamen zonder uitleg wat een 'tech-stack' is of waarom de keuze ertoe doet; item 5 (regel 13) spreekt van 'Concrete Core Web Vitals scores die je moet eisen van je bureau' zonder toelichting wat die scores betekenen. Beide items staan bovendien in de zichtbare preview op de pagina zelf (regels 84-92, checklistItems.slice(0,4)) — de plek waar deze persona besluit of hij zijn gegevens invult.

**Award-winning oplossing.** Herschrijf beide items in gewone taal met het 'waarom voor jou' voorop: item 3 → 'Welk soort systeem past bij je bedrijf — en waarom de verkeerde keuze je later duizenden euro's aan overstappen kan kosten'; item 5 → 'De laadsnelheid-eisen die bepalen of klanten blijven of afhaken — in gewone taal.' Voeg bij de vier preview-items (regels 84-92) een klein '?'-icoontje toe dat op hover/tap één zin plain-language uitleg toont in een tooltip met dezelfde goud-accentkleur als de rest van de pagina — zodat de checklist zichzelf al bewijst vóórdat iemand hem heeft gedownload: dit is een bedrijf dat jargon daadwerkelijk vertaalt, niet alleen belooft te vertalen.

### 11. De hero roteert vier vaktermen, maar legt nooit uit wat ze concreet betekenen {#niet-technische-eigenaardirecteur-de-hero-roteert-vier-vaktermen-maar-legt-nooit-uit-wat-ze-concreet-betekenen}

**Persona:** Niet-technische eigenaar/directeur (landt via Google op de homepage)  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een eigenaar van een installatiebedrijf zoekt op Google naar 'maatwerk software voor mijn bedrijf' en landt binnen enkele seconden op de homepage, waar 'WIJ BOUWEN MAATWERK SOFTWARE / WEB APPLICATIES / DIGITALE SYSTEMEN / PROCESSEN OP MAAT' om de 2,6 seconden doorroteert (page.tsx regel 15, `heroServices`; interval regel 113).

**Trust/behoefte-trigger.** PRODUCT.md's eigen doel is dat een bezoeker na 10 seconden precies weet waar hij aan toe is. Deze persona onthoudt in de praktijk vooral: 'ik snap niet precies wát ze voor mij bouwen' — vier abstracte vaknamen zonder één concreet ankerpunt.

**Wat er nu misgaat.** De vier roterende hero-termen zijn stuk voor stuk abstract. De klikbare service-pills eronder (regels 373-383) laten je wél tussen de termen wisselen, maar tonen bij elke keuze exact dezelfde vier labels als knoppen — geen enkele geeft een concreet voorbeeld van wat er dan gebouwd wordt.

**Award-winning oplossing.** Voeg onder de roterende hero-zin een tweede, kleinere regel toe die automatisch meewisselt met `svcIdx` (al bestaande state, regels 71 en 113-115) en een concreet voorbeeld toont in mensentaal — bijv. bij 'MAATWERK SOFTWARE': 'Bijvoorbeeld: één scherm waarin planning, facturen en klantdata elkaar automatisch bijwerken.' Voeg een parallelle `heroExamples`-array toe (vier korte, sector-neutrale voorbeeldzinnen, één per service) zodat elke rotatie ook een concreet beeld meebrengt in plaats van alleen een nieuw label. Dit is een kleine, goedkope wijziging — één array, één extra `<p>` — met een disproportioneel begripseffect voor precies de persona die na 10 seconden een oordeel velt.

### 12. De FAQ over doorlooptijd belooft 'geen slag in de lucht' en geeft er vervolgens toch één {#niet-technische-eigenaardirecteur-de-faq-over-doorlooptijd-belooft-geen-slag-in-de-lucht-en-geeft-er-vervolgens-toch-n}

**Persona:** Niet-technische eigenaar/directeur (heeft een deadline in gedachten)  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een eigenaar heeft een concrete deadline in gedachten — bijvoorbeeld: het systeem moet draaien vóór het nieuwe seizoen begint — en leest de FAQ 'Hoe lang duurt een maatwerk software traject?' op zoek naar een ruwe indicatie om zijn eigen planning te toetsen.

**Trust/behoefte-trigger.** Hij wil geen exacte belofte, maar wél een ballpark om zijn eigen tijdlijn tegen af te zetten. Zonder dat houvast haakt hij af naar een concurrent die wél een cijfer durft te noemen.

**Wat er nu misgaat.** page.tsx regel 234: het volledige antwoord luidt 'Dat hangt echt af van de scope — een gekoppeld formulier is iets anders dan een compleet bedrijfssysteem. Bij de intake krijg je een concreet plan met fases en een reële planning, geen slag in de lucht.' — geen enkel getal, zelfs geen brede range, terwijl de zin zelf claimt geen 'slag in de lucht' te zijn.

**Award-winning oplossing.** Voeg aan hetzelfde FAQ-antwoord één concrete zin met een brede maar eerlijke bandbreedte toe: 'Een gekoppeld formulier of eenvoudige automatisering is vaak binnen 2-4 weken live; een compleet bedrijfssysteem duurt meestal 2-4 maanden.' Dit blijft waarheidsgetrouw (nog steeds een indicatie, geen harde belofte) maar geeft precies het houvast dat deze persona zoekt — en maakt de zin 'geen slag in de lucht' voor het eerst ook waar.

### 13. 'Geen vage tijdlijnen' belooft Het Traject — en toont vervolgens vier fases zonder één week- of maandindicatie {#niet-technische-eigenaardirecteur-geen-vage-tijdlijnen-belooft-het-traject-en-toont-vervolgens-vier-fases-zonder-n-week--of-maandindicatie}

**Persona:** Niet-technische eigenaar/directeur (scrolt door 'Het Traject' om de totale doorlooptijd te schatten)  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een eigenaar scrolt door de 'Het Traject'-sectie (Fase 1-4) op de homepage en probeert, terwijl hij de deliverables per fase leest, de totale doorlooptijd bij elkaar op te tellen voordat hij een gesprek aanvraagt.

**Trust/behoefte-trigger.** Elke fase toont concrete deliverables ('Klikbaar prototype', 'Staging-omgeving') wat vertrouwen wekt — maar het label 'Fase 1/2/3/4' zonder tijdsindicatie laat hem zonder enig gevoel voor de totale doorlooptijd, terwijl de introtekst zelf claimt 'Geen dikke offertes. Geen vage tijdlijnen.' (page.tsx regel 817).

**Wat er nu misgaat.** In page.tsx (regels 829-865) bevat elk fase-object een `duration`-veld dat letterlijk alleen 'Fase 1', 'Fase 2', 'Fase 3', 'Fase 4' bevat (regels 833, 842, 851, 860) — geen week- of maandindicatie — en dat veld wordt vervolgens getoond als een geaccentueerde badge (regels 890-899) die er door de styling uitziet alsof er wél een tijdsclaim in staat, terwijl er alleen een volgnummer herhaald wordt.

**Award-winning oplossing.** Vervang de duration-waarden door een indicatieve bandbreedte per fase in datzelfde badge-element: 'Fase 1 · meestal binnen een week' / 'Fase 2 · 1-2 weken' / 'Fase 3 · 4-10 weken, afhankelijk van scope' / 'Fase 4 · 1 week + doorlopend beheer'. Voeg als kers op de taart een cumulatieve mini-balk toe onder de laatste fase — een dunne, segmenten-gekleurde lijn die optelt tot 'Totaal: meestal 6-13 weken van intake tot livegang' — zodat de sectie niet alleen per fase, maar ook in totaal precies het cijfer geeft waar deze persona onbewust naar op zoek is, en de eigen belofte 'geen vage tijdlijnen' voor het eerst overal waarmaakt.

### 14. 'Maatwerk software als fundament' zegt de kop — maar de rij-opmaak zegt 'vier gelijke diensten' {#niet-technische-eigenaardirecteur-maatwerk-software-als-fundament-zegt-de-kop-maar-de-rij-opmaak-zegt-vier-gelijke-diensten}

**Persona:** Niet-technische eigenaar/directeur (snelle scanner, drukke agenda)  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een drukke directeur opent /diensten tussen twee afspraken door en scant alleen de koppen en de vier accordion-rijen, zonder de tussenliggende paragrafen te lezen.

**Trust/behoefte-trigger.** Hij vormt zijn eerste indruk puur op wat visueel opvalt. Als 'Maatwerk Software' er niet duidelijk prominenter uitziet dan 'Video & Aerial', concludeert hij — ten onrechte, maar begrijpelijk — dat dit vier gelijkwaardige diensten van een generalistisch bureau zijn: exact de 'brede bureau'-indruk die PRODUCT.md (Design Principle 5) wil vermijden.

**Wat er nu misgaat.** In src/app/diensten/page.tsx renderen alle vier DISCIPLINES (regels 8-36) als identiek opgemaakte, even grote accordion-rijen (regels 197-262) — zelfde fontgrootte, zelfde padding, alleen een ander gekleurd bolletje van 8 bij 8 pixels (regel 213: `w-2 h-2 rounded-full`). De kop erboven zegt wel 'Maatwerk software als fundament, de rest sluit erop aan' (regels 191-194), maar de rij-opmaak zelf maakt op geen enkele manier visueel onderscheid tussen 'fundament' en 'sluit erop aan'.

**Award-winning oplossing.** Geef het eerste item (Maatwerk Software) een permanent uitgelichte, iets grotere rij bovenaan — met de gouden accentkleur (#d4a574) als volle achtergrondtint in plaats van een klein bolletje, en een label 'FUNDAMENT' — en groepeer de overige drie disciplines visueel eronder onder het label 'SLUIT HIERAAN OP AAN', zodat een scannende bezoeker in twee seconden ziet welke dienst het zwaartepunt is. Dit is dezelfde asymmetrie die de homepage's 'Drie pijlers'-grid al impliciet toepast door Maatwerk Software als pijler 01 te tonen (page.tsx regel 166) — /diensten hoeft die hiërarchie alleen consequent door te trekken in plaats van hem in de accordion plat te slaan.

### 15. De datum/tijd-kiezer voelt als Calendly aan — en is puur cosmetisch {#niet-technische-eigenaardirecteur-de-datumtijd-kiezer-voelt-als-calendly-aan-en-is-puur-cosmetisch}

**Persona:** Niet-technische eigenaar/directeur (plant bewust een online gesprek en reserveert die tijd in zijn eigen agenda)  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Een directeur kiest een datum en tijdslot in het contactformulier voor een online gesprek, reserveert alvast diezelfde tijd in zijn eigen agenda, en informeert zijn compagnon dat het gesprek 'volgende week donderdag om 14:00' zal plaatsvinden.

**Trust/behoefte-trigger.** Een native datum-kiezer en tijd-dropdown zien er in elke andere context (Calendly, Google Agenda) uit als een bindend geboekt slot. Voor een niet-technische gebruiker is het onderscheid tussen 'een wens doorgeven' en 'een tijd claimen' onzichtbaar — de UI communiceert zekerheid die er niet is.

**Wat er nu misgaat.** In page.tsx (regels 1314-1342) en /contact/page.tsx (regels 209-229) is de datum/tijd-selectie puur cosmetisch: geen agendakoppeling, geen beschikbaarheidscheck. De gekozen waarden worden alleen als platte tekst in het WhatsApp-bericht geplakt (`handleWhatsAppSubmit` regels 156-160, `submit` regels 96-97). Twee bezoekers kunnen zonder enige waarschuwing exact hetzelfde tijdslot 'kiezen' — nergens op de pagina staat een zin die dit expliciet maakt.

**Award-winning oplossing.** Voeg direct onder het datum/tijd-blok op beide formulieren een duidelijke microcopy-regel toe: 'Dit is een voorkeur, geen bevestigde afspraak — we bevestigen het definitieve tijdstip zelf binnen 2 uur via WhatsApp of telefoon' (consistent met de reactietijd-badge uit de '2 uur versus 24 uur'-case). Op iets langere termijn: vervang de cosmetische selector door een echte, gratis te embedden agendakoppeling (bijv. Cal.com, die zich in dezelfde donkere/gouden stijl laat theming) zodat een gekozen slot voortaan ook daadwerkelijk een geblokkeerd slot is — het verschil tussen een formulier dat eruitziet als een boekingstool en een formulier dat er daadwerkelijk een is, is precies het verschil tussen 'doordacht' en 'doet alsof'.

---

## De prijsvergelijker

### 1. Drie kerncijfers, één zwart gat: '100%' zonder enig bedrag erachter {#de-prijsvergelijker-drie-kerncijfers-n-zwart-gat-100-zonder-enig-bedrag-erachter}

**Persona:** De prijsvergelijker  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Marleen is hoofd bedrijfsvoering bij een installatiebedrijf met 40 medewerkers. Ze heeft de afgelopen zes weken twee volledige offertetrajecten met IT-bureaus doorlopen — beide op niets uitgelopen omdat het bedrijf uiteindelijk drie tot vijf keer duurder bleek dan de eerste indruk deed vermoeden. Ze heeft zichzelf één regel opgelegd: geen tijd meer investeren in een gesprek voordat ze weet in welke prijsorde ze zit. Ze opent de Dynique-homepage via een LinkedIn-link die een collega deelde, scrolt voorbij de hero en het 'Waarom Dynique'-verhaal, en stopt bij het conversieblok onderaan 'Het Traject' — precies waar de site haar overtuigen wil.

**Trust/behoefte-trigger.** Het conversieblok toont drie kerncijfers vlak boven de knop 'START JOUW TRAJECT': '24u / Reactietijd', '100% / Vaste prijs', '3 / Revisierondes' (src/app/page.tsx, regels 970-983). Het zijn de enige harde getallen op de hele pagina die in de buurt komen van een antwoord op haar enige vraag. '100%' triggert bij Marleen direct de reflex 'honderd procent van wélk bedrag' — en daar stopt het.

**Wat er nu misgaat.** De tegel is een keiharde vertrouwensclaim zonder enige onderbouwing binnen handbereik: geen link, geen tooltip, geen cijfer, geen voorbeeldproject. Terwijl de site elders (blog/wat-kost-een-website, regel 94) wél concrete bedragen noemt — een MKB-website vanaf €3.500, vier duidelijke prijsklassen — wordt dat artikel op geen enkele plek aangehaald vanuit dít conversieblok, de FAQ (regels 233-242) of het Fase 1-blok. Precies op het moment dat een bezoeker het meest ontvankelijk is voor een prijsanker, krijgt ze een abstract percentage en verder niets.

**Award-winning oplossing.** Maak van de statischte tegel op de site de meest concrete: de '100%'-tegel wordt zelf klikbaar en klapt inline open tot een compact 'prijsledger' — drie regels in exact dezelfde extralight-typografie en dunne gouden lijnstijl als de Fase-tijdlijn eronder: 'Web & Platformen — vanaf €3.500 · Procesautomatisering — koppeling vanaf €X · Maatwerk systeem — vaste prijs per fase, bepaald bij intake'. Geen paginaverlaat, geen nieuw ontwerptaalgebruik — de tegel 'opent' zoals de Fase-kaarten er al uitzien, met elke regel doorlinkend naar de bijbehorende dienstpagina of de nieuwe investeringspagina. Zo wordt exact het cijfer waar Marleen op afknapt het cijfer waarmee ze verder kan.

### 2. Homepage belooft 'vaste prijs', eigen blog ontkent dat voor exact dezelfde dienst {#de-prijsvergelijker-homepage-belooft-vaste-prijs-eigen-blog-ontkent-dat-voor-exact-dezelfde-dienst}

**Persona:** De prijsvergelijker  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Rutger is financieel directeur bij een logistiek bedrijf en laat, zoals bij elke leverancierskeuze boven een bepaald bedrag, een junior analist eerst een vergelijkingsmemo opstellen over drie kandidaat-bureaus voordat hijzelf een gesprek voert. De analist leest de Dynique-homepage (vaste-prijsbelofte) en kort daarna, via een Google-snippet, het artikel 'Wat kost een website in 2026?' — het enige stuk content op de site dat expliciet over geld gaat. In de memo zet ze een rode vlag bij Dynique's regel.

**Trust/behoefte-trigger.** Het artikel schrijft letterlijk: 'Voor maatwerk software (...) geldt geen vaste prijstabel: dat bespreken we pas na een intake' (src/app/blog/wat-kost-een-website/page.tsx, regel 94) — terwijl maatwerk software exact de dienst is die de homepage siert met de stat '100% / Vaste prijs' (src/app/page.tsx, regel 973) en de tekst 'Geen verrassingen, een vaste prijs per fase' pal boven diezelfde tegel (regel 965).

**Wat er nu misgaat.** Dit is geen subtiel nuanceverschil maar een letterlijke tegenspraak op het kernproduct: de homepage claimt zonder voorbehoud '100% vaste prijs', de eigen blogpost zegt voor precies díe dienst 'geen vaste prijstabel'. Voor een prijsvergelijker die bewust bronnen naast elkaar legt, is dit exact het soort inconsistentie die een merk dat zichzelf 'eigenzinnig eerlijk' noemt zou moeten vermijden — het voelt als twee teksten die nooit tegen elkaar zijn afgezet, geschreven door twee mensen die elkaars pagina niet hebben gelezen.

**Award-winning oplossing.** Los dit op als systeemfout, niet als copyfout: maak Fase 1 ('INTAKE') in Het Traject de enige, canonieke definitie van de prijsbelofte — daar staat al letterlijk 'Na afloop weet je precies wat we gaan bouwen, wat het kost' (regel 835) met als deliverable 'Heldere offerte' (regel 836). Verander de homepage-tegel van '100% / Vaste prijs' naar '100% / Vast per fase', met een anker-link naar Fase 1 eronder ('zie hoe ↓'). Herschrijf vervolgens de blogzin niet als verzachting maar als bevestiging: 'Voor maatwerk software werken we volgens hetzelfde principe als hierboven op deze site: vaste prijs per fase, bepaald bij de intake — geen kant-en-klare tabel vooraf, wel zekerheid per fase voordat we starten.' Twee documenten die nu tegenspreken, worden zo twee documenten die letterlijk naar elkaar verwijzen.

### 3. De Adviseur vraagt naar prijsvoorkeur, en negeert vervolgens welke dienst erbij hoort {#de-prijsvergelijker-de-adviseur-vraagt-naar-prijsvoorkeur-en-negeert-vervolgens-welke-dienst-erbij-hoort}

**Persona:** De prijsvergelijker  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Sofie is projectmanager bij een zorginstelling en test bewust de interactieve 'Adviseur' op de homepage, omdat het de enige site van vijf kandidaat-bureaus is met iets anders dan een kaal contactformulier. Bij vraag 3 ('Wat is voor jou het belangrijkst?') kiest ze doelbewust 'Een vaste, voorspelbare prijs' in plaats van 'snel' of 'robuust' — precies om te zien of het systeem daar iets specifieks mee doet.

**Trust/behoefte-trigger.** De optie staat letterlijk zo aangeboden: 'prijs': 'Een vaste, voorspelbare prijs' (src/components/Advisor.tsx, regel 47) — wat bij Sofie de verwachting wekt dat het eindresultaat hierop is toegespitst, juist omdat het de enige plek op de hele site is die expliciet naar prijsvoorkeur vraagt.

**Wat er nu misgaat.** De APPROACH-tekst voor prio='prijs' is voor iedereen letterlijk identiek, ongeacht welke van de drie diensten (automatisering, maatwerkSysteem, appPortaal — regels 75-111) het systeem via de eerste twee vragen al heeft gediagnosticeerd: 'Je krijgt vooraf een vaste prijs. Geen nacalculatie, geen verrassingen achteraf' (regel 115). Geen bedrag, geen richting, geen koppeling met de blog-prijsgids. Het enige onderdeel van de site dat expliciet vraagt 'is prijs voor jou het belangrijkst?' is tegelijk het enige onderdeel dat daar vervolgens niets specifieks mee doet.

**Award-winning oplossing.** Splits APPROACH.prijs op naar de drie SERVICES-sleutels zodat de tekst matcht met wat er al is gediagnosticeerd, en voeg — alleen wanneer prio==='prijs' — in het resultaatpaneel een derde spec-sheet-rij toe naast 'Aanpak' en 'Tijdlijn' (regels 476-486): een compacte horizontale 'Prijsrichting'-indicator (Koppeling · Systeem · Platform) die het gediagnosticeerde type oplicht in exact de accentkleur die de dienst al heeft (regels 77, 89, 101), plus een link 'Bekijk voorbeeldprijzen →' naar de nieuwe investeringspagina. Geen nieuw ontwerptaalgebruik nodig — het is een extra rij in een patroon dat al bestaat. Zo wordt De Adviseur het enige self-service-instrument op de site dat een prijsvergelijker daadwerkelijk verder helpt, in plaats van het enige onderdeel dat haar expliciete signaal negeert.

### 4. Geen 'Investering' in het menu — de enige prijsgids op de site is per ongeluk vindbaar {#de-prijsvergelijker-geen-investering-in-het-menu-de-enige-prijsgids-op-de-site-is-per-ongeluk-vindbaar}

**Persona:** De prijsvergelijker  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Dennis is eigenaar van een bouwbedrijf en houdt voor elke grote inkoopbeslissing een vergelijkingsspreadsheet bij met kolommen 'startprijs', 'wat zit erin' en 'verborgen kosten'. Hij navigeert via het hoofdmenu van dynique.nl langs Diensten, Portfolio, Over ons en Blog, op zoek naar iets met 'Prijzen', 'Tarieven' of 'Investering' erin — een gewoonte die hem bij vier van de vijf bureausites die hij al bekeek wél iets opleverde.

**Trust/behoefte-trigger.** Zowel het desktop-dropdownmenu (dienstenItems, src/components/Header.tsx, regels 10-15) als het volledige mobiele menu (mobileNav, regels 17-24) bevatten geen enkel item dat naar prijs verwijst — terwijl de meest prijsdetailleerde pagina van de hele site (het blogartikel 'Wat kost een website in 2026?' met vier concrete prijsklassen, van €0 tot €15.000+) gewoon bestaat, maar nergens uit de navigatie, de dienstenhub of de FAQ wordt aangehaakt.

**Wat er nu misgaat.** De enige toegang tot die pagina is een vermelding tussen andere blogonderwerpen (automatisering met n8n/Zapier, lokale SEO) of toevallig zoekverkeer. Een prijsvergelijker die stelselmatig offertepagina's afstruint via het menu — precies zoals Dennis doet — mist deze content volledig, ook al bevat de site het antwoord al.

**Award-winning oplossing.** Voeg 'Investering' toe als vast item naast Portfolio en Over ons, en bouw er een indexeerbare pagina /investering achter die niet zomaar een tabel is, maar het bestaande 'spectrum'-diagram van de dienstenhub hergebruikt (het vier-kleuren-lijnenpatroon dat naar de DYNIQUE-hub convergeert, src/app/diensten/page.tsx regels 146-181) — alleen nu met de vier prijsklassen uit de blogpost als knooppunten (DIY / Freelance / Premium bureau / Maatwerk software) in plaats van de vier diensten. Elk knooppunt klikt open tot een korte 'past dit bij mij?'-uitleg. Geen nieuwe visuele taal nodig — het voelt als een natuurlijke voortzetting van een patroon dat de site al heeft, in plaats van een los tarievenblok.

### 5. Acht FAQ's, geen enkele over geld — de meest voor de hand liggende vraag ontbreekt {#de-prijsvergelijker-acht-faqs-geen-enkele-over-geld-de-meest-voor-de-hand-liggende-vraag-ontbreekt}

**Persona:** De prijsvergelijker  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Yara is inkoopadviseur en scant standaard eerst de FAQ-sectie van elke bureausite voordat ze een contactformulier invult — dat scheelt haar een eerste belronde met bureaus die toch niet bij haar budget passen. Op de Dynique-homepage klikt ze het FAQ-blok open bij 'Directe antwoorden', ervan uitgaand dat een prijsvraag daar sowieso tussen staat.

**Trust/behoefte-trigger.** De acht FAQ's (src/app/page.tsx, regels 233-242) behandelen doorlooptijd, werkgebied, bestaande systemen, databeveiliging, scopewijzigingen, webontwikkeling, nazorg en ontevredenheid — en worden 1-op-1 herhaald in de FAQPage-JSON-LD (regels 246-259). Geen enkele vraag luidt 'Wat kost maatwerk software ongeveer?' — zelfs de vraag over scopewijziging (regel 238) gaat zijdelings over geld zonder ooit een bedrag te noemen.

**Wat er nu misgaat.** Voor een bezoeker die specifiek offertes vergelijkt is dit de meest voorspelbare vraag van de hele site, en juist die ontbreekt. Het voelt niet als toeval maar als vermijding — precies het omgekeerde van de 'eigenzinnig eerlijk'-belofte uit PRODUCT.md, die zich hier zou moeten uiten door de vraag wél te beantwoorden.

**Award-winning oplossing.** Voeg een negende FAQ toe in dezelfde eerlijke toon als de rest: 'Wat kost maatwerk software bij Dynique ongeveer?' → 'Dat hangt af van scope: een gekoppeld formulier begint vaak rond een paar duizend euro, een volledig bedrijfssysteem loopt hoger — vergelijkbaar met het verschil tussen een website en een platform. Bij de intake reken je mee, niet ernaar. Bekijk de vier prijsklassen op onze investeringspagina.' Omdat de faqs.map-structuur (regels 252-256) automatisch de FAQPage-schema genereert, wordt deze ene contentwijziging meteen ook zoekmachine-zichtbaar voor 'wat kost maatwerk software'-achtige zoekopdrachten — een SEO-winst die uit dezelfde beweging komt als de UX-fix.

### 6. Elke prijs zit vast aan een gesprek — er is geen enkele uitweg zonder te praten {#de-prijsvergelijker-elke-prijs-zit-vast-aan-een-gesprek-er-is-geen-enkele-uitweg-zonder-te-praten}

**Persona:** De prijsvergelijker  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Bram is operationeel directeur bij een groothandel en hanteert één harde regel: geen enkel gesprek voordat hij een ruwe prijsindicatie heeft, om te voorkomen dat hij tijd verliest aan bureaus buiten zijn budget. Hij leest 'Het Traject' op de homepage zin voor zin, op zoek naar het exacte moment waarop prijs voor het eerst ter sprake komt.

**Trust/behoefte-trigger.** Fase 1 ('INTAKE') belooft expliciet: 'Na afloop weet je precies wat we gaan bouwen, wát het kost en hoe het traject eruitziet' (src/app/page.tsx, regel 835) — de eerste én enige plek waar prijs wordt genoemd, is dus ná een 'strategisch gesprek' (regel 836). Voor Bram is een intakegesprek functioneel een verkoopgesprek, ook al heet het anders.

**Wat er nu misgaat.** Elke prijsroute op de site — homepage-CTA, WhatsApp-knop, contactformulier, De Adviseur — mondt uit in hetzelfde: eerst praten, dan pas een cijfer. Er bestaat geen enkel zelfbedieningsmechanisme dat vóór contact al een richting geeft, terwijl PRODUCT.md de doelgroep expliciet beschrijft als 'hoger budget, meer overwegingstijd' — precies het profiel dat afhaakt naar een concurrent met een rekentool.

**Award-winning oplossing.** Bouw een 'Richtprijs-indicatie' die zich niet gedraagt als een los widgetje, maar als de kleine zus van De Adviseur: geplaatst in de Fase 1-kaart zelf (rond regel 836), met dezelfde console-esthetiek in miniatuur — dunne hoek-brackets, gouden randlijn — maar teruggebracht tot drie velden (systeemtype · aantal gebruikers · bestaande koppeling ja/nee). Client-side, geen server nodig, direct een bandbreedte, met de tekst 'Dit is een richting, geen offerte — de intake maakt 'm scherp.' Zo verandert de intake van poortwachter naar verdieping: Bram krijgt zijn cijfer vóórdat hij ooit een naam hoeft in te vullen.

### 7. Sectorpagina's benoemen wat het probleem kost, nooit wat de oplossing kost {#de-prijsvergelijker-sectorpaginas-benoemen-wat-het-probleem-kost-nooit-wat-de-oplossing-kost}

**Persona:** De prijsvergelijker  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Corné runt een installatiebedrijf en zoekt via Google specifiek op 'software voor installatiebedrijf prijs'. Hij landt rechtstreeks op /maatwerk-software/installatiebedrijf — een pagina die zijn probleem woord voor woord beschrijft (roosters op whiteboard, werkbonnen los via WhatsApp, onderhoud in Excel) en dus de bezoeker is met de hoogste koopintentie die de site die dag ontvangt.

**Trust/behoefte-trigger.** De pagina benoemt herhaaldelijk wat het huidige probleem kóst: 'En dat kost niet alleen tijd, maar ook grip op onderhoud en materiaal' (src/app/maatwerk-software/installatiebedrijf/page.tsx, regel 30). De pagina heeft via het gedeelde SectorTemplate-component wél een gratis-instapmoment ('GRATIS PROCESANALYSE OP LOCATIE'), maar noemt op geen enkel moment wat de oplossing zelf — het systeem waar de hele pagina over gaat — investeringstechnisch betekent.

**Wat er nu misgaat.** PRODUCT.md noemt deze vier sectorpagina's expliciet als 'dieper-in-de-funnel bewijs' — juist hier zou een prijsanker het hoogste rendement hebben, maar bouw/zorg/logistiek/installatiebedrijf behandelen de investering identiek: wel een gratis eerste stap, nooit een idee van wat er ná die stap financieel volgt. Corné heeft dus wél een uitnodiging, maar geen enkel kader om te bepalen of hij er financieel bij past voordat hij die uitnodiging aanneemt.

**Award-winning oplossing.** Omdat alle vier sectorpagina's hetzelfde SectorTemplate-component delen (src/components/SectorTemplate.tsx) met een getypeerd SectorData-object, is dit één component-wijziging in plaats van vier: voeg een `priceSignal`-veld toe aan het type en render vlak vóór de slot-CTA een 'Investeringsrichting'-module in de eigen accentkleur van de sector, bijvoorbeeld voor installatie: 'Een koppeling tussen planning en facturatie start doorgaans rond de €X; een volledig bedrijfssysteem hoger — scope bepaalt de prijs, niet de sector.' Vier pagina's, één edit, consistent met hoe `pains` en `features` al data-gedreven zijn opgebouwd.

### 8. De gratis checklist belooft offerte-vragen, maar is geschreven voor webdesign, niet voor haar project {#de-prijsvergelijker-de-gratis-checklist-belooft-offerte-vragen-maar-is-geschreven-voor-webdesign-niet-voor-haar-project}

**Persona:** De prijsvergelijker  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Ilse is marketingmanager en wil zich voorbereiden op vijf offertegesprekken door vooraf te weten welke vragen ze aan elk bureau moet stellen. Ze vindt via de footer de 'Gratis Website Checklist 2026', ziet de belofte 'tien vragen die elke serieuze offerte beantwoord moet hebben' — precies wat ze zoekt voor haar project, een intern goedkeuringssysteem — en vult haar naam en e-mail in.

**Trust/behoefte-trigger.** Checklist-item 07 belooft letterlijk 'Tien vragen die elke serieuze offerte beantwoord moet hebben' (src/app/gratis-checklist/page.tsx, regel 15), maar item 03 ('Tech-stack keuze: WordPress, Webflow, Next.js of Shopify', regel 11) maakt meteen duidelijk dat de hele checklist voor webdesign-trajecten is geschreven — niet voor het maatwerk-softwareproject dat Ilse daadwerkelijk heeft.

**Wat er nu misgaat.** De enige offerte-vergelijkingstool op de hele site is expliciet website-schaal, terwijl hij zichzelf generiek genoeg presenteert ('De Website Checklist') dat een prijsvergelijker voor maatwerk software er pas ná het invullen van naam en e-mail achter komt dat hij niet de doelgroep is. Dat is frictie waar geen enkele waarde tegenover staat.

**Award-winning oplossing.** De site heeft al twee bewezen sjabloonpatronen voor herbruikbare, datagedreven pagina's (SectorTemplate, CaseStudyTemplate) — pas dat patroon hier ook toe: til de checklistpagina uit een eenmalig bestand naar een LeadMagnetTemplate-component, geparametriseerd met een checklistItems-array. Vul die tweede keer met 'De Maatwerk Software Offerte-Checklist' (databeveiliging & eigendom, vaste prijs per fase vs. nacalculatie, broncode-overdracht, koppelingsscope, wat gebeurt er bij scope-wijziging) en link hem vanuit /diensten/processen en de vier sectorpagina's — precies waar deze prijsvergelijker zich al bevindt — in plaats van alleen vanuit de footer naar de websitevariant.

### 9. De structured data belooft een prijsklasse die nergens zichtbaar op de pagina staat {#de-prijsvergelijker-de-structured-data-belooft-een-prijsklasse-die-nergens-zichtbaar-op-de-pagina-staat}

**Persona:** De prijsvergelijker  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Wesley is IT-inkoper bij een middelgroot bedrijf en bekijkt, een gewoonte uit een eerder due-diligence-traject, standaard de broncode en structured data van elke kandidaat-bureausite. Op de Dynique-contactpagina inspecteert hij de JSON-LD in plaats van de zichtbare tekst.

**Trust/behoefte-trigger.** In de LocalBusiness-schema staat `priceRange: "€€"` (src/app/contact/page.tsx, regel 41) — een Google Maps-achtige symboolindicatie die 'middensegment' suggereert, maar die waarde staat nergens zichtbaar op de pagina zelf en wordt nergens uitgelegd, terwijl het DETAILS-blok ernaast (regels 10-16) wél TELEFOON, E-MAIL, REACTIETIJD, WERKGEBIED en zelfs het KVK-nummer toont — maar geen investeringsindicatie.

**Wat er nu misgaat.** Schema en zichtbare content bestaan volledig los van elkaar: de enige plek waar een prijsindicatie technisch al aanwezig is, is onzichtbaar voor mensen, en de enige plek waar mensen wél cijfers zien (de blogpost, €3.500 tot €15.000+) wordt nergens weerspiegeld in de schema. Voor een technisch onderlegde inkoper is dit precies het teken dat prijstransparantie hier nooit als geheel is doorgedacht — juist bij een bureau dat zichzelf 'technisch onderlegd' noemt.

**Award-winning oplossing.** Vervang `priceRange: "€€"` door een concrete numerieke range die aansluit op de blogpost, bijvoorbeeld `priceRange: "€3.500–€50.000+"`, en voeg diezelfde range als zesde regel toe aan het DETAILS-blok (naast TELEFOON/E-MAIL/REACTIETIJD/WERKGEBIED/KVK) onder het label 'INDICATIE'. Eén array-item erbij, en de schema wordt voor het eerst een waarheidsgetrouwe afspiegeling van wat een bezoeker ook echt op het scherm ziet.

### 10. Twee reactietijden op één scherm ondermijnen het vertrouwen in élk ander getal op de site {#de-prijsvergelijker-twee-reactietijden-op-n-scherm-ondermijnen-het-vertrouwen-in-lk-ander-getal-op-de-site}

**Persona:** De prijsvergelijker  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Femke houdt voor haar leveranciersvergelijking een screenshot-archief bij van exacte cijfers per bureau — reactietijd, garanties, revisierondes — om inconsistenties later te kunnen aankaarten in het beslissende gesprek. Op de Dynique-contactpagina maakt ze binnen tien seconden twee screenshots vlak na elkaar: één van de contactgegevens, één van de tekst direct erboven.

**Trust/behoefte-trigger.** Bovenaan staat 'REACTIETIJD: Binnen 2 uur (ma–za, 9-20u)' (src/app/contact/page.tsx, regel 13) en 'Je hoort binnen 2 uur van ons' (regel 19), terwijl de introtekst op dezelfde pagina zegt 'We reageren altijd binnen 24 uur — meestal veel eerder' (regel 134) — een factor 12 verschil op één scherm. Exact dezelfde tegenstrijdigheid staat op de homepage: '24u' in de stat-tegel (regel 972) en 'Binnen 2 uur' in de contactgegevens (regel 1235), naast 'binnen 24 uur, meestal veel eerder' in de introtekst ernaast (regel 1229).

**Wat er nu misgaat.** Voor een gemiddelde bezoeker een storend detail; voor een prijsvergelijker die actief op zoek is naar redenen om te wantrouwen, is dit precies het soort harde-cijfer-inconsistentie die de geloofwaardigheid van élk ander getal op de site — '100% vaste prijs', '3 revisierondes' — mee omlaag trekt. Als twee simpele getallen op hetzelfde scherm al niet kloppen, waarom zou de prijsafspraak wel standhouden?

**Award-winning oplossing.** Los dit niet op als copyfout maar als architectuurfout: beide bestanden (src/app/page.tsx en src/app/contact/page.tsx) hardcoden '2 uur' en '24 uur' onafhankelijk van elkaar, op in totaal vier plekken. Introduceer één gedeelde constante (bijvoorbeeld `RESPONSE_TIME_LABEL` in een nieuw `src/lib/siteConfig.ts`) die beide componenten importeren in plaats van de tekst zelf te typen — kies '24 uur' als canonieke waarde, aansluitend bij zowel de homepage-stat als de FAQ-toon. Dat maakt dit precies het soort structurele, code-niveau-oplossing dat bij een merk hoort dat zichzelf 'technisch onderlegd en precies' noemt: de bug kan na deze fix niet meer terugkomen bij de volgende copywijziging, omdat er nog maar één plek is om het fout te doen.

### 11. Portfolio bewijst snelheid tot in detail, budget nul keer {#de-prijsvergelijker-portfolio-bewijst-snelheid-tot-in-detail-budget-nul-keer}

**Persona:** De prijsvergelijker  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Kevin is CFO bij een middelgroot familiebedrijf en gebruikt portfolio's structureel om een prijsgevoel te krijgen zonder meteen een gesprek aan te gaan: 'als een vergelijkbaar project X kostte, weet ik of ik in de juiste liga zit.' Hij bekijkt achtereenvolgens de vijf case-pagina's op /portfolio, op zoek naar precies dat ene signaal.

**Trust/behoefte-trigger.** De cases zijn rijk aan tijdlijnbewijs — 'Binnen drie dagen live' voor Creemers Exclusive (homepage-review, regel 612), 'binnen zeven dagen' voor Stacy Kohnen (regel 623), en bij IJssalon Italia expliciete omzetverlies-framing van het oude probleem ('Teleurstelling en gemiste omzet', src/app/portfolio/ijssalon-italia/page.tsx, regel 165) — maar geen enkele case vermeldt een investeringsniveau, budgetcategorie of ook maar een relatieve indicatie.

**Wat er nu misgaat.** Snelheid wordt op vrijwel elke case herhaald als vertrouwenssignaal, maar wordt nooit vertaald naar een prijssignaal — terwijl precies die vertaalslag (snel + compact project = lager budget; een platform als Chefs Connect = hoger budget) is wat Kevin toch al zelf zit te reconstrueren uit gebrek aan iets beters. Dat is bestaand bewijsmateriaal dat maar de helft van zijn werk doet.

**Award-winning oplossing.** Het gedeelde CaseStudyTemplate-component (src/components/CaseStudyTemplate.tsx, gebruikt door alle vijf cases) heeft al een getypeerd `category`-veld dat naast elke titel verschijnt (bijv. 'CULINAIR PLATFORM' bij Chefs Connect, regel 13). Voeg daar één parallel veld aan toe — `scope` — dat rendert als 'PROJECTOMVANG: vergelijkbaar met een [Web & Platformen / Maatwerk Systeem]-traject' en doorlinkt naar de nieuwe investeringspagina. Eén type-uitbreiding, vijf cases die er meteen van profiteren, en een eerlijk relatief anker zonder ooit het exacte factuurbedrag van een klant prijs te geven.

### 12. Vier diensten, vier sectoren, nul visueel verschil in wat ze ongeveer kosten {#de-prijsvergelijker-vier-diensten-vier-sectoren-nul-visueel-verschil-in-wat-ze-ongeveer-kosten}

**Persona:** De prijsvergelijker  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Anouk moet binnen een uur vaststellen welke van de vier Dynique-diensten überhaupt binnen haar goedgekeurde budget past, voordat ze tijd steekt in verder lezen. Ze opent /diensten en scant de vier kaarten: Maatwerk Software, Web & Design, Digitale Marketing, Video & Aerial.

**Trust/behoefte-trigger.** Alle vier de DISCIPLINES-kaarten (src/app/diensten/page.tsx, regels 8-37) hebben identieke visuele lading — zelfde accordion-gedrag, zelfde tag-pills, alleen een andere kleur per rij (d.color, regels 14/21/28/35). Anouk kan niet in één oogopslag zien dat 'Video & Aerial' waarschijnlijk een fractie kost van 'Maatwerk Software', ook al ligt dat voor de hand voor iedereen die de site bouwt.

**Wat er nu misgaat.** Hetzelfde geldt voor de vier SECTOR_LINKS (regels 39-44, bouw/zorg/logistiek/installatiebedrijf): geen enkele visuele of tekstuele hint over relatieve schaal. Anouk moet op elke kaart doorklikken om er ook maar een vaag gevoel bij te krijgen — precies het type frictie dat iemand met vijf open tabs laat afhaken.

**Award-winning oplossing.** Elke DISCIPLINES-rij heeft al een eigen accentkleur (`d.color`) die door de hele kaart heen wordt hergebruikt — voeg daar geen nieuwe visuele taal aan toe, maar een discreet €-tot-€€€-merkteken naast het nummer (`d.n`) in diezelfde kleur, met een tooltip 'relatieve indicatie, geen vast bedrag'. Omdat het een uitbreiding van een bestaand datamodel is (niet een nieuw component), is dit binnen een uur te implementeren en voelt het als een organisch onderdeel van het bestaande kaartontwerp — genoeg anker om Anouk binnen twee seconden te laten zien welke kaart de moeite van het doorklikken waard is.

### 13. De stilte over prijzen wordt nooit uitgelegd — en voelt daardoor ontwijkend in plaats van doordacht {#de-prijsvergelijker-de-stilte-over-prijzen-wordt-nooit-uitgelegd-en-voelt-daardoor-ontwijkend-in-plaats-van-doordacht}

**Persona:** De prijsvergelijker  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Joris heeft inmiddels drie bureausites bekeken die wél een prijzenpagina met pakketten tonen, en is bewust op zoek naar een reden waarom Dynique dat níet doet — hij wil weten of het een principiële keuze is of gewoon een omissie. Hij leest de volledige FAQ en de 'Waarom Dynique'-sectie op zoek naar een verklaring, niet naar een prijs.

**Trust/behoefte-trigger.** Nergens op de site — niet in de FAQ (regels 233-242), niet in de manifest-sectie 'Dynamisch in aanpak' (regels 418-501), niet in Het Traject — wordt expliciet benoemd waaróm er geen prijslijst bestaat. PRODUCT.md positioneert het merk juist als 'eigenzinnig eerlijk': een eigenschap die zich hier zou moeten uiten door de afwezigheid van prijzen te verklaren in plaats van te laten hangen.

**Wat er nu misgaat.** Zonder uitleg interpreteert een vergelijkende bezoeker de afwezigheid van prijzen als een zwakte ('ze verbergen iets') in plaats van een sterkte ('ze weigeren loze getallen te noemen') — precies het omgekeerde van wat de merkpersoonlijkheid zou moeten overbrengen. Dat is een bezwaar dat had kunnen worden omgedraaid tot een differentiator, maar nu gewoon een gat blijft.

**Award-winning oplossing.** Voeg een FAQ toe die het bezwaar direct benoemt en beantwoordt in de karakteristieke merkstem: 'Waarom staat er nergens een vast bedrag op jullie site?' → 'Omdat een bedrag zonder scope een slag in de lucht is — en dat soort loze beloftes doen we niet. Wel geven we binnen 24 uur een concrete richting, zwart-op-wit, voordat je iets tekent.' Plaats deze FAQ als éérste in de lijst, niet als negende toevoeging onderaan — zodat het de eerste indruk van de prijs-stilte actief stuurt in plaats van pas gevonden te worden nadat het wantrouwen al is ontstaan.

### 14. Drie verschillende woorden voor 'gratis eerste stap' — en niemand legt uit of het dezelfde stap is {#de-prijsvergelijker-drie-verschillende-woorden-voor-gratis-eerste-stap-en-niemand-legt-uit-of-het-dezelfde-stap-is}

**Persona:** De prijsvergelijker  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Theo vergelijkt bureaus specifiek op de vraag 'kost het eerste contactmoment iets' — een veelvoorkomende verborgen kostenpost bij IT-bureaus. Hij navigeert via /diensten naar zowel /diensten/web als /diensten/processen (waar zijn eigen project, een intern systeem, feitelijk thuishoort) om te zien of beide pagina's hetzelfde beloven.

**Trust/behoefte-trigger.** Op /diensten/web opent de hero-CTA met 'START JE PROJECT' zonder enige gratis-vermelding (src/app/diensten/web/page.tsx, regel 82) — pas de CTA onderaan diezelfde pagina zegt 'GRATIS OFFERTE' (regel 164): al binnen één pagina twee verschillende beloftes. Op /diensten/processen, Theo's eigenlijke dienst, staat juist bovenaan meteen 'GRATIS PROCESANALYSE OP LOCATIE' (regel 360) met de tagline 'Gratis & vrijblijvend' direct eronder (regel 373) — een ander woord ('procesanalyse', een bezoek ter plekke) dan wat /diensten/web belooft ('offerte', een prijsvoorstel). Dezelfde formulering staat ook op alle vier sectorpagina's via het gedeelde SectorTemplate. De homepage noemt intussen een derde term, 'Gratis kennismaking', verstopt tussen andere trustbadges in het conversieblok (regel 1018) — niet direct onder de knoppen zelf.

**Wat er nu misgaat.** Er bestaan dus drie verschillende woorden voor wat mogelijk hetzelfde gratis eerste moment is — 'offerte' (web), 'procesanalyse' (processen/sectoren), 'kennismaking' (homepage) — en de site legt nergens uit of dit synoniemen zijn of opeenvolgende stappen (leidt de gratis procesanalyse ook automatisch tot een gratis offerte, of is dat een aparte, mogelijk betaalde stap?). Voor Theo, die specifiek uitzoekt of stap één geld kost, is die drievoudige naamgeving verwarrender dan stilte zou zijn geweest — op een site waarvan de kernbelofte precisie is.

**Award-winning oplossing.** Definieer één benoemde, eenduidige eerste stap — bijvoorbeeld 'Het Eerste Gesprek' — en gebruik die naam met identieke microcopy direct onder élke primaire CTA sitebreed: homepage-hero, beide conversieblok-knoppen (niet alleen de trustbadge-rij), de dienstenhub, ZOWEL de boven- als onder-CTA van /diensten/web, /diensten/processen en alle vier sectorpagina's. Formuleer het zo dat de volgorde ook meteen duidelijk wordt: 'Gratis & vrijblijvend — pas een offerte na jouw akkoord.' Dat maakt in één beweging drie losse, verwarrende termen tot één heldere belofte mét expliciete volgorde.

### 15. Geen enkele uitweg zonder gesprek — alle wegen leiden naar een mens, geen naar een document {#de-prijsvergelijker-geen-enkele-uitweg-zonder-gesprek-alle-wegen-leiden-naar-een-mens-geen-naar-een-document}

**Persona:** De prijsvergelijker  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Lotte wil op een doordeweekse avond, buiten kantooruren, zoveel mogelijk bureaus scannen en pas volgend weekend de twee beste kandidaten daadwerkelijk bellen. Ze wil vanavond geen WhatsApp-bericht sturen en geen formulier invullen — alleen materiaal verzamelen om rustig te vergelijken.

**Trust/behoefte-trigger.** Het conversieblok op de homepage biedt exact twee opties: 'START JOUW TRAJECT' (contactformulier) en 'DIRECT WHATSAPP' (src/app/page.tsx, regels 986-1006) — beide vereisen direct persoonlijk contact. Zelfs De Adviseur, het meest laagdrempelige onderdeel van de site, eindigt in dezelfde twee soorten knoppen: 'PLAN EEN GESPREK' en een dienst-CTA (Advisor.tsx, regels 490-507).

**Wat er nu misgaat.** Voor exact het profiel 'wil eerst vergelijken, daarna pas praten' ontbreekt een derde, rustigere optie. De bestaande leadmagneet (/gratis-checklist) lijkt zo'n uitweg te bieden, maar bij nader inzien is dat geen goed alternatief om te kopiëren: de knop belooft 'direct in je inbox', terwijl de code een directe browserdownload triggert zonder dat er ook maar een e-mail wordt verstuurd (src/app/gratis-checklist/page.tsx, regel 39: 'In productie: stuur naam + e-mail ook naar API/Mailchimp/Resend' — dat gebeurt dus nu niet). Een nieuwe CTA die dezelfde belofte-zonder-uitvoering herhaalt, zou het probleem verdubbelen in plaats van oplossen.

**Award-winning oplossing.** Voeg een derde, visueel rustigere CTA toe aan het conversieblok: 'BEKIJK DE INVESTERING' — geen e-mailgate, geen download, gewoon een directe link naar de nieuwe /investering-pagina (het spectrum-diagram met de vier prijsklassen). Precies omdat de bestaande PDF-flow een belofte doet die hij momenteel niet waarmaakt, is een open, wrijvingsloze pagina hier niet alleen praktischer maar ook eerlijker — en sluit beter aan bij 'eigenzinnig eerlijk' dan nóg een gated download. Lotte krijgt zo exact de 'vergelijk eerst, praat later'-uitweg die haar avond vraagt, zonder de twee bestaande CTA's te verzwakken.

---

## Urgente klant met een harde deadline

### 1. Drie reactietijd-beloftes, drie verschillende getallen — op één pagina {#urgente-klant-met-een-harde-deadline-drie-reactietijd-beloftes-drie-verschillende-getallen-op-n-pagina}

**Persona:** IT-manager bij een middelgroot bouwbedrijf  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Ze heeft tien minuten geleden opgehangen bij een concurrerend softwarebureau dat 'binnen een dag' terugbelt, en opent nu /contact op haar telefoon tussen twee vergaderingen door om te checken of Dynique sneller — of in elk geval net zo betrouwbaar — reageert vóórdat ze haar aanvraag indient. Ze heeft nog 2,5 week tot de nieuwe aanbestedingsvoorwaarde ingaat en kan zich geen bureau veroorloven dat traag of wisselvallig terugkoppelt.

**Trust/behoefte-trigger.** Wil binnen enkele seconden één eenduidig, geloofwaardig getal zien — geen tegenstrijdige claims die haar laten twijfelen of het bureau slordig of oneerlijk is, precies op het moment dat ze het bureau op eerlijkheid test.

**Wat er nu misgaat.** Op /contact staat in de heroparagraaf 'We reageren altijd binnen 24 uur — meestal veel eerder' (contact/page.tsx r.134), een paar centimeter lager in het REACTIETIJD-veld van de detaillijst 'Binnen 2 uur (ma–za, 9–20u)' (r.13), en in de 'Snelle reactie'-stap eronder nogmaals 'Je hoort binnen 2 uur van ons (ma–za)' (r.19) — zonder de kantoortijden-kwalificatie die twee regels hoger wél staat. Drie verschillende beloftes, met verschillende voorwaarden, op één scherm zonder te scrollen: precies de slordigheid die een tijdsgedreven, wantrouwende bezoeker als eerste opmerkt, en die de 'doordacht en precies'-merkbelofte uit PRODUCT.md tegenspreekt vóórdat ze ook maar één woord copy heeft gelezen dat daadwerkelijk over haar project gaat.

**Award-winning oplossing.** Bouw één herbruikbare `<ReactietijdStatus/>`-component die client-side (Europe/Amsterdam) tegen ma–za 9–20u checkt en overal — hero, detaillijst, stappenblok, en later ook vlak boven de verstuurknop en in het homepage-conversieblok — exact dezelfde, tijdstip-afhankelijke zin toont: 'Nu bereikbaar — reageert doorgaans binnen 2 uur' (goud bolletje) of 'Buiten kantooruren — reactie uiterlijk morgenvroeg, altijd binnen 24 uur' (grijs bolletje), met een neutrale SSR-fallback tegen flikkering. De stap die een jury zou laten opvallen: maak er een eerlijk, zelf-bijwerkend precisiebewijs van in plaats van nóg een belofte — een subtekst 'Gemiddelde reactietijd afgelopen 5 aanvragen: 1u 42m', handmatig bijgewerkt in één config-veld. Eén bron van waarheid die zichzelf bewijst, in plaats van drie losse, hardgecodeerde claims die elkaar tegenspreken.

### 2. De FAQ die zijn exacte vraag stelt, weigert hem te beantwoorden {#urgente-klant-met-een-harde-deadline-de-faq-die-zijn-exacte-vraag-stelt-weigert-hem-te-beantwoorden}

**Persona:** Operationeel directeur bij een logistiek bedrijf  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Zijn TMS-koppeling en track & trace-module moeten live zijn vóór het nieuwe contractjaar start, over precies 3 weken. Hij scrolt op de homepage naar de FAQ-sectie omdat de eerste vraag daar letterlijk zijn eigen vraag is — 'Hoe lang duurt een maatwerk software traject?' — en verwacht hier het antwoord te vinden zonder eerst tijd te investeren in een intakegesprek.

**Trust/behoefte-trigger.** Zoekt een concreet getal of bandbreedte om zélf, binnen dertig seconden, te kunnen inschatten of 3 weken realistisch is — vóórdat hij zijn team overtuigt om hier tijd in te steken.

**Wat er nu misgaat.** Het antwoord luidt: 'Dat hangt echt af van de scope — een gekoppeld formulier is iets anders dan een compleet bedrijfssysteem. Bij de intake krijg je een concreet plan met fases en een reële planning, geen slag in de lucht.' (page.tsx r.234). Er staat geen enkel ankerpunt in — geen dag, geen week, geen maand. Voor exact de bezoeker die dit het felst wil weten, laat dit antwoord zowel zijn 'is 3 weken haalbaar'- als zijn onderliggende 'gaan jullie dit dan overhaasten'-wantrouwen onbeantwoord — terwijl juist deze eerste, belangrijkste FAQ-vraag het houvast mist dat de sectie verder wel biedt (CRITIQUE-SITE-2026-07-14.md waardeert de FAQ's zelf als 'oprecht nuttig').

**Award-winning oplossing.** Herschrijf het antwoord met een concrete bandbreedte: 'Een gekoppeld formulier of los proces: 1-2 weken. Een klantportaal of interne tool: 3-6 weken. Een volledig bedrijfssysteem met meerdere koppelingen: 2-4 maanden.' Til dat daarna naar het niveau van de al bewezen sterkte van de site — Advisor.tsx's beantwoorde-vragen-paneel, door het eigen kritiekrapport expliciet geprezen als 'oprecht goed uitgevoerde recognition-over-recall-interactie' — door drie kleine klikbare chips toe te voegen: 'Formulier' / 'Portaal' / 'Systeem'. Klikken highlight direct de bijpassende regel in de bandbreedte, zonder de FAQ te verlaten of de volledige Adviseur-quiz opnieuw te moeten doorlopen. Eén bestaand, al geprezen interactiepatroon hergebruikt op precies het punt waar een bezoeker het het hardst nodig heeft.

### 3. Vier fase-badges die 'FASE 1' tot 'FASE 4' zeggen — en verder niets {#urgente-klant-met-een-harde-deadline-vier-fase-badges-die-fase-1-tot-fase-4-zeggen-en-verder-niets}

**Persona:** CFO van een installatiebedrijf  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Scrolt door 'Het Traject' op de homepage (Intake/Concept/Bouwen/Live) om zelf, zonder gesprek, in te schatten of alle vier de fases passen binnen de resterende 2,5 week voor een dringend urenregistratiesysteem — het enige moment op de site waar dit soort tijdsinformatie logisch hoort te staan.

**Trust/behoefte-trigger.** Verwacht bij elk van de vier fases een tijdsindicatie te zien, juist omdat de sectie zich expliciet presenteert als hét procesoverzicht van de site.

**Wat er nu misgaat.** Het badge-veld boven elke fase — in de broncode letterlijk `duration` genoemd — bevat alleen de tekst 'Fase 1', 'Fase 2', 'Fase 3', 'Fase 4' (page.tsx r.833, 842, 851, 860): een volgnummer, verpakt als tijdsaanduiding, in een veld dat naar zijn eigen naam juist een duur zou moeten tonen. Dat staat lijnrecht tegenover de tekst één regel erboven — 'Geen dikke offertes. Geen vage tijdlijnen' (r.817-819) — en tegenover de identieke 01/02/03/04-stappenlijst in SectorTemplate.tsx (de STEPS-array, r.33-38), die het eigen kritiekrapport al aanmerkt als 'decoratieve nummering die geen echte volgorde vertegenwoordigt'. Twee keer dezelfde functionele leegte, op de twee plekken die zich het hardst voordoen als een procesoverzicht.

**Award-winning oplossing.** Vervang het `duration`-veld niet door een tekstlabel maar door een echte, proportioneel geschaalde tijdlijnbalk: vier segmenten waarvan de breedte de relatieve duur weerspiegelt (Fase 1 kort, Fase 3 het langst), met een getal per segment — '1-3 DAGEN' / '3-7 DAGEN' / '1-6 WEKEN' / '1-2 DAGEN' — en een voetnoot 'Indicatief bij gemiddelde scope, exacte planning volgt uit de intake.' Dat verandert de sectie van sfeerbeeld in een functioneel, data-gedreven diagram — precies het verschil tussen decoratieve nummering en 'bewijs door precisie' (Design Principle 1 uit PRODUCT.md) — en lost tegelijk dezelfde zwakte in SectorTemplate.tsx's STEPS-component op zodra het patroon daar wordt toegepast.

### 4. 'Binnen drie dagen' en 'binnen zeven dagen' zonder te zeggen wát er in die dagen gebeurde {#urgente-klant-met-een-harde-deadline-binnen-drie-dagen-en-binnen-zeven-dagen-zonder-te-zeggen-wt-er-in-die-dagen-gebeurde}

**Persona:** Marketingmanager bij een retailketen  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Twijfelt of 'snel' bij Dynique 'haastwerk' of 'efficiënt' betekent voor haar eigen, aanmerkelijk complexere project — een bestelportaal met voorraadkoppeling — en scrolt door de reviews-carrousel op de homepage op zoek naar geruststelling.

**Trust/behoefte-trigger.** Wil weten of een snelheidsclaim uit een vergelijkbare scope komt als haar eigen project, niet appels met peren vergelijken op het moment dat ze het meest kwetsbaar is voor een te-mooi-om-waar-te-zijn-gevoel.

**Wat er nu misgaat.** Tom Creemers: 'Binnen drie dagen live. Geen enkele professionele foto, wel een strakke deadline' (page.tsx r.612) en Stacy Kohnen: 'Andere bureaus zeiden weken. Dynique leverde een meertalige website met booking-systeem binnen zeven dagen' (r.623) staan twee kaarten na elkaar in dezelfde carrousel, zonder scope-aanduiding. Beide zijn one-page marketingsites voor solo-ondernemers — precies het soort project dat CRITIQUE-SITE-2026-07-14.md al aanmerkt als 'nul software-taal' — maar dat onderscheid ontbreekt bij de quote zelf, waardoor de cijfers voor een bezoeker die juist een systeem zoekt als opgeklopte marketingclaims kunnen overkomen.

**Award-winning oplossing.** Voeg niet alleen een metadata-chipje toe onder elke quote ('ONE-PAGE MARKETINGSITE · 3 DAGEN'), maar zet er een klein segmented-control filter bovenop de hele carrousel: 'Toon reviews voor: Website & marketing / Systeem & portaal.' De retailmanager filtert zelf naar wat op haar project lijkt, in plaats van zelf de vergelijking te moeten maken — en zolang er nog geen systeem-case in de carrousel staat, toont de lege staat eerlijk 'Nog geen systeem-case gepubliceerd — bekijk in plaats daarvan de sectorpagina's.' Dat vertaalt Design Principle 4 ('eerlijk over schaal') letterlijk in interactie, niet alleen in tekst.

### 5. 'Succesvol verzonden' wordt getoond ook als er niets is verzonden {#urgente-klant-met-een-harde-deadline-succesvol-verzonden-wordt-getoond-ook-als-er-niets-is-verzonden}

**Persona:** Facilitair manager bij een zorginstelling  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Vult tussen twee vergaderingen door razendsnel het contactformulier in op haar bedrijfslaptop. Die laptop blokkeert pop-upvensters standaard, of ze heeft geen actieve WhatsApp Web-sessie — het vooringevulde WhatsApp-bericht opent dus nooit zichtbaar in beeld.

**Trust/behoefte-trigger.** Vertrouwt op een expliciete bevestiging dat haar aanvraag daadwerkelijk is aangekomen, vóórdat ze verdergaat met haar volgende afspraak.

**Wat er nu misgaat.** Ondanks een geblokkeerd of gemist WhatsApp-venster redirect de pagina na 600ms alsnog naar /bedankt, waar zelfverzekerd staat 'Succesvol verzonden' (bedankt/page.tsx r.40) en 'Je bericht is binnen. We reageren binnen 24 uur — meestal binnen 2 uur op werkdagen' (r.52) — terwijl de contactpagina zelf toegeeft dat de gebruiker het bericht handmatig moet versturen: 'Je bericht opent voorgevuld in WhatsApp — jij verstuurt zelf' (contact/page.tsx r.241). Dit is exact het scenario dat het launch-plan al signaleert als ontbrekende geautomatiseerde leadcapture buiten WhatsApp: er bestaat geen enkel mechanisme dat controleert of `window.open()` daadwerkelijk iets heeft geopend, laat staan of het bericht is verstuurd. Voor een bezoeker die het bureau expliciet test op eerlijkheid is dit een harde, verifieerbare valse claim op het meest kritieke moment van het hele traject.

**Award-winning oplossing.** Los dit niet alleen visueel op, maar structureel: registreer bij het indrukken van de verstuurknop tegelijkertijd stil, server-side, de lead (dezelfde backend die elders in deze lijst ook wordt voorgesteld voor de kapotte /gratis-checklist-flow) — zodat Dynique de aanvraag altijd ontvangt, ook als het WhatsApp-venster nooit opent. Pas dán mag /bedankt onvoorwaardelijk 'succesvol verzonden' zeggen, omdat het waar is. Check daarnaast of `window.open()` een venster teruggeeft; zo niet, toon in plaats van de redirect een eerlijke tussenstaat: 'Je aanvraag is bij ons binnen — je WhatsApp-bericht kon niet automatisch openen, druk hier om het alsnog te versturen' met een 'OPNIEUW OPENEN'-knop. Eerlijkheid die klopt omdat de techniek het waarmaakt, niet omdat de tekst het beweert.

### 6. De Adviseur-quiz laat 'snel' en 'grondig' los naast elkaar staan, in plaats van de spanning te benoemen {#urgente-klant-met-een-harde-deadline-de-adviseur-quiz-laat-snel-en-grondig-los-naast-elkaar-staan-in-plaats-van-de-spanning-te-benoemen}

**Persona:** Operations lead bij een groeiend familiebedrijf  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Doorloopt De Adviseur-quiz op de homepage en kiest bewust bij stap 3 'Kwaliteit & veiligheid voorop' én bij stap 4 'Zo snel mogelijk' — precies het profiel van iemand die niet wil inleveren op kwaliteit, maar wel een harde deadline heeft.

**Trust/behoefte-trigger.** Verwacht dat een tool die zich 'op maat' noemt, de spanning tussen zijn twee keuzes zelf benoemt — dat is het moment waarop hij test of Dynique daadwerkelijk meedenkt of alleen twee losse antwoorden opsomt.

**Wat er nu misgaat.** In Advisor.tsx worden `APPROACH` en `TIMELINE` volledig onafhankelijk van elkaar opgezocht (r.113-124, samengevoegd in `computeAdvice()`, r.136-162): het resultaatscherm toont onder 'Aanpak' 'We bouwen met code die jaren meegaat — getest en onderhoudbaar, geen quick fix' (r.116) en onder 'Tijdlijn' 'Je wilt snel schakelen: we plannen meestal binnen een paar dagen een eerste gesprek in' (r.121) — twee zinnen die nooit naar elkaar verwijzen. Erger nog: de 'Tijdlijn'-tekst gaat alleen over hoe snel het éérste gesprek wordt ingepland, niet over hoe snel het product zelf live kan zijn — precies de vraag die deze persona met 'zsm' stelde, en precies de combinatie waarbij PRODUCT.md's Design Principle 2 ('meedenken is zichtbaar, niet alleen beweerd') het hardst zou moeten gelden.

**Award-winning oplossing.** Voeg in `computeAdvice()` een derde, expliciete conditie toe die uitsluitend verschijnt bij prio='robuust' + speed='zsm', en presenteer die niet als extra tekstregel maar als een klein, handgecodeerd Snelheid-versus-Diepgang-diagram — in dezelfde geanimeerde visuele stijl als de scroll-gestuurde before/after-demo die het eigen kritiekrapport al prijst als bewijs van vakmanschap. Een stip markeert waar het geadviseerde traject op die as valt, met de tekst: 'Snel én robuust kan — maar niet allebei tot het uiterste. Bij een harde deadline werken we in een kleinere eerste scope die wél grondig getest wordt, in plaats van alles tegelijk te forceren.' Dat maakt het 'wij stellen ook een tegenvoorstel'-karakter uit PRODUCT.md letterlijk zichtbaar, op precies het punt waar de spanning ontstaat — geen tekstuele patch, maar een visueel bewijsstuk.

### 7. De enige case die 'snel én professioneel' claimt, is de leegste pagina van de hele site {#urgente-klant-met-een-harde-deadline-de-enige-case-die-snel-n-professioneel-claimt-is-de-leegste-pagina-van-de-hele-site}

**Persona:** IT-manager op zoek naar bewijs van snelle, complexe softwareoplevering  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Leest de Chefs Connect-testimonial op de homepage — 'Dynique dacht mee, bouwde snel en leverde een product dat direct serieus genomen wordt' (page.tsx r.645) — en klikt met hoge koopintentie door naar /portfolio/chefs-connect om die claim te verifiëren aan de hand van concrete features, tijdlijn en voor/na-beeld.

**Trust/behoefte-trigger.** Zoekt tastbaar bewijs dat 'snel' bij een platform-achtig project niet ten koste ging van kwaliteit, op precies het moment dat zijn koopintentie het hoogst is.

**Wat er nu misgaat.** De case-pagina bevat alleen een introzin en een hero-video; `challenge`, `approach`, `features`, `gallery`, `results` en `metrics` zijn allemaal lege arrays met alleen commentaar erin (chefs-connect/page.tsx r.31-52), en de broncode bevat nog letterlijk de ontwikkelaarscomment 'Design is af. Vul onderstaande velden in met de echte content.' Dit stond al als [P0]-bevinding in CRITIQUE-SITE-2026-07-14.md ('Er staat nergens écht bewijs van softwarewerk') — bijna twee maanden later, ná de homepage-rebrand naar goud, is precies deze pagina nog altijd niet aangepakt. Het is de case die het meest op maatwerk software lijkt, die al een expliciete snelheidsclaim draagt, én de leegste pagina op de hele site — waar geloofsladder-stap 3 uit PRODUCT.md ('het bestaande portfolio bewijst dit vakmanschap') het hardst faalt.

**Award-winning oplossing.** Vul `challenge`/`approach`/`features` met 2-3 concrete zinnen die de tijdlijn expliciet maken, en voeg een `metrics`-item toe zoals { value: '6 weken', label: 'Van intake tot livegang', sub: 'Incl. 2 revisierondes' }. De stap die een jury zou laten opvallen: hergebruik het component achter de scroll-gestuurde voor/na-demo van de homepage — al geprezen als handgecodeerd vakmanschap zonder stockfoto's — specifiek voor déze case, met een 'vóór Chefs Connect: losse spreadsheets en WhatsApp-groepen' versus 'ná: één platform' scrub. Eén bestaand, bewezen interactiepatroon ingezet op de exacte pagina waar de IT-manager het meeste bewijs nodig heeft, in plaats van tien vage homepage-beloftes.

### 8. 'Beschikbaar voor nieuwe projecten' zegt alles behalve wannéér {#urgente-klant-met-een-harde-deadline-beschikbaar-voor-nieuwe-projecten-zegt-alles-behalve-wannr}

**Persona:** Eigenaar van een bouwbedrijf met een kwartaaldeadline  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Leest de goud omrande badge boven de 'Klaar om te starten?'-CTA, vlak boven de statistiekenrij 24u/100%/3 (page.tsx r.957-973), en wil weten of Dynique volgende week kan beginnen of pas na de zomer capaciteit heeft — vóórdat hij zijn interne planning erop afstemt.

**Trust/behoefte-trigger.** Heeft een concrete eerstvolgende-startdatum nodig om te bepalen of contact opnemen binnen zijn tijdsbestek zinvol is.

**Wat er nu misgaat.** 'Beschikbaar voor nieuwe projecten' (r.957) is een statische tekststring naast een goud stipje — geen datum, geen capaciteitssignaal, en voor zover uit de broncode blijkt nooit bijgewerkt sinds hij is geschreven. Exact het soort ongekwalificeerde 'hero-metric'-taal dat het eigen kritiekrapport al benoemt als terugkerend zwaktepunt ('ongeverifieerde cijferclaims verpakt als statistiek'), en precies het type claim dat PRODUCT.md's anti-referentie 'generieke SaaS-sjabloonclichés' wil vermijden.

**Award-winning oplossing.** Vervang de statische badge door een eerlijk, in één regel bij te werken capaciteitsveld — geen nep-schaarste-teller (die zou zelf weer in het SaaS-cliché trappen), maar een feitelijk statusbericht dat de eigenaar zelf onderhoudt: 'Laatste project gestart: 3 sept · ruimte voor 1 nieuw traject deze maand.' Render die string via hetzelfde single-source-component-patroon als de `ReactietijdStatus` voor de contactpagina, zodat hij overal waar de badge voorkomt consistent is en met één wijziging bij te werken blijft — precisie als systeem, niet als eenmalige tekstfix.

### 9. De sectorpagina's — het aangewezen bewijsmateriaal voor deze persona — noemen geen enkele week, dag of maand {#urgente-klant-met-een-harde-deadline-de-sectorpaginas-het-aangewezen-bewijsmateriaal-voor-deze-persona-noemen-geen-enkele-week-dag-of-maand}

**Persona:** Praktijkmanager bij een zorginstelling met een compliance-deadline  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Klikt vanuit een zoekopdracht door naar /maatwerk-software/zorg met een dwingende AVG-audit-deadline die een nieuw rooster- en dossiersysteem vereist, en herkent haar situatie letterlijk in de pijnpunten-sectie: 'Roosters puzzel je elke week in Excel, cliëntgegevens staan verspreid over losse systemen en mappen' (zorg/page.tsx r.28).

**Trust/behoefte-trigger.** Wil, meteen nadat ze haar probleem herkend heeft, weten of de oplossing haalbaar is binnen haar tijdsbestek — zonder eerst een gesprek te moeten voeren om dat te ontdekken.

**Wat er nu misgaat.** PRODUCT.md wijst de vier sectorpagina's expliciet aan als 'dieper-in-de-funnel bewijs' voor precies dit soort concrete, urgente bedrijfsproblemen, maar het gedeelde `SectorTemplate.tsx` bevat geen enkel woord over doorlooptijd — geen enkele match op 'week', 'dagen' of 'maand' in het hele bestand. Zelfs de STEPS-array (01 Op locatie / 02 Procesanalyse / 03 Voorstel op maat / 04 Bouwen met code, r.33-38) — dezelfde decoratieve nummering als bij de Fase-badges elders op de homepage — geeft geen tijdsindicatie. De bezoeker moet blind naar de LEAD FORM-sectie (`id="analyse"`, r.275-276) zonder enige voorafgaande kalibratie, precies op de pagina die haar probleem het scherpst benoemt.

**Award-winning oplossing.** Breid het gedeelde `SectorData`-type uit met een verplicht `typicalTimeline`-veld en render dat als één herbruikbaar blok vlak boven de LEAD FORM-sectie, met per sector een realistische range — voor zorg bijvoorbeeld 'Een rooster- en dossiersysteem: doorgaans 4-8 weken, afhankelijk van het aantal koppelingen met bestaande zorgsystemen.' Eén component, in één keer hergebruikt over alle vier sectorpagina's — dezelfde 'fix het centraal'-aanpak die al is toegepast op de `ACCENT`-constante in Visuals.tsx. Maak het systemisch in plaats van geïsoleerd: een link 'Harde deadline? Zeg dat er meteen bij' stuurt door naar /contact met een querystring die het nieuwe deadline-veld op de contactpagina automatisch invult — twee losse fixes die samen één samenhangend, deadline-bewust pad door de site vormen.

### 10. De gratis checklist belooft 'direct per mail' — de code stuurt nooit een mail {#urgente-klant-met-een-harde-deadline-de-gratis-checklist-belooft-direct-per-mail-de-code-stuurt-nooit-een-mail}

**Persona:** Assistent-inkoper met een interne deadline morgenvroeg  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Vult tussen twee telefoontjes door in twee minuten naam en e-mailadres in op /gratis-checklist, met het plan om het bestand te gebruiken als achtergrondmateriaal voor een interne vergadering morgenochtend om 9 uur.

**Trust/behoefte-trigger.** Vertrouwt op de expliciete belofte dat het bestand ook in haar mailbox belandt, zodat ze het morgenvroeg kan terugvinden zelfs als de browserdownload tussentijds kwijtraakt.

**Wat er nu misgaat.** De pagina belooft letterlijk 'Direct in je inbox' (gratis-checklist/page.tsx r.106) en 'ontvang de PDF direct per mail' (r.113), maar de code triggert uitsluitend een browserdownload — er wordt nooit een e-mail verstuurd. De ontwikkelaarscomment staat er nog letterlijk bij: `// In productie: stuur naam + e-mail ook naar API/Mailchimp/Resend.` (r.39). Dit is exact het gat dat het launch-plan al identificeerde en dat, ondanks de homepage-rebrand van de afgelopen weken, nog steeds openstaat. Sluit ze het downloadvenster per ongeluk of verliest ze de tab, dan is het bestand foetsie en de beloofde mail komt nooit — precies wanneer ze morgen om 9 uur iets moet kunnen laten zien.

**Award-winning oplossing.** Koppel een echte verzendlaag (Resend/Formspree, zoals het launch-plan al aanbeveelt) zodat de PDF daadwerkelijk gemaild wordt. De eigenzinnig-eerlijke stap erbovenop: bouw dit met een expliciete fallback in plaats van een stille aanname — lukt de mailservice niet, dan blijft de browserdownload altijd werken én toont de pagina een eerlijke status in plaats van een onvoorwaardelijke succesmelding: 'PDF gedownload. E-mail kon niet worden verstuurd — hier is een directe link, voor het geval de download kwijtraakt.' Slaagt de verzending wel, dan verschijnt 'PDF gedownload én onderweg naar [e-mailadres] — check je inbox over enkele minuten.' Een bevestiging die nooit meer beweert dan wat er daadwerkelijk is gebeurd — dezelfde discipline als de fix voor de bedankpagina elders in deze lijst.

### 11. Het contactformulier heeft geen apart deadline-veld — een 'harde deadline' verdwijnt in drie andere vragen {#urgente-klant-met-een-harde-deadline-het-contactformulier-heeft-geen-apart-deadline-veld-een-harde-deadline-verdwijnt-in-drie-andere-vragen}

**Persona:** De centrale deadline-klant zelf  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Heeft een harde livegang-datum over 2-3 weken en wil dat vanaf de eerste seconde onmiskenbaar duidelijk maken — niet pas mondeling tijdens een eerste gesprek dat, gezien de reactietijd-verwarring elders op de contactpagina, mogelijk pas over dagen plaatsvindt.

**Trust/behoefte-trigger.** Wil zeker weten dat haar deadline met voorrang zichtbaar is voor wie het bericht als eerste leest, niet verstopt tussen twee andere vragen in doorlopende tekst.

**Wat er nu misgaat.** Het enige veld waarin een deadline past is de omschrijving-textarea met placeholder 'Wat wil je bereiken? Voor wie is het bedoeld? Hoe snel wil je live?' (contact/page.tsx r.195, identiek op page.tsx r.1295) — de derde van drie vragen in één vrij-tekstveld, zonder garantie dat een snel scannende lezer dat detail niet mist tussen de rest van de projectomschrijving. Opvallend: het formulier heeft al wél een precedent voor precies dit soort progressive disclosure — de bestaande 'Ik wil graag een gesprek inplannen'-checkbox (r.200-207) klapt bij aanvinken drie extra velden open (datum/tijd/type, r.209-229). Diezelfde interactiepatroon voor urgentie ontbreekt simpelweg.

**Award-winning oplossing.** Voeg, in exact dezelfde stijl als de bestaande 'gesprek inplannen'-toggle, een checkbox 'Ik heb een harde deadline' toe direct onder de omschrijving-textarea. Aangevinkt verschijnt een datumveld dat automatisch vooraan het WhatsApp-bericht wordt meegestuurd als '🗓️ HARDE DEADLINE: [datum] — behandel met voorrang', in plaats van ergens midden in de vrije tekst begraven te liggen. Omdat dit hetzelfde toggle-onthul-patroon hergebruikt dat al in het formulier zit, voelt het als een natuurlijk onderdeel van het ontwerp in plaats van een los bijgeplakt veld — en het is meteen de plek waar de querystring vanuit de sectorpagina's automatisch kan landen, zodat een bezoeker die van een sectorpagina met deadline-context doorklikt, het veld al vooringevuld aantreft.

### 12. '100% Vaste prijs' staat een paar centimeter van een FAQ die toegeeft dat de prijs kan bewegen {#urgente-klant-met-een-harde-deadline-100-vaste-prijs-staat-een-paar-centimeter-van-een-faq-die-toegeeft-dat-de-prijs-kan-bewegen}

**Persona:** Financieel verantwoordelijke bij een installatiebedrijf  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Heeft een vaste prijs nodig om een interne business case goedgekeurd te krijgen vóór haar deadline. Ze leest eerst de statistiek '100% Vaste prijs' in het conversieblok, en vervolgens — omdat ze weet dat requirements bij haar eigen team vaak laat verschuiven — de FAQ over scopewijzigingen.

**Trust/behoefte-trigger.** Test bewust of een absolute claim ('100%') standhoudt zodra ze de kleine lettertjes opzoekt — en of het bureau dat zelf eerlijk toegeeft, wat voor haar de doorslag geeft of ze het bureau kan vertrouwen op iets groters.

**Wat er nu misgaat.** De statistiekenrij toont '100%' met daaronder alleen het label 'Vaste prijs' (page.tsx r.973) — de ondersteunende zin twee regels hogerop, 'Geen verrassingen, een vaste prijs per fase' (r.963), staat wél op de pagina maar niet gekoppeld aan het cijfer zelf, waardoor de bare statistiek op zichzelf ongekwalificeerd oogt. De FAQ 'Wat als de scope tijdens het project verandert?' zegt vervolgens: 'Dat gebeurt vaker dan je denkt, en is geen probleem. We bespreken de impact op planning en prijs zodra het zich voordoet — geen verrassingen achteraf' (r.238). Voor een klant onder tijdsdruk — met een reëel verhoogd risico op laat aangeleverde of verschuivende requirements — is dit precies het scenario waarin '100%' zou kunnen breken, en het ontbreken van een directe koppeling tussen statistiek en FAQ ondermijnt de 'eigenzinnig eerlijk'-merkbelofte op het moment dat budgetzekerheid er het meest toe doet.

**Award-winning oplossing.** Maak van '100%' geen losstaand hero-metric-blok maar een letterlijk verifieerbare claim: een subtiele voetnoot-marker naast het cijfer die bij klik of tap direct smooth-scrollt naar de exacte FAQ-regel die het uitlegt, met die regel kort gemarkeerd. Een statistiek die naar haar eigen bewijs linkt in plaats van er los naast te staan, is precies 'bewijs door precisie, niet door beloftes' (Design Principle 1) in interactie omgezet — en het tegenovergestelde van de 'ongeverifieerde cijferclaims verpakt als statistiek' die het eigen kritiekrapport bekritiseert.

### 13. Op het beslissende moment — vlak vóór versturen — is er geen weekend-indicatie te zien {#urgente-klant-met-een-harde-deadline-op-het-beslissende-moment-vlak-vr-versturen-is-er-geen-weekend-indicatie-te-zien}

**Persona:** Ondernemer die vrijdagavond laat een aanvraag indient  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Vult vrijdagavond om 22:00 uur, onder tijdsdruk voor een deadline die maandag ingaat, het contactformulier in en aarzelt met zijn muis boven de VERSTUUR-knop, wetend dat kantoren doorgaans het weekend niet werken.

**Trust/behoefte-trigger.** Wil op het moment van versturen weten of zijn bericht meteen wordt opgepakt of moet wachten tot maandagochtend — geen onbepaalde wachttijd, precies vóór de onomkeerbare klik.

**Wat er nu misgaat.** De REACTIETIJD-belofte 'Binnen 2 uur (ma–za, 9–20u)' (contact/page.tsx r.13) is eerlijk geformuleerd, maar staat alleen in kleine tekst in een detailrij bovenaan de pagina — niet op het beslissende moment vlak vóór de VERSTUUR-knop (r.232-239), waar de ondernemer met een weekenddeadline in het duister tast over wanneer hij daadwerkelijk gehoord wordt. Dit is dezelfde onderliggende inconsistentie als de 2-uur-vs-24-uur-paradox elders op deze pagina, maar dan op het exacte moment waarop het er het meest toe doet.

**Award-winning oplossing.** Hergebruik dezelfde `<ReactietijdStatus/>`-component die elders in deze lijst voor de hero en detaillijst wordt voorgesteld, en render hem een derde keer vlak boven de VERSTUUR-knop: buiten ma-za 9-20u verschijnt daar inline 'Het is nu buiten onze reactietijden (ma-za 9-20u) — je bericht staat morgenvroeg als eerste in de rij', binnen kantooruren gewoon de reguliere statustekst. Eén component, drie plekken, altijd synchroon — in plaats van drie losse teksten die elkaar op subtiele momenten tegenspreken.

### 14. Twaalf formulieren, één verzendkanaal — en geen van de twaalf werkt als WhatsApp verboden is {#urgente-klant-met-een-harde-deadline-twaalf-formulieren-n-verzendkanaal-en-geen-van-de-twaalf-werkt-als-whatsapp-verboden-is}

**Persona:** Compliance-officer bij een grotere logistieke onderneming  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Doorloopt het volledige contactformulier op /contact onder tijdsdruk voor een dringend TMS-project, maar haar werkgever staat om beveiligingsredenen geen WhatsApp toe op zakelijke apparaten. Ze ontdekt dat pas bij de VERSTUUR-knop — na alle velden al te hebben ingevuld.

**Trust/behoefte-trigger.** Heeft een formeel, bedrijfsveilig verzendkanaal nodig dat haar reeds ingevulde formulier respecteert, in plaats van alles opnieuw te moeten overtypen in een e-mail.

**Wat er nu misgaat.** Alle leadformulieren op de site — twaalf bestanden bevatten een `wa.me`-link, van homepage en /contact tot elke sectorpagina, elke processen-pagina en zelfs de nu ongelinkte /eerste-website en /vervanging — monden uitsluitend uit in een WhatsApp-deeplink; nergens bestaat een 'verstuur per e-mail'-fallback die de al ingevulde velden meeneemt. PRODUCT.md's doelgroep is expliciet 'grotere bedrijven' die 'een groter, weloverwogen besluit' nemen — precies het soort organisatie waar WhatsApp-only zakelijk contact ongebruikelijk of contractueel verboden kan zijn. De knop zelf zegt zelfs 'VERSTUUR VIA WHATSAPP' (contact/page.tsx r.235) zonder enig alternatief in zicht, ook niet als tekstlink.

**Award-winning oplossing.** Ontwerp dit niet als een bijgeplakte tweede knop, maar als een bewust tweekanaals systeem: een kleine kanaalkeuze bovenaan het formulier ('WhatsApp' / 'E-mail'), die de VERSTUUR-knop en het icoon consistent laat meeveranderen zodat het voelt als één doordacht ontworpen formulier met twee uitgangen, niet als een noodgreep. De e-mail-route stuurt dezelfde ingevulde velden naar een echte backend-endpoint (dezelfde leadcapture-oplossing die elders in deze lijst ook wordt voorgesteld voor /gratis-checklist en /bedankt) in plaats van een kale mailto-link — zodat één ingevuld formulier, ongeacht bedrijfsbeleid, altijd zijn weg naar Dynique vindt.

### 15. De enige downloadbare contentasset van de site is een WordPress-checklist voor de verkeerde klant {#urgente-klant-met-een-harde-deadline-de-enige-downloadbare-contentasset-van-de-site-is-een-wordpress-checklist-voor-de-verkeerde-klant}

**Persona:** IT-manager bij een bouwbedrijf op zoek naar snelle achtergrondinformatie  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Klikt vanuit de footer op 'Gratis Checklist', in de hoop op hulp bij het beoordelen of een softwarepartij een maatwerktraject binnen zijn eigen 2-3 weken tijdsbestek realistisch kan opleveren.

**Trust/behoefte-trigger.** Zoekt bevestiging dat Dynique meedenkt op zíjn schaal en met zíjn type vraagstuk — systemen, geen websites.

**Wat er nu misgaat.** De checklist op /gratis-checklist gaat volledig over 'website laten maken': een content-audit, een tech-stack-keuze tussen 'WordPress, Webflow, Next.js of Shopify' (gratis-checklist/page.tsx r.11), SEO-fundamenten en een 23-punts launch-checklist — geen van deze items raakt aan maatwerk software, systemen of procesautomatisering. Dit is precies de oude ZZP/website-doelgroep die CRITIQUE-SITE-2026-07-14.md al signaleerde als tegenstrijdig met PRODUCT.md's nieuwe 'grotere bedrijven'-doelgroep, en het is de enige actief gelinkte contentasset op de hele site (footer, blog, locatiepagina's) — het eerste en enige downloadbare bewijsstuk dat deze IT-manager tegenkomt, en het spreekt hem op geen enkel punt aan.

**Award-winning oplossing.** Bouw geen tweede statische PDF, maar een klein, functionerend on-page tool: 'De Maatwerk Software Deadline-Checklist' als interactieve checklist met aanvinkbare items ('Vraag naar een gefaseerde MVP-scope die binnen jouw deadline past', 'Vraag wat er gebeurt als de deadline niet haalbaar blijkt — wordt dat gezegd, of verzwegen?'), status opgeslagen in localStorage, met een export-naar-PDF-knop voor wie het item toch wil delen met zijn team. Het argument dat een jury zou laten opvallen: het lead-magnet-medium demonstreert zelf exact het vakmanschap dat Dynique verkoopt aan precies deze IT-manager — een stukje kleine, doordachte maatwerksoftware in plaats van nóg een marketing-PDF. Link hem vanuit de sectorpagina's en vanuit de doorlooptijd-FAQ, in plaats van softwarezoekende bezoekers door te sturen naar een WordPress/Webflow-checklist.

---

## Trage, grondige B2B-inkoper / procurement-afdeling

### 1. Nul algemene voorwaarden op de hele site — het traject stokt vóór er ook maar gebeld is {#trage-grondige-b2b-inkoper-procurement-afdeling-nul-algemene-voorwaarden-op-de-hele-site-het-traject-stokt-vr-er-ook-maar-gebeld-is}

**Persona:** Senior inkoper bij een installatiebedrijf (85 medewerkers, vestigingen in Sittard en Eindhoven), verantwoordelijk voor vendor-onboarding en contractrisico  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Dinsdagochtend, tussen twee vergaderingen in. De inkoper heeft /maatwerk-software/installatiebedrijf gelezen — de voor/na-scroll-demo overtuigt haar — en opent daarna een intern inkoopticket: 'Contractdocumentatie leverancier ontvangen: ja/nee'. Dat vinkje moet op 'ja' staan vóórdat ze een naam in de agenda van de bedrijfsjurist mag zetten. Ze zoekt op de site naar 'voorwaarden' — in de footer, op de contactpagina, op over-ons — en sluit na twee minuten de tab, ticket nog open.

**Trust/behoefte-trigger.** "Stuur me eerst jullie algemene voorwaarden — zonder dat kan onze jurist het dossier niet eens openen, laat staan dat ik een intake mag inplannen."

**Wat er nu misgaat.** Footer.tsx bevat precies één juridisch document op de hele site: de link 'PRIVACYVERKLARING' (regel 143-145), die doorverwijst naar /privacyverklaring — een pagina die uitsluitend over websitebezoekersdata gaat (zie ook case over de verwerkersovereenkomst). Geen van de ~30 routes — niet /contact, niet /over-ons, niet een van de vier maatwerk-software-sectorpagina's, niet het contactformulier zelf — linkt naar leveringsvoorwaarden, betalingscondities, IE-overdracht of een aansprakelijkheidsbepaling. Voor een eenmanszaak die zich volgens PRODUCT.md nu expliciet op 'grotere bedrijven in Nederland en België' richt, is dit geen kleine omissie maar een procedurele muur: een inkoopafdeling kan het traject formeel niet starten zonder dit document, hoe overtuigend de rest van de site ook is.

**Award-winning oplossing.** Bouw geen losse voorwaarden-pagina, maar het fundament van een nieuw onderdeel: het Vertrouwensdossier op /zakelijk — één permanente, deelbare hub specifiek gebouwd voor de trage, bewijs-eerst-inkoper, met /voorwaarden als eerste hoofdstuk (zelfde prose-legal styling en genummerde hoofdstukken-TOC als /privacyverklaring, incl. NL/EN-wissel). Behandel expliciet: scope-per-fase en wat 'vaste prijs' in-/uitsluit (koppel direct aan de FAQ-zin op de homepage, regel 238), de wijzigingsprocedure bij scope-aanpassingen, betalingstermijnen, IE-overdracht, aansprakelijkheidsbeperking en opzegvoorwaarden per fase. Het onderscheidende element: elk artikel krijgt een zichtbare 'Laatst gewijzigd'-datum plus een SHA-256-hash van de gepubliceerde tekst, getoond onderaan de pagina als een klein, verifieerbaar wijzigingslog — zodat een jurist niet alleen leest wát er staat, maar kan bewijzen dát de tekst sinds het lezen niet stiekem is aangepast. Voeg in Footer.tsx een tweede link toe naast PRIVACYVERKLARING ('ZAKELIJK DOSSIER'), en zet direct boven de verstuurknop in het contactformulier (regel 232) de zin 'Door te versturen ga je akkoord met onze Algemene Voorwaarden' met inline link.

### 2. Eenmanszaak-status ondermijnt vertrouwen in de continuïteit van een systeem waar het bedrijf jaren op gaat draaien {#trage-grondige-b2b-inkoper-procurement-afdeling-eenmanszaak-status-ondermijnt-vertrouwen-in-de-continuteit-van-een-systeem-waar-het-bedrijf-jaren-op-gaat-draaien}

**Persona:** Hoofd Inkoop bij een logistiek dienstverlener (150 medewerkers, eigen wagenpark), bezig met een meerjarige vervangingsbeslissing voor het planningssysteem  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Tijdens de voorbereiding van de business case leest het Hoofd Inkoop /over-ons en, ter verificatie, de privacyverklaring — en stuit op de zin 'Dynique is de handelsnaam van de eenmanszaak Creemers Inclusives' (regel 186). Hij zet dit letterlijk als risico-item op de interne vendor-risicomatrix, naast twee concurrenten die wél een BV met meerdere developers hebben. Voor een systeem met een verwachte levensduur van vijf-plus jaar is 'wat als deze ene persoon uitvalt' geen bijzaak, maar de eerste vraag die hij aan zijn directie moet kunnen beantwoorden.

**Trust/behoefte-trigger.** "Wat gebeurt er met ons systeem, onze broncode en onze support als deze ene persoon ziek wordt, langdurig uitvalt, of stopt met ondernemen — en waar staat dat zwart-op-wit?"

**Wat er nu misgaat.** src/app/over-ons/page.tsx bevestigt de eenmanszaak-structuur ('Ik bouw wat anderen alleen beschrijven', regel 105; 'Je praat met degene die het ook bouwt', regel 18) zonder ooit een continuïteitsmaatregel te noemen — geen backup-developer, geen partnernetwerk, geen escrow. De FAQ op de homepage (regel 240: 'Ik blijf bereikbaar voor updates... hetzelfde aanspreekpunt van dag één') framet één-persoon-zijn zelfs als voordeel, zonder het bus-factor-risico ooit te adresseren. Voor de exacte doelgroep uit PRODUCT.md — 'grotere, weloverwogen beslissers' — is dit precies het risico dat hun besluitvormingsproces is ontworpen om eruit te filteren, en de site geeft er nergens een concreet antwoord op.

**Award-winning oplossing.** Voeg aan het Vertrouwensdossier (/zakelijk) een module 'Continuïteit & waarborgen' toe, en verwijs daar direct naar vanaf /over-ons, meteen na de WAARDEN-sectie (na regel 186). Ga verder dan een geruststellende zin: richt een broncode-escrow in bij een onafhankelijke derde en publiceer per opgeleverde milestone een tijdgestempelde SHA-256-hash van het gedeponeerde archief op een publiek raadpleegbare 'escrow-ledger' binnen die module — zodat 'je code is veilig' een verifieerbaar feit wordt in plaats van een belofte, exact het soort bewijs-door-precisie dat PRODUCT.md's Design Principle 1 vraagt. Voeg dezelfde vraag letterlijk toe aan de FAQ op de homepage: 'Wat gebeurt er als Dynique niet meer kan leveren?' — met een eerlijk antwoord dat naar deze ledger linkt, in lijn met de 'eigenzinnig eerlijk'-merkpersoonlijkheid die vraagt om het probleem te benoemen, niet te verbergen.

### 3. "AVG-proof" op de zorgpagina is een blote marketingzin — geen NEN 7510, geen technische onderbouwing {#trage-grondige-b2b-inkoper-procurement-afdeling-avg-proof-op-de-zorgpagina-is-een-blote-marketingzin-geen-nen-7510-geen-technische-onderbouwing}

**Persona:** Compliance officer / functionaris gegevensbescherming bij een regionale zorginstelling (verpleeghuiszorg + thuiszorg), bezig met een DPIA voor een nieuw cliëntdossiersysteem  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** De FG opent /maatwerk-software/zorg specifiek omdat het de enige pagina op de site is die over cliëntdossiers gaat, met haar DPIA-sjabloon ernaast open in een tweede tabblad. Ze scant de pagina op één ding: een verwijzing naar de norm die in de Nederlandse zorgsector een verplicht toetsingspunt is voordat een leverancier op de shortlist mag. Na dertig seconden scrollen sluit ze de tab en noteert in het DPIA-document: 'leverancier voldoet niet aantoonbaar — uitgesloten in deze ronde'.

**Trust/behoefte-trigger.** "Voldoet dit aantoonbaar aan NEN 7510, of is 'veilig en AVG-proof' hier gewoon een zin die op elke softwarepagina had kunnen staan?"

**Wat er nu misgaat.** src/app/maatwerk-software/zorg/page.tsx gebruikt 'veilig en AVG-proof' (regel 19) en 'Veilig cliënt- & dossieroverzicht... AVG-proof plek' (regel 41) zonder ook maar één keer NEN 7510, ISO 27001, een pentest, encryptie-at-rest, toegangslogging of EU-hosting te noemen. Voor exact de doelgroep die deze pagina claimt te bedienen is dit de zwakste schakel van de site: een compliance-afdeling diskwalificeert een onderbouwde bewering niet, ze diskwalificeert het ontbreken ervan — en dat gebeurt hier binnen één scroll.

**Award-winning oplossing.** Voeg aan SectorTemplate.tsx een optioneel 'Compliance & beveiliging'-blok toe, geactiveerd op de zorg-pagina, dat doorlinkt naar een nieuwe compliance-module in het Vertrouwensdossier (/zakelijk). In plaats van een statische geruststelling: bouw een publieke 'compliance-roadmap' als eerlijke voortgangstracker — met concreet wat nú al voldoet (EU-only hosting, encryptie in rust en transit, rolgebaseerde toegang met logging) en wat nog niet (volledige NEN 7510-certificering), inclusief een reëel gepland kwartaal. Die radicale transparantie over wat er nog ontbreekt onderscheidt de 'eigenzinnig eerlijk'-persoonlijkheid uit PRODUCT.md van een concurrent die simpelweg 'gecertificeerd' claimt, en is geloofwaardiger voor een FG die gewend is overclaims te ontmaskeren. Voeg een downloadbare 'Beveiligingsverklaring zorg (PDF)' toe die ze intern kan aanleveren bij haar eigen DPIA-dossier, zonder daarvoor eerst een telefoongesprek te moeten voeren.

### 4. Alle vijf klantreviews komen van micro-ondernemingen — geen enkele referentie is natrekbaar voor deze doelgroep {#trage-grondige-b2b-inkoper-procurement-afdeling-alle-vijf-klantreviews-komen-van-micro-ondernemingen-geen-enkele-referentie-is-natrekbaar-voor-deze-doelgroep}

**Persona:** Inkoopcommissie van drie personen bij een middelgroot bouwbedrijf (regionaal, ERP-gedreven werkvoorbereiding), bezig met een shortlist-vergelijking van drie softwarepartners  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Conform het interne inkoopbeleid moet de commissie minimaal twee referenties bellen bij bedrijven van vergelijkbare omvang en sector vóórdat een leverancier zelfs voor een gesprek wordt uitgenodigd. Tijdens de gezamenlijke schermdeel-sessie scrollen ze door de reviews-carrousel op de homepage, op zoek naar een bouw-, zorg-, logistiek- of installatiebedrijf. Na de vijfde review — allemaal horeca, een zangeres en een ijssalon — zegt één commissielid hardop: 'dit is een leuk webbureau, maar hebben ze ooit voor een bedrijf als het onze gewerkt?' Niemand aan tafel kan die vraag beantwoorden.

**Trust/behoefte-trigger.** "Heeft Dynique al eerder voor een bedrijf van onze omvang en sector gewerkt, en kunnen we die klant zelf bellen — niet lezen, bellen?"

**Wat er nu misgaat.** De reviews-array in src/app/page.tsx (regel 610-666) bevat uitsluitend: een eenmanszaak zonder professionele foto's (Creemers Exclusive, regel 612-620), een zangeres, een familie-ijssalon, een horecaplatform en een bistro. Geen van de vijf is een 'groter bedrijf' of valt in bouw/zorg/logistiek/installatie — precies de vier sectoren die eigen landingspagina's hebben maar, zoals docs/CRITIQUE-SITE-2026-07-14.md zelf al vaststelt, nergens vanuit nav, footer of homepage gelinkt worden. PRODUCT.md erkent dit zelf (regel 35): er bestaat al een grotere maatwerk-softwarecase, bewust nog niet getoond. Het resultaat voor deze commissie: geen enkele referentie op de hele site is natrekbaar voor hun beslissing, en dat wordt nergens erkend — het voelt aan als een gat, niet als een bewuste keuze.

**Award-winning oplossing.** Wees hier radicaal transparant in plaats van het te verdoezelen — en maak van de leemte zelf een vertrouwenswekkend element. Voeg op /portfolio en onderaan elke maatwerk-software-sectorpagina een expliciet, eerlijk blok toe met een live voortgangsbalk: 'Ons huidige portfolio bewijst vakmanschap op ondernemersschaal. Ons eerste grootschalige maatwerk-softwaretraject loopt nu — [X]% opgeleverd, live-gang gepland [kwartaal].' Koppel daaraan een 'Referentiegesprek op aanvraag'-CTA die niet naar een verkoopformulier leidt, maar naar een echte scheduling-widget waarmee een bezoeker rechtstreeks een gesprek boekt met een bestaande klant (met diens toestemming) — in plaats van te imponeren met referenties die er niet zijn, geef je de commissie iets beters dan een quote-plaatje: een telefoonnummer. Zodra de grotere case beschikbaar komt, krijgt die automatisch een eigen, zwaarder gewogen sectie tussen de bestaande vijf reviews en de sectorpagina's — exact de ruimte die PRODUCT.md vraagt te reserveren, zonder herontwerp.

### 5. Geen SLA — 'ik blijf bereikbaar' is een sfeerbeeld, geen contractuele garantie {#trage-grondige-b2b-inkoper-procurement-afdeling-geen-sla-ik-blijf-bereikbaar-is-een-sfeerbeeld-geen-contractuele-garantie}

**Persona:** IT-manager bij een installatiebedrijf, eindverantwoordelijk voor het beheercontract na livegang van het nieuwe planningssysteem  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Na het doorlezen van Fase 4 ('LIVE') in het procestraject op de homepage belt de IT-manager een collega: 'Stel het systeem valt vrijdagmiddag om 16:30 uit — wat garanderen ze dan?' Hij scrollt terug naar boven, naar beneden, zoekt op 'SLA', 'uptime', 'reactietijd storing'. Niets. Voor een systeem dat de planning van het hele installatieteam draagt, is dit precies het detail dat bepaalt of hij het beheercontract aan zijn directie durft voor te leggen.

**Trust/behoefte-trigger.** "Wat is de gegarandeerde reactietijd bij een productie-storing, wat is de uptime-garantie, en wat gebeurt er als jullie die niet halen?"

**Wat er nu misgaat.** src/app/page.tsx belooft voor Fase 4 slechts losse tags: 'Livegang & beveiliging', 'Monitoring', 'Doorlopend beheer' (regel 863), en de FAQ (regel 240) zegt enkel 'Ik blijf bereikbaar voor updates, uitbreidingen en beheer.' De '24u'-statistiek in het conversieblok (regel 972) gaat expliciet over reactietijd op een nieuwe aanvraag, niet over storingsafhandeling na livegang — een onderscheid dat voor een IT-manager cruciaal is en dat de site nergens maakt.

**Award-winning oplossing.** Voeg aan een nieuwe SLA-module in het Vertrouwensdossier (/zakelijk) een compacte, concrete tabel toe: ernstniveaus (kritiek/hoog/normaal) met gegarandeerde reactietijden, een uptime-doelstelling en een escalatiepad met rechtstreeks telefoonnummer bij P1-incidenten buiten kantooruren. Ga een stap verder dan een statische tabel: koppel er een klein, eerlijk statusoverzicht aan — een lichte 'staat van de systemen'-widget die, met toestemming van bestaande klanten, laat zien hoeveel dagen storingsvrij hun live systemen draaien. Dat is geen ongeverifieerde 24u-claim meer, maar een zichtbaar trackrecord — het soort bewijs-door-precisie dat een IT-manager sneller overtuigt dan welke marketingtekst dan ook. Voeg aan de deliverables van Fase 4 een vierde tag toe: 'SLA & supportvoorwaarden', die rechtstreeks naar deze module linkt.

### 6. Privacyverklaring dekt alleen Dynique's eigen websitebezoekers — geen verwerkersovereenkomst voor het te bouwen systeem zelf {#trage-grondige-b2b-inkoper-procurement-afdeling-privacyverklaring-dekt-alleen-dyniques-eigen-websitebezoekers-geen-verwerkersovereenkomst-voor-het-te-bouwen-systeem-zelf}

**Persona:** Data protection officer bij een logistiek bedrijf met eigen chauffeurs, bezig met een DPIA vóór contractondertekening  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** De DPO heeft de volledige privacyverklaring doorgenomen als voorbereiding op een DPIA, in de veronderstelling daar de basis voor een verwerkersovereenkomst (DPA) te vinden — voor het feit dat Dynique straks toegang krijgt tot ritdata en personeelsgegevens van chauffeurs binnen het te bouwen systeem. Bij hoofdstuk 14 aangekomen realiseert ze zich dat het hele document over iets anders gaat: hoe Dynique zelf met haar gegevens als websitebezoeker omgaat, niet hoe Dynique met de data van háár chauffeurs zal omgaan zodra het systeem live is.

**Trust/behoefte-trigger.** "Dit document beschrijft alleen hoe jullie mijn gegevens als websitebezoeker verwerken — waar is de verwerkersovereenkomst voor de data die straks in het systeem zelf komt te staan?"

**Wat er nu misgaat.** src/app/privacyverklaring/page.tsx regelt uitsluitend Dynique als verwerkingsverantwoordelijke voor eigen marketing-/contactdata, met Meta Lead Ads (regel 239) en Cloudflare (regel 252, 364) als enige genoemde verwerkersrelaties — beide over de website zelf, niet over klantsystemen. Er bestaat nergens een sjabloon-DPA voor de omgekeerde relatie: Dynique als verwerker namens de klant zodra zij toegang heeft tot cliënt-, medewerkers- of ritdata binnen een gebouwd systeem. Voor zowel de zorg- als de logistiek-sectorpagina is dit een verplicht contractonderdeel dat volledig ontbreekt.

**Award-winning oplossing.** Voeg aan het Vertrouwensdossier een module 'Verwerkersovereenkomst voor klantprojecten' toe, met een interactieve DPA-generator: de bezoeker selecteert zijn sector (zorg/logistiek/bouw/installatie) en krijgt direct een vooringevulde concept-DPA gedownload met de bijpassende standaardbepalingen (subverwerkers, meldplicht datalekken, doorgifte, audit-recht) — in plaats van te moeten wachten op een offertegesprek. Voeg een nieuw hoofdstuk 15 toe aan /privacyverklaring dat hiernaar doorlinkt, en een optioneel selectievakje in het contactformulier: 'Ik heb een verwerkersovereenkomst nodig voordat we verder gaan' — zodat dit gesprek al bij de eerste aanvraag op tafel komt in plaats van pas bij contractondertekening te stranden.

### 7. Geen enkele vermelding van beroepsaansprakelijkheidsverzekering of een aansprakelijkheidslimiet {#trage-grondige-b2b-inkoper-procurement-afdeling-geen-enkele-vermelding-van-beroepsaansprakelijkheidsverzekering-of-een-aansprakelijkheidslimiet}

**Persona:** Financieel directeur bij een middelgroot familiebedrijf, bewaker van een interne goedkeuringsdrempel voor externe IT-uitgaven  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Bij elk extern softwareproject boven de interne drempelwaarde vereist het inkoopbeleid van de FD een bewijs van beroepsaansprakelijkheidsverzekering met een verzekerd bedrag, vóórdat budget wordt vrijgegeven. Hij heeft het gesprek met de oprichter al gehad, is enthousiast, en stuit nu — bij het invullen van het interne goedkeuringsformulier — op een leeg veld dat hij niet kan invullen: 'verzekeraar + verzekerd bedrag'. Het project komt tot stilstand op het punt waarop het al te laat aanvoelt om nog te vragen.

**Trust/behoefte-trigger.** "Is Dynique verzekerd tegen schade door softwarefouten, en tot welk bedrag? Zonder dat kan onze afdeling het budget niet vrijgeven, hoe overtuigd ik zelf ook ben."

**Wat er nu misgaat.** Geen van de gescande pagina's (Footer.tsx, over-ons, contact, privacyverklaring) bevat het woord 'verzekering', 'aansprakelijkheid' of een limietbedrag. De enige aansprakelijkheids-gerelateerde tekst is de FAQ-zin 'Je data en code blijven van jou' (homepage, regel 237) — die gaat over eigendom, niet over schadeaansprakelijkheid. Voor een FD die een goedkeuringsdrempel bewaakt is dit een blinde vlek die precies op het slechtste moment naar boven komt: ná alle inhoudelijke gesprekken, vlak vóór budgetvrijgave.

**Award-winning oplossing.** Voeg aan het Vertrouwensdossier een module 'Verzekering & aansprakelijkheid' toe met een concreet, verifieerbaar feit: naam van de verzekeraar, type dekking (beroepsaansprakelijkheid + cyber/dataschade) en het verzekerde bedrag — met een klikbaar verificatienummer dat een FD desgewenst rechtstreeks bij de verzekeraar kan natrekken, in plaats van alleen een bewering op de site. Herhaal dit compact als vijfde punt in de PROMISE-array op /over-ons (regel 17-22), naast 'Eén aanspreekpunt' en 'Projectmatig en veilig' — exact de plek waar een FD al aan het scannen is naar risico-gerelateerde beweringen, zodat hij het nooit hoeft na te vragen en het proces geen dag vertraging oploopt.

### 8. Geen downloadbaar bedrijfsprofiel — het comité kan de site niet zelf doorlezen tijdens een twintig-minuten-vergadering {#trage-grondige-b2b-inkoper-procurement-afdeling-geen-downloadbaar-bedrijfsprofiel-het-comit-kan-de-site-niet-zelf-doorlezen-tijdens-een-twintig-minuten-vergadering}

**Persona:** Junior inkoper die namens haar afdeling een shortlist van drie leveranciers moet voorleggen aan een intern beoordelingscomité  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** De inkoper moet drie leveranciers presenteren in een vergadering van twintig minuten, zonder dat elk commissielid vooraf zelf door drie websites heeft gescrold. Voor de andere twee partijen heeft ze binnen een minuut een PDF gevonden om door te sturen: bedrijfsprofiel, KVK, verzekering, werkwijze, referenties. Voor Dynique zoekt ze tien minuten en vindt uiteindelijk alleen de 'gratis checklist' — een leadmagneet voor MKB-oriëntatie, geen bedrijfsprofiel, en met een gebroken formulier op de koop toe.

**Trust/behoefte-trigger.** "Heb je iets dat ik gewoon kan doorsturen naar het comité, zonder dat iedereen zelf door de site hoeft te klikken?"

**Wat er nu misgaat.** De enige downloadbare asset op de hele site is /gratis-checklist, en de code bevat letterlijk de comment '// In productie: stuur naam + e-mail ook naar API/Mailchimp/Resend' (regel 39) — het formulier belooft de PDF 'direct per mail' (regel 113) maar verstuurt in werkelijkheid niets. Er bestaat geen enkel document dat een inkoper zonder verkoopgesprek kan meenemen naar een interne vergadering.

**Award-winning oplossing.** Bouw in het Vertrouwensdossier een 'Vendor Pack' — geen statisch PDF'je, maar een dynamisch samengesteld, altijd actueel document dat automatisch de laatste versie van elk relevant onderdeel bundelt: bedrijfsprofiel, KVK + BTW, verzekeringsgegevens, werkwijze (Fase 1-4 samengevat), 2-3 referentieprojecten, en de laatste stand van de algemene voorwaarden — met de wijzigingslog-hash zodat het comité weet dat het de actuele versie leest. Eén klik, geen formulier nodig. Dit verschuift het eerste contactmoment van 'praat met de oprichter' naar 'lees dit rustig door in je eigen tempo' — precies wat past bij een traag, formeel beoordelingsproces, en repareert meteen het kapotte checklist-formulier door het te vervangen door iets dat wél werkt.

### 9. Elke conversie-route op de site forceert direct een gesprek — er is geen documentatie-only pad {#trage-grondige-b2b-inkoper-procurement-afdeling-elke-conversie-route-op-de-site-forceert-direct-een-gesprek-er-is-geen-documentatie-only-pad}

**Persona:** Procurement lead bij een grotere organisatie wiens interne beleid vereist dat eerst schriftelijk materiaal wordt gecirculeerd vóórdat er tijd van een architect of directeur aan een extern gesprek wordt besteed  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Ze wil nadrukkelijk geen gesprek, geen call, geen WhatsApp-bericht. Ze wil alleen materiaal kunnen delen met drie collega's die zelf beslissen of het traject verdergaat. Ze scant het contactformulier, de sticky WhatsApp-knop en de Adviseur-quiz — die alle drie eindigen bij hetzelfde punt: een uitnodiging tot direct persoonlijk contact. Ze sluit de tab zonder iets achter te laten, en het lead is voorgoed verdwenen, niet uitgesteld.

**Trust/behoefte-trigger.** "Ik wil nog geen gesprek plannen — ik wil eerst materiaal kunnen delen met collega's die zelf beslissen of we verdergaan."

**Wat er nu misgaat.** Elke CTA op de site — het contactformulier (verstuurt via WhatsApp, contact/page.tsx regel 99), de sticky WhatsApp-knop, de Adviseur-quiz (eindigt bij /#contact) — is gebouwd rond het direct starten van een persoonlijk gesprek. Er is geen optie om alleen documentatie te ontvangen zonder daarmee impliciet een gespreksverzoek te doen. Voor een risicomijdende inkoopafdeling die eerst intern draagvlak moet creëren, forceert dit een stap die ze nog niet willen zetten.

**Award-winning oplossing.** Geef het Vertrouwensdossier (/zakelijk) een eigen, permanente URL die een procurement lead kan bookmarken en intern doorsturen zonder ooit een formulier in te vullen — een levend document in plaats van een eenmalige PDF-aanvraag, dat automatisch de laatste versie toont van voorwaarden, DPA-sjabloon, verzekering en vendor pack. Voeg daarnaast op /contact een tweede, lichtere kolom toe: 'Nog niet klaar voor een gesprek? Volg ons alleen op de hoogte' — een minimaal formulier (naam + e-mail + bedrijf) dat automatisch meldt wanneer het dossier wordt bijgewerkt, zónder ooit een WhatsApp-bericht of belafspraak te initiëren. Dit geeft de procurement lead een weg de trechter in op haar eigen tempo — precies het geduldige, bewijs-eerst-karakter van deze persona, en het eerste écht andere ingangspunt naast de drie die er al zijn.

### 10. "Je data en code blijven van jou" is een FAQ-zin, geen contractuele garantie met een escrow-achtervang {#trage-grondige-b2b-inkoper-procurement-afdeling-je-data-en-code-blijven-van-jou-is-een-faq-zin-geen-contractuele-garantie-met-een-escrow-achtervang}

**Persona:** Legal counsel die de broncode-eigendomsclausule wil verifiëren vóór projectstart, mede namens een risicomijdende directie  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** De jurist heeft de FAQ op de homepage gelezen en onderstreept die ene zin in een concept-memo aan zijn directie, met de kanttekening: 'nog te verifiëren — bron?'. Hij zoekt naar het contractartikel waarin dit daadwerkelijk is vastgelegd, en naar wat de achtervang is gezien de eenmanszaak-structuur mocht er iets met de leverancier gebeuren vóórdat de code formeel is overgedragen. Hij vindt geen van beide.

**Trust/behoefte-trigger.** "Waar staat dit zwart-op-wit, en wat is de escrow-regeling als de leverancier tijdens het traject wegvalt?"

**Wat er nu misgaat.** De volledige tekst over eigendom bestaat uit één FAQ-antwoord: 'Je data en code blijven van jou. Ik werk projectmatig en veilig volgens vaste standaarden' (homepage, regel 237). Er is geen verwijzing naar een IE-overdrachtsclausule, geen onderliggend document en geen escrow-regeling die de belofte afdekt tegen het continuïteitsrisico van de eenmanszaak-structuur. Voor een jurist is een FAQ-antwoord zonder brondocument juridisch waardeloos als basis voor contractonderhandeling.

**Award-winning oplossing.** Verwijs de FAQ-tekst expliciet door: 'Je data en code blijven van jou — vastgelegd in artikel [X] van onze algemene voorwaarden, met broncode-escrow als aanvullende zekerheid.' Bied de per-milestone, tijdgestempelde hash-verificatie uit de escrow-ledger expliciet aan op de zorg-, logistiek-, bouw- en installatiebedrijf-pagina's als concreet, technisch bewijs — niet als een verzekeringspolisje in de kleine lettertjes, maar als een zichtbaar, controleerbaar mechanisme dat een jurist zelf kan verifiëren zonder Dynique daarvoor te hoeven bellen.

### 11. Geen enkel technisch detail over hosting, back-ups of omgevingsscheiding — alleen de vage tag 'Staging-omgeving' {#trage-grondige-b2b-inkoper-procurement-afdeling-geen-enkel-technisch-detail-over-hosting-back-ups-of-omgevingsscheiding-alleen-de-vage-tag-staging-omgeving}

**Persona:** Security officer bij een bouwbedrijf, verantwoordelijk voor het beoordelen van een pilot vóór interne goedkeuring  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Vóórdat hij een pilot goedkeurt, wil de security officer weten waar de systeemdata wordt gehost (EU of daarbuiten), hoe vaak er wordt geback-upt, wat het rampherstelplan is (RTO/RPO) en hoe test- en productieomgevingen technisch worden gescheiden. Hij checkt het procestraject op de homepage, dan de privacyverklaring, en vindt in beide alleen beschrijvingen van de website zelf — nooit van de systemen die voor klanten gebouwd worden.

**Trust/behoefte-trigger.** "Waar staat de data, hoe vaak wordt er geback-upt, en hoe zijn test en productie technisch van elkaar gescheiden?"

**Wat er nu misgaat.** Fase 3 ('BOUWEN') in het procestraject noemt enkel de losse tags 'Development', 'Staging-omgeving', 'Live feedback loop' (regel 854) zonder technische onderbouwing. Hoofdstuk 10 van de privacyverklaring ('Beveiliging', regel 377-379) beschrijft uitsluitend HTTPS en Cloudflare-hosting van dynique.nl zelf — niet de hostingkeuzes voor klantsystemen. Nergens op de site staat een woord over back-upfrequentie, data-residency of disaster recovery voor opgeleverde projecten.

**Award-winning oplossing.** Voeg aan het Vertrouwensdossier een module 'Techniek & waarborgen' toe met concrete, harde cijfers in plaats van geruststellende taal: standaard EU-hosting, gescheiden staging/productie per project, een expliciet RTO/RPO-doel, en — als meest onderscheidende element — de datum van de laatst succesvol geteste back-up-restore, zichtbaar bijgewerkt na elke test. Een 'laatste restore-test: [datum], geslaagd' is een detail dat vrijwel geen enkele concurrent van deze schaal publiceert, en is precies het soort feitelijke, verifieerbare bewijslast die een security officer zwaarder laat wegen dan een pagina vol geruststellende beloften. Verwijs vanuit de Fase 3-tegel op de homepage direct naar deze module.

### 12. "100% vaste prijs" in het conversieblok staat op gespannen voet met de FAQ die scope-wijzigingen tijdens het traject toestaat {#trage-grondige-b2b-inkoper-procurement-afdeling-100-vaste-prijs-in-het-conversieblok-staat-op-gespannen-voet-met-de-faq-die-scope-wijzigingen-tijdens-het-traject-toestaat}

**Persona:** Inkoper die de "vaste prijs"-belofte wil laten toetsen door de eigen budgethouder vóór het indienen van een budgetaanvraag  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** De inkoper laat de budgethouder de statistiek '100% Vaste prijs' zien in het conversieblok van de homepage als onderbouwing voor de budgetaanvraag. De budgethouder scrolt zelf verder naar beneden, naar de FAQ, en leest: 'Wat als de scope tijdens het project verandert? Dat gebeurt vaker dan je denkt... We bespreken de impact op planning en prijs.' Hij fronst: 'dus het is toch niet vast?' De inkoper heeft geen antwoord.

**Trust/behoefte-trigger.** "Is de prijs nou vast, of wordt die tussentijds toch aangepast? Ik heb precies één van de twee nodig om mijn budgetaanvraag te onderbouwen — niet allebei tegelijk."

**Wat er nu misgaat.** Het conversieblok (homepage, regel 973) toont '100%' naast 'Vaste prijs' zonder enige voetnoot. Enkele secties lager staat de FAQ (regel 238): 'We bespreken de impact op planning en prijs zodra het zich voordoet.' Beide beweringen zijn op zichzelf redelijk (vaste prijs per fase, met een wijzigingsprocedure), maar worden nergens expliciet met elkaar verbonden — voor een inkoper die specifiek op tegenstrijdigheden let (de kern van deze persona), leest dit als een verkooptruc in plaats van consistent beleid.

**Award-winning oplossing.** Voeg aan de '100%'-statistiek een kleine, zichtbare voetnoot-asterisk toe die naar een interactieve mini-visualisatie linkt binnen het voorwaarden-artikel: een eenvoudig, direct te doorgronden diagram dat toont hoe 'vaste prijs per fase' werkt — een tijdlijn met blokjes per fase, waarbij een scope-wijziging zichtbaar een nieuw, apart goedgekeurd blokje toevoegt in plaats van het bestaande bedrag te laten 'zweven'. Dit soort klein, functioneel interactief element — geen decoratie, maar een uitleg die je kunt doorklikken — is precies het detail dat een jury onderscheidt van een tekstmuur, en verandert een schijnbare tegenstrijdigheid in een expliciet, procesmatig antwoord dat de 'doordacht en precies'-merkpersoonlijkheid daadwerkelijk waarmaakt.

### 13. De datum/tijd-kiezer in het contactformulier is een schijnfunctie — geen echte agenda-koppeling of bevestiging {#trage-grondige-b2b-inkoper-procurement-afdeling-de-datumtijd-kiezer-in-het-contactformulier-is-een-schijnfunctie-geen-echte-agenda-koppeling-of-bevestiging}

**Persona:** Office manager die namens vier interne stakeholders een intakegesprek probeert in te plannen  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** De office manager vinkt op /contact 'Ik wil graag een gesprek inplannen' aan, kiest een datum, tijd en type (Online/Fysiek), en verwacht een bevestigde agenda-uitnodiging te ontvangen om door te sturen naar drie collega's die ook aanwezig moeten zijn. In plaats daarvan opent WhatsApp Web met een voorgevuld berichtje. Ze sluit het venster, onzeker of het aankomt, en begint een aparte e-mailthread om vier agenda's handmatig af te stemmen — het probleem dat ze net probeerde te automatiseren.

**Trust/behoefte-trigger.** "Ik heb een agenda-uitnodiging nodig om naar mijn collega's door te sturen, geen los WhatsApp-berichtje met een datum erin die misschien al bezet is."

**Wat er nu misgaat.** src/app/contact/page.tsx (regel 96-99) laat zien dat de hele appointment-flow (datum, tijd, type) enkel tekst toevoegt aan een WhatsApp-bericht via window.open. Er is geen agenda-koppeling, geen beschikbaarheidscheck en geen automatische bevestiging — de gekozen tijd kan al bezet zijn en de gebruiker komt dat pas achteraf te weten, na een handmatige heen-en-weer.

**Award-winning oplossing.** Vervang de losse datum/tijd/type-velden door een echt ingebedde scheduling-widget (bijv. Cal.com) die de daadwerkelijke beschikbaarheid toont, direct een agenda-uitnodiging met videobel-link genereert en een bevestigingsmail stuurt. Eén klik levert een .ics-bestand op om door te sturen naar collega's — geen wachten op een handmatige reactie, geen risico op een dubbele boeking, en een concreet bewijs van 'projectmatig werken' vanaf het allereerste contactmoment.

### 14. Geen BTW-nummer op de site — alleen KVK, wat leveranciersregistratie in grotere systemen blokkeert {#trage-grondige-b2b-inkoper-procurement-afdeling-geen-btw-nummer-op-de-site-alleen-kvk-wat-leveranciersregistratie-in-grotere-systemen-blokkeert}

**Persona:** Crediteurenadministratie bij een grotere klantorganisatie die een nieuwe leverancier in het ERP-/inkoopsysteem aanmaakt  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Om Dynique als leverancier aan te maken in het crediteurensysteem heeft de administratie zowel het KVK-nummer als het BTW-identificatienummer nodig — een standaardveld in vrijwel elk ERP/inkoopsysteem bij grotere organisaties. Ze vindt het KVK-nummer meteen in de footer, maar het BTW-veld in het systeem blijft rood omlijnd.

**Trust/behoefte-trigger.** "We kunnen jullie niet als leverancier aanmaken zonder een geldig BTW-nummer — waar vind ik dat?"

**Wat er nu misgaat.** Een sitebrede zoekopdracht naar 'BTW' of 'VAT' levert nergens een resultaat op, behalve een volledig ongerelateerde subsidiezin op de Heerlen-locatiepagina ('subsidie-trajecten... innovatiesubsidies'). Footer.tsx (regel 122-134) toont wel 'KVK 90531264' en het adres, maar geen BTW-nummer — evenmin op /contact (DETAILS-array, regel 15) of in de LocalBusiness JSON-LD op diezelfde pagina (regel 36-52, geen vatID-veld). Voor grotere organisaties met geformaliseerde leveranciersonboarding is dit een klein maar volledig blokkerend gegeven, en het ontbreekt structureel — nergens op de hele site, niet alleen op één pagina.

**Award-winning oplossing.** Voeg het BTW-nummer toe naast 'KVK 90531264' in Footer.tsx (regel 128-130), in de DETAILS-array op /contact naast KVK, en als vatID-veld in de LocalBusiness JSON-LD op /contact en /over-ons. Neem het bovendien standaard op in het Vendor Pack — zodat een crediteurenadministratie dit nooit hoeft te zoeken: het staat al klaar in het document dat voor precies dit doel is samengesteld. Een wijziging van enkele regels code die een reëel, vroeg-in-het-proces optredend registratieblok structureel wegneemt.

### 15. Reactietijd-belofte is tegenstrijdig binnen dezelfde pagina: '2 uur' versus '24 uur' {#trage-grondige-b2b-inkoper-procurement-afdeling-reactietijd-belofte-is-tegenstrijdig-binnen-dezelfde-pagina-2-uur-versus-24-uur}

**Persona:** Kwaliteitsmanager die alle contactpunten cross-checkt op interne consistentie als indicator van betrouwbaarheid, exact zoals ze dat ook bij offertes van andere leveranciers doet  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Als onderdeel van haar leveranciersbeoordeling leest de kwaliteitsmanager elke pagina woord voor woord, met een aantekenvel ernaast waarop ze elke feitelijke bewering noteert. Op de contactpagina schrijft ze binnen twintig seconden twee regels onder elkaar: 'Reactietijd: 2u (detail-blok)' en 'Reactietijd: 24u (hero-tekst)'. Ze onderstreept beide, zet er een vraagteken bij, en trekt een conclusie die niets met de inhoud van het aanbod te maken heeft: als ze dit al niet consistent kunnen krijgen op hun eigen contactpagina, hoe zit het dan met de rest van het project?

**Trust/behoefte-trigger.** "Eerst staat er 2 uur, twee alinea's verder 24 uur — welke van de twee is het nou, en waarom staat het niet gewoon één keer goed?"

**Wat er nu misgaat.** src/app/contact/page.tsx toont in de DETAILS-array (regel 13) 'REACTIETIJD: Binnen 2 uur (ma–za, 9–20u)' en enkele regels lager in de hero-paragraaf (regel 134) 'We reageren altijd binnen 24 uur, meestal veel eerder' — op dezelfde pagina, voor dezelfde belofte. Dit exacte punt staat al genoteerd in docs/CRITIQUE-SITE-2026-07-14.md ('Minor Observations') en is na de september-rebrand nog steeds onopgelost. Voor een kwaliteitsmanager die de site juist test op interne consistentie is dit precies het soort detail dat de 'doordacht en precies'-merkpersoonlijkheid uit PRODUCT.md tegenspreekt, op de pagina waar het er het meest toe doet: vlak vóór conversie.

**Award-winning oplossing.** Kies één getal en gebruik het overal consequent: pas DETAILS[2].value in src/app/contact/page.tsx (regel 13) aan naar 'Binnen 24 uur (meestal sneller)', identiek aan de '24u'-statistiek op de homepage (regel 972) en de FAQ-belofte (regel 234). Verbind deze ene, consistente belofte vervolgens rechtstreeks met de SLA-module, zodat het geen losse marketingzin blijft maar een citeerbaar, overal identiek geformuleerd onderdeel van het Vertrouwensdossier wordt — het soort discipline dat een kwaliteitsmanager juist wél opmerkt, in positieve zin, wanneer ze het een tweede keer checkt.

---

## De Belgische klant

### 1. De Adviseur beloont 'lokaal contact' met een tekst én een vervolglink die alleen over Limburg gaan {#de-belgische-klant-de-adviseur-beloont-lokaal-contact-met-een-tekst-n-een-vervolglink-die-alleen-over-limburg-gaan}

**Persona:** Ann V. — operationeel directeur, familiaal logistiek bedrijf in Antwerpen (40+ medewerkers, wagenpark-planning nu in Excel)  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Ann is serieus op zoek naar maatwerk software voor planning en tracking van haar wagenpark en heeft al twee kant-en-klaar-pakketten afgewezen omdat ze niet passen bij hun routes. Op de homepage vindt ze 'De Adviseur' (Advisor.tsx) — de sectie die zichzelf presenteert als 'Niet verkopen. Adviseren.' — en doorloopt bewust en rustig alle vier stappen, precies omdat dit het meest persoonlijke onderdeel van de site lijkt. Bij stap 3 ('Wat is voor jou het belangrijkst?') kiest ze heel doelbewust 'Persoonlijk, lokaal contact' (id: lokaal) — ze test de tool actief: durft een bureau uit Nederlands-Limburg te beweren dat een Belgisch bedrijf evenveel nabijheid krijgt als een lokale partij?

**Trust/behoefte-trigger.** Het exacte wantrouwen-moment uit de briefing: 'bedient een Limburgs bureau België wel serieus?' Ann test dit actief door voor 'lokaal contact' te kiezen — het meest expliciete signaal dat ze om nabijheid geeft, op het enige moment in de hele site waar ze dat rechtstreeks aan het systeem kan 'vertellen'.

**Wat er nu misgaat.** In src/components/Advisor.tsx (regel 117) is de tekst achter deze keuze hardcoded: APPROACH.lokaal = "Persoonlijk contact staat centraal — online of gewoon bij jou aan tafel in Limburg." Dat is al een probleem, maar het wordt erger: in computeAdvice (regel 149-150) genereert exact diezelfde keuze óók een secundaire link — secondary = { label: "Bekijk ons werkgebied in de regio", href: "/locaties/maastricht" } — die hardcoded naar /locaties/maastricht wijst. Ann krijgt dus niet één maar twéé onafhankelijke signalen op haar resultaatscherm die allebei aannemen dat zij in Limburg zit, precies op het enige moment in de hele site waarop ze zelf actief om lokale nabijheid heeft gevraagd. Het 'antwoord-spoor' aan de linkerkant van de console (regel 322-341) houdt haar eigen keuze 'Persoonlijk, lokaal contact' zelfs zichtbaar in beeld terwijl dit antwoord ernaast staat — de tegenstrijdigheid is letterlijk gelijktijdig zichtbaar op het scherm.

**Award-winning oplossing.** Maak van dit zwakste bewijspunt het sterkste bewijspunt van precisie op de hele site. Laag 1 (copy-fix, direct): herschrijf APPROACH.lokaal zonder plaatsnaam-aanname ("Persoonlijk contact staat centraal — online, of gewoon bij je aan tafel, waar in de Euregio je ook zit.") en vervang de hardcoded /locaties/maastricht-link door een neutrale bestemming. Laag 2 (het onderscheidende deel): gebruik de Cloudflare-edge geolocatie die de site al gebruikt voor hosting (privacyverklaring, hoofdstuk 3, regel 252: 'Onze website wordt gehost via Cloudflare Pages') om serverside het land van de bezoeker te lezen, en toon in exact hetzelfde resultaatscherm een dynamisch berekende reistijd-regel — bijvoorbeeld "~1u15 rijden vanaf Vaals" voor een IP uit Antwerpen. Dat verandert de Adviseur van een generieke quiz in een tool die letterlijk 'meedenkt' over de situatie van de bezoeker — precies het differentiator-verhaal dat de sectie zelf claimt te zijn, en precies Design Principle 1 uit PRODUCT.md ('bewijs door precisie, niet door beloftes') toegepast op het enige interactieve onderdeel van de site dat daarvoor geschikt is.

### 2. Het antwoord op de btw-vraag bestaat al op de site — alleen in het Duits, voor Aken, niet in het Nederlands voor België {#de-belgische-klant-het-antwoord-op-de-btw-vraag-bestaat-al-op-de-site-alleen-in-het-duits-voor-aken-niet-in-het-nederlands-voor-belgi}

**Persona:** Belgische boekhouder/CFO die de eerste offerte moet goedkeuren vóór een aanbetaling  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Een Belgisch bedrijf heeft mondeling akkoord gegeven op een maatwerk-softwaretraject. Vóórdat de boekhouder een aanbetaling goedkeurt, zoekt ze op dynique.nl naar het EU btw-identificatienummer om te bevestigen dat de factuur correct verwerkt kan worden als intracommunautaire dienst met verlegde btw.

**Trust/behoefte-trigger.** Juridisch-fiscale zekerheid vóór betaling: een Belgisch bedrijf mag een factuur met verlegde btw niet boeken zonder een geldig EU-btw-ID van de leverancier — dit is geen voorkeur maar een boekhoudkundige blokkade.

**Wat er nu misgaat.** Op /contact staat in de DETAILS-array (src/app/contact/page.tsx, regel 15) uitsluitend { label: "KVK", value: "90531264" } — geen btw-ID. Erger nog: de JSON-LD op diezelfde pagina (regel 42) zet taxID: "90531264" — het KVK-nummer wordt daar letterlijk hergebruikt als fiscaal identificatienummer, wat voor elke geautomatiseerde factuurcontrole een foutief resultaat oplevert. De ironie: Dynique heeft dit probleem al opgelost — alleen voor de verkeerde markt. Op /locaties/aken (src/app/locaties/aken/page.tsx, regel 39) staat een volledig uitgewerkte FAQ: "Können Sie Rechnungen mit deutscher USt. stellen? Wir sind ein niederländisches Unternehmen, arbeiten aber regelmäßig mit deutschen Kunden. Innergemeinschaftliche Leistung mit Reverse-Charge-Verfahren ist Standard." Dynique heeft dus al precies dit fiscale antwoord geformuleerd en gepubliceerd — in het Duits, voor Duitsland, een markt die in PRODUCT.md nergens als doelmarkt wordt genoemd — terwijl België, de expliciet benoemde tweede thuismarkt, hier helemaal niets heeft.

**Award-winning oplossing.** Voeg het echte EU-btw-ID toe op /contact, in de footer en in de privacyverklaring, en corrigeer de JSON-LD taxID naar de daadwerkelijke waarde. Ga daarna verder dan een losse FAQ-regel: bouw op /contact, direct naast de bestaande DETAILS-kolom, een compacte 'Facturatie voor jouw land'-schakelaar (NL / BE / DE als drie kleine tabs) die per land in twee zinnen exact uitlegt hoe de factuur eruitziet — voor België het reverse-charge-antwoord dat inhoudelijk al bewezen werkt (het is letterlijk al geschreven, alleen in het Duits voor Aken). Dat hergebruikt bestaande, al doordachte copy in plaats van iets nieuws te verzinnen, en maakt van een ontbrekend fiscaal feit een klein, interactief bewijsstuk dat past bij 'technisch onderlegd' — iets wat geen enkele generieke bureausite heeft.

### 3. Er bestaat op de hele site geen enkele pagina met algemene voorwaarden — sitemap.ts bevestigt het: alleen /privacyverklaring staat onder 'Juridisch' {#de-belgische-klant-er-bestaat-op-de-hele-site-geen-enkele-pagina-met-algemene-voorwaarden-sitemapts-bevestigt-het-alleen-privacyverklaring-staat-onder-juridisch}

**Persona:** Legal/procurement-medewerker van een groter Belgisch bedrijf  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Bij een grotere Belgische organisatie is het standaardproces dat inkoop/legal de voorwaarden van een nieuwe leverancier doorneemt vóórdat er tijd wordt vrijgemaakt voor een verkennend gesprek — precies passend bij het 'groter, weloverwogen besluit' dat PRODUCT.md deze doelgroep expliciet toeschrijft. Ze doorzoekt de footer en /contact op 'Algemene voorwaarden', 'Terms' of 'Leveringsvoorwaarden'.

**Trust/behoefte-trigger.** Voor een grotere B2B-koper is het ontbreken van voorwaarden een go/no-go-filter vóór het eerste gesprek, niet een detail dat later wel volgt — zeker bij een leverancier over de landsgrens, zonder bestaand via-via-vertrouwen.

**Wat er nu misgaat.** Footer.tsx heeft onder 'Ontdek' (regel 12-19) zes links en onder de Legal-regel onderaan (regel 143-145) precies één juridische link: Privacyverklaring. sitemap.ts bevestigt dit hard: de sectie '── Juridisch ──' (laatste regel van het bestand) bevat letterlijk maar één URL, /privacyverklaring — er is geen /algemene-voorwaarden-route, zelfs niet ongelinkt. Nergens op de site staat toepasselijk recht, aansprakelijkheid, leveringstermijnen of hoe geschillen worden beslecht (Nederlandse of Belgische rechter?). Voor een Nederlandse eenmanszaak die met kleinere lokale klanten werkt is dat te overzien; voor een partij die 'een serieus softwareproject' aan Dynique toevertrouwt — en de bestaande FAQ al belooft dat scopewijzigingen 'we bespreken de impact op planning en prijs' (homepage FAQ, regel 238) zonder dat ergens staat hóe dat contractueel is vastgelegd — is dit een gemis dat het eerste gesprek nooit laat starten.

**Award-winning oplossing.** Publiceer een eigen /algemene-voorwaarden-pagina met exact hetzelfde, al werkende NL/EN-taalwisselmechanisme als de privacyverklaring (useState<Lang>, dezelfde toggle-component, src/app/privacyverklaring/page.tsx regel 69-70) — dit is dus geen nieuwe techniek, alleen nieuwe content in een al bewezen patroon. Voeg een expliciete paragraaf 'Werken met opdrachtgevers in België' toe: toepasselijk recht, forumkeuze, en hoe scopewijzigingen worden vastgelegd (sluit aan bij de bestaande FAQ-belofte). Link deze pagina niet alleen in de footer naast Privacyverklaring, maar ook als klein, ondergeschikt tekstlinkje direct onder de verstuur-knop van elk WhatsApp-formulier ('Door te versturen ga je akkoord met onze algemene voorwaarden') — zichtbaar precies op het moment van de meeste actie-intentie, in plaats van pas gevonden te worden als iemand er actief naar zoekt.

### 4. De vier sector-bewijspagina's noemen België nergens — en de JSON-LD sluit het zelfs actief uit, terwijl er niet eens een FAQ-mechanisme bestaat om het te herstellen {#de-belgische-klant-de-vier-sector-bewijspaginas-noemen-belgi-nergens-en-de-json-ld-sluit-het-zelfs-actief-uit-terwijl-er-niet-eens-een-faq-mechanisme-bestaat-om-het-te-herstellen}

**Persona:** Belgische aannemer (bouwbedrijf, 40 medewerkers) die zoekt op 'maatwerk software bouwbedrijf'  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Een Belgisch bouwbedrijf, vastgelopen in Excel-planningen en losse werkbonnen op WhatsApp, googelt en landt op /maatwerk-software/bouw — exact de pagina die PRODUCT.md aanwijst als 'dieper-in-de-funnel bewijs' voor precies dit soort grotere, weloverwogen kopers. De site herkent het probleem feilloos ("Bonnen op papier of via WhatsApp raken kwijt", src/app/maatwerk-software/bouw/page.tsx regel 33) — maar de bezoeker zoekt onbewust naar één zin die bevestigt dat dit ook voor een niet-Nederlands bedrijf geldt, vlak voordat hij de 'gratis procesanalyse op locatie' overweegt aan te vragen.

**Trust/behoefte-trigger.** De bezoeker zoekt actief naar bevestiging 'dit geldt ook voor mij, ook al ben ik geen Nederlands bedrijf' — op het punt waar hij het dichtst bij een aanvraag staat.

**Wat er nu misgaat.** In geen van de vier sectorpagina's (/maatwerk-software/bouw, /zorg, /logistiek, /installatiebedrijf) valt het woord 'België' — bevestigd door een grep over alle vier page.tsx- en layout.tsx-bestanden. De JSON-LD van elke sector-layout.tsx (regel 49, identiek in alle vier) specificeert areaServed: ["Limburg", "Nederland"] — Google en elke structured-data-consument krijgt dus letterlijk te zien dat Dynique deze diensten NIET aan België aanbiedt, terwijl de homepage-hero, de marquee ("NEDERLAND · BELGIË · INTERNATIONAAL", regel 181) en /over-ons elders wél 'Nederland en België' claimen. Het probleem zit dieper dan ontbrekende copy: src/components/SectorTemplate.tsx (het gedeelde component achter alle vier pagina's) heeft in zijn SectorData-type (regel 19-31) helemaal géén faq-veld — in tegenstelling tot CityPage.tsx, dat wél al een werkend faq: {q,a}[]-patroon heeft. Er is dus niet zomaar 'één regel toe te voegen aan een bestaande lijst'; het FAQ-mechanisme zelf ontbreekt nog op dit template.

**Award-winning oplossing.** Werk in twee stappen, allebei sitebreed via het gedeelde component. Ten eerste: corrigeer areaServed in alle vier layout.tsx-bestanden naar ["Limburg", "Nederland", "België"] — een tekstuele wijziging in vier regels, geen herontwerp. Ten tweede: breid SectorData in SectorTemplate.tsx uit met een optioneel faq-veld, exact naar het patroon dat CityData al bewijst te werken, en render een nieuwe FAQ-sectie vlak vóór de bestaande 'analyse'-CTA (regel 276). Vul per sector een eerlijk, sector-specifiek antwoord in dat níet overclaimt (conform Design Principle 4, 'eerlijk over schaal') — bijvoorbeeld voor bouw: "Werken jullie ook met bouwbedrijven in België? Ja — dezelfde aanpak (digitale werkbonnen, urenregistratie die doorloopt naar facturatie) geldt voor bouwbedrijven in Vlaams- en Belgisch Limburg; nog geen Belgische bouwcase in ons portfolio, wel Nederlandse klanten met exact dit probleem." Dat is precies het soort concrete, niet-overdreven eerlijkheid die het merkkarakter draagt — en levert bovendien, éénmalig gebouwd, hetzelfde herbruikbare FAQ-component op dat ook cases 6 en 13 nodig hebben.

### 5. 'Bereik: Nederland & België' op /portfolio wordt door geen van de vijf cases onderbouwd — terwijl het bewijs er wél al is, alleen niet zichtbaar {#de-belgische-klant-bereik-nederland-belgi-op-portfolio-wordt-door-geen-van-de-vijf-cases-onderbouwd-terwijl-het-bewijs-er-wl-al-is-alleen-niet-zichtbaar}

**Persona:** Belgische marketingmanager die het portfolio doorneemt als bewijslast  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Op /portfolio scant een Belgische bezoeker de statistiekenbalk bovenaan, waar letterlijk staat 'BEREIK · Nederland & België' (src/app/portfolio/page.tsx, regel 202). Ze klikt door naar de vijf cases en leest de vijf reviews op de homepage om te checken of die claim ook voor bedrijven zoals het hare klopt.

**Trust/behoefte-trigger.** Stap 3 van de belief ladder uit PRODUCT.md: 'het bestaande portfolio bewijst dat dit vakmanschap al wordt geleverd' — voor een Belgische bezoeker telt dat bewijs alleen als er ook een concrete Belgische link tussen zit.

**Wat er nu misgaat.** Alle vijf portfoliocases en alle vijf reviews (src/app/page.tsx, regel 610-666) zijn Nederlandse (Vaals-regio) opdrachtgevers. De statistiek 'Bereik: Nederland & België' is dus een claim zonder zichtbaar bewijspunt op precies de pagina die als bewijslast moet dienen — mét één uitzondering die er nu al ligt te verstoffen: de Stacy Kohnen-case (src/app/portfolio/stacy-kohnen/page.tsx, regel 53 en 145) beschrijft haar expliciet als 'een zangeres die zingt op evenementen in Duitsland, Nederland en België' en spreekt letterlijk van 'de drielandenregio: Duitsland, Nederland en België'. Die zin bestaat dus al, geverifieerd en geschreven — maar wordt nergens gebruikt op de portfolio-index of in de homepage-projectkaart, waar de samenvatting in plaats daarvan het vlakke 'Viertalig. Eén stem. Eindeloze podia.' toont (page.tsx, regel 224) zonder één van de drie landen te noemen.

**Award-winning oplossing.** Vervang de statistiek-tegel op /portfolio niet door een nieuwe claim, maar door de zin die al bewezen en geschreven bestaat: 'Bereik: drielandenregio NL · BE · DE' met een subtekst die verwijst naar de Stacy Kohnen-case als bron. Maak de vier statistiek-tegels op de portfolio-hero (regel 199-210) bovendien klikbaar/linkend naar het bewijs erachter — de BEREIK-tegel linkt dan direct naar /portfolio/stacy-kohnen — zodat een claim in één klik verifieerbaar wordt, precies het 'bewijs door precisie'-principe uit PRODUCT.md toegepast op wat nu een los statistiekje is. Werk tegelijk de homepage-projectkaart-summary bij naar iets dat het Belgische publiek wél benoemt, zodat er ook vóór het doorklikken al een zichtbaar Belgisch aanknopingspunt staat.

### 6. De centrale conversie-troef 'gratis procesanalyse op locatie' vermeldt op geen enkele van de vier sectorpagina's of hij ook voor België geldt {#de-belgische-klant-de-centrale-conversie-troef-gratis-procesanalyse-op-locatie-vermeldt-op-geen-enkele-van-de-vier-sectorpaginas-of-hij-ook-voor-belgi-geldt}

**Persona:** Belgische facility manager die de 'gratis procesanalyse op locatie' overweegt aan te vragen  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Op /maatwerk-software/logistiek leest een Belgische operations manager over de 'Gratis procesanalyse op locatie' — een aanbod met price: '0' in de JSON-LD (layout.tsx, regel 51) dat als laagdrempelige eerste stap wordt gepositioneerd, en dat als stap 01 ('Op locatie') terugkomt in de vaste STEPS-array van SectorTemplate.tsx (regel 34): 'We komen gratis en vrijblijvend langs op de plek waar het werk gebeurt.' Hij twijfelt of dit voor zijn magazijn in Wallonië of Vlaanderen ook geldt, of dat 'op locatie' stilzwijgend NL-only is.

**Trust/behoefte-trigger.** Fysieke afstand/reistijd: de bezoeker wil weten of hij dezelfde in-person behandeling krijgt als een Nederlandse klant, vóórdat hij een aanvraag indient — extra versterkt doordat de vergelijkbare pagina /diensten/processen/limburg zelfs een stap heeft die letterlijk 'Op locatie in Limburg' heet (regel 79).

**Wat er nu misgaat.** Geen van de vier sectorpagina's specificeert een reikwijdte (afstand, regio) voor het gratis bezoek — noch in STEPS (regel 33-38), noch in de eindconversieblok-checklist ('We komen naar jouw locatie toe', regel 296). De bezoeker moet zelf raden of 'op locatie' voor hem ook geldt — een verborgen aanname vlak vóór de belangrijkste CTA van de pagina (het formulier bij regel 276-341), in een pagina die juist overal elders precisie claimt ('Geen verrassingen, een vaste prijs per fase').

**Award-winning oplossing.** Voeg geen losse tekstregel toe, maar een klein, handgetekend 'reikwijdte'-element dat past bij hoe de rest van de site bewijs toont — de sectorpagina's zijn al opgebouwd rond zelfgemaakte visuals (het scroll-gestuurde voor/na-diagram via useBeforeAfterScrub). Bouw naast STEPS-stap 01 ('Op locatie') een compacte, inline SVG-cirkel/kaart die de gratis-bezoekradius toont vanaf Vaals, met Antwerpen, Hasselt en Luik als gemarkeerde punten binnen bereik — dezelfde visuele taal als de rest van de sectorpagina, in plaats van generieke stockillustratie. Voeg daaronder één regel toe: "Ook in België? We komen kosteloos langs in heel Vlaams- en Belgisch Limburg en de Euregio." Dit maakt een verborgen aanname niet alleen expliciet, maar tastbaar — precies het soort vakmanschap-door-precisie dat PRODUCT.md als kernprincipe noemt.

### 7. De footer toont een eigen pagina voor Aken (Duitsland) — inclusief cross-border-propositie en btw-antwoord — maar geen enkele voor België, de wél expliciet benoemde tweede thuismarkt {#de-belgische-klant-de-footer-toont-een-eigen-pagina-voor-aken-duitsland-inclusief-cross-border-propositie-en-btw-antwoord-maar-geen-enkele-voor-belgi-de-wl-expliciet-benoemde-tweede-thuismarkt}

**Persona:** Belgische bezoeker die de footer scant op zoek naar herkenning  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een Belgische bezoeker scrollt naar de footer om te zien of Dynique 'zijn' regio kent, en ziet onder 'Locaties' (Footer.tsx, regel 21-27): Maastricht, Heerlen, Sittard-Geleen, Aken, Eindhoven. Hij herkent Aken als Duits en concludeert dat het bureau blijkbaar wél moeite doet voor Duitse klanten, maar niet voor Belgische — terwijl hetzelfde footer-blok er zelf, twee alinea's hoger (regel 44), nog aan toevoegt: 'Maatwerk software voor bedrijven in Nederland en België'.

**Trust/behoefte-trigger.** Precies het wantrouwen-moment uit de briefing — bevestigd door wat de bezoeker zelf in de navigatie ziet, niet door wat de marketingcopy op dezelfde pagina beweert.

**Wat er nu misgaat.** De tegenstrijdigheid zit in één en hetzelfde bestand: Footer.tsx claimt op regel 44 expliciet 'Nederland en België' als markt, maar de locaties-kolom eronder (regel 21-27) bevat vijf links waarvan geen enkele Belgisch is. De /locaties/aken-pagina bewijst bovendien hoe uitgewerkt Dynique dit voor een niet-doelmarkt al doet: een volledige cross-border-propositie ('Cross-border Business', 'Euregio Maas-Rijn'), vier talen-FAQ's in het Duits, en zelfs een kant-en-klaar btw-antwoord (zie case 2) — terwijl Duitsland in PRODUCT.md, de meta-keywords of de positionering nergens als doelmarkt wordt genoemd. De site investeert dus zichtbaar meer in een markt die niet als doelmarkt is gedefinieerd dan in de markt die dat wél expliciet is.

**Award-winning oplossing.** Bouw minimaal één Belgische locatiepagina met exact dezelfde Euregio-aanpak als Aken — inclusief een vergelijkbare 'verschil in zakelijke cultuur'-alinea (Aken heeft dit al: 'Wij begrijpen het verschil in zakelijke cultuur tussen Nederland en Duitsland... directe communicatie versus formaliteit', regel 26) maar dan toegespitst op Nederland/België, wat meteen ook de toon-twijfel uit case 14 adresseert. Vervang in Footer.tsx één van de vijf links door deze nieuwe pagina, zodat 'Locaties' voortaan minstens één Belgische stad toont naast Aken — zichtbaar bewijs vóórdat de bezoeker ook maar hoeft te klikken, en in lijn met wat de footer twee regels hoger al beweert te zijn.

### 8. Er bestaat geen enkele /locaties-pagina voor Belgisch Limburg — terwijl de dichtstbijzijnde bestaande pagina (Sittard-Geleen, 15 min van Maasmechelen) wél een uitgewerkte cross-border-FAQ heeft, alleen voor Duitsland {#de-belgische-klant-er-bestaat-geen-enkele-locaties-pagina-voor-belgisch-limburg-terwijl-de-dichtstbijzijnde-bestaande-pagina-sittard-geleen-15-min-van-maasmechelen-wl-een-uitgewerkte-cross-border-faq-heeft-alleen-voor-duitsland}

**Persona:** SEO/marketingverantwoordelijke bij een Belgisch bedrijf dat leveranciers vergelijkt via Google  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Bij het vergelijken van leveranciers googelt iemand op 'maatwerk software Hasselt' of 'Genk' en vindt geen relevante Dynique-pagina, terwijl concurrenten met een lokale BE-pagina wél verschijnen.

**Trust/behoefte-trigger.** Fysieke afstand/reistijd wordt niet concreet gemaakt: de bezoeker heeft geen idee of Hasselt '20 minuten' of '2 uur' van Vaals ligt, en vindt geen pagina die dat voor hem uitrekent zoals dat voor Nederlandse én Duitse steden al gebeurt.

**Wat er nu misgaat.** src/components/CityPage.tsx bevat een kant-en-klaar, herbruikbaar travelTime-veld (regel 17), gevuld voor Maastricht, Heerlen, Sittard, Aken en Eindhoven — de techniek voor een Belgische stad bestaat dus al volledig. Sittard-Geleen, met een travelTime van 'Maastricht 25 min · Eindhoven 40 min' (src/app/locaties/sittard/page.tsx, regel 29) en dus letterlijk op fietsafstand van de Belgische grens bij Maasmechelen, heeft zelfs een eigen FAQ-item over grensoverschrijdend werken: "Kunnen jullie ook meertalig bouwen voor Duitse klanten? Ja. Met VDL Nedcar en grensbedrijven is Duitse content vaak gewenst." (regel 40) — een vraag die voor Belgisch Limburg, even dichtbij, nooit gesteld noch beantwoord wordt. Dit is dus geen ontwerp- maar een prioriteitsprobleem: het makkelijkst te bouwen bewijsstuk voor deze persona ontbreekt gewoon, terwijl het equivalent voor een verder gelegen markt al twee keer bestaat (Aken én Sittards Duitse FAQ).

**Award-winning oplossing.** Voeg een CityData-object toe voor Hasselt (travelTime: '45 min vanaf Vaals', region: 'Belgisch Limburg') en render het via het bestaande <CityPage data={...}/>-component — exact dezelfde aanpak als /locaties/aken/page.tsx, dus geen nieuwe componenten nodig. Voeg in de FAQ van zowel de nieuwe Hasselt-pagina als de bestaande Sittard-pagina een symmetrisch item toe naast het Duitse ('Kunnen jullie ook voor bedrijven in Belgisch Limburg werken? Ja — Maasmechelen en Hasselt liggen net zo dichtbij als Aken.'), zodat het grensverhaal in twee richtingen klopt. Voeg de pagina toe aan sitemap.ts en aan Footer.tsx zodat hij ook genavigeerd wordt, niet alleen organisch vindbaar.

### 9. Het enige antwoord op 'bedienen jullie België serieus' is FAQ nummer 2 van 8 — generiek, en losstaand van de stat-tegels die de rest van de pagina wél gebruikt om vertrouwen te bouwen {#de-belgische-klant-het-enige-antwoord-op-bedienen-jullie-belgi-serieus-is-faq-nummer-2-van-8-generiek-en-losstaand-van-de-stat-tegels-die-de-rest-van-de-pagina-wl-gebruikt-om-vertrouwen-te-bouwen}

**Persona:** Voorzichtige Belgische ondernemer die de homepage-FAQ doorleest voordat hij het formulier invult  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Op de homepage scrollt een Belgische bezoeker helemaal door tot sectie 10, de FAQ, klikt de accordion open bij 'Werken jullie ook met bedrijven buiten Limburg?' en leest een kort, correct maar generiek antwoord — daarna sluit hij de site zonder over te gaan tot actie.

**Trust/behoefte-trigger.** Dit ís letterlijk de vraag die deze persona het meest bezighoudt, maar ze moet er zelf naar op zoek gaan tussen acht FAQ's in plaats van dat de site het proactief, met bewijs, adresseert — zeker gezien PRODUCT.md's principe 'meedenken is zichtbaar, niet alleen beweerd'.

**Wat er nu misgaat.** In src/app/page.tsx (regel 235, FAQ nummer 2 van de 8 in de array die begint op regel 233) luidt het antwoord: 'Ja. We werken met bedrijven door heel Nederland en België, grotendeels op afstand met heldere check-ins, en op locatie waar dat waarde toevoegt.' Geen concrete reistijd, geen concreet aantal projecten, geen verwijzing naar de facturatie-vraag uit case 2. Het contrast is scherp: enkele honderden regels verderop (regel 969-980) bouwt de site voor een heel ander bewijs — 'reactietijd/vaste prijs/revisierondes' — al een herbruikbaar stat-tegel-patroon (grid sm:grid-cols-3 gap-px bg-white/5), maar dat patroon wordt nooit ingezet voor de vraag die deze specifieke, grotere doelgroep het hardst stelt.

**Award-winning oplossing.** Voeg geen nieuwe sectie toe, maar breid het bestaande, al bewezen stat-tegel-patroon uit de conversieblok (regel 970-980) uit met een vierde tegel of een compacte tweede rij eronder: 'BE' als kop, met een concreet cijfer als label (bijvoorbeeld reistijd naar Antwerpen, of — zodra beschikbaar — het percentage aanvragen uit België). Plaats vlak daaronder, of als link in dezelfde tegel, een verwijzing naar de nieuwe 'Facturatie voor jouw land'-schakelaar uit case 2. Zo verplaatst het antwoord van een weggestopte FAQ-regel naar exact het bewijs-ritme dat de rest van de conversieblok al hanteert — herkenbaar, consistent, en zichtbaar precies op het moment waarop de twijfel opkomt, in plaats van pas op regel 235 tussen acht andere vragen.

### 10. Het 'WERKGEBIED'-veld op /contact zegt 'Internationaal' waar de rest van de site diezelfde bezoeker net nog twee keer 'BELGIË' liet zien {#de-belgische-klant-het-werkgebied-veld-op-contact-zegt-internationaal-waar-de-rest-van-de-site-diezelfde-bezoeker-net-nog-twee-keer-belgi-liet-zien}

**Persona:** Belgische inkoper die de contactpagina invult vlak vóór het versturen van het formulier  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Op /contact bekijkt een Belgische bezoeker de detailkolom links van het formulier vlak voordat hij het invult, als laatste check dat hij 'bij de juiste partij' is — dezelfde bezoeker die enkele minuten eerder op de homepage de hero-openingsregel ('Maatwerk Software & Development · Nederland & België', regel 359) en de doorlopende marquee ('NEDERLAND · BELGIË · INTERNATIONAAL', regel 181) heeft gezien.

**Trust/behoefte-trigger.** Op het moment van de hoogste conversie-intentie zoekt de bezoeker naar een laatste, expliciete bevestiging dat hij welkom is — en krijgt in plaats daarvan een stap terug in specificiteit.

**Wat er nu misgaat.** In de DETAILS-array van src/app/contact/page.tsx (regel 14) staat: { label: "WERKGEBIED", value: "Limburg · Nederland · Internationaal" }. 'België' wordt hier — anders dan op de homepage-hero en in de marquee, twee plekken die de bezoeker al heeft gezien — niet met naam genoemd maar weggestopt onder het vage 'Internationaal'. Dat is een merkbare downgrade in precisie op precies de pagina waar de beslissing valt, en staat op gespannen voet met de rest van dezelfde pagina: de introtekst erboven (regel 134) belooft 'binnen 24 uur' terwijl DETAILS zelf 'Binnen 2 uur' claimt (regel 13) — /contact is dus al de minst interne-consistente pagina van de site op precies het punt waar consistentie het meest telt.

**Award-winning oplossing.** Wijzig de waarde naar "Limburg · Nederland · België · daarbuiten op aanvraag" zodat België expliciet en gelijkwaardig naast Nederland staat, consistent met hero en marquee. Neem deze fix mee in dezelfde pas waarin de reactietijd-tegenstrijdigheid (2 uur vs. 24 uur) wordt opgelost, zodat /contact in één keer van minst naar meest precieze pagina van de site verschuift — passend bij het merkprincipe 'bewijs door precisie'.

### 11. Het enige telefoonnummer is een Nederlands mobiel nummer, zonder enige duiding voor internationale bellers — terwijl het gratis alternatief al overal op de site staat {#de-belgische-klant-het-enige-telefoonnummer-is-een-nederlands-mobiel-nummer-zonder-enige-duiding-voor-internationale-bellers-terwijl-het-gratis-alternatief-al-overal-op-de-site-staat}

**Persona:** Belgische zakelijke beller die twijfelt over belkosten en schaal  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een Belgische bezoeker overweegt te bellen in plaats van te mailen of WhatsAppen, en ziet op /contact en in de footer alleen '+31 6 24572572' — een Nederlands mobiel nummer.

**Trust/behoefte-trigger.** Twee samenvallende twijfels: belkosten (een internationaal gesprek naar een NL-mobiel nummer is duurder dan naar een vast of gratis nummer) én schaal (een mobiel nummer zonder vast bedrijfsnummer voedt de indruk van een eenmanszaak in plaats van een partij die 'grotere bedrijven' kan bedienen).

**Wat er nu misgaat.** Zowel Footer.tsx (regel 100-104) als /contact (DETAILS, regel 11) tonen uitsluitend dit ene mobiele nummer, zonder toelichting of alternatief — terwijl de WhatsApp-knop (gratis via wifi/data) al prominent op dezelfde pagina staat, inclusief hetzelfde SVG-icoon dat drie keer wordt hergebruikt op /contact alleen al (regel 152-154, 236-238), maar nergens expliciet aan de belkosten-twijfel wordt gekoppeld.

**Award-winning oplossing.** Voeg direct naast het telefoonnummer in de DETAILS-kolom een klein, klikbaar icoon-label toe dat het bestaande WhatsApp-SVG hergebruikt: 'Bellen vanuit België? Appen is gratis' — met een directe wa.me-link. Dit lost de kostentwijfel op zonder een Belgisch nummer aan te schaffen, hergebruikt een asset die de pagina al drie keer bevat, en voelt daardoor als een doordacht ontwerpdetail in plaats van een toegevoegde regel tekst.

### 12. Het KVK-nummer staat als platte, niet-klikbare tekst in de footer — zonder link en zonder uitleg dat dit het Nederlandse equivalent van een KBO-nummer is {#de-belgische-klant-het-kvk-nummer-staat-als-platte-niet-klikbare-tekst-in-de-footer-zonder-link-en-zonder-uitleg-dat-dit-het-nederlandse-equivalent-van-een-kbo-nummer-is}

**Persona:** Belgische bezoeker die het KVK-nummer wil verifiëren vóór het eerste contact  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een Belgische ondernemer, gewend te checken via de KBO (Kruispuntbank van Ondernemingen) of companyweb.be, ziet in de footer 'KVK 90531264' staan en weet niet meteen wat dit is, laat staan hoe hij het kan verifiëren.

**Trust/behoefte-trigger.** Zelfstandige due diligence vóór het eerste contact — precies het soort check die deze doelgroep ('iets langere overwegingstijd, hoger budget, meer behoefte aan bewijs' — PRODUCT.md) uitvoert.

**Wat er nu misgaat.** In Footer.tsx (regel 128-130) staat 'KVK 90531264' als platte tekst tussen twee andere platte tekstregels ('Dynique is de handelsnaam van...' en het adres), zonder link naar het handelsregister en zonder duiding. Een Belgische bezoeker die het KVK-systeem niet kent, kan de registratie niet zelf verifiëren en moet Dynique op zijn woord geloven — precies het soort onzichtbaar bewijs dat het merkprincipe 'bewijs door precisie, niet door beloftes' zou moeten tegenspreken.

**Award-winning oplossing.** Maak 'KVK 90531264' in de footer en op /contact een klikbare link naar de officiële KVK-bedrijvenzoeker-pagina van Dynique, en voeg een korte, grijze bijschrift-tekst toe: '(NL handelsregister — vergelijkbaar met de Belgische KBO)'. Zo kan elke bezoeker, ongeacht land, in één klik zelf verifiëren zonder eerst te hoeven weten hoe het Nederlandse systeem heet — een klein detail met onevenredig veel effect op geloofwaardigheid, en typisch het soort precisie dat bij 'technisch onderlegd' past.

### 13. De privacyverklaring noemt alleen de Nederlandse Autoriteit Persoonsgegevens — geen woord over de Belgische Gegevensbeschermingsautoriteit, ook niet op de zorg-landingspagina die dataveiligheid als koopargument gebruikt {#de-belgische-klant-de-privacyverklaring-noemt-alleen-de-nederlandse-autoriteit-persoonsgegevens-geen-woord-over-de-belgische-gegevensbeschermingsautoriteit-ook-niet-op-de-zorg-landingspagina-die-dataveiligheid-als-koopargument-gebruikt}

**Persona:** Belgische zorginstelling die persoonsgegevens van eigen cliënten laat verwerken in het nieuwe systeem  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een Belgische zorgorganisatie — de expliciete doelgroep van /maatwerk-software/zorg — overweegt een maatwerksysteem waarin cliëntgegevens verwerkt worden. Haar functionaris gegevensbescherming leest hoofdstuk 11 van de privacyverklaring om te bepalen bij welke toezichthouder een klacht terechtkan als het misgaat.

**Trust/behoefte-trigger.** AVG-compliance is voor de zorgsector een harde eis, niet een nice-to-have — grensoverschrijdende gegevensverwerking roept specifiek de vraag op welke toezichthouder bevoegd is.

**Wat er nu misgaat.** Hoofdstuk 11 ('Jouw rechten', src/app/privacyverklaring/page.tsx regel 385-404, id="rechten") verwijst uitsluitend naar de 'Autoriteit Persoonsgegevens' met een link naar autoriteitpersoonsgegevens.nl — de Belgische Gegevensbeschermingsautoriteit (GBA/APD) wordt nergens genoemd, ook niet in de Engelse versie van dezelfde pagina (regel 630-647, id="your-rights"). Op /maatwerk-software/zorg wordt dataveiligheid wél als expliciet koopargument gebruikt ('Je data en code blijven van jou' — homepage FAQ, regel 237), maar zonder dat een Belgische zorgpartij weet welke toezichthouder in haar eigen land bevoegd is als het misgaat. Zodra de FAQ-uitbreiding uit case 4 op de sectorpagina's is gebouwd, is dit meteen de logische plek om dezelfde geruststelling te herhalen.

**Award-winning oplossing.** Voeg in hoofdstuk 11 van de privacyverklaring — beide taalversies, met dezelfde toggle die de pagina al heeft — één zin toe: 'Ben je gevestigd in België? Dan kun je via de samenwerkingsmechanismen van de AVG ook terecht bij de Belgische Gegevensbeschermingsautoriteit (GBA).' met link. Herhaal deze geruststelling kort in de nieuwe FAQ-sectie op /maatwerk-software/zorg en /maatwerk-software/logistiek (case 4), de twee sectoren waar dataverwerking het gevoeligst ligt — zodat het niet alleen in de kleine lettertjes staat, maar ook waar de koopbeslissing valt.

### 14. De directe merkstem — geen tonale differentiatie, geen hreflang — wordt ongetest aan elke bezoeker geserveerd, ook al is diplomatie in Belgische zakencultuur gemiddeld belangrijker vóór directe kritiek {#de-belgische-klant-de-directe-merkstem-geen-tonale-differentiatie-geen-hreflang-wordt-ongetest-aan-elke-bezoeker-geserveerd-ook-al-is-diplomatie-in-belgische-zakencultuur-gemiddeld-belangrijker-vr-directe-kritiek}

**Persona:** Belgische zakelijke lezer die de directe, ongefilterde toon van de site ervaart  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een Belgische directeur leest op /over-ons de hero-regel 'Ik bouw wat anderen alleen beschrijven' (src/app/over-ons/page.tsx, regel 105-107) en de VALUES-kaart 'DIRECTHEID: Beloofd is beloofd. Eén aanspreekpunt, korte lijnen, geen ruis.' (regel 12) — een toon die in Nederlandse zakelijke cultuur als zelfverzekerd en verfrissend wordt gelezen (PRODUCT.md noemt dit 'eigenzinnig eerlijk... geen ja-knikker'), maar in veel Belgische, vooral Vlaamse, zakelijke context eerder als bot kan overkomen vóórdat er een relatie is opgebouwd.

**Trust/behoefte-trigger.** Culturele verwachting rond toon: Belgische zakelijke communicatie hecht gemiddeld meer waarde aan relatieopbouw vóór directe kritiek, terwijl de kernbelofte van de site juist ongevraagde directheid als USP presenteert.

**Wat er nu misgaat.** Er is geen enkele vorm van taal- of tone-differentiatie tussen NL- en BE-bezoekers: layout.tsx zet de locale hard op 'nl_NL' (regel 70) en 'inLanguage: nl-NL' in de JSON-LD (regel 230), en alternates (regel 91-93) bevat alleen een canonical, geen hreflang nl-BE. Dezelfde, zeer directe copy wordt dus ongefilterd aan elke bezoeker getoond, zonder dat ooit getest is of een andere volgorde voor Belgische bezoekers beter converteert.

**Award-winning oplossing.** Voeg minimaal een technische hreflang nl-BE toe in layout.tsx alternates (quick win, geen risico). Verzacht daarna niet de kernstem zelf — directheid is de meest onderscheidende eigenschap uit PRODUCT.md en verwateren zou precies het anti-referentiepunt ('anonieme, logge IT-consultancy') dichterbij brengen. Test in plaats daarvan alleen de vólgorde: via de al aanwezige Cloudflare-edge geolocatie, toon Belgische bezoekers op /over-ons eerst één zin die concrete, lokale kennis van de Euregio toont (dezelfde soort alinea die /locaties/aken al heeft over cultuurverschillen) vóórdat de directe 'geen ja-knikker'-boodschap volgt. Directheid wordt zo verdiend door eerst specifieke kennis te tonen, in plaats van verzacht te worden — sluit aan bij Design Principle 1 (bewijs door precisie) in plaats van de eigenzinnigheid te verdunnen.

### 15. Dat Dynique een eenmanszaak is, staat nergens op /over-ons — de pagina die zichzelf 'de mens achter Dynique' noemt — maar duikt pas op in hoofdstuk 1 van de privacyverklaring {#de-belgische-klant-dat-dynique-een-eenmanszaak-is-staat-nergens-op-over-ons-de-pagina-die-zichzelf-de-mens-achter-dynique-noemt-maar-duikt-pas-op-in-hoofdstuk-1-van-de-privacyverklaring}

**Persona:** Belgische bedrijfsleider die de rechtsvorm van zijn toekomstige leverancier natrekt  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Nadat een eerste gesprek positief is verlopen, laat een Belgische bedrijfsleider zijn juridische adviseur de kleine lettertjes checken vóór een handtekening. Die vindt in de privacyverklaring (regel 186): 'Dynique is de handelsnaam van de eenmanszaak Creemers Inclusives.' Dit is de eerste plek op de hele site waar de rechtsvorm wordt genoemd.

**Trust/behoefte-trigger.** Continuïteitsrisico en aansprakelijkheid: bij een 'groter, weloverwogen besluit' (PRODUCT.md) wil een opdrachtgever vooraf weten met welke juridische entiteit hij een contract aangaat, niet dit toevallig ontdekken in een privacyclausule.

**Wat er nu misgaat.** Op /over-ons staat de PROMISE-sectie (src/app/over-ons/page.tsx, regel 17-21) met precies de drie beloftes die dit vertrouwen zouden moeten dragen — 'Eén aanspreekpunt' ('Geen accountmanagers of doorverwijzingen. Je praat met degene die het ook bouwt.'), 'Projectmatig en veilig' en 'Eerlijk advies' — maar geen van de drie benoemt de rechtsvorm die deze belofte praktisch waarmaakt. De enige plek waar 'eenmanszaak' valt is de privacyverklaring, een pagina die de meeste bezoekers pas ná besluitvorming lezen. Dat staat haaks op Design Principle 1 ('bewijs door precisie, niet door beloftes'): het meest concrete, verifieerbare feit over het bedrijf zelf wordt verstopt in plaats van vooropgesteld — terwijl de PROMISE-sectie zelf al impliciet over ditzelfde onderwerp gaat ('Je praat met degene die het ook bouwt').

**Award-winning oplossing.** Voeg een vierde kaart toe aan de bestaande PROMISE-sectie, in dezelfde visuele taal als de andere drie, die de rechtsvorm niet verstopt maar ombuigt tot bewijs: benoem expliciet dat Dynique een eenmanszaak is ('precies waarom je geen accountmanager krijgt') en koppel er direct de continuïteitsgarantie aan die een Belgische opdrachtgever zoekt — hoe code- en documentatie-overdracht contractueel is geborgd, en indien aanwezig een beroepsaansprakelijkheidsverzekering. Dat is exact 'eigenzinnig eerlijk' in de praktijk: iets benoemen vóórdat ernaar gevraagd wordt, op de pagina die zichzelf al 'de mens achter Dynique' noemt, in plaats van het te laten ontdekken in de kleine lettertjes.

---

## De mobiele gebruiker die snel oriënteert

### 1. Hamburgermenu en hero-pills zijn te klein om betrouwbaar te raken {#de-mobiele-gebruiker-die-snel-orinteert-hamburgermenu-en-hero-pills-zijn-te-klein-om-betrouwbaar-te-raken}

**Persona:** De mobiele gebruiker die snel oriënteert  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Een IT-verantwoordelijke van een installatiebedrijf loopt tussen twee afspraken door de werkplaats, telefoon in één hand, een collega die op hem wacht bij de bus. Hij probeert lopend naar 'Portfolio' te tikken via het hamburgermenu rechtsboven — de enige manier om op mobiel van pagina te wisselen. Hij mist de knop twee keer op rij en tikt de tweede keer per ongeluk op de DYNIQUE-logo-link ernaast, waardoor de pagina herlaadt en hij weer bovenaan begint.

**Trust/behoefte-trigger.** Wil in een paar tikken naar bewijs (portfolio) navigeren zonder dat de site 'niet reageert' aanvoelt — een gemiste tap op de énige hoofdnavigatie voedt meteen twijfel over precies de technische kwaliteit die Dynique claimt te leveren ('technisch onderlegd, doordacht en precies', PRODUCT.md).

**Wat er nu misgaat.** Live gemeten op 375×812px (getBoundingClientRect, geen schatting): de hamburgerknop in src/components/Header.tsx (regels 171-189, alleen `py-2` als verticale padding) is 76,3×31px — de hoogte zit dus 13px onder de 44px-ondergrens van zowel Apple HIG als Material Design. De vier ronddraaiende hero-pills in src/app/page.tsx (regels 373-383) zijn stuk voor stuk exact 30px hoog, ongeacht labellengte ('MAATWERK SOFTWARE' 169×30px, 'WEB APPLICATIES' 142×30px). Beide zijn de enige interactieve elementen op de eerste viewport na de hero-CTA's, en de hamburgerknop is op élke pagina van de site de enige manier om te navigeren — er is geen alternatieve mobiele nav (geen bottom-bar, geen swipe-menu) die dit opvangt.

**Award-winning oplossing.** Los dit niet op met 'iets meer padding', maar met dezelfde precisie die de site claimt te verkopen. Vervang de vier losse hero-pills door één doorlopende, horizontaal scrollbare 'capability rail': één 48px-hoge segmented control waarin elk label een volwaardig, robuust tapgebied is in plaats van vier fragiele losse chips — visueel nog steeds licht en premium, functioneel onbreekbaar. Voor de hamburgerknop: maak niet het icoontje groter, maar het volledige rechterkwadrant van de headerbalk (van logo tot rand, volledige `h-16`) tot geldig tapgebied via een onzichtbare `::before`-hitbox, zodat een tap altijd raak is ongeacht waar in die zone hij landt. Frame dit intern niet als bugfix maar als bewijsmoment: een technische koper die merkt dat interface-elementen millimeter-precies zijn afgesteld, leest dat onbewust als bevestiging van belief-ladder stap 1 ('er zit echte technische kennis achter') — precisie in de kleinste details is zelf het bewijs.

### 2. Niet-overslaanbare intro-animatie verbruikt een groot deel van het beschikbare tijdsbudget — ook voor wie de link al kreeg doorgestuurd {#de-mobiele-gebruiker-die-snel-orinteert-niet-overslaanbare-intro-animatie-verbruikt-een-groot-deel-van-het-beschikbare-tijdsbudget-ook-voor-wie-de-link-al-kreeg-doorgestuurd}

**Persona:** De mobiele gebruiker die snel oriënteert  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Een facilitair manager staat op de parkeerplaats tussen een oplevering en haar volgende afspraak. Een collega stuurde haar zonet de Dynique-link via WhatsApp ('kijk deze partij eens, past bij ons pand-project') met een korte aanbeveling erbij. Ze heeft hooguit 30-45 seconden voordat ze weer moet rijden en tikt de link open in een gloednieuwe browsertab.

**Trust/behoefte-trigger.** Moet binnen enkele seconden de kernbelofte ('maatwerk software') en de eerste indruk van professionaliteit kunnen beoordelen — ze komt al met vertrouwen binnen (een collega vouwde het voor), en elke seconde die niet aan die inhoud gaat is verspild goodwill.

**Wat er nu misgaat.** src/app/page.tsx (regels 85-97): een volledig-scherm laadanimatie van 2200ms speelt bij elke nieuwe sessie. De gate is `sessionStorage.getItem('dq-intro-seen')` — dat betekent dat elke nieuwe tab, ook op een toestel dat de site al tien keer eerder zag, opnieuw als 'eerste bezoek' telt. Precies het scenario van een doorgestuurde WhatsApp-link (geopend in een nieuwe tab) triggert dus gegarandeerd de volle animatie. Er is geen click-, tap- of scroll-to-skip handler — de enige uitzondering is `prefers-reduced-motion`. Op een tijdsbudget van 30-45 seconden is dat 5-7% dat volledig opgaat aan een merkmoment vóórdat de hero met de eigenlijke propositie zichtbaar wordt, voor precies de bezoeker die al binnenkomt met vertrouwen en dus het minst tijd te verliezen heeft.

**Award-winning oplossing.** Maak de loader eerst gewoon overslaanbaar: elke tap of scroll-poging tijdens de 2200ms triggert dezelfde `setFadeOut(true); setLoading(false)`-logica die de timers al aanroepen (regels 94-95). Ga daarna een stap verder dan een generieke skip-knop: lees `document.referrer` (of een simpele UTM-marker) en sla de intro sowieso over wanneer een bezoeker binnenkomt via een verwijzing van een derde — WhatsApp, LinkedIn, e-mail — in plaats van via directe/organische navigatie. De redenering: een merkritueel is waardevol voor een koude, eerste ontdekking van het merk; het is pure wrijving voor iemand die al binnenkomt op aanbeveling van een collega. Dat onderscheid — niet 'korter maken voor iedereen' maar 'weglaten waar het niets toevoegt' — is precies het soort meedenken dat PRODUCT.md als kernonderscheid noemt.

### 3. De vaste WhatsApp-knop bedekt letterlijk het merkstatement dat de site zelf als hét onthoudmoment aanwijst {#de-mobiele-gebruiker-die-snel-orinteert-de-vaste-whatsapp-knop-bedekt-letterlijk-het-merkstatement-dat-de-site-zelf-als-ht-onthoudmoment-aanwijst}

**Persona:** De mobiele gebruiker die snel oriënteert  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een HR-directeur van een zorginstelling scrolt vlot door de manifest-sectie terwijl ze wacht tot haar volgende Teams-gesprek begint. Precies op het moment dat de kernzin in beeld komt, valt haar oog niet op de tekst maar op een groene cirkel die er half overheen zit.

**Trust/behoefte-trigger.** Wil de merkbelofte in één keer kunnen lezen zonder UI die in de weg zit — dit is letterlijk de zin die PRODUCT.md zelf aanwijst als 'de ene zin die een bezoeker na 10 seconden onthoudt'.

**Wat er nu misgaat.** Live geverifieerd op 375×812px, niet geschat: bij scrollY≈800px staat de headline 'Dynamisch in aanpak. Uniek in resultaat.' (src/app/page.tsx regel 437) zó gepositioneerd dat de laatste letters van 'resultaat.' volledig verdwijnen achter de `fixed bottom-8 right-8` WhatsApp-knop (regels 307-326, 64×64px). Een screenshot op exact die scrollpositie toont het woord afgekapt tot 'resultaa[t.]' — onleesbaar. Verderop in dezelfde sessie is hetzelfde gecontroleerd bij de voor/na-demo: ook daar valt de knop over content. Dit is dus geen incident maar een structureel gevolg van een element dat op élke scrollpositie evenveel schermruimte claimt, zonder ooit te kijken wat eronder staat.

**Award-winning oplossing.** Los dit niet op met een nieuw interactiepatroon, maar met een patroon dat al in de codebase bestaat: de site heeft al een `CornerMark`-component (page.tsx regels 42-64) — een stil hoek-accent dat op meerdere secties als rustig merksignatuur wordt gebruikt. Voeg een IntersectionObserver toe die detecteert wanneer een `.anim`-tekstblok de FAB-zone (90px rond de hoek) kruist; op dat moment krimpt de WhatsApp-knop via een 300ms-transitie niet naar een generieke kleine stip, maar naar exact hetzelfde corner-mark-motief dat de rest van de site al gebruikt, en herstelt hij zodra de tekst voorbij is. Zo wordt een bug opgelost mét een bestaand, herkenbaar stukje merktaal in plaats van er een nieuwe interactie bovenop te stapelen — precies het soort hergebruik dat een jury als doordacht in plaats van gepatcht beoordeelt.

### 4. De voor/na-bewijsdemo reageert niet op hoe mensen op mobiel daadwerkelijk scrollen {#de-mobiele-gebruiker-die-snel-orinteert-de-voorna-bewijsdemo-reageert-niet-op-hoe-mensen-op-mobiel-daadwerkelijk-scrollen}

**Persona:** De mobiele gebruiker die snel oriënteert  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een logistiek planner flitst met één vingerbeweging door de hele homepage tijdens een koffiepauze — precies het scrolgedrag van iemand die in 30 seconden wil weten of dit relevant is. Zijn duim passeert de voor/na-sectie in één vloeiende swipe, exact het bewijsmoment dat hem had moeten overtuigen.

**Trust/behoefte-trigger.** PRODUCT.md wijst deze scroll-scrubbed demo expliciet aan als hét concrete bewijs (belief-ladder stap 2-3) dat Dynique niet alleen bouwt wat gevraagd wordt maar ook meedenkt — als dit bewijsmoment onbedoeld wordt overgeslagen, valt een kernonderdeel van de overtuigingsstrategie stil weg zonder dat de bezoeker het merkt.

**Wat er nu misgaat.** Code-analyse bevestigt: `useBeforeAfterScrub` (src/components/processen/Visuals.tsx regels 255-280) berekent de VOOR/NA-toestand (`--p`) uitsluitend uit de scrollpositie van de pagina — niet uit aanraking. `.ba-handle` (regels 359-373) heeft de visuele vorm van een sleepknop (ronde knop, gecentreerd, met schaduw) maar geen enkele touchstart/touchmove-listener; de bijbehorende `.ba-divider` (regel 347-358) heeft zelfs `pointer-events: none`. Bij een normale, snelle flick-scroll — het gebruikelijke mobiele gedrag van deze persona — springt `--p` in één beweging van 0 naar 1 zonder dat de tussenliggende voor/na-vergelijking ooit zichtbaar wordt. De knop suggereert dus interactiviteit die er niet is.

**Award-winning oplossing.** Los niet alleen de touch-handler op, til de hele sectie naar het niveau van de Apple-productpagina's waar dit patroon vandaan komt. Maak `.ba-handle` een echte pointer-gestuurde control (`pointermove`, werkt voor touch én muis) die `--p` direct zet op basis van de horizontale vingerpositie. Pin de sectie vervolgens met `position: sticky` binnen een container van vaste scrollhoogte, zodat scrollen het scrubben stuurt met 1:1-precisie in plaats van in één flick voorbij te schieten — de bezoeker kán de vergelijking dan niet meer per ongeluk missen, of hij nu sleept of scrolt. Begrens de container met `overflow: hidden` zodat de knop nooit half buiten beeld hangt bij p=1.

### 5. Vier previewvideo's laden ongevraagd 3,7MB tijdens het scrollen langs de portfoliosectie {#de-mobiele-gebruiker-die-snel-orinteert-vier-previewvideos-laden-ongevraagd-37mb-tijdens-het-scrollen-langs-de-portfoliosectie}

**Persona:** De mobiele gebruiker die snel oriënteert  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een inkoper bekijkt de site vanuit de trein op wisselende 4G-dekking, tussen twee stations in. Zodra ze langs de portfoliosectie scrolt, beginnen vier videofragmenten tegelijk te laden — precies op het moment dat haar verbinding hapert bij een tunnel.

**Trust/behoefte-trigger.** Verwacht een site die zich aanpast aan mobiele omstandigheden; een site die zichtbaar hapert of traag laadt bevestigt direct het wantrouwen dat 'dit voelt niet als een technisch onderlegde partij' — ironisch genoeg net op de plek (portfolio) waar ze technisch vakmanschap moest gaan bewijzen.

**Wat er nu misgaat.** Bestandsgroottes zijn live gecontroleerd, geen schatting: `public/rsc/chefsconnect/preview.mp4` (517KB), `public/rsc/auwtaelse/preview.mp4` (2,53MB), `public/rsc/ijssalon/preview.mp4` (448KB) en `public/rsc/stacykohnen/preview.mp4` (240KB) — samen exact 3,7MB. Zodra de IntersectionObserver in `PortfolioVideo` (src/app/page.tsx regels 17-40, `rootMargin: '200px'`) een kaart detecteert, wordt `.play()` direct aangeroepen. Er is geen check op schermbreedte, `navigator.connection.saveData` of `effectiveType` voordat dit gebeurt — puur voorbij scrollen triggert de download, op elk toestel en elke verbinding.

**Award-winning oplossing.** Check in `PortfolioVideo` vóór `.play()` op `window.matchMedia('(max-width: 768px)').matches` of `navigator.connection?.saveData`/`effectiveType`. Toon op mobiel alleen de statische poster (het bestaande `hero.webp`) met een expliciete tap-to-play-knop die pas dán het bijbehorende `preview.mp4` laadt — dezelfde bestanden, alleen op uitnodiging in plaats van automatisch. Bewaar de huidige hover/inview-autoplay voor desktop, waar bandbreedte zelden het probleem is. Dit is exact het soort context-bewuste keuze dat het verschil maakt tussen 'we hebben video's toegevoegd' en 'we hebben nagedacht over wie deze video's daadwerkelijk mobiel bekijkt'.

### 6. Scroll-reveal-animaties laten hele secties zwart ogen bij een gerichte sprong naar een sectie {#de-mobiele-gebruiker-die-snel-orinteert-scroll-reveal-animaties-laten-hele-secties-zwart-ogen-bij-een-gerichte-sprong-naar-een-sectie}

**Persona:** De mobiele gebruiker die snel oriënteert  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een salesmanager scrolt met een snelle duimbeweging naar de Adviseur-sectie waar een collega het over had. Hij komt op de juiste scrollpositie terecht, maar het scherm blijft eerst grotendeels leeg voordat kop en eerste vraag verschijnen.

**Trust/behoefte-trigger.** Een 'leeg' scherm na een gerichte scrollactie leest voor een ongeduldige bezoeker als 'de site is stuk of nog aan het laden' — precies het moment waarop deze persona afhaakt in plaats van doorleest.

**Wat er nu misgaat.** Live gereproduceerd door de #advies-sectie in beeld te scrollen: direct na het scrollen toont het scherm alleen het label 'DE ADVISEUR · 60 SECONDEN' op zeer lage opacity, terwijl de kop 'Niet verkopen. Adviseren.' en de eerste vraag nog volledig onzichtbaar zijn — pas na ruim een seconde faden ze in. In de code komt dit overeen met de `.anim`-klasse in src/app/page.tsx (transitieduur 0,9s, IntersectionObserver-threshold 0,08) en `.adv-reveal` in src/components/Advisor.tsx (regels 562-577, transitieduur 1,1s met 0,12-0,26s vertraging per element). Bij een snelle flick-scroll — het normale mobiele scrolgedrag van deze persona — ontstaat zo een waarneembare 'kapotte pagina'-flits vóór de content verschijnt.

**Award-winning oplossing.** Verkort de transitieduur op mobiel naar circa 300-350ms en verruim de IntersectionObserver-rootMargin naar bijvoorbeeld '0px 0px 300px 0px', zodat content al begint te verschijnen ruim voordat hij volledig in beeld scrollt. Voeg daarnaast een `matchMedia('(max-width: 768px)')`-kortsluiting toe die de startstatus `opacity: 0` op mobiel overslaat: content verschijnt daar direct in plaats van te faden. De fade is op desktop, bij een langzame, bewuste scroll, een polish-moment; op mobiele scrolsnelheden is diezelfde fade een last, geen sierraad — en dat onderscheid verdient een aparte, bewuste code-tak in plaats van één transitie-instelling voor beide situaties.

### 7. Twee tegenstrijdige reactietijden staan op tenminste twee pagina's binnen dezelfde scrollbeweging onder elkaar {#de-mobiele-gebruiker-die-snel-orinteert-twee-tegenstrijdige-reactietijden-staan-op-tenminste-twee-paginas-binnen-dezelfde-scrollbeweging-onder-elkaar}

**Persona:** De mobiele gebruiker die snel oriënteert  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** De eigenaar van een familiebedrijf checkt vlak voor het versturen van een offerteaanvraag snel 'hoe snel reageren ze eigenlijk' door zowel de contactsectie op de homepage als de losse /contact-pagina te scannen op zijn telefoon — een typische laatste-check voor een weloverwogen 30-seconden-beslisser (PRODUCT.md noemt dit expliciet het profiel van de nieuwe, grotere doelgroep).

**Trust/behoefte-trigger.** Wil een concrete, geloofwaardige verwachting over reactiesnelheid — juist bij een groter, weloverwogen besluit is een tegenstrijdige claim een directe knik naar 'slordig', het tegenovergestelde van de geclaimde eigenschap 'doordacht en precies'.

**Wat er nu misgaat.** Dit is geen eenmalige tekstfout maar een herhaald patroon, bevestigd op twee plekken. Op de homepage (src/app/page.tsx) staat regel 1229 'We reageren altijd binnen 24 uur, meestal veel eerder' direct boven regel 1235 'REACTIETIJD — Binnen 2 uur (ma–za, 9–20u)' — beide in dezelfde linkerkolom, zes JSX-regels uit elkaar, dus zichtbaar in één scrollbeweging op elke schermbreedte. Op src/app/contact/page.tsx staat exact hetzelfde patroon: regel 134 belooft '24 uur — meestal veel eerder', regel 13 en regel 19 beloven allebei '2 uur'. Twee verschillende cijfers, op twee pagina's, in dezelfde adem.

**Award-winning oplossing.** Kies niet zomaar één cijfer, maar de meest precieze, eerlijke formulering die beide waarheden verzoent — en maak daar bewust een bewijsmoment van in plaats van een verborgen fix. Vervang alle vier de plekken door één consistente zin: 'Doordeweeks (ma–za, 9–20u) reageren we binnen 2 uur; daarbuiten uiterlijk de volgende ochtend — altijd binnen 24 uur.' Dat is specifieker dan een rond marketinggetal, legt uit waaróm er twee cijfers zijn in plaats van ze te verbergen, en is precies het soort concrete, ongepolijste eerlijkheid die bij 'eigenzinnig eerlijk' past — een tegenstrijdigheid wordt zo het bewijs van precisie in plaats van de ontkrachting ervan.

### 8. Sectorbewijs (bouw, zorg, logistiek, installatie) staat pas ná de hele processen-pagina, en is vanaf mobiele navigatie helemaal onvindbaar {#de-mobiele-gebruiker-die-snel-orinteert-sectorbewijs-bouw-zorg-logistiek-installatie-staat-pas-n-de-hele-processen-pagina-en-is-vanaf-mobiele-navigatie-helemaal-onvindbaar}

**Persona:** De mobiele gebruiker die snel oriënteert  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een projectleider bij een bouwbedrijf zoekt specifiek naar bewijs dat Dynique de bouwsector begrijpt, na een Google-zoekopdracht als 'maatwerk software bouwbedrijf' vanaf zijn telefoon in de bouwkeet.

**Trust/behoefte-trigger.** Wil herkenning zien ('ze kennen mijn branche') voordat hij tijd investeert in een gesprek — PRODUCT.md noemt de sectorpagina's expliciet als 'dieper-in-de-funnel bewijs' voor precies dit type bezoeker, en zegt letterlijk dat ze 'dienen als bewijs, niet als apart publiek'.

**Wat er nu misgaat.** De sectoren-sectie (src/app/diensten/processen/page.tsx, regels 578-613, met de vier kaarten in regels 588-608) staat direct vóór de laatste sectie van de pagina — het leadformulier (regel 615 e.v.). Een mobiele bezoeker moet dus: Home → hamburgermenu → Diensten → Maatwerk Software → door bijna de hele processen-pagina scrollen (procestraject, kostenkaarten, alles) vóór hij de bouw-kaart bereikt. Ondertussen staat geen van de vier sectoren in `dienstenItems` (Header.tsx regels 10-15, alle vier generieke diensten) of in `mobileNav` (regels 17-24, geen enkele sectorverwijzing) — er is dus vanaf geen enkele pagina een directe route van minder dan vier stappen naar sectorbewijs.

**Award-winning oplossing.** Voeg in het mobiele menu, direct onder 'DIENSTEN — OVERZICHT' (Header.tsx regels 230-254), een horizontaal scrollbare rij compacte chips toe — 'Bouw · Zorg · Logistiek · Installatie' — die rechtstreeks naar de vier `/maatwerk-software/*`-pagina's linken vanaf élke pagina van de site, niet alleen vanaf processen. Zo bereikt een sector-specifieke bezoeker het bewijs dat hem overtuigt in één tik in plaats van na een scrolltocht door content die voor hem niet relevant is, terwijl de bestaande sectoren-sectie op de processen-pagina intact blijft als aanvullend bewijs voor wie via die route binnenkomt.

### 9. Auwt Aelse heeft een werkende preview op de homepage, maar oogt onafgemaakt op de portfolio-index — de plek waar juist méér bewijs wordt gezocht {#de-mobiele-gebruiker-die-snel-orinteert-auwt-aelse-heeft-een-werkende-preview-op-de-homepage-maar-oogt-onafgemaakt-op-de-portfolio-index-de-plek-waar-juist-mr-bewijs-wordt-gezocht}

**Persona:** De mobiele gebruiker die snel oriënteert  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een bezoeker wordt op de homepage getriggerd door de autoplay-preview van Auwt Aelse, tikt vervolgens op 'ALLE CASES' om meer bewijs te zoeken voordat hij besluit contact op te nemen.

**Trust/behoefte-trigger.** Zoekt actief naar méér bewijs (belief-ladder stap 3 uit PRODUCT.md) — het moment waarop hij van 'geïnteresseerd' naar 'overtuigd' zou moeten bewegen, wordt in plaats daarvan een moment van twijfel over dezelfde case die hem net overtuigde.

**Wat er nu misgaat.** Vergelijking van de twee databronnen, regel voor regel: in src/app/page.tsx (homepage, regel 204) heeft het Auwt Aelse-object `video: '/rsc/auwtaelse/preview.mp4'`. In src/app/portfolio/page.tsx (regels 34-44, de portfolio-indexpagina zelf) ontbreekt die `video`-property volledig bij exact hetzelfde project — één blok hoger, bij Chefs Connect (regel 28), staat de `video`-property wél. Het `Project`-type staat dit expliciet toe (`video?: string`, regel 14), dus het is geen technische beperking maar een vergeten regel. Het gevolg: dezelfde case valt op de portfolio-index terug op de 'VOORVERTONING VOLGT'-placeholder (regel 143) terwijl `public/rsc/auwtaelse/preview.mp4` (2,5MB, live gecontroleerd) al lang bestaat en op de homepage al foutloos afspeelt.

**Award-winning oplossing.** Eén regel toevoegen: `video: '/rsc/auwtaelse/preview.mp4'` in het project-object van Auwt Aelse in src/app/portfolio/page.tsx, exact zoals bij Chefs Connect ernaast. Geen herontwerp nodig — alleen ervoor zorgen dat dezelfde case overal dezelfde, al-werkende preview toont in plaats van een ogenschijnlijke downgrade precies op de plek waar een twijfelende bezoeker een tandje méér overtuiging zoekt.

### 10. De gratis checklist belooft e-maillevering die niet bestaat — en de business zelf houdt aan het formulier geen enkele lead over {#de-mobiele-gebruiker-die-snel-orinteert-de-gratis-checklist-belooft-e-maillevering-die-niet-bestaat-en-de-business-zelf-houdt-aan-het-formulier-geen-enkele-lead-over}

**Persona:** De mobiele gebruiker die snel oriënteert  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een bezoeker die nog niet het volledige projectformulier wil invullen, ziet onderaan elke pagina (footer, kolom 'ONTDEK') de link 'Gratis checklist' als kleine, vrijblijvende eerste stap en tikt erop vanaf zijn telefoon. Hij vult naam en e-mail in en klikt op 'Download de checklist'.

**Trust/behoefte-trigger.** Wil een laagdrempelige manier om 'iets' terug te krijgen zonder meteen een salesgesprek aan te gaan — exact het gedrag van een oriënterende bezoeker die nog niet klaar is voor het grote contactformulier, en die zijn e-mailadres achterlaat in ruil voor een concreet iets.

**Wat er nu misgaat.** Nauwkeuriger dan het lijkt: de bezoeker ontvangt in dit geval wél de PDF — src/app/gratis-checklist/page.tsx (regels 41-46) triggert een echte browserdownload van het bestaande bestand `/dynique-website-checklist-2026.pdf` en stuurt daarna door naar `/bedankt`. Het probleem zit dieper dan een lege belofte: de tekst 'Direct in je inbox' (regel 106) en 'ontvang de PDF direct per mail' (regel 113) is volledig onwaar — er wordt nooit een e-mail verstuurd, met de code zelf als getuige (`// In productie: stuur naam + e-mail ook naar API/Mailchimp/Resend.`, regel 39). Maar het zwaardere verlies is voor Dynique zelf: het `email`-veld (regel 20, verplicht ingevuld) wordt uitsluitend gebruikt voor een `!email`-truthy-check (regel 37) en daarna nooit meer aangeraakt — niet opgeslagen, niet verstuurd, zelfs niet doorgegeven aan `/bedankt` (regel 49 geeft alleen `name` door in de query string). Dit specifieke leadmagneet-formulier — bedoeld om juist de niet-sales-ready bezoeker vast te leggen — levert dus letterlijk nul bruikbare leads op voor het bedrijf, ongeacht hoeveel mensen op 'Download' klikken.

**Award-winning oplossing.** Koppel het formulier vóór de volgende release aan een echte leadcapture-backend (Formspree, Resend of een Cloudflare Function, zoals het interne launch-plan al aanbeveelt) zodat naam én e-mail daadwerkelijk ergens landen. Repareer tegelijk de tekst: verwijder 'Direct in je inbox' en 'direct per mail' — het bestaande gedrag (meteen downloaden in de browser) is al sneller en eerlijker om te beloven. Ga vervolgens een stap verder dan alleen de lek dichten: gebruik na de download het kanaal dat op deze site al aantoonbaar werkt — toon een subtiele vervolgstap 'Ergens vastgelopen op deze punten? Stuur ons een appje' met een voorgevulde WhatsApp-boodschap die verwijst naar de checklist. Dat is geen generieke e-mail-nurture-flow zoals een grote IT-consultancy zou opzetten, maar een persoonlijk, direct vervolg — precies het ontwerpprincipe uit PRODUCT.md ('persoonlijk, niet anoniem').

### 11. De vaste WhatsApp-knop verbergt het laatste woord van de privacyverklaring-link onderaan elke pagina {#de-mobiele-gebruiker-die-snel-orinteert-de-vaste-whatsapp-knop-verbergt-het-laatste-woord-van-de-privacyverklaring-link-onderaan-elke-pagina}

**Persona:** De mobiele gebruiker die snel oriënteert  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een bezoeker scrolt door tot het einde van de pagina — het typische 'ik heb alles gezien'-moment van een snelle scanner — en komt bij de footer met bedrijfsgegevens en de privacyverklaring-link uit.

**Trust/behoefte-trigger.** Verwacht dat juridische/vertrouwenselementen (KVK-nummer, privacyverklaring) helder leesbaar zijn als laatste geruststelling voordat hij besluit contact op te nemen — een half weggemoffeld juridisch document werkt averechts op precies het vertrouwen dat het moet opbouwen.

**Wat er nu misgaat.** Live gecontroleerd door helemaal naar de bodem van de homepage te scrollen op 375×812px: de `fixed bottom-8 right-8` WhatsApp-knop (src/app/page.tsx regels 307-326) blijft ook onderaan de pagina op zijn plek staan, en de laatste letters van 'PRIVACYVERKLARING' verdwijnen zichtbaar achter de groene cirkel en zijn transparante hover-halo eromheen. Dit is het allerlaatste element dat een scrollende bezoeker op elke pagina van de site te zien krijgt — en het wordt gedeeltelijk aan het zicht onttrokken door een decoratieve chatknop die geen enkele context van de footer meeneemt.

**Award-winning oplossing.** Detecteer met dezelfde IntersectionObserver-aanpak als bij de manifest-sectie (case elders in dit rapport) wanneer `<Footer />` in beeld komt, en laat de knop op dat moment overgaan naar hetzelfde `CornerMark`-motief (page.tsx regels 42-64) dat al elders in de site wordt gebruikt, in plaats van hem simpelweg te verplaatsen naar `position: absolute`. Eén herbruikbare collision-aware component lost dan zowel dit geval als het manifest-overlap-geval op, met precies dezelfde, al-bestaande visuele taal — consistenter en goedkoper te bouwen dan twee losse patches.

### 12. WhatsApp als enig permanent zichtbaar contactkanaal spreekt de oude doelgroep aan, niet de nieuwe {#de-mobiele-gebruiker-die-snel-orinteert-whatsapp-als-enig-permanent-zichtbaar-contactkanaal-spreekt-de-oude-doelgroep-aan-niet-de-nieuwe}

**Persona:** De mobiele gebruiker die snel oriënteert  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** De CFO van een middelgroot logistiek bedrijf — precies het type 'grotere bedrijven in Nederland en België' dat PRODUCT.md als de nieuwe doelgroep noemt, met 'hoger budget, meer behoefte aan bewijs van technische betrouwbaarheid' — bekijkt de site op zijn telefoon en ziet op elke pagina één permanent zichtbaar contact-element: een groene consumenten-WhatsApp-bubbel.

**Trust/behoefte-trigger.** PRODUCT.md's anti-referentie is expliciet een 'koud, onpersoonlijk IT-consultancy-gevoel' — maar het omgekeerde risico bestaat evengoed voor déze specifieke, net-heropositioneerde doelgroep: een uitsluitend-WhatsApp-uitstraling kan bij een formelere, grotere B2B-koper juist overkomen als 'klein, informeel eenmansbedrijf', wat de technische geloofwaardigheid ondermijnt die de rest van de rebrand net probeert op te bouwen.

**Wat er nu misgaat.** Op elke pagina is de enige persistente, altijd-in-beeld quick-contact-actie de WhatsApp-FAB (src/app/page.tsx regels 307-326). Nochtans presenteert de site zelf, in de contactsectie (regels 1233-1236), telefoon, e-mail én reactietijd als drie gelijkwaardige kanalen — daar is WhatsApp zelfs geen van de vier genoemde opties. De mismatch is dus niet dat WhatsApp ontbreekt, maar dat het enige kanaal dat de site permanent op elk schermmoment toont net het kanaal is dat de site zelf, in haar eigen contactsectie, niet als eerste keuze presenteert.

**Award-winning oplossing.** Maak van de vaste knop op mobiel een compacte uitklap-tray die exact de drie kanalen weerspiegelt die de contactsectie al gelijkwaardig noemt: één tik op de FAB toont 'WhatsApp', 'Bel direct' (`tel:+31624572572`) en 'Mail' (`mailto:info@dynique.nl`) als drie gestapelde opties. Dit voegt geen nieuw contactkanaal toe — het maakt de bestaande, al-bewust-gekozen gelijkwaardigheid uit de contactsectie zichtbaar op het enige moment dat een bezoeker die daadwerkelijk gebruikt: wanneer hij overweegt te reageren.

### 13. Een onzichtbare mousemove-parallax blijft op elk mobiel toestel oneindig doorrekenen, zonder dat er ooit iets te zien is {#de-mobiele-gebruiker-die-snel-orinteert-een-onzichtbare-mousemove-parallax-blijft-op-elk-mobiel-toestel-oneindig-doorrekenen-zonder-dat-er-ooit-iets-te-zien-is}

**Persona:** De mobiele gebruiker die snel oriënteert  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een bezoeker laat de site langere tijd open staan als achtergrondtabblad terwijl hij een WhatsApp-bericht typt naar een collega over wat hij net gezien heeft — een heel normaal moment binnen deze 'tussen twee dingen door'-persona.

**Trust/behoefte-trigger.** Verwacht niet expliciet iets, maar ervaart indirect het gevolg: een telefoon die warmer aanvoelt of sneller batterij verliest draagt bij aan een vaag 'deze site voelt niet soepel' gevoel — en juist deze doelgroep (technisch onderlegde beslissers, PRODUCT.md) heeft een grotere kans om dit soort dingen daadwerkelijk op te merken of collega's met IT-achtergrond te hebben die dat wel doen.

**Wat er nu misgaat.** src/app/page.tsx (regels 122-148): een `requestAnimationFrame`-lus berekent continu een parallax-transform voor drie decoratieve orbs op basis van de muispositie. Op touchapparaten vuurt `mousemove` nooit, dus `cx`/`cy` blijven voor de hele sessie bevroren op het scherm-midden — de lus blijft niettemin 60 keer per seconde draaien en een transform toepassen op drie elementen, voor een effect dat op mobiel nooit zichtbaar wordt en dus nooit hoefde te draaien.

**Award-winning oplossing.** Dit is geen op zichzelf staand bugje — het is hetzelfde onderliggende patroon als de niet-pauzerende hero-interval (elders in dit rapport): effecten die blijven draaien ongeacht of ze omstandigheden ooit zichtbaar/toepasselijk zijn. Los beide in één keer op met één herbruikbare hook, bijvoorbeeld `usePointerFineEffect` die intern `window.matchMedia('(pointer: fine)').matches` checkt vóór het starten van mousemove/rAF-lussen, gecombineerd met een `usePageVisible`-variant voor intervallen die stoppen zodra `document.hidden` waar is. Eén klein, gedeeld stukje infrastructuur repareert dan zowel de orb-parallax als de hero-woordwissel (en is meteen herbruikbaar voor toekomstige effecten) — precies het soort systemische blik die het verschil maakt tussen twee losse patches en één doordachte oplossing.

### 14. De 'Adviseur'-quiz duwt de eerste vraag onder de vouw met een groot sier-cijfer dat niets functioneels toevoegt {#de-mobiele-gebruiker-die-snel-orinteert-de-adviseur-quiz-duwt-de-eerste-vraag-onder-de-vouw-met-een-groot-sier-cijfer-dat-niets-functioneels-toevoegt}

**Persona:** De mobiele gebruiker die snel oriënteert  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een ondernemer die net getriggerd is door de belofte 'De Adviseur · 60 seconden' scrolt naar de quiz om snel een antwoord te krijgen — hij verwacht direct een vraag te zien, in lijn met de belofte van snelheid.

**Trust/behoefte-trigger.** De quiz positioneert zichzelf expliciet als hét snelle, laagdrempelige instrument voor een oriënterende bezoeker ('ook als dat betekent dat je nog niets hoeft te laten bouwen') — maar de eerste indruk moet dan ook daadwerkelijk snel aanvoelen, niet vertraagd door decoratie.

**Wat er nu misgaat.** Live gereproduceerd op 375×812px door recht naar de #advies-sectie te springen: het scherm toont eerst de kop 'Niet verkopen. Adviseren.' en de introtekst, gevolgd door het label 'SITUATIE' met een groot ghost-cijfer '01' — pas daaronder, grotendeels buiten beeld, verschijnt de eerste echte vraag 'Waar loop je nu tegenaan?' met de antwoordopties nog verder naar beneden. In de code komt dit overeen met `.adv-num` (src/components/Advisor.tsx regel 614-618, `clamp(96px, 13vw, 168px)` — op 375px is 13vw slechts ~49px, dus de ondergrens van 96px wordt altijd gebruikt) gecombineerd met de kolompadding `p-8` (regel 298). Het decoratieve cijfer neemt zo meer verticale ruimte in dan de functionele vraag zelf, in een sectie die zichzelf presenteert als iets dat in '60 seconden' klaar is.

**Award-winning oplossing.** Verklein niet alleen het cijfer — geef het op mobiel een andere, functionelere rol. Vervang de gigantische ghost-'01' op schermen onder 480px door een compacte voortgangsrail bovenaan de kaart: '01 ●○○○ 04', die in een fractie van de ruimte laat zien wáár de bezoeker zich in de vier vragen bevindt — iets wat het huidige sier-cijfer helemaal niet communiceert. Verklein daarnaast de kolompadding (`p-8` → `p-6`) zodat vraag én eerste antwoordoptie zonder scrollen zichtbaar zijn. Zo wordt een liability (een decoratief element dat ruimte opeet) een asset (een functionele voortgangsindicator) — en voelt de quiz meteen zo snel als hij zich aanprijst.

### 15. Ronddraaiende hero-tekst blijft animeren ongeacht scrollpositie of tabwissel {#de-mobiele-gebruiker-die-snel-orinteert-ronddraaiende-hero-tekst-blijft-animeren-ongeacht-scrollpositie-of-tabwissel}

**Persona:** De mobiele gebruiker die snel oriënteert  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een bezoeker tikt op de WhatsApp-knop in de hero, wisselt naar de WhatsApp-app om het bericht af te maken, en komt na een halve minuut terug naar het browsertabblad — de hero-sectie staat dan nog steeds bovenaan, nog altijd woorden aan het wisselen die niemand las terwijl het tabblad op de achtergrond stond.

**Trust/behoefte-trigger.** Verwacht impliciet dat een site die zichzelf technisch onderlegd noemt geen onnodig werk blijft verrichten zodra er niemand kijkt — een subtiele maar reële indicator van technische zorgvuldigheid voor precies de doelgroep die daar oog voor heeft.

**Wat er nu misgaat.** De `setInterval` die het ronddraaiende hero-woord elke 2600ms wisselt (src/app/page.tsx regel 112-115, `heroServices`: 'MAATWERK SOFTWARE' → 'WEB APPLICATIES' → 'DIGITALE SYSTEMEN' → 'PROCESSEN OP MAAT') blijft onvoorwaardelijk doorlopen zolang de pagina open is. Er is geen `visibilitychange`-listener die de interval pauzeert wanneer het tabblad naar de achtergrond gaat, en geen IntersectionObserver die hem stopt zodra de hero-sectie voorbij is gescrold — de wissel blijft draaien voor de volledige duur van het paginabezoek, ook als de hero al lang niet meer in beeld is.

**Award-winning oplossing.** Voeg dezelfde `usePageVisible`-hook toe die elders in dit rapport wordt voorgesteld voor de orb-parallax (case: mousemove-lus) — een gedeeld stukje infrastructuur dat `document.hidden` checkt en de interval pauzeert/hervat, gecombineerd met een IntersectionObserver op de hero-`<section>` die de animatie stopt zodra die niet meer zichtbaar is. Door dit als één herbruikbare hook te bouwen in plaats van twee losse fixes, ontstaat een patroon dat bij elke toekomstige interval of rAF-lus op de site opnieuw ingezet kan worden — het verschil tussen 'twee bugs gefixt' en 'een categorie bugs onmogelijk gemaakt'.

---

## De sceptische techneut die het "zelf zou kunnen bouwen"

### 1. Geen enkel verifieerbaar feit over wie er achter Dynique zit {#de-sceptische-techneut-die-het-zelf-zou-kunnen-bouwen-geen-enkel-verifieerbaar-feit-over-wie-er-achter-dynique-zit}

**Persona:** Marc — IT-manager bij een logistiek bedrijf (140 medewerkers), HBO-ICT-achtergrond, bouwde zelf jarenlang in Laravel en PostgreSQL voordat hij doorgroeide naar management  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Marc heeft zijn tweede scherm op LinkedIn openstaan terwijl hij /over-ons doorleest, vlak voor hij een intake inplant. Zijn gewoonte bij elke leverancier: eerst de naam van de oprichter opzoeken, kijken wat hij écht gebouwd heeft, en pas dan een gesprek plannen.

**Trust/behoefte-trigger.** PRODUCT.md is hier expliciet over: 'technisch onderlegd' moet bewezen worden door feiten (opleiding, ervaring) — niet beweerd met het woord 'expert'. Marc test precies dat: staat er een naam en een controleerbaar feit, of alleen sfeer?

**Wat er nu misgaat.** De H1 op /over-ons zegt 'Ik bouw wat anderen alleen beschrijven' en de vier VALUES-kaarten (VAKMANSCHAP, DIRECTHEID, MAATWERK MET CODE, EIGENAARSCHAP, over-ons/page.tsx regels 10-15) zijn vier abstracte beweringen zonder één hard feit: geen naam, geen opleiding, geen jaartal, geen aantal jaar ervaring, geen link naar een LinkedIn- of GitHub-profiel. Zelfs de JSON-LD op de pagina (regels 24-60) modelleert Dynique als Organization zonder 'founder'-veld — de 'ik' die overal op de site spreekt, is nergens een naam. Precies het Design Principle dat de pagina zelf claimt na te leven ('bewijs door precisie, niet door beloftes') wordt hier geschonden.

**Award-winning oplossing.** Bouw geen statische credentials-strip, maar een klein 'technisch dossier'-paneel naast de founder-foto in dezelfde coded-diagram-esthetiek die de site al gebruikt voor de FlowDiagram en de before/na-slider: naam, opleiding + jaartal, jaren ervaring als harde tekst, plus een live, client-side opgehaald GitHub-activiteitsoverzicht (publieke API, geen backend nodig) met laatste-commit-timestamp en gebruikte talen. Dat is bewijs dat zichzelf elke dag ververst en niet met copy te vervalsen is — het sterkst denkbare signaal voor precies deze bezoeker.

### 2. Geen vergelijking met het alternatief dat deze bezoeker daadwerkelijk overweegt {#de-sceptische-techneut-die-het-zelf-zou-kunnen-bouwen-geen-vergelijking-met-het-alternatief-dat-deze-bezoeker-daadwerkelijk-overweegt}

**Persona:** Sanne — hoofd operations bij een installatiebedrijf (60 medewerkers), heeft zelf al een werkend Retool-prototype voor het planningsprobleem naast de offerte van Dynique liggen  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Sanne heeft in een middag zelf een Retool-dashboard in elkaar geklikt dat al 80% van het probleem oplost. Ze leest /diensten/processen om te bepalen of de resterende 20% een maatwerktraject rechtvaardigt, of dat ze gewoon doorbouwt in Retool.

**Trust/behoefte-trigger.** Ze wil expliciet weten waarom maatwerk-code beter is dan het no-code platform dat ze al draaiende heeft — exact de kernvraag van deze persona, niet een hypothetische.

**Wat er nu misgaat.** De enige vergelijkingstabel op de site (diensten/processen/page.tsx, sectie 'DE OPLOSSING + VERGELIJKING', regels 285-308) zet alleen 'STANDAARDPAKKET' tegenover 'MAATWERK VAN DYNIQUE' — twee kolommen, met een 'VS'-badge ertussen. Bubble, Retool, Airtable, Glide of 'zelf iemand aannemen' worden nergens op de hele site genoemd, ook niet in de enige build-vs-buy-blogpost (die alleen Zapier/Make/n8n behandelt). Voor Sanne, die haar eigen Retool-proof-of-concept naast de site legt, bewijst deze pagina niets over haar eigenlijke afweging.

**Award-winning oplossing.** Maak van de vergelijkingssectie geen derde statische kolom, maar een werkend stukje software: een kleine interactieve 'waar breekt no-code?'-calculator, ingebed in dezelfde sectie, met schuifjes voor aantal gebruikers, complexiteit van de procesLogica en verwachte levensduur — die live een eerlijk advies teruggeeft over SaaS, no-code of maatwerk, met concrete redenen ('Retool schaalt prima tot X gebruikers, breekt bij Y'). Sanne kan haar eigen scenario er letterlijk doorheen halen, en het bewijs van technische competentie zit in het feit dát de tool bestaat en klopt — niet in wat er beweerd wordt.

### 3. De enige build-vs-buy-content mist het no-code-alternatief en is nauwelijks vindbaar {#de-sceptische-techneut-die-het-zelf-zou-kunnen-bouwen-de-enige-build-vs-buy-content-mist-het-no-code-alternatief-en-is-nauwelijks-vindbaar}

**Persona:** Youssef — backend developer, fulltime in dienst, gevraagd om zijn werkgever te adviseren over een nieuw planningssysteem  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Youssef doorloopt de Adviseur-quiz, kiest bij 'Doel' voor 'Systemen aan elkaar koppelen', en krijgt zo — alleen via die specifieke antwoordcombinatie — een link naar /blog/n8n-make-zapier te zien. Hij hoopt op een eerlijk, technisch onderbouwd antwoord op zijn eigen twijfel: developer in dienst, no-code platform, of maatwerk laten bouwen.

**Trust/behoefte-trigger.** Hij zoekt content die zijn specifieke afweging serieus neemt, niet alleen workflow-tools als Zapier.

**Wat er nu misgaat.** /blog/n8n-make-zapier is het enige stuk content op de site dat build-vs-buy behandelt, maar uitsluitend voor workflow-automatisering (Zapier/Make/n8n) — geen woord over no-code app-bouwers (Bubble/Retool/Glide) of 'zelf een developer aannemen'. Het artikel staat nergens in Header.tsx of Footer.tsx (alleen een generieke 'BLOG'-link); het is uitsluitend bereikbaar via de blogindex, via sitemap.ts (niet gebruikersgericht), of via Advisor.tsx regel 152 — en die link verschijnt alléén als het antwoord op 'Doel' 'handwerk' of 'koppelen' is. Elke andere combinatie van antwoorden laat de enige eerlijke content op de site ongezien.

**Award-winning oplossing.** Schrijf een tweede artikel — 'Bubble, Retool of maatwerk: wat past bij jouw bedrijf?' — en bouw daar de interactieve calculator uit case Sanne in, zodat het artikel geen lijstje wordt maar een bruikbaar instrument. Plaats het zichtbaar op /blog, koppel het direct naast de vergelijkingssectie op /diensten/processen, én voeg het toe als 'desc'-link onder 'Maatwerk Software' in Header.tsx — zodat het niet langer afhankelijk is van welke vier antwoorden iemand toevallig aanklikt.

### 4. Het portfolio bewijst website-vakmanschap, niet software-vakmanschap — en de eigen 'meer volgt'-teaser mist precies dát verhaal {#de-sceptische-techneut-die-het-zelf-zou-kunnen-bouwen-het-portfolio-bewijst-website-vakmanschap-niet-software-vakmanschap-en-de-eigen-meer-volgt-teaser-mist-precies-dt-verhaal}

**Persona:** Els — CFO bij een familiebedrijf in de logistiek, zoekt een intern planningssysteem, geen publieke website  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Els klikt vanaf de homepage door naar /portfolio op zoek naar bewijs voordat ze een aanvraag doet. Onderaan de pagina staat al een kader met een pulserende stip: 'Meer cases in productie. Nieuw werk verschijnt hier zodra het live gaat.' — precies de plek waar ze hoopt iets over interne systemen te lezen.

**Trust/behoefte-trigger.** Ze wil zien dat Dynique daadwerkelijk interne systemen, dashboards of klantportalen heeft gebouwd — niet alleen publieksgerichte websites voor horeca en artiesten.

**Wat er nu misgaat.** Alle vier de projecten in portfolio/page.tsx (Chefs Connect, Auwt Aelse, IJssalon Italia, Stacy Kohnen) zijn marketing-websites; de eigen stat-strip erboven zegt het met zoveel woorden: 'SECTOREN: Horeca · Cultuur · Bedrijven' (regel 201). De 'meer cases in productie'-teaser onderaan de pagina (regels 309-332) bestaat al, maar is volledig generiek — geen woord over maatwerk software, geen hint richting het bestaande grotere-bedrijfsproject dat PRODUCT.md zelf noemt. Voor Els, exact de doelgroep, is deze teaser een gemiste kans in plaats van bewijs.

**Award-winning oplossing.** Vervang het generieke 'meer cases in productie'-kader door een NDA-veilige, interactieve procesreveal: een geanonimiseerde, daadwerkelijk klikbare prototype-flow van het bestaande planningssysteem (geen klantnaam, geen echte data, wél echte schermen en navigatie) — zodat Els geen belofte leest maar een werkend stukje software zelf kan doorklikken. Dat bewijst software-vakmanschap zonder een klant bloot te stellen, en is aantoonbaar sterker dan een tekstkaart.

### 5. De twee 'juiste' case-study-sjablonen ogen zelf als een half afgemaakt project {#de-sceptische-techneut-die-het-zelf-zou-kunnen-bouwen-de-twee-juiste-case-study-sjablonen-ogen-zelf-als-een-half-afgemaakt-project}

**Persona:** Bram — solution architect, doet due diligence op leveranciers voordat hij zijn directeur een voorstel doet  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Bram klikt door naar /portfolio/auwt-aelse en /portfolio/chefs-connect, de twee cases die het volledige CaseStudyTemplate gebruiken, en verwacht een diepgaand challenge-aanpak-resultaat-verhaal.

**Trust/behoefte-trigger.** Hij beoordeelt leveranciers op consistentie tussen belofte en uitvoering — een half-leeg 'bewijsstuk' is voor hem een directe rode vlag.

**Wat er nu misgaat.** Beide bestanden bevatten letterlijk de code-commentaarregel 'Design is af. Vul onderstaande velden in met de echte content.' (auwt-aelse/page.tsx regel 7, chefs-connect/page.tsx regel 7), en challenge, approach, features, gallery, results, metrics en quote zijn stuk voor stuk lege arrays. CaseStudyTemplate.tsx verbergt elk leeg blok automatisch (bevestigd: elke sectie is gewrapt in een `.length`-check), dus de live pagina toont enkel een hero-video/foto en vier generieke fact-labels — geen enkele zin over probleem of oplossing. Wie devtools/view-source opent, vindt de aantekening die eigenlijk voor de eigenaar bedoeld was.

**Award-winning oplossing.** Verberg deze twee cases niet, en vul ze niet met generieke vulzinnen — maak van het gat zelf een 'eigenzinnig eerlijk'-moment: een module 'Casestudy in opbouw' die laat zien wát er al vaststaat (echte projectdata: livegangdatum, rol, status) en een zichtbare voortgangsindicator naar de volledige case, in plaats van te doen alsof er niets ontbreekt. Voor een due-diligence-lezer als Bram is transparante onvolledigheid geloofwaardiger dan een gepolijste leegte — en het past bij een merk dat zichzelf 'eigenzinnig eerlijk' noemt.

### 6. Voor/na-dashboardcijfers en het 'Verified'-label houden geen stand bij nader onderzoek {#de-sceptische-techneut-die-het-zelf-zou-kunnen-bouwen-voorna-dashboardcijfers-en-het-verified-label-houden-geen-stand-bij-nader-onderzoek}

**Persona:** Dennis — data-engineer, scrollt kritisch door de 'Waarom Dynique'-sectie op de homepage  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Dennis bekijkt de scroll-gestuurde before/after-slider (met cijfers '0 fouten / 100% automatisch / +11u p/week') en de reviews-sectie met het label 'Verified · 5.0' naast een schild-icoon.

**Trust/behoefte-trigger.** Als techneut wantrouwt hij ongesourcete cijfers per definitie en checkt actief of 'verified' ook echt onafhankelijk geverifieerd betekent.

**Wat er nu misgaat.** De AfterScreen-component (hergebruikt op homepage én /diensten/processen) toont hardgecodeerde voorbeeldcijfers in een gestileerde mockup zonder enig 'voorbeeld'-label — het oogt als een echte productscreenshot. Het 'Verified'-label (page.tsx regels 685 en 1015) is gekoppeld aan een 'verifyUrl' die telkens naar de website van de klant zelf wijst (bv. chefs-connect.nl); dat bewijst dat het bedrijf bestaat, niet dat een derde partij de review geverifieerd heeft.

**Award-winning oplossing.** Voeg een permanent label 'GESIMULEERD VOORBEELD' toe in de top-bar van de before/na-window — dezelfde coded-esthetiek, geen extra ontwerpwerk nodig. Vervang 'Verified' door een écht extern, live signaal: render de reviews build-time vanuit een echte Google Business Profile-feed, zodat 'geverifieerd' doorklikbaar wordt naar Google's eigen reviewpagina — extern controleerbaar en onmogelijk na te maken. Dat is precies het soort bewijs waar een sceptische techneut naar zoekt.

### 7. '100% vaste prijs' en de eigen FAQ over scopewijziging spreken elkaar tegen, een paar honderd pixels verderop {#de-sceptische-techneut-die-het-zelf-zou-kunnen-bouwen-100-vaste-prijs-en-de-eigen-faq-over-scopewijziging-spreken-elkaar-tegen-een-paar-honderd-pixels-verderop}

**Persona:** Tobias — IT-projectleider die eerder een vastgeprijsd traject zag ontsporen en scherp let op contractuele taal  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Tobias leest de stat '100% Vaste prijs' in het conversieblok op de homepage (regels 970-983) en klapt vervolgens de FAQ open 'Wat als de scope tijdens het project verandert?'.

**Trust/behoefte-trigger.** Hij wil weten of de vaste prijs een keiharde garantie is of een marketingclaim die in de kleine lettertjes alsnog losraakt.

**Wat er nu misgaat.** Het conversieblok presenteert '100%' naast het label 'VASTE PRIJS' als absolute garantie. Diezelfde pagina beantwoordt zichzelf verderop met: 'We bespreken de impact op planning en prijs zodra het zich voordoet' (regel 238) — een directe contradictie die een contractueel geschoolde lezer meteen opvalt. Een paar honderd pixels hoger, in de Fase-sectie, staat de nuance eigenlijk al correct: 'een vaste prijs per fase' (regel 818-819) — alleen wordt die precisie in de stat zelf weggelaten.

**Award-winning oplossing.** Vervang de losstaande '100%'-stat door een klikbaar element dat direct doorverwijst naar 'Het Traject' eronder — met de tekst 'VASTE PRIJS PER FASE, bekijk hoe hieronder' als micro-disclosure vlak onder het getal. Dat is geen tekstredactie maar een UI-koppeling tussen claim en nuance: de belofte en haar eigen kleine lettertjes staan letterlijk aan elkaar vast in plaats van op twee plekken die elkaar tegenspreken.

### 8. 'Gebouwd met code' wordt overal beweerd, nooit onderbouwd met een concrete, klikbare stack {#de-sceptische-techneut-die-het-zelf-zou-kunnen-bouwen-gebouwd-met-code-wordt-overal-beweerd-nooit-onderbouwd-met-een-concrete-klikbare-stack}

**Persona:** Priya — engineering lead bij een middelgroot techbedrijf, evalueert externe partners voor een greenfield-project  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Priya leest /diensten/processen, waar het FlowDiagram het label 'GEBOUWD MET CODE' draagt (regel 140) als tegenstelling tot no-code, en de Adviseur-quiz spreekt van 'code die jaren meegaat' (Advisor.tsx regel 48).

**Trust/behoefte-trigger.** Ze wil weten of ze straks een moderne, overdraagbare codebase overneemt, of een obscure eigen-bedachte oplossing zonder documentatie.

**Wat er nu misgaat.** 'Code' wordt op minstens vijf plekken gebruikt als contrast met no-code/SaaS (homepage, /diensten/processen, /diensten, Advisor.tsx, de n8n-blogpost), maar nergens — zelfs niet in de FAQ 'Wat gebeurt er na oplevering?' — staat welke concrete technologie gebruikt wordt. Geen stack-vermelding, geen link naar een repository, geen architectuurschema.

**Award-winning oplossing.** Voeg geen statische techniek-strip toe, maar een klein, klikbaar paneel 'bekijk de architectuur van een live project' dat doorlinkt naar een echte, read-only (redacted) repository of een gedateerd commit-overzicht van één van de vijf portfolioprojecten — iets wat een technische beoordelaar daadwerkelijk kan doorklikken en verifiëren, in plaats van een lijstje technologienamen dat evengoed verzonnen kan zijn.

### 9. Onbeantwoord bus-factor-risico: wat als de enige developer uitvalt of stopt? {#de-sceptische-techneut-die-het-zelf-zou-kunnen-bouwen-onbeantwoord-bus-factor-risico-wat-als-de-enige-developer-uitvalt-of-stopt}

**Persona:** Femke — IT-directeur bij een zorginstelling (250 fte), laat een kritisch dossierbeheersysteem bouwen en moet continuïteitsrisico's kunnen verantwoorden aan haar bestuur  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Femke leest /over-ons en de FAQ 'Wat gebeurt er na oplevering?' op zoek naar een antwoord op continuïteit, met het oog op een risicoparagraaf die ze aan haar bestuur moet voorleggen.

**Trust/behoefte-trigger.** Een besluitvormer bij een groter bedrijf moet risicomanagement kunnen aantonen — één developer zonder back-up is voor een kritisch systeem een structureel risico, niet alleen een persoonlijk detail.

**Wat er nu misgaat.** Over-ons is doorgaans in de 'ik'-vorm ('Ik bouw wat anderen alleen beschrijven'), de PROMISE-sectie belooft 'je praat met degene die het ook bouwt' (over-ons/page.tsx regel 18), en de homepage-FAQ antwoordt op 'Wat gebeurt er na oplevering?' met 'Ik blijf bereikbaar voor updates, uitbreidingen en beheer. Geen los bureau na livegang — hetzelfde aanspreekpunt van dag één.' (page.tsx regel 240). Nergens wordt uitgelegd wat er gebeurt bij langdurige uitval of stoppen, en er wordt geen documentatie- of overdrachtsgarantie genoemd die dit risico voor een grotere klant mitigeert.

**Award-winning oplossing.** Voeg een expliciete FAQ toe: 'Wat als jij uitvalt of stopt?' — en maak de belofte tastbaar in plaats van alleen tekstueel: publiceer een echt, downloadbaar 'Continuïteitsdocument' (een PDF met wat elke klant standaard aan documentatie en repository-toegang krijgt) dat Femke letterlijk in haar risicoparagraaf kan citeren. Dat is 'eigenzinnig eerlijk' in de praktijk: een risico benoemen en oplossen vóórdat de klant het zelf moet vragen.

### 10. De enige expliciete IP-belofte staat verstopt in een nauwelijks vindbare blogpost {#de-sceptische-techneut-die-het-zelf-zou-kunnen-bouwen-de-enige-expliciete-ip-belofte-staat-verstopt-in-een-nauwelijks-vindbare-blogpost}

**Persona:** Koen — CTO van een scale-up, wil zwart-op-wit weten dat hij straks volledige broncode en IP bezit  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Koen doorloopt /diensten/processen en /contact op zoek naar een concrete eigendomsclausule voordat hij een intakegesprek plant.

**Trust/behoefte-trigger.** IP-eigendom is voor een CTO een showstopper-vraag, geen bijzaak die hij zelf moet opdiepen uit een blogartikel.

**Wat er nu misgaat.** De enige plek op de hele site met de expliciete belofte 'Geen lock-in — het is jouw software. Wij bouwen het, jij bezit het.' is regel 71 van /blog/n8n-make-zapier — een artikel dat, zoals ook Youssef's case laat zien, buiten de hoofdnavigatie valt. De homepage-FAQ komt het dichtst in de buurt met de korte bijzin 'Je data en code blijven van jou' binnen het antwoord over beveiliging (page.tsx regel 237), zonder uitwerking van repository-toegang of documentatie-oplevering.

**Award-winning oplossing.** Til de belofte uit de blogpost en maak er een eigen, zichtbaar FAQ-item van op zowel de homepage als /diensten/processen: 'Van wie is de broncode na oplevering?'. Maak het bovendien letterlijk verifieerbaar: toon een geredigeerd fragment van de daadwerkelijke IP-overdrachtsclausule uit Dynique's standaardovereenkomst (echte juridische tekst, klantnaam weggelakt) als klein, inline 'contractfragment' — zodat Koen niet op een parafrase hoeft te vertrouwen maar de tekst zelf kan lezen.

### 11. 'Testen grondig' blijft een loze zin zonder concrete kwaliteitsborging {#de-sceptische-techneut-die-het-zelf-zou-kunnen-bouwen-testen-grondig-blijft-een-loze-zin-zonder-concrete-kwaliteitsborging}

**Persona:** Anke — hoofd IT bij een installatiebedrijf, heeft eerder een extern gebouwde applicatie zien crashen door het ontbreken van automatische tests  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Anke leest Fase 3 ('BOUWEN') op de homepage en de bijbehorende stap 'Bouwen met code' op /diensten/processen.

**Trust/behoefte-trigger.** Ze wil weten wélke kwaliteitsborging er precies is — automatische tests, code review, monitoring — niet alleen dat er 'grondig getest' wordt.

**Wat er nu misgaat.** Fase 3 op de homepage zegt: 'We bouwen met moderne, onderhoudbare code — toekomstbestendig en veilig. Je ziet de voortgang live op een staging-omgeving.' (page.tsx regel 853), en /diensten/processen zegt over stap 4: 'We bouwen de oplossing op maat, testen grondig en zorgen dat het werkt rondom jullie manier van werken.' (regel 314). Beide claims blijven op het niveau van bijvoeglijke naamwoorden zonder één concreet proces te benoemen: geen versiebeheer, geen geautomatiseerde tests, geen monitoring- of uptime-afspraak na livegang.

**Award-winning oplossing.** Hergebruik de coded-diagram-taal die de site al gebruikt voor de FlowDiagram en de before/na-slider om een klein, animerend 'build-pipeline'-diagram te bouwen: commit → geautomatiseerde check → staging → live, in dezelfde visuele stijl als de rest van de pagina. Vier feitelijke, tastbare stappen in het eigen visuele idioom van de site doen hier meer voor geloofwaardigheid dan een alinea marketingtaal — en het kost geen nieuw ontwerpsysteem.

### 12. Elk formulier faalt de eigen belofte: nep-verplichte velden en een reactietijd die zichzelf op twéé pagina's tegenspreekt {#de-sceptische-techneut-die-het-zelf-zou-kunnen-bouwen-elk-formulier-faalt-de-eigen-belofte-nep-verplichte-velden-en-een-reactietijd-die-zichzelf-op-tw-paginas-tegenspreekt}

**Persona:** Rik — pragmatische technicus die een site altijd eerst 'stress-test' door formulieren leeg te versturen en devtools te openen  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Rik probeert het contactformulier op de homepage (#contact) leeg te versturen, en vergelijkt de reactietijd-belofte op /contact met die op de homepage.

**Trust/behoefte-trigger.** Een technisch persoon test systemen actief op robuustheid — juist omdat hij zelf weet hoe simpel `required` te implementeren is, valt het ontbreken ervan hem meteen op.

**Wat er nu misgaat.** Op de homepage staan rode sterretjes bij 'Naam *' en 'Wat heb je nodig? *' (regels 1255, 1272, 1290), maar geen van de velden heeft een `required`-attribuut (bevestigd: geen enkele match voor 'required' in page.tsx) — een leeg formulier verstuurt probleemloos naar WhatsApp met '(niet ingevuld)' in plaats van een foutmelding (handleWhatsAppSubmit, regels 152-155). Daarnaast claimt de homepage-contactsectie 'binnen 24 uur' (regel 1229) terwijl het detailblok twee regels lager 'Binnen 2 uur (ma–za, 9–20u)' zegt (regel 1235) — en /contact herhaalt exact dezelfde tegenstrijdigheid (regel 134 vs regel 13). Het /contact-formulier zelf heeft overigens al wél `required` op zijn velden — de homepage is de enige plek waar dit ontbreekt.

**Award-winning oplossing.** Voeg niet zomaar `required` toe, maar bouw echte, goed geïmplementeerde inline-validatie: een live foutensamenvatting, `aria-live`-feedback per veld, en een submit-knop die pas actief wordt bij een geldig formulier — precies het soort vakmanschap dat een technisch publiek zelf beoordeelt aan de kwaliteit van de implementatie, niet aan de tekst ernaast. Kies daarnaast site-breed één reactietijd-belofte (het detailblok zegt overal al 'Binnen 2 uur' — gebruik die overal consequent) in plaats van 'binnen 24 uur' als losse zin te laten staan.

### 13. De leadmagneet belooft 'direct per mail' maar verstuurt nooit een e-mail {#de-sceptische-techneut-die-het-zelf-zou-kunnen-bouwen-de-leadmagneet-belooft-direct-per-mail-maar-verstuurt-nooit-een-e-mail}

**Persona:** Lisa — marketing-technoloog met affiniteit voor development, gebruikt de leadmagneet als lakmoesproef voor de techniek van de leverancier  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Lisa vult naam en e-mail in op /gratis-checklist, verwacht een e-mail in haar inbox zoals beloofd, en controleert die vervolgens — de velden zijn keurig `required`, dus ze verwacht dat de rest van de flow net zo solide is.

**Trust/behoefte-trigger.** Zij twijfelt of Dynique de technische competentie heeft voor een serieus softwareproject en gebruikt deze simpele lead-flow als eerste, harde test.

**Wat er nu misgaat.** De pagina belooft expliciet 'Direct in je inbox' (regel 106) en 'ontvang de PDF direct per mail' (regel 113), maar handleSubmit triggert alleen een client-side `<a download>` en bevat letterlijk de code-commentaarregel '// In productie: stuur naam + e-mail ook naar API/Mailchimp/Resend.' (regel 39) — er wordt dus nooit een e-mail verstuurd. Juist omdat de formuliervelden zelf al wél correct `required` zijn (in tegenstelling tot de homepage), oogt de rest van de flow betrouwbaar genoeg dat de ontbrekende e-mail extra hard opvalt bij wie het navraagt.

**Award-winning oplossing.** Koppel het formulier aan een echte leadcapture-backend (Resend of een vergelijkbare serverless functie) — letterlijk de dienst die Dynique zelf verkoopt ('koppelingen die handwerk overnemen'). Ga daarbij een stap verder dan alleen 'het laten werken': toon direct na verzenden een zichtbare, verifieerbare bevestiging in de UI ('Verzonden naar lisa@bedrijf.nl om 14:32 — referentie #DYN-…'), zodat het bewijs dat het écht gebeurd is in het product zelf zichtbaar wordt, niet alleen onzichtbaar in een achterliggende API-call.

### 14. De Adviseur-quiz negeert precies de twijfel die deze bezoeker heeft — en spreekt daarmee haar eigen belofte tegen {#de-sceptische-techneut-die-het-zelf-zou-kunnen-bouwen-de-adviseur-quiz-negeert-precies-de-twijfel-die-deze-bezoeker-heeft-en-spreekt-daarmee-haar-eigen-belofte-tegen}

**Persona:** Niek — operationeel manager met technische achtergrond, twijfelt tussen Dynique inhuren of zelf aan de slag met Retool en een freelance developer  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Niek doorloopt de Adviseur-quiz op de homepage (#advies) in de veronderstelling dat die zijn specifieke afweging zou herkennen.

**Trust/behoefte-trigger.** De quiz belooft expliciet 'een eerlijk advies... ook als dat betekent dat je (nog) niets hoeft te laten bouwen' (Advisor.tsx regels 269-270) — wat suggereert dat 'doe het zelf' een mogelijke uitkomst is.

**Wat er nu misgaat.** In Advisor.tsx bevat geen van de vier vragen (Situatie/Doel/Voorkeur/Planning, regels 15-63) een optie voor 'ik overweeg dit zelf te bouwen'. computeAdvice() (regels 136-162) resolveert elke antwoordcombinatie onvermijdelijk naar één van precies drie SERVICES-sleutels — er is geen enkel pad dat leidt tot een eerlijk 'zelf bouwen kan hier ook goed werken'-resultaat. De quiz die zich presenteert als 'Niet verkopen. Adviseren.' (regel 264-265) spreekt daarmee letterlijk haar eigen belofte tegen: de code laat de tekst niet waarmaken wat die claimt.

**Award-winning oplossing.** Voeg aan Stap 1 een vijfde optie toe: 'We overwegen het zelf te bouwen', met een eigen Advice-branch. Maak de uitkomst nuttiger dan tekst op een scherm: genereer client-side (geen backend nodig) een gepersonaliseerd, downloadbaar één-pager build-vs-buy-scorecard op basis van Niek's vier antwoorden — iets dat hij letterlijk meeneemt, ook als hij nooit klant wordt. Voor precies deze sceptische persona is een werkelijk bruikbaar artefact een sterker vertrouwenssignaal dan welke verkoop-CTA dan ook.

### 15. De code kent al een 'primary'-markering voor Maatwerk Software — alleen /diensten en /contact gebruiken hem niet {#de-sceptische-techneut-die-het-zelf-zou-kunnen-bouwen-de-code-kent-al-een-primary-markering-voor-maatwerk-software-alleen-diensten-en-contact-gebruiken-hem-niet}

**Persona:** Wouter — hoofd digitale transformatie bij een productiebedrijf, vergelijkt Dynique met een gespecialiseerd softwarebureau en een freelance senior developer  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Wouter klikt van de homepage door naar /diensten om te bevestigen dat maatwerk software écht de kernfocus is, zoals de homepage suggereert.

**Trust/behoefte-trigger.** Een technische besluitvormer die een specialist zoekt, wantrouwt generalistische bureaus die 'alles doen' — PRODUCT.md's eigen anti-referentie, maar dan van de andere kant bekeken.

**Wat er nu misgaat.** Header.tsx markeert 'Maatwerk Software' in zijn eigen navigatiedata al met `primary: true` (regel 11) — het datamodel weet dus al dat deze dienst zwaarder weegt. Maar /diensten/page.tsx's DISCIPLINES-accordeon (regels 8-37) rendert alle vier de disciplines met byte-voor-byte identieke opmaak, grootte en open/dicht-gedrag — geen enkel visueel verschil buiten de volgorde 01-04. En op /contact staat 'Maatwerk software' als vierde van zeven gelijkwaardige opties in de SERVICES-dropdown (regel 24), naast 'AI Marketing' en 'Drone & Video' — de `primary`-informatie die elders al bestaat, wordt hier nergens gebruikt.

**Award-winning oplossing.** Geen herontwerp nodig — trek de bestaande maar ongebruikte `primary`-vlag uit Header.tsx door naar /diensten (grotere kaart, 'KERNDIENST'-label, standaard uitgeklapt) en naar /contact (services gegroepeerd: kerndiensten eerst, 'AI Marketing'/'Drone & Video' zichtbaar gescheiden onder 'Aanvullende diensten'). Een kleine, code-niveau consistentiefix die een stuk informatiearchitectuur die al bestaat, eindelijk laat zien op precies de plekken waar een sceptische bezoeker beslist of Dynique een specialist is of een generalist.

---

## Klant die eigenlijk een standaardpakket nodig heeft

### 1. De Adviseur kan alleen 'bouw dit' zeggen — de belofte 'ook als dat niets is' bestaat nergens in de code {#klant-die-eigenlijk-een-standaardpakket-nodig-heeft-de-adviseur-kan-alleen-bouw-dit-zeggen-de-belofte-ook-als-dat-niets-is-bestaat-nergens-in-de-code}

**Persona:** Klant die eigenlijk een standaardpakket nodig heeft  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Mark (42) is operationeel manager bij een familiebedrijf met 12 medewerkers in de groothandel in bouwmaterialen. Elke ochtend typt hij 20 à 30 leveranciersfacturen over van PDF naar hun boekhoudpakket — drie kwartier werk, vijf dagen per week, al twee jaar zo. Op een dinsdagavond googelt hij 'facturen automatisch verwerken', landt op dynique.nl, scrolt naar 'De Adviseur · 60 seconden' en vult de vier vragen eerlijk in: 'We werken nog met losse tools' → 'Systemen aan elkaar koppelen' → 'Een vaste, voorspelbare prijs' → 'Ik oriënteer me nog'.

**Trust/behoefte-trigger.** De intro-tekst van de Adviseur belooft met zoveel woorden 'een eerlijk advies dat past bij jóuw situatie — ook als dat betekent dat je (nog) niets hoeft te laten bouwen', en de console-footer herhaalt na afloop 'We zeggen het eerlijk als we niet de beste match zijn — dan denken we toch graag even met je mee'. Mark neemt die belofte letterlijk: voor 20-30 facturen per dag hoopt hij op het eerlijke antwoord 'dit is een OCR-koppeling van €15 per maand, geen softwaretraject' — precies het scenario dat de site zelf claimt te durven benoemen.

**Wat er nu misgaat.** computeAdvice() in src/components/Advisor.tsx (regels 136-162) kent precies drie mogelijke uitkomsten uit het SERVICES-object (regels 74-111): 'automatisering', 'maatwerkSysteem' of 'appPortaal'. Er is geen vierde tak die 'een standaardtool volstaat hier' teruggeeft — de if/else sluit dat structureel uit. Marks exacte combinatie (start='lostools', goal='koppelen', prio='prijs') resulteert via regel 141 altijd in key='automatisering', met CTA 'BEKIJK MAATWERK SOFTWARE'. Nochtans erkent de eigen n8n-blogpost (src/app/blog/n8n-make-zapier/page.tsx, regel 75) letterlijk: 'voor één losse, simpele koppeling die je morgen wilt en nooit meer aanraakt, kan een standaardtool prima zijn'. Die nuance bestaat dus al in de tekstcontent van de site, maar is in de Adviseur weggestopt achter secondary.label (regel 152), een kleine tekstlink onderaan met pijltje — nooit de hoofduitkomst. De 'eerlijk advies, ook als dat niets is'-belofte in de hero-tekst (regel 269-270) is daarmee een claim die de eigen code op geen enkel pad kan waarmaken.

**Award-winning oplossing.** Bouw een vijfde, expliciet ándere uitkomst: 'De Eerlijke Uitgang'. Voeg SERVICES.standaardoplossing toe (neutraal grijs accent — geen goud/violet/roze zoals de andere drie, juist om te signaleren 'dit is geen verkoopmoment') die wordt geselecteerd wanneer prio==='prijs' && (start==='lostools'||start==='onduidelijk') && speed!=='zsm'. Geef dit resultaatscherm een eigen visuele signatuur die opzettelijk breekt met de andere drie: in plaats van de vertrouwde 'Waarom dit past'-puntenlijst met bouwargumenten, een kaart met een subtiel stempel-effect (een lichte rotatie, een dunne dubbele rand — alsof er iets is 'afgekeurd') met de tekst: 'Op basis van je antwoorden verwachten we dat een kant-en-klare koppeling (Zapier, Make, of de import-functie van je boekhoudpakket) je probleem al oplost. Eerlijk gezegd zouden wij hier weinig aan toevoegen.' Enige CTA: een link naar de n8n-blogpost plus een kleine, secundaire 'Toch liever laten meekijken? 15 minuten gratis'. Maak dit bovendien zichtbaar bewijs in plaats van een eenmalig moment: tel vanaf launch hoe vaak dit pad wordt getoond (simpele client-side/analytics-telling, geen nieuwe backend nodig) en zodra er een eerlijk aantal maanden data is, toon het als statistiek elders op de site ('Sinds [datum] verwijzen we X% van de Adviseur-bezoekers eerlijk door naar iets buiten onszelf'). Dat maakt 'eigenzinnig eerlijk' niet een bewering maar een meetbaar, groeiend bewijsstuk — en is het enige scenario in de hele Adviseur dat een concurrent nooit zou durven bouwen.

### 2. /diensten/web is een tijdcapsule van het oude bureau — geen goud, geen prijs, geen signaal dat dit niet het hoofdverhaal is {#klant-die-eigenlijk-een-standaardpakket-nodig-heeft-dienstenweb-is-een-tijdcapsule-van-het-oude-bureau-geen-goud-geen-prijs-geen-signaal-dat-dit-niet-het-hoofdverhaal-is}

**Persona:** Klant die eigenlijk een standaardpakket nodig heeft  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Frank (51) heeft een installatiebedrijf met vier man personeel en googelt 's avonds 'website laten maken Limburg'. Hij klikt door naar dynique.nl/diensten, ziet daar de vier disciplines en klikt op 'WEB & DESIGN'. Hij komt uit op /diensten/web: een zwarte hero met 'DYNIQUE · DIENST 01', de H1 'WEBSITES & WEB APPS' en de tekst 'Van visitekaartje tot volwaardige webapplicatie... live binnen 7 tot 14 dagen', gevolgd door een grid met 'Bedrijfswebsite', 'Portfolio website', 'Webshop', 'Landingpages'.

**Trust/behoefte-trigger.** Frank herkent zijn eigen, bescheiden behoefte (gewoon een bedrijfswebsite met adres en diensten) volledig in wat hij leest, en trekt de logische conclusie dat dit precies het soort klant is dat Dynique zoekt — een redelijke aanname op basis van wat er letterlijk op de pagina staat, en niets op de pagina spreekt die aanname tegen.

**Wat er nu misgaat.** src/app/diensten/web/page.tsx is stilistisch een ander bedrijf dan de rest van de nieuwe site: geen enkele #d4a574 goud-accent in het hele bestand, nog de oude sectie-titel 'DYNIQUE · DIENST 01' (regel 59), en geen woord over maatwerk software als fundament — terwijl de hub-pagina één klik hoger (/diensten/page.tsx, regel 192-193) juist expliciet stelt 'Maatwerk software als fundament, de rest sluit erop aan'. Er staat geen prijsindicatie (de services-array op regel 25-32 heeft alleen titel + beschrijving, geen bedrag), geen link naar de eigen prijsgids (/blog/wat-kost-een-website, waar exact dit segment met concrete cijfers wordt uitgelegd), en geen enkele verwijzing terug naar processen/maatwerk. Voor Frank is dit dus een volledig zelfstandige, ongefilterde ingang — precies de pagina waar de mismatch tussen 'wie de homepage aantrekt' en 'wie hier daadwerkelijk offerte aanvraagt' het grootst is, zonder dat de pagina zelf ooit laat merken dat ze een minder strategische dienst beschrijft dan de homepage belooft.

**Award-winning oplossing.** Herontwerp de hero als bewuste splitsing — 'De Vork'. In plaats van één ongedifferentieerde H1, twee korte, gelijkwaardig ogende paden direct onder de hero-CTA's, als twee kaarten naast elkaar: links 'Ik wil vooral zichtbaar zijn' met de geruststellende microtekst 'Een heldere website, vaste prijs vanaf €3.500, live in 7-14 dagen — precies wat deze pagina beschrijft' en een prijscalculator-widget (drie sliders: aantal pagina's, wel/geen webshop, gewenste doorlooptijd) die live een indicatieve prijsrange toont en linkt naar de volledige prijsgids; rechts 'Ik wil ook processen automatiseren of systemen koppelen' die direct doorstuurt naar /diensten/processen met de tekst 'Dat noemen wij maatwerk software — waarschijnlijk een beter startpunt voor jou'. Vervang tegelijk de 'DYNIQUE · DIENST 01'-eyebrow door de goud-huisstijl (#d4a574) zodat de pagina zich meteen herkenbaar voegt naar de rest van de nieuwe site. Dit is één component (herbruikbaar als patroon voor /diensten/marketing en /diensten/drone) dat van de meest kwetsbare pagina van de site een zelf-kwalificerend startpunt maakt in plaats van een stille tijdcapsule.

### 3. De vijf locatiepagina's beloven Google letterlijk het oude bedrijf — 'ZZP en MKB', 'vaste prijs', geen woord over maatwerk {#klant-die-eigenlijk-een-standaardpakket-nodig-heeft-de-vijf-locatiepaginas-beloven-google-letterlijk-het-oude-bedrijf-zzp-en-mkb-vaste-prijs-geen-woord-over-maatwerk}

**Persona:** Klant die eigenlijk een standaardpakket nodig heeft  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Sanne (29) is net gestart als zelfstandig interieurontwerper in Maastricht en googelt 'website laten maken Maastricht'. Google toont het snippet van dynique.nl/locaties/maastricht. Ze klikt door in de veronderstelling dat dit een lokaal, betaalbaar bureau voor starters zoals zij is — precies wat de meta-omschrijving haar beloofde voordat ze ook maar één pixel van de site zag.

**Trust/behoefte-trigger.** Het vertrouwen wordt gewekt vóórdat ze de site bezoekt: wat Google toont moet overeenkomen met wat ze aantreft, anders voelt het traject dat volgt als bait-and-switch zodra ze zich tijdens de intake realiseert dat het bedrijf inmiddels een andere doelgroep bedient.

**Wat er nu misgaat.** src/app/locaties/maastricht/page.tsx regel 6 (metadata.description) luidt woordelijk: 'Premium website laten maken in Maastricht. Lokaal webdesign bureau voor ZZP en MKB. Binnen 7–14 dagen live, vaste prijs, persoonlijk contact.' Dit is exact de vóór-rebrand doelgroepbelofte (ZZP, 7-14 dagen, vaste prijs zonder intake) die PRODUCT.md nu expliciet vervangt door 'grotere bedrijven NL+BE' met intake-gebaseerde pricing voor maatwerktrajecten. Alle vijf locatiepagina's (maastricht, heerlen, sittard, aken, eindhoven) delen dit patroon — het is niet één vergeten regel, het is de complete metadata-laag van een hele paginacategorie. Dit is precies wat een zoekmachine indexeert en toont: de eerste indruk van vijf actief bezochte SEO-pagina's is feitelijk onjuist over wie de site nu bedient.

**Award-winning oplossing.** Los dit structureel op, niet tekstueel: bouw één bestand src/lib/positioning.ts met de canonieke, tweeledige metabeschrijving-template ('Website of maatwerk software in {plaats}. Van een heldere bedrijfswebsite — vaste prijs vanaf €3.500, 7-14 dagen — tot een systeem op maat voor bedrijven die standaardpakketten ontgroeid zijn.') en laat alle vijf locatiepagina's (en later elke nieuwe) hun metadata.description daaruit samenstellen in plaats van los te typen. Dat is geen verlies van SEO-volume — de zoekterm 'website laten maken' blijft bediend — maar wél een eerlijke verwachting vóór de klik, en een architecturale garantie dat een volgende positioneringswijziging niet opnieuw via vijf losse bestanden moet worden rondgepompt. Voeg op de zichtbare pagina zelf, direct onder de H1, een identieke tweeledige intro-zin toe zodat ook wie via een gedeelde link binnenkomt (niet via Google) meteen ziet welk van de twee paden voor hen geldt. Precisie door structuur in plaats van door belofte — letterlijk Design Principle 1 uit PRODUCT.md, toegepast op de plek waar het al twee maanden ontbreekt.

### 4. Sectorpagina's beschrijven de pijn van een 3-persoonsbedrijf zonder ooit een schaal-drempel te noemen {#klant-die-eigenlijk-een-standaardpakket-nodig-heeft-sectorpaginas-beschrijven-de-pijn-van-een-3-persoonsbedrijf-zonder-ooit-een-schaal-drempel-te-noemen}

**Persona:** Klant die eigenlijk een standaardpakket nodig heeft  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Rob (38) runt een installatiebedrijf met drie monteurs en één kantoormedewerker. Hij leest /maatwerk-software/installatiebedrijf en herkent zichzelf compleet: 'de planning gaat via telefoon en whiteboard', 'werkbonnen komen op papier of als foto via WhatsApp', 'onderhoudscontracten leven in Excel'. Hij denkt: dit gaat exact over ons, en stuurt vanaf zijn telefoon meteen een offerteaanvraag.

**Trust/behoefte-trigger.** De herkenning is zo compleet — drie exacte pijnpunten, in zijn eigen taal, zonder enige ruis — dat hij redelijkerwijs aanneemt dat de oplossing ook bij zijn schaal past. Niets op de pagina geeft hem enig signaal dat dit misschien is geschreven voor een bedrijf van een heel andere orde.

**Wat er nu misgaat.** src/app/maatwerk-software/installatiebedrijf/page.tsx (via SectorTemplate.tsx) beschrijft pijnpunten die evengoed op een bedrijf met 3 als met 30 monteurs van toepassing zijn: painParagraphs (regel 27-31) en de pains-array (regel 32-37) noemen nergens een omvang- of budgetindicatie, terwijl PRODUCT.md de doelgroep expliciet omschrijft als 'grotere bedrijven... met een hoger budget'. Alle vier sectorpagina's (bouw/zorg/logistiek/installatiebedrijf) delen precies dit patroon. Het gevolg: pagina's die volgens PRODUCT.md moeten dienen als 'dieper-in-de-funnel bewijs' voor een reeds gekwalificeerde grotere lead, functioneren in de praktijk als brede vangnetten die elk bedrijf met herkenbare pijn binnenhalen, ongeacht schaal — precies het risico dat de nieuwe positionering probeert te vermijden.

**Award-winning oplossing.** Voeg aan SectorTemplate.tsx, direct na de pain-sectie, een interactieve 'Herken je jezelf?'-slider toe: één horizontale schuifregelaar 'Hoeveel monteurs/medewerkers werken buiten kantoor?' van 1 tot 30+. Onder de 8-10 verschuift de begeleidende tekst live naar een eerlijke kaart in gedempte kleur: 'Bij deze schaal is een kant-en-klare planningstool (zoals Simplicate, Repair-CRM of vergelijkbaar) vaak sneller en goedkoper — vraag ernaar in het gesprek, we zeggen het eerlijk.' Boven de 8-10 verschuift dezelfde ruimte naar de bestaande features-sectie met een bevestigende toon: 'Dit bouwen we vaak voor bedrijven op jullie schaal.' Dit hergebruikt de reeds bestaande scroll-scrubbed before/after-interactiepatroon uit Visuals.tsx (dezelfde technische familie, dus geen nieuw designsysteem nodig) en zet in real time, vóór het contactformulier, de juiste verwachting neer — zonder de kleinere ondernemer de deur te wijzen, wél zonder de illusie te wekken dat elke schaal hetzelfde traject krijgt.

### 5. Portfolio bewijst met vier cases dat eenmanszaken de norm zijn — het tegenovergestelde van de nieuwe belofte {#klant-die-eigenlijk-een-standaardpakket-nodig-heeft-portfolio-bewijst-met-vier-cases-dat-eenmanszaken-de-norm-zijn-het-tegenovergestelde-van-de-nieuwe-belofte}

**Persona:** Klant die eigenlijk een standaardpakket nodig heeft  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Lisa (34) heeft een eigen kapsalon en overweegt een nieuwe website. Ter verificatie bekijkt ze /portfolio. Ze ziet Chefs Connect, Auwt Aelse (bistro), IJssalon Italia (familie-ijssalon) en Stacy Kohnen (zangeres) — stuk voor stuk kleine, visuele one-pagers voor solo-ondernemers of lokale zaken, precies haar eigen schaal.

**Trust/behoefte-trigger.** Bewijs door precedent: 'als Dynique dit voor een ijssalon en een zangeres heeft gebouwd, is mijn kapperszaak duidelijk ook precies hun soort klant' — een logische conclusie op basis van het enige bewijs dat de site toont, maar precies de conclusie die de nieuwe positionering wil vermijden.

**Wat er nu misgaat.** De projects-array in src/app/portfolio/page.tsx (regels 21-67) toont vier cases, waarvan drie (Auwt Aelse, IJssalon Italia, Stacy Kohnen) expliciet eenmanszaak- of klein-bedrijf marketingsites zijn. De twee cases die het CaseStudyTemplate-sjabloon voor grotere projecten gebruiken (Chefs Connect, Auwt Aelse) hebben volgens docs/CRITIQUE-SITE-2026-07-14.md nog grotendeels lege content-secties. Er staat dus letterlijk geen enkele afgeronde case op de site die een groter bedrijf of een puur software-/systeemproject toont — terwijl PRODUCT.md's geloofsladder stap 3 juist rust op 'het bestaande portfolio bewijst dat dit vakmanschap al wordt geleverd'. Het portfolio bevestigt op dit moment het tegenovergestelde van die belofte.

**Award-winning oplossing.** Vervang de simpele grid door een 'Schaal-as': een horizontale tijdlijn-achtige balk bovenaan /portfolio, met een label 'Eenmanszaak' aan de ene kant en 'Grotere organisatie' aan de andere, waarop elke case als stip wordt geplot op basis van teamgrootte van de klant (Stacy Kohnen en IJssalon Italia dicht bij 'eenmanszaak', Chefs Connect dichter naar het midden als platform-project). Dit vraagt geen nieuwe case, geen verwijderde content — het herkadert eerlijk wat er al staat, in lijn met Design Principle 4 ('Eerlijk over schaal, geen overclaims'). Voeg een korte introzin toe boven de as: 'Dit is waar we vandaan komen — en waar we naartoe bouwen.' Zodra de eerste grotere maatwerk-softwarecase die PRODUCT.md noemt (bewust nog niet gepubliceerd) beschikbaar komt, verschijnt die simpelweg als nieuwe stip aan de andere kant van de as — geen herontwerp nodig, het component is er al op gebouwd. Een eerlijke schaal-as is precies het soort transparantie dat een jury noteert als lef, niet als zwakte.

### 6. De eigen prijsgids met concrete bedragen staat nergens gelinkt op het moment dat een bezoeker naar prijs zoekt {#klant-die-eigenlijk-een-standaardpakket-nodig-heeft-de-eigen-prijsgids-met-concrete-bedragen-staat-nergens-gelinkt-op-het-moment-dat-een-bezoeker-naar-prijs-zoekt}

**Persona:** Klant die eigenlijk een standaardpakket nodig heeft  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Tom (46) overweegt zijn verouderde bedrijfswebsite te vervangen en wil eerst weten of hij in de juiste prijsklasse zit voordat hij tijd investeert in een gesprek. Hij bezoekt achtereenvolgens de homepage, /diensten, /diensten/web en /contact, scannend op een bedrag.

**Trust/behoefte-trigger.** Prijsonzekerheid is het grootste obstakel vóór eerste contact voor een prijsbewuste standaardpakket-zoeker: hij wil weten of hij binnen budget zit vóórdat hij zijn tijd — en die van Dynique — investeert in een intake.

**Wat er nu misgaat.** src/app/blog/wat-kost-een-website/page.tsx bevat exact het antwoord dat Tom zoekt: vier concrete prijsklassen inclusief 'Een gemiddelde MKB-website begint bij ons rond €3.500' (regel 94) en een eerlijke uitleg van verborgen kosten per segment. Maar dit artikel wordt op geen van de vier onderzochte beslissingspunten gelinkt: niet vanuit de hero of CTA's op de homepage, niet vanuit /diensten/web (waar juist 'Bedrijfswebsite' als dienst wordt aangeboden zonder prijslabel, services-array regel 25-32), niet vanuit /contact, en niet vanuit /gratis-checklist. Alleen wie toevallig naar /blog navigeert en dit specifieke artikel zelf vindt, ziet ooit een concreet bedrag.

**Award-winning oplossing.** Bouw geen link toe, maar een levend antwoord: een compacte prijscalculator-widget, ingebed direct in de services-grid van /diensten/web (naast de 'Bedrijfswebsite'-kaart) — drie simpele keuzes (aantal pagina's: 5/10/15+, webshop ja/nee, doorlooptijd: standaard/spoed) die instant een indicatieve range tonen ('€3.500 – €5.200') gebaseerd op de segmenten uit de prijsgids, met een link 'Volledige prijsopbouw en vergelijking' naar het artikel zelf. Plaats een kleinere, statische versie van dezelfde indicatie in de conversieblok-sectie van de homepage (naast de bestaande 24u/100%/3-statistiekenrij, rond regel 970-983): 'Twijfel je over budget? Reken het na.' Dit is geen linkjes plakken maar het enige obstakel wegnemen vóórdat het gesteld hoeft te worden — en een interactieve prijscalculator is precies het soort element dat op een Awwwards-shortlist opvalt als functioneel én overtuigend, in plaats van decoratief.

### 7. Gratis-checklist is qua onderwerp exact voor deze persona geschreven — maar de e-mail komt nooit aan én de funnel erna negeert het volledig {#klant-die-eigenlijk-een-standaardpakket-nodig-heeft-gratis-checklist-is-qua-onderwerp-exact-voor-deze-persona-geschreven-maar-de-e-mail-komt-nooit-aan-n-de-funnel-erna-negeert-het-volledig}

**Persona:** Klant die eigenlijk een standaardpakket nodig heeft  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Nina (33) twijfelt zelf tussen WordPress, Webflow en Shopify voor haar kleine webshop. Ze vindt 'Gratis Website Checklist 2026' op /gratis-checklist, vult haar naam en e-mail in voor de PDF en klikt op 'DOWNLOAD PDF'.

**Trust/behoefte-trigger.** Ze verwacht platform-neutraal advies — de checklist belooft immers expliciet hulp bij 'Tech-stack keuze: WordPress, Webflow, Next.js of Shopify — welke past bij jouw situatie?' — én een vervolgtraject dat aansluit op haar kleine, nog niet vastomlijnde behoefte, en verwacht bovenal dat de PDF 'direct per mail' aankomt, zoals de pagina claimt.

**Wat er nu misgaat.** checklistItems in src/app/gratis-checklist/page.tsx (regel 11) erkent expliciet dat WordPress/Webflow/Shopify relevante opties zijn naast Next.js — een impliciete erkenning dat deze bezoeker mogelijk geen maatwerk-klant is. Maar de code in handleSubmit (regel 35-51) toont zelf de belofte 'Vul je gegevens in, ontvang de PDF direct per mail' (regel 113) terwijl de comment op regel 39 letterlijk zegt: '// In productie: stuur naam + e-mail ook naar API/Mailchimp/Resend.' — er gebeurt dus niets, de PDF wordt alleen client-side gedownload en Nina's e-mailadres verdwijnt in het niets. Erger: na de download stuurt setTimeout (regel 48-50) haar na 600ms door naar /bedankt, een generieke pagina die geen enkel onderscheid maakt naar waar de bezoeker vandaan kwam — dezelfde 'Bekijk portfolio / Lees het journaal'-CTA's als voor iedereen, en zelfs daar wordt de reactietijd-belofte nog eens anders verwoord ('24 uur — meestal binnen 2 uur', src/app/bedankt/page.tsx regel 52 en 58) dan op de contactpagina. Voor exact deze persona — iemand die net een platform-vergelijkende PDF 'downloadde' — bestaat er dus geen enkele opvolging die haar eigenlijke twijfel (WordPress/Shopify vs. maatwerk) ooit beantwoordt.

**Award-winning oplossing.** Twee onlosmakelijke stappen. Eerst de fundering: sluit de PDF-download aan op een echte backend (Formspree of Cloudflare Function volstaat, geen nieuwe infrastructuur nodig) zodat de al bestaande belofte 'direct per mail' eindelijk klopt — zonder dit is elke andere verbetering hier zinloos. Daarna het onderscheidende deel: maak /bedankt contextbewust via een 'from'-queryparameter (?from=checklist versus de bestaande ?name=... vanuit het contactformulier) en toon voor checklist-bezoekers een extra blok direct onder de bedank-tekst: 'Nog aan het kiezen tussen WordPress/Shopify en maatwerk?' met een korte, eerlijke vuistregel (onder ~5 pagina's en geen groeiplannen → prima met een standaardplatform; wél groeiplannen of meerdere systemen die moeten koppelen → praat met ons) en een link naar de n8n-blogpost als bewijs dat dit advies al eerder eerlijk is gegeven. Eén bedankpagina die zich aanpast aan waar de bezoeker vandaan kwam is een klein technisch ding met een groot vertrouwenseffect — het bewijst 'meedenken' op het enige moment dat deze persona nog aandacht heeft.

### 8. Contactformulier laat 'Website' kiezen naast 'Maatwerk software' — en behandelt beide daarna volledig identiek {#klant-die-eigenlijk-een-standaardpakket-nodig-heeft-contactformulier-laat-website-kiezen-naast-maatwerk-software-en-behandelt-beide-daarna-volledig-identiek}

**Persona:** Klant die eigenlijk een standaardpakket nodig heeft  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Bram (44) weet dat hij 'gewoon een website' nodig heeft, geen systeem. Hij opent het contactformulier op de homepage en moet een dienst kiezen uit de dropdown: Website, Web Applicatie, Webshop/E-commerce, Digitale Bedrijfsprocessen, AI Marketing, Drone & Video, Combinatie.

**Trust/behoefte-trigger.** Hij verwacht dat zijn keuze het vervolg beïnvloedt — een lichter traject, een indicatieve prijs, een kortere doorlooptijd — in plaats van een neutraal dataveld dat verder nergens in de flow iets doet.

**Wat er nu misgaat.** In zowel src/app/page.tsx (formData.projectType, select rond regel 1271-1287) als src/app/contact/page.tsx (SERVICES-array regel 24) is projectType slechts een select-waarde die direct in de WhatsApp-berichttekst wordt geplakt (handleWhatsAppSubmit, regel 150-162 resp. 87-100 in contact/page.tsx). Er is geen enkele conditionele logica die op basis van deze keuze een ander vervolgscherm, andere verwachtingstekst of andere prijsindicatie toont. Wie 'Website' kiest ziet exact dezelfde velden, dezelfde 'Ik wil een gesprek inplannen'-checkbox en dezelfde afsluitende microcopy als wie 'Maatwerk software' kiest — het formulier doet alsof het onderscheid maakt, maar behandelt elke aanvraag identiek.

**Award-winning oplossing.** Hergebruik het visuele taalpatroon van de Adviseur — die de site al heeft en die bezoekers al vertrouwen — in het gewone contactformulier: zodra formData.projectType wordt gekozen, verschijnt direct onder het veld een compact 'spec sheet'-paneel (dezelfde twee-koloms Aanpak/Tijdlijn-rijen als in Advisor.tsx, regel 474-487) met een live-ingevulde prijsrange en doorlooptijd. Kies iemand 'Website' of 'Webshop', dan toont het paneel: 'Vaste prijs vanaf €3.500 · 7-14 dagen · geen intake-traject.' Kies iemand 'Digitale Bedrijfsprocessen / Maatwerk software', dan toont het: 'Prijs bepaald na intake · scope-afhankelijk traject.' Dit is geen nieuw ontwerp maar een bestaand, al vertrouwd UI-patroon dat wordt hergebruikt op een tweede, minder opvallende plek — precies de consistentie die een jury waardeert boven een losstaand nieuw widget — en het laat het formulier eindelijk waarmaken wat de dropdown-keuze suggereert.

### 9. Eén 4-fasen 'Traject' voor iedereen — 'technisch ontwerp' en 'staging-omgeving' voor wie alleen een website wilde {#klant-die-eigenlijk-een-standaardpakket-nodig-heeft-en-4-fasen-traject-voor-iedereen-technisch-ontwerp-en-staging-omgeving-voor-wie-alleen-een-website-wilde}

**Persona:** Klant die eigenlijk een standaardpakket nodig heeft  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een bezoeker die op de homepage naar sectie 'Het Traject' scrolt (regel 808 e.v.) leest over 'Strategisch gesprek', 'Klikbaar prototype', 'Technisch ontwerp', 'Staging-omgeving' en 'Monitoring' — zwaar klinkende taal voor iemand die alleen een nieuwe bedrijfswebsite wilde, geen bedrijfssysteem.

**Trust/behoefte-trigger.** Hij vraagt zich af of dit hele, formele traject ook voor zijn kleine project geldt, durft niet te vragen of het lichter kan, en haakt af uit angst voor een te zwaar en te duur traject — of stapt blind in en is achteraf verrast door de zwaarte ervan.

**Wat er nu misgaat.** src/app/page.tsx (rond regel 808-936) toont één ongedifferentieerd 4-fasen-traject met deliverables als 'Technisch ontwerp' en 'Staging-omgeving' voor álle bezoekers, ongeacht of ze via de hero op 'MAATWERK SOFTWARE' of 'WEB APPLICATIES' klikten. Er is geen enkele visuele of tekstuele indicatie dat dit traject meeschaalt met scope — het leest bij eerste lezing als één-size-fits-all, wat voor een website-project (dat volgens /diensten/web slechts 7-14 dagen zou moeten duren) een tegenstrijdig, veel te zwaar signaal afgeeft.

**Award-winning oplossing.** Voeg boven de tijdlijn een schuifknop-paar toe — dezelfde pil-vormige stijl als de service-pills in de hero — 'WEBSITE (7-14 dagen)' en 'MAATWERK SOFTWARE (op maat)'. Bij 'WEBSITE' verkort de tijdlijn zich met een vloeiende height-transition (hergebruik van de bestaande .anim-animatiefamilie) naar een 2-fasen-variant ('Intake & ontwerp' / 'Bouwen & live') met kortere, concretere deliverables en een zichtbare doorlooptijd-badge die live meetelt. Dit hergebruikt bestaande styling-patronen (stap-kaarten, accentkleur-logica) en toont in één interactie dat het traject meebeweegt met de vraag — 'dynamisch in aanpak' niet alleen beweerd maar voelbaar bewezen, precies op het punt in de scrollflow waar een prijsbewuste bezoeker het meest twijfelt.

### 10. Homepage-FAQ beantwoordt acht vragen over systemen, maar niet de meest voor de hand liggende zelftwijfel-vraag {#klant-die-eigenlijk-een-standaardpakket-nodig-heeft-homepage-faq-beantwoordt-acht-vragen-over-systemen-maar-niet-de-meest-voor-de-hand-liggende-zelftwijfel-vraag}

**Persona:** Klant die eigenlijk een standaardpakket nodig heeft  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een bezoeker die twijfelt of zijn kleine behoefte hier wel op zijn plek is, scrolt naar de FAQ-sectie op de homepage in de hoop een vraag te vinden die zijn twijfel wegneemt: 'is dit ook iets voor mij, of ben ik hier te klein voor?'

**Trust/behoefte-trigger.** FAQ-secties zijn bij uitstek de plek waar bezoekers hun onuitgesproken bezwaar verwachten te vinden vóór ze zelf hoeven te vragen — het ontbreken ervan voelt als 'deze vraag is hier nooit gesteld, dus ben ik hier misschien niet welkom'.

**Wat er nu misgaat.** De faqs-array in src/app/page.tsx (regels 233-242) bevat exact acht vragen — doorlooptijd, werkgebied, aansluiten op bestaand systeem, beveiliging/dataeigendom, scope-wijzigingen, wel-of-geen webontwikkeling, nazorg, ontevredenheid — die stuk voor stuk al een softwareproject veronderstellen. Geen enkele vraag adresseert 'is een kant-en-klaar pakket niet goedkoper/sneller voor mij?' of 'werken jullie ook met WordPress/Shopify, of alleen maatwerk?' — precies de vraag die deze persona het hardst nodig heeft beantwoord te zien, en die de site zelf (via de n8n-blogpost, regel 75) al eerlijk kan beantwoorden.

**Award-winning oplossing.** Voeg als tweede FAQ-item — meteen na de doorlooptijd-vraag, die logisch de eerste blijft — toe: 'Is een kant-en-klaar pakket niet goedkoper voor mij?' met antwoord in dezelfde stem als de rest: 'Soms wel. Als je proces overeenkomt met wat een standaardtool of -pakket al goed doet, zeggen we dat gewoon — vraag ernaar in het eerste gesprek. Maatwerk loont pas zodra je bedrijf niet meer past in een gemiddeld sjabloon.' Markeer dit ene item subtiel anders dan de rest — een klein 'eerlijk'-icoontje of stipje in de goud-accentkleur naast de vraag zelf, consistent met hoe de Adviseur (case 1) en de n8n-blogpost dezelfde eerlijkheid al signaleren — zodat de FAQ-sectie zelf begint te functioneren als herkenbaar merkonderdeel in plaats van los te staan. Dit is tekstueel twintig seconden werk met het grootste vertrouwenseffect van de hele lijst, en staat als JSON-LD FAQPage-item (regel 246-259) zelfs kans om als rich snippet in Google te verschijnen.

### 11. De 'Eén Partner'-spectrumgrafiek op /diensten toont vier gelijkwaardige diensten — de 'wij doen alles'-indruk die de rebrand net probeert te vermijden {#klant-die-eigenlijk-een-standaardpakket-nodig-heeft-de-en-partner-spectrumgrafiek-op-diensten-toont-vier-gelijkwaardige-diensten-de-wij-doen-alles-indruk-die-de-rebrand-net-probeert-te-vermijden}

**Persona:** Klant die eigenlijk een standaardpakket nodig heeft  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een bezoeker die alleen social media en een eenvoudige website zoekt, opent /diensten en ziet in de hero een interactieve SVG-grafiek: vier gekleurde lijnen (Maatwerk Software, Web & Design, Digitale Marketing, Video & Aerial) die allemaal even dik en even prominent naar één centrale 'DYNIQUE'-hub lopen.

**Trust/behoefte-trigger.** Visuele gelijkwaardigheid van vier diensten bevestigt de indruk 'dit is een full-service bureau dat alles een beetje doet' — precies de indruk die PRODUCT.md wil vermijden ('AI-marketing en drone/video... dragen niet langer het eerste verhaal'), maar die deze specifieke grafiek juist versterkt voor wie op zoek is naar een van de kleinere, niet-kern diensten.

**Wat er nu misgaat.** In src/app/diensten/page.tsx (regels 154-171) tekent de SVG vier paden met identieke strokeWidth (1.5), identieke animatiesnelheid (specDash, regel 160/370) en identiek gepositioneerde labels — er is geen enkel visueel gewicht dat 'Maatwerk Software' (i=0) laat opvallen ten opzichte van 'Video & Aerial' (i=3). De tekst eronder zegt wel 'Maatwerk software als fundament, de rest sluit erop aan' (regel 192-193), maar de grafiek erboven communiceert het tegenovergestelde: vier gelijke spaken naar dezelfde hub.

**Award-winning oplossing.** Pas de SVG-parameters aan zodat het beeld de tekst ondersteunt in plaats van tegenspreekt: geef het pad naar 'Maatwerk Software' (i=0) strokeWidth 3 in plaats van 1.5, volledige opaciteit en een langzamer, nadrukkelijker pulserend dash-ritme, terwijl de overige drie paden dunner (1px) en met lagere opacity (0.45) renderen — het oog volgt vanzelf eerst het maatwerk-pad naar de hub. Voeg een klein label 'FUNDAMENT' toe naast het Maatwerk Software-punt, in de bestaande goud-accentkleur en typografische stijl van de andere labels. Dit is een parameterwijziging in bestaand SVG-markup (geen nieuw component, geen nieuwe library) die de belangrijkste single-page-inconsistentie tussen visueel ontwerp en copy op de hele diensten-hub oplost.

### 12. De contactpagina belooft in dezelfde adem '2 uur' en '24 uur' reactietijd — en de bedankpagina voegt een derde variant toe {#klant-die-eigenlijk-een-standaardpakket-nodig-heeft-de-contactpagina-belooft-in-dezelfde-adem-2-uur-en-24-uur-reactietijd-en-de-bedankpagina-voegt-een-derde-variant-toe}

**Persona:** Klant die eigenlijk een standaardpakket nodig heeft  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Een kritische, prijsbewuste ondernemer die nog twijfelt of dit traject wel bij zijn kleine behoefte past, leest de contactpagina extra aandachtig op zoek naar reden om wél of niet te vertrouwen. Hij ziet de introtekst 'We reageren altijd binnen 24 uur — meestal veel eerder' en twee regels lager in de DETAILS-lijst 'REACTIETIJD: Binnen 2 uur (ma–za, 9–20u)'.

**Trust/behoefte-trigger.** Voor iemand die toch al twijfelt of dit bedrijf 'te groot/te officieel' voor zijn kleine klus is, is een simpele feitelijke tegenstrijdigheid op de meest formele pagina van de site een signaal dat de zorgvuldigheid die wordt beloofd ('doordacht en precies') niet overal wordt waargemaakt — precies het detail dat een prijsbewuste vergelijker onthoudt en meeneemt naar de vergelijking met een concurrent.

**Wat er nu misgaat.** src/app/contact/page.tsx regel 134 ('We reageren altijd binnen 24 uur — meestal veel eerder') en regel 13 (DETAILS-array: 'Binnen 2 uur (ma–za, 9–20u)') spreken elkaar op dezelfde pagina, binnen één scrollbeweging, tegen — exact zoals docs/CRITIQUE-SITE-2026-07-14.md dit al in juli signaleerde en dat kennelijk nog niet is opgelost. Het gaat verder dan één pagina: src/app/bedankt/page.tsx (regel 52 en 58) — de pagina waar precies deze bezoeker na het versturen van het formulier terechtkomt — herhaalt nog een derde formulering: 'We reageren binnen 24 uur — meestal binnen 2 uur op werkdagen.' Drie net iets andere beloftes op drie plekken in dezelfde flow, geen daarvan technisch fout, maar bij elkaar precies het tegenovergestelde van precisie.

**Award-winning oplossing.** Kies één getal — 2 uur is, gezien de sticky WhatsApp-knop en het kleine team, ambitieus maar haalbaar — en maak /contact (regel 134) en /bedankt (regel 52/58) er woordelijk consistent mee: 'We reageren binnen 2 uur (ma–za, 9–20u) — meestal sneller.' Voeg voor extra geloofwaardigheid een live-indicator toe naast de REACTIETIJD-regel in DETAILS: een klein bolletje dat op basis van de huidige tijd (eenvoudige client-side Date-check, geen backend nodig) wisselt tussen 'Nu bereikbaar' (groen) en 'Reageert morgenvroeg' (grijs). Dit soort kleine, verifieerbare precisie — een claim die zichzelf in real time bewijst in plaats van alleen beweert — is exact het bewijs-door-precisie dat Design Principle 1 uit PRODUCT.md vraagt, en tegelijk de meest zichtbare inconsistentie van de hele site definitief opgelost.

### 13. /eerste-website is een onvindbare wees-pagina die exact deze persona aantrekt maar geen enkel ijkpunt geeft {#klant-die-eigenlijk-een-standaardpakket-nodig-heeft-eerste-website-is-een-onvindbare-wees-pagina-die-exact-deze-persona-aantrekt-maar-geen-enkel-ijkpunt-geeft}

**Persona:** Klant die eigenlijk een standaardpakket nodig heeft  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Iemand die voor het eerst een website voor zijn bedrijf overweegt, googelt 'eerste website bedrijf laten maken' en landt via een oude backlink of resterende zoekindexering direct op /eerste-website, zonder ooit de homepage te hebben gezien.

**Trust/behoefte-trigger.** Hij ziet stevige, systeem-achtige taal ('geen sjabloon, maar een structuur die past bij hoe je bedrijf al werkt') voor wat voor hem een eenvoudige eerste stap zou moeten zijn, en heeft geen enkele manier om te navigeren naar iets dat zijn verwachting bevestigt of bijstelt — de pagina staat volgens docs/CRITIQUE-SITE-2026-07-14.md nergens gelinkt vanuit Header, Footer, homepage of de Adviseur-quiz, alleen nog in sitemap.ts.

**Wat er nu misgaat.** src/app/eerste-website/page.tsx is qua styling wél al bijgewerkt naar het goud-accent (regel 67-68: rgba(212,165,116,...) gold glow) en heeft een eigen, werkende handleWhatsAppSubmit (regel 41-57), maar blijft functioneel een geïsoleerd eiland: geen link terug naar /diensten/web voor prijscontext, geen link naar de Adviseur, geen vermelding van het €3.500-ijkpunt dat elders op de site wél bestaat (blog/wat-kost-een-website, regel 94). Voor deze specifieke persona — per definitie de meest prijs- en scope-onzekere bezoeker van de hele site — is dit de enige pagina die hij ooit ziet, en die pagina laat hem zonder enig houvast achter.

**Award-winning oplossing.** Voeg bovenaan /eerste-website, in de hero naast de bestaande gold-glow, een concreet ijkpunt toe: 'Vaste prijs vanaf €3.500 · live binnen 7-14 dagen' (consistent met de blogprijsgids en /diensten/web) zodat de pagina zelfstandig, zonder navigatie-context, meteen een eerlijk verwachtingskader geeft. Maak daarnaast een bewuste, definitieve keuze in plaats van de pagina langer in niemandsland te laten bestaan: óf neem hem op in het hoofdmenu onder Diensten als expliciete instapoptie voor starters, óf zet een 301-redirect naar /diensten/web zodat het resterende zoekverkeer niet verloren gaat maar wél in de hoofdstroom terechtkomt — en verwijder de route dan ook uit sitemap.ts. Beide keuzes zijn beter dan de huidige derde optie: een pagina die google nog steeds vindt, wél converteert, maar structureel niemand bewust naartoe stuurt.

### 14. WhatsApp-berichtsjabloon geeft de founder geen signaal om een 'dit is overkill voor jou'-gesprek te herkennen vóór het gesprek begint {#klant-die-eigenlijk-een-standaardpakket-nodig-heeft-whatsapp-berichtsjabloon-geeft-de-founder-geen-signaal-om-een-dit-is-overkill-voor-jou-gesprek-te-herkennen-vr-het-gesprek-begint}

**Persona:** Klant die eigenlijk een standaardpakket nodig heeft  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een bezoeker vult het homepage-contactformulier in, kiest 'Website' bij 'Wat heb je nodig?' en typt in de omschrijving 'Ik wil gewoon een simpele site met openingstijden en een contactformulier'. Hij verwacht dat dit duidelijke, kleine signaal ook als zodanig bij Dynique aankomt.

**Trust/behoefte-trigger.** Hij vertrouwt erop dat een expliciet 'simpel'-signaal in zijn eigen tekst wordt opgepikt en dat het vervolggesprek daarop is afgestemd — niet dat hij alsnog wordt behandeld als een systeem-op-maat-aanvraag totdat iemand hardop zegt dat dit te klein voor hen is.

**Wat er nu misgaat.** handleWhatsAppSubmit in src/app/page.tsx (regels 150-162) en submit in src/app/contact/page.tsx (regels 87-100) bouwen een WhatsApp-bericht met een vaste structuur (Naam/Bedrijf/Project/Omschrijving) die voor elk projectType identiek is — er is geen enkele code-laag die op basis van formData.projectType === 'Website' een ander sjabloon of een automatische prijsindicatie meestuurt. Alle triage gebeurt dus pas mondeling, ná verzending, wat het risico vergroot dat een simpele aanvraag alsnog eerst door een zwaardere intake-reflex gaat voordat iemand hardop zegt 'eigenlijk is dit voor jou te klein'.

**Award-winning oplossing.** Voeg in beide handleSubmit-functies een conditionele regel toe die alléén verschijnt wanneer formData.projectType 'Website' of 'Webshop' is — en hergebruik daarbij dezelfde prijsindicatie-logica die in case 8 al als spec-sheet-paneel op het formulier zelf wordt getoond, zodat beide verbeteringen uit één databron komen: `message += '\n💡 Indicatie op basis van keuze: websites starten bij ons vanaf €3.500, 7-14 dagen.\n'`. Zo ziet de founder bij het openen van het WhatsApp-bericht meteen of de klant al een prijsverwachting heeft (of juist niet — een goed startpunt voor het gesprek), in plaats van dat blind moet worden ingeschat. Eén regel toevoegen aan een bestaande functie, zonder nieuwe UI, die het gat tussen 'wat de klant typt' en 'wat de eerste reactie kan zijn' sluit voor precies het scenario waarin een snelle, eerlijke 'dit past niet bij ons, probeer X' de meeste waarde oplevert.

### 15. De eigen 'standaardtool volstaat soms'-nuance uit de n8n-blogpost duikt nergens op in de hoofdtekst van de automatiserings-route van de Adviseur {#klant-die-eigenlijk-een-standaardpakket-nodig-heeft-de-eigen-standaardtool-volstaat-soms-nuance-uit-de-n8n-blogpost-duikt-nergens-op-in-de-hoofdtekst-van-de-automatiserings-route-van-de-adviseur}

**Persona:** Klant die eigenlijk een standaardpakket nodig heeft  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een bezoeker die via de Adviseur 'We werken nog met losse tools' → 'Minder handwerk, meer automatisch' beantwoordt, krijgt het advies 'Je processen automatiseren' met CTA 'BEKIJK MAATWERK SOFTWARE'. Hij heeft feitelijk misschien maar één simpele koppeling nodig — formulier naar mail — niet een volledig maatwerktraject.

**Trust/behoefte-trigger.** Hij verwacht, gezien de eerder ervaren 'eerlijke adviseur'-belofte, dat een goedkoper alternatief ook hier ter sprake komt — juist omdat hij op dit exacte punt in de funnel zit, en het bedrijf deze nuance elders (de n8n-blogpost) zelf al hardop uitspreekt.

**Wat er nu misgaat.** In src/components/Advisor.tsx bevat het secondary-object (regel 146-153) wél een link naar de n8n-blogpost, maar uitsluitend als secundaire, kleine tekstlink onderaan het resultaat ('Lees: automatiseren — standaardtool of maatwerk?'), en alleen wanneer goal==='handwerk'||'koppelen'. De hoofdboodschap van het resultaatscherm — SERVICES.automatisering.points (regel 80-85) — blijft onvoorwaardelijk gericht op 'Bekijk maatwerk software' zonder ooit de eigen nuance ('voor één losse taak kan een standaardtool prima zijn', n8n-blogpost regel 75) in de hoofdtekst te herhalen. De eerlijke nuance bestaat dus wél in de codebase, maar wordt op het belangrijkste beslismoment weggestopt achter een kleine, makkelijk over het hoofd te ziene link — hetzelfde patroon als case 1, maar dan binnen de drie bestaande uitkomsten in plaats van als vierde uitkomst.

**Award-winning oplossing.** Voeg in SERVICES.automatisering.points (regel 80-85) een vierde, eerlijk geformuleerd punt toe direct vóór de bestaande drie, met een klein visueel 'eerlijk'-icoontje ervoor — hetzelfde subtiele signaal dat case 9 op de FAQ voorstelt, zodat er over de hele site één herkenbaar merkelement ontstaat voor 'dit is de eigenzinnig eerlijke opmerking': 'Gaat het om één losse, simpele koppeling die je zelden aanpast? Dan is een tool als Zapier of Make vaak al genoeg — vraag ernaar in het gesprek.' Dit plaatst de nuance in de hoofdflow van het advies zelf, niet als voetnoot, en is één regel toevoegen aan een bestaand array-object — geen nieuwe component, geen nieuwe styling, maximale impact voor minimale wijziging, en samen met case 1 en case 9 het begin van een consistente, herkenbare 'eerlijkheids-signatuur' die door de hele site loopt in plaats van los in drie bestanden te bestaan.

---

## Sectorspecifieke klant (bouw/zorg/logistiek/installatie) die zich niet herkent

### 1. De 'chaos naar duidelijkheid'-demo op de bouwpagina toont een boekhoudscherm met CRM-jargon, geen bouwplaats {#sectorspecifieke-klant-bouwzorglogistiekinstallatie-die-zich-niet-herkent-de-chaos-naar-duidelijkheid-demo-op-de-bouwpagina-toont-een-boekhoudscherm-met-crm-jargon-geen-bouwplaats}

**Persona:** Eigenaar bouwbedrijf (25 medewerkers, werkt met vaste onderaannemers)  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Piet, eigenaar van een bouwbedrijf met 25 medewerkers, krijgt van zijn boekhouder te horen dat de facturatie drie weken achterloopt omdat werkbonnen zoekraken tussen WhatsApp en papier. Nog dezelfde avond googelt hij 'maatwerk software bouwbedrijf' en landt op /maatwerk-software/bouw. De pijnsectie ('Op de bouwplaats loopt het. Maar achter de schermen verdwijnt er tijd in werkbonnen op papier, uren in Excel en calculaties in losse sheets') leest alsof iemand hem heeft afgeluisterd. Hij scrolt door, vol vertrouwen.

**Trust/behoefte-trigger.** Bij de sectie 'VAN CHAOS NAAR DUIDELIJKHEID' begint hij de before/after-slider te scrubben, in de verwachting eindelijk het bewijs te zien: een werkbon met foto en handtekening die verandert in een strak overzicht. In plaats daarvan verschijnt een generiek dashboard met de foutmelding 'Synchronisatie mislukt — CRM ↔ boekhouding' en een sidebar met 'Overzicht / Klanten / Facturen / Planning'. Geen bouwplaats, geen werkbon, geen woord dat aan zijn vak refereert — het ene interactieve bewijsstuk op de pagina spreekt de sectorherkenning van de vorige twee secties tegen.

**Wat er nu misgaat.** `BeforeScreen` en `AfterScreen` in src/components/processen/Visuals.tsx (regels 13-55 en 57-115) zijn twee vaste, sector-agnostische componenten: dezelfde tekst 'Synchronisatie mislukt — CRM ↔ boekhouding' (regel 28), dezelfde sidebar-items 'Overzicht, Klanten, Facturen, Planning' (regel 68) en dezelfde afsluitende checklist 'Offerte automatisch verstuurd / Factuur gekoppeld & betaald / Klant ingepland' (regel 104) worden ongewijzigd hergebruikt door alle vier sectorpagina's via SectorTemplate.tsx. Het is het grootste, meest interactieve element op de pagina — en het enige stuk content dat niet meebeweegt met `SectorData`, terwijl hero, pains en features dat wel doen.

**Award-winning oplossing.** Bouw de 'Bewijsslider' opnieuw als een tactiele metafoor in plaats van een tekstwissel: het BEFORE-scherm wordt gerenderd als een licht gekanteld, papier-getextureerd artefact — een gescande werkbon met ballpoint-krabbel, koffievlek-vignet en een gescheurde rand — dat bij het scrubben letterlijk 'digitaliseert' tot het strakke NA-scherm, met dezelfde `useBeforeAfterScrub`-mechanica die al bestaat. Voeg aan `SectorData` een veld `artifact` toe (bouw: werkbon met foto-bijlage en projectcode; zorg: cliëntrooster met AVG-badge; logistiek: rittenkaart met kenteken en laadmeters; installatie: onderhoudscontract met vervaldatum-teller). De techniek verandert niet — alleen wat er letterlijk op het papier staat — maar het effect is dat elke sector zijn eigen, herkenbare rommel ziet vergaan tot orde in plaats van een generiek CRM-scherm, wat dit van een copy-fix naar een onderscheidend, awardwaardig kernstuk van de pagina tilt.

### 2. Zorgpagina noemt geen enkel ECD/EPD en maakt geen onderscheid tussen zorgtypen — 'we sluiten aan op wat je al gebruikt' is een onbewezen belofte {#sectorspecifieke-klant-bouwzorglogistiekinstallatie-die-zich-niet-herkent-zorgpagina-noemt-geen-enkel-ecdepd-en-maakt-geen-onderscheid-tussen-zorgtypen-we-sluiten-aan-op-wat-je-al-gebruikt-is-een-onbewezen-belofte}

**Persona:** Locatiemanager kleinschalige zorginstelling (Wlz-gefinancierde gehandicaptenzorg, 12 cliënten)  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Ingrid, locatiemanager van een kleinschalige woonvoorziening voor mensen met een verstandelijke beperking, moet morgen een IGJ-praktijkrapportage indienen en is haar huidige ECD zat: het dwingt haar rapportagevelden in een vorm die niet aansluit op hoe haar team daadwerkelijk werkt. Ze opent /maatwerk-software/zorg tussen twee overdrachtsmomenten door, op zoek naar een partij die haar specifieke situatie — Wlz-gefinancierd, gehandicaptenzorg, klein team — snapt.

**Trust/behoefte-trigger.** De pagina belooft 'Veilig cliënt- & dossieroverzicht... AVG-proof' en een feature 'Koppelingen met bestaande systemen — we sluiten aan op wat je al gebruikt, zodat niets dubbel hoeft te worden ingevoerd' (regel 43). Nergens wordt een concreet systeem genoemd (Nedap ONS, Medimo, Cura) of onderscheid gemaakt tussen zorgtypen (VVT, GGZ, gehandicaptenzorg, jeugd-/kraamzorg) — stuk voor stuk met andere workflows en financieringsstromen (Wlz/Zvw/Wmo). Voor Ingrid, die in de sector werkt, voelt 'we sluiten aan op wat je al gebruikt' als een zin die evengoed op een boekhoudpakket zou passen — ongefundeerd zonder een naam die ze herkent.

**Wat er nu misgaat.** src/app/maatwerk-software/zorg/page.tsx (regels 27-44) blijft uitsluitend bij generieke termen — 'roosters', 'cliëntgegevens', 'rapportages', 'AVG-proof' — zonder enige vermelding van Wlz/Zvw/Wmo, een ECD/EPD-naam, of een zorgtype-onderscheid. Voor een doelgroep die PRODUCT.md omschrijft als 'grotere bedrijven' met 'meer behoefte aan bewijs' is dit te vaag om als sectorkennis te worden gelezen — het is dezelfde tekstdiepte als de drie andere sectorpagina's, ondanks dat zorg de zwaarste compliance-last van de vier draagt.

**Award-winning oplossing.** Voeg direct onder de pijnsectie een 'ECD-koppelcheck' toe: een klein invoerveld ('Welk systeem gebruiken jullie nu?') dat bij een herkende naam (Nedap ONS, Medimo, Cura, ONS Planning) direct antwoordt 'Koppeling bestaat al — vertellen we je er meer over' en bij een onbekende naam 'Nog niet gebouwd. Wordt onderdeel van je procesanalyse, niet van een verkooppraatje' — een functioneel, klein tool-moment in plaats van een belofte in tekst. Combineer dit met een zorgtype-selector (VVT/ouderenzorg, gehandicaptenzorg, GGZ, jeugd-/kraamzorg) die de pains-tekst live laat meebewegen (GGZ: 'Behandelplannen en ROM-metingen die los van elkaar leven' i.p.v. de huidige generieke roosterclaim). Concreet, verifieerbaar en interactief — precies het soort bewijs-door-precisie dat Design Principle 1 uit PRODUCT.md voorschrijft.

### 3. 'Bekijk ons werk' stuurt elke sectorlead naar een portfolio van vier horeca/muziek-websites — en een van de vijf bestaande cases staat daar zelfs niet eens in {#sectorspecifieke-klant-bouwzorglogistiekinstallatie-die-zich-niet-herkent-bekijk-ons-werk-stuurt-elke-sectorlead-naar-een-portfolio-van-vier-horecamuziek-websites-en-een-van-de-vijf-bestaande-cases-staat-daar-zelfs-niet-eens-in}

**Persona:** Operationeel directeur installatiebedrijf (40 monteurs) — zoekt bewijs vóór het aanvragen van een procesanalyse  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Marcel, operationeel directeur van een installatiebedrijf met 40 monteurs, is overtuigd door de pijnherkenning op /maatwerk-software/installatiebedrijf, maar wil eerst bewijs zien voordat hij een gratis procesanalyse aanvraagt — hij heeft eerder geld verloren aan een implementatie die op papier goed klonk. Hij klikt op de link 'Bekijk ons werk' naast de sub-CTA in de hero.

**Trust/behoefte-trigger.** Hij verwacht een case over planningsoftware of een werkbon-app. In plaats daarvan komt hij op /portfolio en ziet vier projecten in de grid — Chefs Connect, Auwt Aelse, IJssalon Italia, Stacy Kohnen — stuk voor stuk consumentgerichte horeca- of muziekwebsites zonder enige operationele component. Het vijfde bestaande case-project, Creemers Exclusive, staat niet eens in de zichtbare grid: het heeft een eigen pagina (/portfolio/creemers-exclusive) maar wordt nergens vanaf de portfolio-index gelinkt. Marcel ziet dus letterlijk het smalste, minst relevante deel van wat er bestaat.

**Wat er nu misgaat.** De `projects`-array in src/app/portfolio/page.tsx (regels 20-66) bevat precies 4 items, geen daarvan geframed als bewijs van software- of operationeel werk; Creemers Exclusive bestaat als vijfde case study maar ontbreekt in deze array. Dit is exact wat docs/CRITIQUE-SITE-2026-07-14.md als P0 markeert ('Er staat nergens écht bewijs van softwarewerk') en breekt PRODUCT.md's geloofsladder-stap 3 direct voor de doelgroep die de sectorpagina's targeten — met als extra wrijving dat zelfs het onvolledige bewijs dat er wél is, niet volledig ontsloten wordt.

**Award-winning oplossing.** Vervang de neutrale doorverwijzing op elke sectorpagina door een eerlijk 'Waar we nu staan'-blok direct onder de featuressectie, met een visuele categorie-tab op /portfolio zelf: 'Web & merk' (de huidige 4-5 cases, zichtbaar) naast 'Maatwerk software (in aanbouw)' — met daarin geen lege pagina, maar een bewust ontworpen 'silhouet-kaart': een wazige, NDA-gestempelde schermafbeelding van het lopende softwaretraject met de tekst 'Onder NDA — vraag ernaar in het gesprek'. Dat zet de merkwaarde 'eigenzinnig eerlijk' letterlijk in beeld in plaats van de bezoeker stilzwijgend door te sturen naar bewijs dat niet aansluit, en maakt van een zwakte een doelbewust, herkenbaar ontwerpelement.

### 4. De reviewsectie opent altijd op Creemers Exclusive — vijf citaten, stuk voor stuk horeca/creatief, geen enkele stem uit bouw, zorg, logistiek of installatie {#sectorspecifieke-klant-bouwzorglogistiekinstallatie-die-zich-niet-herkent-de-reviewsectie-opent-altijd-op-creemers-exclusive-vijf-citaten-stuk-voor-stuk-horecacreatief-geen-enkele-stem-uit-bouw-zorg-logistiek-of-installatie}

**Persona:** Financieel directeur transportbedrijf (30 vrachtwagens, NL-BE) — scant reviews vóór formulier-invulling  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Sanne, financieel directeur van een transportbedrijf met 30 vrachtwagens op NL-BE-trajecten, heeft de logistiekpagina gelezen en scrolt terug naar de homepage-reviewsectie om die te checken voordat ze het formulier invult — standaard leveranciersgedrag bij een organisatie van haar omvang.

**Trust/behoefte-trigger.** De sectie opent (via `reviewIdx`, geïnitialiseerd op `useState(0)`, src/app/page.tsx regel 72) altijd op dezelfde eerste review uit de array van vijf (regels 609-664): Tom Creemers over 'AI-visuals' en 'binnen drie dagen live'. Ze klikt door de rest — Stacy Kohnen, Wally & Roger (IJssalon), Mitchell & Gert-Jan (Chefs Connect), Team Auwt Aelse — en elke quote gaat over sfeer, snelheid of een mooie website, geen enkele over software, planning of operationele processen. Haar exacte twijfel ('begrijpen ze mijn wereld, of ben ik een uitzondering op hun portfolio?') wordt hier bevestigd in plaats van weggenomen.

**Wat er nu misgaat.** De `reviews`-array (src/app/page.tsx, regels 609-664) verwijst één-op-één naar de bestaande portfolio-projecten — zelfde onderliggende oorzaak als het portfolio-probleem in case 3, maar getroffen scherm en gedragspatroon (reviews scannen vóór het formulier, vaak de laatste check) verschillen genoeg om apart te wegen. `reviewIdx` start bovendien altijd bij 0, ongeacht binnenkomstpad, dus zelfs een sectorbezoeker met een sterkere match verderop in de array ziet eerst de minst relevante quote.

**Award-winning oplossing.** Detecteer bij binnenkomst via een sectorpagina (referrer of `?van=`-param op de WhatsApp/CTA-links) en initialiseer `reviewIdx` op de review met de hoogste tekstuele overlap met die sector in plaats van altijd op 0 — een kleine routing-wijziging op een al bestaande state. Voeg daarnaast op alle vier sectorpagina's, waar nu geen enkele reviewverwijzing staat, een eerlijke voortgangsstrip toe: geen nepcitaat, maar een concreet, tastbaar statusblok ('Bouw-referentie in opbouw — fase 2 van 4 live') dat periodiek update-baar is. Dat geeft de bezoeker iets waars om aan vast te houden in plaats van stilte of een mismatch, en is precies het soort transparante voortgangsdenken dat een jury als merkconsistent zou lezen.

### 5. Het 4-stappenproces — inclusief de kop 'waar het werk gebeurt' — staat woord-voor-woord identiek op alle vier sectorpagina's {#sectorspecifieke-klant-bouwzorglogistiekinstallatie-die-zich-niet-herkent-het-4-stappenproces-inclusief-de-kop-waar-het-werk-gebeurt-staat-woord-voor-woord-identiek-op-alle-vier-sectorpaginas}

**Persona:** DGA familiebedrijf met zowel bouw- als installatietak — vergelijkt twee sectorpagina's naast elkaar  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Rob, DGA van een familiebedrijf met een aannemerstak én een installatietak (verwarming/sanitair), opent bewust /maatwerk-software/bouw en /maatwerk-software/installatiebedrijf in twee tabbladen naast elkaar om te vergelijken welke aanpak het beste past bij welke tak van zijn bedrijf.

**Trust/behoefte-trigger.** Bij het vergelijken ziet hij dat de sectie 'Er is geen betere plek om je processen te begrijpen dan waar het werk gebeurt' met de vier stappen (01 Op locatie / 02 Procesanalyse / 03 Voorstel op maat / 04 Bouwen met code) op beide tabbladen tot op de letter identiek is — zelfs 'waar het werk gebeurt' is niet vertaald naar 'de bouwplaats' of 'bij de monteur in de bus'. Op dat moment kantelt zijn beeld van 'ze hebben dit voor mijn sector geschreven' naar 'dit is een sjabloon met een titel erboven' — en die twijfel besmet met terugwerkende kracht de wél sectorspecifieke tekst die hij daarvoor las.

**Wat er nu misgaat.** De `STEPS`-constante staat hardcoded bovenaan src/components/SectorTemplate.tsx (regels 33-38) en wordt voor alle vier sectoren identiek gerenderd — het enige grote contentblok op de pagina dat niet via de `SectorData`-prop parametriseerbaar is, terwijl hero, pains, features, sliderSub en de founder-quote dat wél zijn. Het staat bovendien tussen twee wél-gepersonaliseerde secties in, wat het contrast extra zichtbaar maakt voor precies de vergelijkende bezoeker die twee tabbladen naast elkaar legt.

**Award-winning oplossing.** Voeg `steps?: {n:string;t:string;d:string; icon:string}[]` toe aan `SectorData` met een neutrale default, en vul per sector een variant met een eigen icoon en locatiewoord: bouw '01 Op de bouwplaats' met een bouwkraan-lijnicoon, zorg '01 Bij de cliënt thuis of op locatie' met een sleutelbos-icoon, logistiek '01 Op het depot of onderweg' met een vrachtwagen-icoon, installatie '01 Bij de monteur in de bus' met een schroevendraaier-icoon — zodat de stap zelf, niet alleen de featurelijst erboven, meteen sectorherkenning geeft. Kleine, op het bestaande patroon voortbordurende wijziging met een disproportioneel groot vertrouwenseffect voor exact de vergelijkende inkoper die PRODUCT.md als doelgroep beschrijft.

### 6. De 'oprichter'-quote onderaan elke sectorpagina is een mail-merge met alleen de sectornaam als losse variabele {#sectorspecifieke-klant-bouwzorglogistiekinstallatie-die-zich-niet-herkent-de-oprichter-quote-onderaan-elke-sectorpagina-is-een-mail-merge-met-alleen-de-sectornaam-als-losse-variabele}

**Persona:** Operations-manager thuiszorgorganisatie — hecht expliciet aan een persoonlijke, niet-anonieme partij  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Chantal, operations-manager bij een thuiszorgorganisatie, leest de 'founder voice'-sectie op /maatwerk-software/zorg vlak voor ze het formulier invult. Ze heeft eerder een traject met een logge IT-consultancy achter de rug (exact de anti-referentie uit PRODUCT.md) en hecht daarom expliciet aan een oprichter die zichtbaar en persoonlijk betrokken is — dat is voor haar de doorslaggevende reden om überhaupt een klein bureau te overwegen.

**Trust/behoefte-trigger.** De quote luidt: '"Ik breng eerst in kaart hoe jullie in de zorg nu werken — niet hoe een standaardpakket denkt dat het zou moeten. Inclusief een eigen mening, als ik ergens een betere oplossing zie."' Ze herinnert zich dat ze diezelfde week, ter oriëntatie voor een kennis met een aannemersbedrijf, ook de bouwpagina had geopend — waar exact dezelfde twee zinnen stonden, met alleen 'de bouw' in plaats van 'de zorg'. Het voelt niet als een oprichter die over zorg heeft nagedacht, maar als een variabele in een template.

**Wat er nu misgaat.** In SectorTemplate.tsx (regels 262-273) is de quote hardcoded met uitsluitend `{data.sectorPhrase}` als vervangbare variabele — toon, structuur en beide zinnen zijn voor alle sectoren identiek. Dit ondermijnt Design Principle 3 uit PRODUCT.md ('Persoonlijk, niet anoniem... geen gezichtloos bureau') op precies het scherm-element dat dat had moeten bewijzen, en juist bij het type bezoeker (Chantal) voor wie deze waarde de doorslag geeft.

**Award-winning oplossing.** Vervang de sjabloonzin door vier inhoudelijk verschillende, sector-specifieke uitspraken (via een nieuw `founderQuote`-veld in `SectorData`) die elk een concreet risico uit dat vakgebied benoemen: zorg — '"Ik heb liever dat een rapportage twee minuten langer duurt en klopt, dan dat hij automatisch gegenereerd wordt en een verkeerde medicatietijd bevat."'; bouw — iets over een calculatiefout die pas bij oplevering opvalt; logistiek — over een gemiste levering door een niet-gesynchroniseerde planning; installatie — over een vergeten onderhoudsbeurt die een garantieclaim kost. Eén zin per sector die inhoudelijke kennis toont in plaats van een herbruikbare procesbelofte — en die, omdat hij een concreet risico benoemt in plaats van een vaag voordeel, precies het 'eigen mening, ongevraagd' effect heeft dat PRODUCT.md als merkwaarde noemt.

### 7. Logistiekpagina mist CMR, tachograaf, ADR en rij- en rusttijden — precies de termen die een planner laten zien of dit een vakgenoot is {#sectorspecifieke-klant-bouwzorglogistiekinstallatie-die-zich-niet-herkent-logistiekpagina-mist-cmr-tachograaf-adr-en-rij--en-rusttijden-precies-de-termen-die-een-planner-laten-zien-of-dit-een-vakgenoot-is}

**Persona:** Planner/mede-eigenaar transportbedrijf (18 combinaties, grensoverschrijdend NL-BE-DE)  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Danny, planner/mede-eigenaar van een transportbedrijf met 18 trekker-opleggercombinaties die grensoverschrijdend rijdt, leest /maatwerk-software/logistiek op zoek naar een partij die zijn TMS-koppeling en chauffeursplanning ook op regelgevingsniveau begrijpt — niet alleen op UI-niveau.

**Trust/behoefte-trigger.** Hij leest de vier pain-kaarten RITPLANNING/ORDERS/TRACK & TRACE/VOORRAAD (src/app/maatwerk-software/logistiek/page.tsx, regels 32-37) en de featurelijst 'Rit- & orderplanning', 'Realtime status & track & trace', 'Voorraad- & magazijnoverzicht', 'Koppeling met je TMS & boekhouding' (regels 39-44), en mist precies de termen die voor hem het verschil maken tussen generieke planningssoftware en een partij die transport kent: CMR-vrachtbrief, rij- en rusttijden/tachograafdata, ADR (gevaarlijke stoffen), laadmeters/venstertijden. Voor hem leest de pagina als 'iemand die TMS heeft opgezocht', niet als iemand die weet wat een rij- en rusttijdoverschrijding een vervoerder kan kosten.

**Wat er nu misgaat.** src/app/maatwerk-software/logistiek/page.tsx gebruikt uitsluitend 'ritplanning', 'track & trace', 'voorraad' en 'TMS' — functionele buzzwoorden zonder één operationeel of wettelijk detail dat uniek is voor beroepsgoederenvervoer, terwijl juist rij- en rusttijden en ADR-certificering de zwaarste regeldruk in de sector vormen en het eerste zijn waar een planner een leverancier op toetst.

**Award-winning oplossing.** Voeg een vijfde pain-kaart toe naast de bestaande vier, getiteld 'REGELGEVING' ('Rij- en rusttijden en CMR-documentatie handmatig bijhouden naast de planning, met het risico op een boete bij een wegcontrole'), en breid de featurelijst uit met 'Automatische CMR- en rittendocumentatie' en 'Signalering vóór een naderende rij- en rusttijdlimiet, per chauffeur'. Voeg in de before/after-slider (zie case 1) voor logistiek specifiek een tachograaf-waarschuwingsicoon toe dat in de NA-staat verdwijnt — twee zinnen en één icoon die in combinatie onmiskenbaar laten zien dat de schrijver weet wat een CMR-vrachtbrief is, in plaats van software-marketingtaal.

### 8. Installatiepagina noemt nergens VCA, keuringen, garantietermijnen of storingsdienst — het administratief zwaarste deel van het vak ontbreekt volledig {#sectorspecifieke-klant-bouwzorglogistiekinstallatie-die-zich-niet-herkent-installatiepagina-noemt-nergens-vca-keuringen-garantietermijnen-of-storingsdienst-het-administratief-zwaarste-deel-van-het-vak-ontbreekt-volledig}

**Persona:** Bedrijfsleider installatiebedrijf cv/warmtepompen (22 monteurs, VCA**-gecertificeerd)  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Erik, bedrijfsleider van een VCA**-gecertificeerd installatiebedrijf voor cv/warmtepompen met 22 monteurs, leest /maatwerk-software/installatiebedrijf op zoek naar software die zijn keuringsplicht en 24-uurs storingsdienst ondersteunt — de twee dingen die hem 's nachts wakker houden, niet de dagplanning.

**Trust/behoefte-trigger.** De pagina noemt werkbonnen, planning, onderhoudscontracten en materiaal/voorraad (src/app/maatwerk-software/installatiebedrijf/page.tsx, regels 32-44), maar nergens VCA-certificering, periodieke NEN-keuringen, garantietermijnen op installaties, of een storingsdienst/piketrooster buiten kantooruren. Erik sluit de pagina met het gevoel: 'dit is planning voor een willekeurig veldwerkbedrijf — schoonmaak, beveiliging, hovenier, allemaal zou dit evengoed kunnen zijn', precies het generieke gevoel dat de sectorpagina's zouden moeten wegnemen.

**Wat er nu misgaat.** src/app/maatwerk-software/installatiebedrijf/page.tsx beperkt zich tot planning/werkbon/onderhoud/voorraad-taal die evengoed op elk ander veldwerkbedrijf zou passen — er staat niets dat specifiek installatietechniek of de bijbehorende certificerings- en garantieplicht signaleert, terwijl juist dát de reden is waarom een VCA-gecertificeerd bedrijf standaardpakketten ontgroeit.

**Award-winning oplossing.** Voeg een vijfde pain-kaart 'KEURINGEN' toe ('Periodieke NEN-keuringen en garantietermijnen bijhouden gebeurt nu los van de planning, met gemiste hersteldatums als gevolg') en een feature 'Storingsdienst & piketrooster' ('Een 24-uurs storingsrooster dat automatisch doorschakelt en direct de juiste werkbon, garantiestatus en laatste keuringsdatum toont aan de monteur die uitrukt'). Voeg daarnaast één regel toe die VCA expliciet benoemt in de intro ('gebouwd rondom hoe VCA-gecertificeerde bedrijven werken') — een woord dat een gecertificeerd bedrijf direct als geloofsbrief herkent en dat geen enkele concurrerende sjabloonpagina zal noemen.

### 9. Bouwpagina mist BTW-verlegd, ketenaansprakelijkheid en onderaannemersbeheer — de administratieve realiteit van een aannemer die een keten aanstuurt {#sectorspecifieke-klant-bouwzorglogistiekinstallatie-die-zich-niet-herkent-bouwpagina-mist-btw-verlegd-ketenaansprakelijkheid-en-onderaannemersbeheer-de-administratieve-realiteit-van-een-aannemer-die-een-keten-aanstuurt}

**Persona:** Directeur bouwbedrijf met vaste onderaannemers — beheert een keten van eigen uren plus onderaannemersfacturen  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Wouter, directeur van een middelgroot bouwbedrijf dat met 6 vaste onderaannemers werkt naast eigen personeel, leest /maatwerk-software/bouw op zoek naar een systeem dat eigen uren, onderaannemersfacturen en BTW-verlegging correct naast elkaar verwerkt — precies waar zijn huidige Excel-sheets het vaakst fout gaan, met een boete van de Belastingdienst als reëel risico.

**Trust/behoefte-trigger.** De pagina spreekt over werkbonnen, uren, calculatie en facturatie (src/app/maatwerk-software/bouw/page.tsx, regels 27-44), maar noemt nergens BTW-verlegd (verplicht bij onderaanneming), ketenaansprakelijkheid/G-rekening, of apart beheer van onderaannemersfacturen naast eigen uren. Wouter denkt: 'ze snappen bouwbedrijf als eenmanszaak met een hamer, niet als aannemer die een keten aanstuurt' — en dat is precies het onderscheid tussen zijn bedrijf (25+ man, onderaannemers) en de doelgroep die het 'standaardpakket'-verhaal überhaupt aantrekt.

**Wat er nu misgaat.** src/app/maatwerk-software/bouw/page.tsx blijft op het niveau van generieke veldwerk-taal (werkbon, uren, calculatie, factuur) zonder de administratief zwaarste, sector-typische complicatie — BTW-verlegging, ketenaansprakelijkheid, onderaannemersbeheer — te benoemen, terwijl dit precies de complexiteit is die 'een standaardpakket' (de expliciete anti-referentie in de intro-tekst) niet aankan en die een standaardpakket-vermoeide grotere aannemer als eerste test.

**Award-winning oplossing.** Voeg een vijfde feature toe: 'Onderaannemers & BTW-verlegd' — 'Onderaannemersfacturen, BTW-verlegging en ketenaansprakelijkheid correct verwerkt naast je eigen uren en materiaal, automatisch, niet als losse uitzondering in Excel.' Voeg in de before/after-slider (case 1) voor bouw specifiek een BTW-verlegd-badge toe die in de NA-staat automatisch als 'correct toegepast' wordt gemarkeerd — direct herkenbaar voor een aannemer met onderaannemers als bewijs dat er is nagedacht over hún specifieke bedrijfsvorm, niet over 'bouw' in het algemeen.

### 10. Vier vaste pijniconen (klok/lijst/zigzag/munt) worden willekeurig verdeeld over 16 inhoudelijk verschillende problemen op vier sectorpagina's {#sectorspecifieke-klant-bouwzorglogistiekinstallatie-die-zich-niet-herkent-vier-vaste-pijniconen-kloklijstzigzagmunt-worden-willekeurig-verdeeld-over-16-inhoudelijk-verschillende-problemen-op-vier-sectorpaginas}

**Persona:** UX-bewuste marketingmanager technisch installatiebedrijf — beoordeelt ontwerp-zorgvuldigheid als indicator van code-kwaliteit  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Femke, marketingmanager bij een technisch installatiebedrijf, vergelijkt als onderdeel van een leveranciersvergelijking alle vier sectorpagina's naast elkaar — niet alleen op tekst, maar bewust ook op ontwerpzorgvuldigheid, als indicatie van hoe zorgvuldig er ook gecodeerd zou worden voor haar bedrijf.

**Trust/behoefte-trigger.** Ze merkt dat het OVERZICHT-icoon (`CostIcon`, k='OVERZICHT') op de bouwpagina aan 'WERKBONNEN' hangt, op de zorgpagina aan 'CLIËNTGEGEVENS' en op de logistiekpagina aan 'RITPLANNING' — drie inhoudelijk totaal verschillende problemen met exact hetzelfde symbool. Ze telt vier iconen (TIJD/OVERZICHT/EFFICIËNTIE/impliciet GELD) verdeeld over 16 pain-cards op vier pagina's en concludeert: '4 vaste iconen die worden rondgedeeld, geen doordacht ontwerp per sector' — precies het soort detail dat voor haar bepaalt of ze een offerte aanvraagt of doorklikt naar de volgende partij.

**Wat er nu misgaat.** `CostIcon` in src/components/processen/Visuals.tsx (regels 179-206) kent exact 4 vaste iconen die in elke `SectorData.pains`-array hergebruikt worden op basis van een abstracte categorie, niet op basis van visuele relatie tot het concrete probleem — een systemische bezuiniging (4 iconen voor 16 pain-cards) die conflicteert met Design Principle 1 uit PRODUCT.md ('Bewijs door precisie... vermijd claims, toon het in plaats daarvan').

**Award-winning oplossing.** Breid `CostIcon` uit met sector-concrete iconen per pain-key in plaats van per abstracte categorie: een klembord-met-handtekening voor WERKBONNEN, een map-met-slot voor CLIËNTGEGEVENS, een routekaart-pin voor RITPLANNING, een schroevendraaier-kalender voor ONDERHOUD, een balans-icoon voor BTW-verlegd (case 9) en een tachograaf-icoon voor REGELGEVING (case 7) — een eenmalige uitbreiding van circa 16-18 nieuwe SVG's in exact dezelfde lijnstijl (`stroke-width 1.4`, `w-6 h-6`) die stap voor stap opgebouwd wordt naarmate de andere sectorfixes landen, en die het verschil maakt tussen 'sjabloon met content erin geplakt' en 'voor elk probleem specifiek nagedacht'.

### 11. Sectorpagina's staan in geen enkele hoofdnavigatie of footer — bereikbaar via precies twee klikken diep vanaf elke andere pagina {#sectorspecifieke-klant-bouwzorglogistiekinstallatie-die-zich-niet-herkent-sectorpaginas-staan-in-geen-enkele-hoofdnavigatie-of-footer-bereikbaar-via-precies-twee-klikken-diep-vanaf-elke-andere-pagina}

**Persona:** Inkoopadviseur logistiek bedrijf — komt via Google direct op de sectorpagina, checkt navigatie voor geloofwaardigheid  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Kim, inkoopadviseur bij een logistiek bedrijf, komt via een Google-zoekopdracht rechtstreeks op /maatwerk-software/logistiek terecht. Voordat ze verdergaat, checkt ze — zoals bij elke nieuwe leverancier — het hoofdmenu om te zien of dit een bewust, herhaald onderdeel van een breder aanbod is, of een geïsoleerde SEO-pagina.

**Trust/behoefte-trigger.** Ze opent het hoofdmenu en ziet onder 'DIENSTEN' vier disciplines (Maatwerk Software, Web & Platformen, AI Marketing, Drone & Video, src/components/Header.tsx regels 10-15) maar geen 'Sectoren' en geen link naar bouw/zorg/installatie. Ze scrolt naar de footer (src/components/Footer.tsx) en vindt drie kolommen — Diensten, Ontdek, Locaties — zonder één sectorlink. Ze concludeert dat dit een geïsoleerde landingspagina is, ook al is de content op de pagina zelf zorgvuldig geschreven — en die conclusie trekt ze vóórdat ze de rest van de pagina serieus leest.

**Wat er nu misgaat.** Geen van de vier sectorpagina's staat in Header.tsx, Footer.tsx of op de homepage. Bereikbaar is alleen via Header → DIENSTEN-dropdown → 'Maatwerk Software' (/diensten/processen) → scrollen naar de sectorblokken (regels 590-593 van die pagina), of via de kleine tekstlinks `SECTOR_LINKS` op /diensten (regels 39-44, 267-273) — in beide gevallen twee klikken diep vanaf elke andere pagina, en op geen van beide plekken zichtbaar vanaf de sectorpagina's zelf. Exact het probleem dat docs/CRITIQUE-SITE-2026-07-14.md als heuristiek-score 2 markeert.

**Award-winning oplossing.** Voeg een 'SECTOREN'-item toe aan de hoofdnavigatie in Header.tsx, als eigen dropdown naast 'DIENSTEN' (niet genest eronder) met alle 4 sectorpagina's plus korte iconen uit case 10 — zichtbaar op élke pagina inclusief de sectorpagina's zelf, zodat een bezoeker op /maatwerk-software/logistiek met één klik ook /maatwerk-software/bouw kan bekijken. Voeg een vierde footer-kolom 'Voor jouw sector' toe met dezelfde 4 links. Dat verandert de sectorpagina's van vier losse SEO-eilanden in een zichtbaar, doorklikbaar systeem — en is precies het soort structurele herkenbaarheid die een vergelijkende inkoper als Kim binnen tien seconden geruststelt.

### 12. De Adviseur-quiz — het vlaggenschip van 'meedenken' — vraagt nooit naar branche en routeert nooit terug naar een sectorpagina {#sectorspecifieke-klant-bouwzorglogistiekinstallatie-die-zich-niet-herkent-de-adviseur-quiz-het-vlaggenschip-van-meedenken-vraagt-nooit-naar-branche-en-routeert-nooit-terug-naar-een-sectorpagina}

**Persona:** Operationeel manager zorginstelling — test de Advisor-quiz na het lezen van de zorgpagina  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Bas, operationeel manager bij een zorginstelling, heeft de zorgpagina gelezen en klikt door naar de homepage om de Advisor-quiz te proberen — hij verwacht dat dé interactieve manier waarop Dynique zegt 'mee te denken' ook herkent dat hij net vanuit de zorgcontext binnenkwam.

**Trust/behoefte-trigger.** Hij doorloopt de vier vragen in src/components/Advisor.tsx (regels 19, 31, 43, 55: 'Waar loop je nu tegenaan?', 'Wat wil je vooral bereiken?', 'Wat is voor jou het belangrijkst?', 'Hoe snel wil je aan de slag?') en merkt dat geen enkele over branche gaat. Het eindresultaat linkt naar '/#contact' (regel 501, algemene CTA 'PLAN EEN GESPREK') en naar een generieke dienstpagina als '/diensten/processen' of '/diensten/web' (regels 78, 90, 102, 148) — nooit naar een sectorpagina. Voor Bas, die net de boodschap 'wij snappen jouw wereld' had geabsorbeerd, voelt de vlaggenschip-interactie van de site plotseling weer volledig generiek.

**Wat er nu misgaat.** src/components/Advisor.tsx (662 regels) bevat geen enkele branchevraag of -vertakking naar bouw/zorg/logistiek/installatie. Een gemiste kans specifiek omdat de quiz al bewezen goed werkt — docs/CRITIQUE-SITE-2026-07-14.md noemt hem expliciet als sterk uitgevoerde recognition-over-recall-interactie — de vertakkingslogica (Step-type met opties, spec sheet met Aanpak/Tijdlijn, dubbele CTA) bestaat al volledig; alleen sectorherkenning ontbreekt.

**Award-winning oplossing.** Voeg als eerste vraag 'In welke sector werk je?' toe met de vier bestaande sectoren plus 'Anders', in exact dezelfde `Option`-structuur als de bestaande vragen. Laat een sectorantwoord de resultaatpagina (de 'spec sheet' met Aanpak/Tijdlijn) een vijfde rij toevoegen — 'Sector-fit' — met een directe link naar de bijbehorende /maatwerk-software/{slug}-pagina naast de bestaande CTA's. Dit verbindt het sterkste interactieve bewijsstuk van de site rechtstreeks aan de nu geïsoleerde sectorpagina's (zie ook case 11), zonder de bestaande, goed werkende quiz-architectuur te breken — puur uitbreiden, niet herbouwen.

### 13. Structured data op elke sectorpagina claimt alleen Limburg/Nederland — een Belgische prospect ziet zichzelf technisch buitengesloten, tegen de eigen FAQ in {#sectorspecifieke-klant-bouwzorglogistiekinstallatie-die-zich-niet-herkent-structured-data-op-elke-sectorpagina-claimt-alleen-limburgnederland-een-belgische-prospect-ziet-zichzelf-technisch-buitengesloten-tegen-de-eigen-faq-in}

**Persona:** HR-directeur Belgisch zorgbedrijf — controleert structured data als onderdeel van due diligence  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Sophie, HR-directeur bij een Belgisch zorgbedrijf in Antwerpen, leest /maatwerk-software/zorg na een doorverwezen link van een Nederlandse collega. Als onderdeel van haar standaard leveranciers-due-diligence bekijkt ze de paginabron en structured data — iets wat ze bij elke buitenlandse leverancier standaard doet voordat ze een gesprek inplant.

**Trust/behoefte-trigger.** Ze ziet `"areaServed": ["Limburg", "Nederland"]` in het Service-schema van de pagina — België ontbreekt, terwijl de zichtbare copy nergens een geografische beperking noemt en de homepage-FAQ zelfs expliciet zegt: '"Werken jullie ook met bedrijven buiten Limburg?" — "Ja. We werken met bedrijven door heel Nederland en België..."' (src/app/page.tsx, FAQ regel 2). Voor een zorgvuldige Belgische inkoper is dit een concreet, verifieerbaar signaal dat de zichtbare belofte en de machine-leesbare data elkaar tegenspreken — en dat soort tegenspraak wordt in een due-diligence-checklist letterlijk aangevinkt.

**Wat er nu misgaat.** Alle vier layout.tsx-bestanden onder src/app/maatwerk-software/*/layout.tsx bevatten op regel 49 `areaServed: ["Limburg", "Nederland"]` zonder 'België' — een directe inconsistentie met zowel de FAQ als PRODUCT.md's 'grotere bedrijven in Nederland en België'. Precies het soort detail dat een technisch onderlegde inkoper (exact de PRODUCT.md-doelgroep) kan tegenkomen en dat de 'technisch onderlegd, precies'-merkpersoonlijkheid ondermijnt op schema-niveau — onzichtbaar voor de meeste bezoekers, maar niet voor deze.

**Award-winning oplossing.** Werk `areaServed` in alle vier sectorpagina's — en bij voorkeur ook in over-ons en de hoofd-JSON-LD in het root layout.tsx — bij naar `["Limburg", "Nederland", "België"]`. Een eenregelige, risicoloze wijziging in vijf bestanden die de structured data in lijn brengt met zowel de zichtbare FAQ-tekst als de daadwerkelijke, in PRODUCT.md vastgelegde doelgroep — klein qua werk, maar het soort discrepantie dat precies de zorgvuldige, technisch onderlegde klant test die Dynique wil aantrekken.

### 14. De vertrouwensstatistieken (24u reactietijd, 100% vaste prijs, 3 revisierondes) staan alleen op de homepage — niet op de pagina waar de meest sceptische bezoeker daadwerkelijk converteert {#sectorspecifieke-klant-bouwzorglogistiekinstallatie-die-zich-niet-herkent-de-vertrouwensstatistieken-24u-reactietijd-100-vaste-prijs-3-revisierondes-staan-alleen-op-de-homepage-niet-op-de-pagina-waar-de-meest-sceptische-bezoeker-daadwerkelijk-converteert}

**Persona:** Financieel directeur bouwbedrijf — komt via advertentie rechtstreeks op de sectorpagina, nooit via de homepage  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Henk, financieel directeur van een bouwbedrijf, komt via een gedeelde link rechtstreeks op /maatwerk-software/bouw terecht zonder ooit de homepage te bezoeken. Hij is bij het leadformulier onderaan de pagina — de laatste stap vóór hij zijn gegevens achterlaat — en zoekt naar harde, cijfermatige garanties voordat hij zijn telefoonnummer invult.

**Trust/behoefte-trigger.** Hij ziet bij het formulier alleen de zin 'Geen verplichtingen, geen verkooppraatje' en drie tekstuele bullets zonder cijfers (SectorTemplate.tsx, regels 295-304: 'We komen naar jouw locatie toe', 'Concreet inzicht in tijd- en geldverlies', 'Een helder voorstel op maat, vrijblijvend'). De concrete, cijfermatige geruststellingen die elders op de site wél bestaan — 24u reactietijd, 100% vaste prijs, 3 revisierondes (homepage, regels 971-976) — staan nergens op de pagina die hij daadwerkelijk bezoekt. Voor Henk bestaan deze garanties feitelijk niet, want hij zal de homepage nooit zien.

**Wat er nu misgaat.** SectorTemplate.tsx bevat geen enkel statistiekenblok vergelijkbaar met het conversieblok op de homepage — de enige 'garanties' op alle vier sectorpagina's zijn drie generieke bullet-punten zonder cijfers. Funnel-logica achterstevoren: de bezoeker die het diepst in de funnel zit en het meest concreet overtuigd moet worden, krijgt minder harde geruststelling dan een oriënterende homepage-bezoeker die nog niet eens weet wat hij zoekt.

**Award-winning oplossing.** Voeg de bestaande drie-statistieken-tegel (24u reactietijd / 100% vaste prijs / 3 revisierondes) toe aan SectorTemplate.tsx, direct naast de bestaande bullet-lijst bij het leadformulier (regels 295-304) — dezelfde component/data die al op de homepage bestaat (regels 968-976), letterlijk hergebruikt op precies het scherm waar de conversie plaatsvindt. Geen nieuw ontwerp nodig, alleen het bestaande vertrouwenselement verplaatsen naar waar het bewijslast draagt.

### 15. Geen enkele sectorpagina heeft een FAQ — precies de sectoren met de meest uiteenlopende juridische bezwaren (AVG-zorg, BTW-bouw, CMR-logistiek, VCA-installatie) krijgen nul sectorspecifieke antwoorden {#sectorspecifieke-klant-bouwzorglogistiekinstallatie-die-zich-niet-herkent-geen-enkele-sectorpagina-heeft-een-faq-precies-de-sectoren-met-de-meest-uiteenlopende-juridische-bezwaren-avg-zorg-btw-bouw-cmr-logistiek-vca-installatie-krijgen-nul-sectorspecifieke-antwoorden}

**Persona:** Kwaliteitsmanager zorginstelling — heeft een concrete compliance-vraag vóór ze een procesanalyse durft aan te vragen  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Yvonne, kwaliteitsmanager bij een zorginstelling, wil na het lezen van /maatwerk-software/zorg weten hoe Dynique omgaat met verwerkersovereenkomsten en datahosting voordat ze een gratis procesanalyse durft aan te vragen — voor haar is dit een verplichte checklist-vraag bij elke nieuwe leverancier, niet een nice-to-have.

**Trust/behoefte-trigger.** Ze zoekt naar een FAQ op de zorgpagina zelf en vindt er geen — SectorTemplate.tsx heeft, in tegenstelling tot de homepage, geen FAQ-sectie. Ze gaat terug naar de generieke homepage-FAQ (8 vragen, src/app/page.tsx) en vindt daar één beveiligingsvraag ('Hoe zit het met beveiliging en dataeigendom?') die in algemene taal is beantwoord zonder 'verwerkersovereenkomst', 'AVG' of 'hosting-locatie' te noemen — juist de vaktermen die in de zorg verplicht zijn bij elk leveranciersgesprek. Ze sluit de tab zonder het formulier in te vullen.

**Wat er nu misgaat.** SectorTemplate.tsx heeft geen FAQ-sectie, en de enige FAQ op de site bevat geen vraag die specifiek is voor de vier sectoren: geen AVG/verwerkersovereenkomst voor zorg, geen BTW-verlegd/onderaannemers voor bouw (case 9), geen CMR/aansprakelijkheid voor logistiek (case 7), geen VCA/garantie voor installatie (case 8) — terwijl elke sector fundamenteel verschillende compliance-zorgen heeft die precies op het beslissingsmoment (vlak vóór het formulier) opspelen.

**Award-winning oplossing.** Voeg aan `SectorData` een optioneel `faq?: {q:string;a:string}[]`-veld toe met een bijbehorende FAQ-sectie in SectorTemplate.tsx, geplaatst vlak vóór het leadformulier zodat de laatste aarzeling daar wordt weggenomen: zorg — '"Sluiten jullie een verwerkersovereenkomst af en waar staat onze data?"'; bouw — '"Hoe geven jullie BTW-verlegging en onderaannemersfacturen weer?"'; logistiek — een vraag over CMR-aansprakelijkheid; installatie — een vraag over garantie bij een softwarestoring tijdens een storingsdienst. Combineer dit met een optioneel bestandsupload-veld in het leadformulier zelf ('Upload een voorbeeld van je huidige werkbon/rooster/rittenlijst/keuringsrapport') zodat een bezoeker letterlijk het artefact kan meesturen dat de pagina beweert te begrijpen — de FAQ beantwoordt het bezwaar, het uploadveld bewijst dat het antwoord geen loze belofte is.

---

## Klant op zoek naar een langdurige partner

### 1. EIGENAARSCHAP belooft "lang na livegang" — de sectie die dat moet bewijzen, bewijst het niet {#klant-op-zoek-naar-een-langdurige-partner-eigenaarschap-belooft-lang-na-livegang-de-sectie-die-dat-moet-bewijzen-bewijst-het-niet}

**Persona:** Operations director bij een groeiend bouwbedrijf (140+ medewerkers) in Zuid-Limburg; leest leveranciersvoorstellen kritisch nadat een vorig IT-traject strandde toen de externe ontwikkelaar na oplevering nauwelijks nog reageerde op bugmeldingen.  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Voordat ze überhaupt appt, leest ze /over-ons van boven naar beneden: eerst de WAARDEN-sectie, dan de sectie die zich letterlijk 'WAT JE MAG VERWACHTEN' noemt — op zoek naar het ene signaal dat dit traject anders zal lopen dan het vorige.

**Trust/behoefte-trigger.** De waarde EIGENAARSCHAP (VALUES-array, src/app/over-ons/page.tsx regel 14) claimt: "Jouw project, mijn verantwoordelijkheid — van eerste schets tot lang na livegang." Voor iemand die net is losgelaten door een vorige partij is dat exact de zin die ze bevestigd wil zien in de sectie erna.

**Wat er nu misgaat.** De PROMISE-array (regel 17-22), getoond in de 'WAT JE MAG VERWACHTEN'-sectie vanaf regel 188, bevat precies vier kaarten: 'Eén aanspreekpunt', 'Projectmatig en veilig', 'Snel live', 'Eerlijk advies' — alle vier over de bouwfase. Geen enkele zin gaat over reactietijd bij bugs, onderhoudsvorm of contactritme na livegang. De pagina claimt 'lang na livegang' in de kop van de waarde ernaast en levert er in de sectie die dat woordelijk zou moeten bewijzen vervolgens niets voor. Voor deze bezoeker is dit precies de plek waar het verhaal instort — de plek waarop ze, door eerdere ervaring, het scherpst let.

**Award-winning oplossing.** Splits de PROMISE-sectie niet met een vijfde kaart die tussen de andere vier verdwijnt, maar met een expliciete visuele knip: een dunne gouden lijn met het label 'LIVEGANG' die de vier bestaande kaarten (samen onder 'TIJDENS DE BOUW') scheidt van een nieuw, iets breder blok eronder onder 'DAARNA': "Bugmeldingen krijgen binnen 1 werkdag een reactie. Elk kwartaal check ik actief of het systeem nog past bij hoe je bedrijf werkt — geen supportdesk, hetzelfde aanspreekpunt." Deze vóór/na-livegang-lijn wordt vervolgens hergebruikt op de contactpagina en in het conversieblok-statistiekenblok (zie die scenario's), zodat een oplettende bezoeker die meerdere pagina's doorneemt één consistent, herkenbaar ontwerpsysteem ziet in plaats van drie losse lapmiddelen — precies wat de EIGENAARSCHAP-belofte voor het eerst waarmaakt.

### 2. De eigen prijsgids leert bezoekers naar onderhoud te vragen — en beantwoordt die vraag dan niet voor zichzelf {#klant-op-zoek-naar-een-langdurige-partner-de-eigen-prijsgids-leert-bezoekers-naar-onderhoud-te-vragen-en-beantwoordt-die-vraag-dan-niet-voor-zichzelf}

**Persona:** Financieel directeur die drie offertes vergelijkt en bewust blogartikelen leest als ongefilterde due diligence — hij vertrouwt wat een bedrijf 'toevallig' op zijn eigen blog schrijft meer dan de offertepagina's zelf.  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Hij leest /blog/wat-kost-een-website (mei 2026, 8 min. leestijd) niet voor het prijsadvies maar om te testen hoe eerlijk Dynique is wanneer niemand toekijkt. Halverwege geeft het artikel hem zelf een checklist mee om bij élke aanbieder — inclusief Dynique — langs te leggen.

**Trust/behoefte-trigger.** Onder de kop 'Hoe weet je of een prijs eerlijk is?' staat letterlijk: "Vraag bij elke offerte expliciet door op deze vijf punten" (regel 82), met als vierde punt: "Onderhoud. Hoe gaan we om met updates, beveiliging en kleine wijzigingen?" (regel 87). Hij verwacht dat de sectie die er direct op volgt dit voor Dynique zelf beantwoordt.

**Wat er nu misgaat.** De alinea onder 'Onze aanpak in een notendop' (regel 92) beantwoordt eigenaarschap ('je krijgt alles in eigendom'), hosting ('inclusief... hostingsetup') en levertijd/prijs ('vaste prijs... geen open einde') — maar slaat 'onderhoud', het enige punt uit de eigen lijst dat over de periode ná livegang gaat, volledig over. Dit is niet zomaar een omissie: het is precies de vraag die de tekst een paar regels eerder zelf als toets voor eerlijkheid aanreikt, onbeantwoord op de plek waar het antwoord hoort te staan. Voor een lezer die dit artikel juist leest om te checken of Dynique zijn eigen maatstaf haalt, spreekt het artikel zichzelf hier tegen op het moment van hoogste aandacht.

**Award-winning oplossing.** Verander de vijfpuntenlijst (regel 84-88) van een platte opsomming in een zelf-getoetste checklist: elk punt krijgt een klein gouden vinkje plus, compact en cursief, Dynique's eigen antwoord erachter — "Onderhoud. Hoe gaan we om met updates, beveiliging en kleine wijzigingen? → Vaste onderhoudsafspraak vanaf €X/maand, reactietijd 1 werkdag." Hergebruik daarvoor exact de .callout-stijl die al bestaat voor het 'Let op'-blok over hostingkosten (regel 74-77), zodat het artikel een levende, publiek zichtbare zelfaudit wordt — het enige contentstuk op de site waar Dynique zijn eigen eerlijkheidsclaim openlijk aan zijn eigen tekst laat toetsen. Dat is een sterker bewijs van 'eigenzinnig eerlijk' dan welke extra alinea dan ook.

### 3. "Wat gebeurt er hierna" op de contactpagina stopt bij de offerte, niet bij het onderhoud {#klant-op-zoek-naar-een-langdurige-partner-wat-gebeurt-er-hierna-op-de-contactpagina-stopt-bij-de-offerte-niet-bij-het-onderhoud}

**Persona:** Inkoper bij een middelgroot logistiek bedrijf die het contactformulier invult na een sterke eerste indruk, maar — uit gewoonte na eerdere, minder transparante trajecten — eerst wil weten wat hem te wachten staat voordat hij zijn gegevens prijsgeeft.  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Vóór hij op 'VERSTUUR VIA WHATSAPP' klikt, scrolt hij eerst naar de sectie 'WAT GEBEURT ER HIERNA' — hij wil weten wat hij aan zet is voordat hij zich blootgeeft.

**Trust/behoefte-trigger.** De sectiekop belooft met zoveel woorden "Geen zwart gat. Gewoon snel duidelijkheid" (src/app/contact/page.tsx regel 255-256) — voor deze inkoper een belofte over de hele relatie, niet alleen het eerste gesprek.

**Wat er nu misgaat.** NEXT_STEPS (regel 18-22) bestaat uit precies drie stappen — 'Snelle reactie', 'Kennismaking', 'Helder voorstel' — alle drie binnen de eerste week van het verkoopproces, getoond in een md:grid-cols-3 grid (regel 259). De titel suggereert de hele klantreis; de inhoud eindigt bij de offerte. Sterker: dezelfde pagina bevat een kleine maar veelzeggende tegenstrijdigheid die het probleem verscherpt — de hero belooft "We reageren altijd binnen 24 uur" (regel 134), terwijl de contactdetails vlak eronder "Binnen 2 uur (ma–za, 9–20u)" claimen (regel 13). Als de site zichzelf al niet consistent kan citeren over reactietijd vóór de deal, is de volledige stilte over wat er ná livegang gebeurt geen klein gemis — het is precies het patroon dat deze inkoper kwam checken.

**Award-winning oplossing.** Los eerst de 2-uur/24-uur-tegenstrijdigheid op (kies één getal, overal consistent). Breid NEXT_STEPS daarna uit naar vier stappen met dezelfde vóór/na-livegang-lijn die ook voor over-ons wordt voorgesteld: de drie bestaande stappen blijven samen onder 'DEZE WEEK', gevolgd door een visueel losstaand vierde blok onder 'DAARNA' — niet als gelijke vierde kolom (wat de asymmetrie verdoezelt) maar breder, met een net iets andere achtergrondtint (bg-[#0d0d0d] i.p.v. bg-[#070707]) en een doorlopend-pijl-icoon in plaats van een reeksnummer: "Na livegang verandert het aanspreekpunt niet: dezelfde WhatsApp, dezelfde persoon. Bugmeldingen binnen 1 werkdag, een kort kwartaalgesprek over uitbreidingen." Zo wordt het patroon dat deze inkoper zoekt niet één keer beweerd, maar zichtbaar herhaald op elke plek waar de site een traject in stappen uitlegt.

### 4. Reactietijd vóór de deal is een hard getal; reactietijd ná de deal is een vaag gebaar {#klant-op-zoek-naar-een-langdurige-partner-reactietijd-vr-de-deal-is-een-hard-getal-reactietijd-n-de-deal-is-een-vaag-gebaar}

**Persona:** Risicomijdende beslisser die de homepage-FAQ doorleest als test van precisie, niet als geruststelling — hij scant bewust op harde cijfers versus vage taal.  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Hij doorloopt de FAQ-accordeon (src/app/page.tsx, faqs-array regel 233-242) en vergelijkt de mate van detail tussen vragen die vóór en vragen die ná de deal spelen.

**Trust/behoefte-trigger.** Reactietijd is elders consequent gekwantificeerd — '24u' in het conversieblok (regel 972), '24 uur' in de contact-hero (contact/page.tsx regel 134) en '2 uur (ma–za, 9-20u)' in de contactdetails (regel 13) — drie exacte, onderling tegenstrijdige getallen. Dat wekt de verwachting dat ook de vraag over de periode na oplevering een even hard getal krijgt.

**Wat er nu misgaat.** Het volledige antwoord op FAQ-vraag 7, 'Wat gebeurt er na oplevering?' (regel 240), luidt: "Ik blijf bereikbaar voor updates, uitbreidingen en beheer. Geen los bureau na livegang — hetzelfde aanspreekpunt van dag één." Geen uur, geen dag, geen definitie van 'bereikbaar'. Dit is de enige plek op de site waar precies déze vraag met zoveel woorden wordt gesteld — en meteen de plek waar de precisie het meest ontbreekt, terwijl drie andere plekken (met onderling verschillende getallen) wél een concreet cijfer durven noemen voor het eerste contact. Precisie om binnen te halen, vaagheid zodra je binnen bent — exact het patroon waar deze bezoeker op let.

**Award-winning oplossing.** Herschrijf regel 240 naar hetzelfde precisieniveau als de rest van de site: "Bugmeldingen krijgen binnen 1 werkdag een reactie (ma-vr), kritieke storingen binnen 4 uur. Kleine updates en uitbreidingen plan ik in overleg in, tegen een vast uurtarief — net zo vooraf vastgelegd als de bouwprijs." Verplaats deze vraag van positie 7 naar positie 2, direct na de vraag over doorlooptijd (regel 234), zodat de vraag die deze doelgroep het zwaarst weegt niet pas na zes clicks zichtbaar wordt. Los in dezelfde opruimbeurt de 2-uur/24-uur-tegenstrijdigheid op de contactpagina op — één consistent getal, overal, is zelf al het bewijs van de precisie die deze bezoeker zoekt.

### 5. Alle vijf reviews prijzen de snelheid van livegang — het bewijs dat de relatie standhoudt, zit al verborgen in de code maar wordt nooit getoond {#klant-op-zoek-naar-een-langdurige-partner-alle-vijf-reviews-prijzen-de-snelheid-van-livegang-het-bewijs-dat-de-relatie-standhoudt-zit-al-verborgen-in-de-code-maar-wordt-nooit-getoond}

**Persona:** Beslisser die bewust de vijf klantreviews op de homepage doorleest op zoek naar bewijs dat klanten van Dynique tevreden blíjven, niet alleen tevreden zijn op de dag van livegang.  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Hij scrolt door de reviewsectie (src/app/page.tsx, reviews-array regel 610-666) op zoek naar sociaal bewijs dat het na livegang niet stil wordt.

**Trust/behoefte-trigger.** PRODUCT.md's geloofsladder rust op stap 3: "het bestaande portfolio bewijst dat dit vakmanschap al wordt geleverd" — voor deze bezoeker betekent vakmanschap ook: blijft het werken, blijft de relatie bestaan, maanden later?

**Wat er nu misgaat.** Alle vijf reviews zijn geformuleerd rond snelheid-tot-livegang — 'Binnen drie dagen live' (Creemers Exclusive), 'binnen zeven dagen' (Stacy Kohnen), 'Binnen 14 dagen live' (IJssalon Italia) — geen enkele quote noemt de duur van de relatie. Het opvallende: die data bestaat al, alleen onzichtbaar. Elke review heeft een verborgen `date`-veld (regel 620, 631, 642, 653, 664) dat nooit in de UI verschijnt. Doorgerekend tegen vandaag (7 september 2026): Creemers Exclusive (mrt 2025) is 18 maanden klant, IJssalon Italia (apr 2025) 17 maanden, Chefs Connect (jan 2026) 8 maanden, Stacy Kohnen (feb 2026) 7 maanden, Auwt Aelse (mrt 2026) 6 maanden. Precies het bewijs dat deze bezoeker zoekt zit al in de dataset — het wordt hem alleen nooit getoond.

**Award-winning oplossing.** Reken het bestaande `date`-veld om naar een zichtbare 'klant sinds'-badge onder elke reviewnaam: 'Klant sinds maart 2025 · 18 maanden'. Geen nieuwe claim nodig — puur het tonen van een getal dat al bestaat. Voeg bij de twee langstlopende relaties (Creemers Exclusive 18 mnd, IJssalon Italia 17 mnd) een tweede, kleinere cursieve regel toe onder de hoofdquote: "— 18 maanden later: nog steeds live, nog steeds hetzelfde aanspreekpunt." Bouw dit op hetzelfde onderliggende schema als het `ongoing`-veld dat voor het case-study-sjabloon wordt voorgesteld (zie dat scenario), zodat 'sinds wanneer is dit al een klant' één keer als concept wordt ontworpen en overal op de site hetzelfde gouden badge-motief gebruikt, in plaats van vijf losse tekstuele oplossingen.

### 6. Het stats-blok in het conversieblok beloont alleen het binnenhalen van de klant, nooit het vasthouden ervan {#klant-op-zoek-naar-een-langdurige-partner-het-stats-blok-in-het-conversieblok-beloont-alleen-het-binnenhalen-van-de-klant-nooit-het-vasthouden-ervan}

**Persona:** CFO die het conversieblok onderaan het Traject-gedeelte van de homepage leest als impliciete prioriteitenlijst van het bedrijf, niet als marketingtekst.  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Hij bekijkt de drie kerncijfers die de deal moeten verzegelen — 24u, 100%, 3 — en leest ze zoals een financieel geschoold mens cijfers leest: als objectieve samenvatting van waar het bedrijf het meeste gewicht aan geeft.

**Trust/behoefte-trigger.** Een cijfermatig bewijsblok wekt de verwachting dat het de volledige waardepropositie dekt, niet alleen het eerste deel ervan.

**Wat er nu misgaat.** De value-props grid (regel 970-983) toont exact drie kaarten: '24u — Reactietijd', '100% — Vaste prijs', '3 — Revisierondes' — alle drie statistieken uit Fase 1-3. Fase 4, twintig regels eerder in dezelfde component (regel 860-863), noemt zelf al 'Livegang & beveiliging', 'Monitoring' en 'Doorlopend beheer' als deliverables — maar geen daarvan krijgt een cijfer in het meest prominente statistiekenblok van de homepage. De cijfers die deze CFO moeten overtuigen, dekken letterlijk 75% van het eigen traject niet af — en dat soort verhoudingen rekent hij automatisch uit.

**Award-winning oplossing.** Vervang de 3x1 grid door een layout die de knip zichtbaar maakt in plaats van verbergt: twee mini-panelen naast elkaar, 'VÓÓR LIVEGANG' (24u reactietijd, 100% vaste prijs, 3 revisierondes) en 'NÁ LIVEGANG' (1 werkdag reactietijd bij bugs, kwartaal-check-in, doorlopend beheer), gescheiden door dezelfde dunne gouden 'LIVEGANG'-lijn die ook voor over-ons en de contactpagina wordt voorgesteld. Drie keer hetzelfde vóór/na-motief op drie verschillende pagina's is precies het soort consistent ontwerpsysteem dat een jury opvalt: geen losse patches, maar één doordachte, herkenbare manier om exact dezelfde belofte — langdurig partnerschap — telkens hetzelfde te visualiseren.

### 7. De pagina voor precies deze klant bestaat — maar spreekt over een verouderde website, niet over een verouderd systeem, en is nergens te vinden {#klant-op-zoek-naar-een-langdurige-partner-de-pagina-voor-precies-deze-klant-bestaat-maar-spreekt-over-een-verouderde-website-niet-over-een-verouderd-systeem-en-is-nergens-te-vinden}

**Persona:** IT-manager die een verouderd, niemand-onderhoudt-het-meer bedrijfssysteem (planning, facturatie, klantportaal) wil vervangen en wil voorkomen dat de opvolger over twee jaar hetzelfde lot ondergaat.  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Hij zoekt op 'systeem vervangen' of klikt in de Adviseur-quiz op 'Ons systeem past niet meer', in de verwachting daarna op een pagina te landen die zijn probleem herkent.

**Trust/behoefte-trigger.** Zijn impliciete vraag is niet 'kan Dynique iets nieuws bouwen' maar 'garandeert Dynique dat dít systeem niet over twee jaar wéér een vervangingsproject wordt omdat niemand het meer onderhoudt?'

**Wat er nu misgaat.** /vervanging bestaat en is inmiddels in de nieuwe goud-huisstijl gebouwd, maar staat nergens gelinkt vanuit Header, Footer of homepage — alleen sitemap.ts (regel 52) kent hem nog, en zelfs de Adviseur-optie die er het dichtst bij ligt ('Ons systeem past niet meer', Advisor.tsx regel 23) leidt er niet naartoe: de secondary-link-logica (regel 146-153) kent geen tak voor deze situatie. Erger dan onvindbaar: wie de pagina wél vindt, leest een hero die 'IS JOUW WEBSITE NOG VAN DEZE TIJD?' vraagt (regel 76-78) en een WhatsApp-sjabloon dat opent met 'Hi! Ik wil mijn verouderde website vervangen' (regel 42) — nul keer het woord 'systeem' of 'software' op de hele pagina. Voor deze IT-manager is /vervanging dus niet alleen onvindbaar, maar spreekt hij, eenmaal gevonden, de taal van de oude MKB-website-refresh-doelgroep, niet van PRODUCT.md's nieuwe doelgroep met systemen en procesautomatisering.

**Award-winning oplossing.** Behandel dit niet als een linkprobleem maar als een contentprobleem: voeg naast de bestaande 'website'-invalshoek een gelijkwaardige 'systeem'-invalshoek toe — een simpele toggle direct onder de hero ('Website' / 'Bedrijfssysteem') die voor de systeem-variant een expliciete sectie toont: 'Waarom dit niet over twee jaar weer een vervangingsproject wordt' — een korte, eerlijke uitleg van wat structureel anders is (code-eigendom bij de klant, gedocumenteerde overdracht, geen black-box). Koppel deze variant direct aan de Adviseur: voeg in de secondary-link-logica (regel 146-153) een tak toe voor start === 'groeitniet' die naar /vervanging?type=systeem linkt met precies deze boodschap. Zo gaat de ene pagina die al voor deze klant bestaat ook eindelijk zijn taal spreken én zijn pad kruisen, in plaats van een orphan te blijven.

### 8. De Adviseur-quiz vraagt naar snelheid, prijs en robuustheid — maar nooit naar wat er na livegang moet gebeuren {#klant-op-zoek-naar-een-langdurige-partner-de-adviseur-quiz-vraagt-naar-snelheid-prijs-en-robuustheid-maar-nooit-naar-wat-er-na-livegang-moet-gebeuren}

**Persona:** Beslisser bij een groter bedrijf die de Adviseur-quiz invult in de veronderstelling dat het advies-dossier zijn belangrijkste overweging serieus neemt — hij test de belofte 'Niet verkopen. Adviseren.' (Advisor.tsx regel 264-265) die de sectie zelf maakt.  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Bij stap 3, 'Wat is voor jou het belangrijkst?', kiest hij tussen vier opties in de veronderstelling dat het resultaat zijn antwoord herkent.

**Trust/behoefte-trigger.** PRODUCT.md's Design Principle 2 stelt dat 'meedenken zichtbaar moet zijn, niet alleen beweerd' — een consultatieve quiz is bij uitstek de plek om een langetermijnbehoefte te herkennen en er iets specifieks mee te doen.

**Wat er nu misgaat.** De 'prio'-stap (regel 40-51) bevat precies vier opties: snel, prijs, robuust, lokaal. Zelfs de meest verwante, 'robuust' (regel 48, uitgewerkt in APPROACH regel 116: 'We bouwen met code die jaren meegaat — getest en onderhoudbaar, geen quick fix'), gaat over codekwaliteit, niet over de relatie of het servicemodel na livegang. Een bezoeker die specifiek een langdurige partner zoekt, krijgt van de enige stap die naar zijn prioriteit vraagt geen optie die zijn antwoord herkent.

**Award-winning oplossing.** Voeg een vijfde optie toe: { id: 'partner', label: 'Een partner voor de lange termijn', desc: 'Niet alleen bouwen, ook jarenlang meedenken en onderhouden' }. Dit is bijna kosteloos: de LETTERS-array (regel 164) is al gedimensioneerd op vijf opties (['A','B','C','D','E']) — een vijfde keuze past zonder layoutwijziging, alsof het component hier al op was voorbereid. Breid APPROACH (regel 113-118) uit met partner: 'We plannen na livegang een vast contactmoment per kwartaal in en reageren binnen 1 werkdag op bugmeldingen — de relatie stopt niet bij de facturatie.' Voeg in de secondary-link-logica (regel 146-153) een tak toe: bij prio === 'partner', toon een link naar de nieuwe continuïteitssectie op /vervanging (zie dat scenario) — zodat de twee zwakste plekken voor déze bezoeker (de quiz en de vervangingspagina) elkaar versterken in plaats van allebei apart te falen.

### 9. De bedankpagina claimt "Succesvol verzonden" over een actie die nooit heeft plaatsgevonden {#klant-op-zoek-naar-een-langdurige-partner-de-bedankpagina-claimt-succesvol-verzonden-over-een-actie-die-nooit-heeft-plaatsgevonden}

**Persona:** Voorzichtige beslisser die eerst de gratis checklist aanvraagt via /gratis-checklist als laagdrempelige test: 'als dit soepel verloopt, vertrouw ik ze ook met een groter project.'  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Hij vult naam en e-mail in bij een veld dat expliciet belooft: "Vul je gegevens in, ontvang de PDF direct per mail" (regel 113), onder de kop 'Direct in je inbox' (regel 106).

**Trust/behoefte-trigger.** Voor een bezoeker die specifiek let op langetermijnbetrouwbaarheid is elk contactmoment een datapunt: doet het bedrijf wat het zegt, of niet?

**Wat er nu misgaat.** De submit-handler (regel 35-51) doet iets anders dan beloofd: hij downloadt een statisch PDF-bestand dat al op de server staat (regel 41-46) en stuurt de bezoeker door naar /bedankt — de code bevat zelf de comment '// In productie: stuur naam + e-mail ook naar API/Mailchimp/Resend' (regel 39), wat bevestigt dat er nooit iets naar een mailadres of CRM gaat. Erger dan een stille storing: /bedankt toont vervolgens actief de tekst 'Succesvol verzonden' (bedankt/page.tsx regel 39-40) — een expliciete, geschreven bevestiging van een actie die niet heeft plaatsgevonden. Deze persona krijgt dus geen 'geen feedback', maar een foutieve positieve bevestiging op een pagina die daar specifiek voor is gebouwd — precies het mechanisme (verzoek versturen, op reactie vertrouwen) waar hij later, na livegang, met een bugmelding op zou moeten kunnen bouwen.

**Award-winning oplossing.** Koppel het formulier aan een echte leadcapture-backend (Resend, Formspree of een eigen API-route) zodat naam en e-mail daadwerkelijk ergens aankomen. Herschrijf tegelijk de bevestiging eerlijk: zolang alleen de lokale download werkt, moet /bedankt niet 'Succesvol verzonden' zeggen maar 'Checklist gedownload'; zodra de backend live is, mag 'onderweg naar je inbox' weer terugkomen, ditmaal waar. Ga een stap verder dan een standaard-autoresponder: laat het bevestigingsmailtje een kort, persoonlijk bericht van de oprichter zijn in plaats van een generieke drip-mail — dezelfde belofte ('geen los bureau, hetzelfde aanspreekpunt') die de site overal claimt, waargemaakt op het kleinste, laagste-risico contactmoment. Wie dát al goed voelt, vertrouwt de belofte voor een jarenlang softwaretraject een stuk makkelijker.

### 10. De sectie "WAT HET HEEFT OPGELEVERD" toont alleen launch-day features — het bewijs van 17 maanden continuïteit staat al elders op de site, alleen onzichtbaar {#klant-op-zoek-naar-een-langdurige-partner-de-sectie-wat-het-heeft-opgeleverd-toont-alleen-launch-day-features-het-bewijs-van-17-maanden-continuteit-staat-al-elders-op-de-site-alleen-onzichtbaar}

**Persona:** Beslisser die een afgeronde case study (IJssalon Italia) leest als bewijs van langetermijnresultaat, niet alleen lanceerresultaat.  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Hij leest de drie volledig ingevulde case studies (IJssalon Italia, Stacy Kohnen, Creemers Exclusive) op zoek naar bewijs dat een opgeleverd project ook op langere termijn standhoudt.

**Trust/behoefte-trigger.** Een sectie die expliciet 'WAT HET HEEFT OPGELEVERD' heet (src/app/portfolio/ijssalon-italia/page.tsx regel 446-449) wekt de verwachting van resultaat over tijd, niet alleen een opsomming van wat er bij oplevering aanwezig was.

**Wat er nu misgaat.** De sectie (regel 440-485) bestaat uit een quote over de oplevering zelf ('Binnen 14 dagen live') gevolgd door acht bullet-features die allemaal beschrijven wát er gebouwd is (heritage storytelling, allergenen-systeem, sticky CTA's, regel 463-471) — geen bezoekersgroei, geen sindsdien doorgevoerde update, geen 'nog steeds in gebruik'-signaal. Die informatie bestaat elders al impliciet: in de reviews-array op de homepage (regel 642) staat bij deze exacte klant `date: 'Apr 2025'` — vandaag, 7 september 2026, is dat 17 maanden geleden. Die 17 maanden 'nog steeds live' zitten dus al in de codebase, alleen nooit zichtbaar op de pagina waar een bezoeker er specifiek naar zoekt.

**Award-winning oplossing.** Voeg onderaan de feature-lijst een negende, visueel losstaand statusregel toe met dezelfde pulserende-bolletje-stijl als de 'Beschikbaar voor nieuwe projecten'-indicator in het conversieblok (page.tsx regel 954-959): '● Live sinds april 2025 · 17 maanden en tellend · geen openstaande meldingen.' Trek de brondatum letterlijk uit het al bestaande `date`-veld in de reviews-array (regel 642) in plaats van een nieuw getal te verzinnen, zodat de case-pagina en de reviewkaart voor het eerst met elkaar consistent zijn. Bouw dit als het herbruikbare `ongoing`-blok dat ook voor het case-study-sjabloon wordt voorgesteld (zie dat scenario), zodat elke toekomstige case — inclusief de grotere softwarecase die PRODUCT.md al aankondigt — deze continuïteit automatisch meekrijgt.

### 11. Het case-study-sjabloon heeft geen veld voor 'sinds livegang' — het ontbreekt structureel, niet alleen tekstueel {#klant-op-zoek-naar-een-langdurige-partner-het-case-study-sjabloon-heeft-geen-veld-voor-sinds-livegang-het-ontbreekt-structureel-niet-alleen-tekstueel}

**Persona:** Technisch onderlegde portfolio-vergelijker die vijf case studies naast elkaar legt om een patroon te zoeken in hoe Dynique met klanten omgaat over tijd — precies het soort bezoeker dat de site voor zichzelf technisch beoordeelt.  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Hij merkt dat alle vijf case-pagina's dezelfde structuur volgen — uitdaging, aanpak, features, resultaten, quote — en dat 'wat er sindsdien is gebeurd' in geen van de vijf voorkomt, ook niet in de twee nog lege sjablonen (Auwt Aelse, Chefs Connect).

**Trust/behoefte-trigger.** Precies dít is de bezoeker die doorheeft dat een ontbrekend onderdeel in vijf van de vijf cases geen toeval is maar een keuze in het onderliggende sjabloon — en die daaruit afleidt dat het onderwerp structureel niet belangrijk wordt gevonden.

**Wat er nu misgaat.** Het TypeScript-type `CaseStudyData` (src/components/CaseStudyTemplate.tsx regel 14-54) definieert velden voor facts, challenge, approach, features, gallery, results, metrics, quote en next — maar geen enkel veld voor iets als 'sinceLive' of 'ongoingWork'. Dit is geen contentprobleem dat per pagina kan worden opgelost; het zit in de component-architectuur zelf, wat verklaart waarom geen van de vijf cases dit onderwerp bevat, ook niet de twee die nog volledig moeten worden ingevuld.

**Award-winning oplossing.** Voeg één optioneel veld toe: `ongoing?: { since: string; lastUpdate?: string; note?: string }`, met een bijbehorend UI-blok direct boven de eindquote (stijl vergelijkbaar met de metrics-tegels) dat alleen rendert als het veld is ingevuld — zo blijft het sjabloon backwards-compatible voor lege cases. Dit ene schema-veld is de gemeenschappelijke basis onder drie losse scenario's tegelijk: de 'klant sinds'-badges bij de homepage-reviews, de statusregel op de IJssalon Italia-pagina, én elke toekomstige (met name de aangekondigde grotere) softwarecase. Eén structurele fix die drie zichtbare vertrouwenssignalen tegelijk mogelijk maakt in plaats van drie keer losse tekst toevoegen — dát is het systeemdenken dat een jury onderscheidt van los content-onderhoud.

### 12. "Eén aanspreekpunt" wordt overal als voordeel verkocht, maar het bus-factor-risico wordt nergens geadresseerd {#klant-op-zoek-naar-een-langdurige-partner-en-aanspreekpunt-wordt-overal-als-voordeel-verkocht-maar-het-bus-factor-risico-wordt-nergens-geadresseerd}

**Persona:** Beslisser bij een groter bedrijf die expliciet vraagt naar continuïteit: 'wat als de oprichter ziek wordt, met vakantie is, of het bedrijf groeit — blijft dit één persoon?' — een standaard onderdeel van leveranciers-risicoanalyse bij grotere inkooptrajecten.  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Een bedrijf dat een jarenlange afhankelijkheid aangaat voor een bedrijfskritisch systeem stelt zich terecht de vraag wat er gebeurt als de enige persoon achter Dynique tijdelijk of permanent uitvalt — vaak letterlijk een vraag op een intern leveranciersbeoordelingsformulier.

**Trust/behoefte-trigger.** De site benadrukt zelf overal persoonlijk, oprichter-geleid contact als kernvoordeel — 'Je praat met degene die het ook bouwt' (over-ons PROMISE, regel 18), 'hetzelfde aanspreekpunt van dag één' (homepage-FAQ, regel 240) — wat automatisch de vervolgvraag oproept die nergens wordt beantwoord.

**Wat er nu misgaat.** Op geen enkele pagina — niet in de FAQ (regel 233-242), niet op /over-ons, niet op /contact — staat een antwoord op wat er gebeurt bij afwezigheid, ziekte of drukte van het (nu eenmans-)team. Voor de nieuwe, grotere doelgroep uit PRODUCT.md ('hoger budget, meer behoefte aan bewijs van betrouwbaarheid') is dit precies het soort risico dat een inkoopafdeling standaard op tafel legt vóór er getekend wordt, en de site geeft nul handvatten om dat gesprek voor te zijn.

**Award-winning oplossing.** Voeg een FAQ-item toe (faqs-array, na regel 240): { q: 'Wat als jij niet beschikbaar bent — ziekte, vakantie, drukte?', a: '...' } met een eerlijk, concreet antwoord passend bij de huidige schaal: als er al een vaste backup-ontwikkelaar of overdrachtsprotocol bestaat, benoem die met naam en rol; zo niet, beschrijf dan eerlijk het huidige uitwijkplan — bijvoorbeeld gedocumenteerde toegang en volledig eigenaarschap van code en credentials, zodat een andere partij in noodgeval kan overnemen. Verwerk dit antwoord ook als vast bespreekpunt van het eerste intakegesprek (Fase 1), zodat het niet alleen een verstopt FAQ-antwoord is maar een standaard onderdeel vóór het contract — eigenzinnige eerlijkheid uit PRODUCT.md toegepast op de eigen kwetsbaarheid, en het enige antwoord dat een inkoopafdeling echt overtuigt: niet 'dit gebeurt nooit', maar 'dit is precies wat er dan gebeurt'.

### 13. De enige support-ingang is WhatsApp binnen kantooruren — geen enkele pagina benoemt wat er gebeurt bij een storing daarbuiten {#klant-op-zoek-naar-een-langdurige-partner-de-enige-support-ingang-is-whatsapp-binnen-kantooruren-geen-enkele-pagina-benoemt-wat-er-gebeurt-bij-een-storing-daarbuiten}

**Persona:** Facilitair/IT-inkoper bij een bedrijf dat 24/7 van het te bouwen systeem afhankelijk wordt — bijvoorbeeld een logistieke planningstool die ook in het weekend draait.  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Hij checkt, vóórdat hij tekent, hoe een storing buiten kantooruren wordt opgevangen bij een systeem waarvan het bedrijf straks continu afhankelijk is.

**Trust/behoefte-trigger.** De reactietijd op de contactpagina is expliciet begrensd tot 'Binnen 2 uur (ma–za, 9–20u)' (contact/page.tsx regel 13) — voor iemand die een productiesysteem laat bouwen, betekent dat een storing op zondag mogelijk 15+ uur onbeantwoord blijft, zonder dat de site dit scenario ooit benoemt.

**Wat er nu misgaat.** Site-breed is er precies één contactkanaal voor alles: de sticky WhatsApp-knop op elke pagina (page.tsx regel 308-311) en het contactformulier, beide binnen dezelfde 9-20u-uren. Er bestaat geen ticketsysteem, geen statuspagina, geen escalatieprocedure voor kritieke storingen buiten die uren, en geen enkele pagina — ook niet de FAQ — benoemt wat er gebeurt als een systeem uitvalt op een moment dat WhatsApp niet binnen de gestelde tijd wordt beantwoord. Voor de 'grotere bedrijven'-doelgroep, die vaak zelf al SLA's hanteert richting hún klanten, is dit onbenoemde gat in de nachtelijke/weekend-dekking een reëel, onuitgesproken risico.

**Award-winning oplossing.** Voeg een expliciete, eerlijke FAQ-vraag toe: 'Wat als het systeem uitvalt buiten jullie reactietijden?' met een antwoord passend bij de huidige schaal: 'Voor de meeste projecten is 24/7-dekking binnen de huidige opzet niet gegarandeerd buiten ma-za 9-20u. Voor bedrijven waar dat wél nodig is, bespreken we bij de intake een aangepaste onderhoudsafspraak met een noodnummer.' Dit is precies de eigenzinnige eerlijkheid die PRODUCT.md als merkkern noemt, toegepast op de eigen beperking — en het voorkomt dat een grotere klant deze aanname zelf verkeerd maakt en er pas tijdens een daadwerkelijke storing achter komt. Bouw dit voor klanten waar dit wél speelt uit tot een concreet, apart selecteerbaar 'Uitgebreide dekking'-onderdeel in de SERVICES-lijst van het contactformulier (contact/page.tsx regel 24), zodat de site zelf al een gestructureerd pad biedt in plaats van dat de klant er zelf naar moet vragen.

### 14. Er bestaat geen enkele voorwaarden-, SLA- of verwerkersovereenkomst-pagina op de hele site {#klant-op-zoek-naar-een-langdurige-partner-er-bestaat-geen-enkele-voorwaarden--sla--of-verwerkersovereenkomst-pagina-op-de-hele-site}

**Persona:** Juridisch/inkoopverantwoordelijke bij een groter bedrijf die vóór ondertekening standaard vraagt om contractvoorwaarden, niet alleen een privacyverklaring.  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Een inkoopafdeling doet, vóórdat er getekend wordt, standaard due diligence op leveranciersvoorwaarden: eigendomsrechten na oplevering, aansprakelijkheid, opzegtermijn, en — bij software die persoonsgegevens verwerkt — een verwerkersovereenkomst (AVG-verplicht bij zulke B2B-samenwerkingen).

**Trust/behoefte-trigger.** PRODUCT.md beschrijft deze doelgroep expliciet als een die 'meer behoefte heeft aan bewijs dat de partij aan de andere kant technisch onderlegd en betrouwbaar is' — voor een inkoopafdeling ís het bestaan van heldere voorwaarden dat bewijs, nog vóór het eerste gesprek.

**Wat er nu misgaat.** De volledige site bevat exact één juridische pagina: /privacyverklaring (679 regels, uitgebreid en AVG-specifiek voor bezoekersdata). Er is geen 'algemene voorwaarden', geen dienstverleningsovereenkomst, geen SLA-pagina, en de privacyverklaring zelf regelt alleen de omgang met bezoekersgegevens — niet de contractuele kant van een softwaretraject (garantietermijn, aansprakelijkheidsbeperking, opzegtermijn, een verwerkersovereenkomst voor gegevens die ín een gebouwd systeem verwerkt worden). De footer (src/components/Footer.tsx regel 143-145) linkt in de copyright-balk uitsluitend naar de privacyverklaring — er is geen andere juridische pagina om naartoe te linken. Voor de nieuwe doelgroep is de afwezigheid van elk contractueel kader vóór het eerste gesprek een reëel signaal van onvolwassenheid — precies het 'anonieme grote IT-consultancy'-tegenovergestelde dat de site wíl uitstralen, maar dan in de verkeerde richting: geen enkel bureau, groot of klein, zonder voorwaarden.

**Award-winning oplossing.** Publiceer een beknopte 'Samenwerkingsvoorwaarden'-pagina (nieuwe route /voorwaarden, toegevoegd naast Privacyverklaring in de footer-copyrightbalk, Footer.tsx regel 143) met in gewone taal — passend bij de 'geen dikke offertes'-toon van de rest van de site — precies de vijf punten die het eigen blogartikel al aanraadt om bij andere partijen te checken (eigenaarschap, hosting, SEO, onderhoud, levertijd — zie het aparte blog-scenario), aangevuld met een concrete opzegtermijn en een korte AVG-verwerkersovereenkomst-paragraaf voor systemen die persoonsgegevens van de klant verwerken. Eén pagina die exact beantwoordt wat de site zelf al predikt dat een 'eerlijke aanbieder' moet kunnen laten zien — het sluitstuk van dezelfde eerlijkheid die het blogartikel, de FAQ en over-ons elk apart al beloven, nu ook juridisch hard gemaakt.

### 15. Sectorbewijs voor bouw, zorg, logistiek en installatiebedrijven bestaat — maar wordt nooit getoond aan de bezoeker die er specifiek naar op zoek is {#klant-op-zoek-naar-een-langdurige-partner-sectorbewijs-voor-bouw-zorg-logistiek-en-installatiebedrijven-bestaat-maar-wordt-nooit-getoond-aan-de-bezoeker-die-er-specifiek-naar-op-zoek-is}

**Persona:** Directeur van een installatiebedrijf (planning, mobiele werkbonnen, onderhoudscontracten) die specifiek zoekt naar bewijs dat Dynique zíjn sector begrijpt, niet alleen 'software in het algemeen' kan bouwen.  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Hij doorloopt de Adviseur-quiz en kiest bij 'Waar loop je nu tegenaan?' voor 'Ons systeem past niet meer', en bij 'Wat is voor jou het belangrijkst?' voor 'Persoonlijk, lokaal contact'. Hij verwacht dat het resulterende advies-dossier, dat zich presenteert als op maat samengesteld ('Samengesteld op basis van je 4 antwoorden', Advisor.tsx regel 370), hem naar het meest relevante bewijs voor zíjn situatie leidt.

**Trust/behoefte-trigger.** /diensten/processen bevat zelf al een expliciete sectorlijst met exact zijn soort werk: 'Installatiebedrijven — Mobiele bonnen, planning & onderhoud' (src/app/diensten/processen/page.tsx regel 591), die linkt naar /maatwerk-software/installatiebedrijf — het 'dieper-in-de-funnel bewijs' dat PRODUCT.md expliciet noemt.

**Wat er nu misgaat.** De vier sectorpagina's (/maatwerk-software/bouw, zorg, logistiek, installatiebedrijf) zijn nergens gelinkt vanuit Header.tsx, Footer.tsx of de homepage — en, cruciaal voor deze persona, ook niet vanuit de Adviseur zelf: de secondary-link-logica in Advisor.tsx (regel 146-153) heeft takken voor 'onduidelijk' (→ /diensten/processen), 'lokaal' (→ /locaties/maastricht) en 'handwerk/koppelen' (→ een blogartikel), maar geen enkele die een sector herkent. Ze zijn alleen bereikbaar via twee gerichte klikken diep vanuit /diensten of /diensten/processen — routes die deze bezoeker, die net de gepersonaliseerde Adviseur doorliep in de veronderstelling een op-maat-antwoord te krijgen, nooit wordt aangeboden. Het bewijs dat zijn wantrouwen zou wegnemen bestaat, maar de enige plek op de site die zich voordoet als persoonlijk advies wijst er nooit naartoe.

**Award-winning oplossing.** Voeg een optionele vijfde vraag toe aan de Adviseur, ná de bestaande vier stappen zodat het huidige advies-dossier ongewijzigd blijft: 'In welke sector werk je?' met opties bouw / zorg / logistiek / installatie / anders. Gebruik het antwoord uitsluitend voor de secondary-link: bij een sectorkeuze toont het advies-dossier een extra, prominente kaart tussen de hoofdadviezen en de CTA's — 'Specifiek bewijs voor de installatiebranche: bekijk hoe we mobiele werkbonnen en onderhoudsplanning bouwen voor bedrijven zoals dat van jou' → /maatwerk-software/installatiebedrijf — met een concreet voorbeeld-detail uit die pagina zelf, zodat het geen generieke doorverwijzing is maar een tastbaar, sectorspecifiek bewijsstuk. Dit maakt de Adviseur voor het eerst een instrument dat écht 'meedenkt' in plaats van standaard drie diensten aan te bevelen — en verzilvert vier al bestaande, goed gebouwde pagina's die nu vrijwel geen verkeer krijgen.

---

## Bezoeker die op een verouderde/irrelevante pagina landt

### 1. Vijf locatiepagina's — zelfs de Duitse Aken-variant — verkopen in het Google-snippet nog het zzp-bureau van vóór de rebrand {#bezoeker-die-op-een-verouderdeirrelevante-pagina-landt-vijf-locatiepaginas-zelfs-de-duitse-aken-variant-verkopen-in-het-google-snippet-nog-het-zzp-bureau-van-vr-de-rebrand}

**Persona:** Operationeel directeur van een installatiebedrijf met 80+ medewerkers en meerdere vestigingen rond Maastricht, die 's avonds tijdens een leveranciersvergelijking drie lokale partijen in aparte tabbladen naast elkaar openzet na het googelen op 'website laten maken Maastricht'  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Een operationeel directeur van een groeiend installatiebedrijf zoekt een technische partner voor zowel een nieuwe bedrijfswebsite als, op termijn, een planning- en facturatiesysteem. Hij googelt bewust breed op 'website laten maken Maastricht' om drie lokale bureaus te vergelijken vóór hij specifieker op 'maatwerk software' zoekt, en beslist puur op basis van de snippet-tekst welke twee van de drie een klik krijgen.

**Trust/behoefte-trigger.** Het Google-snippet zelf — nog vóór een klik — moet al zeggen 'dit is een serieuze technische partner voor een groeiend bedrijf', niet 'lokaal, goedkoop, snel'. Bij een vergelijking van drie tabbladen bepaalt die ene regel tekst wie überhaupt een kans krijgt.

**Wat er nu misgaat.** Geverifieerd in alle vijf locatiebestanden (src/app/locaties/{maastricht,heerlen,sittard,aken,eindhoven}/page.tsx, regels 4-7): Maastricht toont title 'Website laten maken Maastricht | Dynique — Webdesign bureau' met description 'Premium website laten maken in Maastricht. Lokaal webdesign bureau voor ZZP en MKB. Binnen 7–14 dagen live, vaste prijs, persoonlijk contact.' Heerlen, Sittard en Eindhoven herhalen letterlijk 'ZZP en MKB' en '7–14 dagen... vaste prijs'. Aken heeft zelfs een volledig Duitse variant met precies hetzelfde probleem: 'Lokale Agentur für KMU und Selbstständige... Festpreis'. Ondertussen opent de pagina-body van Maastricht zelf al met 'wij bouwen websites én maatwerk software' (regel 25) — de snippet ondermijnt dus zelfs de eigen pagina waarnaar hij verwijst, in twee talen tegelijk.

**Award-winning oplossing.** Vervang de vijf losstaande, copy-paste metadata-blokken door één gedeelde `buildCityMetadata(data: CityData)`-functie die title/description algoritmisch afleidt uit dezelfde CityData die de pagina-body al voedt, zodat snippet en content structureel niet meer uit elkaar kúnnen lopen. Nieuwe title per stad: 'Maatwerk software & digitale platformen in [Stad] | Dynique'. Voeg daarnaast een klein build-time script toe (`scripts/check-metadata-drift.ts`, draait in CI) dat faalt zodra een geëxporteerde `metadata.description` een van de verboden termen bevat ('ZZP', 'MKB', 'vaste prijs', '7–14 dagen', 'KMU', 'Festpreis') — zodat dit niet over een jaar bij de volgende contentwijziging stilletjes terugsluipt, maar structureel onmogelijk wordt.

### 2. /diensten/web, /marketing en /drone dragen alle drie nog het 'DIENST 0X'-witte-op-zwart-sjabloon van vóór de rebrand — precies op het moment dat een terugkerende klant het merk opnieuw test {#bezoeker-die-op-een-verouderdeirrelevante-pagina-landt-dienstenweb-marketing-en-drone-dragen-alle-drie-nog-het-dienst-0x-witte-op-zwart-sjabloon-van-vr-de-rebrand-precies-op-het-moment-dat-een-terugkerende-klant-het-merk-opnieuw-test}

**Persona:** Terugkerende prospect die enkele maanden geleden via WhatsApp een directe link naar /diensten/web kreeg, en die pagina vlak vóór het bevestigen van de opdracht opnieuw opent om scope en toon te checken — inmiddels bekend met de nieuwe, gouden dark-theme homepage  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Een prospect had maanden geleden al WhatsApp-contact en kreeg toen een directe link naar de dienstenpagina voor websites. Vlak voordat hij een opdracht bevestigt, opent hij die oude link opnieuw om details te checken — hij kent inmiddels ook de vernieuwde, donkere homepage met het gouden accent die hem overtuigde, en gebruikt dit herbezoek onbewust als laatste consistentietoets voordat hij 'ja' zegt.

**Trust/behoefte-trigger.** Consistentie op het moment van bevestigen: 'is dit nog hetzelfde, zorgvuldige bedrijf dat de homepage me liet zien, of was dat een uitzondering?'

**Wat er nu misgaat.** Geverifieerd: src/app/diensten/web/page.tsx (regel 59) opent met de eyebrow 'DYNIQUE · DIENST 01' op een felwit-op-zwart hero zonder ACCENT-goud — hetzelfde patroon herhaalt zich letterlijk bij /diensten/marketing ('DYNIQUE · DIENST 03', regel 54) en /diensten/drone ('DYNIQUE · DIENST 04', regel 61). Dit staat lijnrecht tegenover de wél al herbrande /diensten-hub, één klik verderop, die opent met 'Maatwerk software. Eén partner.' in het gouden dark-thema met ambient orbs (rgba(212,165,116,0.12)) — inclusief een handgecodeerd SVG-'spectrum'-diagram dat de vier disciplines (elk met eigen kleur: #d4a574, #fbbf24, #f43f5e, #14b6a6) visueel laat samenkomen tot 'ÉÉN PARTNER'. Een terugkerende klant die van de hub naar /diensten/web doorklikt, verlaat dat zorgvuldig opgebouwde visuele verhaal binnen één klik volledig.

**Award-winning oplossing.** Los dit niet op als drie losse reskins, maar als één architecturaal probleem: extraheer een gedeelde `<DisciplinePageShell>` (hergebruik van de bestaande SectorTemplate-bouwstenen) zodat hero, ACCENT-thema en eyebrow-breadcrumb voortaan overerven in plaats van drie keer met de hand gekopieerd te worden — dat maakt deze klasse van drift structureel onmogelijk bij de volgende sub-pagina. Vervang 'DYNIQUE · DIENST 01' door een klikbare breadcrumb 'Diensten / Web & Platformen'. Het onderscheidende element: hergebruik het al bestaande, handgecodeerde spectrum-SVG van de hub als compacte 'je bent hier'-variant onderaan elke sub-pagina — dezelfde vier gekleurde lijnen, nu met de actieve discipline uitgelicht — zodat een terugkerende bezoeker hetzelfde visuele signatuurobject herkent op hub én sub-pagina, in plaats van een generieke goud-reskin die zelf weer een nieuw, los sjabloon zou worden.

### 3. /diensten/marketing opent met precies het SaaS-cliché dat PRODUCT.md's anti-referentielijst met naam noemt — op de enige pagina die voor déze bezoeker het hele bedrijf ís {#bezoeker-die-op-een-verouderdeirrelevante-pagina-landt-dienstenmarketing-opent-met-precies-het-saas-clich-dat-productmds-anti-referentielijst-met-naam-noemt-op-de-enige-pagina-die-voor-dze-bezoeker-het-hele-bedrijf-s}

**Persona:** MKB-ondernemer met een kleine, concrete marketingbehoefte die specifiek zoekt op 'AI marketing bureau Limburg', Dynique nooit eerder is tegengekomen, en via een oude SEO-ranking direct op /diensten/marketing landt zonder ooit de homepage te zien  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een ondernemer met een kleine marketingbehoefte zoekt online naar een AI-marketingpartij in Limburg en vindt /diensten/marketing via een oude SEO-ranking. Hij heeft de homepage van Dynique nooit gezien: deze ene pagina ís voor hem het volledige, enige beeld van het bedrijf.

**Trust/behoefte-trigger.** De allereerste indruk moet het merk-onderscheid waarmaken ('geen generiek bureau, geen anonieme IT-consultancy') — juist op de pagina die voor deze specifieke bezoeker de enige indruk vormt.

**Wat er nu misgaat.** Geverifieerd in src/app/diensten/marketing/page.tsx (regels 94-99): direct onder de zwarte hero volgt een wit ingekleurd 3-koloms statistiekenblok — '10× sneller content produceren dan traditioneel', 'Altijd consistent met je merk', 'Schaalbaar van 1 naar 30 posts per maand zonder extra kosten' — drie ongeverifieerde cijferclaims, letterlijk het 'hero-metric-blok'-anti-patroon dat het eigen critique-rapport (docs/CRITIQUE-SITE-2026-07-14.md) benoemt én dat PRODUCT.md expliciet als anti-referentie aanmerkt ('generieke SaaS/AI-sjabloonclichés... hero-metric getallen'). Het blok staat bovendien op een van de weinige witte secties midden in een verder zwarte pagina, wat het extra laat opvallen als vreemd element. Nergens op de hele pagina staat 'maatwerk software' of enige verwijzing naar de kernpositionering (geverifieerd: geen enkele link naar /diensten/processen of /maatwerk-software/*) — voor deze bezoeker bestaat die simpelweg niet.

**Award-winning oplossing.** Vervang het '10×'-cijferblok niet door een ánder cijfer, maar door het enige type bewijs dat Design Principle 1 ('bewijs door precisie, niet door beloftes') toestaat: een naam. Eén regel onder de hero — 'Zo hielpen we [echte klantnaam, met toestemming] van X naar Y' — met een link naar de bijbehorende sectie op /portfolio, in plaats van een losstaand, onherleidbaar percentage. Voeg daarna, vóór 'WAT WE DOEN', een compacte editorial-band toe die als enige zin op de pagina de kernpositionering draagt: 'Dynique bouwt ook maatwerk software voor bedrijven die vastlopen in standaardpakketten →' met link naar /diensten/processen — zodat de eerste én enige indruk die déze bezoeker van Dynique krijgt, meteen ook de juiste is.

### 4. /diensten/drone is de enige van de vier disciplines die na de rebrand nul verwijzingen naar maatwerk software bevat — een gemiste tweede ingang bij klanten die er al zijn {#bezoeker-die-op-een-verouderdeirrelevante-pagina-landt-dienstendrone-is-de-enige-van-de-vier-disciplines-die-na-de-rebrand-nul-verwijzingen-naar-maatwerk-software-bevat-een-gemiste-tweede-ingang-bij-klanten-die-er-al-zijn}

**Persona:** Vastgoedmakelaar die via 'drone video Limburg' op /diensten/drone belandt, tevreden klant is, en wiens groeiende kantoor inmiddels worstelt met planning en dossierbeheer in losse Excel-bestanden  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een vastgoedmakelaarskantoor huurt Dynique in voor dronebeelden van objecten. Het kantoor groeit en worstelt met planning en dossierbeheer in losse Excel-bestanden — precies het probleem dat /diensten/processen oplost — maar niemand bij het kantoor weet dat Dynique dat aanbiedt, omdat hun enige contactpunt de dronepagina is.

**Trust/behoefte-trigger.** De kans om een bestaande, tevreden klant — lage drempel, al vertrouwen opgebouwd — te laten ontdekken dat er een groter aanbod bestaat dat hun eigenlijke, grotere probleem oplost.

**Wat er nu misgaat.** Geverifieerd in src/app/diensten/drone/page.tsx: de pagina (eyebrow 'DYNIQUE · DIENST 04') bevat een gedetailleerde specificatietabel (DJI Mini 5 Pro, 4K/60fps, 1/1.3" CMOS, 45 min. vluchttijd, 20 km bereik) maar letterlijk geen enkele link naar /diensten/processen of een van de vier /maatwerk-software/*-sectorpagina's (bevestigd via grep — nul treffers). Een tevreden bezoeker die hier binnenkomt heeft geen enkele aanwijzing dat Dynique meer doet dan beeldmateriaal.

**Award-winning oplossing.** Voeg na de specificatietabel geen generieke bridge-zin toe, maar een specifiek gekoppeld tweeluik: 'Sectoren waarin beeld en systeem samenkomen' — twee kaarten, elk met één zin die drone-werk expliciet aan een concreet vervolgprobleem koppelt: 'Voor de bouw: wij leggen de voortgang vast én bouwen het dashboard waarin je klant die voortgang volgt → /maatwerk-software/bouw' en 'Voor logistiek: wij filmen het magazijn én bouwen het systeem dat de planning erachter regelt → /maatwerk-software/logistiek'. Door de koppeling per sector concreet te maken in plaats van generiek ('vraag ons ook naar software'), voelt het als een logische volgende stap voor déze klant, niet als een opgeplakte upsell.

### 5. /eerste-website is in geen enkele nav-laag bereikbaar, maar staat nog altijd hoger in de sitemap dan vier van de vijf locatiepagina's {#bezoeker-die-op-een-verouderdeirrelevante-pagina-landt-eerste-website-is-in-geen-enkele-nav-laag-bereikbaar-maar-staat-nog-altijd-hoger-in-de-sitemap-dan-vier-van-de-vijf-locatiepaginas}

**Persona:** Startende eenmanszaak-eigenaar die 'eerste website laten maken' googelt en op een nergens vanuit de site gelinkte, maar nog wél actief geïndexeerde pagina belandt  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een net gestarte zelfstandige zonder website googelt 'eerste website laten maken' en vindt /eerste-website. Hij leest de warme, persoonlijke toon en de Stacy Kohnen- en Chefs Connect-testimonials (geverifieerd aanwezig, regels 271 en 278), voelt zich aangesproken, en klikt op het Dynique-logo in de header om meer van het bedrijf te zien.

**Trust/behoefte-trigger.** Doorklikken om méér vertrouwen op te bouwen ('als deze pagina me overtuigt, wil ik zien wat dit bedrijf verder doet') — in plaats daarvan botst hij op een volledig andere merkidentiteit.

**Wat er nu misgaat.** Geverifieerd: src/app/eerste-website/page.tsx is vanuit geen enkele plek op de site bereikbaar — niet vanuit Header.tsx (alleen logo, Diensten-dropdown, Contact), niet vanuit Footer.tsx se 'Ontdek'-kolom (6 items, /eerste-website ontbreekt), niet vanuit de homepage of de Advisor-quiz. Toch staat de pagina in src/app/sitemap.ts met priority 0.78 — hoger dan /locaties/heerlen (0.75), /locaties/sittard (0.72) en /locaties/aken/eindhoven (0.70), vier pagina's die wél actief in de Footer staan. De header-logolink (regel 119 in Header.tsx, `href="/"`) stuurt de bezoeker na het lezen van deze kleinschalige, persoonlijke pagina rechtstreeks naar de gloednieuwe homepage die opent met maatwerk software voor 'grotere bedrijven' — twee totaal verschillende bedrijfsverhalen binnen één klik.

**Award-winning oplossing.** Maak de expliciete keuze die het eigen critique-document al aankaart, en implementeer 'm daadwerkelijk in code, niet als beleidsuitspraak: voeg een 301-redirect toe in next.config.js van /eerste-website naar /diensten/web?van=starter (een query-param die de bestemmingspagina in staat stelt een herkenbare, iets warmere variant van de intro te tonen voor wie duidelijk nog geen website heeft) en verwijder de route uit sitemap.ts. Dat is sterker dan alleen deprioriteren: een pagina die het tegenovergestelde verhaal vertelt van de huidige positionering moet niet vindbaar blíjven op een lager pitje, hij moet niet meer bestaan als eigen bestemming — terwijl de content en toon (het is tenslotte goed geschreven materiaal) via de redirect-parameter alsnog nuttig werk doet op de juiste plek.

### 6. /vervanging sluit met 'Fysiek (Limburg)' en 'binnen 7-14 dagen' precies de bredere, internationalere doelgroep uit die de nieuwe positionering wil bereiken {#bezoeker-die-op-een-verouderdeirrelevante-pagina-landt-vervanging-sluit-met-fysiek-limburg-en-binnen-7-14-dagen-precies-de-bredere-internationalere-doelgroep-uit-die-de-nieuwe-positionering-wil-bereiken}

**Persona:** Eigenaar van een webwinkel met vestigingen in Nederland én België wiens huidige website verouderd is en die mogelijk ook een koppeling met zijn voorraadsysteem nodig heeft  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een ondernemer met activiteiten in zowel Nederland als België zoekt een partij om zijn verouderde website te vervangen, mogelijk gecombineerd met een koppeling naar zijn voorraadsysteem. Hij vindt /vervanging via een oude backlink of Google-cache.

**Trust/behoefte-trigger.** Herkenning: 'is dit bedrijf toegerust om mij, buiten hun kernregio, serieus te bedienen — en snapt het dat mijn probleem groter is dan alleen een nieuwe website?'

**Wat er nu misgaat.** Geverifieerd in src/app/vervanging/page.tsx: een hardgecodeerde gesprekstype-toggle met als enige fysieke optie 'Fysiek (Limburg)' (regel 526) en de belofte '7-14 dagen' die vier keer terugkeert op de pagina (regels 204, 209, 251, 303) — 'Nieuwe website, binnen 7-14 dagen online', 'SNEL: 7-14 dagen van gesprek tot live'. Dit is een snelle, kleinschalige belofte die botst met PRODUCT.md's omschrijving van de nieuwe doelgroep als een 'groter, weloverwogen besluit' met 'hoger budget' en 'iets langere overwegingstijd'. Er is geen enkele fork op de pagina naar het scenario waarin het probleem eigenlijk een systeem/proces is (voorraadkoppeling) in plaats van alleen een verouderde website.

**Award-winning oplossing.** Voeg direct onder de hero twee gelijkwaardig vormgegeven keuzekaarten toe — niet als kleine link onderaan, maar als een echte fork vóór de rest van de pagina zichtbaar wordt: 'Alleen een nieuwe website' (de bestaande 7-14-dagenflow) versus 'Meer dan een website — koppelingen, voorraad, een systeem dat meegroeit' die doorlinkt naar /diensten/processen met een vooraf ingevulde context ('ik kom van vervanging'). Vervang 'Fysiek (Limburg)' door 'Fysiek (Zuid-Limburg) of op locatie in Nederland/België, in overleg' zodat een Belgische bezoeker zich niet al bij de toggle uitgesloten voelt vóór hij het formulier heeft ingevuld.

### 7. De leadmagneet die voor sommige bezoekers de allereerste indruk van Dynique ís, registreert de lead nergens {#bezoeker-die-op-een-verouderdeirrelevante-pagina-landt-de-leadmagneet-die-voor-sommige-bezoekers-de-allereerste-indruk-van-dynique-s-registreert-de-lead-nergens}

**Persona:** Bezoeker die via een oude gastblog of directory-vermelding een backlink naar 'de gratis Dynique website-checklist' volgt — zijn allereerste contact met het bedrijf  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Iemand vindt een verwijzing naar 'de gratis Dynique website-checklist' in een oud artikel of directory-vermelding elders op het web en klikt door. Dit is zijn allereerste contact met Dynique — hij heeft de nieuwe homepage nooit gezien en vormt zijn hele beeld van het bedrijf op basis van deze ene interactie.

**Trust/behoefte-trigger.** Het moment van gegevens achterlaten ('ik vertrouw dit bedrijf mijn naam en e-mailadres toe') moet ook daadwerkelijk iets betekenen voor Dynique — anders is het enige contactmoment een stille mislukking.

**Wat er nu misgaat.** Geverifieerd in src/app/gratis-checklist/page.tsx: `handleSubmit` doet uitsluitend `setSubmitted(true)`, start client-side een PDF-download (`a.href = "/dynique-website-checklist-2026.pdf"`) en stuurt na 600ms door naar `/bedankt?name=...` — met daarboven letterlijk de commentaarregel '// In productie: stuur naam + e-mail ook naar API/Mailchimp/Resend.' Er wordt nergens een naam of e-mailadres opgeslagen of doorgestuurd; het e-mailadres verdwijnt zodra het tabblad sluit. Voor een bezoeker die hier voor het eerst binnenkomt via een externe, oude link is dit niet een klein bugje maar het volledige verlies van het enige leadmoment dat Dynique van hem had.

**Award-winning oplossing.** Koppel het bestaande formulier aan een lichte serverless-capture (Cloudflare Pages Function of Formspree, passend bij de al aanwezige `force-static`-hosting) zodat elke inzending in een inbox of CRM belandt, ongeacht of de PDF-download zelf client-side blijft — en laat de client-side download pas starten ná bevestigde serverrespons, niet ervoor, zodat een netwerkfout niet stilzwijgend een 'geslaagde' download oplevert zonder geregistreerde lead. Voeg op /bedankt een expliciete bevestigingsregel toe ('We hebben je gegevens ontvangen en nemen bij interesse contact op') zodat de bezoeker niet alleen op een stille client-side redirect vertrouwt.

### 8. De twee portfolio-cases die specifiek naar 'bewijs' zoekende bezoekers trekken, zijn lege scaffolding met dezelfde sitemap-prioriteit als de wél volledig ingevulde cases {#bezoeker-die-op-een-verouderdeirrelevante-pagina-landt-de-twee-portfolio-cases-die-specifiek-naar-bewijs-zoekende-bezoekers-trekken-zijn-lege-scaffolding-met-dezelfde-sitemap-prioriteit-als-de-wl-volledig-ingevulde-cases}

**Persona:** Restauranteigenaar die via een oude social media-post van Chefs Connect gericht doorklikt naar de case study van Dynique — al specifiek geïnteresseerd, geen koude bezoeker  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Iemand ziet ergens (een oude social post, een verwijzing op de Chefs Connect-site zelf) een vermelding van 'gebouwd door Dynique' en klikt gericht door naar /portfolio/chefs-connect om te zien wat voor werk dat precies was.

**Trust/behoefte-trigger.** Bevestiging zoeken van vakmanschap ('laat me zien wat ze precies gebouwd hebben') — precies PRODUCT.md's geloofsladder-stap 3.

**Wat er nu misgaat.** Geverifieerd in src/app/portfolio/chefs-connect/page.tsx en src/app/portfolio/auwt-aelse/page.tsx: de brondescriptie luidt letterlijk 'Design is af. Vul onderstaande velden in met de echte content'. Alle inhoudelijke velden staan leeg of uitgecommentarieerd: `challenge: []`, `approach: []`, `features: []`, `gallery: []`, `results: []`, `metrics: []`, `quote: ""`. Toch staan beide URL's in src/app/sitemap.ts met priority 0.80 — exact gelijk aan de wél volledig ingevulde cases ijssalon-italia en stacy-kohnen. Een specifiek geïnteresseerde bezoeker vindt zo een nagenoeg lege pagina op het exacte moment dat hij naar bewijs zoekt.

**Award-winning oplossing.** Geef deze twee URL's tijdelijk `robots: { index: false }` in hun metadata-export totdat er echte content is — zo blijft de pagina bereikbaar voor wie er gericht op klikt, maar promoot Google hem niet actief naar koude bezoekers. Vervang de scaffolding-tekst door een bewust ontworpen 'Voorvertoning volgt'-status die het eerlijke verhaal vertelt in plaats van het verbergt: gebruik de wél al aanwezige `heroVideo`/preview-material, toon de bevestigde klantnaam en het live-adres, en voeg één regel toe die precies zegt waarom: 'Deze case is live en in gebruik — de volledige write-up volgt zodra we met de klant het proces hebben teruggeblikt.' Dat is eerlijker én overtuigender dan een lege pagina die als onafgemaakt overkomt.

### 9. De portfolio-index categoriseert zichzelf nog met horeca/creative-taal — én toont slechts vier van de vijf bestaande cases, want Creemers Exclusive ontbreekt in de eigen projectlijst {#bezoeker-die-op-een-verouderdeirrelevante-pagina-landt-de-portfolio-index-categoriseert-zichzelf-nog-met-horecacreative-taal-n-toont-slechts-vier-van-de-vijf-bestaande-cases-want-creemers-exclusive-ontbreekt-in-de-eigen-projectlijst}

**Persona:** 'Alex' — besluitvormer bij een groter bedrijf die na de homepage bewust doorklikt op de secundaire CTA 'Bekijk ons werk'  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een besluitvormer bij een groter bedrijf leest de homepage, is overtuigd door het before/na-verhaal over maatwerk software, en klikt bewust door op 'Bekijk ons werk' om te zien of het portfolio die belofte onderbouwt.

**Trust/behoefte-trigger.** Precies het bewijsmoment uit PRODUCT.md's belief-ladder stap 3 — als het portfolio hier niet aansluit, wordt het net opgebouwde vertrouwen binnen één klik ondermijnd.

**Wat er nu misgaat.** Geverifieerd in src/app/portfolio/page.tsx: de stat-strip labelt de kaarten met 'SECTOREN: Horeca · Cultuur · Bedrijven' (regel 201) en categoriseert de cases als 'CULINAIR PLATFORM', 'BISTRO', 'FAMILIEBEDRIJF', 'ARTIST PORTFOLIO' — geen enkele case wordt gepresenteerd als systeem- of procesbewijs. Ernstiger, en niet eerder opgemerkt: de `projects`-array op deze pagina (regels 22-64) bevat maar vier entries — Chefs Connect, Auwt Aelse, IJssalon Italia, Stacy Kohnen. Creemers Exclusive, die wél een eigen, volledig uitgewerkte pagina heeft (src/app/portfolio/creemers-exclusive/page.tsx) én in sitemap.ts staat (priority 0.78) én in PRODUCT.md expliciet wordt genoemd als een van de vijf portfolio-bewijzen, is nergens op de index zelf te vinden of aan te klikken. Alex ziet dus niet alleen horeca-georiënteerde taal, hij ziet zelfs maar 80% van wat er al bestaat.

**Award-winning oplossing.** Voeg Creemers Exclusive toe aan de `projects`-array — dit is een render-bug, geen contentprobleem, en de snelste winst van alle vijftien cases hier. Voeg daarna een tweede rij toe, apart van de vijf bestaande cases, met de titel 'Processen & systemen' die de vier sectorpagina's (/maatwerk-software/bouw, zorg, logistiek, installatiebedrijf) als kaarten toont — expliciet gelabeld 'Praktijkvoorbeeld van onze aanpak' in plaats van 'case study', zodat de eerlijke status (nog geen grote softwarecase, wel bewezen aanpak) behouden blijft terwijl Alex toch iets ziet dat aansluit bij zijn behoefte. Hernoem 'SECTOREN: Horeca · Cultuur · Bedrijven' naar 'Web & merk' voor de bestaande vijf cases.

### 10. /diensten/processen/limburg communiceert over de volle breedte van de pagina uitsluitend fysiek-op-locatie — zonder één regel voor wie buiten de 14 genoemde steden zit {#bezoeker-die-op-een-verouderdeirrelevante-pagina-landt-dienstenprocessenlimburg-communiceert-over-de-volle-breedte-van-de-pagina-uitsluitend-fysiek-op-locatie-zonder-n-regel-voor-wie-buiten-de-14-genoemde-steden-zit}

**Persona:** Financieel directeur van een 60-persoons groothandel in Antwerpen die via een generieke 'maatwerk software procesautomatisering'-zoekopdracht op de Limburg-specifieke landingspagina belandt  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een financieel directeur van een groothandel in Antwerpen — precies binnen PRODUCT.md's 'Nederland en België'-doelgroep — zoekt op 'maatwerk software procesautomatisering' en komt via zoekverkeer op /diensten/processen/limburg terecht, de pagina die specifiek voor Zuid-Limburgse long-tail SEO is gebouwd.

**Trust/behoefte-trigger.** 'Is dit aanbod voor mij bedoeld, of ben ik hier duidelijk buiten de doelgroep?' — een cruciale eerste-seconden-beslissing.

**Wat er nu misgaat.** Geverifieerd in src/app/diensten/processen/limburg/page.tsx: de volledige pagina bouwt rond één aanbod, 'GRATIS PROCESANALYSE OP LOCATIE', met een expliciete lijst van 14 Limburgse steden (Maastricht, Heerlen, Sittard-Geleen, Kerkrade, Landgraaf, Brunssum, Valkenburg, Meerssen, Beek, Stein, Gulpen, Vaals, Roermond, Weert) en copy als 'We komen naar jouw locatie in Limburg toe' en 'Van Zuid-Limburg tot Midden-Limburg: we plannen de procesanalyse gewoon bij jou op locatie in'. Er staat geen enkele zin die een prospect buiten die 14 steden — laat staan in België — vertelt wat zijn alternatief is (geverifieerd: geen enkele treffer voor 'buiten Limburg' of vergelijkbare fallback). Voor de Antwerpse FD leest de hele pagina als 'niet voor jou'.

**Award-winning oplossing.** Voeg in de bestaande 'WERKGEBIED'-sectie, direct na de stedenlijst, een even prominent vormgegeven derde kaart toe (niet als kleine voetnoot) met een eigen CTA: 'Buiten Limburg — of in België? We werken net zo goed op afstand, met dezelfde procesanalyse via videocall.' Koppel deze kaart aan een aparte WhatsApp-deeplink met vooraf ingevulde tekst ('Ik zit buiten Limburg, wil een online procesanalyse') zodat de intake-flow zelf al registreert dat dit een andere regio-status is — nuttige data voor toekomstige segmentatie, niet alleen een geruststellende zin.

### 11. De sitebrede footer-tagline is de meest herhaalde merkzin op de hele site — en draagt nul van PRODUCT.md's positionering {#bezoeker-die-op-een-verouderdeirrelevante-pagina-landt-de-sitebrede-footer-tagline-is-de-meest-herhaalde-merkzin-op-de-hele-site-en-draagt-nul-van-productmds-positionering}

**Persona:** Elke bezoeker die op een van de oudere pagina's landt en naar beneden scrolt op zoek naar herkenning of extra navigatie  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Omdat Header.tsx alleen logo, de Diensten-dropdown en Contact bevat (geen Portfolio, Over ons, Blog of locaties in de primaire nav), is de Footer voor vrijwel elke pagina de enige plek waar een verdwaalde bezoeker verdere navigatie én een samenvattend merkstatement vindt.

**Trust/behoefte-trigger.** Het moment waarop een bezoeker die twijfelt of hij op de juiste plek zit ('past dit bedrijf bij mijn probleem?') naar de voettekst scrolt voor een laatste, samenvattende indruk.

**Wat er nu misgaat.** Geverifieerd in src/components/Footer.tsx, regel 41: 'Dynamisch in aanpak, uniek in resultaat.' — een woordspeling op de bedrijfsnaam uit het oude 'full creative agency'-tijdperk, die niets zegt over technische onderbouwing, meedenken of maatwerk software. Deze ene zin verschijnt op letterlijk elke pagina die Footer importeert (bevestigd op minstens tien verschillende routes, van homepage tot de oudste orphan-pagina's) en is daarmee de meest herhaalde merkuitspraak van de hele site — terwijl PRODUCT.md een specifieke, veel sterkere zin definieert ('de partner die niet alleen bouwt wat je vraagt, maar meedenkt over wat beter kan') die nergens in de Footer wordt hergebruikt, ook niet in de wél al bijgewerkte regel 44 eronder die 'maatwerk software' wel noemt maar de kernzin zelf mist.

**Award-winning oplossing.** Vervang 'Dynamisch in aanpak, uniek in resultaat.' door PRODUCT.md's eigen positioneringszin: 'De partner die niet alleen bouwt wat je vraagt, maar meedenkt over wat beter kan.' Eén regelwijziging, sitebreed effect: zelfs een bezoeker op de meest verouderde pagina van de site krijgt via de ene sitewide constante die er is alsnog de actuele kernboodschap mee — zonder dat er één andere pagina hoeft te worden aangeraakt.

### 12. sitemap.ts geeft weespagina's uit het oude verhaal een hogere of gelijke crawlprioriteit dan de pagina's die PRODUCT.md als hoofdbewijs aanmerkt {#bezoeker-die-op-een-verouderdeirrelevante-pagina-landt-sitemapts-geeft-weespaginas-uit-het-oude-verhaal-een-hogere-of-gelijke-crawlprioriteit-dan-de-paginas-die-productmd-als-hoofdbewijs-aanmerkt}

**Persona:** Googlebot / SEO-analist die de crawl-prioriteiten van de site beoordeelt namens toekomstige organische bezoekers  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Bij het beoordelen van welke pagina's Dynique zelf als belangrijk aanmerkt voor zoekmachines — een directe indicator van welke pagina's toekomstige bezoekers straks het vaakst zullen vinden — blijkt de sitemap zelf nog de oude prioriteiten van vóór de repositionering te dragen.

**Trust/behoefte-trigger.** Niet een individueel bezoekmoment, maar het structurele mechanisme dat bepaalt wélke pagina's toekomstige 'oude pagina'-bezoekers straks zullen vinden.

**Wat er nu misgaat.** Geverifieerd in src/app/sitemap.ts: /eerste-website heeft priority 0.78 en /vervanging 0.75 — beide pagina's die nergens in Header.tsx of Footer.tsx worden gelinkt en een andere doelgroep bedienen dan de huidige positionering — in dezelfde orde van grootte als /locaties/heerlen (0.75) en /locaties/sittard (0.72), die wél in de Footer staan. Ondertussen staan de vier /maatwerk-software/*-sectorpagina's, door PRODUCT.md expliciet aangemerkt als 'dieper-in-de-funnel bewijs' voor de hoofddoelgroep, op 0.80 — lager dan de vier /diensten-subpagina's (0.88, geverifieerd) — én zijn ze, net als /eerste-website en /vervanging, afwezig in zowel Header als Footer.

**Award-winning oplossing.** Verlaag /eerste-website en /vervanging naar 0.1 zodra de redirect uit case 5 is doorgevoerd (ze horen dan sowieso niet meer los in de sitemap te staan), verhoog /maatwerk-software/{bouw,zorg,logistiek,installatiebedrijf} naar 0.85 in lijn met hun rol als hoofdbewijs, en voeg deze vier pagina's daadwerkelijk toe aan Footer.tsx's bestaande 'Diensten'-kolom (die nu alleen de vier disciplines toont, geen enkele sectorpagina) — zodat mens én zoekmachine voortaan dezelfde, actuele prioriteit te zien krijgen in plaats van twee losse waarheden.

### 13. De blogpost over websiteprijzen plaatst de juiste boodschap over maatwerk software pas in de op-één-na-laatste sectie — terwijl de verkeerde framing wél bij de prijstabel staat, waar skimmers kijken {#bezoeker-die-op-een-verouderdeirrelevante-pagina-landt-de-blogpost-over-websiteprijzen-plaatst-de-juiste-boodschap-over-maatwerk-software-pas-in-de-op-n-na-laatste-sectie-terwijl-de-verkeerde-framing-wl-bij-de-prijstabel-staat-waar-skimmers-kijken}

**Persona:** Manager bedrijfsvoering bij een 40-persoons logistiek bedrijf die 'wat kost maatwerk software' googelt  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een manager bedrijfsvoering bij een logistiek bedrijf oriënteert zich op softwarepartners en vindt via zoekverkeer /blog/wat-kost-een-website — een artikel oorspronkelijk voor website-prijsvragen geschreven, dat nu ook op bredere prijsvragen rond maatwerk software scoort. Zoals de meeste bloglezers scant hij eerst de kopjes voordat hij besluit verder te lezen.

**Trust/behoefte-trigger.** Zoekt bevestiging dat maatwerk software een eigen, serieus traject is met een eigen prijsvormingslogica — niet zomaar een duurdere website — en vormt dat oordeel grotendeels op basis van de kopjes die hij scant, niet de hele tekst.

**Wat er nu misgaat.** Geverifieerd in src/app/blog/wat-kost-een-website/page.tsx: onder de h2 'De vier prijsklassen in 2026' (regel 37) staat de laagste-naar-hoogste prijstabel als vier h3's, met de maatwerk-software-vermelding pas als slotzin ín de vierde, laagst-geplaatste h3 'Enterprise / Custom platform — €15.000+' (regel 54): '...ook waar een website ophoudt en maatwerk software begint'. De correcte framing — 'geen vaste prijstabel, wel een intake' — bestaat wél, maar pas in de sectie 'Onze aanpak in een notendop' (regel 94), na drie tussenliggende h2's ('Wat zit er nou écht in die prijs', 'Verborgen kosten', 'Hoe weet je of een prijs eerlijk is') en vlak vóór de Conclusie. Een lezer die alleen de kopjes scant — het gedrag dat deze persona expliciet vertoont — ziet dus wél de prijstabel-framing bovenaan, maar mist de juiste framing die pas helemaal onderaan staat.

**Award-winning oplossing.** Verplaats de bestaande, al goed geformuleerde zin uit 'Onze aanpak in een notendop' (regel 94) niet ergens middenin, maar geef hem letterlijk zijn eigen `<h2>Waar prijstabellen ophouden: maatwerk software</h2>` direct ná de vier-prijsklassen-sectie — zodat een kop-scannende lezer hem al ziet vóórdat hij de drie tussenliggende secties overslaat. Laat de zin in de Enterprise-h3 (regel 54) staan als voorwaartse verwijzing ('...zie hieronder waarom'), maar verwijder de suggestie dat maatwerk software een vijfde, nog duurdere website-categorie is: het is een ander traject, geen hogere prijsklasse.

### 14. De grootste, meest prominente ambient-gloed op /bedankt is nog exact de oude merkgroen — terwijl de kleinere, tweede gloed er al wél op goud staat {#bezoeker-die-op-een-verouderdeirrelevante-pagina-landt-de-grootste-meest-prominente-ambient-gloed-op-bedankt-is-nog-exact-de-oude-merkgroen-terwijl-de-kleinere-tweede-gloed-er-al-wl-op-goud-staat}

**Persona:** Bezoeker die net het (kapotte) formulier op /gratis-checklist heeft ingevuld en wordt doorgestuurd naar de bedankpagina  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een bezoeker die zojuist een formulier heeft ingediend landt op /bedankt, de bevestigingspagina die het allerlaatste, geruststellende moment van de hele funnel zou moeten zijn.

**Trust/behoefte-trigger.** Het bevestigingsmoment moet geruststellen dat 'dit één samenhangend, zorgvuldig bedrijf is' — juist ná het overhandigen van persoonlijke gegevens.

**Wat er nu misgaat.** Geverifieerd in src/app/bedankt/page.tsx: de grootste, meest prominente ambient-gloed (800×800px, rechtsboven, regel 29) staat nog op `rgba(52,211,153,0.18)` — #34d399, de oude merkgroen die het critique-rapport al identificeerde als restant van vóór de rebrand. Opvallend: de kléinere, tweede gloed direct eronder (600×600px, linksonder, regel 30) staat al wél correct op goud (`rgba(212,165,116,0.10)`), en de rest van de pagina (succesindicator, labels) gebruikt consequent #d4a574. Wie dit ooit heeft gefixt, heeft precies de verkeerde van de twee gloeden aangepast — de kleine bijrol is goud, de grote hoofdrol is nog groen.

**Award-winning oplossing.** Vervang op regel 29 `rgba(52,211,153,0.18)` door een iets prominentere gouden tint dan de al aanwezige secundaire gloed, bijvoorbeeld `rgba(212,165,116,0.16)`, zodat de twee gloeden samen een herkenbaar, gebalanceerd duo vormen in plaats van elkaar tegen te spreken. Eén regel, disproportioneel effect: dit is de pagina die elke succesvolle conversie op de site afsluit, en de fout zit letterlijk in de grootste vorm op het scherm.

### 15. Vijf locatiepagina's dragen vier ongerelateerde accentkleuren — waarvan er toevallig al twee (Maastricht, Eindhoven) goud zijn, wat de resterende drie afwijkingen des te opvallender maakt {#bezoeker-die-op-een-verouderdeirrelevante-pagina-landt-vijf-locatiepaginas-dragen-vier-ongerelateerde-accentkleuren-waarvan-er-toevallig-al-twee-maastricht-eindhoven-goud-zijn-wat-de-resterende-drie-afwijkingen-des-te-opvallender-maakt}

**Persona:** Ondernemer met vestigingen in zowel Maastricht als Aken die beide locatiepagina's naast elkaar bekijkt tijdens een due-diligence-vergelijking  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een ondernemer die zowel in Maastricht als in Aken actief is, opent beide locatiepagina's van Dynique in aparte tabbladen om te vergelijken hoe grondig de content per stad is uitgewerkt — een heel normaal due-diligence-moment vóór een offerteaanvraag.

**Trust/behoefte-trigger.** Verwacht een herkenbaar, doorlopend merk tussen twee pagina's van dezelfde site over hetzelfde onderwerp — verschillen in consistentie wekken twijfel over hoe zorgvuldig het bedrijf werkt.

**Wat er nu misgaat.** Geverifieerd in de CityData van alle vijf locatiebestanden: Maastricht en Eindhoven gebruiken beide al #d4a574 (het huidige merkgoud) — identiek, dus dat deel is al correct. Heerlen gebruikt #a78bfa (paars), Sittard #fb923c (oranje), Aken #ef4444 (rood): drie pagina's die zichtbaar uit de pas lopen naast de twee die het al goed doen. Er is geen enkele inhoudelijke of merklogica die verklaart waarom Aken toevallig rood is en Maastricht/Eindhoven goud — voor de vergelijkende bezoeker oogt dit niet als een doelbewuste keuze maar als drie vergeten pagina's tussen twee wél afgemaakte.

**Award-winning oplossing.** Zet het gouden ACCENT-token (#d4a574) op alle vijf locatiepagina's — voor Maastricht en Eindhoven verandert er dus niets, voor Heerlen/Sittard/Aken wél. Gebruik in plaats van kleurverschil een subtiel, functioneel onderscheid per stad: de highlights-array die elke CityData al heeft (vier sectoren per stad, nu met decoratieve 01-04-nummering) krijgt per stad een unieke, handgecodeerde lijnillustratie van één lokaal herkenningspunt in de hero-achtergrond (Vrijthof voor Maastricht, Dom voor Aken, Brainportlogo-achtige lijnvorm voor Eindhoven) — zodat de pagina's zich van elkaar onderscheiden via iets dat een lokale bezoeker daadwerkelijk herkent, in plaats van via een willekeurige kleurcode die toevallig bij twee van de vijf al goed stond.

---

## Gebruiker met toegankelijkheidsbehoeften

### 1. De Adviseur breekt haar eigen belofte van 'geen verplichtingen' met tientallen onnodige Tab-drukken {#gebruiker-met-toegankelijkheidsbehoeften-de-adviseur-breekt-haar-eigen-belofte-van-geen-verplichtingen-met-tientallen-onnodige-tab-drukken}

**Persona:** Toetsenbord-only gebruiker met motorische beperking (RSI/tremor, geen muis)  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Karin (51) is facilitair manager bij een logistiek bedrijf in Eindhoven. Door RSI in beide polsen navigeert ze thuis, aan de keukentafel na werktijd, vrijwel volledig met een los toetsenbord — Tab, Shift+Tab, Enter, Spatie. Ze kwam via een LinkedIn-post over procesautomatisering op dynique.nl terecht en scrolt naar 'De Adviseur' (id="advies"), het interactieve 4-vragen-instrument dat zichzelf presenteert als '60 seconden' en 'Geen verplichtingen'.

**Trust/behoefte-trigger.** Ze wil een laagdrempelige, snelle test doen — geen telefoongesprek, geen formulier — om te zien of Dynique haar probleem (versnipperde warehouse-systemen) begrijpt. De copy 'Niet verkopen. Adviseren.' en 'Geen verplichtingen' (Advisor.tsx, regel 264-265 en 536) belooft expliciet lage inspanning; dat is precies wat voor haar op het spel staat.

**Wat er nu misgaat.** In src/components/Advisor.tsx vervangt de select()-functie (regel 196-203) 240ms na een klik het hele vragenblok via een nieuwe React key (key={`opts-${step}`}, regel 403), waardoor de zojuist gefocuste knop uit de DOM verdwijnt. Er is geen useEffect die focus verplaatst naar de nieuwe <h3>{current.q}</h3> (regel 314-316) — na elke stap valt de focus terug op <body>. Ook het 'Vraag {step+1} — {STEPS.length}'-label (regel 382) staat in geen enkele aria-live-regio. Voor Karin betekent dit: na elk van de 4 antwoorden moet ze met Tab vanaf de paginatop (logo, navigatie, hero-CTA's, portfolio-links) helemaal terug naar de Adviseur tabben — tientallen extra toetsaanslagen voor precies het component dat 'geen verplichtingen' belooft. De belofte en de ervaring spreken elkaar letterlijk tegen.

**Award-winning oplossing.** Los focusverlies op (tabIndex={-1} + id op de h3, useEffect([step]) die na een requestAnimationFrame focust, aria-live="polite" om het label) — maar ga verder dan gelijke tred houden met een muis: geef de Adviseur een eigen toetsenbord-modus die sneller is dan klikken. De antwoordknoppen tonen al letters A-D (LETTERS-array, regel 164, gerenderd in elke .adv-opt-knop); koppel daar een globale keydown-listener aan die cijfer- of lettertoetsen (1-4 of A-D) direct als selectie accepteert, zodat Karin nooit meer hoeft te tabben binnen het component — ze beantwoordt alle 4 vragen zonder haar vingers ooit van de bovenste rij te halen. Combineer dit met roving tabindex binnen de optielijst (pijltjestoetsen op/neer) zodat Tab het component precies één keer in en uit gaat. Resultaat: niet 'ook toegankelijk', maar aantoonbaar sneller voor toetsenbordgebruikers dan voor muisgebruikers — een concreet, testbaar en onderscheidend detail op een pagina die zich al presenteert als 'consultatieve console'.

### 2. Het bewijsstuk van 'Bewijs door precisie' is voor NVDA onverstaanbare ruis van twee overlappende schermen {#gebruiker-met-toegankelijkheidsbehoeften-het-bewijsstuk-van-bewijs-door-precisie-is-voor-nvda-onverstaanbare-ruis-van-twee-overlappende-schermen}

**Persona:** Screenreader-gebruiker (NVDA) + gebruiker met motorische beperking die niet vloeiend kan scrollen  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Tom (44), operationeel directeur bij een installatiebedrijf in Sittard, deelt zijn scherm via Teams met zijn collega Yasmin, die slechtziend is en met NVDA meeleest terwijl Tom scrolt. Ze bereiden samen een aanbeveling voor aan hun MT en komen bij de sectie 'Waarom Dynique' (id="waarom") — de scroll-gestuurde voor/na-vergelijking die precies het bewijs moet leveren waar Design Principle 1 uit PRODUCT.md ('Bewijs door precisie, niet door beloftes') om vraagt.

**Trust/behoefte-trigger.** Yasmin wil horen wát er concreet verandert tussen 'voor' en 'na' om te toetsen of Dynique haar probleem (versnipperde CRM/mail/Excel-tools) daadwerkelijk snapt — ze gebruikt bovendien switch-navigatie voor grove scrollstappen en kan de vloeiende scrub sowieso niet precies bedienen.

**Wat er nu misgaat.** In src/components/processen/Visuals.tsx wordt de --p-variabele die de reveal aandrijft uitsluitend gezet door window scroll-events (useBeforeAfterScrub, regel 255-280) — geen input, geen knop, geen toetsenbordalternatief. Yasmins schokkerige switch-scroll levert geen bruikbare --p-waarde. Ernstiger: BeforeScreen (regel 13-55) én AfterScreen (regel 57-115) staan allebei tegelijk in de DOM; AfterScreen wordt alleen visueel geclipt via CSS (.ba-after { clip-path: ... }, regel 346), niet uit de toegankelijkheidsboom verwijderd. NVDA leest dus bij binnenkomst beide schermen door elkaar voor — 'SYSTEEM · 3 FOUTEN', 'Synchronisatie mislukt · CRM ↔ boekhouding · nu', direct gevolgd door 'Dashboard · Alles gesynchroniseerd · 0 fouten · 100% automatisch · +11u p/week' — zonder aria-hidden op de inactieve staat en zonder één samenvattende zin. Het enige element dat Design Principle 1 letterlijk moet waarmaken, is voor Yasmin het minst begrijpelijke onderdeel van de hele homepage.

**Award-winning oplossing.** Bouw dit niet als verstopte sr-only-lapmiddel, maar als een zichtbaar, merk-passend tweede bewijsspoor: een monospace 'systeemlog' die naast/onder het voor/na-venster meeschrijft in dezelfde taal als de UI zelf — '> CRM ↔ boekhouding: sync mislukt (3 fouten)' vervagend naar '> CRM ↔ boekhouding: 0 fouten · gesynchroniseerd'. Dat log is voor iedereen zichtbaar (geen sr-only-truc nodig), leest voor NVDA vanzelf lineair en correct voor, en versterkt exact de 'technisch onderlegd'-merkpersoonlijkheid uit PRODUCT.md — precisie die je kunt lézen, niet alleen zien bewegen. Zet daarnaast aria-hidden="true" op zowel BeforeScreen als AfterScreen (ze worden decoratief zodra het log er is) en voeg een zichtbare <input type="range" aria-label="Sleep om voor en na te vergelijken"> toe die dezelfde --p stuurt — zo krijgt Yasmin's switch-navigatie een precies bedienbaar doel, terwijl scroll-gebruikers de huidige ervaring gewoon behouden.

### 3. FAQ-accordeon meldt open/dicht-status nooit — juist bij de twee vragen die haar besluit bepalen {#gebruiker-met-toegankelijkheidsbehoeften-faq-accordeon-meldt-opendicht-status-nooit-juist-bij-de-twee-vragen-die-haar-besluit-bepalen}

**Persona:** Screenreader-gebruiker (JAWS) die de FAQ raadpleegt vóór een aanbestedingsbeslissing  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Mireille (39) is inkoopmanager bij een zorginstelling in Heerlen en heeft Dynique als één van drie kandidaten op haar shortlist voor een digitaliseringstraject. Met JAWS werkt ze zelfstandig door de FAQ-sectie op de homepage (id="faq") — specifiek op zoek naar de antwoorden op 'Hoe ga je te werk bij een bestaand systeem of team?' en 'Hoe zit het met beveiliging en dataeigendom?', de twee vragen die haar interne aanbeveling aan de directie zullen onderbouwen.

**Trust/behoefte-trigger.** Ze wil zelfstandig, zonder een gesprek te hoeven aanvragen, zekerheid krijgen over dataeigendom en integratie met bestaande systemen — precies de bezwaren die deze FAQ oprecht goed beantwoordt, mits ze de antwoorden kan bereiken.

**Wat er nu misgaat.** In src/app/page.tsx (regel 1376-1394) is elke FAQ-vraag een <button onClick={...}> zonder aria-expanded, zonder aria-controls en zonder id-koppeling naar het antwoord-paneel. De open/dicht-status wordt puur visueel getoond via een geroteerde CSS-lijn (rotate-90 opacity-0, regel 1388). Voor JAWS is elke vraag een naamloze, statusloze knop: Mireille hoort nooit of 'Beveiliging en dataeigendom' al open is — ze kan per ongeluk een antwoord dat ze al gelezen heeft opnieuw activeren (en sluiten zonder het te beseffen), of een antwoord overslaan omdat ze dacht dat het al open stond. Bij de twee vragen die haar aanbeveling moeten dragen is dat geen esthetisch euvel maar een reëel risico dat ze met onvolledige informatie naar haar directie stapt.

**Award-winning oplossing.** Geef elke knop aria-expanded={openFAQ === i} en aria-controls={`faq-panel-${i}`}, en het antwoord-<div> id={`faq-panel-${i}`} met role="region" aria-labelledby={`faq-question-${i}`} — vier attributen op een bestaand element, geen herontwerp. Ga daarna een stap verder dan compliance: voeg standaard-accordeon-toetsenbordnavigatie toe (pijl omhoog/omlaag springt tussen vraag-knoppen, Home/End naar eerste/laatste) zodat Mireille niet per vraag hoeft te tabben, én maak elk paneel deep-linkbaar via een URL-hash (/#faq-beveiliging) — zodat ze het exacte antwoord over dataeigendom letterlijk kan kopiëren in haar interne memo aan de directie. Dat laatste tilt een a11y-fix naar een functie die iedereen in haar rol nuttig vindt, niet alleen JAWS-gebruikers.

### 4. Het formulier waar élke CTA op de site naartoe linkt, is voor VoiceOver een naamloze reeks velden {#gebruiker-met-toegankelijkheidsbehoeften-het-formulier-waar-lke-cta-op-de-site-naartoe-linkt-is-voor-voiceover-een-naamloze-reeks-velden}

**Persona:** Screenreader-gebruiker (VoiceOver) die het hoofdformulier op de homepage invult  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Bram (47) is IT-manager bij een bouwbedrijf in Maastricht. Hij heeft met VoiceOver het traject ('Het Traject', Fase 1-4) en de reviews gelezen, is overtuigd, en scrolt door naar #contact om zijn project te omschrijven — precies waar 'START JE PROJECT', 'START JOUW TRAJECT' en de hero-CTA allemaal naartoe linken (href="#contact"). Dit is dus niet een nevenformulier, dit is voor de meeste bezoekers de facto enige ingang.

**Trust/behoefte-trigger.** Na de belofte '24u reactietijd · 100% vaste prijs · 3 revisierondes' in het conversieblok vlak boven deze sectie wil hij direct zijn bouwproject omschrijven zonder WhatsApp te hoeven openen — het formulier moet die net opgebouwde overtuiging bevestigen, niet ondermijnen.

**Wat er nu misgaat.** In src/app/page.tsx, sectie id="contact" (regel 1216-1352), mist elk <label> een htmlFor en elke <input>/<select>/<textarea> een id — Naam, Bedrijf, 'Wat heb je nodig?' en 'Omschrijf je project' zijn niet programmatisch gekoppeld. VoiceOver valt bij tekstvelden terug op de placeholder ('Jouw naam'), maar bij de <select> is er geen enkele accessible name: Bram hoort alleen 'pop-up-knop, Selecteer een dienst' zonder ooit 'Wat heb je nodig?' te horen. Geen enkel veld heeft required, dus er wordt ook niet aangekondigd wat verplicht is. Het meest verraderlijke: exact hetzelfde formulier bestaat al wél correct geïmplementeerd op /contact (src/app/contact/page.tsx, regel 166-238, elk veld met htmlFor/id-paar en echte required) — en zelfs een derde, eigen implementatie in src/components/processen/Visuals.tsx (de <Field>-component, regel 208-233) gebruikt React's useId() om dit automatisch goed te doen. Er bestaan dus al twee correcte patronen in dezelfde repository; ze zijn alleen nooit naar de meest gelinkte plek op de site gekopieerd.

**Award-winning oplossing.** Kopieer niet zomaar het patroon van /contact — elimineer de derde, inconsistente implementatie structureel. Extraheer één gedeelde <FormField>-component (naar het voorbeeld van de al bestaande, correcte <Field> in Visuals.tsx met useId()) en gebruik die overal waar dit formulier voorkomt: homepage #contact, /contact, alle SectorTemplate- en processen-formulieren. Dat is precies wat 'doordacht & precies' uit PRODUCT.md zou doen: niet de symptomen op één plek herstellen, maar de bronoorzaak — drie los van elkaar gegroeide formulierimplementaties — wegnemen zodat dit type fout structureel onmogelijk wordt in plaats van opnieuw ergens anders terug te keren.

### 5. De WhatsApp-knop blijft boven op het 'modale' menu liggen — zichtbaar en tikbaar voor haar, onzichtbaar voor een schermlezer {#gebruiker-met-toegankelijkheidsbehoeften-de-whatsapp-knop-blijft-boven-op-het-modale-menu-liggen-zichtbaar-en-tikbaar-voor-haar-onzichtbaar-voor-een-schermlezer}

**Persona:** Motorisch beperkte gebruiker (touch, grove motoriek) die het mobiele menu opent  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Sanne (34), projectleider bij een zorgorganisatie in Aken, bekijkt de site op haar telefoon tijdens de bus naar huis. Door beperkte fijne motoriek tikt ze met haar hele vingertop of knokkel in plaats van precies. Ze opent het hamburgermenu om naar Portfolio te gaan.

**Trust/behoefte-trigger.** Ze verwacht dat een geopend menu de rest van de pagina blokkeert — dat is wat role="dialog" aria-modal="true" belooft — zodat ze niet per ongeluk iets anders activeert terwijl ze grof mikt op een bewegend voertuig.

**Wat er nu misgaat.** Live geverifieerd: de sticky WhatsApp-knop in src/app/page.tsx (regel 307-326) heeft z-50, terwijl het volledige-schermmenu in src/components/Header.tsx (regel 196) slechts z-[45] heeft. Met het menu open ligt de WhatsApp-link zichtbaar en tikbaar bovenop het 'modale' paneel — Sanne kan per ongeluk WhatsApp openen terwijl ze denkt in het menu te zitten. Tegelijk staat exact diezelfde link binnen <main aria-hidden="true"> zodra het menu open is (Header.tsx, regel 46-53): een schermlezer-gebruiker krijgt de knop dan helemaal niet aangekondigd, terwijl hij voor Sanne wél zichtbaar en actief blijft — precies de aria-hidden-plus-nog-interactief-combinatie die axe-core als 'aria-hidden-focus' bestempelt.

**Award-winning oplossing.** Los dit niet op met een losse z-index-patch, maar met een IA-keuze die de twee conversiekanalen (menu en WhatsApp) nooit meer laten vechten om dezelfde ruimte: het mobiele menu toont al een footer met tel:- en mailto:-links (Header.tsx, regel 275-287) — voeg daar de WhatsApp-link als derde optie aan toe, en verberg de zwevende bubble volledig zodra het menu open is (via dezelfde isMenuOpen-state, opgetild naar een lichte context). Zo is er op elk moment precies één actieve conversie-oppervlak, is 'aria-hidden' altijd gesynchroniseerd met 'niet meer klikbaar', en wordt WhatsApp — het kanaal dat de site zelf als primair aanmerkt — juist prominenter in het menu in plaats van een concurrerend los element te blijven.

### 6. De contactgegevens naast telefoonnummer en e-mail zijn gemeten 1,6:1 contrast — de laagste score van de hele site {#gebruiker-met-toegankelijkheidsbehoeften-de-contactgegevens-naast-telefoonnummer-en-e-mail-zijn-gemeten-161-contrast-de-laagste-score-van-de-hele-site}

**Persona:** Slechtziende gebruiker met verminderd contrastgevoel (leeftijdsgebonden maculadegeneratie)  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Guus (63) heeft leeftijdsgebonden maculadegeneratie, werkt met 175% OS-zoom en een lichte kleurschakering (contrast, niet donker-thema, is zijn knelpunt). Als inkoopdirecteur van een logistiek bedrijf scrollt hij naar de witte contactsectie op de homepage om snel het telefoonnummer, e-mailadres en de reactietijd te checken vóór hij besluit te bellen of het formulier in te vullen.

**Trust/behoefte-trigger.** Hij wil in één oogopslag zien hóe hij contact opneemt en hoe snel hij reactie krijgt — dat bepaalt of hij nu meteen belt of eerst het formulier invult. Dit is exact het moment waarop elke andere CTA op de pagina (WhatsApp-bubble, hero-CTA, statement-strip) naartoe leidt.

**Wat er nu misgaat.** In src/app/page.tsx, regel 1231-1246, staan de labels 'TELEFOON', 'E-MAIL', 'REACTIETIJD' en 'WERKGEBIED' in className="text-black/20" op een witte achtergrond. Rekenkundig is dat zwart-op-20%-dekking gerenderd als rgb(204,204,204) op wit — een contrastverhouding van circa 1,6:1, ruim onder zowel de WCAG AA-eis voor normale tekst (4,5:1) als de soepelste grote-tekst-eis (3:1). Dit zijn geen decoratieve bijschriften: het zijn de labels naast het daadwerkelijke telefoonnummer en e-mailadres, in de belangrijkste conversiesectie van de site. PRODUCT.md's Accessibility & Inclusion-sectie (regel 63) claimt expliciet dat WCAG AA 'al doorgevoerd' is op de homepage — dit ene, meetbare getal weerspreekt die claim rechtstreeks.

**Award-winning oplossing.** Vervang text-black/20 door minimaal text-black/60 (ruim boven 4,5:1) op deze vier labels. Maak dit vervolgens onmogelijk om per ongeluk te herhalen: de site gebruikt al een eigen deterministische scanner (`detect.mjs`, genoemd in docs/CRITIQUE-SITE-2026-07-14.md regel 3-5) om verboden visuele patronen op te sporen. Breid die tool uit met een regel die elke text-black/[1-3]0- of text-white/[1-3]0-klasse op een contrasterende achtergrond flagt — zodat dit patroon niet menselijke review nodig heeft om terug te vinden, maar automatisch wordt tegengehouden vóór het live gaat. Dat is precies het soort 'technisch onderlegd, doordacht & precies'-oplossing die het merk zelf claimt te zijn: het probleem structureel wegnemen met de tooling die al bestaat, in plaats van één label handmatig te herstellen.

### 7. De 'ene zin die je na 10 seconden onthoudt' verandert drie keer binnen diezelfde 10 seconden {#gebruiker-met-toegankelijkheidsbehoeften-de-ene-zin-die-je-na-10-seconden-onthoudt-verandert-drie-keer-binnen-diezelfde-10-seconden}

**Persona:** Gebruiker met cognitieve overbelasting / concentratieproblemen (niet-aangeboren hersenletsel)  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Els (52) heeft een niet-aangeboren hersenletsel waardoor bewegende tekst haar concentratie breekt. Ze bereidt namens haar werkgever (een installatiebedrijf) een kort intern voorstel voor en wil de homepage-hero rustig lezen om de kernboodschap letterlijk te kunnen citeren.

**Trust/behoefte-trigger.** Ze heeft tijd nodig om 'WIJ BOUWEN [...] EN DENKEN MEE OVER WAT BETER KAN' te laten landen — PRODUCT.md noemt dit zelf 'de ene zin die een bezoeker na 10 seconden onthoudt' (regel 29). Voor Els is dat venster van 10 seconden precies het probleem.

**Wat er nu misgaat.** In src/app/page.tsx (regel 112-115) draait een setInterval elke 2600ms door heroServices, en dat interval loopt door ongeacht prefers-reduced-motion — alleen de CSS-slide-animatie zelf wordt uitgeschakeld (regel 1553: .hero-slot-word { animation: none }), maar de tekst zelf blijft evengoed elke 2,6 seconde abrupt vervangen. Binnen de 10 seconden die PRODUCT.md zelf als geheugenvenster noemt, wisselt het kernwoord dus minstens drie keer — de 'ene onthouden zin' is voor Els zelf-tegensprekend: net wanneer ze 'MAATWERK SOFTWARE' vastpakt, staat er 'DIGITALE SYSTEMEN'. Er is nergens een pauze-, stop- of verbergknop, exact het scenario dat WCAG 2.2.2 (Pause, Stop, Hide) beoogt te voorkomen.

**Award-winning oplossing.** Voeg geen nieuwe UI toe — geef de al bestaande service-pills (regel 373-383, die nu al onClick={() => setSvcIdx(i)} hebben) een tweede functie: een klik op de al-actieve pil zet autoAdvance uit en toont een klein pauze-icoontje binnen die pil. Dat is letterlijk één extra state-vlag op interactie die al bestaat, geen nieuw ontwerpelement. Zorg daarnaast dat prefers-reduced-motion het interval zelf nooit start (niet alleen de CSS-animatie onderdrukt) en toon dan meteen het eerste, belangrijkste woord ('MAATWERK SOFTWARE'). Zo wordt exact de zin die de site als haar belangrijkste geheugenanker beschouwt, voor iedereen — met of zonder concentratiebeperking — daadwerkelijk stil genoeg om te onthouden.

### 8. De reviewcarrousel is de enige animatie op de homepage die de systeeminstelling van de gebruiker straal negeert {#gebruiker-met-toegankelijkheidsbehoeften-de-reviewcarrousel-is-de-enige-animatie-op-de-homepage-die-de-systeeminstelling-van-de-gebruiker-straal-negeert}

**Persona:** Gebruiker met vestibulaire/cognitieve gevoeligheid voor beweging (reduced-motion ingesteld)  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Farid (46) heeft een evenwichtsaandoening en heeft 'verminderde beweging' systeembreed ingeschakeld — een instelling die de rest van de homepage (marquee, orbs, hero-woorden) al netjes respecteert. Op zijn tablet, in een rustig moment, leest hij de vijf klantreviews om het vertrouwen te toetsen dat 'Verified · 5.0' belooft.

**Trust/behoefte-trigger.** Hij wil elke review rustig lezen en zelf, op zijn eigen tempo, doorgaan naar de volgende — zonder dat de content onder hem verandert terwijl hij nog leest, en zonder dat hij hoeft te vertrouwen op willekeur van een instelling die elders op dezelfde pagina wél werkt.

**Wat er nu misgaat.** In src/app/page.tsx wisselt reviewIdx elke 14 seconden via setInterval (regel 117-120), volledig los van reduced-motion. De reviewFade-animatie (regel 1474-1477, toegepast op regel 696-699) én de kleurovergang van de ambient-glow (transition-all duration-[2000ms], regel 673) staan niet in het @media (prefers-reduced-motion: reduce)-blok onderaan het bestand (regel 1549-1554) — dat blok dekt alleen .anim, .marquee-track, de orb-breathe-klassen en .hero-slot-word. Farid krijgt dus, in weerwil van zijn expliciete systeeminstelling, elke 14 seconden een volledig nieuwe review mét kleurverschuiving — precies het type onvoorspelbare, aanhoudende beweging die zijn instelling had moeten voorkomen, op de enige plek waar de site vijf geverifieerde reviews toont.

**Award-winning oplossing.** Voeg pause-on-hover/focus toe aan de carrousel — een standaard best practice die de bruikbaarheid voor iedereen verbetert, niet alleen voor reduced-motion-gebruikers — en koppel het setInterval bovendien aan dezelfde globale motion-preference-check die de intro-loader al doet (regel 87), zodat het interval bij reduced-motion nooit start. De al bestaande paginatie-dots (regel 758-781) worden dan de enige, gebruiker-geïnitieerde manier om te wisselen. Voeg tot slot een 'Lees alle 5 reviews'-link toe die de reviews als platte, doorloopbare lijst toont — een carrousel is voor screenreader-gebruikers sowieso een recall-onvriendelijk patroon, ongeacht motion-instellingen, en deze link lost dat in één keer structureel op.

### 9. Het project dat de homepage als bewijs nummer 1 presenteert, bestaat voor NVDA feitelijk niet {#gebruiker-met-toegankelijkheidsbehoeften-het-project-dat-de-homepage-als-bewijs-nummer-1-presenteert-bestaat-voor-nvda-feitelijk-niet}

**Persona:** Screenreader-gebruiker die het enige uitgelichte portfolio-bewijs bekijkt  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Yasmin (zie case 2), nog altijd niet overtuigd na de onbegrijpelijke voor/na-demo, klikt toch door naar /portfolio/chefs-connect — het project dat als enige groot 'UITGELICHT' staat op de homepage-portfoliosectie (regel 1059-1109), en daarmee impliciet het sterkste bewijsstuk van vakmanschap zou moeten zijn.

**Trust/behoefte-trigger.** Ze wil, na de generieke tekst 'Waar topchefs en premium keukens elkaar vinden', concreet begrijpen wélke features gebouwd zijn en met welke aanpak — het derde punt op PRODUCT.md's geloofsladder ('het bestaande portfolio bewijst dat dit vakmanschap al wordt geleverd').

**Wat er nu misgaat.** src/app/portfolio/chefs-connect/page.tsx bevat op regel 7 letterlijk de comment 'Design is af. Vul onderstaande velden in met de echte content' — challenge, approach, features, gallery, results en metrics staan allemaal leeg, en subIntro is expliciet "" (regel 19) terwijl heroVideo wél gevuld is (regel 22). Die video wordt gerenderd via ScrollAwareVideo in src/components/CaseStudyTemplate.tsx (regel 56-82): de <video>-tag zelf, op regel 80, heeft geen aria-label en geen <track kind="descriptions">. Voor een ziende bezoeker is deze pagina al 'mager' (zoals de site-eigen critique het noemt); voor Yasmin met NVDA is ze leger dan dat — titel, categorie, live-URL en een stille video die niets vertelt. Dit is geen 'ook onvolledig'-verschil maar een kwalitatief slechtere ervaring: waar een zichtbare bezoeker tenminste bewegend beeld en sfeer meekrijgt, krijgt Yasmin letterlijk niets van de inhoud van het project dat de site als beste bewijs kiest te tonen.

**Award-winning oplossing.** Voeg een aria-label toe aan de <video> in CaseStudyTemplate.tsx (bv. aria-label={`Schermopname van ${title}: ${data.intro}`}) — maar los de onderliggende oorzaak structureel op, niet alleen symptomatisch: het CaseStudyData-type (regel 14-54) heeft challenge/approach/features al als velden gedefinieerd, ze staan alleen leeg. Voeg een lichte runtime- of type-assertie toe die afdwingt dat subIntro nooit leeg mag zijn zodra heroVideo wél gevuld is — zodat een case study met video maar zonder begeleidende tekst simpelweg niet meer gebouwd kán worden. Dat is 'doordacht & precies' als compile-time waarborg in plaats van een contentherinnering die iemand kan vergeten, en het dwingt tegelijk de contentkant van het bekende P0-probleem (leeg portfolio) af te ronden.

### 10. De enige H1 van de homepage is een dobbelsteen — welke zin je hoort hangt af van de seconde waarop je binnenkomt {#gebruiker-met-toegankelijkheidsbehoeften-de-enige-h1-van-de-homepage-is-een-dobbelsteen-welke-zin-je-hoort-hangt-af-van-de-seconde-waarop-je-binnenkomt}

**Persona:** Screenreader-gebruiker die met de H-toets door de kopstructuur navigeert  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Priya (41), beleidsmedewerker, gebruikt zoals de meeste ervaren AT-gebruikers eerst de H-toets om snel de kopstructuur van een nieuwe pagina te scannen, na een collega-tip om 'even snel hun homepage te checken' voordat ze verder leest.

**Trust/behoefte-trigger.** Ze verwacht dat de H1 — de belangrijkste, meest betrouwbare samenvatting van de pagina — een stabiele, betekenisvolle zin is, precies het soort 10-seconden-samenvatting die PRODUCT.md zelf als doel stelt.

**Wat er nu misgaat.** In src/app/page.tsx, regel 365-367, is de H1 van de hele homepage <h1 key={svcIdx}>{heroServices[svcIdx]}</h1>, waarbij heroServices[svcIdx] elke 2,6 seconde wisselt tussen 'MAATWERK SOFTWARE', 'WEB APPLICATIES', 'DIGITALE SYSTEMEN' en 'PROCESSEN OP MAAT' (regel 15, 112-115). De omliggende zin ('WIJ BOUWEN' / 'EN DENKEN MEE OVER WAT BETER KAN') staat in aparte <p>-elementen buiten de H1 (regel 363 en 369) en telt dus niet mee voor de accessible name. Met de H-toets hoort Priya een geïsoleerd, grammaticaal incompleet fragment als 'Digitale systemen' — welk fragment ze hoort is puur toeval van de timing. Twee JAWS-gebruikers die op hetzelfde moment binnenkomen, kunnen een andere H1 voorgelezen krijgen. Dit is zowel een navigatieprobleem als een semantisch probleem: de belangrijkste kop van de site heeft geen vaste inhoud.

**Award-winning oplossing.** Maak de volledige, statische zin de H1 (<h1>Wij bouwen maatwerk software en denken mee over wat beter kan.</h1>), en verplaats het roterende woord naar een aria-hidden <span> daarbinnen die puur decoratief het 'woordslot'-effect toont met aria-live="off". Het visuele effect blijft voor zienden volledig intact; de accessible name van de enige H1 op de site wordt constant, betekenisvol en — als bijvangst — ook consistenter voorgeïndexeerd door zoekmachines en social-crawlers, wat rechtstreeks aansluit bij de bestaande SEO-inspanning van de site (zie SEO_STRATEGY.md). Eén fix die accessibility, semantiek én SEO tegelijk oplost.

### 11. Vier tot vijf autoplayende video's tegelijk in beeld, nergens een pauzeknop {#gebruiker-met-toegankelijkheidsbehoeften-vier-tot-vijf-autoplayende-videos-tegelijk-in-beeld-nergens-een-pauzeknop}

**Persona:** Gebruiker met cognitieve overbelasting bij aanhoudende beweging tijdens het scrollen  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Els (zie case 7) scrolt door de portfoliosectie op de homepage (id="werk") en de volledige /portfolio-pagina om een project te vinden dat op haar sector (installatietechniek) lijkt, en vergelijkt bewust 'IJssalon Italia' (familiebedrijf) met 'Chefs Connect'.

**Trust/behoefte-trigger.** Ze wil per project rustig de preview bekijken en de categorie/samenvatting lezen zonder dat meerdere schermen tegelijk in beweging blijven terwijl ze leest.

**Wat er nu misgaat.** De PortfolioVideo-component in src/app/page.tsx (regel 17-40) — en het identieke patroon op /portfolio, dat dezelfde IntersectionObserver-aanpak hergebruikt — speelt elke <video muted loop playsInline> automatisch af zodra hij via rootMargin: "200px" ruim vóór volledige zichtbaarheid in beeld komt, en pauzeert alleen buiten beeld, nooit op verzoek. Bij 4 projecten op de homepage en 5 op /portfolio kunnen dus meerdere video's tegelijk lopen terwijl Els scrolt, zonder pauzeknop, play/pause-indicator of 'stop alle beweging'-schakelaar — een WCAG 2.2.2-situatie die zich vermenigvuldigt naarmate ze verder scrollt.

**Award-winning oplossing.** Voeg per kaart een klein, altijd-zichtbaar play/pause-icoon toe (consistent met de al aanwezige 'LIVE'-indicator, regel 1098-1102) — maar bouw daarboven één centrale, zichtbare 'Bewust in beweging'-schakelaar in de header: een merkpassende, expliciete motion-toggle (weinig Nederlandse B2B-sites hebben er een) die in één keer de hero-rotatie, reviewcarrousel, portfolio-autoplay én de Adviseur-randgloed aanstuurt via één gedeelde useMotionPreference-hook. Voor een merk dat zichzelf 'eigenzinnig eerlijk' noemt is een zichtbare, werkende controle over hoeveel er beweegt geen verstopte instelling maar een statement — en het is meteen de architecturale basis die de losse, inconsistente reduced-motion-blokken in page.tsx, Visuals.tsx én Advisor.tsx (drie verschillende, onvolledige implementaties) vervangt door één bron van waarheid.

### 12. De Adviseur is één van drie plekken op de site met een eigen, onvolledige reduced-motion-implementatie — en de enige die bijna niets afvangt {#gebruiker-met-toegankelijkheidsbehoeften-de-adviseur-is-n-van-drie-plekken-op-de-site-met-een-eigen-onvolledige-reduced-motion-implementatie-en-de-enige-die-bijna-niets-afvangt}

**Persona:** Gebruiker met vestibulaire gevoeligheid (reduced-motion ingesteld) die de Adviseur gebruikt  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Farid (zie case 8) doorloopt, ondanks zijn evenwichtsklachten, toch de Adviseur-quiz omdat die zichzelf als laagdrempelig presenteert ('Niet verkopen. Adviseren.'). Zijn systeem staat op verminderde beweging — dezelfde instelling die de rest van de homepage al netjes respecteert.

**Trust/behoefte-trigger.** Hij vertrouwt erop dat een systeeminstelling die elders op de site al werkt, ook hier geldt — het is per definitie geen per-pagina-keuze maar een expliciete, bewuste voorkeur.

**Wat er nu misgaat.** In src/components/Advisor.tsx dekt het @media (prefers-reduced-motion: reduce)-blok (regel 656-658) uitsluitend .adv-edge (de ronddraaiende randgloed) af. De .adv-fade/.adv-fade.adv-leave-animaties (regel 628-641, bij elke stapwissel), .adv-opt (regel 642-648, elke antwoordknop schuift bij elke render van rechts in) en .adv-trail (regel 652-654) staan er niet in. Elke keer dat Farid antwoordt, schuiven en faden dus vier knoppen na elkaar in beeld en verschuift het hele paneel verticaal — precies het bewegingspatroon dat zijn instelling had moeten onderdrukken. Samen met de eigen, incomplete reduced-motion-blokken in page.tsx (regel 1549-1554) en Visuals.tsx (regel 383-387) bestaan er nu drie losse, onderling inconsistente implementaties van dezelfde systeeminstelling in de codebase.

**Award-winning oplossing.** Voeg als directe fix .adv-fade, .adv-opt, .adv-trail { animation: none; opacity: 1; transform: none; } toe aan het bestaande blok — maar behandel dit als het derde en laatste bewijs dat er één centrale useMotionPreference-hook nodig is (zie case 11): laat Advisor.tsx, Visuals.tsx en page.tsx alle drie uit dezelfde bron lezen in plaats van drie keer apart te raden welke animaties er zijn. Dat voorkomt niet alleen deze specifieke bug, maar elke toekomstige animatie die ergens op de site wordt toegevoegd zonder de reduced-motion-check te 'onthouden'.

### 13. Paginatie-dots zijn met 22×22px net te klein en te dicht op elkaar voor een trillende hand {#gebruiker-met-toegankelijkheidsbehoeften-paginatie-dots-zijn-met-2222px-net-te-klein-en-te-dicht-op-elkaar-voor-een-trillende-hand}

**Persona:** Motorisch beperkte gebruiker met tremor (onnauwkeurige tik/klik)  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Karin (zie case 1) wil, in plaats van de automatische 14-seconden-rotatie af te wachten, zelf naar de review van 'IJssalon Italia' springen — herkenbaar aan de oranje kleur — om een sector te vinden die op haar eigen, familie-gerunde relatie met leveranciers lijkt.

**Trust/behoefte-trigger.** Ze verwacht dat elke paginatiestip precies de review activeert die ze zoekt, zonder dat een lichte trilling in haar hand een andere review triggert.

**Wat er nu misgaat.** In src/app/page.tsx, regel 758-781, is elke dot een <button className="group p-2"> met daarin een <span> van 6px hoog en (inactief) 6px breed. De feitelijke klik/tikzone is content (6px) + padding (2×8px) ≈ 22×22px — net onder de WCAG 2.2 SC 2.5.8 (AA) minimale doelgrootte van 24×24px. De vijf dots staan bovendien met gap-4 (16px) dicht op elkaar. Voor Karin's tremor is dit exact de combinatie (net te klein + net te dicht) die tot verkeerde selecties leidt, waarna ze een volledig andere review moet wegklikken om opnieuw te proberen.

**Award-winning oplossing.** Vergroot niet simpelweg de padding — houd de huidige, minimalistische 6px-stip intact en vergroot uitsluitend de onzichtbare hit-area via een pseudo-element (::before met inset: -8px, wat de zone naar ruim 30×30px brengt zonder het visuele ontwerp aan te tasten). Voeg daarbij een :focus-visible-ring toe die de eigen accentkleur van dat project gebruikt (rv.accent, al beschikbaar in de reviews-array) in plaats van een generieke outline — zodat de grotere, veiligere tikzone samenvalt met een moment van visuele consistentie die bij de rest van de pagina's per-review kleurtaal past.

### 14. Sitebreed patroon van 8-10px hoofdletterlabels met 4-6× normale letterspatiëring ondermijnt woordherkenning op vrijwel elke sectiekop {#gebruiker-met-toegankelijkheidsbehoeften-sitebreed-patroon-van-8-10px-hoofdletterlabels-met-4-6-normale-letterspatiring-ondermijnt-woordherkenning-op-vrijwel-elke-sectiekop}

**Persona:** Gebruiker met dyslexie en gebruiker met verminderd gezichtsvermogen  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Guus (zie case 6) en zijn collega met dyslexie lezen samen de homepage door om conversiepunten te markeren voor hun interne besluitvorming over een softwarepartner.

**Trust/behoefte-trigger.** Ze willen structuurlabels als 'GESELECTEERD WERK', 'HET TRAJECT' en 'VERIFIED · 5.0' vlot kunnen scannen als oriëntatiepunten tussen de hoofdtekst door — dat is precies hun functie als 'eyebrow label'.

**Wat er nu misgaat.** Dit label-patroon combineert consistent drie leesbaarheid-verzwarende eigenschappen: hoofdlettergebruik, 8-10px lettergrootte, en extreme letterspatiëring. Concreet gemeten: de laadscherm-tagline gebruikt text-[8px] tracking-[0.6em] (regel 278-279), de hero-eyebrow text-[9px] tracking-[0.55em] (regel 358), 'GESELECTEERD WERK' text-[10px] tracking-[0.5em] (regel 1043), 'VERIFIED · 5.0' text-[10px] tracking-[0.5em] (regel 684-686), en de Adviseur-eyebrow in Advisor.tsx dezelfde text-[10px] tracking-[0.55em] (regel 258-259) — 4 tot 6 keer breder dan normale tracking, op 5+ plekken per pagina. Onderzoek naar leesbaarheid bij dyslexie en laagziendheid wijst consistent uit dat hoofdletters + brede tracking woordvorm-herkenning ondermijnen; hier gebeurt dat systematisch op vrijwel elke sectiekop van de site.

**Award-winning oplossing.** Stel een maximale tracking-grens in voor labeltekst onder 12px (nooit meer dan tracking-[0.25em], zoals de site elders bij grotere tekst al hanteert) en verhoog de minimale lettergrootte naar 11-12px. Breid vervolgens dezelfde bestaande deterministische scanner (`detect.mjs`, zie case 6) uit met een regel die elke combinatie van text-[8-10px] met tracking-[0.3em] of hoger flagt — zodat dit patroon, dat nu vijf keer per pagina terugkomt, structureel wordt tegengehouden in plaats van telkens opnieuw met het blote oog ontdekt te moeten worden. Documenteer de regel naast de bestaande WCAG AA-standaard in PRODUCT.md.

### 15. Silent status change bij de download-knop is geen incident maar het sitebrede #1-zwakke punt uit de eigen site-audit, nu ook onhoorbaar {#gebruiker-met-toegankelijkheidsbehoeften-silent-status-change-bij-de-download-knop-is-geen-incident-maar-het-sitebrede-1-zwakke-punt-uit-de-eigen-site-audit-nu-ook-onhoorbaar}

**Persona:** Screenreader-gebruiker die het enige actief werkende leadmagneet-formulier invult (gratis-checklist)  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Priya (zie case 10) vult op /gratis-checklist haar naam en e-mail in om de 'Website Checklist 2026' te downloaden en drukt met VoiceOver op 'DOWNLOAD PDF'.

**Trust/behoefte-trigger.** Ze verwacht een duidelijke, hoorbare bevestiging dat haar aanvraag verwerkt is — dit is de enige plek op de site waar een formulier zonder WhatsApp-omweg direct iets aflevert, dus het vertrouwen dat hier wordt opgebouwd of gebroken telt dubbel.

**Wat er nu misgaat.** In src/app/gratis-checklist/page.tsx (handleSubmit, regel 35-51) wordt de knop bij indienen disabled={submitted} gezet (regel 144) en verandert de tekst zichtbaar van 'DOWNLOAD PDF' naar 'EVEN GEDULD…' (regel 147) — een puur visuele statuswijziging, nergens in een aria-live-regio. Omdat de knop ná indrukken (dus met focus erop) disabled wordt, is aannemelijk dat de focus wegvalt, net als bij de Adviseur (case 1). Na 600ms triggert de code een automatische download via een programmatisch <a download> (regel 41-46) en een redirect naar /bedankt (regel 48-49) zonder ooit iets hoorbaars aan te kondigen. Dit is geen geïsoleerd bugje: docs/CRITIQUE-SITE-2026-07-14.md scoort 'Visibility of System Status' als de op één na zwakste heuristiek van de hele site (2/5) en noemt expliciet dat élk WhatsApp-formulier op de site — homepage, /contact, alle sectorpagina's, alle processen-pagina's — nul feedback geeft bij versturen via window.open(). Dit formulier is het zoveelste symptoom van hetzelfde, al gedocumenteerde structurele gat.

**Award-winning oplossing.** Voeg een role="status" aria-live="polite"-regio toe onder de knop, en vervang disabled door aria-busy="true" zodat focus gegarandeerd behouden blijft. Bouw dit meteen als één herbruikbare <StatusAnnouncer/>-component — een klein, visueel met het goudaccent gestyled toastje — en hergebruik die op elke plek waar de site nu een WhatsApp-formulier silent laat versturen: homepage #contact, /contact, alle SectorTemplate- en processen-formulieren. Daarmee los je niet alleen Priya's screenreader-probleem op, maar tegelijk het hoogst genoteerde, al gedocumenteerde UX-zwakke punt van de hele site (heuristiekscore 2/5) — één klein component met disproportioneel grote impact ten opzichte van de bouwkosten.

---

## Concurrent of recruiter die de site bekijkt

### 1. De Adviseur-quiz als kant-en-klare concurrentie-blauwdruk {#concurrent-of-recruiter-die-de-site-bekijkt-de-adviseur-quiz-als-kant-en-klare-concurrentie-blauwdruk}

**Persona:** Mede-oprichter van een concurrerend maatwerk-software-bureau, technisch onderlegd  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een concurrerend bureau opent 'Bekijk paginabron' op de homepage om te zien hoe Dynique zijn positionering in een tool vertaalt. De site is een statische Next.js-export (`output: 'export'` in next.config.ts, gehost op Cloudflare Pages volgens DEPLOY_INSTRUCTIONS.md) — dat betekent dat élke pagina, inclusief elke client component, als kant-en-klare HTML+JS wordt uitgeleverd, zonder enige server tussen de bezoeker en de broncode.

**Trust/behoefte-trigger.** Geen wantrouwen-moment maar actieve IP-jacht: in src/components/Advisor.tsx staan de vier vragen (STEPS), alle twaalf antwoordopties, de drie service-aanbevelingen (SERVICES, met complete adviescopy) én de volledige beslisfunctie computeAdvice() als leesbare, becommentarieerde constants in een client component — inclusief de exacte marketingzin 'Niet verkopen. Adviseren.' Dat is in één 'view source' 1-op-1 te kopiëren naar een eigen site.

**Wat er nu misgaat.** Omdat de site static geëxporteerd wordt, bestaat er geen enkele serverstap tussen vraag en advies: alles — vragen, mapping-logica (regel 136-162: if goal === 'app' → appPortaal, etc.) en resultaatteksten — wordt in de browser van de concurrent uitgerekend en getoond. Precies het instrument dat PRODUCT.md's Design Principle 2 ('meedenken is zichtbaar') moet bewijzen, is in de praktijk het makkelijkst te clonen onderdeel van de hele site.

**Award-winning oplossing.** Gebruik de eigen infrastructuur die de site al claimt te kennen (Cloudflare Pages, genoemd op /diensten/web) in plaats van een generieke 'voeg een backend toe'-fix: voeg een Cloudflare Pages Function toe (`/functions/api/advies.ts`) die naast de bestaande static export draait. De vragen blijven client-side (die zijn toch zichtbaar), maar computeAdvice() en alle resultaatcopy verhuizen naar die function — het advies verschijnt pas na een echte netwerkcall met alleen antwoord-ID's als payload. Til dit verder dan defensief: laat diezelfde function een uniek 'dossiernummer' genereren en het advies automatisch als voorgevuld WhatsApp-bericht klaarzetten. Zo wordt de quiz niet alleen onkopieerbaar (een concurrent kan de UI clonen, maar niet de werkende dossierfunctie erachter), maar levert hij Dynique voor het eerst ook structured lead-intelligence op — een tastbaar databijproduct dat nu volledig verloren gaat in een `window.open()`-call.

### 2. Ik of wij: de site laat een recruiter gissen naar teamgrootte {#concurrent-of-recruiter-die-de-site-bekijkt-ik-of-wij-de-site-laat-een-recruiter-gissen-naar-teamgrootte}

**Persona:** HR-recruiter bij een softwarebedrijf in Zuid-Limburg die Dynique scoutet  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een recruiter bekijkt /over-ons om te bepalen of Dynique een eenmanszaak is (interessant voor een acquisitiegesprek met de oprichter) of een groeiend team (interessant om medewerkers te benaderen). Binnen dezelfde pagina wisselt de grammatica zonder toelichting: de hero opent met 'Ik bouw wat anderen alleen beschrijven' (regel 105-107, enkelvoud), de Waarden-sectie erboven heet 'WAAR WE IN GELOVEN' (regel 168), de Belofte-sectie belooft 'Je praat met degene die het ook bouwt' (regel 18, enkelvoud-suggererend) en de slotCTA vraagt 'Benieuwd wat wé voor jou kunnen bouwen?' (regel 224-227, meervoud).

**Trust/behoefte-trigger.** De recruiter kan niet vaststellen of er daadwerkelijk personeel is om te benaderen, of dat alle 'wij'-taal marketing-meervoud is voor een solo-oprichter — cruciale informatie voordat ze tijd investeren in een benadering, en een tegenstrijdigheid die op één scrollende pagina viermaal wisselt zonder ooit expliciet te worden.

**Wat er nu misgaat.** Nergens op de site (geen /over-ons, geen footer, geen aparte pagina) staat een teamoverzicht, medewerkersaantal of duiding van de 'we'-taal. De Belofte-sectie belooft expliciet 'Eén aanspreekpunt — geen accountmanagers' (wat op solo wijst), terwijl drie andere secties op dezelfde pagina consequent 'we/wij' gebruiken — een inconsistentie die een geoefend oog (zoals een recruiter, die dit soort signalen professioneel leest) binnen seconden opvalt.

**Award-winning oplossing.** Voeg direct onder de hero op /over-ons een klein, eerlijk blok toe dat de ambiguïteit oplost in plaats van verbergt: 'Op dit moment bouw ik zelf, met een vast netwerk van specialisten die ik erbij haal per project — geen wisselende accountmanagers, wel de juiste expertise wanneer nodig.' Dat is in lijn met de 'persoonlijk, niet anoniem'-merkwaarde uit PRODUCT.md, sluit precies de vraag die een recruiter of partner als eerste stelt, en verklaart in één zin waarom de rest van de pagina soms 'ik' en soms 'we' zegt — zonder dat de grammatica zelf hoeft te veranderen.

### 3. Geen enkele link naar LinkedIn — de oprichter is onvindbaar vanaf de eigen site {#concurrent-of-recruiter-die-de-site-bekijkt-geen-enkele-link-naar-linkedin-de-oprichter-is-onvindbaar-vanaf-de-eigen-site}

**Persona:** Recruiter die de achtergrond van de oprichter wil verifiëren  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een recruiter wil de achtergrond van de oprichter checken (opleiding, eerdere werkervaring — precies de 'technisch onderlegd door opleiding en ervaring'-claim uit PRODUCT.md) voordat ze contact opnemen. Ze zoeken naar een social-icoon in Header.tsx of Footer.tsx, of naar een naam om zelf op LinkedIn te zoeken.

**Trust/behoefte-trigger.** Er staat geen enkel social-icoon in Header.tsx of Footer.tsx, het `sameAs`-veld in de Organization JSON-LD (src/app/layout.tsx, regel 150) staat expliciet leeg (`"sameAs": []`), en /over-ons noemt zelfs geen naam van de oprichter: de portretfoto heeft als alt-tekst alleen 'Zwart-wit portret van de oprichter van Dynique' (regel 128) en als bijschrift enkel 'OPRICHTER · DYNIQUE' (regel 139) — een schaduwportret zonder identiteit.

**Wat er nu misgaat.** De site claimt geloofwaardigheid via 'een echte opleiding en ervaring erachter' (PRODUCT.md, Brand Personality), maar toont nergens het verifieerbare bewijs dat een recruiter zou verwachten: geen naam, geen LinkedIn, geen trackrecord. Dat maakt geloofsladder-stap 1 uit PRODUCT.md ('er zit echte technische kennis achter') onverifieerbaar voor wie verder wil kijken dan de tekst zelf — en het lege `sameAs`-array is bovendien een gemiste Google Knowledge Panel-kans.

**Award-winning oplossing.** Voeg naast het portret op /over-ons een compacte 'credentials-strip' toe in plaats van alleen een naam: 'OPRICHTER · [Naam] — [opleiding/vakgebied], [X] jaar ervaring — bekijk op LinkedIn ↗'. Dat tilt het verder dan een losse link: het beantwoordt in drie regels precies PRODUCT.md's geloofsladder-stap 1 (echte opleiding en ervaring), op de plek waar een recruiter of potentiële klant er het eerst naar zoekt. Vul tegelijk het `sameAs`-array in layout.tsx met de LinkedIn-bedrijfspagina — twee velden invullen lost zo in één keer de Knowledge Panel-geloofwaardigheid én de menselijke verifieerbaarheid op.

### 4. Het volledige bedrijfsdossier staat kant-en-klaar in de paginabron {#concurrent-of-recruiter-die-de-site-bekijkt-het-volledige-bedrijfsdossier-staat-kant-en-klaar-in-de-paginabron}

**Persona:** Concurrent die geautomatiseerd marktonderzoek doet naar lokale spelers  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een concurrent gebruikt een simpele scraper die op elke sitepagina het JSON-LD-blok uitleest in plaats van de site handmatig door te lopen — standaardpraktijk bij concurrentieonderzoek, en extra eenvoudig omdat de site als statische export geen enkele server-side afscherming kent.

**Trust/behoefte-trigger.** Binnen seconden heeft de concurrent via src/app/layout.tsx (regels 108-235) het volledige dossier: foundingDate '2024' (regel 149), het complete dienstenaanbod (serviceType, regel 196-207), de exacte vijf klantreviews met namen (regel 158-189), de aggregateRating (regel 151-157) én de knowsAbout-lijst (Next.js, React, Tailwind, OpenAI API, DJI Mini 5 Pro, regel 208-221) — een compleet concurrentieprofiel zonder de site ooit visueel te hoeven bezoeken.

**Wat er nu misgaat.** Structured data is SEO-noodzaak, maar het kale `foundingDate: "2024"` staat zonder enige framing die de jonge leeftijd positief duidt — voor een concurrent die grotere, gevestigdere partijen wil positioneren tegenover Dynique is dit letterlijk het makkelijkst te citeren zwaktebod op de hele site, machinaal opvraagbaar zonder dat een mens ooit hoeft te klikken.

**Award-winning oplossing.** Structured data hoeft niet te verdwijnen, maar het kale feit kan strategisch worden aangevuld: gebruik het `slogan`-veld in dezelfde Organization-JSON-LD om het jaartal een verhaal te geven, bijvoorbeeld: 'Sinds 2024 — van eerste klant tot maatwerk-softwarepartner voor grotere bedrijven in Nederland en België.' Zo vindt elke scraper, mens of machine, hetzelfde jaartal, maar nu ingebed in een groei-narratief in plaats van een kaal getal dat als zwaktebod leesbaar is.

### 5. Creemers Inclusives bouwt de site van 'Creemers Exclusive' — en verstopt die case buiten het portfolio-overzicht {#concurrent-of-recruiter-die-de-site-bekijkt-creemers-inclusives-bouwt-de-site-van-creemers-exclusive-en-verstopt-die-case-buiten-het-portfolio-overzicht}

**Persona:** Concurrent die portfolio-authenticiteit natrekt om publiekelijk te ondermijnen  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Een concurrent die de vijf 'geverifieerde' klantreviews (het bewijs-fundament uit PRODUCT.md's geloofsladder) wil natrekken klikt op elke verify-link op de homepage. Bij Tom Creemers ('Founder · Creemers Exclusive', regel 613-617 van src/app/page.tsx) valt op dat Footer.tsx (regel 125) op élke pagina vermeldt: 'Dynique is de handelsnaam van Creemers Inclusives' — vrijwel dezelfde achternaam als de klant in kwestie.

**Trust/behoefte-trigger.** Een concurrent die dit ontdekt en publiekelijk deelt zou direct geloofsladder-stap 3 uit PRODUCT.md ondermijnen ('het bestaande portfolio bewijst dat dit vakmanschap al wordt geleverd'): één van de vijf reviews lijkt van de eigen onderneming te komen, niet van een onafhankelijke klant — reputatieschade op precies het meest kwetsbare bewijspunt van de site.

**Wat er nu misgaat.** Creemers Exclusive telt wél mee in de 5.0-sterren aggregateRating in layout.tsx en staat wél in sitemap.ts (priority 0.78), maar ontbreekt bewust in de `projects`-array van src/app/portfolio/page.tsx (die telt maar 4 projecten: Chefs Connect, Auwt Aelse, IJssalon Italia, Stacy Kohnen) én in de homepage-portfoliosectie — alleen vindbaar via een niet-gelinkte sitemap-URL. Bovendien wijst de 'BEKIJK LIVE WEBSITE'-knop op de case-pagina zelf naar `creemers.pages.dev` (src/app/portfolio/creemers-exclusive/page.tsx, regel 75 — een tijdelijke Cloudflare-previewlink), terwijl de homepage-review naar `creemersexclusive.nl` verwijst als verificatiebron (regel 616-617) — twee verschillende domeinen voor hetzelfde 'geverifieerde' project.

**Award-winning oplossing.** Wees hier vóór in plaats van het te laten ontdekken, en maak er meteen een sitebreed trust-patroon van: voeg aan élke van de vijf case studies een klein, consistent metadata-veldje 'Relatie tot Dynique' toe ('Onafhankelijke klant' voor vier cases, 'Eigen netwerk-project' voor Creemers Exclusive). Dat is precies wat 'eigenzinnig eerlijk' (PRODUCT.md) zou doen: het maakt transparantie een structureel ontwerpelement van het hele portfolio in plaats van een uitzondering die verstopt moet worden — en het is voor een concurrent niets meer om te 'onthullen'. Herstel daarnaast het domeinverschil (overal consistent creemersexclusive.nl) en neem de case gewoon op in de hoofd-`projects`-array, in plaats van hem te verbergen achter een ongelinkte sitemap-entry.

### 6. Cloudflare Pages én Vercel als 'onze technologie' — een detail dat niet klopt {#concurrent-of-recruiter-die-de-site-bekijkt-cloudflare-pages-n-vercel-als-onze-technologie-een-detail-dat-niet-klopt}

**Persona:** Technisch onderlegde concurrent (CTO) die infrastructuurkeuzes beoordeelt  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een CTO bij een concurrerend bureau, of een senior developer die overweegt te solliciteren, scrollt door /diensten/web en bekijkt de TECHNOLOGIE-sectie (regel 118-121) om in te schatten hoe doordacht de infrastructuurkeuzes zijn.

**Trust/behoefte-trigger.** Twee hostingplatforms die zelden voor dezelfde deployment worden gecombineerd — Cloudflare Pages én Vercel — staan zonder context naast elkaar als 'onze stack'. DEPLOY_INSTRUCTIONS.md en next.config.ts bevestigen dat de site daadwerkelijk als static export op Cloudflare Pages draait; Vercel wordt nergens elders in de codebase genoemd. Voor precies het technisch geschoolde publiek dat het beste kan beoordelen, leest dit als een kopieer-plaklijst van bekende logo's, niet als een bewuste keuze — en ondermijnt de 'technisch onderlegd'-claim uit PRODUCT.md bij wie het toetst.

**Wat er nu misgaat.** src/app/diensten/web/page.tsx (regel 120) toont de array `["Next.js 15", "React 18", "TypeScript", "Tailwind CSS", "Cloudflare Pages", "Vercel"]` als vlakke, ongedifferentieerde pillen, terwijl de site zelf uitsluitend op Cloudflare Pages is gedeployed — Vercel staat er zonder functie of onderbouwing bij.

**Award-winning oplossing.** Vervang de vlakke pillenlijst door een korte toelichting per infrastructuurkeuze in plaats van een naam te schrappen of onterecht te laten staan: 'Cloudflare Pages/Workers als standaard — edge-performance en voorspelbare kosten op elk schaalniveau; Vercel wanneer een project dat specifiek vraagt.' Dat verandert een verdachte inconsistentie in precies het soort technische nuance dat de 'doordacht en precies'-merkwaarde bewijst in plaats van beweert — en dwingt meteen de vraag af of Vercel daadwerkelijk ooit is ingezet, wat de tekst dan ook eerlijk moet weerspiegelen.

### 7. Chefs Connect en Auwt Aelse zijn letterlijk nog het lege sjabloon — 62 regels tegenover 583 {#concurrent-of-recruiter-die-de-site-bekijkt-chefs-connect-en-auwt-aelse-zijn-letterlijk-nog-het-lege-sjabloon-62-regels-tegenover-583}

**Persona:** Concurrent die portfolio's naast elkaar legt als benchmark  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Een concurrent die het portfolio doorklikt als benchmark voor eigen positionering vergelijkt de vijf cases naast elkaar. IJssalon Italia (583 regels code) en Stacy Kohnen (347 regels) hebben elk een volledige 'DE UITDAGING / DE OPLOSSING / RESULTAAT'-structuur met featuregrids, galerij en cijfers; Chefs Connect en Auwt Aelse tellen respectievelijk maar 62 en 61 regels.

**Trust/behoefte-trigger.** Wie de broncode van src/app/portfolio/chefs-connect/page.tsx opent, leest letterlijk de ontwikkelaarscommentaar: 'Design is af. Vul onderstaande velden in met de echte content.' Elk inhoudsveld — challenge, approach, features, gallery, results, metrics, quote — staat er als lege array met een uitgecommentarieerde placeholder (`// "Paragraaf 1 …",`). Dit is geen onvolledige case, dit is het ongebruikte CMS-sjabloon zelf dat live staat, precies op het portfolio dat PRODUCT.md aanwijst als fundament van geloofsladder-stap 3 — perfect materiaal voor een concurrent om als screenshot te gebruiken in eigen sales-gesprekken.

**Wat er nu misgaat.** CaseStudyTemplate.tsx rendert secties conditioneel (regel 219-338: challenge/approach/features/gallery/results/quote verschijnen alleen als de data niet leeg is) — precies zoals bedoeld voor een groeiend portfolio. Maar voor twee van de vijf cases staat die conditie nog structureel op 'leeg', zonder enige toelichting voor de bezoeker die van de ene naar de andere case doorklikt en een volledige reset in dieptegevoel ervaart.

**Award-winning oplossing.** Vul minstens 2-3 zinnen per blok in voor beide cases vandaag nog — dit hoeft niet te wachten op professionele fotografie; challenge/approach-tekst kan al geschreven worden op basis van wat bekend is (culinair platform, bistro-rebranding). Hergebruik tot die tijd het bestaande, al gebouwde 'VOORVERTONING VOLGT'-patroon (de monogram-placeholder in BrowserMockup, src/app/portfolio/page.tsx regel 127-145) consequent als een expliciete 'IN PRODUCTIE'-statusbadge op de portfolio-kaarten van Chefs Connect en Auwt Aelse. Dat is elegant systeemdenken: geen nieuw ontwerpelement nodig, alleen het bestaande, al gesanctioneerde leegte-patroon eerlijk en zichtbaar toepassen in plaats van de leegte stilzwijgend te laten staan.

### 8. 'Enkele projecten per kwartaal' plus 6 dagen/week bereikbaarheid: een expliciete capaciteits-bekentenis {#concurrent-of-recruiter-die-de-site-bekijkt-enkele-projecten-per-kwartaal-plus-6-dagenweek-bereikbaarheid-een-expliciete-capaciteits-bekentenis}

**Persona:** Concurrent die capaciteit en operationele kwetsbaarheid inschat  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een concurrent die eigen levertijden wil positioneren tegenover Dynique, of een recruiter die de werkdruk van een eventuele rol inschat, leest de CTA-sectie onderaan /portfolio en het contactblok op /contact na elkaar.

**Trust/behoefte-trigger.** 'We bouwen enkele projecten per kwartaal' (src/app/portfolio/page.tsx, regel 348) gecombineerd met 'Binnen 2 uur (ma–za, 9–20u)' reactietijd (src/app/contact/page.tsx, regel 13) tekent het beeld van één persoon die zelf bouwt én al het klantcontact binnen een zeer breed venster afhandelt — gratis, waardevolle informatie om de kwetsbaarheid van de operatie bij uitval, vakantie of ziekte in te schatten.

**Wat er nu misgaat.** Deze twee datapunten staan los van elkaar en worden nergens gebalanceerd met een tegenwicht (een netwerk van vaste specialisten, een tweede aanspreekpunt bij afwezigheid) — het beeld dat ontstaat is eenzijdig 'solo, altijd aan', precies het soort operationele blootstelling dat een grotere B2B-klant (PRODUCT.md's nieuwe doelgroep) vóór ondertekening zou willen uitsluiten.

**Award-winning oplossing.** Draai de framing om: vervang 'We bouwen enkele projecten per kwartaal' door een bewuste kwaliteitsclaim mét getal ('Maximaal 4 projecten per kwartaal — bewust, zodat elk project mijn volle aandacht krijgt') en voeg op /contact een FAQ-regel toe over continuïteit bij afwezigheid (bijv. hoe het al genoemde netwerk van specialisten, uit case 2, bij uitval inspringt). Dat zet een kwetsbaarheid om in een schaarste-argument, wat voor de 'grotere bedrijven'-doelgroep uit PRODUCT.md net zo overtuigend kan zijn als een grote teamgrootte — mits het tegelijk met het 'ik/wij'-antwoord uit case 2 wordt opgelost, zodat beide signalen elkaar versterken in plaats van elkaar tegenspreken.

### 9. sitemap.xml geeft /eerste-website en /vervanging een hogere prioriteit dan de helft van de locatiepagina's {#concurrent-of-recruiter-die-de-site-bekijkt-sitemapxml-geeft-eerste-website-en-vervanging-een-hogere-prioriteit-dan-de-helft-van-de-locatiepaginas}

**Persona:** Concurrent/SEO-analist die de sitemap crawlt voor strategie-inzicht  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een concurrent die de site systematisch in kaart brengt via sitemap.xml (standaardpraktijk bij concurrentieonderzoek) vindt in src/app/sitemap.ts /eerste-website (priority 0.78) en /vervanging (priority 0.75) — beide hoger gewaardeerd dan /locaties/aken en /locaties/eindhoven (beide 0.70) en zelfs hoger dan /gratis-checklist (0.72).

**Trust/behoefte-trigger.** Deze twee pagina's spreken nog een ander klantprofiel aan dan de rest van de site — precies het soort mismatch die een concurrent kan gebruiken om te zien welke doelgroep Dynique aan het verlaten is, en daar actief op in te spelen door de achtergelaten kleinere-ondernemer-doelgroep te bewerken.

**Wat er nu misgaat.** sitemap.ts houdt beide pagina's actief geïndexeerd met een relatief hoge prioriteit, terwijl ze nergens meer gelinkt worden vanuit Header, Footer, homepage of de Adviseur-quiz. Ze bestaan alleen nog voor wie de sitemap zelf raadpleegt, wat concurrentieonderzoek en SEO-tools standaard doen — en de prioriteitswaarde in de sitemap fungeert daarbij feitelijk als een onbedoelde routekaart naar Dynique's eigen strategische twijfel.

**Award-winning oplossing.** Kies bewust en voer door: als deze pagina's blijven bestaan voor bestaand zoekverkeer, redirect ze (301) naar /diensten/web of /contact en verwijder ze uit sitemap.ts; wil je de kleinere-klant-funnel behouden, herschrijf dan minimaal de tijdlijn- en doelgroeptaal naar de huidige positionering en verlaag de sitemap-prioriteit zodat hij niet langer hoger staat dan actieve locatiepagina's. Een gecontroleerde 301-redirect is voor een crawler het signaal 'bewust gearchiveerd', in plaats van 'vergeten en nog live'.

### 10. 2 uur of 24 uur? De contactpagina beantwoordt haar eigen belofte niet consistent {#concurrent-of-recruiter-die-de-site-bekijkt-2-uur-of-24-uur-de-contactpagina-beantwoordt-haar-eigen-belofte-niet-consistent}

**Persona:** Concurrent die reactietijd-claims benchmarkt als differentiator  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een concurrent die reactietijd-claims benchmarkt (een veelgebruikte differentiator in dienstverlenersmarketing) leest /contact van boven naar beneden.

**Trust/behoefte-trigger.** Bovenaan staat tweemaal 'Binnen 2 uur' als harde belofte — in het contactdetailsblok (src/app/contact/page.tsx, regel 13: 'REACTIETIJD: Binnen 2 uur (ma–za, 9–20u)') én in stap 1 van 'Wat gebeurt er hierna' (regel 19: 'Je hoort binnen 2 uur van ons'). Iets hogerop op dezelfde pagina staat bij het formulier zelf: 'We reageren altijd binnen 24 uur — meestal veel eerder' (regel 134) — een factor 12-verschil binnen één scrollende pagina, makkelijk te citeren in eigen marketing ('wij zijn tenminste consistent over onze reactietijd').

**Wat er nu misgaat.** src/app/contact/page.tsx bevat drie losse, hardgecodeerde tekstfragmenten met verschillende reactietijd-claims die nooit uit één bron worden afgeleid — precies het soort slordigheid dat de 'doordacht en precies'-merkbelofte (PRODUCT.md) tegenspreekt op de pagina met de hoogste koopintentie van de hele site.

**Award-winning oplossing.** Definieer één `RESPONSE_TIME`-constante bovenaan het bestand (bijv. 'binnen 2 werkuren, ma–za 9–20u') en gebruik die via interpolatie op alle drie plekken (regel 13, 19 en 134) in plaats van drie keer losse tekst — een eenmalige technische fix van vijf minuten die garandeert dat dit type inconsistentie structureel niet meer kan terugkeren, ook niet bij toekomstige tekstwijzigingen door iemand anders dan de oorspronkelijke auteur.

### 11. '7 tot 14 dagen' en 'GRATIS OFFERTE' op /diensten/web spreken de homepage tegen {#concurrent-of-recruiter-die-de-site-bekijkt-7-tot-14-dagen-en-gratis-offerte-op-dienstenweb-spreken-de-homepage-tegen}

**Persona:** Concurrent die snelheid en offerte-structuur wil evenaren of onderbieden  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een concurrent die precies wil weten hoe snel en goedkoop Dynique concreet levert, vergelijkt de homepage-procesbelofte met de dienstenpagina voor web.

**Trust/behoefte-trigger.** De homepage kiest bewust géén vaste tijdlijn — 'De doorlooptijd hangt af van wat er gebouwd wordt — dat bespreken we eerlijk vooraf, niet achteraf' (src/app/page.tsx, regel 818-819), met een expliciet Fase 1 t/m Fase 4-traject (regel 833-860) waarin 'Heldere offerte' pas ná een strategisch gesprek volgt (regel 836). Maar /diensten/web belooft wél een hard getal: 'live binnen 7 tot 14 dagen' (regel 72) met een 'GRATIS OFFERTE'-knop (regel 164) — een directe, citeerbare snelheids- en prijsclaim die een concurrent kan gebruiken om zich te positioneren als transparanter over scope-afhankelijkheid.

**Wat er nu misgaat.** Twee pagina's binnen dezelfde Diensten-navigatie maken tegenstrijdige beloftes over hetzelfde onderwerp — snelheid en offertestructuur — zonder dat een bezoeker die van de een naar de ander klikt enige uitleg krijgt voor het verschil, en zonder dat 'GRATIS OFFERTE' aansluit bij het homepage-model waarin een offerte pas na een gesprek volgt.

**Award-winning oplossing.** Vervang op /diensten/web de harde '7 tot 14 dagen' door dezelfde fase-gebaseerde taal als de homepage (Fase 1: Intake t/m Fase 4), en verander 'GRATIS OFFERTE' in 'PLAN EEN INTAKEGESPREK' — consistent met de homepage's 'Heldere offerte' die pas ná een gesprek volgt. Eén tekstpassage herschrijven op twee regels van één bestand sluit het gat tussen de twee klantreizen volledig.

### 12. Vijf locatiepagina's, vier willekeurige accentkleuren — en Maastricht deelt toevallig het goud met Eindhoven {#concurrent-of-recruiter-die-de-site-bekijkt-vijf-locatiepaginas-vier-willekeurige-accentkleuren-en-maastricht-deelt-toevallig-het-goud-met-eindhoven}

**Persona:** Concurrent die lokale SEO-strategie en merkdiscipline benchmarkt  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een concurrent die lokale SEO-strategie benchmarkt (heeft Dynique elke stad een eigen identiteit gegeven, of is dit template-werk?) opent achtereenvolgens /locaties/maastricht, /heerlen, /sittard, /aken en /eindhoven.

**Trust/behoefte-trigger.** Maastricht is goud (#d4a574, regel 27), Heerlen violet (#a78bfa), Aken rood (#ef4444), Sittard oranje (#fb923c) — en Eindhoven is, toevallig, óók goud (#d4a574), exact dezelfde kleur als Maastricht, zonder dat er enige merkinhoudelijke reden voor is (geen stadskleur, geen thema, geen gedeelde regio: Eindhoven ligt zelfs buiten Limburg). Voor iemand die vijf pagina's snel na elkaar bekijkt is dit binnen een minuut duidelijk 'template met een randomizer'.

**Wat er nu misgaat.** De vijf locatiepagina's delen via CityPage.tsx dezelfde structuur en tekstblokken op detail na, maar elk bestand definieert op regel 27 een eigen accentkleur zonder gedeelde logica — een direct zichtbare inconsistentie bij side-by-side vergelijking, wat concurrentieonderzoek per definitie doet, en die door de toevallige kleurherhaling tussen Maastricht en Eindhoven zelfs nog willekeuriger oogt dan vijf verschillende kleuren zouden doen.

**Award-winning oplossing.** Standaardiseer alle vijf locatiepagina's op het ene sitebrede accent (#d4a574, goud) zoals de rest van de gerebrande site, en vervang kleur-als-enige-onderscheid door een echt inhoudelijk verschil per stad: een klein feitenblokje met een lokale referentie (bijv. een specifieke wijk, een lokale sectornadruk, of — voor Aken — een korte Duitstalige zin die de grensregio bedient). Zo wordt het verschil tussen pagina's inhoudelijk in plaats van decoratief, en verdwijnt het 'randomizer'-signaal in één keer voor alle vijf pagina's tegelijk.

### 13. De prijsgids-blogpost geeft concurrenten een kant-en-klare rate card {#concurrent-of-recruiter-die-de-site-bekijkt-de-prijsgids-blogpost-geeft-concurrenten-een-kant-en-klare-rate-card}

**Persona:** Concurrerend bureau dat eigen offertes wil positioneren tegenover Dynique's prijzen  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een concurrerend bureau dat zijn eigen offertes wil positioneren ('goedkoper dan Dynique' of 'duurder maar met X') leest /blog/wat-kost-een-website in plaats van zelf een offerte aan te vragen bij Dynique.

**Trust/behoefte-trigger.** De post geeft niet alleen marktbrede bandbreedtes (DIY €0-500, freelancer €1.500-4.000, premium bureau €4.000-15.000, enterprise €15.000+ — regel 40-52) maar ook Dynique's eigen instapprijs met een hard getal: 'Een gemiddelde MKB-website begint bij ons rond €3.500' (regel 94) — informatie die normaal pas na een intakegesprek gedeeld wordt, hier gratis en publiek doorzoekbaar zonder ooit contact op te nemen.

**Wat er nu misgaat.** Dit is inhoudelijk een sterke, eerlijke contentmarketing-post, maar de precieze prijsanker (€3.500) staat zonder enige differentiatie ten opzichte van concurrenten met vergelijkbare instapprijzen — het is transparantie zonder verdedigingsmechanisme, waardoor het getal makkelijk te evenaren of te onderbieden is door wie de post gewoon leest.

**Award-winning oplossing.** Voeg direct onder de prijsanker een kort 'wat zit daar wél/niet in'-vergelijkingsblokje toe (bijv. een minitabel: 'Inclusief: eigendom van code & design, vaste prijs, geen hostingmarge' tegenover 'Elders vaak: gehuurde template, doorlopende licentiekosten'), zodat het prijsgetal, wanneer een concurrent het kopieert of citeert, altijd het bijbehorende waardeverhaal meeneemt — de prijs wordt zo onlosmakelijk verbonden aan de propositie in plaats van een los, makkelijk te evenaren getal.

### 14. Geen enkel spoor van 'werken bij Dynique' — voor een recruiter een doodlopende straat {#concurrent-of-recruiter-die-de-site-bekijkt-geen-enkel-spoor-van-werken-bij-dynique-voor-een-recruiter-een-doodlopende-straat}

**Persona:** Recruiter die peilt of Dynique zelf aan het aannemen is  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een recruiter die talent zoekt in de regio Zuid-Limburg controleert standaard of een veelbelovend klein bureau zelf ook aan het aannemen is — interessant om te weten voor wie ze benaderen, en om in te schatten of Dynique zelf een concurrent is om personeel bij weg te halen.

**Trust/behoefte-trigger.** Nul vindbaarheid: een doorzoeking van Header.tsx en Footer.tsx levert geen enkele treffer op voor 'linkedin', 'vacature', 'career' of 'social' — geen 'Werken bij'-link, geen vacatures-sectie, geen teampagina, en sitemap.ts bevat geen enkele /vacatures- of /careers-route.

**Wat er nu misgaat.** Voor een bureau dat zich positioneert richting 'grotere bedrijven' en ruimte laat voor een groeiverhaal (PRODUCT.md noemt expliciet dat er later een grotere case toegevoegd wordt) ontbreekt elk signaal van groei-intentie op personeelsvlak — geen enkele aanwijzing of Dynique van plan is te groeien, wat een recruiter of potentiële partner het beeld geeft van een bewust kleine, mogelijk niet-schaalbare operatie.

**Award-winning oplossing.** Voeg een klein, eerlijk blokje toe onderaan /over-ons of in de footer — ook als er nu niets vacant is: 'Nieuwsgierig om mee te bouwen? Ik werk soms met freelance specialisten samen — stuur gerust een berichtje.' Dat kost een halve zin, sluit de dode hoek, en opent tegelijk een tweede leadstroom (samenwerkingsverzoeken) die nu volledig onbenut blijft — en het versterkt meteen het 'netwerk van vaste specialisten'-antwoord dat ook al voor case 2 (team-ambiguïteit) wordt voorgesteld.

### 15. Vijf reviews, vijf portfoliocases, nul onafhankelijke bron — 'Verified' zonder externe verificatie {#concurrent-of-recruiter-die-de-site-bekijkt-vijf-reviews-vijf-portfoliocases-nul-onafhankelijke-bron-verified-zonder-externe-verificatie}

**Persona:** Concurrent/onderzoeker die reviewauthenticiteit toetst  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een concurrent of recruiter die de vijf klantreviews wil toetsen op echtheid zoekt naar een Google Reviews-widget, Trustpilot-badge of LinkedIn-aanbeveling op de site.

**Trust/behoefte-trigger.** Elke review — op de homepage (src/app/page.tsx, regel 613-661) én in de JSON-LD (layout.tsx, regel 158-189) — is exact 1-op-1 gekoppeld aan een van de vijf getoonde portfolioprojecten (creemersexclusive.nl, stacykohnen.de, ijssalonitaliavaals.nl, chefs-connect.nl, auwtaelse.nl). Geen enkele review komt van een klant die niet ook een showcase-case is, en de enige 'verificatie' is een link naar de website van de klant zelf — niet naar een onafhankelijk platform — wat feitelijk niets bevestigt over wie de quote daadwerkelijk schreef.

**Wat er nu misgaat.** Het label 'Verified · 5.0' (src/app/page.tsx, regel 685, herhaald op regel 1015 als '5.0 · Verified') suggereert een externe verificatiestandaard die er niet is — de enige controle die een bezoeker kan uitvoeren is nagaan of de genoemde website bestaat, niet of de quote authentiek is. Dat is extra kwetsbaar in combinatie met case 5 hierboven: Tom Creemers' review draagt hetzelfde 'Verified'-label als de andere vier, terwijl de relatie tot Dynique daar minder onafhankelijk is dan het label suggereert.

**Award-winning oplossing.** Vervang 'Verified · 5.0' door een eerlijkere, sterkere claim die wél waargemaakt wordt: koppel minstens 2-3 reviews aan een externe, onafhankelijk controleerbare bron (een Google Bedrijfsprofiel-reviewwidget, of een geanonimiseerde screenshot-embed van het daadwerkelijke WhatsApp/e-mailbericht met toestemming van de klant). Combineer dit met het 'Relatie tot Dynique'-veld uit case 5, zodat het woord 'Verified' voortaan staat voor twee dingen tegelijk: extern geverifieerd én transparant over de relatie — precies het 'bewijs door precisie, niet door beloftes' (PRODUCT.md Design Principle 1) dat het woord vandaag nog niet waarmaakt.

---

## Referral-klant met voorvertrouwen

### 1. Het zoekresultaat belooft het bedrijf dat de rebrand net heeft afgeschud {#referral-klant-met-voorvertrouwen-het-zoekresultaat-belooft-het-bedrijf-dat-de-rebrand-net-heeft-afgeschud}

**Persona:** Referral-klant — eigenaar van een bouwbedrijf die de naam via Google checkt  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Ger, eigenaar van een bouwbedrijf met ruim dertig man personeel in Maastricht, hoort op een netwerkborrel van een bevriende aannemer: 'Dynique heeft ons hele planning- en facturatiesysteem gebouwd — geen websitebouwer, een serieuze technische partij die actief meedenkt.' De volgende ochtend, vóór hij WhatsAppt, googelt hij eerst 'Dynique Maastricht' om te checken of dat verhaal klopt, en leest de twee regels die Google onder de link toont.

**Trust/behoefte-trigger.** Hij verwacht dat die twee regels zijn referral-verhaal — 'serieuze technische partij, geen websitebouwer' — bevestigen nog vóór hij ook maar geklikt heeft. Het is zijn eerste, koudste contactmoment met het merk, en het moet kloppen.

**Wat er nu misgaat.** src/app/locaties/maastricht/page.tsx regel 6 — de `description` die Google toont — luidt letterlijk: 'Premium website laten maken in Maastricht. Lokaal webdesign bureau voor ZZP en MKB. Binnen 7–14 dagen live, vaste prijs, persoonlijk contact.' Regel 10 (de OG-description, zichtbaar zodra iemand de link deelt) herhaalt 'Snel, persoonlijk en met een vaste prijs.' Exact dezelfde ZZP/MKB/7–14-dagenformulering staat op regel 6 van heerlen/page.tsx en sittard/page.tsx; de Duitstalige variant op aken/page.tsx spreekt van 'KMU und Selbstständige' en 'In 7–14 Tagen online, Festpreis'. Alleen eindhoven/page.tsx mist toevallig 'ZZP en MKB', maar herhaalt evengoed '7–14 dagen'. Dit is letterlijk de positionering die PRODUCT.md's doelgroepomschrijving net heeft verlaten ('een groter, weloverwogen besluit dan de vroegere lokale MKB-klant') — het eerste dat een referral-bezoeker over Dynique leest, spreekt zijn eigen verhaal tegen.

**Award-winning oplossing.** Los dit niet op als vijf losse teksten, maar structureel: trek de description- en OG-copy van alle vijf locatiepagina's naar één gedeeld bestand (bv. `src/lib/locationCopy.ts`) met één sjabloon — 'Maatwerk software voor bedrijven in [stad] die vastlopen in standaardpakketten. Systemen op maat, vaste prijs per fase, één technisch aanspreekpunt.' Zo kan 'ZZP', 'MKB'/'KMU' of '7–14 dagen' niet meer los in vijf verschillende bestanden opduiken. Voeg daarnaast een build-check toe — in dezelfde stijl als het bestaande `detect.mjs`-scanpatroon uit de critique-flow — die faalt zodra een van die termen weer in een `metadata.description` verschijnt. Zo wordt de oude positionering niet met wilskracht buitengehouden, maar door een systeem dat het simpelweg niet meer toelaat.

### 2. De contactpagina breekt exact de belofte waarmee de referral haar overtuigde {#referral-klant-met-voorvertrouwen-de-contactpagina-breekt-exact-de-belofte-waarmee-de-referral-haar-overtuigde}

**Persona:** Referral-klant — horecaondernemer doorverwezen door Auwt Aelse  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Sanne, eigenaresse van een klein restaurant in Vaals, hoort van de eigenaren van Auwt Aelse tijdens een leveranciersborrel: 'Ze reageerden binnen een uur, echt supersnel — dat gaf ons meteen het gevoel dat we met professionals te maken hadden.' Diezelfde avond nog opent ze de contactpagina om te checken of die snelheid ook voor haar zou gelden, vóórdat ze zelf appt.

**Trust/behoefte-trigger.** De reactiesnelheid was het concrete, specifieke bewijsstuk waarmee de referral uitpakte — ze wil precies dát bevestigd zien, niet een tegenstrijdig getal op hetzelfde scherm.

**Wat er nu misgaat.** src/app/contact/page.tsx belooft op regel 134 'We reageren altijd binnen 24 uur — meestal veel eerder', terwijl dezelfde pagina, zonder te scrollen, in de DETAILS-lijst (regel 13: 'Binnen 2 uur (ma–za, 9–20u)') en in NEXT_STEPS (regel 19: 'Je hoort binnen 2 uur van ons') een twaalf keer hardere garantie claimt. Twee verschillende beloftes op één scherm — precies het punt dat docs/CRITIQUE-SITE-2026-07-14.md al signaleerde onder 'Minor Observations', nog steeds niet gecorrigeerd. Voor een bezoeker die specifiek op snelheid is doorverwezen, is dit niet 'een slordigheidje' maar het eerste bewijs dat de belofte misschien niet klopt.

**Award-winning oplossing.** Definieer één bron van waarheid — `const RESPONSE_TIME = "binnen 2 uur (ma–za, 9–20u)"` bovenaan contact/page.tsx, hergebruikt in de intro, DETAILS én NEXT_STEPS — zodat drie losse strings nooit meer uit elkaar kunnen lopen. Maak er vervolgens een merkbaar, 'eigenzinnig eerlijk' bewijsstuk van in plaats van alleen een snellere belofte: 'Reageren we niet binnen 2 uur op een werkdag? Dan is het eerste gesprek op ons.' Een harde, falsifieerbare garantie in plaats van een marketingclaim — precies het verschil tussen 'bewijs door precisie' en 'bewijs door belofte' uit PRODUCT.md's Design Principle 1, en het soort zin die een referral letterlijk doorvertelt aan de volgende ondernemer.

### 3. Eén klik voorbij het bewijs dat wél werkt, stort het bewijs in tot een lege sjabloon {#referral-klant-met-voorvertrouwen-en-klik-voorbij-het-bewijs-dat-wl-werkt-stort-het-bewijs-in-tot-een-lege-sjabloon}

**Persona:** Referral-klant — chef doorverwezen door de oprichters van Chefs Connect  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Een chef-kok hoort van de oprichters van Chefs Connect: 'Dynique heeft ons hele platform gebouwd, echt knap werk — kijk maar op hun portfolio.' Op de portfolio-index ziet hij de kaart met een draaiende previewvideo van de echte, live site en denkt: dit klopt. Hij klikt door naar de eigen paginalink voor de volledige case — precies het project dat zijn referral met naam noemde.

**Trust/behoefte-trigger.** Hij wil dát specifieke, met naam genoemde project bevestigd zien — het meest concrete soort voorvertrouwen dat er is, en dus ook het makkelijkst te ontkrachten zodra het misgaat.

**Wat er nu misgaat.** src/app/portfolio/chefs-connect/page.tsx bevat letterlijk de comment 'Design is af. Vul onderstaande velden in met de echte content' — challenge, approach, features, gallery en quote staan allemaal leeg, heroImage is null. Het bewijs dat de kaart op /portfolio net nog toonde (een werkende previewvideo) bestaat één klik dieper simpelweg niet meer. Bij Auwt Aelse is het patroon nog absurder en verifieerbaar exacter: src/app/page.tsx regel 204 laadt en toont probleemloos /rsc/auwtaelse/preview.mp4 op de homepage — het bestand bestaat, het werkt — maar in src/app/portfolio/page.tsx's eigen `projects`-array ontbreekt exact die ene `video`-regel (het object heeft alleen `image: null`), waardoor diezelfde site op de portfolio-index terugvalt op een monogram met 'VOORVERTONING VOLGT'. Een referral-bezoeker ziet het bewijs dus letterlijk vaker op de homepage dan op de pagina die specifiek 'portfolio' heet.

**Award-winning oplossing.** Twee snelheden. Eerst de triviale fix: voeg de al bestaande, al werkende `video: "/rsc/auwtaelse/preview.mp4"` toe aan het `projects`-object in src/app/portfolio/page.tsx — één regel code, geen nieuw materiaal nodig, en de placeholder verdwijnt meteen. Vul daarna beide CaseStudyTemplate-scaffolds met echte inhoud, maar niet als gepolijste marketingcopy — als een kort, gedateerd 'bouwlog': twee tot drie concrete technische of ontwerpkeuzes die daadwerkelijk zijn gemaakt en waarom ('Reserveren via WhatsApp i.p.v. een los boekingssysteem, omdat de bistro daar al op zat'). Dat is precies het soort onderscheidend, naspeurbaar bewijs dat een generiek bureau niet durft te tonen — 'eigenzinnig eerlijk' concreet gemaakt in plaats van alleen beweerd, en het soort detail dat een jury onthoudt omdat het geen enkel ander bureau doet.

### 4. 5.0 sterren in Google, nul manier om ze te checken zodra je doorklikt {#referral-klant-met-voorvertrouwen-50-sterren-in-google-nul-manier-om-ze-te-checken-zodra-je-doorklikt}

**Persona:** Referral-klant — kritische CFO bij een groter logistiek bedrijf  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Een CFO bij een logistiek bedrijf met tachtig-plus medewerkers hoort via een zakenpartner: 'Ze hebben 5 sterren, echt geverifieerd, niet zelf verzonnen.' Voordat hij zijn IT-manager erbij haalt voor een eerste gesprek, wil hij dat zelf, onafhankelijk checken — hij googelt 'Dynique' en ziet inderdaad een 5.0-sterren-snippet naast het zoekresultaat.

**Trust/behoefte-trigger.** Onafhankelijke, niet-zelfgepubliceerde bevestiging is precies wat een 'doordacht & precies'-beslisser nodig heeft vóór hij iets intern voorstelt — en één klik verkeerd om slaat dat vertrouwen om in wantrouwen.

**Wat er nu misgaat.** src/app/layout.tsx bevat een JSON-LD 'aggregateRating' (ratingValue 5.0, reviewCount 5, regel 151-186) — dát genereert het sterrensnippet in Google. Klikt de CFO door, dan staan alle vijf reviews (src/app/page.tsx regel 606-666) uitsluitend in een zelfgebouwde, zelfgehoste carousel; de enige 'verificatie'-link per review (`verifyUrl`) wijst naar de website van de klant zelf (bv. auwtaelse.nl, chefs-connect.nl) — nooit naar een onafhankelijk platform. Nergens op de site staat een link naar een Google Bedrijfsprofiel of Trustpilot. Een schema-markup die 5.0 claimt zonder dat een bezoeker die claim ergens onafhankelijk kan natrekken, is precies het 'bewijs door belofte' dat PRODUCT.md's Design Principle 1 wil vermijden.

**Award-winning oplossing.** Zet een Google Bedrijfsprofiel op en migreer de vijf reviews daarheen met toestemming van de klanten. Vervang dan niet zomaar de 'Verified · 5.0'-badge (regel 684-686) door een link — bouw een klein live-badge-component dat de actuele Google-rating server-side ophaalt en gecachet toont, direct náást de bestaande carousel, met een klikbare 'Bekijk op Google' ernaast. Zo wordt het cijfer in de JSON-LD een cijfer dat een bezoeker, zonder de site te verlaten, realtime kan zien overeenkomen met de externe bron — controleerbaar bewijs in plaats van een badge die om vertrouwen vráágt.

### 5. De persoon die de referral bij naam noemde, bestaat niet op de site {#referral-klant-met-voorvertrouwen-de-persoon-die-de-referral-bij-naam-noemde-bestaat-niet-op-de-site}

**Persona:** Referral-klant — installatiebedrijf-eigenaar met een naam in zijn hoofd  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** De eigenaar van een installatiebedrijf krijgt van een collega te horen: 'Bel gewoon met [voornaam], die heeft ons hele planningssysteem gebouwd — echt een toffe, kundige gast.' Voor hij appt, opent hij /over-ons om het gezicht bij de naam te zetten.

**Trust/behoefte-trigger.** Hij wil de persoon herkennen vóór het eerste contact — precies waarom mond-tot-mondreclame zo sterk werkt, en precies de merkwaarde die PRODUCT.md noemt: 'persoonlijk en oprichter-geleid, niet anoniem-corporate.'

**Wat er nu misgaat.** src/app/over-ons/page.tsx toont een zwart-wit portret met uitsluitend het label 'OPRICHTER · DYNIQUE' (regel 139) — geen naam, geen functietitel, geen bio, geen opleiding. Hetzelfde anonieme label staat op de homepage (page.tsx regel 495). Een grep door de hele codebase bevestigt: de voornaam van de oprichter komt letterlijk nergens op de site voor — niet in de footer, niet in de JSON-LD, nergens. Een referral die exact díe naam al kent, krijgt op de site minder informatie dan hij al had vóór hij klikte.

**Award-winning oplossing.** Voeg direct onder de foto een naam en een korte, feitelijke bio toe — geen marketingtaal, verifieerbare feiten: '[Voornaam Achternaam] — Oprichter & ontwikkelaar. [Opleiding], [x] jaar ervaring in maatwerk softwareontwikkeling.' Til dit boven de standaard-bio uit met één persoonlijk element dat tekst niet kan evenaren: een ongelikte, 60-90 seconden ingesproken welkomstvideo naast de foto, waarin de oprichter in eigen woorden vertelt waarom hij dit werk doet. Dat is 'persoonlijk, niet anoniem' (Design Principle 3) tastbaar gemaakt in plaats van alleen opgeschreven — en exact het soort detail dat een referral-bezoeker direct herkent als de stem die zijn kennis hem beschreef.

### 6. De holding achter Dynique en een 'onafhankelijke' review delen dezelfde achternaam {#referral-klant-met-voorvertrouwen-de-holding-achter-dynique-en-een-onafhankelijke-review-delen-dezelfde-achternaam}

**Persona:** Referral-klant — grondige ondernemer die het KVK-nummer natrekt  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een ondernemer met voorvertrouwen wil, voordat hij tekent, toch zijn gebruikelijke achtergrondcheck doen: hij googelt het KVK-nummer 90531264 dat onderaan elke pagina staat en leest de bedrijfsstructuur na.

**Trust/behoefte-trigger.** Hij verwacht dat deze check een formaliteit is die zijn vertrouwen bevestigt — niet een nieuwe twijfel oproept precies op het moment dat hij het meest kritisch kijkt.

**Wat er nu misgaat.** src/components/Footer.tsx regel 125 toont 'Dynique is de handelsnaam van Creemers Inclusives'. Eén van de vijf als 'geverifieerd' gepresenteerde klantreviews op de homepage (src/app/page.tsx regel 606-621) is van 'Tom Creemers, Founder · Creemers Exclusive'. Dezelfde achternaam in zowel de holding áchter Dynique als in 20% van de getoonde 'onafhankelijke' reviews is mogelijk volkomen legitiem — maar oogt bij een snelle KVK-check als een niet-onafhankelijke review, precies op het moment waarop een verifiërende bezoeker het net opgebouwde vertrouwen verliest.

**Award-winning oplossing.** Maak de relatie zelf het bewijs, in plaats van iets dat iemand zelf moet uitzoeken: voeg bij zowel de Creemers Exclusive-review als de bijbehorende case study een transparante regel toe — 'Tom Creemers is ook oprichter van Creemers Inclusives, de holding achter Dynique; deze case werd gebouwd voor zijn eigen onderneming.' Geef die review daarnaast een eigen, herkenbaar label ('EIGEN PROJECT') in plaats van hem ononderscheiden tussen de vier onafhankelijke reviews te laten staan — een klein visueel verschil dat in één oogopslag zegt: dit is geen verborgen belangenverstrengeling, dit is een bewuste keuze om ook eigen werk te tonen. Dát is 'eigenzinnig eerlijk' in de praktijk, niet als tagline maar als interface-detail.

### 7. De sectorpagina belooft vakherkenning, maar linkt naar horeca en kunst {#referral-klant-met-voorvertrouwen-de-sectorpagina-belooft-vakherkenning-maar-linkt-naar-horeca-en-kunst}

**Persona:** Referral-klant — praktijkeigenaar in de zorg doorverwezen door een collega-praktijk  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** De eigenaar van een fysiotherapiepraktijk met drie vestigingen hoort van een bevriende praktijkhouder: 'Ze hebben ons een planningssysteem voor behandelingen en dossiers gebouwd, precies wat wij ook nodig hebben.' Ze bezoekt /maatwerk-software/zorg en klikt op 'Bekijk ons werk' om dat type project te zien.

**Trust/behoefte-trigger.** Ze verwacht branche-herkenning — exact het soort project dat haar referral net beschreef, op de pagina die specifiek voor haar sector is gebouwd.

**Wat er nu misgaat.** src/components/SectorTemplate.tsx regel 115-117 linkt 'Bekijk ons werk' door naar /portfolio, maar die pagina toont uitsluitend Chefs Connect, Auwt Aelse, IJssalon Italia en Stacy Kohnen — horeca, kunst en consumentenmerken. Geen enkel zorg-, bouw-, logistiek- of installatiebedrijf-systeem. De vier sectorpagina's die PRODUCT.md expliciet 'dieper-in-de-funnel bewijs' noemt, leiden dus naar bewijs dat inhoudelijk niets met die sector te maken heeft — een zorgpraktijk krijgt een bistromenu te zien.

**Award-winning oplossing.** Vervang op elke sectorpagina de generieke portfoliolink door een korte 'Zo pakken we dit soort projecten aan'-sectie met een geanonimiseerd maar concreet mini-voorbeeld — bijvoorbeeld een klein, interactief flow-diagram van een dossier- of afsprakensysteem, gebouwd met de al bestaande FlowDiagram-component uit src/components/processen/Visuals.tsx (dezelfde component die de before/after-scrub op de homepage voedt). Zeg er in de begeleidende tekst eerlijk bij: 'We hebben nog geen gepubliceerde zorgcase — dit is exact hoe we zo'n project zouden aanpakken.' Dat is 'eerlijk over schaal' (Design Principle 4) omgezet in een interface-element: geen nepbewijs, maar zichtbaar vakmanschap zonder te wachten op de eerste gepubliceerde sector-case.

### 8. Geen veld om de referral te vermelden — een warme lead start als koude lead {#referral-klant-met-voorvertrouwen-geen-veld-om-de-referral-te-vermelden-een-warme-lead-start-als-koude-lead}

**Persona:** Referral-klant — logistiek planner met een warme intro  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een planningsmanager bij een transportbedrijf hoort van een bevriende ondernemer die 'een routesysteem' liet bouwen. Ze wil dat vooraf laten weten zodat het gesprek niet bij nul begint, en zoekt in het contactformulier naar een plek om dat te vermelden.

**Trust/behoefte-trigger.** Ze verwacht dat haar voorkennis het gesprek sneller en persoonlijker maakt — niet dat ze exact hetzelfde generieke traject doorloopt als een koude lead die nog moet worden overtuigd.

**Wat er nu misgaat.** Zowel het homepage-formulier (src/app/page.tsx, `handleWhatsAppSubmit`) als het contactpagina-formulier bouwen een WhatsApp-bericht op met vaste velden (naam, bedrijf, project, omschrijving) — geen veld voor 'doorverwezen door' of 'hoe kwam je bij ons terecht'. Haar enige optie is het in het vrije-tekstveld 'Omschrijf je project' te typen, waar het ondersneeuwt tussen de projectdetails en niet gestructureerd wordt vastgelegd.

**Award-winning oplossing.** Voeg aan beide formulieren een select-veld 'Hoe kwam je bij ons terecht?' toe met opties als 'Doorverwezen door een klant', 'Google', 'Social media', 'Anders'; bij 'Doorverwezen door' verschijnt een tekstveld voor de naam. Beloon die keuze meteen functioneel: bij 'Doorverwezen door' verkort het formulier zich — de kwalificerende vragen die bij een koude lead nodig zijn, vallen weg en maken plaats voor één vraag: 'Wat vertelde [naam] je over ons?' Neem dit ook op in het WhatsApp-bericht ('📇 Doorverwezen door: …') en laat de bedankpagina (/bedankt, die al een `?name=`-parameter accepteert) een oprechte dankregel tonen richting referrals. Zo wordt mond-tot-mondreclame zichtbaar beloond in plaats van onzichtbaar verwerkt.

### 9. Weeskaal-pagina's met oude positionering staan nog live en indexeerbaar {#referral-klant-met-voorvertrouwen-weeskaal-paginas-met-oude-positionering-staan-nog-live-en-indexeerbaar}

**Persona:** Referral-klant — ontvanger van een oude, doorgestuurde link  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een kennis stuurt, nietsvermoedend, een link door die hij ooit bewaarde: dynique.nl/vervanging, met het bericht 'kijk, deze partij deed onze website-vervanging, top resultaat.'

**Trust/behoefte-trigger.** Hij verwacht hetzelfde merk te zien dat hij net via-via hoorde beschrijven als serieuze maatwerk-softwarepartij.

**Wat er nu misgaat.** src/app/vervanging/page.tsx en src/app/eerste-website/page.tsx tonen nog steeds 'Geen maandenlange trajecten' en '7-14 dagen van gesprek tot live' en zijn sinds de rebrand losgekoppeld van Header en Footer — een grep door beide componenten levert géén enkele verwijzing naar deze twee routes op. Alleen sitemap.ts wijst er nog naar. Ze zijn dus onvindbaar via de site zelf, maar wel nog live, indexeerbaar en bereikbaar via oude gedeelde links. Een bezoeker die zo binnenkomt ziet een compleet ander bedrijf dan wat hij net over Dynique hoorde.

**Award-winning oplossing.** Kies expliciet, zoals docs/CRITIQUE-SITE-2026-07-14.md zelf als openstaande vraag stelt: stel een 301-redirect in van /vervanging en /eerste-website naar /diensten/web, en verwijder beide routes uit sitemap.ts. Voorkom dat dit voelt als een stille bait-and-switch voor wie op zoek was naar een kleinere, snellere klus: laat /diensten/web zelf één regel bevatten die erkent dat kleinere aanvragen nog steeds welkom zijn via WhatsApp, in plaats van de bezoeker geruisloos te laten landen op een pagina die alleen over grotere maatwerktrajecten lijkt te gaan. Zo blijft de linkwaarde behouden en het verhaal eerlijk, in plaats van dat een bezoeker ooit nog op een '7-14 dagen'-pagina belandt die de nieuwe positionering tegenspreekt.

### 10. De aanbevolen gratis checklist verdwijnt spoorloos in de browser {#referral-klant-met-voorvertrouwen-de-aanbevolen-gratis-checklist-verdwijnt-spoorloos-in-de-browser}

**Persona:** Referral-klant — marketingmanager met een concrete downloadtip  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Een marketingmanager krijgt van een referral de tip: 'download eerst hun gratis checklist, die is echt goed, ik gebruik hem nog steeds.' Ze vult haar naam en zakelijke e-mailadres in op /gratis-checklist, in de verwachting dat ze net als bij elke serieuze leadmagneet ook in een opvolgtraject terechtkomt.

**Trust/behoefte-trigger.** Ze verwacht dat het 'professioneel gebouwd'-verhaal van haar referral zich hier bevestigt — een leadmagneet is per definitie een belofte van opvolging.

**Wat er nu misgaat.** src/app/gratis-checklist/page.tsx regel 39 bevat letterlijk de comment '// In productie: stuur naam + e-mail ook naar API/Mailchimp/Resend.' — er gebeurt dus niets met het ingevulde e-mailadres behalve een lokale PDF-download; de bezoeker gaat direct door naar /bedankt. Dynique weet nooit dat deze specifieke referral-lead langskwam en zij krijgt nooit een vervolgmail, ondanks dat de pagina actief gelinkt wordt vanuit footer, blog en locatiepagina's. Zelfs /bedankt draagt nog een klein rebrand-restant: de ambient-achtergrondgloed op regel 29 gebruikt nog het oude emerald-groen (rgba(52,211,153,…)) naast het nieuwe goud.

**Award-winning oplossing.** Koppel het formulier aan een leadcapture-backend (Formspree, Resend, of een simpele serverless functie die naar info@dynique.nl mailt) — dit staat al als bekend openstaand issue in docs/LAUNCH-PLAN.md. Maak van de fix meteen een vertrouwenswinst in plaats van alleen een technische correctie: toon op /bedankt expliciet 'We hebben 'm ook naar [e-mail] gestuurd — en voegen je aan geen enkele lijst toe tenzij je dat zelf aanvinkt.' Dat is precies 'bewijs door precisie, niet door beloftes' toegepast op privacy: een concrete, controleerbare belofte in plaats van stilzwijgend niets doen — het soort detail dat een leadmagneet onderscheidt van elke andere gratis-pdf-truc.

### 11. Geen lokale pagina voor de eigen vestigingsplaats, waar de sterkste lokale case zit {#referral-klant-met-voorvertrouwen-geen-lokale-pagina-voor-de-eigen-vestigingsplaats-waar-de-sterkste-lokale-case-zit}

**Persona:** Referral-klant — buurman-ondernemer uit Vaals zelf  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Een ondernemer die naast IJssalon Italia in Vaals zit, hoort van eigenaren Wally & Roger: 'die jongen uit het dorp, Dynique, heeft onze site gebouwd.' Hij zoekt op 'Dynique Vaals' of klikt in de footer op een lokale pagina om te zien of Dynique ook voor bedrijven in zijn eigen dorp werkt.

**Trust/behoefte-trigger.** Als lokale, buurtgebonden referral verwacht hij juist hier de sterkste lokale herkenning te vinden — het is letterlijk de vestigingsplaats van het bedrijf.

**Wat er nu misgaat.** De vijf locatiepagina's in Footer.tsx (regel 21-27) dekken Maastricht, Heerlen, Sittard-Geleen, Aken en Eindhoven — geen Vaals, terwijl het bedrijf zelf daar geregistreerd staat (over-ons/page.tsx JSON-LD, addressLocality: 'Vaals') én de meest zichtbare lokale klant (IJssalon Italia Vaals) daar zit. De sterkste, meest naspeurbare lokale referral-case ontbreekt precies op de plek waar hij het meest voor de hand ligt.

**Award-winning oplossing.** Voeg /locaties/vaals toe als zesde locatiepagina, gebouwd met de al bestaande CityPage-component. Licht daar niet alleen de IJssalon Italia-case uit als lokaal bewijs, maar maak van de vestigingsplaats zelf een geloofwaardigheidsargument: 'We werken vanuit Vaals, niet vanuit een postbus of een gedeeld kantoorpand' — direct gekoppeld aan de KVK-vestigingsgegevens en (zodra beschikbaar) de naam van de oprichter uit case 5. Dat is de goedkoopste, meest overtuigende lokale SEO-pagina die nog ontbreekt, én de enige locatiepagina die zowel een echte klant als een echt adres kan tonen in plaats van alleen een steekwoord.

### 12. De WhatsApp-opener is voor iedereen identiek, ook voor de warmste lead {#referral-klant-met-voorvertrouwen-de-whatsapp-opener-is-voor-iedereen-identiek-ook-voor-de-warmste-lead}

**Persona:** Referral-klant — wil meteen context meegeven via WhatsApp  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een ondernemer die net vol vertrouwen via een referral binnenkomt, klikt direct op de zwevende WhatsApp-knop rechtsonder in plaats van het formulier in te vullen — hij wil snel en informeel, precies zoals zijn referral het beschreef.

**Trust/behoefte-trigger.** Hij verwacht dat zijn warme binnenkomst ('ik kom van [klant]') meteen het gesprek opent, niet een blanco chat die begint alsof hij een koude lead is.

**Wat er nu misgaat.** src/app/page.tsx regel 308 — de vaste sticky WhatsApp-knop opent altijd exact dezelfde vooringevulde tekst: 'Hi! Ik heb interesse in een samenwerking.' Identiek voor elke bezoeker, ongeacht binnenkomstbron of hoeveel voorkennis hij al heeft. Zelfs het WhatsApp-icoon op deze knop (regel 1002, in de contactsectie) draagt trouwens nog het oude groen `#34d399` in plaats van het nieuwe goud — een klein, maar precies het soort snijvlak-detail dat 'dezelfde scaffolding overal herhaald' laat voelen.

**Award-winning oplossing.** Voeg een lichte `?ref=`-querystring-mechaniek toe: wanneer een referrer een eigen korte link deelt (of een UTM-parameter meegeeft), genereert de sticky WhatsApp-knop een aangepaste openingszin, bijvoorbeeld 'Hi! [Klantnaam] verwees me door — ik wil graag [dienst] bespreken.' Maak het verschil ook zíchtbaar vóór de klik, niet alleen in de verborgen prefill-tekst: verander het knopje-label zelf van generiek 'Chat direct' naar '[Klantnaam] verwees je door · Chat direct' zodra de parameter aanwezig is. Dat is met een paar regels JavaScript te bouwen bovenop de bestaande `href`-constructie en verlaagt de instapdrempel voor exact het bezoekerstype dat al overtuigd is — en neem meteen de kleurcorrectie van het icoon mee.

### 13. Het bewijs dat hij zoekt staat pas als vijfde sectie op de pagina {#referral-klant-met-voorvertrouwen-het-bewijs-dat-hij-zoekt-staat-pas-als-vijfde-sectie-op-de-pagina}

**Persona:** Referral-klant — tijdsdruk-ondernemer die snel wil bevestigen  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een ondernemer met weinig tijd komt op de homepage met precies één doel: de review van zijn referral terugvinden om te bevestigen dat het klopt, en dan meteen door naar het formulier.

**Trust/behoefte-trigger.** Hij wil bevestiging binnen enkele seconden, niet na uitgebreid doorscrollen door het merkverhaal dat hij eigenlijk al gelooft.

**Wat er nu misgaat.** De REVIEWS-sectie staat pas als vijfde van tien secties op de homepage (src/app/page.tsx regel 606, ná Hero → Marquee → Manifesto → Waarom Dynique). Een bezoeker die alleen bevestiging zoekt, moet eerst door het volledige merkverhaal scrollen voordat hij het bewijs bereikt dat hij eigenlijk al vertrouwde vóór hij op de site kwam.

**Award-winning oplossing.** Voeg in de hero-sectie, direct onder de bestaande 'START JE PROJECT'/'BEKIJK WERK'-knoppen (regel 386-390), een subtiel ankerlinkje '5.0 · Verified reviews →' toe dat direct naar `#reviews` springt — hergebruik de microcopy die al in het conversieblok staat (regel 1015: '5.0 · Verified'). Houd het bewust minimaal zodat de hero visueel rustig blijft — geen extra blok, alleen een derde, kleinere regel onder de bestaande CTA's. Zo bereikt een bezoeker met een specifieke bevestigingsbehoefte het bewijs in één klik in plaats van na vier secties scrollen, zonder dat de bezoeker die wél het verhaal wil lezen er last van heeft.

### 14. Dynique verkoopt zichtbaarheid, maar heeft zelf geen enkel extern spoor {#referral-klant-met-voorvertrouwen-dynique-verkoopt-zichtbaarheid-maar-heeft-zelf-geen-enkel-extern-spoor}

**Persona:** Referral-klant — zorgvuldige beslisser die zelf due diligence doet  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een doordachte beslisser bij een groter bedrijf wil, naast de mond-tot-mondreclame, ook zelf een kleine due-diligence-check doen — hij zoekt naar een LinkedIn-profiel van de oprichter of het bedrijf om de technische achtergrond te bevestigen die zijn referral roemde.

**Trust/behoefte-trigger.** Hij verwacht een extra bevestigingslaagje te vinden, passend bij PRODUCT.md's belofte 'technisch onderlegd — een echte opleiding en ervaring erachter, geloofwaardigheid door feiten.'

**Wat er nu misgaat.** Nergens op de site — niet in src/components/Header.tsx, niet in Footer.tsx, niet op src/app/over-ons/page.tsx — staat een link naar LinkedIn, Instagram of een ander kanaal van Dynique zelf of de oprichter. Tegelijk verkoopt de site 'Social media automatie' expliciet als dienst (src/app/diensten/marketing/page.tsx regel 27: 'Automatisch posten op Instagram, LinkedIn en Facebook op de beste momenten'). Het bedrijf biedt dus aan om de zichtbaarheid van klanten te automatiseren, maar heeft zelf geen enkel extern, verifieerbaar spoor.

**Award-winning oplossing.** Voeg in de footer een korte 'Volg ons'-regel toe met een LinkedIn-link naar zowel het bedrijfsprofiel als het persoonlijke profiel van de oprichter (gekoppeld aan de nu ontbrekende naam uit case 5). Maak van dat profiel meteen het levende bewijs voor de eigen marketingdienst: laat de oprichter er daadwerkelijk over eigen builds en beslissingen posten, in plaats van een stil, leeg profiel. 'Zo doen we het zelf' is een sterker verkoopargument voor social media automatie dan welke featurelijst dan ook, en dient tegelijk als het externe, due-diligence-vriendelijke spoor dat deze beslisser zoekt.

### 15. Geen agenda-integratie: elk gesprek eindigt in een handmatig WhatsApp-bericht {#referral-klant-met-voorvertrouwen-geen-agenda-integratie-elk-gesprek-eindigt-in-een-handmatig-whatsapp-bericht}

**Persona:** Referral-klant — beslisser bij een grotere organisatie die intern moet plannen  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Een operationeel directeur bij een groter logistiek bedrijf wil, voordat hij zelf appt, eerst een concreet moment in de agenda van zijn team zetten en collega's uitnodigen voor het eerste gesprek — zoals bij elke andere zakelijke leverancier.

**Trust/behoefte-trigger.** Ondanks het aanwezige voorvertrouwen verwacht hij, gezien de schaal van zijn organisatie, een professioneel en deelbaar contactpunt — geen puur informeel kanaal dat hij zelf moet omzetten in een agenda-item.

**Wat er nu misgaat.** Het enige 'afspraak inplannen'-mechanisme, zowel op de homepage (src/app/page.tsx, `handleWhatsAppSubmit`) als op de contactpagina (regel 205 e.v., 'Ik wil graag een gesprek inplannen'), is een datum/tijd-select die uiteindelijk gewoon wordt samengevoegd in hetzelfde WhatsApp-bericht naar het persoonlijke 06-nummer (regel 97 op de contactpagina). Er is geen agenda-integratie, geen ICS-uitnodiging, geen automatische bevestiging — voor interne teamplanning is een WhatsApp-toezegging lastiger te agenderen dan een kalenderuitnodiging.

**Award-winning oplossing.** Vervang de handmatige datum/tijd-select door een ingebedde Cal.com- of Calendly-widget (gratis tier volstaat) direct in het 'Ik wil graag een gesprek inplannen'-blok op beide formulieren. Bied bewust maar één type slot aan, persoonlijk benoemd — 'Kennismaking met [voornaam]', geen generieke 'Book a meeting' — zodat de afspraak ook in de agenda-uitnodiging zelf de 'persoonlijk, niet anoniem-corporate'-belofte (Design Principle 3) waarmaakt in plaats van te ondermijnen. De bezoeker boekt een écht agenda-slot met automatische bevestigingsmail en ICS-bijlage die hij intern kan doorsturen, terwijl de bestaande WhatsApp-route gewoon blijft bestaan als snelle alternatieve ingang voor wie dat liever heeft.

---

## Klant eerder opgelicht door een goedkoop bureau/freelancer

### 1. De enige juridische waarheid over Dynique staat op regel 186 van een pagina niemand vrijwillig leest {#klant-eerder-opgelicht-door-een-goedkoop-bureaufreelancer-de-enige-juridische-waarheid-over-dynique-staat-op-regel-186-van-een-pagina-niemand-vrijwillig-leest}

**Persona:** Klant eerder opgelicht door een goedkoop bureau/freelancer  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Linda (52), operations manager bij een logistiek bedrijf met 80 medewerkers, is drie maanden geleden voor €12.000 opgelicht door een freelancer die uitsluitend via WhatsApp communiceerde, 50% aanbetaling inde en daarna onbereikbaar werd. Voordat ze ook maar één veld van het contactformulier invult, doet ze eerst grondig achtergrondonderzoek: KVK-nummer, rechtsvorm, hoe lang het bedrijf al bestaat.

**Trust/behoefte-trigger.** Ze wil met zekerheid weten dat ze niet weer met 'één man met een laptop' in zee gaat, maar met een partij met structuur en aansprakelijkheid — precies wat PRODUCT.md's eigen doelgroepomschrijving belooft ('meer behoefte aan bewijs dat de partij aan de andere kant technisch onderlegd en betrouwbaar is').

**Wat er nu misgaat.** Ze vindt 'KVK 90531264' in de footer (Footer.tsx, regels 124-134) als platte, niet-klikbare 45%-opacity tekst en klikt door naar de privacyverklaring om de juridische entiteit te checken. Daar leest ze, pas op regel 186, dat 'Dynique de handelsnaam is van de eenmanszaak Creemers Inclusives' — exact dezelfde rechtsvorm als de freelancer die haar opgelicht heeft. Nergens op homepage, /contact of /over-ons wordt dit proactief benoemd of gecontextualiseerd; het enige concrete juridische feit dat ze zelf kan opgraven, ondermijnt precies de geruststelling die de rest van de site probeert te geven.

**Award-winning oplossing.** Maak van de verborgen rechtsvorm een expliciet, trots vertrouwenspunt op /over-ons, direct onder de founder-foto: 'Ja, juridisch ben ik een eenmanszaak — geen anonieme laag tussen jou en wie het werk doet.' Til dit vervolgens boven het niveau van tekst uit met één concreet, nooit eerder op een Nederlandse eenmanszaak-website gezien mechanisme: een klein, eerlijk 'Studio-status'-blok dat wekelijks handmatig wordt bijgewerkt — 'Nu in uitvoering: 2 projecten · laatst bijgewerkt: 3 sept 2026' — zodat een bezoeker in twee seconden ziet dat er een actief, functionerend bedrijf achter de eenmanszaak zit, in plaats van alleen een claim daarover. Combineer dat met de twee dingen die het geldrisico daadwerkelijk mitigeren: een letterlijke uitleg van het gefaseerde betaalmodel (zie case 'Betaalplan') en een garantie dat broncode per fase in een eigen, door de klant beheerde Git-repository terechtkomt — geen bewering, maar een concrete, verifieerbare werkwijze.

### 2. Twee reactietijd-claims op één pagina, 121 pixels van elkaar verwijderd {#klant-eerder-opgelicht-door-een-goedkoop-bureaufreelancer-twee-reactietijd-claims-op-n-pagina-121-pixels-van-elkaar-verwijderd}

**Persona:** Klant eerder opgelicht door een goedkoop bureau/freelancer  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Peter (47), directeur van een installatiebedrijf, werd vorig jaar opgelicht door een 'goedkoop' webbureau dat beloofde binnen een week te reageren, maar na het tekenen wekenlang niets liet horen. Hij leest nu elk detail op een leverancierswebsite extra kritisch, op zoek naar tekenen van slordigheid die de eerdere ervaring voorspelden.

**Trust/behoefte-trigger.** Kleine, controleerbare tegenstrijdigheden zijn voor hem direct een rode vlag: 'als ze dit al niet consistent kunnen zeggen over zichzelf, hoe consistent zijn ze dan over mijn project.'

**Wat er nu misgaat.** Op /contact belooft de hero-paragraaf direct onder de H1 'kennismaken': 'We reageren altijd binnen 24 uur — meestal veel eerder' (src/app/contact/page.tsx, regel 134). Zes regels tekst lager, in de DETAILS-lijst ernaast, staat: 'REACTIETIJD — Binnen 2 uur (ma–za, 9–20u)' (regel 13). Twee verschillende, ongeclausuleerde tijdsclaims op exact dezelfde pagina, zonder dat ooit wordt uitgelegd welke van de twee geldt of waarom ze verschillen.

**Award-winning oplossing.** Vervang beide claims door één belofte met een harde, herleidbare onderbouwing: 'Binnen 2 werkuren een reactie (ma–za, 9–20u) — van dezelfde persoon die het bericht ook leest, geen supportteam ertussen.' Ga daarna een stap verder dan copy alleen: bouw een klein, publiek 'reactielog' naast de DETAILS-lijst dat automatisch de laatste paar daadwerkelijke reactietijden toont (bijvoorbeeld gekoppeld aan het nieuwe formulier-bevestigingssysteem uit case 'Geen bevestiging'): 'Laatste 5 reacties: gemiddeld 47 min.' Een cijfer dat uit echte data komt in plaats van marketingtekst is precies het soort bewijs dat een door slordigheid gebrande klant nodig heeft om een reactietijd-belofte weer te geloven.

### 3. 'OPRICHTER · DYNIQUE' is het enige dat je over de mens achter Dynique te weten komt {#klant-eerder-opgelicht-door-een-goedkoop-bureaufreelancer-oprichter-dynique-is-het-enige-dat-je-over-de-mens-achter-dynique-te-weten-komt}

**Persona:** Klant eerder opgelicht door een goedkoop bureau/freelancer  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Fatima (39), CFO bij een zorgorganisatie met meerdere vestigingen, moet een leverancier laten goedkeuren door de directie. Haar vorige ervaring: een 'expert' op een portfolio-website bleek na ondertekening een stagiair zonder relevante opleiding. Ze googelt sindsdien standaard de naam van iedere zelfstandige en checkt LinkedIn voordat ze een handtekening zet.

**Trust/behoefte-trigger.** Ze wil een naam, een LinkedIn-profiel en een controleerbare achtergrond zien vóórdat ze een gesprek inplant — een gezicht zonder naam is voor haar functioneel gelijk aan geen bewijs.

**Wat er nu misgaat.** /over-ons toont een zwart-wit portretfoto met als enige bijschrift 'OPRICHTER · DYNIQUE' (src/app/over-ons/page.tsx, regel 139). Er staat nergens op de hele site een voor- en achternaam, opleiding, eerdere werkervaring of LinkedIn-link — terwijl PRODUCT.md's brandpersoonlijkheid expliciet claimt 'Technisch onderlegd — een echte opleiding en ervaring erachter; geloofwaardigheid door feiten, niet door het woord expert' (Brand Personality, punt 1). Precies de feiten die dit moeten onderbouwen ontbreken op de enige pagina die daarvoor bedoeld is.

**Award-winning oplossing.** Voeg direct onder de foto een naam-en-credentialsregel toe: volledige naam, functietitel, en één concrete achtergrondzin ('[Naam] — [opleiding], [x] jaar ervaring in softwareontwikkeling'), met een LinkedIn-icoon naar een echt, actueel profiel. Til dit naar een niveau dat een stagiair-freelancer nooit kan namaken: vervang het statische portret door een 45 seconden durende video waarin de oprichter zelf, in eigen woorden, de eenmanszaak-vraag uit case 1 beantwoordt ('Ja, ik ben één persoon — en dat is precies waarom je met mij praat, niet met een accountmanager'). Een stem, een gezicht en een naam die vrijwillig het ongemakkelijke punt benoemt, is onmogelijk te faken en is precies het bewijs-door-precisie dat Design Principle 1 uit PRODUCT.md beoogt.

### 4. Auwt Aelse's case study toont 'BEELD VOLGT' onder exact dezelfde video die al op de homepage draait {#klant-eerder-opgelicht-door-een-goedkoop-bureaufreelancer-auwt-aelses-case-study-toont-beeld-volgt-onder-exact-dezelfde-video-die-al-op-de-homepage-draait}

**Persona:** Klant eerder opgelicht door een goedkoop bureau/freelancer  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Youssef (44), IT-manager bij een bouwbedrijf, klikt vanuit de portfoliosectie op de homepage door op de Auwt Aelse-preview (een afgewerkte, professionele video) om de volledige case study te bekijken — precies het gedrag van iemand die eerder een freelancer inhuurde op basis van een mooie showreel, waarna het opgeleverde werk van veel lagere kwaliteit bleek.

**Trust/behoefte-trigger.** Hij wil de claim 'dit hebben we echt gebouwd' zelf kunnen doorklikken en verifiëren — elke discrepantie tussen teaser en bewijs is voor hem direct diskwalificerend.

**Wat er nu misgaat.** Homepage en /portfolio spelen voor zowel Chefs Connect als Auwt Aelse een afgewerkte preview.mp4 af. Bij Chefs Connect klopt de belofte gedeeltelijk: de case-study data zelf zet al heroVideo: '/rsc/chefsconnect/preview.mp4' (src/app/portfolio/chefs-connect/page.tsx, regel 22), dus de hero speelt gewoon af. Maar scroll je verder, dan zijn challenge, approach, features, gallery en quote allemaal lege, uitgecommentarieerde placeholders (regels 31-54) — precies zoals de eigen buildnotitie bovenaan het bestand toegeeft: 'Design is af. Vul onderstaande velden in met de echte content' (regel 7). Bij Auwt Aelse is het erger: heroImage staat op null en heroVideo is helemaal niet gezet (regels 19-22), terwijl exact hetzelfde afgewerkte bestand — public/rsc/auwtaelse/preview.mp4 — al op de homepage en in /portfolio speelt. CaseStudyTemplate.tsx valt daardoor terug op zijn lege staat en toont letterlijk 'BEELD VOLGT' (regel 106) onder een video die al lang bestaat en goed genoeg werd bevonden voor de homepage.

**Award-winning oplossing.** De directe fix is triviaal en daarom extra veelzeggend als hij níet gebeurt: zet heroVideo: '/rsc/auwtaelse/preview.mp4' in auwt-aelse/page.tsx — hetzelfde veld dat bij Chefs Connect al bewijst dat het werkt, geen nieuw beeldmateriaal nodig. Ga daarna verder dan het beeld alleen: bouw voor beide cases, zolang challenge/approach/features nog niet geschreven zijn, één herbruikbare status-strip direct onder de hero die de bestaande FASE 1-4-procesvisualisatie van de homepage hergebruikt en toont welk deel van de case al 'af' is (hero ✓, live site ✓) en welk deel nog volgt, met een echte datum. Zichtbare, eerlijke onvolledigheid met een tijdlijn is voor deze persona geloofwaardiger dan een stille lege sectie — en tot die statusstrip er is, mag een teaserkaart nooit doorlinken naar een pagina die minder belooft dan de teaser zelf.

### 5. De meest prominente review draagt dezelfde achternaam als de juridische eigenaar van het bedrijf {#klant-eerder-opgelicht-door-een-goedkoop-bureaufreelancer-de-meest-prominente-review-draagt-dezelfde-achternaam-als-de-juridische-eigenaar-van-het-bedrijf}

**Persona:** Klant eerder opgelicht door een goedkoop bureau/freelancer  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Karin (56), inkoopmanager bij een grotere B2B-organisatie, is eerder opgelicht door een bureau met nep-testimonials die bij navraag bevriende kennissen van de eigenaar bleken. Ze controleert nu standaard of de naam van een reviewer ergens overlapt met de naam van het bedrijf zelf, vóórdat ze een review als bewijs accepteert.

**Trust/behoefte-trigger.** Elke onverklaarde overlap tussen 'klant' en 'leverancier' is voor haar direct reden om de hele reviewsectie als onbetrouwbaar te bestempelen — niet alleen die ene review.

**Wat er nu misgaat.** De eerste review die een bezoeker ziet in de homepage-carousel (src/app/page.tsx, regels 610-621) is van 'Tom Creemers, Founder · Creemers Exclusive'. Footer en privacyverklaring vermelden site-breed dat Dynique de handelsnaam is van 'Creemers Inclusives' (Footer.tsx regel 125; privacyverklaring regel 186). Dezelfde achternaam duikt op als zowel de juridische eigenaar van Dynique zelf als de meest prominente 'klant' in de reviewsectie, zonder dat dit ergens — niet in de review, niet in de case study — wordt toegelicht.

**Award-winning oplossing.** Benoem de relatie expliciet en trots in plaats van haar te laten ontdekken: een klein label 'Familiebedrijf · eerste klant' zowel bij de reviewkaart als bovenaan /portfolio/creemers-exclusive. Precisie over de relatie ontkracht het wantrouwen; verzwijgen voedt het juist. Ga vervolgens verder dan disclosure alleen: voeg bij élke reviewkaart, niet alleen deze, een 'Bevestigd door'-regel toe met een tweede, door Dynique zelf niet te beheren verificatiebron — een link naar een Google Bedrijfsprofiel-review naast de bestaande link naar de klantwebsite. Zo wordt de familiale review niet het zwakke punt van de sectie, maar het bewijs dat zelfs de meest voor de hand liggende referentie extern te checken is.

### 6. Nergens op de site staat hoeveel je vooraf betaalt — de zoekterm 'aanbetaling' levert nul resultaten op {#klant-eerder-opgelicht-door-een-goedkoop-bureaufreelancer-nergens-op-de-site-staat-hoeveel-je-vooraf-betaalt-de-zoekterm-aanbetaling-levert-nul-resultaten-op}

**Persona:** Klant eerder opgelicht door een goedkoop bureau/freelancer  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Ahmed (50), eigenaar van een groothandel, betaalde een vorige webbouwer 60% vooraf op mondelinge belofte, waarna het project na de aanbetaling maandenlang stillag. Voordat hij een formulier invult, doorzoekt hij actief elke pagina op 'aanbetaling', 'termijn' of 'wanneer betaal ik'.

**Trust/behoefte-trigger.** Hij wil vóór het eerste contactmoment weten hoe zijn geld beschermd is — niet pas nadat hij al zijn gegevens heeft achtergelaten en in gesprek zit.

**Wat er nu misgaat.** Een site-brede zoekactie naar 'aanbetaling', 'voorschot', '50%' of 'factuur' levert vrijwel niets op. De enige aanwijzingen zijn twee losse zinsfragmenten — 'vaste prijs per fase' in de procesomschrijving (src/app/page.tsx, regel 818) en nogmaals in het conversieblok (regel 965) — en de kale '100%'-statistiek erboven (regel 973). Geen van beide legt uit hoeveel fases er zijn, wat je per fase betaalt, of wat er gebeurt als een fase niet wordt opgeleverd. Voor iemand die specifiek zoekt naar geruststelling over vooruitbetaling is dit sitebreed onvindbaar.

**Award-winning oplossing.** Maak het fasemodel voor het eerst expliciet en tastbaar: een nieuw, negende FAQ-item met de letterlijke vraag 'Hoe zit het met aanbetalen — wat als ik eerder ben opgelicht?' en een concreet antwoord ('Je betaalt per opgeleverde fase, nooit het volledige bedrag vooraf'). Til dit naar een niveau dat verder gaat dan tekst: bouw een klein interactief 'Betaalplan'-blok naast het contactformulier op /contact dat, op basis van het gekozen project (Website / Web Applicatie / Maatwerk software), live een fasetijdlijn toont met een percentage-indicatie per opleverstap — visueel hergebruik van de bestaande FASE 1-4-procesvisualisatie van de homepage, maar nu gekoppeld aan geld in plaats van alleen aan proces. Zichtbaar, interactief en per projecttype anders is precies het soort concreetheid dat een generieke geruststellingszin nooit kan evenaren.

### 7. Een formulier versturen opent een WhatsApp-concept en verder niets — geen ticket, geen kwitantie, geen spoor {#klant-eerder-opgelicht-door-een-goedkoop-bureaufreelancer-een-formulier-versturen-opent-een-whatsapp-concept-en-verder-niets-geen-ticket-geen-kwitantie-geen-spoor}

**Persona:** Klant eerder opgelicht door een goedkoop bureau/freelancer  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Sofie (41), marketingmanager bij een keten fysiotherapiepraktijken, werd eerder opgelicht door een freelancer die uitsluitend via een privé-WhatsApp communiceerde, nooit iets schriftelijks bevestigde, en na betaling spoorloos verdween. Ze associeert 'communicatie uitsluitend via een persoonlijk WhatsApp-nummer, zonder schriftelijke bevestiging' direct met haar oplichtingservaring.

**Trust/behoefte-trigger.** Ze wil een schriftelijk, dateerbaar spoor van elk contactmoment — geen los bericht dat spoorloos kan verdwijnen in een chatgeschiedenis die alleen de leverancier controleert.

**Wat er nu misgaat.** Elk formulier op de site (homepage, /contact, sectorpagina's) roept bij versturen window.open() aan met een vooraf ingevuld WhatsApp-bericht naar hetzelfde persoonlijke mobiele nummer (src/app/contact/page.tsx, regels 87-100) — zonder serverside-registratie, ticketnummer of bevestigingsmail. Dit is bevestigd als het nummer-1-issue in het eigen critique-rapport (docs/CRITIQUE-SITE-2026-07-14.md, bevinding #1, Nielsen-heuristiek 'Visibility of System Status': 'Elk WhatsApp-formulier ... geeft nul feedback bij versturen'). Het enige spoor dat overblijft is het bericht in Sofies eigen WhatsApp-uitvoerbak — exact hetzelfde kwetsbare, eenzijdige patroon als haar vorige ervaring.

**Award-winning oplossing.** Voeg een lichte serverside-stap toe tussen 'versturen' en 'WhatsApp openen': registreer de aanvraag en stuur direct een bevestigingsmail met referentienummer, pas daarna opent de WhatsApp-deeplink als aanvullend, snel kanaal. Til dit naar een echt onderscheidend niveau door van dat referentienummer een klikbare, publieke mini-statuspagina te maken — dynique.nl/aanvraag/DYN-2026-0914 — met een simpele tijdlijn ('Ontvangen · 07 sep 14:12' → 'Gelezen · 07 sep 15:02' → 'Voorstel onderweg'). Geen enkel Nederlands eenmanszaak-bureau biedt dit; het is bovendien het exacte soort kleine, op-maat-gebouwde trackingtool dat Dynique zelf voor klanten bouwt — de aanvraagflow wordt zo zelf het eerste bewijsstuk van wat het bedrijf kan.

### 8. KVK-nummer en adres staan er wel, maar in 45%-opacity platte tekst zonder één klikbare link {#klant-eerder-opgelicht-door-een-goedkoop-bureaufreelancer-kvk-nummer-en-adres-staan-er-wel-maar-in-45-opacity-platte-tekst-zonder-n-klikbare-link}

**Persona:** Klant eerder opgelicht door een goedkoop bureau/freelancer  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Bram (58), financieel directeur bij een installatiebedrijf, checkt vóór een offerteaanvraag standaard drie dingen: het KVK-nummer in het Handelsregister, of het adres een echt bedrijfspand is, en of de onderneming er financieel gezond uitziet.

**Trust/behoefte-trigger.** Hij wil die verificatie in twee klikken kunnen doen, niet door zelf te knippen-plakken in een aparte KVK-zoekmachine terwijl hij eigenlijk al twijfelt.

**Wat er nu misgaat.** De footer toont 'KVK 90531264' en 'Ir. Em. Melottestraat 10, 6291 HE Vaals' (Footer.tsx, regels 124-134) als kleine, ongelinkte tekst — geen verwijzing naar het KVK Handelsregister, geen kaart, geen Maps-link. Dezelfde platte weergave staat op /contact (DETAILS-lijst, regel 15) en in de privacyverklaring (regel 421). Bram moet het nummer zelf kopiëren en handmatig naar kvk.nl navigeren — precies de extra frictie die iemand die al wantrouwend is, sneller laat afhaken.

**Award-winning oplossing.** Maak 'KVK 90531264' op alle drie de plekken een directe hyperlink naar de publieke KVK-zoekresultaatpagina voor dat nummer, en het adres een link naar Google Maps met de exacte pin. Voeg daarnaast, direct naast het nummer, een klein 'sinds [oprichtingsjaar]'-label toe dat rechtstreeks uit het Handelsregister is overgenomen — 'KVK 90531264 · geregistreerd sinds 2023' — zodat de leeftijd van de onderneming, niet alleen het bestaan ervan, in één oogopslag verifieerbaar is. Een cijfer plus een link is voor een financieel directeur oneindig geloofwaardiger dan een cijfer alleen.

### 9. 'Verified · 5.0' claimt verificatie zonder ooit te zeggen wíe er geverifieerd heeft {#klant-eerder-opgelicht-door-een-goedkoop-bureaufreelancer-verified-50-claimt-verificatie-zonder-ooit-te-zeggen-we-er-geverifieerd-heeft}

**Persona:** Klant eerder opgelicht door een goedkoop bureau/freelancer  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Nadia (45), HR-directeur bij een zorginstelling met meerdere locaties, werd eerder verleid door een leverancier met een indrukwekkend '4.9 sterren, 40 reviews'-label dat bij navraag nergens extern te verifiëren bleek. Sindsdien vertrouwt ze geen enkel sterren- of scorelabel meer dat niet naar een externe, niet-door-de-leverancier-beheerde bron linkt.

**Trust/behoefte-trigger.** Het woord 'Verified' zonder bron is voor haar een trigger, geen geruststelling — ze wil weten wíe het geverifieerd heeft en waar ze het origineel kan terugvinden.

**Wat er nu misgaat.** De reviewsectie op de homepage toont het label 'Verified · 5.0' (src/app/page.tsx, regel 685) boven elke review, met daaronder alleen een link naar de website van de klant zelf. Die link bewijst dat het genoemde bedrijf bestaat en dat Dynique er een site voor bouwde — maar niets over de review zelf: niet dat het citaat woordelijk zo is uitgesproken, niet wie 'Verified' precies heeft vastgesteld. Nergens op de site staat een link naar een Google Bedrijfsprofiel, Trustpilot of ander platform buiten Dynique's eigen controle.

**Award-winning oplossing.** Vervang het ongefundeerde 'Verified'-label door een concreet, per review verschillend mechanisme in plaats van één generiek woord voor alle vijf: koppel reviews met een bestaand Google Bedrijfsprofiel aan een klein Google-logo met 'Bekijk op Google' naast de bestaande link naar de klantsite; voor reviews zonder Google-profiel, vervang 'Verified' door een specifieker, dateerbaar label als 'Citaat via e-mail, maart 2025' met een doorklikbare (geanonimiseerde waar nodig) screenshot van het originele bericht als bewijs. Specifiek en dateerbaar bewijs, per review anders, verslaat een generiek badge-woord dat voor alle vijf identiek is — juist die herhaling van hetzelfde woord is wat het voor deze persona verdacht maakt.

### 10. 8 FAQ's beantwoorden bijna alles, behalve de vraag die deze bezoeker het hardst stelt {#klant-eerder-opgelicht-door-een-goedkoop-bureaufreelancer-8-faqs-beantwoorden-bijna-alles-behalve-de-vraag-die-deze-bezoeker-het-hardst-stelt}

**Persona:** Klant eerder opgelicht door een goedkoop bureau/freelancer  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Willem (49), directeur van een familiebedrijf in de bouw, leest de FAQ-sectie op de homepage volledig door op zoek naar één specifieke geruststelling: 'wat gebeurt er als jullie stoppen, failliet gaan, of het project halverwege laten liggen — zoals de vorige partij deed.'

**Trust/behoefte-trigger.** Het ontbreken van precies díe vraag in een verder uitgebreide FAQ voelt voor hem niet als toeval, maar als een blinde vlek die het bedrijf liever niet bespreekt.

**Wat er nu misgaat.** De 8 FAQ-items op de homepage (src/app/page.tsx, regels 234-241) behandelen trajectduur, locatie, aansluiten op bestaande systemen, dataeigendom, scopewijzigingen, webontwikkeling als fundament, wat-er-na-oplevering-gebeurt en ontevredenheid. Regel 240 komt het dichtst in de buurt — 'Wat gebeurt er na oplevering? Ik blijf bereikbaar ... hetzelfde aanspreekpunt van dag één' — maar dat antwoord gaat over service ná een geslaagde livegang, niet over continuïteit als het project zelf vroegtijdig strandt. Een risico dat extra klemt gezien de eenmanszaak-status die elders op de site (zie privacyverklaring regel 186) wordt blootgelegd, wordt in de FAQ nergens rechtstreeks geadresseerd.

**Award-winning oplossing.** Voeg een negende FAQ-item toe, letterlijk vanuit dit perspectief: 'Wat als het project halverwege stopt — bijvoorbeeld door ziekte of bedrijfsbeëindiging?' met een operationeel antwoord ('Je krijgt bij elke fase-oplevering de volledige broncode in een eigen, door jou beheerde repository — nooit alleen bij mij'). Positioneer het als tweede item, niet onderaan. Til het vervolgens van een eenmalig FAQ-antwoord naar een herbruikbaar vertrouwenselement: dezelfde continuïteitsgarantie duikt namelijk ook op als losstaand probleem bij de naamloze oprichter (case 3) en de onzichtbare betaalstructuur (case 6). In plaats van drie keer apart uit te leggen, ontwerp één klein, consistent 'Broncode-garantie'-badge-icoon dat op alle drie de plekken naar dezelfde, uitgewerkte uitleg linkt — één goed doordacht trust-mechanisme dat overal terugkomt, in plaats van drie losse patches.

### 11. Het enige echte prijsanker van de hele site staat op regel 94 van een blogartikel dat niemand op het beslismoment leest {#klant-eerder-opgelicht-door-een-goedkoop-bureaufreelancer-het-enige-echte-prijsanker-van-de-hele-site-staat-op-regel-94-van-een-blogartikel-dat-niemand-op-het-beslismoment-leest}

**Persona:** Klant eerder opgelicht door een goedkoop bureau/freelancer  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Marloes (43), inkoper bij een middelgrote retailketen, wil vóór ze een gesprek aanvraagt een ruwe prijsindicatie hebben om in te schatten of het aanbod realistisch is — na eerder 'vanaf €99'-marketing te zijn ingetrapt die uiteindelijk op €8.000 uitkwam, wantrouwt ze compleet stilzwijgen over prijs even hard als een aanbod dat te goedkoop oogt.

**Trust/behoefte-trigger.** Compleet stilzwijgen over prijs voelt voor haar hetzelfde risico als een prijs die te mooi is: in beide gevallen kan ze de eerlijkheid van het aanbod niet toetsen voordat ze persoonsgegevens achterlaat.

**Wat er nu misgaat.** Een site-brede zoekopdracht naar het euroteken levert maar één plek op met een echt prijsanker: /blog/wat-kost-een-website, dat stelt 'Een gemiddelde MKB-website begint bij ons rond €3.500' (regel 94) en expliciet uitlegt waarom 'vanaf €99'-marketing onbetrouwbaar is (regel 33). Deze precieze, geruststellende informatie staat nergens op homepage, /contact, /diensten of de sectorpagina's — de pagina's waar Marloes daadwerkelijk beslist of ze doorgaat, niet de blog die ze toevallig via Google vindt.

**Award-winning oplossing.** Neem het bestaande prijsanker over als klein blok direct boven het contactformulier op /contact en naast de statistiekenrij op de homepage: 'Richtprijs: MKB-website vanaf €3.500 · maatwerk software na intake.' Ga daarna verder dan een statische zin: de site heeft al een multiple-choice Advisor-quiz die bezoekers naar de juiste dienst leidt (Advisor.tsx) — voeg daar één afsluitende stap aan toe die op basis van de gekozen antwoorden (projecttype, ruwe scope, gewenste livegangdatum) een indicatieve bandbreedte toont, bijvoorbeeld '€3.500 - €7.000, definitief na intake'. Dat hergebruikt bestaande infrastructuur in plaats van een nieuwe tool te bouwen, en geeft Marloes een persoonlijk, interactief prijsanker in plaats van een generiek getal — precies het verschil tussen een prijslijst en een adviesgesprek.

### 12. '100% Vaste prijs' staat naast '24u' en '3' als kaal getal — zonder ook maar één zin uitleg {#klant-eerder-opgelicht-door-een-goedkoop-bureaufreelancer-100-vaste-prijs-staat-naast-24u-en-3-als-kaal-getal-zonder-ook-maar-n-zin-uitleg}

**Persona:** Klant eerder opgelicht door een goedkoop bureau/freelancer  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Erik (54), CFO bij een technisch installatiebedrijf, is getraind om elke ronde marketingstatistiek zonder bronvermelding automatisch te wantrouwen — zijn vorige leverancier adverteerde met '98% klanttevredenheid' die bij doorvragen op een enquête onder 12 mensen bleek te berusten.

**Trust/behoefte-trigger.** Een percentage zonder toelichting triggert bij hem het omgekeerde effect van wat het bedoelt: argwaan in plaats van geruststelling.

**Wat er nu misgaat.** Het conversieblok op de homepage toont drie statistieken naast elkaar zonder enige toelichting: '24u / Reactietijd', '100% / Vaste prijs', '3 / Revisierondes' (src/app/page.tsx, regels 972-974) — exact het patroon dat het eigen critique-rapport al identificeert als sitebreed risico: 'Hero-metric-blokken — ongeverifieerde cijferclaims verpakt als statistiek' (docs/CRITIQUE-SITE-2026-07-14.md, regel 32). Geen van de drie getallen wordt ergens op de pagina uitgelegd: 100% van wát precies is vast, en wat gebeurt er bij meerwerk?

**Award-winning oplossing.** Maak elke statistiek-tegel klikbaar/hoverbaar met een uitklapbare toelichting van één zin die direct naar de relevante FAQ- of Betaalplan-sectie linkt: bij '100% Vaste prijs' bijvoorbeeld 'Je weet vooraf per fase precies wat je betaalt — meerwerk buiten scope bespreken we altijd eerst, nooit achteraf gefactureerd. Lees hoe.' Dat verandert de tegel van een blote claim in een concrete belofte mét grens (wat wél, wat niet inbegrepen is) en een verifieerbaar vervolgpad — precies de precisie die een cijfer-wantrouwende CFO nodig heeft om het getal te geloven in plaats van te wantrouwen.

### 13. Sectorpagina's herkennen zijn probleem exact, maar tonen geen enkel bewijs uit zijn eigen sector {#klant-eerder-opgelicht-door-een-goedkoop-bureaufreelancer-sectorpaginas-herkennen-zijn-probleem-exact-maar-tonen-geen-enkel-bewijs-uit-zijn-eigen-sector}

**Persona:** Klant eerder opgelicht door een goedkoop bureau/freelancer  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Diederik (50), operationeel directeur bij een logistiek bedrijf met 40 voertuigen, klikt via een zoekresultaat door naar /maatwerk-software/logistiek. Hij herkent zijn eigen probleem letterlijk terug in de tekst, maar is eerder verbrand door een partij die dezelfde herkenbare pijnpunten benoemde zonder ooit voor een logistiek bedrijf te hebben gebouwd.

**Trust/behoefte-trigger.** Herkenbare probleemomschrijving alleen is voor hem geen bewijs van bekwaamheid — hij wil een naam, een logo, of een concreet resultaat uit zíjn sector zien, niet alleen featurebeloftes.

**Wat er nu misgaat.** /maatwerk-software/logistiek beschrijft precies zijn situatie — 'Ritten en orders plan je handmatig in, telefonisch en in Excel' (regel 28) — en belooft features als 'Realtime status & track & trace' (regel 41), maar bevat geen enkele verwijzing naar een echt, benoemd logistiek-klantproject. Hetzelfde geldt voor /maatwerk-software/bouw, /zorg en /installatiebedrijf: het bestaande portfolio (Chefs Connect, Auwt Aelse, IJssalon Italia, Stacy Kohnen, Creemers Exclusive) bevat geen enkel bouw-, zorg-, logistiek- of installatiebedrijf-project om naar te verwijzen — de belofte is sectorspecifiek, het bewijs is dat niet.

**Award-winning oplossing.** Wees expliciet over het ontbreken van sectorbewijs in plaats van de indruk van bewezen ervaring te wekken — precies wat PRODUCT.md's Design Principle 4 ('eerlijk over schaal') voorschrijft. Voeg onderaan elke sectorpagina een kader toe: 'Eerlijk: nog geen logistiek-klant.' Maak de overbrugging daarna concreter dan een verontschuldiging: benoem letterlijk welk bestaand project qua onderliggende technische uitdaging het dichtst in de buurt komt — bijvoorbeeld Chefs Connect's real-time matching-logica als parallel voor track & trace — en leg in twee zinnen uit waaróm die technische kern overdraagbaar is. Zo wordt de afwezigheid van sectorbewijs niet weggemoffeld, maar omgebogen tot een demonstratie van precies het technisch inzicht dat deze persona zoekt.

### 14. Het adres in Vaals bestaat alleen als tekst — nooit als iets wat je zelf kunt bekijken {#klant-eerder-opgelicht-door-een-goedkoop-bureaufreelancer-het-adres-in-vaals-bestaat-alleen-als-tekst-nooit-als-iets-wat-je-zelf-kunt-bekijken}

**Persona:** Klant eerder opgelicht door een goedkoop bureau/freelancer  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Sanne (46), facilitair manager bij een zorgorganisatie, werd ooit opgelicht door een 'bureau' waarvan het opgegeven adres bij navraag een postbus bleek zonder fysieke aanwezigheid. Ze checkt sindsdien standaard, via Google Street View, of een opgegeven bedrijfsadres een herkenbaar pand is en geen virtueel kantoor.

**Trust/behoefte-trigger.** Een adres zonder visuele bevestiging is voor haar net zo goed als geen adres — tekst alleen is te makkelijk te verzinnen.

**Wat er nu misgaat.** 'Ir. Em. Melottestraat 10, 6291 HE Vaals' verschijnt als platte tekst op meerdere plekken (Footer.tsx regel 133, /contact DETAILS-lijst regel 14, over-ons JSON-LD regel 42-47, privacyverklaring regel 421) maar nergens als klikbare link, embedded kaart, of met een foto van het pand zelf. Ze moet het adres zelf kopiëren en in een aparte tab naar Google Maps navigeren om te controleren of het een echt bedrijfspand is.

**Award-winning oplossing.** Voeg op /contact, in de ruimte onder de bestaande DETAILS-lijst, een kleine embedded Google Maps-kaart toe die precies op het opgegeven adres uitzoomt, met een klikbare 'Route plannen'-link — een detail van enkele regels code met een disproportioneel grote vertrouwenswinst. Ga een stap verder dan de standaardkaart: voeg er één authentieke foto van de werkelijke werkplek naast toe (geen stockfoto van een kantoorpand, maar een eerlijke, persoonlijke opname die past bij een klein, oprichter-geleid bedrijf) — dat is precies het verschil tussen 'een adres dat beweerd wordt' en 'een plek die je herkent', en het past bij de persoonlijke, niet-anonieme merktoon uit PRODUCT.md's Design Principle 3.

### 15. Precies vijf reviews, allemaal vijf sterren, zonder enige aanduiding of dit alles is of een selectie {#klant-eerder-opgelicht-door-een-goedkoop-bureaufreelancer-precies-vijf-reviews-allemaal-vijf-sterren-zonder-enige-aanduiding-of-dit-alles-is-of-een-selectie}

**Persona:** Klant eerder opgelicht door een goedkoop bureau/freelancer  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Robert (55), eigenaar van een groothandel, werd eerder overtuigd door een leverancier met drie perfecte testimonials op de homepage — pas na het tekenen ontdekte hij via een externe zoekopdracht dat er elders online ook kritische reviews van diezelfde partij bestonden die nooit op hun eigen site verschenen.

**Trust/behoefte-trigger.** Hij wil weten of hij de vólledige populatie klantfeedback ziet, of alleen de vijf beste — en de site geeft hem geen enkele manier om dat verschil te checken.

**Wat er nu misgaat.** De reviewsectie op de homepage (src/app/page.tsx, regels 610-666) toont exact 5 hardgecodeerde reviews, stuk voor stuk 5 sterren, in een array binnen de pagina zelf — er is geen link naar 'alle reviews', geen aanduiding '5 van de X', en geen manier voor een bezoeker om te verifiëren of dit alle bestaande feedback is of een gecureerde selectie. Voor iemand die eerder precies hierdoor is misleid, is het ontbreken van die context zelf al een signaal.

**Award-winning oplossing.** Voeg naast de reviewcarousel een klein, feitelijk correct contextzinnetje toe dat volledigheid expliciet maakt: 'Dit zijn al onze afgeronde klantprojecten tot nu toe — 5 van de 5, stuk voor stuk hieronder na te lezen.' Voor een klein, jong bedrijf is expliciete volledigheid, precies zoals PRODUCT.md's Design Principle 4 voorschrijft, een sterker signaal dan een groter aantal gecureerde reviews. Koppel dit direct aan de externe-verificatielinks uit case 'Verified · 5.0' (Google Bedrijfsprofiel-links per review), zodat de claim 'dit is alles' niet alleen beweerd wordt maar ook daadwerkelijk, project voor project, extern controleerbaar is — de combinatie van 'volledig' én 'verifieerbaar' is wat deze persona nooit eerder heeft gezien bij een leverancier.

---

## Enterprise-klant met security/compliance/AVG-eisen

### 1. De FAQ stelt haar exacte vraag en beantwoordt die met een belofte om het later uit te leggen {#enterprise-klant-met-securitycomplianceavg-eisen-de-faq-stelt-haar-exacte-vraag-en-beantwoordt-die-met-een-belofte-om-het-later-uit-te-leggen}

**Persona:** Security officer bij een productiebedrijf (250+ medewerkers), belast met het voorscreenen van drie kandidaat-softwarepartners voor een nieuw ERP-koppelvlak voordat ze een naam aan inkoop mag doordragen  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Ze heeft een dag uitgetrokken om drie shortlist-kandidaten te vergelijken op één criterium: hoe volwassen is hun aanpak van databeveiliging. Op dynique.nl scrollt ze voorbij de hero en het 'Waarom Dynique'-verhaal naar de FAQ-sectie, en de vierde vraag is letterlijk die van haar: 'Hoe zit het met beveiliging en dataeigendom?' Ze klikt hem open, leest het antwoord in vier seconden, en klapt hem weer dicht.

**Trust/behoefte-trigger.** Het antwoord — 'Ik werk projectmatig en veilig volgens vaste standaarden, en leg vooraf uit hoe gegevens worden opgeslagen en verwerkt' — noemt geen enkele standaard bij naam en verplaatst de concrete uitleg naar een toekomstig gesprek dat ze nog niet mag aanvragen. Voor een security officer die per definitie bewijs vóór contact verzamelt, is 'dat leggen we je nog uit' functioneel gelijk aan geen antwoord — en het is precies het patroon waarmee vage compliance-taal zichzelf verraadt.

**Wat er nu misgaat.** src/app/page.tsx, regel 237 (de `faqs`-array, vierde item) is de enige plek op de volledige homepage die het onderwerp beveiliging expliciet behandelt — één zin, geen genoemde maatregel, geen link naar meer. Er is geen enkele voetnoot, footer-link of sectie elders op de site (Header.tsx, Footer.tsx bevatten geen securityverwijzing) waar ze verder kan graven. Voor haar shortlist-proces levert dynique.nl letterlijk nul verifieerbare datapunten op — de twee concurrenten die ze ernaast legt, hebben allebei minstens een los 'Trust'- of 'Security'-documentpagina.

**Award-winning oplossing.** Herschrijf het FAQ-antwoord zelf naar drie met naam genoemde, verifieerbare maatregelen in plaats van 'vaste standaarden' — bijvoorbeeld versleutelde opslag in rust en onderweg, harde scheiding tussen staging- en productieomgeving (waar Fase 3 van het procestraject al 'staging-omgeving' noemt zonder het te koppelen aan security), en toegangsbeheer per project met een vaste, gelogde set beheerders. Bouw daarnaast een `/vertrouwen`-pagina (zie apart voorstel) en verander het antwoord zelf in een micro-bewijsstuk: onder de tekst een klein, scanbaar 'Dossier'-blokje met drie iconen (Versleuteling · Scheiding test/productie · Toegangsbeheer) dat doorklikt naar het bewijs op die pagina — zodat een screener binnen dezelfde FAQ-interactie van belofte naar bewijs beweegt zonder een gesprek te hoeven aanvragen. Dat is het verschil tussen 'vertrouw ons' en 'controleer ons' — precies waar een Awwwards-jury op een B2B-site naar zou kijken.

### 2. Er is geen enkel juridisch document op de site behalve de privacyverklaring — 'algemene voorwaarden' bestaat nergens {#enterprise-klant-met-securitycomplianceavg-eisen-er-is-geen-enkel-juridisch-document-op-de-site-behalve-de-privacyverklaring-algemene-voorwaarden-bestaat-nergens}

**Persona:** Jurist/inkoper in het procurement-team van een grotere klant, verplicht om standaardvoorwaarden (aansprakelijkheid, IP-eigendom, opzegtermijn, garantie) te screenen vóórdat een gesprek met een leverancier mag worden ingepland  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Interne inkooppolicy schrijft voor dat een DPO/jurist eerst standaardvoorwaarden beoordeelt voordat een salesgesprek wordt ingepland. Ze opent dynique.nl, scrollt naar de footer, zoekt naar 'algemene voorwaarden', 'terms', of 'voorwaarden' — en vindt alleen de link 'PRIVACYVERKLARING'. Ze probeert het via Google (site:dynique.nl voorwaarden) en via de blogindex. Niets.

**Trust/behoefte-trigger.** Een leverancier zonder vindbare algemene voorwaarden triggert bij een juridische afdeling automatisch een 'hold' — niet omdat de voorwaarden slecht zouden zijn, maar omdat er letterlijk niets is om te beoordelen. Dit is een showstopper-moment vóór er ooit een salesgesprek plaatsvindt, ongeacht hoe goed de rest van de site is.

**Wat er nu misgaat.** Een volledige zoekactie in de codebase (`src/app`, `src/components`) op 'algemene voorwaarden', 'terms of service' en 'verwerkersovereenkomst' levert nul treffers op. src/components/Footer.tsx, regel 143-145, linkt in de juridische rij die onderaan élke pagina van de site staat, uitsluitend naar `/privacyverklaring` — dat is het enige juridische document dat bestaat, en het gaat uitsluitend over de marketingsite zelf, niet over een softwareopdracht.

**Award-winning oplossing.** Publiceer `/algemene-voorwaarden` met dezelfde bewezen tweetalige (NL/EN) toggle-structuur als de privacyverklaring (zelfde componentpatroon `ContentNL`/`ContentEN`, dus lage bouwkost). Formaliseer daarin expliciet wat de FAQ nu al informeel belooft — 'Je data en code blijven van jou' (regel 237) — als bindende IP-overdrachtsclausule bij oplevering, plus aansprakelijkheidslimiet, garantietermijn na livegang, en opzegvoorwaarden per fase (aansluitend op de bestaande 'vaste prijs per fase'-belofte in Het Traject). Voeg de link direct naast Privacyverklaring toe in de footer-juridische-rij op alle ~30 routes in één keer, en verwijs er expliciet naar vanuit Fase 1 (Intake) van het procestraject op de homepage, waar nu al 'Heldere offerte' als deliverable staat zonder onderliggend contractdocument.

### 3. De privacyverklaring beschrijft Dynique uitsluitend als verantwoordelijke voor de eigen marketingsite — nergens staat dat Dynique bij klantprojecten als verwerker optreedt {#enterprise-klant-met-securitycomplianceavg-eisen-de-privacyverklaring-beschrijft-dynique-uitsluitend-als-verantwoordelijke-voor-de-eigen-marketingsite-nergens-staat-dat-dynique-bij-klantprojecten-als-verwerker-optreedt}

**Persona:** Data Protection Officer bij een logistiek bedrijf dat via /maatwerk-software/logistiek overweegt een planningssysteem met chauffeurs- en klantdata te laten bouwen  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Voordat ze intern goedkeuring geeft om contact op te nemen, leest ze de volledige privacyverklaring (679 regels, NL/EN-toggle) op zoek naar één antwoord: biedt Dynique — die straks als verwerker optreedt zodra het systeem met haar bedrijfsdata gebouwd is — een standaard verwerkersovereenkomst conform art. 28 AVG?

**Trust/behoefte-trigger.** Een verwerkersovereenkomst is bij het uitbesteden van softwarebouw met persoonsgegevens geen coulance maar een wettelijke verplichting. Een serieuze DPO screent hier altijd op, bij voorkeur vóór het eerste gesprek — het ontbreken ervan is voor haar geen slordigheid maar een reden om het traject helemaal niet te starten.

**Wat er nu misgaat.** Elke paragraaf van src/app/privacyverklaring/page.tsx is geschreven vanuit precies één perspectief: Dynique als verwerkingsverantwoordelijke van de eigen website-bezoekersdata (§3.1-3.5: contactformulier, WhatsApp, gratis-checklist) en als gezamenlijk verantwoordelijke met Meta (§5, advertising pixels). Een `grep` op 'verwerker' in de hele codebase levert nul relevante treffers op buiten de hostingpartner-vermeldingen (Cloudflare, regel 364/610). Nergens — niet in dit document, niet elders — erkent de site dat Dynique bij klantprojecten zelf als verwerker van bedrijfsdata optreedt. Voor haar rol is de site letterlijk onzichtbaar op het enige punt dat telt.

**Award-winning oplossing.** Voeg een apart hoofdstuk 'Verwerkersovereenkomst' toe — bij voorkeur als kernonderdeel van de nieuwe `/vertrouwen`-pagina — dat expliciet stelt dat Dynique bij klantprojecten optreedt als verwerker, en biedt een vooraf juridisch gecheckt, downloadbaar standaard-verwerkersovereenkomstsjabloon dat digitaal ondertekend kan worden vóór de start van Fase 1 (Intake). Voeg 'Verwerkersovereenkomst getekend' toe als vierde, concrete deliverable naast 'Strategisch gesprek / Heldere offerte / Concreet stappenplan' in de Intake-fase van het procestraject op de homepage (rond regel 836 van src/app/page.tsx) — zodat het exacte moment waarop een DPO zou afhaken, in plaats daarvan het moment wordt waarop ze ziet dat dit al geregeld is.

### 4. 'AVG-proof' staat twee keer op de zorgpagina zonder enige onderbouwing — en juist in de zorgsector leest kaal jargon als compliance-washing {#enterprise-klant-met-securitycomplianceavg-eisen-avg-proof-staat-twee-keer-op-de-zorgpagina-zonder-enige-onderbouwing-en-juist-in-de-zorgsector-leest-kaal-jargon-als-compliance-washing}

**Persona:** Kwaliteitsmanager/compliance-verantwoordelijke bij een zorgorganisatie op zoek naar roosterings- en dossiersoftware, met een interne leveranciersbeoordeling die specifiek toetst op NEN 7510  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Ze komt via Google ('AVG-proof software zorg') op /maatwerk-software/zorg terecht. De intro belooft 'roosters, dossiers en rapportages... veilig en AVG-proof', en verderop bij de features staat 'Alle gegevens op één veilige, AVG-proof plek'. Vanuit haar functie checkt ze meteen of dit aansluit bij NEN 7510 — de verplichte Nederlandse informatiebeveiligingsnorm voor de zorg (gebaseerd op ISO 27001) waar haar eigen organisatie leveranciers standaard op beoordeelt.

**Trust/behoefte-trigger.** Voor doorgewinterde compliance-lezers in de zorg is een los 'AVG-proof'-marketingwoord zonder verwijzing naar NEN 7510 juist een negatief signaal: het klinkt als een term die is neergezet om gerust te stellen, niet om te onderbouwen. Bij deze persona werkt de claim averechts — hoe stelliger het woord, hoe wantrouwiger de lezer.

**Wat er nu misgaat.** src/app/maatwerk-software/zorg/page.tsx gebruikt 'AVG-proof' op regel 19 (intro) en regel 41 (features-array, item 2) zonder enige toelichting of scope. Een repository-brede zoekactie op 'NEN 7510', 'ISO 27001' en 'SOC 2' levert nul treffers op — de norm die haar organisatie hanteert, komt letterlijk nergens voor. Het onderliggende `SectorTemplate.tsx`, dat alle vier sectorpagina's (bouw, zorg, logistiek, installatiebedrijf) rendert, bevat geen FAQ-blok, dus er is ook geen bestaande plek om zo'n vraag alsnog te beantwoorden zonder het component zelf uit te breiden.

**Award-winning oplossing.** Vervang de kale 'AVG-proof'-claim door een eerlijke, specifiek geschaalde formulering die past bij de merkwaarde 'eigenzinnig eerlijk': bijvoorbeeld 'Gebouwd volgens de AVG-uitgangspunten van dataminimalisatie en toegangsbeperking. Nog geen NEN 7510-certificering — wel toetsbare praktijken die we per project concreet maken.' Breid `SectorTemplate.tsx` uit met een optioneel FAQ-blok per sector (herbruikbaar voor alle vier sectorpagina's) en voeg op de zorgpagina één vraag toe: 'Is dit NEN 7510-uitlijnd?' met een niet-overdreven, controleerbaar antwoord. Expliciet scopen — 'nog niet gecertificeerd, wel deze drie concrete maatregelen' — is in deze sector geloofwaardiger dan een ongefundeerde marketingclaim, en het is precies het soort eerlijkheid dat de merkpositionering onderscheidend zou maken van een grote, gezichtloze zorgleverancier.

### 5. Bij stap 3 kiest hij expliciet de optie met het woord 'veiligheid' — en krijgt een antwoord dat uitsluitend over codekwaliteit gaat, nooit over databeveiliging {#enterprise-klant-met-securitycomplianceavg-eisen-bij-stap-3-kiest-hij-expliciet-de-optie-met-het-woord-veiligheid-en-krijgt-een-antwoord-dat-uitsluitend-over-codekwaliteit-gaat-nooit-over-databeveiliging}

**Persona:** IT-manager bij een installatiebedrijf die de Adviseur-quiz invult onder interne compliance-druk vanuit de directie  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Bij vraag 3 van De Adviseur op de homepage ('Wat is voor jou het belangrijkst?') kiest hij bewust de optie 'Kwaliteit & veiligheid voorop — Code die jaren meegaat, geen quick fix', omdat databeveiliging een randvoorwaarde is die hij vooraf voor de directie moet checken vóórdat hij verder gaat.

**Trust/behoefte-trigger.** Hij klikt op het woord 'veiligheid' met een specifieke verwachting: dat het resultaat iets zegt over hoe zijn bedrijfsgegevens worden beschermd. Dat is letterlijk de reden dat hij die optie koos boven 'Snel starten' of 'Vaste prijs'. Wanneer het resultaat daar niets over zegt, voelt het alsof de tool zijn keuze niet heeft gehoord — een geloofwaardigheidsprobleem in een feature die juist bedoeld is om persoonlijk en luisterend over te komen.

**Wat er nu misgaat.** src/components/Advisor.tsx, regel 48: de optie-id 'robuust' heeft het label 'Kwaliteit & veiligheid voorop' met beschrijving 'Code die jaren meegaat, geen quick fix'. Het bijbehorende `APPROACH['robuust']`-antwoord op regel 116 luidt: 'We bouwen met code die jaren meegaat — getest en onderhoudbaar, geen quick fix.' Dit is vrijwel een letterlijke herhaling van de optie-beschrijving zelf, en behandelt uitsluitend onderhoudbaarheid — het woord 'veiligheid' uit de labeltekst wordt in de daadwerkelijke output nooit inhoudelijk beantwoord. Dit is precies het enige zelf-identificatiemoment op de hele site waar een security-bewuste bezoeker zichzelf actief aanwijst, en het systeem negeert het signaal.

**Award-winning oplossing.** Splits `APPROACH.robuust` in twee zinnen: behoud de codekwaliteit-uitspraak en voeg een tweede, specifiek over databeveiliging toe — bijvoorbeeld 'Je gegevens staan nooit los en toegankelijk: versleutelde opslag, beperkte toegang per rol, gescheiden test- en productieomgevingen.' Verbreed de optie-label zelf naar 'Kwaliteit, veiligheid & databeheer voorop' zodat de belofte in de vraag en het antwoord in het resultaat weer matchen. Laat het resultaatscherm bij deze specifieke keuze een extra `advice.secondary`-link tonen naar `/vertrouwen` (naar het patroon dat al bestaat voor 'onduidelijk' en 'lokaal' op regel 147-152) — zodat het enige moment waarop een security-gedreven bezoeker zichzelf identificeert, ook daadwerkelijk naar bewijs leidt in plaats van naar een generieke onderhoudsbelofte.

### 6. De privacyverklaring beschrijft in 679 regels uitsluitend de marketingsite zelf — geen woord over hosting, architectuur of beveiliging van het daadwerkelijke product dat wordt verkocht {#enterprise-klant-met-securitycomplianceavg-eisen-de-privacyverklaring-beschrijft-in-679-regels-uitsluitend-de-marketingsite-zelf-geen-woord-over-hosting-architectuur-of-beveiliging-van-het-daadwerkelijke-product-dat-wordt-verkocht}

**Persona:** IT-architect/CTO bij een bouwbedrijf die evalueert waar en onder welk beleid projectdata straks wordt gehost zodra Dynique het bedrijfssysteem bouwt  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Hij leest alle 14 hoofdstukken van de privacyverklaring op zoek naar het antwoord op één concrete vraag: 'als jullie ons projectplanningssysteem bouwen — met werknemers- en onderaannemersdata erin — waar draait dat dan, en onder welk beveiligingsbeleid?' Hij vindt het antwoord niet en sluit het document.

**Trust/behoefte-trigger.** Hij verwacht dat de privacy-/securityverklaring van een bedrijf dat zichzelf nu positioneert rond 'maatwerk software' ook het daadwerkelijke product dekt dat hij overweegt te kopen — niet alleen de brochurewebsite eromheen. Dat de twee dingen door elkaar lopen op de site zelf ('Maatwerk Software' als kernaanbod) maar juridisch strikt gescheiden blijven, leest voor een technische beslisser als een gat, niet als een detail.

**Wat er nu misgaat.** Elke relevante paragraaf van src/app/privacyverklaring/page.tsx (§3.1-3.5 contactformulier/WhatsApp/checklist, §7 bewaartermijnen, §10 hostingpartners) beschrijft uitsluitend dynique.nl zelf: het contactformulier, WhatsApp-doorverwijzing, de gratis-checklist, en Cloudflare Pages als hostingpartij van de marketingsite (regel 252/364/504/610). In 679 regels staat geen woord over hostingopties, databeveiliging of architectuurkeuzes voor de systemen die Dynique daadwerkelijk vóór klanten bouwt — het eigenlijke verkochte product blijft juridisch volledig onbeschreven, terwijl Fase 3 en 4 van het procestraject (regel 853, 862) wél terloops 'staging-omgeving' en 'beveiliging' noemen zonder daar ooit naar te verwijzen.

**Award-winning oplossing.** Voeg een aparte sectie of losse pagina toe — 'Hoe we jouw software hosten en beveiligen' — die per project ingaat op: standaard gehanteerde hosting-opties met naam (bij voorkeur EU-regio benoemd), de securitybaseline (verplichte HTTPS, gescheiden staging/productie-omgevingen zoals Fase 3 al belooft, back-upfrequentie, toegangsbeheer per rol), en de afspraak dat definitieve keuzes per project als bijlage bij de offerte worden vastgelegd — zodat de vage 'Heldere offerte' uit Fase 1 een concrete technische bijlage krijgt. Link deze sectie expliciet vanuit de BOUWEN- en LIVE-fases van het procestraject op de homepage (regel 853 en 862), precies waar 'staging-omgeving' en 'beveiliging' nu loshangende woorden zijn zonder onderbouwing.

### 7. Eenmanszaak-structuur ('bus factor 1') wordt nergens erkend of geadresseerd — de enige plek die het onderwerp raakt, bevestigt het risico juist in plaats van het te verzachten {#enterprise-klant-met-securitycomplianceavg-eisen-eenmanszaak-structuur-bus-factor-1-wordt-nergens-erkend-of-geadresseerd-de-enige-plek-die-het-onderwerp-raakt-bevestigt-het-risico-juist-in-plaats-van-het-te-verzachten}

**Persona:** Vendor-risk-beoordelaar bij een grotere organisatie die een leveranciersbeoordeling afrondt als laatste stap vóór akkoord  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Hij controleert de KVK-gegevens in de footer ('Dynique is de handelsnaam van Creemers Inclusives', eenmanszaak, KVK 90531264) en bekijkt vervolgens /over-ons, waar precies één oprichtersfoto staat met het label 'OPRICHTER · DYNIQUE' en de tekst 'één vast aanspreekpunt dat je verhaal van binnen kent, van eerste gesprek tot lang na livegang.' Hij moet nu inschatten wat er gebeurt als deze ene persoon ziek wordt, met vakantie is, of stopt — met een bedrijfskritisch systeem in productie.

**Trust/behoefte-trigger.** 'Bus factor 1' is bij eenmanszaken een standaard afwijzingsgrond in formele leveranciersbeoordelingen, tenzij er een concreet, benoemd antwoord is — broncode-escrow, een vaste back-up-ontwikkelaar, een gedocumenteerd overdrachtsprotocol. Zonder dat antwoord is 'één vast aanspreekpunt' precies het woord dat het risico bevestigt in plaats van wegneemt.

**Wat er nu misgaat.** src/app/over-ons/page.tsx, regel 116-117, benadrukt actief 'één vast aanspreekpunt' als verkoopargument, zonder dat ergens continuïteit bij afwezigheid wordt geadresseerd. De homepage-FAQ raakt het onderwerp zelfs aan zonder het op te lossen: 'Wat gebeurt er na oplevering?' → 'Ik blijf bereikbaar... hetzelfde aanspreekpunt van dag één' (src/app/page.tsx, regel 240) — dit bevestigt het single-point-of-failure-beeld in plaats van het te verzachten. Nergens op de site staat een woord over escrow, een tweede developer, of een overdrachtsprotocol.

**Award-winning oplossing.** Voeg één eerlijke, concrete paragraaf toe aan /over-ons of als nieuw FAQ-item, in lijn met de merkwaarde 'eigenzinnig eerlijk': benoem welke continuïteitswaarborg daadwerkelijk bestaat of geboden kan worden — bijvoorbeeld broncode-escrow via een onafhankelijke derde partij, een vastgelegd overdrachtsprotocol dat standaard onderdeel is van de opleverdocumentatie in Fase 4 ('Livegang & beveiliging'-deliverable), of een vaste tweede developer die wordt ingeschakeld bij kritieke projecten boven een bepaalde omvang. Zelfs als het eerlijke antwoord 'klein team — daarom deze specifieke waarborg' is, verandert een concreet, benoemd antwoord een rode vlag in bewijs van precisie. Stilte doet het tegenovergestelde: bij een vendor-risk-beoordelaar wordt afwezigheid van antwoord automatisch geïnterpreteerd als afwezigheid van een plan.

### 8. Elk leadformulier op de site — homepage, contactpagina, alle sectorpagina's — heeft precies één verzendpad: de eigen WhatsApp van de bezoeker {#enterprise-klant-met-securitycomplianceavg-eisen-elk-leadformulier-op-de-site-homepage-contactpagina-alle-sectorpaginas-heeft-precies-n-verzendpad-de-eigen-whatsapp-van-de-bezoeker}

**Persona:** Compliance officer bij een financiële dienstverlener die het contactformulier test voordat ze een projectomschrijving met interne details deelt  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Ze vult het contactformulier op /contact in met een projectomschrijving die interne details bevat (huidige systemen, aantal medewerkers, procesknelpunten). Bij het klikken op 'VERSTUUR VIA WHATSAPP' ontdekt ze dat dit geen server-side verzending is: de knop opent `wa.me` met een vooraf ingevuld bericht, en zij moet het zelf, via haar eigen WhatsApp-account, naar een Nederlands mobiel nummer versturen.

**Trust/behoefte-trigger.** Voor een compliance-functie is 'verstuur bedrijfsgevoelige informatie via een consumenten-messaging-app vanaf je eigen account' al genoeg reden om af te haken vóór er ooit een beveiligingsgesprek plaatsvindt — niet omdat WhatsApp technisch onveilig is (het is end-to-end versleuteld, zoals de privacyverklaring zelf erkent), maar omdat het geen formeel, auditeerbaar zakelijk kanaal is en omdat het bericht via haar eigen persoonlijke account moet lopen.

**Wat er nu misgaat.** src/app/contact/page.tsx, functie `submit()` (regel 87-100), en identiek src/app/page.tsx, functie `handleWhatsAppSubmit()` (regel 150-162): er is precies één code-pad, `window.open` naar `wa.me`. Er bestaat geen alternatieve 'verstuur via e-mail'-optie op /contact, de homepage, of enige sectorpagina — elk leadformulier op de hele site (inclusief de vier `SectorTemplate`-formulieren) routeert uitsluitend via WhatsApp. De microcopy onder de knop ('Je bericht opent voorgevuld in WhatsApp — jij verstuurt zelf', regel 240-242) maakt het patroon zelfs expliciet zichtbaar in plaats van het te verzachten.

**Award-winning oplossing.** Voeg naast 'VERSTUUR VIA WHATSAPP' een zichtbare tweede knop toe: 'VERSTUUR VIA E-MAIL', die een `mailto:` opent met dezelfde vooraf samengestelde tekst — de variabele `m` in `submit()` bestaat al identiek voor beide kanalen, dus dit is vrijwel gratis te implementeren zonder nieuwe backend. Label hem expliciet voor bezoekers die een formeel, gearchiveerd kanaal verkiezen boven een persoonlijk WhatsApp-account voor een eerste zakelijk contact — een detail dat voor 90% van de bezoekers onzichtbaar blijft, maar voor deze compliance-persona het verschil is tussen invullen en wegklikken.

### 9. De reactietijd-belofte spreekt zichzelf tegen op exact dezelfde pagina — '2 uur' en '24 uur' staan allebei op /contact {#enterprise-klant-met-securitycomplianceavg-eisen-de-reactietijd-belofte-spreekt-zichzelf-tegen-op-exact-dezelfde-pagina-2-uur-en-24-uur-staan-allebei-op-contact}

**Persona:** Inkoper die leveranciers scoort op basis van kwantitatieve claims (SLA-achtige beloftes) als onderdeel van een vergelijkingsmatrix  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Ze noteert eerst 'REACTIETIJD: Binnen 2 uur (ma-za, 9-20u)' uit het detailblok links op /contact voor haar vergelijkingsmatrix, en leest twintig pixels verderop, in de introtekst van dezelfde sectie, 'We reageren altijd binnen 24 uur — meestal veel eerder.'

**Trust/behoefte-trigger.** Voor een inkoper die precies dit soort SLA-achtige claims gebruikt om leveranciers te scoren, is een interne tegenspraak op één pagina een reden om te twijfelen aan álle kwantitatieve claims op de site — inclusief de 'veilig'/'AVG-proof'-beweringen elders. Als 2 uur en 24 uur allebei 'waar' zijn, wat is dan de garantiewaarde van elk ander getal op de site?

**Wat er nu misgaat.** src/app/contact/page.tsx, regel 13 (`DETAILS`-array: 'Binnen 2 uur (ma–za, 9–20u)') spreekt regel 134 (herotekst: 'We reageren altijd binnen 24 uur — meestal veel eerder') rechtstreeks tegen, op exact dezelfde gerenderde pagina, binnen dezelfde `<section>`. Dit is geen nieuw probleem — het stond al gesignaleerd in docs/CRITIQUE-SITE-2026-07-14.md ('Minor Observations': '"2 uur" en "24 uur" reactietijd staan beide op dezelfde pagina') — en staat, ondanks de intussen doorgevoerde site-brede rebrand naar goud, nog altijd ongewijzigd live in de huidige code.

**Award-winning oplossing.** Kies één claim en gebruik die consequent overal: bijvoorbeeld 'Binnen 24 uur, vaak binnen 2 uur' als één gelaagde, eerlijke uitspraak, letterlijk toegepast op zowel regel 13 (`DETAILS`) als regel 134 (herotekst) van /contact, én consistent met het '24u'-statistiekblok in het conversieblok op de homepage. Dat een tegenspraak die al maanden bekend staat nog steeds live staat, is zelf een signaal — de fix is triviaal (twee regels), maar het feit dat hij nog niet is opgelost, is precies het soort slordigheid dat deze doelgroep als bewijs gebruikt tegen de rest van de claims op de site.

### 10. Het woord 'veilig' komt op minstens vijf plekken los voor zonder ooit naar een herkenbaar kader te verwijzen {#enterprise-klant-met-securitycomplianceavg-eisen-het-woord-veilig-komt-op-minstens-vijf-plekken-los-voor-zonder-ooit-naar-een-herkenbaar-kader-te-verwijzen}

**Persona:** Extern ingehuurde security-adviseur of CISO die een lichte due diligence uitvoert vóór een RFP-uitnodiging  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Hij doorzoekt de site op 'ISO', 'NEN', 'SOC', 'certificering' nadat hij het woord 'veilig'/'beveiliging' herhaaldelijk is tegengekomen — in de FAQ, in Fase 3 en 4 van Het Traject, op de zorgpagina, en in het 'Waarom Dynique'-verhaal — om te zien welk concreet beveiligingsniveau Dynique daadwerkelijk claimt.

**Trust/behoefte-trigger.** Het woord 'veilig' wordt herhaaldelijk als los bijvoeglijk naamwoord gebruikt zonder ooit te verankeren aan een herkenbaar kader. Voor een security-professional is dat een bekend patroon van vage veiligheidsclaims — het soort taal dat wantrouwen wekt juist omdat het zo vaak terugkomt zonder ooit specifieker te worden.

**Wat er nu misgaat.** Een repository-brede scan bevestigt: nul vermeldingen van ISO 27001, NEN 7510, SOC 2 of enig ander benoemd kader in de hele codebase. Tegelijkertijd komt 'veilig'/'beveiliging' losstaand minstens vijf keer voor in src/app/page.tsx alleen al: regel 171 ('snel, veilig en schaalbaar'), regel 237 (FAQ), regel 446 ('projectmatig, correct en veilig'), regel 853 ('toekomstbestendig en veilig') en regel 862/863 ('Livegang & beveiliging'). Vijf losse claims, nul onderbouwingen — voor een CISO is dat een duidelijker signaal dan één enkele vage zin zou zijn geweest.

**Award-winning oplossing.** Voeg één directe, met naam genoemde uitspraak toe die past bij de merkwaarde 'eigenzinnig eerlijk' — bijvoorbeeld: 'Geen ISO 27001-certificaat (dat past nog niet bij onze schaal) — wel toetsbare praktijken: versleutelde opslag, gescheiden test-/productieomgevingen, toegangsbeheer per project.' Plaats deze uitspraak prominent op de nieuwe `/vertrouwen`-pagina en herhaal een verkorte versie als tooltip of voetnoot bij elke losse 'veilig'-vermelding in Het Traject. Dit verandert een omissie die een CISO als ontwijkend leest, in een zelfverzekerde, onderscheidende erkenning — precies het soort directheid dat een jury zou onthouden als 'dit bedrijf durft het te zeggen', in plaats van het generieke 'wij nemen beveiliging serieus' dat elke concurrent ook schrijft.

### 11. De enige vage, ongedateerde, brongarantieloze rij in een verder precieze bewaartermijnen-tabel — en precies de rij die over de techniek achter de opgeleverde systemen zou moeten gaan {#enterprise-klant-met-securitycomplianceavg-eisen-de-enige-vage-ongedateerde-brongarantieloze-rij-in-een-verder-precieze-bewaartermijnen-tabel-en-precies-de-rij-die-over-de-techniek-achter-de-opgeleverde-systemen-zou-moeten-gaan}

**Persona:** AVG-verantwoordelijke die bewaartermijnen letterlijk overneemt in haar eigen verwerkingsregister, zoals wettelijk verplicht  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Ze leest Privacyverklaring §7 (Bewaartermijnen, src/app/privacyverklaring/page.tsx regel 327 e.v.) rij voor rij om de termijnen exact over te nemen in haar eigen verwerkingsregister, precies zoals de AVG voorschrijft.

**Trust/behoefte-trigger.** Elke andere rij in de tabel heeft een concreet getal (bijvoorbeeld contactformulierdata: 24 maanden; factuurdata: 7 jaar) — behalve de laatste rij, 'Technische hosting-/logdata', die op regel 354 zegt 'Conform het retentiebeleid van onze hostingpartner Cloudflare' zonder cijfer, zonder link naar de bron, en zonder één woord over back-upfrequentie of hersteltijd voor de daadwerkelijk opgeleverde klantsystemen.

**Wat er nu misgaat.** src/app/privacyverklaring/page.tsx, regel 354 (NL) en regel 600 (EN, 'In accordance with the retention policy of our hosting provider, Cloudflare'): de enige rij in een verder precieze tabel die haar eigen vraag terugkaatst zonder cijfer of bron. Voor een AVG-verantwoordelijke die de tabel letterlijk overneemt, is dit de ene rij die ze niet kan invullen zonder zelf verder te zoeken — een kleine frictie op zich, maar op de exact plek waar precisie het meest telt.

**Award-winning oplossing.** Vervang de vage delegatie door het daadwerkelijke, publiek gedocumenteerde retentiegetal van Cloudflare, met een hyperlink naar de brondocumentatie, en voeg één nieuwe rij toe specifiek over back-ups van opgeleverde klantsystemen (bijvoorbeeld 'dagelijkse back-up, 30 dagen terug te zetten' — af te stemmen op wat feitelijk klopt). Zo wordt de zwakste rij van de tabel de meest concrete, en sluit het meteen aan op de bredere hosting-transparantie die case 6 hierboven voorstelt.

### 12. Het gratis-checklist-formulier vraagt naam en e-mail zonder ergens op die pagina zelf een privacy-mededeling te tonen {#enterprise-klant-met-securitycomplianceavg-eisen-het-gratis-checklist-formulier-vraagt-naam-en-e-mail-zonder-ergens-op-die-pagina-zelf-een-privacy-mededeling-te-tonen}

**Persona:** Compliance-bewuste marketingmanager die de leadmagneet zelf test voordat ze hem intern aan een collega aanbeveelt  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Ze opent /gratis-checklist, vult naam en e-mailadres in om de PDF te downloaden, en kijkt uit professionele gewoonte direct bij het formulier naar een korte privacy-mededeling of link vóórdat ze op de downloadknop klikt.

**Trust/behoefte-trigger.** Bij elk professioneel leadformulier verwacht een AVG-bewuste gebruiker een zichtbare, korte mededeling direct bij het formulier zelf ('we gebruiken dit alleen om de checklist te versturen, zie ons privacybeleid') — niet pas terugvindbaar via een aparte navigatiestap naar een ander document.

**Wat er nu misgaat.** Privacyverklaring §3.3 bevestigt dat het checklist-formulier naam en e-mail verzamelt, maar dat staat uitsluitend in het aparte juridische document. Het formulier zelf op /gratis-checklist bevat geen inline privacy-mededeling of -link op het moment van invullen — de enige uitleg is meerdere kliks verderop, in een hoofdstuk van een 679-regel document dat de meeste bezoekers nooit openen vóór ze op verzenden klikken. Bovendien bevestigt de code zelf (regel 39: `// In productie: stuur naam + e-mail ook naar API/Mailchimp/Resend.`) dat deze gegevens momenteel nergens automatisch worden verwerkt — een tweede, functioneel probleem naast het ontbrekende vertrouwenssignaal.

**Award-winning oplossing.** Voeg direct onder de verzendknop op /gratis-checklist één regel microcopy toe: 'We gebruiken je gegevens alleen om deze checklist te versturen — nooit voor iets anders. [Privacyverklaring →]'. Deze ene zin, precies op het moment van gegevensverzameling, bouwt disproportioneel veel vertrouwen op bij deze persona tegen vrijwel geen bouwkosten — en hoort logisch samen te gaan met het oplossen van de bekende, losstaande e-mail-doorstuur-bug, zodat het formulier niet alleen vertrouwenwekkend oogt maar ook daadwerkelijk werkt.

### 13. Geen enkele 'Vertrouwen', 'Zekerheid' of 'Security'-ingang bestaat in navigatie of footer — alle trust-content op de hele site past in drie losse zinnen {#enterprise-klant-met-securitycomplianceavg-eisen-geen-enkele-vertrouwen-zekerheid-of-security-ingang-bestaat-in-navigatie-of-footer-alle-trust-content-op-de-hele-site-past-in-drie-losse-zinnen}

**Persona:** Directeur/eindbeslisser bij een groter bedrijf die tussen twee meetings door zelf een snelle vertrouwenscheck doet  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Met vijf minuten tussen twee meetings opent hij de homepage, scant het menu (Diensten, Portfolio, Over ons, Blog, Contact) op zoek naar iets als 'Zekerheid', 'Vertrouwen' of 'Security', vindt niets, en sluit het tabblad.

**Trust/behoefte-trigger.** PRODUCT.md's eigen geloofsladder vereist als allereerste stap: 'er zit echte technische kennis achter — opleiding, projectmatige en veilige manier van werken.' Een snel scannende eindbeslisser die dat nergens gestructureerd terugvindt, ervaart precies het probleem dat de eigen merkbriefing beschrijft — niet omdat het bewijs niet zou bestaan, maar omdat het nergens bij elkaar staat.

**Wat er nu misgaat.** Dit is de optelsom van elk los gat hierboven: alle trust/security-relevante content op de hele site bestaat uit één FAQ-antwoord van twee zinnen (homepage, regel 237), één losse zin in Fase 4 van Het Traject (regel 862), en één hoofdstuk diep in een 679-regel juridisch document dat uitsluitend de marketingsite dekt. src/components/Header.tsx en Footer.tsx bevatten geen enkele link naar iets dat lijkt op een trust- of security-overzicht — de footer-juridische-rij (Footer.tsx regel 143-145) bevat precies één link, naar Privacyverklaring.

**Award-winning oplossing.** Bouw een aparte `/vertrouwen`-pagina, gelinkt in de Header-navigatie naast Diensten/Portfolio/Over ons én in de footer-juridische-rij naast Privacyverklaring op alle routes tegelijk — met in scanbare, editoriale vorm (consistent met de rest van de site's precisie-esthetiek, geen los PDF-document): data-eigendom & broncode (de bestaande FAQ-belofte 'blijft van jou' geformaliseerd), hosting- en infrastructuurkeuzes per project, de verwerkersovereenkomst-aanpak, een eerlijk geschaald beveiligingsniveau zonder overclaims, en de continuïteitswaarborgen bij een klein team. Deze ene pagina is het concrete, bouwbare antwoord op vrijwel elk ander los verbetervoorstel in deze lijst — elk ervan wordt er een sectie in, in plaats van een losstaande lap tekst die nergens vindbaar is. Voor een jury is dit precies het soort structurele oplossing die 'doordacht en precies' voelt in plaats van een verzameling patches.

### 14. De Aken-pagina claimt expliciet DSGVO/Impressum-expertise als eigen verkoopargument — maar de site zelf levert geen van beide {#enterprise-klant-met-securitycomplianceavg-eisen-de-aken-pagina-claimt-expliciet-dsgvoimpressum-expertise-als-eigen-verkoopargument-maar-de-site-zelf-levert-geen-van-beide}

**Persona:** Duitse compliance-verantwoordelijke bij een Akense zorgpraktijk of RWTH-spin-off die de Aken-locatiepagina test op geloofwaardigheid  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Ze leest de volledig Duitstalige /locaties/aken-pagina en ziet de expliciete belofte in de FAQ: 'Wir kennen die Unterschiede in... rechtlichen Anforderungen (Impressum, DSGVO)... diese fließen direkt in Design und Texte ein.' Om deze belofte te toetsen, klikt ze door naar Dynique's eigen juridische pagina's om te zien of het bedrijf zijn eigen advies opvolgt.

**Trust/behoefte-trigger.** Een Duitse zakelijke bezoeker verwacht op een site die expliciet 'Impressum' en 'DSGVO' als eigen expertise claimt, minstens een Duitstalige versie van de eigen privacyverklaring — of een eigen Impressum, wettelijk verplicht voor elk Duits-gerichte commerciële site (§5 TMG) — te vinden. Het ontbreken daarvan is geen neutraal gat maar een directe, zelfveroorzaakte tegenspraak tussen belofte en praktijk, op de pagina die specifiek bedoeld is om Duitse klanten te overtuigen.

**Wat er nu misgaat.** src/app/locaties/aken/page.tsx, regel 40 (FAQ-item 3), noemt expliciet 'Impressum, DSGVO' als geclaimde expertise. src/app/privacyverklaring/page.tsx biedt uitsluitend een NL/EN-toggle (regel 98-152, met `ContentNL`/`ContentEN`-componenten) — nergens in de codebase bestaat een DE-variant, en er is geen apart Impressum-document. Voor een Duitse bezoeker die exact de claim test die de pagina zelf maakt, is het resultaat een directe tegenspraak binnen twee kliks.

**Award-winning oplossing.** Voeg een derde 'DE'-toggle toe aan de bestaande tweetalige privacyverklaring-component — het taalwissel-patroon (`isNl` state, regel 98-112) bestaat al, dus dit is additief bouwwerk, geen herbouw — en voeg een compact, wettelijk correct Impressum-blok toe (Diensteanbieter, vertretungsberechtigte Person, btw-status/Reverse-Charge zoals de Aken-FAQ zelf al noemt, Streitschlichtungshinweis), bereikbaar met één klik vanaf de Aken-pagina zelf. Zo wordt de eigen claim van de Aken-pagina in twee kliks te verifiëren in plaats van hol te blijken — precies het detail dat een cross-border B2B-koper als bewijs van 'ze snappen onze markt echt' zou lezen, in plaats van als gemiste lokale huiswerkopdracht.

### 15. Geen `security.txt` op de RFC 9116-standaardlocatie, en geen enkele gestructureerde meldprocedure voor kwetsbaarheden {#enterprise-klant-met-securitycomplianceavg-eisen-geen-securitytxt-op-de-rfc-9116-standaardlocatie-en-geen-enkele-gestructureerde-meldprocedure-voor-kwetsbaarheden}

**Persona:** IT-security-medewerker bij een grotere klant die een gestandaardiseerde leveranciers-onboardingcheck uitvoert  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Als vast, geautomatiseerd onderdeel van leveranciersonboarding probeert hij `/.well-known/security.txt` te openen — de RFC 9116-standaardlocatie die security-teams routinematig checken, vaak via een geautomatiseerde scan — en zoekt daarnaast handmatig naar een 'Kwetsbaarheid melden'-pagina of -link.

**Trust/behoefte-trigger.** Het bestaan of ontbreken van een `security.txt` is voor deze persona een bekende, snelle proxy-indicator: 'neemt deze partij informatiebeveiliging serieus als proces, niet alleen als marketingwoord.' Het is precies het soort onzichtbaar-achter-de-schermen-bewijs dat aansluit bij de merkwaarde 'bewijs door precisie, niet door beloftes' uit PRODUCT.md — een klein technisch detail dat een technisch publiek wél opmerkt.

**Wat er nu misgaat.** Een controle van de `public`-map (waar `robots.txt` en `_headers` al staan) en van de repository bevestigt: er bestaat geen `/.well-known/security.txt` en geen vulnerability-disclosure- of 'meld een kwetsbaarheid'-pagina op dynique.nl. Voor een geautomatiseerde onboardingcheck resulteert dit in een stille 404 — geen waarschuwing, geen signaal, gewoon afwezigheid.

**Award-winning oplossing.** Publiceer een minimale, eerlijke `security.txt` (RFC 9116) op `/.well-known/security.txt` met contact `info@dynique.nl` en een korte beleidsregel over reactietermijn bij een melding, en voeg een kleine footer-regel toe ('Kwetsbaarheid gevonden? Meld het →') die naar hetzelfde contactpunt verwijst. Een kleine, goedkope toevoeging (één statisch bestand, geen backend nodig) die precies het soort precisie-signaal geeft waar deze technische sub-persona standaard op screent — en die, in combinatie met de `/vertrouwen`-pagina, het beeld van een technisch volwassen partij compleet maakt zonder dat er ooit overclaimd wordt.

---

## Bezoeker op oud device / traag netwerk / verouderde browser

### 1. Eén ontbrekende feature-check maakt 20+ IntersectionObserver-instanties sitewide onzichtbaar {#bezoeker-op-oud-device-traag-netwerk-verouderde-browser-en-ontbrekende-feature-check-maakt-20-intersectionobserver-instanties-sitewide-onzichtbaar}

**Persona:** Planningsmedewerker bouwbedrijf op een 5 jaar oude, zaak-uitgedeelde Samsung-tablet (Android 8, nooit bijgewerkte System WebView)  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Het is kwart voor negen 's avonds. De planner van een bouwbedrijf zit op de bank met de zaaktablet die de directie drie jaar geleden heeft uitgedeeld — nooit geüpdatet, want 'hij doet het nog'. Ze heeft net 'maatwerk software bouwbedrijf' gegoogeld voor de aannemersvergadering van morgenochtend, dynique.nl staat op nummer twee, en ze wil in twee minuten weten of dit de moeite waard is om aan de directeur voor te leggen.

**Trust/behoefte-trigger.** Ze wil zien: wat doet Dynique precies, en oogt het portfolio serieus genoeg om er morgen haar naam aan te verbinden. Geen tijd, geen geduld voor een site die niet meteen laat zien wat er te zien is.

**Wat er nu misgaat.** Dit is geen incident maar een patroon: `new IntersectionObserver(...)` wordt zonder enige feature-detectie gebruikt op minstens 20 plekken in 15 bestanden — page.tsx (regel 24 en 100), CaseStudyTemplate.tsx (regel 63 en 121), Advisor.tsx (regel 179), CityPage.tsx, BlogPost.tsx, Visuals.tsx (regel 238), en bijna elke /diensten- en /locaties-pagina. Overal dezelfde CSS-basisstaat: `.anim`/`.cs-anim` begint op `opacity:0; transform:translateY(32px)` en wordt pas zichtbaar zodra de observer vuurt. Op de oude WebView van deze tablet — waar `IntersectionObserver` ontbreekt of onbetrouwbaar is — blijft op elke pagina alles behalve de allereerste sectie een lege pagina: het manifesto, de drie pijlers, de before/after-demo, de Adviseur, het contactformulier. Vijftien losse implementaties van dezelfde bug betekent vijftien plekken waar een toekomstige wijziging opnieuw kan breken.

**Award-winning oplossing.** Vervang niet 15 losse patches, maar de architectuur zelf: bouw één gedeelde `useRevealOnScroll()`-hook — het patroon dat in Visuals.tsx al deels bestaat — die als enige plek in de codebase een `IntersectionObserver` aanmaakt, met ingebouwde `typeof IntersectionObserver === 'undefined'`-detectie én een 3-seconden watchdog-`setTimeout` die alsnog alle `.anim`-elementen forceert te tonen bij een onverwachte crash elders. Refactor alle 15 bestanden om deze ene hook te gebruiken in plaats van hun eigen observer-instantie. Het resultaat is niet alleen een bugfix maar een meetbare reductie van duplicate logica — precies het soort systemisch, doordacht werk dat een technische beoordelaar in de devtools of broncode zou herkennen als het tegenovergestelde van een haastig gebouwde bureausite.

### 2. Eén onbeveiligde sessionStorage-call houdt de hele homepage permanent achter een laadscherm {#bezoeker-op-oud-device-traag-netwerk-verouderde-browser-en-onbeveiligde-sessionstorage-call-houdt-de-hele-homepage-permanent-achter-een-laadscherm}

**Persona:** Facilitair inkoper bij een zorginstelling op een MDM-beheerde iPad met site-opslag standaard geblokkeerd  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** De inkoper opent dynique.nl tussen twee vergaderingen door op de instellings-iPad — strak beheerd via Mobile Device Management, zoals in de zorg gebruikelijk is, met cookies en site-opslag standaard geblokkeerd voor elke niet-goedgekeurde site. Ze wil vijf minuten hebben om te beoordelen of dit een partij is om voor te stellen aan de directie voor het vervangen van hun verouderde planningssysteem.

**Trust/behoefte-trigger.** De allereerste indruk moet vertrouwen wekken in een technisch onderlegde partij — in plaats daarvan blijft het scherm zwart, met alleen 'MAATWERK SOFTWARE & DEVELOPMENT' en een voortgangsbalk die naar 100% loopt maar nooit verdwijnt.

**Wat er nu misgaat.** page.tsx regel 85-97: `sessionStorage.getItem('dq-intro-seen')` en `sessionStorage.setItem(...)` staan kaal, zonder try/catch, in de intro-`useEffect`. Op een browser die site-opslag blokkeert gooit `setItem` een `SecurityError`; de rest van de callback — inclusief de `setTimeout`'s die `setLoading(false)` triggeren — wordt nooit uitgevoerd. De `fixed z-[9999]`-overlay (regel 262) blijft voor altijd zichtbaar. De volledige homepage bestaat technisch onder de overlay, maar is voor deze bezoeker nooit bereikbaar, scrollbaar of klikbaar — een compleet dichtgetimmerde site door één ontbrekende foutafhandeling.

**Award-winning oplossing.** Omhul de sessionStorage-calls met try/catch, en ontkoppel de fallback volledig van opslaglogica: een vaste `setTimeout(() => setLoading(false), 2200)` die altijd loopt, ongeacht of sessionStorage werkt. Voeg daarbovenop een interactie-vluchtstrook toe die nergens anders op de site bestaat maar hier het verschil maakt: maak de hele loadscreen zelf klikbaar/tikbaar als directe 'sla intro over'-actie, zichtbaar na 400ms als een subtiele `ESC / TIK OM OVER TE SLAAN`-hint rechtsonder. Dat lost niet alleen dít specifieke opslag-scenario op, maar elke toekomstige reden waarom de intro ooit vastloopt — de bezoeker houdt zelf de regie, in plaats van afhankelijk te zijn van code die feilloos moet zijn.

### 3. De echte klikbare knop op het conversiemoment hangt af van dezelfde bundel als de Adviseur-quiz {#bezoeker-op-oud-device-traag-netwerk-verouderde-browser-de-echte-klikbare-knop-op-het-conversiemoment-hangt-af-van-dezelfde-bundel-als-de-adviseur-quiz}

**Persona:** Zzp-installateur op een instapmodel Android-telefoon (Android Go, 2GB RAM) tijdens de lunchpauze op de bouwplaats  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Hij zit op een omgekeerde emmer bij de bouwkeet, telefoon in de zon, 4G dat wegzakt naar 3G zodra er een vrachtwagen passeert. Hij heeft net het contactformulier onderaan de homepage ingevuld — naam, bedrijf, projectomschrijving — en tikt op 'VERSTUUR VIA WHATSAPP'. Er gebeurt niets. Hij tikt nogmaals. Nog steeds niets.

**Trust/behoefte-trigger.** Dit is het moment van hoogste intentie op de hele pagina — het formulier is af, de beslissing is genomen — en precies dan reageert de site niet. Een onbetrouwbare knop op het conversiemoment ondermijnt in twee seconden alles wat 'technisch onderlegd' had moeten uitstralen.

**Wat er nu misgaat.** De twee elementen die er in de eerste seconden na laden het meest toe doen — de sticky WhatsApp-knop (regel 307-326) en de hero-CTA's (regel 386-391) — zijn gelukkig platte `<a href>`-tags die al zonder JavaScript werken. Het échte knelpunt zit verderop: de 'VERSTUUR VIA WHATSAPP'-knop in het contactformulier (regel 1344-1352) draait op `onClick={handleWhatsAppSubmit}`, en de hele Adviseur-quiz (Advisor.tsx, 662 regels) en FAQ-accordeon delen dezelfde monolithische clientbundel als de rest van de homepage — page.tsx regel 1 begint met `"use client"` zonder één `next/dynamic`-split. Op een Android Go-toestel met 2GB RAM kan het parsen en hydrateren van die ene bundel ná de eerste verf nog seconden main-thread blokkeren. De pagina oogt klaar, het formulier oogt ingevuld, maar de knop die het daadwerkelijk verstuurt luistert nog niet.

**Award-winning oplossing.** Splits de Adviseur-quiz en FAQ-accordeon los met `next/dynamic(() => import(...), { ssr: true })` zodat hun hydratatie ná het contactformulier komt, niet ervoor. Geef het formulier zelf, inclusief de verstuurknop, een eigen minimale wrapper die als eerste in de hydratatievolgorde staat — vóór de Adviseur, vóór de portfolio-videokaarten. Voeg daarnaast een zichtbare micro-state toe die ontbreekt op de hele site: zodra de knop is aangeklikt maar de handler nog niet is bevestigd (bijvoorbeeld tijdens hydratatie), toont hij direct een subtiele pulse-animatie in plaats van niets te doen — de bezoeker krijgt bevestiging dat de tik is geregistreerd, ook al moet de daadwerkelijke actie nog een fractie van een seconde wachten. Dat is het verschil tussen 'de site lijkt kapot' en 'de site is nog aan het opstarten, en zegt dat ook'.

### 4. Het zwaarste videobestand van de hele portfolio (2,4MB) is precies degene zonder posterframe {#bezoeker-op-oud-device-traag-netwerk-verouderde-browser-het-zwaarste-videobestand-van-de-hele-portfolio-24mb-is-precies-degene-zonder-posterframe}

**Persona:** Bezoeker die vanaf de homepage doorklikt naar de Auwt Aelse-case terwijl het mobiele netwerk wegvalt naar 3G  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Vanaf de homepage-portfoliokaart klikt de bezoeker op 'AUWT AELSE' door naar `/portfolio/auwt-aelse` — precies op het moment dat de metro een tunnel in rijdt en de verbinding van 4G naar 3G zakt. De pagina laadt, de hero-sectie verschijnt, en dan: een zwart vlak waar het bewijsmateriaal had moeten staan.

**Trust/behoefte-trigger.** Dit is exact de pagina die belief-ladder-stap 3 uit het merkverhaal moet waarmaken: 'het bestaande portfolio bewijst dat dit vakmanschap al wordt geleverd'. Een minutenlang zwart vlak op precies dit bewijsmoment ondermijnt het enige harde argument dat de site heeft.

**Wat er nu misgaat.** CaseStudyTemplate.tsx regel 56-81 (`ScrollAwareVideo`) gebruikt `IntersectionObserver({rootMargin:'200px'})`. Omdat de hero altijd bovenaan de pagina staat, valt hij meteen binnen die marge en begint `/rsc/auwtaelse/preview.mp4` — met 2,4MB het zwaarste losse videobestand in de hele portfolio, ruim vijf keer groter dan bijvoorbeeld de Stacy Kohnen-preview (235KB) — direct te laden en af te spelen. Er is geen `poster`-attribuut, geen statisch eerste frame, geen `navigator.connection`-check nergens in de codebase. Op 3G toont juist de zwaarste case in het portfolio, op het moment dat het er het meest toe doet, het langst niets.

**Award-winning oplossing.** Voeg aan `ScrollAwareVideo` een `poster="/rsc/<case>/hero-poster.webp"` toe (één scherp stilstaand frame, onder de 30KB) zodat er altijd direct beeld staat. Ga verder dan alleen tonen: check `navigator.connection?.saveData || /2g|3g/.test(navigator.connection?.effectiveType || '')`, en toon in dat geval de poster met een knop die niet alleen 'afspelen' zegt maar het bestand eerlijk labelt — 'Bekijk de tour (2,4MB)' — zodat de bezoeker zelf beslist of hij dat downloadt op zijn databundel. Dat kleine stukje transparantie over bestandsgrootte is precies het soort ongevraagd meedenken dat het merk claimt te bieden aan klanten in hún systemen, nu zichtbaar toegepast op de eigen site — bewijs door precisie, niet door belofte.

### 5. Dezelfde onbeschermde `window.open()`-aanroep zit gekopieerd in minstens acht bestanden {#bezoeker-op-oud-device-traag-netwerk-verouderde-browser-dezelfde-onbeschermde-windowopen-aanroep-zit-gekopieerd-in-minstens-acht-bestanden}

**Persona:** Locatiemanager logistiek bedrijf die de link opent via de ingebouwde LinkedIn-browser op een ouder Android-toestel  
**Prioriteit:** 🔴 P0 — kritiek

**Situatie.** Ze heeft dynique.nl gedeeld gekregen via een LinkedIn-bericht en opent de link zonder eruit te stappen naar Chrome — de link opent in LinkedIn's ingebouwde in-app-browser, zoals de meeste mensen dat doen. Ze vult het formulier in, tikt op 'VERSTUUR VIA WHATSAPP' — en er gebeurt niets zichtbaars.

**Trust/behoefte-trigger.** Op het moment van hoogste koopintentie — formulier ingevuld, beslissing genomen — reageert de knop niet, en er is geen enkele andere zichtbare ingang om alsnog contact te leggen. Ze sluit het tabblad, twijfelend of de site het wel serieus meende.

**Wat er nu misgaat.** Dezelfde kwetsbare regel — `window.open(url, "_blank")` zonder foutdetectie — staat letterlijk gekopieerd in minstens acht bestanden: page.tsx (regel 161), contact/page.tsx (regel 99), eerste-website/page.tsx (regel 56), vervanging/page.tsx (regel 56), diensten/processen/page.tsx (regel 272), diensten/processen/limburg/page.tsx (regel 40), en SectorTemplate.tsx (regel 57, dus effectief op alle vier /maatwerk-software/-sectorpagina's). Dit is precies waar `window.open` het vaakst faalt: in-app-browsers (LinkedIn, Instagram, Outlook-linkpreviews) en oudere popup-blockers. Nergens in die acht plekken staat een zichtbaar telefoonnummer of alternatief als de aanroep faalt — de knop lijkt gewoon dood, en dat op elke pagina van de site tegelijk.

**Award-winning oplossing.** Los dit niet acht keer apart op, maar één keer: bouw een gedeelde `openWhatsApp(message)`-utility in `src/lib/` die overal de acht losse aanroepen vervangt. De utility detecteert falen via `const win = window.open(url, '_blank'); if (!win || win.closed) { ... }` en toont bij mislukking direct onder de knop een altijd-zichtbare regel: 'Geen WhatsApp? Bel +31 6 24572572 of mail info@dynique.nl', met een `tel:`-link. Voeg daarnaast, als kleine maar merkbare toevoeging, automatische in-app-browserdetectie toe (`navigator.userAgent` op bekende patronen zoals LinkedIn/Instagram/FBAN) die de fallback proactief tóónt vóórdat de gebruiker zelfs klikt — de site herkent dan zelf dat het in een omgeving draait waar WhatsApp waarschijnlijk niet gaat werken, in plaats van de gebruiker eerst te laten falen.

### 6. Header.tsx is de enige plek in de codebase die zijn eigen scroll-listener-regels breekt {#bezoeker-op-oud-device-traag-netwerk-verouderde-browser-headertsx-is-de-enige-plek-in-de-codebase-die-zijn-eigen-scroll-listener-regels-breekt}

**Persona:** IT-coördinator zorginstelling die op een verouderde Android-telefoon snel door de sectorpagina scrolt  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Ze scrolt vlot door `/maatwerk-software/zorg` op zoek naar het antwoord op één vraag: doet Dynique dit al vaker in de zorg? Haar telefoon is drie jaar oud, de GPU is niet sterk, en elke scrollbeweging hapert zichtbaar — precies tijdens het lezen van de sectie die vertrouwen moet opbouwen.

**Trust/behoefte-trigger.** Haperend scrollen tijdens exact het gedeelte dat bewijs en traject moet laten zien voelt goedkoop en onprofessioneel — het tegenovergestelde van 'technisch onderlegd', en dat op een pagina die specifiek voor haar sector is gebouwd.

**Wat er nu misgaat.** Header.tsx regel 34-38: `window.addEventListener("scroll", handleScroll)` zonder throttle, zonder requestAnimationFrame, en zonder `{passive: true}`. Elke scroll-pixel triggert een React state-update (`setScrollY`) die alleen gebruikt wordt om bij 50px een achtergrondkleur te wisselen (regel 106-108) — een boolean-beslissing die tientallen keren per seconde wordt herberekend. Het bijzondere: elders in dezelfde codebase staat het wél goed — Visuals.tsx (regel 271-272) en diensten/processen/page.tsx (regel 254-255) gebruiken beide expliciet `{passive: true}` voor hun eigen scroll-listeners. Header.tsx, dat op letterlijk elke pagina van de site staat, is de enige uitzondering op het eigen team-patroon.

**Award-winning oplossing.** Breng Header.tsx in lijn met het patroon dat de rest van de codebase al hanteert: `{passive: true}`, en vervang de continue `scrollY`-state door een boolean `isScrolled` die alleen bij het passeren van de 50px-drempel update. Ga daarna een stap verder dan throttling: vervang de listener volledig door een 1px-hoge, onzichtbare 'sentinel'-div net onder de 50px-lijn, geobserveerd via dezelfde `useRevealOnScroll`-infrastructuur (zie case 1) — de header verandert dan puur op basis van een IntersectionObserver-callback, zonder ooit een scroll-event te lezen. Dat is niet alleen sneller maar aantoonbaar eleganter: nul React re-renders tijdens scrollen, in plaats van tientallen per seconde teruggebracht naar een handvol.

### 7. Vier videokaarten in de portfoliogrid starten vrijwel gelijktijdig, samen 3,6MB {#bezoeker-op-oud-device-traag-netwerk-verouderde-browser-vier-videokaarten-in-de-portfoliogrid-starten-vrijwel-gelijktijdig-samen-36mb}

**Persona:** Installatiebedrijf-eigenaar op onderweg-4G/3G die de homepage scrollt op zoek naar bewijs  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Hij scrolt vanaf de hero naar de portfoliosectie ('GESELECTEERD WERK') op de homepage, in de auto tussen twee klussen door, 4G dat constant wisselt met 3G. Vier videokaarten naderen bijna tegelijk de onderkant van zijn scherm.

**Trust/behoefte-trigger.** Hij wil het bewijsmateriaal snel scannen voordat hij besluit het contactformulier in te vullen — een haperende, half geladen sectie op precies dit punt duwt hem terug naar de zoekresultaten in plaats van naar beneden naar het formulier.

**Wat er nu misgaat.** page.tsx regel 17-40 (`PortfolioVideo`) past dezelfde `rootMargin: '200px'`-truc toe op alle vier kaarten in de grid: Chefs Connect (505KB), Auwt Aelse (2,4MB), IJssalon Italia (~440KB) en Stacy Kohnen (~235KB) — samen ongeveer 3,6MB die vrijwel gelijktijdig beginnen te laden zodra de sectie in beeld komt. Geen prioritering tussen de uitgelichte case en de drie kleinere kaarten, geen stagger, geen data-saver-check. Op 3G verdringt dit de assets die er verderop meer toe doen: de Adviseur-quiz, het contactformulier, de FAQ.

**Award-winning oplossing.** Laat alleen de uitgelichte case (Chefs Connect, al apart gerenderd in regel 1059-1109) automatisch autoplayen; render de overige drie als statische `.webp`-thumbnail met een subtiele play-indicator die pas bij een tik daadwerkelijk het `<video>`-element mount. Dat reduceert de initiële videobelasting van 3,6MB naar circa 0,5MB. Voeg als onderscheidend detail een korte, hand-getekende gouden 'scanlijn'-animatie toe die over de drie statische thumbnails trekt bij het in beeld komen — een subtiele visuele hint dat er 'meer leeft' onder de stilstaande beelden, zodat het ontbreken van autoplay niet aanvoelt als een tekortkoming maar als een bewuste, rustige presentatiekeuze die bij het merk past.

### 8. 14 kale `<img src="....webp">`-tags in 6 bestanden tonen kapotte icoontjes op pre-2020 Safari {#bezoeker-op-oud-device-traag-netwerk-verouderde-browser-14-kale-img-srcwebp-tags-in-6-bestanden-tonen-kapotte-icoontjes-op-pre-2020-safari}

**Persona:** Bouwbedrijf-directeur op een oudere iPad (iOS 13, niet meer bijgewerkt) — gangbaar op een bouwkantoor  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Hij bekijkt `/portfolio` op de vaste kantoor-iPad — een toestel dat al jaren 'gewoon werkt' en daarom nooit is bijgewerkt — om te beoordelen of Dynique al vergelijkbaar werk heeft geleverd voor een bedrijf zoals het zijne.

**Trust/behoefte-trigger.** Precies het bewijsmateriaal waar belief-ladder-stap 3 op leunt moet foutloos tonen. Een ontbrekende afbeelding op de portfoliopagina leest niet als 'pech met een browser', maar als 'dit bedrijf test zijn eigen site niet op wat klanten daadwerkelijk gebruiken'.

**Wat er nu misgaat.** 14 losse `<img src="....webp">`-tags in 6 bestanden — page.tsx (3x), portfolio/page.tsx, over-ons/page.tsx, portfolio/stacy-kohnen (2x), portfolio/creemers-exclusive (3x) en portfolio/ijssalon-italia (4x) — gebruiken geen `<picture>`+jpg-fallback. next.config.ts regel 11-13 zet `images: { unoptimized: true }`, verplicht bij `output: 'export'`, dus er is ook geen automatische Next.js-formaatnegotiatie die dit zou kunnen compenseren. Op Safari ouder dan versie 14 (iOS 13 en eerder, nog altijd aanwezig op oudere kantoor-iPads) breekt elke portfolio-thumbnail zichtbaar tot een kapot-plaatje-icoon.

**Award-winning oplossing.** Het project heeft al een werkend build-script voor dit exact type probleem: `scripts/compress-hero-images.mjs` gebruikt `sharp` om PNG's naar WebP te converteren met een array van `[bron, doel, breedte, kwaliteit, budget]`-tuples en een ingebouwde budget-waarschuwing per bestand. Breid dít script uit — niet een nieuw script ernaast — zodat elke tuple ook automatisch een `.jpg`-variant genereert naast de `.webp`. Render vervolgens overal waar portfoliobeeld getoond wordt `<picture><source srcset="....webp" type="image/webp"/><img src="....jpg" alt="..."/></picture>`. Omdat het script al per bestand rapporteert of iets 'over budget' gaat, is de fallback-generatie in feite gratis: dezelfde build-stap die nu al de WebP-kwaliteit bewaakt, bewaakt straks ook de compatibiliteit.

### 9. `aspect-ratio` zonder fallback laat het enige interactieve bewijsmoment van de homepage instorten tot 0px {#bezoeker-op-oud-device-traag-netwerk-verouderde-browser-aspect-ratio-zonder-fallback-laat-het-enige-interactieve-bewijsmoment-van-de-homepage-instorten-tot-0px}

**Persona:** Logistiek-planner op een bedrijfslaptop met een oude, door IT-beleid bevroren Chrome-versie  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Hij bekijkt de homepage-manifesto-sectie (de oprichtersfoto) en de scroll-scrubbed voor/na-demo — het kernverhaal 'wij denken mee' — op een kantoorlaptop waarvan de browserversie is bevroren door het IT-beleid van het bedrijf, ruim voorbij het punt waarop nieuwe CSS-features worden ondersteund.

**Trust/behoefte-trigger.** De voor/na-demo is het enige interactieve bewijsmoment op de hele homepage voor 'wij bouwen het anders'. Als die kapot oogt, valt het sterkste, meest onderscheidende argument van de pagina volledig weg — precies op het moment dat het zou moeten overtuigen.

**Wat er nu misgaat.** `aspectRatio`/`aspect-[...]` staat op minstens 13 plekken in 8 bestanden — page.tsx (regel 478, 554, 1078, 1140), portfolio/page.tsx, over-ons/page.tsx, diensten/page.tsx, diensten/processen/page.tsx, diensten/processen/limburg/page.tsx, SectorTemplate.tsx, CaseStudyTemplate.tsx en Visuals.tsx — zonder één expliciete `min-height`-fallback. De CSS-property `aspect-ratio` werkt pas sinds ongeveer 2021 (Chrome 88 / Safari 15); op een oudere, door beleid bevroren browserversie wordt de eigenschap simpelweg genegeerd en klappen deze containers — oprichtersfoto, videokaders, en met name de voor/na-demo zelf (regel 554) — samen tot 0px hoogte. De belangrijkste sectie van de site verdwijnt letterlijk.

**Award-winning oplossing.** Voeg geen blanket-`min-height` overal toe — dat verstoort het beeldverhoudingsdesign onnodig op moderne browsers. Gebruik in plaats daarvan een gerichte `@supports not (aspect-ratio: 1 / 1) { .ba-window, .photo-diag-reveal, [style*="aspectRatio"] { min-height: clamp(200px, 40vw, 500px); } }`-regel die alléén actief wordt wanneer de browser de property daadwerkelijk niet ondersteunt — zichtbaar, bruikbaar, zonder het ontwerp op moderne toestellen ook maar één pixel te raken. Dat surgical gebruik van `@supports` in plaats van een universele vangnet-regel is precies het soort precisie dat het merk claimt te leveren: de juiste oplossing voor het juiste scenario, niet een grove pleister overal.

### 10. Een oneindige mousemove-parallaxlus draait de hele sessie door voor exact nul zichtbaar effect {#bezoeker-op-oud-device-traag-netwerk-verouderde-browser-een-oneindige-mousemove-parallaxlus-draait-de-hele-sessie-door-voor-exact-nul-zichtbaar-effect}

**Persona:** Zorginstelling-inkoper op een oudere Android-telefoon met batterijbesparingsmodus aan  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Ze opent de homepage op haar telefoon, batterijbesparingsmodus actief omdat ze de rest van de dag nog nodig heeft. De hero-orbs 'bewegen' zogenaamd mee met de muis, terwijl ze op een touchscreen leest en nooit een muis aanraakt.

**Trust/behoefte-trigger.** Geen zichtbaar effect, wel voelbare vertraging en versnelde batterijafname — precies het tegenovergestelde van een doordacht, precies gebouwd product, en op een moment dat ze juist test of dit een partij is die wél nadenkt over context.

**Wat er nu misgaat.** page.tsx regel 122-148 start een oneindige `requestAnimationFrame`-lus die drie orb-divs transformeert op basis van `mousemove`. Opvallend: de CSS `orb-breathe`-animaties ernaast respecteren wél `prefers-reduced-motion` (regel 1549-1554, expliciet uitgeschakeld in dat media-blok), maar deze JS-lus heeft geen enkele reduced-motion-check én geen check op aanraakschermen. Op een touchscreen-telefoon — 100% van deze persona — vuurt `mousemove` nooit, dus de lus draait de volledige sessie door, boven op de drie gelijktijdig lopende blur-animaties (filter: blur 45-70px) die sowieso al actief zijn, voor precies nul waarneembaar resultaat.

**Award-winning oplossing.** Start de rAF-lus alleen wanneer `matchMedia('(hover: hover) and (pointer: fine)').matches` én reduced-motion niet actief is — één `if`-check bovenaan de `useEffect` op regel 122 die op touch-apparaten de `mousemove`-listener nooit registreert. Vervang het weggelaten effect niet door niets, maar door iets dat wél bij het apparaat past: op toestellen met `DeviceOrientationEvent`-ondersteuning (na een lichte, permissie-vriendelijke check) laat je de orbs subtiel meebewegen met de kanteling van de telefoon in plaats van de muis — een parallax-effect dat op mobiel feitelijk beter past bij hoe mensen hun telefoon vasthouden dan de desktop-variant ooit deed. Zo wordt een weggelaten, zinloze animatie een toegevoegd, toestel-passend detail — niet minder beleving, maar de juiste beleving voor het juiste apparaat.

### 11. De hele typografische hiërarchie leunt op een variabele-font-as die zonder vangnet stilzwijgend wegvalt {#bezoeker-op-oud-device-traag-netwerk-verouderde-browser-de-hele-typografische-hirarchie-leunt-op-een-variabele-font-as-die-zonder-vangnet-stilzwijgend-wegvalt}

**Persona:** Installatiebedrijf-eigenaar op een oudere Samsung Internet-versie die nooit is bijgewerkt  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Hij leest de homepage-manifesto-tekst op zijn vaste werktelefoon, met de voorgeïnstalleerde Samsung Internet-browser die al jaren niet is bijgewerkt omdat 'apps updaten' voor hem geen dagelijkse gewoonte is. De tekst leunt volledig op fijne contrasten tussen `font-extralight` en `font-light`, gecombineerd met tekst op 20-25% witopaciteit.

**Trust/behoefte-trigger.** De 'doordacht en precies'-merkbelofte wordt letterlijk getoond via typografische precisie — juist dát detail is bedoeld om vertrouwen te wekken bij een technisch kritische lezer. Als die precisie wegvalt, verdwijnt het signaal dat de tekst moest overbrengen, zonder dat de bezoeker ooit weet wát er precies mist.

**Wat er nu misgaat.** layout.tsx laadt Bricolage Grotesque als variabele font via `next/font/google` (regel 2-7), en de hele typografische identiteit van de site — niet alleen de homepage, elke pagina — leunt op fijne gewichtsverschillen gecombineerd met lage tekstopaciteit om lucht en hiërarchie te creëren. Op een browser zonder ondersteuning voor variabele fonts valt alles terug op één statisch gewicht: de bedoelde luchtige hiërarchie verdwijnt, en de toch al lage contrastwaarden (tekst op 20-25% wit) worden lastiger leesbaar omdat het gewichtsverschil die keuze normaal juist compenseert. Het probleem is onzichtbaar in elke moderne browser waarin dit ooit getest zou zijn — precies waarom het nooit is opgevallen.

**Award-winning oplossing.** Definieer in globals.css één `@supports not (font-variation-settings: normal)`-blok dat voor alle `font-extralight`/`font-light`-tekstklassen sitewide een minimale contrastcorrectie afdwingt: tekstopaciteit +15%, en waar relevant een net iets groter lettergewicht als CSS-fallback-selector. Verifieer dit concreet — niet aannemen dat het werkt, maar controleren: draai de homepage door BrowserStack of een oude Samsung Internet-image en documenteer het verschil vóór/na als interne QA-check, zodat 'we hebben dit getest op écht oude browsers' een waar gemaakte belofte wordt in plaats van een aanname — precies het soort verifieerbare zorgvuldigheid die het merk claimt te bieden aan klanten.

### 12. De eigen intro-animatie vertraagt LCP, precies waar de eigen leadmagneet 'Core Web Vitals' claimt te eisen van elk bureau {#bezoeker-op-oud-device-traag-netwerk-verouderde-browser-de-eigen-intro-animatie-vertraagt-lcp-precies-waar-de-eigen-leadmagneet-core-web-vitals-claimt-te-eisen-van-elk-bureau}

**Persona:** Technische IT-manager bij een groter bedrijf (de exacte PRODUCT.md-doelgroep) die zelf even PageSpeed/Lighthouse op dynique.nl draait vóór een eerste gesprek  
**Prioriteit:** 🟡 P1 — belangrijk

**Situatie.** Voordat hij een eerste gesprek plant, doet hij wat elke technische beslisser in deze doelgroep zou doen: hij plakt dynique.nl in PageSpeed Insights. Op een matige verbinding ziet hij het zwarte laadscherm met drie geblurde orbs 1,6 tot 2,2 seconden lang staan, los van of de eigenlijke content al klaar is.

**Trust/behoefte-trigger.** Belief-ladder-stap 1 — 'dit is geen generiek bureau, er zit echte technische kennis achter' — staat op het spel op precies het moment dat een technische koper zélf de performance test in plaats van op woorden te vertrouwen.

**Wat er nu misgaat.** page.tsx regel 85-97 forceert een vaste `setTimeout`-intro (1600ms/2200ms) bij elke eerste sessie, volledig ontkoppeld van de werkelijke asset-laadtijd — op een trage verbinding is de content zelf vaak nog niet klaar wanneer de intro wegvalt, wat een zichtbare flash en layout-shift geeft. Ironisch genoeg belooft de eigen leadmagneet, `gratis-checklist/page.tsx` regel 13 (checklist-item 05: 'Performance budget — concrete Core Web Vitals scores die je moet eisen van je bureau'), precies de discipline die de eigen homepage op dit punt niet naleeft. Een technische bezoeker die de checklist downloadt en vervolgens de site zelf test, ziet het bewijs van het tegendeel.

**Award-winning oplossing.** Koppel de intro-fade aan een echte laadstatus-check (`document.fonts.ready` gecombineerd met een `Promise.race` tegen een harde maximale timeout van 900ms in plaats van de vaste 1600-2200ms) zodat de intro nooit langer duurt dan de content daadwerkelijk nodig heeft. Bouw daarna een klein, automatisch Lighthouse CI-script dat bij elke deploy naar `out/` draait en de LCP-score meet — en publiceer dat live cijfer, automatisch bijgewerkt, als klein 'LCP < 1,2s'-label in de footer, gelinkt naar het volledige rapport. Dat is geen marketing-claim maar een doorlopend geverifieerd cijfer dat zichzelf tegenspreekt zodra het niet meer klopt — precies het soort 'bewijs door precisie, niet door belofte' dat Design Principle 1 uit het eigen merkdocument voorschrijft, nu toegepast op de site die dat principe zou moeten uitstralen.

### 13. Hetzelfde kale `<input type="date">` staat, zonder tekstuele fallback, in vier losse formulieren {#bezoeker-op-oud-device-traag-netwerk-verouderde-browser-hetzelfde-kale-input-typedate-staat-zonder-tekstuele-fallback-in-vier-losse-formulieren}

**Persona:** Bouwbedrijf-planner die op een oudere Android-telefoon (verouderde WebView) een gesprek wil inplannen via het homepage-formulier  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Ze vinkt 'Ik wil graag een gesprek inplannen' aan op de homepage en probeert een datum te kiezen voor het adviesgesprek. Ze typt '07-09-2026' zoals ze gewend is — en er gebeurt niets zichtbaars in het veld.

**Trust/behoefte-trigger.** Ze wil het gesprek daadwerkelijk vastleggen — dit is het concrete, actiegerichte vervolg op haar interesse. Een datumveld dat de invoer stilzwijgend negeert voelt als een formulier dat niet werkt, precies op het conversiemoment waarop ze bereid was door te zetten.

**Wat er nu misgaat.** Hetzelfde kale `<input type="date">`, zonder placeholder, patroonhint of tekstuele fallback, staat vier keer los geïmplementeerd: page.tsx (regel 1325), contact/page.tsx (regel 213), eerste-website/page.tsx (regel 494) en vervanging/page.tsx (regel 478). Op oudere Android-webviews rendert dit soms als een onopgemaakt tekstveld dat intern een strikt `yyyy-mm-dd`-formaat verwacht; typt de gebruiker '07-09-2026', dan wordt de waarde simpelweg genegeerd zonder enige foutmelding — en dat op vier verschillende plekken in de site tegelijk, elk met exact hetzelfde risico.

**Award-winning oplossing.** Bouw één gedeelde `<DateField>`-component die alle vier losse `<input type="date">`-implementaties vervangt. De component toont altijd een zichtbare hulptekst onder het veld ('Formaat: dag/maand/jaar, bijv. 07/09/2026') en detecteert via een feature-check bij mount of `input.type` daadwerkelijk 'date' is gebleven na render — is dat niet zo, dan schakelt hij automatisch over op een tekstveld met eigen client-side parsing die zowel '07-09-2026' als '07/09/2026' als '2026-09-07' herkent, in plaats van één format hard te eisen. Eén component, één keer goed gebouwd, vier keer hergebruikt — in plaats van vier keer dezelfde kwetsbaarheid opnieuw te schrijven.

### 14. Dezelfde 581KB-oprichtersfoto wordt ongewijzigd geserveerd op zowel de homepage als de over-ons-pagina {#bezoeker-op-oud-device-traag-netwerk-verouderde-browser-dezelfde-581kb-oprichtersfoto-wordt-ongewijzigd-geserveerd-op-zowel-de-homepage-als-de-over-ons-pagina}

**Persona:** Zorginstelling-facilitair medewerker op een budget-Androidtoestel met beperkt databundel  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Ze bekijkt de 'Waarom Dynique'-sectie op de homepage en klikt daarna door naar `/over-ons` om meer te lezen over wie er achter het bedrijf zit — op haar telefoon met een 360px-breed scherm en een databundel die ze bewust in de gaten houdt tegen het einde van de maand.

**Trust/behoefte-trigger.** Elke MB die onnodig verstookt wordt aan een decoratieve portretfoto is een MB die niet meer beschikbaar is om de rest van de pagina — het formulier, de FAQ — te laden. Op een beperkte databundel is dat voelbaar en irritant, niet abstract.

**Wat er nu misgaat.** next.config.ts regel 11-13 zet `images: { unoptimized: true }` (verplicht door `output: 'export'`) — er bestaat dus geen enkele responsive/adaptieve beeldstrategie in het hele project. `founder2.jpeg` (594.817 bytes, ruim 580KB) wordt letterlijk identiek geserveerd op twee plekken — page.tsx regel 474-479 én over-ons/page.tsx regel 128-130, exact dezelfde `src`, exact dezelfde `style`-block met `aspectRatio: "3/4"` — aan zowel een 6K-desktopscherm als een budget-telefoon met een 360px-breed scherm. Geen `srcset`, geen kleinere variant, en de bezoeker die beide pagina's bezoekt (zoals deze persona) downloadt het bestand zelfs twee keer omdat het via twee verschillende `<img>`-tags wordt aangeroepen.

**Award-winning oplossing.** Het bestaande `scripts/compress-hero-images.mjs` toont al de infrastructuur hiervoor: een array van `[bron, doel, breedte, kwaliteit, budget]`-tuples via `sharp`. Breid dit script uit met een vierde, herbruikbare portretfoto-entry die drie breedtevarianten genereert (480w/960w/1920w) in plaats van één vaste maat, en render die via een handmatige `<img srcset="founder2-480.webp 480w, founder2-960.webp 960w, founder2-1920.webp 1920w" sizes="(max-width: 768px) 100vw, 420px">`-constructie op beide plekken waar de foto nu hardcoded staat. Dit werkt volledig binnen `output: 'export'`, want het is pure build-time bestandsgeneratie — geen runtime Next-Image-optimalisatie nodig, dus geen architecturale ingreep, alleen het uitbreiden van een script dat al bestaat. Een telefoon met een 360px-scherm downloadt dan de 480w-variant (naar schatting 60-90KB) in plaats van de volledige 580KB — en dat één keer, niet twee.

### 15. Geen enkele verbindingsbewuste laadstrategie ondanks vijf losse videocomponenten sitewide {#bezoeker-op-oud-device-traag-netwerk-verouderde-browser-geen-enkele-verbindingsbewuste-laadstrategie-ondanks-vijf-losse-videocomponenten-sitewide}

**Persona:** Installatiebedrijf-eigenaar die vanuit een loods met slechte 4G/3G-dekking de site bezoekt — veelvoorkomend in de doelgroep-sectoren bouw/logistiek/installatie  
**Prioriteit:** 🟢 P2 — nice-to-have

**Situatie.** Hij navigeert door meerdere pagina's — de homepage, portfolio, een sectorpagina — die elk hun eigen autoplay-video's tonen, terwijl zijn verbinding in de loods constant wisselt tussen 3G en haperende 4G. Elke paginawissel is opnieuw gokken of het deze keer wél snel laadt.

**Trust/behoefte-trigger.** Dit is precies de bezoeker voor wie 'meedenken over wat beter kan' het meest zou moeten opvallen — en in de praktijk merkt hij dat de site totaal niet meedenkt over zíjn omstandigheden, terwijl dat exact is wat Dynique claimt te doen in de systemen die ze voor klanten zoals hem bouwt.

**Wat er nu misgaat.** Nergens in de codebase wordt `navigator.connection`, `saveData` of `effectiveType` uitgelezen — een `grep` over de hele `src/`-map levert nul treffers op. Hetzelfde blinde `rootMargin: '200px'`-autoplay-gedrag wordt toegepast in minstens vijf losse videocomponenten: `PortfolioVideo` (page.tsx), `ScrollAwareVideo` (CaseStudyTemplate.tsx, tweemaal gebruikt in elke case-study), en de losse video-implementaties in de sectorpagina's — ongeacht of de bezoeker op glasvezel-wifi zit of op een haperende 3G-verbinding in een loods. Dit staat rechtstreeks haaks op Design Principle 2 uit het eigen merkdocument ('meedenken is zichtbaar, niet alleen beweerd'): het systeem denkt hier zichtbaar niet mee met de situatie van de bezoeker.

**Award-winning oplossing.** Bouw één gedeelde `useConnectionAware()`-hook die `navigator.connection?.saveData` of `effectiveType` (2g/slow-2g/3g) uitleest en, indien traag of data-besparend, alle vijf videocomponenten site-breed laat terugvallen op hun posterbeeld met een expliciete tik-om-af-te-spelen-knop — één hook, vijf call-sites, automatisch overal doorwerkend. Ga verder dan automatische detectie alleen: voeg een permanente, kleine 'Databundel sparen'-toggle toe in de footer (naast de contactgegevens) die de bezoeker zelf kan aanzetten, onafhankelijk van wat `navigator.connection` rapporteert — want Save-Data-ondersteuning verschilt sterk per browser en is niet overal betrouwbaar. Onthoud de keuze via `localStorage` zodat hij op elke volgende pagina blijft gelden. Een zichtbare, door de bezoeker zelf bedienbare knop is een concreter en eerlijker gebaar dan alleen stille detectie — het maakt tastbaar, in de UI zelf, dat de site daadwerkelijk rekening houdt met wie er kijkt.

---
