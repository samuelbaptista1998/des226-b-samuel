let entrada = require("prompt-sync")();

let num = entrada("Digite um numero: ");

const regexPar = /[02468]$/;

console.log("");

if (regexPar.test(num)) {
  console.log("Esse numero é Par!");
} else {
  console.log("Esse numero é Impar!");
}

console.log("");

if (num > 0) {
  console.log("Numero Positivo!");
} else if (num < 0) {
  console.log("Numero Negativo!");
} else {
  console.log("Numero 0!");
}
console.log("");

entrada();
