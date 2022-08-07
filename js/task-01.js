const animalLi = document.querySelector('ul#categories');
console.log('Number of categories:', animalLi.children.length);


const categoriesEl = document.querySelectorAll('h2');
const ElementLi = animalLi.querySelectorAll('ul');

console.log('Category:', categoriesEl[0].textContent);
console.log('Elements:', ElementLi[0].children.length);

console.log('Category:', categoriesEl[1].textContent);
console.log('Elements:', ElementLi[1].children.length);

console.log('Category:', categoriesEl[2].textContent);
console.log('Elements:', ElementLi[2].children.length);







