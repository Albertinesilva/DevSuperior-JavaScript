const p1 = {
  name: "Computador",
  price: 3000.0,
  quantity: 2
}

const Product = function (name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

Product.prototype.total = function () {
  return this.price * this.quantity;
}

Product.prototype.add = function (amout) {
  this.quantity += amout;
}

Product.prototype.remove = function (amout) {
  if (this.quantity >= amout) {
    this.quantity -= amout;
  }
}

Product.prototype.label = function () {
  return "Dados: " + this.name + ", " + this.price.toFixed(2) + ", " + this.quantity;
}

Product.prototype.toString = function() {
  return `Product(name: ${this.name}, price: ${this.price}, quantity: ${this.quantity})`;
}

const p2 = new Product("Monitor", 800.0, 10)

const p3 = new Product("Mouse", 50.0, 4)
