"use client"

import { Dithering, type DitheringProps } from "@paper-design/shaders-react"

import { cn } from "@/lib/utils"

export type DitheringShaderProps = DitheringProps

export function DitheringShader({ className, ...props }: DitheringShaderProps) {
  return (
    <Dithering
      shape="wave"
      type="8x8"
      colorBack="#001122"
      colorFront="#ff0088"
      pxSize={3}
      speed={0.6}
      className={cn("h-full w-full", className)}
      {...props}
    />
  )
}
