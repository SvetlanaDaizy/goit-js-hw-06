const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryContain = document.querySelector('ul.gallery');
// const ImageLi = document.createElement('li');

// const elements = images.map(option => {
//   const ImageHref = document.createElement('img');
//   ImageHref.classList.add('.image');

// })


// console.log(ImageHref)

const makeTransactionImage = transaction => {
  const { url, alt } = transaction;
  return `<li> <img src=${url} alt=${alt} width='340' height='200'> </li>`;

};

const imageEl = document.querySelector('ul.gallery');

const makeTransactionImageRows =
  images.map(makeTransactionImage).join('');

imageEl.insertAdjacentHTML('afterbegin', makeTransactionImageRows);

console.log(makeTransactionImageRows);
console.log(imageEl);
