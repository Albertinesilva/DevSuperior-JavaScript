class Product {

  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  total() {
    return this.price * this.quantity;
  }

  add(amout) {
    this.quantity += amout;
  }

  remove(amout) {
    if (this.quantity >= amout) {
      this.quantity -= amout;
    }
  }

  label() {
    return "Dados: " + this.name + " - " + this.price.toFixed(2) + " - " + this.quantity;
  }
}

const p1 = new Product("Monitor", 800.0, 10);

const p2 = new Product("Mouse", 50.0, 4);