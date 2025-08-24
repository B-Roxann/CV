/******************************************************************/
/************Script du bandeau de navigation secondaire************/
/******************************************************************/

const navigation_secondaire = document.getElementById("nav_secondaire")


const btn_experiences = document.getElementById("experiences");
const btn_competences = document.getElementById("competences");
const btn_telecharger = document.getElementById("telecharger");

const liste_experiences = document.getElementById("liste_exp");
const liste_competences = document.getElementById("liste_comp");
const liste_telecharger = document.getElementById("liste_telecharger");


/**Permet le développement du bandeau de navigation**/
btn_experiences.addEventListener("click", ()=>
    developper_menu(btn_experiences, liste_experiences)
);

btn_competences.addEventListener("click", ()=>
    developper_menu(btn_competences, liste_competences)
);

btn_telecharger.addEventListener("click", ()=>
    developper_menu(btn_telecharger, liste_telecharger, "ajuster_barre_nav")
);


/******************************************************************/
/***********************Script du Formulaire***********************/
/******************************************************************/
(() =>{
    let form = document.getElementById("form_contact");
    let error_tags = document.querySelectorAll("small.form_error");

    const nom_input =  document.getElementById("nom");
    const email_input = document.getElementById("email");
    const liste_input = [nom_input, email_input];

    if(form){
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
                    envoyer_email();

                    //Affichage de la popup qui confirme l'envoi
                    afficher_popup_message_envoye();
                }catch(error){
                    console.log("Nombre d'erreur(s) survenu(es) :" + error.message);
                }
        });
    }
})();