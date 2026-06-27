import React from 'react';

const C = {
  bg: "#fdf6f0",
  bgAlt: "#f7ebe5",
  surface: "rgba(255,255,255,0.9)",
  surfaceHover: "rgba(255,255,255,1)",
  border: "rgba(216,167,177,0.4)",
  borderHover: "rgba(216,167,177,0.6)",
  primary: "#d8a7b1",
  primaryGlow: "rgba(216,167,177,0.25)",
  secondary: "#b0c4de",
  text: "#5a4a4a",
  textMuted: "rgba(90,74,74,0.6)",
  textSubtle: "rgba(90,74,74,0.4)",
  heroSize: "clamp(50px, 8vw, 100px)",
  h2Size: "clamp(32px, 4.5vw, 58px)",
  heroWeight: 700,
  heroTracking: "-0.04em",
  heroLH: 1,
  font: "'Playfair Display', serif",
  sectionPad: "120px 60px",
  maxW: "1200px",
  cardPad: "30px",
  gap: "16px",
  cardR: "12px",
  btnR: "50px",
  shadow: "0 2px 20px rgba(0,0,0,0.15)",
  glow: "0 0 40px rgba(216,167,177,0.25)",
  btnShadow: "0 4px 16px rgba(216,167,177,0.35)",
  ease: "0.3s ease",
  lift: "translateY(-3px)",
};

export default function Hero() {
  const [hover, setHover] = React.useState(false);

  return (
    <section
      style={{
        backgroundColor: C.bg,
        padding: C.sectionPad,
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          pointerEvents: "none",
          top: "-10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${C.primaryGlow} 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      ></div>
      <div
        style={{
          maxWidth: C.maxW,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: C.primary,
            fontWeight: 600,
            marginBottom: "24px",
          }}
        >
          EXPERT WEDDING PLANNING
        </p>
        <h1
          style={{
            fontSize: C.heroSize,
            fontWeight: C.heroWeight,
            letterSpacing: C.heroTracking,
            lineHeight: C.heroLH,
            marginBottom: "24px",
            fontFamily: C.font,
          }}
        >
          {["Romantic", "weddings,", "beautifully", "planned"].map((word, index) => (
            <span
              key={index}
              style={
                ["Romantic", "beautifully"].includes(word)
                  ? {
                      background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      display: "inline",
                    }
                  : { color: C.text, display: "inline" }
              }
            >
              {word + " "}
            </span>
          ))}
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: C.textMuted,
            lineHeight: 1.75,
            maxWidth: "520px",
            margin: "0 auto 40px",
          }}
        >
          We design unforgettable moments for your special day.
        </p>
        <div
          style={{
            display: "flex",
            gap: C.gap,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
              padding: "14px 32px",
              borderRadius: C.btnR,
              border: "none",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: hover ? C.glow : C.btnShadow,
              transform: hover ? C.lift : "none",
              transition: C.ease,
            }}
          >
            Plan your dream wedding
          </button>
          <button
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "14px 32px",
              borderRadius: C.btnR,
              color: C.text,
              cursor: "pointer",
              transition: C.ease,
            }}
            onMouseEnter={(e) =>
              (e.target.style.background = C.surfaceHover)
            }
            onMouseLeave={(e) =>
              (e.target.style.background = "transparent")
            }
          >
            Learn more →
          </button>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url('https://images.unsplash.com/photo-1599314530540-3340de0afc8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZm9yJTIwZXZlbnQlMjBwbGFubmluZyUyMGJ1c2luZXNzJTIwbWFpbmx5JTIwd2VkZGluZ3MlMEQlMEFVc2VyJTIwZGlyZWN0aW9uJTNBJTIwcm9tYW50aWMlMjB8ZW58MHx8fHwxNzgyNTc1NTE4fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
        }}
      ></div>
    </section>
  );
}