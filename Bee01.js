// Usar sempre isso no começo :

/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift())
var B = parseInt(lines.shift())
Converte a string em número inteiro e remove o primeiro elemento do array e o converte em número

*/
// Bee 1000- Hello World! na Tela

console.log("Hello World!")

// Bee 1001- Ler 2 valores inteiros e mostrar a soma deles na tela

var A = parseInt(lines.shift())
var B = parseInt(lines.shift())

soma = A + B
console.log("X = " + soma)

// Bee 1002- Área do Círculo

var n = 3.14159
var r = parseFloat(lines.shift())

area = n * ( r * 2 )
console.log("A=" + area.toFixed(4))

// Bee 1003- Soma Simples

var A = parseInt(lines.shift())
var B = parseInt(lines.shift())

soma = A + B
console.log("SOMA = " + soma)

// Bee 1004- Produto Simples

var A = parseInt(lines.shift())
var B = parseInt(lines.shift())

prod = A * B
console.log("PROD = " + prod)

// Bee 1005- Média 1

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);

media = ( a * 3.5 + b * 7.5 ) / ( 3.5 + 7.5 )
console.log("MEDIA = " + media.toFixed(5))

// Bee 1006- Média 2

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);
var c = parseFloat(lines[2]);

media = ( a * 2 + b * 3 + c * 5 ) / ( 2 + 3 + 5 )
console.log("MEDIA = " + media.toFixed(1))

// Bee 1007- Diferença

var A = parseInt(lines.shift())
var B = parseInt(lines.shift())
var C = parseInt(lines.shift())
var D = parseInt(lines.shift())

diferenca = A * B - C * D
console.log("DIFERENCA = " + diferenca)

// Bee 1008- Salário 

