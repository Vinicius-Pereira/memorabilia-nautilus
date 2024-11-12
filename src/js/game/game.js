var enable = true;
var cartasVerso = [true, true];
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button-attribute-1").addEventListener("click", battle);
    document.getElementById("button-attribute-2").addEventListener("click", battle);
    document.getElementById("button-attribute-3").addEventListener("click", battle);
    document.getElementById("next-round").addEventListener("click", proximaRodada);
    document.getElementById("new-game").addEventListener("click", novoJogo);
    document.getElementById("get-card").addEventListener("click", function () { 
        this.disabled = true;
        virarCarta(document.getElementById("card-1"), cartasVerso.jogador);
    });
    document.getElementById("new-game").disabled = true;
    document.getElementById("next-round").disabled = true;
});

function battle(event) {
    var index = event.target.id.charAt(event.target.id.length - 1);
    var valor = cartasJogador[indexAtual].atributos[index-1];
    var valorIA = botIA(index-1);
    if(valor > valorIA) {
        jogadorTags.score.text(++contVitoriaJogador);
    } else if(valor < valorIA) {
        IATags.score.text(++contVitoriaIA);
    }
    document.getElementById("next-round").disabled = false;

    indexAtual++;
    if(indexAtual >= cartasJogador.length) {
        document.getElementById("new-game").disabled = false;
        document.getElementById("next-round").disabled = true;
        if(contVitoriaJogador > contVitoriaIA) {
            resultado.textContent = "Você venceu!"
        } else if(contVitoriaJogador < contVitoriaIA) {
            resultado.textContent = "O Bot venceu!";
        } else {
            resultado.textContent = "Empate!";
        }
    }
    virarCarta(document.getElementById("card-2"));
    toogleButton();
}

function proximaRodada() {
    if(indexAtual < cartasJogador.length) {
        montaCarta(jogadorTags, cartasJogador[indexAtual]);
        montaCarta(IATags, cartasIA[indexAtual]);
    }
    document.getElementById("next-round").disabled = true;
    document.getElementById("get-card").disabled = false;
    virarCarta(document.getElementById("card-1"));
    virarCarta(document.getElementById("card-2"));
    toogleButton();
}

function virarCarta(element) {
    var index = element.id.charAt(element.id.length - 1);
    if(cartasVerso[index-1]) {
        element.style.transform = "perspective(400px) rotateY(180deg)";
        cartasVerso[index-1] = !cartasVerso[index-1];
    } else {
        element.style.transform = "none";
        cartasVerso[index-1] = !cartasVerso[index-1];
    }
}

function toogleButton() {
    var buttons = [ $("#card-1 #button-attribute-1"), $("#card-1 #button-attribute-2"), $("#card-1 #button-attribute-3")]
    if(enable) {
        buttons.forEach((button) =>{
            button.off("click", battle);
        });
    } else {
        buttons.forEach((button) =>{
            button.on("click", battle);
        });
    }
    enable = !enable;
}

function botIA(index) {
    var atributos = cartasIA[indexAtual].atributos;
    if(dificuldade.checked) {
        let indexRandom = Math.floor(Math.random() * 3);
        return atributos[indexRandom];
    } else {
        return atributos[index];
    }
}

function novoJogo() {
    document.getElementById("get-card").disabled = false;
    console.log(cartasVerso);
    virarCarta(document.getElementById("card-1"));
    virarCarta(document.getElementById("card-2"));
    contVitoriaJogador = contVitoriaIA = 0;
    indexAtual = 0;

    jogadorTags.score.text(contVitoriaJogador);
    IATags.score.text(contVitoriaIA);
    $("#result").text("");
    $("#next-round").attr("disable", false);

    shuffle(cartasJogador);
    shuffle(cartasIA);
    montaCarta(jogadorTags, cartasJogador[indexAtual]);
    montaCarta(IATags, cartasIA[indexAtual]);
    toogleButton();
    
    document.getElementById("new-game").disabled = true;
}


