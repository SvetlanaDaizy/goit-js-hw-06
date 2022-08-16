function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };


const changeColorButton = document.querySelector('button.change-color');
const changeColorSpan = document.querySelector('span.color');

changeColorButton.addEventListener('click', onChangeBtn);

function onChangeBtn( ) {
  
  
  
  document.body.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  changeColorSpan.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

}

