let entrada = require("prompt-sync")();

let idade = entrada("Qual a sua idade? ");
let acomp = entrada("Você está acompanhado? ");
let acompBool = acomp === "sim" ? true : false;

if (idade > 18) {
  console.log("ENTRADA LIBERADA");
} else {
  console.log("ENTRADA NEGADA");
}

if (acompBool === true) {
  console.log("ENTRADA LIBERADA");
} else {
  console.log("ENTRADA NEGADA");
}

entrada();
