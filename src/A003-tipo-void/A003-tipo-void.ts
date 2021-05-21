function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const person = {
  nome: 'Rob',
  sobrenome: 'Soares',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Rob', 'Luiz');
person.exibirNome();

export { person };
