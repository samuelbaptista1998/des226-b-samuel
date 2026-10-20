const entrada = require("prompt-sync")();

console.log("                  *ESCOLHA SEU PRODUTO*");
console.log("1- Suco de Laranja");
console.log("2- Refrigerante Lata");
console.log("3- Água Mineral");
let codigoProduto = entrada("Digite o código do produto: ");
switch (codigoProduto) {
  case "1":
    console.log("Suco de Laranja - R$ 8,00");
    break;
  case "2":
    console.log("Refrigerante Lata - R$ 6,00");
    break;
  case "3":
    console.log("Água Mineral - R$ 4,00");
    break;

  default:
    console.log("Erro: Código de produto inexistente!");
    break;
}
