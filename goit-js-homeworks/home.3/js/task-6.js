// task-6

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  let total = 0;
  for (const ar of arr) {
    const value = Object.values(ar);
    const findVal = value.includes(prop);
    if (findVal === true) {
      total = Number(ar.price) * Number(ar.quantity);
    }
  }
  return total;
};

console.log(getAllPropValues(products, "Радар"));

console.log(getAllPropValues(products, "Сканер"));
