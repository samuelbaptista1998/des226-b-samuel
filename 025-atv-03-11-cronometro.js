const entrada = require("prompt-sync")();

const num = Number(
  entrada("Digite um numero para iniciar a contagem regressiva: "),
);

for (let n = num; n >= 0; n--) {
  console.log(n);
}

console.log("Decolagem autorizada!🚀​");

entrada("🚨  ​Pressione ENTER para encerrar o programa! 🚨​");
