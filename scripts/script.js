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
let error_tags = document.querySelectorAll(".form_error");

/**Ecouteur d'évènement au submit**/
/**Effectue les tests RegEx des champs obligatoires**/
form.addEventListener("submit",(event)=>{
        event.preventDefault();
        try{

            retirer_erreur(error_tags);

            //Vérification que les champs sont valides
            liste_input.forEach(element => {
                tester_champ(element);
            });
            
            //Validation du formulaire
            valider_formulaire(error_tags);
            
            //Génération du mail par le service Email.js
            emailjs.sendForm('contact_service_CVrox89', 'template_hq567nu', event.target)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });

        }catch(error){
            console.log("Au moins une erreur est survenue :" + error.message);
        }
});