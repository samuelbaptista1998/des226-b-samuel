const entrada = require("prompt-sync")();

const fatorXInicial = Number(
  entrada("Digite um numero inicial do intervalo: "),
);
const fatorXFinal = Number(entrada("Digite um numero final do intervalo: "));

for (let fatorX = fatorXInicial; fatorX <= fatorXFinal; fatorX++) {
  console.log(` TABUADA DO ${fatorX} `);

  for (let fatorY = 1; fatorY <= 10; fatorY++) {
    const produto = fatorX * fatorY;
    console.log(`${fatorX} X ${fatorY} = ${produto}`);
  }

  console.log("");
}

entrada("Pressione ENTER para encerrar o programa!");
