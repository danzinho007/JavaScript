// Este código irá criar uma interface readline para a entrada de usuário no terminal do Node.js. O método rl.question solicita que o usuário digite um valor e recebe a entrada do usuário como um parâmetro de retorno de chamada. Em seguida, você pode armazenar a entrada do usuário em uma variável e usá-la no seu código.

// Neste exemplo, a entrada do usuário é armazenada na variável respostaDoUsuario e é impressa no console com a função console.log(). Finalmente, a função rl.close() é chamada para encerrar a interface readline e sair do programa.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um valor: ', (respostaDoUsuario) => {
  console.log(`Você digitou: ${respostaDoUsuario}`);
  rl.close();
});
