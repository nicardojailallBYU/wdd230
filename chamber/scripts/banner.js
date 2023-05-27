var currentDay = new Date().getDay();
if (currentDay === 1 || currentDay === 2) {
  var banner = document.getElementById('banner');
  banner.classList.remove('hidden');
}