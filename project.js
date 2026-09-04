(function () {
  "use strict";
  function el(tag, className, text) { var node = document.createElement(tag); if (className) node.className = className; if (text != null) node.textContent = text; return node; }
  function addMeta(container, label, value) { var row = el("div", "project-meta__row"); row.appendChild(el("span", null, label)); row.appendChild(el("span", null, value)); container.appendChild(row); }
  function init() {
    var id = new URLSearchParams(window.location.search).get("id");
    var project = PROJECTS.find(function (item) { return item.id === id; });
    var root = document.getElementById("project-content");
    if (!project) { root.appendChild(el("h1", null, "Project not found.")); return; }
    document.title = project.title + " — Rocco Donadon";

    var hero = el("div", "project-hero reveal");
    var heading = el("div"); heading.appendChild(el("p", "eyebrow", "Selected work / " + project.status)); heading.appendChild(el("h1", null, project.title)); heading.appendChild(el("p", "project-hero__summary", project.summary)); hero.appendChild(heading);
    var meta = el("div", "project-meta"); addMeta(meta, "Status", project.status); addMeta(meta, "Timeline", project.date); addMeta(meta, "Role", "Founder · Product · Engineering"); if (project.clientNote) addMeta(meta, "Context", project.clientNote); hero.appendChild(meta); root.appendChild(hero);

    var body = el("section", "project-body reveal"); body.appendChild(el("p", "project-body__label", "The system"));
    var copy = el("div"); copy.appendChild(el("p", "project-body__copy", project.detail));
    var stack = el("div", "project-stack"); project.stack.forEach(function (item) { stack.appendChild(el("span", null, item)); }); copy.appendChild(stack); body.appendChild(copy); root.appendChild(body);

    if (project.milestone) {
      var milestone = el("section", "milestone reveal"); milestone.appendChild(el("p", "milestone__meta", project.milestone.date + " / " + project.milestone.version)); milestone.appendChild(el("h2", null, project.milestone.title)); milestone.appendChild(el("p", null, project.milestone.body));
      if (project.milestone.href) { var link = el("a", null, "Read the verified release notes ↗"); link.href = project.milestone.href; milestone.appendChild(link); }
      root.appendChild(milestone);
    }
    if (window.PortfolioUI) window.PortfolioUI.refresh();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
