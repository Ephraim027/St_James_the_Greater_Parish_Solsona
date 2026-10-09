document.addEventListener("DOMContentLoaded", () => {

    const LEM_popup = document.getElementById("LEM_popup");
    const popupImg = document.getElementById("popup-img");
    const popupCaption = document.getElementById("LEMpopup-caption");
    const closeBtn = document.getElementById("LEMclose-btn");

    // OPEN POPUP (IMPORTANT: correct class)
    document.querySelectorAll(".LayMinister img").forEach(img => {
        img.addEventListener("click", () => {
            popupImg.src = img.src;
            popupCaption.textContent = img.alt;
            LEM_popup.style.display = "flex";
        });
    });

    // CLOSE POPUP
    closeBtn.addEventListener("click", () => {
        LEM_popup.style.display = "none";
    });

});
