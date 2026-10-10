const filmes = [
    {
    titulo: "Velozes e Furiosos 10",
    ano: 2023,
    genero: "Ação",
    nota: 7.5,
    poster: "assets/velozes-e-furiosos-10.jpg"
},
    {
        titulo: "A Odisseia",
        ano: 2026,
        genero: "Aventura",
        nota: 8.0,
        poster: "assets/a-odisseia.jpg"
    },
    {
        titulo: "Assassin's Creed",
        ano: 2016,
        genero: "Ação",
        nota: 8.7,
        poster: "assets/assassins-creed.jpg"
    },
    {
        titulo: "Gran Turismo",
        ano: 2023,
        genero: "Ação",
        nota: 8.5,
        poster: "assets/gran-turismo.jpg"
    },
    {
        titulo: "Homem-Aranha: Um Novo Dia",
        ano: 2026,
        genero: "Ação",
        nota: 8.0,
        poster: "assets/homem-aranha-um-novo-dia.jpg"
    },
    {
        titulo: "Pânico VI",
        ano: 2023,
        genero: "Terror",
        nota: 9.0,
        poster: "assets/panico-vi.jpg"
    },
    {
        titulo: "Resident Evil",
        ano: 2002,
        genero: "Terror",
        nota: 9.0,
        poster: "assets/resident-evil.jpg"
    },
    {
        titulo: "Uncharted",
        ano: 2022,
        genero: "Aventura",
        nota: 10.0,
        poster: "assets/uncharted.jpg"
    },
  
];
const favoritos = [];
function mostrarFilmes(lista) {
    const catalogo = document.getElementById("catalogo");
    const contador = document.getElementById("contador");

    catalogo.innerHTML = "";
    if (lista.length === 0) {
    catalogo.innerHTML = "<p>Nenhum filme encontrado.</p>";
    contador.textContent = 0;
    return;
}

    for (let i = 0; i < lista.length; i++) {
        const filme = lista[i];

        catalogo.innerHTML += `
            <article class="filme">
                <img src="${filme.poster}" alt="Cartaz de ${filme.titulo}">
                <h3 onmouseenter="this.style.color='red'; this.style.backgroundColor='yellow'"
    onmouseout="this.style.color=''; this.style.backgroundColor=''">${filme.titulo}</h3>
                <p>Ano: ${filme.ano}</p>
                <p>Gênero: ${filme.genero}</p>
                <p>Nota: ${filme.nota}</p>
                <p>${filme.nota >= 8 ? "Recomendado" : ""}</p>
                <button onclick="favoritar(this.dataset.titulo)" data-titulo="${filme.titulo.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")}">♥ Favoritar</button>
            </article>
        `;
    }

    contador.textContent = lista.length;
}

mostrarFilmes(filmes);
const busca = document.getElementById("busca");

busca.addEventListener("input", function () {
    const texto = busca.value.toLowerCase();
    const filmesFiltrados = [];

    for (const filme of filmes) {
        if (filme.titulo.toLowerCase().includes(texto)) {
            filmesFiltrados.push(filme);
        }
    }

    mostrarFilmes(filmesFiltrados);
});

const filtroGenero = document.getElementById("filtro-genero");

filtroGenero.addEventListener("change", function () {
    const generoEscolhido = filtroGenero.value;
    const texto = busca.value.toLowerCase();
    const filmesFiltrados = [];

    for (const filme of filmes) {
        const combinaGenero =
            generoEscolhido === "Todos" ||
            filme.genero === generoEscolhido;

        const combinaBusca =
            filme.titulo.toLowerCase().includes(texto);

        if (combinaGenero && combinaBusca) {
            filmesFiltrados.push(filme);
        }
    }

    mostrarFilmes(filmesFiltrados);
});

const botaoInverter = document.getElementById("btn-inverter");

botaoInverter.addEventListener("click", function () {
    filmes.reverse();
    mostrarFilmes(filmes);
});


function favoritar(titulo) {
    if (!favoritos.includes(titulo)) {
        favoritos.push(titulo);
    }

    atualizarFavoritos();
}
function atualizarFavoritos() {
    const contadorFavoritos = document.getElementById("contador-favoritos");
    const listaFavoritos = document.getElementById("lista-favoritos");

    contadorFavoritos.textContent = favoritos.length;

    listaFavoritos.innerHTML = "";

    for (const titulo of favoritos) {
        listaFavoritos.innerHTML += `<li>${titulo}</li>`;
    }
}
const botaoLimparFavoritos = document.getElementById("btn-limpar-favoritos");

botaoLimparFavoritos.addEventListener("click", function () {
    favoritos.length = 0;
    atualizarFavoritos();
});