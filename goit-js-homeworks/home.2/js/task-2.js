//task_2

const calculateEngravingPrice = function (message, pricePerWord) {
  let strokeLength = message.split(" ");
  let howMutchWord = strokeLength.length;
  let cost = howMutchWord * pricePerWord;
  return cost;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
);
