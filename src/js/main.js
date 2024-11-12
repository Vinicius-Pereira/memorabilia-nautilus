document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button-credits").addEventListener("click", () => {
        document.getElementById("credits-dialog").showModal();
    });

    document.getElementById("close-credits").addEventListener("click", () => {
        document.getElementById("credits-dialog").close();
    });

    document.getElementById("credits-dialog").showModal();

});