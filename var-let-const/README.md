# ![DevSuperior logo](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/devsuperior-logo-small.png) Curso Nivelamento JavaScript
>  Principais fundamentos de JavaScript para se preparar para trabalhar com frameworks front end

## JavaScript - var / let / const

Palavra chave | Orientação
--- | --- 
var | não recomendado, pois “vaza escopo” em estrutura de controle
let | use quando realmente houver necessidade de alterar a variável
const | prefira valores imutáveis


```javascript
const x = 10;

if (x > 0) {
  var a = 100;
  let b = 200;
  const c = 300;
  console.log("Imprimindo dentro do if:");
  console.log(a);
  console.log(b);
  console.log(c);
}

console.log("Imprimindo fora do if:");
console.log(a);
//console.log(b);
//console.log(c);

console.log("Imprimindo resultado do for: ");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//console.log(i);
```