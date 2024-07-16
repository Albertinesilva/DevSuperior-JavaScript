function f(g, h) {
  setTimeout(() => {
    if (10 > 0) {
      g("P"); // Promise resolvida com o valor "P"
    }
    else {
      h("Q"); // Promise rejeitada com o valor "Q"
    }
  }, 3000);
}

function executarSeResolver(valor) {
  console.log("Resolvida com o valor " + valor);
}

function executarSeRejeitar(valor) {
  console.log("Rejeitada com o valor " + valor);
}

const minhaPromise = new Promise(f);

// minhaPromise.then(executarSeResolver);

// Essa forma é mais comum de se usar promises em JavaScript.
minhaPromise.then(valor => {
  console.log("Resolvida com o valor " + valor);
})

// minhaPromise.catch(executarSeRejeitar);

// Essa forma é mais comum de se usar promises em JavaScript.
minhaPromise.catch(valor => {
  console.log("Rejeitada com o valor " + valor);
})

// Promise de forma encadeada 
const minhaPromiseEncadeada = new Promise(f)
  .then(valor => {
    console.log("Promise encadeada: Resolvida com o valor " + valor);
    return "X";
  })
  .catch(valor => {
    console.log("Promise encadeada: Rejeitada com o valor " + valor);
    return "Y";
  });

// Retornando o valor "X"
minhaPromiseEncadeada.then(result => {
  console.log("Return do resultado da promise:", result); // Aqui o "result" será "X"
});

console.log(minhaPromiseEncadeada); // Promise { <pending> }
