// * Record
const object: Record<string, string | number> = {
  name: 'Rob',
  surname: 'Soares',
  age: 5,
};

console.log(object);

type PersonProtocol = {
  name?: string;
  surname?: string;
  age?: number;
};

// * Required
type PersonRequired = Required<PersonProtocol>;

// * Partial
type PersonPartial = Partial<PersonRequired>;

// * Readonly
type PersonReadonly = Readonly<PersonRequired>;

// * Pick
type PersonPick = Pick<PersonRequired, 'name' | 'surname'>;

const object2: PersonPartial = {
  name: 'Rob',
  surname: 'Soares',
  age: 5,
};

console.log(object2);

// * Extract e Exclude

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type TypeExclude = Exclude<ABC, CDE>;
type TypeExtract = Extract<ABC, CDE>;

// *
type AccountMongo = {
  _id: string;
  name: string;
  age: number;
};

type AccountAPI = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'f78sad6f6adf786s7as6f8',
  name: 'Rob',
  age: 20,
};

function mapAccount(accountMongo: AccountMongo): AccountAPI {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountAPI = mapAccount(accountMongo);
console.log(accountAPI);

// Module mode
export default 1;
