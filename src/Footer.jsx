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

export default function Footer() {
  return (
    <footer
      style={{
        background: C.bg,
        borderTop: `1px solid ${C.border}`,
        padding: "80px 80px 40px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "60px",
          flexWrap: "wrap",
          gap: "32px",
        }}
      >
        <div style={{ maxWidth: "240px" }}>
          <h1
            style={{
              fontSize: "24px",
              fontWeight: 700,
              background: `linear-gradient(90deg, ${C.primary}, ${C.secondary})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0,
            }}
          >
            Ethereal Events
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: C.textSubtle,
              marginTop: "8px",
            }}
          >
            Crafting timeless moments for your most special days.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "64px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: C.textSubtle,
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Services
            </h3>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Wedding Planning
            </a>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Event Coordination
            </a>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Venue Sourcing
            </a>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Floral Design
            </a>
          </div>
          <div>
            <h3
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: C.textSubtle,
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Company
            </h3>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              About Us
            </a>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Careers
            </a>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Press
            </a>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Contact
            </a>
          </div>
          <div>
            <h3
              style={{
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: C.textSubtle,
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Resources
            </h3>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Blog
            </a>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              FAQs
            </a>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: C.textMuted,
                cursor: "pointer",
                display: "block",
                marginBottom: "10px",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.text)}
              onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: `1px solid ${C.border}`,
          paddingTop: "32px",
          marginTop: "0",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            color: C.textSubtle,
          }}
        >
          © 2026 Ethereal Events. All rights reserved.
        </p>
        <p
          style={{
            fontSize: "13px",
            color: C.textSubtle,
          }}
        >
          Built with AgentIQ
        </p>
      </div>
    </footer>
  );
}