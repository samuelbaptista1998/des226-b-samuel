let entrada = require("prompt-sync")();

let usuario1 = "samuel";
let senha1 = "181020";
let saldo1 = -100;

let usuario2 = "marco";
let senha2 = "271015";
let saldo2 = 0;

let usuario3 = "jayane";
let senha3 = "156075";
let saldo3 = 500;

let acessoPermitido = false;
let saldoAtual = 0;

console.log("Insira seus dados para acessar o caixa! ");

let loginUsuario = entrada("Usuário: ").toLowerCase();
let loginSenha = entrada("Senha: ");

if (loginUsuario === usuario1 && loginSenha === senha1) {
  acessoPermitido = true;
  saldoAtual = saldo1;
} else if (loginUsuario === usuario2 && loginSenha === senha2) {
  acessoPermitido = true;
  saldoAtual = saldo2;
} else if (loginUsuario === usuario3 && loginSenha === senha3) {
  acessoPermitido = true;
  saldoAtual = saldo3;
}

if (acessoPermitido) {
  console.log("Usuário e senha verificados com sucesso!");
  console.log("Acesso Permitido!");
  console.log(`Seu saldo atual é: R$ ${saldoAtual}`);
  console.log();

  let saque = entrada("Quanto deseja sacar?");
  if (saque) {
  }

  //abaixo disso somente se o usuario e senha for errados.
} else {
  console.log("Acesso Negado! Usuário ou senha incorretos.");
}

entrada("Pressione Enter para sair");
