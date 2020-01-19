divCompetencesAppear = document.querySelector('#competences');
sliderCompetences = document.querySelector('#slide');

colonneCompetencesAppear = document.querySelectorAll('.colonneCompetencesAppear');
// console.log(divCompetencesAppear.offsetTop);


// window.addEventListener('scroll', function()
// {
//     if(window.pageYOffset >= divCompetencesAppear.offsetTop)
//     {
//         colonneCompetencesAppear.forEach(element => 
//             {
//             element.classList.remove('unviewable');
//             element.classList.add('viewable');
//             element.style.transition = "1s ease";

//             });
//     }
//     else
//     {
//         colonneCompetencesAppear.forEach(element => 
//             {
//             element.classList.remove('viewable');
//             element.classList.add('unviewable');
//             element.style.transition = "0.5s 0.5s ease";
//             });
//     };
// });



/*-----SECTION PROJET-----*/

window.addEventListener('scroll', function(){
    if(window.pageYOffset >= divCompetencesAppear.offsetTop){
        // console.log(window.pageYOffset);
        // console.log(divCompetencesAppear.offsetTop);
        colonneCompetencesAppear[0].classList.remove('unviewable');
        colonneCompetencesAppear[0].classList.add('viewable');
        colonneCompetencesAppear[0].style.transition = "0.5s ease-in";

        colonneCompetencesAppear[1].classList.remove('unviewable');
        colonneCompetencesAppear[1].classList.add('viewable');
        colonneCompetencesAppear[1].style.transition = "1s ease-in";

        colonneCompetencesAppear[2].classList.remove('unviewable');
        colonneCompetencesAppear[2].classList.add('viewable');
        colonneCompetencesAppear[2].style.transition = "2s ease-in";

        colonneCompetencesAppear[3].classList.remove('unviewable');
        colonneCompetencesAppear[3].classList.add('viewable');
        colonneCompetencesAppear[3].style.transition = "0.5s ease-in";

        colonneCompetencesAppear[4].classList.remove('unviewable');
        colonneCompetencesAppear[4].classList.add('viewable');
        colonneCompetencesAppear[4].style.transition = "1s ease-in";

        colonneCompetencesAppear[5].classList.remove('unviewable');
        colonneCompetencesAppear[5].classList.add('viewable');
        colonneCompetencesAppear[5].style.transition = "2s ease-in"

        colonneCompetencesAppear[6].classList.remove('unviewable');
        colonneCompetencesAppear[6].classList.add('viewable');
        colonneCompetencesAppear[6].style.transition = "0.5s ease-in";

        colonneCompetencesAppear[7].classList.remove('unviewable');
        colonneCompetencesAppear[7].classList.add('viewable');
        colonneCompetencesAppear[7].style.transition = "1s ease-in";

        colonneCompetencesAppear[8].classList.remove('unviewable');
        colonneCompetencesAppear[8].classList.add('viewable');
        colonneCompetencesAppear[8].style.transition = "2s ease-in";

        colonneCompetencesAppear[9].classList.remove('unviewable');
        colonneCompetencesAppear[9].classList.add('viewable');
        colonneCompetencesAppear[9].style.transition = "0.5s ease-in";

        colonneCompetencesAppear[10].classList.remove('unviewable');
        colonneCompetencesAppear[10].classList.add('viewable');
        colonneCompetencesAppear[10].style.transition = "1s ease-in";

        colonneCompetencesAppear[11].classList.remove('unviewable');
        colonneCompetencesAppear[11].classList.add('viewable');
        colonneCompetencesAppear[11].style.transition = "2s ease-in";

    }
    else{
        colonneCompetencesAppear[0].classList.remove('viewable');
        colonneCompetencesAppear[0].classList.add('unviewable');
        colonneCompetencesAppear[0].style.transition = "2s 0.2s ease-in";

        colonneCompetencesAppear[1].classList.remove('viewable');
        colonneCompetencesAppear[1].classList.add('unviewable');
        colonneCompetencesAppear[1].style.transition = "1s 0.2s ease-in";

        colonneCompetencesAppear[2].classList.remove('viewable');
        colonneCompetencesAppear[2].classList.add('unviewable');
        colonneCompetencesAppear[2].style.transition = "0.5s ease-in";

        colonneCompetencesAppear[3].classList.remove('viewable');
        colonneCompetencesAppear[3].classList.add('unviewable');
        colonneCompetencesAppear[3].style.transition = "2s 0.2s ease-in";

        colonneCompetencesAppear[4].classList.remove('viewable');
        colonneCompetencesAppear[4].classList.add('unviewable');
        colonneCompetencesAppear[4].style.transition = "1s 0.2s ease-in";

        colonneCompetencesAppear[5].classList.remove('viewable');
        colonneCompetencesAppear[5].classList.add('unviewable');
        colonneCompetencesAppear[5].style.transition = "0.5s ease-in";

        colonneCompetencesAppear[6].classList.remove('viewable');
        colonneCompetencesAppear[6].classList.add('unviewable');
        colonneCompetencesAppear[6].style.transition = "2s 0.2s ease-in";

        colonneCompetencesAppear[7].classList.remove('viewable');
        colonneCompetencesAppear[7].classList.add('unviewable');
        colonneCompetencesAppear[7].style.transition = "1s 0.2s ease-in";

        colonneCompetencesAppear[8].classList.remove('viewable');
        colonneCompetencesAppear[8].classList.add('unviewable');
        colonneCompetencesAppear[8].style.transition = "0.5s ease-in";

        colonneCompetencesAppear[9].classList.remove('viewable');
        colonneCompetencesAppear[9].classList.add('unviewable');
        colonneCompetencesAppear[9].style.transition = "2s 0.2s ease-in";

        colonneCompetencesAppear[10].classList.remove('viewable');
        colonneCompetencesAppear[10].classList.add('unviewable');
        colonneCompetencesAppear[10].style.transition = "1s 0.2s ease-in";

        colonneCompetencesAppear[11].classList.remove('viewable');
        colonneCompetencesAppear[11].classList.add('unviewable');
        colonneCompetencesAppear[11].style.transition = "0.5s ease-in";
    }
});
