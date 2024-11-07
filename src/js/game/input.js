var cartasJogador, cartasIA;
var jogadorTags, IATags;
var indexAtual = 0;
var contVitoriaJogador = contVitoriaIA = 0;

$(document).ready(function () {
    // Carrega e Embaralha Todas as Cartas
    cartasJogador = loadCards();
    cartasIA = loadCards();

    shuffle(cartasJogador);
    shuffle(cartasIA);
    
    // Carrega Elementos Tela
    jogadorTags = {
        imagem: $("#card-1 .card-image"),
        numero: $("#card-1 #number"),
        artista: $("#card-1 #artist"),
        nome: $("#card-1 #title"),
        descricao: $("#card-1 #subtitle"),
        atributo1: $("#card-1 #attribute-number-1"),
        atributo2: $("#card-1 #attribute-number-2"),
        atributo3: $("#card-1 #attribute-number-3"),
        score: $("#score-player")
    }
    
    IATags = {
        imagem: $("#card-2 .card-image"),
        numero: $("#card-2 #number"),
        artista: $("#card-2 #artist"),
        nome: $("#card-2 #title"),
        descricao: $("#card-2 #subtitle"),
        atributo1: $("#card-2 #attribute-number-1"),
        atributo2: $("#card-2 #attribute-number-2"),
        atributo3: $("#card-2 #attribute-number-3"),
        score: $("#score-IA")
    } 


    montaCarta(jogadorTags, cartasJogador[indexAtual]);
    montaCarta(IATags, cartasIA[indexAtual]);

});

function loadCards() {
    return [{
        url: "./images/cards/comunidade é importante_by @soivin.png",
        numero: "01",
        artista: ["@soivin.png", "https://www.youtube.com/@Soivin"],
        nome: "Comunidade é Importante",
        descricao: "comunidade",
        atributos: ["66", "66", "66"]
    }, 
    {
        url: "./images/cards/comunidade é importante_by @soivin.png",
        numero: "01",
        artista: ["@soivin.png", "https://www.youtube.com/@Soivin"],
        nome: "Comunidade é Importante",
        descricao: "comunidade",
        atributos: ["00", "66", "66"]
    },
    {
        url: "./images/cards/comunidade é importante_by @soivin.png",
        numero: "01",
        artista: ["@soivin.png", "https://www.youtube.com/@Soivin"],
        nome: "Comunidade é Importante",
        descricao: "comunidade",
        atributos: ["66", "00", "66"]
    }]
}

function montaCarta(jogadorTags, carta) {
    jogadorTags.imagem.attr("src", carta.url);
    jogadorTags.numero.text(carta.numero);
    jogadorTags.artista.text(carta.artista[0]);
    jogadorTags.artista.attr("href", carta.artista[1]);
    jogadorTags.nome.text(carta.nome);
    jogadorTags.descricao.text(carta.descricao);
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
  