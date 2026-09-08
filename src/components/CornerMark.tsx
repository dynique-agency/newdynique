type CornerMarkPosition = "top-right" | "bottom-left" | "bottom-right";

/** Small recurring corner-bracket accent — a quiet signature mark used at section edges. */
export default function CornerMark({ position, delay }: { position: CornerMarkPosition; delay?: number }) {
  const edge = {
    "top-right": "top-6 right-6 lg:top-10 lg:right-10",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  }[position];
  const line = {
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  }[position];
  return (
    <div
      aria-hidden
      className={`absolute ${edge} w-8 h-8 lg:w-10 lg:h-10 pointer-events-none z-10 ${delay !== undefined ? "corner-mark" : ""}`}
      style={delay !== undefined ? ({ "--corner-delay": `${delay}s` } as React.CSSProperties) : undefined}
    >
      <div className={`absolute ${line} w-full h-px bg-[#d4a574]/40`} />
      <div className={`absolute ${line} w-px h-full bg-[#d4a574]/40`} />
      <style jsx>{`
        @keyframes cornerMarkFadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .corner-mark {
          animation: cornerMarkFadeInUp 1s ease-out var(--corner-delay, 0s) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .corner-mark { animation: none; opacity: 1; }
        }
      `}</style>
    </div>
  );
}
