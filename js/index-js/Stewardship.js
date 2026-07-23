const StewardshipBtn = document.getElementById("Stewardship");
const StewardshipDropdown = document.getElementById("dropdownContentStewardship");

StewardshipBtn.addEventListener("click", () => {
  StewardshipDropdown.classList.toggle("show");
});