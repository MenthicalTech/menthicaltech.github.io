document.addEventListener("DOMContentLoaded", function() {
  var form = document.querySelector("#interestsForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
  });

  function validateForm() {
    var interests = form.querySelectorAll("input[name='interests']:checked");
    // var signUpNewsletter = form.querySelector("input[name='signUpNewsletter']:checked");

    var isValid = true;

    // Clear previous error messages
    clearErrorMessages();

    // Validate interests
    if (interests.length === 0) {
      displayErrorMessage(form.querySelector("label[for='interests']"), "Please select at least one interest.");
      isValid = false;
    }

    // Validate newsletter sign up
    // if (!signUpNewsletter) {
    //   displayErrorMessage(form.querySelector("label[for='signUpNewsletter']"), "Please select your newsletter sign-up preference.");
    //   isValid = false;
    // }

    // Set focus to the first erroneous input field
    if (!isValid) {
      setFocusToFirstError();
    }

    // If the form is valid, store data in cookies and submit it
    if (isValid) {
      saveDataToCookies();
      form.submit();
      // Clear the form after submission
      clearFormFields();
    }
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

  function saveDataToCookies() {
    var formData = new FormData(form);
    var cookies = document.cookie.split("; ");
    var cookieKeys = cookies.map(function(cookie) {
      return cookie.split("=")[0];
    });

    // Set default value to "None" for comments and referredBy if they are blank
    if (!formData.get("comments")) {
      formData.set("comments", "None");
    }

    if (!formData.get("referredBy")) {
      formData.set("referredBy", "None");
    }

    // Remove previously stored interests data from cookies
    cookieKeys.forEach(function(cookieKey) {
      if (cookieKey.startsWith("interests")) {
        document.cookie = cookieKey + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      }
    });

    // Save new interests data to cookies as a list
    var interests = [];
    formData.getAll("interests").forEach(function(interest) {
      interests.push(interest);
    });

    // Save other form data to cookies
    formData.forEach(function(value, name) {
      // Check if the field is not already stored in cookies
      if (!cookieKeys.includes(name)) {
        document.cookie = `${name}=${value}`;
      }
    });

    // Save interests data in a single cookie with name "interests"
    document.cookie = `interests=${JSON.stringify(interests)}`;
    document.cookie = `comments=${formData.get("comments")}`;
    document.cookie = `referredBy=${formData.get("referredBy")}`;
  }
});
  