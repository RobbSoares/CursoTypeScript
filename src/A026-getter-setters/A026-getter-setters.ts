export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.cpf = _cpf;
  }

  set cpf(cpf: string) {
    console.log('SETTER CHAMADO');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Rob', 'Soares', 20, '111.111.111-22');
pessoa.cpf = '123.456.789-85';
console.log(pessoa.cpf);
