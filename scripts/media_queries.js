let largeur_window = window.innerWidth;

window.addEventListener("resize", ()=>{
    largeur_window = window.innerWidth;
})

const navigation_principale = document.getElementById("logo_principal");
const menu_principal = document.querySelectorAll(".navigation");


navigation_principale.addEventListener("click", ()=>{
    const navigation_secondaire = document.getElementById("nav_secondaire");
    if (largeur_window <= 768){
        menu_principal.forEach(element =>{
            //On ferme également la barre secondaire si elle est ouverte
            navigation_secondaire.classList.remove("afficher_barre_nav");
            element.classList.toggle("active");
        });
    };
})