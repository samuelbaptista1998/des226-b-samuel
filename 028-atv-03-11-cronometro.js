let i = 1;

console.log("⏱️  Cronômetro Iniciado ...⏱️ \n");

const intervalo = setInterval(() => {
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);

  process.stdout.write(`Tempo decorrido: ${i} segundo(s)`);

  if (i === 15) {
    clearInterval(intervalo);
    console.log("\n\n ⚠️  Tempo limite de 15 segundos atingido!!!⚠️");
  }

  i++;
}, 1000);
