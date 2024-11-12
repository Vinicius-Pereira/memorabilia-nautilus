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

    indexAtual++;
    resultado.textContent = (cartasJogador.length - indexAtual) + " cartas restantes";
    if(valor > valorIA[0]) {
        document.querySelector("#card-1 #attribute-number-"+index).style.color = "#40cc54";
        document.querySelector("#card-2 #attribute-number-"+valorIA[1]).style.color = "#cc4040";
        jogadorTags.score.text(++contVitoriaJogador);
    } else if(valor < valorIA[0]) {
        document.querySelector("#card-1 #attribute-number-"+index).style.color = "#cc4040";
        document.querySelector("#card-2 #attribute-number-"+valorIA[1]).style.color = "#40cc54";
        IATags.score.text(++contVitoriaIA);
    } else {
        document.querySelector("#card-1 #attribute-number-"+index).style.color = "#cc4040";
        document.querySelector("#card-2 #attribute-number-"+valorIA[1]).style.color = "#cc4040";
    }
    document.getElementById("next-round").disabled = false;
    jogadorTags.atributo1.attr("disabled", true);

    if(indexAtual >= cartasJogador.length) {
        document.getElementById("new-game").disabled = false;
        document.getElementById("next-round").disabled = true;
        if(contVitoriaJogador > contVitoriaIA) {
            resultado.textContent = "Você venceu!"
        } else if(contVitoriaJogador < contVitoriaIA) {
            resultado.textContent = "O Computador venceu!";
        } else {
            resultado.textContent = "Empate!";
        }
    }
    virarCarta(document.getElementById("card-2"));
    toogleButton();
}

function proximaRodada() {
    virarCarta(document.getElementById("card-1"));
    virarCarta(document.getElementById("card-2"));
    setTimeout(function(){
        if(indexAtual < cartasJogador.length) {
            montaCarta(jogadorTags, cartasJogador[indexAtual]);
            montaCarta(IATags, cartasIA[indexAtual]);
        }
        document.getElementById("next-round").disabled = true;
        document.getElementById("get-card").disabled = false;
        toogleButton();
    }, 500);
}

function virarCarta(element) {
    var index = element.id.charAt(element.id.length - 1);
    if(cartasVerso[index-1]) {
        element.style.transform = "perspective(400px) rotateY(180deg)";
        cartasVerso[index-1] = !cartasVerso[index-1];
    } else {
        element.style.transform = "none";
        cartasVerso[index-1] = !cartasVerso[index-1];
        document.querySelector("#card-1 #attribute-number-1").style.color = "#000000";
        document.querySelector("#card-1 #attribute-number-2").style.color = "#000000";
        document.querySelector("#card-1 #attribute-number-3").style.color = "#000000";
        document.querySelector("#card-2 #attribute-number-1").style.color = "#000000";
        document.querySelector("#card-2 #attribute-number-2").style.color = "#000000";
        document.querySelector("#card-2 #attribute-number-3").style.color = "#000000";
    }
}

function toogleButton() {
    var buttons = [ $("#card-1 #button-attribute-1"), $("#card-1 #button-attribute-2"), $("#card-1 #button-attribute-3")]
    if(enable) {
        document.getElementById("button-attribute-1").removeEventListener("click", battle);
        document.getElementById("button-attribute-2").removeEventListener("click", battle);
        document.getElementById("button-attribute-3").removeEventListener("click", battle);
        enable = !enable;
    } else {
        console.log("cria")
        document.getElementById("button-attribute-1").addEventListener("click", battle);
        document.getElementById("button-attribute-2").addEventListener("click", battle);
        document.getElementById("button-attribute-3").addEventListener("click", battle);
        enable = !enable;
    }
}

function botIA(index) {
    var atributos = cartasIA[indexAtual].atributos;
    if(dificuldade.checked) {
        let indexRandom = Math.floor(Math.random() * 3);
        return [atributos[indexRandom], indexRandom+1];
    } else {
        return [atributos[index], index+1];
    }
}

function novoJogo() {
    document.getElementById("get-card").disabled = false;
    virarCarta(document.getElementById("card-1"));
    virarCarta(document.getElementById("card-2"));
    contVitoriaJogador = contVitoriaIA = 0;
    indexAtual = 0;

    resultado.textContent = (cartasJogador.length - indexAtual) + " cartas restantes";
    jogadorTags.score.text(contVitoriaJogador);
    IATags.score.text(contVitoriaIA);
    $("#next-round").attr("disable", false);

    shuffle(cartasJogador);
    shuffle(cartasIA);
    montaCarta(jogadorTags, cartasJogador[indexAtual]);
    montaCarta(IATags, cartasIA[indexAtual]);
    toogleButton();
    
    document.getElementById("new-game").disabled = true;
}


