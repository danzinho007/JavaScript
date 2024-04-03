// Quantos números entre 1 e 1000 ( mil ) são Múltiplos de 17

let numero = 1;
let resposta = 0;

while (numero <= 1000){
    if (numero % 17 === 0 ){
        resposta += 1;
    }
    numero += 1;
}
console.log("A resposta é", resposta)
