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
    date: "2025-08-16",
    image: null,
    distance: { swim: "3,8 km", bike: "180 km", run: "42,2 km" },
    stats: [
      { label: "Sluttid", value: "[SLUTTID]" },
      { label: "Simning", value: "[TID]" },
      { label: "Cykel", value: "[TID]" },
      { label: "Löpning", value: "[TID]" },
      { label: "Placering", value: "[PLACERING]" },
    ],
    thoughts: "",
    route: {
      elevationGainM: "[HÖJDMETER]",
      points: [10, 12, 9, 14, 11, 8, 13, 10, 16, 12, 9, 11],
    },
  },
  {
    id: "ironman-kalmar-2",
    type: "race",
    title: "Ironman Kalmar #2 - uppkommande",
    subtitle: "Fulldistans #2",
    location: "Kalmar, Sverige",
    date: "2026-08-15",
    image: null,
    distance: { swim: "3,8 km", bike: "180 km", run: "42,2 km" },
    stats: [
      { label: "Sluttid", value: "[SLUTTID]" },
      { label: "Simning", value: "[TID]" },
      { label: "Cykel", value: "[TID]" },
      { label: "Löpning", value: "[TID]" },
      { label: "Placering", value: "[PLACERING]" },
    ],
    thoughts: "Kommande...",
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
    date: "2026-07-05",
    image: null,
    distance: { swim: "1,9 km", bike: "90 km", run: "21,1 km" },
    stats: [
      { label: "Sluttid", value: "[SLUTTID]" },
      { label: "Simning", value: "[TID]" },
      { label: "Cykel", value: "[TID]" },
      { label: "Löpning", value: "[TID]" },
      { label: "Placering", value: "[PLACERING]" },
    ],
    thoughts: "",
    route: {
      elevationGainM: "[HÖJDMETER]",
      points: [8, 10, 7, 12, 9, 6, 11, 8, 13, 9, 7, 10],
    },
  },
];

