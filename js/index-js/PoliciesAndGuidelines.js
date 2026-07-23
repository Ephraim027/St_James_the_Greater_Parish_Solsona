const PoliciesAndGuidelinesBtn = document.getElementById("PoliciesAndGuidelines");
const PoliciesAndGuidelinesDropdown = document.getElementById("dropdownContentPoliciesAndGuidelines");

PoliciesAndGuidelinesBtn.addEventListener("click", () => {
  PoliciesAndGuidelinesDropdown.classList.toggle("show");
});