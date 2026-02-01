import { comments } from "./comments";

//2. Массив чисел от 1 до 10. Отфильтровав мы получаем массив чисел, начиная с 5.
const numbers = [1,2,3,4,5,6,7,8,9,10] 
const sortingNumbers = numbers.filter(number => number >=5)
console.log (sortingNumbers)

//3. Массив строк из названий фильмов. Далее проверка, есть ли в массиве название "The Matrix"
const movies = [
  "Inception",
  "Interstellar",
  "The Matrix",
  "Avatar",
  "Titanic"
];
const hasMatrix  = movies.includes('The Matrix')
console.log(hasMatrix )

//4. функция принимает аргументом вышеуказанные массивы и изменяет их порядок на противоположный
const reverseArrayInPlace = ( arr) => arr.reverse(numbers, movies);
reverseArrayInPlace(numbers);
reverseArrayInPlace(movies);


