document.addEventListener("DOMContentLoaded", function() {
  var form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
  });

  function validateForm() {
    var userName = document.querySelector("input[name='userName']");
    var password = document.querySelector("input[name='password']");
    var passwordVerify = document.querySelector("input[name='passwordVerify']");
    var firstName = document.querySelector("input[name='firstName']");
    var lastName = document.querySelector("input[name='lastName']");
    var email = document.querySelector("input[name='email']");
    var phoneNumber = document.querySelector("input[name='phoneNumber']");
    var signUpNewsletter = document.querySelector("input[name='signUpNewsletter']:checked");

    var isValid = true;

    // Clear previous error messages
    clearErrorMessages();

    // Validate each field
    if (!validateRequired(userName)) {
      displayErrorMessage(userName, "Username is required.");
      isValid = false;
    } else if (!validateUsername(userName)) {
      displayErrorMessage(userName, "Username must only contain letters and numbers.");
      isValid = false;
    }

    if (!validateRequired(password)) {
      displayErrorMessage(password, "Password is required.");
      isValid = false;
    } else if (!validatePasswordLength(password)) {
      displayErrorMessage(password, "Password must be at least 8 characters long.");
      isValid = false;
    }

    if (!validateRequired(passwordVerify)) {
      displayErrorMessage(passwordVerify, "Password verification is required.");
      isValid = false;
    } else if (!validatePasswordMatch(password, passwordVerify)) {
      displayErrorMessage(passwordVerify, "Password verification does not match.");
      isValid = false;
    }

    if (!validateRequired(firstName)) {
      displayErrorMessage(firstName, "First name is required.");
      isValid = false;
    }

    if (!validateRequired(lastName)) {
      displayErrorMessage(lastName, "Last name is required.");
      isValid = false;
    }

    if (!validateEmail(email)) {
      displayErrorMessage(email, "Invalid email format.");
      isValid = false;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      displayErrorMessage(phoneNumber, "Invalid phone number format.");
      isValid = false;
    }

    // Set focus to the first erroneous input field
    if (!isValid) {
      setFocusToFirstError();
    }

    // If the form is valid, store data in cookies and submit it
    if (isValid) {
      storeDataInCookies(userName, password, firstName, lastName, email, phoneNumber, signUpNewsletter);
      form.submit();
      // Clear the form after submission
      clearFormFields();
    }
  }

  function validateRequired(input) {
    return input.value.trim() !== "";
  }

  function validateUsername(input) {
    var usernameRegex = /^[a-zA-Z0-9]+$/;
    return usernameRegex.test(input.value);
  }

  function validatePasswordLength(input) {
    return input.value.length >= 8;
  }

  function validatePasswordMatch(password, passwordVerify) {
    return password.value === passwordVerify.value;
  }

  function validateEmail(input) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input.value);
  }

  function validatePhoneNumber(input) {
    var phoneNumberRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    return phoneNumberRegex.test(input.value);
  }

  function displayErrorMessage(input, message) {
    var error = document.createElement("p");
    error.className = "error-message";
    error.textContent = message;
    input.parentNode.insertBefore(error, input.nextSibling);
  }

  function clearErrorMessages() {
    var errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function(errorMessage) {
      errorMessage.parentNode.removeChild(errorMessage);
    });
  }

  function setFocusToFirstError() {
    var firstError = document.querySelector(".error-message");
    if (firstError) {
      firstError.previousSibling.focus();
    }
  }

  function clearFormFields() {
    form.reset();
  }

  function storeDataInCookies(userName, password, firstName, lastName, email, phoneNumber, signUpNewsletter) {
    document.cookie = `userName=${userName.value}`;
    document.cookie = `password=${password.value}`;
    document.cookie = `firstName=${firstName.value}`;
    document.cookie = `lastName=${lastName.value}`;
    document.cookie = `email=${email.value}`;
    document.cookie = `phoneNumber=${phoneNumber.value}`;
    document.cookie = `signUpNewsletter=${signUpNewsletter.value}`;
  }
});
