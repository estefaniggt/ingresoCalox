document.getElementById("boton_registro").addEventListener("click", registro);

/* DECLARACION DE VARIABLES */

var contenedorloginregistro = document.querySelector(".contenedor--loginregistro");
var formulariologin = document.querySelector(".formulario--login");
var formularioregistro = document.querySelector(".formulario--registro");

var cajatrasera_login = document.querySelector(".cajalogin");
var cajatrasera_registro = document.querySelector(".cajaregistro");

function registro(){
    formularioregistro.style.display = "block";
    contenedorloginregistro.style.left = "410px";
    formulariologin.style.display = "none";
    cajatrasera_registro.style.opacity = "0";
    cajatrasera_login.style.opacity = "1";
}