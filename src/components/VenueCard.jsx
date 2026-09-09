import React, { useState } from "react";
import { invitationConfig } from "../config/invitationConfig";
import { MapPin, Navigation, Copy, Check, ExternalLink } from "lucide-react";

export default function VenueCard() {
  const [copied, setCopied] = useState(false);
  const { venue } = invitationConfig;

  const fullAddress = `${venue.flatNo ? `${venue.flatNo}, ` : ""}${venue.residenceName}, ${venue.addressLine1}, ${venue.addressLine2}, ${venue.city}, ${venue.state} ${venue.postalCode}. Landmark: ${venue.landmark}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    });
  };

  return (
    <section
      id="venue"
      aria-label="Venue and Location Section"
      style={{
        padding: "80px 20px",
        position: "relative",
        zIndex: 2,
        maxWidth: "840px",
        margin: "0 auto"
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
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
          Sacred Abode & Direction
        </p>

        <h2
          className="font-heading"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
            color: "var(--gold-light)",
            fontWeight: 600
          }}
        >
          Venue & Location
        </h2>

        <div className="gold-divider">
          <span className="gold-divider-symbol">✦</span>
        </div>
      </div>

      <div
        className="glass-panel temple-border-box"
        style={{
          padding: "clamp(32px, 6vw, 56px) clamp(24px, 5vw, 44px)",
          position: "relative"
        }}
      >
        <span className="corner-bl" />
        <span className="corner-br" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "36px",
            alignItems: "center"
          }}
        >
          {/* Left Column: Venue Info */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "999px",
                background: "rgba(212, 175, 55, 0.1)",
                border: "1px solid var(--gold-border)",
                color: "var(--gold-light)",
                fontSize: "0.78rem",
                fontFamily: "var(--font-display)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "16px"
              }}
            >
              <MapPin size={14} className="text-gold-primary" />
              <span>{venue.title}</span>
            </div>

            <h3
              className="font-heading"
              style={{
                fontSize: "clamp(1.9rem, 4.2vw, 2.5rem)",
                color: "var(--text-primary)",
                fontWeight: 600,
                marginBottom: "12px",
                lineHeight: 1.2
              }}
            >
              {venue.residenceName}
            </h3>

            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: "12px"
              }}
            >
              {venue.flatNo && (
                <>
                  <span style={{ color: "var(--gold-light)", fontWeight: 500 }}>
                    {venue.flatNo}
                  </span>
                  <br />
                </>
              )}
              {venue.addressLine1}
              <br />
              {venue.addressLine2}
              <br />
              {venue.city}, {venue.state} – {venue.postalCode}
            </p>

            <p
              style={{
                fontSize: "0.92rem",
                color: "var(--gold-primary)",
                fontStyle: "italic",
                marginBottom: "28px"
              }}
            >
              Landmark: {venue.landmark}
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                alignItems: "center"
              }}
            >
              <a
                href={venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                id="view-location-btn"
              >
                <span>View Location</span>
                <ExternalLink size={16} />
              </a>

              <button
                onClick={copyToClipboard}
                className="btn-secondary"
                aria-label="Copy Address to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={16} style={{ color: "#10b981" }} />
                    <span style={{ color: "#10b981" }}>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Stylized Gold Frame Preview */}
          <div
            style={{
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(212, 175, 55, 0.3)",
              background: "linear-gradient(180deg, #090e24 0%, #050711 100%)",
              aspectRatio: "4 / 3",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
              textAlign: "center",
              boxShadow: "inset 0 0 30px rgba(0, 0, 0, 0.7)"
            }}
          >
            {/* Subtle Map Grid Lines */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(rgba(212, 175, 55, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.07) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
                pointerEvents: "none"
              }}
            />

            {/* Glowing Map Pin in Center */}
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "rgba(245, 158, 11, 0.15)",
                border: "1.5px solid var(--gold-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--saffron-bright)",
                boxShadow: "0 0 25px rgba(245, 158, 11, 0.4)",
                marginBottom: "14px",
                zIndex: 1
              }}
            >
              <Navigation size={28} />
            </div>

            <h4
              className="font-heading"
              style={{
                fontSize: "1.25rem",
                color: "var(--gold-light)",
                marginBottom: "4px",
                zIndex: 1
              }}
            >
              Ghatkopar East, Mumbai
            </h4>

            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                marginBottom: "16px",
                maxWidth: "240px",
                zIndex: 1
              }}
            >
              Tap below to launch navigation in Google Maps
            </p>

            <a
              href={venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                zIndex: 1,
                fontSize: "0.84rem",
                color: "var(--gold-primary)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "var(--font-display)",
                letterSpacing: "0.06em"
              }}
            >
              <span>Open in Google Maps →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
