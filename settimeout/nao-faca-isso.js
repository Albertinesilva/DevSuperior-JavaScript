// Exemplo sincrono de esperar 5 segundos antes de imprimir a letra B

function esperar(ms) {
  const fim = Date.now() + ms;

  while (Date.now() < fim) {

  }
}

console.log("A");
esperar(5000)
console.log("B");
