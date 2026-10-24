let i = 1;

console.log(" 🚀 Iniciando contagem na mesma linha...\n");

const intervalo = setInterval(() => {
  //limpa a linha atual do temrinal e move o cursor para o inicio
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);

  //escreve o numero atual na mesma linha
  process.stdout.write(`Contagem: ${i}`);

  if (i === 10) {
    clearInterval(intervalo); //para o contador qunado chegar a 10
    console.log("\n\n ✅ Fim da contagem!");
  }

  i++;
}, 1000); //1000 milissegundos  = 1 segundos
