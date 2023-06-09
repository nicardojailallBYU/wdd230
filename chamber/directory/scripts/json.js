const requestURL = 'data.json';
const directoryDiv = document.querySelector('.directory');
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');

function displayDirectories1(directories) {
  let directory = document.createElement('section');
  directory.classList.add('list-view');
  let h3 = document.createElement('h3');
  h3.textContent = directories.name;

  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  p1.textContent = directories.address;
  p2.textContent = directories.phone;

  let a3 = document.createElement('a');
  a3.textContent = directories.website;
  a3.href = directories.website;
  a3.target = '_blank';

  p3.appendChild(a3);

  directory.appendChild(h3);
  directory.appendChild(p1);
  directory.appendChild(p2);
  directory.appendChild(p3);

  directoryDiv.appendChild(directory);
}

function displayDirectories(directories) {
  let directory = document.createElement('section');
  let h3 = document.createElement('h3');
  h3.textContent = directories.name;
  let img = document.createElement("img");
  img.setAttribute("src", directories.images);
  img.setAttribute("alt", `${directories.name}`);
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  p1.textContent = directories.address;
  p2.textContent = directories.phone;

  let a3 = document.createElement('a');
  a3.textContent = directories.website;
  a3.href = directories.website;
  a3.target = '_blank';

  p3.appendChild(a3);

  directory.appendChild(h3);
  directory.appendChild(img);
  directory.appendChild(p1);
  directory.appendChild(p2);
  directory.appendChild(p3);

  directoryDiv.appendChild(directory);
}

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const directories = jsonObject['directories'];

    directories.forEach(displayDirectories);
    directoryDiv.classList.add('grid-view'); // Add CSS class for grid view

    gridButton.addEventListener('click', function() {
      directoryDiv.innerHTML = '';
      directories.forEach(displayDirectories);
      directoryDiv.classList.add('grid-view'); // Add CSS class for grid view
    });

    listButton.addEventListener('click', function() {
      directoryDiv.innerHTML = '';
      directories.forEach(displayDirectories1);
      directoryDiv.classList.remove('grid-view'); // Remove CSS class for grid view
    });
  });