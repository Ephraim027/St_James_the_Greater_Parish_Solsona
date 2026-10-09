const chapelBtn = document.getElementById("Chapel");
const chapelDropdown = document.getElementById("dropdownContentChapel");

chapelBtn.addEventListener("click", () => {
  chapelDropdown.classList.toggle("show");
});