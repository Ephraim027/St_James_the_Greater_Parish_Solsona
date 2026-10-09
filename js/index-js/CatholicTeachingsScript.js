const catholicBtn = document.getElementById("CatholicTeachings");
const catholicDropdown = document.getElementById("dropdownContentCatholicTeachings");

catholicBtn.addEventListener("click", () => {
  catholicDropdown.classList.toggle("show");
});