//все карточки сделать одним цветом
const productCards = document.querySelectorAll('.card');
const changeColorCardsButton = document.querySelector('#change-color-all-cards');
const greenColorHash = '#00FF00';
changeColorCardsButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
});

//поменять фон первой карточки
const firstproductCard = document.querySelector('.card');
const changeColorCardButton = document.querySelector('#change-color-first-card');
const redColorHash = '#ff0000ff';
changeColorCardButton.addEventListener('click', () => {
  firstproductCard.style.backgroundColor = redColorHash;
});

//открыть страницу гугл
const openGoogleButton = document.querySelector('#open-google');
openGoogleButton.addEventListener('click', openGoogle);

//вопрос подтверждение
function openGoogle() {
  const question = confirm('вы точно хотите открыть Google.com?');
  if (question === true) {
    window.open('https://google.com')
  } else {
    return;
  }
};

// вывод алерт и консоль лог
const outputConsoleLogButton = document.querySelector('#output-console-log');
outputConsoleLogButton.addEventListener('click', () => outputConsoleLog('ДЗ№4'));

function outputConsoleLog(message) {
  alert('alert!')
  console.log(message)
};

// вывод эвент
const chooseYourProduct = document.querySelector('.title');
chooseYourProduct.addEventListener('mouseenter', (event) => {
  console.log(event.target);
});

//сменить цвет кнопки
const changeColorButton = document.querySelector('#change-color-button');
changeColorButton.classList.add('red');
changeColorButton.addEventListener('click', () => {
  changeColorButton.classList.toggle('red');
  changeColorButton.classList.toggle('green');
});

