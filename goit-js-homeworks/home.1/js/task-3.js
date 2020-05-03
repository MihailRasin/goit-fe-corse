//task_3

const ADMIN_PASSWORD = "qwerty";

let message = prompt("Please enter a PASSWORD!");

if (message === ADMIN_PASSWORD) {
  alert("Добро пожаловать!");
}

if (message === null) {
  alert("Отменено пользователем!");
} else if (message !== ADMIN_PASSWORD) {
  alert("Доступ запрещен, неверный пароль!");
}
