// Comentário em JavaScript 
/* Comentário em JavaScript */
// Para executar precisa ter a extensão NodeEjec
// Apertar F8
// cálice = acento agurado
// JavaScript usando crase : Shift + acento depois espaço ``

let num = []
console.log(num)
console.log(`Nosso vetor é o ${num}`)
console.log('')

let num1 = [5,8,2,9,3]
console.log(num1)
console.log(`Nosso vetor é o ${num1}`)
console.log('')
console.log('')
console.log('')
console.log('')
console.log('')

let num2 = [5,8,4]
num[3]=6
// Isso acima coloca o 6 na posição 3
num.push(7)
// Isso acima ( Método Interno ) coloca o 7 na última posição 
num.length
// Isso acima ( Atributo ) mostra quantos elementos tem no Array
num.sort
// Isso acima ( Método Interno ) pega todos os elementos e coloca em ordem
console.log(num2)
console.log(`1 Nosso vetor é ${num2}`)

console.log(`2 O elemento da 2° posição é ${num2[1]}`)
console.log(num2[1])

console.log(`3 Nosso vetor tem ${num2.length} posições`)
console.log(`4 Nosso vetor ordenado é ${num2.sort()}`)
console.log('')
console.log('')
console.log('')
console.log('')

num3 = [5,8,2,9,3]
num3.push(1)
console.log(`O vetor atual é ${num3}`)
console.log(`O primeiro valor é ${num3[0]}`)
num3.sort()
num3.push(0)

console.log(`Colocando em ordem temos ${num3}`)
console.log(`O primeiro valor do vetor é ${num3[0]}`)
