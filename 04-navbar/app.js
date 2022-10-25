// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const toggleBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-center");
const linksContainer = document.querySelector(".links");

toggleBtn.addEventListener("click", () => {
  linksContainer.classList.toggle("show-links");
});
