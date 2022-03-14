
//FONCTIONS


// $(document).ready(function(){
//     $("a").on('click', function(event){

//     }
// }



function afficherSelection() {
    var selection = document.getElementById("transport_select").value;

    //Cacher les resultats
    document.querySelector('#total').style.display="none"
    document.querySelector('#total_labelan').style.display="none";
    document.querySelector('#total_label').style.display="none";
    document.querySelector('#totalan').style.display="none";
    document.querySelector('#commentaire').style.display="none";

    if (selection =="") {
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
    }else if (selection == 'Velo_pied') { 
        document.getElementById('card-voiture').style.display="none";
        document.getElementById('card-covoiturage').style.display="none";
        document.getElementById('card-bus').style.display="none";
        document.getElementById('card-train').style.display="none";
    }
}

// grames de CO2 pour un trajet
// nombre de jours de cours pendant l'année scolaire en moyenne : 195 
// 195* 2(nombre de trajets par jour) * 0.000001(pour convertir en tonnes)

let btn = document.querySelector('#calculer');
btn.addEventListener('click',() => {

    //Variables
    var selection = document.getElementById("transport_select").value;
    var carburantv = document.getElementById("carburant_selectv").value;
    var carburantc = document.getElementById("carburant_selectc").value;
    var consomoyv = document.getElementById("consomoyv");
    var consomoyc = document.getElementById("consomoyc");
    var nbkmv = document.getElementById("nbkmv");
    var nbkmc = document.getElementById("nbkmc");
    var nbkmb = document.getElementById("nbkmb");
    var nbkmt = document.getElementById("nbkmt");
    var nbper = document.getElementById("nbper");
    var total;
    var totalan;
    var reste;

    //Afficher les resultats
    document.getElementById('total_label').style.display="contents";
    document.getElementById('total_labelan').style.display="contents";
    document.querySelector('#total').style.display="contents"
    document.querySelector('#totalan').style.display="contents";
    document.querySelector('#commentaire').style.display="contents";

    if (selection == 'Voiture') { 
        if(carburantv == ''){
            //Cacher les resultats : faux car pas de selection sur le carburant
            alert("Veuillez selectionner un moyen de transport.")
            document.querySelector('#total').style.display="none"
            document.querySelector('#total_labelan').style.display="none";
            document.querySelector('#total_label').style.display="none";
            document.querySelector('#totalan').style.display="none";
            document.querySelector('#commentaire').style.display="none";
        } else if (carburantv =="Essence"){
            total = Math.round(((2317 * Math.abs(consomoyv.value)) /100 )* Math.abs(nbkmv.value));
        }else if(carburantv =="Diesel"){
            total = Math.round(((2729 * Math.abs(consomoyv.value)) /100 )* Math.abs(nbkmv.value));
        }else if(carburantv =="Electrique"){
            total = Math.round(75 * Math.abs(nbkmv.value));
        }else if(carburantv =="Ethanol"){
            total = Math.round(((150 * Math.abs(consomoyv.value)) /100 )* Math.abs(nbkmv.value));
        }else if(carburantv =="Biodiesel"){
            total = Math.round(((2472 * Math.abs(consomoyv.value)) /100 )* Math.abs(nbkmv.value));
        }else if(carburantv =="Hybride"){
            total = Math.round(200 * Math.abs(consomoyv.value) * Math.abs(nbkmv.value));
        }
        document.querySelector('#total').innerHTML = total;
        totalan = parseFloat(total * 195 * 2 * 0.000001).toFixed(3);
        document.querySelector('#totalan').innerHTML = totalan;
        reste = parseFloat(Math.abs(2 - totalan)).toFixed(3);

        if (totalan < 2){
            document.querySelector('#commentaire').innerHTML = "L'objectif mondial est de 2 tonnes d'emissions par habitant. Il te reste : " + reste +" tonnes pour tes autres consommations (achats, electicité...)";
        } else{
            document.querySelector('#commentaire').innerHTML = "L'objectif mondial est de 2 tonnes d'emissions par habitant. Vous avez donc dépassé la limite."
        }

    } else if (selection == 'Covoiturage'){
        if(carburantc == ''){
            //Cacher les resultats : faux car pas de selection sur le carburant
            alert("Veuillez selectionner un moyen de transport.")
            document.querySelector('#total').style.display="none"
            document.querySelector('#total_labelan').style.display="none";
            document.querySelector('#total_label').style.display="none";
            document.querySelector('#totalan').style.display="none";
            document.querySelector('#commentaire').style.display="none";
        } else if (carburantc =="Essence"){
            total = Math.round((((2317 * Math.abs(consomoyc.value)) /100 )* Math.abs(nbkmc.value))/ Math.abs(nbper.value));
        }else if(carburantc =="Diesel"){
            total = Math.round((((2729 * Math.abs(consomoyc.value)) /100 )* Math.abs(nbkmc.value)) / Math.abs(nbper.value));
        }else if(carburantc =="Electrique"){
            total = Math.round((75 * Math.abs(nbkmc.value)) / Math.abs(nbper.value));
        }else if(carburantc =="Ethanol"){
            total = Math.round((((150 * Math.abs(consomoyc.value)) /100 )* Math.abs(nbkmc.value)) / Math.abs(nbper.value));
        }else if(carburantc =="Biodiesel"){
            total = Math.round((((2472 * Math.abs(consomoyc.value)) /100 )* Math.abs(nbkmc.value)) / Math.abs(nbper.value));
        }else if(carburantc =="Hybride"){
            total = Math.round((200 * (Math.abs(consomoyc.value) * Math.abs(nbkmc.value)) / Math.abs(nbper.value)));
        }
        document.querySelector('#total').innerHTML = total;
        totalan = parseFloat(total * 195 * 2 * 0.000001).toFixed(3);
        document.querySelector('#totalan').innerHTML = totalan;
        reste = parseFloat(Math.abs(2 - totalan)).toFixed(3);

        if (totalan < 2){
        document.querySelector('#commentaire').innerHTML = "L'objectif mondial est de 2 tonnes d'emissions par habitant. Il te reste : " + reste +" tonnes pour tes autres consommations (achats, electicité...)";
        } else{
            document.querySelector('#commentaire').innerHTML = "L'objectif mondial est de 2 tonnes d'emissions par habitant. Vous avez donc dépassé la limite :/."
        }

        
    } else if (selection == 'Bus'){
        total = Math.round(Math.abs(nbkmb.value * 104));
        document.querySelector('#total').innerHTML = total;
        totalan = parseFloat(total * 195 * 2 * 0.000001).toFixed(3);
        document.querySelector('#totalan').innerHTML = totalan;
        reste = parseFloat(Math.abs(2 - totalan)).toFixed(3);

        if (totalan < 2){
            document.querySelector('#commentaire').innerHTML = "L'objectif mondial est de 2 tonnes d'emissions par habitant. Il te reste : "+ reste +" tonnes pour tes autres consommations (achats, electicité...)";
        } else{
            document.querySelector('#commentaire').innerHTML = "L'objectif mondial est de 2 tonnes d'emissions par habitant. Vous avez donc dépassé la limite :/."
        }

    } else if (selection == 'Train'){
        total = Math.round(Math.abs(nbkmt.value * 4,7));
        document.querySelector('#total').innerHTML = total;
        totalan = parseFloat(total * 195 * 2 * 0.000001).toFixed(3);
        document.querySelector('#totalan').innerHTML = totalan;
        reste = parseFloat(Math.abs(2 - totalan)).toFixed(3);

        if (totalan < 2){
            document.querySelector('#commentaire').innerHTML = "L'objectif mondial est de 2 tonnes d'emissions par habitant. Il te reste : " + reste +" tonnes pour tes autres consommations (achats, electicité...)";
        } else{
            document.querySelector('#commentaire').innerHTML = "L'objectif mondial est de 2 tonnes d'emissions par habitant. Vous avez donc dépassé la limite :/."
        }

    } else if (selection == 'Velo_pied') { 
        document.querySelector('#total').style.display="none";
        document.querySelector('#total_labelan').style.display="none";
        document.querySelector('#total_label').style.display="none";
        document.querySelector('#totalan').style.display="none";
        document.querySelector('#commentaire').innerHTML = 'Genial ! ton impact CO2 est nul, et en plus tu auras un super fessier pour cet été !!!';

    }else if (selection == ''){
        alert('Veuillez choisir un moyen de transport');
        document.querySelector('#total').style.display="none";
        document.querySelector('#total_labelan').style.display="none";
        document.querySelector('#total_label').style.display="none";
        document.querySelector('#totalan').style.display="none";
        document.querySelector('#commentaire').style.display="none";
    }
})
    

