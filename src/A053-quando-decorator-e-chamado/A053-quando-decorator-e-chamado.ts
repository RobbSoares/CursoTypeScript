function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('sou o decorator e recebi: ', target);

  return class extends target {
    public cor: string;
    public nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
    }

    inverte(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

@inverteNomeECor
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('eu sou a classe');
  }
}

const animal = new Animal('jake', 'amarelo');
console.log(animal);
