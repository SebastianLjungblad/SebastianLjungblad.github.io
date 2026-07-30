// ============================================================================
// CONTOUR BACKGROUND — genererar ett topografiskt konturlinje-mönster
// (som en höjdkarta) och sätter det som bakgrund på .contour-overlay.
// Helt proceduellt, inga externa bilder eller bibliotek krävs.
// ============================================================================

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function buildContourSvg(width, height, lineCount = 14, seed = 7) {
  const rand = seededRandom(seed);
  const amp1 = height * 0.06;
  const amp2 = height * 0.03;
  const freq1 = 0.004 + rand() * 0.002;
  const freq2 = 0.01 + rand() * 0.004;
  const phaseBase = rand() * 100;

  let paths = "";
  for (let i = 0; i < lineCount; i++) {
    const baseY = (height / (lineCount + 1)) * (i + 1);
    const phase = phaseBase + i * 1.7;
    let d = "";
    const step = 24;
    for (let x = 0; x <= width; x += step) {
      const y =
        baseY +
        Math.sin(x * freq1 + phase) * amp1 +
        Math.sin(x * freq2 + phase * 1.3) * amp2;
      d += `${x === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)} `;
    }
    const opacity = (0.12 + (i % 3) * 0.05).toFixed(2);
    paths += `<path d="${d}" fill="none" stroke="#22e5ff" stroke-width="1" opacity="${opacity}" />`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${paths}</svg>`;
}

export function initContourBackground(elementId = "contour-overlay") {
  const el = document.getElementById(elementId);
  if (!el) return;

  const width = 1600;
  const height = 1000;
  const svg = buildContourSvg(width, height);
  const encoded = encodeURIComponent(svg)
    .replace(/'/g, "%27")
    .replace(/"/g, "%22");

  el.style.backgroundImage = `url("data:image/svg+xml;charset=utf-8,${encoded}")`;
  el.style.backgroundSize = "cover";
  el.style.backgroundPosition = "center";
}
