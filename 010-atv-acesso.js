let entrada = require("prompt-sync")();

let hoje = new Date();
let nome = entrada("Digite seu nome: ");
let matricula = entrada("Digite sua Matricula: ");
let disciplina = [
  "Banco de Dados",
  "Sistemas Embarcados",
  "Lógica e Algoritimos",
];

let acesso = (nome) => {
  return `Olá, ${nome}! Seja bem-vindo ao laboratorio!`;
};
console.log(acesso(nome));
console.log("Entrada Registrada " + hoje);
console.log("");
console.log(typeof)
