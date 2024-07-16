console.log("Um string literal pode ficar entre aspas duplas")
console.log('Um String literal pode ficar entre aspas simples')
console.log(`Um string literal pode ficar entre crases`)

console.log("Concatenação e interpolação:")
const num = 14.5;
console.log("O Valor do produto é " + num);
console.log('O valor do produto é', num);
console.log(`O Valor do produto é ${num}`);

console.log("Conversão entre number e string:");

const str1 = num.toString();
console.log(`Tipo de dado: ${str1}: ${typeof str1}`);

const str2 = num.toFixed(2);
console.log(`Tipo de dado: ${str2} : ${typeof str2}`);

const num1 = Number("14.5")
console.log(`Tipo de dado: ${num1} : ${typeof num1}`);

const num2 = parseFloat(str2).toFixed(2);
console.log(`Tipo de dado: ${num2} : ${typeof num2}`)

const number3 = parseInt("21")
console.log(`Tipo de dado: ${number3} : ${typeof number3}`)

//Na base hexadecimal o número 21 é igual a 33 em decimal
const num4 = parseInt("21", 16)
console.log(`Tipo de dado: ${num4} : ${typeof num4}`);

const num5 = parseFloat("21.34")
console.log(`Tipo de dado: ${num5} : ${typeof num5}`);