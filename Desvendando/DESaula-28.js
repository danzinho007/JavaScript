/* 
Dado um número inteiro não negativo n, escreva uma função recursiva para calcular a soma dos números de 1 até n

Entrada : Número inteiro não negativo n (0 <= n <= 100)
Saída : O valor da soma dos núemros de 1 até n
Exemplo : Entrada Saída
            0       0
            1       1
            4       10
            10      55
*/

const soma = (valor) => {
    if (valor < 0 || valor > 100) {
        throw new Error("Valor inválido, programa será encerrado")
    }
    if (valor === 0){
        return 0
    }
    return valor + soma(valor - 1 )
}
process.stdin.on('data', function(data){
    try {
        console.log("Soma: " + soma(Number(data)))
    } catch (error) {
        console.log(error.message)
        process.stdin.pause()
    }  
})
