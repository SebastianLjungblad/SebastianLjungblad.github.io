// ============================================================================
// ELEVATION PROFILE — bygger en liten SVG-höjdprofil från en array av
// relativa höjdvärden. Används för lopprutter i äventyrssektionen.
// ============================================================================

export function buildElevationSvg(points, { width = 400, height = 60, uid = "" } = {}) {
  if (!points || !points.length) return "";

  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const stepX = width / (points.length - 1);
  const padY = 8;

  const coords = points.map((p, i) => {
    const x = i * stepX;
    const y = height - padY - ((p - min) / range) * (height - padY * 2);
    return [x, y];
  });

  const linePath = coords
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ");

  const fillPath = `${linePath} L${width},${height} L0,${height} Z`;
  const gradientId = `elevation-gradient${uid}`;

  return `
    <svg class="elevation-profile" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="${gradientId}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--c-cyan)" stop-opacity="0.55" />
          <stop offset="100%" stop-color="var(--c-cyan)" stop-opacity="0" />
        </linearGradient>
      </defs>
      <path class="fill" style="fill:url(#${gradientId})" d="${fillPath}" />
      <path class="line" d="${linePath}" />
    </svg>
  `;
}
