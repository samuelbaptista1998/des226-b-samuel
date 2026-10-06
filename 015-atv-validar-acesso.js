let entrada = require("prompt-sync")();

let idade = Number(entrada("Qual sua idade? "));
let acompanhado =
  entrada("Você esta acompanhado? (sim/não) ").toLowerCase() === "sim";
let bloqueado =
  entrada("Você esta de suspensão? (sim/não) ").toLowerCase() === "sim";

console.log("############");

if (bloqueado) {
  console.log("ACESSO BLOQUEADO! ");
} else if (idade >= 18 || acompanhado) {
  console.log("ACESSO LIBERADO! ");
} else {
  console.log("ACESSO NEGADO! ");
}
entrada();
