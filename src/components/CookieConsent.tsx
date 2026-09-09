"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "dynique-analytics-consent";
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function loadGA4(measurementId: string) {
  if (document.getElementById("ga4-script")) return;
  const script = document.createElement("script");
  script.id = "ga4-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  const inline = document.createElement("script");
  inline.id = "ga4-inline";
  inline.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}', { anonymize_ip: true });
  `;
  document.head.appendChild(inline);
}

// Cookiebanner voor Google Analytics 4 — laadt GA4 pas na expliciete toestemming
// (AVG-vereist voor niet-strikt-noodzakelijke cookies). Zonder NEXT_PUBLIC_GA_MEASUREMENT_ID
// gebeurt er niets: geen banner, geen script, veilige no-op zolang de eigenaar dat nog
// niet heeft ingesteld in Cloudflare Pages.
export default function CookieConsent() {
  const [status, setStatus] = useState<"pending" | "accepted" | "declined" | "unset">("pending");

  useEffect(() => {
    if (!GA_ID) return;
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(CONSENT_KEY);
    } catch {
      // localStorage kan geblokkeerd zijn (privénavigatie e.d.) — behandel als nog geen keuze
    }
    if (stored === "accepted") {
      setStatus("accepted");
      loadGA4(GA_ID);
    } else if (stored === "declined") {
      setStatus("declined");
    } else {
      setStatus("unset");
    }
  }, []);

  if (!GA_ID || status !== "unset") return null;

  const choose = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // niets bewaren lukt niet — banner verschijnt dan bij het volgende bezoek opnieuw, geen ramp
    }
    setStatus(value);
    if (value === "accepted" && GA_ID) loadGA4(GA_ID);
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] bg-[#0a0a0a] border-t border-white/10 px-6 py-5 lg:px-12">
      <div className="container mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <p className="text-white/60 text-xs font-light leading-relaxed tracking-wide flex-1 text-center sm:text-left">
          We gebruiken analytics-cookies om te begrijpen hoe bezoekers onze site gebruiken — dat helpt ons de
          site te verbeteren. Lees meer in onze{" "}
          <Link href="/privacyverklaring#cookies" className="underline underline-offset-4 decoration-white/30 hover:text-white transition-colors">
            privacyverklaring
          </Link>.
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={() => choose("declined")}
            className="px-6 py-2.5 border border-white/15 text-white/60 text-[11px] tracking-[0.2em] font-light hover:border-white/30 hover:text-white transition-all duration-300"
          >
            WEIGEREN
          </button>
          <button
            onClick={() => choose("accepted")}
            className="px-6 py-2.5 bg-[#d4a574] text-black text-[11px] tracking-[0.2em] font-medium hover:opacity-90 transition-all duration-300"
          >
            ACCEPTEREN
          </button>
        </div>
      </div>
    </div>
  );
}
