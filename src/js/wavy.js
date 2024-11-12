document.addEventListener("DOMContentLoaded", function () {
    let text = "FIM DO NAUTILUS";
    let delay = 500;

    let h1 = document.getElementById("fim-do-nautilus");

    h1.innerHTML = text
        .split("")
        .map((letter) => {
            return `<span>` + letter + `</span>`;
        })
        .join("");

    Array.from(h1.children).forEach((span, index) => {
        setTimeout(() => {
            span.classList.add("wavy");
            
            console.log("foi");
        }, index * 60 + delay);
    });
});
