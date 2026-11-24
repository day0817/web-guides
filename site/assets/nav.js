(function () {
  var THEME_KEY = "webguides-theme";
  var root = document.documentElement;

  function applyTheme(mode) {
    if (mode === "dark" || mode === "light") {
      root.setAttribute("data-theme", mode);
    } else {
      root.removeAttribute("data-theme");
    }
  }

  try {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved) applyTheme(saved);
  } catch (e) {}

  document.addEventListener("DOMContentLoaded", function () {
    var toggleBtn = document.getElementById("nav-toggle");
    var drawer = document.getElementById("nav-drawer");
    var backdrop = document.getElementById("nav-backdrop");
    var themeBtn = document.getElementById("theme-toggle");

    if (!toggleBtn || !drawer || !backdrop) return;

    function setOpen(open) {
      drawer.classList.toggle("is-open", open);
      backdrop.classList.toggle("is-open", open);
      toggleBtn.setAttribute("aria-expanded", String(open));
      drawer.setAttribute("aria-hidden", String(!open));
    }

    toggleBtn.addEventListener("click", function () {
      var isOpen = drawer.classList.contains("is-open");
      setOpen(!isOpen);
    });

    backdrop.addEventListener("click", function () {
      setOpen(false);
    });

    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") setOpen(false);
    });

    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        var current = root.getAttribute("data-theme");
        var isSystemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        var next = current === "dark" || (!current && isSystemDark) ? "light" : "dark";
        applyTheme(next);
        try {
          localStorage.setItem(THEME_KEY, next);
        } catch (e) {}
      });
    }
  });
})();
