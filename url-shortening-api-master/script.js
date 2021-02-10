const navtoggler = document.querySelector('.navtoggler');
const navbar =  document.querySelector('#myNav');
function toggleNav() {
    navbar.classList.toggle('expanded');
    if (navtoggler.classList.contains('fa-bars')) {
        navtoggler.className = "fa fa-times navtoggler";
    } else {
        navtoggler.className = "fa fa-bars navtoggler";
    }

    if (navbar.classList.contains('expanded')) {
        disableScrolling();
    } else {
        enableScrolling();
    }

}

function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}