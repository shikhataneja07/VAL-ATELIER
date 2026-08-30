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

  /* REVIEW ONLY — shows the Full / Calm switch on the home page so the studio
     can compare the two amounts of animation between projects. Set this to
     false once the choice is made and the switch never renders. */
  reviewToggle: true,

  tagline: "Interior Design Studio",

  /* TO CONFIRM — replace with the studio's real address */
  email:   "studio@valatelier.in",
  /* TO CONFIRM — replace with the studio's real number (E.164 for the link) */
  phone:        "+91 00000 00000",
  phoneLink:    "+910000000000",
  /* TO CONFIRM — the WhatsApp number, digits only, with country code.
     This drives the floating button and the one in the menu. Leave it empty
     and both quietly fall back to the contact page instead of dialling a
     wrong number. */
  whatsapp:        "",
  whatsappMessage: "Hello Val Atelier, I would like to talk about a project.",
  /* TO CONFIRM — replace with the studio's real handle */
  instagram:     "@valatelier",
  instagramLink: "https://www.instagram.com/",

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
