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