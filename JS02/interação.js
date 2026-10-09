function calcular(){
    let n1 = Number(document.getElementById("num1").value); 
    let n2 = Number(document.getElementById("num2").value);

    let texto = document.getElementById("txtResultado");

  

    texto.innerHTML = "soma:"+ (n1+n2);
    texto.innerHTML += "<br>Subtração: "+ (n1-n2);
    texto.innerHTML += "<br>Divisão: "+ (n1/n2);
    texto.innerHTML += "<br>Multiplicação: "+ (n1*n2);
    texto.innerHTML += "<br>Potência: "+ (n1**n2);
    texto.innerHTML += "<br>Resto,Divisão: "+ (n1%n2);
    
}