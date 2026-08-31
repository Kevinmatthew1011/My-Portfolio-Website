import { ImageResponse } from "next/og";

export const alt =
  "Kevin Matthew - Full-Stack Developer and AI/ML Builder portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#09090b",
          color: "#fafafa",
          padding: "72px 80px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#60a5fa",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 86, fontWeight: 800, letterSpacing: "-0.04em" }}>
            Kevin Matthew
          </div>
          <div style={{ marginTop: 18, fontSize: 38, color: "#a1a1aa" }}>
            Full-Stack Developer · AI/ML Builder
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#d4d4d8" }}>
          Software Engineering &amp; Applied AI
        </div>
      </div>
    ),
    size,
  );
}
