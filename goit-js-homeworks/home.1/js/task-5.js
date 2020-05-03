// task-5

let InputCountry = prompt("В какую страну необходима доставка товара");

let cost;

if (InputCountry === null) {
  alert("Отменено пользователем!");
} else {
  switch (InputCountry.toUpperCase()) {
    case "КИТАЙ":
      cost = 100;
      break;

    case "ЧИЛИ":
      cost = 250;
      break;

    case "АВСТРАЛИЯ":
      cost = 170;
      break;

    case "ИНДИЯ":
      cost = 80;
      break;

    case "ЯМАЙКА":
      cost = 120;
      break;

    default:
      alert("В вашей стране доставка не доступнаe");
  }
  if (cost === undefined) {
    alert("стоимость не определена");
  } else {
    alert(
      `Доставка в ${InputCountry.toUpperCase()} будет стоить ${cost} кредитов`
    );
  }
}
