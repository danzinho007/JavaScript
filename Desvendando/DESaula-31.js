
const lista = [
    {
        nome: 'Raquel',
        idade: 18
    },
    {
        nome: 'João',
        idade: 40
    },
    {
        nome: 'Aline',
        idade: 15
    },
    {
        nome: 'Gustavo',
        idade: 60
    },
    {
        nome: 'Pedro',
        idade: 12
    },
]

let soma = 0;
const somaIdade = (objeto) => {
    soma += objeto.idade
}
lista.forEach(somaIdade);
