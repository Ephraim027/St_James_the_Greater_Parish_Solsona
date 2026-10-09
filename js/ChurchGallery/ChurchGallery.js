const Priest_popup = document.getElementById("ChurchGallery_popup");
const popupImg = document.getElementById("popup-img");
const popupCaption = document.getElementById("ChurchGallerypopup-caption");
const closeBtn = document.getElementById("ChurchGalleryclose-btn");

// Add click event to each image in the gallery
document.querySelectorAll(".ChurchGallery img").forEach(img => {
    img.addEventListener("click", () => {
        popupImg.src = img.src;
        popupCaption.textContent = img.dataset.caption;
        ChurchGallery_popup.style.display = "flex";
    });
});

// Close the popup when the close button is clicked
closeBtn.addEventListener("click", () => {
    ChurchGallery_popup.style.display = "none";
});

