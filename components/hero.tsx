"use client"

import { useEffect, useRef, useState } from "react"

import { DitheringShader } from "@/components/ui/dithering-shader"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [pxSize, setPxSize] = useState(3)

  // Al hacer scroll el fondo se pixela cada vez más y el texto sube y se desvanece
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const el = ref.current
      if (!el) return
      const progress = Math.min(Math.max(window.scrollY / el.offsetHeight, 0), 1)
      el.style.setProperty("--hero-progress", String(progress))
      setPxSize(3 + Math.round(progress * 9))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100vw",
        height: "70vh",
        minHeight: "450px",
        backgroundColor: "#001122",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <DitheringShader
        pxSize={pxSize}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          opacity: "calc(1 - var(--hero-progress, 0) * 0.6)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "1200px",
          maxWidth: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: "translateY(calc(var(--hero-progress, 0) * -120px))",
          opacity: "calc(1 - var(--hero-progress, 0) * 1.5)",
        }}
      >
        <p
          className="reveal"
          data-visible="true"
          style={{ fontSize: "30px", textAlign: "center", lineHeight: "1em", color: "#ffffff" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a molestie arcu, vel
          dictum massa. Mauris augue diam, aliquet quis egestas at, placerat at erat. Sed
          tincidunt enim sapien, in bibendum nunc dapibus eget. Aenean mollis, nunc sed
          elementum fermentum, ipsum lectus consectetur ante, nec euismod nisi nunc in dui.
        </p>
      </div>
    </div>
  )
}
