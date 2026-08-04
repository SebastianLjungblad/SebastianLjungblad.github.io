import { profile } from "../data/profile.js";
import { getIcon } from "../modules/icons.js";
import { mediaBlock } from "../modules/placeholder.js";

export function renderAboutPortrait(containerId = "about-portrait") {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = mediaBlock(
    profile.portraitImage,
    "assets/images/about/sebastian.jpg",
    profile.name
  );
}

export function renderAboutRoles(containerId = "about-roles") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = profile.roles
    .map(
      (role) => `
      <div class="about__role">
        <span class="about__role-marker">◆</span>
        <span>${role}</span>
      </div>
    `
    )
    .join("");
}

export function renderAboutBio(containerId = "about-bio") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = profile.bio
    .map((paragraph) => `<p data-reveal="fade">${paragraph}</p>`)
    .join("");
}

export function renderHeroStats(containerId = "hero-stats") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = profile.stats
    .map(
      (stat) => `
      <div class="stat-readout">
        <span class="stat-readout__value">${stat.value}${stat.unit ? ` <span style="font-size:0.9rem;color:var(--c-text-dim);">${stat.unit}</span>` : ""}</span>
        <span class="stat-readout__label">${stat.label}</span>
      </div>
    `
    )
    .join("");
}
