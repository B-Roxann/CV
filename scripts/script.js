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

btn_experiences.addEventListener("click", ()=>
    developper_menu(btn_experiences, liste_experiences)
);

btn_competences.addEventListener("click", ()=>
    developper_menu(btn_competences, liste_competences)
);

btn_telecharger.addEventListener("click", ()=>
    developper_menu(btn_telecharger, liste_telecharger)
);

