// Async Iterator API
import readdir from "@jsdevtools/readdir-enhanced";

for await (let item of readdir.iterator("./ScormPackages")) {
  console.log(item)
}

console.log(files)
// Define an array of menu items with their labels and URLs
const menuItems = [
  { label: 'testpaket-the-limits-to-growth-sustainability-and-the-circular-economy', url: 'ScormPackages/testpaket-the-limits-to-growth-sustainability-and-the-circular-economy/index.html' },
  { label: '230602_ sustainable-everyday-practices', url: 'ScormPackages/230602_ sustainable-everyday-practices/index.html' }
];

// Get the container element where the cards will be appended
const container = document.getElementById('card-container');

// Loop through each menu item and create a card for it
menuItems.forEach((menuItem) => {
  // Create the card element
  const card = document.createElement('div');
  card.classList.add('card');


  // Create the card container element
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('container');

  // Create the card title element
  const title = document.createElement('h4');
  title.innerHTML = menuItem.label;
  cardContainer.appendChild(title);

  // Add the card container to the card element
  card.appendChild(cardContainer);

  // Add an event listener to the card to switch to the menu item URL on click
  card.addEventListener('click', () => {
    window.location.href = menuItem.url;
  });

  // Append the card to the container element
  container.appendChild(card);
});
