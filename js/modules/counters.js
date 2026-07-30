// ============================================================================
// COUNTERS — animerar siffror och kompetens-progressbars när de scrollas in.
// ============================================================================

export function initSkillBars() {
  const bars = document.querySelectorAll(".skill-bar__fill");
  if (!bars.length || !("IntersectionObserver" in window)) {
    bars.forEach((bar) => (bar.style.width = bar.dataset.level + "%"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          bar.style.width = bar.dataset.level + "%";
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.6 }
  );

  bars.forEach((bar) => observer.observe(bar));
}

export function initStatCounters() {
  const readouts = document.querySelectorAll("[data-count-to]");
  if (!readouts.length || !("IntersectionObserver" in window)) return;

  function animateCount(el) {
    const target = parseFloat(el.dataset.countTo);
    const suffix = el.dataset.countSuffix || "";
    const isFloat = String(target).includes(".");
    const duration = 1200;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = (isFloat ? value.toFixed(1) : Math.round(value)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  readouts.forEach((el) => observer.observe(el));
}
