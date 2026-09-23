(function () {
  "use strict";

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function renderStory() {
    var container = document.getElementById("about-story-list");
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

  function renderCapabilities() {
    var container = document.getElementById("about-capability-grid");
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

  function renderEducation() {
    var container = document.getElementById("education-grid");
    EDUCATION.forEach(function (education) {
      var card = element("article", "education-card reveal");
      card.appendChild(element("p", "education-card__period", education.period));
      card.appendChild(element("h3", null, education.school));
      card.appendChild(element("p", "education-card__credential", education.credential));
      card.appendChild(element("p", "education-card__body", education.body));
      container.appendChild(card);
    });
  }

  function renderMilestones() {
    var container = document.getElementById("about-milestone-list");
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

  function init() {
    renderStory();
    renderEducation();
    renderCapabilities();
    renderMilestones();
    if (window.PortfolioUI) window.PortfolioUI.refresh();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
