import React from 'react';
import { Heart, Sparkles, Users, TrendingUp, Star, CheckCircle } from 'lucide-react';

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

export default function Features() {
  const cards = [
    {
      icon: Heart,
      title: "Personalized Planning",
      body: "Tailored wedding plans to fit your vision.",
    },
    {
      icon: Sparkles,
      title: "Elegant Designs",
      body: "Creating timeless and romantic aesthetics.",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      body: "Work closely with our expert planners.",
    },
    {
      icon: TrendingUp,
      title: "Stress-Free Experience",
      body: "We handle every detail seamlessly.",
    },
    {
      icon: Star,
      title: "Trusted Vendors",
      body: "Access to top-tier wedding professionals.",
    },
    {
      icon: CheckCircle,
      title: "On-Day Coordination",
      body: "Ensuring your day runs smoothly.",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: C.bgAlt,
        padding: C.sectionPad,
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: C.maxW,
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: C.textSubtle,
            fontSize: "14px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "8px",
          }}
        >
          WHY ETHEREAL EVENTS
        </p>
        <h2
          style={{
            fontSize: C.h2Size,
            fontWeight: C.heroWeight,
            letterSpacing: C.heroTracking,
            lineHeight: C.heroLH,
            color: C.text,
            marginBottom: "40px",
            fontFamily: C.font,
          }}
        >
          Our signature approach to weddings
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: C.gap,
          }}
        >
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: C.surface,
                  padding: C.cardPad,
                  borderRadius: C.cardR,
                  boxShadow: C.shadow,
                  transition: C.ease,
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = C.lift)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <Icon
                  size={40}
                  color={C.primary}
                  style={{ marginBottom: "16px" }}
                />
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "8px",
                    color: C.text,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: C.textMuted,
                    lineHeight: "1.6",
                  }}
                >
                  {card.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}