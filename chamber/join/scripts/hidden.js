window.addEventListener('DOMContentLoaded', (event) => {
    
    var currentDate = new Date();
    
    
    var formattedDateTime = currentDate.toISOString();
    
    
    document.getElementById('hidden-field').value = formattedDateTime;
  });

  function redirectToThankYou() {
    window.location.href = "thankyou.html";
  }