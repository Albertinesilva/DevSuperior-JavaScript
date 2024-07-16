const item1 = document.querySelector("li");

console.log(item1);
console.log(item1.innerHTML);
console.log(item1.outerHTML);

const item2 = document.querySelectorAll("li");

console.log(item2);

const card1 = document.querySelector(".card");

console.log(card1);

const paragrafo = document.createElement("p");
paragrafo.innerHTML = "Descricao";
card1.appendChild(paragrafo);

card1.classList.add("super-border");

// METODOS ANTIGOS 
const metodosAntigos = document.getElementsByClassName("card");
console.log(metodosAntigos);

// METODOS NOVOS
const metodosNovos = document.querySelectorAll(".card");
console.log(metodosNovos);

// CONVERTENDO HTMLCOLLECTION PARA ARRAY 
Array.from(metodosAntigos).map(item => {
  console.log(item);
})

// CONVERTENDO HTMLCOLLECTION PARA ARRAY E PEGANDO O INNERHTML COM O CONTEUDO DA TAG 
Array.from(metodosAntigos).map(item => {
  console.log(item.innerHTML);
})

// UTILIZANDO DATASET PARA PEGAR O ATRIBUTO DATA-* 
const dataset = document.querySelector('[data-product-id="32"]');

console.log(dataset);