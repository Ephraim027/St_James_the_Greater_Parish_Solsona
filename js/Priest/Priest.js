const Priest_popup = document.getElementById("Priest_popup");
const popupImg = document.getElementById("popup-img");
const popupCaption = document.getElementById("Priestpopup-caption");
const closeBtn = document.getElementById("Priestclose-btn");

// Add click event to each image in the gallery
document.querySelectorAll(".Priest img").forEach(img => {
    img.addEventListener("click", () => {
        popupImg.src = img.src;
        popupCaption.textContent = img.dataset.caption;
        Priest_popup.style.display = "flex";
    });
});

// Close the popup when the close button is clicked
closeBtn.addEventListener("click", () => {
    Priest_popup.style.display = "none";
});

