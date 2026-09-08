import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Sparkles } from "lucide-react";
import { invitationConfig } from "../config/invitationConfig";
import { devotionalAudio } from "../utils/audioSynth";

export default function TapToOpenOverlay({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Auto-start ambient devotional music (user interaction enables audio autoplay policy)
    try {
      devotionalAudio.start();
    } catch (e) {
      console.log("Audio start error:", e);
    }

    // Subtle burst of golden sparks
    try {
      confetti({
        particleCount: 40,
        spread: 70,
        origin: { y: 0.5 },
        colors: ["#f59e0b", "#fbbf24", "#d4af37", "#fef08a"],
        shapes: ["circle"],
        scalar: 0.9,
        ticks: 150,
        gravity: 0.9
      });
    } catch (e) {
      // ignore
    }

    // Trigger parent callback
    if (onOpen) {
      onOpen();
    }

    // Cleanly unmount overlay after slide finishes
    setTimeout(() => {
      setIsUnmounted(true);
    }, 1400);
  };

  if (isUnmounted) return null;

  return (
    <div
      role="dialog"
      aria-label="Welcome Envelope: Tap to Open Invitation"
      onClick={handleOpen}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        overflow: "hidden",
        cursor: isOpening ? "default" : "pointer",
        pointerEvents: isOpening ? "none" : "auto",
        transition: "opacity 0.4s ease 1.0s",
        opacity: isOpening ? 0 : 1
      }}
    >
      {/* Left Royal Door / Curtain Panel */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: "100%",
          background:
            "radial-gradient(ellipse at 100% 50%, #0d1637 0%, #060914 70%, #03050c 100%)",
          transform: isOpening ? "translateX(-100%)" : "translateX(0)",
          transition: "transform 1.3s cubic-bezier(0.76, 0, 0.24, 1)",
          willChange: "transform",
          zIndex: 1,
          borderRight: "1px solid rgba(212, 175, 55, 0.2)",
          boxShadow: isOpening
            ? "none"
            : "inset -12px 0 25px rgba(0, 0, 0, 0.75)"
        }}
      />

      {/* Center Subtle Royal Gate Seam Line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          width: "1px",
          transform: "translateX(-50%)",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(212, 175, 55, 0.35) 10%, rgba(212, 175, 55, 0.18) 50%, rgba(212, 175, 55, 0.35) 90%, transparent 100%)",
          opacity: isOpening ? 0 : 0.75,
          transition: "opacity 0.4s ease",
          zIndex: 2,
          pointerEvents: "none"
        }}
      />

      {/* Right Royal Door / Curtain Panel */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          background:
            "radial-gradient(ellipse at 0% 50%, #0d1637 0%, #060914 70%, #03050c 100%)",
          transform: isOpening ? "translateX(100%)" : "translateX(0)",
          transition: "transform 1.3s cubic-bezier(0.76, 0, 0.24, 1)",
          willChange: "transform",
          zIndex: 1,
          borderLeft: "1px solid rgba(212, 175, 55, 0.2)",
          boxShadow: isOpening
            ? "none"
            : "inset 12px 0 25px rgba(0, 0, 0, 0.75)"
        }}
      />

      {/* Center Sacred Royal Seal / Medallion */}
      <div
        className={isOpening ? "" : "animate-seal-float"}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: isOpening
            ? "translate(-50%, -50%) scale(1.15)"
            : "translate(-50%, -50%) scale(1)",
          opacity: isOpening ? 0 : 1,
          transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "32px 24px",
          width: "min(380px, 92vw)",
          borderRadius: "28px",
          background:
            "radial-gradient(ellipse at center, rgba(6, 9, 20, 0.95) 0%, rgba(6, 9, 20, 0.88) 60%, transparent 92%)",
          pointerEvents: "auto"
        }}
      >
        {/* Golden Sacred Medallion Seal */}
        <div
          className="animate-seal-ripple"
          style={{
            width: "116px",
            height: "116px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 35% 35%, #fef3c7 0%, #d4af37 45%, #926210 80%, #583705 100%)",
            border: "3px solid #fef3c7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow:
              "0 14px 40px rgba(0, 0, 0, 0.85), 0 0 35px rgba(245, 158, 11, 0.6), inset 0 2px 5px rgba(255, 255, 255, 0.85)",
            position: "relative",
            marginBottom: "20px",
            overflow: "hidden"
          }}
        >
          {/* Inner Ring */}
          <div
            style={{
              position: "absolute",
              inset: "4px",
              borderRadius: "50%",
              border: "1.5px dashed rgba(254, 243, 199, 0.75)",
              zIndex: 2,
              pointerEvents: "none"
            }}
          />

          {/* Ganpati Divine Sacred Logo */}
          <img
            src="/assets/ganpati-logo.jpg"
            alt="Lord Ganesha Sacred Emblem"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: "scale(1.08)",
              filter: "contrast(1.15) brightness(1.05)"
            }}
          />
        </div>

        {/* Shloka Header */}
        <p
          className="font-sanskrit"
          style={{
            fontSize: "clamp(0.95rem, 2.8vw, 1.15rem)",
            color: "var(--gold-light)",
            letterSpacing: "0.14em",
            marginBottom: "6px",
            textShadow: "0 0 14px rgba(212, 175, 55, 0.5)"
          }}
        >
          ॥ श्री गणेशाय नमः ॥
        </p>

        {/* Host Name */}
        <h2
          className="font-heading shimmer-gold"
          style={{
            fontSize: "clamp(1.6rem, 5vw, 2.2rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: "4px"
          }}
        >
          {invitationConfig.hosts.familyName}
        </h2>

        <p
          style={{
            fontSize: "0.85rem",
            color: "var(--text-secondary)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontFamily: "var(--font-display)",
            marginBottom: "24px"
          }}
        >
          Cordially Invites You
        </p>

        {/* Tap To Open Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleOpen();
          }}
          className="btn-gold-solid"
          aria-label="Tap to open sacred invitation"
          style={{
            padding: "14px 34px",
            fontSize: "0.88rem",
            boxShadow:
              "0 8px 30px rgba(212, 175, 55, 0.45), 0 0 20px rgba(245, 158, 11, 0.35)",
            cursor: "pointer"
          }}
        >
          <Sparkles size={16} />
          <span>Tap To Open</span>
        </button>

        <span
          style={{
            marginTop: "12px",
            fontSize: "0.72rem",
            color: "var(--text-muted)",
            letterSpacing: "0.08em",
            fontFamily: "var(--font-display)"
          }}
        >
          Touch anywhere to reveal
        </span>
      </div>
    </div>
  );
}
