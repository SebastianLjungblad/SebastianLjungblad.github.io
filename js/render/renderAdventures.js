import { raceAdventures, climbingAdventures } from "../data/adventures.js";
import { mediaBlock } from "../modules/placeholder.js";
import { buildElevationSvg } from "../modules/elevation.js";
import { getIcon } from "../modules/icons.js";

export function renderRaces(containerId = "races-grid") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = raceAdventures
    .map(
      (race, i) => `
      <article class="card race-card" data-reveal="scale" style="--reveal-delay:${i * 100}ms">
        <div class="race-card__media">
          ${mediaBlock(race.image, `Bild från ${race.title} ${race.subtitle} (rekommenderat 900×600px)`, race.title)}
        </div>
        <div class="race-card__location text-mono">${race.location} · ${race.date}</div>
        <h3 class="race-card__title">${race.title}</h3>
        <div class="race-card__subtitle">${race.subtitle}</div>

        <div class="race-card__distances">
          <div class="race-card__distance">
            <span class="race-card__distance-value">${race.distance.swim}</span>
            <span class="race-card__distance-label">Simning</span>
          </div>
          <div class="race-card__distance">
            <span class="race-card__distance-value">${race.distance.bike}</span>
            <span class="race-card__distance-label">Cykel</span>
          </div>
          <div class="race-card__distance">
            <span class="race-card__distance-value">${race.distance.run}</span>
            <span class="race-card__distance-label">Löpning</span>
          </div>
        </div>

        <div class="race-card__elevation">
          ${buildElevationSvg(race.route.points, { uid: `-${race.id}` })}
        </div>

        <div class="race-card__stats">
          ${race.stats
            .map(
              (s) => `
            <div class="race-card__stat-label">${s.label}</div>
            <div class="race-card__stat-value" style="justify-self:end">${s.value}</div>
          `
            )
            .join("")}
        </div>

        <div class="race-card__thoughts">${race.thoughts}</div>
      </article>
    `
    )
    .join("");

  // Animera in höjdprofilerna när korten syns.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.5 }
  );
  container.querySelectorAll(".elevation-profile").forEach((el) => observer.observe(el));
}

export function renderClimb(containerId = "climb-container") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = climbingAdventures
    .map(
      (climb) => `
      <article class="card climb-card" data-reveal="fade">
        <div class="climb-card__media" data-reveal="left">
          ${mediaBlock(climb.image, `Bild från ${climb.title}-bestigningen (rekommenderat 1000×1250px, stående)`, climb.title)}
        </div>
        <div class="climb-card__body" data-reveal="right">
          <span class="icon-badge icon-badge--amber">${getIcon("mountain")}</span>
          <h3 class="climb-card__title">${climb.title}</h3>
          <div class="climb-card__subtitle">${climb.subtitle} · ${climb.location}</div>

          <dl class="climb-facts">
            <div class="climb-fact"><dt>Höjd</dt><dd>${climb.facts.elevation}</dd></div>
            <div class="climb-fact"><dt>Bergskedja</dt><dd>${climb.facts.range}</dd></div>
            <div class="climb-fact"><dt>Normalled</dt><dd>${climb.facts.normalRoute}</dd></div>
            <div class="climb-fact"><dt>Svårighetsgrad</dt><dd>${climb.facts.difficulty}</dd></div>
            <div class="climb-fact"><dt>Bergstuga</dt><dd>${climb.facts.baseHut}</dd></div>
            <div class="climb-fact"><dt>Datum</dt><dd>${climb.date}</dd></div>
          </dl>

          <p class="climb-card__intro">${climb.logistics.intro}</p>

          <div class="itinerary timeline">
            ${climb.logistics.itinerary
              .map(
                (step) => `
              <div class="timeline__item">
                <span class="timeline__dot"></span>
                <div class="text-mono" style="color:var(--c-amber);font-size:.78rem;letter-spacing:.04em;">${step.step}</div>
                <div style="color:var(--c-text-dim);margin-top:4px;font-size:.9rem;line-height:1.5;">${step.detail}</div>
              </div>
            `
              )
              .join("")}
          </div>

          <div class="courses__meta" style="margin-top:var(--sp-6);margin-bottom:0;">
            <span class="text-mono" style="text-transform:uppercase;letter-spacing:.08em;font-size:.72rem;color:var(--c-text-faint);">Packlista / utrustning</span>
          </div>
          <div class="gear-list">
            ${climb.logistics.gear.map((g) => `<div class="gear-list__item">${g}</div>`).join("")}
          </div>

          <div class="climb-card__safety"><strong>Säkerhet:</strong> ${climb.logistics.safety}</div>

          <div class="climb-card__thoughts">${climb.thoughts}</div>
        </div>
      </article>
    `
    )
    .join("");
}
