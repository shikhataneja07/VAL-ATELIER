/* ==========================================================================
   VAL ATELIER — the home page category decks
   --------------------------------------------------------------------------
   The categories shown on the home page are NOT listed here. They are derived
   from assets/js/projects.js, so a category can only appear if a project
   actually carries it — and it disappears again if the last project in it is
   removed or refiled. Nothing has to be kept in sync by hand.

   All this file decides is WHICH project leads each category, and the order
   the categories appear in.

   >> LEADS: "<status>:<Category>" -> project slug.                          <<
   Remove a line and that category simply leads with its first project.
   ========================================================================== */

window.LEADS = {
  "finished:Residential":               "aparna-one",
  "finished:Hospitality & F&B":         "ratio",
  "finished:Retail":                    "the-good-side",
  "finished:Kids & Play":               "sky",

  "ongoing:Residential":                "sas-crown",
  "ongoing:Hospitality & F&B":          "tsk",
  "ongoing:Experiential & Commercial":  "keerthi-club-house"
};

/* The studio's own five categories, in its order (Vaishnavi, October 2026).
   Any category found in the data but missing from this list is still shown;
   it just goes last. */
window.CATEGORY_ORDER = ["Residential", "Hospitality & F&B", "Retail", "Experiential & Commercial", "Kids & Play"];

/* The line the studio wrote for each category, shown under the filters on the
   Projects page when that category is picked. A category without one shows
   nothing there. */
window.CATEGORY_NOTES = {
  "Residential":       "Private homes, apartments and villas.",
  "Hospitality & F&B": "Spaces centred around food, gathering and experience.",
  "Retail":            "Consumer facing spaces where brand and spatial experience come together."
};
