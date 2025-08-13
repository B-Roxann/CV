/****************Ci-dessous les fonctions utiles au bon****************/
/**********fonctionnement du bandeau de navigation secondaire**********/


/**
 * Cette fontion permet d'aligner une liste
 * a son élément "Expériences", "Compétences" ...
 * @param {*} liste à afficher
 * @param {*} bouton déclancheur de l'affichage
*/
function alignerListe(barre_nav, bouton){
    const rect = bouton.getBoundingClientRect();
    barre_nav.style.left = (rect.left - 20) + "px";
}


/**
 * Cette fonction développe le menu lié à son titre
 * Ex. : menu "Expériences" => 
 *      - Développeur
 *      - Gestionnaire
 *      - Manager
 * @param {*} btn_menu 
 * @param {*} liste_menu le menu déroulant
*/
function developper_menu(btn_menu, liste_menu){
    const is_barre_affichee = navigation_secondaire.classList.contains("afficher_barre_nav");
    const is_liste_affichee = liste_menu.classList.contains("afficher_liste");
    if(is_barre_affichee){
        if(is_liste_affichee){
            toggle_element(liste_menu, "afficher_liste");
            cacher_element(navigation_secondaire, "afficher_barre_nav");
        }
        else{
            cacher_les_listes(liste_menu);
            cacher_element(navigation_secondaire, "afficher_barre_nav");
            setTimeout(() => {
                toggle_element(navigation_secondaire, "afficher_barre_nav");
                toggle_element(liste_menu, "afficher_liste");
                alignerListe(navigation_secondaire, btn_menu);
            }, 600);
        }
    }
    else{
        toggle_element(navigation_secondaire, "afficher_barre_nav");
        alignerListe(navigation_secondaire, btn_menu);
        toggle_element(liste_menu, "afficher_liste");
    }
}

/**
 * Cette fonction permet de cacher les listes
 * des autres menus que celui utilisé
 * @param {*} liste_a_conserver 
 */
function cacher_les_listes(liste_a_conserver){
    switch (liste_a_conserver){
        case liste_experiences:
            cacher_element(liste_competences, "afficher_liste")
            cacher_element(liste_telecharger, "afficher_liste")
        case liste_competences:
            cacher_element(liste_experiences, "afficher_liste")
            cacher_element(liste_telecharger, "afficher_liste")
        case liste_telecharger:
            cacher_element(liste_experiences, "afficher_liste")
            cacher_element(liste_competences, "afficher_liste")
    }
}


/**
 * Cette fonction permet d'afficher
 * un élément
 * @param {*} element 
 * @param {*} classe 
 */
function toggle_element(element, classe){
    element.classList.toggle(classe);
}


/**
 * Cette fonction permet de retirer une classe
 * d'affichage présente dans un élément
 * @param {*} element 
 * @param {*} classe 
 */
function cacher_element(element, classe){
    element.classList.remove(classe);
}

/**Si redimenssionnement de la page => on retire la navigation secondaire */
window.addEventListener("resize", ()=>{
    cacher_element(navigation_secondaire, "afficher_barre_nav");
    cacher_element(liste_experiences, "afficher_liste");
    cacher_element(liste_competences, "afficher_liste");
    cacher_element(liste_telecharger, "afficher_liste");
})