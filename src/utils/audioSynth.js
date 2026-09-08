/**
 * Devotional Audio Engine
 * Plays the sacred "shree_ganesha_flute.mp3" audio track with smooth volume fades,
 * mobile autoplay support via user interaction, looping, fallback synthesis,
 * and automatic pause when Chrome/browser is in the background.
 */

class DevotionalAudioEngine {
  constructor() {
    this.audio = null;
    this.isPlaying = false;
    this.listeners = [];
    this.fadeInterval = null;
    this.targetVolume = 0.75;
    this.isInitialized = false;
    this.wasPlayingBeforeHidden = false;

    // Web Audio synthesizer fallback state if MP3 cannot be played
    this.synthEngine = null;

    // Listen for tab switching / backgrounding
    this.setupVisibilityListener();
  }

  setupVisibilityListener() {
    if (typeof document === "undefined") return;

    const handleVisibilityChange = () => {
      if (document.hidden || document.visibilityState === "hidden") {
        // Tab is hidden or in background: pause music immediately
        if (this.isPlaying) {
          this.wasPlayingBeforeHidden = true;
          this.pauseImmediately();
        }
      } else if (document.visibilityState === "visible") {
        // Tab is active again: resume if it was playing before being hidden
        if (this.wasPlayingBeforeHidden) {
          this.wasPlayingBeforeHidden = false;
          this.start();
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", () => {
      if (this.isPlaying) {
        this.wasPlayingBeforeHidden = true;
        this.pauseImmediately();
      }
    });
    window.addEventListener("pageshow", () => {
      if (this.wasPlayingBeforeHidden) {
        this.wasPlayingBeforeHidden = false;
        this.start();
      }
    });
  }

  subscribe(callback) {
    this.listeners.push(callback);
    callback(this.isPlaying);
    return () => {
      this.listeners = this.listeners.filter((fn) => fn !== callback);
    };
  }

  notify() {
    this.listeners.forEach((fn) => {
      try {
        fn(this.isPlaying);
      } catch (e) {
        console.error("Audio listener error:", e);
      }
    });
  }

  initAudio() {
    if (this.isInitialized && this.audio) return;

    try {
      this.audio = new Audio("/shree_ganesha_flute.mp3");
      this.audio.loop = true;
      this.audio.preload = "auto";
      this.audio.volume = 0;

      // Event listeners to sync state
      this.audio.addEventListener("play", () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audio.addEventListener("pause", () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audio.addEventListener("ended", () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audio.addEventListener("error", (e) => {
        console.warn("Audio file playback encountered error, falling back to ambient synth:", e);
        this.startFallbackSynth();
      });

      this.isInitialized = true;
    } catch (err) {
      console.warn("Audio element initialization failed:", err);
      this.startFallbackSynth();
    }
  }

  start() {
    this.initAudio();

    if (this.fadeInterval) clearInterval(this.fadeInterval);

    if (this.audio) {
      const playPromise = this.audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            this.isPlaying = true;
            this.notify();

            // Smooth volume fade-in
            let currentVol = this.audio.volume;
            this.fadeInterval = setInterval(() => {
              if (!this.audio) {
                clearInterval(this.fadeInterval);
                return;
              }
              currentVol = Math.min(this.targetVolume, currentVol + 0.05);
              this.audio.volume = parseFloat(currentVol.toFixed(2));
              if (currentVol >= this.targetVolume) {
                clearInterval(this.fadeInterval);
              }
            }, 60);
          })
          .catch((err) => {
            console.log("Audio autoplay restricted or delayed until tap:", err);
          });
      }
    } else {
      this.startFallbackSynth();
    }
  }

  pauseImmediately() {
    if (this.fadeInterval) clearInterval(this.fadeInterval);
    if (this.audio && !this.audio.paused) {
      this.audio.pause();
    }
    this.isPlaying = false;
    this.notify();
    if (this.synthEngine && this.synthEngine.ctx) {
      this.synthEngine.ctx.suspend?.();
    }
  }

  stop() {
    // Deliberate user action to stop music -> do not auto-resume when returning to tab
    this.wasPlayingBeforeHidden = false;

    if (this.fadeInterval) clearInterval(this.fadeInterval);

    if (this.audio && !this.audio.paused) {
      let currentVol = this.audio.volume;
      this.fadeInterval = setInterval(() => {
        if (!this.audio) {
          clearInterval(this.fadeInterval);
          return;
        }
        currentVol = Math.max(0, currentVol - 0.08);
        this.audio.volume = parseFloat(currentVol.toFixed(2));
        if (currentVol <= 0.01) {
          this.audio.volume = 0;
          this.audio.pause();
          this.isPlaying = false;
          this.notify();
          clearInterval(this.fadeInterval);
        }
      }, 50);
    } else {
      this.isPlaying = false;
      this.notify();
    }

    if (this.synthEngine) {
      this.synthEngine.stop();
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.wasPlayingBeforeHidden = false;
      this.start();
      return true;
    }
  }

  startFallbackSynth() {
    try {
      if (!this.synthEngine) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContextClass();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.setValueAtTime(277.18, ctx.currentTime);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        osc.connect(gain);
        gain.connect(ctx.destination);
        this.synthEngine = { ctx, osc, gain, started: false };
      }
      if (this.synthEngine.ctx.state === "suspended") {
        this.synthEngine.ctx.resume();
      }
      if (!this.synthEngine.started) {
        this.synthEngine.osc.start();
        this.synthEngine.started = true;
      }
      this.isPlaying = true;
      this.notify();
    } catch (e) {
      console.warn("Fallback synth error:", e);
    }
  }
}

export const devotionalAudio = new DevotionalAudioEngine();
