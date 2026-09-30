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
      {/* zIndex 1 para que Minior quede por encima de la portada al sobresalir */}
      <section
        style={{
          ...sectionStyle,
          position: "relative",
          zIndex: 1,
          overflowX: "clip",
          backgroundColor: "#001122",
        }}
      >
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
          {/* Minior a tamaño nativo (37x35) escalado x7; fuera del Reveal para que su clip-path no lo corte */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/multimedia/minior.png"
            alt="Minior en pixel art"
            width={259}
            height={245}
            className="pixel-sway"
            style={{
              position: "absolute",
              left: "-120px",
              top: "-240px",
              scale: "-1 1",
              zIndex: 1,
              imageRendering: "pixelated",
              pointerEvents: "none",
              filter:
                // x negativo porque el volteo (scale -1) también invierte la sombra
                "drop-shadow(-7px 7px 0 rgba(0, 0, 0, 0.45)) drop-shadow(0 0 28px rgba(255, 0, 136, 0.55))",
            }}
          />
          <Reveal
            style={{
              ...cardStyle,
              padding: "40px 40px 40px 240px",
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
              // Colores sacados del GIF: morado de Gengar (#8d5a9c) y sus rosas (#d6447c)
              outline: "3px solid #b784c9",
              boxShadow:
                "8px 8px 0 #d6447c, 0 32px 64px -12px rgba(0, 0, 0, 0.8), 0 0 80px -4px rgba(141, 90, 156, 0.75), 0 0 24px rgba(231, 112, 144, 0.45)",
            }}
          >
            {/* Pixel art a tamaño nativo (69x64); el navegador lo escala sin difuminar */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/multimedia/gengar.webp"
              alt="Gengar en pixel art"
              width={69}
              height={64}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                imageRendering: "pixelated",
              }}
            />
          </Reveal>
          {/* Jumpluff: contrapunto de Minior, sobresale por abajo a la derecha hacia la sección morada */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/multimedia/jumpluff.webp"
            alt="Jumpluff shiny en pixel art"
            width={324}
            height={301}
            className="pixel-drift"
            style={{
              position: "absolute",
              right: "-80px",
              bottom: "-230px",
              zIndex: 1,
              imageRendering: "pixelated",
              pointerEvents: "none",
              filter:
                "drop-shadow(9px 9px 0 rgba(0, 0, 0, 0.45)) drop-shadow(0 0 28px rgba(214, 150, 230, 0.6))",
            }}
          />
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
