// Comentário em JavaScript 
/* Comentário em JavaScript */
// Para executar precisa ter a extensão NodeEjec
// Apertar F8
// cálice = acento agurado
// JavaScript usando crase : Shift + acento depois espaço ``

// if ( condição ){
    // Se 
// }

// while ( condição ){
    // Enquanto
// }

// for ( const elemento of coleção ){
    // Para cada valor
// }

const palavra = "Daniel";
let vogais = 0;

for ( const letra of palavra ){
    console.log(letra);
}
// Quantas vogais tem a palavra Daniel
for ( const letra of palavra ){
    if ( letra === "a"){
        vogais += 1;
    }
    if ( letra === "e"){
        vogais += 1;
    }
    if ( letra === "i"){
        vogais += 1;
    }
    if ( letra === "o"){
        vogais += 1;
    }
    if ( letra === "u"){
        vogais += 1;
    }
}
console.log(vogais)

// Se for Abacate teremos um problema
const palavra1 = "Abacate";
let vogais1 = 0;

for ( const letra of palavra1 ){
    if ( letra === "a"){
        vogais1 += 1;
    }
    if ( letra === "e"){
        vogais1 += 1;
    }
    if ( letra === "i"){
        vogais1 += 1;
    }
    if ( letra === "o"){
        vogais1 += 1;
    }
    if ( letra === "u"){
        vogais1 += 1;
    }
}
console.log(vogais1)
