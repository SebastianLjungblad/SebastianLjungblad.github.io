// ============================================================================
// TYPEWRITER — skriver ut en lista av fraser i terminal-stil, en bokstav i
// taget, och raderar mellan varje fras.
// ============================================================================

export function initTypewriter(elementId, phrases, options = {}) {
  const el = document.getElementById(elementId);
  if (!el || !phrases || !phrases.length) return;

  const { typeSpeed = 55, deleteSpeed = 30, pause = 1800 } = options;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    el.textContent = phrases[0];
    return;
  }

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, pause);
        return;
      }
      setTimeout(tick, typeSpeed);
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, deleteSpeed);
    }
  }

  tick();
}
