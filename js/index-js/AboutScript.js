const aboutBtn = document.getElementById("About");
const aboutDropdown = document.getElementById("dropdownContentAbout");

aboutBtn.addEventListener("click", () => {
  aboutDropdown.classList.toggle("show");
});