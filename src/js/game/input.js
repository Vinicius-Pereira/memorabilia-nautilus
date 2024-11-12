var cartasJogador, cartasIA;
var jogadorTags, IATags, resultado, dificuldade;
var indexAtual = 0;
var contVitoriaJogador = contVitoriaIA = 0;

document.addEventListener("DOMContentLoaded", function() {
    // Carrega e Embaralha Todas as Cartas
    resultado = document.getElementById("result");
    dificuldade = document.getElementById("dificuldade");
    cartasJogador = loadCards();
    cartasIA = loadCards();

    shuffle(cartasJogador);
    shuffle(cartasIA);
    
    // Carrega Elementos Tela
    jogadorTags = {
        imagem: $("#card-1 .card-front .card-model"),
        artista: $("#card-1 #artist"),
        atributo1: $("#card-1 #attribute-number-1"),
        atributo2: $("#card-1 #attribute-number-2"),
        atributo3: $("#card-1 #attribute-number-3"),
        score: $("#score-player")
    }
    
    IATags = {
        imagem: $("#card-2 .card-front .card-model"),
        artista: $("#card-2 #artist"),
        atributo1: $("#card-2 #attribute-number-1"),
        atributo2: $("#card-2 #attribute-number-2"),
        atributo3: $("#card-2 #attribute-number-3"),
        score: $("#score-IA")
    } 


    montaCarta(jogadorTags, cartasJogador[indexAtual]);
    montaCarta(IATags, cartasIA[indexAtual]);

});

function loadCards() {
    let basePath = "./images/cards/";
    return [{
        url: basePath + "carta_placeholder.png",
        artista: ["@soivin.png", "https://www.youtube.com/@Soivin"],
        atributos: ["30", "40", "50"]
    }, 
    {
        url: basePath + "carta_placeholder.png",
        artista: ["@soivin.png", "https://www.youtube.com/@Soivin"],
        atributos: ["99", "99", "99"]
    },
    {
        url: basePath + "carta_placeholder.png",
        artista: ["@soivin.png", "https://www.youtube.com/@Soivin"],
        atributos: ["12", "25", "52"]
    }]
}

function montaCarta(jogadorTags, carta) {
    jogadorTags.imagem.attr("src", carta.url);
    jogadorTags.artista.text(carta.artista[0]);
    jogadorTags.artista.attr("href", carta.artista[1]);
    jogadorTags.atributo1.text(carta.atributos[0]);
    jogadorTags.atributo2.text(carta.atributos[1]);
    jogadorTags.atributo3.text(carta.atributos[2]);
}

function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
}
  