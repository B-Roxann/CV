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
 * @param {*} btn_menu le bouton qui ouvre son menu
 * @param {*} liste_menu le menu déroulant
 * @param {classe} ajuster_taille Si c'est menu télécharger
*/
function developper_menu(btn_menu, liste_menu, ajuster_taille =  null){
    const is_barre_affichee = navigation_secondaire.classList.contains("afficher_barre_nav");
    const is_liste_affichee = liste_menu.classList.contains("afficher_liste");

    /**Si le parametre ajuster_taille est renseigné
    alors on va modifier la taille de la barre de navigation secondaire*/

    //Si la barre est déjà affichée
    if(is_barre_affichee){
        //et que la liste choisie est déjà affichée => on la cache
        if(is_liste_affichee){
            toggle_visibility(liste_menu, "afficher_liste");   //On cache la liste
            retirer_classe(navigation_secondaire);    //On cache la barre_de_nav
            if (ajuster_taille){    //Si menu télécharger qui était ouvert
                    setTimeout(() => {  //On retirera la taille ajustée après fermeture du menu
                        toggle_visibility(navigation_secondaire, ajuster_taille);
                    }, 600);
                }
        }
        else{   //Sinon c'est une autre liste qui est affichée => on ferme le menu et ouvre le nouveau
            cacher_les_listes(liste_menu);  //On cache les autres menus
            retirer_classe(navigation_secondaire);    //On cache la barre_de_nav
            setTimeout(() => {  //On attend 600ms pour que l'autre menu se ferme puis => on affiche le nouveau menu 
                if (ajuster_taille){    //Si on ouvre le menu télécharger => on ajuste la taille
                    toggle_visibility(navigation_secondaire, ajuster_taille);
                    }
                else{   //Autre menu => on vérifie que ce n'était pas le menu télécharger qui était ouvert
                    retirer_classe(navigation_secondaire, "ajuster_barre_nav");
                }
                toggle_visibility(navigation_secondaire, "afficher_barre_nav");    //Afficher la barre_de_nav
                toggle_visibility(liste_menu, "afficher_liste");   //Afficher le menu
                alignerListe(navigation_secondaire, btn_menu);  //Aligner la barre du menu à son boutton
            }, 600);
        }
    }
    else{   //Sinon rien n'est affiché => on affiche la barre avec le menu
        if (ajuster_taille){    //Si c'est le menu télécharger => ajuster la taille de la box
                toggle_visibility(navigation_secondaire, ajuster_taille);
            }
            toggle_visibility(liste_menu, "afficher_liste");    //On affiche la liste
            alignerListe(navigation_secondaire, btn_menu);  //On aligne
            toggle_visibility(navigation_secondaire, "afficher_barre_nav");  //On affiche la nav
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
            retirer_classe(liste_competences, "afficher_liste")
            retirer_classe(liste_telecharger, "afficher_liste")
        case liste_competences:
            retirer_classe(liste_experiences, "afficher_liste")
            retirer_classe(liste_telecharger, "afficher_liste")
        case liste_telecharger:
            retirer_classe(liste_experiences, "afficher_liste")
            retirer_classe(liste_competences, "afficher_liste")
    }
}


/**
 * Cette fonction permet d'afficher
 * un élément
 * @param {*} element 
 * @param {*} classe 
 */
function toggle_visibility(element, classe){
    element.classList.toggle(classe);
}


/**
 * Cette fonction permet de retirer une classe
 * d'affichage présente dans un élément
 * @param {*} element 
 * @param {*} classe 
 */
function retirer_classe(element, classe = null){
    //Ici on vérifie que notre élément passé n'est pas la barre de navigation secondaire    
    if(classe){
        //On retire la classe demandée
        element.classList.remove(classe);
    }
    else{
        //Si non alors on retire par défaut les 2 classes d'affichage possible de la barre_nav
        element.classList.remove("afficher_barre_nav");
        element.classList.remove("afficher_barre_telecharger");
    }
}

/**Si redimenssionnement de la page => on retire la navigation secondaire */
window.addEventListener("resize", ()=>{
    retirer_classe(navigation_secondaire, "afficher_barre_nav");
    retirer_classe(liste_experiences, "afficher_liste");
    retirer_classe(liste_competences, "afficher_liste");
    retirer_classe(liste_telecharger, "afficher_liste");
})