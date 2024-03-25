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

var A = parseInt(lines.shift()); // Número do funcionário
var B = parseInt(lines.shift()); // Número de horas
var C = parseFloat(lines[0]); // Valor da hora

salario = B *  C;
console.log("NUMBER = " + A);
console.log("SALARY = U$ " + salario.toFixed(2));

// Bee 1009- Salário com Bônus

var A = lines.shift();// Nome do Vendedor
var B = parseFloat(lines[0]); // Salário Fixo
var C = parseFloat(lines[1]);// Total de vendas

// Vendedor ganhar 15% de comissão sobre Total de vendas
salario = ( C * 0.15 ) + B;
console.log("TOTAL = R$ " + salario.toFixed(2));

// Bee 1010- Cálculo Simples 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var values1 = lines[0].split(' ').map(value => parseFloat(value));
var values2 = lines[1].split(' ').map(value => parseFloat(value));

var valor = (values1[1] * values1[2]) + (values2[1] * values2[2]);

console.log("VALOR A PAGAR: R$ " + valor.toFixed(2));

// ou 

var A = parseInt(lines.shift()); // código da peça 1
var B = parseInt(lines.shift()); // número de peças 1 
var C = parseFloat(lines.shift); // valor unitário peça 1
var D = parseInt(lines.shift()); // código da peça 2
var E = parseInt(lines.shift()); // número de peças 2 
var F = parseFloat(lines.shift); // valor unitário peça 2

valor = ( B * C ) + ( E * F );
console.log("VALOR A PAGAR: R$" + valor.toFixed(2));

// ou 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines[0]); // código da peça 1
var B = parseInt(lines[1]); // número de peças 1 
var C = parseFloat(lines[2]); // valor unitário peça 1
var D = parseInt(lines[3]); // código da peça 2
var E = parseInt(lines[4]); // número de peças 2 
var F = parseFloat(lines[5]); // valor unitário peça 2

var valor = (B * C) + (E * F);

console.log("VALOR A PAGAR: R$ " + valor.toFixed(2));
