export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('Rob', 'Soares', 20, '111.111.111-22');
const pessoa1 = Pessoa.criaPessoa('Maria', 'Soares');

console.log(pessoa);
console.log(pessoa1);
pessoa1.metodoNormal();
console.log(Pessoa.idadePadrao);
