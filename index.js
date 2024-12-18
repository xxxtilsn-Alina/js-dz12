// Завдання 1
// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
  hobby: "swiming",
  premium: "true",
};

user["mood"] = "happy";
user.hobby = "skydiving";
user.premium = "false";
const entries = Object.entries(user);
for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];
  console.log(`${key}: ${value}`);
}

// Завдання 2
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті.
// Функція повертає число — кількість властивостей.

const properties = {
  ownerName: "Alina",
  accountNumber: 93876414,
  balance: 500,
  temperature: 0,
  humidity: 0,
  windSpeed: 0,
  email: "hrisinskaakinka@gmail.com",
  password: "98437501",
};

function countProps(obj) {
  const propCount = Object.keys(obj).length;
  return `Кількість властивостей становить: ${propCount}`;
}
console.log(countProps(properties));

// Завдання 3
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач).
// Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

const employeesBase = {
  ivan: 7,
  vlad: 4,
  Ira: 9,
  volodymyr: 10,
};

function findBestEmployee(employees) {
  let maxEmployes = 0;
  let nameBest = "";
  for (const ents of Object.entries(employees)) {
    let names = ents[0];
    let workes = ents[1];
    if (workes > maxEmployes) {
      maxEmployes = workes;
      nameBest = names;
    }
  }
  return nameBest;
}

console.log(findBestEmployee(employeesBase));

// Завдання 4
// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат.
//  Функція рахує загальну суму зарплати працівників і повертає її.
//   Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const salary = {
  Oleg: 200,
  Karina: 500,
  Arina: 700,
};

function countTotalSalary(employes) {
  let sumSalary = 0;
  const valueArray = Object.values(employes);
  for (let i = 0; i < valueArray.length; i++) {
    sumSalary += valueArray[i];
  }
  for (const arr of Object.entries(salary)) {
    const keys = arr[0];
    const valueses = arr[1];
    console.log(`${keys}: ${valueses}`);
  }
  return `Загальна сума зарплати працівників становить ${sumSalary} грн`;
}
console.log(countTotalSalary(salary));

// Завдання 5
// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості.
//  Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const props = {
  items: [
    {
      name: "🍎",
      price: 50,
      quantity: 3,
    },
    {
      name: "🍇",
      price: 70,
      quantity: 1,
    },
    {
      name: "🍋",
      price: 60,
      quantity: 2,
    },
    {
      name: "🍓",
      price: 110,
      quantity: 4,
    },
  ],
};

function getAllPropValues(arr, prop) {
  let result = [];
  for (const objec of arr) {
    if (prop > objec) {
      result.push(objec[prop]);
    }
  }
  return result;
}
console.log(getAllPropValues(props.items, "name"));
console.log(getAllPropValues(props.items, "price"));

// Завдання 6
// Напиши функцію calculateTotalPrice(allProdcuts, productName),
//  яка отримує масив об'єктів та ім'я продукту (значення властивості name).
// Повертає загальну вартість продукту (ціна * кількість).

function calculateTotalPrice(allProdcuts, productName) {
  let end = 0;
  for (const product of allProdcuts) {
    if (product.name === productName) {
      end = product.price * product.quantity;
    }
  }
  return end;
}

console.log(calculateTotalPrice(props.items, "🍎"));
console.log(calculateTotalPrice(props.items, "🍇"));
