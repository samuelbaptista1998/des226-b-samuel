let entrada = require("prompt-sync")();

let nota1 = Number(entrada("Nota 01: "));
let nota2 = Number(entrada("Nota 02: "));
let nota3 = Number(entrada("Nota 03: "));

if (
  nota1 < 0 ||
  nota1 > 10 ||
  nota2 < 0 ||
  nota2 > 10 ||
  nota3 < 0 ||
  nota3 > 10
) {
  console.log("ERRO: Digite notas válidas entre 0 e 10 !");
} else {
  let media = (nota1 + nota2 + nota3) / 3;

  if (media >= 7.0) {
    console.log("Aprovado Direto!");
  } else if (media >= 5.0 && media <= 6.9) {
    console.log("Recuperação!");
  } else {
    console.log("Reprovado");
  }
}
console.log("");

entrada("Preciso qualquer tecla para sair.");
