/* ==========================================================================
   VAL ATELIER — splash screen
   --------------------------------------------------------------------------
   A self-contained opening sequence: the name is set, held, and then the
   whole cover slides up off the page and is taken out of the document.

   It is deliberately free of the rest of the site. Drop in the markup, the
   stylesheet block and this file, call initPreloader(), and it runs. The one
   thing it knows about its surroundings is the callback it is handed when it
   lifts, which is where the page behind it is told to begin.

   THREE THINGS IT WILL NOT DO
   ---------------------------
   * Trap anyone. GSAP comes from a CDN, and a CDN can be blocked, slow or
     down. If it is not there the same sequence runs on CSS transitions
     instead, and a hard cap lifts the cover whatever happens.
   * Play over somebody who asked for stillness. prefers-reduced-motion skips
     the sequence and shows the page.
   * Play again on every page. By default it runs once a visit.

   USAGE
       initPreloader({ onComplete: function () { ... } });

   OPTIONS
       el          selector or element        default "[data-splash]"
       once        "entry"   shown whenever somebody arrives: a direct load,
                             a refresh, or a link from off the site, but not
                             when moving from page to page within it (default)
                 "session"   once a visit
                 "always"    every single load
       onComplete  called exactly once, whether the sequence ran, was
                   skipped, or had to be cut short
       maxWait     ms before the cover is pulled regardless  default 6000

   In React, call it from an effect that runs once and let the callback set
   whatever state reveals the page:
       useEffect(() => { initPreloader({ onComplete: () => setReady(true) }); }, []);
   In Vue, the same from onMounted.
   ========================================================================== */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.initPreloader = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  var SEEN_KEY = "val:splash";

  /* The shape of the sequence, in seconds, so the phases can be read at a
     glance and moved without hunting through the timeline. */
  var T = {
    mark:       { at: 0.00, dur: 1.00 },                  /* phase 1 */
    letters:    { at: 0.00, dur: 0.90, stagger: 0.085 },  /*   or, set in type */
    sub:        { at: 0.35, dur: 0.90 },
    hold:       { at: 1.20, dur: 0.80, scale: 1.045 },    /* phase 2 */
    wipe:       { at: 2.00, dur: 0.80 }                   /* phase 3 */
  };
  var TOTAL = (T.wipe.at + T.wipe.dur) * 1000;

  function prefersStill(){
    try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; }
    catch (e) { return false; }
  }
  function seen(){
    try { return !!sessionStorage.getItem(SEEN_KEY); } catch (e) { return false; }
  }
  /* Arriving is not the same as moving about. A splash belongs on the way in
     — typed, refreshed, or followed from somewhere else — and is an
     irritation on the way back from the About page. */
  function fromInsideTheSite(){
    try {
      if (!document.referrer) return false;
      return new URL(document.referrer).origin === location.origin;
    } catch (e) { return false; }
  }
  function markSeen(){
    try { sessionStorage.setItem(SEEN_KEY, "1"); } catch (e) {}
  }

  return function initPreloader(options){
    options = options || {};
    var opt = {
      el:         options.el         || "[data-splash]",
      once:       options.once       || "entry",
      onComplete: options.onComplete || null,
      maxWait:    options.maxWait    || 6000
    };

    var el = typeof opt.el === "string" ? document.querySelector(opt.el) : opt.el;
    var root = document.documentElement;
    var finished = false;
    var capId = null;

    /* Everything ends here, once, by whichever route. The cover leaves the
       document rather than being hidden, so it can never sit over the page
       swallowing clicks. */
    function done(){
      if (finished) return;
      finished = true;
      clearTimeout(capId);
      markSeen();
      if (el && el.parentNode) el.parentNode.removeChild(el);
      root.classList.remove("is-splashing");
      if (typeof opt.onComplete === "function") opt.onComplete();
    }

    /* Nothing to cover, already shown this visit, or stillness asked for:
       hand straight over. */
    var skip = (opt.once === "session" && seen()) ||
               (opt.once === "entry"   && fromInsideTheSite());
    if (!el || prefersStill() || skip) { done(); return null; }

    root.classList.add("is-splashing");
    /* However badly the rest of this goes, the page is handed back. */
    capId = setTimeout(done, opt.maxWait);

    /* Phase 1 works either way round: a piece of artwork rises out of its
       clip, or, where the name is set in type instead, the letters come in
       one after another. Val Atelier uses the mark, because the a in it is a
       circle and a stroke and no typeface will give you that. */
    var mark    = el.querySelector("[data-splash-mark]");
    var letters = el.querySelectorAll("[data-splash-letter]");
    var sub     = el.querySelector("[data-splash-sub]");
    var lock    = el.querySelector("[data-splash-lock]") || el.firstElementChild;

    /* ---- without GSAP ---------------------------------------------------
       The same three phases, carried by the stylesheet. This is not a
       degraded afterthought: it is what most visitors on a blocked or slow
       CDN will actually see. */
    if (!window.gsap || !window.gsap.timeline) {
      el.classList.add("is-css");
      setTimeout(function(){ el.classList.add("is-ready"); }, T.mark.dur * 1000);
      setTimeout(function(){ el.classList.add("is-out"); }, T.wipe.at * 1000);
      setTimeout(done, TOTAL + 80);
      return null;
    }

    /* ---- with GSAP ------------------------------------------------------ */
    /* The stylesheet holds the mark hidden so it cannot flash before the
       sequence starts. If GSAP is here but its tween never runs, that would
       leave a blank cover, so the resting state is restored by class once
       phase one is over. GSAP writes inline styles, which win over this, so
       it costs nothing when everything works. */
    setTimeout(function(){ el.classList.add("is-ready"); },
               (T.mark.at + T.mark.dur) * 1000 + 120);

    var gsap = window.gsap;
    var tl = gsap.timeline({ defaults: { ease: "power3.out" }, onComplete: done });

    /* phase 1 — the mark rises out of nothing, clipped so it arrives rather
       than slides */
    tl.set(el, { autoAlpha: 1 });
    if (mark){
      tl.fromTo(mark,
        { yPercent: 112, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: T.mark.dur },
        T.mark.at);
    } else {
      tl.fromTo(letters,
        { yPercent: 115, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: T.letters.dur, stagger: T.letters.stagger },
        T.letters.at);
      if (sub){
        tl.fromTo(sub,
          { opacity: 0, letterSpacing: "0.16em" },
          { opacity: 1, letterSpacing: "0.52em", duration: T.sub.dur },
          T.sub.at);
      }
    }

    /* phase 2 — held, with a drift too slow to read as movement */
    tl.to(lock,
      { scale: T.hold.scale, duration: T.hold.dur, ease: "power1.out" },
      T.hold.at);

    /* phase 3 — the cover leaves upward and the page behind it begins */
    tl.to(el,
      { yPercent: -100, duration: T.wipe.dur, ease: "power4.inOut" },
      T.wipe.at);

    return tl;
  };
});
