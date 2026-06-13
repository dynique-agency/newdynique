import Link from "next/link";

export default function Footer() {
  const diensten = [
    { label: "Alle diensten", href: "/diensten" },
    { label: "Websites & Web Apps", href: "/diensten/web" },
    { label: "Bedrijfsprocessen", href: "/diensten/processen" },
    { label: "AI Marketing", href: "/diensten/marketing" },
    { label: "Drone & Video", href: "/diensten/drone" },
  ];

  const ontdek = [
    { label: "Over ons", href: "/over-ons" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Gratis checklist", href: "/gratis-checklist" },
    { label: "Contact", href: "/contact" },
  ];

  const locaties = [
    { label: "Maastricht", href: "/locaties/maastricht" },
    { label: "Heerlen", href: "/locaties/heerlen" },
    { label: "Sittard-Geleen", href: "/locaties/sittard" },
    { label: "Aken", href: "/locaties/aken" },
    { label: "Eindhoven", href: "/locaties/eindhoven" },
  ];

  return (
    <footer className="relative bg-white border-t border-black/10 py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Brand + link columns grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-4 md:col-span-4">
              <h2 className="text-3xl lg:text-4xl font-light tracking-[0.3em] text-black">
                DYNIQUE
              </h2>
              <p className="text-black/60 text-sm font-light leading-relaxed tracking-wide max-w-xs">
                Dynamisch in aanpak, uniek in resultaat.
              </p>
              <p className="text-black/40 text-xs font-light leading-relaxed tracking-wide max-w-xs">
                Full creative development agency voor websites, web apps, digitale bedrijfsprocessen, AI marketing en drone videografie.
              </p>
            </div>

            {/* Diensten links */}
            <div className="md:col-span-3">
              <p className="text-black/30 text-xs tracking-[0.25em] font-light mb-5 uppercase">Diensten</p>
              <div className="space-y-3">
                {diensten.map((d) => (
                  <Link
                    key={d.href}
                    href={d.href}
                    className="block text-black/60 hover:text-black text-sm font-light tracking-wide transition-colors duration-300"
                  >
                    {d.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Ontdek links */}
            <div className="md:col-span-2">
              <p className="text-black/30 text-xs tracking-[0.25em] font-light mb-5 uppercase">Ontdek</p>
              <div className="space-y-3">
                {ontdek.map((d) => (
                  <Link
                    key={d.href}
                    href={d.href}
                    className="block text-black/60 hover:text-black text-sm font-light tracking-wide transition-colors duration-300"
                  >
                    {d.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Locaties links */}
            <div className="md:col-span-3">
              <p className="text-black/30 text-xs tracking-[0.25em] font-light mb-5 uppercase">Locaties</p>
              <div className="space-y-3">
                {locaties.map((d) => (
                  <Link
                    key={d.href}
                    href={d.href}
                    className="block text-black/60 hover:text-black text-sm font-light tracking-wide transition-colors duration-300"
                  >
                    {d.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-10 mb-10 border-b border-black/10">
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="tel:+31624572572"
                className="text-black/70 hover:text-black text-sm font-light tracking-wide transition-colors duration-300"
              >
                +31 6 24572572
              </a>
              <div className="hidden sm:block w-[1px] h-4 bg-black/20 self-center"></div>
              <a
                href="mailto:info@dynique.nl"
                className="text-black/70 hover:text-black text-sm font-light tracking-wide transition-colors duration-300"
              >
                info@dynique.nl
              </a>
            </div>
            <a
              href="/#contact"
              className="text-xs tracking-[0.2em] font-light border border-black/20 hover:border-black hover:bg-black hover:text-white text-black px-6 py-2.5 transition-all duration-300"
            >
              START EEN PROJECT
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-black/40 text-xs tracking-[0.15em] font-light">
              © 2026 DYNIQUE. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
