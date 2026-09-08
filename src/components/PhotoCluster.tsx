"use client";

type Photo = { src: string; alt: string };

/**
 * Small "who's behind this" round-photo cluster.
 * Supports 1-4 photos, arranged as a loose, deliberately offset cluster
 * (varied sizes, overlapping positions) rather than a grid. Each photo
 * drifts independently and very subtly; frozen under prefers-reduced-motion.
 */

// Per-slot presets (index 0..3) — sizes and offsets are deliberately uneven,
// not derived from a formula, so the cluster reads as art-directed.
const SIZE_PRESET = [140, 92, 108, 76]; // px
const POS_PRESET: { top: number; left: number }[] = [
  { top: 0, left: 0 },
  { top: 92, left: 106 },
  { top: 4, left: 152 },
  { top: 132, left: 8 },
];
const DURATIONS = [11, 9, 12.5, 8.5]; // seconds — independent, non-synced drift
const DELAYS = [0, 1.6, 3.1, 0.7];
const DRIFT_VARIANT = [1, 2, 3, 1]; // which keyframe each slot uses

export default function PhotoCluster({ photos }: { photos: Photo[] }) {
  const items = photos.slice(0, 4);
  if (items.length === 0) return null;

  const width = Math.max(...items.map((_, i) => POS_PRESET[i].left + SIZE_PRESET[i]));
  const height = Math.max(...items.map((_, i) => POS_PRESET[i].top + SIZE_PRESET[i]));

  return (
    <div className="relative" style={{ width, height, maxWidth: "100%" }} aria-hidden={false}>
      {items.map((photo, i) => {
        const size = SIZE_PRESET[i];
        const pos = POS_PRESET[i];
        return (
          <div
            key={photo.src + i}
            className={`pc-photo pc-drift-${DRIFT_VARIANT[i]} absolute rounded-full overflow-hidden border border-[#d4a574]/30`}
            style={{
              width: size,
              height: size,
              top: pos.top,
              left: pos.left,
              boxShadow: "0 14px 34px rgba(0,0,0,0.5), 0 3px 10px rgba(0,0,0,0.35)",
              animationDuration: `${DURATIONS[i]}s`,
              animationDelay: `${DELAYS[i]}s`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full block"
              style={{ objectFit: "cover", objectPosition: "center 20%", filter: "grayscale(1) contrast(1.1) brightness(0.9)" }}
            />
          </div>
        );
      })}

      <style jsx>{`
        .pc-photo {
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        .pc-drift-1 { animation-name: pc-drift-1; }
        .pc-drift-2 { animation-name: pc-drift-2; }
        .pc-drift-3 { animation-name: pc-drift-3; }

        @keyframes pc-drift-1 {
          0%, 100% { transform: translateY(0) scale(0.97); }
          50% { transform: translateY(-5px) scale(1.03); }
        }
        @keyframes pc-drift-2 {
          0%, 100% { transform: translateY(0) scale(1.02); }
          50% { transform: translateY(4px) scale(0.98); }
        }
        @keyframes pc-drift-3 {
          0%, 100% { transform: translateY(-3px) scale(0.98); }
          50% { transform: translateY(3px) scale(1.02); }
        }

        @media (prefers-reduced-motion: reduce) {
          .pc-photo { animation: none; }
        }
      `}</style>
    </div>
  );
}
