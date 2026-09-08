import React from "react";
import { invitationConfig } from "../config/invitationConfig";
import { getGoogleCalendarUrl, downloadIcsFile } from "../utils/calendar";
import { Calendar, Clock, Sparkles, Sun, Flame, CalendarPlus, Download } from "lucide-react";

export default function EventSchedule() {
  const getIcon = (id) => {
    switch (id) {
      case "sthapana":
        return <Sparkles size={20} className="text-gold-primary" />;
      case "morning-aarti":
        return <Sun size={20} className="text-gold-primary" />;
      case "maha-prasad":
        return <Flame size={20} className="text-gold-primary" />;
      case "evening-aarti":
        return <Flame size={20} className="text-saffron" />;
      case "visarjan":
        return <Sparkles size={20} className="text-gold-primary" />;
      default:
        return <Clock size={20} className="text-gold-primary" />;
    }
  };

  const googleCalUrl = getGoogleCalendarUrl(invitationConfig.calendarEvent);

  return (
    <section
      id="schedule"
      aria-label="Auspicious Schedule Section"
      style={{
        padding: "80px 20px",
        position: "relative",
        zIndex: 2,
        maxWidth: "960px",
        margin: "0 auto"
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
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
          Sacred Program & Rituals
        </p>

        <h2
          className="font-heading"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
            color: "var(--gold-light)",
            fontWeight: 600
          }}
        >
          Auspicious Timings
        </h2>

        <div className="gold-divider">
          <span className="gold-divider-symbol">✦</span>
        </div>

        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--text-secondary)",
            maxWidth: "540px",
            margin: "0 auto"
          }}
        >
          We warmly invite you to join us during these sacred times for prayers,
          divine Aarti, and festive prasad.
        </p>
      </div>

      {/* Ritual Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "22px",
          marginBottom: "40px"
        }}
      >
        {invitationConfig.schedule.map((item, index) => (
          <div
            key={item.id}
            className="glass-panel"
            style={{
              padding: "28px 24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "180px",
              position: "relative"
            }}
          >
            {/* Top Bar with Icon & Badge */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px"
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: "rgba(212, 175, 55, 0.1)",
                  border: "1px solid rgba(212, 175, 55, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {getIcon(item.id)}
              </div>

              <span
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  borderRadius: "999px",
                  background: "rgba(245, 158, 11, 0.12)",
                  border: "1px solid rgba(245, 158, 11, 0.3)",
                  color: "var(--saffron-bright)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600
                }}
              >
                {item.badge}
              </span>
            </div>

            {/* Time & Title */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "var(--gold-light)",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  marginBottom: "6px"
                }}
              >
                <Clock size={15} style={{ opacity: 0.8 }} />
                <span>{item.time}</span>
              </div>

              <h3
                className="font-heading"
                style={{
                  fontSize: "1.35rem",
                  color: "var(--text-primary)",
                  fontWeight: 600,
                  lineHeight: 1.3,
                  marginBottom: "8px"
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.55
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Calendar Integration Bar */}
      <div
        className="glass-panel"
        style={{
          padding: "24px 32px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              background: "rgba(212, 175, 55, 0.12)",
              border: "1px solid var(--gold-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--gold-primary)"
            }}
          >
            <Calendar size={22} />
          </div>
          <div>
            <h4
              className="font-heading"
              style={{ fontSize: "1.2rem", color: "var(--gold-light)" }}
            >
              Add to Your Calendar
            </h4>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
              Save the dates so you don't miss the divine celebrations.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          <a
            href={googleCalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ padding: "10px 20px", fontSize: "0.78rem" }}
          >
            <CalendarPlus size={15} />
            <span>Google Calendar</span>
          </a>

          <button
            onClick={() => downloadIcsFile(invitationConfig.calendarEvent)}
            className="btn-secondary"
            style={{ padding: "10px 20px", fontSize: "0.78rem" }}
          >
            <Download size={15} />
            <span>Apple / iCal</span>
          </button>
        </div>
      </div>
    </section>
  );
}
