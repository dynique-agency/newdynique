import { ImageResponse } from "next/og";

// Required for static export
export const dynamic = "force-static";

export const alt = "Dynique · Full Creative Development Agency";
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
          backgroundColor: "#050505",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(212,165,116,0.22) 0%, rgba(212,165,116,0) 65%)",
          }}
        />

        {/* Top: wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#ffffff",
            fontSize: 38,
            fontWeight: 300,
            letterSpacing: "0.35em",
          }}
        >
          DYNIQUE
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#d4a574",
              fontSize: 22,
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            Full Creative Development Agency
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: 76,
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
            }}
          >
            Dynamisch in aanpak,
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 76,
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.05,
            }}
          >
            uniek in resultaat.
          </div>
        </div>

        {/* Bottom: meta line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "rgba(255,255,255,0.45)",
            fontSize: 24,
            letterSpacing: "0.2em",
          }}
        >
          Websites · Web Apps · AI Marketing · Drone — Limburg & Nationaal
        </div>
      </div>
    ),
    { ...size },
  );
}
