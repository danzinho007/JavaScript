// Comentário em JavaScript 
/* Comentário em JavaScript */
// Para executar precisa ter a extensão NodeEjec
// Apertar F8
// cálice = acento agurado
// JavaScript usando crase : Shift + acento depois espaço ``

let valores = [8,1,7,4,2,9]

console.log(valores)

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
// for ( inicialização, teste lógico, incremento )
// Começando com 0 e indo até o tamanho do vetor, acrescente +1 e escreve na tela algo
console.log(``)
console.log(``)
console.log(``)
console.log(``)

for ( let pos in valores ){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
// for (índice in nome da variável composta )
// Para cada Posição na Variável Composta irei mostrar algo
console.log(``)
console.log(``)

valores.sort()
console.log(`Ordenando os valores do vetor : ${valores}`)
let posicao = valores.indexOf(8)
console.log(`Para o JavaScript o valor 8 está na posição ${posicao}`)
console.log(`O valor 8 está na posição ${posicao + 1}`)
// JavaScript, tem o valor 8 dentro do Vetor ?

let posicao1 = valores.indexOf(5)
console.log(`O valor 5 está está na posição ${posicao1}`)
console.log(`-1 pois não existe esse valor no Vetor`)
console.log(``)
console.log(``)

console.log(`Tem o valor 8 no Vetor ?`)
if ( posicao == -1 ){
    console.log(`O valor não foi encontrado no vetor!`)
} else {
    console.log(`O valor está na posição ${posicao}`)
}
