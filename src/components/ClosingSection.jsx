import React, { useState, useRef } from "react";
import confetti from "canvas-confetti";
import { invitationConfig } from "../config/invitationConfig";
import { Sparkles } from "lucide-react";

/**
 * Traditional Indian Steamed Modak Graphic
 * Crafted with warm ivory/cream tones, golden accents, subtle fold detailing,
 * and a traditional saffron kesar tip.
 */
function ModakGraphic({ size = 44, style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "block",
        filter: "drop-shadow(0 4px 14px rgba(245, 158, 11, 0.5))",
        ...style
      }}
    >
      <defs>
        {/* Steamed Ivory-to-Cream Gradient */}
        <linearGradient id="modakBodyGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#fffef9" />
          <stop offset="32%" stopColor="#fef8e4" />
          <stop offset="72%" stopColor="#f7ecc5" />
          <stop offset="100%" stopColor="#e8d79f" />
        </linearGradient>

        {/* Soft Golden Contour Rim */}
        <linearGradient id="modakGoldTrim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#faecc1" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#9a741c" />
        </linearGradient>

        {/* Warm Divine Aura Glow */}
        <radialGradient id="modakAura" cx="50%" cy="55%" r="48%">
          <stop offset="0%" stopColor="rgba(245, 158, 11, 0.55)" />
          <stop offset="55%" stopColor="rgba(212, 175, 55, 0.22)" />
          <stop offset="100%" stopColor="rgba(212, 175, 55, 0)" />
        </radialGradient>
      </defs>

      {/* Divine Warm Halo */}
      <circle cx="50" cy="58" r="46" fill="url(#modakAura)" />

      {/* Traditional Steamed Modak Silhouette */}
      <path
        d="M 50 10
           C 52 16, 58 30, 68 45
           C 79 60, 85 73, 82 84
           C 79 94, 66 99, 50 99
           C 34 99, 21 94, 18 84
           C 15 73, 21 60, 32 45
           C 42 30, 48 16, 50 10 Z"
        fill="url(#modakBodyGrad)"
        stroke="url(#modakGoldTrim)"
        strokeWidth="1.4"
      />

      {/* Traditional Kalyas (Folds & Ridges) */}
      {/* Center Ridge */}
      <path d="M 50 12 Q 50 56 50 99" stroke="#d6be7b" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M 50 14 Q 49 56 49 98" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.85" />

      {/* Mid Left Ridge */}
      <path d="M 50 12 Q 37 50 35 95" stroke="#ccb26b" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M 50 14 Q 38 50 36 94" stroke="#ffffff" strokeWidth="0.8" strokeLinecap="round" opacity="0.75" />

      {/* Outer Left Ridge */}
      <path d="M 50 15 Q 26 55 22 85" stroke="#be9f55" strokeWidth="1.2" strokeLinecap="round" />

      {/* Mid Right Ridge */}
      <path d="M 50 12 Q 63 50 65 95" stroke="#ccb26b" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M 50 14 Q 62 50 64 94" stroke="#ffffff" strokeWidth="0.8" strokeLinecap="round" opacity="0.75" />

      {/* Outer Right Ridge */}
      <path d="M 50 15 Q 74 55 78 85" stroke="#be9f55" strokeWidth="1.2" strokeLinecap="round" />

      {/* Saffron Kesar Strand at the Shikhar Tip */}
      <path d="M 50 8 Q 51 12 50 16" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="50" cy="8" r="1.6" fill="#f59e0b" />
    </svg>
  );
}

