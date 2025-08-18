/****************Ci-dessous les fonctions utiles au bon****************/
/*********************fonctionnement du formulaire*********************/


const nom_input =  document.getElementById("nom");
const email_input = document.getElementById("email");

const liste_input = [nom_input, email_input];

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
    let regex__for_email = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+$");
    let champ_value = nettoyer_champ(champ)
    let test_email = regex__for_email.test(champ_value);
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

/**
 * Cette fonction retire le style .error
 * de chaque tag du formulaire.
 * @param {querySelectorAll} liste_tag 
 */
function retirer_erreur(liste_tag){
    liste_tag.forEach(element =>{
        element.classList.remove("error");
    })
}