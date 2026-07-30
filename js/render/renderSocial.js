import { socialLinks, contact } from "../data/social.js";
import { getIcon } from "../modules/icons.js";

export function renderSocial(containerId = "social-links") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = socialLinks
    .map(
      (link) => `
      <a class="social-link" href="${link.url}" target="${link.url.startsWith("mailto:") ? "_self" : "_blank"}" rel="noopener">
        ${getIcon(link.icon)}
        <span>${link.label}</span>
      </a>
    `
    )
    .join("");

  if (contact.cvUrl) {
    container.innerHTML += `
      <a class="social-link" href="${contact.cvUrl}" download>
        ${getIcon("download")}
        <span>Ladda ner CV</span>
      </a>
    `;
  }
}
