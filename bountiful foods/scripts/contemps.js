const imageUrls = ["images/logo1.png", "images/logo2.png", "images/logo3.png", "images/logo4.png"];

// Get the img element
const contempsImg = document.getElementById("contemps-img");

// Set initial index and update image every 2 seconds
let index = 0;
setInterval(() => {
  contempsImg.src = imageUrls[index];
  index = (index + 1) % imageUrls.length;
}, 2000);