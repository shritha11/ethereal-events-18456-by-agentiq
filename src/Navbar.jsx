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

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = React.useState(null);
  const navLinks = ["Home", "About Us", "Gallery", "Testimonials", "Contact"];

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px",
        height: "68px",
        backgroundColor: C.bg,
        boxShadow: C.shadow,
      }}
    >
      <div
        style={{
          fontSize: "20px",
          fontWeight: 800,
          color: C.text,
          fontFamily: C.font,
        }}
      >
        Ethereal Events
      </div>
      <div
        style={{
          display: "flex",
          gap: "32px",
        }}
      >
        {navLinks.map((link, index) => (
          <a
            key={index}
            onMouseEnter={() => setHoveredLink(link)}
            onMouseLeave={() => setHoveredLink(null)}
            style={{
              fontSize: "14px",
              cursor: "pointer",
              textDecoration: "none",
              color: hoveredLink === link ? C.text : C.textMuted,
              transition: `color ${C.ease}`,
            }}
          >
            {link}
          </a>
        ))}
      </div>
      <button
        style={{
          background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
          padding: "9px 22px",
          borderRadius: C.btnR,
          border: "none",
          color: "#fff",
          fontSize: "13px",
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: C.btnShadow,
          transition: `opacity ${C.ease}, transform ${C.ease}`,
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-1px)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        Plan Your Wedding
      </button>
    </div>
  );
}