const Stewardship_popup = document.getElementById("Stewardship_popup");
const popupImg = document.getElementById("popup-img");
const popupCaption = document.getElementById("Stewardshippopup-caption");
const closeBtn = document.getElementById("Stewardshipclose-btn");

// Add click event to each image in the gallery
document.querySelectorAll(".Stewardship img").forEach(img => {
    img.addEventListener("click", () => {
        popupImg.src = img.src;
        popupCaption.textContent = img.dataset.caption;
        Stewardship_popup.style.display = "flex";
    });
});

// Close the popup when the close button is clicked
closeBtn.addEventListener("click", () => {
    Stewardship_popup.style.display = "none";
});

