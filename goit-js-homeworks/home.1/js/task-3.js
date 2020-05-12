//task_3

const ADMIN_PASSWORD = "qwerty";

let message = prompt("Please enter a PASSWORD!");

if (message === ADMIN_PASSWORD) {
  alert("Добро пожаловать!");
}

else if (message === null) {
  alert("Отменено пользователем!");
} else {
  alert("Доступ запрещен, неверный пароль!");
}
