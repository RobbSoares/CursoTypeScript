export class Empresa {
  readonly nome: string; // public não necessário
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Positronics extends Empresa {
  constructor() {
    super('Positronics', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa = new Positronics();
const colaborador = new Colaborador('Rob', 'Soares');
const colaborador1 = new Colaborador('Luiz', 'Santana');
const colaborador2 = new Colaborador('João', 'Vieira');
empresa.addColaborador(colaborador);
empresa.addColaborador(colaborador1);
empresa.addColaborador(colaborador2);
console.log(empresa.nome);
empresa.mostrarColaboradores();

const colaboradorRemovido = empresa.popColaborador();
console.log(colaboradorRemovido);
console.log(empresa);
