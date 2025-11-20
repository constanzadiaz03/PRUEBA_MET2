export default function HomeScreen() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        background: "white",
        overflow: "hidden",
        borderRadius: 30,
      }}
    >
      {/* TARJETA 1 */}
      <div
        style={{
          width: 268,
          height: 384,
          left: 20,
          top: 300,
          position: "absolute",
          background: "white",
          boxShadow: "0px 6px 16px rgba(180,180,180,0.12)",
          borderRadius: 24,
        }}
      />

      <img
        style={{
          width: 240,
          height: 286,
          left: 34,
          top: 314,
          position: "absolute",
          borderRadius: 20,
        }}
        src="https://placehold.co/240x286"
        alt=""
      />

      <div
        style={{
          width: 34,
          height: 34,
          left: 226,
          top: 328,
          position: "absolute",
          opacity: 0.2,
          background: "#1B1E28",
          borderRadius: 20,
          backdropFilter: "blur(15px)",
        }}
      />

      <div style={{ left: 40, top: 614, position: "absolute", color: "#1B1E28", fontSize: 18 }}>
        Torres del Paine
      </div>

      <div
        style={{
          width: 24,
          left: 246,
          top: 616,
          position: "absolute",
          textAlign: "right",
          color: "#1B1E28",
          fontSize: 15,
        }}
      >
        4.8
      </div>

      <div
        style={{
          width: 12,
          height: 12,
          left: 230,
          top: 619,
          position: "absolute",
          background: "#FFD336",
          borderRadius: 3,
        }}
      />

      <div
        style={{
          left: 60,
          top: 648,
          position: "absolute",
          color: "#7D848D",
          fontSize: 15,
        }}
      >
        Magallanes y la Antártica
      </div>

      {/* TARJETA 2 */}
      <div
        style={{
          width: 268,
          height: 384,
          left: 304,
          top: 300,
          position: "absolute",
          background: "white",
          boxShadow: "0px 6px 16px rgba(180,180,180,0.12)",
          borderRadius: 24,
        }}
      />

      <img
        style={{
          width: 240,
          height: 286,
          left: 318,
          top: 314,
          position: "absolute",
          borderRadius: 20,
        }}
        src="https://placehold.co/240x286"
        alt=""
      />

      <div style={{ left: 324, top: 614, position: "absolute", color: "#1B1E28", fontSize: 18 }}>
        Cajón del Maipo
      </div>

      <div
        style={{
          left: 529,
          top: 616,
          position: "absolute",
          color: "#1B1E28",
          fontSize: 15,
        }}
      >
        4.8
      </div>

      <div
        style={{
          width: 12,
          height: 12,
          left: 513,
          top: 619,
          position: "absolute",
          background: "#FFD336",
          borderRadius: 3,
        }}
      />

      <div
        style={{
          left: 344,
          top: 648,
          position: "absolute",
          color: "#7D848D",
          fontSize: 15,
        }}
      >
        San José de Maipo
      </div>

      {/* TÍTULOS PRINCIPALES */}
      <div
        style={{
          width: 300,
          height: "auto",
          left: 20,
          top: 124,
          position: "absolute",
          fontSize: 38,
          color: "#1B1E28",
          fontFamily: "SF UI Display",
          lineHeight: "50px",
        }}
      >
        <span style={{ fontWeight: 300 }}>Conoce a lo largo </span>
        <span style={{ fontWeight: 400 }}>de </span>
        <span style={{ color: "#007AFF", fontWeight: 400 }}>Chile!</span>
      </div>

      <div
        style={{
          left: 20,
          top: 256,
          position: "absolute",
          color: "#1B1E28",
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        Mejores destinos
      </div>

      <div
        style={{
          left: 304,
          top: 262,
          position: "absolute",
          color: "#0D6EFD",
          fontSize: 14,
          textAlign: "right",
        }}
      >
        Ver todo
      </div>
    </div>
  );
}
