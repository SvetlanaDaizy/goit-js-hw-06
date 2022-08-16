



const counterValue = document.querySelector("span#value");
const plusButton = document.querySelector('[data-action="decrement"]');
const minusButton = document.querySelector('[data-action="increment"]');

function func() {

    const countValue = 0;
   
    if (document.onclick = plusButton) {
        
        countValue += 1;
        
       
    } else if (document.onclick = minusButton) {
        
        countValue -= 1;
        
    }

counterValue.textContent = countValue;

}

