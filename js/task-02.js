const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const navItemEl = document.createElement('li');
navItemEl.classList.add('item');
navItemEl.textContent = 'Potatoes';
// navItemEl.textContent = 'Mushrooms';
// navItemEl.textContent = 'Garlic';
// navItemEl.textContent = 'Tomatos';
// navItemEl.textContent = 'Herbs';
// navItemEl.textContent = 'Condiments';

document.ul.appendChild(navItemEl);




console.log(navItemEl);