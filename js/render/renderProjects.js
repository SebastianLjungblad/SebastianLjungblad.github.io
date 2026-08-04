import { projects } from "../data/projects.js";
import { mediaBlock } from "../modules/placeholder.js";
import { getIcon } from "../modules/icons.js";

// Väljer vad som ska visas i ett projektkorts media-ruta:
// 1) liveEmbed (URL) — visar en riktig, levande vy av sidan i mobilstorlek,
//    inramad som en telefon, laddad direkt från projektets URL.
// 2) image — vanlig bild/skärmdump.
// 3) platshållare, om inget av ovanstående är satt.
function projectMediaBlock(p) {
  if (p.liveEmbed) {
    return `
      <div class="project-card__live-wrap">
        <div class="phone-frame">
          <div class="phone-frame__notch"></div>
          <div class="phone-frame__screen">
            <iframe
              src="${p.liveEmbed}"
              title="Live-vy av ${p.name} (mobilversion)"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div class="live-badge"><span class="live-badge__dot"></span>Live-vy · mobil</div>
      </div>
    `;
  }
  return mediaBlock(p.image, `Skärmdump / bild från ${p.name} (rekommenderat 1200×900px)`, p.name);
}

export function renderProjects(containerId = "projects-list") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = projects
    .map((p, i) => {
      if (p.placeholder) {
        return `
          <article class="card project-card project-card--placeholder" data-reveal="scale">
            <div class="project-card__body">
              <span class="icon-badge">${getIcon("code")}</span>
              <h3 class="project-card__name">${p.name}</h3>
              <p class="project-card__tagline">${p.tagline}</p>
              <p class="project-card__description">${p.description}</p>
            </div>
          </article>
        `;
      }

      return `
        <article class="card project-card" data-reveal="${i % 2 === 0 ? "left" : "right"}">
          <div class="project-card__media">
            ${projectMediaBlock(p)}
          </div>
          <div class="project-card__body">
            <div class="project-card__top">
              <span class="tag tag--status">${p.status}</span>
              ${p.company ? `<span class="tag text-mono">${p.company}</span>` : ""}
            </div>
            <h3 class="project-card__name">${p.name}</h3>
            <p class="project-card__tagline">${p.tagline}</p>
            <p class="project-card__description">${p.description}</p>

            ${
              p.highlights && p.highlights.length
                ? `<div class="project-card__highlights" data-reveal-stagger>
                    ${p.highlights
                      .map(
                        (h) => `
                      <div class="highlight" data-reveal="fade">
                        <span class="icon-badge">${getIcon("terminal")}</span>
                        <div>
                          <div class="highlight__title">${h.title}</div>
                          <div class="highlight__detail">${h.detail}</div>
                        </div>
                      </div>
                    `
                      )
                      .join("")}
                  </div>`
                : ""
            }

            ${
              p.stack && p.stack.length
                ? `<div class="project-card__stack">
                    ${p.stack.map((s) => `<span class="tag">${s}</span>`).join("")}
                  </div>`
                : ""
            }

            ${
              p.url
                ? `<div class="project-card__actions">
                    <a class="btn btn--primary" href="${p.url}" target="_blank" rel="noopener">
                      Besök sidan ${getIcon("arrowUpRight")}
                    </a>
                  </div>`
                : ""
            }
          </div>
        </article>
      `;
    })
    .join("");
}