// task-6

let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt("Введите число");
  if (Number.isNaN(Number(input)) === true) {
    alert("Введено не число!!!");
  } else {
    numbers.push(Number(input));
  }
}

for (const number of numbers) {
  total = total + number;
}

console.log(`Общая сумма чисел равна ${total}`);
