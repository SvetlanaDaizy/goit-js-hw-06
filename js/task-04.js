



const counterValue = document.querySelector("span#value");
const plusButton = document.querySelector('[data-action="decrement"]');
const minusButton = document.querySelector('[data-action="increment"]');

plusButton.addEventListener('click', decrementNumber);
minusButton.addEventListener('click', incrementNumber);

   const countValue = 0;
   
function decrementNumber() {

       countValue ++;
   counterValue.textContent = countValue;
     
}    
 

function incrementNumber() {

    countValue --;
counterValue.textContent = countValue;
   }







