// Task 1

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

/*
const styles = ['jazz', 'blues'];
logItems(styles);

styles.push('rock-n-roll');
logItems(styles);

const idx = styles.indexOf('blues');
if (idx !== -1) {
  styles[idx] = 'classic';
}
logItems(styles);

function logItems(array) {
  let logStr = '';
  for (let idx = 0; idx < array.length; idx++) {
    logStr += `${idx + 1} - ${styles[idx]}\n`;
  }
  console.log(logStr);
}
*/


// Task 2

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

/*
const logins = ["Peter", "John", "Igor", "Sasha"];
checkLogin(logins);

function checkLogin(array) {
  let login;
  let idx = -1;
  do {
    login = prompt('Please, enter your login');
    if (login !== null) {
      idx = array.indexOf(login);
      alert((idx === -1) ? 'User not found' : `Welcome, ${login}`);
    }
  } while ((login !== null) && (idx === -1));
}
*/


// Taks 3

// Напишіть функцію calculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

/*
function calculateAverage() {
  let total = 0;
  let count = 0;
  for (const arg of arguments) {
    if ((typeof arg === 'number') && !isNaN(Number(arg))) {
      total += Number(arg);
      count++;
    }
  }
  return total / count;
}

console.log(calculateAverage(3, 5, 7));
console.log(calculateAverage(3, 5, 7, NaN, 'this is text', 9, 11, 13));
*/


// Task 4

// Напишіть функцію, яка сумуватиме сусідні числа 
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

/*
function summ(array) {
  let result = [];

  for (let idx = 0; idx < array.length - 1; idx++) {
    result.push(
      ((typeof array[idx] === 'number') && !isNaN(array[idx]) ? array[idx] : 0) 
      + 
      ((typeof array[idx + 1] === 'number') && !isNaN(array[idx + 1]) ? array[idx + 1] : 0));
  }
  
  return result;
}

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
console.log(someArr);
console.log(summ(someArr));
*/


// Task 5

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і 
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

/*
function findSmallestNumber(numbers) {
  let result = NaN;

  if (Array.isArray(numbers)) {
    for (const number of numbers) {
      if ((typeof number === 'number') && !isNaN(number)) {
        result = (isNaN(result) ? number : Math.min(result, number));
      }
    }
    return result;
  } else {
    return 'Sorry, it is not an array!'
  }
}

function findSmallestNubmer_test(numbers) {
  console.log(numbers);
  console.log(findSmallestNumber(numbers));
}

function findSmallestNubmer_tests() {
  {
    const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
    findSmallestNubmer_test(numbers);
  }

  console.log('');

  {
    const numbers = [2, 5, NaN, 35, 56, 12, 'a text', 24, 7, 80, 3];
    findSmallestNubmer_test(numbers);
  }
}

findSmallestNubmer_tests();
*/



// Task 6

// Напишіть функцію findLongestWord(string), яка 
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'
/*

function findLongestWord(string) {
  const array = string.split(' ');
  let result = '';
  for (const item of array) {
    result = (result.length < item.length) ? item : result;
  }
  return result;
}

console.log(findLongestWord("London is the capital of Great Britain"));
*/


// Task 7

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of
/*

 const user = {
    name: "John",
    age: 20,
    hobby: "tenis",
    premium: true,
  };

user['mood'] = 'happy';
user['hobby'] = 'skydiving';
user['premium'] = false;

for (const key of Object.keys(user)) {
  console.log(`${key}:${user[key]}`);
}
*/


// Task 8

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0
/*

 const salaries = {
    Mango: 100,
    Poly: 160,
    Ajax: 1470,
  };

let sum = 0;

for (const key of Object.keys(salaries)) {
  const salary = salaries[key];
  sum += ((typeof salary === 'number') && !isNaN(salary)) ? salary : 0;
}

console.log(`Sum is equals to ${sum}`);
*/


// Task 9

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'
/*

const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },

  exist() {
    return Object.keys(this).includes('a') && Object.keys(this).includes('b');
  },

  sum() {
    return this.exist() ? this.a + this.b : 'No such properties';
  },

  mult() {
    return this.exist() ? this.a * this.b : 'No such roperties';
  }
}

console.log(calculator.sum());
console.log(calculator.mult());
calculator.read(15, 3);
console.log(calculator.sum());
console.log(calculator.mult());
*/


// Task 10

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою 
// назвою фрукта, це також треба урахувати.
/*

const fruits = [
    { name: "Яблуко", price: 45, quantity: 7 },
    { name: "Апельсин", price: 60, quantity: 4 },
    { name: "Банан", price: 125, quantity: 8 },
    { name: "Груша", price: 350, quantity: 2 },
    { name: "Виноград", price: 440, quantity: 3 },
    { name: "Банан", price: 125, quantity: 3 },
  ];

function calcTotalPrice(fruits, fruitName) {
  let sum = 0;
  for (const fruit of fruits) {
    sum += (fruit.name === fruitName) ? fruit.price * fruit.quantity : 0;
  }
  return sum;
}

function calcTotalPrice_test() {
  let fruitName = 'Яблуко';
  console.log(`${fruitName}: ${calcTotalPrice(fruits, fruitName)}`);

  fruitName = 'Апельсин';
  console.log(`${fruitName}: ${calcTotalPrice(fruits, fruitName)}`);

  fruitName = 'Банан';
  console.log(`${fruitName}: ${calcTotalPrice(fruits, fruitName)}`);

  fruitName = 'Груша';
  console.log(`${fruitName}: ${calcTotalPrice(fruits, fruitName)}`);

  fruitName = 'Виноград';
  console.log(`${fruitName}: ${calcTotalPrice(fruits, fruitName)}`);

  fruitName = 'Слива';
  console.log(`${fruitName}: ${calcTotalPrice(fruits, fruitName)}`);
}

calcTotalPrice_test();
*/
