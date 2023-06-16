document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form');
  var volunteerContainer = document.getElementById('volunteerContainer');
  var records = []; // Array to store form data records

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var organizationName = document.querySelector('input[name="organizationName"]').value;
    var eventDate = document.querySelector('input[name="eventDate"]').value;
    var websiteURL = document.querySelector('input[name="websiteURL"]').value;
    var hostName = document.querySelector('input[name="hostName"]').value;
    var volunteerCount = parseInt(document.querySelector('input[name="volunteerCount"]').value);

    var volunteerNames = [];
    for (var i = 1; i <= volunteerCount; i++) {
      var volunteerName = document.querySelector('input[name="volunteerName' + i + '"]').value;
      volunteerNames.push(volunteerName);
    }

    // Store the form data in a record
    var record = {
      organizationName: organizationName,
      eventDate: eventDate,
      websiteURL: websiteURL,
      hostName: hostName,
      volunteerNames: volunteerNames
    };

    records.push(record); // Add the record to the array of records

    // Update the article content with the form data and volunteer names
    var article = document.getElementById('placeholderContent');
    article.innerHTML = '';

    for (var j = 0; j < records.length; j++) {
      var currentRecord = records[j];

      for (var j = 0; j < volunteerNames.length; j++) {
        var invitation = document.createElement('p');
        invitation.innerHTML = 'Hello ' + currentRecord.volunteerNames[j] + '!<br/><br/>' +
            'You have been invited to volunteer for an event held by ' + currentRecord.organizationName + ' on ' +
            currentRecord.eventDate + '. Please come to the following website: ' + currentRecord.websiteURL +
            ' to sign up as a volunteer.<br/><br/>Thanks!<br/><br/>' + currentRecord.hostName;

        article.appendChild(invitation);
        article.appendChild(document.createElement('hr')); // Add a separator between invitation messages
    }
    }

    form.reset();
    volunteerContainer.innerHTML = '';
  });

  // Volunteer Names input
  document.getElementById('volunteerCount').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      var volunteerCount = parseInt(this.value);
      volunteerContainer.innerHTML = '';

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
    }
  });
});
