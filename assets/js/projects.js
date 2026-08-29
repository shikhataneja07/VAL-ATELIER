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
    images: [["01.webp",1400,788],["02.webp",1400,788],["03.webp",1400,788],["04.webp",1400,788],["05.webp",1400,788],["06.webp",1400,788],["07.webp",1400,788],["08.webp",1400,788],["09.webp",1400,788],["10.webp",1400,788],["11.webp",1400,788],["12.webp",1400,788],["13.webp",1400,788],["14.webp",1400,788],["15.webp",1400,788],["16.webp",1400,788],["17.webp",1400,788],["18.webp",1400,788],["19.webp",1400,788],["20.webp",1400,788],["21.webp",1400,788],["22.webp",1400,788],["23.webp",1400,788],["24.webp",1400,788],["25.webp",1400,788],["26.webp",1400,788],["27.webp",1400,788],["28.webp",1400,788],["29.webp",1400,788],["30.webp",1400,788],["31.webp",1400,788],["32.webp",1400,788],["33.webp",1400,788],["34.webp",1400,788],["35.webp",1400,788],["36.webp",1400,788],["37.webp",1400,788],["38.webp",1400,788],["39.webp",1400,788],["40.webp",1400,788],["41.webp",1400,788],["42.webp",1400,788],["43.webp",1012,1080],["44.webp",1400,788],["45.webp",1400,788],["46.webp",1400,788],["47.webp",1400,788],["48.webp",1400,788],["49.webp",1400,788],["50.webp",1400,788],["51.webp",1400,788],["52.webp",1400,788]]
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
    images: [["01.webp",1400,788],["02.webp",1400,788],["03.webp",1400,788],["04.webp",1400,788],["05.webp",1400,788],["06.webp",1400,788],["07.webp",1400,788],["08.webp",537,1080],["09.webp",1400,788],["10.webp",921,1080],["11.webp",1400,788],["12.webp",1400,788],["13.webp",1400,788],["14.webp",1400,788],["15.webp",1110,1080],["16.webp",1400,788],["17.webp",1058,1080],["18.webp",1400,788],["19.webp",1400,949],["20.webp",1016,1080],["21.webp",923,1080],["22.webp",1400,788],["23.webp",1400,997],["24.webp",1215,1080],["25.webp",973,1080],["26.webp",1400,745],["27.webp",1400,743],["28.webp",1066,1080],["29.webp",1066,1080],["30.webp",1090,1080],["31.webp",1400,1011],["32.webp",1400,855],["33.webp",1400,788],["34.webp",1400,892],["35.webp",1177,1055],["36.webp",1400,870],["37.webp",1273,1080],["38.webp",1400,896],["39.webp",1400,788],["40.webp",1400,788],["41.webp",1400,788],["42.webp",1400,788],["43.webp",1400,788]]
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
    images: [["01.webp",1400,788],["02.webp",1400,788],["03.webp",1400,788],["04.webp",1400,788],["05.webp",1400,788],["06.webp",1400,788],["07.webp",1400,788],["08.webp",1400,788],["09.webp",1400,788],["10.webp",1400,788],["11.webp",1400,788],["12.webp",1400,788],["13.webp",1400,788],["14.webp",1400,788],["15.webp",1400,788],["16.webp",1400,788],["17.webp",1400,788],["18.webp",1400,788],["19.webp",1400,788],["20.webp",1400,788],["21.webp",1400,788],["22.webp",1400,788],["23.webp",1400,788],["24.webp",1400,788],["25.webp",944,1080],["26.webp",708,1080],["27.webp",1400,788],["28.webp",1400,788],["29.webp",1400,788],["30.webp",1400,788],["31.webp",1400,788],["32.webp",1400,788],["33.webp",1400,788],["34.webp",1400,788],["35.webp",1252,1080],["36.webp",1400,788],["37.webp",1400,788],["38.webp",1400,788],["39.webp",1400,788],["40.webp",1400,788],["41.webp",1400,788],["42.webp",1400,788],["43.webp",1400,788],["44.webp",1400,788]]
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
    images: [["01.webp",1400,788],["02.webp",1400,788],["03.webp",1400,788],["04.webp",1400,788],["05.webp",1325,1080],["06.webp",1325,1080],["07.webp",1326,1080],["08.webp",1326,1080],["09.webp",1400,788],["10.webp",1400,788],["11.webp",1400,788],["12.webp",1400,788],["13.webp",1400,788],["14.webp",1400,788],["15.webp",1400,788],["16.webp",1400,788],["17.webp",1400,788],["18.webp",1400,788],["19.webp",1400,788],["20.webp",1400,788],["21.webp",1400,788],["22.webp",1400,788],["23.webp",1400,788],["24.webp",1400,1075],["25.webp",714,1080],["26.webp",861,1080],["27.webp",1268,1051],["28.webp",736,1080],["29.webp",1400,788],["30.webp",1242,1080],["31.webp",709,1080],["32.webp",1400,788],["33.webp",749,1080],["34.webp",1142,1080],["35.webp",1400,788],["36.webp",1400,788],["37.webp",1400,788]]
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
    images: [["01.webp",1400,788],["02.webp",1400,788],["03.webp",1400,788],["04.webp",1400,771],["05.webp",1400,788],["06.webp",1400,766],["07.webp",1400,788],["08.webp",1400,788],["09.webp",1400,788],["10.webp",1400,788],["11.webp",1400,788],["12.webp",1400,788],["13.webp",1400,788],["14.webp",1400,788],["15.webp",1400,788],["16.webp",1400,788],["17.webp",1400,788],["18.webp",1166,1080],["19.webp",879,1080],["20.webp",1400,1031],["21.webp",1400,788],["22.webp",1400,788],["23.webp",1400,788],["24.webp",1400,788],["25.webp",1400,788],["26.webp",1400,788],["27.webp",1400,788]]
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
    images: [["01.webp",1400,788],["02.webp",1400,788],["03.webp",1400,788],["04.webp",1400,788],["05.webp",1400,788],["06.webp",1208,1080],["07.webp",1400,788],["08.webp",1323,1080],["09.webp",1400,1051],["10.webp",780,1080],["11.webp",1400,788],["12.webp",1400,788],["13.webp",1400,788],["14.webp",1304,1080],["15.webp",1400,1037],["16.webp",1189,1080],["17.webp",1400,788],["18.webp",1400,1057],["19.webp",1400,788],["20.webp",1400,788],["21.webp",1400,788],["22.webp",1400,788],["23.webp",1400,788],["24.webp",1400,788],["25.webp",1400,788]]
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
    images: [["01.webp",1400,788],["02.webp",1400,788],["03.webp",1400,788],["04.webp",1400,788],["05.webp",1400,788],["06.webp",1400,788],["07.webp",1400,788],["08.webp",1400,788],["09.webp",1400,788],["10.webp",1400,788],["11.webp",1400,788],["12.webp",1400,788],["13.webp",1400,788],["14.webp",1400,788]]
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
    images: [["01.webp",1400,788],["02.webp",1400,788],["03.webp",1400,788],["04.webp",1400,788],["05.webp",1400,788],["06.webp",1400,788],["07.webp",1400,788]]
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
    images: [["01.webp",1400,934],["02.webp",934,1400],["03.webp",934,1400],["04.webp",934,1400],["05.webp",934,1400],["06.webp",934,1400],["07.webp",933,1400],["08.webp",934,1400],["09.webp",934,1400],["10.webp",934,1400],["11.webp",934,1400],["12.webp",934,1400],["13.webp",934,1400],["14.webp",934,1400],["15.webp",934,1400],["16.webp",934,1400],["17.webp",1400,934],["18.webp",934,1400],["19.webp",934,1400],["20.webp",934,1400],["21.webp",934,1400],["22.webp",1400,934]]
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
    images: [["01.webp",1400,934],["02.webp",1120,1400],["03.webp",934,1400],["04.webp",934,1400],["05.webp",1400,1032],["06.webp",934,1400],["07.webp",934,1400],["08.webp",934,1400],["09.webp",934,1400],["10.webp",934,1400],["11.webp",934,1400],["12.webp",999,1400],["13.webp",934,1400],["14.webp",1400,934],["15.webp",1400,959],["16.webp",934,1400],["17.webp",976,1400],["18.webp",934,1400],["19.webp",839,1400],["20.webp",955,1400],["21.webp",1138,1400],["22.webp",934,1400],["23.webp",916,1400],["24.webp",1139,1400]]
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
    images: [["01.webp",934,1400],["02.webp",934,1400],["03.webp",934,1400],["04.webp",1400,934],["05.webp",934,1400],["06.webp",934,1400],["07.webp",934,1400],["08.webp",934,1400],["09.webp",934,1400],["10.webp",934,1400],["11.webp",934,1400],["12.webp",934,1400],["13.webp",934,1400],["14.webp",934,1400],["15.webp",934,1400],["16.webp",934,1400],["17.webp",934,1400],["18.webp",934,1400],["19.webp",934,1400],["20.webp",902,1400],["21.webp",934,1400]]
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
