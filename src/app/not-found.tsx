import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pagina niet gevonden | Dynique",
  description: "Deze pagina bestaat niet (meer). Ga terug naar de homepage of bekijk ons portfolio en diensten.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="relative bg-[#050505] min-h-screen overflow-hidden">
      <Header variant="light" />

      <div aria-hidden className="fixed top-0 right-0 w-[800px] h-[800px] pointer-events-none opacity-40"
           style={{ background: "radial-gradient(circle, rgba(212,165,116,0.18) 0%, transparent 60%)" }} />
      <div aria-hidden className="fixed bottom-0 left-0 w-[600px] h-[600px] pointer-events-none opacity-30"
           style={{ background: "radial-gradient(circle, rgba(212,165,116,0.10) 0%, transparent 60%)" }} />

      <section className="relative pt-40 lg:pt-52 pb-32 lg:pb-44">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-10">
              <span className="inline-block w-8 h-[1px] bg-[#d4a574]"></span>
              <p className="text-[#d4a574] text-[10px] tracking-[0.5em] font-light uppercase">404</p>
              <span className="inline-block w-8 h-[1px] bg-[#d4a574]"></span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white tracking-[0.01em] leading-[1.02]">
              Deze pagina<br />
              <span className="italic text-white/50">bestaat niet (meer).</span>
            </h1>

            <p className="mt-12 text-white/55 text-base lg:text-xl font-light leading-[1.85] tracking-wide max-w-2xl mx-auto">
              Mogelijk is de link verouderd of verkeerd getypt. Ga terug naar de homepage, of bekijk direct ons portfolio of onze diensten.
            </p>

            <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-black text-xs tracking-[0.3em] font-light hover:tracking-[0.4em] transition-all duration-500">
                NAAR DE HOMEPAGE
              </Link>
              <Link href="/portfolio" className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/15 text-white text-xs tracking-[0.3em] font-light hover:bg-white/5 hover:border-white/30 transition-all duration-500">
                BEKIJK PORTFOLIO
              </Link>
            </div>

            <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 text-white/30 text-[10px] tracking-[0.3em] font-light uppercase">
              <Link href="/diensten" className="hover:text-white/60 transition-colors duration-300">Diensten</Link>
              <span className="w-1 h-1 rounded-full bg-white/15"></span>
              <Link href="/locaties" className="hover:text-white/60 transition-colors duration-300">Locaties</Link>
              <span className="w-1 h-1 rounded-full bg-white/15"></span>
              <Link href="/contact" className="hover:text-white/60 transition-colors duration-300">Contact</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
