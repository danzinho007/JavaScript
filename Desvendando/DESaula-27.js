// Função Recursiva

// Fatorial de 0 é 1 
// Fatorial de 1 é 1 = 1
// Fatorial de 2 é 1 x 2 = 2
// Fatorial de 4 é 1 x 2 x 3 x 4 = 24

const fatorial = (valor) => {

    return fatorial(valor)
}
// console.log(fatorial(4)) // Erro : RangeError: Maximum call stack size exceeded

const fatorial1 = (valor1) => {
    if ( valor1 === 0 || valor1 === 1) {
        return 1;
    }
    return valor1 * fatorial1( valor1 - 1 )
}
console.log(fatorial1(0))
console.log(fatorial1(4))
console.log(fatorial1(90))
console.log(fatorial1(170))
console.log(fatorial1(175))

