// Exceção : Try, Catch e Finally

function calcular (valor){
    if ( valor === 0 ){
        throw new Error("Não pode ser 0")
    }
    return valor / 2
}

// Tentando valores na função calcular (valor)

try {
    const resultado = calcular(654)
    console.log('resultado:', resultado)
} catch ( error) {
    console.log(error.message)
}
try {
    const resultado = calcular(0)
    console.log('resultado:', resultado)
} catch ( error) {
    console.log(error.message)
} finally {
    console.log("Chegou no Finally")
}
