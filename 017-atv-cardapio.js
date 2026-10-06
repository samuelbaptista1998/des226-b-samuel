let entrada = require("prompt-sync")();

console.log("                  *ESCOLHA SEU PRODUTO*");
let codigoProduto = entrada(
  " (ex:Suco de Laranja , Refrigerante Lata ou Agua Mineral): ",
);

switch (codigoProduto) {
  case "SL":
    console.log("Suco de Laranja - R$ 8,00");
    break;
  case "RL":
    console.log("Refrigerante Lata - R$ 6,00");
    break;
  case "AM":
    console.log("Água Mineral - R$ 4,00");
    break;

  default:
    console.log("Erro: Código de produto inexistente!");
    break;
}
