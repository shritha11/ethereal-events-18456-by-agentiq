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

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1599314530540-3340de0afc8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZm9yJTIwZXZlbnQlMjBwbGFubmluZyUyMGJ1c2luZXNzJTIwbWFpbmx5JTIwd2VkZGluZ3MlMEQlMEFVc2VyJTIwZGlyZWN0aW9uJTNBJTIwcm9tYW50aWMlMjB8ZW58MHx8fHwxNzgyNTc1NTE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1706515752924-fdebe59f85f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwyfHx3ZWJzaXRlJTIwZm9yJTIwZXZlbnQlMjBwbGFubmluZyUyMGJ1c2luZXNzJTIwbWFpbmx5JTIwd2VkZGluZ3MlMEQlMEFVc2VyJTIwZGlyZWN0aW9uJTNBJTIwcm9tYW50aWMlMjB8ZW58MHx8fHwxNzgyNTc1NTE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1707190979488-ba1f00c106c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwzfHx3ZWJzaXRlJTIwZm9yJTIwZXZlbnQlMjBwbGFubmluZyUyMGJ1c2luZXNzJTIwbWFpbmx5JTIwd2VkZGluZ3MlMEQlMEFVc2VyJTIwZGlyZWN0aW9uJTNBJTIwcm9tYW50aWMlMjB8ZW58MHx8fHwxNzgyNTc1NTE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1706515752882-f7cdc51bd270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHw0fHx3ZWJzaXRlJTIwZm9yJTIwZXZlbnQlMjBwbGFubmluZyUyMGJ1c2luZXNzJTIwbWFpbmx5JTIwd2VkZGluZ3MlMEQlMEFVc2VyJTIwZGlyZWN0aW9uJTNBJTIwcm9tYW50aWMlMjB8ZW58MHx8fHwxNzgyNTc1NTE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1758384075947-19c6bd7a1afb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHw1fHx3ZWJzaXRlJTIwZm9yJTIwZXZlbnQlMjBwbGFubmluZyUyMGJ1c2luZXNzJTIwbWFpbmx5JTIwd2VkZGluZ3MlMEQlMEFVc2VyJTIwZGlyZWN0aW9uJTNBJTIwcm9tYW50aWMlMjB8ZW58MHx8fHwxNzgyNTc1NTE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  return (
    <section
      style={{
        backgroundColor: C.bgAlt,
        padding: C.sectionPad,
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: C.h2Size,
          fontWeight: C.heroWeight,
          letterSpacing: C.heroTracking,
          lineHeight: C.heroLH,
          marginBottom: C.gap,
          color: C.text,
          fontFamily: C.font,
        }}
      >
        Our Gallery
      </h2>
      <p
        style={{
          maxWidth: C.maxW,
          margin: "0 auto 40px",
          color: C.textMuted,
          fontSize: "18px",
          lineHeight: 1.6,
          fontFamily: C.font,
        }}
      >
        Explore some of the magical moments we’ve created for our clients. Each
        event is a unique story of love, celebration, and elegance.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: C.gap,
          maxWidth: C.maxW,
          margin: "0 auto",
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            style={{
              overflow: "hidden",
              borderRadius: C.cardR,
              boxShadow: C.shadow,
              transition: C.ease,
            }}
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: C.ease,
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            />
          </div>
        ))}
      </div>
    </section>
  );
}