// events listener para cada boton

var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var btn3 = document.getElementById("btn-3");
var btn4 = document.getElementById("btn-4");
var btn5 = document.getElementById("btn-5");
var btn6 = document.getElementById("btn-6");

var listaBotones = [btn1, btn2, btn3, btn4, btn5, btn6];


function cambiarColor(){
    document.getElementById("caja").style.backgroundColor = this.style.backgroundColor;
}

for (var i = 0; i < listaBotones.length; i++){
    listaBotones[i].addEventListener("click", cambiarColor);
}

const reset = document.getElementById('reset');

reset.addEventListener('click', function(){
    console.log('click');
    
    document.getElementById("caja").style.backgroundColor = "white";
// });
});
//     


