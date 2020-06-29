//task_3

class Storage {
  constructor(arr) {
    this.arr = arr;
  }
  getItems() {
    return this.arr;
  }
  addItem(items) {
    this.arr.push(items);
  }

  removeItem(item) {
    const dell = this.arr.filter((it) => it !== item);
    return dell;
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items);

storage.addItem("Дроид");
console.table(storage);

const dellArr = storage.removeItem("Пролонгер");
console.table(dellArr);
