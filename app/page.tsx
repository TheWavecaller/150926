import { Hero } from "@/components/hero"
import { Reveal } from "@/components/reveal"
import { SiteHeader } from "@/components/site-header"

const sectionStyle = {
  width: "100vw",
  padding: "96px 24px",
  display: "flex",
  justifyContent: "center",
}

const gridStyle = {
  width: "1200px",
  maxWidth: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  gap: "24px",
}

const cardStyle = {
  gridColumn: "span 6",
  minHeight: "420px",
  borderRadius: "16px",
  overflow: "hidden",
}

// Sombra oscura para despegar la tarjeta del fondo + resplandor de su propio color
const cardShadow = (glow: string) =>
  `0 24px 48px -12px rgba(0, 0, 0, 0.7), 0 0 40px -8px ${glow}, inset 0 1px 0 rgba(255, 255, 255, 0.15)`

const cardTextStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "48px",
  lineHeight: "1.1em",
  textWrap: "balance",
  color: "#001122",
} as const

export default function Page() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <section style={{ ...sectionStyle, position: "relative", backgroundColor: "#001122" }}>
        {/* Overlay: tinte rosa-cian + scanlines suaves, por debajo de las tarjetas */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0 2px, transparent 2px 4px), linear-gradient(135deg, rgba(255, 0, 136, 0.22), rgba(0, 217, 255, 0.12))",
          }}
        />
        <div style={{ ...gridStyle, position: "relative" }}>
          <Reveal
            style={{
              ...cardStyle,
              padding: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p className="pixel-cursor" style={{ ...cardTextStyle, color: "#ff0088" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Reveal>
          <Reveal
            delay={150}
            style={{
              ...cardStyle,
              position: "relative",
              backgroundColor: "#0a2a4d",
              outline: "3px solid #00d9ff",
              boxShadow:
                "0 32px 64px -12px rgba(0, 0, 0, 0.8), 0 0 80px -4px rgba(0, 217, 255, 0.6), 0 0 24px rgba(255, 0, 136, 0.4)",
            }}
          >
            <video
              src="/multimedia/bucle.webm"
              autoPlay
              loop
              muted
              playsInline
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Reveal>
        </div>
      </section>
      <section style={{ ...sectionStyle, backgroundColor: "#1a0633" }}>
        <div style={gridStyle}>
          <Reveal
            style={{ ...cardStyle, backgroundColor: "#3b0d6b", boxShadow: cardShadow("#8a3ffc80") }}
          />
          <Reveal
            delay={150}
            style={{
              ...cardStyle,
              backgroundColor: "#00d9ff",
              boxShadow: cardShadow("#00d9ff80"),
              padding: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p className="pixel-cursor" style={cardTextStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
