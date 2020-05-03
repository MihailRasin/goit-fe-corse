// task-6

let total = 0;

let input;

while (input !== null) {
  input = prompt("Введите число");
  let input_number = Number(input);
  total = total + input_number;
}

alert(`Общая сума чисел равна ${total}`);
