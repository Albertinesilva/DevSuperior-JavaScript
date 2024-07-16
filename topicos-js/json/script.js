// Criação de objetos em formato JSON com aspas duplas
const obj1 = {
  "name": "Computador",
  "price": 50.9,
  "due-date": "2025-04-15"
};

// Criação de objetos em formato JSON sem aspas duplas
const obj2 = {
  name: "Computador",
  price: 50.9,
  "due-date": "2025-04-15",
};

const obj3 = {
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

console.log("obj1: ", obj1);
console.log("\nobj2: ", obj2);
console.log("\nobj3: ", obj3);

console.log("\nobj3.date:", obj3.date);
console.log("\nobj3.client.name:", obj3.client.name);

const txt = `{"name": "Computer", "price": 50.9, "due-date": "2025-04-15"}`;

// Converte um texto (string) em JSON
const obj = JSON.parse(txt);

// Exibe o nome do objeto txt
console.log("\ntxt:", txt.name);

console.log("\nobj.name:", obj.name);

// Converte um objeto em JSON para texto (string)
const text = JSON.stringify(obj);
console.log("\ntext:", text);