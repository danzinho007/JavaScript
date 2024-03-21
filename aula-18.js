//ver aula 15
process.stdin.setEncoding('utf8');

let maior = '';
let resultado = [];

function contar(valor){
    let retorno = '';
    const Enter = valor.replace('\n', '');
    const split = Enter.split(' ');

    for(let i = 0; i< split.length; i++){
        if (i === 0 ){
            retorno = `${split[i].length}`
        } else {
            retorno = `${retorno} - ${split[i].length}`
        }

        if (split[i].length >= maior.length){
            maior = split[i];
        }
    }
    return retorno
}

process.stdin.on('data', function(data){
    if(data === 0){
        for(let i = 0; i <= resultado.length; i++){
            console.log(resultado[i])
        }
        console.log(`The biggest world: ${maior}`)

        process.stdin.pause();
    }
    resultado.push(contar(data));
    console.log(contar(data));
})