export const climbingAdventures = [
  {
    id: "galdhopiggen",
    type: "climb",
    title: "Galdhøpiggen",
    subtitle: "2 469 möh — Norges och Nordeuropas högsta topp",
    location: "Jotunheimen, Norge",
    date: "2025-09-08",
    image: null,
    facts: {
      elevation: "2 469 m ö.h.",
      range: "Jotunheimen, Norge",
      normalRoute: "Leden från Juvasshytta (1 841 m), över glaciären Styggebreen",
      difficulty: "Ingen teknisk klättring, men glaciärkorsning i replag med certifierad guide är obligatorisk — sista biten är en brant sluttning",
      baseHut: "Övernattning på Raubergstulen, start från Juvasshytta",
    },
    logistics: {
      intro:
        "Galdhøpiggen är inte bara Norges högsta berg utan även högsta toppen i hela Nordeuropa, med utsikt över Jotunheimen på klara dagar. Den kortaste och mest populära leden går från Juvasshytta, men eftersom rutten korsar glaciären Styggebreen krävs sele, rep och en certifierad glaciärguide — sprickorna syns inte under snön.",
      itinerary: [
        {
          step: "Uppladdning",
          detail: "Övernattning på Raubergstulen i Bøverdalen inför turen.",
        },
        {
          step: "Toppdagen",
          detail:
            "Start från Juvasshytta (1 841 m). Efter cirka tre timmars vandring — inklusive glaciärkorsningen över Styggebreen i sele och replag med guide — nås toppen via en brant sluttning de sista metrarna.",
        },
      ],
      gear: [
        "Sele och rep (guidad glaciärkorsning)",
        "Ordentliga bergs-/vandringskängor",
        "Varma extralager samt vind- och vattentäta ytterkläder",
        "Mat och vätska för hela turen",
        "Karta — mobiltäckning saknas ofta i fjällen",
      ],
      safety:
        "Turen kräver god fysisk form och rätt utrustning.",
    },
    thoughts: "Hyfsat lätt bestigning, men med en rikigt snabb guide brännde det rejält i benen!",
  },
  {
    id: "gran-paradiso",
    type: "climb",
    // Kommande bestigning — inte genomförd än. Status/datum nedan visas som
    // en tydlig "kommande"-tagg på kortet. Byt till "status: null" och fyll
    // i "thoughts" med dina egna minnen när du väl har gjort turen.
    status: "Kommande · 26–27 augusti 2026",
    title: "Gran Paradiso",
    subtitle: "4 061 möh — blir min första 4000-metare",
    location: "Gran Paradiso National Park, Valsavarenche, Aostadalen, Italien",
    date: "26–27 augusti 2026",
    image: null,
    facts: {
      elevation: "4 061 m ö.h.",
      range: "Graiska Alperna, nordvästra Italien — en av \"de fyra jättarna\" i Aostadalen tillsammans med Mont Blanc, Monte Rosa och Matterhorn",
      normalRoute: "Normalleden via Rifugio Chabod (2 710 m) och Gran Paradiso-glaciären",
      difficulty: "Teknisk nivå 4/5, fysisk nivå 4/5 — en av de mest lättillgängliga 4000-metarna i Aostadalen, ingen avancerad klättring men sele och stegjärn är obligatoriskt",
      baseHut: "Rifugio Chabod (2 710 m)",
      season: "Juni till mitten av september",
      groupSize: "Små grupper, vanligtvis max 4 personer per guide",
    },
    logistics: {
      intro: [
        "Gran Paradiso ligger i Italiens första nationalpark (grundad 1922 av kung Vittorio Emanuele II, ursprungligen som kunglig jaktmark för att rädda stenbocken/ibex från utrotning) och är den högsta alptoppen som ligger helt inom Italiens gränser. Berget räknas som en av de mest lättillgängliga 4000-metarna i Alperna och en klassisk första topp för den som vill in i alpin bergsbestigning.",
        "Normalleden går via bergstugan Rifugio Chabod, en glaciärvandring och en kort, luftig klippsektion upp till det ikoniska Madonna-toppkorset. Ingen avancerad klätterteknik krävs, men sele, hjälm och stegjärn är obligatoriskt, och god fysisk kondition behövs — räkna med totalt 8–10 timmars gång under toppdagen, och höjden påverkar prestationsförmågan även för vältränade.",
      ],
      itinerary: [
        {
          step: "Dag 1 — 26 augusti",
          detail:
            "Uppvandring till Rifugio Chabod (2 710 m), ankomst omkring kl. 18:30 innan middag. Genomgång av nästa dags bestigning, utrustningskoll och en avslappnad kväll i stugan inför tidig start.",
        },
        {
          step: "Dag 2 — 27 augusti, toppdagen",
          detail:
            "Avfärd från stugan kl. 04:00–05:00. Första timmen på en svagt synlig stig, därefter enkel glaciärvandring i snö upp till ca 3 800 m, följt av en blandning av lätt klippklättring och snöpartier den sista biten till toppkorset. Uppstigningen tar 4–6 timmar. Nedstigningen sker samma väg och tar 2–3 timmar, och avslutas förhoppningsvis med en välförtjänt tallrik pasta tillbaka på stugan.",
        },
      ],
      gear: [
        "Bergsskor i Gore-Tex, kompatibla med stegjärn (typ Scarpa Triolet GTX)",
        "Stegjärn, isyxa, sele och hjälm",
        "Vandringsstavar",
        "Ullunderställ (bas-lager, tröja + long johns)",
        "Varma ullstrumpor",
        "Varm teknisk tröja (mellanlager)",
        "Vind- och vattentäta vandringsbyxor",
        "Tunn men varm dunjacka",
        "Vind- och vattentät Gore-Tex-jacka (ytterlager)",
        "Varm vintermössa + buff/halsvärmare",
        "Varma vinterhandskar",
        "Sovsäcksinlägg (lakan) till stugan",
        "Pannlampa (start sker i mörker)",
        "Solkräm, skyddsfaktor 50+",
        "Solglasögon med hög kategori (glaciärreflektion)",
        "Överlevnadsfilt",
      ],
      safety:
        "Ingen avancerad klätterteknik krävs, men sele och stegjärn är obligatoriskt, och glaciärvandringen kräver rutin eller en guide. Anlita gärna en certifierad (UIAGM) bergsguide om du saknar egen erfarenhet av glaciärvandring och rep-teknik. God fysisk kondition är ett måste — räkna med 8–10 timmars gång under toppdagen — och väder/förhållanden ska alltid avgöra om toppdagen genomförs.",
    },
    thoughts:
      "Kommande — jag ger mig av mot toppen 26–27 augusti 2026. De här raderna fylls i med mina egna tankar, minnen och bilder direkt efter bestigningen.",
  },
];