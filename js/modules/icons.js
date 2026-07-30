// ============================================================================
// IKONER — samling handskrivna inline SVG-ikoner (stroke-baserade, 24x24
// viewBox). Inga externa ikon-bibliotek eller nätverksanrop krävs.
// ============================================================================

const strokeProps = 'fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"';

const icons = {
  rocket: `<svg viewBox="0 0 24 24" ${strokeProps}><path d="M12 2c2.5 2 4 5.5 4 9.5 0 2-1 4-1 4H9s-1-2-1-4C8 7.5 9.5 4 12 2Z"/><circle cx="12" cy="9" r="1.6"/><path d="M9 15l-2.5 2.5S6 20 6 21c1 0 3.5-.5 3.5-.5L12 18"/><path d="M15 15l2.5 2.5S18 20 18 21c-1 0-3.5-.5-3.5-.5L12 18"/><path d="M9 15 6 18M15 15l3 3"/></svg>`,
  mountain: `<svg viewBox="0 0 24 24" ${strokeProps}><path d="M2 20 9 8l3 5 2-2 8 9Z"/><path d="M14 11l1.5 1.8"/></svg>`,
  code: `<svg viewBox="0 0 24 24" ${strokeProps}><path d="M9 18 3 12l6-6"/><path d="M15 6l6 6-6 6"/></svg>`,
  briefcase: `<svg viewBox="0 0 24 24" ${strokeProps}><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/></svg>`,
  medal: `<svg viewBox="0 0 24 24" ${strokeProps}><circle cx="12" cy="15" r="6"/><path d="M9 4l3 5 3-5"/><path d="M12 12l-1.5 3h3L12 12Z"/></svg>`,
  trail: `<svg viewBox="0 0 24 24" ${strokeProps}><path d="M4 20c3-4 2-8 5-10s3 3 6 1 3-6 5-8"/><circle cx="4" cy="20" r="1"/><circle cx="20" cy="3" r="1"/></svg>`,
  github: `<svg viewBox="0 0 24 24" ${strokeProps}><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.4 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" ${strokeProps}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7M7 7v.01M11 17v-4.5a2 2 0 0 1 4 0V17M11 12.5V17"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" ${strokeProps}><path d="M9 12.5a3.5 3.5 0 1 0 3.5 3.5V3.5a5 5 0 0 0 5 5"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" ${strokeProps}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,
  download: `<svg viewBox="0 0 24 24" ${strokeProps}><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>`,
  arrowUpRight: `<svg viewBox="0 0 24 24" ${strokeProps}><path d="M7 17 17 7"/><path d="M9 7h8v8"/></svg>`,
  image: `<svg viewBox="0 0 24 24" ${strokeProps}><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>`,
  terminal: `<svg viewBox="0 0 24 24" ${strokeProps}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m6 9 3 3-3 3"/><path d="M12 15h6"/></svg>`,
  satellite: `<svg viewBox="0 0 24 24" ${strokeProps}><path d="m13 7 4 4-1.5 1.5a3 3 0 0 1-4.24 0L9.5 10.7a3 3 0 0 1 0-4.24L11 5"/><path d="m17 11 2 2-2 2"/><path d="m5 19 3-3"/><path d="M3 21l2.5-2.5"/><path d="m14 4 1.5-1.5"/></svg>`,
};

export function getIcon(name) {
  return icons[name] || icons.code;
}
