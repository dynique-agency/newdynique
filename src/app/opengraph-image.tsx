import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Dynique — Maatwerk Software & Development";
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
        {/* Ambient glow top-right — gold */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -180,
            width: 620,
            height: 620,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,165,116,0.28) 0%, transparent 65%)",
          }}
        />
        {/* Ambient glow bottom-left — violet */}
        <div
          style={{
            position: "absolute",
            bottom: -120,
            left: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.16) 0%, transparent 65%)",
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
              color: "#d4a574",
              fontSize: 18,
              fontWeight: 300,
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              marginBottom: "28px",
            }}
          >
            Maatwerk Software &amp; Development
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
            <span>Maatwerk Software · Web Applicaties · Digitalisering</span>
            <span>dynique.nl</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
