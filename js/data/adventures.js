// ============================================================================
// ÄVENTYR — lopp och bestigningar
// image: sökväg i assets/images/adventures/ — lämna null för platshållare.
// stats: fylls i med dina riktiga tider/siffror från loppen.
// thoughts: dina tankar under loppet — så personligt du vill.
// route.points: används av elevationsprofil-modulen för att rita en enkel
// höjdprofil. Byt ut mot dina riktiga GPS/höjddata när du har dem.
// ============================================================================

export const raceAdventures = [
  {
    id: "ironman-kalmar-1",
    type: "race",
    title: "Ironman Kalmar",
    subtitle: "Fulldistans #1",
    location: "Kalmar, Sverige",
    date: "[DATUM]",
    image: null,
    distance: { swim: "3,8 km", bike: "180 km", run: "42,2 km" },
    stats: [
      { label: "Sluttid", value: "[SLUTTID]" },
      { label: "Simning", value: "[TID]" },
      { label: "Cykel", value: "[TID]" },
      { label: "Löpning", value: "[TID]" },
      { label: "Placering", value: "[PLACERING]" },
    ],
    thoughts:
      "[Skriv om vad du tänkte under loppet — hur kändes övergången mellan simning och cykel? Vad höll dig igång de sista milen på löpningen?]",
    route: {
      elevationGainM: "[HÖJDMETER]",
      points: [10, 12, 9, 14, 11, 8, 13, 10, 16, 12, 9, 11],
    },
  },
  {
    id: "ironman-kalmar-2",
    type: "race",
    title: "Ironman Kalmar",
    subtitle: "Fulldistans #2",
    location: "Kalmar, Sverige",
    date: "[DATUM]",
    image: null,
    distance: { swim: "3,8 km", bike: "180 km", run: "42,2 km" },
    stats: [
      { label: "Sluttid", value: "[SLUTTID]" },
      { label: "Simning", value: "[TID]" },
      { label: "Cykel", value: "[TID]" },
      { label: "Löpning", value: "[TID]" },
      { label: "Placering", value: "[PLACERING]" },
    ],
    thoughts:
      "[Vad var annorlunda andra gången? Vad hade du lärt dig från det första loppet som du tog med dig hit?]",
    route: {
      elevationGainM: "[HÖJDMETER]",
      points: [11, 13, 10, 15, 12, 9, 14, 11, 17, 13, 10, 12],
    },
  },
  {
    id: "ironman-703-jonkoping",
    type: "race",
    title: "Ironman 70.3",
    subtitle: "Halvdistans",
    location: "Jönköping, Sverige",
    date: "[DATUM]",
    image: null,
    distance: { swim: "1,9 km", bike: "90 km", run: "21,1 km" },
    stats: [
      { label: "Sluttid", value: "[SLUTTID]" },
      { label: "Simning", value: "[TID]" },
      { label: "Cykel", value: "[TID]" },
      { label: "Löpning", value: "[TID]" },
      { label: "Placering", value: "[PLACERING]" },
    ],
    thoughts:
      "[Dina tankar under loppet i Jönköping — hur skiljde sig känslan mot fulldistans?]",
    route: {
      elevationGainM: "[HÖJDMETER]",
      points: [8, 10, 7, 12, 9, 6, 11, 8, 13, 9, 7, 10],
    },
  },
];

export const climbingAdventures = [
  {
    id: "gran-paradiso",
    type: "climb",
    title: "Gran Paradiso",
    subtitle: "4 061 möh — min första 4000-metare",
    location: "Gran Paradiso National Park, Aostadalen, Italien",
    date: "[DATUM]",
    image: null,
    facts: {
      elevation: "4 061 m ö.h.",
      range: "Grajiska Alperna, nordvästra Italien",
      normalRoute: "Normalleden via Rifugio Vittorio Emanuele II och Laveciau-glaciären",
      difficulty: "PD (Peu Difficile) — glaciärvandring med lätt klättring på den sista klipphällen mot toppen",
      baseHut: "Rifugio Vittorio Emanuele II (2 732 m)",
    },
    logistics: {
      intro:
        "Gran Paradiso är en utmärkt \"första 4000-metare\" — teknisk nog för att kräva riktig glaciärutrustning och rutin, men utan extrem exponering. Normalleden går via en bergstuga, en glaciär och en kort, luftig klipphäll upp till toppkorset.",
      itinerary: [
        {
          step: "Dag 1",
          detail:
            "Vandring från Pont (parkeringen i Valsavarenche-dalen, ca 1 960 m) upp till Rifugio Vittorio Emanuele II (2 732 m). Cirka 2–3 timmars vandring, 770 höjdmeter.",
        },
        {
          step: "Dag 2 — toppdagen",
          detail:
            "Start i mörker (ofta 03:00–04:00) för att nå glaciären medan snön/isen fortfarande är hård. Uppstigning via morän, glaciärkorsning med sele, isyxa och stegjärn i rep-lag, avslutande klippsektion till toppkorset, sedan nedstigning samma väg.",
        },
      ],
      gear: [
        "Stegjärn (crampons)",
        "Isyxa",
        "Klätterhjälm",
        "Sele",
        "Rep (glaciärvandring i lag om 2–4 personer)",
        "Karbinhakar, glaciärkräksäkring (prusik/glaciärkit)",
        "Stabila 4-säsongskängor kompatibla med stegjärn",
        "Lager-på-lager-klädsel — det kan vara långt under noll vid start, plusgrader vid topp",
        "Pannlampa (start sker i mörker)",
        "Solglasögon med hög UV-skyddsfaktor + solkräm (stark reflektion från glaciären)",
        "Vandringsstavar för morän-delen",
      ],
      safety:
        "Anlita gärna en certifierad bergsguide om du inte har egen erfarenhet av glaciärvandring och rep-teknik — spricksäkring är avgörande på Laveciau-glaciären. Väderfönster och förhållanden ska alltid avgöra om toppdagen genomförs.",
    },
    thoughts:
      "[Dina egna tankar och minnen från bestigningen — starten i mörkret, glaciären i gryningen, känslan på toppen.]",
  },
];
