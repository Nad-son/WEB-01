let numeroSecreto;
let vidas;

let txtStatus = document.getElementById("status");
let btnIniciar = document.getElementById("btIniciar");
let numeroChute = document.getElementById("num1");
let btnChutar = document.getElementById("btChutar");
let resultado = document.getElementById("txtResultado");

btnIniciar.addEventListener("click", novoJogo);
btnChutar.addEventListener("click", chutar);

numeroChute.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        chutar();
    }
})

numeroChute.disabled = true;
btnChutar.disabled = true;

function novoJogo() {
    numeroChute.disabled = false;
    btnChutar.disabled = false;

    numeroSecreto = parseInt(Math.random() * 100) + 1;
    vidas = 10
    numVidas();
    numeroChute.value = "";
    resultado.innerHTML = "";
    numeroChute.focus();
}

function numVidas() {
    txtStatus.innerHTML = "";
    for (let i = 1; i <= vidas; i++) {
        txtStatus.innerHTML += '+';
    }
    if (vidas == 0) {
        resultado.innerHTML += "Você Perdeu!";
        numeroChute.disabled = true;
        btnChutar.disabled = true;
    }
}

function chutar() {
    let num = numeroChute.value;
    if (num < 1 || num > 100) {
        alert("O número tem que ser entre 1 e 100! perdeu uma vida!");
        vidas--;
    } else if (num == numeroSecreto) {
        resultado.innerHTML += "Parabéns, você acertou!"
        numeroChute.disabled = true;
        btnChutar.disabled = true;
    } else if (num > numeroSecreto) {
        resultado.innerHTML += "Palpite: = " + num;
        resultado.innerHTML += " - O número é Menor! <br>"
        vidas--;
    } else if (num < numeroSecreto) {
        resultado.innerHTML += "Palpite: = " + num;
        resultado.innerHTML += " - O número é Maior! <br>"
        vidas--;
    }
    numeroChute.value = "";
    numeroChute.focus();

    numVidas();
}