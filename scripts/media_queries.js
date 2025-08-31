let largeur_window = window.innerWidth;

window.addEventListener("resize", ()=>{
    largeur_window = window.innerWidth;
})

const navigation_principale = document.getElementById("logo_principal");
const menu_principal = document.querySelectorAll(".navigation");


navigation_principale.addEventListener("click", ()=>{
    const navigation_secondaire = document.getElementById("nav_secondaire");
    if (largeur_window <= 768){

        if(navigation_secondaire.classList.contains("afficher_barre_nav")){
            //On ferme également la barre secondaire si elle est ouverte
            cacher_barre();
            setTimeout(() => {
                menu_principal.forEach(element =>{
                    element.classList.toggle("active");
                });
            }, 650);
        }else{
            menu_principal.forEach(element =>{
                element.classList.toggle("active");
            });

        }
    };
})