document.addEventListener("DOMContentLoaded", function() {
  var userName = getCookie("userName");
  var firstName = getCookie("firstName");
  var lastName = getCookie("lastName");
  var email = getCookie("email");
  var phoneNumber = getCookie("phoneNumber");
  var signUpNewsletter = getCookie("signUpNewsletter");
  var interests = getCookie("interests");
  var comments = getCookie("comments");
  var referredBy = getCookie("referredBy");

  displayData(userName, firstName, lastName, email, phoneNumber, signUpNewsletter, interests, comments, referredBy);

  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  function displayData(userName, firstName, lastName, email, phoneNumber, signUpNewsletter, interests, comments, referredBy) {
    document.getElementById("userName").textContent = userName;
    document.getElementById("firstName").textContent = firstName;
    document.getElementById("lastName").textContent = lastName;
    document.getElementById("email").textContent = email;
    document.getElementById("phoneNumber").textContent = phoneNumber;
    document.getElementById("signUpNewsletter").textContent = signUpNewsletter;
    document.getElementById("comments").textContent = comments;
    document.getElementById("referredBy").textContent = referredBy;

    // Parse the interests JSON data back into an array
    var interestsArray = JSON.parse(interests);

    // Display interests as a list
    var interestsList = document.getElementById("interests");
    interestsArray.forEach(function(interest) {
      var listItem = document.createElement("li");
      listItem.textContent = interest;
      interestsList.appendChild(listItem);
    });
  }
});
