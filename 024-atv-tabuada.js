const entrada = require("prompt-sync")();

const fatorX = Number(entrada("Digite um numero para ser multiplicado: "));

for (let fatorY = 0; fatorY <= 10; fatorY++) {
  const produto = fatorX * fatorY;
  console.log(`${fatorX} X ${fatorY} = ${produto}`);
}

entrada("Pressione ENTER para encerrar o programa!");
