const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".header__links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
