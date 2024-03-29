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

console.log(lista)

const converter = (objeto) => {
    return {
        Nome: objeto.nome,
        Idade: objeto.idade,
        NomeIdade: `${objeto.nome} = ${objeto.idade}`
    }
}

console.log(lista.map(converter))
