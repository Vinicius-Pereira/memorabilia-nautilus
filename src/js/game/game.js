var enable = true;
$(document).ready(function () {
    var buttons = [ $("#card-1 #button-attribute-1"), $("#card-1 #button-attribute-2"), $("#card-1 #button-attribute-3")]
    buttons.forEach((button) =>{
        button.on("click", battle);
    });
    $("#next-round").on("click", proximaRodada);
    $("#new-game").on("click", novoJogo);
    
});

function battle(event) {
    var index = event.target.id.charAt(event.target.id.length - 1);
    var valor = cartasJogador[indexAtual].atributos[index-1];
    // To Do IA - Flávio
    var valorIA = cartasIA[indexAtual].atributos[index-1];
    var valorIA = botIA();
    if(valor > valorIA) {
        jogadorTags.score.text(++contVitoriaJogador);
    } else if(valor < valorIA) {
        IATags.score.text(++contVitoriaIA);
    }

    console.log("Jogador:" + valor);
    console.log("Bot:" + valorIA);

    indexAtual++;
    if(indexAtual >= cartasJogador.length) {
        $("#next-round").attr("disable", true);
        if(contVitoriaJogador > contVitoriaIA) {
            $("#result").text("Você venceu!");
        } else if(contVitoriaJogador < contVitoriaIA) {
            $("#result").text("O Bot venceu!");
        } else {
            $("#result").text("Empate!");
        }
    }
    toogleButton();
}

function proximaRodada() {
    if(indexAtual < cartasJogador.length) {
        montaCarta(jogadorTags, cartasJogador[indexAtual]);
        montaCarta(IATags, cartasIA[indexAtual]);
    }
    toogleButton();
}

function virarCarta() {
    // Virar a carta - CRÍTICO AO FUNCIONAMENTO DO JOGO
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

function botIA() {
    let atributos = cartasIA[indexAtual].atributos;
    let indexRandom = Math.floor(Math.random() * 3);
    return atributos[indexRandom];
}

function novoJogo() {
    // Esconder Cartas
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
}


