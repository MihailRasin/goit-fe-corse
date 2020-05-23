//task_2

const countProps = function (obj) {
  const array = Object.keys(obj);
  const arrayLenght = array.length;
  return arrayLenght;
};

console.log(countProps({}));

console.log(countProps({ name: "Mango", age: 2 }));

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
