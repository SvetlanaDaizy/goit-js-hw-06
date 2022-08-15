

const targetInput = document.querySelector('input#validation-input');

targetInput.addEventListener('blur', onInputChange);

function onInputChange(event) {

    if (event.currentTarget.value.length === 6) { 
       event.currentTarget.classList.remove('invalid');
    event.currentTarget.classList.add('valid');

  } else {
   event.currentTarget.classList.remove('valid');
    event.currentTarget.classList.add('invalid');
  }
};