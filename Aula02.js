// Comentário em JavaScript 
// Para executar precisa ter a extensão NodeEjec
// Apertar F8
// cálice = acento agurado
// JavaScript usando crase : Shift + acento depois espaço ``

console.log(' ')
console.log('Caso maior que 18')
console.log('Como não especificou 18 ou mais não aparece nada')
var idade1 = 18
console.log(`Você tem ${idade1} anos.`)
if (idade1 < 16) { // Menor que 16 ( 15, 14, 13, etc )
    console.log('Não vota')
} else {
    if (idade1 < 18) { // Menor que 18 e maior que 16 ( 17 anos )
    console.log('Voto opcional')
    }
}

// Ou

console.log(' ')
console.log('Caso 16 anos')
var idade2 = 16
console.log(`Você tem ${idade2} anos.`)
if (idade2 < 16) {
    console.log('Não vota')
} else if (idade2 < 18) {
    console.log('Voto opcional')
}

console.log(' ')
console.log('Caso 15 anos')
var idade3 = 15
console.log(`Você tem ${idade3} anos.`)
if (idade3 < 16) {
    console.log('Não vota')
} else if (idade3 < 18) {
    console.log('Voto opcional')
}

console.log(' ')
console.log('Caso 3 especificanfo 18 anos ou mais ')
var idade4 = 18
console.log(`Você tem ${idade4} anos.`)
if (idade4 < 16) {
    console.log('Não vota')
} else if (idade4 < 18) {
    console.log('Voto opcional')
} else if (idade4 >= 18){
    console.log('Voto obrigatório')
}

console.log('')
console.log('Forma resumida')
var idade5 = 18
console.log(`Você tem ${idade5} anos.`)
if (idade5 < 16) {
    console.log('Não vota')
} else if (idade5 < 18) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}

console.log('')
console.log('Forma mais detalhada')
var idade6 = 66
console.log(`Você tem ${idade6} anos.`)
if (idade6 < 16) {
    console.log('Não vota')
} else if (idade6 < 18 || idade6 > 65 ) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}
