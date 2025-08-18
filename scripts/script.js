/******************************************************************/
/************Script du bandeau de navigation secondaire************/
/******************************************************************/

let navigation_secondaire = document.getElementById("nav_secondaire")


let btn_experiences = document.getElementById("experiences");
let btn_competences = document.getElementById("competences");
let btn_telecharger = document.getElementById("telecharger");

let liste_experiences = document.getElementById("liste_exp");
let liste_competences = document.getElementById("liste_comp");
let liste_telecharger = document.getElementById("liste_telecharger");


/**Permet le développement du bandeau de navigation**/
btn_experiences.addEventListener("click", ()=>
    developper_menu(btn_experiences, liste_experiences)
);

btn_competences.addEventListener("click", ()=>
    developper_menu(btn_competences, liste_competences)
);

btn_telecharger.addEventListener("click", ()=>
    developper_menu(btn_telecharger, liste_telecharger)
);


/******************************************************************/
/***********************Script du Formulaire***********************/
/******************************************************************/

let form = document.getElementById("form_contact");

/**Ecouteur d'évènement au submit**/
/**Effectue les tests RegEx des champs obligatoires**/
form.addEventListener("submit",(event)=>{
    try{
        event.preventDefault();
        liste_input.forEach(element => {
            tester_champ(element);
        });
    }catch(error){
        alert("Une erreur est survenue : " + error.message);
    }
});