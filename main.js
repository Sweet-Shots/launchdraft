/* LaunchDraft — shared interactions
   Nav, hamburger, scroll reveals, and load-in. */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Nav: border on scroll ---- */
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---- Hamburger / mobile menu ---- */
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.getElementById('navmenu');
  if (toggle && menu) {
    var setOpen = function (open) {
      document.body.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    };
    toggle.addEventListener('click', function () {
      setOpen(!document.body.classList.contains('menu-open'));
    });
    // Close when a menu link is tapped, or on Escape / resize to desktop
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 820) setOpen(false); });
  }

  /* ---- Scroll reveals ---- */
  var revealEls = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  }
  // Tell the in-head failsafe that reveals are wired up (so it won't force-show).
  window.__revealReady = true;

  /* ---- Example cards: pointer-tracked 3D tilt ---- */
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!reduceMotion && finePointer) {
    var MAX_TILT = 7; // degrees
    document.querySelectorAll('.work__card').forEach(function (card) {
      var frame = card.querySelector('.work__frame');
      if (!frame) return;
      var raf = null, nx = 0, ny = 0;
      var apply = function () {
        raf = null;
        card.style.setProperty('--ry', (nx * MAX_TILT).toFixed(2) + 'deg');
        card.style.setProperty('--rx', (-ny * MAX_TILT).toFixed(2) + 'deg');
      };
      card.addEventListener('pointermove', function (e) {
        var r = frame.getBoundingClientRect();
        nx = (e.clientX - r.left) / r.width - 0.5;   // -0.5 .. 0.5
        ny = (e.clientY - r.top) / r.height - 0.5;
        if (!raf) raf = requestAnimationFrame(apply);
      });
      card.addEventListener('pointerenter', function () {
        card.classList.add('is-tilting');
        card.style.setProperty('--ty', '-6px');
      });
      card.addEventListener('pointerleave', function () {
        if (raf) { cancelAnimationFrame(raf); raf = null; }
        card.classList.remove('is-tilting');
        card.style.setProperty('--rx', '0deg');
        card.style.setProperty('--ry', '0deg');
        card.style.setProperty('--ty', '0px');
      });
    });
  }

  /* ---- Hero showcase: pointer-tracked tilt around its resting pose ---- */
  if (!reduceMotion && finePointer) {
    var showcase = document.querySelector('.hero__showcase');
    var scard = showcase && showcase.querySelector('.showcase__card');
    if (scard) {
      var REST_X = 2.5, REST_Y = -6, RANGE = 7; // degrees
      var sraf = null, snx = 0, sny = 0;
      var sapply = function () {
        sraf = null;
        scard.style.setProperty('--sx', (REST_X - sny * RANGE).toFixed(2) + 'deg');
        scard.style.setProperty('--sy', (REST_Y + snx * RANGE).toFixed(2) + 'deg');
      };
      showcase.addEventListener('pointermove', function (e) {
        var r = scard.getBoundingClientRect();
        snx = (e.clientX - r.left) / r.width - 0.5;
        sny = (e.clientY - r.top) / r.height - 0.5;
        if (!sraf) sraf = requestAnimationFrame(sapply);
      });
      showcase.addEventListener('pointerenter', function () { scard.classList.add('is-tilting'); });
      showcase.addEventListener('pointerleave', function () {
        if (sraf) { cancelAnimationFrame(sraf); sraf = null; }
        scard.classList.remove('is-tilting');
        scard.style.setProperty('--sx', REST_X + 'deg');
        scard.style.setProperty('--sy', REST_Y + 'deg');
      });
    }
  }

  /* ---- Current year ---- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
