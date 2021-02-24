const menu = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav-container");

menu.addEventListener("click", () => {
  nav.classList.toggle("show");
});
