const ministryBtn = document.getElementById("Ministry");
const ministryDropdown = document.getElementById("dropdownContentMinistry");

ministryBtn.addEventListener("click", () => {
  ministryDropdown.classList.toggle("show");
});