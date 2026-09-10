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
  "finished:Residential": "aparna-one",
  "finished:Retail":      "jbn",

  "ongoing:Residential":  "sas-crown",
  "ongoing:Hospitality":  "keerthi-club-house",
  "ongoing:Commercial":   "keerthi-marketing-office",
  "ongoing:Corporate":    "gmfc",
  "ongoing:Retail":       "tsk"
};

/* Preferred order. Any category found in the data but missing from this list
   is still shown — it just goes last. */
window.CATEGORY_ORDER = ["Residential", "Retail", "Hospitality", "Commercial", "Corporate"];
