//3.объект на основе личных данных человека
const userProfile = {
  firstName: "Neo",
  lastName: "Ivanov",
  email: "neo.ivanov@gmail.com",
  job: "IT company",
  position: "Frontend Developer",
  age: 25,
  country: "Kazakhstan",
  city: "Karaganda",
  relationshipStatus: "single"
};

//4.объект, который будет хранить данные об автомобиле
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "white",
  transmission: "automatic"
};

const owner = {
  name: "Alex",
  age: 30,
  license: true
};

car.owner = owner;

//5.Функция проверяет есть ли в объекте свойство "максимальная скорость"
function addMaxSpeed(car) {
  if ("maxSpeed" in car) {
    return; // свойство есть — ничего не делаем
  }
  car.maxSpeed = 220; // свойства нет — добавляем
}
addMaxSpeed(car);
console.log(car)

/*6.функция, которая получает первым аргументом объект,
а вторым аргументом свойство объекта, которое нужно вывести и его значение тоже*/
function getObjectProperty(obj, property) {
  console.log(obj[property]);
}

//7.массив, который содержит названия продуктов (строки)
const products = ["Milk", "Bread", "Eggs", "Cheese", "Apples"];

/*8. Массив, состоящий из объектов, где объект представляет собой книгу
(название, автор, год выпуска, цвет обложки, жанр).
Затем добавляем еще одну книгу в конец списка.*/

// Создаём массив объектов
const books = [
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    coverColor: "red",
    genre: "Dystopia"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    coverColor: "green",
    genre: "Fantasy"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    coverColor: "blue",
    genre: "Romance"
  }
];

// Добавляем ещё одну книгу в конец массива
books.push({
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  coverColor: "yellow",
  genre: "Drama"
});

// Выводим результат
console.log(books);

//9. Массив, из книг, Гарри Поттер. С помощью оператора, объединяем два массива в один
// Массив книг (Гарри Поттер)
const harryPotterBooks = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    year: 1997,
    coverColor: "red",
    genre: "Fantasy"
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    year: 1998,
    coverColor: "green",
    genre: "Fantasy"
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    year: 1999,
    coverColor: "blue",
    genre: "Fantasy"
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    author: "J.K. Rowling",
    year: 2003,
    coverColor: "purple",
    genre: "Fantasy"
  }
];

// Функция добавляет свойство isRare
function addIsRare(booksArray) {
  return booksArray.map(book => ({
    ...book,
    isRare: book.year > 2000
  }));
}

// Получаем новый массив с isRare
const booksWithRareFlag = addIsRare(harryPotterBooks);

// Получаем только редкие книги
const rareBooks = booksWithRareFlag.filter(book => book.isRare);

// Проверка
console.log("Все книги:");
console.log(booksWithRareFlag);

console.log("Редкие книги:");
console.log(rareBooks);




