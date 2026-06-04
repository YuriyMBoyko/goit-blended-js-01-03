// Task 1

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить 
// квадрати кожного елементу вхідного масиву. 
// Очікуваний результат: [1, 4, 9, 16, 25].
/*

const numbers = [1, 2, 3, 4, 5]

const squares = [];
numbers.every((number) => squares.push(number * number));

console.log(squares);
*/


// Task 2

// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].
/*

const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];

const dataEx = [];
data.every((data) => data.values.every((value) => dataEx.push(value)));

console.log(dataEx);
*/


// Task 3

// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.
/*

const people = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const isEmpty = (obj) => !obj || (Object.keys(obj).length === 0);

console.log(people);
console.log(`${!isEmpty(people.find((person) => person.age < 20))}`);
*/


// Task 4

// Дано масив чисел [2, 4, 6, 8, 10]. 
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.
/*

const numbers = [2, 4, 6, 8, 10];

console.log(numbers);
console.log(`${!!numbers.find((number) => ((number % 2) === 0))}`);
console.log(`${Boolean(numbers.find((number) => ((number % 2) === 0)))}`);
*/


// Task 5

// Знайдіть перше непарне число
/*

const numbers = [2, 1, 6, 8, 9, 10, 12, 15];

console.log(numbers);
console.log(`${numbers.find((number) => number % 2 === 1)}`);
console.log(`${numbers.filter((number) => number %2 === 1)}`);
*/


// Task 6

// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].
/*

const numbersArray = [4, 2, 5, 1, 3];

console.log(numbersArray);
console.log(`${numbersArray.toSorted()}`);
console.log(`${numbersArray.toSorted((a, b) => a - b)}`);
*/


// Task 7

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].
/*

const stringArray = ['banana', 'orange', 'apple', 'pear'];

const doLog = (array) => {
  console.log(`${array}   - ${Array.isArray(array)}`);
}

console.log(stringArray);
doLog(stringArray);
doLog(stringArray.toSorted());
doLog(stringArray.toSorted((a, b) => a.localeCompare(b)));
*/


// Task 8

//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].
/*

const users = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

console.log(users);
const usersSorted = users.toSorted((a, b) => a.age - b.age);
console.log(`${JSON.stringify(usersSorted)}`);
*/


// Task 9

// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]
/*

const user = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

console.log(user);
console.log(`${JSON.stringify(user.filter((a) => a.age > 20))}`);
*/


// Task 10

// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.
/*

const numbers = [1, 2, 3, 4, 5];

console.log(numbers);
console.log(`${numbers.reduce((prevValue, number) => {return prevValue += number}, 0)}`);
*/


// Task 11

// Розроби клас Calculator, який дозволяє виконувати арифметичні
// операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод subtract - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
/*

class Calculator {
  #value;

  constructor(value = 0) {
    this.#value = value;
  }

  number(value) {
    this.#value = value;
    return this;
  }

  getResult() {
    return this.#value;
  }

  add(value) {
    this.#value += value;
    return this;
  }

  subtract(value) {
    this.#value -= value;
    return this;
  }

  divide(value) {
    if (value !== 0) {
      this.#value = this.#value / value;
    }
    return this;
  }

  multiply(value) {
    this.#value *= value;
    return this;
  }

}

const calc = new Calculator();


const result = calc
  .number(10)   // Встановлюємо початкове значення 10
  .add(5)       // Додаємо 5 (10 + 5 = 15)
  .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
  .multiply(4)  // Множимо на 4 (12 * 4 = 48)
  .divide(2)    // Ділимо на 2 (48 / 2 = 24)
  .getResult(); // Отримуємо результат: 24


console.log(result); // 24
*/


// Task 12

// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби 
// через геттер та сеттер login email
/*

class Client {
  #login;
  #email;

  constructor(params) {
    this.#login = params.login;
    this.#email = params.email;
  }

  get login() {
    return this.#login;
  }

  set login(login) {
    this.#login = login;
  }

  get email() {
    return this.#email;
  }

  set email(email) {
    this.#email = email;
  }
}
*/


// Task 13

//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю 
// та електронною поштою людини.

// 
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.
/*

class Person {
  #name;
  #age;
  #gender;
  #email;

  constructor(params) {
    this.#name = params.name;
    this.#age = params.age;
    this.#gender = params.gender;
    this.#email = params.email;
  }

  get name() { return this.#name; }
  set name(value) { this.#name = value; }

  get age() { return this.#age; }
  set age(value) { this.#age = value; }

  get gender() { return this.#gender; }
  set gender(value) { this.#gender = value; }

  get email() { return this.#email; }
  set email(value) { this.#email = value; }

  getDetail() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
      email: this.email
    }
  }
}

class Employee extends Person {
  #salary;
  #department;

  constructor(params) {
    super(params);

    this.#salary = params.salary;
    this.#department = params.department;
  }

  get salary() { return this.#salary; }
  set salary(value) { this.#salary = value; }

  get department() { return this.#department; }
  set department(value) { this.#department = value; }

  get EmployeeDetails() {
    return {
      salary: this.salary,
      department: this.department
    }
  }
}
*/

