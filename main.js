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

  function renderProjects() {
    var container = document.getElementById("featured-projects");
    PROJECTS.slice(0, 4).forEach(function (project, index) { container.appendChild(projectCard(project, index)); });
  }

  function renderCapabilities() {
    var container = document.getElementById("capability-grid");
    SITE.capabilities.forEach(function (capability) {
      var card = element("article", "capability reveal");
      card.appendChild(element("span", "capability__number", capability.number));
      card.appendChild(element("div", "capability__icon"));
      card.appendChild(element("h3", null, capability.title));
      card.appendChild(element("p", null, capability.body));
      var tags = element("div", "tag-list");
      capability.tags.forEach(function (tag) { tags.appendChild(element("span", "tag", tag)); });
      card.appendChild(tags);
      container.appendChild(card);
    });
  }

  function renderStory() {
    var container = document.getElementById("story-list");
    STORY.forEach(function (beat) {
      var item = element("article", "story-item reveal");
      item.appendChild(element("span", "story-item__date", beat.date));
      var content = element("div");
      content.appendChild(element("h3", null, beat.title));
      var body = element("div", "story-item__body");
      body.innerHTML = beat.body;
      content.appendChild(body);
      item.appendChild(content);
      container.appendChild(item);
    });
  }

  function init() {
    renderHero(); renderProjects(); renderCapabilities(); renderStory();
    if (window.PortfolioUI) window.PortfolioUI.refresh();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