export default function ClosingSection() {
  const { hosts } = invitationConfig;

  const containerRef = useRef(null);
  const medallionRef = useRef(null);
  const modakButtonRef = useRef(null);

  const [activeModaks, setActiveModaks] = useState([]);
  const [settledCount, setSettledCount] = useState(0);
  const [showAltarSparkle, setShowAltarSparkle] = useState(false);
  const [confirmationText, setConfirmationText] = useState("");
  const [confirmationKey, setConfirmationKey] = useState(0);

  // Existing Flower Shower Confetti (Completely Preserved)
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

  // Devotional Modak Offering Interaction
  const triggerOfferModak = () => {
    if (!containerRef.current || !medallionRef.current || !modakButtonRef.current) return;

    try {
      const cRect = containerRef.current.getBoundingClientRect();
      const mRect = medallionRef.current.getBoundingClientRect();
      const bRect = modakButtonRef.current.getBoundingClientRect();

      // Starting point at "Offer Modak" button center
      const startX = bRect.left + bRect.width / 2 - cRect.left;
      const startY = bRect.top + bRect.height / 2 - cRect.top;

      // Target position at the base of Lord Ganesha's circular medallion
      const targetX = mRect.left + mRect.width / 2 - cRect.left;
      const targetY = mRect.top + mRect.height + 14 - cRect.top;

      const dx = targetX - startX;
      const dy = targetY - startY;

      const id = Date.now() + Math.random();
      setActiveModaks((prev) => [...prev, { id, startX, startY, dx, dy }]);

      // Arrival at Lord Ganesha's offering area (~1350ms)
      setTimeout(() => {
        // Small burst of warm golden particles
        const originX = (mRect.left + mRect.width / 2) / window.innerWidth;
        const originY = (mRect.top + mRect.height + 15) / window.innerHeight;
        try {
          confetti({
            particleCount: 26,
            spread: 55,
            origin: { x: originX, y: originY },
            colors: ["#fef08a", "#fbbf24", "#d4af37", "#f59e0b", "#d97706"],
            shapes: ["circle"],
            scalar: 0.8,
            ticks: 120,
            gravity: 0.85
          });
        } catch (e) {}

        // Altar golden sparkle flash
        setShowAltarSparkle(true);
        setTimeout(() => setShowAltarSparkle(false), 900);

        // Update settled prasad count
        setSettledCount((c) => c + 1);

        // Temporary subtle confirmation message
        setConfirmationText("Modak offered with devotion 🙏");
        setConfirmationKey((k) => k + 1);

        // Remove the traveling instance
        setActiveModaks((prev) => prev.filter((item) => item.id !== id));
      }, 1350);
    } catch (err) {
      console.warn("Offer modak error:", err);
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
        ref={containerRef}
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
          ref={medallionRef}
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

        {/* Settled Offered Modak at Lord Ganesha's feet */}
        {settledCount > 0 && (
          <div
            className="animate-modak-settled"
            style={{
              position: "absolute",
              top: "148px",
              left: "50%",
              transform: "translate(-50%, 0)",
              zIndex: 4,
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <ModakGraphic size={32} />
          </div>
        )}

        {/* Subtle Altar Sparkle Flash upon offering */}
        {showAltarSparkle && (
          <div
            className="animate-altar-sparkle"
            style={{
              position: "absolute",
              top: "155px",
              left: "50%",
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(254, 240, 138, 0.95) 0%, rgba(245, 158, 11, 0.5) 45%, transparent 70%)",
              pointerEvents: "none",
              zIndex: 5
            }}
          />
        )}

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

        {/* Interactive Actions: Offer Flowers & Offer Modak */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "14px",
            justifyContent: "center",
            margin: "32px 0 16px"
          }}
        >
          {/* Option 1: Offer Flowers (Existing, Preserved) */}
          <button
            onClick={triggerFlowerShower}
            className="btn-gold-solid"
            aria-label="Offer virtual flower shower to Bappa"
          >
            <Sparkles size={16} />
            <span>Offer Flowers 🌸</span>
          </button>

          {/* Option 2: Offer Modak (New Matching Interactive Feature) */}
          <button
            ref={modakButtonRef}
            onClick={triggerOfferModak}
            className="btn-gold-solid"
            aria-label="Offer modak to Lord Ganesha"
            style={{
              cursor: "pointer"
            }}
          >
            <Sparkles size={16} />
            <span>Offer Modak 🍡</span>
          </button>
        </div>

        {/* Subtle Confirmation after Offering Modak */}
        <div style={{ minHeight: "26px", margin: "4px 0 24px" }}>
          {confirmationText && (
            <p
              key={confirmationKey}
              className="animate-modak-confirmation"
              style={{
                fontSize: "0.85rem",
                color: "var(--gold-light)",
                fontFamily: "var(--font-heading)",
                fontStyle: "italic",
                letterSpacing: "0.04em",
                margin: 0,
                textShadow: "0 0 12px rgba(212, 175, 55, 0.45)"
              }}
            >
              {confirmationText}
            </p>
          )}
        </div>

        {/* Flying Modaks Animated along Curved Trajectory */}
        {activeModaks.map((m) => (
          <div
            key={m.id}
            className="animate-modak-offer"
            style={{
              position: "absolute",
              left: `${m.startX}px`,
              top: `${m.startY}px`,
              pointerEvents: "none",
              zIndex: 30,
              "--dx": `${m.dx}px`,
              "--dy": `${m.dy}px`
            }}
          >
            <ModakGraphic size={44} />
          </div>
        ))}

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
