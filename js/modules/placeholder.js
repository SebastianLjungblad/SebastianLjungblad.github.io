// ============================================================================
// PLACEHOLDER — genererar en enhetlig "lägg din bild här"-platshållare.
// Om `src` finns renderas en riktig <img> istället.
// ============================================================================

import { getIcon } from "./icons.js";

export function mediaBlock(src, label, alt = "") {
  if (src) {
    return `<img src="${src}" alt="${alt}" loading="lazy" />`;
  }
  return `
    <div class="img-placeholder">
      <span class="img-placeholder__icon">${getIcon("image")}</span>
      <span class="img-placeholder__label">${label}</span>
    </div>
  `;
}
