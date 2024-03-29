// Função de callback

const teste1 = () => {
    console.log('teste1');
}
const teste2 = (callback) => {
    setTimeout (() => {
        console.log('teste2');
        callback()
    }, 1000)
}
const teste3 = () => {
    setTimeout (() => {
    console.log('teste3');
    }, 600)
}
const teste4 = () => {
    setTimeout (() => {
    console.log('teste4')
    }, 300)
}
const funcaoCallBack = () => {
    console.log("SALVOU")
}

teste1()
console.log(1+1)
teste2(funcaoCallBack)
teste3()
console.log(2*2)
teste4()
