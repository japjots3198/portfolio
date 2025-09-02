// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.dataset.theme =
    document.body.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", document.body.dataset.theme);
});

// Load saved theme
if (localStorage.getItem("theme")) {
  document.body.dataset.theme = localStorage.getItem("theme");
} else {
  document.body.dataset.theme = "light";
}
