import { DitheringShader } from "@/components/ui/dithering-shader"

export default function Page() {
  return (
    <>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100vw",
          height: "100vh",
          minHeight: "450px",
          backgroundColor: "#fbcfe800",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DitheringShader
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "1200px",
            maxWidth: "100%",
            height: "100%",
            backgroundColor: "#fae8ff00",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: "30px", textAlign: "center", lineHeight: "1em", color: "#ffffff" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a molestie arcu, vel
            dictum massa. Mauris augue diam, aliquet quis egestas at, placerat at erat. Sed
            tincidunt enim sapien, in bibendum nunc dapibus eget. Aenean mollis, nunc sed
            elementum fermentum, ipsum lectus consectetur ante, nec euismod nisi nunc in dui.
          </p>
        </div>
      </div>
      <div style={{ width: "100vw", height: "50vh", minHeight: "450px", backgroundColor: "#831843" }} />
    </>
  )
}
