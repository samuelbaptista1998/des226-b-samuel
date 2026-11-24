let objeto = {}; //objeto vazio

let pessoa = {
  nome: "Samuel ",
  profissao: "Mecanico",
  idade: 28,
  trabalha: true,
}; // objeto com atributos

let funcionario = {
  nome: "Alerrandra",
  cargo: "cordenadora",
  salario: 5021.32,
  endereco: {
    rua: "Brasil",
    numero: 10,
    bairro: "Centro",
    cidade: "Tupã",
  },
};

console.log(`Tipo variavel objeto vazio: ${typeof objeto}`);
console.log(`Tipo variavel objeto vazio: ${typeof pessoa}`);

console.log(pessoa); // visualizar objeto armazenado
console.log(`Nome da pessoa cadastrada: ${pessoa.nome}`); //visualizar atributo do objeto
