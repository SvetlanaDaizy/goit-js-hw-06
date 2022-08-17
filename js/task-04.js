



const counterValue = document.querySelector("span#value");
const plusButton = document.querySelector('[data-action="decrement"]');
const minusButton = document.querySelector('[data-action="increment"]');

plusButton.addEventListener('click', decrementNumber);
minusButton.addEventListener('click', incrementNumber);


function decrementNumber() {

    const countValue = 0;
    
    counterValue.textContent = countValue ++;
}    

function incrementNumber() {

        const countValue = 0;
        
  
counterValue.textContent = countValue --;

   }







