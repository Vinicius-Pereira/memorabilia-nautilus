document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button-credits").addEventListener("click", () => {
        document.getElementById("credits-dialog").showModal();
    });

    document.getElementById("close-credits").addEventListener("click", () => {
        document.getElementById("credits-dialog").close();
    });

    document.getElementById("dificuldade").addEventListener("click", () => {
        let checked = document.getElementById("dificuldade").checked;
        if(checked) {
            document.getElementById("label-1").style.color = "#FFFFFF";
            document.getElementById("label-2").style.color = "#db4a6d";
        } else {
            document.getElementById("label-1").style.color = "#327fdd";
            document.getElementById("label-2").style.color = "#FFFFFF";
        }
    });
});