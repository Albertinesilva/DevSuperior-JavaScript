// REST: valores passados com virgula => array

function sum(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const result1 = Math.max(1, 2, 3, 4, 5, 10, 6, 7, 8, 9);

console.log(result1);

// SPREAD: valores passados sem virgula => array => objeto  (espalha os valores) 

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result2 = Math.max(...myNumbers);

console.log(result2);

// SPREAD: objetos => valores separados por virgula => array

const item = {
  description: "Notebook",
  price: 2499.99,
  quantity: 1
}

const cloneItem = { ...item };
console.log(cloneItem);

const cloneItemPlus = { ...item, weight: 1000 };
console.log(cloneItemPlus);