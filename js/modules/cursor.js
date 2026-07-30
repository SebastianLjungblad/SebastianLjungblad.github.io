// ============================================================================
// CUSTOM CURSOR — en punkt som följer musen exakt + en ring som släpar efter
// och förstoras över klickbara element. Inaktiveras automatiskt på touch.
// ============================================================================

export function initCursor() {
  if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;

  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  const ring = document.createElement("div");
  ring.className = "cursor-ring";
  document.body.append(dot, ring);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener(
    "mousemove",
    (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    },
    { passive: true }
  );

  function loop() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  const interactiveSelector = "a, button, [data-cursor-hover]";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest && e.target.closest(interactiveSelector)) {
      ring.classList.add("is-active");
    }
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest && e.target.closest(interactiveSelector)) {
      ring.classList.remove("is-active");
    }
  });

  document.addEventListener("mouseleave", () => {
    dot.style.opacity = "0";
    ring.style.opacity = "0";
  });
  document.addEventListener("mouseenter", () => {
    dot.style.opacity = "1";
    ring.style.opacity = "1";
  });
}
