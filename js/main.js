//exécution fonctions
document.getElementById("btn__session").addEventListener("click", seconnecter);
document.getElementById("btn__register").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Variables
var form_login = document.querySelector(".form__login");
var form_register = document.querySelector(".form__register");
var container_login_register = document.querySelector(".container__login-register");
var box_back_login = document.querySelector(".box__back-login");
var box_back_register = document.querySelector(".box__back-register");

    //FONCTIONS
function affichage() {
    var div = document.getElementById("registerDIV");
    if (div.classList.contains("cacher") == true){div.classList.toggle('afficher');}
}
