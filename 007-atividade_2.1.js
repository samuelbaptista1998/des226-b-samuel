let entrada = require("prompt-sync")();

const produto = {
  nome: "Teclado Mêcanico",
  preco: 250.0,
  disponivel: true,
  tags: ["eletônicos", "periféricos", "gamer"],
};

console.log("ficha do Produto:", produto);
console.log("Tipo da Variavel Produto: ", typeof produto);
console.log("Tipo do array tags (com typeof): ", typeof produto.tags);

entrada();
