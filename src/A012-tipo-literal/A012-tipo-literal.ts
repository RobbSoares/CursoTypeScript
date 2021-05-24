let p = 10; // eslint-disable-line
p = 0b1010;

const y = 10;
let a = 100 as const; // eslint-disable-line

const person = {
  nome: 'Rob' as const,
  sobrenome: 'Soares',
}

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Amarelo'));

// Module mode
export default 1;
