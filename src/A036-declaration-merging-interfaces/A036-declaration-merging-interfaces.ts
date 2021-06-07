interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
}

interface Pessoa {
  readonly idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Rob',
  sobrenome: 'Soares',
  enderecos: ['Av Edmilson Rodrigues'],
};

console.log(pessoa);
