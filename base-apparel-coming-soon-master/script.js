var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function validateForm() {
    var email = document.getElementById('email');
    if(!email.value.match(mailformat)){
        var message = document.getElementById('error-message');
        var icon = document.getElementById('error-icon');
        message.style.visibility = 'visible';
        icon.style.visibility = 'visible';
        email.style.borderColor = 'hsl(0, 93%, 68%)';
    }
};
function validateOnKeyDown() {
    var email = document.getElementById('email');
    if(email.value.match(mailformat)){
        var message = document.getElementById('error-message');
        var icon = document.getElementById('error-icon');
        message.style.visibility = 'hidden';
        icon.style.visibility = 'hidden';
        email.style.borderColor = 'rgb(182, 182, 182)';
    }           
}