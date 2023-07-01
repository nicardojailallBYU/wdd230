
const requestURL = 'directory/data.json';

fetch(requestURL)
  .then(response => response.json())
  .then(data => {
    const spotlight1Div = document.querySelector('.spotlight1');
    const spotlight2Div = document.querySelector('.spotlight2');
    const spotlight3Div = document.querySelector('.spotlight3');

  
    const silverGoldMembers = data.directories.filter(directory => {
      const status = directory.membership.toLowerCase();
      return status === 'silver' || status === 'gold';
    });

    const shuffledMembers = shuffleArray(silverGoldMembers);

   
    for (let i = 0; i < Math.min(3, shuffledMembers.length); i++) {
      const member = shuffledMembers[i];
      const name = member.name;
      const image = member.images;
      const address = member.address;
      const phone = member.phone;
      const website = member.website;
      const membership = member.membership;

     
      const memberDiv = document.createElement('div');
      memberDiv.classList.add('member');

      
      const imageElement = document.createElement('img');
      imageElement.src = image;
      imageElement.alt = name;
      imageElement.setAttribute('id', 'member-image');
      memberDiv.appendChild(imageElement);

    
      const nameHeading = document.createElement('h4');
      nameHeading.textContent = name + "logo";
      memberDiv.appendChild(nameHeading);

     
      const addressParagraph = document.createElement('p');
      addressParagraph.textContent = address;
      addressParagraph.setAttribute('id', 'member-p');
      memberDiv.appendChild(addressParagraph);

    
      const phoneParagraph = document.createElement('p');
      phoneParagraph.textContent = phone;
      phoneParagraph.setAttribute('id', 'member-p');
      memberDiv.appendChild(phoneParagraph);

    
      const websiteParagraph = document.createElement('p');
      const websiteLink = document.createElement('a');
      websiteLink.href = website;
      websiteLink.textContent = website;
      websiteParagraph.appendChild(websiteLink);
      memberDiv.appendChild(websiteParagraph);

      
      const membershipParagraph = document.createElement('p');
      membershipParagraph.textContent = `Membership: ${membership}`;
      membershipParagraph.setAttribute('id', 'member-p');
      memberDiv.appendChild(membershipParagraph);

     
      if (i === 0) {
        spotlight1Div.appendChild(memberDiv);
      } else if (i === 1) {
        spotlight2Div.appendChild(memberDiv);
      } else if (i === 2) {
        spotlight3Div.appendChild(memberDiv);
      }
    }
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}