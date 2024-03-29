const pessoa = {
    nome: 'Daniel',
    idade: 36,
    peso: 80,
    genero: 'Masculino',
    nacionalidade: 'Brasileiro',
    filhos: false,
}
const exibir = (pessoa) => {
    console.log('Dados:', pessoa)
}
exibir(pessoa)

const exibir1 = (pessoa) => {
    console.log(`Peso do(a) ${pessoa.nome}:`, pessoa.peso)
}
exibir1(pessoa)

const exibir2 = (pessoa, informe) => {
    console.log(`${informe} do(a) ${pessoa.nome}:`, pessoa(informe))
}
exibir2(pessoa, 'altura')
