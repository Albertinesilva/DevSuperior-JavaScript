const str = "Maria Silva  "

console.log(`const str = "Maria Silva   "`)

const resultado = str.toLowerCase()
console.log(resultado)

console.log(`toLowerCase: ${str.toLowerCase()}`);
console.log(`toUpperCase: ${str.toUpperCase()}`);

console.log(`charAt: ${str.charAt(3)}`);
console.log(`charAt: ${str[2]}`);

console.log(`replace: ${str.replace("i", "$")}`);
console.log(`replace: ${str.replace(/i/g, "$")}`);

console.log(`length: ${str.length}`);

console.log(`indexOf: ${str.indexOf("i")}`);
console.log(`lastIndexOf: ${str.lastIndexOf("i")}`);

console.log(`substring: ${str.substring(3)}`)
console.log(`substring: ${str.substring(3, 8)}`)

const data = "14/10/2021";

//Pega o mês 
const mes = data.substring(3, 5);
console.log(`mes: ${mes}`);
console.log(`mes: ${typeof mes}`);

//Transforma em número e tira os zeros à esquerda
const mes2 = Number(data.substring(3, 5));
console.log(`mes2: ${mes2}`);
console.log(`mes2: ${typeof mes2}`);

const valor = 200.99;

//Transforma em string e troca o ponto por vírgula
const novoValor = valor.toString().replace(".", ",");
console.log(`novoValor: ${novoValor}`);

//Tira espaços em branco do início e do fim
console.log(`trim: ${str.trim()}`);

