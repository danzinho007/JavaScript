// Array usando o FIND
// Buscar o primeiro objeto


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

const novaPessoa = lista.find(pessoa) => pessoa > 30);

console.log(novaPessoa);


