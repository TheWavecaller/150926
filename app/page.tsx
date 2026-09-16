export default function Page() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          minHeight: "450px",
          backgroundColor: "#fbcfe8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "1200px",
            maxWidth: "100%",
            height: "100%",
            backgroundColor: "#fae8ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: "30px", textAlign: "center", lineHeight: "1em" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a molestie arcu, vel
            dictum massa. Mauris augue diam, aliquet quis egestas at, placerat at erat. Sed
            tincidunt enim sapien, in bibendum nunc dapibus eget. Aenean mollis, nunc sed
            elementum fermentum, ipsum lectus consectetur ante, nec euismod nisi nunc in dui.
          </p>
        </div>
      </div>
      <div style={{ width: "100vw", height: "50vh", minHeight: "450px", backgroundColor: "#fff1f2" }} />
      <div style={{ width: "100vw", height: "50vh", minHeight: "450px", backgroundColor: "#831843" }} />
    </>
  )
}
