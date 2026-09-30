"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "#" },
  { label: "Sobre nosotros", href: "#" },
  { label: "Contacto", href: "#" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  // Al bajar, el header se compacta y se vuelve opaco
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "header-drop fixed inset-x-0 top-0 z-50 border-b-4 border-[#ff0088] font-sans text-white backdrop-blur-sm transition-colors duration-300 ease-[steps(3)]",
        scrolled ? "bg-[#001122]" : "bg-[#001122]/70"
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-[1200px] max-w-full items-center gap-6 px-4 transition-[height] duration-300 ease-[steps(4)]",
          scrolled ? "h-16" : "h-20"
        )}
      >
        {/* Love Ball a tamaño nativo (18x18) escalada x3 sin difuminar */}
        <a href="/" aria-label="Inicio" className="shrink-0 transition-transform hover:-rotate-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/multimedia/loveball.png"
            alt=""
            width={54}
            height={54}
            className="block [image-rendering:pixelated] drop-shadow-[0_0_12px_rgba(255,0,136,0.6)]"
          />
        </a>

        <form role="search" className="mx-auto hidden w-full max-w-sm md:block">
          <input
            type="search"
            placeholder="Buscar..."
            aria-label="Buscar"
            className="h-11 w-full border-2 border-[#ff0088] bg-[#001122] px-4 text-lg text-white shadow-[4px_4px_0_#ff0088] outline-none placeholder:text-white/50 focus:bg-[#0a1f38]"
          />
        </form>

        <nav className="ml-auto flex items-center gap-3 md:ml-0">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="border-2 border-[#ff0088] bg-[#001122] px-3 py-1.5 text-lg whitespace-nowrap shadow-[4px_4px_0_#ff0088] transition-transform hover:translate-x-1 hover:translate-y-1 hover:bg-[#ff0088] hover:shadow-none"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
