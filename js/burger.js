const burger = document.querySelector(".burger");
const nav = document.querySelector("header nav");

if (burger && nav) {
  burger.addEventListener("click", burgerClick);
}

function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
