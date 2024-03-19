// Usar sempre isso no começo :

/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift())
var B = parseInt(lines.shift())
Converte a string em número inteiro e remove o primeiro elemento do array e o converte em número

*/
// Bee 1000- Escrever Hello World! na tela 

console.log("Hello World!")

// Bee 1001- Ler 2 valores inteiros e mostrar a soma deles na tela

var A = parseInt(lines.shift())
var B = parseInt(lines.shift())

soma = A + B
console.log("X = " + soma)

// Bee 1002- Ler o valor de um raio flutuante e mostrar a área da circunferência

var n = 3.14159
var r = parseFloat(lines.shift())

area = n * ( r * 2 )
console.log("A=" + area.toFixed(4))

// Bee 1003- 
