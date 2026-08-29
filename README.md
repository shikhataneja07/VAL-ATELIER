# Val Atelier — studio website

A static, dependency-free site for Val Atelier, an interior design studio in Hyderabad.
Seven HTML files, one stylesheet, three small scripts, no build step and no framework.
Open `index.html` in a browser, or drop the folder on any static host.

---

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — hero, Studio & principal designer, Press, Finished projects, Ongoing projects, enquiry CTA |
| `about.html` | The studio, philosophy, the five stages of a project, what is different |
| `projects.html` | The archive: **Ongoing projects** and **Finished projects** |
| `project.html` | A single project, addressed as `project.html?p=<slug>` |
| `press.html` | Published features, each linking straight through to the publication |
| `services.html` | What the studio takes on, linked from About and the footer |
| `contact.html` | Studio details and the enquiry form |

---

## Adding a project

Everything the site knows about the work lives in **`assets/js/projects.js`**. Nothing else
has to be touched — the home rail, both archive panels, the index lists, the project page and
its previous/next navigation all read from that one array.

1. Make a folder: `assets/projects/<your-slug>/`
2. Put the photographs in it as `01.webp`, `02.webp`, `03.webp` … — **`01` is the cover,
   the project hero and the poster lead**, so choose it deliberately. A project can point
   the poster at a different frame with `cover: n` without moving the file.
3. Copy the template at the bottom of `projects.js` into the array and fill it in.
   Set `category` to `"Residential"` or `"Commercial"` — that is what the home page
   posters and the archive chips group by. A new category name simply creates a new
   poster.

```js
{
  slug: "villa-name",              // becomes project.html?p=villa-name
  title: "Villa Name",
  category: "Residential",         // groups the project under a home page poster
  status: "finished",              // "ongoing" or "finished" — this files it under the right tab
  typology: "Residence",
  location: "Hyderabad",
  area: "3,200 sq ft",             // leave "" out and the row is simply not printed
  scope: "Interior Design",
  summary: "One line, used as the pull quote on the project page.",
  story: [ "First paragraph.", "Second paragraph." ],
  notes: ["Micro-topping", "Teak", "Brass"],   // the material chips
  dir: "assets/projects/villa-name",
  images: [ ["01.webp", 1600, 900], ["02.webp", 1067, 1600] ]
}
```

**The numbers in `images` are the pixel width and height of each file.** They reserve the
right space before the photograph loads, so the page never jumps. To read them quickly:

```bash
python3 - <<'PY'
from PIL import Image; import glob, os
for f in sorted(glob.glob("assets/projects/villa-name/*.webp")):
    im = Image.open(f); print(f'["{os.path.basename(f)}",{im.width},{im.height}],')
PY
```

### The home page category posters

Finished and Ongoing are two entirely separate sections. Each is a deck of full-viewport
posters, one per category that status actually covers: the category's lead photograph
runs full bleed, with the lead project named above the category in large caps and a
single button through to that category's own filtered archive
(`projects.html?tab=ongoing&cat=Hospitality`). Each poster is `position: sticky` at the
top of the viewport, so the next rides up over the last as the page scrolls.

A poster is a full-bleed cover rather than a plate of artwork, so its photograph fills the
frame. Every project photograph is still shown **whole** wherever it is presented as a
photograph: the archive cards, the project hero, and every gallery plate. A project can
set `cover: n` in `projects.js` to lead with a photograph other than its first; Aparna One
uses it to lead with the one landscape frame in its set.

Per-project browsing lives on the archive. `projects.html` carries a row of category
chips per status, each with its own count; the chips are built from the same derived
categories, so they can never offer a category with nothing behind it. `?tab=` and `?cat=`
open the page already filtered, which is what the posters link to.

**The categories are not configured anywhere.** They are derived from
`projects.js` at render time, so a category can only appear on the page if a
project actually carries it, and it disappears when the last project in it is
refiled. Today that means Finished shows Residential and Retail only, while
Ongoing shows all five.

`assets/js/categories.js` decides just two things — which project leads each
category, and the order the categories appear in:

```js
window.LEADS = { "finished:Residential": "aparna-one", "ongoing:Retail": "tsk" };
window.CATEGORY_ORDER = ["Residential", "Retail", "Hospitality", "Commercial", "Corporate"];
```

Delete a `LEADS` line and that category simply starts with whichever project comes first.

### WhatsApp

The floating button owns the bottom-right corner. `--wa-foot` in the stylesheet is how much
room it needs there, and anything else that wants to sit low and right — the poster's
portfolio button, the hero's credit line — clears it off that one variable rather than
guessing. Change the button's size in one place and the clearances follow.

The floating button and the one in the menu both read `SITE.whatsapp` in
`assets/js/site.js` — digits only, with country code. It deliberately ignores
`SITE.phone`, so while `whatsapp` is empty both fall back to the contact page rather than
dialling the placeholder number.

### The studio and the principal designer

They are one section on the home page: Vaishnavi's portrait, a paragraph about her, then
the studio itself, ending in a single **About the studio** button. The studio photographs
and how the practice actually runs live on the About page, which no longer repeats her
portrait.

