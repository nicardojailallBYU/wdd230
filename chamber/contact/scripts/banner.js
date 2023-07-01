var currentDay = new Date().getDay();
var banner = document.getElementById('banner');

if (currentDay === 1 || currentDay === 2) {
  banner.style.display = 'block'; // Show the banner
} else {
  banner.style.display = 'none'; // Hide the banner on other days
}