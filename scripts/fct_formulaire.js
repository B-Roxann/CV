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
    return champ_trim= champ.value.trim();
    
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

        if(test_email){
            console.log("Le champ est valide et vaut : ",champ_value);
        }
        else{
            throw new Error("Format d'email invalide (ex. jean.dupont@exemple.fr)")
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

        if(test_simple){
            console.log("Le champ est valide et vaut : ",champ_value);
        }
        else{
            throw new Error("Format Nom invalide, sans accents et caractères spéciaux autorisés : '.-_'.")
        }
}
