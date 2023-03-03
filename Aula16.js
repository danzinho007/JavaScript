// Comentário em JavaScript 
/* Comentário em JavaScript */
// Para executar precisa ter a extensão NodeEjec
// Apertar F8
// cálice = acento agurado
// JavaScript usando crase : Shift + acento depois espaço ``

// Divisível por X

function solucao(numero1, numero2) {
    const resto = numero % numero2;
    const resposta = resto === 0;
    console.log(true)
}
function naoMexer(input){
    const numero1 = input.split(' ')[0];
    const numero2 = input.split(' ')[1];
    solucao(numero1, numero2);
}
// let input = require('fs').readFileSync('/dev/stdin','utf-8');
// naoMexer(input);