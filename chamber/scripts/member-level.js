
const requestURL = 'directory/data.json';

fetch(requestURL)
  .then(response => response.json())
  .then(data => {
    const spotlight1Div = document.querySelector('.spotlight1');
    const spotlight2Div = document.querySelector('.spotlight2');
    const spotlight3Div = document.querySelector('.spotlight3');

    // Filter chamber members with silver or gold status
    const silverGoldMembers = data.directories.filter(directory => {
      const status = directory.membership.toLowerCase();
      return status === 'silver' || status === 'gold';
    });

    // Shuffle the silverGoldMembers array randomly
    const shuffledMembers = shuffleArray(silverGoldMembers);

    // Display two to three randomly selected members in the spotlight sections
    for (let i = 0; i < Math.min(3, shuffledMembers.length); i++) {
      const member = shuffledMembers[i];
      const name = member.name;
      const image = member.images;
      const address = member.address;
      const phone = member.phone;
      const website = member.website;
      const membership = member.membership;

      // Create a div for each member
      const memberDiv = document.createElement('div');
      memberDiv.classList.add('member');

      // Create an image element for the member's image
      const imageElement = document.createElement('img');
      imageElement.src = image;
      imageElement.alt = "company-logo";
      imageElement.setAttribute('id', 'member-image'); // Add an id for the image
      memberDiv.appendChild(imageElement);

      // Create a heading for the member's name
      const nameHeading = document.createElement('h4');
      nameHeading.textContent = name;
      memberDiv.appendChild(nameHeading);

      // Create a paragraph for the member's address
      const addressParagraph = document.createElement('p');
      addressParagraph.textContent = address;
      memberDiv.appendChild(addressParagraph);

      // Create a paragraph for the member's phone number
      const phoneParagraph = document.createElement('p');
      phoneParagraph.textContent = phone;
      memberDiv.appendChild(phoneParagraph);

      // Create a paragraph for the member's website
      const websiteParagraph = document.createElement('p');
      const websiteLink = document.createElement('a');
      websiteLink.href = website;
      websiteLink.textContent = website;
      websiteParagraph.appendChild(websiteLink);
      memberDiv.appendChild(websiteParagraph);

      // Create a paragraph for the member's membership status
      const membershipParagraph = document.createElement('p');
      membershipParagraph.textContent = `Membership: ${membership}`;
      memberDiv.appendChild(membershipParagraph);

      // Determine which spotlight section to append the member's div
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