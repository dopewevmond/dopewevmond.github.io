var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var email = document.getElementById('email');
var error_message = document.getElementById('error');

function validateForm() {
    if(!email.value.match(mailformat)){
        error_message.style.visibility = 'visible';
    }
}
function resetError() {
    error_message.style.visibility = 'hidden';
}