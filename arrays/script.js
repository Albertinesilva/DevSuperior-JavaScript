// TAMANHO DO ARRAY
// O tamanho de um array é dado pela propriedade length. Ela é sempre um número inteiro e representa a quantidade de elementos presentes no array.
const valores = ["Maria", 37, false, 1.64];
const t1 = valores.length;

console.log("Teste length");
console.log(t1);

// REMOVE ELEMENTOS
// Para remover elementos de um array, podemos utilizar o método pop(). Esse método remove o último elemento do array e retorna o valor removido.
const nomes = ["Maria", "João", "Eduardo", "Gabriel"];
const r1 = nomes.pop();

console.log("\nTeste pop");
console.log("Nome removido do final: ", r1);
console.log(nomes);

console.log("\nTeste shift");
const r2 = nomes.shift();
console.log("Nome removido do início: ", r2);
console.log(nomes);

// INSERIR ELEMENTOS
// Para inserir elementos em um array, podemos utilizar o método push(). Esse método adiciona um ou mais elementos ao final do array e retorna o novo tamanho do array.
const alturas = [1.62, 1.75, 1.68];
alturas.push(1.95);

console.log("\nInsere o elemento no final: Teste push");
console.log(alturas);

alturas.unshift(1.56);
console.log("\nInsere o elemento no início: Teste unshift");
console.log(alturas);

// INSERIR E REMOVER EM QUALQUER POSIÇÃO
// Para inserir ou remover elementos em qualquer posição do array, podemos utilizar os métodos splice() e slice().
const letras = ["a", "b", "c", "d", "e", "f"];
letras.splice(2, 0, "x", "y");  // Insere "x" e "y" na posição 2
console.log("\nTeste splice");  
console.log(letras);

letras.splice(2, 2);  // Remove 2 elementos a partir da posição 2
console.log("\nTeste splice");
console.log(letras);

// CONCATENAR ARRAYS
// Para concatenar arrays, podemos utilizar o método concat(). Esse método retorna um novo array contendo os elementos dos arrays concatenados.
const meninas = ["Maria", "Joana"];
const meninos = ["João", "Eduardo"];

const todos = meninas.concat(meninos);
console.log("\nTeste concat");
console.log(todos);

// ACESSO E ATRIBUIÇÃO DE ELEMENTOS
// Para acessar um elemento de um array, utilizamos a notação de colchetes [] com o índice do elemento desejado.
const idade = [25, 30, 35, 40];
idade[1] = 28;  // Altera o valor do elemento na posição 1

console.log("\nTeste acesso e atribuição");
console.log(idade);

// PERCORRER UM ARRAY
// Podemos percorrer os elementos de um array utilizando um loop for ou for...of.
const frutas = ["banana", "maçã", "laranja", "uva"];

console.log("\nTeste percorrer um array com for");
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// PERCORRER ARRAY COM FOR EACH 
// Podemos percorrer os elementos de um array utilizando o método forEach().

console.log("\nTeste percorrer um array com forEach");
frutas.forEach(item =>{
    console.log(item);
})