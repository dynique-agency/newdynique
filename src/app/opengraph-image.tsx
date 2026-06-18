import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Dynique — Full Creative Development Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#070707",
          padding: "72px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -180,
            width: 620,
            height: 620,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(251,191,36,0.22) 0%, transparent 65%)",
          }}
        />
        {/* Ambient glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -120,
            left: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 65%)",
          }}
        />

        {/* Top: wordmark (matches header style) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#ffffff",
            fontSize: 40,
            fontWeight: 300,
            letterSpacing: "0.35em",
          }}
        >
          DYNIQUE
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
          <div
            style={{
              color: "#fbbf24",
              fontSize: 18,
              fontWeight: 300,
              letterSpacing: "0.55em",
              textTransform: "uppercase",
              marginBottom: "28px",
            }}
          >
            Full Creative Development Agency
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: 74,
              fontWeight: 300,
              lineHeight: 1.06,
              letterSpacing: "-0.01em",
            }}
          >
            Dynamisch in aanpak,
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.42)",
              fontSize: 74,
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.06,
            }}
          >
            uniek in resultaat.
          </div>
        </div>

        {/* Bottom: meta + thin rule */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "rgba(255,255,255,0.08)",
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "rgba(255,255,255,0.32)",
              fontSize: 20,
              fontWeight: 300,
              letterSpacing: "0.22em",
            }}
          >
            <span>Websites · Maatwerk Software · AI Marketing · Drone</span>
            <span>dynique.nl</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
