/* ==========================================================================
   VAL ATELIER — project data
   --------------------------------------------------------------------------
   >> THIS IS THE ONLY FILE YOU EDIT TO ADD OR CHANGE A PROJECT. <<

   Every page reads from this array: the archive, the home page showcase, the
   project pages and their previous/next navigation.

   1. Drop the photographs into  assets/projects/<slug>/  as 01, 02, 03 ...
      The first image is the cover, the project hero, and the showcase lead.
   2. Copy the template at the bottom of this file into the array.
   3. status    "ongoing" or "finished" — this files it under the right tab.
      category  Residential | Commercial | Hospitality | Corporate | Retail.
                assets/js/categories.js picks which project leads each
                full-screen section of the home page showcase.

   TWO THINGS TO CHECK
   -------------------
   * CATEGORIES were assigned from the photographs and the folder names.
     Correct any that are wrong — one word per project, nothing else changes.
   * The shared folder "keerthi experiential centre-moderl flat" held exactly
     the same 52 photographs as "keerthi club house", so it is NOT carried
     here as a second project. Send the real Model Flat photographs and it
     becomes another entry below.

   cover     optional, 1-based: which photograph leads the project on the home
             page and in the archive. Defaults to the first.
   images    [ file, width, height ] — the dimensions reserve the exact space
             so the page never jumps while a photograph loads.
   summary / story / notes  are empty where the studio has not supplied copy.
             A project with no copy goes straight from its facts to its
             photographs, so nothing looks unfinished in the meantime.
   ========================================================================== */

/* ==========================================================================
   THE HERO REEL
   --------------------------------------------------------------------------
   The opening slideshow, in order, chosen by the studio rather than derived
   from the work. Each entry is a project slug and the 1-based photograph
   within that project, so the reel can still name what you are looking at
   and link to it.

   A project may appear more than once: these are photographs picked on their
   own merit, not one-per-project.

   Leave this empty and the hero falls back to the lead of every category, as
   it did before.
   ========================================================================== */
window.HERO = [
  ["the-good-side",       1],
  ["ratio",               8],
  ["zvezda-boutique",     9],
  ["keerthi-club-house", 28],
  ["tsk",                11]
];

/* ==========================================================================
   HOW MANY PHOTOGRAPHS A PROJECT SHOWS
   --------------------------------------------------------------------------
   The studio asked for a curated set rather than the whole shoot: around
   fifteen for a finished project, ten to twelve renders for one on the
   boards. Nothing is deleted; the rest of the set stays in the folder and in
   the data, and raising a number here brings it straight back.

   To choose the frames rather than take the first ones, give a project a
   `select` array of 1-based positions in its own images list. That is the
   curation hook: `select: [1, 4, 5, 9, 12, ...]`. Without it the lead comes
   first and the rest follow in the order the studio supplied.
   ========================================================================== */
window.SHOW = { finished: 15, ongoing: 12 };

