interface PersonProtocol<T = string, U = number> {
  name: T;
  surname: T;
  age: U;
}

type PersonProtocol2<T = string, U = number> = {
  name: T;
  surname: T;
  age: U;
};

const aluno1: PersonProtocol<string, number> = {
  name: 'Rob',
  surname: 'Soares',
  age: 20,
};

const aluno2: PersonProtocol<number, number> = {
  name: 11,
  surname: 5,
  age: 20,
};

const aluno3: PersonProtocol2 = {
  name: 'a',
  surname: 'soares',
  age: 20,
};

console.log(aluno1, aluno2, aluno3);
