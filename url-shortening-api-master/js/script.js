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




function getRequestObject() {
    if (XMLHttpRequest) {
        return (new XMLHttpRequest());
    } else if (ActiveXObject) {
        return (new ActiveXObject(Microsoft.XMLHTTP));
    } else {
        alert("AJAX IS NOT SUPPORTED ON THIS BROWSER");
    }
}

const access_token = 'o_7mevovraqi';
const input_field = document.querySelector("#link-input");

function makePostRequest(api_endpoint) {
    let input_value = input_field.nodeValue;
    var request = getRequestObject();

    request.open('POST', api_endpoint, true);
    request.setRequestHeader('Authorization', `Bearer ${access_token}`);
    request.send(`long_url=${input_value}`);


    request.onload = function() {
        if(this.status == 200) {
            console.log(this.responseText);
        }
    }
}

document.querySelector("#shorten").addEventListener("click", makePostRequest('https://api-ssl.bitly.com/v4/shorten'));