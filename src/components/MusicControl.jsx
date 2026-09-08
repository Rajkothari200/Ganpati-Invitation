import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { devotionalAudio } from "../utils/audioSynth";

export default function MusicControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const unsubscribe = devotionalAudio.subscribe((playing) => {
      setIsPlaying(playing);
      if (playing) setHasInteracted(true);
    });
    return unsubscribe;
  }, []);

  const toggleAudio = () => {
    setHasInteracted(true);
    devotionalAudio.toggle();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 100
      }}
    >
      <button
        onClick={toggleAudio}
        className="glass-pill"
        aria-label={isPlaying ? "Mute background devotional music" : "Play background devotional music"}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "9px 16px",
          cursor: "pointer",
          border: isPlaying
            ? "1px solid rgba(245, 158, 11, 0.6)"
            : "1px solid var(--gold-border)",
          boxShadow: isPlaying
            ? "0 4px 20px rgba(245, 158, 11, 0.35)"
            : "0 4px 15px rgba(0, 0, 0, 0.4)",
          transition: "all 0.3s ease",
          color: "var(--gold-light)"
        }}
      >
        {isPlaying ? (
          <>
            {/* Animated Sound Wave Equalizer */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "2.5px",
                height: "16px",
                paddingBottom: "1px"
              }}
            >
              <span
                className="animate-sound-1"
                style={{
                  width: "2.5px",
                  background: "var(--saffron-bright)",
                  borderRadius: "2px"
                }}
              />
              <span
                className="animate-sound-2"
                style={{
                  width: "2.5px",
                  background: "var(--gold-light)",
                  borderRadius: "2px"
                }}
              />
              <span
                className="animate-sound-3"
                style={{
                  width: "2.5px",
                  background: "var(--saffron-bright)",
                  borderRadius: "2px"
                }}
              />
              <span
                className="animate-sound-4"
                style={{
                  width: "2.5px",
                  background: "var(--gold-light)",
                  borderRadius: "2px"
                }}
              />
            </div>
            <span
              style={{
                fontSize: "0.74rem",
                fontFamily: "var(--font-display)",
                letterSpacing: "0.1em",
                textTransform: "uppercase"
              }}
            >
              Music Playing
            </span>
          </>
        ) : (
          <>
            <VolumeX size={15} style={{ opacity: 0.75 }} />
            <span
              style={{
                fontSize: "0.74rem",
                fontFamily: "var(--font-display)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-muted)"
              }}
            >
              Music Off
            </span>
          </>
        )}
      </button>

      {/* Polite Hint on first visit */}
      {!hasInteracted && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            right: "0",
            marginTop: "8px",
            background: "rgba(10, 16, 36, 0.9)",
            border: "1px solid rgba(212, 175, 55, 0.3)",
            borderRadius: "8px",
            padding: "5px 10px",
            fontSize: "0.68rem",
            color: "var(--gold-light)",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
            pointerEvents: "none",
            animation: "auraPulse 3s infinite ease-in-out"
          }}
        >
          🎵 Tap to hear temple flute
        </div>
      )}
    </div>
  );
}
