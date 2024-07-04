const obj = {
  id: 53,
  date: "2021-10-20",
  items: [
    {
      description: "Celular",
      price: 1499.99,
      quantity: 1,
    },
    {
      description: "Mouse",
      price: 100.0,
      quantity: 2,
    },
  ],
  client: {
    name: "Maria Red",
    email: "maria@gmail.com",
    active: true,
  },
};

const { id, client } = obj;

console.log("\nId:", id);
console.log("\nClient:", client);

// function subtotal(item){
//   return item.price * item.quantity;
// }

// console.log(subtotal(obj.items[1]));

// Utilizando a desestruturação
function subtotal({ price, quantity }) {
  return price * quantity;
}

console.log("\nSubtotal de item:", subtotal(obj.items[1]));

// function total({ items }) {
function total({ items }) {
  let soma = 0;
  for (let item of items) {
    soma += subtotal(item);
  }
  return soma;
}

console.log("\nTotal de items:", total(obj));

console.log("\nDesestruturação de array");
const [item1, item2] = obj.items; // Desestruturação de array
console.log(item1);
console.log(item2);