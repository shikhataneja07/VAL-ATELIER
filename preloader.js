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
       once        "session" | "always"       default "session"
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
    letters:    { at: 0.00, dur: 0.90, stagger: 0.085 },  /* phase 1 */
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
  function markSeen(){
    try { sessionStorage.setItem(SEEN_KEY, "1"); } catch (e) {}
  }

  return function initPreloader(options){
    options = options || {};
    var opt = {
      el:         options.el         || "[data-splash]",
      once:       options.once       || "session",
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
    if (!el || prefersStill() || (opt.once === "session" && seen())) { done(); return null; }

    root.classList.add("is-splashing");
    /* However badly the rest of this goes, the page is handed back. */
    capId = setTimeout(done, opt.maxWait);

    var letters = el.querySelectorAll("[data-splash-letter]");
    var sub     = el.querySelector("[data-splash-sub]");
    var lock    = el.querySelector("[data-splash-lock]") || el.firstElementChild;

    /* ---- without GSAP ---------------------------------------------------
       The same three phases, carried by the stylesheet. This is not a
       degraded afterthought: it is what most visitors on a blocked or slow
       CDN will actually see. */
    if (!window.gsap || !window.gsap.timeline) {
      el.classList.add("is-css");
      setTimeout(function(){ el.classList.add("is-out"); }, T.wipe.at * 1000);
      setTimeout(done, TOTAL + 80);
      return null;
    }

    /* ---- with GSAP ------------------------------------------------------ */
    var gsap = window.gsap;
    var tl = gsap.timeline({ defaults: { ease: "power3.out" }, onComplete: done });

    /* phase 1 — the name is set, letter by letter, and the word beneath it
       opens out as it arrives */
    tl.set(el, { autoAlpha: 1 });
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
