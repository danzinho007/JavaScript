// Comentário em JavaScript 
/* Comentário em JavaScript */
// Para executar precisa ter a extensão NodeEjec
// Apertar F8
// cálice = acento agurado
// JavaScript usando crase : Shift + acento depois espaço ``

// Strings
// https://learnjavascript.online/app.html

// A propriedade .length é usada para retornar o comprimento da string.
"Nice!".length; // Tamanho 5
var text = "Hellow World";
text.length; // Tamanho 11

function contagem(str) {
    return str.length;
}

console.log(contagem("Hello World"));
console.log(contagem("Olá Mundo"));

// .toLowerCase = Isso retornará uma nova string que possui todos os seus caracteres em letras minúsculas:
"BLUE".toLowerCase(); // "blue";
// .toUpperCase = Isso retornará uma nova string que possui todos os seus caracteres em maiúsculas:
"red".toUpperCase(); // "RED";

function menor(name) {
    return name.toLowerCase();
}

console.log(menor("MENOR"));
console.log(menor("CaixA"));

function maior(name) {
    return name.toUpperCase();
}

console.log(maior("maior"));
console.log(maior("cAIXa"));
