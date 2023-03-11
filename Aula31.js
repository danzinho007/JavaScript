// Comentário em JavaScript 
/* Comentário em JavaScript */
// Para executar precisa ter a extensão NodeEjec
// Apertar F8
// cálice = acento agurado
// JavaScript usando crase : Shift + acento depois espaço ``

const listaDeNumeros = [34,56,768,8,81,3,6]

// Qual a soma deles ?
// Qual maior e o menor deles ?

let acumulador = 0;

for ( const numero of listaDeNumeros ){
    acumulador += numero;
}
console.log("A soma é", acumulador);

let Maior;
let Menor;

// Percorre cada lista
// Verifica se o número é igual a Undefined
for ( const numero of listaDeNumeros ){
    if ( Menor === undefined ) {
        Menor = numero;
    } else {
        if ( numero < Menor ) {
            Menor = numero;
        }
    }
}
console.log(Menor)
for ( const numero of listaDeNumeros ){
    if ( Maior === undefined ) {
        Maior = numero;
    } else {
        if ( numero > Maior ) {
            Maior = numero;
        }
    }
}
console.log(Maior)
