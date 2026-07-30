import { achievedGoals, futureGoals } from "../data/goals.js";
import { getIcon } from "../modules/icons.js";

export function renderGoals(achievedId = "goals-achieved", futureId = "goals-future") {
  const achievedEl = document.getElementById(achievedId);
  const futureEl = document.getElementById(futureId);

  if (achievedEl) {
    achievedEl.innerHTML = achievedGoals
      .map(
        (g) => `
        <div class="goal-item" data-reveal="fade">
          <span class="icon-badge">${getIcon(g.icon)}</span>
          <div class="goal-item__body">
            <div class="goal-item__title"><span>${g.title}</span><span class="goal-item__year text-mono">${g.year}</span></div>
            <div class="goal-item__detail">${g.detail}</div>
          </div>
        </div>
      `
      )
      .join("");
  }

  if (futureEl) {
    futureEl.innerHTML = futureGoals
      .map(
        (g) => `
        <div class="goal-item${g.priority ? " goal-item--priority" : ""}" data-reveal="fade">
          <span class="icon-badge icon-badge--amber">${getIcon(g.icon)}</span>
          <div class="goal-item__body">
            <div class="goal-item__title"><span>${g.title}</span></div>
            <div class="goal-item__detail">${g.detail}</div>
          </div>
        </div>
      `
      )
      .join("");
  }
}
