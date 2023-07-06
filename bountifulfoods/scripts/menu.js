document.addEventListener('DOMContentLoaded', (event) => {
    const specialDrinksSection = document.querySelector('#special-drinks');
  
    fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(drink => {
          const drinkElement = document.createElement('div');
          drinkElement.classList.add('drink');
  
          const nameElement = document.createElement('h4');
          nameElement.textContent = drink.name;
          drinkElement.appendChild(nameElement);
  
          const detailsElement = document.createElement('p');
          detailsElement.innerHTML = `Family: ${drink.family}<br>Order: ${drink.order}<br>Calories: ${drink.nutritions.calories}`;
          drinkElement.appendChild(detailsElement);
  
          const tableElement = createNutritionalFactsTable(drink.nutritions);
          drinkElement.appendChild(tableElement);
  
          specialDrinksSection.appendChild(drinkElement);
        });
      })
      .catch(error => console.error('Error:', error));
  });
  
  function createNutritionalFactsTable(nutritions) {
    const tableElement = document.createElement('table');
    tableElement.classList.add('nutritional-facts');
  
    const tableBody = document.createElement('tbody');
    const totalCaloriesRow = createTableRow('Total Calories', nutritions.calories);
    const carbohydratesRow = createTableRow('Carbohydrates', nutritions.carbohydrates);
    const proteinRow = createTableRow('Protein', nutritions.protein);
    const fatRow = createTableRow('Fat', nutritions.fat);
    const sugarRow = createTableRow('Sugar', nutritions.sugar);
  
    tableBody.appendChild(totalCaloriesRow);
    tableBody.appendChild(carbohydratesRow);
    tableBody.appendChild(proteinRow);
    tableBody.appendChild(fatRow);
    tableBody.appendChild(sugarRow);
  
    tableElement.appendChild(tableBody);
  
    return tableElement;
  }
  
  function createTableRow(label, value) {
    const row = document.createElement('tr');
    const labelCell = document.createElement('td');
    const valueCell = document.createElement('td');
  
    labelCell.textContent = label;
    valueCell.textContent = value;
  
    row.appendChild(labelCell);
    row.appendChild(valueCell);
  
    return row;
  }

  document.addEventListener('DOMContentLoaded', (event) => {
    const drinkMixElements = document.querySelectorAll('.drink-mix');
  
    const fruits = [
      { name: 'Apple', calories: 52, sugar: 10, carbohydrates: 11.4, image: 'images/apple.png' },
      { name: 'Banana', calories: 96, sugar: 17, carbohydrates: 22,image: 'images/banana.png' },
      { name: 'Cherry', calories: 50, sugar: 10, carbohydrates: 12,image: 'images/cherry.png' },
      // Add more fruits with their respective image paths
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