### Weight

Every photograph is served in two sizes. The full tier is capped at **1400px on its
longest edge**, and `assets/projects/<slug>/sm/` holds an 800px-wide WebP beside it;
`VAL.imgTag` emits both as a `srcset` with a `sizes` hint, so a browser fetches roughly the
pixels the slot needs. The studio photographs are WebP too — there are no JPEGs left in the
build. Regenerate the small set after adding photographs:

```bash
python3 - <<'EOF'
from PIL import Image
import glob, os
for src in glob.glob("assets/projects/*/*.webp"):
    d, f = os.path.split(src)
    if os.path.basename(d) == "sm": continue
    os.makedirs(os.path.join(d, "sm"), exist_ok=True)
    im = Image.open(src).convert("RGB")
    if im.width > 800:
        im = im.resize((800, round(im.height * 800 / im.width)), Image.LANCZOS)
    im.save(os.path.join(d, "sm", os.path.splitext(f)[0] + ".webp"), "WEBP", quality=72, method=6)
EOF
```

**The `images` numbers in `projects.js` must match the files on disk.** They are the
`srcset` width descriptors as well as the space reserved before load, so if you re-encode
or resize anything, re-read them with the snippet further up.

The webfonts are subsetted to the characters the site renders (520 KB to 236 KB), and the
brand PNGs are stored at the size they are shown rather than at 1000px. The font faces live
at the top of `val.css` rather than in their own stylesheet, so there is one render-blocking
request instead of two. Measured with a headless browser at 1440x900: the home page loads
0.43 MB and reaches 0.85 MB once every poster has been scrolled through; the archive
0.37 MB / 0.52 MB; a 52-photograph project page 0.39 MB / 1.55 MB with the whole gallery
pulled in. The complete `assets/` tree is 28 MB.

**Bytes are not the same thing as "how long the images take".** The reveal system decides
when a photograph is *allowed* on screen, and it once made an arriving photograph wait:
the observer was started from the curtain's callback, and the curtain waited on
`window.load`, which waits for every image on the page. Throttled to 4G that put the first
reveal at 2.0s and a slow connection at 3.3s, long after the bytes had landed. Three things
fix it and the suite measures all of them:

- `reveals()` runs at boot, never behind the curtain.
- The curtain's cap is counted from the navigation, not from the moment its own code runs
  (on a slow line that code is itself late). The faces are `font-display: swap`, so a
  lifted curtain costs at most a brief swap.
- The observer starts a reveal *before* the element scrolls in (`rootMargin: 200px 0 18%`,
  `threshold: 0.02`), and the animations are shorter — a wipe is 0.78s, a reveal 0.7s.

Whatever is on screen at load is `fetchpriority="high"` rather than lazy: the hero's first
frame, and the first two cards or gallery plates on a page. First reveal is now 0.76s on
4G and 0.48s unthrottled.

**If you re-subset the fonts, build the glyph list from rendered text, not source.** HTML
entities like `&rarr;` and `&mdash;` become real characters in the browser; subsetting from
raw source drops those glyphs and the arrows disappear from every button.

### Press

`assets/js/press.js` holds the features. Each entry needs an `outlet`, `title`
and `url`; `date`, `byline`, `project` and the cover `image` are optional and
are simply not printed when empty rather than guessed at.

### Finished projects

Three projects currently carry `status: "finished"` — DSR, Aparna One and JBN. Should a
status ever be left with nothing in it, its tab shows a designed empty state explaining
that the archive is being prepared, rather than stand-in photographs; the moment a project
is filed there, that block removes itself and the normal grid, index and counter take
over.

---

## Editing studio details

- **`assets/js/site.js`** — studio name, email, phone, Instagram, address, and the five
  navigation items. The header, both menus, the footer and the contact page all read from it.

  > The email, phone and Instagram handle in that file are **placeholders** marked
  > `TO CONFIRM`. They were not supplied with the portfolio. Replace them before the site
  > goes live.

- **`assets/js/pages.js`** — the Pages directory. An entry with an `href` renders as a link;
  an entry with `href: ""` renders as "In preparation" and is not clickable, so a section can
  be announced before it holds anything.

---

## Design system

Palette and typographic character carried forward from Bear Spaces & Co.

| Token | Hex | Role |
| --- | --- | --- |
| `--bone` | `#F2EEE7` | primary page ground |
| `--putty` | `#E8E1D6` | alternating bands |
| `--frame` | `#DED7CB` | image wells before load |
| `--line` | `#D8D1C5` | hairlines |
| `--muted` | `#8A8276` | secondary type, labels |
| `--brass` | `#9A7B4F` | the single accent |
| `--ink` | `#23201C` | primary type, inverted sections |

Supporting tones — `--ink-soft #43403A` (body copy), `--bone-dim #CFC7B8` and
`--bone-mute #A89F8E` (type on ink), `--line-dark #39342C` (hairlines on ink).

