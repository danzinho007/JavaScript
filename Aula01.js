console.log(' ')
console.log('Olá, Mundo!')
console.log(' ')
var vel = 30
console.log('A velocidade do seu carro é de ${vel}Km/h')
// Aspas simples não funciona, precisa ser crase ( shift + acento )
// se usar acento agudo ( ex: cálice ) vai dar erro
console.log(`A velocidade do seu carro é de ${vel}Km/h`)
if (vel > 60) {
    console.log('Você ultrapassou a velocidade permitida, MULTADO!')
}
console.log('Dirija sempre usando cinto de segurança')
console.log(' ')
var país1 = 'Brasil'
console.log(`Vivendo na/no ${país1}`)
if (país1 == 'Brasil') {
    console.log('Você é Brasileiro!')
} else {
    console.log('Você é Estrangeiro')
}
console.log(' ')
console.log('Dirija sempre usando cinto de segurança')
console.log(' ')
var país2 = 'França'
console.log(`Vivendo na/no ${país2}`)
if (país2 != 'Brasil') {
    console.log('Você é Estrangeiro!')
} else {
    console.log('Você é Brasileiro')
}
console.log('')
