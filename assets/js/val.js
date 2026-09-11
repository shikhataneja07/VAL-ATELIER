/* ==========================================================================
   VAL ATELIER — behaviour
   Header / footer, page transitions, viewport reveals, parallax, cursor peek,
   the project rail and the lightbox. Everything degrades to a plain, working
   page if JavaScript never arrives.
   ========================================================================== */
(function(){
  "use strict";

  var SITE = window.SITE || {};
  var PROJECTS = window.PROJECTS || [];
  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var VAL = window.VAL = {};
  VAL.reduced = REDUCED;          /* pages read this before starting anything that loops */

  function el(tag, cls, html){
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s){
    return String(s == null ? "" : s)
      .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  }
  function pad(n){ return (n < 10 ? "0" : "") + n; }
  function qs(s, r){ return (r || document).querySelector(s); }
  function qsa(s, r){ return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  VAL.esc = esc; VAL.pad = pad; VAL.qs = qs; VAL.qsa = qsa;

  /* ---------------------------------------------------------------- data -- */
  VAL.byStatus = function(status){
    return PROJECTS.filter(function(p){ return p.status === status; });
  };
  VAL.find = function(slug){
    for (var i = 0; i < PROJECTS.length; i++) if (PROJECTS[i].slug === slug) return PROJECTS[i];
    return null;
  };
  /* the categories that genuinely exist for a status, in preferred order,
     each with the project chosen to lead it */
  VAL.categories = function(status){
    var order = window.CATEGORY_ORDER || [];
    var leads = window.LEADS || {};
    var byCat = {};
    PROJECTS.filter(function(p){ return p.status === status; })
            .forEach(function(p){ (byCat[p.category] = byCat[p.category] || []).push(p); });
    return Object.keys(byCat)
      .sort(function(a, b){
        var ia = order.indexOf(a), ib = order.indexOf(b);
        return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
      })
      .map(function(name){
        var set = byCat[name].slice();
        var lead = VAL.find(leads[status + ":" + name]);
        if (lead && set.indexOf(lead) > 0){          /* the chosen lead goes first */
          set.splice(set.indexOf(lead), 1);
          set.unshift(lead);
        }
        return { name: name, projects: set, lead: set[0], count: set.length };
      });
  };

  VAL.src = function(p, i){ return p.dir + "/" + p.images[i][0]; };

  /* Which photograph leads a project. Defaults to the first; a project can set
     `cover: n` (1-based) to lead with a different one — used where a uniform
     landscape frame reads better than the project's own first shot. */
  VAL.cover = function(p){
    var i = (p.cover || 1) - 1;
    return (i >= 0 && i < p.images.length) ? i : 0;
  };
  VAL.ratio = function(p, i){ return p.images[i][1] / p.images[i][2]; };

  /* The line printed under a project's name: what it is, and where. Both are
     optional, so a project with neither simply shows its name and a project
     with only one shows only that. Nothing is invented to fill the slot. */
  VAL.descriptor = function(p){
    return [p.typology, p.location].filter(Boolean).join(", ");
  };

  /* Image markup with the space reserved, so nothing jumps while loading, and
     a small variant offered alongside the full one. Slots on this site are
     rarely wider than ~700 CSS px, so the browser almost always takes the
     800px file instead of the 1600px original. */
  var SIZES_DEFAULT = "(max-width: 720px) 92vw, 46vw";
  var SMALL_BOX = 800;
  function smallWidth(w){ return Math.min(w, SMALL_BOX); }
  VAL.imgTag = function(p, i, alt, eager, sizes){
    var im = p.images[i];
    var full = p.dir + "/" + im[0];
    var small = p.dir + "/sm/" + im[0].replace(/\.[a-z]+$/i, ".webp");
    return '<img src="' + esc(small) + '"' +
           ' srcset="' + esc(small) + ' ' + smallWidth(im[1]) + 'w, ' + esc(full) + ' ' + im[1] + 'w"' +
           ' sizes="' + esc(sizes || SIZES_DEFAULT) + '"' +
           ' width="' + im[1] + '" height="' + im[2] + '"' +
           ' alt="' + esc(alt || p.title) + '" ' +
           (eager ? 'fetchpriority="high" decoding="async"' : 'loading="lazy" decoding="async"') + '>';
  };

  /* the same treatment for a plain path (studio photographs, portrait) */
  VAL.plainImg = function(src, w, h, alt, opts){
    opts = opts || {};
    var small = src.replace(/([^/]+)$/, "sm/$1").replace(/\.[a-z]+$/i, ".webp");
    return '<img src="' + esc(small) + '"' +
           ' srcset="' + esc(small) + ' ' + smallWidth(w) + 'w, ' + esc(src) + ' ' + w + 'w"' +
           ' sizes="' + esc(opts.sizes || SIZES_DEFAULT) + '"' +
           ' width="' + w + '" height="' + h + '" alt="' + esc(alt) + '" ' +
           (opts.eager ? 'fetchpriority="high" decoding="async"' : 'loading="lazy" decoding="async"') + '>';
  };

  /* a press card, shared by the home teaser and the press page */
  VAL.pressCard = function(e){
    var meta = [e.project, e.date, e.byline].filter(Boolean).join(" \u00b7 ");
    /* Every feature carries a plate. With `dir` and `image` it is the
       photograph; without one it is a set masthead of the publication, which
       is a deliberate piece of design rather than an empty grey box. Drop a
       cover into assets/press/<id>/ and fill in dir and image to replace it. */
    var hasFig = !!(e.image && e.dir);
    var fig = hasFig
      ? '<div class="pcard__fig">' +
          /* the plate is small, so it takes the small file like every other
             photograph on the site rather than the full size original */
          VAL.plainImg(e.dir + "/" + e.image[0], e.image[1], e.image[2],
                       e.project || e.title,
                       { sizes: "(max-width: 720px) 92vw, 30vw" }) +
        '</div>'
      : '<div class="pcard__fig pcard__fig--mark">' +
          '<span class="pcard__mark">' +
            '<i class="pcard__rule"></i>' +
            '<em>' + esc(e.outlet) + '</em>' +
            '<i class="pcard__rule"></i>' +
          '</span>' +
        '</div>';
    return '<a class="pcard rv" href="' + esc(e.url) + '" target="_blank" rel="noopener">' +
             fig +
             '<div class="pcard__body">' +
               '<div class="pcard__outlet"><span class="o">' + esc(e.outlet) + '</span>' +
                 (meta ? '<span class="m">' + esc(meta) + '</span>' : "") + '</div>' +
               '<h3>' + esc(e.title) + '</h3>' +
               (e.standfirst ? '<p>' + esc(e.standfirst) + '</p>' : "") +
               '<span class="pcard__go alink">Read the feature <span class="ar">&rarr;</span></span>' +
             '</div>' +
           '</a>';
  };

  /* --------------------------------------------------------- whatsapp -- */
  var WA_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.14.17-.24.25-.41.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43l-.47-.01c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.65 4.2 3.71.59.25 1.04.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29z"/></svg>';

  /* Deliberately reads SITE.whatsapp only — never the phone placeholder — so an
     unset number sends people to the contact page rather than to a stranger. */
  VAL.waLink = function(){
    var num = String(SITE.whatsapp || "").replace(/[^0-9]/g, "");
    var msg = encodeURIComponent(SITE.whatsappMessage || ("Hello " + (SITE.name || "") + ", I would like to talk about a project."));
    return num ? "https://wa.me/" + num + "?text=" + msg : "contact.html";
  };

  /* appears once the hero is behind you, so it never sits over the opening frame */
  function whatsapp(){
    var live = !!String(SITE.whatsapp || "").replace(/[^0-9]/g, "");
    var a = el("a", "wa");
    a.href = VAL.waLink();
    if (live){ a.target = "_blank"; a.rel = "noopener"; }
    a.setAttribute("aria-label", "Message the studio on WhatsApp");
    a.setAttribute("data-label", "WhatsApp us");
    a.innerHTML = WA_ICON;
    document.body.appendChild(a);
    var tick = false;
    function onScroll(){
      a.classList.toggle("on", window.scrollY > Math.min(window.innerHeight * 0.55, 420));
      tick = false;
    }
    window.addEventListener("scroll", function(){ if (!tick){ tick = true; requestAnimationFrame(onScroll); } }, { passive: true });
    onScroll();
  }

  /* ------------------------------------------------------- header/footer -- */
  function currentPage(){
    var f = location.pathname.split("/").pop();
    return f === "" ? "index.html" : f;
  }

  function buildHeader(){
    var host = qs("[data-header]");
    if (!host) return;
    var here = currentPage();
    var links = (SITE.nav || []).map(function(n){
      var on = n.href === here || (here === "project.html" && n.href === "projects.html")
            || (here === "services.html" && n.href === "about.html");
      return '<a href="' + esc(n.href) + '"' + (on ? ' class="is-here"' : "") + '>' + esc(n.label) + '</a>';
    }).join("");
    var sheetLinks = (SITE.nav || []).map(function(n){
      return '<a href="' + esc(n.href) + '">' + esc(n.label) + '</a>';
    }).join("");

    host.className = "hdr";
    host.innerHTML =
      '<div class="hdr__in">' +
        '<a class="brand" href="index.html" aria-label="' + esc(SITE.name) + ', home">' +
          '<img src="assets/brand/val-wordmark.webp" alt="' + esc(SITE.name) + '">' +
          '<span class="brand__tag">' + esc(SITE.tagline) + '<br>' + esc(SITE.city) + '</span>' +
        '</a>' +
        '<nav class="nav" aria-label="Primary">' + links + '</nav>' +
        '<a class="btn hdr__cta" href="contact.html">Enquire <span class="ar">&rarr;</span></a>' +
        '<button class="burger" aria-label="Menu" aria-expanded="false" aria-controls="sheet">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
      '</div>';

    var sheet = el("div", "sheet");
    sheet.id = "sheet";
    sheet.innerHTML =
      '<nav class="sheet__nav" aria-label="Primary">' + sheetLinks + '</nav>' +
      '<div class="sheet__foot">' +
        '<a href="' + esc(VAL.waLink()) + '" target="_blank" rel="noopener">' + WA_ICON + ' WhatsApp us</a>' +
      '</div>';
    host.parentNode.insertBefore(sheet, host.nextSibling);

    var burger = qs(".burger", host);
    function toggle(open){
      sheet.classList.toggle("is-open", open);
      host.classList.toggle("is-open", open);
      document.body.classList.toggle("locked", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    }
    burger.addEventListener("click", function(){ toggle(!sheet.classList.contains("is-open")); });
    qsa("a", sheet).forEach(function(a){ a.addEventListener("click", function(){ toggle(false); }); });
    document.addEventListener("keydown", function(e){
      if (e.key === "Escape" && sheet.classList.contains("is-open")) toggle(false);
    });

    /* hide on the way down, return on the way up */
    var overHero = document.body.hasAttribute("data-hero-dark");
    var last = window.scrollY, tick = false;
    function onScroll(){
      var y = window.scrollY;
      host.classList.toggle("is-solid", y > 30);
      if (overHero) host.classList.toggle("is-over", y <= 30 && !sheet.classList.contains("is-open"));
      if (!sheet.classList.contains("is-open")){
        host.classList.toggle("is-up", y > last && y > 240);
      }
      last = y; tick = false;
    }
    window.addEventListener("scroll", function(){
      if (!tick){ tick = true; requestAnimationFrame(onScroll); }
    }, { passive: true });
    onScroll();
  }

  function buildFooter(){
    var host = qs("[data-footer]");
    if (!host) return;
    var year = new Date().getFullYear();
    host.className = "foot";
    host.innerHTML =
      '<div class="wrap">' +
        '<div class="foot__grid">' +
          '<div>' +
            '<img class="foot__mark" src="assets/brand/val-atelier-mark-light.webp" alt="' + esc(SITE.name) + '">' +
            '<p class="lede measure-sm">Interiors made to be lived in. Quiet, material and unhurried.</p>' +
          '</div>' +
          '<div>' +
            '<h4>Navigate</h4>' +
            '<ul>' + (SITE.nav || []).map(function(n){
              return '<li><a href="' + esc(n.href) + '">' + esc(n.label) + '</a></li>';
            }).join("") +
              '<li><a href="services.html">Services</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h4>Studio</h4>' +
            '<ul>' +
              '<li><a href="mailto:' + esc(SITE.email) + '">' + esc(SITE.email) + '</a></li>' +
              '<li><a href="tel:' + esc(SITE.phoneLink) + '">' + esc(SITE.phone) + '</a></li>' +
              '<li><a href="' + esc(SITE.instagramLink) + '" target="_blank" rel="noopener">Instagram ' + esc(SITE.instagram) + '</a></li>' +
              '<li><span>' + esc((SITE.addressLines || []).join(", ")) + '</span></li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="foot__bottom">' +
          '<span>&copy; ' + year + " " + esc(SITE.name) + '</span>' +
          '<span>' + esc(SITE.tagline) + '</span>' +
          '<a href="#top">Back to top</a>' +
        '</div>' +
      '</div>';
  }

  /* ------------------------------------------------------ page transition -- */
  function curtain(onLifted){
    var c = qs(".curtain");
    if (!c || REDUCED){ onLifted(); return; }

    function lift(){
      c.classList.remove("is-in");
      c.classList.add("is-out");
      setTimeout(function(){ c.classList.add("is-park"); c.classList.remove("is-out"); }, 900);
    }

    /* Lift as soon as the page is usable. The hard cap keeps a slow photograph
       from holding the curtain — and the reveals — hostage. */
    var lifted = false;
    function go(){
      if (lifted) return;
      lifted = true;
      lift();
      setTimeout(onLifted, 120);
    }
    /* The curtain exists to cover the webfont swap, so it lifts as soon as the
       fonts are in — not on window.load, which waits for every photograph on
       the page and used to hold the whole reveal sequence back by seconds. */
    if (document.readyState === "complete") setTimeout(go, 40);
    else {
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(go);
      window.addEventListener("load", go);
      /* The cap is measured from the navigation, not from here — on a slow
         connection this code itself runs late, and a cap counted from that
         point would leave the page under the curtain for seconds. The faces
         are font-display: swap, so the worst this can cost is a brief swap. */
      var CAP = 700;
      setTimeout(go, Math.max(40, CAP - performance.now()));
    }

    /* returning through the back button restores a covered page — lift it again */
    window.addEventListener("pageshow", function(e){ if (e.persisted) lift(); });

    document.addEventListener("click", function(e){
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest ? e.target.closest("a") : null;
      if (!a || !a.href || a.target === "_blank" || a.hasAttribute("download")) return;
      if (a.origin !== location.origin) return;
      var href = a.getAttribute("href");
      if (!href || href.charAt(0) === "#") return;
      if (a.pathname === location.pathname && a.search === location.search) return;
      e.preventDefault();
      c.classList.remove("is-park", "is-out");
      /* force a reflow so the parked position is committed before sliding in */
      void c.offsetWidth;
      c.classList.add("is-in");
      setTimeout(function(){ location.href = a.href; }, 560);
    });
  }

  /* ------------------------------------------------------------ reveals -- */
  /* Two observers, because photographs and text want opposite things.
     A photograph should be ready before you reach it, so its frame is never
     blank — it is watched with a generous margin and starts early.
     Text is the opposite: the whole point is watching it arrive, so it is
     watched tightly and only fires as it genuinely enters the viewport. Run
     them on one observer with the image's margin and the writing has already
     finished moving by the time you can see it, which is exactly what
     happened when this was first tuned for speed alone. */
  var MEDIA_SEL = ".wipe";
  var TEXT_SEL  = ".rv, .rv-l, .rv-r, [data-lines]";
  var ALL_SEL   = ".rv, .rv-l, .rv-r, .wipe, [data-lines]";

  var ioMedia = null, ioText = null;

  function watch(node){
    var root = node || document;
    if (ioMedia) qsa(MEDIA_SEL, root).forEach(function(n){
      if (!n.classList.contains("in")) ioMedia.observe(n);
    });
    if (ioText) qsa(TEXT_SEL, root).forEach(function(n){
      /* a .wipe that is also .rv belongs to the media pass, not this one */
      if (!n.classList.contains("in") && !n.classList.contains("wipe")) ioText.observe(n);
    });
  }
  VAL.watch = watch;

  function makeObserver(opts){
    return new IntersectionObserver(function(entries, self){
      entries.forEach(function(en){
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        self.unobserve(en.target);
      });
    }, opts);
  }

  function reveals(){
    if (REDUCED || !("IntersectionObserver" in window)){
      qsa(ALL_SEL).forEach(function(n){ n.classList.add("in"); });
      return;
    }
    /* photographs: start before they arrive, so nothing is caught blank */
    ioMedia = makeObserver({ threshold: 0.01, rootMargin: "200px 0px 20% 0px" });
    /* text: start as it crosses in, so the movement is actually watched */
    ioText  = makeObserver({ threshold: 0.1,  rootMargin: "0px 0px -7% 0px" });
    watch(document);
  }

  /* split a heading on "|" into masked lines that rise in sequence */
  VAL.splitLines = function(node){
    qsa("[data-lines]", node || document).forEach(function(h){
      if (h.dataset.split === "done") return;
      var parts = h.innerHTML.split("|");
      h.innerHTML = parts.map(function(t){
        return '<span class="ln"><i>' + t.trim() + "</i></span>";
      }).join("");
      h.dataset.split = "done";
    });
  };

  /* ----------------------------------------------------------- parallax -- */
  function parallax(){
    var items = qsa("[data-para]");
    if (!items.length || REDUCED) return;
    var tick = false;
    function frame(){
      var vh = window.innerHeight;
      items.forEach(function(n){
        var r = n.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        var f = parseFloat(n.dataset.para) || 0.1;
        var mid = r.top + r.height / 2 - vh / 2;
        n.style.transform = "translate3d(0," + (-mid * f).toFixed(2) + "px,0)";
      });
      tick = false;
    }
    window.addEventListener("scroll", function(){
      if (!tick){ tick = true; requestAnimationFrame(frame); }
    }, { passive: true });
    window.addEventListener("resize", frame, { passive: true });
    frame();
  }
  VAL.parallax = parallax;

  /* --------------------------------------------------------- cursor peek -- */
  VAL.peek = function(){
    if (REDUCED || !window.matchMedia("(hover: hover)").matches) return;
    var links = qsa("[data-peek]");
    if (!links.length) return;
    var box = el("div", "peek", '<img alt="">');
    document.body.appendChild(box);
    var img = qs("img", box);
    var tx = 0, ty = 0, cx = 0, cy = 0, raf = null, live = false;

    function loop(){
      cx += (tx - cx) * 0.13;
      cy += (ty - cy) * 0.13;
      box.style.transform = "translate3d(" + cx + "px," + cy + "px,0)" + (live ? " scale(1)" : " scale(.9)");
      raf = requestAnimationFrame(loop);
    }
    function place(e){
      tx = Math.min(e.clientX + 30, window.innerWidth - 260);
      ty = Math.max(16, Math.min(e.clientY - 140, window.innerHeight - 310));
    }
    links.forEach(function(a){
      a.addEventListener("mouseenter", function(e){
        img.src = a.dataset.peek;
        place(e); cx = tx; cy = ty;          /* land in place, then follow */
        live = true; box.classList.add("on");
        if (!raf) raf = requestAnimationFrame(loop);
      });
      a.addEventListener("mousemove", place);
      a.addEventListener("mouseleave", function(){
        live = false; box.classList.remove("on");
      });
    });
  };

  /* ----------------------------------------------------------- lightbox -- */
  VAL.lightbox = function(shots){
    var box = el("div", "lb");
    box.setAttribute("aria-hidden", "true");
    box.innerHTML =
      '<div class="lb__bar"><span class="c"></span><button class="lb__x">Close</button></div>' +
      '<div class="lb__stage"><img alt=""></div>' +
      '<div class="lb__nav">' +
        '<button data-lb="prev" aria-label="Previous image">&larr;</button>' +
        '<button data-lb="next" aria-label="Next image">&rarr;</button>' +
      '</div>';
    document.body.appendChild(box);
    var img = qs(".lb__stage img", box), count = qs(".c", box), i = 0, scrollY = 0;

    function show(n){
      i = (n + shots.length) % shots.length;
      img.classList.remove("on");
      var pre = new Image();
      pre.onload = function(){ img.src = shots[i].src; img.alt = shots[i].alt || ""; img.classList.add("on"); };
      pre.src = shots[i].src;
      if (pre.complete) pre.onload();
      count.textContent = pad(i + 1) + " / " + pad(shots.length);
    }
    function open(n){
      scrollY = window.scrollY;
      show(n);
      box.classList.add("is-open");
      box.setAttribute("aria-hidden", "false");
      document.body.classList.add("locked");
    }
    function close(){
      box.classList.remove("is-open");
      box.setAttribute("aria-hidden", "true");
      document.body.classList.remove("locked");
      window.scrollTo(0, scrollY);
    }
    qs(".lb__x", box).addEventListener("click", close);
    qs("[data-lb=prev]", box).addEventListener("click", function(){ show(i - 1); });
    qs("[data-lb=next]", box).addEventListener("click", function(){ show(i + 1); });
    box.addEventListener("click", function(e){ if (e.target === box) close(); });
    document.addEventListener("keydown", function(e){
      if (!box.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") show(i - 1);
      else if (e.key === "ArrowRight") show(i + 1);
    });
    return open;
  };

  /* ---------------------------------------------------------------- boot -- */
  /* hold the hero type back until its photograph has actually painted */
  function hero(){
    var h = qs(".hero");
    if (!h) return;
    var img = qs("img", h);
    /* A splash screen, where one is running, owns the moment the hero
       lights: there is nothing to be gained by spending the reveal behind a
       cover. It calls VAL.lightHero() as it lifts. The cap below is in case
       that script never arrives at all — the hero is never left dark. */
    VAL.heroHeld = !!window.VAL_SPLASH;
    function lit(){ if (!VAL.heroHeld) h.classList.add("is-lit"); }
    VAL.lightHero = function(){ VAL.heroHeld = false; lit(); };
    if (VAL.heroHeld) setTimeout(VAL.lightHero, 5200);
    if (!img){ lit(); return; }
    if (img.complete && img.naturalWidth) lit();
    else {
      img.addEventListener("load", lit);
      img.addEventListener("error", lit);
    }
    setTimeout(lit, 2600);           /* never leave the hero blank */
  }

  function boot(){
    buildHeader();
    buildFooter();
    whatsapp();
    VAL.splitLines(document);
    if (typeof window.PAGE === "function") window.PAGE(VAL);
    hero();                       /* after PAGE — the page renders the first frame */
    parallax();
    VAL.peek();
    /* Start watching straight away. A photograph that has already arrived
       should never be waiting on the intro to be allowed on screen. */
    reveals();
    curtain(function(){ document.documentElement.classList.add("is-ready"); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
