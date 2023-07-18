document.addEventListener('DOMContentLoaded', (event) => {
  const specialDrinksSection = document.querySelector('#special-drinks');

  fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(drink => {
        const drinkElement = document.createElement('div');
        drinkElement.classList.add('drink');

        const nameElement = document.createElement('h1');
        nameElement.textContent = drink.name;
        nameElement.classList.add('menu1');
        drinkElement.appendChild(nameElement);

        const detailsElement = document.createElement('p');
        detailsElement.textContent = `Total Calories: ${drink.nutritions.calories}`;
        drinkElement.appendChild(detailsElement);

        const nutritionalFactsElement = createNutritionalFacts(drink.nutritions);
        drinkElement.appendChild(nutritionalFactsElement);

        specialDrinksSection.appendChild(drinkElement);
      });
    })
    .catch(error => console.error('Error:', error));
});

function createNutritionalFacts(nutritions) {
  const nutritionalFactsElement = document.createElement('div');
  nutritionalFactsElement.classList.add('nutritional-facts');

  const carbohydratesRow = createNutritionalFactRow('Carbohydrates:', nutritions.carbohydrates);
  const proteinRow = createNutritionalFactRow('Protein:', nutritions.protein);
  const fatRow = createNutritionalFactRow('Fat:', nutritions.fat);
  const sugarRow = createNutritionalFactRow('Sugar:', nutritions.sugar);

  nutritionalFactsElement.appendChild(carbohydratesRow);
  nutritionalFactsElement.appendChild(proteinRow);
  nutritionalFactsElement.appendChild(fatRow);
  nutritionalFactsElement.appendChild(sugarRow);

  return nutritionalFactsElement;
}

function createNutritionalFactRow(label, value) {
  const row = document.createElement('div');
  row.classList.add('nutritional-fact-row');

  const labelElement = document.createElement('span');
  labelElement.classList.add('nutritional-fact-label');
  labelElement.textContent = label;

  const valueElement = document.createElement('span');
  valueElement.classList.add('nutritional-fact-value');
  valueElement.textContent = ` ${value}`;

  row.appendChild(labelElement);
  row.appendChild(valueElement);

  return row;
}

  document.addEventListener('DOMContentLoaded', (event) => {
    const drinkMixElements = document.querySelectorAll('.drink-mix');
  
    const fruits = [
      { name: 'Apple', calories: 52, sugar: 10, carbohydrates: 11.4, image: 'images/apple.webp' },
      { name: 'Banana', calories: 96, sugar: 17, carbohydrates: 22,image: 'images/banana.webp' },
      { name: 'Cherry', calories: 50, sugar: 10, carbohydrates: 12,image: 'images/cherry.webp' },
    ];
  
    drinkMixElements.forEach((element) => {
      const randomIndex = Math.floor(Math.random() * fruits.length);
      const fruit = fruits[randomIndex];
  
      const imageElement = element.querySelector('.fruit-image');
      imageElement.src = fruit.image;
      imageElement.alt = fruit.name;
  
      const nameElement = element.querySelector('.fruit-name');
      nameElement.textContent = fruit.name;
  
      const caloriesElement = element.querySelector('.calories');
      caloriesElement.textContent = `Calories: ${fruit.calories}`;
  
      const sugarElement = element.querySelector('.sugar');
      sugarElement.textContent = `Sugar: ${fruit.sugar}`;

      const carbohydratesElement = element.querySelector('.carbohydrates');
      carbohydratesElement.textContent = `Carbs: ${fruit.carbohydrates}`;
    });
  });




  document.addEventListener('DOMContentLoaded', (event) => {
    const fruit1Select = document.getElementById('fruit1');
    const fruit2Select = document.getElementById('fruit2');
    const fruit3Select = document.getElementById('fruit3');

    const blankOption = document.createElement('option');
    blankOption.value = '';
    blankOption.textContent = 'Select Fruit';
    fruit1Select.appendChild(blankOption.cloneNode(true));
    fruit2Select.appendChild(blankOption.cloneNode(true));
    fruit3Select.appendChild(blankOption.cloneNode(true));
  
    fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(fruit => {
          const option = document.createElement('option');
          option.value = fruit.name;
          option.textContent = fruit.name;
          fruit1Select.appendChild(option.cloneNode(true));
          fruit2Select.appendChild(option.cloneNode(true));
          fruit3Select.appendChild(option.cloneNode(true));
        });
      })
      .catch(error => console.error('Error:', error));
  });


  // Function to handle form submission
  function submitForm() {
    const currentCount = localStorage.getItem('fruit-drink-count');
    const newCount = currentCount ? parseInt(currentCount) + 1 : 1;
    localStorage.setItem('fruit-drink-count', newCount);
    updateDrinkCount(newCount);
  }
  function updateDrinkCount(count) {
    const drinkCountSpan = document.getElementById('drink-count');
    drinkCountSpan.textContent = count;
  }
  function populateDropdowns() {
  }
  document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('fruit-drink-count')) {
      populateDropdowns();
      const currentCount = localStorage.getItem('fruit-drink-count');
      updateDrinkCount(currentCount);
    }
  });
  