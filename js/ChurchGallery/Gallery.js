const GalleryBtn = document.getElementById("Gallery");
const GalleryDropdown = document.getElementById("dropdownContentGallery");

GalleryBtn.addEventListener("click", () => {
  GalleryDropdown.classList.toggle("show");
});