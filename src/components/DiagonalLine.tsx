type DiagonalLineCorner = "top-right" | "bottom-left" | "bottom-right";

/**
 * Thin diagonal accent line — a companion to CornerMark's corner-bracket signature.
 * Reads as a technical/blueprint measurement line extending inward from a section corner.
 *
 * Anchored at the same corner offsets CornerMark uses, so the two motifs share a home.
 * Reveals via the page's existing `.anim` / IntersectionObserver scroll-reveal convention
 * (see src/app/page.tsx) rather than a self-timed entrance — the wrapper carries a plain
 * `anim` class so the already-wired observer picks it up and toggles `animate-in` on it.
 * Because styled-jsx only scopes CSS within the component that declares it, the actual
 * opacity/transform rules for that reveal are declared locally below (scoped to
 * `.diagonal-line`) rather than relying on page.tsx's own scoped `<style jsx>` block.
 *
 * Desktop-only (`lg:` and up): below that breakpoint several host sections stack their
 * heading to near-full container width, which the line's reach would cross.
 */
export default function DiagonalLine({
  corner,
  length = 260,
  delay,
}: {
  corner: DiagonalLineCorner;
  length?: number;
  delay?: number;
}) {
  const edge = {
    "top-right": "top-6 right-6 lg:top-10 lg:right-10",
    "bottom-left": "bottom-6 left-6 lg:bottom-10 lg:left-10",
    "bottom-right": "bottom-6 right-6 lg:bottom-10 lg:right-10",
  }[corner];
  // The line's own anchor edge is pinned by `edge` above (its right edge for the two
  // right-hand corners, its left edge for bottom-left); rotation pivots around that
  // same pinned edge so the free end swings inward into the section.
  const origin = {
    "top-right": "right center",
    "bottom-left": "left center",
    "bottom-right": "right center",
  }[corner];
  // Sign depends on which edge is pinned and whether "inward" is down (top corners)
  // or up (bottom corners) — see component doc comment for the derivation.
  const rotateDeg = {
    "top-right": -27,
    "bottom-left": -27,
    "bottom-right": 27,
  }[corner];

  return (
    <div
      aria-hidden
      className={`hidden lg:block absolute ${edge} pointer-events-none z-10 anim diagonal-line bg-[#d4a574]/35`}
      style={
        {
          width: `${length}px`,
          height: "1px",
          transformOrigin: origin,
          "--line-rotate": `${rotateDeg}deg`,
          ...(delay !== undefined ? { "--line-delay": `${delay}s` } : {}),
        } as React.CSSProperties
      }
    >
      <style jsx>{`
        .diagonal-line {
          opacity: 0;
          transform: translateY(32px) rotate(var(--line-rotate));
          transition:
            opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: var(--line-delay, 0s);
          will-change: opacity, transform;
        }
        .diagonal-line.animate-in {
          opacity: 1;
          transform: translateY(0) rotate(var(--line-rotate));
        }
        @media (prefers-reduced-motion: reduce) {
          .diagonal-line {
            opacity: 1;
            transform: rotate(var(--line-rotate));
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
