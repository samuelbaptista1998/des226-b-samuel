let entrada = require("prompt-sync")();

let num1 = Number(entrada("Digite um numero: "));

const regexPar = /^[0-9]*[02468]$/;

if (Number(num1) % 2 == 0) {
  console.log("Esse numero é Par! ");
} else console.log("Esse numero é Impar! ");

if (num1 > 0) {
  console.log("Esse numero é Positivo!");
} else if (num1 < 0) {
  console.log("Esse numero é Negativo!");
} else {
  console.log("Esse numero é Zero!");
}

entrada();
