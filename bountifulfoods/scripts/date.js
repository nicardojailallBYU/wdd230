const currentTimeEl = document.querySelector("#currentTime");


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