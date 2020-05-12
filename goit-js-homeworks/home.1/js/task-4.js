//task_4

let credits = 23580;

let pricePerDroid = 3000;

let totalPrice = prompt("Сколько ДРОИДОВ необходимо добавить в заказ?");

if (totalPrice === null) {
  alert("Отменено пользователем!");
} else if (Number(totalPrice) * pricePerDroid <= credits) {
  console.log(
    `Вы купили, ${totalPrice}, дроидов, на счету осталось, ${
      credits - Number(totalPrice) * pricePerDroid
    }, кредитов.`
  );
} else {
  alert("Недостаточно средств на счету!");
}
