let arrayVazio = [];

let listaNumeros = [1, 2, 3, 4]; //numero 1 é a posição 0, numero 2 é a posição 1, etc.....

let listaNumeros2 = [1.3, 2.5, 3, 4.25];

let listaFrutas = ["Morango", "Morango", "Mamão"];

//vizualizar  valor por posição
console.log(listaNumeros[1]); //mostra o numero 2 , porque pedi pra mostrar a posição 1
console.log(`Frutas da lista: ${listaFrutas}`);
console.log(`Frutas da lista: ${listaFrutas[0]}, ${listaFrutas[1]}`);

//passando por todos os valores da lista
for (cont = 0; cont < listaNumeros2.length; cont++) {
  console.log(listaNumeros2[cont]);
}

//exiba a lista de número 1, apresentando os números lado a ladoseparados por -.
//  EX. 1 - 7 - 10;....

let exibeNumeros = "";

for (i = 0; i < listaNumeros.length; i++) {
  exibeNumeros = exibeNumeros + listaNumeros[i];

  if (i < listaNumeros.length - 1) {
    exibeNumeros += " - ";
  }
}

console.log(exibeNumeros);

//jeito simples
console.log(listaNumeros.join(" - "));
