document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", function () {
  var menu = document.querySelector(".menu-toggle");
  var nav = document.querySelector("#main-nav");
  if (menu && nav) {
    menu.addEventListener("click", function () {
      var expanded = menu.getAttribute("aria-expanded") !== "true";
      menu.setAttribute("aria-expanded", String(expanded));
      nav.classList.toggle("is-open", expanded);
    });
  }

  fillStats();
  renderBrandDirectory();
  renderFeatured();

  var page = document.body.getAttribute("data-page");
  if (page === "collection") {
    bindModal();
    bindCollection();
  }
  if (page === "videos") {
    renderVideosPage();
  }
});
