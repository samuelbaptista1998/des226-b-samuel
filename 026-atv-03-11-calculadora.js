const entrada = require("prompt-sync")();

let soma = 0;
let contador = 0;
let numero;

console.log("--- SOMA CONTÍNUA (Digite 0 para parar) ---");

do {
  numero = parseFloat(entrada("Digite um número: "));

  if (numero !== 0 && !isNaN(numero)) {
    soma += numero;
    contador++;
  }
} while (numero !== 0);

console.log(`Total somado: ${soma}`);
console.log(`Quantidade de valores somados: ${contador}`);

entrada("🚨 Pressione ENTER para encerrar o programa 🚨");
