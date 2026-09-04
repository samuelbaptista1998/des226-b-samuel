let entrada = require("prompt-sync")();

let nome = entrada("Qual é o seu nome? ");
let cargo = entrada("Qual seu cargo ou função? ");
let dataNasc = entrada("Qual sua data de nascimento? ");

console.log("");
console.log("******************");
console.log("CRACHA DA EMPRESA");
console.log("******************");
console.log("Nome: " + nome);
console.log("Variável:" + typeof nome);
console.log("");
console.log("Cargo/Função: " + cargo);
console.log("Variável:" + typeof cargo);
console.log("");
console.log("Data de Nascimento: " + dataNasc);
console.log("Variável:" + typeof dataNasc);
console.log("*******************");

entrada();

//////////////////////////////////////
