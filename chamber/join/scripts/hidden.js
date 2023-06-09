window.addEventListener('DOMContentLoaded', (event) => {
    // Get the current date and time
    var currentDate = new Date();
    
    // Format the date and time as desired (adjust as needed)
    var formattedDateTime = currentDate.toISOString();
    
    // Set the value of the hidden field
    document.getElementById('hidden-field').value = formattedDateTime;
  });

  function redirectToThankYou() {
    window.location.href = "thankyou.html";
  }