(function () {
  "use strict";
  function el(tag, className, text) { var node = document.createElement(tag); if (className) node.className = className; if (text != null) node.textContent = text; return node; }
  function formatDate(value) { var date = new Date(value + "T12:00:00"); return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(date); }
  function init() {
    var list = document.getElementById("update-list");
    UPDATES.slice().sort(function (a, b) { return b.date.localeCompare(a.date); }).forEach(function (update, index) {
      var item = el("article", "note reveal"); item.appendChild(el("time", "note__date", formatDate(update.date)));
      var body = el("div"); body.appendChild(el("h2", null, update.title)); body.appendChild(el("p", null, update.body)); item.appendChild(body);
      item.appendChild(el("span", "note__mark", String(index + 1).padStart(2, "0"))); list.appendChild(item);
    });
    if (window.PortfolioUI) window.PortfolioUI.refresh();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
