enum Cores {
  VERMELHO = 10, // 0
  AZUL = 100, // 1
  AMARELO = 200, // 2
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

function escolhaCores(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCores(Cores.ROXO);
