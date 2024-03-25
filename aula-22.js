function calcular(){
    console.log('calculando 1')
    console.log(arguments)
}

const calcular2 = function(){
    console.log("calculando 2");
}

const calcular3 = () => {
    console.log("calculando 3")
    return 
}

const calcular4 = () => console.log("calculando 4")

const calcular5 = (funcao) => {
    console.log('calcular 3')
    return funcao()
}
calcular()
calcular2()
calcular3()
calcular4()
calcular5(calcular3)
