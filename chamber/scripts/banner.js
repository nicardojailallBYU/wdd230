var currentDay = new Date().getDay();
if (currentDay === 5 || currentDay === 6) {
  var banner = document.getElementById('banner');
  banner.classList.remove('hidden');
}