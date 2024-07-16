function soma1(num1, num2) {
  return num1 + num2;
}

const soma2 = function (num1, num2) {
  return num1 + num2;
}

const soma3 = (num1, num2) => {
  return num1 + num2;
}

const soma4 = (num1, num2) => num1 + num2;

const dobro1 = function (num) {
  return num * 2;
};

const dobro2 = num => num * 2;

// Função que não tem retorno definido, por padrão ela retorna undefined 

function mostraPreco(preco) {
  console.log(`O preço é R$ ${preco}`);
}

// Variaveis definidas dentro do escopo da função não vazam escopo para fora da função 

function areaCirculo(raio) {
  const pi = 3.14;
  return pi * raio * raio;
}

// Function hoisting: funções no JS são "movidas" para o topo do código, então podemos chamar a função antes de sua declaração

teste(10);

function teste(x) {
  console.log("Teste: " + x);
}

// Funções podem ser passadas como argumentos para outras funções

function triplo(num) {
  return num * 3;
}

function aplicar(funcao, num) {
  const resultado = funcao(num);
  console.log("\nResultado:", resultado);
}

aplicar(triplo, 10);
aplicar(dobro1, 10);

function dividir(num1, num2) {
  console.log("\nResultado da divisão:", num1 / num2);
}

dividir(triplo(10), 2);