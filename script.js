const toggleBtn = document.getElementById("chk");
const nav = document.querySelector("nav");
const main = document.querySelector("main");
const section = document.querySelector("section");

toggleBtn.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  nav.classList.toggle("dark-mode");
  main.classList.toggle("dark-mode");
  section.classList.toggle("dark-mode");
});
