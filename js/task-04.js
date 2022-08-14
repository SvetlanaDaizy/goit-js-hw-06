

// const counterValue = document.querySelector('#value');

// const addNumber = document.querySelector('[data-action="decrement"]');
// const removeNumber = document.querySelector('[data-action="increment"]');

// addNumber.addEventListener('click', onBtnClickAdd);
// removeNumber.addEventListener('click', onBtnClickRemove);

// function onBtnClickAdd() {
//     const counterValue = 0;
//     console.log(counterValue + 1);
// }

// function onBtnClickRemove() {

// }

//  const counterValue = document.querySelectorAll(".counter");

// for (var i = 0; i < counterValue.length; i++) {
        
//         countBlocks[i].onclick = function() {
//             var plusBtn = this.querySelector('[data-action="decrement"]');
//             var minusBtn = this.querySelector('[data-action="increment"]');
//             var textField = this.querySelector('span#value');
//             var textFieldVal = +textField.value;

//             plusBtn.onclick = function() {
//                 textField.value = textFieldVal + 1;

//                 console.log(textField.value);
//             }
//             minusBtn.onclick = function() {
//                 textField.value = textFieldVal - 1;
//             }
//         }
// }   
     
const counterValue = document.querySelector("span#value");
const countValue = 0;

function func() {
    
    const plusButton = document.querySelector('[data-action="decrement"]');
    
    const minusButton = document.querySelector('[data-action="increment"]');
    
    if (document.onclick = plusButton) {
        
        countValue++;
        
        console.log(countValue);
        
    } else if (document.onclick = minusButton) {
        
        countVAlue--;
        
        console.log(countValue);
        
    }
}