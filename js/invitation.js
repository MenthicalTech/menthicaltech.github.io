// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var form = document.querySelector('form');
    var volunteerContainer = document.getElementById('volunteerContainer');
  
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
  
      // Get the volunteer names from the input fields
      for (var i = 1; i <= volunteerCount; i++) {
        var volunteerName = document.querySelector('input[name="volunteerName' + i + '"]').value;
        volunteerNames.push(volunteerName);
      }
  
      // Update the article content with the form data and volunteer names
      var article = document.getElementById('placeholderContent');
      article.innerHTML = '';
  
      var greeting = document.createElement('p');
      greeting.innerHTML = 'Hello ' + recipientName + '!<br/><br/>';
      article.appendChild(greeting);
  
      var invitationText = document.createElement('p');
      invitationText.innerHTML = 'You have been invited to volunteer for an event held by ' + organizationName + ' on ' +
        eventDate + '. Please come to the following website: ' + websiteURL +
        ' to sign up as a volunteer.<br/><br/>Thanks!<br/><br/>' + hostName;
      article.appendChild(invitationText);
  
      var volunteerList = document.createElement('ul');
      for (var j = 0; j < volunteerNames.length; j++) {
        var volunteerItem = document.createElement('li');
        volunteerItem.innerHTML = volunteerNames[j];
        volunteerList.appendChild(volunteerItem);
      }
      article.appendChild(volunteerList);
  
      // Clear the form inputs
      form.reset();
      volunteerContainer.innerHTML = ''; // Clear the volunteer input fields
    });
  
    // Add event listener for volunteer count change
    document.getElementById('volunteerCount').addEventListener('change', function() {
      var volunteerCount = parseInt(this.value);
      volunteerContainer.innerHTML = ''; // Clear the previous volunteer input fields
  
      for (var i = 1; i <= volunteerCount; i++) {
        var volunteerLabel = document.createElement('label');
        volunteerLabel.setAttribute('for', 'volunteerName' + i);
        volunteerLabel.innerHTML = 'Volunteer ' + i + ':';
  
        var volunteerInput = document.createElement('input');
        volunteerInput.setAttribute('type', 'text');
        volunteerInput.setAttribute('name', 'volunteerName' + i);
        volunteerInput.setAttribute('placeholder', 'Enter Volunteer ' + i + ' Name');
  
        volunteerContainer.appendChild(volunteerLabel);
        volunteerContainer.appendChild(volunteerInput);
        volunteerContainer.appendChild(document.createElement('br'));
      }
    });
  });
  