// Condicionais : if - else com && e ||
// Menores de 18 = Paga meia
// 18 e 60 = Adulto ( meia apenas com carteirinha )
// Mais de 60 = Paga Meia

// MEIA = Menor OU idosa OU ( Adulta E tiver carteirinha )
// INTEIRA = Resto

const idade = 20;
const Carteirinha = false;
const Adulta = idade >= 18 && idade <= 60;

if ( idade < 18 || idade > 60 || (Adulta && Carteirinha === true )){
    console.log("MEIA")
} else {
    console.log("INTEIRA")
}