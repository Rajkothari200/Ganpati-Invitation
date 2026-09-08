import React, { useState, useEffect, useRef } from "react";
import { Sparkles, ChevronDown } from "lucide-react";
import { invitationConfig } from "../config/invitationConfig";

export default function OpeningHero({ isStarted = false }) {
  const [stage, setStage] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Cinematic Sequenced Reveal when invitation is opened
  useEffect(() => {
    if (!isStarted) return;

    // Stage 1: Glow & Sacred Om begin forming (300ms)
    const t1 = setTimeout(() => setStage(1), 300);
    // Stage 2: Divine Ganpati reveals (950ms)
    const t2 = setTimeout(() => setStage(2), 950);
    // Stage 3: Aura & Floating breathing settle (1650ms)
    const t3 = setTimeout(() => setStage(3), 1650);
    // Stage 4: Invitation Titles smoothly glide in (2300ms)
    const t4 = setTimeout(() => setStage(4), 2300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [isStarted]);

  // Subtle Parallax on Desktop
  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = (clientX - centerX) / centerX;
    const deltaY = (clientY - centerY) / centerY;
    setMouseOffset({ x: deltaX * 10, y: deltaY * 8 });
  };

  const scrollToInvitation = () => {
    const el = document.getElementById("invitation-message");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      onMouseMove={handleMouseMove}
      aria-label="Opening Divine Hero Section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "clamp(24px, 4vh, 44px) 16px clamp(54px, 8vh, 72px)",
        overflow: "hidden",
        textAlign: "center"
      }}
    >
      {/* Central Divine Warm Halo Glow */}
      <div
        className="animate-aura-pulse"
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: `translate(calc(-50% + ${mouseOffset.x * 0.4}px), calc(-50% + ${mouseOffset.y * 0.4}px))`,
          width: "min(680px, 92vw)",
          height: "min(680px, 92vw)",
          background:
            "radial-gradient(circle, rgba(245, 158, 11, 0.28) 0%, rgba(212, 175, 55, 0.16) 40%, rgba(6, 9, 20, 0) 72%)",
          borderRadius: "50%",
          pointerEvents: "none",
          opacity: stage >= 1 ? 1 : 0,
          transition: "opacity 2.2s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      />

      {/* Sacred Rotating Mandala Background Watermark */}
      <div
        className="animate-mandala-spin"
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          width: "min(560px, 85vw)",
          height: "min(560px, 85vw)",
          marginTop: "min(-280px, -42.5vw)",
          marginLeft: "min(-280px, -42.5vw)",
          pointerEvents: "none",
          opacity: stage >= 2 ? 0.07 : 0,
          transition: "opacity 2.5s ease"
        }}
      >
        <svg viewBox="0 0 400 400" fill="none" stroke="#d4af37" strokeWidth="1">
          <circle cx="200" cy="200" r="190" strokeDasharray="3 5" />
          <circle cx="200" cy="200" r="160" />
          <circle cx="200" cy="200" r="130" strokeDasharray="6 6" />
          <circle cx="200" cy="200" r="95" />
          <path d="M200 10 L200 390 M10 200 L390 200 M65 65 L335 335 M65 335 L335 65" opacity="0.4" />
          {Array.from({ length: 12 }).map((_, i) => (
            <path
              key={i}
              d={`M 200 200 Q ${200 + 120 * Math.cos((i * Math.PI) / 6)} ${200 + 120 * Math.sin((i * Math.PI) / 6)} ${200 + 160 * Math.cos(((i + 0.5) * Math.PI) / 6)} ${200 + 160 * Math.sin(((i + 0.5) * Math.PI) / 6)}`}
              opacity="0.6"
            />
          ))}
        </svg>
      </div>

      {/* Sacred Symbol Reveal */}
      <div
        style={{
          opacity: stage >= 1 ? 1 : 0,
          transform: stage >= 1 ? "translateY(0)" : "translateY(-12px)",
          transition: "opacity 1.8s ease, transform 1.8s ease",
          marginBottom: "6px",
          zIndex: 2
        }}
      >
        <div
          className="font-sanskrit animate-om-glow"
          style={{
            fontSize: "clamp(1.75rem, 4.5vw, 2.5rem)",
            background: "linear-gradient(135deg, #faecc1 0%, #d4af37 50%, #aa771c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            lineHeight: 1
          }}
        >
          ॐ
        </div>
        <p
          className="font-sanskrit"
          style={{
            fontSize: "clamp(0.8rem, 2vw, 0.98rem)",
            color: "var(--gold-light)",
            letterSpacing: "0.14em",
            marginTop: "2px",
            textShadow: "0 0 14px rgba(212, 175, 55, 0.45)"
          }}
        >
          {invitationConfig.sacredOpening}
        </p>
      </div>

      {/* Main Ganpati Hero Visual */}
      <div
        className="animate-divine-float"
        style={{
          position: "relative",
          zIndex: 2,
          opacity: stage >= 2 ? 1 : 0,
          transform: `translate(${mouseOffset.x * 0.7}px, ${mouseOffset.y * 0.7}px) ${stage >= 2 ? "scale(1)" : "scale(0.92)"}`,
          transition: "opacity 2.2s cubic-bezier(0.16, 1, 0.3, 1), transform 2.2s cubic-bezier(0.16, 1, 0.3, 1)",
          margin: "6px 0 10px"
        }}
      >
        {/* Soft Golden Halo Ring */}
        <div
          style={{
            position: "absolute",
            top: "-8px",
            left: "-8px",
            right: "-8px",
            bottom: "-8px",
            borderRadius: "20px",
            border: "1px solid rgba(212, 175, 55, 0.32)",
            boxShadow: "0 0 25px rgba(212, 175, 55, 0.25), inset 0 0 15px rgba(212, 175, 55, 0.15)",
            pointerEvents: "none"
          }}
        />

        {/* Temple Arch / Portrait Container */}
        <div
          style={{
            width: "min(215px, 52vw)",
            maxHeight: "265px",
            aspectRatio: "3 / 4",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow:
              "0 18px 45px -10px rgba(0, 0, 0, 0.85), 0 0 35px rgba(245, 158, 11, 0.25)",
            border: "1.5px solid rgba(246, 232, 177, 0.4)",
            position: "relative",
            background: "#080c1d"
          }}
        >
          <img
            src={invitationConfig.assets.ganpatiImage}
            alt={invitationConfig.assets.ganpatiAlt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block"
            }}
          />

          {/* Vignette Overlay for Seamless Cinematic Blend */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(6, 9, 20, 0.1) 0%, rgba(6, 9, 20, 0) 50%, rgba(6, 9, 20, 0.65) 100%)",
              pointerEvents: "none"
            }}
          />

          {/* Inner Golden Border Accent */}
          <div
            style={{
              position: "absolute",
              inset: "6px",
              borderRadius: "13px",
              border: "1px solid rgba(212, 175, 55, 0.35)",
              pointerEvents: "none"
            }}
          />
        </div>
      </div>

      {/* Main Title & Invitation Announcement */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          opacity: stage >= 4 ? 1 : 0,
          transform: stage >= 4 ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 1.8s cubic-bezier(0.16, 1, 0.3, 1), transform 1.8s cubic-bezier(0.16, 1, 0.3, 1)",
          maxWidth: "540px",
          marginTop: "2px"
        }}
      >
        <p
          className="font-display"
          style={{
            fontSize: "clamp(0.68rem, 1.6vw, 0.8rem)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--saffron-bright)",
            marginBottom: "4px"
          }}
        >
          {invitationConfig.subHeading}
        </p>

        <h1
          className="font-heading shimmer-gold"
          style={{
            fontSize: "clamp(1.75rem, 5vw, 2.8rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "0.02em",
            marginBottom: "6px"
          }}
        >
          {invitationConfig.mainHeading}
        </h1>

        <div className="gold-divider" style={{ margin: "6px auto" }}>
          <span className="gold-divider-symbol">✦</span>
        </div>

        <p
          style={{
            fontSize: "clamp(0.86rem, 2vw, 1.05rem)",
            color: "var(--text-secondary)",
            fontFamily: "var(--font-heading)",
            fontStyle: "italic",
            lineHeight: 1.45,
            maxWidth: "460px",
            margin: "0 auto"
          }}
        >
          "{invitationConfig.supportingText}"
        </p>

        {/* Scroll Action Button */}
        <div style={{ marginTop: "14px" }}>
          <button
            onClick={scrollToInvitation}
            className="btn-gold"
            aria-label="Scroll down to read the invitation"
            style={{
              padding: "8px 20px",
              fontSize: "0.8rem"
            }}
          >
            <ChevronDown size={16} />
            <span>Scroll to Invitation</span>
          </button>
        </div>
      </div>
    </section>
  );
}
