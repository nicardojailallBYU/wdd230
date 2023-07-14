const imageUrls = ["images/logo1.webp", "images/logo2.webp", "images/logo3.webp", "images/logo4.webp", "images/logo5.webp"];

// Get the img element
const contempsImg = document.getElementById("contemps-img");

// Set initial index and update image every 2 seconds
let index = 0;
setInterval(() => {
  contempsImg.src = imageUrls[index];
  index = (index + 1) % imageUrls.length;
}, 2000);