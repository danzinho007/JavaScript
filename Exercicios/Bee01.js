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

// Bee 1011- Esfera 

// Volume de Esfera
// V = 4/3 * pi * R³ , sendo pi = 3.14159
// Use 4/3.0 
// Exemplo : 3 Volume = 113.097

var A = parseFloat(lines[0])

volume = (4/3.0) * 3.14159 * (A*A*A)
console.log("VOLUME = " + volume.toFixed(3))

// Bee 1012- Área

// Área do Triângulo que tem A por case e C por altura
// Área do Círculo de raio C ( pi = 3.14159 )
// Área do Trapézio que tem A e B por base e C por altura
// ( a + b ) * h / 2
// Área do Quadrado que tem lado B
// Área do Retrângulo que tem lados A e B 

var A = parseFloat(lines[0]).toFixed(1)
var a = parseFloat(A)
var B = parseFloat(lines[1])
var b = parseFloat(B.toFixed(1))
var C = parseFloat(lines[2])
var c = parseFloat(C.toFixed(1))

triangulo = (a * c)/2
circulo = 3.14159 * ( c * c )
trapezio = ( a + b ) * C / 2
quadrado = b * b
retangulo = a * b

console.log("TRIANGULO: " + triangulo.toFixed(3))
console.log("CIRCULO: " + circulo.toFixed(3))
console.log("TRAPEZIO: " + trapezio.toFixed(3))
console.log("QUADRADO: " + quadrado.toFixed(3))
console.log("RETANGULO: " + retangulo.toFixed(3))

// Erro : NaN

// Bee 1013- O Maior
