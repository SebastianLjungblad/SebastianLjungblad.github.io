import { experience } from "../data/experience.js";
import { getIcon } from "../modules/icons.js";

export function renderExperience(containerId = "experience-list") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = experience
    .map(
      (job) => `
      <article class="card experience-card" data-reveal="fade">
        <span class="icon-badge">${getIcon("briefcase")}</span>
        <div>
          <div class="experience-card__top">
            <div>
              <h3 class="experience-card__role">${job.role}</h3>
              <div class="experience-card__company">${job.company}</div>
              <div class="experience-card__duration">${job.duration} · ${job.period}</div>
            </div>
            <span class="tag tag--status">Pågående</span>
          </div>
          <p class="experience-card__description">${job.description}</p>
          <div class="experience-card__clients">
            <div class="experience-card__clients-label">Utvalda kunder</div>
            <div class="experience-card__client-list">
              ${job.clients.map((c) => `<span class="tag">${c}</span>`).join("")}
            </div>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}
