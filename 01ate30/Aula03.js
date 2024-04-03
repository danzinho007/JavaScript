// Comentário em JavaScript 
// Para executar precisa ter a extensão NodeEjec
// Apertar F8
// cálice = acento agurado
// JavaScript usando crase : Shift + acento depois espaço ``

var hora1 = 1
console.log(`Agora são exatamente ${hora1} horas`)
if ( hora1 < 12 ) {
    console.log('Bom dia !')
} else if ( hora1 <= 18 ) {
    console.log('Boa Tarde !')
} else {
    console.log('Boa Noite !')
}

console.log(' ')
var agora = new Date()
var hora2 = agora.getHours()
console.log(`Agora são exatamente ${hora2} horas`)
if ( hora2 < 12 ) {
    console.log('Bom dia !')
} else if ( hora2 <= 18 ) {
    console.log('Boa Tarde !')
} else {
    console.log('Boa Noite !')
}

console.log(' ')
var agora = new Date()
var hora3 = agora.getHours()
var hora4 = agora.getMinutes()
var hora5 = agora.getSeconds()
var hora6 = agora.getMilliseconds()
console.log(`Agora são exatamente ${hora3} horas ${hora4} minutos ${hora5} segundos ${hora6} milisegundos`)
if ( hora2 < 12 ) {
    console.log('Bom dia !')
} else if ( hora2 <= 18 ) {
    console.log('Boa Tarde !')
} else {
    console.log('Boa Noite !')
}