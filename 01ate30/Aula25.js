// Comentário em JavaScript 
/* Comentário em JavaScript */
// Para executar precisa ter a extensão NodeEjec
// Apertar F8
// cálice = acento agurado
// JavaScript usando crase : Shift + acento depois espaço ``

let num3 = [5, 8, 2, 9, 3];

// Add value 1 to the end of the array
num3.push(1);

// Print the original array
console.log(`O vetor atual é ${num3}`);

// Shuffle the array
num3.sort(() => Math.random() - 0.5);

// Concatenate the original and shuffled arrays
let concatenated = num3.concat(num3.slice().sort(() => Math.random() - 0.5));

// Print both arrays on the same line
console.log(`O vetor atual é ${num3} e o embaralhado é ${concatenated}`);

