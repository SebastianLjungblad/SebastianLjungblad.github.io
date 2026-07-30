// ============================================================================
// SOCIALA LÄNKAR & KONTAKT
// Fyll i dina riktiga länkar/handles nedan. Lämna en post som null eller
// ta bort den ur arrayen om du inte vill visa den knappen.
// ============================================================================

export const contact = {
  // Denna e-post är hämtad från ditt konto — byt gärna till en du vill
  // exponera publikt på en portfolio-sida.
  email: "sebastian.ljungblad@icloud.com",
  cvUrl: null, // T.ex. "assets/cv/sebastian-ljungblad-cv.pdf" — lägg din CV-PDF i assets/cv/
};

export const socialLinks = [
  {
    id: "tiktok",
    label: "TikTok",
    // Byt ut mot din riktiga handle, t.ex. "https://www.tiktok.com/@dittnamn"
    url: "[TIKTOK-LÄNK]",
    icon: "tiktok",
  },
  {
    id: "github",
    label: "GitHub",
    url: "[GITHUB-LÄNK]",
    icon: "github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "[LINKEDIN-LÄNK]",
    icon: "linkedin",
  },
  {
    id: "email",
    label: "E-post",
    url: `mailto:${contact.email}`,
    icon: "mail",
  },
];
