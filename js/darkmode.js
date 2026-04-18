const html = document.documentElement;
const btn = document.querySelector("#darkmode");
const label = document.querySelector(".toggle-label");
const siteLogo = document.querySelector("#site-logo");

function updateTheme() {
  const isDark = html.classList.contains("dark");

  localStorage.setItem("theme", isDark ? "dark" : "light");

  if (label) {
    label.textContent = isDark ? "Light mode" : "Dark mode";
  }

  if (siteLogo) {
    siteLogo.src = isDark ? "pictures/logotype_light.png" : "pictures/logotype.png";
  }
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }

  updateTheme();
}

function toggleDark() {
  html.classList.toggle("dark");
  updateTheme();
}

if (btn) {
  btn.addEventListener("click", toggleDark);
  applySavedTheme();
}
