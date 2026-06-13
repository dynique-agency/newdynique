"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface HeaderProps {
  variant?: 'light' | 'dark';
}

const dienstenItems = [
  { label: "Websites & Web Apps", href: "/diensten/web", desc: "Van portfolio tot webapplicatie" },
  { label: "Bedrijfsprocessen", href: "/diensten/processen", desc: "Automatisering & workflows" },
  { label: "AI Marketing", href: "/diensten/marketing", desc: "Content, SEO & social media" },
  { label: "Drone & Video", href: "/diensten/drone", desc: "Aerial footage & bedrijfsfilm" },
];

const mobileNav = [
  { n: "02", label: "HOME", href: "/" },
  { n: "03", label: "PORTFOLIO", href: "/portfolio" },
  { n: "04", label: "OVER ONS", href: "/over-ons" },
  { n: "05", label: "BLOG", href: "/blog" },
  { n: "06", label: "FAQ", href: "/#faq" },
  { n: "07", label: "CONTACT", href: "/contact" },
];

export default function Header({ variant = 'dark' }: HeaderProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [dienstenOpen, setDienstenOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const openMenu = () => {
    setIsMenuOpen(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setMenuVisible(true)));
  };

  const closeMenu = () => {
    setMenuVisible(false);
    setTimeout(() => setIsMenuOpen(false), 750);
  };

  const isLight = variant === 'light';
  const logoColor = isMenuOpen ? 'text-white' : (isLight ? 'text-white' : 'text-black');
  const lineColor = isMenuOpen ? 'bg-white' : (isLight ? 'bg-white' : 'bg-black');
  const bgColor = isLight
    ? (scrollY > 50 ? "bg-black/95 backdrop-blur-md" : "bg-transparent")
    : (scrollY > 50 ? "bg-white/95 backdrop-blur-md border-b border-black/5" : "bg-white border-b border-black/5");
  const textColor = isLight ? 'text-white' : 'text-black';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgColor}`}>
        <nav className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              className={`relative z-[60] ${logoColor} text-2xl lg:text-3xl font-light tracking-[0.3em] hover:tracking-[0.4em] transition-all duration-500`}
            >
              DYNIQUE
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div
                className="relative"
                onMouseEnter={() => setDienstenOpen(true)}
                onMouseLeave={() => setDienstenOpen(false)}
              >
                <Link href="/diensten" className={`${textColor} text-sm font-light tracking-[0.15em] hover:tracking-[0.25em] transition-all duration-300 relative group flex items-center gap-2`}>
                  DIENSTEN
                  <svg className={`w-3 h-3 transition-transform duration-300 ${dienstenOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className={`absolute bottom-0 left-0 w-0 h-[1px] ${isLight ? 'bg-white' : 'bg-black'} transition-all duration-300 group-hover:w-full`}></span>
                </Link>
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white border border-black/10 shadow-2xl transition-all duration-300 ${dienstenOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                  {dienstenItems.map((item) => (
                    <Link key={item.href} href={item.href} className="block px-6 py-4 border-b border-black/5 last:border-0 hover:bg-black hover:text-white transition-all duration-200 group/item">
                      <div className="text-xs tracking-[0.2em] font-light text-black group-hover/item:text-white mb-1 uppercase">{item.label}</div>
                      <div className="text-xs text-black/40 group-hover/item:text-white/60 font-light tracking-wide">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
              {[
                { label: "HOME", href: "/" },
                { label: "PORTFOLIO", href: "/portfolio" },
                { label: "OVER ONS", href: "/over-ons" },
                { label: "BLOG", href: "/blog" },
                { label: "FAQ", href: "/#faq" },
                { label: "CONTACT", href: "/contact" },
              ].map((item) => (
                <a key={item.label} href={item.href} className={`${textColor} text-sm font-light tracking-[0.15em] hover:tracking-[0.25em] transition-all duration-300 relative group`}>
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-0 h-[1px] ${isLight ? 'bg-white' : 'bg-black'} transition-all duration-300 group-hover:w-full`}></span>
                </a>
              ))}
            </div>

            {/* Hamburger Button */}
            <button
              onClick={isMenuOpen ? closeMenu : openMenu}
              className="lg:hidden relative z-[60] flex items-center gap-3 py-2 group"
              aria-label={isMenuOpen ? "Menu sluiten" : "Menu openen"}
            >
              {/* Lines */}
              <div className="flex flex-col gap-[6px] items-end w-6">
                <span className={`block h-px transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${lineColor} ${isMenuOpen ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6'}`}></span>
                <span className={`block h-px transition-all duration-400 ${lineColor} ${isMenuOpen ? 'w-0 opacity-0' : 'w-4 opacity-100'}`}></span>
                <span className={`block h-px transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${lineColor} ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-5'}`}></span>
              </div>
              {/* Label */}
              <span className={`text-[9px] tracking-[0.4em] font-light transition-all duration-300 ${isMenuOpen ? 'text-white' : (isLight ? 'text-white' : 'text-black')}`}>
                {isMenuOpen ? 'SLUIT' : 'MENU'}
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* ── Full Screen Menu ─────────────────────────────────── */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[45]">
          {/* Clip-path panel */}
          <div
            className="absolute inset-0 bg-[#0a0a0a] transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{
              clipPath: menuVisible
                ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                : 'polygon(0 0, 100% 0, 100% 0, 0 0)',
            }}
          >
            {/* Ghost background text */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 right-0 leading-none select-none pointer-events-none font-extralight text-white tracking-widest overflow-hidden"
              style={{ fontSize: 'clamp(80px, 22vw, 180px)', opacity: 0.025 }}
            >
              DYN
            </div>

            {/* Thin vertical accent line */}
            <div
              className="absolute left-6 top-24 bottom-8 w-px bg-white/8 transition-all duration-700"
              style={{ transform: menuVisible ? 'scaleY(1)' : 'scaleY(0)', transformOrigin: 'top', transitionDelay: '0.3s' }}
            ></div>

            {/* Menu Content */}
            <div className="relative h-full flex flex-col pl-12 pr-6 pt-24 pb-8 overflow-y-auto">

              {/* DIENSTEN block */}
              <div
                className="mb-4 pb-4 border-b border-white/8"
                style={itemStyle(menuVisible, 0)}
              >
                <Link href="/diensten" onClick={closeMenu} className="flex items-center gap-3 mb-4 group/dh">
                  <span className="text-white/18 text-[8px] tracking-[0.5em] font-light">01</span>
                  <span className="text-white/35 text-[9px] tracking-[0.4em] font-light group-hover/dh:text-white/70 transition-colors duration-300">DIENSTEN — OVERZICHT</span>
                </Link>
                <div className="space-y-3">
                  {dienstenItems.map((item, i) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="group flex items-center gap-3"
                      style={itemStyle(menuVisible, i * 0.06 + 0.1)}
                    >
                      <span className="text-white/20 text-[7px] flex-shrink-0">◆</span>
                      <div className="text-white text-base font-extralight tracking-[0.12em] group-hover:text-white/40 transition-colors duration-300">
                        {item.label.toUpperCase()}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Main nav items */}
              <nav className="flex-1 space-y-0">
                {mobileNav.map((item, i) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className="group flex items-baseline gap-4 py-3 border-b border-white/5 last:border-0"
                    style={itemStyle(menuVisible, i * 0.07 + 0.3)}
                  >
                    <span className="text-white/15 text-[8px] tracking-[0.4em] font-light flex-shrink-0 w-5">{item.n}</span>
                    <span className="text-white text-[2.2rem] font-extralight tracking-[0.08em] leading-none group-hover:tracking-[0.14em] group-hover:text-white/30 transition-all duration-500">
                      {item.label}
                    </span>
                  </a>
                ))}
              </nav>

              {/* Footer */}
              <div
                className="pt-5 border-t border-white/8 flex items-center justify-between"
                style={itemStyle(menuVisible, 0.65)}
              >
                <div className="flex gap-5">
                  <a href="tel:+31624572572" className="text-white/30 text-[9px] tracking-[0.3em] font-light hover:text-white/70 transition-colors duration-300">
                    +31 6 24572572
                  </a>
                  <a href="mailto:info@dynique.nl" className="text-white/30 text-[9px] tracking-[0.3em] font-light hover:text-white/70 transition-colors duration-300">
                    info@dynique.nl
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function itemStyle(visible: boolean, delaySeconds: number): React.CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)`,
    transitionDelay: `${0.18 + delaySeconds}s`,
  };
}
