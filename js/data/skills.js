// ============================================================================
// KOMPETENSER — programmeringsspråk & teknologier
// "level" är 0-100 och styr hur fylld progress-ringen/baren blir.
// ============================================================================

export const skillCategories = [
  {
    id: "languages",
    label: "Språk",
    skills: [
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "Java", level: 80 },
      { name: "C++", level: 75 },
      { name: "Dart (Flutter)", level: 70 },
      { name: "SQL", level: 80 },
      { name: "Assembler (68000/ARM)", level: 60 },
      { name: "HTML / CSS", level: 90 },
    ],
  },
  {
    id: "platforms",
    label: "Ramverk & plattformar",
    skills: [
      { name: "React", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Flutter", level: 70 },
      { name: "Framer Motion", level: 80 },
      { name: "Supabase / PostgreSQL", level: 80 },
      { name: "Vite", level: 85 },
      { name: "Vercel / Serverless", level: 80 },
      { name: "Git", level: 85 },
    ],
  },
  {
    id: "domains",
    label: "Domänkunskap",
    skills: [
      { name: "Distribuerade system", level: 75 },
      { name: "Operativsystem & processprogrammering", level: 75 },
      { name: "Formella språk & automatateori", level: 70 },
      { name: "Datastrukturer & algoritmer", level: 85 },
      { name: "Betalningssystem & säkerhet", level: 80 },
      { name: "Inbyggda system / digitalteknik", level: 65 },
    ],
  },
];

// Notis: Assembler-erfarenheten kommer från kursen Datorteknik Y (TSEA28) på
// LiU, där jag bland annat byggde ett elektroniskt kodlås i assembler.
export const assemblerNote =
  "Assemblerprogrammering av bland annat ett digitalt kodlås, från kursen Datorteknik Y (TSEA28) på LiU.";
