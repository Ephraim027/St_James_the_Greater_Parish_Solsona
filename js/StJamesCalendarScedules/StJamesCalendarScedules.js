const Priest_popup = document.getElementById("StJamesCalendarScedules_popup");
const popupImg = document.getElementById("popup-img");
const popupCaption = document.getElementById("StJamesCalendarScedulespopup-caption");
const closeBtn = document.getElementById("StJamesCalendarScedulesclose-btn");

// Add click event to each image in the gallery
document.querySelectorAll(".StJamesCalendarScedules img").forEach(img => {
    img.addEventListener("click", () => {
        popupImg.src = img.src;
        popupCaption.textContent = img.dataset.caption;
        StJamesCalendarScedules_popup.style.display = "flex";
    });
});

// Close the popup when the close button is clicked
closeBtn.addEventListener("click", () => {
    StJamesCalendarScedules_popup.style.display = "none";
});

