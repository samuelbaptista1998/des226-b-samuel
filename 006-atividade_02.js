let entrada = require("prompt-sync")();

console.log("Qual seu jogo favorito? ");
let jogo = entrada();
console.log("Qual sua nota sobre esse jogo?(0-10) ");
let nota = entrada();
console.log("Você recomenda esse jogo? (sim ou não) ");
let rec = entrada();

//eu controlo o formato
let bilheteria; //variavel undefined
let numPaisesExibidos = null; //variavel null
let notaInt = parseInt(nota, 10); //para mudar a variavel para number
let recBool = rec === "sim" ? true : false; //: igual 'if' ; igual a 'else'

console.log("");
console.log("###########");
console.log("Nome do jogo: " + jogo);
console.log("Nota do jogo: " + nota);
console.log("Recomendação: " + rec);
console.log("Bilheteria: " + typeof bilheteria);
console.log("Número de Paises: " + typeof numPaisesExibidos);
console.log("Nota: " + typeof notaInt);
console.log("Recomendação: " + typeof recBool);

entrada();
////////////////////////////////////////
