//все карточки сделать одним цветом
const productCards = document.querySelectorAll('.card');
const cardsColorChangeButton = document.querySelector('#all-cards-color-change');
const greenColorHash = '#00FF00';
cardsColorChangeButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
});

//поменять фон первой карточки
const firstProductCard = document.querySelector('.card');
const colorToggleButton = document.querySelector('#card-color-first-change');
const redColorHash = '#ff0000ff';
colorToggleButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = redColorHash;
});

//открыть страницу гугл
const googleOpenButton  = document.querySelector('#google-open');
googleOpenButton.addEventListener('click', openGoogle);

//вопрос подтверждение
function openGoogle() {
  const question = confirm('вы точно хотите открыть Google.com?');
  if (question === true) {
    window.open('https://google.com')
  } else {
    return;
  }
};

//вывод алерт и вывод строки в консоль лог
const logOutputButton = document.querySelector('#console-log-output');
logOutputButton.addEventListener('click', () => outputConsoleLog('ДЗ№4'));

function outputConsoleLog(message) {
  alert('alert!')
  console.log(message)
};

//при наведении на заголовок 'Выбери свой продукт' элемент выводится в консоль
const yourProductChoose = document.querySelector('.title');
yourProductChoose.addEventListener('mouseenter', (event) => {
  console.log(event.target);
});

//сменить цвет кнопки
const colorChangeButton = document.querySelector('#button-color-change');
colorChangeButton.classList.add('red');
colorChangeButton.addEventListener('click', () => {
  colorChangeButton.classList.toggle('red');
  colorChangeButton.classList.toggle('green');
});

