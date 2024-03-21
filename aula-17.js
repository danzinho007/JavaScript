const mensagem = 'Daniel' // String
const msg1 = "Daniel "
const msg2 = " Rocha "

// Tamanho da string
console.log(mensagem.length)
console.log(msg1.length)

// Juntar 2 mensagens :
console.log(mensagem.concat(msg2)) // Mais lento
console.log(mensagem + msg2) // Mais rápido
console.log('ES:', `Rocha ${mensagem} ${msg2}`)

// Transformar tudo pra maiúsculo ou minúsculo
console.log(mensagem.toUpperCase())
console.log(mensagem.toLowerCase())

// Substituir algo
console.log(mensagem.replace('Daniel', 'Raquel'))
console.log(mensagem.replace('n', 'l'))

// Quebrar em array
console.log(mensagem.substring(3)) // A partir da 3° letra mostra as letras restantes
console.log(mensagem.substring(3, 2)) // Pegando a 3° letra
console.log(mensagem.split('n')) // Remove o n da string e mostra os array
