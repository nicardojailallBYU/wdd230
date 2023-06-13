
const requestURL = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);

    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });

function displayProphets(prophet) {
 
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let birthDate = document.createElement('p');
  let birthPlace = document.createElement('p');
  let hrborder = document.createElement('hr')
  let portrait = document.createElement('img');
  let order = ``

  if (prophet.order == 1) {
    order = `${prophet.order}st`
  } else if (prophet.order == 2) {
    order = `${prophet.order}nd`
  } else if (prophet.order == 3) {
    order = `${prophet.order}rd`
  } else {
    order = `${prophet.order}th`
  }

  h2.textContent = `${prophet.name} ${prophet.lastname}`
  birthDate.textContent = `Birth Date: ${prophet.birthdate}`
  birthPlace.textContent = `Birth Place: ${prophet.birthplace}`

  portrait.setAttribute('src', prophet.imageurl);
  portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${order} Latter-day President`);
  portrait.setAttribute('loading', 'lazy');

  
  card.appendChild(h2);
  card.appendChild(birthDate);
  card.appendChild(birthPlace);
  card.appendChild(hrborder);
  card.appendChild(portrait);
  
  cards.appendChild(card);
}