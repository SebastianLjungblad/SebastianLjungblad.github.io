// ============================================================================
// PROJEKT
// Lägg till fler projekt-objekt i arrayen när du bygger nya saker.
// image: sökväg till en bild i assets/images/projects/ — lämna null för att
// visa en snygg platshållare istället.
//
// LIVE-VY ISTÄLLET FÖR BILD:
// Sätt liveEmbed till projektets URL för att visa en riktig, levande
// mobil-vy av sidan (i en telefonram) istället för en bild — sidan laddas
// live i en iframe, i mobilstorlek, varje gång någon besöker din portfolio.
//   liveEmbed: "https://dinsida.se"
// Lämna som null för att använda image/platshållare istället.
// Om liveEmbed är satt används den. Annars används image. Annars platshållare.
// OBS: vissa sidor blockerar att visas i en iframe via HTTP-headers som
// X-Frame-Options eller Content-Security-Policy (frame-ancestors). Om rutan
// bara visas tom/vit hos en riktig besökare är det troligen orsaken — säg
// till så byter vi tillbaka till en vanlig bild istället.
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
    liveEmbed: "https://finnsihavet.se",
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
    description: "-",
    highlights: [],
    stack: [],
    placeholder: true,
  },
];