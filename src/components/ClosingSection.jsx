import React from "react";
import confetti from "canvas-confetti";
import { invitationConfig } from "../config/invitationConfig";
import { Sparkles } from "lucide-react";

export default function ClosingSection() {
  const { hosts, venue, festivalDates } = invitationConfig;

  // Flower Shower Confetti
  const triggerFlowerShower = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.65 },
        colors: ["#f59e0b", "#fbbf24", "#d4af37", "#fef08a", "#d97706"],
        shapes: ["circle"],
        scalar: 1.1,
        ticks: 200,
        gravity: 0.8
      });
    } catch (e) {
      console.log("Confetti trigger:", e);
    }
  };



  return (
    <footer
      id="closing"
      aria-label="Closing Blessing Section"
      style={{
        padding: "90px 20px 70px",
        position: "relative",
        zIndex: 2,
        textAlign: "center",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          position: "relative"
        }}
      >
        {/* Divine Aura Glow behind Ganpati closing portrait */}
        <div
          className="animate-aura-pulse"
          style={{
            position: "absolute",
            top: "15%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "min(400px, 80vw)",
            height: "min(400px, 80vw)",
            background:
              "radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, rgba(212, 175, 55, 0.12) 40%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none"
          }}
        />

        {/* Circular Medallion of Lord Ganesha */}
        <div
          className="animate-divine-float"
          style={{
            width: "130px",
            height: "130px",
            borderRadius: "50%",
            overflow: "hidden",
            margin: "0 auto 28px",
            border: "2px solid var(--gold-light)",
            boxShadow:
              "0 0 35px rgba(212, 175, 55, 0.4), inset 0 0 15px rgba(0, 0, 0, 0.5)",
            position: "relative"
          }}
        >
          <img
            src={invitationConfig.assets.ganpatiImage}
            alt="Lord Ganesha in Divine Radiance"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top"
            }}
          />
        </div>

        {/* Sentimental Closing Narrative */}
        <p
          className="font-heading"
          style={{
            fontSize: "clamp(1.3rem, 3.5vw, 1.8rem)",
            color: "var(--text-secondary)",
            fontStyle: "italic",
            marginBottom: "16px",
            lineHeight: 1.5
          }}
        >
          "Your presence will make our celebration complete."
        </p>

        {/* Chanted Exclamation */}
        <h2
          className="font-heading shimmer-gold"
          style={{
            fontSize: "clamp(2.4rem, 6vw, 3.8rem)",
            fontWeight: 700,
            letterSpacing: "0.04em",
            marginBottom: "24px"
          }}
        >
          Ganpati Bappa Morya! 🙏
        </h2>

        <div className="gold-divider">
          <span className="gold-divider-symbol">✦</span>
        </div>

        {/* Interactive Action: Flower Shower */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "32px 0 44px"
          }}
        >
          <button
            onClick={triggerFlowerShower}
            className="btn-gold-solid"
            aria-label="Offer virtual flower shower to Bappa"
          >
            <Sparkles size={16} />
            <span>Offer Flowers 🌸</span>
          </button>
        </div>

        {/* Family Signature */}
        <div style={{ marginTop: "24px" }}>
          <p
            style={{
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "var(--text-muted)",
              fontFamily: "var(--font-display)",
              marginBottom: "8px"
            }}
          >
            {hosts.familySignature}
          </p>

          <h3
            className="font-heading"
            style={{
              fontSize: "clamp(1.7rem, 3.8vw, 2.3rem)",
              color: "var(--gold-light)",
              fontWeight: 600,
              marginBottom: "6px"
            }}
          >
            {hosts.familyName}
          </h3>
        </div>

        {/* Footer Credit & Auspicious blessing */}
        <div
          style={{
            marginTop: "60px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(212, 175, 55, 0.15)",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            letterSpacing: "0.08em"
          }}
        >
          <p>Ganpati Chaturthi 2026 • May Lord Ganesha Bless You & Your Family Always</p>
        </div>
      </div>
    </footer>
  );
}
