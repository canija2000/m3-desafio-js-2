var calculadora = document.getElementById ("calculadora");


function suma(e) {
    e.preventDefault();
    
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var numero1 = parseInt(num1.value);
    var numero2 = parseInt(num2.value);
    if (numero1 == "" || numero2 == "" || isNaN(numero1) || isNaN(numero2)){
        document.querySelector(".resultado").innerHTML = "Por favor ingrese números";
        return;
    }
    var resultado = numero1 + numero2;
    document.querySelector(".resultado").innerHTML = "El resultado es " + resultado;
    num1.value = "";
    num2.value = "";
}

function resta(e) {
    e.preventDefault();
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var numero1 = parseInt(num1.value);
    var numero2 = parseInt(num2.value);

    if (isNaN(numero1) || isNaN(numero2) || num1.value == "" || num2.value == ""){
        document.querySelector(".resultado").innerHTML = "Por favor ingrese números";
        return;
    }
    var resultado = numero1 - numero2;
    if(resultado < 0){
        resultado = 0;
    }
    document.querySelector(".resultado").innerHTML = "El resultado es " + resultado;
    num1.value = "";
    num2.value = "";
}

var sumar = document.getElementById("sumar");
sumar.addEventListener("click", suma);

var restar = document.getElementById("restar");
restar.addEventListener("click", resta);
