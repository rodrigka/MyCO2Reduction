//exécution fonctions
document.getElementById("btn__se-connecter").addEventListener("click", seconnecter);
document.getElementById("btn__s-enregistrer").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Variables
var form_login = document.querySelector(".form__login");
var form_register = document.querySelector(".form__register");
var container_login_register = document.querySelector(".container__login-register");
var box_back_login = document.querySelector(".box__back-login");
var box_back_register = document.querySelector(".box__back-register");

    //FONCTIONS

function anchoPage(){

    if (window.innerWidth > 850){
        box_back_register.stylesep.display = "block";
        box_back_login.stylesep.display = "block";
    }else{
        box_back_register.stylesep.display = "block";
        box_back_register.stylesep.opacity = "1";
        box_back_login.stylesep.display = "none";
        form_login.stylesep.display = "block";
        container_login_register.stylesep.left = "0px";
        form_register.stylesep.display = "none";   
    }
}

anchoPage();


    function seconnecter(){
        if (window.innerWidth > 850){
            form_login.stylesep.display = "block";
            container_login_register.stylesep.left = "10px";
            form_register.stylesep.display = "none";
            box_back_register.stylesep.opacity = "1";
            box_back_login.stylesep.opacity = "0";
        }else{
            form_login.stylesep.display = "block";
            container_login_register.stylesep.left = "0px";
            form_register.stylesep.display = "none";
            box_back_register.stylesep.display = "block";
            box_back_login.stylesep.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            form_register.stylesep.display = "block";
            container_login_register.stylesep.left = "410px";
            form_login.stylesep.display = "none";
            box_back_register.stylesep.opacity = "0";
            box_back_login.stylesep.opacity = "1";
        }else{
            form_register.stylesep.display = "block";
            container_login_register.stylesep.left = "0px";
            form_login.stylesep.display = "none";
            box_back_register.stylesep.display = "none";
            box_back_login.stylesep.display = "block";
            box_back_login.stylesep.opacity = "1";
        }
}