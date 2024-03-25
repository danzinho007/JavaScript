const idade = 14
const exibirIdade = () => {
    console.log(idade)
}
exibirIdade()
// O filho consegue acessar os dados do pai
// Filho = const exibirIdade
// Pai = idade

////////////////////////////////////////////////
const idade1 = 15
const exibirIdade1 = () => {
    const idade1 = 23
    console.log(idade1)
}
exibirIdade1()
// Já aqui o filho vai pegar o que está perto dele
// Filho = const exbiirIdade1
// Pai = idade1

////////////////////////////////////////////////
const exibirIdade2 = () => {
    const idade2 = 23
    console.log(idade2)
}
exibirIdade2()
// Já aqui se fizer console.log(idade2) vai dar erro
// Pois o filho não consegue acessar os dados do pai

////////////////////////////////////////////////
const exibirIdade3 = () => {
    const idade3 = 23
    console.log(idade3)
}
const exibirExibirIdade3 = () => {
    exibirIdade3()
//    console.log(idade3) << Erro
}
exibirExibirIdade3()
// Aqui o filho consegue acessar somente os dados acessíveis de outra função chamada