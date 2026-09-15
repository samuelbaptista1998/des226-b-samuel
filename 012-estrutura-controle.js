let entrada = require("prompt-sync")();

let usuario = "klofis";
let senha = "123";
let usOk = false;
let snOk = false;
let acessoPermitido = false;

console.log("Insira seus dados para acessar o sistema! ");

let loginUsuario = entrada("Usuário: ");
let loginSenha = entrada("Senha: ");

if (usuario == loginUsuario.toLowerCase()) {
  console.log("Usuário verificado com sucesso! ");
  usOk = true;
}

if (senha == loginSenha) {
  console.log("Senha verificada com sucesso! ");
  snOk = true;
}

if (usOk === true) {
  if (snOk === true) {
    acessoPermitido = true;
  }
}

if (acessoPermitido === true) {
  console.log("Acesso Permitido! ");
} else {
  console.log("Acesso Negado!");
}

entrada("Pressione enter para sair.");
