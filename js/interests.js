document.addEventListener("DOMContentLoaded", function() {
  var form = document.querySelector("#interestsForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    saveDataToCookies();
    window.location.href = "confirm.html";
  });

  function saveDataToCookies() {
    var formData = new FormData(form);
    var cookies = document.cookie.split("; ");
    var cookieKeys = cookies.map(function(cookie) {
      return cookie.split("=")[0];
    });

    formData.forEach(function(value, name) {
      // Check if the field is not already stored in cookies
      if (!cookieKeys.includes(name)) {
        document.cookie = `${name}=${value}`;
      }
    });
  }
});
