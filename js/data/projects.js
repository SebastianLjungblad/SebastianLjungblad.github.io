// ============================================================================
// PROJEKT
// Lägg till fler projekt-objekt i arrayen när du bygger nya saker.
// image: sökväg till en bild i assets/images/projects/ — lämna null för att
// visa en snygg platshållare istället.
// ============================================================================

export const projects = [
  {
    id: "finns-i-havet",
    name: "Finns i Havet",
    company: "Laga Alternativt AB",
    tagline: "Fullstack e-handelsplattform byggd helt från grunden",
    url: "https://finnsihavet.se",
    status: "Under Produktion",
    image: null, // t.ex. "assets/images/projects/finns-i-havet-hero.jpg"
    description:
      "Finns i Havet är en e-handelsplattform jag har designat, utvecklat och driftsatt helt själv — från databasmodell och betalflöde till frakthantering och adminverktyg. Allt är byggt för att tåla riktig trafik och riktiga pengar, inte bara ett kursprojekt.",
    highlights: [
      {
        title: "Lagersystem utan race conditions",
        detail:
          "Atomära databasoperationer säkerställer att lagersaldot aldrig blir felaktigt även vid samtidiga köp — ingen överbokning, även under hög belastning.",
      },
      {
        title: "Betalningslösning via Stripe",
        detail:
          "Pris och fraktkostnad beräknas alltid serverside, aldrig av klienten. Webhook-signaturer verifieras innan ett event tillåts påverka en order.",
      },
      {
        title: "PostNord-integration",
        detail:
          "Sömlös fraktbokning direkt från kassan: sökning av utlämningsställen, volymviktsberäkning och automatisk EDI-bokning av fraktsedlar via PostNords Booking API.",
      },
      {
        title: "MFA-skyddad adminpanel",
        detail:
          "Flerfaktorsautentisering kombinerat med databasnivå-behörigheter (Row Level Security) skyddar admingränssnittet i flera oberoende lager.",
      },
      {
        title: "Avbokningsflöde",
        detail:
          "Kunder kan avboka ordrar med automatisk matchning mot rätt beställning och mejlbekräftelse i varje steg.",
      },
      {
        title: "Härdad drift",
        detail:
          "Rate limiting mot kritiska endpoints, automatiserad testsvit och kontinuerlig övervakning skyddar plattformen mot missbruk.",
      },
    ],
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Framer Motion",
      "Node.js",
      "Supabase (Postgres)",
      "Stripe API",
      "PostNord Booking API",
      "Vercel Serverless Functions",
    ],
  },
  {
    id: "framtida-projekt",
    name: "Nästa uppdrag",
    company: null,
    tagline: "Fler projekt är under uppsegling",
    url: null,
    status: "Kommer snart",
    image: null,
    description:
      "Den här platsen är reserverad för nästa projekt. Kolla in källkoden och lägg till ett nytt objekt i js/data/projects.js när du har något nytt att visa upp.",
    highlights: [],
    stack: [],
    placeholder: true,
  },
];
