import React, { useState } from "react";
import BackgroundCanvas from "./components/BackgroundCanvas";
import MusicControl from "./components/MusicControl";
import FloatingNav from "./components/FloatingNav";
import OpeningHero from "./components/OpeningHero";
import InvitationText from "./components/InvitationText";
import VenueCard from "./components/VenueCard";
import ClosingSection from "./components/ClosingSection";
import TapToOpenOverlay from "./components/TapToOpenOverlay";

export default function App() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
        overflowX: "hidden"
      }}
    >
      {/* 1. Theatrical "Tap To Open" Royal Envelope Overlay */}
      <TapToOpenOverlay onOpen={() => setIsStarted(true)} />

      {/* 2. Background GPU Canvas for Golden Stardust & Marigold Petals */}
      <BackgroundCanvas />

      {/* 3. Floating Controls */}
      <MusicControl />
      <FloatingNav />

      {/* 4. Main Flow of Sacred Digital Invitation */}
      <main style={{ position: "relative", zIndex: 2 }}>
        {/* Hero & Opening Experience (starts sequence upon tap) */}
        <OpeningHero isStarted={isStarted} />

        {/* Poetic Devotional Invitation Copy with 1.5 Days Timings */}
        <InvitationText />

        {/* Venue & Location with Direct Google Maps Link */}
        <VenueCard />

        {/* Grand Closing & Flower Blessing Shower */}
        <ClosingSection />
      </main>
    </div>
  );
}
