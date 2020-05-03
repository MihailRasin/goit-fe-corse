//task_4

let credits = 23580;

let pricePerDroid = 3000;

let totalPrice = prompt("Сколько ДРОИДОВ необходимо добавить в заказ?");

if (totalPrice === null) {
  alert("Отменено пользователем!");
}

if (totalPrice * pricePerDroid > credits) {
  alert("Недостаточно средств на счету!");
}

if (totalPrice * pricePerDroid <= credits) {
  console.log(
    "Вы купили",
    totalPrice,
    "дроидов, на счету осталось",
    credits - totalPrice * pricePerDroid,
    "кредитов."
  );
}
