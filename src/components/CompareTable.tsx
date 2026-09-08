export type CompareColumn = {
  head: string;
  sub: string;
  points: string[];
  dim?: boolean; // true = the "losing" column (crossed-out icons, muted)
};

// Same two-column vergelijkingstabel visual as diensten/processen/page.tsx
// ("STANDAARDPAKKET" vs "MAATWERK VAN DYNIQUE") — reused for other comparisons
// (Excel vs. maatwerk, SaaS vs. maatwerk, low-code vs. maatwerk).
export default function CompareTable({ columns, accent }: { columns: CompareColumn[]; accent: string }) {
  return (
    <div className="relative grid md:grid-cols-2 gap-5 lg:gap-10 max-w-5xl mx-auto">
      {columns.map((col) => (
        <div key={col.head}
          className={`anim relative p-7 lg:p-9 border rounded-lg ${col.dim ? "border-white/[0.07] bg-white/[0.01]" : "border-white/[0.12]"}`}
          style={col.dim ? {} : { background: `linear-gradient(160deg, ${accent}14 0%, transparent 55%)`, boxShadow: `inset 0 0 0 1px ${accent}30` }}>
          <div className="flex items-center justify-between gap-3 mb-2">
            <p className="text-[10px] tracking-[0.4em] font-light min-w-0 leading-relaxed" style={{ color: col.dim ? "rgba(255,255,255,0.35)" : accent }}>{col.head}</p>
            {!col.dim && (
              <span className="shrink-0 px-2.5 py-1 rounded-full text-[8px] tracking-[0.2em] font-light whitespace-nowrap"
                style={{ background: `${accent}1a`, color: accent, border: `1px solid ${accent}40` }}>AANBEVOLEN</span>
            )}
          </div>
          <p className="text-white/40 text-xs font-light tracking-wide mb-7 italic">{col.sub}</p>
          <ul className="space-y-3.5">
            {col.points.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                {col.dim ? (
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke={accent} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                <span className={`text-sm font-light leading-relaxed tracking-wide ${col.dim ? "text-white/55" : "text-white/80"}`}>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full items-center justify-center border border-white/15 bg-[#0a0a0a] text-white/50 text-[10px] tracking-[0.15em] font-light">
        VS
      </div>
    </div>
  );
}
