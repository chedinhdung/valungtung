document.addEventListener("DOMContentLoaded", () => {

    const flowerSection = document.getElementById("flowerSection");
    const loveSection = document.getElementById("loveSection");

    const heart = document.getElementById("heart");
    const letterWrapper = document.getElementById("letterWrapper");
    const btnOpen = document.querySelector(".btn-open");

    if (flowerSection && loveSection) {
        flowerSection.addEventListener("click", () => {

            flowerSection.classList.remove("active");
            loveSection.classList.add("active");

            const bears = loveSection.querySelectorAll(".bear-left, .bear-right");

            bears.forEach(bear => {
                bear.style.animation = "none";
                void bear.offsetWidth;
                bear.style.animation = "";
            });
        });
    }

    if (heart) {
        heart.addEventListener("click", () => {

            heart.style.opacity = "0";
            heart.style.pointerEvents = "none";

            if (letterWrapper) {
                letterWrapper.classList.add("show");
            }

            if (btnOpen) {
                btnOpen.classList.add("show");
            }

        });
    }

});
