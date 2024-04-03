// Condicionais : if - else com &&
// Menores de 18 = Paga meia
// 18 e 60 = Adulto ( meia apenas com carteirinha )
// Mais de 60 = Paga Meia

const idade = 55;
const Carteirinha = true;
const Adulta = idade >= 18 && idade <= 60;
// ou : const Adulta = ( idade >= 18 ) && ( idade <= 60 );

if ( Adulta && Carteirinha === false ){
    console.log("Inteira")
} else {
    console.log("MEIA")
}
