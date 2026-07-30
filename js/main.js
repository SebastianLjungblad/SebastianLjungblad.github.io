// ============================================================================
// MAIN — startpunkt. Initierar bakgrundseffekter, interaktion och renderar
// allt datadrivet innehåll in i sidan.
// ============================================================================

import { initStarfield } from "./modules/starfield.js";
import { initCursor } from "./modules/cursor.js";
import { initNav } from "./modules/nav.js";
import { initScrollReveal } from "./modules/reveal.js";
import { initTypewriter } from "./modules/typewriter.js";
import { initContourBackground } from "./modules/contour.js";
import { initSkillBars, initStatCounters } from "./modules/counters.js";

import { renderProjects } from "./render/renderProjects.js";
import { renderSkills, renderCourses } from "./render/renderSkills.js";
import { renderRaces, renderClimb } from "./render/renderAdventures.js";
import { renderExperience } from "./render/renderExperience.js";
import { renderGoals } from "./render/renderGoals.js";
import { renderSocial } from "./render/renderSocial.js";
import { renderAboutRoles, renderAboutBio, renderAboutPortrait, renderHeroStats } from "./render/renderAbout.js";

import { profile } from "./data/profile.js";

function hideLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;
  loader.classList.add("is-hidden");
  window.setTimeout(() => loader.remove(), 700);
}

function setYear() {
  const el = document.getElementById("current-year");
  if (el) el.textContent = new Date().getFullYear();
}

function init() {
  // Bakgrundseffekter
  initStarfield("starfield-canvas");
  initContourBackground("contour-overlay");
  initCursor();

  // Navigation & scrollbeteende
  initNav();

  // Hero-text
  initTypewriter("hero-typewriter", [
    profile.tagline,
    "Bygger säkra betalflöden och atomära lagersystem.",
    "Klättrar mot 4000-metare i Alperna.",
    "Söker praktik hos ett rymdbolag.",
  ]);
  renderHeroStats();

  // Datadrivet innehåll
  renderAboutRoles();
  renderAboutBio();
  renderAboutPortrait();
  renderProjects();
  renderSkills();
  renderCourses();
  renderRaces();
  renderClimb();
  renderExperience();
  renderGoals();
  renderSocial();

  // Animationer som reagerar på scroll (måste köras EFTER rendering,
  // eftersom [data-reveal]-element skapas dynamiskt ovan)
  initScrollReveal();
  initSkillBars();
  initStatCounters();

  setYear();
  hideLoader();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
