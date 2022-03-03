//FONCTIONS

function afficherSelection() {
    var selection = document.getElementById("transport_select").value;
    if (selection ==""){
        document.getElementById('card-voiture').style.display="none";
        document.getElementById('card-covoiturage').style.display="none";
        document.getElementById('card-bus').style.display="none";
        document.getElementById('card-train').style.display="none";
    } else if (selection == 'Voiture') { 
        document.getElementById('card-voiture').style.display="contents";
        document.getElementById('card-covoiturage').style.display="none";
        document.getElementById('card-bus').style.display="none";
        document.getElementById('card-train').style.display="none";
    } else if (selection == 'Covoiturage') {
        document.getElementById('card-covoiturage').style.display="contents";
        document.getElementById('card-voiture').style.display="none";
        document.getElementById('card-bus').style.display="none";
        document.getElementById('card-train').style.display="none";
    } else if (selection == 'Bus') { 
        document.getElementById('card-bus').style.display="contents";
        document.getElementById('card-covoiturage').style.display="none";
        document.getElementById('card-voiture').style.display="none";
        document.getElementById('card-train').style.display="none";
    }else if (selection == 'Train') { 
        document.getElementById('card-train').style.display="contents";
        document.getElementById('card-covoiturage').style.display="none";
        document.getElementById('card-voiture').style.display="none";
        document.getElementById('card-bus').style.display="none";
    }else if (selection == 'Velo, à pied...') { 
        document.getElementById('card-voiture').style.display="none";
        document.getElementById('card-covoiturage').style.display="none";
        document.getElementById('card-bus').style.display="none";
        document.getElementById('card-train').style.display="none";
    }
    else{

    }
}

let btn = document.querySelector('#calculer');
btn.addEventListener ('click', function conso(){
    var selection = document.getElementById("transport_select").value;
    var carburant = document.getElementById("carburant_select").value;
    var consomoyv = parseFloat(document.getElementById("consomoyv").value);
    var nbkmv = parseFloat(document.getElementById("nbkmv").value);
    if (selection == 'Voiture') { 
        if (carburant =="Essence"){
            var total = (10*consomoyv*nbkmv);
        }else if(carburant =="Diesel"){
            var total = (5*consomoyv*nbkmv);
        }else if(carburant =="Electrique"){
            var total = (20*consomoyv*nbkmv);
        }else if(carburant =="Ethanol"){
            var total = (1*consomoyv*nbkmv);
        }else if(carburant =="Biodiesel"){
            var total = (2*consomoyv*nbkmv);
        }else if(carburant =="Hybride"){
            var total = (200*consomoyv*nbkmv);
        }
        document.querySelector('#total').innerHTML = total;

    } else if (selection == 'Covoiturage'){
        
        if (carburant =="Essence"){
            var total = (10*consomoyv*nbkmv);
        }else if(carburant =="Diesel"){
            var total = (5*consomoyv*nbkmv);
        }else if(carburant =="Electrique"){
            var total = (20*consomoyv*nbkmv);
        }else if(carburant =="Ethanol"){
            var total = (1*consomoyv*nbkmv);
        }else if(carburant =="Biodiesel"){
            var total = (2*consomoyv*nbkmv);
        }else if(carburant =="Hybride"){
            var total = (200*consomoyv*nbkmv);
        }
        document.querySelector('#total').innerHTML = total;
        
    } else if (selection == 'Bus'){

    } else if (selection == 'Train'){

    } else if (selection == 'Velo, à pied...') { 

    }
})
    

