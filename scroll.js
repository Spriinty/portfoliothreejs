document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // console.log(this);
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// scrollcompetences = document.querySelector('#scrollcompetences');
// // console.log(scrollcompetences);

// scrollcompetences.addEventListener('click', function(){
//     htmlappear = document.querySelector('#htmlappear');
//     htmlappear.style.visibility = 'visible';
// });