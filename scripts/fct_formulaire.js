/****************Ci-dessous les fonctions utiles au bon****************/
/*********************fonctionnement du formulaire*********************/


/**
 * Cette fonction va nettoyer le champ,
 * 
 * @param {Input} champ 
 * 
 * Et retourne le champ nettoyé => 
 * {string} champ_trim
 */
function nettoyer_champ(champ){
    return champ.value.trim();
}


/**
 * Cette fonction va rediriger
 * vers le RegEx correspondant
 * pour tester :
 *   - Soit pour un champ email
 *   - Soit pour un champ simple
 * @param {Input} champ 
 */
function tester_champ(champ){

    if(champ.type === "email"){
        regex_email(champ);
    }
    else{
        regex_simple(champ);
    }
}

/**
 * Cette fonction va tester la validité
 * d'un input type="email"
 * @param {Input} champ 
 */
function regex_email(champ){
    let regex_for_email = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+$","i");
    let champ_value = nettoyer_champ(champ)
    let test_email = regex_for_email.test(champ_value);
    const small = champ.parentElement.querySelector(".form_error");
    const information_error = document.querySelector("p.form_error");

        if(!test_email){
            small.classList.add("error");
            information_error.classList.add("error");
        }
}

/**
 * Cette fonction va tester la validité
 * d'un input de type="text"
 * @param {Input} champ 
 */
function regex_simple(champ){
    let regex_for_simple = new RegExp("^[a-zA-Z0-9._-]+$");
    let champ_value = nettoyer_champ(champ)
    let test_simple = regex_for_simple.test(champ_value);
    const small = champ.parentElement.querySelector(".form_error");
    const information_error = document.querySelector("p.form_error");

        if(!test_simple){
            small.classList.add("error");
            information_error.classList.add("error");
        }
}

/******************************************************************/
/********************Gestion de l'envoi du mail********************/
/******************************************************************/

/**
 * Cette fonction retire le style .error
 * de chaque tag du formulaire.
 * @param {NodeList} liste_tag 
 */
function retirer_erreur(liste_tag){
    liste_tag.forEach(element =>{
        element.classList.remove("error");
    })
}

/**
 * Cette fonction lance une exception
 * si elle rencontre une erreur.
 * @param {NodeList} list_error_tags 
 */

function valider_formulaire(list_error_tags){
    let nbre_erreurs = compter_erreurs(list_error_tags);
    if( nbre_erreurs > 0){
        throw new Error(`${nbre_erreurs} erreur(s).`);
    }
}

/**
 * Cette fonction compte le nombre d'erreurs rencontrées
 *en itérant sur les éléments pouvant la contenir
 *
 * @param {NodeList} list_error_tags
 *
 * et retourne : {int} compteur_erreurs
 */
function compter_erreurs(list_error_tags){
    let compteur_erreurs = 0;
    list_error_tags.forEach(element =>{
        if(element.classList.contains("error")){
            compteur_erreurs++;
        };
    });
    return compteur_erreurs;
}

/**
 * Cette fonction initialise Emailjs
 */
(function() {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init({
              publicKey: "XunkqrqxTyclY6bvF",
            });
        })();

/**
 * Cette fonction envoi l'email
 * via Emailjs
 */
function envoyer_email(){
    emailjs.sendForm('contact_service_CVrox89', 'template_hq567nu', event.target)
                .then(() => {
                    console.log('SUCCESS!');
                }, (error) => {
                    console.log('FAILED...', error);
                });
}

/******************************************************************/
/*******************Gestion du popup mail envoyé*******************/
/******************************************************************/

const mail_envoye = document.getElementById("btn_retour");
const fenetre_popup = document.getElementById("popup");

mail_envoye.addEventListener("click", ()=>{
    fenetre_popup.style.display = "none";
});

function afficher_popup_message_envoye(){
    fenetre_popup.style.display = "flex";
}
