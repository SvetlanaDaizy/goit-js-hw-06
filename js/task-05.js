

const targetInput = document.querySelector('input#name-input');
const targetOutput = document.querySelector('span#name-output');

targetInput.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);

    if (event.currentTarget.value = '') {
        targetOutput.textContent = 'Anonymous';
    } 
     targetOutput.textContent = event.currentTarget.value;
    
}