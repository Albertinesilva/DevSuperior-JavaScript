# ![DevSuperior logo](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/devsuperior-logo-small.png) Curso Nivelamento JavaScript

> Principais fundamentos de JavaScript para se preparar para trabalhar com frameworks front end

## JavaScript - Módulos

### Visão geral

Módulos são nativos no ES6+

São importantes para dividir o código de um projeto em módulos/componentes reaproveitáveis.

Facilita a manutenção e o encapsulamento do código.

### Detalhes

Apenas recursos (funções, objetos, valores) exportados podem ser importados em outro módulo.

Exportações podem ser explícitas (named exports), ou padrão (apenas uma exportação por módulo).

Exportações padrão podem ser renomeadas quando forem importadas.

### Mais detalhes

Módulos são `strict mode` por padrão.

- Variáveis não "vazam escopo" global
- Várias ações "sensíveis" são proibidas
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Strict_mode

Dentro do módulo, `this` é `undefined` e não uma referência para `window`. Membros criados "soltos" não pertencem a `window`.

Boa prática: para componentes, use a exportação padrão. Use named exports apenas em casos em que se aplique, tais como bibliotecas e utilitários.

É possível ver o carregamento dos módulos na aba Network do navegador. O carregamento é assíncrono, mas a ordem de execução é mantida.
