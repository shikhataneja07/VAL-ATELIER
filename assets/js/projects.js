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
    title: "Keerthi Experiential Centre — Marketing Office",
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
    images: [["01.webp",1600,900],["02.webp",1600,900],["03.webp",1600,900],["04.webp",1600,900],["05.webp",1325,1080],["06.webp",1325,1080],["07.webp",1326,1080],["08.webp",1326,1080],["09.webp",1600,900],["10.webp",1600,900],["11.webp",1600,900],["12.webp",1600,900],["13.webp",1600,900],["14.webp",1600,900],["15.webp",1600,900],["16.webp",1600,900],["17.webp",1600,900],["18.webp",1600,900],["19.webp",1600,900],["20.webp",1600,900],["21.webp",1600,900],["22.webp",1600,900],["23.webp",1600,900],["24.webp",1406,1080],["25.webp",714,1080],["26.webp",861,1080],["27.webp",1268,1051],["28.webp",736,1080],["29.webp",1600,900],["30.webp",1242,1080],["31.webp",709,1080],["32.webp",1600,900],["33.webp",749,1080],["34.webp",1142,1080],["35.webp",1600,900],["36.webp",1600,900],["37.webp",1600,900]]
  },
  {
    slug: "tsk",
    title: "TSK",
    category: "Retail",
    status: "ongoing",
    typology: "Jewellery Retail",
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
    title: "JBN",
    category: "Retail",
    status: "finished",
    typology: "Jewellery Boutique",
    location: "",
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
