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

window.PROJECTS = [
  {
    slug: "keerthi-club-house",
    title: "Keerthi Club House",
    category: "Hospitality",
    status: "ongoing",
    typology: "Club House",
    location: "",
    area: "",
    scope: "Interior Design",
    summary: "",
    story: [],
    notes: [],
    dir: "assets/projects/keerthi-club-house",
    images: [["01.webp",1600,900],["02.webp",1600,900],["03.webp",1600,900],["04.webp",1600,900],["05.webp",1600,900],["06.webp",1600,900],["07.webp",1600,900],["08.webp",1600,900],["09.webp",1600,900],["10.webp",1600,900],["11.webp",1600,900],["12.webp",1600,900],["13.webp",1600,900],["14.webp",1600,900],["15.webp",1600,900],["16.webp",1600,900],["17.webp",1600,900],["18.webp",1600,900],["19.webp",1600,900],["20.webp",1600,900],["21.webp",1600,900],["22.webp",1600,900],["23.webp",1600,900],["24.webp",1600,900],["25.webp",1600,900],["26.webp",1600,900],["27.webp",1600,900],["28.webp",1600,900],["29.webp",1600,900],["30.webp",1600,900],["31.webp",1600,900],["32.webp",1600,900],["33.webp",1600,900],["34.webp",1600,900],["35.webp",1600,900],["36.webp",1600,900],["37.webp",1600,900],["38.webp",1600,900],["39.webp",1600,900],["40.webp",1600,900],["41.webp",1600,900],["42.webp",1600,900],["43.webp",1012,1080],["44.webp",1600,900],["45.webp",1600,900],["46.webp",1600,900],["47.webp",1600,900],["48.webp",1600,900],["49.webp",1600,900],["50.webp",1600,900],["51.webp",1600,900],["52.webp",1600,900]]
  },
  {
    slug: "keerthi-marketing-office",
    /* the dash in the old title just repeated the typology below it */
    title: "Keerthi Experiential Centre",
    category: "Commercial",
    status: "ongoing",
    typology: "Marketing Office",
    location: "",
    area: "",
    scope: "Interior Design",
    summary: "",
    story: [],
    notes: [],
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
    summary: "",
    story: [],
    notes: [],
    dir: "assets/projects/sas-crown",
    images: [["01.webp",1600,900],["02.webp",1600,900],["03.webp",1600,900],["04.webp",1600,900],["05.webp",1600,900],["06.webp",1600,900],["07.webp",1600,900],["08.webp",1600,900],["09.webp",1600,900],["10.webp",1600,900],["11.webp",1600,900],["12.webp",1600,900],["13.webp",1600,900],["14.webp",1600,900],["15.webp",1600,900],["16.webp",1600,900],["17.webp",1600,900],["18.webp",1600,900],["19.webp",1600,900],["20.webp",1600,900],["21.webp",1600,900],["22.webp",1600,900],["23.webp",1600,900],["24.webp",1600,900],["25.webp",944,1080],["26.webp",708,1080],["27.webp",1600,900],["28.webp",1600,900],["29.webp",1600,900],["30.webp",1600,900],["31.webp",1600,900],["32.webp",1600,900],["33.webp",1600,900],["34.webp",1600,900],["35.webp",1252,1080],["36.webp",1600,900],["37.webp",1600,900],["38.webp",1600,900],["39.webp",1600,900],["40.webp",1600,900],["41.webp",1600,900],["42.webp",1600,900],["43.webp",1600,900],["44.webp",1600,900]]
  },
  {
    slug: "gmfc",
    title: "GMFC",
    category: "Corporate",
    status: "ongoing",
    typology: "Research Office",
    location: "",
    area: "",
    scope: "Interior Design",
    summary: "",
    story: [],
    notes: [],
    dir: "assets/projects/gmfc",
    images: [["32.webp",1600,900],["33.webp",749,1080],["01.webp",1600,900],["02.webp",1600,900],["03.webp",1600,900],["04.webp",1600,900],["05.webp",1325,1080],["06.webp",1325,1080],["07.webp",1326,1080],["08.webp",1326,1080],["09.webp",1600,900],["10.webp",1600,900],["11.webp",1600,900],["12.webp",1600,900],["13.webp",1600,900],["14.webp",1600,900],["15.webp",1600,900],["16.webp",1600,900],["17.webp",1600,900],["18.webp",1600,900],["19.webp",1600,900],["20.webp",1600,900],["21.webp",1600,900],["22.webp",1600,900],["23.webp",1600,900],["24.webp",1406,1080],["25.webp",714,1080],["26.webp",861,1080],["27.webp",1268,1051],["28.webp",736,1080],["29.webp",1600,900],["30.webp",1242,1080],["31.webp",709,1080],["34.webp",1142,1080],["35.webp",1600,900],["36.webp",1600,900],["37.webp",1600,900]]
  },
  {
    slug: "tsk",
    title: "TSK",
    /* A spice kitchen, not the jewellery retail this was first filed as. The
       studio confirmed it stays under Retail rather than moving to
       Hospitality — so this is a decision, not an oversight. */
    category: "Retail",
    status: "ongoing",
    typology: "Spice Kitchen",
    location: "",
    area: "",
    scope: "Interior Design",
    summary: "",
    story: [],
    notes: [],
    dir: "assets/projects/tsk",
    images: [["01.webp",1600,900],["02.webp",1600,900],["03.webp",1600,900],["04.webp",1600,881],["05.webp",1600,900],["06.webp",1600,876],["07.webp",1600,900],["08.webp",1600,900],["09.webp",1600,900],["10.webp",1600,900],["11.webp",1600,900],["12.webp",1600,900],["13.webp",1600,900],["14.webp",1600,900],["15.webp",1600,900],["16.webp",1600,900],["17.webp",1600,900],["18.webp",1166,1080],["19.webp",879,1080],["20.webp",1466,1080],["21.webp",1600,900],["22.webp",1600,900],["23.webp",1600,900],["24.webp",1600,900],["25.webp",1600,900],["26.webp",1600,900],["27.webp",1600,900]]
  },
  {
    slug: "dsr-1",
    title: "DSR 1",
    category: "Residential",
    status: "ongoing",
    typology: "Residence",
    location: "",
    area: "",
    scope: "Interior Design",
    summary: "",
    story: [],
    notes: [],
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
    summary: "",
    story: [],
    notes: [],
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
    typology: "",
    location: "",
    area: "",
    scope: "Interior Design",
    summary: "",
    story: [],
    notes: [],
    dir: "assets/projects/ratio",
    images: [["01.webp",1333,2000],["02.webp",1333,2000],["03.webp",1333,2000],["04.webp",1333,2000],["05.webp",1333,2000],["06.webp",1333,2000],["07.webp",2000,1333],["08.webp",2000,1383],["09.webp",1333,2000],["10.webp",2000,1333],["11.webp",1333,2000],["12.webp",2000,1333],["13.webp",2000,1333],["14.webp",1333,2000],["15.webp",1333,2000],["16.webp",1333,2000],["17.webp",1333,2000],["18.webp",1333,2000],["19.webp",1333,2000],["20.webp",1333,2000],["21.webp",1333,2000],["22.webp",2000,1333],["23.webp",1333,2000]]
  },
  {
    slug: "the-good-side",
    title: "The Good Side",
    category: "Retail",
    status: "finished",
    typology: "",
    location: "",
    area: "",
    scope: "Interior Design",
    summary: "",
    story: [],
    notes: [],
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
    summary: "",
    story: [],
    notes: [],
    dir: "assets/projects/zvezda-boutique",
    images: [["01.webp",2000,1333],["02.webp",1333,2000],["03.webp",1333,2000],["04.webp",1333,2000],["05.webp",2000,1333],["06.webp",1333,2000],["07.webp",1333,2000],["08.webp",1333,2000]]
  },
  {
    slug: "floof-and-co",
    title: "Floof & Co.",
    category: "Retail",
    status: "finished",
    typology: "",
    location: "",
    area: "",
    scope: "Interior Design",
    summary: "",
    story: [],
    notes: [],
    dir: "assets/projects/floof-and-co",
    images: [["01.webp",2000,1334],["02.webp",1334,2000],["03.webp",2000,1430],["04.webp",1334,2000],["05.webp",2000,1430],["06.webp",2000,1334],["07.webp",1334,2000],["08.webp",2000,1430]]
  },
  {
    /* Three rooms for the same family: Harikha's bedroom, Akira's bedroom and
       the playroom they share. They arrived as three folders and are one
       project, so the photographs run in that order behind a single entry. */
    slug: "kids-spaces",
    title: "Kids Spaces",
    category: "Residential",
    status: "finished",
    typology: "",
    location: "",
    area: "",
    scope: "Interior Design",
    summary: "",
    story: [],
    notes: [],
    dir: "assets/projects/kids-spaces",
    images: [["01.webp",1334,2000],["02.webp",1334,2000],["03.webp",1334,2000],["04.webp",1334,2000],["05.webp",1334,2000],["06.webp",2000,1334],["07.webp",1334,2000],["08.webp",2000,1334],["09.webp",2000,1425],["10.webp",1424,2000],["11.webp",1359,2000],["12.webp",1334,2000],["13.webp",1334,2000],["14.webp",1349,2000],["15.webp",1334,2000],["16.webp",1334,2000],["17.webp",2000,1334],["18.webp",1334,2000],["19.webp",1334,2000],["20.webp",1334,2000],["21.webp",1342,2000],["22.webp",1334,2000],["23.webp",1334,2000],["24.webp",1334,2000],["25.webp",1334,2000],["26.webp",1334,2000],["27.webp",1402,2000],["28.webp",1496,2000],["29.webp",1334,2000],["30.webp",1334,2000],["31.webp",2000,1334],["32.webp",1334,2000],["33.webp",1334,2000],["34.webp",2000,1334],["35.webp",1334,2000],["36.webp",1334,2000],["37.webp",1334,2000]]
  },
  {
    slug: "dsr",
    title: "DSR",
    category: "Residential",
    status: "finished",
    typology: "Residence",
    location: "",
    area: "",
    scope: "Interior Design",
    summary: "",
    story: [],
    notes: [],
    dir: "assets/projects/dsr",
    images: [["01.webp",1600,1067],["02.webp",1067,1600],["03.webp",1067,1600],["04.webp",1067,1600],["05.webp",1067,1600],["06.webp",1067,1600],["07.webp",1066,1600],["08.webp",1067,1600],["09.webp",1067,1600],["10.webp",1067,1600],["11.webp",1067,1600],["12.webp",1067,1600],["13.webp",1067,1600],["14.webp",1067,1600],["15.webp",1067,1600],["16.webp",1067,1600],["17.webp",1600,1067],["18.webp",1067,1600],["19.webp",1067,1600],["20.webp",1067,1600],["21.webp",1067,1600],["22.webp",1600,1067]]
  },
  {
    slug: "jbn",
    /* JBN is Jewellery by Nikita. The line under the name on the site is built
       from typology and location, so fill those in for each project as the
       studio sends them and it appears on its own. */
    title: "JBN",
    category: "Retail",
    status: "finished",
    typology: "A jewellery boutique",
    location: "Bangalore",
    area: "",
    scope: "Interior Design",
    summary: "",
    story: [],
    notes: [],
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
    location: "",
    area: "",
    scope: "Interior Design",
    summary: "",
    story: [],
    notes: [],
    dir: "assets/projects/aparna-one",
    images: [["01.webp",1067,1600],["02.webp",1067,1600],["03.webp",1067,1600],["04.webp",1600,1067],["05.webp",1067,1600],["06.webp",1067,1600],["07.webp",1067,1600],["08.webp",1067,1600],["09.webp",1067,1600],["10.webp",1067,1600],["11.webp",1067,1600],["12.webp",1067,1600],["13.webp",1067,1600],["14.webp",1067,1600],["15.webp",1067,1600],["16.webp",1067,1600],["17.webp",1067,1600],["18.webp",1067,1600],["19.webp",1067,1600],["20.webp",1031,1600],["21.webp",1067,1600]]
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
