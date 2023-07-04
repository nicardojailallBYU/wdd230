const imageUrls = ["images/logo1.PNG", "images/logo2.PNG", "images/logo3.PNG", "images/logo4.PNG"];

// Get the img element
const contempsImg = document.getElementById("contemps-img");

// Set initial index and update image every 2 seconds
let index = 0;
setInterval(() => {
  contempsImg.src = imageUrls[index];
  index = (index + 1) % imageUrls.length;
}, 2000);