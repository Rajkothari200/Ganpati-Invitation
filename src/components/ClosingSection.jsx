import React, { useState, useRef } from "react";
import confetti from "canvas-confetti";
import { invitationConfig } from "../config/invitationConfig";
import { Sparkles } from "lucide-react";

/**
 * Realistic Indian Hibiscus (Japa Pushpa / Jaswand)
 * Lord Ganesha's sacred vermilion-red flower with velvety petals,
 * delicate veins, and golden pollen stamen.
 */
function FlowerGraphic({ size = 38, style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "block",
        filter: "drop-shadow(0 3px 10px rgba(220, 38, 38, 0.5))",
        ...style
      }}
    >
      <defs>
        <radialGradient id="hibiscusPetalGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="55%" stopColor="#dc2626" />
          <stop offset="85%" stopColor="#b91c1c" />
          <stop offset="100%" stopColor="#7f1d1d" />
        </radialGradient>
        <radialGradient id="flowerCenterGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="40%" stopColor="#f59e0b" />
          <stop offset="80%" stopColor="#881337" />
          <stop offset="100%" stopColor="#4c0519" />
        </radialGradient>
        <radialGradient id="flowerHalo" cx="50%" cy="50%" r="48%">
          <stop offset="0%" stopColor="rgba(245, 158, 11, 0.45)" />
          <stop offset="60%" stopColor="rgba(220, 38, 38, 0.2)" />
          <stop offset="100%" stopColor="rgba(220, 38, 38, 0)" />
        </radialGradient>
      </defs>

      {/* Warm Divine Aura */}
      <circle cx="50" cy="50" r="46" fill="url(#flowerHalo)" />

      {/* 5 Petals rotated around center */}
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 50 50)`}>
          <path
            d="M 50 50
               C 34 34, 24 18, 42 8
               C 50 3, 58 3, 64 9
               C 76 21, 66 35, 50 50 Z"
            fill="url(#hibiscusPetalGrad)"
            stroke="#fca5a5"
            strokeWidth="0.6"
            strokeOpacity="0.75"
          />
          {/* Subtle petal vein line */}
          <path
            d="M 50 50 Q 51 26 53 10"
            stroke="#fecaca"
            strokeWidth="0.75"
            strokeOpacity="0.6"
            strokeLinecap="round"
          />
        </g>
      ))}

      {/* Flower Core */}
      <circle cx="50" cy="50" r="12" fill="url(#flowerCenterGrad)" />

      {/* Stamen Column with Pollen Anthers */}
      <path d="M 50 50 L 53 30" stroke="#fef08a" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="53" cy="29" r="2.2" fill="#fbbf24" stroke="#d97706" strokeWidth="0.5" />
      <circle cx="56" cy="33" r="1.8" fill="#f59e0b" />
      <circle cx="50" cy="32" r="1.8" fill="#fbbf24" />
      <circle cx="53" cy="36" r="1.6" fill="#fef08a" />
      <circle cx="56" cy="37" r="1.6" fill="#f59e0b" />
    </svg>
  );
}

/**
 * Traditional Indian Steamed Modak Graphic
 * Warm ivory/cream steamed body with delicate golden contour rim,
 * authentic pleat ridges, and a saffron kesar tip.
 */
function ModakGraphic({ size = 42, style = {} }) {
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
        <linearGradient id="modakBodyGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#fffef9" />
          <stop offset="32%" stopColor="#fef8e4" />
          <stop offset="72%" stopColor="#f7ecc5" />
          <stop offset="100%" stopColor="#e8d79f" />
        </linearGradient>

        <linearGradient id="modakGoldTrim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#faecc1" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#9a741c" />
        </linearGradient>

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
      <path d="M 50 12 Q 50 56 50 99" stroke="#d6be7b" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M 50 14 Q 49 56 49 98" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.85" />

      <path d="M 50 12 Q 37 50 35 95" stroke="#ccb26b" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M 50 14 Q 38 50 36 94" stroke="#ffffff" strokeWidth="0.8" strokeLinecap="round" opacity="0.75" />

      <path d="M 50 15 Q 26 55 22 85" stroke="#be9f55" strokeWidth="1.2" strokeLinecap="round" />

      <path d="M 50 12 Q 63 50 65 95" stroke="#ccb26b" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M 50 14 Q 62 50 64 94" stroke="#ffffff" strokeWidth="0.8" strokeLinecap="round" opacity="0.75" />

      <path d="M 50 15 Q 74 55 78 85" stroke="#be9f55" strokeWidth="1.2" strokeLinecap="round" />

      {/* Saffron Kesar Strand at the Tip */}
      <path d="M 50 8 Q 51 12 50 16" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="50" cy="8" r="1.6" fill="#f59e0b" />
    </svg>
  );
}

export default function ClosingSection() {
  const { hosts } = invitationConfig;

  const containerRef = useRef(null);
  const idolRef = useRef(null);
  const flowerButtonRef = useRef(null);
  const modakButtonRef = useRef(null);

  // Active flying offerings
  const [activeOfferings, setActiveOfferings] = useState([]);

  // Accumulated settled offerings on Lord Ganesha's sacred altar
  const [settledFlowers, setSettledFlowers] = useState([]);
  const [settledModaks, setSettledModaks] = useState([]);

  // Devotional sparkle flash on altar
  const [showAltarSparkle, setShowAltarSparkle] = useState(false);

  // Temporary confirmation toast
  const [confirmation, setConfirmation] = useState("");
  const [confirmationKey, setConfirmationKey] = useState(0);

  // Realistic Flower Offering to Lord Ganesha
  const triggerOfferFlower = () => {
    if (!containerRef.current || !idolRef.current || !flowerButtonRef.current) return;

    try {
      const cRect = containerRef.current.getBoundingClientRect();
      const iRect = idolRef.current.getBoundingClientRect();
      const bRect = flowerButtonRef.current.getBoundingClientRect();

      // Start at button center
      const startX = bRect.left + bRect.width / 2 - cRect.left;
      const startY = bRect.top + bRect.height / 2 - cRect.top;

      // Target position: Lord Ganesha's sacred lotus pedestal / altar
      // Dispersed organically across the footstool (-40px to +40px)
      const offsetSpread = (Math.random() - 0.5) * 80;
      const targetX = iRect.left + iRect.width / 2 + offsetSpread - cRect.left;
      const targetY = iRect.top + iRect.height - 12 - cRect.top;

      const dx = targetX - startX;
      const dy = targetY - startY;
      const id = Date.now() + Math.random();

      // Add to active flying offerings
      setActiveOfferings((prev) => [
        ...prev,
        { id, type: "flower", startX, startY, dx, dy, targetX, targetY }
      ]);

      // At arrival (~1400ms)
      setTimeout(() => {
        // Small, elegant golden particle sparkle at Bappa's feet
        const originX = (iRect.left + iRect.width / 2 + offsetSpread) / window.innerWidth;
        const originY = (iRect.top + iRect.height) / window.innerHeight;
        try {
          confetti({
            particleCount: 22,
            spread: 48,
            origin: { x: originX, y: originY },
            colors: ["#fef08a", "#fbbf24", "#d4af37", "#f59e0b", "#f87171"],
            shapes: ["circle"],
            scalar: 0.75,
            ticks: 100,
            gravity: 0.88
          });
        } catch (e) {}

        // Altar sparkle flash
        setShowAltarSparkle(true);
        setTimeout(() => setShowAltarSparkle(false), 850);

        // Accumulate settled flower (max 6 to keep clean performance)
        const rotation = Math.round((Math.random() - 0.5) * 36);
        setSettledFlowers((prev) => {
          const next = [...prev, { id, offsetX: offsetSpread, rotation }];
          return next.slice(-6);
        });

        // Confirmation
        setConfirmation("Flower offered with devotion 🙏");
        setConfirmationKey((k) => k + 1);

        // Remove traveling instance
        setActiveOfferings((prev) => prev.filter((item) => item.id !== id));
      }, 1400);
    } catch (err) {
      console.warn("Offer flower error:", err);
    }
  };

  // Realistic Modak Offering to Lord Ganesha
  const triggerOfferModak = () => {
    if (!containerRef.current || !idolRef.current || !modakButtonRef.current) return;

    try {
      const cRect = containerRef.current.getBoundingClientRect();
      const iRect = idolRef.current.getBoundingClientRect();
      const bRect = modakButtonRef.current.getBoundingClientRect();

      // Start at button center
      const startX = bRect.left + bRect.width / 2 - cRect.left;
      const startY = bRect.top + bRect.height / 2 - cRect.top;

      // Target position: Central altar tray right in front of Bappa's lotus throne
      const offsetSpread = (Math.random() - 0.5) * 44;
      const targetX = iRect.left + iRect.width / 2 + offsetSpread - cRect.left;
      const targetY = iRect.top + iRect.height - 22 - cRect.top;

      const dx = targetX - startX;
      const dy = targetY - startY;
      const id = Date.now() + Math.random();

      setActiveOfferings((prev) => [
        ...prev,
        { id, type: "modak", startX, startY, dx, dy, targetX, targetY }
      ]);

      // At arrival (~1400ms)
      setTimeout(() => {
        // Small, elegant golden particle burst
        const originX = (iRect.left + iRect.width / 2 + offsetSpread) / window.innerWidth;
        const originY = (iRect.top + iRect.height) / window.innerHeight;
        try {
          confetti({
            particleCount: 24,
            spread: 52,
            origin: { x: originX, y: originY },
            colors: ["#fef08a", "#fbbf24", "#d4af37", "#f59e0b", "#d97706"],
            shapes: ["circle"],
            scalar: 0.78,
            ticks: 110,
            gravity: 0.88
          });
        } catch (e) {}

        // Altar sparkle flash
        setShowAltarSparkle(true);
        setTimeout(() => setShowAltarSparkle(false), 850);

        // Accumulate settled modak (max 3 on the altar plate)
        setSettledModaks((prev) => {
          const next = [...prev, { id, offsetX: offsetSpread }];
          return next.slice(-3);
        });

        // Confirmation
        setConfirmation("Modak offered with devotion 🙏");
        setConfirmationKey((k) => k + 1);

        // Remove traveling instance
        setActiveOfferings((prev) => prev.filter((item) => item.id !== id));
      }, 1400);
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
        {/* Divine Aura Glow behind Ganpati idol */}
        <div
          className="animate-aura-pulse"
          style={{
            position: "absolute",
            top: "22%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "min(460px, 86vw)",
            height: "min(460px, 86vw)",
            background:
              "radial-gradient(circle, rgba(245, 158, 11, 0.28) 0%, rgba(212, 175, 55, 0.14) 42%, transparent 72%)",
            borderRadius: "50%",
            pointerEvents: "none"
          }}
        />

        {/* FULL LORD GANESHA TEMPLE IDOL & CONSECRATED ALTAR */}
        <div
          ref={idolRef}
          className="animate-divine-float"
          style={{
            position: "relative",
            width: "min(285px, 75vw)",
            maxWidth: "320px",
            aspectRatio: "3 / 4",
            margin: "0 auto 30px",
            borderRadius: "24px 24px 18px 18px",
            zIndex: 3
          }}
        >
          {/* Idol Artwork Frame */}
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "24px 24px 18px 18px",
              overflow: "hidden",
              border: "2px solid rgba(246, 232, 177, 0.45)",
              boxShadow:
                "0 20px 55px -10px rgba(0, 0, 0, 0.9), 0 0 40px rgba(245, 158, 11, 0.3), inset 0 0 25px rgba(0, 0, 0, 0.65)",
              position: "relative",
              background: "#080c1d"
            }}
          >
            <img
              src={invitationConfig.assets.ganpatiImage}
              alt="Lord Ganesha Full Idol in Divine Golden Radiance"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block"
              }}
            />

            {/* Seamless Vignette at Edges */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(6, 9, 20, 0.08) 0%, rgba(6, 9, 20, 0) 50%, rgba(6, 9, 20, 0.72) 100%)",
                pointerEvents: "none"
              }}
            />

            {/* Inner Temple Filigree Border */}
            <div
              style={{
                position: "absolute",
                inset: "6px",
                borderRadius: "18px 18px 12px 12px",
                border: "1px solid rgba(212, 175, 55, 0.35)",
                pointerEvents: "none"
              }}
            />
          </div>

          {/* Sacred Altar Pedestal Shelf at Bappa's Feet */}
          <div
            style={{
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "min(260px, 70vw)",
              height: "22px",
              background:
                "linear-gradient(180deg, rgba(212, 175, 55, 0.45) 0%, rgba(146, 98, 16, 0.75) 50%, rgba(58, 32, 3, 0.9) 100%)",
              borderRadius: "12px",
              border: "1px solid rgba(254, 240, 138, 0.65)",
              boxShadow:
                "0 8px 24px rgba(0, 0, 0, 0.85), 0 0 18px rgba(245, 158, 11, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.7)",
              zIndex: 7,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <span
              style={{
                fontSize: "0.58rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(254, 243, 199, 0.95)",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                textShadow: "0 1px 2px rgba(0, 0, 0, 0.8)"
              }}
            >
              ॥ श्री चरणी अर्पणम् ॥
            </span>
          </div>

          {/* Accumulation of Settled Flowers at Bappa's Feet */}
          {settledFlowers.map((f) => (
            <div
              key={f.id}
              className="animate-settled-offering"
              style={{
                position: "absolute",
                bottom: "-16px",
                left: `calc(50% + ${f.offsetX}px)`,
                transform: `translateX(-50%) rotate(${f.rotation}deg)`,
                zIndex: 8,
                pointerEvents: "none"
              }}
            >
              <FlowerGraphic size={26} />
            </div>
          ))}

          {/* Accumulation of Settled Modaks on the Altar */}
          {settledModaks.map((m) => (
            <div
              key={m.id}
              className="animate-settled-offering"
              style={{
                position: "absolute",
                bottom: "-14px",
                left: `calc(50% + ${m.offsetX}px)`,
                transform: "translateX(-50%)",
                zIndex: 9,
                pointerEvents: "none"
              }}
            >
              <ModakGraphic size={28} />
            </div>
          ))}

          {/* Golden Altar Sparkle Flash upon offering */}
          {showAltarSparkle && (
            <div
              className="animate-altar-sparkle"
              style={{
                position: "absolute",
                bottom: "-20px",
                left: "50%",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(254, 240, 138, 0.95) 0%, rgba(245, 158, 11, 0.5) 45%, transparent 70%)",
                pointerEvents: "none",
                zIndex: 10
              }}
            />
          )}
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

        {/* Interactive Actions: Offer Flowers & Offer Modak */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "14px",
            justifyContent: "center",
            margin: "32px 0 14px"
          }}
        >
          {/* Button 1: Offer Flowers */}
          <button
            ref={flowerButtonRef}
            onClick={triggerOfferFlower}
            className="btn-gold-solid"
            aria-label="Offer flowers to Lord Ganesha"
            style={{
              cursor: "pointer"
            }}
          >
            <Sparkles size={16} />
            <span>Offer Flowers 🌸</span>
          </button>

          {/* Button 2: Offer Modak */}
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

        {/* Temporary Subtle Devotional Confirmation */}
        <div style={{ minHeight: "26px", margin: "4px 0 24px" }}>
          {confirmation && (
            <p
              key={confirmationKey}
              className="animate-offering-confirmation"
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
              {confirmation}
            </p>
          )}
        </div>

        {/* Flying Offerings Traveling in Smooth Curved Arcs */}
        {activeOfferings.map((o) => (
          <div
            key={o.id}
            className={o.type === "flower" ? "animate-flower-offer" : "animate-modak-offer"}
            style={{
              position: "absolute",
              left: `${o.startX}px`,
              top: `${o.startY}px`,
              pointerEvents: "none",
              zIndex: 35,
              "--dx": `${o.dx}px`,
              "--dy": `${o.dy}px`
            }}
          >
            {o.type === "flower" ? (
              <FlowerGraphic size={42} />
            ) : (
              <ModakGraphic size={42} />
            )}
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
