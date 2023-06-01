// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var form = document.querySelector('form');
  
    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get the form input values
      var recipientName = document.querySelector('input[name="recipientName"]').value;
      var organizationName = document.querySelector('input[name="organizationName"]').value;
      var eventDate = document.querySelector('input[name="eventDate"]').value;
      var websiteURL = document.querySelector('input[name="websiteURL"]').value;
      var hostName = document.querySelector('input[name="hostName"]').value;
  
      // Update the article content with the form data
      var article = document.getElementById('placeholderContent');
      article.innerHTML = 'Hello <span id="recipientName">' + recipientName + '</span>!' +
        '<br/><br/> You have been invited to volunteer for an event held by <span id="organizationName">' +
        organizationName + '</span> on <span id="eventDate">' + eventDate + '</span>. Please come to the following website: <span id="websiteURL">' +
        websiteURL + '</span> to sign up as a volunteer.' +
        '<br/><br/> Thanks!' +
        '<br/><br/>' +
        '<span id="hostName">' + hostName + '</span>';
        
      // Clear the form inputs
      form.reset();
    });
  });
  