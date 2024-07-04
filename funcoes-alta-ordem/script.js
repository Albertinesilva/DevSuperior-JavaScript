const list1 = [1, 2, 3, 4];
const list2 = [];
const nomes = ["MARIA", "JOAO", "ANABELA"];

// ------------------------------------------------------------
// map: aplica uma função a cada elemento da coleção original, retornando uma nova coleção com os elementos alterados

function dodro(x) {
  return x * 2;
}

function triplo(x) {
  return x * 3;
}

console.log("\nFunção map:");
const m1 = list1.map(dodro);
const m2 = list1.map(triplo);
const m3 = list1.map(x => x * 2);

console.log(m1); // [2, 4, 6, 8]
console.log(m2); // [3, 6, 9, 12]
console.log(m3); // [2, 4, 6, 8]

// ------------------------------------------------------------
// filter: retorna uma nova coleção contendo apenas aqueles elementos da coleção original que satisfazem um dado predicado

function par(x) {
  return x % 2 === 0;
}

console.log("\nFunção filter:");
const f1 = list1.filter(par);
const f2 = list1.filter(x => x % 2 === 0);
const f3 = list1.filter(x => x > 2);

console.log(f1); // [2, 4]
console.log(f2); // [2, 4]
console.log(f3); // [3, 4]

// -------------------------------------------------------------
// reduce: aplica cumulativamente uma função aos elementos de uma coleção, retornando o resultado final cumulativo.
// * você pode informar, opcionalmente, um valor inicial como parâmetro (necessário para coleção vazia).

function soma(x, y) {
  return x + y;
}

function produto(x, y) {
  return x * y;
}

console.log("\nFunção reduce:");
const r1 = list1.reduce(soma);
const r2 = list2.reduce(soma, 0);
const r3 = list1.reduce(produto, 1);

console.log(r1);
console.log(r2);
console.log(r3);

// ------------------------------------------------------------
// sort: ordena a coleção conforme a função de comparação informada como parâmetro

// Função de comparação que compara duas strings pelo tamanho
function compararPorTamanho(s1, s2) {
  return s1.length - s2.length;
}

console.log("\nFunção sort:");

// Dessa forma ordena alfabeticamente e altera o array original (não recomendado)
// const s1 = nomes.sort();  // ordena alfabeticamente
// console.log(s1);  // ["ANABELA", "JOAO", "MARIA"]

// const s2 = nomes.sort(compararPorTamanho);  // ordena pelo tamanho
// console.log(s2);  // ["JOAO", "MARIA", "ANABELA"]

// Dessa forma não altera o array original e retorna um novo array ordenado (recomendado)

const s1 = [...nomes].sort();  // ordena alfabeticamente
console.log(s1);  // ["ANABELA", "JOAO", "MARIA"]

const s2 = [...nomes].sort(compararPorTamanho);  // ordena pelo tamanho
console.log(s2);  // ["JOAO", "MARIA", "ANABELA"]

const s3 = [...nomes].sort((x, y) => x.length - y.length);  // ordena pelo tamanho
console.log(s3);  // ["JOAO", "MARIA", "ANABELA"]

// Vetor original não foi alterado (nomes)
console.log("Vetor original:", nomes);  // ["MARIA", "JOAO", "ANABELA"]

// O primeiro elemento é maior que o segundo (retorna > 0)
console.log(compararPorTamanho("ANABELA", "JOAO"));  // 3

// O primeiro elemento é igual ao segundo (retorna 0)
console.log(compararPorTamanho("MARIA", "MARIA"));  // 0

// O primeiro elemento é menor que o segundo (retorna < 0)
console.log(compararPorTamanho("JÓ", "JOAO"));  // -2

