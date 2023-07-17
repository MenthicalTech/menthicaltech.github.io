document.addEventListener("DOMContentLoaded", function() {
  var userName = getCookie("userName");
  var firstName = getCookie("firstName");
  var lastName = getCookie("lastName");
  var email = getCookie("email");
  var phoneNumber = getCookie("phoneNumber");
  var signUpNewsletter = getCookie("signUpNewsletter");

  displayData(userName, firstName, lastName, email, phoneNumber, signUpNewsletter);

  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }


  function displayData(userName, firstName, lastName, email, phoneNumber, signUpNewsletter) {
    document.getElementById("userName").textContent = userName;
    document.getElementById("firstName").textContent = firstName;
    document.getElementById("lastName").textContent = lastName;
    document.getElementById("email").textContent = email;
    document.getElementById("phoneNumber").textContent = phoneNumber;
    document.getElementById("signUpNewsletter").textContent = signUpNewsletter;
  }
});
