let entrada = require("prompt-sync")();

<<<<<<< HEAD
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

=======
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

>>>>>>> 5d436b08f7ec01b52f3e15f343da1568ad2c2803
entrada();
