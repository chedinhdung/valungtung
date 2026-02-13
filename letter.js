document.addEventListener("DOMContentLoaded", function () {

    const envelope = document.querySelector(".envelope");
    const container = document.querySelector(".envelope-container");
    const btn = document.querySelector(".btn-open");

    if (!envelope || !container || !btn) return;

    btn.addEventListener("click", function () {

        btn.addEventListener("click", function () {

    const isOpen = envelope.classList.toggle("open");

    if (isOpen) {

        envelope.style.animation = "none";

        envelope.style.transform = "rotateY(0deg)";

        btn.textContent = "Close";

    } else {

        envelope.style.animation = "spin3D 8s linear infinite";

        envelope.style.transform = "";

        btn.textContent = "Open";
    }

});

        envelope.classList.toggle("stop");


        if (envelope.classList.contains("open")) {
            btn.textContent = "Close";
        } else {
            btn.textContent = "Open";
        }

    });

});
