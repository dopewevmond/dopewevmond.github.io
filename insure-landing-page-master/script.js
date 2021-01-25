let toggler_icon = document.getElementsByClassName("navtoggler")[0];
let navbar = document.getElementsByClassName("navbar-links")[0];

toggler_icon.addEventListener("click", function(){
    navbar.classList.toggle("show-navbar");
    if (document.getElementsByClassName("fa-bars")[0]) {
        document.getElementsByClassName("fa-bars")[0].className = "fa fa-times";
    } else {
        document.getElementsByClassName("fa-times")[0].className = "fa fa-bars";
    }
});

document.addEventListener("click", function(event){
    var clickedInsideNavbar = navbar.contains(event.target);
    var clickedOnToggler = toggler_icon.contains(event.target);
    // console.log("Clicked inside the navbar: ",clickedInsideNavbar);
    // console.log("clicked on nav toggler: ", clickedOnToggler);
    // console.log("Contains show navbar: ", navbar.classList.contains("show-navbar"));
    if (!clickedOnToggler && !clickedInsideNavbar && navbar.classList.contains("show-navbar")) {
        navbar.classList.remove("show-navbar");
        document.getElementsByClassName("fa-times")[0].className = "fa fa-bars";
    }
});