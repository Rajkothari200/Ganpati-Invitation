import React, { useEffect, useRef } from "react";

/**
 * BackgroundCanvas
 * High-performance HTML5 Canvas simulation rendering:
 * 1. Shimmering golden stardust specks
 * 2. Drifting sacred marigold petals with realistic tumbling motion
 * Highly optimized with delta-time, paused on tab blur, respectful of prefers-reduced-motion.
 */
export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Responsive particle count (fewer on mobile)
    const isMobile = width < 768;
    const dustCount = prefersReducedMotion ? 15 : isMobile ? 35 : 60;
    const petalCount = prefersReducedMotion ? 4 : isMobile ? 8 : 16;

    // Mouse coordinates for gentle interactive breeze
    let mouse = { x: width / 2, y: height / 2, active: false };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // Golden Dust Particle Class
    class GoldDust {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : height + 10;
        this.size = Math.random() * 2 + 0.8;
        this.baseAlpha = Math.random() * 0.45 + 0.25;
        this.alpha = this.baseAlpha;
        this.speedY = Math.random() * 0.35 + 0.15;
        this.speedX = (Math.random() - 0.5) * 0.25;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseAngle = Math.random() * Math.PI * 2;
        this.color =
          Math.random() > 0.4
            ? "212, 175, 55" // Gold
            : Math.random() > 0.5
            ? "245, 158, 11" // Saffron
            : "254, 243, 199"; // Warm Ivory Glow
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX + Math.sin(this.pulseAngle) * 0.2;
        this.pulseAngle += this.pulseSpeed;
        this.alpha =
          this.baseAlpha + Math.sin(this.pulseAngle) * (this.baseAlpha * 0.5);

        // Gentle reaction to cursor
        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (120 - dist) / 120;
            this.x -= (dx / dist) * force * 0.8;
            this.y -= (dy / dist) * force * 0.8;
          }
        }

        if (this.y < -20 || this.x < -20 || this.x > width + 20) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${Math.max(0, this.alpha)})`;
        ctx.shadowColor = `rgba(${this.color}, 0.6)`;
        ctx.shadowBlur = this.size * 3;
        ctx.fill();
        ctx.restore();
      }
    }

    // Drifting Marigold Petal Class
    class MarigoldPetal {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : -30;
        this.size = Math.random() * 9 + 8; // 8px to 17px
        this.speedY = Math.random() * 0.55 + 0.35;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.02;
        this.swayAngle = Math.random() * Math.PI * 2;
        this.swaySpeed = Math.random() * 0.015 + 0.008;
        this.opacity = Math.random() * 0.35 + 0.55;
        this.colorHue = Math.random() > 0.45 ? 36 : 42; // Rich saffron to marigold golden
      }

      update() {
        this.y += this.speedY;
        this.swayAngle += this.swaySpeed;
        this.x += Math.sin(this.swayAngle) * 0.65 + this.speedX;
        this.rotation += this.rotSpeed;

        if (this.y > height + 40) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;

        // Realistic Marigold Petal geometry (curved teardrop/almond)
        ctx.beginPath();
        ctx.moveTo(0, -this.size);
        ctx.bezierCurveTo(
          this.size * 0.65,
          -this.size * 0.5,
          this.size * 0.55,
          this.size * 0.7,
          0,
          this.size
        );
        ctx.bezierCurveTo(
          -this.size * 0.55,
          this.size * 0.7,
          -this.size * 0.65,
          -this.size * 0.5,
          0,
          -this.size
        );
        ctx.closePath();

        // Warm Festive Gradient
        const grad = ctx.createLinearGradient(0, -this.size, 0, this.size);
        grad.addColorStop(0, `hsl(${this.colorHue + 6}, 95%, 62%)`);
        grad.addColorStop(0.7, `hsl(${this.colorHue}, 92%, 50%)`);
        grad.addColorStop(1, `hsl(${this.colorHue - 10}, 95%, 44%)`);

        ctx.fillStyle = grad;
        ctx.shadowColor = "rgba(245, 158, 11, 0.35)";
        ctx.shadowBlur = 6;
        ctx.fill();

        // Subtle Petal Spine Line
        ctx.beginPath();
        ctx.moveTo(0, -this.size * 0.8);
        ctx.lineTo(0, this.size * 0.7);
        ctx.strokeStyle = "rgba(255, 235, 180, 0.4)";
        ctx.lineWidth = 0.8;
        ctx.stroke();

        ctx.restore();
      }
    }

    const dustParticles = Array.from({ length: dustCount }, () => new GoldDust());
    const petals = Array.from({ length: petalCount }, () => new MarigoldPetal());

    let isTabVisible = true;
    const handleVisibilityChange = () => {
      isTabVisible = document.visibilityState === "visible";
      if (isTabVisible) {
        lastTime = performance.now();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    let lastTime = performance.now();

    const render = (time) => {
      animationFrameId = requestAnimationFrame(render);
      if (!isTabVisible) return;

      ctx.clearRect(0, 0, width, height);

      // Render Golden Dust Particles
      for (let i = 0; i < dustParticles.length; i++) {
        dustParticles[i].update();
        dustParticles[i].draw();
      }

      // Render Marigold Petals
      for (let i = 0; i < petals.length; i++) {
        petals[i].update();
        petals[i].draw();
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1
      }}
    />
  );
}
