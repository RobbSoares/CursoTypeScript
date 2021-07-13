// Sistema de votação

type VotationOption = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];

  constructor(public details: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votation: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votation.push(votation);
  }

  showVotation(): void {
    for (const votation of this.votation) {
      console.log(votation.details);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
      console.log('---\n');
    }
  }
}

const votationOne = new Votation(
  'Qual a sua linguagem de programação favorita',
);

votationOne.addVotationOption({ option: 'Python', numberOfVotes: 0 });
votationOne.addVotationOption({ option: 'JavaScript', numberOfVotes: 0 });
votationOne.addVotationOption({ option: 'TypeScript', numberOfVotes: 0 });
votationOne.vote(1);
votationOne.vote(1);
votationOne.vote(0);
votationOne.vote(2);
votationOne.vote(2);
votationOne.vote(2);

const votationApp = new VotationApp();
votationApp.addVotation(votationOne);

votationApp.showVotation();
