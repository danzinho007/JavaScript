// Comentário em JavaScript 
/* Comentário em JavaScript */
// Para executar precisa ter a extensão NodeEjec
// Apertar F8
// cálice = acento agurado
// JavaScript usando crase : Shift + acento depois espaço ``

// Escreval 6x Passo em 3 métodos diferentes !!!

// Estrutura de Repetição sem Teste Lógico : Menos usada
console.log(`Passo a ${1}`)
console.log(`Passo a ${2}`)
console.log(`Passo a ${3}`)
console.log(`Passo a ${4}`)
console.log(`Passo a ${5}`)
console.log(`Passo a ${6}`)

// Estrutura de Repetição com Teste Lógico no Início : Mais usada
var b = 1
while ( b <= 6 ) {
    console.log(`Passo b ${b}`)
    b++ // b++ : b = b + 1
}
// Explicando o código acima :
// Enquanto b <= ( menor ou igual ) que 6
// Faça b + 1

// Estrutura de Repetição com Teste Lógico no Final : 2° Mais usada
var c = 1
do {
    console.log(`Passo c ${c}`)
    c++
} while (c <= 6)
// Explicando o código acima :
// Faça c + 1
// Enquanto c for <= ( menor ou igual ) que 6
