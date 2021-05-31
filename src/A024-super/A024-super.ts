export class Pessoa {
  constructor(
    readonly nome: string,
    readonly sobrenome: string,
    private readonly idade: number,
    protected readonly cpf: string,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  getIdade(): number {
    return this.idade;
  }

  getCPF(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return 'Nome completo do aluno: ' + this.nome + ' ' + this.sobrenome;
  }
}

export class Cliente extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public loja: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('Fazendo algo');
    const result = super.getNomeCompleto();
    return result + 'hey';
  }
}

const pessoa = new Pessoa('Bruno', 'Stovitz', 85, '123.456.789-10');
// console.log(pessoa);
console.log(pessoa.getNomeCompleto());

const aluno = new Aluno('Robson', 'Soares', 20, '521.854.956-85');
// console.log(aluno);
console.log(aluno.getNomeCompleto());

const cliente = new Cliente('Adilson', 'Santos', 40, '121.624.456-22', '002');
// console.log(cliente);
console.log(cliente);
