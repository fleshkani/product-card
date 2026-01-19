//все карточки сделать одним цветом
const productCards = document.querySelectorAll('.card');
const buttonCardsColorСhange = document.querySelector('#all-cards-color-change');
const greenColorHash = '#00FF00';
buttonCardsColorСhange.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
});

//поменять фон первой карточки
const firstProductCard = document.querySelector('.card');
const buttonCardColorСhange = document.querySelector('#card-color-first-change');
const redColorHash = '#ff0000ff';
buttonCardColorСhange.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = redColorHash;
});

//открыть страницу гугл
const buttonGoogleOpen = document.querySelector('#google-open');
buttonGoogleOpen.addEventListener('click', openGoogle);

//вопрос подтверждение
function openGoogle() {
  const question = confirm('вы точно хотите открыть Google.com?');
  if (question === true) {
    window.open('https://google.com')
  } else {
    return;
  }
};

// вывод алерт и вывод строки в консоль лог
const buttonConsoleLogOutput = document.querySelector('#console-log-output');
buttonConsoleLogOutput.addEventListener('click', () => outputConsoleLog('ДЗ№4'));

function outputConsoleLog(message) {
  alert('alert!')
  console.log(message)
};

// при наведении на заголовок 'Выбери свой продукт' элемент выводится в консоль
const yourProductChoose = document.querySelector('.title');
yourProductChoose.addEventListener('mouseenter', (event) => {
  console.log(event.target);
});

//сменить цвет кнопки
const buttonColorСhange = document.querySelector('#button-color-change');
buttonColorСhange.classList.add('red');
buttonColorСhange.addEventListener('click', () => {
  buttonColorСhange.classList.toggle('red');
  buttonColorСhange.classList.toggle('green');
});

