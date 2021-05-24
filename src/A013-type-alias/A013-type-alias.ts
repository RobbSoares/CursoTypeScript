type Idade = number;
type Pessoa = {
  nome: string,
  sobrenome: string,
  idade: Idade,
  salário: number,
  corPreferida?: string,
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Robson',
  sobrenome: 'Soares',
  salário: 200_000,
  corPreferida: 'Vermelho',
}

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Amarelo'));
console.log(pessoa);

export default 1;
