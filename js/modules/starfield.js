// ============================================================================
// STARFIELD — canvas-baserad rymdbakgrund med parallax-stjärnor och
// långsamt drivande "nebulosa"-partiklar. Helt beroendefri (ingen extern lib).
// ============================================================================

export function initStarfield(canvasId = "starfield-canvas") {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let width, height, dpr;
  let stars = [];
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;
  let rafId = null;

  const STAR_COUNT_BASE = 140;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    generateStars();
  }

  function generateStars() {
    const count = Math.round((width * height) / 9000);
    stars = Array.from({ length: Math.max(count, STAR_COUNT_BASE) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.4 + 0.2,
      baseAlpha: Math.random() * 0.6 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinklePhase: Math.random() * Math.PI * 2,
      depth: Math.random() * 0.8 + 0.2, // parallax-djup
      hue: Math.random() > 0.85 ? "amber" : "cyan",
    }));
  }

  function draw(time) {
    ctx.clearRect(0, 0, width, height);

    // Mjukt lerpa mus-parallax
    targetX += (mouseX - targetX) * 0.03;
    targetY += (mouseY - targetY) * 0.03;

    for (const star of stars) {
      const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.35 + 0.65;
      const alpha = star.baseAlpha * twinkle;
      const parallaxX = star.x + targetX * star.depth * 18;
      const parallaxY = star.y + targetY * star.depth * 18;

      ctx.beginPath();
      ctx.arc(parallaxX, parallaxY, star.radius, 0, Math.PI * 2);
      ctx.fillStyle =
        star.hue === "amber" ? `rgba(255, 180, 120, ${alpha})` : `rgba(200, 235, 255, ${alpha})`;
      ctx.fill();
    }

    if (!prefersReducedMotion) {
      rafId = requestAnimationFrame(draw);
    }
  }

  function onMouseMove(e) {
    mouseX = (e.clientX / width - 0.5) * 2;
    mouseY = (e.clientY / height - 0.5) * 2;
  }

  window.addEventListener("resize", resize);
  if (!prefersReducedMotion) {
    window.addEventListener("mousemove", onMouseMove, { passive: true });
  }

  resize();

  if (prefersReducedMotion) {
    draw(0);
  } else {
    rafId = requestAnimationFrame(draw);
  }

  return () => {
    if (rafId) cancelAnimationFrame(rafId);
    window.removeEventListener("resize", resize);
    window.removeEventListener("mousemove", onMouseMove);
  };
}
