
//variavel declarada com const não podera ser alterada depois de declarada.
const x = 10

//variavel declarada com o var tem escopo global, vai fazar depois do if
if (x > 0) {
    var a = 100;
    let b = 200;
    const c = 300;
    console.log("Imprimindo dentro do if: ", a, b, c)
    console.log(a)
    console.log(b)
    console.log(c)

}

console.log("Imprimindo fora do if:")
console.log(a)
// console.log(b)
// console.log(c)

//variavel declarada com o let tem escopo local.
console.log("Imprimindo resultado do for:");
for (let i = 0; i < 5; i++) {
    console.log(i)
}