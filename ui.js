(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setUpReveals() {
    var nodes = document.querySelectorAll(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      nodes.forEach(function (node) { node.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -8%" });
    nodes.forEach(function (node, index) {
      node.style.setProperty("--i", index % 5);
      observer.observe(node);
    });
  }

  function setUpScroll() {
    var progress = document.getElementById("scroll-progress");
    var header = document.querySelector(".site-header");
    function update() {
      var available = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.width = (available > 0 ? window.scrollY / available * 100 : 0) + "%";
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 16);
    }
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  function setUpPointer() {
    if (reduceMotion || !window.matchMedia("(pointer: fine)").matches) return;
    var glow = document.getElementById("cursor-glow");
    if (glow) {
      window.addEventListener("pointermove", function (event) {
        glow.style.opacity = "1";
        glow.style.left = event.clientX + "px";
        glow.style.top = event.clientY + "px";
      }, { passive: true });
    }

    document.querySelectorAll("[data-tilt]").forEach(function (card) {
      card.addEventListener("pointermove", function (event) {
        var box = card.getBoundingClientRect();
        var rotateX = ((event.clientY - box.top) / box.height - .5) * -4;
        var rotateY = ((event.clientX - box.left) / box.width - .5) * 4;
        card.style.transform = "perspective(1000px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
      });
      card.addEventListener("pointerleave", function () { card.style.transform = ""; });
    });
  }

  function init() {
    setUpReveals();
    setUpScroll();
    setUpPointer();
  }

  window.PortfolioUI = { refresh: setUpReveals };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
