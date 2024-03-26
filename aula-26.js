// Função Async Awai 

const aguardar = () => {
    console.log("Passo 1 : ", 2 ** 2)
    setTimeout (() => {
        console.log('FIM')
    }, 1000)
    console.log("Passo 2 :" + 3 ** 3 )
    setTimeout (() => {
        console.log('Teste')
    }, 600)
    console.log("Passo 3 :" + 4 ** 4)
    console.log("Passo 4 :" + 5 ** 5 )
}

aguardar()
console.log("Fim 1")

const sleep = async (ms) => {
    return new Promise (resolve => setTimeout (resolve, ms))
}
const aguardar1 = async () => {
    console.log("Passo 1 : ", 2 ** 2)
    await sleep(3000)
    setTimeout (() => {
        console.log('FIM')
    }, 1000)
    console.log("Passo 2 :" + 3 ** 3 )
    setTimeout (() => {
        console.log('Teste')
    }, 600)
    console.log("Passo 3 :" + 4 ** 4)
    console.log("Passo 4 :" + 5 ** 5 )
}

aguardar1()
