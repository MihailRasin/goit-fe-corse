//task_4

class StringBuilder {
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  append(str) {
    const str_1 = `${this._value}${str}`;
    return (this._value = str_1);
  }

  prepend(str) {
    const str_2 = `${str}${this._value}`;
    return (this._value = str_2);
  }

  pad(str) {
    const str_3 = `${str}${this._value}${str}`;
    return (this._value = str_3);
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value);

builder.prepend("^");
console.log(builder.value);

builder.pad("=");
console.log(builder.value);
