const animalLi = document.querySelector('ul#categories');
console.log('Number of categories:', animalLi.children.length);



const categoriesEl = document.querySelectorAll('h2');
console.log('Category:', categoriesEl.textContent);

const ElementLi = animalLi.querySelectorAll('ul').children;
console.log('Elements:', ElementLi.length);