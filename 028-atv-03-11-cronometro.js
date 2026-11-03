let i = 1;

console.log("⏱️  Cronômetro Iniciado ...⏱️ \n");

const intervalo = setInterval(() => {
  //limpa a linha atual do temrinal e move o cursor para o inicio
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);

  //escreve o numero atual na mesma linha
  process.stdout.write(`Tempo decorrido: ${i} segundo(s)`);

  if (i === 15) {
    clearInterval(intervalo); //para o contador qunado chegar a 10
    console.log("\n\n ⚠️  Tempo limite de 15 segundos atingido!!!⚠️");
  }

  i++;
}, 1000); //1000 milissegundos  = 1 segundos
