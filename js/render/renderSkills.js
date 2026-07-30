import { skillCategories, assemblerNote } from "../data/skills.js";
import { courses, totalCredits } from "../data/courses.js";

export function renderSkills(tabsId = "skills-tabs", panelsId = "skills-panels") {
  const tabsEl = document.getElementById(tabsId);
  const panelsEl = document.getElementById(panelsId);
  if (!tabsEl || !panelsEl) return;

  tabsEl.innerHTML = skillCategories
    .map(
      (cat, i) =>
        `<button class="skills__tab${i === 0 ? " is-active" : ""}" data-tab-target="${cat.id}">${cat.label}</button>`
    )
    .join("");

  panelsEl.innerHTML = skillCategories
    .map(
      (cat, i) => `
      <div class="skills__panel${i === 0 ? " is-active" : ""}" data-tab-panel="${cat.id}" data-reveal-stagger>
        ${cat.skills
          .map(
            (skill) => `
          <div class="skill-bar" data-reveal="fade">
            <div class="skill-bar__labels">
              <span>${skill.name}</span>
              <span class="text-mono">${skill.level}%</span>
            </div>
            <div class="skill-bar__track">
              <div class="skill-bar__fill" data-level="${skill.level}"></div>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `
    )
    .join("");

  const tabs = tabsEl.querySelectorAll(".skills__tab");
  const panels = panelsEl.querySelectorAll(".skills__panel");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("is-active"));
      panels.forEach((p) => p.classList.remove("is-active"));
      tab.classList.add("is-active");
      panelsEl.querySelector(`[data-tab-panel="${tab.dataset.tabTarget}"]`).classList.add("is-active");
    });
  });

  const noteEl = document.getElementById("skills-note");
  if (noteEl) noteEl.textContent = assemblerNote;
}

export function renderCourses(containerId = "courses-table-body", metaId = "courses-meta") {
  const tbody = document.getElementById(containerId);
  const meta = document.getElementById(metaId);
  if (meta) {
    meta.innerHTML = `<strong>${totalCredits()}</strong> hp registrerade/avklarade av <span>${courses.length}</span> kurser`;
  }
  if (!tbody) return;

  tbody.innerHTML = courses
    .map((c) => {
      const statusClass =
        c.status === "Avklarad" ? "tag--status" : c.status === "Registrerad" ? "tag--status tag--registered" : "tag--status tag--pending";
      return `
        <tr>
          <td><a href="${c.url}" target="_blank" rel="noopener">${c.name}</a>${c.note ? `<div class="text-mono" style="font-size:.7rem;color:var(--c-text-faint);margin-top:2px;">${c.note}</div>` : ""}</td>
          <td class="course-table__code">${c.code}</td>
          <td>${c.hp !== null ? c.hp.toFixed(1).replace(".", ",") + " hp" : "[HP SAKNAS]"}</td>
          <td><span class="tag ${statusClass}">${c.status}</span></td>
        </tr>
      `;
    })
    .join("");
}
