// Array com várias informações e eu quero filtrar dados

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

const listaFiltrada = lista.filter((pessoa) => pessoa.idade > 20);
console.log(lista)
console.log(listraFiltrada)
