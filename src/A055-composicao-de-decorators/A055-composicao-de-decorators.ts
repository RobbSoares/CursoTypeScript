interface Constructor {
  new (...args: any[]): any;
}

function inverteNomeECor(param: string, paramTwo: string) {
  // Closure

  return function <T extends Constructor>(target: T): T {
    return class extends target {
      public cor: string;
      public nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(value: string): string {
        return (
          value.split('').reverse().join('') + ' ' + param + ' ' + paramTwo
        );
      }
    };
  };
}

function outroDecorator(param: string) {
  return function (target: Constructor) {
    console.log('sou o outro decorator', param);
    return target;
  };
}

@outroDecorator('O parametro de outro decorator') // 2
@inverteNomeECor('Valor1', 'Valor2') // 1
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

const animal = new Animal('jake', 'amarelo');
console.log(animal);
