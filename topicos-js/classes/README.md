# ![DevSuperior logo](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/devsuperior-logo-small.png) Curso Nivelamento JavaScript

> Principais fundamentos de JavaScript para se preparar para trabalhar com frameworks front end

## JavaScript - Classes

Classes em JavaScript são um `syntactic sugar` para funções contrutoras e prototypes.

Isso significa que a classe é apenas uma forma alternativa de se escrever um tipo com propriedades e métodos. Mas internamente a estrutura será a mesma, baseada em prototypes.

![Image](https://raw.githubusercontent.com/devsuperior/curso-nivelamento-javascript/main/img/product.png "Diagrama classe Product")

```javascript
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  total() {
    return this.price * this.quantity;
  }

  add(amount) {
    this.quantity += amount;
  }

  remove(amount) {
    if (this.quantity >= amount) {
      this.quantity -= amount;
    }
  }

  label() {
    return "Dados: " + this.name + ", " + this.price.toFixed(2);
  }
}

const p1 = new Product("Monitor", 800.0, 10);

const p2 = new Product("Mouse", 50.0, 4);
```
