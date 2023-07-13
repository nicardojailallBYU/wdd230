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





  // Random fruit Display
  const fruitDataUrl = "https://api.jsonbin.io/b/60db3b3ec87b936ae6a3e2d7";

async function populateFruitOptions() {
  const response = await fetch(fruitDataUrl);
  if (response.ok) {
    const fruitData = await response.json();
    const selectElements = document.querySelectorAll("select[name^='fruit']");
    selectElements.forEach((selectElement) => {
      fruitData.forEach((fruit) => {
        const optionElement = document.createElement("option");
        optionElement.value = fruit;
        optionElement.textContent = fruit;
        selectElement.appendChild(optionElement);
      });
    });
  } else {
    console.log("Failed to fetch fruit data.");
  }
}

populateFruitOptions();


// thank you page
function redirectToThankYou() {
  window.location.href = "thank-you.html";
}
document.getElementById("fruit-drink").addEventListener("submit", redirectToThankYou);
document.getElementById("join-form").addEventListener("submit", redirectToThankYou);