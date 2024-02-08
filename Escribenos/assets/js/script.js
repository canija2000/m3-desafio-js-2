// get the form

var form = document.getElementById("formulario");

// event listener
// definir la funcion limpiar
function limpiar(){
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
}

function exito(){
    document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito";
}
function validar(n,a,m){
    var validacion = true;
    var validacionNombre = /[a-zA-Z]/gim;
    if (validacionNombre.test(n) == false){
        document.querySelector(".errorNombre").innerHTML = "Campo inválido, recuerda que no se aceptan números y es de caracter obligatorio";
        validacion = false;
    }
    var validacionAsunto = /[a-zA-Z0-9]/gim;
    if (validacionAsunto.test(a) == false){
        document.querySelector(".errorAsunto").innerHTML = "Campo inválido, recuerda que no se aceptan caracteres especiales y es de caracter obligatorio";
        validacion = false;
    }
    var validacionMensaje = /[a-zA-Z0-9]/gim;
    if (validacionMensaje.test(m) == false){
        document.querySelector(".errorMensaje").innerHTML = "Campo inválido, recuerda que no se aceptan caracteres especiales y es de caracter obligatorio";
        validacion = false;
    }
    return validacion;
}

form.addEventListener("submit", function (event){
    event.preventDefault();
    limpiar();
    var nombre = document.getElementById("nombre").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;
    var resultado = validar(nombre,asunto,mensaje);
    if (resultado == true){
        exito();
    };    
});