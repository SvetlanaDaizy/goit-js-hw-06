

const form = document.querySelector('.login-form');
const targetInput = document.querySelector('input');



form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();



    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const forms = {
        email,
        password,
    }
    console.log(forms);

   form.reset();
}
