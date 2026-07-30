// ============================================================================
// PROFILE DATA
// Redigera dina personuppgifter här. Allt inom [HAKPARENTESER] är en
// platshållare du bör fylla i eller ersätta innan sidan går live.
// ============================================================================

export const profile = {
  // Sökväg till porträttbild, t.ex. "assets/images/about/sebastian.jpg".
  // Lämna null för att visa en snygg platshållare istället.
  portraitImage: null,
  name: "Sebastian Ljungblad",
  firstName: "Sebastian",
  age: 21,
  headline: "Mjukvarustudent & äventyrare",
  roles: [
    "Civilingenjör i Mjukvaruteknik, år 3 — Linköpings universitet",
    "Redovisningskonsult, Contrado AB",
    "Ironman-atlet",
    "Bergsbestigare",
    "MC-förare",
  ],
  location: "Sverige",
  // Kort intro-text som visas i hero-sektionen.
  tagline: "Bygger system som håller. Söker höjder som utmanar.",
  // Längre presentationstext till "Om mig"-sektionen.
  bio: [
    "Jag heter Sebastian Ljungblad, är 21 år och läser till civilingenjör i mjukvaruteknik på Linköpings universitet — just nu i mitt tredje år. Vid sidan av studierna jobbar jag som redovisningskonsult på Contrado AB, tävlar som Ironman-atlet, bestiger berg och kör motorcykel.",
    "Jag drivs av samma sak i koden som på berget och i tävlingsbanan: att förstå systemet i grunden, göra medvetna avvägningar och aldrig nöja mig med \"det funkar hos mig\". Det märks i hur jag byggt Finns i Havet — en fullstack e-handelsplattform jag utvecklat helt själv, från lagersystem till betalningslösning.",
    "Rymden är en av mina största passioner och anledningen till att den här sidan finns. Målet är att kombinera min bakgrund inom mjukvaruteknik med mitt intresse för rymdfart och landa en praktikplats hos ett rymd- eller satellitbolag under min tredje termin på civilingenjörsprogrammet.",
  ],
  // Statistik-siffror som kan visas som HUD-readouts i hero/about.
  stats: [
    { label: "Ironman-lopp", value: "3", unit: "" },
    { label: "År på Contrado", value: "6.8", unit: "år" },
    { label: "Toppar bestigna", value: "1+", unit: "" },
    { label: "Programmeringsspråk", value: "7+", unit: "" },
  ],
};
