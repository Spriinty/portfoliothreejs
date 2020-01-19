//--------------Header-------------

//Récupération de la div dans une constante à laquelle appliquer l'effet
const parallax = document.querySelector("#competences");
//Ajout de l'évènement scroll 
window.addEventListener("scroll", function(){
//Création d'une variable pour définir l'action sur l'axe Y
    let offset = window.pageYOffset;
//on modifie la position du background de la constante sur l'axe Y 
parallax.style.backgroundPositionY = offset * -0.4 + "px";
});
