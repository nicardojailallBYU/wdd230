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


      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute("data-src");
            const placeholderDuration = 1000; 
      
            if (src) {
              setTimeout(() => {
                img.src = src;
                img.removeAttribute("data-src");
                img.addEventListener("load", () => {
                  img.style.opacity = 1;
                  img.style.transition = "opacity 0.5s";
                });
                img.addEventListener("error", () => {
                  img.style.opacity = 1;
                  img.style.transition = "opacity 0.5s";
                });
              }, placeholderDuration);
            }
      
            observer.unobserve(img);
          }
        });
      });
      
      const images = document.querySelectorAll("img[data-src]");
      images.forEach((img) => {
        img.style.opacity = 0;
        imageObserver.observe(img);
      });

      const image = document.getElementById('map');
const paragraph = document.getElementById('p-map');

image.addEventListener('load', () => {
  paragraph.style.left = '0';
});