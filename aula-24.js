// Nível 1
const idade = 14
console.log(idade) 
// Nível 2
const idade1 = 15
const exibir1 = () => { // Função de seta
    console.log(idade1)
}
exibir1()
// Nível 3
const idade2 = 15
const exibir2 = () => { 
    const idade2 = 22 // Função está declarando algo dentro do seu escopo
    console.log(idade2)
}
exibir2()
// Nível 4
const exibir3 = () => {
    const idade3 = 16
    console.log(idade3)
}
const exibir4 = () => {
    exibir3()
}
exibir4()

/*
Escopo Global 
Quando uma variável é declarada fora de qualquer função, ela é considerada uma variável de escopo global. Isso significa que essa variável pode ser acessada e modificada de qualquer lugar do código, seja dentro de funções, loops ou blocos condicionais.
Escopo Local
Quando uma variável é declarada dentro de uma função, ela é considerada uma variável de escopo local. Isso significa que essa variável só pode ser acessada dentro da função em que foi declarada.
Escopo de Bloco
Com a introdução do let e const no ES6 (ECMAScript 2015), também temos o escopo de bloco. Variáveis declaradas com let e const têm um escopo de bloco, o que significa que elas são acessíveis apenas dentro do bloco em que foram declaradas.   
*/