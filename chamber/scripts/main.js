const currentTimeEl = document.querySelector("#currentTime");
const currentYearEl = document.querySelector("#currentYear");

const formatDate = (date) => {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

const currentDate = new Date();
const formattedDate = formatDate(currentDate);

currentTimeEl.textContent = formattedDate;
currentYearEl.textContent = currentDate.getFullYear();
function toggleMenu() {
  document.getElementById("primary-nav").classList.toggle("open");
  document.getElementById("hamburger-btn").classList.toggle("open");
}
const x = document.getElementById('hamburger-btn');
x.onclick = toggleMenu;