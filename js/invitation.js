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
      var volunteerCount = parseInt(document.querySelector('input[name="volunteerCount"]').value);

      // Create an array to store the volunteer names
      var volunteerNames = [];

      // Prompt the user to enter the names of the volunteers
      for (var i = 0; i < volunteerCount; i++) {
          var volunteerName = prompt('Enter the name of Volunteer ' + (i + 1));
          volunteerNames.push(volunteerName);
      }

      // Update the article content with the form data and volunteer names
      var article = document.getElementById('placeholderContent');
      article.innerHTML = '';

      for (var j = 0; j < volunteerNames.length; j++) {
          var invitation = document.createElement('p');
          invitation.innerHTML = 'Hello ' + volunteerNames[j] + '!<br/><br/>' +
              'You have been invited to volunteer for an event held by ' + organizationName + ' on ' +
              eventDate + '. Please come to the following website: ' + websiteURL +
              ' to sign up as a volunteer.<br/><br/>Thanks!<br/><br/>' + hostName;

          article.appendChild(invitation);
      }
      
      // Clear the form inputs
      form.reset();
  });
});
