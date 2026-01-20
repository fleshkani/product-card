
//функция которая выводит в консоль строку город и температуру в нем
function showTemperature(city, temperature) {
  console.log(
    'Сейчас в ' + city + ' температура — ' + temperature + ' градусов по Цельсию'
  );
}
showTemperature('Afdf', 32);

//переменная скорость света
const SPEED_OF_LIGHT = 299792458;
/*функция проверка скорости света: если переданная скорость выше скорости света — выводим лог
 "Сверхсветовая скорость", если ниже — "Субсветовая  скорость"? если равна — "Скорость света"*/
function checkSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log('Сверхсветовая скорость');
  } else if (speed < SPEED_OF_LIGHT) {
    console.log('Субсветовая скорость');
  } else {
    console.log('Скорость света');
  }
}
checkSpeed('23');

/*функция покупка товара, которая принимает 1 параметр - текущий бюджет, внутри функции происходит
проверка: если бюджет превышает цену товара - выводим лог "(ваше название товара)
приобретён. Спасибо за покупку!", если нет - обсчитываем разницу и
выводим лог "Вам не хватает X$, пополните баланс"*/
const product = 'Смартфон';
const price = 500;
function buy(budget) {
  if (budget > price) {
    console.log(product + ' приобретён. Спасибо за покупку!');
  } else {
    const diff = price - budget;
    console.log('Вам не хватает ' + diff + '$, пополните баланс');
  }
}
buy(505);

//Функция которая способна вывести сообщение в консоль
const logMessage = () => {
  console.log('Функция вызвана');
};
//Разные переменные по заданию
const userName = 'Alex';
const userAge = 25;
const isStudent = true;


