function showErrorMessage(lst) {
    document.getElementById(lst[0]).classList.add('error');
    document.getElementById(lst[1]).style.visibility = 'visible';
    document.getElementById(lst[2]).style.visibility = 'visible';
  };

  function resetInputField(lst) {
    document.getElementById(lst[0]).classList.remove('error');
    document.getElementById(lst[1]).style.visibility = 'hidden';
    document.getElementById(lst[2]).style.visibility = 'hidden';
  };

  function validateForm(event) {
    form = document.getElementById("signup-form");
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var firstName = form.firstName.value;
    var lastName =  form.lastName.value;
    var email = form.email.value;
    var password = form.password.value;

    f_name_params = ["first-name", "fname-message", "fname-icon"];
    l_name_params = ["last-name", "lname-message", "lname-icon"];
    email_params = ["email", "email-message", "email-icon"];
    password_params = ["password", "password-message", "password-icon"];

    if (firstName.trim().length < 1) {
      showErrorMessage(f_name_params);
    } else {
      resetInputField(f_name_params);
    }

    if (lastName.trim().length < 1) {
      showErrorMessage(l_name_params);
    } else {
      resetInputField(l_name_params);
    }

    if (email.trim().length < 1) {
      showErrorMessage(email_params);
    } else {
      resetInputField(email_params);
    }

    if (password.length < 6) {
      showErrorMessage(password_params);
    } else {
      resetInputField(password_params);
    }
  };