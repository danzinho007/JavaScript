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

// Passar um arrary de resposta e uma chave : Record<,>

const pesssoas = lista.reduce((acc, objeto) => {
    return {
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
})
console.log(pessoas);
console.log(pessoas.Gustavo.idade);
