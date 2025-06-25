export function initPopup() {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const closeBtn = document.getElementById("popup-close");
    const prevBtn = document.getElementById("popup-prev");
    const nextBtn = document.getElementById("popup-next");
    let images = [];
    let currentIdx = 0;

    function show(idx) {
        currentIdx = idx;
        popupImg.src = images[currentIdx];
        popup.classList.remove("hidden");
        popup.classList.add("flex");
        document.body.classList.add("scroll--canceled");
    }

    function hide() {
        popup.classList.remove("flex");
        popup.classList.add("hidden");
        popupImg.src = "";
        document.body.classList.remove("scroll--canceled");
    }

    if (!popup || !popupImg || !closeBtn || !prevBtn || !nextBtn) {
        return;
    }

    closeBtn.addEventListener("click", hide);
    prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIdx = (currentIdx - 1 + images.length) % images.length;
        popupImg.src = images[currentIdx];
    });
    nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIdx = (currentIdx + 1) % images.length;
        popupImg.src = images[currentIdx];
    });
    popup.addEventListener("click", (e) => {
        if (e.target === popup) hide();
    });

    window.addEventListener("keydown", (e) => {
        if (popup.classList.contains("flex")) {
            if (e.key === "Escape") hide();
            if (e.key === "ArrowLeft") prevBtn.click();
            if (e.key === "ArrowRight") nextBtn.click();
        }
    });

    // Listen for open-popup events
    window.addEventListener("open-popup", (e) => {
        images = e.detail.images;
        show(e.detail.idx);
    });
}

document.addEventListener("astro:page-load", () => {
    initPopup();
});
