const html = document.querySelector("html");
const btn = document.querySelector("#darkmode");

function toggleDark() {
  html.classList.toggle("dark");

  if (btn.textContent === "Dark mode") {
    btn.textContent = "Light mode";
  } else {
    btn.textContent = "Dark mode";
  }
}
btn.addEventListener("click", toggleDark);
