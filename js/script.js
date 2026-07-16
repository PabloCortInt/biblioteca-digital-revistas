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