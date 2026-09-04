(function () {
  "use strict";
  var accents = ["#5b7cff", "#74e4ff", "#9c7bff", "#77e7a0"];
  var glyphs = { "vision-ai": "V/AI", "multiplayer-ai-agents": "M/AI", "coleman": "C/OS", "wolf-ai": "W/AI", "webpulse": "WP", "mealo": "ML", "blackbox": "AC", "elan": "ÉL", "ai-closet": "CL", "xr-concepts": "XR" };
  function el(tag, className, text) { var node = document.createElement(tag); if (className) node.className = className; if (text != null) node.textContent = text; return node; }
  function card(project, index) {
    var link = el("a", "project-card reveal"); link.href = "project.html?id=" + encodeURIComponent(project.id); link.style.setProperty("--card-accent", accents[index % accents.length]);
    var top = el("div", "project-card__top"); top.appendChild(el("span", "status status--" + project.status.replace(/\s+/g, "-"), project.status)); top.appendChild(el("span", null, String(index + 1).padStart(2, "0"))); link.appendChild(top);
    var visual = el("div", "project-card__visual"); visual.appendChild(el("div", "project-card__glyph", glyphs[project.id] || project.title.slice(0, 2).toUpperCase())); link.appendChild(visual);
    var body = el("div", "project-card__body"); body.appendChild(el("h3", null, project.title)); body.appendChild(el("p", null, project.summary)); link.appendChild(body);
    var footer = el("div", "project-card__footer"); footer.appendChild(el("span", null, project.date)); footer.appendChild(el("span", "project-card__arrow", "↗")); link.appendChild(footer); return link;
  }
  function init() {
    var list = document.getElementById("project-list");
    PROJECTS.forEach(function (project, index) { list.appendChild(card(project, index)); });
    document.getElementById("project-count").textContent = String(PROJECTS.length).padStart(2, "0") + " projects";
    if (window.PortfolioUI) window.PortfolioUI.refresh();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
