import React, { useState, useEffect } from "react";
import { Home, Mail, MapPin, Heart, ChevronDown } from "lucide-react";

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isAtTop, setIsAtTop] = useState(true);

  const navItems = [
    { id: "hero", label: "Home", icon: <Home size={15} /> },
    { id: "invitation-message", label: "Invitation", icon: <Mail size={15} /> },
    { id: "venue", label: "Venue", icon: <MapPin size={15} /> },
    { id: "closing", label: "Blessings", icon: <Heart size={15} /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsAtTop(scrollPos < 140);

      const offsetPos = scrollPos + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (offsetPos >= top && offsetPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Invitation Quick Navigation"
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 90
      }}
    >
      {isAtTop ? (
        /* Prominent Floating Action Pill visible on homepage */
        <button
          onClick={() => scrollToSection("invitation-message")}
          className="btn-gold-solid animate-aura-pulse"
          aria-label="Scroll down to read the full invitation"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 22px",
            borderRadius: "999px",
            fontSize: "0.82rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontFamily: "var(--font-display)",
            cursor: "pointer",
            boxShadow:
              "0 8px 30px rgba(0, 0, 0, 0.75), 0 0 25px rgba(245, 158, 11, 0.45)",
            whiteSpace: "nowrap"
          }}
        >
          <span>Scroll to Invitation</span>
          <ChevronDown size={17} className="animate-scroll-chevron" />
        </button>
      ) : (
        /* Multi-section navigation bar when exploring content */
        <div
          className="glass-pill"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            padding: "6px 8px",
            background: "rgba(8, 12, 28, 0.85)",
            border: "1px solid rgba(212, 175, 55, 0.3)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.65), 0 0 15px rgba(212, 175, 55, 0.1)"
          }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                aria-label={`Navigate to ${item.label}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 14px",
                  borderRadius: "999px",
                  border: "none",
                  background: isActive
                    ? "linear-gradient(135deg, rgba(212, 175, 55, 0.28) 0%, rgba(245, 158, 11, 0.16) 100%)"
                    : "transparent",
                  color: isActive ? "#ffffff" : "var(--text-muted)",
                  cursor: "pointer",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.74rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  transition: "all 0.25s ease"
                }}
              >
                <span
                  style={{
                    color: isActive ? "var(--saffron-bright)" : "var(--text-muted)"
                  }}
                >
                  {item.icon}
                </span>
                <span className="nav-label">{item.label}</span>
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 520px) {
          .nav-label {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
