/****************Ci-dessous les fonctions utiles au bon****************/
/**********fonctionnement du bandeau de navigation secondaire**********/



/**
 * En cas de redimensionnement de la page
 * On range la barre de navigation et ses menus
 */
window.addEventListener("resize", ()=>{
    cacher_barre();
})


/**
 * Cette fonction développe la barre de navigation avec le menu qui y est dédié.
 * Ex. : menu "Expériences" => 
 *      - Développeur
 *      - Gestionnaire
 *      - Manager
 * @param {HTMLElement} btn_menu - L'élément qui actionne l'ouverture de la navigation avec le menu.
 * @param {NodeList} liste_menu - La liste d'éléments <li> : le menu déroulant
 * @param {string} ajuster_taille - Classe pour redimensionner la navigation
*/
function developper_menu(btn_menu, liste_menu, ajuster_taille =  null){
    const is_barre_affichee = navigation_secondaire.classList.contains("afficher_barre_nav");
    const is_liste_affichee = liste_menu.classList.contains("afficher_liste");

    /**Si le parametre ajuster_taille est renseigné
    alors on va modifier la taille de la barre de navigation secondaire*/

    //Si la barre est déjà affichée
    if(is_barre_affichee){
        //Et que la bonne liste est affichée
        if(is_liste_affichee){
            cacher_barre();  //Alors on cache la barre de navigation
        }else{  //Sinon ce n'est pas la bonne liste
            //Alors on cache la barre
            cacher_barre(ajuster_taille);
            //Puis on affiche la barre avec le bon menu
            setTimeout(() => {
                afficher_barre(btn_menu, liste_menu, ajuster_taille);
            }, 650);
        }
    }else{  //Rien n'était affiché alors on affiche la barre et le menu
        afficher_barre(btn_menu, liste_menu, ajuster_taille);
    }
}

/**
 * Cette fonction cache la barre de navigation
 */
function cacher_barre(){
    retirer_classe(navigation_secondaire, "afficher_barre_nav");  //On rentre la nav
    setTimeout(() => {  //On attend 600ms pour que le menu se ferme
        alignerY_menu(navigation_secondaire, "cacher"); //On range la barre_de_nav en haut de l'écran
        cacher_les_menus();  //On cache les menus
        retirer_classe(navigation_secondaire, "ajuster_barre_nav");  //On redimensionne taille standard
    }, 600);
}

/**
 * Cette fonction affiche la barre de navigation
 * sous le bouton menu qui l'a appelé
 * @param {HTMLElement} btn_menu - Le bouton qui ouvre le menu
 * @param {NodeList} liste_menu - La liste les éléments <li> du menu
 * @param {string} ajuster_taille - Classe pour dimensionner le cadre de navigation
 */
function afficher_barre(btn_menu, liste_menu, ajuster_taille =  null){
    if (ajuster_taille){    //Si c'est le menu télécharger => ajuster la taille de la box
        toggle_classe(navigation_secondaire, ajuster_taille);
    }
    toggle_classe(liste_menu, "afficher_liste");  //On affiche la liste de menus
    alignerX_menu(navigation_secondaire, btn_menu);  //On aligne
    alignerY_menu(navigation_secondaire, "afficher");  //On affiche la barre_de_nav
    toggle_classe(navigation_secondaire, "afficher_barre_nav");  //On range la barre_de_nav
}

/**
 * Cette fonction permet d'aligner horizontalement la barre de navigation (menu)
 * par rapport au bouton qui l'a déclanché.
 * 
 * Le centre du menu est calé sur le centre du bouton.
 * 
 * @param {HTMLElement} barre_nav - L'élément représentant la barre de navigation (menu). 
 * @param {HTMLElement} btn_menu - Le bouton qui a déclenché l'affichage du menu. 
 */
function alignerX_menu(barre_nav, btn_menu){
    const rect_nav = barre_nav.getBoundingClientRect();    
    const rect_menu = btn_menu.getBoundingClientRect();
    
    barre_nav.style.left = (rect_menu.left + (rect_menu.width/2)) - (rect_nav.width / 2) + "px";
}

/**
 * Cette fonction aligne vertialement la barre de menu par rapport à 
 * la barre de navigation principale
 * 
 * - Si l'action est "afficher", le menu est positionné juste en dessous
 * - Sinon le menu est "rangé" hors de l'écran
 * @param {HTMLElement} navigation - L'élément de menu à déplacer
 * @param {string} action - L'action à effectuer
 */
function alignerY_menu(navigation, action){
    const navigation_principale = document.getElementById("nav_principale");
    const rect_nav_principale = navigation_principale.getBoundingClientRect();

    if(action === "afficher"){  //On place la barre menu juste sous la navigation principale
        navigation.style.top = rect_nav_principale.bottom + "px";
    }else{  //On range la barre de navigation
        navigation.style.top = "-10px";
    }  
}

/**
 * Cette fonction permet de cacher les listes des menus 
 */
function cacher_les_menus(){
    retirer_classe(liste_experiences, "afficher_liste");
    retirer_classe(liste_competences, "afficher_liste");
    retirer_classe(liste_telecharger, "afficher_liste");
}


/**
 * Cette fonction de active ou désactive (toggle) une classe CSS sur un élément HTML.
 * 
 * @param {HTMLElement} element - L'élément où appliquer le changement
 * @param {string} classe - Le nom de la classe CSS à toggle
 */
function toggle_classe(element, classe){
    element.classList.toggle(classe);
}


/**
 * Cette fonction retirer une classe CSS sur un élément HTML.
 * 
 * @param {HTMLElement} element - L'élément où retirer la classe
 * @param {string} classe - Le nom de la classe à retirer
 */
function retirer_classe(element, classe){
        element.classList.remove(classe);
}