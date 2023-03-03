// Tenho uma conta no banco com 0 reais, a cada ano ela rende 10% e eu deposíto todo mês 500 reais.Quantos meses demora para chegar em 100.000 ( 100 mil ) ?

const deposito = 500;
const objetivo = 100000;
const rendi = 0.1;
let conta = 0;
let meses = 0;

while (conta < objetivo){
    conta += deposito;
    conta += conta * rendi / 12;
    meses += 1;
}

console.log("Demorou",meses * 30,"dias para chegar a",objetivo)
console.log("Demorou", meses,"meses para chegar a",objetivo);
console.log("Demorou",meses/12,"anos para chegar a",objetivo);
console.log("Demorou",meses/120,"décadas para chegar a",objetivo)
