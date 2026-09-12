/* ==========================================================================
   VAL ATELIER — site configuration
   --------------------------------------------------------------------------
   >> ONE PLACE TO EDIT THE STUDIO'S DETAILS. <<
   The values marked TO CONFIRM are placeholders. They were not supplied with
   the portfolio, so nothing here should be treated as a real contact detail
   until the studio replaces it.
   ========================================================================== */

window.SITE = {
  name:    "Val Atelier",

  tagline: "Interior Design Studio",

  /* TO CONFIRM — replace with the studio's real address */
  email:   "studio@valatelier.in",
  phone:        "+91 99899 56633",
  phoneLink:    "+919989956633",
  /* the same number drives the floating button and the one in the menu.
     Leave it empty and both quietly fall back to the contact page instead
     of dialling a wrong number. */
  whatsapp:        "919989956633",
  whatsappMessage: "Hello Val Atelier, I would like to talk about a project.",
  instagram:     "@val__atelier",
  instagramLink: "https://www.instagram.com/val__atelier/",

  /* the credit line in the bottom bar */
  credit:  "Starlit Studio",

  city:    "Hyderabad",
  country: "India",
  addressLines: ["Hyderabad, Telangana", "India"],
  worksIn: "Hyderabad · Bangalore",

  nav: [
    { label: "Home",     href: "index.html" },
    { label: "About",    href: "about.html" },
    { label: "Projects", href: "projects.html" },
    { label: "Press",    href: "press.html" },
    { label: "Contact",  href: "contact.html" }
  ]
};
