const enlaces = document.querySelectorAll('nav a');

enlaces.forEach(enlace => {

    enlace.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({

            behavior:"smooth"

        });

    });

});

const btnArriba = document.getElementById("btnArriba");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        btnArriba.style.display = "block";

    } else {

        btnArriba.style.display = "none";

    }

});

btnArriba.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});