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

    var labels = { live: "active", "in progress": "active build", prototype: "experiment", archived: "archived" };
    var displayStatus = labels[project.status] || project.status;
    var hero = el("div", "project-hero reveal");
    var heading = el("div"); heading.appendChild(el("p", "eyebrow", "Selected work / " + displayStatus)); heading.appendChild(el("h1", null, project.title)); heading.appendChild(el("p", "project-hero__summary", project.summary)); hero.appendChild(heading);
    var meta = el("div", "project-meta"); addMeta(meta, "Status", displayStatus); addMeta(meta, "Timeline", project.date); addMeta(meta, "Role", "Founder · Product · Engineering"); if (project.clientNote) addMeta(meta, "Context", project.clientNote); hero.appendChild(meta); root.appendChild(hero);

    var body = el("section", "project-body reveal"); body.appendChild(el("p", "project-body__label", "The system"));
    var copy = el("div"); copy.appendChild(el("p", "project-body__copy", project.detail));
    var stack = el("div", "project-stack"); project.stack.forEach(function (item) { stack.appendChild(el("span", null, item)); }); copy.appendChild(stack); body.appendChild(copy); root.appendChild(body);

    if (project.problem && project.proof && project.challenge && project.outcome) {
      var caseStudy = el("section", "case-study reveal");
      [
        { label: "Problem", title: "The constraint", body: project.problem },
        { label: "Working proof", title: "What exists", body: project.proof },
        { label: "Engineering", title: "The hard part", body: project.challenge },
        { label: "Outcome", title: "Where it landed", body: project.outcome }
      ].forEach(function (section) {
        var item = el("article", "case-study__item");
        item.appendChild(el("p", "case-study__label", section.label));
        item.appendChild(el("h2", null, section.title));
        item.appendChild(el("p", null, section.body));
        caseStudy.appendChild(item);
      });
      root.appendChild(caseStudy);
    }

    if (project.currentStatus) {
      var status = el("section", "project-status reveal");
      status.appendChild(el("p", "project-status__meta", "Current status / " + project.currentStatus.date));
      status.appendChild(el("h2", null, project.currentStatus.title));
      status.appendChild(el("p", "project-status__body", project.currentStatus.body));
      status.appendChild(el("p", "project-status__focus", project.currentStatus.focus));
      root.appendChild(status);
    }

    if (project.developmentTimeline) {
      var timeline = el("section", "development-timeline reveal");
      var timelineHeader = el("div", "development-timeline__header");
      timelineHeader.appendChild(el("p", "project-body__label", "Engineering timeline"));
      timelineHeader.appendChild(el("h2", null, "Engineering record, accepted in hardware."));
      timeline.appendChild(timelineHeader);
      var timelineList = el("div", "development-timeline__list");
      project.developmentTimeline.forEach(function (event) {
        var item = el("article", "development-event");
        item.appendChild(el("p", "development-event__date", event.date));
        var eventContent = el("div", "development-event__content");
        eventContent.appendChild(el("h3", null, event.title));
        eventContent.appendChild(el("p", null, event.body));
        if (event.commits && event.commits.length) {
          var commits = el("div", "development-event__commits");
          event.commits.forEach(function (commit) {
            var commitLink = el("a", null, commit);
            commitLink.href = "https://github.com/rocks06/multiplayer-ai/commit/" + commit;
            commitLink.target = "_blank";
            commitLink.rel = "noreferrer";
            commits.appendChild(commitLink);
          });
          eventContent.appendChild(commits);
        }
        item.appendChild(eventContent);
        timelineList.appendChild(item);
      });
      timeline.appendChild(timelineList);
      root.appendChild(timeline);
    }

    if (project.milestone) {
      var milestone = el("section", "milestone reveal"); milestone.appendChild(el("p", "milestone__meta", project.milestone.date + " / " + project.milestone.version)); milestone.appendChild(el("h2", null, project.milestone.title)); milestone.appendChild(el("p", null, project.milestone.body));
      if (project.milestone.href) { var link = el("a", null, "Read the verified release notes ↗"); link.href = project.milestone.href; milestone.appendChild(link); }
      root.appendChild(milestone);
    }
    if (window.PortfolioUI) window.PortfolioUI.refresh();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
