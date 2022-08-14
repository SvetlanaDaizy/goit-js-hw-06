

const targetInput = document.querySelector('input#validation-input');

targetInput.addEventListener('blur', onInputChange);

function onInputChange(event) {
    if (event.length === 6) {
        event.currentTarget.classList.add('#validation-input.valid');
    } else {
        event.currentTarget.classList.add('#validation-input.invalid');
    }
}