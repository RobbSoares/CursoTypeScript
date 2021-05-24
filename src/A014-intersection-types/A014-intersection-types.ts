type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Rob',
  sobrenome: 'Soares',
}

console.log(pessoa);

export { pessoa };
