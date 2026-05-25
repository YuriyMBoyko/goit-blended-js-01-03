// Task 0

/*
const login = prompt('Please, enter your login'); // returns string or null
console.log(`User entered ''${login}''`);
var alertResult;
if (login === null) {
  alertResult = alert('You press Cancel button'); // returns undefined always
} else {
  alertResult = alert(`You enter ${login}`);
}
console.log(`Alert result is ${alertResult}`);
const confirmResult = confirm('Are you sure?'); // return true or false
const selected = confirmResult ? 'Ok' : 'Cancel';
console.log(`User selected ${selected}`);
*/


// Task 1
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'. 

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().
/*
do {
  const enteredValue = prompt('Please, enter your random number');
  if (enteredValue === null) {
    alert('You pressed Cancel button, but you had to enter value and press Ok');
  } else {
    const numberValue = Number(enteredValue);
    if (isNaN(numberValue)) {
      alert('You have entered string value, but you had to enter number')
    } else {
      alert((numberValue === 10) ? 'Correct: your number equals to 10' : 'Incorrect: your number doesn\'t equals to 10');
      break;
    }
  }
} while (true);
*/


// Task 2
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"
/*
const min = Math.floor(Math.random() * 59);
console.log(min);

const quarter = Math.floor(min / 15) + 1;
alert(`Random number ${min} in ${quarter} quarter`);
*/

// Task 3
// Змінна num може набувати 4 значення: '1', '2', '3' або '4' 
// (запитуй це значення у користувача через prompt). 
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач 
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.
/*
do {
  const num = Number(prompt('Enter number between 1 and 4, or other number'));
  let canExit = true;
  if (isNaN(num)) {
    alert('Please, enter a number value');
    canExit = false;
  } else {
    let strResult;
    switch (num) {
      case 1: 
        strResult = 'winter';
        break;
      case 2:
        strResult = 'spring';
        break;
      case 3:
        strResult = 'summer';
        break;
      case 4:
        strResult = 'autumn';
        break;
      default: 
        strResult = 'Sorry, but you have to enter number between 1 and 4';
        canExit = false;
    }
    alert(strResult);
    if (canExit)
      break;
  }

} while (true);
*/


// Task 4
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples
/*
let canExit = false;
do {
  const num = Number(prompt('Please, enter a positive integer number'));
  console.log(num);
  console.log(Number.isInteger(num));
  if (!isNaN(num) && (num >= 0) && (Number.isInteger(num))) {
    const hours = Math.floor(num / 60);
    const minutes = (num % 60);
    alert(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`)
    canExit = true;
  } else {
    alert('Please, enter correct value');
  }
} while (!canExit);
*/


// Task 5
// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"
/*
const adminUserName = 'Admin';
const adminPasswd = 'I am the Boss';
const userName = prompt('Enter your user name');
console.log(`UserName is ${userName}`);

if ((userName === null) || (userName.trim() === '')) {
  alert('Canceled');
} else if (userName.toLowerCase() === adminUserName.toLowerCase()) {
  const passwd = prompt('Enter your password');
  alert(`${(passwd === null) ? 'Canceled' : ((passwd === adminPasswd) ? 'Welcome back' : 'Who are you?')}`);
//  if (passwd === null) {
//    alert('Canceled');
//  } else if (passwd === adminPasswd) {
//    alert('Welcome back');
//  } else {
//    alert('Password incorrect');
} else {
  alert('Who are you?')
}
*/

// Task 6
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
/*
let num = 0;
while ((num >= 0) && (num <= 20)) {
  console.log(num);
  num++;
}
*/


// Task 7
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.
/*
function getNumbers(min, max){
  let summ = 0;
  if (max > min) {
    let value = max;
    while (value >= min) {
      console.log(value);
      summ += ((value % 2) === 0) ? value : 0;
      value--;
    }
    console.log(`summ = ${summ}`);
  } else {
    console.log('Enter correct values');
  }
    return summ;
}

console.log(`Summ = ${getNumbers(5, 10)}`);
console.log(`Summ = ${getNumbers(10, 5)}`);
*/


// Task 8
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.
/*
function min(a, b) {
//  const aNum = Number(a);
//  const bNum = Number(b);
//  return (!isNaN(aNum) && !isNaN(bNum)) ? ((aNum < bNum) ? aNum : bNum) : 'Not a number!';

//  if (!isNaN(aNum) && !isNaN(bNum)) {
//    return (aNum < bNum) ? aNum : bNum;
//  } else {
//    return 'Not a number!';
//  }

  return ((typeof a === 'number') && (typeof b === 'number')) ? ((a < b) ? a : b) : 'Not a number!';  // Math.min(a, b)
}

console.log(min(5, 7));
console.log(min('7', 2));
console.log(min(10, 4));
console.log(min('6', 'dsfsd'));
*/


// Task 9
// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).
/*
function isAdult(age) {
  return isNaN(Number(age)) ? false : ((Number(age) >= 18) ? true : confirm('Are you 18 years old?'));
}

console.log(`15: ${isAdult(15)}`);
console.log(`18: ${isAdult(18)}`);
console.log(`20: ${isAdult(20)}`);
console.log(`-18: ${isAdult(-18)}`);
console.log(`dfsdf: ${isAdult('dfsdf')}`);
*/


// Task 10
// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.
/*
function fizzBuzz(num) {
  var result = '';
  for (var i = 1; i <= num; i++) {
    const add =  ''.concat(((i % 3) === 0) ? 'fizz' : '').concat(((i % 5) === 0) ? 'buzz' : '');
    result = result.concat((add !== '') ? add.concat('\n') : '');
  }
  return result;
}

console.log(fizzBuzz(16));
*/


// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити
// ввести ще раз.
// Цикл повинен питати число, доки користувач не
// введе число більше 100, чи не натисне кнопку
// Cancel в prompt
/*
let num;
const limit = 100;
while ((num = prompt(`Enter integer number greater then ${limit}`)) !== null) {
  console.log(num);
  if ((!isNaN(Number(num))) && (Number(num) > limit)) {
    break;
  }
}
*/


// Напишіть функцію, яка приймає адресу сайта url та перевіряє чи закінчується значення
// параметра символом /. Якщо ні, додайте до кінця
// значення url цей символ і поверніть оновлене значення з функції, але тільки в тому випадку,
// якщо в url є підрядок "my-site".
// В іншому випадку поверніть з функції адресу в незмінному вигляді
/*
function checkUrl(url) {
  const template = 'my-site';
  return url.concat(url.includes(template) ? ((url.slice(-1) !== '/') ? '/' : '') : '');
}

console.log(checkUrl('https://microsoft.com'));
console.log(checkUrl('https://colocall.net/'));
console.log(checkUrl('https://www.my-site.com'));
*/

