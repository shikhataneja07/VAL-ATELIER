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
  ["dsr",             19],
  ["aparna-one",       6],
  ["aparna-one",      17],
  ["kids-sky",         1],
  ["zvezda-boutique",  2],
  ["the-good-side",    2]
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
    location: "",
    area: "",
    scope: "Interior Design",
    summary: "This clubhouse is imagined as a refined social retreat where design, wellness, and leisure come together with quiet ease.",
    story: ["Sculptural forms, warm wood finishes, textured neutral surfaces, and art led details give the spaces a calm yet distinctive identity. From the welcoming reception and curated corridors to the serene studio and lounge areas, every zone is designed to feel immersive, elegant, and effortlessly functional. The result is a contemporary clubhouse that feels inviting, elevated, and deeply considered."],
    notes: [],
    /* the frames the sequence shows, chosen for variety: near
       duplicate views are set aside, nothing is deleted */
    select: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dir: "assets/projects/keerthi-club-house",
    images: [["01.webp",1600,900],["02.webp",1600,900],["03.webp",1600,900],["04.webp",1600,900],["05.webp",1600,900],["06.webp",1600,900],["07.webp",1600,900],["08.webp",1600,900],["09.webp",1600,900],["10.webp",1600,900],["11.webp",1600,900],["12.webp",1600,900],["13.webp",1600,900],["14.webp",1600,900],["15.webp",1600,900],["16.webp",1600,900],["17.webp",1600,900],["18.webp",1600,900],["19.webp",1600,900],["20.webp",1600,900],["21.webp",1600,900],["22.webp",1600,900],["23.webp",1600,900],["24.webp",1600,900],["25.webp",1600,900],["26.webp",1600,900],["27.webp",1600,900],["28.webp",1600,900],["29.webp",1600,900],["30.webp",1600,900],["31.webp",1600,900],["32.webp",1600,900],["33.webp",1600,900],["34.webp",1600,900],["35.webp",1600,900],["36.webp",1600,900],["37.webp",1600,900],["38.webp",1600,900],["39.webp",1600,900],["40.webp",1600,900],["41.webp",1600,900],["42.webp",1600,900],["43.webp",1012,1080],["44.webp",1600,900],["45.webp",1600,900],["46.webp",1600,900],["47.webp",1600,900],["48.webp",1600,900],["49.webp",1600,900],["50.webp",1600,900],["51.webp",1600,900],["52.webp",1600,900]]
  },
  {
    slug: "keerthi-marketing-office",
    /* the dash in the old title just repeated the typology below it */
    title: "Keerthi Ascent Experiential Centre",
    category: "Commercial",
    status: "ongoing",
    typology: "Marketing Office",
    location: "",
    area: "",
    scope: "Interior Design",
    summary: "The space is imagined as a calm, immersive environment where architecture and landscape quietly shape the visitor experience.",
    story: ["Textured surfaces, warm finishes, filtered light, and sculptural details create a refined sense of depth across the reception, lounge, discussion, and meeting spaces. Large openings and planted moments soften the interiors, allowing the spaces to feel connected, open, and unhurried. The atmosphere is understated yet memorable: a place designed not just to present, but to draw people in and let the experience unfold naturally."],
    notes: [],
    /* the frames the sequence shows, chosen for variety: near
       duplicate views are set aside, nothing is deleted */
    select: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13],
    dir: "assets/projects/keerthi-marketing-office",
    images: [["01.webp",1600,900],["02.webp",1600,900],["03.webp",1600,900],["04.webp",1600,900],["05.webp",1600,900],["06.webp",1600,900],["07.webp",1600,900],["08.webp",537,1080],["09.webp",1600,900],["10.webp",921,1080],["11.webp",1600,900],["12.webp",1600,900],["13.webp",1600,900],["14.webp",1600,900],["15.webp",1110,1080],["16.webp",1600,900],["17.webp",1058,1080],["18.webp",1600,900],["19.webp",1568,1063],["20.webp",1016,1080],["21.webp",923,1080],["22.webp",1600,900],["23.webp",1504,1071],["24.webp",1215,1080],["25.webp",973,1080],["26.webp",1600,851],["27.webp",1600,849],["28.webp",1066,1080],["29.webp",1066,1080],["30.webp",1090,1080],["31.webp",1496,1080],["32.webp",1600,977],["33.webp",1600,900],["34.webp",1600,1020],["35.webp",1177,1055],["36.webp",1600,994],["37.webp",1273,1080],["38.webp",1600,1024],["39.webp",1600,900],["40.webp",1600,900],["41.webp",1600,900],["42.webp",1600,900],["43.webp",1600,900]]
  },
  {
    slug: "sas-crown",
    title: "SAS Crown",
    category: "Residential",
    status: "ongoing",
    typology: "Residence",
    location: "",
    area: "",
    scope: "Interior Design",
    summary: "This residence is conceived as a layered, contemporary home where warm timber, stone, and soft neutral finishes create a rich yet understated backdrop.",
    story: ["Muted greens and terracotta accents bring depth and personality, while sculptural furniture, patterned surfaces, and curated artwork add a distinct visual rhythm. Screens, refined joinery, and carefully composed lighting give each space its own character while maintaining a strong sense of continuity. The home feels expressive without being excessive: warm, artistic, and quietly sophisticated."],
    notes: [],
    /* the frames the sequence shows, chosen for variety: near
       duplicate views are set aside, nothing is deleted */
    select: [1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14],
    dir: "assets/projects/sas-crown",
    images: [["01.webp",1600,900],["02.webp",1600,900],["03.webp",1600,900],["04.webp",1600,900],["05.webp",1600,900],["06.webp",1600,900],["07.webp",1600,900],["08.webp",1600,900],["09.webp",1600,900],["10.webp",1600,900],["11.webp",1600,900],["12.webp",1600,900],["13.webp",1600,900],["14.webp",1600,900],["15.webp",1600,900],["16.webp",1600,900],["17.webp",1600,900],["18.webp",1600,900],["19.webp",1600,900],["20.webp",1600,900],["21.webp",1600,900],["22.webp",1600,900],["23.webp",1600,900],["24.webp",1600,900],["25.webp",944,1080],["26.webp",708,1080],["27.webp",1600,900],["28.webp",1600,900],["29.webp",1600,900],["30.webp",1600,900],["31.webp",1600,900],["32.webp",1600,900],["33.webp",1600,900],["34.webp",1600,900],["35.webp",1252,1080],["36.webp",1600,900],["37.webp",1600,900],["38.webp",1600,900],["39.webp",1600,900],["40.webp",1600,900],["41.webp",1600,900],["42.webp",1600,900],["43.webp",1600,900],["44.webp",1600,900]]
  },
  {
    slug: "gmfc",
    title: "GMFC Workspace",
    category: "Corporate",
    status: "ongoing",
    typology: "Research Office",
    location: "",
    area: "",
    scope: "Interior Design",
    /* its 04 is the prayer room, which leads on nothing: the lounge reads as
       the workspace the write-up describes */
    cover: 4,
    summary: "This workspace is designed with a calm, understated language that balances focus with comfort.",
    story: ["Soft neutral tones, textured walls, stone surfaces, and warm finishes create a refined and cohesive atmosphere. Clean lined meeting areas, relaxed lounge spaces, and sculptural lighting give each zone its own quiet character. Natural light and subtle detailing soften the overall mood, making the office feel composed, welcoming, and thoughtfully lived in."],
    notes: [],
    /* the frames the sequence shows, chosen for variety: near
       duplicate views are set aside, nothing is deleted */
    select: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dir: "assets/projects/gmfc",
    images: [["32.webp",1600,900],["33.webp",749,1080],["01.webp",1600,900],["02.webp",1600,900],["03.webp",1600,900],["04.webp",1600,900],["05.webp",1325,1080],["06.webp",1325,1080],["07.webp",1326,1080],["08.webp",1326,1080],["09.webp",1600,900],["10.webp",1600,900],["11.webp",1600,900],["12.webp",1600,900],["13.webp",1600,900],["14.webp",1600,900],["15.webp",1600,900],["16.webp",1600,900],["17.webp",1600,900],["18.webp",1600,900],["19.webp",1600,900],["20.webp",1600,900],["21.webp",1600,900],["22.webp",1600,900],["23.webp",1600,900],["24.webp",1406,1080],["25.webp",714,1080],["26.webp",861,1080],["27.webp",1268,1051],["28.webp",736,1080],["29.webp",1600,900],["30.webp",1242,1080],["31.webp",709,1080],["34.webp",1142,1080],["35.webp",1600,900],["36.webp",1600,900],["37.webp",1600,900]]
  },
  {
    slug: "tsk",
    title: "Telangana Spice Kitchen",
    /* A spice kitchen, not the jewellery retail this was first filed as. The
       studio confirmed it stays under Retail rather than moving to
       Hospitality — so this is a decision, not an oversight. */
    category: "Retail",
    status: "ongoing",
    typology: "Regional Restaurant",
    location: "",
    area: "",
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
    location: "",
    area: "",
    scope: "Interior Design",
    summary: "This residence is shaped by a quiet, contemporary sensibility, where soft neutrals and warm timber create a calm, cohesive backdrop.",
    story: ["Sculptural furniture, subtle detailing, and curated artwork bring depth without overwhelming the spaces. Natural light moves gently through the interiors, adding softness and warmth throughout the day. The home feels composed yet effortless: refined in character, intimate in mood, and designed to be lived in with ease."],
    notes: [],
    /* the frames the sequence shows, chosen for variety: near
       duplicate views are set aside, nothing is deleted */
    select: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dir: "assets/projects/dsr-1",
    images: [["01.webp",1600,900],["02.webp",1600,900],["03.webp",1600,900],["04.webp",1600,900],["05.webp",1600,900],["06.webp",1208,1080],["07.webp",1600,900],["08.webp",1323,1080],["09.webp",1438,1080],["10.webp",780,1080],["11.webp",1600,900],["12.webp",1600,900],["13.webp",1600,900],["14.webp",1304,1080],["15.webp",1458,1080],["16.webp",1189,1080],["17.webp",1600,900],["18.webp",1430,1080],["19.webp",1600,900],["20.webp",1600,900],["21.webp",1600,900],["22.webp",1600,900],["23.webp",1600,900],["24.webp",1600,900],["25.webp",1600,900]]
  },
  {
    slug: "wdsr",
    title: "WDSR",
    category: "Residential",
    status: "ongoing",
    typology: "Residence",
    location: "",
    area: "",
    scope: "Interior Design",
    summary: "This living space is designed around a calm, contemporary palette of warm wood, textured neutrals, and soft earthy tones.",
    story: ["Sculptural furniture, layered lighting, and curated artwork bring character while keeping the atmosphere relaxed and uncluttered. Subtle screens, refined wall detailing, and generous daylight add depth and rhythm throughout. Its appeal lies in the balance of comfort and restraint, creating a home that feels effortless, warm, and quietly refined."],
    notes: [],
    /* the frames the sequence shows, chosen for variety: near
       duplicate views are set aside, nothing is deleted */
    select: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dir: "assets/projects/wdsr",
    images: [["01.webp",1600,900],["02.webp",1600,900],["03.webp",1600,900],["04.webp",1600,900],["05.webp",1600,900],["06.webp",1600,900],["07.webp",1600,900],["08.webp",1600,900],["09.webp",1600,900],["10.webp",1600,900],["11.webp",1600,900],["12.webp",1600,900],["13.webp",1600,900],["14.webp",1600,900]]
  },
  {
    slug: "sindhus-baby-room",
    title: "Sindhu's Baby Room",
    category: "Residential",
    status: "ongoing",
    typology: "Children's Room",
    location: "",
    area: "",
    scope: "Interior Design",
    summary: "",
    story: [],
    notes: [],
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
    cover: 13,
    status: "finished",
    typology: "Speciality Coffee House",
    location: "Hyderabad",
    area: "",
    year: "2025",
    scope: "Interior Design",
    summary: "This coffee house is conceived as a quiet, design led escape with an effortless sense of warmth and sophistication.",
    story: ["Natural timber, muted textures, and crisp architectural detailing create a refined yet relaxed visual language. Soft lighting, intimate seating, and crafted elements bring a subtle richness to the space without feeling overstated. The space settles into a calm, contemporary rhythm: inviting, tactile, and quietly memorable."],
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
    category: "Wellness",
    status: "finished",
    typology: "Luxury Salon and Makeup Studio",
    location: "Hyderabad",
    area: "",
    year: "2025",
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
    scope: "Interior Design",
    summary: "Tucked away in the heart of Jubilee Hills, this 1,500 sq ft boutique is a quiet little world of its own, soft, feminine and beautifully detailed.",
    story: ["Designed with a gentle, almost poetic restraint, the space uses a neutral palette to let the garments take centre stage. Botanical reliefs finished by hand wrap the walls, adding depth and character without ever overwhelming the eye.", "The curved ceiling floats above the space like a wave, creating movement and a sense of calm, while the delicate gold rails and arched windows bring in a touch of romance. Every corner feels intentional, warm and thoughtfully composed, a small boutique with a big soul, made to make every piece of clothing feel special."],
    notes: [],
    dir: "assets/projects/zvezda-boutique",
    images: [["01.webp",2000,1333],["02.webp",1333,2000],["03.webp",1333,2000],["04.webp",1333,2000],["05.webp",2000,1333],["06.webp",1333,2000],["07.webp",1333,2000],["08.webp",1333,2000]]
  },
  {
    slug: "floof-and-co",
    title: "Floof & Co.",
    category: "Retail",
    status: "finished",
    typology: "Pet Store",
    location: "Hyderabad",
    area: "",
    year: "2025",
    scope: "Interior Design",
    summary: "Designed as a cheerful and contemporary pet retail experience in Hyderabad, the space pairs warm timber with playful mustard and green accents.",
    story: ["Rounded forms, integrated display niches, and open shelving keep the store visually soft while making products easy to browse. A dedicated grooming zone is seamlessly woven into the layout, balancing function with character. The result is a warm, friendly environment that feels thoughtfully designed for both pets and their people."],
    notes: [],
    dir: "assets/projects/floof-and-co",
    images: [["01.webp",2000,1334],["02.webp",1334,2000],["03.webp",2000,1430],["04.webp",1334,2000],["05.webp",2000,1430],["06.webp",2000,1334],["07.webp",1334,2000],["08.webp",2000,1430]]
  },
  {
    /* Sky, Harikha's bedroom. It was one of three folders that arrived
       together and were shown as a single entry; Vaishnavi has since said the
       playroom is its own project and the two bedrooms are separate, so the
       eleven photographs stand on their own again. */
    slug: "kids-sky",
    title: "Sky",
    category: "Residential",
    status: "finished",
    typology: "Kids Spaces",
    location: "Hyderabad",
    area: "",
    year: "2025",
    scope: "Interior Design",
    summary: "This kids' room is designed as a luxurious yet playful retreat, where imagination is expressed through refined detailing and a soft, serene palette.",
    story: ["Powder blue accents, bespoke wall art, tactile fabrics, and sculptural forms create a sophisticated sense of whimsy. Thoughtfully designed furniture and curated decor bring warmth and personality while maintaining a calm, uncluttered aesthetic. The result is an elegant, dreamlike space that feels youthful, elevated, and timeless."],
    notes: [],
    dir: "assets/projects/kids-sky",
    images: [["01.webp",1334,2000],["02.webp",1334,2000],["03.webp",1334,2000],["04.webp",1334,2000],["05.webp",1334,2000],["06.webp",2000,1334],["07.webp",1334,2000],["08.webp",2000,1334],["09.webp",2000,1425],["10.webp",1424,2000],["11.webp",1359,2000]]
  },
  {
    /* Teddy, Akira's bedroom. */
    slug: "kids-teddy",
    title: "Teddy",
    category: "Residential",
    status: "finished",
    typology: "Kids Spaces",
    location: "Hyderabad",
    area: "",
    year: "2025",
    scope: "Interior Design",
    summary: "This children's bedroom is designed as a soft, whimsical retreat with a refined contemporary character.",
    story: ["Sculptural furniture, rounded detailing, and charming custom elements bring a sense of personality while keeping the space clean and sophisticated. Thoughtfully integrated storage and delicate styling complete a dreamy, intimate room that feels youthful, elegant, and effortlessly chic."],
    notes: [],
    dir: "assets/projects/kids-teddy",
    images: [["01.webp",1334,2000],["02.webp",1334,2000],["03.webp",1349,2000],["04.webp",1334,2000],["05.webp",1334,2000],["06.webp",2000,1334],["07.webp",1334,2000],["08.webp",1334,2000],["09.webp",1334,2000],["10.webp",1342,2000],["11.webp",1334,2000],["12.webp",1334,2000],["13.webp",1334,2000]]
  },
  {
    /* The play room the two of them share. */
    slug: "kids-play-room",
    title: "Play Room",
    category: "Residential",
    status: "finished",
    typology: "Kids Spaces",
    location: "Hyderabad",
    area: "",
    year: "2025",
    scope: "Interior Design",
    summary: "Warm timber finishes, soft pastel accents, and whimsical forms create an inviting and playful atmosphere.",
    story: ["The immersive wildlife mural adds depth and storytelling, while integrated shelving and activity zones keep the space functional and organised. Gentle lighting and organic curves soften the interior, creating a nurturing environment for creativity, exploration, and everyday learning."],
    notes: [],
    dir: "assets/projects/kids-play-room",
    images: [["01.webp",1334,2000],["02.webp",1334,2000],["03.webp",1402,2000],["04.webp",1496,2000],["05.webp",1334,2000],["06.webp",1334,2000],["07.webp",2000,1334],["08.webp",1334,2000],["09.webp",1334,2000],["10.webp",2000,1334],["11.webp",1334,2000],["12.webp",1334,2000],["13.webp",1334,2000]]
  },
  {
    slug: "dsr",
    title: "DSR the First",
    category: "Residential",
    status: "finished",
    typology: "Residence",
    location: "Hyderabad",
    area: "",
    year: "2022",
    scope: "Interior Design",
    summary: "A home shaped by sculptural silhouettes, warm woods, and quiet moments of contrast.",
    story: ["Soft neutrals create an effortless backdrop, while expressive lighting, art, and deep green marble add character. Every space feels composed yet relaxed, balancing clean geometry with tactile warmth. Its character comes through in the details: artful, contemporary, and unmistakably individual."],
    notes: [],
    /* the frames the sequence shows, chosen for variety: near
       duplicate views are set aside, nothing is deleted */
    select: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
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
    area: "",
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
    title: "Aparna One",
    /* its 04 is the one landscape frame in the set — see `cover` in the notes above */
    cover: 4,
    category: "Residential",
    status: "finished",
    typology: "Residence",
    location: "Hyderabad",
    area: "",
    year: "2024",
    scope: "Interior Design",
    summary: "This residence is designed as a calm and contemporary home, where clean lines are softened by warm materials and subtle detailing.",
    story: ["A muted palette, sage toned cabinetry, sculptural furniture, and natural textures create a relaxed and cohesive character. Gentle architectural forms and filtered daylight bring depth and softness throughout the interiors. The home carries a quiet sense of ease: refined in expression, warm in character, and effortless to live in."],
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
    dir: "assets/projects/vessela",
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
    scope: "Interior Design",
    summary: "One line that says what the project is.",
    story: [ "First paragraph.", "Second paragraph." ],
    notes: ["Material", "Idea", "Detail"],
    dir: "assets/projects/project-name",
    images: [["01.webp",1600,900]]
  }
  ------------------------------------------------------------------------ */
];
