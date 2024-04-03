// Comentário em JavaScript 
/* Comentário em JavaScript */
// Para executar precisa ter a extensão NodeEjec
// Apertar F8
// cálice = acento agurado
// JavaScript usando crase : Shift + acento depois espaço ``

let preco1 = 15.29;
let preco2 = 1.80;
let preco3 = 4.85;
let custo = 0;

if (preco1 <= 18) {
    console.log("Comprei o produto 1");
    custo = custo + preco1;
    // ou : custo += preco1;
} else {
    console.log("Não comprei o produto 1")
}

if (preco2 < 3) {
    if (preco2 >= 1.5){
        console.log("Comprei o produto 2")
        custo = custo + preco2
    } else {
        console.log("Tem algo errado com o produto 2")
    }
}

console.log("Comprei o produto 3")
custo = custo + preco3

console.log("Eu paguei", custo, "reais.")
