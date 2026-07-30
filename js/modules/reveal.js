// ============================================================================
// SCROLL REVEAL — animerar in element med [data-reveal] när de blir synliga.
// Stöder valfri stagger via [data-reveal-stagger] på ett förälder-element.
// ============================================================================

export function initScrollReveal() {
  const targets = document.querySelectorAll("[data-reveal]");
  if (!targets.length) return;

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );

  targets.forEach((el) => observer.observe(el));

  // Stagger: sätt --reveal-delay stegvis inom varje container.
  document.querySelectorAll("[data-reveal-stagger]").forEach((container) => {
    const children = container.querySelectorAll("[data-reveal]");
    children.forEach((child, i) => {
      child.style.setProperty("--reveal-delay", `${i * 90}ms`);
    });
  });
}

// Separat observer för element som ska animera varje gång de syns (t.ex.
// höjdprofiler som ritas upp på nytt).
export function initRepeatableReveal(selector, activeClass = "is-visible") {
  const targets = document.querySelectorAll(selector);
  if (!targets.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(activeClass, entry.isIntersecting);
      });
    },
    { threshold: 0.4 }
  );

  targets.forEach((el) => observer.observe(el));
}
