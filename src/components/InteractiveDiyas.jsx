import React, { useState, useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

export default function InteractiveDiyas() {
  // 5 Sacred Diyas representing Pancha Bhootas (Elements) & Blessings
  const [litDiyas, setLitDiyas] = useState([false, false, false, false, false]);
  const [blessingMessage, setBlessingMessage] = useState("");
  const sectionRef = useRef(null);

  const diyaMeanings = [
    { title: "Peace", shanti: "Shanti" },
    { title: "Prosperity", shanti: "Samriddhi" },
    { title: "Health", shanti: "Arogya" },
    { title: "Joy", shanti: "Ananda" },
    { title: "Wisdom", shanti: "Jnana" }
  ];

  // Scroll into view auto-lighting sequence
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Sequentially light each diya
          [0, 1, 2, 3, 4].forEach((index) => {
            setTimeout(() => {
              setLitDiyas((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }, index * 350 + 200);
          });
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDiyaClick = (index) => {
    // Offer prayer / toggle
    setLitDiyas((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });

    const meaning = diyaMeanings[index];
    setBlessingMessage(`Offered a sacred prayer for ${meaning.title} (${meaning.shanti}) ✨`);
    setTimeout(() => setBlessingMessage(""), 3500);
  };

  const allLit = litDiyas.every(Boolean);

  return (
    <section
      ref={sectionRef}
      id="diyas"
      aria-label="Sacred Diyas Section"
      style={{
        padding: "90px 20px",
        position: "relative",
        zIndex: 2,
        maxWidth: "880px",
        margin: "0 auto",
        textAlign: "center"
      }}
    >
      <div style={{ marginBottom: "40px" }}>
        <p
          className="font-display"
          style={{
            fontSize: "0.8rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--saffron-bright)",
            marginBottom: "8px"
          }}
        >
          Sacred Lamps of Illumination
        </p>

        <h2
          className="font-heading"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
            color: "var(--gold-light)",
            fontWeight: 600
          }}
        >
          Light of Devotion
        </h2>

        <div className="gold-divider">
          <span className="gold-divider-symbol">🪔</span>
        </div>

        <p
          style={{
            fontSize: "1rem",
            color: "var(--text-secondary)",
            maxWidth: "520px",
            margin: "0 auto"
          }}
        >
          Each flame symbolizes wisdom, dispelling darkness, and welcoming
          auspicious beginnings into our lives. Tap any diya to offer a prayer.
        </p>
      </div>

      {/* Diyas Row / Altar Display */}
      <div
        className="glass-panel"
        style={{
          padding: "clamp(36px, 6vw, 60px) 20px 40px",
          background: "radial-gradient(ellipse at 50% 100%, rgba(245, 158, 11, 0.12) 0%, rgba(11, 17, 38, 0.75) 60%)",
          position: "relative",
          overflow: "visible"
        }}
      >
        {/* Diyas Container */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: "clamp(16px, 4vw, 42px)",
            flexWrap: "wrap",
            position: "relative",
            zIndex: 1
          }}
        >
          {litDiyas.map((isLit, i) => (
            <div
              key={i}
              onClick={() => handleDiyaClick(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleDiyaClick(i)}
              aria-label={`Sacred Diya ${i + 1} for ${diyaMeanings[i].title}. ${isLit ? "Illuminated" : "Tap to light"}`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                padding: "8px"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              {/* Flame & Warm Glow */}
              <div
                style={{
                  height: "56px",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  position: "relative",
                  marginBottom: "-4px"
                }}
              >
                {isLit && (
                  <>
                    {/* Flame Radial Aura Glow */}
                    <div
                      className="animate-diya-aura"
                      style={{
                        position: "absolute",
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle, rgba(251, 191, 36, 0.5) 0%, rgba(245, 158, 11, 0.25) 40%, rgba(245, 158, 11, 0) 70%)",
                        pointerEvents: "none",
                        bottom: "0"
                      }}
                    />

                    {/* Realistic Layered SVG Flame */}
                    <svg
                      width="26"
                      height="46"
                      viewBox="0 0 26 46"
                      className="animate-flame"
                      style={{
                        filter: "drop-shadow(0 0 8px rgba(251, 191, 36, 0.8))",
                        zIndex: 2
                      }}
                    >
                      {/* Outer Flame (Orange / Saffron) */}
                      <path
                        d="M 13 2 C 16 12 24 22 24 33 C 24 40 19 45 13 45 C 7 45 2 40 2 33 C 2 22 10 12 13 2 Z"
                        fill="url(#outerFlameGrad)"
                      />
                      {/* Inner Flame (Bright Golden Core) */}
                      <path
                        d="M 13 14 C 15 20 19 26 19 34 C 19 39 16 43 13 43 C 10 43 7 39 7 34 C 7 26 11 20 13 14 Z"
                        fill="url(#innerFlameGrad)"
                      />
                      {/* Innermost White Heat */}
                      <ellipse cx="13" cy="36" rx="3.5" ry="5.5" fill="#ffffff" opacity="0.9" />

                      <defs>
                        <linearGradient id="outerFlameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#fef08a" />
                          <stop offset="40%" stopColor="#f59e0b" />
                          <stop offset="100%" stopColor="#ea580c" />
                        </linearGradient>
                        <linearGradient id="innerFlameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="50%" stopColor="#fde047" />
                          <stop offset="100%" stopColor="#f59e0b" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </>
                )}

                {/* Unlit Wick indicator if dim */}
                {!isLit && (
                  <div
                    style={{
                      width: "3px",
                      height: "10px",
                      background: "#555",
                      borderRadius: "2px"
                    }}
                  />
                )}
              </div>

              {/* Handcrafted Brass Diya Base (SVG) */}
              <svg
                width="64"
                height="32"
                viewBox="0 0 64 32"
                style={{
                  filter: isLit
                    ? "drop-shadow(0 2px 10px rgba(212, 175, 55, 0.4))"
                    : "drop-shadow(0 2px 6px rgba(0,0,0,0.5))"
                }}
              >
                {/* Diya Bowl */}
                <path
                  d="M 6 12 C 6 22 22 28 32 28 C 42 28 58 22 58 12 C 58 8 50 10 32 10 C 14 10 6 8 6 12 Z"
                  fill="url(#brassGrad)"
                  stroke="#e6ca65"
                  strokeWidth="0.8"
                />
                {/* Diya Rim Highlight */}
                <ellipse
                  cx="32"
                  cy="11"
                  rx="26"
                  ry="4"
                  fill="#785210"
                  stroke="#f5e7b2"
                  strokeWidth="0.5"
                />
                {/* Diya Pedestal Base */}
                <path
                  d="M 22 27 L 18 31 L 46 31 L 42 27 Z"
                  fill="url(#brassDarkGrad)"
                  stroke="#c5a059"
                  strokeWidth="0.6"
                />

                <defs>
                  <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f7e199" />
                    <stop offset="45%" stopColor="#d4af37" />
                    <stop offset="100%" stopColor="#7a5311" />
                  </linearGradient>
                  <linearGradient id="brassDarkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8a6114" />
                    <stop offset="50%" stopColor="#d4af37" />
                    <stop offset="100%" stopColor="#68470a" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Diya Label */}
              <span
                style={{
                  marginTop: "8px",
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: isLit ? "var(--gold-light)" : "var(--text-dim)",
                  fontFamily: "var(--font-display)",
                  transition: "color 0.4s ease"
                }}
              >
                {diyaMeanings[i].title}
              </span>
            </div>
          ))}
        </div>

        {/* Dynamic Prayer Blessing Toast */}
        {blessingMessage && (
          <div
            style={{
              marginTop: "24px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              borderRadius: "999px",
              background: "rgba(245, 158, 11, 0.15)",
              border: "1px solid rgba(245, 158, 11, 0.35)",
              color: "var(--gold-light)",
              fontSize: "0.88rem",
              fontFamily: "var(--font-heading)",
              fontStyle: "italic"
            }}
          >
            <Sparkles size={15} className="text-saffron" />
            <span>{blessingMessage}</span>
          </div>
        )}

        {/* Sacred Chanted Phrase Revealed as user illuminates the altar */}
        <div
          style={{
            marginTop: "36px",
            opacity: allLit ? 1 : 0.4,
            transform: allLit ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        >
          <div className="gold-divider">
            <span className="gold-divider-symbol">✦</span>
          </div>

          <h3
            className="font-heading shimmer-gold"
            style={{
              fontSize: "clamp(1.7rem, 4vw, 2.5rem)",
              fontWeight: 600,
              letterSpacing: "0.06em",
              margin: "12px 0 8px"
            }}
          >
            Come. Celebrate. Pray. Rejoice.
          </h3>

          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-secondary)",
              fontFamily: "var(--font-heading)",
              fontStyle: "italic"
            }}
          >
            May the sacred light of Ganpati Bappa illuminate your home with peace and prosperity.
          </p>
        </div>
      </div>
    </section>
  );
}
