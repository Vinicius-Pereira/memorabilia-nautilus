var cartasJogador, cartasIA;
var jogadorTags, IATags, resultado, dificuldade;
var indexAtual = 0;
var contVitoriaJogador = contVitoriaIA = 0;

document.addEventListener("DOMContentLoaded", function() {
    // Carrega e Embaralha Todas as Cartas
    const firstTime = localStorage.getItem("firstTime");
    if(!firstTime) {
        localStorage.setItem("firstTime", true);
        document.getElementById("credits-dialog").showModal();
    }
    document.getElementById("credits-dialog").showModal();

    resultado = document.getElementById("result");
    dificuldade = document.getElementById("dificuldade");
    cartasJogador = loadCards();
    cartasIA = loadCards();

    resultado.textContent = (cartasJogador.length - indexAtual) + " cartas restantes";
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
    let basePath = "./src/images/cards/";
    return [
    {
        url: basePath + "1.png",
        artista: ["Kör Rodrigues", "https://cara.app/korrodrigues"],
        atributos: ["33", "15", "80"]
    }, 
    {
        url: basePath + "2.png",
        artista: ["soivin", "https://www.youtube.com/@Soivin"],
        atributos: ["13", "20", "95"]
    }, 
    {
        url: basePath + "3.png",
        artista: ["Valkyray", "https://www.instagram.com/valkyrieray/"],
        atributos: ["10", "82", "55"]
    },
    {
        url: basePath + "4.png",
        artista: ["Amil", "https://bsky.app/profile/a10aocubo.bsky.social"],
        atributos: ["79", "50", "23"]
    },
    {
        url: basePath + "5.png",
        artista: ["Kör Rodrigues", "https://cara.app/korrodrigues"],
        atributos: ["45", "35", "90"]
    },
    {
        url: basePath + "6.png",
        artista: ["Tzus", "https://bsky.app/profile/tzus.bsky.social"],
        atributos: ["07", "05", "66"]
    },
    {
        url: basePath + "7.png",
        artista: ["Kerberos", "https://www.instagram.com/kerberos.2d/"],
        atributos: ["81", "42", "56"]
    },
    {
        url: basePath + "8.png",
        artista: ["Kitilto", "https://www.instagram.com/kitilto/"],
        atributos: ["78", "24", "26"]
    },
    {
        url: basePath + "9.png",
        artista: ["Andrézin", "https://www.linkedin.com/in/andr%C3%A9-morais-923190297"],
        atributos: ["03", "17", "28"]
    },
    {
        url: basePath + "10.png",
        artista: ["Kitilto", "https://www.instagram.com/kitilto/"],
        atributos: ["09", "68", "47"]
    },
    {
        url: basePath + "11.png",
        artista: ["Kör Rodrigues", "https://cara.app/korrodrigues"],
        atributos: ["13", "30", "83"]
    },
    {
        url: basePath + "12.png",
        artista: ["Paulo Maciel", "https://www.instagram.com/ricksfantasyworlds/"],
        atributos: ["54", "69", "82"]
    },
    {
        url: basePath + "13.png",
        artista: ["Kitilto", "https://www.instagram.com/kitilto/"],
        atributos: ["10", "03", "90"]
    },
    {
        url: basePath + "14.png",
        artista: ["Didas", "https://bsky.app/profile/didigameboy.bsky.social"],
        atributos: ["43", "67", "54"]
    },
    {
        url: basePath + "15.png",
        artista: ["Saito", "https://www.instagram.com/saito.art/"],
        atributos: ["22", "36", "99"]
    },
    {
        url: basePath + "16.png",
        artista: ["Paulo Maciel", "https://www.instagram.com/ricksfantasyworlds/"],
        atributos: ["17", "73", "67"]
    },
    {
        url: basePath + "17.png",
        artista: ["Max do Pix", "https://bsky.app/profile/maxarts.bsky.social"],
        atributos: ["64", "37", "80"]
    },
    {
        url: basePath + "18.png",
        artista: ["Didas", "https://bsky.app/profile/didigameboy.bsky.social"],
        atributos: ["12", "98", "60"]
    },
    {
        url: basePath + "19.png",
        artista: ["PiiCO", "https://www.instagram.com/felyp_v"],
        atributos: ["48", "07", "89"]
    },
    {
        url: basePath + "20.png",
        artista: ["Taubateh", "https://www.instagram.com/andinhojacinto/"],
        atributos: ["97", "59", "47"]
    },
    {
        url: basePath + "21.png",
        artista: ["Carina", "https://www.instagram.com/ca__artwork/"],
        atributos: ["15", "66", "95"]
    },
    {
        url: basePath + "22.png",
        artista: ["PiiCO", "https://www.instagram.com/felyp_v"],
        atributos: ["51", "21", "79"]
    },
    {
        url: basePath + "23.png",
        artista: ["PiiCO", "https://www.instagram.com/felyp_v"],
        atributos: ["99", "16", "52"]
    },
    {
        url: basePath + "24.png",
        artista: ["Max do Pix", "https://bsky.app/profile/maxarts.bsky.social"],
        atributos: ["03", "85", "63"]
    },
    {
        url: basePath + "25.png",
        artista: ["Túlio Lobo", "https://bsky.app/profile/tuliolobo.com.br"],
        atributos: ["27", "99", "51"]
    },
    {
        url: basePath + "26.png",
        artista: ["Kaue", "https://bsky.app/profile/red223.bsky.social"],
        atributos: ["99", "99", "99"]
    },
    {
        url: basePath + "27.png",
        artista: ["Saito", "https://www.instagram.com/saito.art/"],
        atributos: ["80", "09", "77"]
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
  