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

export default function CTA() {
  return (
    <section
      style={{
        padding: C.sectionPad,
        position: "relative",
        overflow: "hidden",
        background: C.bgAlt,
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "600px",
          height: "300px",
          background: `radial-gradient(ellipse, ${C.primaryGlow} 0%, transparent 70%)`,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      ></div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "640px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: C.h2Size,
            fontWeight: C.heroWeight,
            letterSpacing: C.heroTracking,
            lineHeight: C.heroLH,
            fontFamily: C.font,
            color: C.text,
            background: `linear-gradient(to right, ${C.primary}, ${C.secondary})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Plan Your Dream Wedding
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: C.textMuted,
            marginBottom: "40px",
          }}
        >
          Let us bring your vision to life with elegance and perfection.
        </p>
        <button
          style={{
            padding: "12px 32px",
            fontSize: "16px",
            fontWeight: "600",
            color: "#fff",
            background: C.primary,
            border: "none",
            borderRadius: C.btnR,
            boxShadow: C.btnShadow,
            cursor: "pointer",
            transition: C.ease,
          }}
          onMouseOver={(e) =>
            (e.target.style.transform = C.lift)
          }
          onMouseOut={(e) =>
            (e.target.style.transform = "translateY(0)")
          }
        >
          Plan your dream wedding
        </button>
        <p
          style={{
            fontSize: "14px",
            color: C.textSubtle,
            marginTop: "20px",
          }}
        >
          No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}