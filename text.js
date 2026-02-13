document.addEventListener("DOMContentLoaded", function () {
    const text = document.getElementById("text");

    const letterContent = `
Không biet viet mịa gì cả
valungtung không có người yêu nên ở nhà 👽
    `;

    text.innerHTML = letterContent.trim().normalize("NFC");
});
