/* ==========================================================================
   VAL ATELIER — press
   --------------------------------------------------------------------------
   >> ADD A FEATURE BY ADDING ONE ENTRY BELOW. <<

   The headlines here are taken from each publication's own article URL. They
   could not be fetched and checked from the build environment, so read them
   against the live pages once and correct any that differ. Publication dates
   and bylines were not available either: add them to `date` and `byline` and
   they will appear. Anything left empty is simply not printed rather than
   guessed at.

   Order matters — it is the order they appear on the page. The Architectural
   Digest features lead, then the international titles, then the Indian design
   press. The home page shows the first `HOME_COUNT` of these; the press page
   shows all of them.
   ========================================================================== */

window.PRESS_HOME_COUNT = 4;

/* The order the cards appear in. The entries below are grouped by project,
   which put three Architectural Digest features in a row at the top; the
   studio asked for the outlets to alternate so the record reads as broad
   rather than repetitive. This interleaves them at render time, so entries
   can still be written and edited in whatever order suits.

   It keeps the first entry first, then never places two features from the
   same outlet next to each other while an alternative is available. */
window.PRESS_MIX = true;

window.PRESS = [
  {
    id: "goodside-ad-india",
    outlet: "Architectural Digest India",
    title: "The Goodside Salon by Val Atelier",
    project: "The Goodside Salon",
    projectSlug: "the-good-side",
    date: "",
    byline: "",
    standfirst: "",
    /* TO REPLACE — this is the studio's announcement post, not the article
       itself. Swap in the Architectural Digest India URL when you have it, so
       the card opens the feature rather than Instagram. */
    url: "https://www.instagram.com/p/Db2znBGEmij/",
    dir: "assets/projects/the-good-side",
    image: ["01.webp", 2000, 1333]
  },
  {
    id: "kids-rooms-ad-india",
    outlet: "Architectural Digest India",
    title: "In this Vastu compliant Hyderabad home, the kids' rooms steal the spotlight",
    project: "Sky, Teddy and the Play Room",
    /* the piece covers all three rooms, so it is featured on all three */
    projectSlug: ["kids-sky", "kids-teddy", "kids-play-room"],
    date: "",
    byline: "",
    standfirst: "A Hyderabad home planned to Vastu, where the children's rooms carry the strongest ideas in the house.",
    url: "https://www.architecturaldigest.in/story/in-this-vastu-compliant-hyderabad-home-the-kids-rooms-steal-the-spotlight-val-atelier-vaishnavi-linga/",
    dir: "assets/projects/kids-sky",
    image: ["01.webp", 1334, 2000]
  },
  {
    id: "ratio-ad-india",
    outlet: "Architectural Digest India",
    title: "This 1970s Hyderabad home is transformed into a soulful cafe with thoughtful design",
    project: "Ra:tio",
    projectSlug: "ratio",
    date: "",
    byline: "",
    standfirst: "A 1970s house in Jubilee Hills reworked into a cafe built around stone, timber and daylight.",
    url: "https://www.architecturaldigest.in/story/this-1970s-hyderabad-home-is-transformed-into-a-soulful-cafe-with-thoughtful-design-ratio-restaurant/",
    dir: "assets/projects/ratio",
    image: ["13.webp", 2000, 1333]
  },
  {
    id: "ratio-interior-daily",
    outlet: "Interior Daily",
    title: "A 1970s home transformed into a Japandi inspired cafe in Hyderabad by Val Atelier",
    project: "Ra:tio",
    projectSlug: "ratio",
    date: "",
    byline: "",
    standfirst: "The Netherlands based design title on the Jubilee Hills house that became a cafe.",
    url: "https://www.interiordaily.com/article/9808843/a-1970s-home-transformed-into-a-japandi-inspired-cafe-in-hyderabad-by-val-atelier/",
    dir: "assets/projects/ratio",
    image: ["08.webp", 2000, 1383]
  },
  {
    id: "ratio-love-that-design",
    outlet: "Love That Design",
    title: "Ra:tio Cafe, Hyderabad",
    project: "Ra:tio",
    projectSlug: "ratio",
    date: "",
    byline: "",
    standfirst: "Covered by one of the Middle East's leading design and architecture publications.",
    url: "https://www.lovethatdesign.com/project/ratio-cafe-hyderabad/",
    dir: "assets/projects/ratio",
    image: ["01.webp", 1333, 2000]
  },
  {
    id: "ratio-commercial-design",
    outlet: "Commercial Design",
    title: "This 1970s Hyderabad home finds new life as a soulful, design led cafe",
    project: "Ra:tio",
    projectSlug: "ratio",
    date: "",
    byline: "",
    standfirst: "",
    url: "https://www.commercialdesignindia.com/projects/this-1970s-hyderabad-home-finds-new-life-as-a-soulful-design-led-cafe",
    dir: "assets/projects/ratio",
    image: ["11.webp", 1333, 2000]
  },
  {
    id: "ratio-architect-and-interiors",
    outlet: "Architect and Interiors India",
    title: "Walk into 4,500 sq ft of Japandi mindfulness at this Hyderabad home turned into a cafe",
    project: "Ra:tio",
    projectSlug: "ratio",
    date: "",
    byline: "",
    standfirst: "",
    url: "https://www.architectandinteriorsindia.com/projects/walk-into-4500-sq-ft-of-japandi-mindfulness-at-this-hyderabad-home-turned-into-a-cafe",
    dir: "assets/projects/ratio",
    image: ["18.webp", 1333, 2000]
  },
  {
    id: "ratio-indesignlive",
    outlet: "Indesignlive",
    title: "Balance and Ra:tio, a cafe in Hyderabad",
    project: "Ra:tio",
    projectSlug: "ratio",
    date: "",
    byline: "",
    standfirst: "",
    url: "https://www.indesignlive.com/projects/balance-and-ratio-cafe-hyderabad",
    dir: "assets/projects/ratio",
    image: ["22.webp", 2000, 1333]
  },
  {
    id: "concrete-calm-architecture-plus-design",
    outlet: "Architecture+Design",
    title: "Val Atelier: a Hyderabad home strikes a balance between concrete and calm",
    project: "Aparna One",
    projectSlug: "aparna-one",
    date: "",
    byline: "",
    standfirst: "",
    url: "https://www.architectureplusdesign.in/design/val-atelier-hyderabad-home-strikes-balance-between-concrete-calm/",
    dir: "assets/projects/aparna-one",
    image: ["07.webp", 1067, 1600]
  },
  {
    /* Last by the studio's choice, not by date. This one carried the
       publication's masthead rather than a photograph, because the house it
       covers was not yet on the site. It is now: Vessela, whose own
       photographs the plate is taken from. */
    id: "family-home-ad-india",
    outlet: "Architectural Digest India",
    title: "Thoughtful design interventions turn this Hyderabad house into a loving family home",
    project: "Vasella Meadows",
    projectSlug: "vessela",
    date: "",
    byline: "",
    standfirst: "A Hyderabad house reshaped, room by room, into a home built around how one family actually lives.",
    url: "https://www.architecturaldigest.in/story/thoughtful-design-interventions-turn-this-hyderabad-house-into-a-loving-family-home/",
    dir: "assets/projects/vessela",
    image: ["04.webp", 1333, 2000]
  }

  /* -----------------------------------------------------------------------
     TEMPLATE

  ,{
    id:         "unique-key",
    outlet:     "Publication name",
    title:      "The headline, exactly as published",
    project:    "Project Name",
    projectSlug:"project-slug",
    date:       "March 2026",
    byline:     "Writer name",
    standfirst: "One sentence on what the piece covers.",
    url:        "https://…",
    dir:        "assets/projects/project-slug",
    image:      ["01.jpg", 1200, 1500]
  }
  ----------------------------------------------------------------------- */
];
