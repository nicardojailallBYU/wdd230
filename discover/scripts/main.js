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

const today = new Date();

      const dayOfWeek = today.toLocaleDateString('en-US', { weekday: 'long' });
      const dayOfMonth = today.getDate();
      const month = today.toLocaleDateString('en-US', { month: 'long' });
      const year = today.getFullYear();

      const dateElement = document.getElementById('current-date');
      dateElement.textContent = ` ${dayOfWeek}, ${dayOfMonth} ${month} , ${year}`;


      

      document.addEventListener("DOMContentLoaded", function() {
        if (typeof(Storage) !== "undefined") {
          const currentDate = new Date();
          const currentDay = Math.floor(currentDate.getTime() / (24 * 60 * 60 * 1000)); 
 
          let lastVisitDay = localStorage.getItem("lastVisitDay");
        
          if (lastVisitDay) {
            const daysSinceLastVisit = currentDay - parseInt(lastVisitDay);
        
            const daysElement = document.getElementById("daysSinceLastVisit");
            daysElement.textContent = `Days since last visit: ${daysSinceLastVisit}`;
          }
          localStorage.setItem("lastVisitDay", currentDay.toString());
        }
      });