**Type.** Newsreader for display and figure titles; Hanken Grotesk for body copy, labels and
buttons. Labels are 10.5px, `.3em` tracked, uppercase. Both faces are self-hosted from
`assets/fonts/` (latin + latin-ext subsets, SIL Open Font License 1.1) so pages make no
third-party request.

**Rhythm.** Sections `clamp(76px, 11vh, 152px)`; gutters `clamp(20px, 5vw, 64px)`; content
`1320px`, wide content `1600px`.

**Photographs are never cropped.** Wherever a photograph is presented as a photograph it
is shown whole, at its true proportions. The hero on a project page is capped to a share
of the viewport so it still reads as a hero, and its width is driven by the image's own
aspect ratio (`--ar`), so a portrait hugs its frame instead of sitting in empty bars.
Nothing relies on intrinsic sizing, so a lazy-loaded image cannot collapse its column.
Every image shown as artwork uses `.shot`
(`width:100%; height:auto`) with its true pixel dimensions on the `<img>`, so it renders at
its exact natural proportion and reserves the right space before it loads. Galleries use
`.mgrid` — a two-column layout where the columns absorb the difference in height (one
column below 720px, `.mgrid--three` for three). `object-fit: cover` survives only where a
photograph is a full-bleed backdrop rather than artwork: the home hero, the category
posters, the project hero, and the decorative statement bands.

**Buttons.** Hairline box, uppercase micro-type, a fill that slides up from below on hover.
`.btn--solid` inverts and warms to brass; `.btn--light` is the version for ink sections.

**Borders.** One hairline weight everywhere. Captions sit under a rule, never in a box.

---

## Motion

All of it is CSS transitions driven by a single `IntersectionObserver`, plus one
`requestAnimationFrame` loop for parallax. No animation library.

- **Page transitions** — an ink curtain lifts on arrival and drops before the browser
  navigates. Without JavaScript it sits off-screen and never appears.
- **Hero** — the work, full bleed, and the studio's name across the foot of it. No
  headline, no standfirst: the header at the top and `Val Atelier` at the bottom, with the
  project on screen named in the opposite corner. It opens like a title card — two
  letterbox bars retract, the frame fades up under a graded vignette and keeps drifting
  slowly rather than sitting still, and the name rises from blurred to sharp. Nothing
  appears until the first frame has decoded, so nothing is read against an empty frame; a
  2.6s failsafe stops a slow image leaving the hero blank. Under reduced motion the bars,
  the drift, the blur and the auto-advance are all dropped.

  The frames are the category leads, de-duplicated — the same projects the posters use, so
  the hero can never show work that is not in the archive. It advances every 6.5s, and
  stops while the reel is hovered or focused, or the tab is in the background; the arrows
  step through it either way. The name and the reel share the bottom band on a laptop and
  stack on a phone, and the suite measures that they never overlap at five sizes.
- **Category posters** — each poster is `position: sticky` at the top of the viewport, so
  the next rides up over the last as the page scrolls. Falls back to ordinary stacked
  sections at natural height under reduced motion.
- **Section reveals** — `.rv` (rise from 26px), `.rv-l` / `.rv-r` (slide in from the left or
  right, 46px, softened to 32px below 860px). `data-d="1..5"` staggers a group in sequence
  — a label, then the heading, then the paragraph, then the button. Slide-ins run at every
  width: sections clip sideways rather than hiding, so an un-revealed block cannot push the
  page over on a phone.
  Every piece of running text on every page is carried in by one of these, including the
  poster labels and category lines, the services rows, the archive cards, the statement
  quotes, and the prev/next pair at the foot of a project — which slide in from the side
  each points to. The suite checks both halves of that: no text element is left untagged,
  and no reveal is left stuck once it has been scrolled past.
- **Image reveals** — `.wipe` uncovers a photograph with a `clip-path` sweep. On `.shot`
  plates there is no accompanying scale, so the image is never momentarily clipped.
- **Line reveals** — a heading with `data-lines` splits on `|` into masked lines that rise in
  sequence.
- **Parallax** — `data-para="0.06"` on an image, transform only.
- **Navigation** — the header retreats on the way down and returns on the way up; the mobile
  sheet slides in from the right with its links staggered.
- **Hover** — a 6px lift and a touch of brightness on image plates (rather than a scale,
  which would crop), arrow travel, underline wipes, and a cursor-following preview on the
  index lists (pointer devices only).

Everything above is switched off under `prefers-reduced-motion: reduce`.

---

## Housekeeping

- Photographs come from the studio's own shared folders, re-encoded for the web (WebP, max
  1600px) so no metadata is carried over. 316 distinct images, about 29 MB, all lazy-loaded.
- Exact duplicates were dropped: 12 repeats inside DSR, one each in Keerthi Club House and
  the Marketing Office, and the whole "model flat" folder, which held the same 52
  photographs as the club house.
- The `val` wordmark is served as a transparent PNG in two tints, plus favicons.
- No analytics, no cookies, no third-party requests. The enquiry form composes a mail draft
  in the visitor's own client and stores nothing.
