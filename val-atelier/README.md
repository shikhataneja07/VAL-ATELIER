# Val Atelier — studio website

A static, dependency-free site for Val Atelier, an interior design studio in Hyderabad.
Seven HTML files, one stylesheet, three small scripts, no build step and no framework.
Open `index.html` in a browser, or drop the folder on any static host.

---

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home: hero, Selected work, Ongoing work, Press, the studio and Vaishnavi Linga, enquiry CTA |
| `about.html` | The studio, philosophy, the five stages of a project, what is different |
| `projects.html` | The archive: **Selected work** and **Ongoing work** |
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
   the project hero and the grid plate**, so choose it deliberately. A project can point
   the grid plate at a different frame with `cover: n` without moving the file.
3. Copy the template at the bottom of `projects.js` into the array and fill it in.
   Set `category` to `"Residential"` or `"Commercial"` — that is what the archive chips
   group by.

```js
{
  slug: "villa-name",              // becomes project.html?p=villa-name
  title: "Villa Name",
  category: "Residential",         // groups the project in the archive filters
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

### The home page project grid

The work leads the page: **Selected work** and then **Ongoing work** come straight after
the hero, before the press and the studio. Each is a quiet grid of the cover photograph,
three across, with the project's name centred beneath and a line under that saying what it
is and where. Three columns above 1000px, two above 640px, one below.

A magazine rhythm was tried here, with the plates alternating wide and narrow and hanging
at different heights. The studio preferred the even grid, so that is what this is; the
archive keeps its column masonry for the same reason.

`HOME_TILES` in `index.html` decides how many plates each section shows (three), while the
footer count and the *Explore all* button still refer to the whole status, so the archive
is where the rest live.

**The line under a name is `VAL.descriptor`: `typology` and `location`, joined by a comma.**
Both are optional and nothing is invented to fill the gap, so a project with neither shows
just its name. JBN reads "A jewellery boutique, Bangalore" because those two fields are
filled in; do the same for the others as the studio sends the wording.

**A tidy grid is not a reason to crop.** Each plate keeps its photograph's own proportions;
the tiles sit on their row's baseline so the names still line up underneath. A project can
set `cover: n` in `projects.js` to lead with a photograph other than its first; Aparna One
uses it to lead with the one landscape frame in its set.

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
room it needs there, and anything else that wants to sit low and right — the hero's credit
line, the grid's footer row — clears it off that one variable rather than guessing. Change the button's size in one place and the clearances follow.

The floating button and the one in the menu both read `SITE.whatsapp` in
`assets/js/site.js` — digits only, with country code. It deliberately ignores
`SITE.phone`, so while `whatsapp` is empty both fall back to the contact page rather than
dialling the placeholder number.

### The studio and Vaishnavi Linga

They are one section on the home page, sitting after the work: her portrait, her name and
credit (Founder, Principal Architect and Creative Director), a paragraph about her, then
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
0.43 MB and reaches 0.85 MB with the whole project grid scrolled through; the archive
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
- There are **two** observers, because photographs and text want opposite things. A
  photograph should be ready before you reach it, so `.wipe` is watched with a generous
  margin (`200px 0 20%`, threshold 0.01) and starts early. Text is the opposite — the whole
  point is watching it arrive — so `.rv` / `.rv-l` / `.rv-r` are watched tightly
  (`0 0 -7%`, threshold 0.1) and fire as they genuinely cross in.

  Running both on the image's margin is a real trap, and this went wrong once: the writing
  had finished moving before it was on screen, so the slide-ins looked like they had been
  removed. Capping the animation *duration* does not catch it — that guardrail passed while
  the effect was invisible. The suite measures the thing that matters instead: how much
  opacity and travel is left at the instant an element first enters the viewport. It is
  currently the full animation, 35–50px of travel on every page.

Whatever is on screen at load is `fetchpriority="high"` rather than lazy: the hero's first
frame, and the first two cards or gallery plates on a page. First reveal is now 0.76s on
4G and 0.48s unthrottled.

**If you re-subset the fonts, build the glyph list from rendered text, not source.** HTML
entities like `&rarr;` and `&mdash;` become real characters in the browser; subsetting from
raw source drops those glyphs and the arrows disappear from every button.

### Image resolution: what each slot needs

The photographs are the point of this site, so the library is kept at the largest
resolution that exists rather than trimmed to fit an upload limit. Everything is at its
maximum today: 1600px on the longest edge for the project photographs, and native size for
the studio ones. **Do not resize any of it down.**

Raising resolution does not slow the site: `srcset` means a 430px tile still fetches the
800px file. Only the slots that are actually large fetch the large files. Measured at
1440x900 after the restore: the home page opens at 0.57 MB, the archive 0.47 MB, a
51 photograph project page 0.47 MB and 2.35 MB with every plate scrolled through.

**What each slot needs, at 1440 CSS px on a retina screen**, which is what most people
review design work on:

| where it appears | device pixels needed | source it wants |
| --- | --- | --- |
| Home hero, full bleed | 2981 x 1863 | **2560 to 3000px wide** |
| About full bleed plate | 2880 x 1267 | **2880px** |
| About studio photograph | 2624 x 1751 | **2560px** |
| Project page lead | 2496 x 1404 | **2400 to 2560px** |
| Gallery, full width plate | 2360 x 1328 | **2400px** |
| Gallery, seven column plate | 1356 x 763 | 1400px, already met |
| Gallery, five column plate | 955 x 1019 | 1000px, already met |
| Archive card | 1155 x 649 | 1200px, already met |
| Home grid tile | 829 x 553 | 900px, already met |
| Vaishnavi's portrait | 1029 x 1542 | 1200 x 1800px |

**One master per photograph at 2560px on the longest edge covers every slot on the site.**
That is the number to ask the studio for.

At 1x nothing on the site is enlarged today. At 2x the large slots still are, because
1600px is all that exists here: the hero by 1.86x, the project lead by 1.56x, the full
width gallery plate by 1.48x, and the About studio photograph by 2.24x. That last one was
1169 x 780 in the archive the studio sent, and no processing recovers detail that was never
captured in the file. The suite asserts both ceilings so they cannot quietly get worse.

Small variants live in `sm/` at 800px. Regenerate them after adding photographs:

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

**The `images` numbers in `projects.js` are the file's real pixel size.** They are the
`srcset` width descriptors as well as the space reserved before load, so re-read them
whenever a file changes, with the snippet further up.

### Press

`assets/js/press.js` holds the features, ten of them across seven publications. Each entry
needs an `outlet`, `title` and `url`; `date`, `byline`, `project`, `standfirst` and the
cover `image` are optional and are simply not printed when empty rather than guessed at.

The order in the file is the order on the page: the Architectural Digest features lead,
then the international titles, then the Indian design press. `PRESS_HOME_COUNT` at the top
of the file decides how many the home page shows; the press page always shows all.

**Every feature carries a plate.** With `dir` and `image` it is the article's own
photograph; without one it is the publication set as a masthead between two brass rules,
which is a deliberate piece of design rather than an empty box. None of the ten has a
photograph yet: drop one into `assets/press/<id>/` and fill in `dir` and `image`, and the
picture replaces the masthead on its own. `assets/press/README.txt` has the two lines.

The order is the studio's, not chronological. The Goodside Salon leads and the Hyderabad
family home sits last by their request.

**Two things in there still need checking against the live articles.** The headlines were
taken from each publication's own URL because the build environment could not reach them,
so read them once against the real pages. And the Goodside Salon entry links to the
studio's announcement post rather than the article itself: swap in the Architectural Digest
URL when you have it.

### The gallery inside a project

A project carries twenty to fifty photographs, and running them as equal plates in equal
rows reads as a contact sheet. The gallery is a magazine spread instead: a five step cycle
of column spans across a twelve column field, `[7, 5, 12, 5, 7]`, so two paired rows sit
either side of one full width photograph, and the narrow plate of each pair hangs lower
than the wide one beside it.

Every cycle fills twelve columns exactly, so the rhythm never leaves a hole however many
photographs a project has. A photograph left alone at the end takes the full width rather
than hanging off one side: positions 1 and 4 of the cycle are the ones that would otherwise
be waiting for a partner, and `project.html` widens the last plate when it lands on either.

**The spans are decided in `project.html`, not in the stylesheet**, because the same number
also picks the `sizes` hint for that plate. A full width photograph asks the browser for a
1040px file and a narrow one for 428px; if the layout lived in CSS and the hint in JS the
two would drift apart the first time either changed. The stylesheet only reads the
`data-span` the script writes.

The suite checks all of it on three projects of very different lengths, 21, 51 and 6
photographs: every plate a different file, at least three distinct widths, and every row
adding up to twelve.

### Nothing may stay hidden

The reveal system starts every element at opacity 0 and waits for an
`IntersectionObserver`. That was not gated on JavaScript, which meant three ways of reading
the site produced a blank page: a visitor without JavaScript, a printout or PDF, and any
screenshot tool or crawler that captures without scrolling. The resting state is now the
finished one in all three, under `html:not(.js)` and `@media print`, and the suite loads
every page with JavaScript switched off to check that the text is really there.

The fallback `<noscript>` navigation on five pages also pointed at `pages.html`, which has
not existed since the Press section replaced it. It points at Press now, and the suite
fetches every link in it.

### Writing

**No em dashes, and no loose hyphens.** The studio's reading is that they make copy look
machine-written, so there are none anywhere a visitor can see: not in the prose, not in
the section labels (`01 · The studio`), not in the page titles. A colon, a full stop or a
comma does the job in each case. Compound words were rewritten rather than mangled, so
"in-house" became "in the studio" and "fit-outs" became "projects". The suite checks every
page for both, tab titles included; what remains in the source is code comments.

The one hyphen left standing is **design-led**, because that is the studio's own chosen
wording for itself: a design-led interior architecture studio.

### Selected work

`status: "finished"` in `projects.js` is what the site presents as **Selected work**: the
data key is unchanged, the label is not. Three projects carry it today, DSR, Aparna One and
JBN. Should a status ever be left with nothing in it, its tab shows a designed empty state
saying the archive is being prepared, rather than stand-in photographs; the moment a
project is filed there, that block removes itself and the normal grid, index and counter
take over.

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
the project hero, and the decorative statement bands.

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

  The frames are the category leads, de-duplicated, so the hero can never show work that is
  not in the archive. It advances every 6.5s, and
  stops while the reel is hovered or focused, or the tab is in the background; the arrows
  step through it either way. The name and the reel share the bottom band on a laptop and
  stack on a phone, and the suite measures that they never overlap at five sizes.
- **Project grid** — each plate is carried in by `.rv`, staggered across its row
  (`data-d` cycling 0,1,2) so a row arrives as a sequence rather than all at once.
- **Section reveals** — `.rv` (rise from 26px), `.rv-l` / `.rv-r` (slide in from the left or
  right, 46px, softened to 32px below 860px). `data-d="1..5"` staggers a group in sequence
  — a label, then the heading, then the paragraph, then the button. Slide-ins run at every
  width: sections clip sideways rather than hiding, so an un-revealed block cannot push the
  page over on a phone.
  Every piece of running text on every page is carried in by one of these, including the
  grid plates and their names, the services rows, the archive cards, the statement
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