window.PROJECTS = [
  {
    slug: "keerthi-club-house",
    title: "Keerthi Ascent Clubhouse",
    category: "Hospitality",
    status: "ongoing",
    typology: "Club House",
    location: "Bangalore",
    area: "26,000 sq ft",
    year: "",
    scope: "Interior Design",
    summary: "This clubhouse is imagined as a refined social retreat where design, wellness, and leisure come together with quiet ease.",
    story: ["Sculptural forms, warm wood finishes, textured neutral surfaces, and art led details give the spaces a calm yet distinctive identity. From the welcoming reception and curated corridors to the serene studio and lounge areas, every zone is designed to feel immersive, elegant, and effortlessly functional. The result is a contemporary clubhouse that feels inviting, elevated, and deeply considered."],
    notes: [],
    /* The frames the sequence shows, in the studio's own order, so it is
       written out rather than sorted. Four rooms the set never reached are in
       now: the entrance with the green console (49), the theatre lounge (23),
       the cardio room (17) and the children's garden at dusk (45).

       02 is the same lounge as 03 seen from above, and the games room had
       five angles of one room, 06 to 10, where one carries it.

       06, 38 and 50 are in at the studio's word: the games room, the bedroom
       with the green headboard and the corridor with the sculpture. The
       second games room view and the second gym view came out to make room,
       so the twelve frames are twelve different rooms.

       None of it is deleted: all fifty two photographs stay in the folder
       and any of them comes back by adding its number here. */
    select: [1, 49, 3, 28, 23, 5, 6, 50, 17, 38, 45, 12],
    dir: "assets/projects/keerthi-club-house",
    images: [["01.webp",1920,1080],["02.webp",1920,1080],["03.webp",1920,1080],["04.webp",1920,1080],["05.webp",1920,1080],["06.webp",1920,1080],["07.webp",1920,1080],["08.webp",1920,1080],["09.webp",1920,1080],["10.webp",1920,1080],["11.webp",1920,1080],["12.webp",1920,1080],["13.webp",1920,1080],["14.webp",1920,1080],["15.webp",1920,1080],["16.webp",1920,1080],["17.webp",1920,1080],["18.webp",1920,1080],["19.webp",1920,1080],["20.webp",1920,1080],["21.webp",1920,1080],["22.webp",1920,1080],["23.webp",1920,1080],["24.webp",1920,1080],["25.webp",1920,1080],["26.webp",1920,1080],["27.webp",1920,1080],["28.webp",1920,1080],["29.webp",1920,1080],["30.webp",1920,1080],["31.webp",1920,1080],["32.webp",1920,1080],["33.webp",1920,1080],["34.webp",1920,1080],["35.webp",1920,1080],["36.webp",1920,1080],["37.webp",1920,1080],["38.webp",1920,1080],["39.webp",1920,1080],["40.webp",1920,1080],["41.webp",1920,1080],["42.webp",1920,1080],["43.webp",1012,1080],["44.webp",1920,1080],["45.webp",1920,1080],["46.webp",1920,1080],["47.webp",1920,1080],["48.webp",1920,1080],["49.webp",1920,1080],["50.webp",1920,1080],["51.webp",1920,1080],["52.webp",1920,1080]]
  },
  {
    slug: "keerthi-marketing-office",
    /* the dash in the old title just repeated the typology below it */
    title: "Keerthi Ascent Experiential Centre",
    category: "Hospitality",
    status: "ongoing",
    typology: "Experiential Centre",
    location: "Bangalore",
    area: "8500 sq ft",
    year: "",
    scope: "Interior Design",
    summary: "The space is imagined as a calm, immersive environment where architecture and landscape quietly shape the visitor experience.",
    story: ["Textured surfaces, warm finishes, filtered light, and sculptural details create a refined sense of depth across the reception, lounge, discussion, and meeting spaces. Large openings and planted moments soften the interiors, allowing the spaces to feel connected, open, and unhurried. The atmosphere is understated yet memorable, a place designed not just to present, but to draw people in and let the experience unfold naturally."],
    notes: [],
    /* the frames the sequence shows, chosen for variety: near
       duplicate views are set aside, nothing is deleted */
    /* The studio swapped three frames: the table seen from above for 24,
       and the two of the stair and the raked garden, which were the same
       feature twice, for 30 and 28. Set aside, not deleted. */
    /* the open plan floor with the curved panelling behind it: the frame
       that says workspace before anything else does */
    cover: 31,
    /* Rebuilt around one rule: no two frames of the same thing, and no
       photograph taken from the ceiling. The set the studio sent leans hard on
       overhead views and several are the same room twice: 02 and 03 are one
       round table shot twice, 05 and 06 one stair, 26 and 27 one desk, 36 and
       38 one washroom. Those and the rest of the overheads stand down.

       What is here instead walks the building: reception, the entrance stair
       with the model, the dark lobby, the lift landing, the stair from the
       floor, two lounges that are genuinely different rooms, the glass meeting
       room, the boardroom, the breakout and the desks. Nothing is deleted, all
       43 stay in the folder.

       The stair at 07 and the washroom vanity at 35 came out at the studio's
       word. In their place: 29, the wall the tower render is shown on, which is
       the one thing in the building that says what the office is for, and 14,
       the waiting lounge. */
    select: [1, 4, 33, 43, 29, 9, 41, 15, 24, 28, 30, 14, 31],
    dir: "assets/projects/keerthi-marketing-office",
    images: [["01.webp",1920,1080],["02.webp",1920,1080],["03.webp",1920,1080],["04.webp",1920,1080],["05.webp",1920,1080],["06.webp",1920,1080],["07.webp",1920,1080],["08.webp",537,1080],["09.webp",1920,1080],["10.webp",1920,1080],["11.webp",1920,1080],["12.webp",1920,1080],["13.webp",1920,1080],["14.webp",1920,1080],["15.webp",1920,1080],["16.webp",537,1080],["17.webp",1920,1080],["18.webp",921,1080],["19.webp",1920,1080],["20.webp",1920,1080],["21.webp",1920,1080],["22.webp",1110,1080],["23.webp",1920,1080],["24.webp",1920,1080],["25.webp",1058,1080],["26.webp",1920,1080],["27.webp",1568,1063],["28.webp",1016,1080],["29.webp",923,1080],["30.webp",1504,1071],["31.webp",1215,1080],["32.webp",973,1080],["33.webp",1898,1010],["34.webp",1899,1008],["35.webp",1066,1080],["36.webp",1066,1080],["37.webp",1090,1080],["38.webp",1496,1080],["39.webp",1768,1080],["40.webp",1694,1080],["41.webp",1177,1055],["42.webp",1698,1055],["43.webp",1273,1080]]
  },
  {
    slug: "sas-crown",
    title: "SAS Crown (SAS Home)",
    category: "Residential",
    status: "ongoing",
    typology: "Residence",
    location: "Kokapet, Hyderabad",
    area: "8000 sq ft",
    year: "",
    scope: "Interior Design",
    summary: "This residence is conceived as a layered, contemporary home where warm timber, stone, and soft neutral finishes create a rich yet understated backdrop.",
    story: ["Muted greens and terracotta accents bring depth and personality, while sculptural furniture, patterned surfaces, and curated artwork add a distinct visual rhythm. Screens, refined joinery, and carefully composed lighting give each space its own character while maintaining a strong sense of continuity. The home feels expressive without being excessive, warm, artistic, and quietly sophisticated."],
    notes: [],
    /* The frames the sequence shows, written in the order they walk the house:
       entrance, corridor, living, dining, kitchen, media room, passage, the two
       bedrooms, a vanity, and the study at the end.

       The set repeats itself badly if taken whole. 06, 07 and 08 are one
       kitchen from three steps apart, so only 08 is shown. 02 and 03 are one
       living room, so only 02 is. 04 and 05 are one dining table, 09 10 and 11
       are one media room, and 27 to 31 are one bedroom five times over. One of
       each is enough.

       A house was being shown without a single bedroom in it, which is the
       other half of this: 27 and 36 are in now, with the vanity at 33 and the
       corridor at 23. Nothing is deleted, all 44 stay in the folder. */
    select: [1, 23, 2, 4, 8, 11, 12, 27, 36, 33, 13, 14],
    dir: "assets/projects/sas-crown",
    images: [["01.webp",1600,900],["02.webp",1600,900],["03.webp",1400,788],["04.webp",1400,788],["05.webp",1600,900],["06.webp",1400,788],["07.webp",1400,788],["08.webp",1600,900],["09.webp",1400,788],["10.webp",1400,788],["11.webp",1400,788],["12.webp",1600,900],["13.webp",1600,900],["14.webp",1600,900],["15.webp",1400,788],["16.webp",1600,900],["17.webp",1600,900],["18.webp",1400,788],["19.webp",1400,788],["20.webp",1600,900],["21.webp",1600,900],["22.webp",1600,900],["23.webp",1600,900],["24.webp",1600,900],["25.webp",944,1080],["26.webp",708,1080],["27.webp",1600,900],["28.webp",1400,788],["29.webp",1400,788],["30.webp",1400,788],["31.webp",1600,900],["32.webp",1600,900],["33.webp",1600,900],["34.webp",1600,900],["35.webp",1252,1080],["36.webp",1600,900],["37.webp",1400,788],["38.webp",1600,900],["39.webp",1600,900],["40.webp",1600,900],["41.webp",1600,900],["42.webp",1600,900],["43.webp",1600,900],["44.webp",1600,900]]
  },
  {
    slug: "gmfc",
    title: "GMFC Workspace",
    category: "Workspace",
    status: "ongoing",
    typology: "Workspace",
    location: "Jubilee Hills, Hyderabad",
    area: "4000 sq ft",
    year: "",
    scope: "Interior Design",
    /* the open plan floor: desks, monitors and task chairs, so the card
       reads as a workspace at a glance rather than as a lounge */
    cover: 15,
    summary: "This workspace is designed with a calm, understated language that balances focus with comfort.",
    story: ["Soft neutral tones, textured walls, stone surfaces, and warm finishes create a refined and cohesive atmosphere. Clean lined meeting areas, relaxed lounge spaces, and sculptural lighting give each zone its own quiet character. Natural light and subtle detailing soften the overall mood, making the office feel composed, welcoming, and thoughtfully lived in."],
    notes: [],
    /* the frames the sequence shows, chosen for variety: near
       duplicate views are set aside, nothing is deleted */
    /* This project's files are not in name order: position 1 is 32.webp, the
       prayer room seen through the glazed screen, which was opening the
       gallery full bleed. It comes out, and the boardroom at position 18
       (16.webp) takes its place, which is what the project is actually for.
       Position 2 is 33.webp, the same shrine closer in, and is still here. */
    select: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 18],
    dir: "assets/projects/gmfc",
    images: [["32.webp",1600,900],["33.webp",749,1080],["01.webp",1600,900],["02.webp",1600,900],["03.webp",1600,900],["04.webp",1600,900],["05.webp",1325,1080],["06.webp",1325,1080],["07.webp",1326,1080],["08.webp",1326,1080],["09.webp",1600,900],["10.webp",1600,900],["11.webp",1600,900],["12.webp",1600,900],["13.webp",1600,900],["14.webp",1600,900],["15.webp",1600,900],["16.webp",1600,900],["17.webp",1600,900],["18.webp",1600,900],["19.webp",1600,900],["20.webp",1600,900],["21.webp",1600,900],["22.webp",1600,900],["23.webp",1600,900],["24.webp",1406,1080],["25.webp",714,1080],["26.webp",861,1080],["27.webp",1268,1051],["28.webp",736,1080],["29.webp",1600,900],["30.webp",1242,1080],["31.webp",709,1080],["34.webp",1142,1080],["35.webp",1600,900],["36.webp",1600,900],["37.webp",1600,900]]
  },
  {
    slug: "tsk",
    title: "Telangana Spice Kitchen",
    /* A spice kitchen, not the jewellery retail this was first filed as. The
       studio confirmed it stays under Retail rather than moving to
       Hospitality — so this is a decision, not an oversight. */
    category: "Hospitality",
    status: "ongoing",
    typology: "Regional Restaurant",
    location: "Nagole",
    area: "24,500 sq ft",
    year: "",
    scope: "Interior Design",
    summary: "This dining space is envisioned as a warm, immersive setting where contemporary design meets subtle Indian character.",
    story: ["Rich timber tones, cane detailing, earthy flooring, and muted green accents create a layered and tactile atmosphere. Architectural arches, latticework, and sculptural lighting add rhythm while celebrating craft in a refined way. The space carries a quiet sense of nostalgia, reimagined through a distinctly modern lens."],
    notes: [],
    /* the frames the sequence shows, chosen for variety: near
       duplicate views are set aside, nothing is deleted */
    select: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13],
    dir: "assets/projects/tsk",
    images: [["01.webp",1600,900],["02.webp",1600,900],["03.webp",1600,900],["04.webp",1600,881],["05.webp",1600,900],["06.webp",1600,876],["07.webp",1600,900],["08.webp",1600,900],["09.webp",1600,900],["10.webp",1600,900],["11.webp",1600,900],["12.webp",1600,900],["13.webp",1600,900],["14.webp",1600,900],["15.webp",1600,900],["16.webp",1600,900],["17.webp",1600,900],["18.webp",1166,1080],["19.webp",879,1080],["20.webp",1466,1080],["21.webp",1600,900],["22.webp",1600,900],["23.webp",1600,900],["24.webp",1600,900],["25.webp",1600,900],["26.webp",1600,900],["27.webp",1600,900]]
  },
  {
    slug: "dsr-1",
    title: "DSR the First (Nome)",
    category: "Residential",
    status: "ongoing",
    typology: "Residence",
    location: "Gachibowli, Hyderabad",
    area: "5000 sq ft",
    year: "",
    scope: "Interior Design",
    summary: "This residence is shaped by a quiet, contemporary sensibility, where soft neutrals and warm timber create a calm, cohesive backdrop.",
    story: ["Sculptural furniture, subtle detailing, and curated artwork bring depth without overwhelming the spaces. Natural light moves gently through the interiors, adding softness and warmth throughout the day. The home feels composed yet effortless, refined in character, intimate in mood, and designed to be lived in with ease."],
    notes: [],
    /* the frames the sequence shows, chosen for variety: near
       duplicate views are set aside, nothing is deleted */
    /* the living room under the arc lamp, which carries the furniture and
       the artwork rather than a sideboard against a wall */
    cover: 21,
    /* The studio's own order, so it is written out rather than sorted: 19
       stands where 01 did and 17 where 09 did, and 12 now comes before 11.
       01 and 09 are set aside, not deleted. */
    select: [19, 2, 3, 4, 5, 6, 7, 8, 17, 10, 12, 11, 21],
    dir: "assets/projects/dsr-1",
    images: [["01.webp",1600,900],["02.webp",1600,900],["03.webp",1600,900],["04.webp",1600,900],["05.webp",1600,900],["06.webp",1208,1080],["07.webp",1600,900],["08.webp",1323,1080],["09.webp",1438,1080],["10.webp",780,1080],["11.webp",1600,900],["12.webp",1600,900],["13.webp",1600,900],["14.webp",1304,1080],["15.webp",1458,1080],["16.webp",1189,1080],["17.webp",1600,900],["18.webp",1430,1080],["19.webp",1600,900],["20.webp",1600,900],["21.webp",1600,900],["22.webp",1600,900],["23.webp",1600,900],["24.webp",1600,900],["25.webp",1600,900]]
  },
  {
    slug: "wdsr",
    title: "WDSR (Aurea)",
    category: "Residential",
    status: "ongoing",
    typology: "Residence",
    location: "Kondapur, Hyderabad",
    area: "3500 sq ft",
    year: "",
    scope: "Interior Design",
    summary: "This living space is designed around a calm, contemporary palette of warm wood, textured neutrals, and soft earthy tones.",
    story: ["Sculptural furniture, layered lighting, and curated artwork bring character while keeping the atmosphere relaxed and uncluttered. Subtle screens, refined wall detailing, and generous daylight add depth and rhythm throughout. Its appeal lies in the balance of comfort and restraint, creating a home that feels effortless, warm, and quietly refined."],
    notes: [],
    /* the frames the sequence shows, chosen for variety: near
       duplicate views are set aside, nothing is deleted */
    /* the living room in full daylight, which is the sculptural furniture
       and the curated artwork the write up describes */
    cover: 9,
    select: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dir: "assets/projects/wdsr",
    images: [["01.webp",1600,900],["02.webp",1600,900],["03.webp",1600,900],["04.webp",1600,900],["05.webp",1600,900],["06.webp",1600,900],["07.webp",1600,900],["08.webp",1600,900],["09.webp",1600,900],["10.webp",1600,900],["11.webp",1600,900],["12.webp",1600,900],["13.webp",1600,900],["14.webp",1600,900]]
  },
  {
    slug: "merge-stones",
    title: "Merge Stones",
    category: "Retail",
    status: "ongoing",
    typology: "Experiential Marble Showroom",
    location: "Shamshabad, Hyderabad",
    area: "8000 sq ft",
    year: "",
    scope: "Interior Design",
    summary: "This experiential marble showroom is conceived as an immersive journey through material, mood, and space.",
    story: ["Dramatic lighting, sculptural forms, and richly textured surfaces come together to elevate stone beyond display and turn it into an atmosphere. Each zone is carefully composed to highlight the depth, character, and artistry of marble in a refined architectural setting. What emerges is a space that feels bold and atmospheric, where stone becomes the experience rather than simply the material."],
    notes: [],
    /* the lounge against the green marble wall: the stone is the project, and
       this is the frame that says so */
    cover: 5,
    select: [1, 2, 3, 4, 5, 6],
    dir: "assets/projects/merge-stones",
    images: [["01.webp",1920,1080],["02.webp",1920,1080],["03.webp",1920,1080],["04.webp",1295,1080],["05.webp",1617,1080],["06.webp",1078,1080]]
  },
  {
    slug: "cousins",
    title: "Cousins",
    category: "Hospitality",
    status: "ongoing",
    typology: "Coffee and Bar",
    location: "Jubilee Hills, Hyderabad",
    area: "1200 sq ft",
    year: "",
    scope: "Interior Design",
    summary: "A contemporary coffee shop by day and cocktail bar by night, designed through a balance of stainless steel, warm wood, and distinctive details.",
    story: ["Layered lighting transforms the atmosphere from bright and inviting to intimate and sophisticated after dark."],
    notes: [],
    /* the bar itself, which is the half of the room the name is about */
    cover: 4,
    /* 02 and 03 are the same wall from two steps apart, so the sequence shows
       one of them and the other is set aside */
    select: [1, 3, 4],
    dir: "assets/projects/cousins",
    images: [["01.webp",1920,1080],["02.webp",1391,1080],["03.webp",1470,1080],["04.webp",1920,1080]]
  },
  {
    slug: "sindhus-baby-room",
    title: "Sindhu's Baby Room",
    category: "Residential",
    status: "ongoing",
    typology: "Children's Room",
    location: "",
    area: "",
    year: "",
    scope: "Interior Design",
    summary: "",
    story: [],
    notes: [],
    /* the studio picked the wide view of the room as the cover; 01, which
       stood here before, is not dropped, it simply falls into the gallery
       like every other frame that is not the lead */
    cover: 3,
    dir: "assets/projects/sindhus-baby-room",
    images: [["01.webp",1600,900],["02.webp",1600,900],["03.webp",1600,900],["04.webp",1600,900],["05.webp",1600,900],["06.webp",1600,900],["07.webp",1600,900]]
  },
  /* ------------------------------------------------------------------
     The seven projects below came from the studio's "val new projects"
     set. The photographs are carried at the size they arrived, 2000px on
     the longest edge, which is larger than anything else on the site.

     Repeated photographs were left out: the folders held the same picture
     more than once, most heavily under kids spaces harikha, where all
     eleven appeared twice. 144 files came in, 112 distinct photographs
     are used, and no photograph repeats within a project or across them.

     STILL TO COME FROM THE STUDIO, so they are left empty rather than
     guessed at: typology, location, area, and the written description of
     each one. Categories were read off the photographs, the same way the
     note at the top of this file describes.
     ------------------------------------------------------------------ */
  {
    slug: "ratio",
    title: "Ra:tio",
    category: "Hospitality",
    /* the studio chose the counter under its lit ceiling to lead */
    /* the courtyard, which is what the place is: the counter shots are already
       doing duty in the press cards and the hero */
    cover: 10,
    status: "finished",
    typology: "Speciality Coffee House",
    location: "Jubilee Hills, Hyderabad",
    area: "3800 sq ft",
    year: "2026",
    scope: "Interior Design",
    summary: "This coffee house is conceived as a quiet, design led escape with an effortless sense of warmth and sophistication.",
    story: ["Natural timber, muted textures, and crisp architectural detailing create a refined yet relaxed visual language. Soft lighting, intimate seating, and crafted elements bring a subtle richness to the space without feeling overstated. The space settles into a calm, contemporary rhythm, inviting, tactile, and quietly memorable."],
    notes: [],
    /* the frames the sequence shows, chosen for variety: near
       duplicate views are set aside, nothing is deleted */
    select: [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    dir: "assets/projects/ratio",
    images: [["01.webp",1333,2000],["02.webp",1333,2000],["03.webp",1333,2000],["04.webp",1333,2000],["05.webp",1333,2000],["06.webp",1333,2000],["07.webp",2000,1333],["08.webp",2000,1383],["09.webp",1333,2000],["10.webp",2000,1333],["11.webp",1333,2000],["12.webp",2000,1333],["13.webp",2000,1333],["14.webp",1333,2000],["15.webp",1333,2000],["16.webp",1333,2000],["17.webp",1333,2000],["18.webp",1333,2000],["19.webp",1333,2000],["20.webp",1333,2000],["21.webp",1333,2000],["22.webp",2000,1333],["23.webp",1333,2000]]
  },
  {
    slug: "the-good-side",
    title: "The Good Side",
    category: "Hospitality",
    status: "finished",
    typology: "Luxury Salon and Makeup Studio",
    location: "Jubilee Hills, Hyderabad",
    area: "6000 sq ft",
    year: "2026",
    scope: "Interior Design",
    summary: "The Good Side is a luxury desert inspired salon in Hyderabad designed as a serene and immersive retreat that blends earthy elegance with contemporary minimalism.",
    story: ["Inspired by the raw beauty of desert landscapes, the project features warm terracotta toned textured walls, sculptural architectural forms, muted neutral palettes, and soft ambient lighting to create a calming yet sophisticated atmosphere."],
    notes: [],
    /* the frames the sequence shows, chosen for variety: near
       duplicate views are set aside, nothing is deleted */
    select: [1, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 17, 19, 20, 22],
    dir: "assets/projects/the-good-side",
    images: [["01.webp",2000,1333],["02.webp",1333,2000],["03.webp",1333,2000],["04.webp",2000,1333],["05.webp",2000,1333],["06.webp",1333,2000],["07.webp",2000,1333],["08.webp",2000,1333],["09.webp",2000,1333],["10.webp",2000,1333],["11.webp",2000,1333],["12.webp",2000,1333],["13.webp",2000,1534],["14.webp",1333,2000],["15.webp",1333,2000],["16.webp",2000,1333],["17.webp",2000,1333],["18.webp",2000,1333],["19.webp",2000,1320],["20.webp",2000,1333],["21.webp",2000,1255],["22.webp",2000,1333],["23.webp",1333,2000],["24.webp",1333,2000],["25.webp",1333,2000],["26.webp",1333,2000],["27.webp",1333,2000],["28.webp",1333,2000],["29.webp",1333,2000],["30.webp",1333,2000],["31.webp",1333,2000],["32.webp",1333,2000],["33.webp",1333,2000],["34.webp",1333,2000],["35.webp",1333,2000],["36.webp",1333,2000]]
  },
  {
    slug: "zvezda-boutique",
    title: "Zvezda Boutique",
    category: "Retail",
    status: "finished",
    typology: "",
    location: "",
    area: "",
    year: "",
    scope: "Interior Design",
    summary: "Tucked away in the heart of Jubilee Hills, this 1,500 sq ft boutique is a quiet little world of its own, soft, feminine and beautifully detailed.",
    story: ["Designed with a gentle, almost poetic restraint, the space uses a neutral palette to let the garments take centre stage. Botanical reliefs finished by hand wrap the walls, adding depth and character without ever overwhelming the eye.", "The curved ceiling floats above the space like a wave, creating movement and a sense of calm, while the delicate gold rails and arched windows bring in a touch of romance. Every corner feels intentional, warm and thoughtfully composed, a small boutique with a big soul, made to make every piece of clothing feel special."],
    notes: [],
    dir: "assets/projects/zvezda-boutique",
    /* 09 is 01 with the lighting track cropped off the top, cut for the
       opening. The gallery shows 01 whole, so 09 is set aside from the
       sequence rather than shown twice. */
    select: [1, 2, 3, 4, 5, 6, 7, 8],
    images: [["01.webp",2000,1333],["02.webp",1333,2000],["03.webp",1333,2000],["04.webp",1333,2000],["05.webp",2000,1333],["06.webp",1333,2000],["07.webp",1333,2000],["08.webp",1333,2000],["09.webp",1600,714]]
  },
  {
    slug: "floof-and-co",
    title: "Floof & Co.",
    category: "Retail",
    status: "finished",
    typology: "Pet Store",
    location: "Madhapur, Hyderabad",
    area: "3000 sq ft",
    year: "2026",
    scope: "Interior Design",
    summary: "Designed as a cheerful and contemporary pet retail experience in Hyderabad, the space pairs warm timber with playful mustard and green accents.",
    story: ["Rounded forms, integrated display niches, and open shelving keep the store visually soft while making products easy to browse. A dedicated grooming zone is seamlessly woven into the layout, balancing function with character. The result is a warm, friendly environment that feels thoughtfully designed for both pets and their people."],
    notes: [],
    dir: "assets/projects/floof-and-co",
    /* Eight photographs, and four of them are one view: 03, 04, 05 and 08 all
       look across the shop floor at the same counter. One of them carries it,
       and 08 is the one with the most life in it. What is left reads as four
       different things: the shopfront, the floor, the grooming window and the
       dog on the plinth. The other four stay in the folder. */
    select: [1, 8, 6, 2],
    images: [["01.webp",2000,1334],["02.webp",1334,2000],["03.webp",2000,1430],["04.webp",1334,2000],["05.webp",2000,1430],["06.webp",2000,1334],["07.webp",1334,2000],["08.webp",2000,1430]]
  },
  {
    /* Sky, Harikha's bedroom. It was one of three folders that arrived
       together and were shown as a single entry; Vaishnavi has since said the
       playroom is its own project and the two bedrooms are separate, so the
       eleven photographs stand on their own again. */
    slug: "sky",
    title: "Kid’s Room (Sky)",
    category: "Residential",
    status: "finished",
    typology: "Kids Spaces",
    location: "Jubilee Hills, Hyderabad",
    area: "",
    year: "2024",
    scope: "Interior Design",
    summary: "This kids’ room is designed as a luxurious yet playful retreat, where imagination is expressed through refined detailing and a soft, serene palette.",
    story: ["Powder blue accents, bespoke wall art, tactile fabrics, and sculptural forms create a sophisticated sense of whimsy. Thoughtfully designed furniture and curated décor bring warmth and personality while maintaining a calm, uncluttered aesthetic. The result is an elegant, dreamlike space that feels youthful, elevated, and timeless."],
    notes: [],
    /* a landscape frame, so the card is not cropped to a slice: the aeroplane wall, which is the frame the studio chose to lead with */
    cover: 8,
    dir: "assets/projects/sky",
    images: [["01.webp",1334,2000],["02.webp",1334,2000],["03.webp",1334,2000],["04.webp",1334,2000],["05.webp",1334,2000],["06.webp",2000,1334],["07.webp",1334,2000],["08.webp",2000,1334],["09.webp",2000,1425],["10.webp",1424,2000],["11.webp",1359,2000]]
  },
  {
    /* Teddy, Akira's bedroom. */
    slug: "teddy",
    title: "Akira’s Room (Teddy)",
    category: "Residential",
    status: "finished",
    typology: "Kids Spaces",
    location: "Jubilee Hills, Hyderabad",
    area: "",
    year: "2025",
    scope: "Interior Design",
    summary: "This children’s bedroom is designed as a soft, whimsical retreat with a refined contemporary character.",
    story: ["Sculptural furniture, rounded detailing, and charming custom elements bring a sense of personality while keeping the space clean and sophisticated. Thoughtfully integrated storage and delicate styling complete a dreamy, intimate room that feels youthful, elegant, and effortlessly chic."],
    notes: [],
    /* a landscape frame, so the card is not cropped to a slice: the bear on the cloud, the one landscape frame in the room */
    cover: 6,
    dir: "assets/projects/teddy",
    images: [["01.webp",1334,2000],["02.webp",1334,2000],["03.webp",1349,2000],["04.webp",1334,2000],["05.webp",1334,2000],["06.webp",2000,1334],["07.webp",1334,2000],["08.webp",1334,2000],["09.webp",1334,2000],["10.webp",1342,2000],["11.webp",1334,2000],["12.webp",1334,2000],["13.webp",1334,2000]]
  },
  {
    /* The play room the two of them share. */
    slug: "playroom",
    title: "Play Room",
    category: "Residential",
    status: "finished",
    typology: "Fun Kids Space",
    location: "Jubilee Hills, Hyderabad",
    area: "",
    year: "2025",
    scope: "Interior Design",
    summary: "Warm timber finishes, soft pastel accents, and whimsical forms create an inviting and playful atmosphere.",
    story: ["The immersive wildlife mural adds depth and storytelling, while integrated shelving and activity zones keep the space functional and organised. Gentle lighting and organic curves soften the interior, creating a nurturing environment for creativity, exploration, and everyday learning."],
    notes: [],
    /* a landscape frame, so the card is not cropped to a slice: the whole room, mural and all */
    cover: 7,
    dir: "assets/projects/playroom",
    images: [["01.webp",1334,2000],["02.webp",1334,2000],["03.webp",1402,2000],["04.webp",1496,2000],["05.webp",1334,2000],["06.webp",1334,2000],["07.webp",2000,1334],["08.webp",1334,2000],["09.webp",1334,2000],["10.webp",2000,1334],["11.webp",1334,2000],["12.webp",1334,2000],["13.webp",1334,2000]]
  },
  {
    slug: "dsr",
    title: "DSR the First (Concrete Canvas)",
    category: "Residential",
    status: "finished",
    typology: "Residence",
    location: "Gachibowli, Hyderabad",
    area: "5000 sq ft",
    year: "2023",
    scope: "Interior Design",
    summary: "A home shaped by sculptural silhouettes, warm woods, and quiet moments of contrast.",
    story: ["Soft neutrals create an effortless backdrop, while expressive lighting, art, and deep green marble add character. Every space feels composed yet relaxed, balancing clean geometry with tactile warmth. Its character comes through in the details, artful, contemporary, and unmistakably individual."],
    notes: [],
    /* the frames the sequence shows, chosen for variety: near
       duplicate views are set aside, nothing is deleted */
    /* the sectional against the timber wall with the sculptural lamp: the
       silhouettes and the quiet contrast the write up is about */
    cover: 17,
    select: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17],
    dir: "assets/projects/dsr",
    images: [["01.webp",1600,1067],["02.webp",1067,1600],["03.webp",1067,1600],["04.webp",1067,1600],["05.webp",1067,1600],["06.webp",1067,1600],["07.webp",1066,1600],["08.webp",1067,1600],["09.webp",1067,1600],["10.webp",1067,1600],["11.webp",1067,1600],["12.webp",1067,1600],["13.webp",1067,1600],["14.webp",1067,1600],["15.webp",1067,1600],["16.webp",1067,1600],["17.webp",1600,1067],["18.webp",1067,1600],["19.webp",1067,1600],["20.webp",1067,1600],["21.webp",1067,1600],["22.webp",1600,1067]]
  },
  {
    slug: "jbn",
    /* JBN is Jewellery by Nikita. The line under the name on the site is built
       from typology and location, so fill those in for each project as the
       studio sends them and it appears on its own. */
    title: "Jewellery by Nikitha",
    category: "Retail",
    status: "finished",
    typology: "Boutique Jewellery Store",
    location: "Bangalore",
    area: "6000 sq ft",
    year: "2026",
    scope: "Interior Design",
    summary: "This jewellery store is envisioned as a chic, contemporary space with a rich and understated sense of luxury.",
    story: ["Deep burgundy tones, refined timber finishes, and sculptural displays create a dramatic yet elegant setting. Soft, focused lighting enhances the jewellery while adding warmth and intimacy to the experience. The result is a sophisticated retail environment that feels timeless, exclusive, and effortlessly modern."],
    notes: [],
    /* the frames the sequence shows, chosen for variety: near
       duplicate views are set aside, nothing is deleted */
    select: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16],
    dir: "assets/projects/jbn",
    images: [["01.webp",1600,1067],["02.webp",1280,1600],["03.webp",1067,1600],["04.webp",1067,1600],["05.webp",1600,1179],["06.webp",1067,1600],["07.webp",1067,1600],["08.webp",1067,1600],["09.webp",1067,1600],["10.webp",1067,1600],["11.webp",1067,1600],["12.webp",1142,1600],["13.webp",1067,1600],["14.webp",1600,1067],["15.webp",1600,1096],["16.webp",1067,1600],["17.webp",1115,1600],["18.webp",1067,1600],["19.webp",959,1600],["20.webp",1091,1600],["21.webp",1300,1600],["22.webp",1067,1600],["23.webp",1047,1600],["24.webp",1302,1600]]
  },
  {
    slug: "aparna-one",
    /* the living room, chosen by the studio to lead */
    cover: 4,
    title: "Aparna One (Mysa)",
    /* its 04 is the one landscape frame in the set — see `cover` in the notes above */
    cover: 4,
    category: "Residential",
    status: "finished",
    typology: "Residence",
    location: "Shaikpet, Hyderabad",
    area: "3200 sq ft",
    year: "2023",
    scope: "Interior Design",
    summary: "This residence is designed as a calm and contemporary home, where clean lines are softened by warm materials and subtle detailing.",
    story: ["A muted palette, sage toned cabinetry, sculptural furniture, and natural textures create a relaxed and cohesive character. Gentle architectural forms and filtered daylight bring depth and softness throughout the interiors. The home carries a quiet sense of ease, refined in expression, warm in character, and effortless to live in."],
    notes: [],
    /* the frames the sequence shows, chosen for variety: near
       duplicate views are set aside, nothing is deleted */
    select: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 17],
    dir: "assets/projects/aparna-one",
    images: [["01.webp",1067,1600],["02.webp",1067,1600],["03.webp",1067,1600],["04.webp",1600,1067],["05.webp",1067,1600],["06.webp",1067,1600],["07.webp",1067,1600],["08.webp",1067,1600],["09.webp",1067,1600],["10.webp",1067,1600],["11.webp",1067,1600],["12.webp",1067,1600],["13.webp",1067,1600],["14.webp",1067,1600],["15.webp",1067,1600],["16.webp",1067,1600],["17.webp",1067,1600],["18.webp",1067,1600],["19.webp",1067,1600],["20.webp",1031,1600],["21.webp",1067,1600]]
  },
  {
    slug: "vessela",
    title: "Vasella Meadows",
    category: "Residential",
    status: "finished",
    typology: "Villa",
    location: "Hyderabad",
    area: "",
    year: "2022",
    scope: "Interior Design",
    /* Published by Architectural Digest India. The write-up below was drawn
       from the photographs rather than from the feature, which the studio is
       to check against the published text. */
    summary: "A family home in Hyderabad where one warm, grounded palette carries the whole house and every room is given a single thing of its own to be remembered by.",
    story: ["Timber beams run across the living room ceiling and a cluster of black cone pendants drops through them, holding the seating together without a wall to do it. Linen sheers sit behind terracotta drapes so the light can be softened by degrees through the day, and marble floors keep the ground quiet under a knotted wool rug.", "The rooms are allowed their own character. A rose sofa and a tropical canvas give the second living space its colour, the kitchen runs blush cabinetry against pale timber with a live edge counter to eat at, and the bedrooms take opposite paths, one in a tufted headboard against fluted timber, the other in deep blue panelling. A guest bathroom is laid in pink herringbone against speckled terrazzo.", "Nothing in it is precious. The jute, the cotton, the marble and the timber are all surfaces a family can live on, which is what makes the house feel lived in rather than arranged."],
    notes: [],
    /* the wide living room, which is the whole house in one frame */
    cover: 17,
    /* the frames the sequence shows, chosen for variety: near
       duplicate views are set aside, nothing is deleted */
    select: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    /* The folder is vasella-meadows because that is what the studio's own
       archive is called, and a folder rebuilt from it comes back under that
       name every time. The slug stays vessela so links already shared keep
       working; the two are allowed to differ. */
    dir: "assets/projects/vasella-meadows",
    images: [["01.webp",1333,2000],["02.webp",2000,1333],["03.webp",1333,2000],["04.webp",1333,2000],["05.webp",1333,2000],["06.webp",1333,2000],["07.webp",1333,2000],["08.webp",1333,2000],["09.webp",2000,1333],["10.webp",1333,2000],["11.webp",1333,2000],["12.webp",1333,2000],["13.webp",1333,2000],["14.webp",1333,2000],["15.webp",1333,2000],["16.webp",2000,1333],["17.webp",2000,1333],["18.webp",1333,2000]]
  }

  /* ------------------------------------------------------------------------
     TEMPLATE

  ,{
    slug: "project-name",
    title: "Project Name",
    category: "Residential",
    status: "ongoing",
    typology: "Residence",
    location: "Hyderabad",
    area: "0,000 sq ft",
    year: "",
    scope: "Interior Design",
    summary: "One line that says what the project is.",
    story: [ "First paragraph.", "Second paragraph." ],
    notes: ["Material", "Idea", "Detail"],
    dir: "assets/projects/project-name",
    images: [["01.webp",1600,900]]
  }
  ------------------------------------------------------------------------ */
];
