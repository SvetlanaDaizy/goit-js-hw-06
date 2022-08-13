const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const addIngredients = document.querySelector('ul#ingredients');

const elements = ingredients.map(option => {
  const navItemEl = document.createElement('li');
  navItemEl.classList.add('item');
  navItemEl.textContent = option;

  return navItemEl;
});

addIngredients.append(...elements);



