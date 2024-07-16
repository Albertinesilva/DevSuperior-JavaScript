// setTimeout funciona de forma assíncrona, ou seja, ele não para a execução do código, ele apenas agendará a execução da função passada como primeiro argumento para o tempo passado como segundo argumento.

function dizerOla() {
  console.log('Olá');
}

//setTimeout(dizerOla, 2000);

function dizerBomDia(nome) {
  console.log("Bom dia, " + nome);
}

setTimeout(() => {
  dizerBomDia("Maria");
  setTimeout(() => {
    dizerBomDia("João");
    setTimeout(() => {
      dizerBomDia("José");
    }, 2000);
  }, 2000);
}, 2000);

console.log("A");
console.log("B");