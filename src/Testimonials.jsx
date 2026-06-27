import React from 'react';

const C = {
  bg:           "#fdf6f0",
  bgAlt:        "#f7ebe5",
  surface:      "rgba(255,255,255,0.9)",
  surfaceHover: "rgba(255,255,255,1)",
  border:       "rgba(216,167,177,0.4)",
  borderHover:  "rgba(216,167,177,0.6)",
  primary:      "#d8a7b1",
  primaryGlow:  "rgba(216,167,177,0.25)",
  secondary:    "#b0c4de",
  text:         "#5a4a4a",
  textMuted:    "rgba(90,74,74,0.6)",
  textSubtle:   "rgba(90,74,74,0.4)",
  heroSize:     "clamp(50px, 8vw, 100px)",
  h2Size:       "clamp(32px, 4.5vw, 58px)",
  heroWeight:   700,
  heroTracking: "-0.04em",
  heroLH:       1,
  font:         "'Playfair Display', serif",
  sectionPad:   "120px 60px",
  maxW:         "1200px",
  cardPad:      "30px",
  gap:          "16px",
  cardR:        "12px",
  btnR:         "50px",
  shadow:       "0 2px 20px rgba(0,0,0,0.15)",
  glow:         "0 0 40px rgba(216,167,177,0.25)",
  btnShadow:    "0 4px 16px rgba(216,167,177,0.35)",
  ease:         "0.3s ease",
  lift:         "translateY(-3px)",
};

function Testimonials() {
  const testimonials = [
    {
      name: "Sophia & Liam",
      text: "Ethereal Events made our wedding day truly magical. From the stunning decor to the flawless coordination, every detail was perfect. We couldn’t have asked for a better experience.",
      image: "https://images.unsplash.com/photo-1706515752924-fdebe59f85f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwyfHx3ZWJzaXRlJTIwZm9yJTIwZXZlbnQlMjBwbGFubmluZyUyMGJ1c2luZXNzJTIwbWFpbmx5JTIwd2VkZGluZ3MlMEQlMEFVc2VyJTIwZGlyZWN0aW9uJTNBJTIwcm9tYW50aWMlMjB8ZW58MHx8fHwxNzgyNTc1NTE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Emma & Noah",
      text: "The team at Ethereal Events exceeded all our expectations. Their attention to detail and creative vision brought our dream wedding to life. We are forever grateful!",
      image: "https://images.unsplash.com/photo-1707190979488-ba1f00c106c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwzfHx3ZWJzaXRlJTIwZm9yJTIwZXZlbnQlMjBwbGFubmluZyUyMGJ1c2luZXNzJTIwbWFpbmx5JTIwd2VkZGluZ3MlMEQlMEFVc2VyJTIwZGlyZWN0aW9uJTNBJTIwcm9tYW50aWMlMjB8ZW58MHx8fHwxNzgyNTc1NTE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Olivia & James",
      text: "Planning a wedding can be overwhelming, but Ethereal Events made it effortless. Their professionalism and warmth made the entire process enjoyable. Highly recommend!",
      image: "https://images.unsplash.com/photo-1706515752882-f7cdc51bd270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHw0fHx3ZWJzaXRlJTIwZm9yJTIwZXZlbnQlMjBwbGFubmluZyUyMGJ1c2luZXNzJTIwbWFpbmx5JTIwd2VkZGluZ3MlMEQlMEFVc2VyJTIwZGlyZWN0aW9uJTNBJTIwcm9tYW50aWMlMjB8ZW58MHx8fHwxNzgyNTc1NTE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
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
      <h2
        style={{
          fontSize: C.h2Size,
          fontWeight: C.heroWeight,
          letterSpacing: C.heroTracking,
          marginBottom: "40px",
          color: C.text,
          fontFamily: C.font,
        }}
      >
        What Our Clients Say
      </h2>
      <div
        style={{
          display: "grid",
          gap: C.gap,
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          maxWidth: C.maxW,
          margin: "0 auto",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            style={{
              backgroundColor: C.surface,
              padding: C.cardPad,
              borderRadius: C.cardR,
              boxShadow: C.shadow,
              transition: C.ease,
              transform: "translateY(0)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = C.lift)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <img
              src={testimonial.image}
              alt={`${testimonial.name}'s testimonial`}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: `${C.cardR} ${C.cardR} 0 0`,
                marginBottom: "16px",
              }}
            />
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.5",
                color: C.textMuted,
                marginBottom: "16px",
                fontFamily: C.font,
              }}
            >
              "{testimonial.text}"
            </p>
            <strong
              style={{
                fontSize: "18px",
                color: C.text,
                fontFamily: C.font,
              }}
            >
              {testimonial.name}
            </strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;