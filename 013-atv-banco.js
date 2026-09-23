let entrada = require("prompt-sync")();

let usuario1 = "klofis";
let senha1 = "1475369";
let saldo1 = 500.0;

let usuario2 = "nilda";
let senha2 = "1475369";
let saldo2 = 0.0;

let usuario3 = "rean";
let senha3 = "1475369";
let saldo3 = -21.0;

let usOk = false;
let snOk = false;
let acessoPermitido = false;

let usuarioLogado = null;
let saldoUsuarioLogado = null;

console.log("Insira seus dados para acessar o sistema!");

let loginUsuario = entrada("Nome de usuário: ");
let loginSenha = entrada("Senha: ");

// inicio validação usuário - sem operador &
// if (usuario1 == loginUsuario.toLowerCase()) {
//     console.log('Nome de usuário veficado com sucesso!');
//     usOk = true;
//     usuarioLogado = usuario1;
//     saldoUsuarioLogado = saldo1;
// }
// if (usuario2 == loginUsuario.toLowerCase()) {
//     console.log('Nome de usuário veficado com sucesso!');
//     usOk = true;
//     usuarioLogado = usuario2;
//     saldoUsuarioLogado = saldo2;
// }
// if (usuario3 == loginUsuario.toLowerCase()) {
//     console.log('Nome de usuário veficado com sucesso!');
//     usOk = true;
//     usuarioLogado = usuario3;
//     saldoUsuarioLogado = saldo3;
// }

// if (senha1 == loginSenha) {
//     console.log('Senha veficada com sucesso!');
//     snOk = true;
// }
// if (senha2 == loginSenha) {
//     console.log('Senha veficada com sucesso!');
//     snOk = true;
// }
// if (senha3 == loginSenha) {
//     console.log('Senha veficada com sucesso!');
//     snOk = true;
// }
// fim validação de usuário

// início da validação de usuário para evitar repetição quando existirem senhas iguais

if (usuario1 == loginUsuario.toLowerCase() && senha1 == loginSenha) {
  console.log("Nome de usuário veficado com sucesso!");
  usOk = true;
  snOk = true;
  usuarioLogado = usuario1;
  saldoUsuarioLogado = saldo1;
}
if (usuario2 == loginUsuario.toLowerCase() && senha2 == loginSenha) {
  console.log("Nome de usuário veficado com sucesso!");
  usOk = true;
  snOk = true;
  usuarioLogado = usuario2;
  saldoUsuarioLogado = saldo2;
}
if (usuario3 == loginUsuario.toLowerCase() && senha3 == loginSenha) {
  console.log("Nome de usuário veficado com sucesso!");
  usOk = true;
  snOk = true;
  usuarioLogado = usuario3;
  saldoUsuarioLogado = saldo3;
}

// fim da validação de usuário

if (usOk === true) {
  if (snOk === true) {
    acessoPermitido = true;
  }
}

if (!acessoPermitido) {
  console.log("Acesso negado!");
} else {
  console.log(`Acesso permitido para o usuário ${usuarioLogado}`);
  console.log(`Saldo atual R$ ${saldoUsuarioLogado}`);
  console.log("");
  if (saldoUsuarioLogado > 0) {
    let valorSaque = parseInt(entrada("Digite quanto deseja sacar: R$ "));

    let saldoParcial = saldoUsuarioLogado - valorSaque;

    if (saldoParcial < 0) {
      console.log(
        `${usuarioLogado} você tem R$ ${saldoUsuarioLogado} e está tentando sacar R$ ${valorSaque}, seu saldo é insuficiente!`,
      );
      console.log("Operação Não efetivada");
    } else {
      // tratamento notas - 50 - 20 - 10 - 5 - 2
      let controleNotas = valorSaque;
      let calculaNotas = null;
      let cinquenta;
      let vinte;
      let dez;
      let cinco;
      let dois;

      cinquenta = parseInt(controleNotas / 50);
      controleNotas = controleNotas - cinquenta * 50;

      vinte = parseInt(controleNotas / 20);
      controleNotas = controleNotas - vinte * 20;

      dez = parseInt(controleNotas / 10);
      controleNotas = controleNotas - dez * 10;

      cinco = parseInt(controleNotas / 5);
      controleNotas = controleNotas - cinco * 5;

      dois = parseInt(controleNotas / 2);
      controleNotas = controleNotas - dois * 2;

      if (controleNotas === 1) {
        console.log(
          `Não será possível efetuar o saque, pois não temos notas de R$ 1,00.`,
        );
      } else {
        saldoUsuarioLogado = saldoParcial;
        console.log(`Seu novo saldo é R$ ${saldoUsuarioLogado}`);
        console.log(`Notas de R$ 50,00: ${cinquenta}`);
        console.log(`Notas de R$ 20,00: ${vinte}`);
        console.log(`Notas de R$ 10,00: ${dez}`);
        console.log(`Notas de R$ 5,00: ${cinco}`);
        console.log(`Notas de R$ 2,00: ${dois}`);

        console.log("Retire o valor no terminal.");
      }
    }
  } else {
    console.log("Saldo insuficiente para efetuar um saque!");
  }
}

entrada("Pressione enter para finalizar o programa!");
