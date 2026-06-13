"use client";

import Link from "next/link";
import { useEffect, ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export type BlogMeta = {
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  date: string;
  accent: string;
  slug: string;
};

export default function BlogPost({ meta, children }: { meta: BlogMeta; children: ReactNode }) {
  const url = `https://dynique.nl/blog/${meta.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: meta.title,
        description: meta.subtitle,
        url,
        mainEntityOfPage: url,
        articleSection: meta.category,
        inLanguage: "nl-NL",
        author: { "@type": "Organization", name: "Dynique", url: "https://dynique.nl" },
        publisher: { "@type": "Organization", name: "Dynique", url: "https://dynique.nl" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://dynique.nl" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://dynique.nl/blog" },
          { "@type": "ListItem", position: 3, name: meta.title, item: url },
        ],
      },
    ],
  };

  useEffect(() => {
    const o = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("animate-in"); o.unobserve(e.target); }
      }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".anim").forEach((el) => o.observe(el));
    return () => o.disconnect();
  }, []);

  return (
    <main className="relative bg-[#050505] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header variant="light" />

      <div aria-hidden className="fixed top-0 right-0 w-[700px] h-[700px] pointer-events-none opacity-40"
           style={{ background: `radial-gradient(circle, ${meta.accent}20 0%, transparent 60%)` }} />

      <article className="relative">
        {/* Hero */}
        <section className="pt-40 lg:pt-52 pb-16 lg:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <Link href="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs tracking-[0.3em] font-light uppercase transition-colors anim">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                Alle artikelen
              </Link>

              <div className="flex items-center gap-3 mt-12 mb-8 anim delay-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: meta.accent, boxShadow: `0 0 10px ${meta.accent}` }}></span>
                <p className="text-[10px] tracking-[0.4em] font-light uppercase" style={{ color: meta.accent }}>
                  {meta.category}
                </p>
                <span className="text-white/20">·</span>
                <p className="text-white/40 text-[10px] tracking-[0.3em] font-light uppercase">{meta.readTime}</p>
                <span className="text-white/20">·</span>
                <p className="text-white/40 text-[10px] tracking-[0.3em] font-light uppercase">{meta.date}</p>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extralight text-white tracking-[0.01em] leading-[1.05] anim delay-2">
                {meta.title}
              </h1>
              <p className="mt-8 text-white/55 text-lg lg:text-xl font-light leading-[1.7] tracking-wide anim delay-3">
                {meta.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="pb-24 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto prose-blog">
              {children}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 lg:py-32 border-t border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-8 anim">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#34d399]" style={{ boxShadow: "0 0 10px #34d399" }}></span>
                <p className="text-[#34d399] text-[10px] tracking-[0.4em] font-light uppercase">Klaar om te starten?</p>
              </div>
              <h2 className="text-3xl lg:text-5xl font-extralight text-white tracking-[0.02em] leading-[1.15] anim delay-1">
                Geïnspireerd?<br />
                <span className="italic text-white/50">Laten we praten.</span>
              </h2>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center anim delay-2">
                <Link href="/#contact" className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-white text-black text-xs tracking-[0.3em] font-light hover:tracking-[0.4em] transition-all duration-500">
                  START JOUW PROJECT
                </Link>
                <Link href="/gratis-checklist" className="inline-flex items-center justify-center gap-3 px-12 py-5 border border-white/15 text-white text-xs tracking-[0.3em] font-light hover:bg-white/5 hover:border-white/30 transition-all duration-500">
                  GRATIS CHECKLIST
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>

      <Footer />

      <style jsx global>{`
        .anim { opacity: 0; transform: translateY(20px); transition: opacity 1s ease-out, transform 1s ease-out; }
        .anim.animate-in { opacity: 1; transform: translateY(0); }
        .anim.delay-1 { transition-delay: 0.15s; }
        .anim.delay-2 { transition-delay: 0.3s; }
        .anim.delay-3 { transition-delay: 0.45s; }

        .prose-blog h2 { font-size: 2rem; font-weight: 200; color: #fff; letter-spacing: 0.02em; line-height: 1.2; margin-top: 4rem; margin-bottom: 1.5rem; }
        .prose-blog h3 { font-size: 1.35rem; font-weight: 300; color: #fff; letter-spacing: 0.02em; line-height: 1.3; margin-top: 3rem; margin-bottom: 1rem; }
        .prose-blog p { font-size: 1.0625rem; font-weight: 300; color: rgba(255,255,255,0.65); line-height: 1.85; letter-spacing: 0.015em; margin-bottom: 1.5rem; }
        .prose-blog a { color: #fff; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.3); transition: border-color 0.3s; }
        .prose-blog a:hover { border-color: rgba(255,255,255,0.8); }
        .prose-blog ul { margin: 1.5rem 0; padding-left: 0; list-style: none; }
        .prose-blog li { font-size: 1.0625rem; font-weight: 300; color: rgba(255,255,255,0.65); line-height: 1.85; padding-left: 1.5rem; position: relative; margin-bottom: 0.75rem; }
        .prose-blog li::before { content: "—"; position: absolute; left: 0; color: rgba(255,255,255,0.3); }
        .prose-blog blockquote { border-left: 1px solid rgba(255,255,255,0.2); padding-left: 1.75rem; margin: 2.5rem 0; font-style: italic; font-weight: 200; font-size: 1.25rem; line-height: 1.6; color: rgba(255,255,255,0.85); }
        .prose-blog strong { color: #fff; font-weight: 400; }
        .prose-blog em { font-style: italic; color: rgba(255,255,255,0.85); }
        .prose-blog hr { border: 0; height: 1px; background: rgba(255,255,255,0.08); margin: 3rem 0; }
        .prose-blog .callout { border: 1px solid rgba(255,255,255,0.1); padding: 2rem; margin: 2.5rem 0; background: rgba(255,255,255,0.02); }
        .prose-blog .callout p { margin-bottom: 0; }
        .prose-blog .callout-label { font-size: 0.625rem; letter-spacing: 0.4em; text-transform: uppercase; font-weight: 300; margin-bottom: 0.75rem; display: block; }
      `}</style>
    </main>
  );
}
