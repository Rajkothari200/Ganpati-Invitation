import React from "react";
import { invitationConfig } from "../config/invitationConfig";
import { Calendar, Clock, Sparkles, Heart } from "lucide-react";

export default function InvitationText() {
  const { festivalDates, hosts } = invitationConfig;

  return (
    <section
      id="invitation-message"
      aria-label="Invitation Message Section"
      style={{
        padding: "80px 20px",
        position: "relative",
        zIndex: 2,
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div
        className="glass-panel temple-border-box"
        style={{
          maxWidth: "760px",
          width: "100%",
          padding: "clamp(36px, 6vw, 64px) clamp(24px, 5vw, 48px)",
          textAlign: "center"
        }}
      >
        <span className="corner-bl" />
        <span className="corner-br" />

        {/* Sacred Shloka Header */}
        <div style={{ marginBottom: "28px" }}>
          <span
            className="font-sanskrit"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              color: "var(--gold-primary)",
              letterSpacing: "0.15em",
              textShadow: "0 0 12px rgba(212, 175, 55, 0.4)",
              display: "block"
            }}
          >
            {invitationConfig.sacredOpening}
          </span>
          <p
            className="font-sanskrit"
            style={{
              fontSize: "0.95rem",
              color: "var(--text-muted)",
              marginTop: "4px"
            }}
          >
            ॥ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
          </p>
        </div>

        <div className="gold-divider">
          <span className="gold-divider-symbol">⚜</span>
        </div>

        {/* Heartfelt English Invitation Prose */}
        <div style={{ margin: "32px auto", maxWidth: "600px" }}>
          <p
            className="font-heading"
            style={{
              fontSize: "clamp(1.35rem, 3.5vw, 1.8rem)",
              lineHeight: 1.65,
              color: "var(--text-primary)",
              fontWeight: 400
            }}
          >
            With hearts filled with devotion and joy,
            <br />
            we invite you to welcome
            <br />
            <span
              className="text-gold-gradient"
              style={{
                fontSize: "clamp(1.7rem, 4.5vw, 2.3rem)",
                fontWeight: 700,
                fontFamily: "var(--font-heading)",
                display: "inline-block",
                padding: "4px 0"
              }}
            >
              Lord Ganesha
            </span>
            <br />
            into our home.
          </p>

          <div
            style={{
              width: "48px",
              height: "1px",
              background: "rgba(212, 175, 55, 0.4)",
              margin: "24px auto"
            }}
          />

          <p
            style={{
              fontSize: "clamp(1.05rem, 2.4vw, 1.2rem)",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              marginBottom: "18px"
            }}
          >
            Join us as we celebrate the arrival of{" "}
            <strong style={{ color: "var(--saffron-bright)", fontWeight: 600 }}>
              Ganpati Bappa
            </strong>{" "}
            with prayers, joy, and togetherness.
          </p>

          <p
            style={{
              fontSize: "clamp(1.02rem, 2.2vw, 1.15rem)",
              color: "var(--gold-light)",
              fontStyle: "italic",
              fontFamily: "var(--font-heading)"
            }}
          >
            "{invitationConfig.blessingText}"
          </p>
        </div>

        <div className="gold-divider">
          <span className="gold-divider-symbol">✦</span>
        </div>

        {/* Auspicious Dates & Timings Cards (1.5 Days Celebration) */}
        <div style={{ marginTop: "36px" }}>
          {/* Badge */}
          <div style={{ marginBottom: "18px" }}>
            <span
              style={{
                fontSize: "0.74rem",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "var(--saffron-bright)",
                fontFamily: "var(--font-display)",
                background: "rgba(245, 158, 11, 0.12)",
                border: "1px solid rgba(245, 158, 11, 0.35)",
                padding: "6px 18px",
                borderRadius: "999px",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              <Sparkles size={14} />
              <span>{festivalDates.durationBadge}</span>
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "18px",
              textAlign: "left"
            }}
          >
            {/* Arrival Card */}
            <div
              style={{
                padding: "22px 24px",
                background: "rgba(212, 175, 55, 0.06)",
                borderRadius: "16px",
                border: "1px solid rgba(212, 175, 55, 0.22)",
                position: "relative"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--saffron-bright)",
                  fontSize: "0.76rem",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "8px"
                }}
              >
                <Calendar size={15} />
                <span>Auspicious Arrival & Puja</span>
              </div>

              <h4
                className="font-heading"
                style={{
                  fontSize: "1.3rem",
                  color: "var(--text-primary)",
                  fontWeight: 600,
                  marginBottom: "6px"
                }}
              >
                {festivalDates.arrivalDate}
              </h4>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "6px",
                  color: "var(--gold-light)",
                  fontSize: "0.95rem"
                }}
              >
                <Clock size={16} style={{ marginTop: "2px", flexShrink: 0 }} />
                <span>{festivalDates.arrivalTime}</span>
              </div>
            </div>

            {/* Visarjan Card */}
            <div
              style={{
                padding: "22px 24px",
                background: "rgba(212, 175, 55, 0.06)",
                borderRadius: "16px",
                border: "1px solid rgba(212, 175, 55, 0.22)",
                position: "relative"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--gold-primary)",
                  fontSize: "0.76rem",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "8px"
                }}
              >
                <Sparkles size={15} />
                <span>Uttar Puja & Visarjan</span>
              </div>

              <h4
                className="font-heading"
                style={{
                  fontSize: "1.3rem",
                  color: "var(--text-primary)",
                  fontWeight: 600,
                  marginBottom: "6px"
                }}
              >
                {festivalDates.visarjanDate}
              </h4>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "6px",
                  color: "var(--gold-light)",
                  fontSize: "0.95rem"
                }}
              >
                <Clock size={16} style={{ marginTop: "2px", flexShrink: 0 }} />
                <span>{festivalDates.visarjanTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Host Signature */}
        <div style={{ marginTop: "40px" }}>
          <p
            style={{
              fontSize: "0.82rem",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--text-muted)",
              fontFamily: "var(--font-display)",
              marginBottom: "6px"
            }}
          >
            Warmly Invited By
          </p>
          <h3
            className="font-heading"
            style={{
              fontSize: "clamp(1.5rem, 3.2vw, 2rem)",
              color: "var(--gold-light)",
              fontWeight: 600
            }}
          >
            {hosts.familyName}
          </h3>
        </div>
      </div>
    </section>
  );
}
