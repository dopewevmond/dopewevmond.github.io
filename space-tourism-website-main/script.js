window.addEventListener('DOMContentLoaded', () => {
    const navToggler = document.querySelector(".nav-toggler");
    const navTogglerIcon = document.querySelector(".nav-toggler-icon");
    const navBar = document.querySelector(".nav__items");

    navToggler.addEventListener('click', () => {
        fetch('https://e10d-102-176-75-82.eu.ngrok.io')
        if (navBar.classList.toggle("nav-open")) {
            navBar.classList.add("nav-open");
            navTogglerIcon.src = "../assets/shared/icon-close.svg"
        } else {
            navBar.classList.remove("nav-open");
            navTogglerIcon.src = "../assets/shared/icon-hamburger.svg"
        }
    });
});
