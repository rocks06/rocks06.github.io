(function () {
  "use strict";

  var accents = ["#5b7cff", "#74e4ff", "#9c7bff", "#77e7a0"];

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function projectGlyph(project) {
    var glyphs = { "vision-ai": "V/AI", "multiplayer-ai-agents": "M/AI", "coleman": "C/OS", "wolf-ai": "W/AI" };
    return glyphs[project.id] || project.title.slice(0, 2).toUpperCase();
  }

  function projectCard(project, index) {
    var link = element("a", "project-card reveal");
    link.href = "project.html?id=" + encodeURIComponent(project.id);
    link.style.setProperty("--card-accent", accents[index % accents.length]);

    var top = element("div", "project-card__top");
    top.appendChild(element("span", "status status--" + project.status.replace(/\s+/g, "-"), project.status));
    top.appendChild(element("span", null, String(index + 1).padStart(2, "0") + " / 04"));
    link.appendChild(top);

    var visual = element("div", "project-card__visual");
    visual.appendChild(element("div", "project-card__glyph", projectGlyph(project)));
    link.appendChild(visual);

    var body = element("div", "project-card__body");
    body.appendChild(element("h3", null, project.title));
    body.appendChild(element("p", null, project.summary));
    link.appendChild(body);

    var footer = element("div", "project-card__footer");
    footer.appendChild(element("span", null, project.stack.slice(0, 3).join(" · ")));
    footer.appendChild(element("span", "project-card__arrow", "↗"));
    link.appendChild(footer);
    return link;
  }

  function renderHero() {
    var container = document.getElementById("hero-intro");
    SITE.intro.forEach(function (copy) { container.appendChild(element("p", null, copy)); });
  }

  function statusLabel(status) {
    return { live: "active", "in progress": "active build", prototype: "experiment", archived: "archived" }[status] || status;
  }

  function renderNow() {
    var container = document.getElementById("now-grid");
    NOW.forEach(function (item, index) {
      var card = element("a", "now-card reveal");
      card.href = item.href;
      card.appendChild(element("span", "now-card__number", "0" + (index + 1)));
      card.appendChild(element("p", "now-card__label", item.label));
      card.appendChild(element("h3", null, item.value));
      card.appendChild(element("p", "now-card__detail", item.detail));
      card.appendChild(element("span", "now-card__arrow", "↗"));
      container.appendChild(card);
    });
  }

  function renderProof() {
    var container = document.getElementById("proof-grid");
    PROJECTS.slice(0, 3).forEach(function (project, index) {
      var card = element("a", "proof-card reveal");
      card.href = "project.html?id=" + encodeURIComponent(project.id);
      card.style.setProperty("--card-accent", accents[index % accents.length]);
      var visual = element("div", "proof-card__visual");
      visual.appendChild(element("span", "proof-card__status", statusLabel(project.status)));
      visual.appendChild(element("strong", null, projectGlyph(project)));
      visual.appendChild(element("small", null, "system / " + String(index + 1).padStart(2, "0")));
      card.appendChild(visual);
      var content = element("div", "proof-card__content");
      content.appendChild(element("p", "proof-card__eyebrow", project.title));
      content.appendChild(element("h3", null, project.proof));
      content.appendChild(element("p", null, project.challenge));
      content.appendChild(element("span", "text-link", "Open case study ↗"));
      card.appendChild(content);
      container.appendChild(card);
    });
  }

  function renderMilestones() {
    var container = document.getElementById("career-timeline");
    MILESTONES.forEach(function (milestone) {
      var item = element("article", "career-milestone reveal");
      item.appendChild(element("time", null, milestone.date));
      var copy = element("div");
      copy.appendChild(element("h3", null, milestone.title));
      copy.appendChild(element("p", null, milestone.body));
      item.appendChild(copy);
      container.appendChild(item);
    });
  }

  function formatDate(value) {
    return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(value + "T12:00:00"));
  }

  function renderLatestNotes() {
    var container = document.getElementById("latest-notes");
    UPDATES.slice().sort(function (first, second) { return second.date.localeCompare(first.date); }).slice(0, 3).forEach(function (update) {
      var item = element("article", "latest-note reveal");
      item.appendChild(element("time", null, formatDate(update.date)));
      item.appendChild(element("h3", null, update.title));
      item.appendChild(element("p", null, update.body));
      container.appendChild(item);
    });
  }

  function init() {
    renderHero(); renderNow(); renderProof(); renderMilestones(); renderLatestNotes();
    if (window.PortfolioUI) window.PortfolioUI.refresh();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
